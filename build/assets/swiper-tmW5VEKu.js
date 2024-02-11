function ue(s) {
  return (
    s !== null &&
    typeof s == "object" &&
    "constructor" in s &&
    s.constructor === Object
  );
}
function de(s, e) {
  s === void 0 && (s = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((t) => {
      typeof s[t] > "u"
        ? (s[t] = e[t])
        : ue(e[t]) &&
          ue(s[t]) &&
          Object.keys(e[t]).length > 0 &&
          de(s[t], e[t]);
    });
}
const ge = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function F() {
  const s = typeof document < "u" ? document : {};
  return de(s, ge), s;
}
const Te = {
  document: ge,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(s) {
    return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
  },
  cancelAnimationFrame(s) {
    typeof setTimeout > "u" || clearTimeout(s);
  },
};
function $() {
  const s = typeof window < "u" ? window : {};
  return de(s, Te), s;
}
function H(s) {
  return (
    s === void 0 && (s = ""),
    s
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function xe(s) {
  const e = s;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
function J(s, e) {
  return e === void 0 && (e = 0), setTimeout(s, e);
}
function Q() {
  return Date.now();
}
function Ee(s) {
  const e = $();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(s, null)),
    !t && s.currentStyle && (t = s.currentStyle),
    t || (t = s.style),
    t
  );
}
function Ce(s, e) {
  e === void 0 && (e = "x");
  const t = $();
  let i, n, r;
  const o = Ee(s);
  return (
    t.WebKitCSSMatrix
      ? ((n = o.transform || o.webkitTransform),
        n.split(",").length > 6 &&
          (n = n
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (r = new t.WebKitCSSMatrix(n === "none" ? "" : n)))
      : ((r =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = r.toString().split(","))),
    e === "x" &&
      (t.WebKitCSSMatrix
        ? (n = r.m41)
        : i.length === 16
          ? (n = parseFloat(i[12]))
          : (n = parseFloat(i[4]))),
    e === "y" &&
      (t.WebKitCSSMatrix
        ? (n = r.m42)
        : i.length === 16
          ? (n = parseFloat(i[13]))
          : (n = parseFloat(i[5]))),
    n || 0
  );
}
function W(s) {
  return (
    typeof s == "object" &&
    s !== null &&
    s.constructor &&
    Object.prototype.toString.call(s).slice(8, -1) === "Object"
  );
}
function Pe(s) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? s instanceof HTMLElement
    : s && (s.nodeType === 1 || s.nodeType === 11);
}
function _() {
  const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (i != null && !Pe(i)) {
      const n = Object.keys(Object(i)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, o = n.length; r < o; r += 1) {
        const l = n[r],
          a = Object.getOwnPropertyDescriptor(i, l);
        a !== void 0 &&
          a.enumerable &&
          (W(s[l]) && W(i[l])
            ? i[l].__swiper__
              ? (s[l] = i[l])
              : _(s[l], i[l])
            : !W(s[l]) && W(i[l])
              ? ((s[l] = {}), i[l].__swiper__ ? (s[l] = i[l]) : _(s[l], i[l]))
              : (s[l] = i[l]));
      }
    }
  }
  return s;
}
function U(s, e, t) {
  s.style.setProperty(e, t);
}
function ve(s) {
  let { swiper: e, targetPosition: t, side: i } = s;
  const n = $(),
    r = -e.translate;
  let o = null,
    l;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    n.cancelAnimationFrame(e.cssModeFrameID);
  const u = t > r ? "next" : "prev",
    d = (h, m) => (u === "next" && h >= m) || (u === "prev" && h <= m),
    p = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const h = Math.max(Math.min((l - o) / a, 1), 0),
        m = 0.5 - Math.cos(h * Math.PI) / 2;
      let b = r + m * (t - r);
      if ((d(b, t) && (b = t), e.wrapperEl.scrollTo({ [i]: b }), d(b, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [i]: b });
          }),
          n.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = n.requestAnimationFrame(p);
    };
  p();
}
function N(s, e) {
  return e === void 0 && (e = ""), [...s.children].filter((t) => t.matches(e));
}
function Z(s) {
  try {
    console.warn(s);
    return;
  } catch {}
}
function Y(s, e) {
  e === void 0 && (e = []);
  const t = document.createElement(s);
  return t.classList.add(...(Array.isArray(e) ? e : H(e))), t;
}
function Me(s) {
  const e = $(),
    t = F(),
    i = s.getBoundingClientRect(),
    n = t.body,
    r = s.clientTop || n.clientTop || 0,
    o = s.clientLeft || n.clientLeft || 0,
    l = s === e ? e.scrollY : s.scrollTop,
    a = s === e ? e.scrollX : s.scrollLeft;
  return { top: i.top + l - r, left: i.left + a - o };
}
function Le(s, e) {
  const t = [];
  for (; s.previousElementSibling; ) {
    const i = s.previousElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
  }
  return t;
}
function Ie(s, e) {
  const t = [];
  for (; s.nextElementSibling; ) {
    const i = s.nextElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
  }
  return t;
}
function R(s, e) {
  return $().getComputedStyle(s, null).getPropertyValue(e);
}
function ee(s) {
  let e = s,
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function we(s, e) {
  const t = [];
  let i = s.parentElement;
  for (; i; ) e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
  return t;
}
function le(s, e, t) {
  const i = $();
  return t
    ? s[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          i
            .getComputedStyle(s, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top"),
        ) +
        parseFloat(
          i
            .getComputedStyle(s, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"),
        )
    : s.offsetWidth;
}
let te;
function Oe() {
  const s = $(),
    e = F();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in s ||
      (s.DocumentTouch && e instanceof s.DocumentTouch)
    ),
  };
}
function be() {
  return te || (te = Oe()), te;
}
let se;
function Ae(s) {
  let { userAgent: e } = s === void 0 ? {} : s;
  const t = be(),
    i = $(),
    n = i.navigator.platform,
    r = e || i.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = i.screen.width,
    a = i.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = r.match(/(iPad).*OS\s([\d_]+)/);
  const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = n === "Win32";
  let b = n === "MacIntel";
  const g = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !d &&
      b &&
      t.touch &&
      g.indexOf(`${l}x${a}`) >= 0 &&
      ((d = r.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (b = !1)),
    u && !m && ((o.os = "android"), (o.android = !0)),
    (d || h || p) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function ze(s) {
  return s === void 0 && (s = {}), se || (se = Ae(s)), se;
}
let ie;
function De() {
  const s = $();
  let e = !1;
  function t() {
    const i = s.navigator.userAgent.toLowerCase();
    return (
      i.indexOf("safari") >= 0 &&
      i.indexOf("chrome") < 0 &&
      i.indexOf("android") < 0
    );
  }
  if (t()) {
    const i = String(s.navigator.userAgent);
    if (i.includes("Version/")) {
      const [n, r] = i
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((o) => Number(o));
      e = n < 16 || (n === 16 && r < 2);
    }
  }
  return {
    isSafari: e || t(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      s.navigator.userAgent,
    ),
  };
}
function ke() {
  return ie || (ie = De()), ie;
}
function Ve(s) {
  let { swiper: e, on: t, emit: i } = s;
  const n = $();
  let r = null,
    o = null;
  const l = () => {
      !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((r = new ResizeObserver((p) => {
          o = n.requestAnimationFrame(() => {
            const { width: h, height: m } = e;
            let b = h,
              g = m;
            p.forEach((y) => {
              let { contentBoxSize: v, contentRect: c, target: f } = y;
              (f && f !== e.el) ||
                ((b = c ? c.width : (v[0] || v).inlineSize),
                (g = c ? c.height : (v[0] || v).blockSize));
            }),
              (b !== h || g !== m) && l();
          });
        })),
        r.observe(e.el));
    },
    u = () => {
      o && n.cancelAnimationFrame(o),
        r && r.unobserve && e.el && (r.unobserve(e.el), (r = null));
    },
    d = () => {
      !e || e.destroyed || !e.initialized || i("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      a();
      return;
    }
    n.addEventListener("resize", l), n.addEventListener("orientationchange", d);
  }),
    t("destroy", () => {
      u(),
        n.removeEventListener("resize", l),
        n.removeEventListener("orientationchange", d);
    });
}
function Ge(s) {
  let { swiper: e, extendParams: t, on: i, emit: n } = s;
  const r = [],
    o = $(),
    l = function (d, p) {
      p === void 0 && (p = {});
      const h = o.MutationObserver || o.WebkitMutationObserver,
        m = new h((b) => {
          if (e.__preventObserver__) return;
          if (b.length === 1) {
            n("observerUpdate", b[0]);
            return;
          }
          const g = function () {
            n("observerUpdate", b[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(g)
            : o.setTimeout(g, 0);
        });
      m.observe(d, {
        attributes: typeof p.attributes > "u" ? !0 : p.attributes,
        childList: typeof p.childList > "u" ? !0 : p.childList,
        characterData: typeof p.characterData > "u" ? !0 : p.characterData,
      }),
        r.push(m);
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const d = we(e.hostEl);
          for (let p = 0; p < d.length; p += 1) l(d[p]);
        }
        l(e.hostEl, { childList: e.params.observeSlideChildren }),
          l(e.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      r.forEach((d) => {
        d.disconnect();
      }),
        r.splice(0, r.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i("init", a),
    i("destroy", u);
}
var Be = {
  on(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const n = t ? "unshift" : "push";
    return (
      s.split(" ").forEach((r) => {
        i.eventsListeners[r] || (i.eventsListeners[r] = []),
          i.eventsListeners[r][n](e);
      }),
      i
    );
  },
  once(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function n() {
      i.off(s, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
        o[l] = arguments[l];
      e.apply(i, o);
    }
    return (n.__emitterProxy = e), i.on(s, n, t);
  },
  onAny(s, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof s != "function") return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t;
  },
  offAny(s) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(s);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(s, e) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        s.split(" ").forEach((i) => {
          typeof e > "u"
            ? (t.eventsListeners[i] = [])
            : t.eventsListeners[i] &&
              t.eventsListeners[i].forEach((n, r) => {
                (n === e || (n.__emitterProxy && n.__emitterProxy === e)) &&
                  t.eventsListeners[i].splice(r, 1);
              });
        }),
      t
    );
  },
  emit() {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
    let e, t, i;
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((e = r[0]), (t = r.slice(1, r.length)), (i = s))
        : ((e = r[0].events), (t = r[0].data), (i = r[0].context || s)),
      t.unshift(i),
      (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
        s.eventsAnyListeners &&
          s.eventsAnyListeners.length &&
          s.eventsAnyListeners.forEach((u) => {
            u.apply(i, [a, ...t]);
          }),
          s.eventsListeners &&
            s.eventsListeners[a] &&
            s.eventsListeners[a].forEach((u) => {
              u.apply(i, t);
            });
      }),
      s
    );
  },
};
function $e() {
  const s = this;
  let e, t;
  const i = s.el;
  typeof s.params.width < "u" && s.params.width !== null
    ? (e = s.params.width)
    : (e = i.clientWidth),
    typeof s.params.height < "u" && s.params.height !== null
      ? (t = s.params.height)
      : (t = i.clientHeight),
    !((e === 0 && s.isHorizontal()) || (t === 0 && s.isVertical())) &&
      ((e =
        e -
        parseInt(R(i, "padding-left") || 0, 10) -
        parseInt(R(i, "padding-right") || 0, 10)),
      (t =
        t -
        parseInt(R(i, "padding-top") || 0, 10) -
        parseInt(R(i, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(s, {
        width: e,
        height: t,
        size: s.isHorizontal() ? e : t,
      }));
}
function _e() {
  const s = this;
  function e(E, M) {
    return parseFloat(E.getPropertyValue(s.getDirectionLabel(M)) || 0);
  }
  const t = s.params,
    { wrapperEl: i, slidesEl: n, size: r, rtlTranslate: o, wrongRTL: l } = s,
    a = s.virtual && t.virtual.enabled,
    u = a ? s.virtual.slides.length : s.slides.length,
    d = N(n, `.${s.params.slideClass}, swiper-slide`),
    p = a ? s.virtual.slides.length : d.length;
  let h = [];
  const m = [],
    b = [];
  let g = t.slidesOffsetBefore;
  typeof g == "function" && (g = t.slidesOffsetBefore.call(s));
  let y = t.slidesOffsetAfter;
  typeof y == "function" && (y = t.slidesOffsetAfter.call(s));
  const v = s.snapGrid.length,
    c = s.slidesGrid.length;
  let f = t.spaceBetween,
    w = -g,
    x = 0,
    L = 0;
  if (typeof r > "u") return;
  typeof f == "string" && f.indexOf("%") >= 0
    ? (f = (parseFloat(f.replace("%", "")) / 100) * r)
    : typeof f == "string" && (f = parseFloat(f)),
    (s.virtualSize = -f),
    d.forEach((E) => {
      o ? (E.style.marginLeft = "") : (E.style.marginRight = ""),
        (E.style.marginBottom = ""),
        (E.style.marginTop = "");
    }),
    t.centeredSlides &&
      t.cssMode &&
      (U(i, "--swiper-centered-offset-before", ""),
      U(i, "--swiper-centered-offset-after", ""));
  const k = t.grid && t.grid.rows > 1 && s.grid;
  k ? s.grid.initSlides(d) : s.grid && s.grid.unsetSlides();
  let z;
  const O =
    t.slidesPerView === "auto" &&
    t.breakpoints &&
    Object.keys(t.breakpoints).filter(
      (E) => typeof t.breakpoints[E].slidesPerView < "u",
    ).length > 0;
  for (let E = 0; E < p; E += 1) {
    z = 0;
    let M;
    if (
      (d[E] && (M = d[E]),
      k && s.grid.updateSlide(E, M, d),
      !(d[E] && R(M, "display") === "none"))
    ) {
      if (t.slidesPerView === "auto") {
        O && (d[E].style[s.getDirectionLabel("width")] = "");
        const T = getComputedStyle(M),
          S = M.style.transform,
          C = M.style.webkitTransform;
        if (
          (S && (M.style.transform = "none"),
          C && (M.style.webkitTransform = "none"),
          t.roundLengths)
        )
          z = s.isHorizontal() ? le(M, "width", !0) : le(M, "height", !0);
        else {
          const P = e(T, "width"),
            I = e(T, "padding-left"),
            B = e(T, "padding-right"),
            A = e(T, "margin-left"),
            D = e(T, "margin-right"),
            G = T.getPropertyValue("box-sizing");
          if (G && G === "border-box") z = P + A + D;
          else {
            const { clientWidth: q, offsetWidth: X } = M;
            z = P + I + B + A + D + (X - q);
          }
        }
        S && (M.style.transform = S),
          C && (M.style.webkitTransform = C),
          t.roundLengths && (z = Math.floor(z));
      } else
        (z = (r - (t.slidesPerView - 1) * f) / t.slidesPerView),
          t.roundLengths && (z = Math.floor(z)),
          d[E] && (d[E].style[s.getDirectionLabel("width")] = `${z}px`);
      d[E] && (d[E].swiperSlideSize = z),
        b.push(z),
        t.centeredSlides
          ? ((w = w + z / 2 + x / 2 + f),
            x === 0 && E !== 0 && (w = w - r / 2 - f),
            E === 0 && (w = w - r / 2 - f),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            t.roundLengths && (w = Math.floor(w)),
            L % t.slidesPerGroup === 0 && h.push(w),
            m.push(w))
          : (t.roundLengths && (w = Math.floor(w)),
            (L - Math.min(s.params.slidesPerGroupSkip, L)) %
              s.params.slidesPerGroup ===
              0 && h.push(w),
            m.push(w),
            (w = w + z + f)),
        (s.virtualSize += z + f),
        (x = z),
        (L += 1);
    }
  }
  if (
    ((s.virtualSize = Math.max(s.virtualSize, r) + y),
    o &&
      l &&
      (t.effect === "slide" || t.effect === "coverflow") &&
      (i.style.width = `${s.virtualSize + f}px`),
    t.setWrapperSize &&
      (i.style[s.getDirectionLabel("width")] = `${s.virtualSize + f}px`),
    k && s.grid.updateWrapperSize(z, h),
    !t.centeredSlides)
  ) {
    const E = [];
    for (let M = 0; M < h.length; M += 1) {
      let T = h[M];
      t.roundLengths && (T = Math.floor(T)),
        h[M] <= s.virtualSize - r && E.push(T);
    }
    (h = E),
      Math.floor(s.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 &&
        h.push(s.virtualSize - r);
  }
  if (a && t.loop) {
    const E = b[0] + f;
    if (t.slidesPerGroup > 1) {
      const M = Math.ceil(
          (s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup,
        ),
        T = E * t.slidesPerGroup;
      for (let S = 0; S < M; S += 1) h.push(h[h.length - 1] + T);
    }
    for (let M = 0; M < s.virtual.slidesBefore + s.virtual.slidesAfter; M += 1)
      t.slidesPerGroup === 1 && h.push(h[h.length - 1] + E),
        m.push(m[m.length - 1] + E),
        (s.virtualSize += E);
  }
  if ((h.length === 0 && (h = [0]), f !== 0)) {
    const E =
      s.isHorizontal() && o ? "marginLeft" : s.getDirectionLabel("marginRight");
    d.filter((M, T) =>
      !t.cssMode || t.loop ? !0 : T !== d.length - 1,
    ).forEach((M) => {
      M.style[E] = `${f}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let E = 0;
    b.forEach((T) => {
      E += T + (f || 0);
    }),
      (E -= f);
    const M = E - r;
    h = h.map((T) => (T <= 0 ? -g : T > M ? M + y : T));
  }
  if (t.centerInsufficientSlides) {
    let E = 0;
    if (
      (b.forEach((M) => {
        E += M + (f || 0);
      }),
      (E -= f),
      E < r)
    ) {
      const M = (r - E) / 2;
      h.forEach((T, S) => {
        h[S] = T - M;
      }),
        m.forEach((T, S) => {
          m[S] = T + M;
        });
    }
  }
  if (
    (Object.assign(s, {
      slides: d,
      snapGrid: h,
      slidesGrid: m,
      slidesSizesGrid: b,
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
  ) {
    U(i, "--swiper-centered-offset-before", `${-h[0]}px`),
      U(
        i,
        "--swiper-centered-offset-after",
        `${s.size / 2 - b[b.length - 1] / 2}px`,
      );
    const E = -s.snapGrid[0],
      M = -s.slidesGrid[0];
    (s.snapGrid = s.snapGrid.map((T) => T + E)),
      (s.slidesGrid = s.slidesGrid.map((T) => T + M));
  }
  if (
    (p !== u && s.emit("slidesLengthChange"),
    h.length !== v &&
      (s.params.watchOverflow && s.checkOverflow(),
      s.emit("snapGridLengthChange")),
    m.length !== c && s.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && s.updateSlidesOffset(),
    s.emit("slidesUpdated"),
    !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
  ) {
    const E = `${t.containerModifierClass}backface-hidden`,
      M = s.el.classList.contains(E);
    p <= t.maxBackfaceHiddenSlides
      ? M || s.el.classList.add(E)
      : M && s.el.classList.remove(E);
  }
}
function Fe(s) {
  const e = this,
    t = [],
    i = e.virtual && e.params.virtual.enabled;
  let n = 0,
    r;
  typeof s == "number"
    ? e.setTransition(s)
    : s === !0 && e.setTransition(e.params.speed);
  const o = (l) => (i ? e.slides[e.getSlideIndexByData(l)] : e.slides[l]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((l) => {
        t.push(l);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const l = e.activeIndex + r;
        if (l > e.slides.length && !i) break;
        t.push(o(l));
      }
  else t.push(o(e.activeIndex));
  for (r = 0; r < t.length; r += 1)
    if (typeof t[r] < "u") {
      const l = t[r].offsetHeight;
      n = l > n ? l : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function Ne() {
  const s = this,
    e = s.slides,
    t = s.isElement
      ? s.isHorizontal()
        ? s.wrapperEl.offsetLeft
        : s.wrapperEl.offsetTop
      : 0;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset =
      (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
      t -
      s.cssOverflowAdjustment();
}
function He(s) {
  s === void 0 && (s = (this && this.translate) || 0);
  const e = this,
    t = e.params,
    { slides: i, rtlTranslate: n, snapGrid: r } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -s;
  n && (o = s),
    i.forEach((a) => {
      a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  let l = t.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * e.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < i.length; a += 1) {
    const u = i[a];
    let d = u.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
    const p =
        (o + (t.centeredSlides ? e.minTranslate() : 0) - d) /
        (u.swiperSlideSize + l),
      h =
        (o - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) /
        (u.swiperSlideSize + l),
      m = -(o - d),
      b = m + e.slidesSizesGrid[a],
      g = m >= 0 && m <= e.size - e.slidesSizesGrid[a];
    ((m >= 0 && m < e.size - 1) ||
      (b > 1 && b <= e.size) ||
      (m <= 0 && b >= e.size)) &&
      (e.visibleSlides.push(u),
      e.visibleSlidesIndexes.push(a),
      i[a].classList.add(t.slideVisibleClass)),
      g && i[a].classList.add(t.slideFullyVisibleClass),
      (u.progress = n ? -p : p),
      (u.originalProgress = n ? -h : h);
  }
}
function Re(s) {
  const e = this;
  if (typeof s > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    s = (e && e.translate && e.translate * d) || 0;
  }
  const t = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: n, isBeginning: r, isEnd: o, progressLoop: l } = e;
  const a = r,
    u = o;
  if (i === 0) (n = 0), (r = !0), (o = !0);
  else {
    n = (s - e.minTranslate()) / i;
    const d = Math.abs(s - e.minTranslate()) < 1,
      p = Math.abs(s - e.maxTranslate()) < 1;
    (r = d || n <= 0), (o = p || n >= 1), d && (n = 0), p && (n = 1);
  }
  if (t.loop) {
    const d = e.getSlideIndexByData(0),
      p = e.getSlideIndexByData(e.slides.length - 1),
      h = e.slidesGrid[d],
      m = e.slidesGrid[p],
      b = e.slidesGrid[e.slidesGrid.length - 1],
      g = Math.abs(s);
    g >= h ? (l = (g - h) / b) : (l = (g + b - m) / b), l > 1 && (l -= 1);
  }
  Object.assign(e, { progress: n, progressLoop: l, isBeginning: r, isEnd: o }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(s),
    r && !a && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    ((a && !r) || (u && !o)) && e.emit("fromEdge"),
    e.emit("progress", n);
}
function qe() {
  const s = this,
    { slides: e, params: t, slidesEl: i, activeIndex: n } = s,
    r = s.virtual && t.virtual.enabled,
    o = s.grid && t.grid && t.grid.rows > 1,
    l = (p) => N(i, `.${t.slideClass}${p}, swiper-slide${p}`)[0];
  e.forEach((p) => {
    p.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass);
  });
  let a, u, d;
  if (r)
    if (t.loop) {
      let p = n - s.virtual.slidesBefore;
      p < 0 && (p = s.virtual.slides.length + p),
        p >= s.virtual.slides.length && (p -= s.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${p}"]`));
    } else a = l(`[data-swiper-slide-index="${n}"]`);
  else
    o
      ? ((a = e.filter((p) => p.column === n)[0]),
        (d = e.filter((p) => p.column === n + 1)[0]),
        (u = e.filter((p) => p.column === n - 1)[0]))
      : (a = e[n]);
  a &&
    (a.classList.add(t.slideActiveClass),
    o
      ? (d && d.classList.add(t.slideNextClass),
        u && u.classList.add(t.slidePrevClass))
      : ((d = Ie(a, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !d && (d = e[0]),
        d && d.classList.add(t.slideNextClass),
        (u = Le(a, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u === 0 && (u = e[e.length - 1]),
        u && u.classList.add(t.slidePrevClass))),
    s.emitSlidesClasses();
}
const K = (s, e) => {
    if (!s || s.destroyed || !s.params) return;
    const t = () => (s.isElement ? "swiper-slide" : `.${s.params.slideClass}`),
      i = e.closest(t());
    if (i) {
      let n = i.querySelector(`.${s.params.lazyPreloaderClass}`);
      !n &&
        s.isElement &&
        (i.shadowRoot
          ? (n = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              i.shadowRoot &&
                ((n = i.shadowRoot.querySelector(
                  `.${s.params.lazyPreloaderClass}`,
                )),
                n && n.remove());
            })),
        n && n.remove();
    }
  },
  re = (s, e) => {
    if (!s.slides[e]) return;
    const t = s.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  },
  oe = (s) => {
    if (!s || s.destroyed || !s.params) return;
    let e = s.params.lazyPreloadPrevNext;
    const t = s.slides.length;
    if (!t || !e || e < 0) return;
    e = Math.min(e, t);
    const i =
        s.params.slidesPerView === "auto"
          ? s.slidesPerViewDynamic()
          : Math.ceil(s.params.slidesPerView),
      n = s.activeIndex;
    if (s.params.grid && s.params.grid.rows > 1) {
      const o = n,
        l = [o - e];
      l.push(...Array.from({ length: e }).map((a, u) => o + i + u)),
        s.slides.forEach((a, u) => {
          l.includes(a.column) && re(s, u);
        });
      return;
    }
    const r = n + i - 1;
    if (s.params.rewind || s.params.loop)
      for (let o = n - e; o <= r + e; o += 1) {
        const l = ((o % t) + t) % t;
        (l < n || l > r) && re(s, l);
      }
    else
      for (let o = Math.max(n - e, 0); o <= Math.min(r + e, t - 1); o += 1)
        o !== n && (o > r || o < n) && re(s, o);
  };
function je(s) {
  const { slidesGrid: e, params: t } = s,
    i = s.rtlTranslate ? s.translate : -s.translate;
  let n;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u"
      ? i >= e[r] && i < e[r + 1] - (e[r + 1] - e[r]) / 2
        ? (n = r)
        : i >= e[r] && i < e[r + 1] && (n = r + 1)
      : i >= e[r] && (n = r);
  return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function We(s) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: i, params: n, activeIndex: r, realIndex: o, snapIndex: l } = e;
  let a = s,
    u;
  const d = (m) => {
    let b = m - e.virtual.slidesBefore;
    return (
      b < 0 && (b = e.virtual.slides.length + b),
      b >= e.virtual.slides.length && (b -= e.virtual.slides.length),
      b
    );
  };
  if ((typeof a > "u" && (a = je(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
  else {
    const m = Math.min(n.slidesPerGroupSkip, a);
    u = m + Math.floor((a - m) / n.slidesPerGroup);
  }
  if ((u >= i.length && (u = i.length - 1), a === r && !e.params.loop)) {
    u !== l && ((e.snapIndex = u), e.emit("snapIndexChange"));
    return;
  }
  if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(a);
    return;
  }
  const p = e.grid && n.grid && n.grid.rows > 1;
  let h;
  if (e.virtual && n.virtual.enabled && n.loop) h = d(a);
  else if (p) {
    const m = e.slides.filter((g) => g.column === a)[0];
    let b = parseInt(m.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(b) && (b = Math.max(e.slides.indexOf(m), 0)),
      (h = Math.floor(b / n.grid.rows));
  } else if (e.slides[a]) {
    const m = e.slides[a].getAttribute("data-swiper-slide-index");
    m ? (h = parseInt(m, 10)) : (h = a);
  } else h = a;
  Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: h,
    previousIndex: r,
    activeIndex: a,
  }),
    e.initialized && oe(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (o !== h && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Ye(s, e) {
  const t = this,
    i = t.params;
  let n = s.closest(`.${i.slideClass}, swiper-slide`);
  !n &&
    t.isElement &&
    e &&
    e.length > 1 &&
    e.includes(s) &&
    [...e.slice(e.indexOf(s) + 1, e.length)].forEach((l) => {
      !n && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (n = l);
    });
  let r = !1,
    o;
  if (n) {
    for (let l = 0; l < t.slides.length; l += 1)
      if (t.slides[l] === n) {
        (r = !0), (o = l);
        break;
      }
  }
  if (n && r)
    (t.clickedSlide = n),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            n.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (t.clickedIndex = o);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
var Xe = {
  updateSize: $e,
  updateSlides: _e,
  updateAutoHeight: Fe,
  updateSlidesOffset: Ne,
  updateSlidesProgress: He,
  updateProgress: Re,
  updateSlidesClasses: qe,
  updateActiveIndex: We,
  updateClickedSlide: Ye,
};
function Ue(s) {
  s === void 0 && (s = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: t, rtlTranslate: i, translate: n, wrapperEl: r } = e;
  if (t.virtualTranslate) return i ? -n : n;
  if (t.cssMode) return n;
  let o = Ce(r, s);
  return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
}
function Ke(s, e) {
  const t = this,
    { rtlTranslate: i, params: n, wrapperEl: r, progress: o } = t;
  let l = 0,
    a = 0;
  const u = 0;
  t.isHorizontal() ? (l = i ? -s : s) : (a = s),
    n.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? l : a),
    n.cssMode
      ? (r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -l
          : -a)
      : n.virtualTranslate ||
        (t.isHorizontal()
          ? (l -= t.cssOverflowAdjustment())
          : (a -= t.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`));
  let d;
  const p = t.maxTranslate() - t.minTranslate();
  p === 0 ? (d = 0) : (d = (s - t.minTranslate()) / p),
    d !== o && t.updateProgress(s),
    t.emit("setTranslate", t.translate, e);
}
function Je() {
  return -this.snapGrid[0];
}
function Qe() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Ze(s, e, t, i, n) {
  s === void 0 && (s = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    i === void 0 && (i = !0);
  const r = this,
    { params: o, wrapperEl: l } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    u = r.maxTranslate();
  let d;
  if (
    (i && s > a ? (d = a) : i && s < u ? (d = u) : (d = s),
    r.updateProgress(d),
    o.cssMode)
  ) {
    const p = r.isHorizontal();
    if (e === 0) l[p ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!r.support.smoothScroll)
        return (
          ve({ swiper: r, targetPosition: -d, side: p ? "left" : "top" }), !0
        );
      l.scrollTo({ [p ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (r.setTransition(0),
        r.setTranslate(d),
        t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd")))
      : (r.setTransition(e),
        r.setTranslate(d),
        t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (h) {
              !r ||
                r.destroyed ||
                (h.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  t && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var et = {
  getTranslate: Ue,
  setTranslate: Ke,
  minTranslate: Je,
  maxTranslate: Qe,
  translateTo: Ze,
};
function tt(s, e) {
  const t = this;
  t.params.cssMode ||
    ((t.wrapperEl.style.transitionDuration = `${s}ms`),
    (t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
    t.emit("setTransition", s, e);
}
function ye(s) {
  let { swiper: e, runCallbacks: t, direction: i, step: n } = s;
  const { activeIndex: r, previousIndex: o } = e;
  let l = i;
  if (
    (l || (r > o ? (l = "next") : r < o ? (l = "prev") : (l = "reset")),
    e.emit(`transition${n}`),
    t && r !== o)
  ) {
    if (l === "reset") {
      e.emit(`slideResetTransition${n}`);
      return;
    }
    e.emit(`slideChangeTransition${n}`),
      l === "next"
        ? e.emit(`slideNextTransition${n}`)
        : e.emit(`slidePrevTransition${n}`);
  }
}
function st(s, e) {
  s === void 0 && (s = !0);
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    ye({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
}
function it(s, e) {
  s === void 0 && (s = !0);
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      ye({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
}
var rt = { setTransition: tt, transitionStart: st, transitionEnd: it };
function nt(s, e, t, i, n) {
  s === void 0 && (s = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof s == "string" && (s = parseInt(s, 10));
  const r = this;
  let o = s;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: d,
    activeIndex: p,
    rtlTranslate: h,
    wrapperEl: m,
    enabled: b,
  } = r;
  if ((r.animating && l.preventInteractionOnTransition) || (!b && !i && !n))
    return !1;
  const g = Math.min(r.params.slidesPerGroupSkip, o);
  let y = g + Math.floor((o - g) / r.params.slidesPerGroup);
  y >= a.length && (y = a.length - 1);
  const v = -a[y];
  if (l.normalizeSlideIndex)
    for (let f = 0; f < u.length; f += 1) {
      const w = -Math.floor(v * 100),
        x = Math.floor(u[f] * 100),
        L = Math.floor(u[f + 1] * 100);
      typeof u[f + 1] < "u"
        ? w >= x && w < L - (L - x) / 2
          ? (o = f)
          : w >= x && w < L && (o = f + 1)
        : w >= x && (o = f);
    }
  if (
    r.initialized &&
    o !== p &&
    ((!r.allowSlideNext &&
      (h
        ? v > r.translate && v > r.minTranslate()
        : v < r.translate && v < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        v > r.translate &&
        v > r.maxTranslate() &&
        (p || 0) !== o))
  )
    return !1;
  o !== (d || 0) && t && r.emit("beforeSlideChangeStart"), r.updateProgress(v);
  let c;
  if (
    (o > p ? (c = "next") : o < p ? (c = "prev") : (c = "reset"),
    (h && -v === r.translate) || (!h && v === r.translate))
  )
    return (
      r.updateActiveIndex(o),
      l.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      l.effect !== "slide" && r.setTranslate(v),
      c !== "reset" && (r.transitionStart(t, c), r.transitionEnd(t, c)),
      !1
    );
  if (l.cssMode) {
    const f = r.isHorizontal(),
      w = h ? v : -v;
    if (e === 0) {
      const x = r.virtual && r.params.virtual.enabled;
      x &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        x && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              m[f ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (m[f ? "scrollLeft" : "scrollTop"] = w),
        x &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
          });
    } else {
      if (!r.support.smoothScroll)
        return (
          ve({ swiper: r, targetPosition: w, side: f ? "left" : "top" }), !0
        );
      m.scrollTo({ [f ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(e),
    r.setTranslate(v),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, i),
    r.transitionStart(t, c),
    e === 0
      ? r.transitionEnd(t, c)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (w) {
            !r ||
              r.destroyed ||
              (w.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd,
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(t, c)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function at(s, e, t, i) {
  s === void 0 && (s = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof s == "string" && (s = parseInt(s, 10));
  const n = this,
    r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let o = s;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
    else {
      let l;
      if (r) {
        const h = o * n.params.grid.rows;
        l = n.slides.filter(
          (m) => m.getAttribute("data-swiper-slide-index") * 1 === h,
        )[0].column;
      } else l = n.getSlideIndexByData(o);
      const a = r
          ? Math.ceil(n.slides.length / n.params.grid.rows)
          : n.slides.length,
        { centeredSlides: u } = n.params;
      let d = n.params.slidesPerView;
      d === "auto"
        ? (d = n.slidesPerViewDynamic())
        : ((d = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
          u && d % 2 === 0 && (d = d + 1));
      let p = a - l < d;
      if ((u && (p = p || l < Math.ceil(d / 2)), p)) {
        const h = u
          ? l < n.activeIndex
            ? "prev"
            : "next"
          : l - n.activeIndex - 1 < n.params.slidesPerView
            ? "next"
            : "prev";
        n.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? l + 1 : l - a + 1,
          slideRealIndex: h === "next" ? n.realIndex : void 0,
        });
      }
      if (r) {
        const h = o * n.params.grid.rows;
        o = n.slides.filter(
          (m) => m.getAttribute("data-swiper-slide-index") * 1 === h,
        )[0].column;
      } else o = n.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      n.slideTo(o, e, t, i);
    }),
    n
  );
}
function lt(s, e, t) {
  s === void 0 && (s = this.params.speed), e === void 0 && (e = !0);
  const i = this,
    { enabled: n, params: r, animating: o } = i;
  if (!n) return i;
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const a = i.activeIndex < r.slidesPerGroupSkip ? 1 : l,
    u = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !u && r.loopPreventsSliding) return !1;
    if (
      (i.loopFix({ direction: "next" }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + a, s, e, t);
        }),
        !0
      );
  }
  return r.rewind && i.isEnd
    ? i.slideTo(0, s, e, t)
    : i.slideTo(i.activeIndex + a, s, e, t);
}
function ot(s, e, t) {
  s === void 0 && (s = this.params.speed), e === void 0 && (e = !0);
  const i = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: u,
    } = i;
  if (!a) return i;
  const d = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (u && !d && n.loopPreventsSliding) return !1;
    i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  const p = l ? i.translate : -i.translate;
  function h(v) {
    return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v);
  }
  const m = h(p),
    b = r.map((v) => h(v));
  let g = r[b.indexOf(m) - 1];
  if (typeof g > "u" && n.cssMode) {
    let v;
    r.forEach((c, f) => {
      m >= c && (v = f);
    }),
      typeof v < "u" && (g = r[v > 0 ? v - 1 : v]);
  }
  let y = 0;
  if (
    (typeof g < "u" &&
      ((y = o.indexOf(g)),
      y < 0 && (y = i.activeIndex - 1),
      n.slidesPerView === "auto" &&
        n.slidesPerGroup === 1 &&
        n.slidesPerGroupAuto &&
        ((y = y - i.slidesPerViewDynamic("previous", !0) + 1),
        (y = Math.max(y, 0)))),
    n.rewind && i.isBeginning)
  ) {
    const v =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(v, s, e, t);
  } else if (n.loop && i.activeIndex === 0 && n.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(y, s, e, t);
      }),
      !0
    );
  return i.slideTo(y, s, e, t);
}
function dt(s, e, t) {
  s === void 0 && (s = this.params.speed), e === void 0 && (e = !0);
  const i = this;
  return i.slideTo(i.activeIndex, s, e, t);
}
function ct(s, e, t, i) {
  s === void 0 && (s = this.params.speed),
    e === void 0 && (e = !0),
    i === void 0 && (i = 0.5);
  const n = this;
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r),
    l = o + Math.floor((r - o) / n.params.slidesPerGroup),
    a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[l]) {
    const u = n.snapGrid[l],
      d = n.snapGrid[l + 1];
    a - u > (d - u) * i && (r += n.params.slidesPerGroup);
  } else {
    const u = n.snapGrid[l - 1],
      d = n.snapGrid[l];
    a - u <= (d - u) * i && (r -= n.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, n.slidesGrid.length - 1)),
    n.slideTo(r, s, e, t)
  );
}
function ut() {
  const s = this,
    { params: e, slidesEl: t } = s,
    i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
  let n = s.clickedIndex,
    r;
  const o = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (s.animating) return;
    (r = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? n < s.loopedSlides - i / 2 ||
          n > s.slides.length - s.loopedSlides + i / 2
          ? (s.loopFix(),
            (n = s.getSlideIndex(
              N(t, `${o}[data-swiper-slide-index="${r}"]`)[0],
            )),
            J(() => {
              s.slideTo(n);
            }))
          : s.slideTo(n)
        : n > s.slides.length - i
          ? (s.loopFix(),
            (n = s.getSlideIndex(
              N(t, `${o}[data-swiper-slide-index="${r}"]`)[0],
            )),
            J(() => {
              s.slideTo(n);
            }))
          : s.slideTo(n);
  } else s.slideTo(n);
}
var ft = {
  slideTo: nt,
  slideToLoop: at,
  slideNext: lt,
  slidePrev: ot,
  slideReset: dt,
  slideToClosest: ct,
  slideToClickedSlide: ut,
};
function pt(s) {
  const e = this,
    { params: t, slidesEl: i } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  const n = () => {
      N(i, `.${t.slideClass}, swiper-slide`).forEach((p, h) => {
        p.setAttribute("data-swiper-slide-index", h);
      });
    },
    r = e.grid && t.grid && t.grid.rows > 1,
    o = t.slidesPerGroup * (r ? t.grid.rows : 1),
    l = e.slides.length % o !== 0,
    a = r && e.slides.length % t.grid.rows !== 0,
    u = (d) => {
      for (let p = 0; p < d; p += 1) {
        const h = e.isElement
          ? Y("swiper-slide", [t.slideBlankClass])
          : Y("div", [t.slideClass, t.slideBlankClass]);
        e.slidesEl.append(h);
      }
    };
  if (l) {
    if (t.loopAddBlankSlides) {
      const d = o - (e.slides.length % o);
      u(d), e.recalcSlides(), e.updateSlides();
    } else
      Z(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    n();
  } else if (a) {
    if (t.loopAddBlankSlides) {
      const d = t.grid.rows - (e.slides.length % t.grid.rows);
      u(d), e.recalcSlides(), e.updateSlides();
    } else
      Z(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    n();
  } else n();
  e.loopFix({
    slideRealIndex: s,
    direction: t.centeredSlides ? void 0 : "next",
  });
}
function mt(s) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: i,
    setTranslate: n,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: l,
  } = s === void 0 ? {} : s;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: d,
      allowSlideNext: p,
      slidesEl: h,
      params: m,
    } = a,
    { centeredSlides: b } = m;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && m.virtual.enabled)
  ) {
    t &&
      (!m.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : m.centeredSlides && a.snapIndex < m.slidesPerView
          ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
          : a.snapIndex === a.snapGrid.length - 1 &&
            a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = d),
      (a.allowSlideNext = p),
      a.emit("loopFix");
    return;
  }
  let g = m.slidesPerView;
  g === "auto"
    ? (g = a.slidesPerViewDynamic())
    : ((g = Math.ceil(parseFloat(m.slidesPerView, 10))),
      b && g % 2 === 0 && (g = g + 1));
  const y = m.slidesPerGroupAuto ? g : m.slidesPerGroup;
  let v = y;
  v % y !== 0 && (v += y - (v % y)),
    (v += m.loopAdditionalSlides),
    (a.loopedSlides = v);
  const c = a.grid && m.grid && m.grid.rows > 1;
  u.length < g + v
    ? Z(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : c &&
      m.grid.fill === "row" &&
      Z(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      );
  const f = [],
    w = [];
  let x = a.activeIndex;
  typeof r > "u"
    ? (r = a.getSlideIndex(
        u.filter((S) => S.classList.contains(m.slideActiveClass))[0],
      ))
    : (x = r);
  const L = i === "next" || !i,
    k = i === "prev" || !i;
  let z = 0,
    O = 0;
  const E = c ? Math.ceil(u.length / m.grid.rows) : u.length,
    T = (c ? u[r].column : r) + (b && typeof n > "u" ? -g / 2 + 0.5 : 0);
  if (T < v) {
    z = Math.max(v - T, y);
    for (let S = 0; S < v - T; S += 1) {
      const C = S - Math.floor(S / E) * E;
      if (c) {
        const P = E - C - 1;
        for (let I = u.length - 1; I >= 0; I -= 1)
          u[I].column === P && f.push(I);
      } else f.push(E - C - 1);
    }
  } else if (T + g > E - v) {
    O = Math.max(T - (E - v * 2), y);
    for (let S = 0; S < O; S += 1) {
      const C = S - Math.floor(S / E) * E;
      c
        ? u.forEach((P, I) => {
            P.column === C && w.push(I);
          })
        : w.push(C);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    k &&
      f.forEach((S) => {
        (u[S].swiperLoopMoveDOM = !0),
          h.prepend(u[S]),
          (u[S].swiperLoopMoveDOM = !1);
      }),
    L &&
      w.forEach((S) => {
        (u[S].swiperLoopMoveDOM = !0),
          h.append(u[S]),
          (u[S].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    m.slidesPerView === "auto"
      ? a.updateSlides()
      : c &&
        ((f.length > 0 && k) || (w.length > 0 && L)) &&
        a.slides.forEach((S, C) => {
          a.grid.updateSlide(C, S, a.slides);
        }),
    m.watchSlidesProgress && a.updateSlidesOffset(),
    t)
  ) {
    if (f.length > 0 && k) {
      if (typeof e > "u") {
        const S = a.slidesGrid[x],
          P = a.slidesGrid[x + z] - S;
        l
          ? a.setTranslate(a.translate - P)
          : (a.slideTo(x + z, 0, !1, !0),
            n &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - P),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - P)));
      } else if (n) {
        const S = c ? f.length / m.grid.rows : f.length;
        a.slideTo(a.activeIndex + S, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (w.length > 0 && L)
      if (typeof e > "u") {
        const S = a.slidesGrid[x],
          P = a.slidesGrid[x - O] - S;
        l
          ? a.setTranslate(a.translate - P)
          : (a.slideTo(x - O, 0, !1, !0),
            n &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - P),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - P)));
      } else {
        const S = c ? w.length / m.grid.rows : w.length;
        a.slideTo(a.activeIndex - S, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = d),
    (a.allowSlideNext = p),
    a.controller && a.controller.control && !o)
  ) {
    const S = {
      slideRealIndex: e,
      direction: i,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((C) => {
          !C.destroyed &&
            C.params.loop &&
            C.loopFix({
              ...S,
              slideTo: C.params.slidesPerView === m.slidesPerView ? t : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...S,
          slideTo:
            a.controller.control.params.slidesPerView === m.slidesPerView
              ? t
              : !1,
        });
  }
  a.emit("loopFix");
}
function ht() {
  const s = this,
    { params: e, slidesEl: t } = s;
  if (!e.loop || (s.virtual && s.params.virtual.enabled)) return;
  s.recalcSlides();
  const i = [];
  s.slides.forEach((n) => {
    const r =
      typeof n.swiperSlideIndex > "u"
        ? n.getAttribute("data-swiper-slide-index") * 1
        : n.swiperSlideIndex;
    i[r] = n;
  }),
    s.slides.forEach((n) => {
      n.removeAttribute("data-swiper-slide-index");
    }),
    i.forEach((n) => {
      t.append(n);
    }),
    s.recalcSlides(),
    s.slideTo(s.realIndex, 0);
}
var gt = { loopCreate: pt, loopFix: mt, loopDestroy: ht };
function vt(s) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (t.style.cursor = "move"),
    (t.style.cursor = s ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function wt() {
  const s = this;
  (s.params.watchOverflow && s.isLocked) ||
    s.params.cssMode ||
    (s.isElement && (s.__preventObserver__ = !0),
    (s[
      s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    s.isElement &&
      requestAnimationFrame(() => {
        s.__preventObserver__ = !1;
      }));
}
var bt = { setGrabCursor: vt, unsetGrabCursor: wt };
function yt(s, e) {
  e === void 0 && (e = this);
  function t(i) {
    if (!i || i === F() || i === $()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const n = i.closest(s);
    return !n && !i.getRootNode ? null : n || t(i.getRootNode().host);
  }
  return t(e);
}
function fe(s, e, t) {
  const i = $(),
    { params: n } = s,
    r = n.edgeSwipeDetection,
    o = n.edgeSwipeThreshold;
  return r && (t <= o || t >= i.innerWidth - o)
    ? r === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function St(s) {
  const e = this,
    t = F();
  let i = s;
  i.originalEvent && (i = i.originalEvent);
  const n = e.touchEventsData;
  if (i.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== i.pointerId) return;
    n.pointerId = i.pointerId;
  } else
    i.type === "touchstart" &&
      i.targetTouches.length === 1 &&
      (n.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    fe(e, i, i.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: o, enabled: l } = e;
  if (
    !l ||
    (!r.simulateTouch && i.pointerType === "mouse") ||
    (e.animating && r.preventInteractionOnTransition)
  )
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = i.target;
  if (
    (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a)) ||
    ("which" in i && i.which === 3) ||
    ("button" in i && i.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const u = !!r.noSwipingClass && r.noSwipingClass !== "",
    d = i.composedPath ? i.composedPath() : i.path;
  u && i.target && i.target.shadowRoot && d && (a = d[0]);
  const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    h = !!(i.target && i.target.shadowRoot);
  if (r.noSwiping && (h ? yt(p, a) : a.closest(p))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
  (o.currentX = i.pageX), (o.currentY = i.pageY);
  const m = o.currentX,
    b = o.currentY;
  if (!fe(e, i, m)) return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = m),
    (o.startY = b),
    (n.touchStartTime = Q()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    r.threshold > 0 && (n.allowThresholdMove = !1);
  let g = !0;
  a.matches(n.focusableElements) &&
    ((g = !1), a.nodeName === "SELECT" && (n.isTouched = !1)),
    t.activeElement &&
      t.activeElement.matches(n.focusableElements) &&
      t.activeElement !== a &&
      t.activeElement.blur();
  const y = g && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || y) &&
    !a.isContentEditable &&
    i.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !r.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", i);
}
function Tt(s) {
  const e = F(),
    t = this,
    i = t.touchEventsData,
    { params: n, touches: r, rtlTranslate: o, enabled: l } = t;
  if (!l || (!n.simulateTouch && s.pointerType === "mouse")) return;
  let a = s;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (i.touchId !== null || a.pointerId !== i.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].filter((L) => L.identifier === i.touchId)[0]),
      !u || u.identifier !== i.touchId)
    )
      return;
  } else u = a;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", a);
    return;
  }
  const d = u.pageX,
    p = u.pageY;
  if (a.preventedByNestedSwiper) {
    (r.startX = d), (r.startY = p);
    return;
  }
  if (!t.allowTouchMove) {
    a.target.matches(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(r, { startX: d, startY: p, currentX: d, currentY: p }),
        (i.touchStartTime = Q()));
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (t.isVertical()) {
      if (
        (p < r.startY && t.translate <= t.maxTranslate()) ||
        (p > r.startY && t.translate >= t.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (d < r.startX && t.translate <= t.maxTranslate()) ||
      (d > r.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    a.target === e.activeElement &&
    a.target.matches(i.focusableElements)
  ) {
    (i.isMoved = !0), (t.allowClick = !1);
    return;
  }
  i.allowTouchCallbacks && t.emit("touchMove", a),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = d),
    (r.currentY = p);
  const h = r.currentX - r.startX,
    m = r.currentY - r.startY;
  if (t.params.threshold && Math.sqrt(h ** 2 + m ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let L;
    (t.isHorizontal() && r.currentY === r.startY) ||
    (t.isVertical() && r.currentX === r.startX)
      ? (i.isScrolling = !1)
      : h * h + m * m >= 25 &&
        ((L = (Math.atan2(Math.abs(m), Math.abs(h)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? L > n.touchAngle
          : 90 - L > n.touchAngle));
  }
  if (
    (i.isScrolling && t.emit("touchMoveOpposite", a),
    typeof i.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (i.startMoving = !0),
    i.isScrolling)
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (t.allowClick = !1),
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let b = t.isHorizontal() ? h : m,
    g = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement &&
    ((b = Math.abs(b) * (o ? 1 : -1)), (g = Math.abs(g) * (o ? 1 : -1))),
    (r.diff = b),
    (b *= n.touchRatio),
    o && ((b = -b), (g = -g));
  const y = t.touchesDirection;
  (t.swipeDirection = b > 0 ? "prev" : "next"),
    (t.touchesDirection = g > 0 ? "prev" : "next");
  const v = t.params.loop && !n.cssMode,
    c =
      (t.touchesDirection === "next" && t.allowSlideNext) ||
      (t.touchesDirection === "prev" && t.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (v && c && t.loopFix({ direction: t.swipeDirection }),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating)
    ) {
      const L = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      t.wrapperEl.dispatchEvent(L);
    }
    (i.allowMomentumBounce = !1),
      n.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", a);
  }
  let f;
  if (
    (new Date().getTime(),
    i.isMoved &&
      i.allowThresholdMove &&
      y !== t.touchesDirection &&
      v &&
      c &&
      Math.abs(b) >= 1)
  ) {
    Object.assign(r, {
      startX: d,
      startY: p,
      currentX: d,
      currentY: p,
      startTranslate: i.currentTranslate,
    }),
      (i.loopSwapReset = !0),
      (i.startTranslate = i.currentTranslate);
    return;
  }
  t.emit("sliderMove", a),
    (i.isMoved = !0),
    (i.currentTranslate = b + i.startTranslate);
  let w = !0,
    x = n.resistanceRatio;
  if (
    (n.touchReleaseOnEdges && (x = 0),
    b > 0
      ? (v &&
          c &&
          !f &&
          i.allowThresholdMove &&
          i.currentTranslate >
            (n.centeredSlides
              ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1]
              : t.minTranslate()) &&
          t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > t.minTranslate() &&
          ((w = !1),
          n.resistance &&
            (i.currentTranslate =
              t.minTranslate() -
              1 +
              (-t.minTranslate() + i.startTranslate + b) ** x)))
      : b < 0 &&
        (v &&
          c &&
          !f &&
          i.allowThresholdMove &&
          i.currentTranslate <
            (n.centeredSlides
              ? t.maxTranslate() +
                t.slidesSizesGrid[t.slidesSizesGrid.length - 1]
              : t.maxTranslate()) &&
          t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              t.slides.length -
              (n.slidesPerView === "auto"
                ? t.slidesPerViewDynamic()
                : Math.ceil(parseFloat(n.slidesPerView, 10))),
          }),
        i.currentTranslate < t.maxTranslate() &&
          ((w = !1),
          n.resistance &&
            (i.currentTranslate =
              t.maxTranslate() +
              1 -
              (t.maxTranslate() - i.startTranslate - b) ** x))),
    w && (a.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    n.threshold > 0)
  )
    if (Math.abs(b) > n.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          (r.diff = t.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !n.followFinger ||
    n.cssMode ||
    (((n.freeMode && n.freeMode.enabled && t.freeMode) ||
      n.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate));
}
function xt(s) {
  const e = this,
    t = e.touchEventsData;
  let i = s;
  i.originalEvent && (i = i.originalEvent);
  let n;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (
      ((n = [...i.changedTouches].filter((x) => x.identifier === t.touchId)[0]),
      !n || n.identifier !== t.touchId)
    )
      return;
  } else {
    if (t.touchId !== null || i.pointerId !== t.pointerId) return;
    n = i;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      i.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(i.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return;
  (t.pointerId = null), (t.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: d,
  } = e;
  if (!d || (!o.simulateTouch && i.pointerType === "mouse")) return;
  if (
    (t.allowTouchCallbacks && e.emit("touchEnd", i),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    t.isMoved && o.grabCursor && e.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1);
    return;
  }
  o.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const p = Q(),
    h = p - t.touchStartTime;
  if (e.allowClick) {
    const x = i.path || (i.composedPath && i.composedPath());
    e.updateClickedSlide((x && x[0]) || i.target, x),
      e.emit("tap click", i),
      h < 300 &&
        p - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", i);
  }
  if (
    ((t.lastClickTime = Q()),
    J(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !e.swipeDirection ||
      (l.diff === 0 && !t.loopSwapReset) ||
      (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
  ) {
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    return;
  }
  (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
  let m;
  if (
    (o.followFinger
      ? (m = a ? e.translate : -e.translate)
      : (m = -t.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: m });
    return;
  }
  const b = m >= -e.maxTranslate() && !e.params.loop;
  let g = 0,
    y = e.slidesSizesGrid[0];
  for (
    let x = 0;
    x < u.length;
    x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const L = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[x + L] < "u"
      ? (b || (m >= u[x] && m < u[x + L])) && ((g = x), (y = u[x + L] - u[x]))
      : (b || m >= u[x]) && ((g = x), (y = u[u.length - 1] - u[u.length - 2]));
  }
  let v = null,
    c = null;
  o.rewind &&
    (e.isBeginning
      ? (c =
          o.virtual && o.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (v = 0));
  const f = (m - u[g]) / y,
    w = g < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (h > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (f >= o.longSwipesRatio
        ? e.slideTo(o.rewind && e.isEnd ? v : g + w)
        : e.slideTo(g)),
      e.swipeDirection === "prev" &&
        (f > 1 - o.longSwipesRatio
          ? e.slideTo(g + w)
          : c !== null && f < 0 && Math.abs(f) > o.longSwipesRatio
            ? e.slideTo(c)
            : e.slideTo(g));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
      ? i.target === e.navigation.nextEl
        ? e.slideTo(g + w)
        : e.slideTo(g)
      : (e.swipeDirection === "next" && e.slideTo(v !== null ? v : g + w),
        e.swipeDirection === "prev" && e.slideTo(c !== null ? c : g));
  }
}
function pe() {
  const s = this,
    { params: e, el: t } = s;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && s.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = s,
    o = s.virtual && s.params.virtual.enabled;
  (s.allowSlideNext = !0),
    (s.allowSlidePrev = !0),
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses();
  const l = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  s.isEnd &&
  !s.isBeginning &&
  !s.params.centeredSlides &&
  !l
    ? s.slideTo(s.slides.length - 1, 0, !1, !0)
    : s.params.loop && !o
      ? s.slideToLoop(s.realIndex, 0, !1, !0)
      : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay &&
      s.autoplay.running &&
      s.autoplay.paused &&
      (clearTimeout(s.autoplay.resizeTimeout),
      (s.autoplay.resizeTimeout = setTimeout(() => {
        s.autoplay &&
          s.autoplay.running &&
          s.autoplay.paused &&
          s.autoplay.resume();
      }, 500))),
    (s.allowSlidePrev = n),
    (s.allowSlideNext = i),
    s.params.watchOverflow && r !== s.snapGrid && s.checkOverflow();
}
function Et(s) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && s.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (s.stopPropagation(), s.stopImmediatePropagation())));
}
function Ct() {
  const s = this,
    { wrapperEl: e, rtlTranslate: t, enabled: i } = s;
  if (!i) return;
  (s.previousTranslate = s.translate),
    s.isHorizontal()
      ? (s.translate = -e.scrollLeft)
      : (s.translate = -e.scrollTop),
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses();
  let n;
  const r = s.maxTranslate() - s.minTranslate();
  r === 0 ? (n = 0) : (n = (s.translate - s.minTranslate()) / r),
    n !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1);
}
function Pt(s) {
  const e = this;
  K(e, s.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
function Mt() {
  const s = this;
  s.documentTouchHandlerProceeded ||
    ((s.documentTouchHandlerProceeded = !0),
    s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
}
const Se = (s, e) => {
  const t = F(),
    { params: i, el: n, wrapperEl: r, device: o } = s,
    l = !!i.nested,
    a = e === "on" ? "addEventListener" : "removeEventListener",
    u = e;
  t[a]("touchstart", s.onDocumentTouchStart, { passive: !1, capture: l }),
    n[a]("touchstart", s.onTouchStart, { passive: !1 }),
    n[a]("pointerdown", s.onTouchStart, { passive: !1 }),
    t[a]("touchmove", s.onTouchMove, { passive: !1, capture: l }),
    t[a]("pointermove", s.onTouchMove, { passive: !1, capture: l }),
    t[a]("touchend", s.onTouchEnd, { passive: !0 }),
    t[a]("pointerup", s.onTouchEnd, { passive: !0 }),
    t[a]("pointercancel", s.onTouchEnd, { passive: !0 }),
    t[a]("touchcancel", s.onTouchEnd, { passive: !0 }),
    t[a]("pointerout", s.onTouchEnd, { passive: !0 }),
    t[a]("pointerleave", s.onTouchEnd, { passive: !0 }),
    t[a]("contextmenu", s.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      n[a]("click", s.onClick, !0),
    i.cssMode && r[a]("scroll", s.onScroll),
    i.updateOnWindowResize
      ? s[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          pe,
          !0,
        )
      : s[u]("observerUpdate", pe, !0),
    n[a]("load", s.onLoad, { capture: !0 });
};
function Lt() {
  const s = this,
    { params: e } = s;
  (s.onTouchStart = St.bind(s)),
    (s.onTouchMove = Tt.bind(s)),
    (s.onTouchEnd = xt.bind(s)),
    (s.onDocumentTouchStart = Mt.bind(s)),
    e.cssMode && (s.onScroll = Ct.bind(s)),
    (s.onClick = Et.bind(s)),
    (s.onLoad = Pt.bind(s)),
    Se(s, "on");
}
function It() {
  Se(this, "off");
}
var Ot = { attachEvents: Lt, detachEvents: It };
const me = (s, e) => s.grid && e.grid && e.grid.rows > 1;
function At() {
  const s = this,
    { realIndex: e, initialized: t, params: i, el: n } = s,
    r = i.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const o = s.getBreakpoint(r, s.params.breakpointsBase, s.el);
  if (!o || s.currentBreakpoint === o) return;
  const a = (o in r ? r[o] : void 0) || s.originalParams,
    u = me(s, i),
    d = me(s, a),
    p = i.enabled;
  u && !d
    ? (n.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`,
      ),
      s.emitContainerClasses())
    : !u &&
      d &&
      (n.classList.add(`${i.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && i.grid.fill === "column")) &&
        n.classList.add(`${i.containerModifierClass}grid-column`),
      s.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((v) => {
      if (typeof a[v] > "u") return;
      const c = i[v] && i[v].enabled,
        f = a[v] && a[v].enabled;
      c && !f && s[v].disable(), !c && f && s[v].enable();
    });
  const h = a.direction && a.direction !== i.direction,
    m = i.loop && (a.slidesPerView !== i.slidesPerView || h),
    b = i.loop;
  h && t && s.changeDirection(), _(s.params, a);
  const g = s.params.enabled,
    y = s.params.loop;
  Object.assign(s, {
    allowTouchMove: s.params.allowTouchMove,
    allowSlideNext: s.params.allowSlideNext,
    allowSlidePrev: s.params.allowSlidePrev,
  }),
    p && !g ? s.disable() : !p && g && s.enable(),
    (s.currentBreakpoint = o),
    s.emit("_beforeBreakpoint", a),
    t &&
      (m
        ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
        : !b && y
          ? (s.loopCreate(e), s.updateSlides())
          : b && !y && s.loopDestroy()),
    s.emit("breakpoint", a);
}
function zt(s, e, t) {
  if ((e === void 0 && (e = "window"), !s || (e === "container" && !t))) return;
  let i = !1;
  const n = $(),
    r = e === "window" ? n.innerHeight : t.clientHeight,
    o = Object.keys(s).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: r * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: u } = o[l];
    e === "window"
      ? n.matchMedia(`(min-width: ${u}px)`).matches && (i = a)
      : u <= t.clientWidth && (i = a);
  }
  return i || "max";
}
var Dt = { setBreakpoint: At, getBreakpoint: zt };
function kt(s, e) {
  const t = [];
  return (
    s.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((n) => {
            i[n] && t.push(e + n);
          })
        : typeof i == "string" && t.push(e + i);
    }),
    t
  );
}
function Vt() {
  const s = this,
    { classNames: e, params: t, rtl: i, el: n, device: r } = s,
    o = kt(
      [
        "initialized",
        t.direction,
        { "free-mode": s.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: i },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
        { "watch-progress": t.watchSlidesProgress },
      ],
      t.containerModifierClass,
    );
  e.push(...o), n.classList.add(...e), s.emitContainerClasses();
}
function Gt() {
  const s = this,
    { el: e, classNames: t } = s;
  e.classList.remove(...t), s.emitContainerClasses();
}
var Bt = { addClasses: Vt, removeClasses: Gt };
function $t() {
  const s = this,
    { isLocked: e, params: t } = s,
    { slidesOffsetBefore: i } = t;
  if (i) {
    const n = s.slides.length - 1,
      r = s.slidesGrid[n] + s.slidesSizesGrid[n] + i * 2;
    s.isLocked = s.size > r;
  } else s.isLocked = s.snapGrid.length === 1;
  t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    e && e !== s.isLocked && (s.isEnd = !1),
    e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
}
var _t = { checkOverflow: $t },
  he = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Ft(s, e) {
  return function (i) {
    i === void 0 && (i = {});
    const n = Object.keys(i)[0],
      r = i[n];
    if (typeof r != "object" || r === null) {
      _(e, i);
      return;
    }
    if (
      (s[n] === !0 && (s[n] = { enabled: !0 }),
      n === "navigation" &&
        s[n] &&
        s[n].enabled &&
        !s[n].prevEl &&
        !s[n].nextEl &&
        (s[n].auto = !0),
      ["pagination", "scrollbar"].indexOf(n) >= 0 &&
        s[n] &&
        s[n].enabled &&
        !s[n].el &&
        (s[n].auto = !0),
      !(n in s && "enabled" in r))
    ) {
      _(e, i);
      return;
    }
    typeof s[n] == "object" && !("enabled" in s[n]) && (s[n].enabled = !0),
      s[n] || (s[n] = { enabled: !1 }),
      _(e, i);
  };
}
const ne = {
    eventsEmitter: Be,
    update: Xe,
    translate: et,
    transition: rt,
    slide: ft,
    loop: gt,
    grabCursor: bt,
    events: Ot,
    breakpoints: Dt,
    checkOverflow: _t,
    classes: Bt,
  },
  ae = {};
class V {
  constructor() {
    let e, t;
    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
      n[r] = arguments[r];
    n.length === 1 &&
    n[0].constructor &&
    Object.prototype.toString.call(n[0]).slice(8, -1) === "Object"
      ? (t = n[0])
      : ([e, t] = n),
      t || (t = {}),
      (t = _({}, t)),
      e && !t.el && (t.el = e);
    const o = F();
    if (
      t.el &&
      typeof t.el == "string" &&
      o.querySelectorAll(t.el).length > 1
    ) {
      const d = [];
      return (
        o.querySelectorAll(t.el).forEach((p) => {
          const h = _({}, t, { el: p });
          d.push(new V(h));
        }),
        d
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = be()),
      (l.device = ze({ userAgent: t.userAgent })),
      (l.browser = ke()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
    const a = {};
    l.modules.forEach((d) => {
      d({
        params: t,
        swiper: l,
        extendParams: Ft(t, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const u = _({}, he, a);
    return (
      (l.params = _({}, u, ae, t)),
      (l.originalParams = _({}, l.params)),
      (l.passedParams = _({}, t)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((d) => {
          l.on(d, l.params.on[d]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: t, params: i } = this,
      n = N(t, `.${i.slideClass}, swiper-slide`),
      r = ee(n[0]);
    return ee(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (t) => t.getAttribute("data-swiper-slide-index") * 1 === e,
      )[0],
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: t, params: i } = e;
    e.slides = N(t, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, t) {
    const i = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = i.minTranslate(),
      o = (i.maxTranslate() - n) * e + n;
    i.translateTo(o, typeof t > "u" ? 0 : t),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className
      .split(" ")
      .filter(
        (i) =>
          i.indexOf("swiper") === 0 ||
          i.indexOf(e.params.containerModifierClass) === 0,
      );
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (i) =>
              i.indexOf("swiper-slide") === 0 ||
              i.indexOf(t.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((i) => {
      const n = e.getSlideClasses(i);
      t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
    }),
      e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const i = this,
      {
        params: n,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: u,
      } = i;
    let d = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let p = r[u] ? r[u].swiperSlideSize : 0,
        h;
      for (let m = u + 1; m < r.length; m += 1)
        r[m] &&
          !h &&
          ((p += r[m].swiperSlideSize), (d += 1), p > a && (h = !0));
      for (let m = u - 1; m >= 0; m -= 1)
        r[m] &&
          !h &&
          ((p += r[m].swiperSlideSize), (d += 1), p > a && (h = !0));
    } else if (e === "current")
      for (let p = u + 1; p < r.length; p += 1)
        (t ? o[p] + l[p] - o[u] < a : o[p] - o[u] < a) && (d += 1);
    else for (let p = u - 1; p >= 0; p -= 1) o[u] - o[p] < a && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: t, params: i } = e;
    i.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && K(e, o);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      n(), i.autoHeight && e.updateAutoHeight();
    else {
      if (
        (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
        e.isEnd &&
        !i.centeredSlides
      ) {
        const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(o.length - 1, 0, !1, !0);
      } else r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n();
    }
    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const i = this,
      n = i.params.direction;
    return (
      e || (e = n === "horizontal" ? "vertical" : "horizontal"),
      e === n ||
        (e !== "horizontal" && e !== "vertical") ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${n}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        (i.params.direction = e),
        i.slides.forEach((r) => {
          e === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        i.emit("changeDirection"),
        t && i.update()),
      i
    );
  }
  changeLanguageDirection(e) {
    const t = this;
    (t.rtl && e === "rtl") ||
      (!t.rtl && e === "ltr") ||
      ((t.rtl = e === "rtl"),
      (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
      t.rtl
        ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "rtl"))
        : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "ltr")),
      t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let i = e || t.params.el;
    if ((typeof i == "string" && (i = document.querySelector(i)), !i))
      return !1;
    (i.swiper = t),
      i.parentNode &&
        i.parentNode.host &&
        i.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (t.isElement = !0);
    const n = () =>
      `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(n())
        : N(i, n())[0];
    return (
      !o &&
        t.params.createElements &&
        ((o = Y("div", t.params.wrapperClass)),
        i.append(o),
        N(i, `.${t.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(t, {
        el: i,
        wrapperEl: o,
        slidesEl:
          t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
        hostEl: t.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || R(i, "direction") === "rtl",
        rtlTranslate:
          t.params.direction === "horizontal" &&
          (i.dir.toLowerCase() === "rtl" || R(i, "direction") === "rtl"),
        wrongRTL: R(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1) return t;
    t.emit("beforeInit"),
      t.params.breakpoints && t.setBreakpoint(),
      t.addClasses(),
      t.updateSize(),
      t.updateSlides(),
      t.params.watchOverflow && t.checkOverflow(),
      t.params.grabCursor && t.enabled && t.setGrabCursor(),
      t.params.loop && t.virtual && t.params.virtual.enabled
        ? t.slideTo(
            t.params.initialSlide + t.virtual.slidesBefore,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : t.slideTo(
            t.params.initialSlide,
            0,
            t.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      t.params.loop && t.loopCreate(),
      t.attachEvents();
    const n = [...t.el.querySelectorAll('[loading="lazy"]')];
    return (
      t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
      n.forEach((r) => {
        r.complete
          ? K(t, r)
          : r.addEventListener("load", (o) => {
              K(t, o.target);
            });
      }),
      oe(t),
      (t.initialized = !0),
      oe(t),
      t.emit("init"),
      t.emit("afterInit"),
      t
    );
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const i = this,
      { params: n, el: r, wrapperEl: o, slides: l } = i;
    return (
      typeof i.params > "u" ||
        i.destroyed ||
        (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        n.loop && i.loopDestroy(),
        t &&
          (i.removeClasses(),
          r.removeAttribute("style"),
          o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                n.slideVisibleClass,
                n.slideFullyVisibleClass,
                n.slideActiveClass,
                n.slideNextClass,
                n.slidePrevClass,
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach((a) => {
          i.off(a);
        }),
        e !== !1 && ((i.el.swiper = null), xe(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    _(ae, e);
  }
  static get extendedDefaults() {
    return ae;
  }
  static get defaults() {
    return he;
  }
  static installModule(e) {
    V.prototype.__modules__ || (V.prototype.__modules__ = []);
    const t = V.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((t) => V.installModule(t)), V)
      : (V.installModule(e), V);
  }
}
Object.keys(ne).forEach((s) => {
  Object.keys(ne[s]).forEach((e) => {
    V.prototype[e] = ne[s][e];
  });
});
V.use([Ve, Ge]);
function ce(s, e, t, i) {
  return (
    s.params.createElements &&
      Object.keys(i).forEach((n) => {
        if (!t[n] && t.auto === !0) {
          let r = N(s.el, `.${i[n]}`)[0];
          r || ((r = Y("div", i[n])), (r.className = i[n]), s.el.append(r)),
            (t[n] = r),
            (e[n] = r);
        }
      }),
    t
  );
}
function Nt(s) {
  let { swiper: e, extendParams: t, on: i, emit: n } = s;
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  const r = (g) => (Array.isArray(g) ? g : [g]).filter((y) => !!y);
  function o(g) {
    let y;
    return g &&
      typeof g == "string" &&
      e.isElement &&
      ((y = e.el.querySelector(g)), y)
      ? y
      : (g &&
          (typeof g == "string" && (y = [...document.querySelectorAll(g)]),
          e.params.uniqueNavElements &&
            typeof g == "string" &&
            y.length > 1 &&
            e.el.querySelectorAll(g).length === 1 &&
            (y = e.el.querySelector(g))),
        g && !y ? g : y);
  }
  function l(g, y) {
    const v = e.params.navigation;
    (g = r(g)),
      g.forEach((c) => {
        c &&
          (c.classList[y ? "add" : "remove"](...v.disabledClass.split(" ")),
          c.tagName === "BUTTON" && (c.disabled = y),
          e.params.watchOverflow &&
            e.enabled &&
            c.classList[e.isLocked ? "add" : "remove"](v.lockClass));
      });
  }
  function a() {
    const { nextEl: g, prevEl: y } = e.navigation;
    if (e.params.loop) {
      l(y, !1), l(g, !1);
      return;
    }
    l(y, e.isBeginning && !e.params.rewind), l(g, e.isEnd && !e.params.rewind);
  }
  function u(g) {
    g.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), n("navigationPrev"));
  }
  function d(g) {
    g.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), n("navigationNext"));
  }
  function p() {
    const g = e.params.navigation;
    if (
      ((e.params.navigation = ce(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(g.nextEl || g.prevEl))
    )
      return;
    let y = o(g.nextEl),
      v = o(g.prevEl);
    Object.assign(e.navigation, { nextEl: y, prevEl: v }),
      (y = r(y)),
      (v = r(v));
    const c = (f, w) => {
      f && f.addEventListener("click", w === "next" ? d : u),
        !e.enabled && f && f.classList.add(...g.lockClass.split(" "));
    };
    y.forEach((f) => c(f, "next")), v.forEach((f) => c(f, "prev"));
  }
  function h() {
    let { nextEl: g, prevEl: y } = e.navigation;
    (g = r(g)), (y = r(y));
    const v = (c, f) => {
      c.removeEventListener("click", f === "next" ? d : u),
        c.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    g.forEach((c) => v(c, "next")), y.forEach((c) => v(c, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? b() : (p(), a());
  }),
    i("toEdge fromEdge lock unlock", () => {
      a();
    }),
    i("destroy", () => {
      h();
    }),
    i("enable disable", () => {
      let { nextEl: g, prevEl: y } = e.navigation;
      if (((g = r(g)), (y = r(y)), e.enabled)) {
        a();
        return;
      }
      [...g, ...y]
        .filter((v) => !!v)
        .forEach((v) => v.classList.add(e.params.navigation.lockClass));
    }),
    i("click", (g, y) => {
      let { nextEl: v, prevEl: c } = e.navigation;
      (v = r(v)), (c = r(c));
      const f = y.target;
      if (e.params.navigation.hideOnClick && !c.includes(f) && !v.includes(f)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === f || e.pagination.el.contains(f))
        )
          return;
        let w;
        v.length
          ? (w = v[0].classList.contains(e.params.navigation.hiddenClass))
          : c.length &&
            (w = c[0].classList.contains(e.params.navigation.hiddenClass)),
          n(w === !0 ? "navigationShow" : "navigationHide"),
          [...v, ...c]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(e.params.navigation.hiddenClass),
            );
      }
    });
  const m = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" "),
      ),
        p(),
        a();
    },
    b = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" "),
      ),
        h();
    };
  Object.assign(e.navigation, {
    enable: m,
    disable: b,
    update: a,
    init: p,
    destroy: h,
  });
}
function j(s) {
  return (
    s === void 0 && (s = ""),
    `.${s
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Ht(s) {
  let { swiper: e, extendParams: t, on: i, emit: n } = s;
  const r = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (c) => c,
      formatFractionTotal: (c) => c,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let o,
    l = 0;
  const a = (c) => (Array.isArray(c) ? c : [c]).filter((f) => !!f);
  function u() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function d(c, f) {
    const { bulletActiveClass: w } = e.params.pagination;
    c &&
      ((c = c[`${f === "prev" ? "previous" : "next"}ElementSibling`]),
      c &&
        (c.classList.add(`${w}-${f}`),
        (c = c[`${f === "prev" ? "previous" : "next"}ElementSibling`]),
        c && c.classList.add(`${w}-${f}-${f}`)));
  }
  function p(c) {
    const f = c.target.closest(j(e.params.pagination.bulletClass));
    if (!f) return;
    c.preventDefault();
    const w = ee(f) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === w) return;
      e.slideToLoop(w);
    } else e.slideTo(w);
  }
  function h() {
    const c = e.rtl,
      f = e.params.pagination;
    if (u()) return;
    let w = e.pagination.el;
    w = a(w);
    let x, L;
    const k =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      z = e.params.loop
        ? Math.ceil(k / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((L = e.previousRealIndex || 0),
          (x =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
          ? ((x = e.snapIndex), (L = e.previousSnapIndex))
          : ((L = e.previousIndex || 0), (x = e.activeIndex || 0)),
      f.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const O = e.pagination.bullets;
      let E, M, T;
      if (
        (f.dynamicBullets &&
          ((o = le(O[0], e.isHorizontal() ? "width" : "height", !0)),
          w.forEach((S) => {
            S.style[e.isHorizontal() ? "width" : "height"] =
              `${o * (f.dynamicMainBullets + 4)}px`;
          }),
          f.dynamicMainBullets > 1 &&
            L !== void 0 &&
            ((l += x - (L || 0)),
            l > f.dynamicMainBullets - 1
              ? (l = f.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          (E = Math.max(x - l, 0)),
          (M = E + (Math.min(O.length, f.dynamicMainBullets) - 1)),
          (T = (M + E) / 2)),
        O.forEach((S) => {
          const C = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (P) => `${f.bulletActiveClass}${P}`,
            ),
          ]
            .map((P) =>
              typeof P == "string" && P.includes(" ") ? P.split(" ") : P,
            )
            .flat();
          S.classList.remove(...C);
        }),
        w.length > 1)
      )
        O.forEach((S) => {
          const C = ee(S);
          C === x
            ? S.classList.add(...f.bulletActiveClass.split(" "))
            : e.isElement && S.setAttribute("part", "bullet"),
            f.dynamicBullets &&
              (C >= E &&
                C <= M &&
                S.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),
              C === E && d(S, "prev"),
              C === M && d(S, "next"));
        });
      else {
        const S = O[x];
        if (
          (S && S.classList.add(...f.bulletActiveClass.split(" ")),
          e.isElement &&
            O.forEach((C, P) => {
              C.setAttribute("part", P === x ? "bullet-active" : "bullet");
            }),
          f.dynamicBullets)
        ) {
          const C = O[E],
            P = O[M];
          for (let I = E; I <= M; I += 1)
            O[I] &&
              O[I].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
          d(C, "prev"), d(P, "next");
        }
      }
      if (f.dynamicBullets) {
        const S = Math.min(O.length, f.dynamicMainBullets + 4),
          C = (o * S - o) / 2 - T * o,
          P = c ? "right" : "left";
        O.forEach((I) => {
          I.style[e.isHorizontal() ? P : "top"] = `${C}px`;
        });
      }
    }
    w.forEach((O, E) => {
      if (
        (f.type === "fraction" &&
          (O.querySelectorAll(j(f.currentClass)).forEach((M) => {
            M.textContent = f.formatFractionCurrent(x + 1);
          }),
          O.querySelectorAll(j(f.totalClass)).forEach((M) => {
            M.textContent = f.formatFractionTotal(z);
          })),
        f.type === "progressbar")
      ) {
        let M;
        f.progressbarOpposite
          ? (M = e.isHorizontal() ? "vertical" : "horizontal")
          : (M = e.isHorizontal() ? "horizontal" : "vertical");
        const T = (x + 1) / z;
        let S = 1,
          C = 1;
        M === "horizontal" ? (S = T) : (C = T),
          O.querySelectorAll(j(f.progressbarFillClass)).forEach((P) => {
            (P.style.transform = `translate3d(0,0,0) scaleX(${S}) scaleY(${C})`),
              (P.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      f.type === "custom" && f.renderCustom
        ? ((O.innerHTML = f.renderCustom(e, x + 1, z)),
          E === 0 && n("paginationRender", O))
        : (E === 0 && n("paginationRender", O), n("paginationUpdate", O)),
        e.params.watchOverflow &&
          e.enabled &&
          O.classList[e.isLocked ? "add" : "remove"](f.lockClass);
    });
  }
  function m() {
    const c = e.params.pagination;
    if (u()) return;
    const f =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
    let w = e.pagination.el;
    w = a(w);
    let x = "";
    if (c.type === "bullets") {
      let L = e.params.loop
        ? Math.ceil(f / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && L > f && (L = f);
      for (let k = 0; k < L; k += 1)
        c.renderBullet
          ? (x += c.renderBullet.call(e, k, c.bulletClass))
          : (x += `<${c.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${c.bulletClass}"></${c.bulletElement}>`);
    }
    c.type === "fraction" &&
      (c.renderFraction
        ? (x = c.renderFraction.call(e, c.currentClass, c.totalClass))
        : (x = `<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`)),
      c.type === "progressbar" &&
        (c.renderProgressbar
          ? (x = c.renderProgressbar.call(e, c.progressbarFillClass))
          : (x = `<span class="${c.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      w.forEach((L) => {
        c.type !== "custom" && (L.innerHTML = x || ""),
          c.type === "bullets" &&
            e.pagination.bullets.push(...L.querySelectorAll(j(c.bulletClass)));
      }),
      c.type !== "custom" && n("paginationRender", w[0]);
  }
  function b() {
    e.params.pagination = ce(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" },
    );
    const c = e.params.pagination;
    if (!c.el) return;
    let f;
    typeof c.el == "string" && e.isElement && (f = e.el.querySelector(c.el)),
      !f &&
        typeof c.el == "string" &&
        (f = [...document.querySelectorAll(c.el)]),
      f || (f = c.el),
      !(!f || f.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof c.el == "string" &&
          Array.isArray(f) &&
          f.length > 1 &&
          ((f = [...e.el.querySelectorAll(c.el)]),
          f.length > 1 &&
            (f = f.filter((w) => we(w, ".swiper")[0] === e.el)[0])),
        Array.isArray(f) && f.length === 1 && (f = f[0]),
        Object.assign(e.pagination, { el: f }),
        (f = a(f)),
        f.forEach((w) => {
          c.type === "bullets" &&
            c.clickable &&
            w.classList.add(...(c.clickableClass || "").split(" ")),
            w.classList.add(c.modifierClass + c.type),
            w.classList.add(
              e.isHorizontal() ? c.horizontalClass : c.verticalClass,
            ),
            c.type === "bullets" &&
              c.dynamicBullets &&
              (w.classList.add(`${c.modifierClass}${c.type}-dynamic`),
              (l = 0),
              c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)),
            c.type === "progressbar" &&
              c.progressbarOpposite &&
              w.classList.add(c.progressbarOppositeClass),
            c.clickable && w.addEventListener("click", p),
            e.enabled || w.classList.add(c.lockClass);
        }));
  }
  function g() {
    const c = e.params.pagination;
    if (u()) return;
    let f = e.pagination.el;
    f &&
      ((f = a(f)),
      f.forEach((w) => {
        w.classList.remove(c.hiddenClass),
          w.classList.remove(c.modifierClass + c.type),
          w.classList.remove(
            e.isHorizontal() ? c.horizontalClass : c.verticalClass,
          ),
          c.clickable &&
            (w.classList.remove(...(c.clickableClass || "").split(" ")),
            w.removeEventListener("click", p));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((w) =>
          w.classList.remove(...c.bulletActiveClass.split(" ")),
        );
  }
  i("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const c = e.params.pagination;
    let { el: f } = e.pagination;
    (f = a(f)),
      f.forEach((w) => {
        w.classList.remove(c.horizontalClass, c.verticalClass),
          w.classList.add(
            e.isHorizontal() ? c.horizontalClass : c.verticalClass,
          );
      });
  }),
    i("init", () => {
      e.params.pagination.enabled === !1 ? v() : (b(), m(), h());
    }),
    i("activeIndexChange", () => {
      typeof e.snapIndex > "u" && h();
    }),
    i("snapIndexChange", () => {
      h();
    }),
    i("snapGridLengthChange", () => {
      m(), h();
    }),
    i("destroy", () => {
      g();
    }),
    i("enable disable", () => {
      let { el: c } = e.pagination;
      c &&
        ((c = a(c)),
        c.forEach((f) =>
          f.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass,
          ),
        ));
    }),
    i("lock unlock", () => {
      h();
    }),
    i("click", (c, f) => {
      const w = f.target,
        x = a(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        x &&
        x.length > 0 &&
        !w.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && w === e.navigation.nextEl) ||
            (e.navigation.prevEl && w === e.navigation.prevEl))
        )
          return;
        const L = x[0].classList.contains(e.params.pagination.hiddenClass);
        n(L === !0 ? "paginationShow" : "paginationHide"),
          x.forEach((k) => k.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const y = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: c } = e.pagination;
      c &&
        ((c = a(c)),
        c.forEach((f) =>
          f.classList.remove(e.params.pagination.paginationDisabledClass),
        )),
        b(),
        m(),
        h();
    },
    v = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: c } = e.pagination;
      c &&
        ((c = a(c)),
        c.forEach((f) =>
          f.classList.add(e.params.pagination.paginationDisabledClass),
        )),
        g();
    };
  Object.assign(e.pagination, {
    enable: y,
    disable: v,
    render: m,
    update: h,
    init: b,
    destroy: g,
  });
}
function Rt(s) {
  let { swiper: e, extendParams: t, on: i, emit: n } = s;
  const r = F();
  let o = !1,
    l = null,
    a = null,
    u,
    d,
    p,
    h;
  t({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (e.scrollbar = { el: null, dragEl: null });
  function m() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: T, rtlTranslate: S } = e,
      { dragEl: C, el: P } = T,
      I = e.params.scrollbar,
      B = e.params.loop ? e.progressLoop : e.progress;
    let A = d,
      D = (p - d) * B;
    S
      ? ((D = -D), D > 0 ? ((A = d - D), (D = 0)) : -D + d > p && (A = p + D))
      : D < 0
        ? ((A = d + D), (D = 0))
        : D + d > p && (A = p - D),
      e.isHorizontal()
        ? ((C.style.transform = `translate3d(${D}px, 0, 0)`),
          (C.style.width = `${A}px`))
        : ((C.style.transform = `translate3d(0px, ${D}px, 0)`),
          (C.style.height = `${A}px`)),
      I.hide &&
        (clearTimeout(l),
        (P.style.opacity = 1),
        (l = setTimeout(() => {
          (P.style.opacity = 0), (P.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function b(T) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${T}ms`);
  }
  function g() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: T } = e,
      { dragEl: S, el: C } = T;
    (S.style.width = ""),
      (S.style.height = ""),
      (p = e.isHorizontal() ? C.offsetWidth : C.offsetHeight),
      (h =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (d = p * h)
        : (d = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (S.style.width = `${d}px`)
        : (S.style.height = `${d}px`),
      h >= 1 ? (C.style.display = "none") : (C.style.display = ""),
      e.params.scrollbar.hide && (C.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        T.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass,
        );
  }
  function y(T) {
    return e.isHorizontal() ? T.clientX : T.clientY;
  }
  function v(T) {
    const { scrollbar: S, rtlTranslate: C } = e,
      { el: P } = S;
    let I;
    (I =
      (y(T) -
        Me(P)[e.isHorizontal() ? "left" : "top"] -
        (u !== null ? u : d / 2)) /
      (p - d)),
      (I = Math.max(Math.min(I, 1), 0)),
      C && (I = 1 - I);
    const B = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * I;
    e.updateProgress(B),
      e.setTranslate(B),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function c(T) {
    const S = e.params.scrollbar,
      { scrollbar: C, wrapperEl: P } = e,
      { el: I, dragEl: B } = C;
    (o = !0),
      (u =
        T.target === B
          ? y(T) -
            T.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      T.preventDefault(),
      T.stopPropagation(),
      (P.style.transitionDuration = "100ms"),
      (B.style.transitionDuration = "100ms"),
      v(T),
      clearTimeout(a),
      (I.style.transitionDuration = "0ms"),
      S.hide && (I.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      n("scrollbarDragStart", T);
  }
  function f(T) {
    const { scrollbar: S, wrapperEl: C } = e,
      { el: P, dragEl: I } = S;
    o &&
      (T.preventDefault ? T.preventDefault() : (T.returnValue = !1),
      v(T),
      (C.style.transitionDuration = "0ms"),
      (P.style.transitionDuration = "0ms"),
      (I.style.transitionDuration = "0ms"),
      n("scrollbarDragMove", T));
  }
  function w(T) {
    const S = e.params.scrollbar,
      { scrollbar: C, wrapperEl: P } = e,
      { el: I } = C;
    o &&
      ((o = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (P.style.transitionDuration = "")),
      S.hide &&
        (clearTimeout(a),
        (a = J(() => {
          (I.style.opacity = 0), (I.style.transitionDuration = "400ms");
        }, 1e3))),
      n("scrollbarDragEnd", T),
      S.snapOnRelease && e.slideToClosest());
  }
  function x(T) {
    const { scrollbar: S, params: C } = e,
      P = S.el;
    if (!P) return;
    const I = P,
      B = C.passiveListeners ? { passive: !1, capture: !1 } : !1,
      A = C.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!I) return;
    const D = T === "on" ? "addEventListener" : "removeEventListener";
    I[D]("pointerdown", c, B),
      r[D]("pointermove", f, B),
      r[D]("pointerup", w, A);
  }
  function L() {
    !e.params.scrollbar.el || !e.scrollbar.el || x("on");
  }
  function k() {
    !e.params.scrollbar.el || !e.scrollbar.el || x("off");
  }
  function z() {
    const { scrollbar: T, el: S } = e;
    e.params.scrollbar = ce(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const C = e.params.scrollbar;
    if (!C.el) return;
    let P;
    if (
      (typeof C.el == "string" && e.isElement && (P = e.el.querySelector(C.el)),
      !P && typeof C.el == "string")
    ) {
      if (((P = r.querySelectorAll(C.el)), !P.length)) return;
    } else P || (P = C.el);
    e.params.uniqueNavElements &&
      typeof C.el == "string" &&
      P.length > 1 &&
      S.querySelectorAll(C.el).length === 1 &&
      (P = S.querySelector(C.el)),
      P.length > 0 && (P = P[0]),
      P.classList.add(e.isHorizontal() ? C.horizontalClass : C.verticalClass);
    let I;
    P &&
      ((I = P.querySelector(j(e.params.scrollbar.dragClass))),
      I || ((I = Y("div", e.params.scrollbar.dragClass)), P.append(I))),
      Object.assign(T, { el: P, dragEl: I }),
      C.draggable && L(),
      P &&
        P.classList[e.enabled ? "remove" : "add"](
          ...H(e.params.scrollbar.lockClass),
        );
  }
  function O() {
    const T = e.params.scrollbar,
      S = e.scrollbar.el;
    S &&
      S.classList.remove(
        ...H(e.isHorizontal() ? T.horizontalClass : T.verticalClass),
      ),
      k();
  }
  i("init", () => {
    e.params.scrollbar.enabled === !1 ? M() : (z(), g(), m());
  }),
    i("update resize observerUpdate lock unlock", () => {
      g();
    }),
    i("setTranslate", () => {
      m();
    }),
    i("setTransition", (T, S) => {
      b(S);
    }),
    i("enable disable", () => {
      const { el: T } = e.scrollbar;
      T &&
        T.classList[e.enabled ? "remove" : "add"](
          ...H(e.params.scrollbar.lockClass),
        );
    }),
    i("destroy", () => {
      O();
    });
  const E = () => {
      e.el.classList.remove(...H(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...H(e.params.scrollbar.scrollbarDisabledClass),
          ),
        z(),
        g(),
        m();
    },
    M = () => {
      e.el.classList.add(...H(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...H(e.params.scrollbar.scrollbarDisabledClass),
          ),
        O();
    };
  Object.assign(e.scrollbar, {
    enable: E,
    disable: M,
    updateSize: g,
    setTranslate: m,
    init: z,
    destroy: O,
  });
}
function qt(s) {
  let { swiper: e, extendParams: t, on: i, emit: n, params: r } = s;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    l,
    a = r && r.autoplay ? r.autoplay.delay : 3e3,
    u = r && r.autoplay ? r.autoplay.delay : 3e3,
    d,
    p = new Date().getTime(),
    h,
    m,
    b,
    g,
    y,
    v,
    c;
  function f(A) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (A.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", f), !c && E()));
  }
  const w = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (h = !0) : h && ((u = d), (h = !1));
      const A = e.autoplay.paused ? d : p + u - new Date().getTime();
      (e.autoplay.timeLeft = A),
        n("autoplayTimeLeft", A, A / a),
        (l = requestAnimationFrame(() => {
          w();
        }));
    },
    x = () => {
      let A;
      return (
        e.virtual && e.params.virtual.enabled
          ? (A = e.slides.filter((G) =>
              G.classList.contains("swiper-slide-active"),
            )[0])
          : (A = e.slides[e.activeIndex]),
        A ? parseInt(A.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    L = (A) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(l), w();
      let D = typeof A > "u" ? e.params.autoplay.delay : A;
      (a = e.params.autoplay.delay), (u = e.params.autoplay.delay);
      const G = x();
      !Number.isNaN(G) &&
        G > 0 &&
        typeof A > "u" &&
        ((D = G), (a = G), (u = G)),
        (d = D);
      const q = e.params.speed,
        X = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(q, !0, !0), n("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, q, !0, !0), n("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(q, !0, !0), n("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, q, !0, !0), n("autoplay")),
            e.params.cssMode &&
              ((p = new Date().getTime()),
              requestAnimationFrame(() => {
                L();
              })));
        };
      return (
        D > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              X();
            }, D)))
          : requestAnimationFrame(() => {
              X();
            }),
        D
      );
    },
    k = () => {
      (p = new Date().getTime()),
        (e.autoplay.running = !0),
        L(),
        n("autoplayStart");
    },
    z = () => {
      (e.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(l),
        n("autoplayStop");
    },
    O = (A, D) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), A || (v = !0);
      const G = () => {
        n("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", f)
            : E();
      };
      if (((e.autoplay.paused = !0), D)) {
        y && (d = e.params.autoplay.delay), (y = !1), G();
        return;
      }
      (d = (d || e.params.autoplay.delay) - (new Date().getTime() - p)),
        !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), G());
    },
    E = () => {
      (e.isEnd && d < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((p = new Date().getTime()),
        v ? ((v = !1), L(d)) : L(),
        (e.autoplay.paused = !1),
        n("autoplayResume"));
    },
    M = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const A = F();
      A.visibilityState === "hidden" && ((v = !0), O(!0)),
        A.visibilityState === "visible" && E();
    },
    T = (A) => {
      A.pointerType === "mouse" &&
        ((v = !0), (c = !0), !(e.animating || e.autoplay.paused) && O(!0));
    },
    S = (A) => {
      A.pointerType === "mouse" && ((c = !1), e.autoplay.paused && E());
    },
    C = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", T),
        e.el.addEventListener("pointerleave", S));
    },
    P = () => {
      e.el.removeEventListener("pointerenter", T),
        e.el.removeEventListener("pointerleave", S);
    },
    I = () => {
      F().addEventListener("visibilitychange", M);
    },
    B = () => {
      F().removeEventListener("visibilitychange", M);
    };
  i("init", () => {
    e.params.autoplay.enabled && (C(), I(), k());
  }),
    i("destroy", () => {
      P(), B(), e.autoplay.running && z();
    }),
    i("_freeModeStaticRelease", () => {
      (b || v) && E();
    }),
    i("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? z() : O(!0, !0);
    }),
    i("beforeTransitionStart", (A, D, G) => {
      e.destroyed ||
        !e.autoplay.running ||
        (G || !e.params.autoplay.disableOnInteraction ? O(!0, !0) : z());
    }),
    i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          z();
          return;
        }
        (m = !0),
          (b = !1),
          (v = !1),
          (g = setTimeout(() => {
            (v = !0), (b = !0), O(!0);
          }, 200));
      }
    }),
    i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !m)) {
        if (
          (clearTimeout(g),
          clearTimeout(o),
          e.params.autoplay.disableOnInteraction)
        ) {
          (b = !1), (m = !1);
          return;
        }
        b && e.params.cssMode && E(), (b = !1), (m = !1);
      }
    }),
    i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (y = !0);
    }),
    Object.assign(e.autoplay, { start: k, stop: z, pause: O, resume: E });
}
function jt(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let n = !1,
    r = !1;
  e.thumbs = { swiper: null };
  function o() {
    const u = e.thumbs.swiper;
    if (!u || u.destroyed) return;
    const d = u.clickedIndex,
      p = u.clickedSlide;
    if (
      (p && p.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
      typeof d > "u" ||
      d === null
    )
      return;
    let h;
    u.params.loop
      ? (h = parseInt(
          u.clickedSlide.getAttribute("data-swiper-slide-index"),
          10,
        ))
      : (h = d),
      e.params.loop ? e.slideToLoop(h) : e.slideTo(h);
  }
  function l() {
    const { thumbs: u } = e.params;
    if (n) return !1;
    n = !0;
    const d = e.constructor;
    if (u.swiper instanceof d)
      (e.thumbs.swiper = u.swiper),
        Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        e.thumbs.swiper.update();
    else if (W(u.swiper)) {
      const p = Object.assign({}, u.swiper);
      Object.assign(p, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (e.thumbs.swiper = new d(p)),
        (r = !0);
    }
    return (
      e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
      e.thumbs.swiper.on("tap", o),
      !0
    );
  }
  function a(u) {
    const d = e.thumbs.swiper;
    if (!d || d.destroyed) return;
    const p =
      d.params.slidesPerView === "auto"
        ? d.slidesPerViewDynamic()
        : d.params.slidesPerView;
    let h = 1;
    const m = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 &&
        !e.params.centeredSlides &&
        (h = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (h = 1),
      (h = Math.floor(h)),
      d.slides.forEach((y) => y.classList.remove(m)),
      d.params.loop || (d.params.virtual && d.params.virtual.enabled))
    )
      for (let y = 0; y < h; y += 1)
        N(d.slidesEl, `[data-swiper-slide-index="${e.realIndex + y}"]`).forEach(
          (v) => {
            v.classList.add(m);
          },
        );
    else
      for (let y = 0; y < h; y += 1)
        d.slides[e.realIndex + y] && d.slides[e.realIndex + y].classList.add(m);
    const b = e.params.thumbs.autoScrollOffset,
      g = b && !d.params.loop;
    if (e.realIndex !== d.realIndex || g) {
      const y = d.activeIndex;
      let v, c;
      if (d.params.loop) {
        const f = d.slides.filter(
          (w) => w.getAttribute("data-swiper-slide-index") === `${e.realIndex}`,
        )[0];
        (v = d.slides.indexOf(f)),
          (c = e.activeIndex > e.previousIndex ? "next" : "prev");
      } else (v = e.realIndex), (c = v > e.previousIndex ? "next" : "prev");
      g && (v += c === "next" ? b : -1 * b),
        d.visibleSlidesIndexes &&
          d.visibleSlidesIndexes.indexOf(v) < 0 &&
          (d.params.centeredSlides
            ? v > y
              ? (v = v - Math.floor(p / 2) + 1)
              : (v = v + Math.floor(p / 2) - 1)
            : v > y && d.params.slidesPerGroup,
          d.slideTo(v, u ? 0 : void 0));
    }
  }
  i("beforeInit", () => {
    const { thumbs: u } = e.params;
    if (!(!u || !u.swiper))
      if (typeof u.swiper == "string" || u.swiper instanceof HTMLElement) {
        const d = F(),
          p = () => {
            const m =
              typeof u.swiper == "string"
                ? d.querySelector(u.swiper)
                : u.swiper;
            if (m && m.swiper) (u.swiper = m.swiper), l(), a(!0);
            else if (m) {
              const b = (g) => {
                (u.swiper = g.detail[0]),
                  m.removeEventListener("init", b),
                  l(),
                  a(!0),
                  u.swiper.update(),
                  e.update();
              };
              m.addEventListener("init", b);
            }
            return m;
          },
          h = () => {
            if (e.destroyed) return;
            p() || requestAnimationFrame(h);
          };
        requestAnimationFrame(h);
      } else l(), a(!0);
  }),
    i("slideChange update resize observerUpdate", () => {
      a();
    }),
    i("setTransition", (u, d) => {
      const p = e.thumbs.swiper;
      !p || p.destroyed || p.setTransition(d);
    }),
    i("beforeDestroy", () => {
      const u = e.thumbs.swiper;
      !u || u.destroyed || (r && u.destroy());
    }),
    Object.assign(e.thumbs, { init: l, update: a });
}
V.use([Nt, Ht, qt, Rt, jt]);
function Wt() {
  new V(".hero-swiper", {
    slidesPerView: "auto",
    speed: 1100,
    navigation: {
      nextEl: ".hero__swiper-button-next",
      prevEl: ".hero__swiper-button-prev",
    },
  });
}
function Yt() {
  new V(".company__swiper", {
    slidesPerView: "auto",
    speed: 1100,
    spaceBetween: 15,
    breakpoints: {
      320: { slidesPerView: 1 },
      375: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
      1440: { slidesPerView: 3 },
      1920: { slidesPerView: 3 },
    },
    navigation: {
      nextEl: ".company__swiper-button-next",
      prevEl: ".company__swiper-button-prev",
    },
  });
}
function Xt() {
  new V(".hot-deals__swiper", {
    slidesPerView: "auto",
    speed: 1100,
    spaceBetween: 15,
    breakpoints: {
      320: { slidesPerView: 1 },
      375: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
      1440: { slidesPerView: 3 },
      1920: { slidesPerView: 3 },
    },
    navigation: {
      nextEl: ".hot-deals__swiper-button-next",
      prevEl: ".hot-deals__swiper-button-prev",
    },
  });
}
function Ut() {
  new V(".winter-tour__swiper", {
    slidesPerView: "auto",
    speed: 1100,
    spaceBetween: 15,
    breakpoints: {
      320: { slidesPerView: 1 },
      375: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1440: { slidesPerView: 4 },
      1920: { slidesPerView: 4 },
    },
    navigation: {
      nextEl: ".winter-tour__swiper-button-next",
      prevEl: ".winter-tour__swiper-button-prev",
    },
  });
}
function Kt() {
  new V(".summer-tour__swiper", {
    slidesPerView: "auto",
    speed: 1100,
    spaceBetween: 15,
    breakpoints: {
      320: { slidesPerView: 1 },
      375: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1440: { slidesPerView: 4 },
      1920: { slidesPerView: 4 },
    },
    navigation: {
      nextEl: ".summer-tour__swiper-button-next",
      prevEl: ".summer-tour__swiper-button-prev",
    },
  });
}
class Jt {
  swiperOne;
  swiperTwo;
  constructor() {
    (this.swiperTwo = new V(".hotel-swiper-one", {
      loop: !0,
      spaceBetween: 7,
      slidesPerView: 4,
      freeMode: !0,
      watchSlidesProgress: !0,
      breakpoints: {
        768: { spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 16 },
      },
    })),
      (this.swiperOne = new V(".hotel-swiper-two", {
        loop: !0,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: { swiper: this.swiperTwo },
      }));
  }
}
class Qt {
  swiper;
  constructor() {
    this.swiper = new V(".similars__slider", {
      loop: !0,
      spaceBetween: 10,
      slidesPerView: 1,
      freeMode: !0,
      breakpoints: {
        576: { spaceBetween: 10, slidesPerView: 2 },
        768: { spaceBetween: 20, slidesPerView: 2 },
        1024: { spaceBetween: 26, slidesPerView: 3 },
      },
    });
  }
}
export { Jt as H, Xt as a, Qt as b, Yt as c, Wt as h, Kt as s, Ut as w };
