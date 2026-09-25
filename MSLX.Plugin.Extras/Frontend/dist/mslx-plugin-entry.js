(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".extras-card{background:var(--td-bg-color-container);border:1px solid var(--td-component-border);border-radius:16px;box-shadow:0 1px 2px #00000008}.extras-title{color:var(--td-text-color-primary)}.extras-muted{color:var(--td-text-color-secondary)}.extras-placeholder{color:var(--td-text-color-placeholder)}@keyframes t-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.t-icon{display:inline-block;vertical-align:middle;width:1em;height:1em}.t-icon:before{font-family:unset}.t-icon-loading{animation:t-spin 1s linear infinite}.t-icon.t-size-s,i.t-size-s{font-size:14px}.t-icon.t-size-m,i.t-size-m{font-size:16px}.t-icon.t-size-l,i.t-size-l{font-size:18px}.extras-qr-col[data-v-86d4bcdb]{width:100%}.extras-qr-box[data-v-86d4bcdb]{display:flex;width:240px;height:240px;background:#fff}.extras-qr-mask[data-v-86d4bcdb]{position:absolute;inset:0;background:#000000b3;color:#fff}.extras-expired[data-v-86d4bcdb]{color:var(--td-error-color)}@media(min-width:768px){.extras-qr-col[data-v-86d4bcdb]{width:280px}}.absolute[data-v-86d4bcdb]{position:absolute}.relative[data-v-86d4bcdb]{position:relative}.m-0[data-v-86d4bcdb]{margin:0}.min-w-0[data-v-86d4bcdb]{min-width:0}.w-full[data-v-86d4bcdb]{width:100%}.flex[data-v-86d4bcdb]{display:flex}.flex-1[data-v-86d4bcdb]{flex:1 1 0%}.shrink-0[data-v-86d4bcdb]{flex-shrink:0}.flex-col[data-v-86d4bcdb]{flex-direction:column}.items-center[data-v-86d4bcdb]{align-items:center}.self-start[data-v-86d4bcdb]{align-self:flex-start}.justify-center[data-v-86d4bcdb]{justify-content:center}.gap-2[data-v-86d4bcdb]{gap:.5rem}.gap-3[data-v-86d4bcdb]{gap:.75rem}.gap-4[data-v-86d4bcdb]{gap:1rem}.gap-5[data-v-86d4bcdb]{gap:1.25rem}.gap-6[data-v-86d4bcdb]{gap:1.5rem}.overflow-hidden[data-v-86d4bcdb]{overflow:hidden}.p-5[data-v-86d4bcdb]{padding:1.25rem}.px-6[data-v-86d4bcdb]{padding-left:1.5rem;padding-right:1.5rem}.text-center[data-v-86d4bcdb]{text-align:center}.text-base[data-v-86d4bcdb]{font-size:1rem;line-height:1.5rem}.text-sm[data-v-86d4bcdb]{font-size:.875rem;line-height:1.25rem}.text-xs[data-v-86d4bcdb]{font-size:.75rem;line-height:1rem}.font-bold[data-v-86d4bcdb]{font-weight:700}.tracking-widest[data-v-86d4bcdb]{letter-spacing:.1em}.font-mono[data-v-86d4bcdb]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}@media(min-width:768px){.md\\:flex-row[data-v-86d4bcdb]{flex-direction:row}}.fixed[data-v-35143171]{position:fixed}.m-0[data-v-35143171]{margin:0}.flex[data-v-35143171]{display:flex}.flex-col[data-v-35143171]{flex-direction:column}.flex-wrap[data-v-35143171]{flex-wrap:wrap}.items-center[data-v-35143171]{align-items:center}.justify-between[data-v-35143171]{justify-content:space-between}.gap-2[data-v-35143171]{gap:.5rem}.gap-4[data-v-35143171]{gap:1rem}.p-5[data-v-35143171]{padding:1.25rem}.text-base[data-v-35143171]{font-size:1rem;line-height:1.5rem}.text-sm[data-v-35143171]{font-size:.875rem;line-height:1.25rem}.font-bold[data-v-35143171]{font-weight:700}@unocss;.extras-page[data-v-d7a1be8f]{color:var(--td-text-color-primary);padding-bottom:8px}.extras-fade-enter-active[data-v-d7a1be8f],.extras-fade-leave-active[data-v-d7a1be8f]{transition:opacity .2s ease,transform .2s ease}.extras-fade-enter-from[data-v-d7a1be8f],.extras-fade-leave-to[data-v-d7a1be8f]{opacity:0;transform:translateY(10px)}.m-0[data-v-d7a1be8f]{margin:0}.flex[data-v-d7a1be8f]{display:flex}.flex-col[data-v-d7a1be8f]{flex-direction:column}.transform[data-v-d7a1be8f]{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.items-center[data-v-d7a1be8f]{align-items:center}.self-start[data-v-d7a1be8f]{align-self:flex-start}.justify-between[data-v-d7a1be8f]{justify-content:space-between}.gap-1[data-v-d7a1be8f]{gap:.25rem}.gap-2[data-v-d7a1be8f]{gap:.5rem}.gap-5[data-v-d7a1be8f]{gap:1.25rem}.p-5[data-v-d7a1be8f]{padding:1.25rem}.text-lg[data-v-d7a1be8f]{font-size:1.125rem;line-height:1.75rem}.text-sm[data-v-d7a1be8f]{font-size:.875rem;line-height:1.25rem}.font-bold[data-v-d7a1be8f]{font-weight:700}.transition[data-v-d7a1be8f]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease[data-v-d7a1be8f]{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media(min-width:1280px){.xl\\:flex-row[data-v-d7a1be8f]{flex-direction:row}.xl\\:items-center[data-v-d7a1be8f]{align-items:center}.xl\\:self-auto[data-v-d7a1be8f]{align-self:auto}}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function pe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var j, q;
function ye() {
  return q || (q = 1, j = Vue), j;
}
var t = ye();
function R(e) {
  "@babel/helpers - typeof";
  return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
    return typeof s;
  } : function(s) {
    return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
  }, R(e);
}
function ke(e, s) {
  if (R(e) != "object" || !e) return e;
  var l = e[Symbol.toPrimitive];
  if (l !== void 0) {
    var a = l.call(e, s);
    if (R(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (s === "string" ? String : Number)(e);
}
function we(e) {
  var s = ke(e, "string");
  return R(s) == "symbol" ? s : s + "";
}
function D(e, s, l) {
  return (s = we(s)) in e ? Object.defineProperty(e, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = l, e;
}
function K(e, s) {
  var l = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    s && (a = a.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), l.push.apply(l, a);
  }
  return l;
}
function G(e) {
  for (var s = 1; s < arguments.length; s++) {
    var l = arguments[s] != null ? arguments[s] : {};
    s % 2 ? K(Object(l), !0).forEach(function(a) {
      D(e, a, l[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : K(Object(l)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(l, a));
    });
  }
  return e;
}
var X = (e) => {
  var s = ["clipRule", "fillRule", "maskType", "strokeLinecap", "strokeWidth"];
  return s.includes(e) ? e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase() : e;
}, be = (e, s) => {
  var l = e.split(".")[1], a = /^overlapMask(Id|Url)_(.+)$/.exec(l);
  if (a) {
    var c = "".concat(s.overlapMaskPrefix, "-overlap-").concat(a[2]);
    return a[1] === "Url" ? "url(#".concat(c, ")") : c;
  }
  return s[l];
}, se = (e, s) => {
  var l = {};
  if (e.attrs)
    for (var [a, c] of Object.entries(e.attrs))
      typeof c == "string" && c.startsWith("props.") ? l[X(a)] = be(c, s) : l[X(a)] = c;
  e.tag === "svg" && (l.class = s.class, l.style = s.style, l.onClick = s.onClick);
  var d = e.children ? e.children.map((i) => se(i, s)) : [];
  return t.h(e.tag, l, d);
}, L = (e, s) => {
  var l = "t-icon-".concat(s.iconId, "-instance-").concat(s.overlapMaskInstanceId);
  return se(e, G(G({}, s), {}, {
    overlapMaskPrefix: l
  }));
}, Ee = "t", Me = {
  classPrefix: Ee
};
function xe() {
  var {
    classPrefix: e
  } = Me;
  return {
    SIZE: {
      default: "",
      xs: "".concat(e, "-size-xs"),
      small: "".concat(e, "-size-s"),
      medium: "".concat(e, "-size-m"),
      large: "".concat(e, "-size-l"),
      xl: "".concat(e, "-size-xl"),
      block: "".concat(e, "-size-full-width")
    },
    STATUS: {
      loading: "".concat(e, "-is-loading"),
      disabled: "".concat(e, "-is-disabled"),
      focused: "".concat(e, "-is-focused"),
      success: "".concat(e, "-is-success"),
      error: "".concat(e, "-is-error"),
      warning: "".concat(e, "-is-warning"),
      selected: "".concat(e, "-is-selected"),
      active: "".concat(e, "-is-active"),
      checked: "".concat(e, "-is-checked"),
      current: "".concat(e, "-is-current"),
      hidden: "".concat(e, "-is-hidden"),
      visible: "".concat(e, "-is-visible"),
      expanded: "".concat(e, "-is-expanded"),
      indeterminate: "".concat(e, "-is-indeterminate")
    }
  };
}
function T(e) {
  var s = xe().SIZE, l = t.computed(() => e.value in s ? s[e.value] : ""), a = t.computed(() => e.value === void 0 || e.value in s ? {} : {
    fontSize: e.value
  });
  return {
    style: a,
    className: l
  };
}
function Y(e, s) {
  var l = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    s && (a = a.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), l.push.apply(l, a);
  }
  return l;
}
function J(e) {
  for (var s = 1; s < arguments.length; s++) {
    var l = arguments[s] != null ? arguments[s] : {};
    s % 2 ? Y(Object(l), !0).forEach(function(a) {
      D(e, a, l[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : Y(Object(l)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(l, a));
    });
  }
  return e;
}
var _e = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "defs",
    attrs: {},
    children: [{
      tag: "mask",
      attrs: {
        id: "props.overlapMaskId_fill1",
        maskUnits: "userSpaceOnUse",
        maskContentUnits: "userSpaceOnUse",
        "mask-type": "luminance",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      },
      children: [{
        tag: "rect",
        attrs: {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          fill: "#fff"
        }
      }, {
        tag: "path",
        attrs: {
          stroke: "#000",
          d: "M10 10H21V21H10V10Z",
          strokeLinecap: "square",
          strokeWidth: "props.strokeWidth",
          fill: "none"
        }
      }]
    }]
  }, {
    tag: "g",
    attrs: {
      id: "copy"
    },
    children: [{
      tag: "path",
      attrs: {
        id: "fill1",
        fill: "props.fillColor1",
        d: "M10 10H21V21H10z",
        mask: "props.overlapMaskUrl_fill1"
      }
    }, {
      tag: "path",
      attrs: {
        id: "stroke1",
        stroke: "props.strokeColor1",
        d: "M10 10H21V21H10V10Z",
        strokeLinecap: "square",
        strokeWidth: "props.strokeWidth"
      }
    }, {
      tag: "path",
      attrs: {
        id: "stroke2",
        stroke: "props.strokeColor2",
        d: "M14 6.5V3L3 3L3 14H6.5",
        strokeLinecap: "square",
        strokeWidth: "props.strokeWidth"
      }
    }]
  }]
}, Pe = t.defineComponent({
  name: "CopyIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(e, s) {
    var l, a, {
      attrs: c
    } = s, d = t.useId, i = d ? d() : "".concat((l = (a = t.getCurrentInstance()) === null || a === void 0 ? void 0 : a.uid) !== null && l !== void 0 ? l : "unknown"), r = i.replace(/[^a-zA-Z0-9_]/g, ""), o = t.computed(() => e.size), n = t.computed(() => e.strokeColor ? Array.isArray(e.strokeColor) ? e.strokeColor[0] : e.strokeColor : "currentColor"), u = t.computed(() => {
      var m;
      return e.strokeColor ? Array.isArray(e.strokeColor) ? (m = e.strokeColor[1]) !== null && m !== void 0 ? m : e.strokeColor[0] : e.strokeColor : "currentColor";
    }), f = t.computed(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "transparent"), v = t.computed(() => {
      var m;
      return e.fillColor ? Array.isArray(e.fillColor) ? (m = e.fillColor[1]) !== null && m !== void 0 ? m : e.fillColor[0] : e.fillColor : "transparent";
    }), h = t.computed(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "currentColor"), {
      className: g,
      style: C
    } = T(o), k = t.computed(() => ["t-icon", "t-icon-copy", g.value]), y = t.computed(() => J(J({
      fill: "none"
    }, C.value), c.style)), b = t.computed(() => ({
      class: k.value,
      style: y.value,
      onClick: (m) => {
        var p;
        return (p = e.onClick) === null || p === void 0 ? void 0 : p.call(e, {
          e: m
        });
      },
      strokeColor1: n.value,
      strokeColor2: u.value,
      fillColor1: f.value,
      fillColor2: v.value,
      strokeWidth: e.strokeWidth || 2,
      filledColor: h.value,
      iconId: "copy",
      overlapMaskInstanceId: r
    }));
    return () => L(_e, b.value);
  }
});
function ee(e, s) {
  var l = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    s && (a = a.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), l.push.apply(l, a);
  }
  return l;
}
function te(e) {
  for (var s = 1; s < arguments.length; s++) {
    var l = arguments[s] != null ? arguments[s] : {};
    s % 2 ? ee(Object(l), !0).forEach(function(a) {
      D(e, a, l[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : ee(Object(l)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(l, a));
    });
  }
  return e;
}
var Ne = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "defs",
    attrs: {},
    children: [{
      tag: "mask",
      attrs: {
        id: "props.overlapMaskId_fill1",
        maskUnits: "userSpaceOnUse",
        maskContentUnits: "userSpaceOnUse",
        "mask-type": "luminance",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      },
      children: [{
        tag: "rect",
        attrs: {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          fill: "#fff"
        }
      }, {
        tag: "g",
        attrs: {},
        children: [{
          tag: "path",
          attrs: {
            stroke: "#000",
            d: "M3 14H10V21H3V14Z M3 3H10V10H3V3Z M14 3H21V10H14V3Z M6.5 6.5H6.50391V6.50391H6.5V6.5Z M6.5 17.5H6.50391V17.5039H6.5V17.5Z M17.5 6.5H17.5039V6.50391H17.5V6.5Z",
            strokeWidth: "props.strokeWidth",
            fill: "none"
          }
        }]
      }]
    }]
  }, {
    tag: "g",
    attrs: {
      id: "qrcode"
    },
    children: [{
      tag: "g",
      attrs: {
        id: "fill1",
        mask: "props.overlapMaskUrl_fill1"
      },
      children: [{
        tag: "path",
        attrs: {
          fill: "props.fillColor1",
          d: "M3 14H10V21H3V14Z"
        }
      }, {
        tag: "path",
        attrs: {
          fill: "props.fillColor1",
          d: "M3 3H10V10H3V3Z"
        }
      }, {
        tag: "path",
        attrs: {
          fill: "props.fillColor1",
          d: "M14 3H21V10H14V3Z"
        }
      }]
    }, {
      tag: "g",
      attrs: {
        id: "stroke1"
      },
      children: [{
        tag: "path",
        attrs: {
          stroke: "props.strokeColor1",
          d: "M3 14H10V21H3V14Z M3 3H10V10H3V3Z M14 3H21V10H14V3Z M6.5 6.5H6.50391V6.50391H6.5V6.5Z M6.5 17.5H6.50391V17.5039H6.5V17.5Z M17.5 6.5H17.5039V6.50391H17.5V6.5Z",
          strokeWidth: "props.strokeWidth"
        }
      }]
    }, {
      tag: "g",
      attrs: {
        id: "stroke2"
      },
      children: [{
        tag: "path",
        attrs: {
          stroke: "props.strokeColor2",
          d: "M13.9961 13.9961H14V14H13.9961V13.9961Z M16.9961 16.9961H17V17H16.9961V16.9961Z M18.9961 18.9961H19V19H18.9961V18.9961Z M20.9961 13.9961H21V14H20.9961V13.9961Z M20.9961 20.9961H21V21H20.9961V20.9961Z M13.9961 20.9961H14V21H13.9961V20.9961Z",
          strokeWidth: "props.strokeWidth"
        }
      }]
    }]
  }]
}, ue = t.defineComponent({
  name: "QrcodeIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(e, s) {
    var l, a, {
      attrs: c
    } = s, d = t.useId, i = d ? d() : "".concat((l = (a = t.getCurrentInstance()) === null || a === void 0 ? void 0 : a.uid) !== null && l !== void 0 ? l : "unknown"), r = i.replace(/[^a-zA-Z0-9_]/g, ""), o = t.computed(() => e.size), n = t.computed(() => e.strokeColor ? Array.isArray(e.strokeColor) ? e.strokeColor[0] : e.strokeColor : "currentColor"), u = t.computed(() => {
      var m;
      return e.strokeColor ? Array.isArray(e.strokeColor) ? (m = e.strokeColor[1]) !== null && m !== void 0 ? m : e.strokeColor[0] : e.strokeColor : "currentColor";
    }), f = t.computed(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "transparent"), v = t.computed(() => {
      var m;
      return e.fillColor ? Array.isArray(e.fillColor) ? (m = e.fillColor[1]) !== null && m !== void 0 ? m : e.fillColor[0] : e.fillColor : "transparent";
    }), h = t.computed(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "currentColor"), {
      className: g,
      style: C
    } = T(o), k = t.computed(() => ["t-icon", "t-icon-qrcode", g.value]), y = t.computed(() => te(te({
      fill: "none"
    }, C.value), c.style)), b = t.computed(() => ({
      class: k.value,
      style: y.value,
      onClick: (m) => {
        var p;
        return (p = e.onClick) === null || p === void 0 ? void 0 : p.call(e, {
          e: m
        });
      },
      strokeColor1: n.value,
      strokeColor2: u.value,
      fillColor1: f.value,
      fillColor2: v.value,
      strokeWidth: e.strokeWidth || 2,
      filledColor: h.value,
      iconId: "qrcode",
      overlapMaskInstanceId: r
    }));
    return () => L(Ne, b.value);
  }
});
function re(e, s) {
  var l = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    s && (a = a.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), l.push.apply(l, a);
  }
  return l;
}
function oe(e) {
  for (var s = 1; s < arguments.length; s++) {
    var l = arguments[s] != null ? arguments[s] : {};
    s % 2 ? re(Object(l), !0).forEach(function(a) {
      D(e, a, l[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : re(Object(l)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(l, a));
    });
  }
  return e;
}
var Se = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "g",
    attrs: {
      id: "refresh"
    },
    children: [{
      tag: "path",
      attrs: {
        id: "stroke1",
        stroke: "props.strokeColor1",
        d: "M21.448 13C20.9483 17.7767 16.909 21.5 12 21.5C8.18227 21.5 4.89052 19.248 3.38065 16M2.5 20.5V15.5H5.5M2.55176 11C3.05145 6.22334 7.09079 2.5 11.9998 2.5C15.8175 2.5 19.1092 4.75197 20.6191 8M21.4998 3.5V8.5H18.4998",
        strokeLinecap: "square",
        strokeWidth: "props.strokeWidth"
      }
    }]
  }]
}, ce = t.defineComponent({
  name: "RefreshIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(e, s) {
    var l, a, {
      attrs: c
    } = s, d = t.useId, i = d ? d() : "".concat((l = (a = t.getCurrentInstance()) === null || a === void 0 ? void 0 : a.uid) !== null && l !== void 0 ? l : "unknown"), r = i.replace(/[^a-zA-Z0-9_]/g, ""), o = t.computed(() => e.size), n = t.computed(() => e.strokeColor ? Array.isArray(e.strokeColor) ? e.strokeColor[0] : e.strokeColor : "currentColor"), u = t.computed(() => {
      var m;
      return e.strokeColor ? Array.isArray(e.strokeColor) ? (m = e.strokeColor[1]) !== null && m !== void 0 ? m : e.strokeColor[0] : e.strokeColor : "currentColor";
    }), f = t.computed(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "transparent"), v = t.computed(() => {
      var m;
      return e.fillColor ? Array.isArray(e.fillColor) ? (m = e.fillColor[1]) !== null && m !== void 0 ? m : e.fillColor[0] : e.fillColor : "transparent";
    }), h = t.computed(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "currentColor"), {
      className: g,
      style: C
    } = T(o), k = t.computed(() => ["t-icon", "t-icon-refresh", g.value]), y = t.computed(() => oe(oe({
      fill: "none"
    }, C.value), c.style)), b = t.computed(() => ({
      class: k.value,
      style: y.value,
      onClick: (m) => {
        var p;
        return (p = e.onClick) === null || p === void 0 ? void 0 : p.call(e, {
          e: m
        });
      },
      strokeColor1: n.value,
      strokeColor2: u.value,
      fillColor1: f.value,
      fillColor2: v.value,
      strokeWidth: e.strokeWidth || 2,
      filledColor: h.value,
      iconId: "refresh",
      overlapMaskInstanceId: r
    }));
    return () => L(Se, b.value);
  }
});
function ae(e, s) {
  var l = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    s && (a = a.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), l.push.apply(l, a);
  }
  return l;
}
function ne(e) {
  for (var s = 1; s < arguments.length; s++) {
    var l = arguments[s] != null ? arguments[s] : {};
    s % 2 ? ae(Object(l), !0).forEach(function(a) {
      D(e, a, l[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : ae(Object(l)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(l, a));
    });
  }
  return e;
}
var Ae = {
  tag: "svg",
  attrs: {
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "defs",
    attrs: {},
    children: [{
      tag: "mask",
      attrs: {
        id: "props.overlapMaskId_fill1",
        maskUnits: "userSpaceOnUse",
        maskContentUnits: "userSpaceOnUse",
        "mask-type": "luminance",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      },
      children: [{
        tag: "rect",
        attrs: {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          fill: "#fff"
        }
      }, {
        tag: "g",
        attrs: {},
        children: [{
          tag: "path",
          attrs: {
            stroke: "#000",
            d: "M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z M5 19C5 16.7909 6.79086 15 9 15H15C17.2091 15 19 16.7909 19 19V21H5V19Z",
            strokeLinecap: "square",
            strokeWidth: "props.strokeWidth",
            fill: "none"
          }
        }]
      }]
    }]
  }, {
    tag: "g",
    attrs: {
      id: "usergroup"
    },
    children: [{
      tag: "g",
      attrs: {
        id: "fill1",
        mask: "props.overlapMaskUrl_fill1"
      },
      children: [{
        tag: "path",
        attrs: {
          fill: "props.fillColor1",
          d: "M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z"
        }
      }, {
        tag: "path",
        attrs: {
          fill: "props.fillColor1",
          d: "M5 19C5 16.7909 6.79086 15 9 15H15C17.2091 15 19 16.7909 19 19V21H5V19Z"
        }
      }]
    }, {
      tag: "g",
      attrs: {
        id: "stroke1"
      },
      children: [{
        tag: "path",
        attrs: {
          stroke: "props.strokeColor1",
          d: "M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z M5 19C5 16.7909 6.79086 15 9 15H15C17.2091 15 19 16.7909 19 19V21H5V19Z",
          strokeLinecap: "square",
          strokeWidth: "props.strokeWidth"
        }
      }]
    }, {
      tag: "path",
      attrs: {
        id: "stroke2",
        stroke: "props.strokeColor2",
        d: "M7 4C4.79086 4 3 5.79086 3 8C3 10.2091 4.79086 12 7 12C3.68629 12 1 14.6863 1 18V21M23 21V18C23 14.6863 20.3137 12 17 12C19.2091 12 21 10.2091 21 8C21 5.79086 19.2091 4 17 4",
        strokeLinecap: "square",
        strokeWidth: "props.strokeWidth"
      }
    }]
  }]
}, Ve = t.defineComponent({
  name: "UsergroupIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(e, s) {
    var l, a, {
      attrs: c
    } = s, d = t.useId, i = d ? d() : "".concat((l = (a = t.getCurrentInstance()) === null || a === void 0 ? void 0 : a.uid) !== null && l !== void 0 ? l : "unknown"), r = i.replace(/[^a-zA-Z0-9_]/g, ""), o = t.computed(() => e.size), n = t.computed(() => e.strokeColor ? Array.isArray(e.strokeColor) ? e.strokeColor[0] : e.strokeColor : "currentColor"), u = t.computed(() => {
      var m;
      return e.strokeColor ? Array.isArray(e.strokeColor) ? (m = e.strokeColor[1]) !== null && m !== void 0 ? m : e.strokeColor[0] : e.strokeColor : "currentColor";
    }), f = t.computed(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "transparent"), v = t.computed(() => {
      var m;
      return e.fillColor ? Array.isArray(e.fillColor) ? (m = e.fillColor[1]) !== null && m !== void 0 ? m : e.fillColor[0] : e.fillColor : "transparent";
    }), h = t.computed(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "currentColor"), {
      className: g,
      style: C
    } = T(o), k = t.computed(() => ["t-icon", "t-icon-usergroup", g.value]), y = t.computed(() => ne(ne({
      fill: "none"
    }, C.value), c.style)), b = t.computed(() => ({
      class: k.value,
      style: y.value,
      onClick: (m) => {
        var p;
        return (p = e.onClick) === null || p === void 0 ? void 0 : p.call(e, {
          e: m
        });
      },
      strokeColor1: n.value,
      strokeColor2: u.value,
      fillColor1: f.value,
      fillColor2: v.value,
      strokeWidth: e.strokeWidth || 2,
      filledColor: h.value,
      iconId: "usergroup",
      overlapMaskInstanceId: r
    }));
    return () => L(Ae, b.value);
  }
}), $, le;
function Oe() {
  return le || (le = 1, $ = TDesign), $;
}
var S = Oe();
var P = function() {
  return P = Object.assign || function(s) {
    for (var l, a = 1, c = arguments.length; a < c; a++) {
      l = arguments[a];
      for (var d in l) Object.prototype.hasOwnProperty.call(l, d) && (s[d] = l[d]);
    }
    return s;
  }, P.apply(this, arguments);
};
var A;
(function(e) {
  var s = (
    /** @class */
    (function() {
      function i(r, o, n, u) {
        if (this.version = r, this.errorCorrectionLevel = o, this.modules = [], this.isFunction = [], r < i.MIN_VERSION || r > i.MAX_VERSION)
          throw new RangeError("Version value out of range");
        if (u < -1 || u > 7)
          throw new RangeError("Mask value out of range");
        this.size = r * 4 + 17;
        for (var f = [], v = 0; v < this.size; v++)
          f.push(!1);
        for (var v = 0; v < this.size; v++)
          this.modules.push(f.slice()), this.isFunction.push(f.slice());
        this.drawFunctionPatterns();
        var h = this.addEccAndInterleave(n);
        if (this.drawCodewords(h), u == -1)
          for (var g = 1e9, v = 0; v < 8; v++) {
            this.applyMask(v), this.drawFormatBits(v);
            var C = this.getPenaltyScore();
            C < g && (u = v, g = C), this.applyMask(v);
          }
        c(0 <= u && u <= 7), this.mask = u, this.applyMask(u), this.drawFormatBits(u), this.isFunction = [];
      }
      return i.encodeText = function(r, o) {
        var n = e.QrSegment.makeSegments(r);
        return i.encodeSegments(n, o);
      }, i.encodeBinary = function(r, o) {
        var n = e.QrSegment.makeBytes(r);
        return i.encodeSegments([n], o);
      }, i.encodeSegments = function(r, o, n, u, f, v) {
        if (n === void 0 && (n = 1), u === void 0 && (u = 40), f === void 0 && (f = -1), v === void 0 && (v = !0), !(i.MIN_VERSION <= n && n <= u && u <= i.MAX_VERSION) || f < -1 || f > 7)
          throw new RangeError("Invalid value");
        var h, g;
        for (h = n; ; h++) {
          var C = i.getNumDataCodewords(h, o) * 8, k = d.getTotalBits(r, h);
          if (k <= C) {
            g = k;
            break;
          }
          if (h >= u)
            throw new RangeError("Data too long");
        }
        for (var y = 0, b = [i.Ecc.MEDIUM, i.Ecc.QUARTILE, i.Ecc.HIGH]; y < b.length; y++) {
          var m = b[y];
          v && g <= i.getNumDataCodewords(h, m) * 8 && (o = m);
        }
        for (var p = [], w = 0, x = r; w < x.length; w++) {
          var M = x[w];
          l(M.mode.modeBits, 4, p), l(M.numChars, M.mode.numCharCountBits(h), p);
          for (var E = 0, _ = M.getData(); E < _.length; E++) {
            var H = _[E];
            p.push(H);
          }
        }
        c(p.length == g);
        var N = i.getNumDataCodewords(h, o) * 8;
        c(p.length <= N), l(0, Math.min(4, N - p.length), p), l(0, (8 - p.length % 8) % 8, p), c(p.length % 8 == 0);
        for (var O = 236; p.length < N; O ^= 253)
          l(O, 8, p);
        for (var V = []; V.length * 8 < p.length; )
          V.push(0);
        return p.forEach(function(B, z) {
          return V[z >>> 3] |= B << 7 - (z & 7);
        }), new i(h, o, V, f);
      }, i.prototype.getModule = function(r, o) {
        return 0 <= r && r < this.size && 0 <= o && o < this.size && this.modules[o][r];
      }, i.prototype.getModules = function() {
        return this.modules;
      }, i.prototype.drawFunctionPatterns = function() {
        for (var r = 0; r < this.size; r++)
          this.setFunctionModule(6, r, r % 2 == 0), this.setFunctionModule(r, 6, r % 2 == 0);
        this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
        for (var o = this.getAlignmentPatternPositions(), n = o.length, r = 0; r < n; r++)
          for (var u = 0; u < n; u++)
            r == 0 && u == 0 || r == 0 && u == n - 1 || r == n - 1 && u == 0 || this.drawAlignmentPattern(o[r], o[u]);
        this.drawFormatBits(0), this.drawVersion();
      }, i.prototype.drawFormatBits = function(r) {
        for (var o = this.errorCorrectionLevel.formatBits << 3 | r, n = o, u = 0; u < 10; u++)
          n = n << 1 ^ (n >>> 9) * 1335;
        var f = (o << 10 | n) ^ 21522;
        c(f >>> 15 == 0);
        for (var u = 0; u <= 5; u++)
          this.setFunctionModule(8, u, a(f, u));
        this.setFunctionModule(8, 7, a(f, 6)), this.setFunctionModule(8, 8, a(f, 7)), this.setFunctionModule(7, 8, a(f, 8));
        for (var u = 9; u < 15; u++)
          this.setFunctionModule(14 - u, 8, a(f, u));
        for (var u = 0; u < 8; u++)
          this.setFunctionModule(this.size - 1 - u, 8, a(f, u));
        for (var u = 8; u < 15; u++)
          this.setFunctionModule(8, this.size - 15 + u, a(f, u));
        this.setFunctionModule(8, this.size - 8, !0);
      }, i.prototype.drawVersion = function() {
        if (!(this.version < 7)) {
          for (var r = this.version, o = 0; o < 12; o++)
            r = r << 1 ^ (r >>> 11) * 7973;
          var n = this.version << 12 | r;
          c(n >>> 18 == 0);
          for (var o = 0; o < 18; o++) {
            var u = a(n, o), f = this.size - 11 + o % 3, v = Math.floor(o / 3);
            this.setFunctionModule(f, v, u), this.setFunctionModule(v, f, u);
          }
        }
      }, i.prototype.drawFinderPattern = function(r, o) {
        for (var n = -4; n <= 4; n++)
          for (var u = -4; u <= 4; u++) {
            var f = Math.max(Math.abs(u), Math.abs(n)), v = r + u, h = o + n;
            0 <= v && v < this.size && 0 <= h && h < this.size && this.setFunctionModule(v, h, f != 2 && f != 4);
          }
      }, i.prototype.drawAlignmentPattern = function(r, o) {
        for (var n = -2; n <= 2; n++)
          for (var u = -2; u <= 2; u++)
            this.setFunctionModule(r + u, o + n, Math.max(Math.abs(u), Math.abs(n)) != 1);
      }, i.prototype.setFunctionModule = function(r, o, n) {
        this.modules[o][r] = n, this.isFunction[o][r] = !0;
      }, i.prototype.addEccAndInterleave = function(r) {
        var o = this.version, n = this.errorCorrectionLevel;
        if (r.length != i.getNumDataCodewords(o, n))
          throw new RangeError("Invalid argument");
        for (var u = i.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][o], f = i.ECC_CODEWORDS_PER_BLOCK[n.ordinal][o], v = Math.floor(i.getNumRawDataModules(o) / 8), h = u - v % u, g = Math.floor(v / u), C = [], k = i.reedSolomonComputeDivisor(f), y = 0, b = 0; y < u; y++) {
          var m = r.slice(b, b + g - f + (y < h ? 0 : 1));
          b += m.length;
          var p = i.reedSolomonComputeRemainder(m, k);
          y < h && m.push(0), C.push(m.concat(p));
        }
        for (var w = [], x = function(M) {
          C.forEach(function(E, _) {
            (M != g - f || _ >= h) && w.push(E[M]);
          });
        }, y = 0; y < C[0].length; y++)
          x(y);
        return c(w.length == v), w;
      }, i.prototype.drawCodewords = function(r) {
        if (r.length != Math.floor(i.getNumRawDataModules(this.version) / 8))
          throw new RangeError("Invalid argument");
        for (var o = 0, n = this.size - 1; n >= 1; n -= 2) {
          n == 6 && (n = 5);
          for (var u = 0; u < this.size; u++)
            for (var f = 0; f < 2; f++) {
              var v = n - f, h = (n + 1 & 2) == 0, g = h ? this.size - 1 - u : u;
              !this.isFunction[g][v] && o < r.length * 8 && (this.modules[g][v] = a(r[o >>> 3], 7 - (o & 7)), o++);
            }
        }
        c(o == r.length * 8);
      }, i.prototype.applyMask = function(r) {
        if (r < 0 || r > 7)
          throw new RangeError("Mask value out of range");
        for (var o = 0; o < this.size; o++)
          for (var n = 0; n < this.size; n++) {
            var u = void 0;
            switch (r) {
              case 0:
                u = (n + o) % 2 == 0;
                break;
              case 1:
                u = o % 2 == 0;
                break;
              case 2:
                u = n % 3 == 0;
                break;
              case 3:
                u = (n + o) % 3 == 0;
                break;
              case 4:
                u = (Math.floor(n / 3) + Math.floor(o / 2)) % 2 == 0;
                break;
              case 5:
                u = n * o % 2 + n * o % 3 == 0;
                break;
              case 6:
                u = (n * o % 2 + n * o % 3) % 2 == 0;
                break;
              case 7:
                u = ((n + o) % 2 + n * o % 3) % 2 == 0;
                break;
              default:
                throw new Error("Unreachable");
            }
            !this.isFunction[o][n] && u && (this.modules[o][n] = !this.modules[o][n]);
          }
      }, i.prototype.getPenaltyScore = function() {
        for (var r = 0, o = 0; o < this.size; o++) {
          for (var n = !1, u = 0, f = [0, 0, 0, 0, 0, 0, 0], v = 0; v < this.size; v++)
            this.modules[o][v] == n ? (u++, u == 5 ? r += i.PENALTY_N1 : u > 5 && r++) : (this.finderPenaltyAddHistory(u, f), n || (r += this.finderPenaltyCountPatterns(f) * i.PENALTY_N3), n = this.modules[o][v], u = 1);
          r += this.finderPenaltyTerminateAndCount(n, u, f) * i.PENALTY_N3;
        }
        for (var v = 0; v < this.size; v++) {
          for (var n = !1, h = 0, f = [0, 0, 0, 0, 0, 0, 0], o = 0; o < this.size; o++)
            this.modules[o][v] == n ? (h++, h == 5 ? r += i.PENALTY_N1 : h > 5 && r++) : (this.finderPenaltyAddHistory(h, f), n || (r += this.finderPenaltyCountPatterns(f) * i.PENALTY_N3), n = this.modules[o][v], h = 1);
          r += this.finderPenaltyTerminateAndCount(n, h, f) * i.PENALTY_N3;
        }
        for (var o = 0; o < this.size - 1; o++)
          for (var v = 0; v < this.size - 1; v++) {
            var g = this.modules[o][v];
            g == this.modules[o][v + 1] && g == this.modules[o + 1][v] && g == this.modules[o + 1][v + 1] && (r += i.PENALTY_N2);
          }
        for (var C = 0, k = 0, y = this.modules; k < y.length; k++) {
          var b = y[k];
          C = b.reduce(function(w, x) {
            return w + (x ? 1 : 0);
          }, C);
        }
        var m = this.size * this.size, p = Math.ceil(Math.abs(C * 20 - m * 10) / m) - 1;
        return c(0 <= p && p <= 9), r += p * i.PENALTY_N4, c(0 <= r && r <= 2568888), r;
      }, i.prototype.getAlignmentPatternPositions = function() {
        if (this.version == 1)
          return [];
        for (var r = Math.floor(this.version / 7) + 2, o = Math.floor((this.version * 8 + r * 3 + 5) / (r * 4 - 4)) * 2, n = [6], u = this.size - 7; n.length < r; u -= o)
          n.splice(1, 0, u);
        return n;
      }, i.getNumRawDataModules = function(r) {
        if (r < i.MIN_VERSION || r > i.MAX_VERSION)
          throw new RangeError("Version number out of range");
        var o = (16 * r + 128) * r + 64;
        if (r >= 2) {
          var n = Math.floor(r / 7) + 2;
          o -= (25 * n - 10) * n - 55, r >= 7 && (o -= 36);
        }
        return c(208 <= o && o <= 29648), o;
      }, i.getNumDataCodewords = function(r, o) {
        return Math.floor(i.getNumRawDataModules(r) / 8) - i.ECC_CODEWORDS_PER_BLOCK[o.ordinal][r] * i.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][r];
      }, i.reedSolomonComputeDivisor = function(r) {
        if (r < 1 || r > 255)
          throw new RangeError("Degree out of range");
        for (var o = [], n = 0; n < r - 1; n++)
          o.push(0);
        o.push(1);
        for (var u = 1, n = 0; n < r; n++) {
          for (var f = 0; f < o.length; f++)
            o[f] = i.reedSolomonMultiply(o[f], u), f + 1 < o.length && (o[f] ^= o[f + 1]);
          u = i.reedSolomonMultiply(u, 2);
        }
        return o;
      }, i.reedSolomonComputeRemainder = function(r, o) {
        for (var n = o.map(function(g) {
          return 0;
        }), u = function(g) {
          var C = g ^ n.shift();
          n.push(0), o.forEach(function(k, y) {
            return n[y] ^= i.reedSolomonMultiply(k, C);
          });
        }, f = 0, v = r; f < v.length; f++) {
          var h = v[f];
          u(h);
        }
        return n;
      }, i.reedSolomonMultiply = function(r, o) {
        if (r >>> 8 || o >>> 8)
          throw new RangeError("Byte out of range");
        for (var n = 0, u = 7; u >= 0; u--)
          n = n << 1 ^ (n >>> 7) * 285, n ^= (o >>> u & 1) * r;
        return c(n >>> 8 == 0), n;
      }, i.prototype.finderPenaltyCountPatterns = function(r) {
        var o = r[1];
        c(o <= this.size * 3);
        var n = o > 0 && r[2] == o && r[3] == o * 3 && r[4] == o && r[5] == o;
        return (n && r[0] >= o * 4 && r[6] >= o ? 1 : 0) + (n && r[6] >= o * 4 && r[0] >= o ? 1 : 0);
      }, i.prototype.finderPenaltyTerminateAndCount = function(r, o, n) {
        return r && (this.finderPenaltyAddHistory(o, n), o = 0), o += this.size, this.finderPenaltyAddHistory(o, n), this.finderPenaltyCountPatterns(n);
      }, i.prototype.finderPenaltyAddHistory = function(r, o) {
        o[0] == 0 && (r += this.size), o.pop(), o.unshift(r);
      }, i.MIN_VERSION = 1, i.MAX_VERSION = 40, i.PENALTY_N1 = 3, i.PENALTY_N2 = 3, i.PENALTY_N3 = 40, i.PENALTY_N4 = 10, i.ECC_CODEWORDS_PER_BLOCK = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        // Low
        [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
        // Medium
        [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        // Quartile
        [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
        // High
      ], i.NUM_ERROR_CORRECTION_BLOCKS = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
        // Low
        [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
        // Medium
        [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
        // Quartile
        [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
        // High
      ], i;
    })()
  );
  e.QrCode = s;
  function l(i, r, o) {
    if (r < 0 || r > 31 || i >>> r)
      throw new RangeError("Value out of range");
    for (var n = r - 1; n >= 0; n--)
      o.push(i >>> n & 1);
  }
  function a(i, r) {
    return (i >>> r & 1) != 0;
  }
  function c(i) {
    if (!i)
      throw new Error("Assertion error");
  }
  var d = (
    /** @class */
    (function() {
      function i(r, o, n) {
        if (this.mode = r, this.numChars = o, this.bitData = n, o < 0)
          throw new RangeError("Invalid argument");
        this.bitData = n.slice();
      }
      return i.makeBytes = function(r) {
        for (var o = [], n = 0, u = r; n < u.length; n++) {
          var f = u[n];
          l(f, 8, o);
        }
        return new i(i.Mode.BYTE, r.length, o);
      }, i.makeNumeric = function(r) {
        if (!i.isNumeric(r))
          throw new RangeError("String contains non-numeric characters");
        for (var o = [], n = 0; n < r.length; ) {
          var u = Math.min(r.length - n, 3);
          l(parseInt(r.substring(n, n + u), 10), u * 3 + 1, o), n += u;
        }
        return new i(i.Mode.NUMERIC, r.length, o);
      }, i.makeAlphanumeric = function(r) {
        if (!i.isAlphanumeric(r))
          throw new RangeError("String contains unencodable characters in alphanumeric mode");
        var o = [], n;
        for (n = 0; n + 2 <= r.length; n += 2) {
          var u = i.ALPHANUMERIC_CHARSET.indexOf(r.charAt(n)) * 45;
          u += i.ALPHANUMERIC_CHARSET.indexOf(r.charAt(n + 1)), l(u, 11, o);
        }
        return n < r.length && l(i.ALPHANUMERIC_CHARSET.indexOf(r.charAt(n)), 6, o), new i(i.Mode.ALPHANUMERIC, r.length, o);
      }, i.makeSegments = function(r) {
        return r == "" ? [] : i.isNumeric(r) ? [i.makeNumeric(r)] : i.isAlphanumeric(r) ? [i.makeAlphanumeric(r)] : [i.makeBytes(i.toUtf8ByteArray(r))];
      }, i.makeEci = function(r) {
        var o = [];
        if (r < 0)
          throw new RangeError("ECI assignment value out of range");
        if (r < 128)
          l(r, 8, o);
        else if (r < 16384)
          l(2, 2, o), l(r, 14, o);
        else if (r < 1e6)
          l(6, 3, o), l(r, 21, o);
        else
          throw new RangeError("ECI assignment value out of range");
        return new i(i.Mode.ECI, 0, o);
      }, i.isNumeric = function(r) {
        return i.NUMERIC_REGEX.test(r);
      }, i.isAlphanumeric = function(r) {
        return i.ALPHANUMERIC_REGEX.test(r);
      }, i.prototype.getData = function() {
        return this.bitData.slice();
      }, i.getTotalBits = function(r, o) {
        for (var n = 0, u = 0, f = r; u < f.length; u++) {
          var v = f[u], h = v.mode.numCharCountBits(o);
          if (v.numChars >= 1 << h)
            return 1 / 0;
          n += 4 + h + v.bitData.length;
        }
        return n;
      }, i.toUtf8ByteArray = function(r) {
        r = encodeURI(r);
        for (var o = [], n = 0; n < r.length; n++)
          r.charAt(n) != "%" ? o.push(r.charCodeAt(n)) : (o.push(parseInt(r.substring(n + 1, n + 3), 16)), n += 2);
        return o;
      }, i.NUMERIC_REGEX = /^[0-9]*$/, i.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, i.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", i;
    })()
  );
  e.QrSegment = d;
})(A || (A = {}));
(function(e) {
  (function(s) {
    var l = (
      /** @class */
      (function() {
        function a(c, d) {
          this.ordinal = c, this.formatBits = d;
        }
        return a.LOW = new a(0, 1), a.MEDIUM = new a(1, 0), a.QUARTILE = new a(2, 3), a.HIGH = new a(3, 2), a;
      })()
    );
    s.Ecc = l;
  })(e.QrCode || (e.QrCode = {}));
})(A || (A = {}));
(function(e) {
  (function(s) {
    var l = (
      /** @class */
      (function() {
        function a(c, d) {
          this.modeBits = c, this.numBitsCharCount = d;
        }
        return a.prototype.numCharCountBits = function(c) {
          return this.numBitsCharCount[Math.floor((c + 7) / 17)];
        }, a.NUMERIC = new a(1, [10, 12, 14]), a.ALPHANUMERIC = new a(2, [9, 11, 13]), a.BYTE = new a(4, [8, 16, 16]), a.KANJI = new a(8, [8, 10, 12]), a.ECI = new a(7, [0, 0, 0]), a;
      })()
    );
    s.Mode = l;
  })(e.QrSegment || (e.QrSegment = {}));
})(A || (A = {}));
var I = A, Ie = 0;
function Re(e) {
  return e || "v-".concat(Ie++);
}
var de = "L", De = 100, fe = 0, ze = 0.1, Le = 2, ve = {
  L: I.QrCode.Ecc.LOW,
  M: I.QrCode.Ecc.MEDIUM,
  Q: I.QrCode.Ecc.QUARTILE,
  H: I.QrCode.Ecc.HIGH
}, Te = (function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function he(e) {
  return e in ve;
}
function Ue(e, s, l) {
  var a = s > 0 ? e[s - 1][l] : !1, c = s < e.length - 1 ? e[s + 1][l] : !1, d = l > 0 ? e[s][l - 1] : !1, i = l < e[s].length - 1 ? e[s][l + 1] : !1;
  return {
    nw: !a && !d,
    ne: !a && !i,
    se: !c && !i,
    sw: !c && !d
  };
}
function He(e, s, l) {
  s === void 0 && (s = 0), l === void 0 && (l = 0);
  for (var a = [], c = Math.min(l, 0.5), d = 0; d < e.length; d++)
    for (var i = 0; i < e[d].length; i++)
      if (e[d][i]) {
        var r = Ue(e, d, i), o = r.nw, n = r.ne, u = r.se, f = r.sw, v = i + s, h = d + s;
        a.push("M".concat(v + (o ? c : 0), " ").concat(h), "L".concat(v + 1 - (n ? c : 0), " ").concat(h)), n && a.push("A".concat(c, " ").concat(c, " 0 0 1 ").concat(v + 1, " ").concat(h + c)), a.push("L".concat(v + 1, " ").concat(h + 1 - (u ? c : 0))), u && a.push("A".concat(c, " ").concat(c, " 0 0 1 ").concat(v + 1 - c, " ").concat(h + 1)), a.push("L".concat(v + (f ? c : 0), " ").concat(h + 1)), f && a.push("A".concat(c, " ").concat(c, " 0 0 1 ").concat(v, " ").concat(h + 1 - c)), a.push("L".concat(v, " ").concat(h + (o ? c : 0))), o && a.push("A".concat(c, " ").concat(c, " 0 0 1 ").concat(v + c, " ").concat(h)), a.push("z");
      }
  return a.join("");
}
function Be(e, s) {
  s === void 0 && (s = 0);
  for (var l = [], a = 0; a < e.length; a++)
    for (var c = e[a], d = null, i = 0; i < c.length; i++) {
      var r = c[i];
      if (!r && d !== null) {
        l.push("M".concat(d + s, " ").concat(a + s, "h").concat(i - d, "v1H").concat(d + s, "z")), d = null;
        continue;
      }
      if (i === c.length - 1) {
        if (!r)
          continue;
        d === null ? l.push("M".concat(i + s, ",").concat(a + s, " h1v1H").concat(i + s, "z")) : l.push("M".concat(d + s, ",").concat(a + s, " h").concat(i + 1 - d, "v1H").concat(d + s, "z"));
        continue;
      }
      r && d === null && (d = i);
    }
  return l.join("");
}
function je(e, s, l, a) {
  var c = a.width, d = a.height, i = a.x, r = a.y, o = e.length + l * 2, n = Math.floor(s * ze), u = o / s, f = (c || n) * u, v = (d || n) * u, h = i == null ? e.length / 2 - f / 2 : i * u, g = r == null ? e.length / 2 - v / 2 : r * u, C = (a.borderRadius || 0) * u;
  return { x: h, y: g, h: v, w: f, borderRadius: C };
}
function ge(e) {
  var s = t.computed(function() {
    var r;
    return ((r = e.margin) !== null && r !== void 0 ? r : fe) >>> 0;
  }), l = t.computed(function() {
    var r = he(e.level) ? e.level : de;
    return I.QrCode.encodeText(e.value, ve[r]).getModules();
  }), a = t.computed(function() {
    return l.value.length + s.value * 2;
  }), c = t.computed(function() {
    return e.radius > 0 ? He(l.value, s.value, e.radius) : Be(l.value, s.value);
  }), d = t.computed(function() {
    if (!e.imageSettings.src)
      return null;
    var r = je(l.value, e.size, s.value, e.imageSettings);
    return {
      x: r.x + s.value,
      y: r.y + s.value,
      width: r.w,
      height: r.h,
      borderRadius: r.borderRadius
    };
  }), i = t.computed(function() {
    if (!e.imageSettings.excavate || !d.value)
      return null;
    var r = Le / (e.size / a.value);
    return {
      x: d.value.x - r,
      y: d.value.y - r,
      width: d.value.width + r * 2,
      height: d.value.height + r * 2,
      borderRadius: d.value.borderRadius
    };
  });
  return { margin: s, numCells: a, cells: l, fgPath: c, imageProps: d, imageBorderProps: i };
}
function me(e, s) {
  var l = document.createElement("a");
  l.download = s, l.href = e, document.body.appendChild(l), l.click(), document.body.removeChild(l);
}
var Z = {
  value: {
    type: String,
    required: !0,
    default: ""
  },
  size: {
    type: Number,
    default: De
  },
  level: {
    type: String,
    default: de,
    validator: function(e) {
      return he(e);
    }
  },
  background: {
    type: String,
    default: "#fff"
  },
  foreground: {
    type: String,
    default: "#000"
  },
  margin: {
    type: Number,
    default: fe,
    validator: function(e) {
      return e >= 0;
    }
  },
  imageSettings: {
    type: Object,
    default: function() {
      return {};
    }
  },
  gradient: {
    type: Boolean,
    default: !1
  },
  gradientType: {
    type: String,
    default: "linear",
    validator: function(e) {
      return ["linear", "radial"].indexOf(e) > -1;
    }
  },
  gradientStartColor: {
    type: String,
    default: "#000"
  },
  gradientEndColor: {
    type: String,
    default: "#fff"
  },
  radius: {
    type: Number,
    default: 0,
    validator: function(e) {
      return !isNaN(e) && e >= 0 && e <= 0.5;
    }
  },
  id: {
    type: String,
    required: !1
  }
}, $e = P(P({}, Z), { renderAs: {
  type: String,
  required: !1,
  default: "canvas",
  validator: function(e) {
    return ["canvas", "svg"].indexOf(e) > -1;
  }
} }), Fe = t.defineComponent({
  name: "QRCodeSvg",
  props: Z,
  setup: function(e, s) {
    var l = ge(e), a = l.numCells, c = l.fgPath, d = l.imageProps, i = l.imageBorderProps, r = t.ref(), o = Re(e.id), n = "qrcode.vue-gradient-".concat(o), u = "qrcode.vue-logo-clip-path-".concat(o), f = t.computed(function() {
      if (!e.gradient)
        return null;
      var g = e.gradientType === "linear" ? {
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%"
      } : {
        cx: "50%",
        cy: "50%",
        r: "50%",
        fx: "50%",
        fy: "50%"
      };
      return t.h(e.gradientType === "linear" ? "linearGradient" : "radialGradient", P({ id: n }, g), [
        t.h("stop", {
          offset: "0%",
          style: { stopColor: e.gradientStartColor }
        }),
        t.h("stop", {
          offset: "100%",
          style: { stopColor: e.gradientEndColor }
        })
      ]);
    }), v = t.computed(function() {
      if (!d.value)
        return null;
      var g = d.value.borderRadius;
      return g <= 0 ? null : t.h("clipPath", { id: u }, [
        t.h("rect", {
          x: d.value.x,
          y: d.value.y,
          width: d.value.width,
          height: d.value.height,
          rx: g,
          ry: g
        })
      ]);
    }), h = function(g) {
      return "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<?xml version="1.0" standalone="no"?>' + new XMLSerializer().serializeToString(g));
    };
    return s.expose({
      toDataURL: function() {
        var g = r.value;
        if (g)
          return h(g);
      },
      download: function(g) {
        g === void 0 && (g = "qrcode.svg");
        var C = r.value;
        C && me(h(C), g);
      }
    }), function() {
      return t.h("svg", {
        ref: r,
        width: e.size,
        height: e.size,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(a.value, " ").concat(a.value),
        role: "img"
      }, [
        t.h("defs", {}, [f.value, v.value].filter(Boolean)),
        t.h("rect", {
          width: "100%",
          height: "100%",
          fill: e.background
        }),
        t.h("path", {
          fill: e.gradient ? "url(#".concat(n, ")") : e.foreground,
          d: c.value
        }),
        i.value && t.h("rect", {
          x: i.value.x,
          y: i.value.y,
          width: i.value.width,
          height: i.value.height,
          fill: e.background,
          rx: i.value.borderRadius,
          ry: i.value.borderRadius
        }),
        e.imageSettings.src && d.value && t.h("image", P({ href: e.imageSettings.src, crossorigin: e.imageSettings.crossOrigin, "clip-path": d.value.borderRadius > 0 ? "url(#".concat(u, ")") : void 0 }, d.value))
      ]);
    };
  }
}), Ze = t.defineComponent({
  name: "QRCodeCanvas",
  props: Z,
  setup: function(e, s) {
    var l = ge(e), a = l.margin, c = l.cells, d = l.numCells, i = l.fgPath, r = l.imageProps, o = l.imageBorderProps, n = t.ref(null), u = t.ref(null), f = function(h, g, C, k, y, b) {
      h.beginPath(), h.roundRect ? h.roundRect(g, C, k, y, b) : h.rect(g, C, k, y);
    }, v = function() {
      var h = e.size, g = e.background, C = e.foreground, k = e.gradient, y = e.gradientType, b = e.gradientStartColor, m = e.gradientEndColor, p = n.value;
      if (p) {
        var w = p.getContext("2d");
        if (w) {
          var x = u.value, M = typeof window < "u" && window.devicePixelRatio || 1, E = h / d.value * M;
          if (p.height = p.width = h * M, w.setTransform(E, 0, 0, E, 0, 0), w.fillStyle = g, w.fillRect(0, 0, d.value, d.value), k) {
            var _ = void 0;
            y === "linear" ? _ = w.createLinearGradient(0, 0, d.value, d.value) : _ = w.createRadialGradient(d.value / 2, d.value / 2, 0, d.value / 2, d.value / 2, d.value / 2), _.addColorStop(0, b), _.addColorStop(1, m), w.fillStyle = _;
          } else
            w.fillStyle = C;
          Te ? w.fill(new Path2D(i.value)) : c.value.forEach(function(V, B) {
            V.forEach(function(z, Ce) {
              z && w.fillRect(Ce + a.value, B + a.value, 1, 1);
            });
          });
          var H = e.imageSettings.src && x && x.naturalWidth !== 0 && x.naturalHeight !== 0;
          if (H && r.value) {
            if (o.value) {
              var N = o.value;
              w.fillStyle = e.background, f(w, N.x, N.y, N.width, N.height, N.borderRadius), w.fill();
            }
            var O = r.value.borderRadius;
            O > 0 ? (w.save(), f(w, r.value.x, r.value.y, r.value.width, r.value.height, O), w.clip(), w.drawImage(x, r.value.x, r.value.y, r.value.width, r.value.height), w.restore()) : w.drawImage(x, r.value.x, r.value.y, r.value.width, r.value.height);
          }
        }
      }
    };
    return t.onMounted(v), t.watchEffect(v, { flush: "post" }), s.expose({
      toDataURL: function(h, g) {
        var C;
        return (C = n.value) === null || C === void 0 ? void 0 : C.toDataURL(h, g);
      },
      download: function(h) {
        h === void 0 && (h = "qrcode.png");
        var g = n.value;
        g && me(g.toDataURL("image/png"), h);
      }
    }), function() {
      return t.h(t.Fragment, [
        t.h("canvas", P(P({}, s.attrs), { ref: n, role: "img", style: P(P({}, s.attrs.style), { width: "".concat(e.size, "px"), height: "".concat(e.size, "px") }) })),
        e.imageSettings.src && t.h("img", {
          ref: u,
          src: e.imageSettings.src,
          crossorigin: e.imageSettings.crossOrigin,
          style: { display: "none" },
          onLoad: v
        })
      ]);
    };
  }
}), We = t.defineComponent({
  name: "Qrcode",
  props: $e,
  setup: function(e, s) {
    var l = t.ref();
    return s.expose({
      toDataURL: function(a, c) {
        var d, i;
        return (i = (d = l.value) === null || d === void 0 ? void 0 : d.toDataURL) === null || i === void 0 ? void 0 : i.call(d, a, c);
      },
      download: function(a) {
        var c, d;
        return (d = (c = l.value) === null || c === void 0 ? void 0 : c.download) === null || d === void 0 ? void 0 : d.call(c, a);
      }
    }), function() {
      return t.h(e.renderAs === "svg" ? Fe : Ze, {
        ref: l,
        value: e.value,
        size: e.size,
        margin: e.margin,
        level: e.level,
        background: e.background,
        foreground: e.foreground,
        imageSettings: e.imageSettings,
        gradient: e.gradient,
        gradientType: e.gradientType,
        gradientStartColor: e.gradientStartColor,
        gradientEndColor: e.gradientEndColor,
        radius: e.radius,
        id: e.id
      });
    };
  }
}), F, ie;
function Qe() {
  return ie || (ie = 1, F = mslxRequest), F;
}
var qe = Qe();
const U = /* @__PURE__ */ pe(qe), W = "/api/plugin/mslx-plugin-android-thirdparty-addons/pair";
async function Ke(e) {
  return await U.post({
    url: `${W}/codes`,
    data: e
  });
}
async function Ge() {
  return await U.get({
    url: `${W}/devices`
  });
}
async function Xe(e) {
  return await U.post({
    url: `${W}/devices/${encodeURIComponent(e)}/revoke`
  });
}
async function Ye() {
  return (await U.get({ url: "/api/instance/list" }) || []).map((s) => ({ label: `${s.name} (#${s.id})`, value: `server:${s.id}` }));
}
const Je = /* @__PURE__ */ t.defineComponent({
  __name: "GeneratePairCode",
  setup(e) {
    const s = window.MSLX_Stores?.getUserStore?.(), l = t.computed(() => s?.baseUrl || "https://your-daemon.example.com:1027"), a = t.reactive({
      scope: "full",
      resources: [],
      deviceTtlDays: 30,
      publicUrl: ""
    }), c = t.ref([]), d = t.ref(!1);
    async function i() {
      try {
        d.value = !0, c.value = await Ye();
      } catch (k) {
        S.MessagePlugin.error("加载实例列表失败: " + (k?.message || k));
      } finally {
        d.value = !1;
      }
    }
    const r = t.ref(!1), o = t.ref(null), n = t.ref(0);
    let u = null;
    async function f() {
      if (!r.value) {
        if (a.scope === "limited" && a.resources.length === 0) {
          S.MessagePlugin.warning("受限范围请至少选择一个实例资源");
          return;
        }
        try {
          r.value = !0;
          const k = await Ke({
            scope: a.scope,
            resources: a.scope === "limited" ? a.resources : [],
            deviceTtlDays: a.deviceTtlDays,
            publicUrl: a.publicUrl.trim() || void 0
          });
          o.value = k, v(k?.expiresInSeconds || 120);
        } catch (k) {
          S.MessagePlugin.error("生成配对码失败: " + (k?.message || k));
        } finally {
          r.value = !1;
        }
      }
    }
    function v(k) {
      h(), n.value = Math.max(0, k), u = setInterval(() => {
        n.value = Math.max(0, n.value - 1), n.value === 0 && h();
      }, 1e3);
    }
    function h() {
      u && clearInterval(u), u = null;
    }
    const g = t.computed(() => o.value !== null && n.value === 0);
    async function C() {
      if (o.value)
        try {
          await navigator.clipboard.writeText(o.value.payload), S.MessagePlugin.success("二维码原文已复制");
        } catch {
          S.MessagePlugin.error("复制失败，请手动选择");
        }
    }
    return t.onMounted(i), t.onUnmounted(h), (k, y) => {
      const b = t.resolveComponent("t-radio-button"), m = t.resolveComponent("t-radio-group"), p = t.resolveComponent("t-select"), w = t.resolveComponent("t-input-number"), x = t.resolveComponent("t-input"), M = t.resolveComponent("t-button");
      return t.openBlock(), t.createElementBlock("div", { class: "extras-card flex flex-col gap-5 p-5" }, [
        t.createElementVNode("div", { class: "flex flex-col gap-2" }, [
          t.createElementVNode("h3", { class: "extras-title text-base font-bold m-0" }, "生成配对二维码"),
          t.createElementVNode("p", { class: "extras-muted text-sm m-0" }, " 设置授权范围后生成一次性二维码；在另一台设备的 MSLX App「连接」页选择「扫码配对」扫描即可接入。 ")
        ]),
        t.createElementVNode("div", { class: "flex flex-col md:flex-row gap-6" }, [
          t.createElementVNode("div", { class: "flex-1 min-w-0 flex flex-col gap-4" }, [
            t.createElementVNode("div", { class: "flex flex-col gap-2" }, [
              t.createElementVNode("label", { class: "extras-title text-xs font-bold" }, "授权范围"),
              t.createVNode(m, {
                modelValue: a.scope,
                "onUpdate:modelValue": y[0] || (y[0] = (E) => a.scope = E),
                variant: "default-filled"
              }, {
                default: t.withCtx(() => [
                  t.createVNode(b, { value: "full" }, {
                    default: t.withCtx(() => [
                      t.createTextVNode("完整权限（admin）")
                    ]),
                    _: 1
                  }),
                  t.createVNode(b, { value: "limited" }, {
                    default: t.withCtx(() => [
                      t.createTextVNode("受限（指定实例）")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            a.scope === "limited" ? (t.openBlock(), t.createElementBlock("div", {
              key: 0,
              class: "flex flex-col gap-2"
            }, [
              t.createElementVNode("label", { class: "extras-title text-xs font-bold" }, "授予实例"),
              t.createVNode(p, {
                modelValue: a.resources,
                "onUpdate:modelValue": y[1] || (y[1] = (E) => a.resources = E),
                options: c.value,
                loading: d.value,
                multiple: "",
                clearable: "",
                "min-collapsed-num": 3,
                placeholder: "选择该设备可管理的实例"
              }, null, 8, ["modelValue", "options", "loading"])
            ])) : t.createCommentVNode("", !0),
            t.createElementVNode("div", { class: "flex flex-col gap-2" }, [
              t.createElementVNode("label", { class: "extras-title text-xs font-bold" }, "设备有效期（天，1–365）"),
              t.createVNode(w, {
                modelValue: a.deviceTtlDays,
                "onUpdate:modelValue": y[2] || (y[2] = (E) => a.deviceTtlDays = E),
                min: 1,
                max: 365,
                theme: "column",
                class: "w-full"
              }, null, 8, ["modelValue"])
            ]),
            t.createElementVNode("div", { class: "flex flex-col gap-2" }, [
              t.createElementVNode("label", { class: "extras-title text-xs font-bold" }, "对外地址（可选，覆盖自动识别）"),
              t.createVNode(x, {
                modelValue: a.publicUrl,
                "onUpdate:modelValue": y[3] || (y[3] = (E) => a.publicUrl = E),
                clearable: "",
                placeholder: l.value
              }, null, 8, ["modelValue", "placeholder"]),
              t.createElementVNode("span", { class: "extras-placeholder text-xs" }, " App 从外网或其它网段扫码时，填写可访问本 Daemon 的地址；留空则由服务端自动识别。 ")
            ]),
            t.createVNode(M, {
              theme: "primary",
              loading: r.value,
              class: "self-start",
              onClick: f
            }, {
              icon: t.withCtx(() => [
                t.createVNode(t.unref(ue))
              ]),
              default: t.withCtx(() => [
                t.createTextVNode(" 生成配对二维码 ")
              ]),
              _: 1
            }, 8, ["loading"])
          ]),
          t.createElementVNode("div", { class: "extras-qr-col shrink-0 flex flex-col items-center gap-3" }, [
            t.createElementVNode("div", { class: "extras-qr-box extras-card items-center justify-center relative overflow-hidden" }, [
              o.value ? (t.openBlock(), t.createElementBlock(t.Fragment, { key: 0 }, [
                t.createVNode(We, {
                  value: o.value.payload,
                  size: 220,
                  level: "M",
                  margin: 1
                }, null, 8, ["value"]),
                g.value ? (t.openBlock(), t.createElementBlock("div", {
                  key: 0,
                  class: "extras-qr-mask flex flex-col items-center justify-center gap-2 text-sm font-bold"
                }, [
                  t.createElementVNode("span", null, "二维码已过期"),
                  t.createVNode(M, {
                    size: "small",
                    variant: "base",
                    onClick: f
                  }, {
                    default: t.withCtx(() => [
                      t.createTextVNode("重新生成")
                    ]),
                    _: 1
                  })
                ])) : t.createCommentVNode("", !0)
              ], 64)) : (t.openBlock(), t.createElementBlock("span", {
                key: 1,
                class: "extras-placeholder text-sm px-6 text-center"
              }, "生成后在此显示二维码"))
            ]),
            o.value ? (t.openBlock(), t.createElementBlock("div", {
              key: 0,
              class: "flex flex-col items-center gap-2 text-center"
            }, [
              t.createElementVNode("div", { class: "extras-title text-sm font-mono tracking-widest" }, "配对码 " + t.toDisplayString(o.value.code), 1),
              t.createElementVNode("div", {
                class: t.normalizeClass(["text-xs", g.value ? "extras-expired" : "extras-muted"])
              }, t.toDisplayString(g.value ? "已过期，请重新生成" : `剩余 ${n.value} 秒 · 单次有效 · ${o.value.scope === "full" ? "完整权限" : "受限"}`), 3),
              t.createElementVNode("div", { class: "flex items-center gap-2" }, [
                t.createVNode(M, {
                  size: "small",
                  variant: "text",
                  onClick: C
                }, {
                  icon: t.withCtx(() => [
                    t.createVNode(t.unref(Pe))
                  ]),
                  default: t.withCtx(() => [
                    t.createTextVNode(" 复制原文 ")
                  ]),
                  _: 1
                }),
                t.createVNode(M, {
                  size: "small",
                  variant: "text",
                  onClick: f
                }, {
                  icon: t.withCtx(() => [
                    t.createVNode(t.unref(ce))
                  ]),
                  default: t.withCtx(() => [
                    t.createTextVNode(" 刷新 ")
                  ]),
                  _: 1
                })
              ])
            ])) : t.createCommentVNode("", !0)
          ])
        ])
      ]);
    };
  }
}), Q = (e, s) => {
  const l = e.__vccOpts || e;
  for (const [a, c] of s)
    l[a] = c;
  return l;
}, et = /* @__PURE__ */ Q(Je, [["__scopeId", "data-v-86d4bcdb"]]), tt = /* @__PURE__ */ t.defineComponent({
  __name: "DeviceList",
  setup(e, { expose: s }) {
    const l = t.ref(!1), a = t.ref([]);
    async function c() {
      try {
        l.value = !0, a.value = await Ge() || [];
      } catch (u) {
        S.MessagePlugin.error("获取设备列表失败: " + (u?.message || u));
      } finally {
        l.value = !1;
      }
    }
    const d = {
      active: { text: "生效中", theme: "success" },
      expired: { text: "已过期", theme: "warning" },
      revoked: { text: "已撤销", theme: "default" },
      replaced: { text: "已替换", theme: "default" }
    };
    function i(u) {
      const f = d[u] || { text: u, theme: "primary" };
      return t.h(S.Tag, { size: "small", theme: f.theme, variant: "light" }, () => f.text);
    }
    const r = [
      { colKey: "name", title: "设备名称", ellipsis: !0 },
      { colKey: "apiKeyPrefix", title: "API Key", width: 130 },
      { colKey: "fingerprintPrefix", title: "设备指纹", width: 150, ellipsis: !0 },
      { colKey: "role", title: "角色", width: 90, cell: (u, { row: f }) => f.role === "admin" ? "完整" : "受限" },
      {
        colKey: "resources",
        title: "实例",
        width: 80,
        cell: (u, { row: f }) => f.role === "admin" ? "全部" : `${(f.resources || []).length}`
      },
      { colKey: "status", title: "状态", width: 100, cell: (u, { row: f }) => i(f.status) },
      { colKey: "expiresAt", title: "到期时间", width: 170 },
      { colKey: "op", title: "操作", width: 90, fixed: "right" }
    ], o = t.ref("");
    async function n(u) {
      try {
        o.value = u.deviceId, await Xe(u.deviceId), S.MessagePlugin.success("已撤销，该设备凭据立即失效"), await c();
      } catch (f) {
        S.MessagePlugin.error("撤销失败: " + (f?.message || f));
      } finally {
        o.value = "";
      }
    }
    return s({ getList: c }), t.onMounted(c), (u, f) => {
      const v = t.resolveComponent("t-button"), h = t.resolveComponent("t-popconfirm"), g = t.resolveComponent("t-table");
      return t.openBlock(), t.createElementBlock("div", { class: "extras-card flex flex-col gap-4 p-5" }, [
        t.createElementVNode("div", { class: "flex items-center justify-between gap-4 flex-wrap" }, [
          t.createElementVNode("div", { class: "flex flex-col gap-2" }, [
            t.createElementVNode("h3", { class: "extras-title text-base font-bold m-0" }, "已配对设备"),
            t.createElementVNode("p", { class: "extras-muted text-sm m-0" }, "撤销将删除对应配对用户，其 API Key 立即失效且不可恢复。")
          ]),
          t.createVNode(v, {
            variant: "dashed",
            loading: l.value,
            onClick: c
          }, {
            icon: t.withCtx(() => [
              t.createVNode(t.unref(ce))
            ]),
            default: t.withCtx(() => [
              t.createTextVNode(" 刷新 ")
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        t.createVNode(g, {
          "row-key": "deviceId",
          data: a.value,
          columns: r,
          loading: l.value,
          size: "medium",
          hover: "",
          empty: "暂无已配对设备"
        }, {
          op: t.withCtx(({ row: C }) => [
            t.createVNode(h, {
              content: `确认撤销设备「${C.name}」？该操作不可恢复。`,
              theme: "danger",
              placement: "left",
              onConfirm: (k) => n(C)
            }, {
              default: t.withCtx(() => [
                t.createVNode(v, {
                  size: "small",
                  theme: "danger",
                  variant: "text",
                  loading: o.value === C.deviceId,
                  disabled: C.status === "revoked"
                }, {
                  default: t.withCtx(() => [
                    t.createTextVNode(" 撤销 ")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ]),
              _: 2
            }, 1032, ["content", "onConfirm"])
          ]),
          _: 1
        }, 8, ["data", "loading"])
      ]);
    };
  }
}), rt = /* @__PURE__ */ Q(tt, [["__scopeId", "data-v-35143171"]]), ot = /* @__PURE__ */ t.defineComponent({
  __name: "PairingPage",
  setup(e) {
    const s = t.ref("generate");
    return (l, a) => {
      const c = t.resolveComponent("t-radio-button"), d = t.resolveComponent("t-radio-group");
      return t.openBlock(), t.createElementBlock("div", { class: "extras-page flex flex-col gap-5" }, [
        t.createElementVNode("div", { class: "extras-card flex flex-col xl:flex-row xl:items-center justify-between gap-5 p-5" }, [
          t.createElementVNode("div", { class: "flex flex-col gap-2" }, [
            t.createElementVNode("h2", { class: "extras-title text-lg font-bold m-0" }, "扫码配对"),
            t.createElementVNode("p", { class: "extras-muted text-sm m-0" }, " 生成一次性配对二维码，在另一台设备上用 MSLX App「连接」页扫码即可接入本 Daemon；每台设备独立可撤销、可过期。 ")
          ]),
          t.createVNode(d, {
            modelValue: s.value,
            "onUpdate:modelValue": a[0] || (a[0] = (i) => s.value = i),
            variant: "default-filled",
            class: "self-start xl:self-auto"
          }, {
            default: t.withCtx(() => [
              t.createVNode(c, { value: "generate" }, {
                default: t.withCtx(() => [
                  t.createElementVNode("span", { class: "flex items-center gap-1" }, [
                    t.createVNode(t.unref(ue)),
                    t.createTextVNode("生成配对码")
                  ])
                ]),
                _: 1
              }),
              t.createVNode(c, { value: "devices" }, {
                default: t.withCtx(() => [
                  t.createElementVNode("span", { class: "flex items-center gap-1" }, [
                    t.createVNode(t.unref(Ve)),
                    t.createTextVNode("已配对设备")
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        t.createVNode(t.Transition, {
          name: "extras-fade",
          mode: "out-in"
        }, {
          default: t.withCtx(() => [
            (t.openBlock(), t.createBlock(t.KeepAlive, null, [
              s.value === "generate" ? (t.openBlock(), t.createBlock(et, { key: 0 })) : (t.openBlock(), t.createBlock(rt, { key: 1 }))
            ], 1024))
          ]),
          _: 1
        })
      ]);
    };
  }
}), at = /* @__PURE__ */ Q(ot, [["__scopeId", "data-v-d7a1be8f"]]), nt = {
  // 与后端 IPlugin.Id、package.json.name 完全一致，作为 Android 客户端扩展能力的统一标识。
  name: "mslx-plugin-android-thirdparty-addons",
  version: "1.1.2",
  // 注入路由：挂到宿主「设置」分组（settingsBase）下，与「插件管理」同级
  routes: [
    {
      parentName: "settingsBase",
      path: "pairing",
      name: "mslx-plugin-android-thirdparty-addons-pairing",
      component: at,
      meta: { title: "扫码配对", icon: "qrcode", roleCode: ["admin"] }
    }
  ]
};
export {
  nt as pluginConfig
};
