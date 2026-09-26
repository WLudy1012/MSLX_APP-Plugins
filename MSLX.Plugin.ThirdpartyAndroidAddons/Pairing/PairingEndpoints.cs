using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using MSLX.SDK.Models;

namespace MSLX.Plugin.ThirdpartyAndroidAddons.Pairing;

/// <summary>
/// 配对 API：规范前缀由插件入口传入，自动经过 Daemon 的 AuthMiddleware。
/// - GET  /config              读取已保存的 Daemon 地址和当前权限
/// - PUT  /config              保存 Daemon 地址（admin）
/// - POST /codes               按当前用户权限生成一次性配对码
/// - POST /redeem              兑换配对码（AllowAnonymous + 签名/时效/一次性/IP 限速）
/// - GET  /devices             已配对设备列表（admin，脱敏）
/// - POST /devices/{id}/revoke  撤销设备（admin，删除配对用户使 Key 立即失效）
/// </summary>
public static class PairingEndpoints
{
    private static readonly JsonSerializerOptions ResponseJson = new()
    {
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
    };

    private static readonly JsonSerializerOptions RequestJson = new()
    {
        PropertyNameCaseInsensitive = true,
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
    };

    public static void Map(IEndpointRouteBuilder endpoints, PairingService service, string prefix)
    {
        var group = endpoints.MapGroup(prefix);

        group.MapGet("/config", async (HttpContext ctx) =>
        {
            var user = GetCurrentUser(ctx);
            if (user == null)
            {
                await WriteAsync(ctx, 401, "用户不存在或登录已过期");
                return;
            }

            await WriteAsync(ctx, 200, "ok", service.GetConfig(IsAdmin(user)).Data);
        }).RequireAuthorization();

        group.MapPut("/config", async (HttpContext ctx) =>
        {
            var request = await ReadBodyAsync<DaemonAddressRequest>(ctx);
            if (request == null)
            {
                await WriteAsync(ctx, 400, "请求体不合法");
                return;
            }

            var result = service.SetPublicUrl(request.PublicUrl);
            await WriteAsync(ctx, result.Code, result.Message, result.Data);
        }).RequireAuthorization(new AuthorizeAttribute { Roles = "admin" });

        group.MapPost("/codes", async (HttpContext ctx) =>
        {
            var request = await ReadBodyAsync<CreateCodeRequest>(ctx) ?? new CreateCodeRequest();
            var user = GetCurrentUser(ctx);
            if (user == null)
            {
                await WriteAsync(ctx, 401, "用户不存在或登录已过期");
                return;
            }

            var (code, message, data) = service.CreateCode(request, user);
            await WriteAsync(ctx, code, message, data);
        }).RequireAuthorization();

        group.MapPost("/redeem", async (HttpContext ctx) =>
        {
            var request = await ReadBodyAsync<RedeemRequest>(ctx);
            if (request == null)
            {
                await WriteAsync(ctx, 400, "请求体不合法");
                return;
            }
            var clientIp = ctx.Connection.RemoteIpAddress?.ToString() ?? "unknown";
            var (code, message, data) = service.Redeem(request, clientIp);
            await WriteAsync(ctx, code, message, data);
        }).AllowAnonymous();

        group.MapGet("/devices", async (HttpContext ctx) =>
        {
            var (code, message, data) = service.ListDevices();
            await WriteAsync(ctx, code, message, data);
        }).RequireAuthorization(new AuthorizeAttribute { Roles = "admin" });

        group.MapPost("/devices/{deviceId}/revoke", async (HttpContext ctx) =>
        {
            var deviceId = (string?)ctx.Request.RouteValues["deviceId"] ?? string.Empty;
            var (code, message, data) = service.Revoke(deviceId);
            await WriteAsync(ctx, code, message, data);
        }).RequireAuthorization(new AuthorizeAttribute { Roles = "admin" });
    }

    private static UserInfo? GetCurrentUser(HttpContext ctx)
    {
        var userId = ctx.User?.FindFirst("UserId")?.Value;
        return string.IsNullOrWhiteSpace(userId)
            ? null
            : global::MSLX.SDK.MSLX.Config.Users.GetUserById(userId);
    }

    private static bool IsAdmin(UserInfo user) =>
        string.Equals(user.Role, "admin", StringComparison.OrdinalIgnoreCase);

    private static async Task<T?> ReadBodyAsync<T>(HttpContext ctx) where T : class
    {
        try
        {
            using var reader = new StreamReader(ctx.Request.Body);
            var json = await reader.ReadToEndAsync();
            if (string.IsNullOrWhiteSpace(json)) return null;
            return JsonSerializer.Deserialize<T>(json, RequestJson);
        }
        catch
        {
            return null;
        }
    }

    private static async Task WriteAsync(HttpContext ctx, int code, string message, object? data = null)
    {
        ctx.Response.StatusCode = code is >= 200 and < 600 ? code : 500;
        ctx.Response.ContentType = "application/json; charset=utf-8";
        var body = JsonSerializer.Serialize(new { code, message, data }, ResponseJson);
        await ctx.Response.WriteAsync(body);
    }
}
