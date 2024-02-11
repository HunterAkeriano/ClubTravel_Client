import "./modulepreload-polyfill-9p4a8sJU.js";
import { i as wt, g as St, c as bt, a as xt } from "./index.esm-T2_TDg20.js";
import { $ as y, H as _t } from "./header-qNeuh3vS.js";
const Ct = {
    apiKey: "AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",
    authDomain: "clubtravel-6eff6.firebaseapp.com",
    projectId: "clubtravel-6eff6",
    storageBucket: "clubtravel-6eff6.appspot.com",
    messagingSenderId: "883499742498",
    appId: "1:883499742498:web:b0bf6b06d8073d249a217b",
  },
  Et = wt(Ct);
var I;
(function (r) {
  (r.Range = "range"),
    (r.Steps = "steps"),
    (r.Positions = "positions"),
    (r.Count = "count"),
    (r.Values = "values");
})(I || (I = {}));
var M;
(function (r) {
  (r[(r.None = -1)] = "None"),
    (r[(r.NoValue = 0)] = "NoValue"),
    (r[(r.LargeValue = 1)] = "LargeValue"),
    (r[(r.SmallValue = 2)] = "SmallValue");
})(M || (M = {}));
function Pt(r) {
  return Z(r) && typeof r.from == "function";
}
function Z(r) {
  return typeof r == "object" && typeof r.to == "function";
}
function Me(r) {
  r.parentElement.removeChild(r);
}
function ge(r) {
  return r != null;
}
function He(r) {
  r.preventDefault();
}
function yt(r) {
  return r.filter(function (e) {
    return this[e] ? !1 : (this[e] = !0);
  }, {});
}
function kt(r, e) {
  return Math.round(r / e) * e;
}
function At(r, e) {
  var n = r.getBoundingClientRect(),
    o = r.ownerDocument,
    l = o.documentElement,
    h = ze(o);
  return (
    /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (h.x = 0),
    e ? n.top + h.y - l.clientTop : n.left + h.x - l.clientLeft
  );
}
function O(r) {
  return typeof r == "number" && !isNaN(r) && isFinite(r);
}
function Re(r, e, n) {
  n > 0 &&
    (U(r, e),
    setTimeout(function () {
      Q(r, e);
    }, n));
}
function Oe(r) {
  return Math.max(Math.min(r, 100), 0);
}
function ee(r) {
  return Array.isArray(r) ? r : [r];
}
function Vt(r) {
  r = String(r);
  var e = r.split(".");
  return e.length > 1 ? e[1].length : 0;
}
function U(r, e) {
  r.classList && !/\s/.test(e) ? r.classList.add(e) : (r.className += " " + e);
}
function Q(r, e) {
  r.classList && !/\s/.test(e)
    ? r.classList.remove(e)
    : (r.className = r.className.replace(
        new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"),
        " ",
      ));
}
function Dt(r, e) {
  return r.classList
    ? r.classList.contains(e)
    : new RegExp("\\b" + e + "\\b").test(r.className);
}
function ze(r) {
  var e = window.pageXOffset !== void 0,
    n = (r.compatMode || "") === "CSS1Compat",
    o = e
      ? window.pageXOffset
      : n
        ? r.documentElement.scrollLeft
        : r.body.scrollLeft,
    l = e
      ? window.pageYOffset
      : n
        ? r.documentElement.scrollTop
        : r.body.scrollTop;
  return { x: o, y: l };
}
function Ut() {
  return window.navigator.pointerEnabled
    ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
    : window.navigator.msPointerEnabled
      ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
      : {
          start: "mousedown touchstart",
          move: "mousemove touchmove",
          end: "mouseup touchend",
        };
}
function Lt() {
  var r = !1;
  try {
    var e = Object.defineProperty({}, "passive", {
      get: function () {
        r = !0;
      },
    });
    window.addEventListener("test", null, e);
  } catch {}
  return r;
}
function Mt() {
  return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
function me(r, e) {
  return 100 / (e - r);
}
function ve(r, e, n) {
  return (e * 100) / (r[n + 1] - r[n]);
}
function Ht(r, e) {
  return ve(r, r[0] < 0 ? e + Math.abs(r[0]) : e - r[0], 0);
}
function Rt(r, e) {
  return (e * (r[1] - r[0])) / 100 + r[0];
}
function q(r, e) {
  for (var n = 1; r >= e[n]; ) n += 1;
  return n;
}
function Ot(r, e, n) {
  if (n >= r.slice(-1)[0]) return 100;
  var o = q(n, r),
    l = r[o - 1],
    h = r[o],
    p = e[o - 1],
    b = e[o];
  return p + Ht([l, h], n) / me(p, b);
}
function Ft(r, e, n) {
  if (n >= 100) return r.slice(-1)[0];
  var o = q(n, e),
    l = r[o - 1],
    h = r[o],
    p = e[o - 1],
    b = e[o];
  return Rt([l, h], (n - p) * me(p, b));
}
function zt(r, e, n, o) {
  if (o === 100) return o;
  var l = q(o, r),
    h = r[l - 1],
    p = r[l];
  return n
    ? o - h > (p - h) / 2
      ? p
      : h
    : e[l - 1]
      ? r[l - 1] + kt(o - r[l - 1], e[l - 1])
      : o;
}
var je = (function () {
    function r(e, n, o) {
      (this.xPct = []),
        (this.xVal = []),
        (this.xSteps = []),
        (this.xNumSteps = []),
        (this.xHighestCompleteStep = []),
        (this.xSteps = [o || !1]),
        (this.xNumSteps = [!1]),
        (this.snap = n);
      var l,
        h = [];
      for (
        Object.keys(e).forEach(function (p) {
          h.push([ee(e[p]), p]);
        }),
          h.sort(function (p, b) {
            return p[0][0] - b[0][0];
          }),
          l = 0;
        l < h.length;
        l++
      )
        this.handleEntryPoint(h[l][1], h[l][0]);
      for (
        this.xNumSteps = this.xSteps.slice(0), l = 0;
        l < this.xNumSteps.length;
        l++
      )
        this.handleStepPoint(l, this.xNumSteps[l]);
    }
    return (
      (r.prototype.getDistance = function (e) {
        for (var n = [], o = 0; o < this.xNumSteps.length - 1; o++)
          n[o] = ve(this.xVal, e, o);
        return n;
      }),
      (r.prototype.getAbsoluteDistance = function (e, n, o) {
        var l = 0;
        if (e < this.xPct[this.xPct.length - 1])
          for (; e > this.xPct[l + 1]; ) l++;
        else
          e === this.xPct[this.xPct.length - 1] && (l = this.xPct.length - 2);
        !o && e === this.xPct[l + 1] && l++, n === null && (n = []);
        var h,
          p = 1,
          b = n[l],
          g = 0,
          L = 0,
          R = 0,
          k = 0;
        for (
          o
            ? (h = (e - this.xPct[l]) / (this.xPct[l + 1] - this.xPct[l]))
            : (h = (this.xPct[l + 1] - e) / (this.xPct[l + 1] - this.xPct[l]));
          b > 0;

        )
          (g = this.xPct[l + 1 + k] - this.xPct[l + k]),
            n[l + k] * p + 100 - h * 100 > 100
              ? ((L = g * h), (p = (b - 100 * h) / n[l + k]), (h = 1))
              : ((L = ((n[l + k] * g) / 100) * p), (p = 0)),
            o
              ? ((R = R - L), this.xPct.length + k >= 1 && k--)
              : ((R = R + L), this.xPct.length - k >= 1 && k++),
            (b = n[l + k] * p);
        return e + R;
      }),
      (r.prototype.toStepping = function (e) {
        return (e = Ot(this.xVal, this.xPct, e)), e;
      }),
      (r.prototype.fromStepping = function (e) {
        return Ft(this.xVal, this.xPct, e);
      }),
      (r.prototype.getStep = function (e) {
        return (e = zt(this.xPct, this.xSteps, this.snap, e)), e;
      }),
      (r.prototype.getDefaultStep = function (e, n, o) {
        var l = q(e, this.xPct);
        return (
          (e === 100 || (n && e === this.xPct[l - 1])) &&
            (l = Math.max(l - 1, 1)),
          (this.xVal[l] - this.xVal[l - 1]) / o
        );
      }),
      (r.prototype.getNearbySteps = function (e) {
        var n = q(e, this.xPct);
        return {
          stepBefore: {
            startValue: this.xVal[n - 2],
            step: this.xNumSteps[n - 2],
            highestStep: this.xHighestCompleteStep[n - 2],
          },
          thisStep: {
            startValue: this.xVal[n - 1],
            step: this.xNumSteps[n - 1],
            highestStep: this.xHighestCompleteStep[n - 1],
          },
          stepAfter: {
            startValue: this.xVal[n],
            step: this.xNumSteps[n],
            highestStep: this.xHighestCompleteStep[n],
          },
        };
      }),
      (r.prototype.countStepDecimals = function () {
        var e = this.xNumSteps.map(Vt);
        return Math.max.apply(null, e);
      }),
      (r.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
      }),
      (r.prototype.convert = function (e) {
        return this.getStep(this.toStepping(e));
      }),
      (r.prototype.handleEntryPoint = function (e, n) {
        var o;
        if (
          (e === "min"
            ? (o = 0)
            : e === "max"
              ? (o = 100)
              : (o = parseFloat(e)),
          !O(o) || !O(n[0]))
        )
          throw new Error("noUiSlider: 'range' value isn't numeric.");
        this.xPct.push(o), this.xVal.push(n[0]);
        var l = Number(n[1]);
        o
          ? this.xSteps.push(isNaN(l) ? !1 : l)
          : isNaN(l) || (this.xSteps[0] = l),
          this.xHighestCompleteStep.push(0);
      }),
      (r.prototype.handleStepPoint = function (e, n) {
        if (n) {
          if (this.xVal[e] === this.xVal[e + 1]) {
            this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e];
            return;
          }
          this.xSteps[e] =
            ve([this.xVal[e], this.xVal[e + 1]], n, 0) /
            me(this.xPct[e], this.xPct[e + 1]);
          var o = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
            l = Math.ceil(Number(o.toFixed(3)) - 1),
            h = this.xVal[e] + this.xNumSteps[e] * l;
          this.xHighestCompleteStep[e] = h;
        }
      }),
      r
    );
  })(),
  Fe = {
    to: function (r) {
      return r === void 0 ? "" : r.toFixed(2);
    },
    from: Number,
  },
  $e = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
  },
  $ = { tooltips: ".__tooltips", aria: ".__aria" };
function jt(r, e) {
  if (!O(e)) throw new Error("noUiSlider: 'step' is not numeric.");
  r.singleStep = e;
}
function $t(r, e) {
  if (!O(e))
    throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
  r.keyboardPageMultiplier = e;
}
function It(r, e) {
  if (!O(e))
    throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
  r.keyboardMultiplier = e;
}
function Nt(r, e) {
  if (!O(e))
    throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
  r.keyboardDefaultStep = e;
}
function Tt(r, e) {
  if (typeof e != "object" || Array.isArray(e))
    throw new Error("noUiSlider: 'range' is not an object.");
  if (e.min === void 0 || e.max === void 0)
    throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
  r.spectrum = new je(e, r.snap || !1, r.singleStep);
}
function Bt(r, e) {
  if (((e = ee(e)), !Array.isArray(e) || !e.length))
    throw new Error("noUiSlider: 'start' option is incorrect.");
  (r.handles = e.length), (r.start = e);
}
function Kt(r, e) {
  if (typeof e != "boolean")
    throw new Error("noUiSlider: 'snap' option must be a boolean.");
  r.snap = e;
}
function qt(r, e) {
  if (typeof e != "boolean")
    throw new Error("noUiSlider: 'animate' option must be a boolean.");
  r.animate = e;
}
function Wt(r, e) {
  if (typeof e != "number")
    throw new Error("noUiSlider: 'animationDuration' option must be a number.");
  r.animationDuration = e;
}
function Xt(r, e) {
  var n = [!1],
    o;
  if (
    (e === "lower" ? (e = [!0, !1]) : e === "upper" && (e = [!1, !0]),
    e === !0 || e === !1)
  ) {
    for (o = 1; o < r.handles; o++) n.push(e);
    n.push(!1);
  } else {
    if (!Array.isArray(e) || !e.length || e.length !== r.handles + 1)
      throw new Error(
        "noUiSlider: 'connect' option doesn't match handle count.",
      );
    n = e;
  }
  r.connect = n;
}
function Yt(r, e) {
  switch (e) {
    case "horizontal":
      r.ort = 0;
      break;
    case "vertical":
      r.ort = 1;
      break;
    default:
      throw new Error("noUiSlider: 'orientation' option is invalid.");
  }
}
function Ie(r, e) {
  if (!O(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
  e !== 0 && (r.margin = r.spectrum.getDistance(e));
}
function Gt(r, e) {
  if (!O(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
  if (((r.limit = r.spectrum.getDistance(e)), !r.limit || r.handles < 2))
    throw new Error(
      "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.",
    );
}
function Jt(r, e) {
  var n;
  if (!O(e) && !Array.isArray(e))
    throw new Error(
      "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
    );
  if (Array.isArray(e) && !(e.length === 2 || O(e[0]) || O(e[1])))
    throw new Error(
      "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.",
    );
  if (e !== 0) {
    for (
      Array.isArray(e) || (e = [e, e]),
        r.padding = [
          r.spectrum.getDistance(e[0]),
          r.spectrum.getDistance(e[1]),
        ],
        n = 0;
      n < r.spectrum.xNumSteps.length - 1;
      n++
    )
      if (r.padding[0][n] < 0 || r.padding[1][n] < 0)
        throw new Error(
          "noUiSlider: 'padding' option must be a positive number(s).",
        );
    var o = e[0] + e[1],
      l = r.spectrum.xVal[0],
      h = r.spectrum.xVal[r.spectrum.xVal.length - 1];
    if (o / (h - l) > 1)
      throw new Error(
        "noUiSlider: 'padding' option must not exceed 100% of the range.",
      );
  }
}
function Qt(r, e) {
  switch (e) {
    case "ltr":
      r.dir = 0;
      break;
    case "rtl":
      r.dir = 1;
      break;
    default:
      throw new Error("noUiSlider: 'direction' option was not recognized.");
  }
}
function Zt(r, e) {
  if (typeof e != "string")
    throw new Error(
      "noUiSlider: 'behaviour' must be a string containing options.",
    );
  var n = e.indexOf("tap") >= 0,
    o = e.indexOf("drag") >= 0,
    l = e.indexOf("fixed") >= 0,
    h = e.indexOf("snap") >= 0,
    p = e.indexOf("hover") >= 0,
    b = e.indexOf("unconstrained") >= 0,
    g = e.indexOf("drag-all") >= 0,
    L = e.indexOf("smooth-steps") >= 0;
  if (l) {
    if (r.handles !== 2)
      throw new Error(
        "noUiSlider: 'fixed' behaviour must be used with 2 handles",
      );
    Ie(r, r.start[1] - r.start[0]);
  }
  if (b && (r.margin || r.limit))
    throw new Error(
      "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit",
    );
  r.events = {
    tap: n || h,
    drag: o,
    dragAll: g,
    smoothSteps: L,
    fixed: l,
    snap: h,
    hover: p,
    unconstrained: b,
  };
}
function er(r, e) {
  if (e !== !1)
    if (e === !0 || Z(e)) {
      r.tooltips = [];
      for (var n = 0; n < r.handles; n++) r.tooltips.push(e);
    } else {
      if (((e = ee(e)), e.length !== r.handles))
        throw new Error("noUiSlider: must pass a formatter for all handles.");
      e.forEach(function (o) {
        if (typeof o != "boolean" && !Z(o))
          throw new Error(
            "noUiSlider: 'tooltips' must be passed a formatter or 'false'.",
          );
      }),
        (r.tooltips = e);
    }
}
function tr(r, e) {
  if (e.length !== r.handles)
    throw new Error("noUiSlider: must pass a attributes for all handles.");
  r.handleAttributes = e;
}
function rr(r, e) {
  if (!Z(e)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
  r.ariaFormat = e;
}
function sr(r, e) {
  if (!Pt(e))
    throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
  r.format = e;
}
function ir(r, e) {
  if (typeof e != "boolean")
    throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
  r.keyboardSupport = e;
}
function nr(r, e) {
  r.documentElement = e;
}
function ar(r, e) {
  if (typeof e != "string" && e !== !1)
    throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
  r.cssPrefix = e;
}
function or(r, e) {
  if (typeof e != "object")
    throw new Error("noUiSlider: 'cssClasses' must be an object.");
  typeof r.cssPrefix == "string"
    ? ((r.cssClasses = {}),
      Object.keys(e).forEach(function (n) {
        r.cssClasses[n] = r.cssPrefix + e[n];
      }))
    : (r.cssClasses = e);
}
function Ne(r) {
  var e = {
      margin: null,
      limit: null,
      padding: null,
      animate: !0,
      animationDuration: 300,
      ariaFormat: Fe,
      format: Fe,
    },
    n = {
      step: { r: !1, t: jt },
      keyboardPageMultiplier: { r: !1, t: $t },
      keyboardMultiplier: { r: !1, t: It },
      keyboardDefaultStep: { r: !1, t: Nt },
      start: { r: !0, t: Bt },
      connect: { r: !0, t: Xt },
      direction: { r: !0, t: Qt },
      snap: { r: !1, t: Kt },
      animate: { r: !1, t: qt },
      animationDuration: { r: !1, t: Wt },
      range: { r: !0, t: Tt },
      orientation: { r: !1, t: Yt },
      margin: { r: !1, t: Ie },
      limit: { r: !1, t: Gt },
      padding: { r: !1, t: Jt },
      behaviour: { r: !0, t: Zt },
      ariaFormat: { r: !1, t: rr },
      format: { r: !1, t: sr },
      tooltips: { r: !1, t: er },
      keyboardSupport: { r: !0, t: ir },
      documentElement: { r: !1, t: nr },
      cssPrefix: { r: !0, t: ar },
      cssClasses: { r: !0, t: or },
      handleAttributes: { r: !1, t: tr },
    },
    o = {
      connect: !1,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      keyboardSupport: !0,
      cssPrefix: "noUi-",
      cssClasses: $e,
      keyboardPageMultiplier: 5,
      keyboardMultiplier: 1,
      keyboardDefaultStep: 10,
    };
  r.format && !r.ariaFormat && (r.ariaFormat = r.format),
    Object.keys(n).forEach(function (g) {
      if (!ge(r[g]) && o[g] === void 0) {
        if (n[g].r) throw new Error("noUiSlider: '" + g + "' is required.");
        return;
      }
      n[g].t(e, ge(r[g]) ? r[g] : o[g]);
    }),
    (e.pips = r.pips);
  var l = document.createElement("div"),
    h = l.style.msTransform !== void 0,
    p = l.style.transform !== void 0;
  e.transformRule = p ? "transform" : h ? "msTransform" : "webkitTransform";
  var b = [
    ["left", "top"],
    ["right", "bottom"],
  ];
  return (e.style = b[e.dir][e.ort]), e;
}
function lr(r, e, n) {
  var o = Ut(),
    l = Mt(),
    h = l && Lt(),
    p = r,
    b,
    g,
    L,
    R,
    k,
    v = e.spectrum,
    F = [],
    C = [],
    H = [],
    te = 0,
    z = {},
    B = r.ownerDocument,
    W = e.documentElement || B.documentElement,
    X = B.body,
    Ke = B.dir === "rtl" || e.ort === 1 ? 0 : 100;
  function j(t, s) {
    var i = B.createElement("div");
    return s && U(i, s), t.appendChild(i), i;
  }
  function qe(t, s) {
    var i = j(t, e.cssClasses.origin),
      a = j(i, e.cssClasses.handle);
    if (
      (j(a, e.cssClasses.touchArea),
      a.setAttribute("data-handle", String(s)),
      e.keyboardSupport &&
        (a.setAttribute("tabindex", "0"),
        a.addEventListener("keydown", function (u) {
          return lt(u, s);
        })),
      e.handleAttributes !== void 0)
    ) {
      var c = e.handleAttributes[s];
      Object.keys(c).forEach(function (u) {
        a.setAttribute(u, c[u]);
      });
    }
    return (
      a.setAttribute("role", "slider"),
      a.setAttribute("aria-orientation", e.ort ? "vertical" : "horizontal"),
      s === 0
        ? U(a, e.cssClasses.handleLower)
        : s === e.handles - 1 && U(a, e.cssClasses.handleUpper),
      (i.handle = a),
      i
    );
  }
  function we(t, s) {
    return s ? j(t, e.cssClasses.connect) : !1;
  }
  function We(t, s) {
    var i = j(s, e.cssClasses.connects);
    (g = []), (L = []), L.push(we(i, t[0]));
    for (var a = 0; a < e.handles; a++)
      g.push(qe(s, a)), (H[a] = a), L.push(we(i, t[a + 1]));
  }
  function Xe(t) {
    U(t, e.cssClasses.target),
      e.dir === 0 ? U(t, e.cssClasses.ltr) : U(t, e.cssClasses.rtl),
      e.ort === 0 ? U(t, e.cssClasses.horizontal) : U(t, e.cssClasses.vertical);
    var s = getComputedStyle(t).direction;
    return (
      s === "rtl"
        ? U(t, e.cssClasses.textDirectionRtl)
        : U(t, e.cssClasses.textDirectionLtr),
      j(t, e.cssClasses.base)
    );
  }
  function Ye(t, s) {
    return !e.tooltips || !e.tooltips[s]
      ? !1
      : j(t.firstChild, e.cssClasses.tooltip);
  }
  function Se() {
    return p.hasAttribute("disabled");
  }
  function re(t) {
    var s = g[t];
    return s.hasAttribute("disabled");
  }
  function Ge(t) {
    t != null
      ? (g[t].setAttribute("disabled", ""),
        g[t].handle.removeAttribute("tabindex"))
      : (p.setAttribute("disabled", ""),
        g.forEach(function (s) {
          s.handle.removeAttribute("tabindex");
        }));
  }
  function Je(t) {
    t != null
      ? (g[t].removeAttribute("disabled"),
        g[t].handle.setAttribute("tabindex", "0"))
      : (p.removeAttribute("disabled"),
        g.forEach(function (s) {
          s.removeAttribute("disabled"), s.handle.setAttribute("tabindex", "0");
        }));
  }
  function se() {
    k &&
      (K("update" + $.tooltips),
      k.forEach(function (t) {
        t && Me(t);
      }),
      (k = null));
  }
  function be() {
    se(),
      (k = g.map(Ye)),
      le("update" + $.tooltips, function (t, s, i) {
        if (!(!k || !e.tooltips) && k[s] !== !1) {
          var a = t[s];
          e.tooltips[s] !== !0 && (a = e.tooltips[s].to(i[s])),
            (k[s].innerHTML = a);
        }
      });
  }
  function Qe() {
    K("update" + $.aria),
      le("update" + $.aria, function (t, s, i, a, c) {
        H.forEach(function (u) {
          var d = g[u],
            f = Y(C, u, 0, !0, !0, !0),
            S = Y(C, u, 100, !0, !0, !0),
            w = c[u],
            x = String(e.ariaFormat.to(i[u]));
          (f = v.fromStepping(f).toFixed(1)),
            (S = v.fromStepping(S).toFixed(1)),
            (w = v.fromStepping(w).toFixed(1)),
            d.children[0].setAttribute("aria-valuemin", f),
            d.children[0].setAttribute("aria-valuemax", S),
            d.children[0].setAttribute("aria-valuenow", w),
            d.children[0].setAttribute("aria-valuetext", x);
        });
      });
  }
  function Ze(t) {
    if (t.mode === I.Range || t.mode === I.Steps) return v.xVal;
    if (t.mode === I.Count) {
      if (t.values < 2)
        throw new Error(
          "noUiSlider: 'values' (>= 2) required for mode 'count'.",
        );
      for (var s = t.values - 1, i = 100 / s, a = []; s--; ) a[s] = s * i;
      return a.push(100), xe(a, t.stepped);
    }
    return t.mode === I.Positions
      ? xe(t.values, t.stepped)
      : t.mode === I.Values
        ? t.stepped
          ? t.values.map(function (c) {
              return v.fromStepping(v.getStep(v.toStepping(c)));
            })
          : t.values
        : [];
  }
  function xe(t, s) {
    return t.map(function (i) {
      return v.fromStepping(s ? v.getStep(i) : i);
    });
  }
  function et(t) {
    function s(w, x) {
      return Number((w + x).toFixed(7));
    }
    var i = Ze(t),
      a = {},
      c = v.xVal[0],
      u = v.xVal[v.xVal.length - 1],
      d = !1,
      f = !1,
      S = 0;
    return (
      (i = yt(
        i.slice().sort(function (w, x) {
          return w - x;
        }),
      )),
      i[0] !== c && (i.unshift(c), (d = !0)),
      i[i.length - 1] !== u && (i.push(u), (f = !0)),
      i.forEach(function (w, x) {
        var _,
          m,
          P,
          D = w,
          A = i[x + 1],
          V,
          fe,
          de,
          he,
          De,
          pe,
          Ue,
          Le = t.mode === I.Steps;
        for (
          Le && (_ = v.xNumSteps[x]),
            _ || (_ = A - D),
            A === void 0 && (A = D),
            _ = Math.max(_, 1e-7),
            m = D;
          m <= A;
          m = s(m, _)
        ) {
          for (
            V = v.toStepping(m),
              fe = V - S,
              De = fe / (t.density || 1),
              pe = Math.round(De),
              Ue = fe / pe,
              P = 1;
            P <= pe;
            P += 1
          )
            (de = S + P * Ue), (a[de.toFixed(5)] = [v.fromStepping(de), 0]);
          (he =
            i.indexOf(m) > -1 ? M.LargeValue : Le ? M.SmallValue : M.NoValue),
            !x && d && m !== A && (he = 0),
            (m === A && f) || (a[V.toFixed(5)] = [m, he]),
            (S = V);
        }
      }),
      a
    );
  }
  function tt(t, s, i) {
    var a,
      c,
      u = B.createElement("div"),
      d =
        ((a = {}),
        (a[M.None] = ""),
        (a[M.NoValue] = e.cssClasses.valueNormal),
        (a[M.LargeValue] = e.cssClasses.valueLarge),
        (a[M.SmallValue] = e.cssClasses.valueSub),
        a),
      f =
        ((c = {}),
        (c[M.None] = ""),
        (c[M.NoValue] = e.cssClasses.markerNormal),
        (c[M.LargeValue] = e.cssClasses.markerLarge),
        (c[M.SmallValue] = e.cssClasses.markerSub),
        c),
      S = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical],
      w = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical];
    U(u, e.cssClasses.pips),
      U(
        u,
        e.ort === 0 ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical,
      );
    function x(m, P) {
      var D = P === e.cssClasses.value,
        A = D ? S : w,
        V = D ? d : f;
      return P + " " + A[e.ort] + " " + V[m];
    }
    function _(m, P, D) {
      if (((D = s ? s(P, D) : D), D !== M.None)) {
        var A = j(u, !1);
        (A.className = x(D, e.cssClasses.marker)),
          (A.style[e.style] = m + "%"),
          D > M.NoValue &&
            ((A = j(u, !1)),
            (A.className = x(D, e.cssClasses.value)),
            A.setAttribute("data-value", String(P)),
            (A.style[e.style] = m + "%"),
            (A.innerHTML = String(i.to(P))));
      }
    }
    return (
      Object.keys(t).forEach(function (m) {
        _(m, t[m][0], t[m][1]);
      }),
      u
    );
  }
  function ie() {
    R && (Me(R), (R = null));
  }
  function ne(t) {
    ie();
    var s = et(t),
      i = t.filter,
      a = t.format || {
        to: function (c) {
          return String(Math.round(c));
        },
      };
    return (R = p.appendChild(tt(s, i, a))), R;
  }
  function _e() {
    var t = b.getBoundingClientRect(),
      s = "offset" + ["Width", "Height"][e.ort];
    return e.ort === 0 ? t.width || b[s] : t.height || b[s];
  }
  function N(t, s, i, a) {
    var c = function (d) {
        var f = rt(d, a.pageOffset, a.target || s);
        if (
          !f ||
          (Se() && !a.doNotReject) ||
          (Dt(p, e.cssClasses.tap) && !a.doNotReject) ||
          (t === o.start && f.buttons !== void 0 && f.buttons > 1) ||
          (a.hover && f.buttons)
        )
          return !1;
        h || f.preventDefault(), (f.calcPoint = f.points[e.ort]), i(f, a);
      },
      u = [];
    return (
      t.split(" ").forEach(function (d) {
        s.addEventListener(d, c, h ? { passive: !0 } : !1), u.push([d, c]);
      }),
      u
    );
  }
  function rt(t, s, i) {
    var a = t.type.indexOf("touch") === 0,
      c = t.type.indexOf("mouse") === 0,
      u = t.type.indexOf("pointer") === 0,
      d = 0,
      f = 0;
    if (
      (t.type.indexOf("MSPointer") === 0 && (u = !0),
      t.type === "mousedown" && !t.buttons && !t.touches)
    )
      return !1;
    if (a) {
      var S = function (_) {
        var m = _.target;
        return (
          m === i ||
          i.contains(m) ||
          (t.composed && t.composedPath().shift() === i)
        );
      };
      if (t.type === "touchstart") {
        var w = Array.prototype.filter.call(t.touches, S);
        if (w.length > 1) return !1;
        (d = w[0].pageX), (f = w[0].pageY);
      } else {
        var x = Array.prototype.find.call(t.changedTouches, S);
        if (!x) return !1;
        (d = x.pageX), (f = x.pageY);
      }
    }
    return (
      (s = s || ze(B)),
      (c || u) && ((d = t.clientX + s.x), (f = t.clientY + s.y)),
      (t.pageOffset = s),
      (t.points = [d, f]),
      (t.cursor = c || u),
      t
    );
  }
  function Ce(t) {
    var s = t - At(b, e.ort),
      i = (s * 100) / _e();
    return (i = Oe(i)), e.dir ? 100 - i : i;
  }
  function st(t) {
    var s = 100,
      i = !1;
    return (
      g.forEach(function (a, c) {
        if (!re(c)) {
          var u = C[c],
            d = Math.abs(u - t),
            f = d === 100 && s === 100,
            S = d < s,
            w = d <= s && t > u;
          (S || w || f) && ((i = c), (s = d));
        }
      }),
      i
    );
  }
  function it(t, s) {
    t.type === "mouseout" &&
      t.target.nodeName === "HTML" &&
      t.relatedTarget === null &&
      ae(t, s);
  }
  function nt(t, s) {
    if (
      navigator.appVersion.indexOf("MSIE 9") === -1 &&
      t.buttons === 0 &&
      s.buttonsProperty !== 0
    )
      return ae(t, s);
    var i = (e.dir ? -1 : 1) * (t.calcPoint - s.startCalcPoint),
      a = (i * 100) / s.baseSize;
    Ee(i > 0, a, s.locations, s.handleNumbers, s.connect);
  }
  function ae(t, s) {
    s.handle && (Q(s.handle, e.cssClasses.active), (te -= 1)),
      s.listeners.forEach(function (i) {
        W.removeEventListener(i[0], i[1]);
      }),
      te === 0 &&
        (Q(p, e.cssClasses.drag),
        ce(),
        t.cursor &&
          ((X.style.cursor = ""), X.removeEventListener("selectstart", He))),
      e.events.smoothSteps &&
        (s.handleNumbers.forEach(function (i) {
          T(i, C[i], !0, !0, !1, !1);
        }),
        s.handleNumbers.forEach(function (i) {
          E("update", i);
        })),
      s.handleNumbers.forEach(function (i) {
        E("change", i), E("set", i), E("end", i);
      });
  }
  function oe(t, s) {
    if (!s.handleNumbers.some(re)) {
      var i;
      if (s.handleNumbers.length === 1) {
        var a = g[s.handleNumbers[0]];
        (i = a.children[0]), (te += 1), U(i, e.cssClasses.active);
      }
      t.stopPropagation();
      var c = [],
        u = N(o.move, W, nt, {
          target: t.target,
          handle: i,
          connect: s.connect,
          listeners: c,
          startCalcPoint: t.calcPoint,
          baseSize: _e(),
          pageOffset: t.pageOffset,
          handleNumbers: s.handleNumbers,
          buttonsProperty: t.buttons,
          locations: C.slice(),
        }),
        d = N(o.end, W, ae, {
          target: t.target,
          handle: i,
          listeners: c,
          doNotReject: !0,
          handleNumbers: s.handleNumbers,
        }),
        f = N("mouseout", W, it, {
          target: t.target,
          handle: i,
          listeners: c,
          doNotReject: !0,
          handleNumbers: s.handleNumbers,
        });
      c.push.apply(c, u.concat(d, f)),
        t.cursor &&
          ((X.style.cursor = getComputedStyle(t.target).cursor),
          g.length > 1 && U(p, e.cssClasses.drag),
          X.addEventListener("selectstart", He, !1)),
        s.handleNumbers.forEach(function (S) {
          E("start", S);
        });
    }
  }
  function at(t) {
    t.stopPropagation();
    var s = Ce(t.calcPoint),
      i = st(s);
    i !== !1 &&
      (e.events.snap || Re(p, e.cssClasses.tap, e.animationDuration),
      T(i, s, !0, !0),
      ce(),
      E("slide", i, !0),
      E("update", i, !0),
      e.events.snap
        ? oe(t, { handleNumbers: [i] })
        : (E("change", i, !0), E("set", i, !0)));
  }
  function ot(t) {
    var s = Ce(t.calcPoint),
      i = v.getStep(s),
      a = v.fromStepping(i);
    Object.keys(z).forEach(function (c) {
      c.split(".")[0] === "hover" &&
        z[c].forEach(function (u) {
          u.call(J, a);
        });
    });
  }
  function lt(t, s) {
    if (Se() || re(s)) return !1;
    var i = ["Left", "Right"],
      a = ["Down", "Up"],
      c = ["PageDown", "PageUp"],
      u = ["Home", "End"];
    e.dir && !e.ort
      ? i.reverse()
      : e.ort && !e.dir && (a.reverse(), c.reverse());
    var d = t.key.replace("Arrow", ""),
      f = d === c[0],
      S = d === c[1],
      w = d === a[0] || d === i[0] || f,
      x = d === a[1] || d === i[1] || S,
      _ = d === u[0],
      m = d === u[1];
    if (!w && !x && !_ && !m) return !0;
    t.preventDefault();
    var P;
    if (x || w) {
      var D = w ? 0 : 1,
        A = Ve(s),
        V = A[D];
      if (V === null) return !1;
      V === !1 && (V = v.getDefaultStep(C[s], w, e.keyboardDefaultStep)),
        S || f ? (V *= e.keyboardPageMultiplier) : (V *= e.keyboardMultiplier),
        (V = Math.max(V, 1e-7)),
        (V = (w ? -1 : 1) * V),
        (P = F[s] + V);
    } else
      m
        ? (P = e.spectrum.xVal[e.spectrum.xVal.length - 1])
        : (P = e.spectrum.xVal[0]);
    return (
      T(s, v.toStepping(P), !0, !0),
      E("slide", s),
      E("update", s),
      E("change", s),
      E("set", s),
      !1
    );
  }
  function ut(t) {
    t.fixed ||
      g.forEach(function (s, i) {
        N(o.start, s.children[0], oe, { handleNumbers: [i] });
      }),
      t.tap && N(o.start, b, at, {}),
      t.hover && N(o.move, b, ot, { hover: !0 }),
      t.drag &&
        L.forEach(function (s, i) {
          if (!(s === !1 || i === 0 || i === L.length - 1)) {
            var a = g[i - 1],
              c = g[i],
              u = [s],
              d = [a, c],
              f = [i - 1, i];
            U(s, e.cssClasses.draggable),
              t.fixed && (u.push(a.children[0]), u.push(c.children[0])),
              t.dragAll && ((d = g), (f = H)),
              u.forEach(function (S) {
                N(o.start, S, oe, { handles: d, handleNumbers: f, connect: s });
              });
          }
        });
  }
  function le(t, s) {
    (z[t] = z[t] || []),
      z[t].push(s),
      t.split(".")[0] === "update" &&
        g.forEach(function (i, a) {
          E("update", a);
        });
  }
  function ct(t) {
    return t === $.aria || t === $.tooltips;
  }
  function K(t) {
    var s = t && t.split(".")[0],
      i = s ? t.substring(s.length) : t;
    Object.keys(z).forEach(function (a) {
      var c = a.split(".")[0],
        u = a.substring(c.length);
      (!s || s === c) && (!i || i === u) && (!ct(u) || i === u) && delete z[a];
    });
  }
  function E(t, s, i) {
    Object.keys(z).forEach(function (a) {
      var c = a.split(".")[0];
      t === c &&
        z[a].forEach(function (u) {
          u.call(J, F.map(e.format.to), s, F.slice(), i || !1, C.slice(), J);
        });
    });
  }
  function Y(t, s, i, a, c, u, d) {
    var f;
    return (
      g.length > 1 &&
        !e.events.unconstrained &&
        (a &&
          s > 0 &&
          ((f = v.getAbsoluteDistance(t[s - 1], e.margin, !1)),
          (i = Math.max(i, f))),
        c &&
          s < g.length - 1 &&
          ((f = v.getAbsoluteDistance(t[s + 1], e.margin, !0)),
          (i = Math.min(i, f)))),
      g.length > 1 &&
        e.limit &&
        (a &&
          s > 0 &&
          ((f = v.getAbsoluteDistance(t[s - 1], e.limit, !1)),
          (i = Math.min(i, f))),
        c &&
          s < g.length - 1 &&
          ((f = v.getAbsoluteDistance(t[s + 1], e.limit, !0)),
          (i = Math.max(i, f)))),
      e.padding &&
        (s === 0 &&
          ((f = v.getAbsoluteDistance(0, e.padding[0], !1)),
          (i = Math.max(i, f))),
        s === g.length - 1 &&
          ((f = v.getAbsoluteDistance(100, e.padding[1], !0)),
          (i = Math.min(i, f)))),
      d || (i = v.getStep(i)),
      (i = Oe(i)),
      i === t[s] && !u ? !1 : i
    );
  }
  function ue(t, s) {
    var i = e.ort;
    return (i ? s : t) + ", " + (i ? t : s);
  }
  function Ee(t, s, i, a, c) {
    var u = i.slice(),
      d = a[0],
      f = e.events.smoothSteps,
      S = [!t, t],
      w = [t, !t];
    (a = a.slice()),
      t && a.reverse(),
      a.length > 1
        ? a.forEach(function (_, m) {
            var P = Y(u, _, u[_] + s, S[m], w[m], !1, f);
            P === !1 ? (s = 0) : ((s = P - u[_]), (u[_] = P));
          })
        : (S = w = [!0]);
    var x = !1;
    a.forEach(function (_, m) {
      x = T(_, i[_] + s, S[m], w[m], !1, f) || x;
    }),
      x &&
        (a.forEach(function (_) {
          E("update", _), E("slide", _);
        }),
        c != null && E("drag", d));
  }
  function Pe(t, s) {
    return e.dir ? 100 - t - s : t;
  }
  function ft(t, s) {
    (C[t] = s), (F[t] = v.fromStepping(s));
    var i = Pe(s, 0) - Ke,
      a = "translate(" + ue(i + "%", "0") + ")";
    (g[t].style[e.transformRule] = a), ye(t), ye(t + 1);
  }
  function ce() {
    H.forEach(function (t) {
      var s = C[t] > 50 ? -1 : 1,
        i = 3 + (g.length + s * t);
      g[t].style.zIndex = String(i);
    });
  }
  function T(t, s, i, a, c, u) {
    return c || (s = Y(C, t, s, i, a, !1, u)), s === !1 ? !1 : (ft(t, s), !0);
  }
  function ye(t) {
    if (L[t]) {
      var s = 0,
        i = 100;
      t !== 0 && (s = C[t - 1]), t !== L.length - 1 && (i = C[t]);
      var a = i - s,
        c = "translate(" + ue(Pe(s, a) + "%", "0") + ")",
        u = "scale(" + ue(a / 100, "1") + ")";
      L[t].style[e.transformRule] = c + " " + u;
    }
  }
  function ke(t, s) {
    return t === null ||
      t === !1 ||
      t === void 0 ||
      (typeof t == "number" && (t = String(t)),
      (t = e.format.from(t)),
      t !== !1 && (t = v.toStepping(t)),
      t === !1 || isNaN(t))
      ? C[s]
      : t;
  }
  function G(t, s, i) {
    var a = ee(t),
      c = C[0] === void 0;
    (s = s === void 0 ? !0 : s),
      e.animate && !c && Re(p, e.cssClasses.tap, e.animationDuration),
      H.forEach(function (f) {
        T(f, ke(a[f], f), !0, !1, i);
      });
    var u = H.length === 1 ? 0 : 1;
    if (c && v.hasNoSize() && ((i = !0), (C[0] = 0), H.length > 1)) {
      var d = 100 / (H.length - 1);
      H.forEach(function (f) {
        C[f] = f * d;
      });
    }
    for (; u < H.length; ++u)
      H.forEach(function (f) {
        T(f, C[f], !0, !0, i);
      });
    ce(),
      H.forEach(function (f) {
        E("update", f), a[f] !== null && s && E("set", f);
      });
  }
  function dt(t) {
    G(e.start, t);
  }
  function ht(t, s, i, a) {
    if (((t = Number(t)), !(t >= 0 && t < H.length)))
      throw new Error("noUiSlider: invalid handle number, got: " + t);
    T(t, ke(s, t), !0, !0, a), E("update", t), i && E("set", t);
  }
  function Ae(t) {
    if ((t === void 0 && (t = !1), t))
      return F.length === 1 ? F[0] : F.slice(0);
    var s = F.map(e.format.to);
    return s.length === 1 ? s[0] : s;
  }
  function pt() {
    for (
      K($.aria),
        K($.tooltips),
        Object.keys(e.cssClasses).forEach(function (t) {
          Q(p, e.cssClasses[t]);
        });
      p.firstChild;

    )
      p.removeChild(p.firstChild);
    delete p.noUiSlider;
  }
  function Ve(t) {
    var s = C[t],
      i = v.getNearbySteps(s),
      a = F[t],
      c = i.thisStep.step,
      u = null;
    if (e.snap)
      return [
        a - i.stepBefore.startValue || null,
        i.stepAfter.startValue - a || null,
      ];
    c !== !1 &&
      a + c > i.stepAfter.startValue &&
      (c = i.stepAfter.startValue - a),
      a > i.thisStep.startValue
        ? (u = i.thisStep.step)
        : i.stepBefore.step === !1
          ? (u = !1)
          : (u = a - i.stepBefore.highestStep),
      s === 100 ? (c = null) : s === 0 && (u = null);
    var d = v.countStepDecimals();
    return (
      c !== null && c !== !1 && (c = Number(c.toFixed(d))),
      u !== null && u !== !1 && (u = Number(u.toFixed(d))),
      [u, c]
    );
  }
  function gt() {
    return H.map(Ve);
  }
  function vt(t, s) {
    var i = Ae(),
      a = [
        "margin",
        "limit",
        "padding",
        "range",
        "animate",
        "snap",
        "step",
        "format",
        "pips",
        "tooltips",
      ];
    a.forEach(function (u) {
      t[u] !== void 0 && (n[u] = t[u]);
    });
    var c = Ne(n);
    a.forEach(function (u) {
      t[u] !== void 0 && (e[u] = c[u]);
    }),
      (v = c.spectrum),
      (e.margin = c.margin),
      (e.limit = c.limit),
      (e.padding = c.padding),
      e.pips ? ne(e.pips) : ie(),
      e.tooltips ? be() : se(),
      (C = []),
      G(ge(t.start) ? t.start : i, s);
  }
  function mt() {
    (b = Xe(p)),
      We(e.connect, b),
      ut(e.events),
      G(e.start),
      e.pips && ne(e.pips),
      e.tooltips && be(),
      Qe();
  }
  mt();
  var J = {
    destroy: pt,
    steps: gt,
    on: le,
    off: K,
    get: Ae,
    set: G,
    setHandle: ht,
    reset: dt,
    disable: Ge,
    enable: Je,
    __moveHandles: function (t, s, i) {
      Ee(t, s, C, i);
    },
    options: n,
    updateOptions: vt,
    target: p,
    removePips: ie,
    removeTooltips: se,
    getPositions: function () {
      return C.slice();
    },
    getTooltips: function () {
      return k;
    },
    getOrigins: function () {
      return g;
    },
    pips: ne,
  };
  return J;
}
function ur(r, e) {
  if (!r || !r.nodeName)
    throw new Error("noUiSlider: create requires a single element, got: " + r);
  if (r.noUiSlider)
    throw new Error("noUiSlider: Slider was already initialized.");
  var n = Ne(e),
    o = lr(r, n, e);
  return (r.noUiSlider = o), o;
}
const cr = { __spectrum: je, cssClasses: $e, create: ur };
class fr {
  dropdown;
  dropdownRow;
  dropdownList;
  dropdownItems;
  dropdownCurrent;
  dropdownIcon;
  urlParam;
  currentUrl;
  constructor(e) {
    (this.dropdown = y(e)),
      (this.dropdownRow = this.dropdown.find(".dropdown__row")),
      (this.dropdownList = this.dropdown.find(".dropdown__list")),
      (this.dropdownItems = this.dropdown.find(".dropdown__item")),
      (this.dropdownCurrent = this.dropdown.find(".dropdown__current")),
      (this.dropdownIcon = this.dropdown.find(".dropdown__icon")),
      this.init();
  }
  init() {
    switch (
      ((this.urlParam = new URLSearchParams(window.location.search)),
      (this.currentUrl = this.urlParam.get("isCountry")),
      this.currentVal(),
      this.toggleDropdown(),
      this.dropdownObserver(),
      this.currentUrl !== null && this.changeCurrentVal(this.currentUrl),
      this.currentUrl)
    ) {
      case "0":
        this.dropdownCurrent.text("Все направления");
        break;
      case "1":
        this.dropdownCurrent.text("Египет");
        break;
      case "2":
        this.dropdownCurrent.text("АОЭ");
        break;
      case "3":
        this.dropdownCurrent.text("Таиланд");
        break;
      case "4":
        this.dropdownCurrent.text("Болгария");
        break;
      case "5":
        this.dropdownCurrent.text("Чорногория");
        break;
      case "6":
        this.dropdownCurrent.text("Індонезия");
        break;
      case "7":
        this.dropdownCurrent.text("Грузия");
        break;
      case "8":
        this.dropdownCurrent.text("Греция");
        break;
      case "9":
        this.dropdownCurrent.text("Турция");
        break;
      case "10":
        this.dropdownCurrent.text("Кипр");
        break;
      case "11":
        this.dropdownCurrent.text("Тунис");
        break;
      case "12":
        this.dropdownCurrent.text("Испания");
        break;
      case "13":
        this.dropdownCurrent.text("Украина");
        break;
      default:
        this.dropdownCurrent.text("");
    }
  }
  currentVal() {
    this.dropdownCurrent.text("");
  }
  toggleDropdown() {
    this.dropdownRow.on("click", () => {
      this.dropdownList.toggleClass("dropdown__list_show"),
        this.dropdownIcon.toggleClass("dropdown__icon_rotate");
    }),
      this.dropdownItems.on("click", (e) => {
        this.dropdownCurrent.text(y(e.target).text()),
          this.dropdownList.removeClass("dropdown__list_show"),
          this.dropdownIcon.removeClass("dropdown__icon_rotate");
      }),
      y(document).on("click", (e) => {
        const n = this.dropdown.is(e.target),
          o = this.dropdown.has(e.target).length === 0;
        !n &&
          o &&
          (this.dropdownList.removeClass("dropdown__list_show"),
          this.dropdownIcon.removeClass("dropdown__icon_rotate"));
      });
  }
  dropdownObserver() {
    const e = {
      rootMargin: `0px 0px -${this.dropdownList.outerHeight()}px 0px`,
      threshold: 1,
    };
    new IntersectionObserver(this.callback.bind(this), e).observe(
      this.dropdown[0],
    );
  }
  callback(e) {
    e.forEach((n) => {
      n.isIntersecting
        ? this.dropdownList.css("top", `${this.dropdownRow.outerHeight()}px`)
        : this.dropdownList.css("top", `-${this.dropdownList.outerHeight()}px`);
    });
  }
  changeCurrentVal(e) {
    this.dropdownCurrent.text(e);
  }
}
new fr(".info__destination-select");
class dr {
  constructor() {
    this.priceSlider();
  }
  priceSlider() {
    const e = document.querySelector(".category__slider");
    cr.create(e, {
      start: [600, 3700],
      connect: !0,
      range: { min: 400, max: 4e3 },
      tooltips: !0,
      format: {
        to: function (n) {
          return Math.round(+n) + "€";
        },
        from: function (n) {
          return Math.round(+n);
        },
      },
      step: 200,
      pips: { mode: "range", density: 10 },
    });
  }
}
new dr();
class Te {
  hotelsArr;
  filterArr;
  searchPanelBtn;
  destinationCurrent;
  constructor() {
    (this.searchPanelBtn = y(".search__panel-btn")),
      (this.destinationCurrent = y(".info__destination-current")),
      (this.hotelsArr = []),
      (this.filterArr = []),
      this.initUrl(),
      this.clickSearchPanel();
  }
  async initHotels() {
    try {
      await this.getCountry();
    } catch (e) {
      console.error("Error fetching hotels:", e);
    }
  }
  initUrl() {
    this.initHotels().then(() => {
      this.readDataUrl();
    });
  }
  async getCountry() {
    const e = St(Et),
      n = bt(e, "hotels");
    try {
      const o = await xt(n);
      this.hotelsArr = o.docs.map((l) => l.data());
    } catch (o) {
      console.error("Error getting documents: ", o);
    }
  }
  renderHotels(e) {
    y(".result__content").html(""),
      e.length > 0
        ? e.forEach((n) => {
            const o = `
                <div class="result__hotel">
        
                <div class="result__slider">
                  <div class="swiper result__swiper">
                    <div class="swiper-wrapper result__wrapper">
        
                      <div class="swiper-slide result__slide">
                        <picture>
                          <source srcset="${n.img[0].urlWebp}" type="image/webp">
                          <img src="${n.img[0].url}" alt="photo">
                        </picture>
                      </div>
        
                      <div class="swiper-slide result__slide">
                        <picture>
                          <source srcset="${n.img[1].urlWebp}" type="image/webp">
                          <img src="${n.img[1].url}" alt="photo">
                        </picture>
                      </div>
        
                      <div class="swiper-slide result__slide">
                        <picture>
                          <source srcset="${n.img[2].urlWebp}" type="image/webp">
                          <img src="${n.img[2].url}" alt="photo">
                        </picture>
                      </div>
        
                      <div class="swiper-slide result__slide">
                        <picture>
                          <source srcset="${n.img[3].urlWebp}" type="image/webp">
                          <img src="${n.img[3].url}" alt="photo">
                        </picture>
                      </div>
        
                      <div class="swiper-slide result__slide">
                        <picture>
                          <source srcset="${n.img[4].urlWebp}" type="image/webp">
                          <img src="${n.img[4].url}" alt="photo">
                        </picture>
                      </div>
        
                    </div>
        
                    <div class="swiper-button-next result__btn-next">
                      <svg>
                        <use xlink:href="#chevron-left"></use>
                      </svg>
                    </div>
        
                    <div class="swiper-button-prev result__btn-prev">
                      <svg>
                        <use xlink:href="#chevron-left"></use>
                      </svg>
                    </div>
        
                  </div>
                </div>
        
                <div class="result__row">
        
                  <div class="result__info">
                    <h4 class="result__info-title">${n.name}</h4>
        
                    <div class="result__info-location">
                      <svg>
                        <use xlink:href="#point"></use>
                      </svg>
                      <p class="result__info-country">${n.country}</p>
                      <p class="result__info-region">${n.region}</p>
                    </div>
        
                    <p class="result__info-descript">${n.description[0].main}</p>
                    <a class="result__info-link"  href="hotel.html">
                      Подробнее об отеле
                      <svg>
                        <use xlink:href="#arrow-right"></use>
                      </svg>
                    </a>
                  </div>
        
                  <div class="result__rating">
                    <div class="result__rating-star">
        
                    </div>
        
                    <p class="result__rating-duration">
                      <svg>
                        <use xlink:href="#clock"></use>
                      </svg>
                      ${n.duration}
                    </p>
        
                    <p class="result__rating-meal">
                      <svg>
                        <use xlink:href="#food"></use>
                      </svg>
                      ${n.meals}
                    </p>
        
                    <p class="result__rating-room">
                      <svg>
                        <use xlink:href="#house"></use>
                      </svg>
                      ${n.room[0]}
                    </p>
        
                    <p class="result__rating-beach">
                      <svg>
                        <use xlink:href="#sun"></use>
                      </svg>
                      ${n.beach}
                    </p>
                  </div>
        
                  <div class="result__price">
                    <p class="result__price-num"> ${n.price[0]}</p>
                  </div>
        
                </div>
        
              </div>`;
            y(".result__content").append(o);
          })
        : y(".result__content").html(`
              <div class="result__not-found">
                <h2 class="result__not-found-title">По вашему запросу ничего не найдено</h2>
                <p class="result__not-found-text">Попробуйте изменить параметры поиска</p>
              </div>
              `);
  }
  countryToNumber(e) {
    switch (e) {
      case "Египет":
        return 1;
      case "АОЭ":
        return 2;
      case "Таиланд":
        return 3;
      case "Болгария":
        return 4;
      case "Чорногория":
        return 5;
      case "Индонезия":
        return 6;
      case "Грузия":
        return 7;
      case "Греция":
        return 8;
      case "Турция":
        return 9;
      case "Кипр":
        return 10;
      case "Тунис":
        return 11;
      case "Испания":
        return 12;
      case "Украина":
        return 13;
      default:
        return 0;
    }
  }
  regionToNumber(e) {
    switch (e) {
      case "Шарм-эль-Шейх":
        return 1;
      case "Хургада":
        return 2;
      case "Дубай":
        return 3;
      case "Абу-Даби":
        return 4;
      case "Бангкок":
        return 5;
      case "Хуа Хин":
        return 6;
      case "Солнечный берег":
        return 7;
      case "Золотые пески":
        return 8;
      case "Будва":
        return 9;
      case "Свети Стефан":
        return 10;
      case "Бали":
        return 11;
      case "Батумі":
        return 13;
      case "Родос":
        return 15;
      case "Мармарис":
        return 17;
      case "Пафос":
        return 19;
      case "Сусс":
        return 21;
      case "Тенерифе":
        return 23;
      case "Майорка":
        return 24;
      case "Буковель":
        return 25;
      case "Улудаг":
        return 27;
      case "Бансько":
        return 28;
      case "Боровець":
        return 29;
      default:
        return 0;
    }
  }
  renderRegions(e) {
    y(".category__regions-item").html(""),
      e.forEach((n) => {
        const o = `
        <button data-region="${n.region}" class="category__btns category__btns-regions">
          <svg>
            <use xlink:href="#check-circle"></use>
          </svg>
          ${n.region}
        </button>`;
        y(".category__regions-item").append(o);
      }),
      y(".category__btns-regions").on("click", (n) => {
        const o = y(n.currentTarget).data("region"),
          l = this.regionToNumber(o),
          h = new URL(window.location.href);
        h.searchParams.set("isRegion", l.toString()),
          window.history.pushState({}, "", h.toString()),
          localStorage.setItem("region", l.toString());
      }),
      y(".category__regions-item").children().length > 5
        ? y(".category__regions-item").removeClass(
            "category__regions-item_change",
          )
        : y(".category__regions-item").addClass(
            "category__regions-item_change",
          );
  }
  clickSearchPanel() {
    this.searchPanelBtn.on("click", () => {
      this.filterCountry();
    });
  }
  filterCountry() {
    const e = this.destinationCurrent.text().trim(),
      n = this.countryToNumber(e);
    (this.filterArr = this.hotelsArr.filter((l) =>
      n === 0 ? l : l.isCountry === n,
    )),
      this.renderHotels(this.filterArr),
      this.renderRegions(this.filterArr);
    const o = new URL(window.location.href);
    o.searchParams.set("isCountry", n.toString()),
      window.history.pushState({}, "", o.toString());
  }
  readDataUrl() {
    new URLSearchParams(window.location.search).get("isCountry") &&
      this.filterCountry();
  }
}
class Be extends Te {
  regionFilter;
  regionCurrent;
  constructor() {
    super(),
      (this.regionCurrent = y(".category__regions-current")),
      (this.regionFilter = []),
      this.clickSearchPanelRegion();
  }
  clickSearchPanelRegion() {
    this.searchPanelBtn.off("click"),
      this.searchPanelBtn.on("click", () => {
        this.filterRegion();
      });
  }
  filterRegion() {
    const n = new URLSearchParams(window.location.search).get("isRegion"),
      o = parseInt(n);
    console.log(o),
      n &&
        ((this.regionFilter = this.filterArr?.filter((l) =>
          o === 0 ? l : l && l.isRegion === o,
        )),
        console.log(this.regionFilter),
        this.regionFilter && this.renderHotels(this.regionFilter));
  }
}
class hr extends Be {
  updatePriceMax;
  constructor() {
    super(), this.selectMeal(), this.selectTour(), this.fillterPrice();
  }
  selectMeal() {
    y(".category__btns-meals[data-meals]").on("click", (e) => {
      const n = y(e.currentTarget).data("meals");
      console.log(n);
      const o = this.numberToMeals(n),
        l = new URL(window.location.href);
      l.searchParams.set("isMeals", o.toString()),
        window.history.pushState({}, "", l.toString()),
        this.filterMeals();
    });
  }
  numberToMeals(e) {
    switch (e) {
      case "ao":
        return 1;
      case "bb":
        return 2;
      case "hb":
        return 3;
      case "fb":
        return 4;
      case "ai":
        return 5;
      case "uai":
        return 6;
      default:
        return 0;
    }
  }
  filterMeals() {
    const n = new URLSearchParams(window.location.search).get("isMeals"),
      o = parseInt(n);
    console.log(o);
    const l = this.filterArr?.filter((h) => (o === 0 ? h : h.isMeals === o));
    l && (console.log(l), this.renderHotels(l));
  }
  selectTour() {
    y(".category__btns-tour").on("click", (e) => {
      const n = y(e.currentTarget).data("tour");
      console.log(n);
      const o = this.filterArr?.filter((p) => p.touristPackage === !0),
        l = this.filterArr?.filter((p) => p.flight === !0);
      o && l
        ? (this.renderHotels(o), this.renderHotels(l))
        : this.filterArr && this.renderHotels(this.filterArr);
      const h = new URL(window.location.href);
      h.searchParams.set("flight", "true"),
        h.searchParams.set("touristPackage", "true"),
        window.history.pushState({}, "", h.toString());
    });
  }
  fillterPrice() {}
}
new Be();
new hr();
document.addEventListener("DOMContentLoaded", async () => {
  new _t(), new Te();
});
