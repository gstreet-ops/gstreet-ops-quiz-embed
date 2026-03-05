function Vf(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ia = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc;
function qf() {
  if (Yc) return re;
  Yc = 1;
  var s = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), R = Symbol.iterator;
  function b(k) {
    return k === null || typeof k != "object" ? null : (k = R && k[R] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, P = {};
  function j(k, A, te) {
    this.props = k, this.context = A, this.refs = P, this.updater = te || C;
  }
  j.prototype.isReactComponent = {}, j.prototype.setState = function(k, A) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, A, "setState");
  }, j.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function D() {
  }
  D.prototype = j.prototype;
  function B(k, A, te) {
    this.props = k, this.context = A, this.refs = P, this.updater = te || C;
  }
  var $ = B.prototype = new D();
  $.constructor = B, O($, j.prototype), $.isPureReactComponent = !0;
  var K = Array.isArray, ue = Object.prototype.hasOwnProperty, ee = { current: null }, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Te(k, A, te) {
    var ne, oe = {}, ae = null, he = null;
    if (A != null) for (ne in A.ref !== void 0 && (he = A.ref), A.key !== void 0 && (ae = "" + A.key), A) ue.call(A, ne) && !ie.hasOwnProperty(ne) && (oe[ne] = A[ne]);
    var ce = arguments.length - 2;
    if (ce === 1) oe.children = te;
    else if (1 < ce) {
      for (var ve = Array(ce), tt = 0; tt < ce; tt++) ve[tt] = arguments[tt + 2];
      oe.children = ve;
    }
    if (k && k.defaultProps) for (ne in ce = k.defaultProps, ce) oe[ne] === void 0 && (oe[ne] = ce[ne]);
    return { $$typeof: s, type: k, key: ae, ref: he, props: oe, _owner: ee.current };
  }
  function Ie(k, A) {
    return { $$typeof: s, type: k.type, key: A, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function jt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === s;
  }
  function hr(k) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(te) {
      return A[te];
    });
  }
  var bt = /\/+/g;
  function et(k, A) {
    return typeof k == "object" && k !== null && k.key != null ? hr("" + k.key) : A.toString(36);
  }
  function pt(k, A, te, ne, oe) {
    var ae = typeof k;
    (ae === "undefined" || ae === "boolean") && (k = null);
    var he = !1;
    if (k === null) he = !0;
    else switch (ae) {
      case "string":
      case "number":
        he = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case s:
          case r:
            he = !0;
        }
    }
    if (he) return he = k, oe = oe(he), k = ne === "" ? "." + et(he, 0) : ne, K(oe) ? (te = "", k != null && (te = k.replace(bt, "$&/") + "/"), pt(oe, A, te, "", function(tt) {
      return tt;
    })) : oe != null && (jt(oe) && (oe = Ie(oe, te + (!oe.key || he && he.key === oe.key ? "" : ("" + oe.key).replace(bt, "$&/") + "/") + k)), A.push(oe)), 1;
    if (he = 0, ne = ne === "" ? "." : ne + ":", K(k)) for (var ce = 0; ce < k.length; ce++) {
      ae = k[ce];
      var ve = ne + et(ae, ce);
      he += pt(ae, A, te, ve, oe);
    }
    else if (ve = b(k), typeof ve == "function") for (k = ve.call(k), ce = 0; !(ae = k.next()).done; ) ae = ae.value, ve = ne + et(ae, ce++), he += pt(ae, A, te, ve, oe);
    else if (ae === "object") throw A = String(k), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    return he;
  }
  function Ct(k, A, te) {
    if (k == null) return k;
    var ne = [], oe = 0;
    return pt(k, ne, "", "", function(ae) {
      return A.call(te, ae, oe++);
    }), ne;
  }
  function Ke(k) {
    if (k._status === -1) {
      var A = k._result;
      A = A(), A.then(function(te) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = te);
      }, function(te) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = te);
      }), k._status === -1 && (k._status = 0, k._result = A);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ke = { current: null }, U = { transition: null }, X = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: U, ReactCurrentOwner: ee };
  function F() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return re.Children = { map: Ct, forEach: function(k, A, te) {
    Ct(k, function() {
      A.apply(this, arguments);
    }, te);
  }, count: function(k) {
    var A = 0;
    return Ct(k, function() {
      A++;
    }), A;
  }, toArray: function(k) {
    return Ct(k, function(A) {
      return A;
    }) || [];
  }, only: function(k) {
    if (!jt(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, re.Component = j, re.Fragment = i, re.Profiler = u, re.PureComponent = B, re.StrictMode = a, re.Suspense = g, re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, re.act = F, re.cloneElement = function(k, A, te) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var ne = O({}, k.props), oe = k.key, ae = k.ref, he = k._owner;
    if (A != null) {
      if (A.ref !== void 0 && (ae = A.ref, he = ee.current), A.key !== void 0 && (oe = "" + A.key), k.type && k.type.defaultProps) var ce = k.type.defaultProps;
      for (ve in A) ue.call(A, ve) && !ie.hasOwnProperty(ve) && (ne[ve] = A[ve] === void 0 && ce !== void 0 ? ce[ve] : A[ve]);
    }
    var ve = arguments.length - 2;
    if (ve === 1) ne.children = te;
    else if (1 < ve) {
      ce = Array(ve);
      for (var tt = 0; tt < ve; tt++) ce[tt] = arguments[tt + 2];
      ne.children = ce;
    }
    return { $$typeof: s, type: k.type, key: oe, ref: ae, props: ne, _owner: he };
  }, re.createContext = function(k) {
    return k = { $$typeof: h, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: d, _context: k }, k.Consumer = k;
  }, re.createElement = Te, re.createFactory = function(k) {
    var A = Te.bind(null, k);
    return A.type = k, A;
  }, re.createRef = function() {
    return { current: null };
  }, re.forwardRef = function(k) {
    return { $$typeof: p, render: k };
  }, re.isValidElement = jt, re.lazy = function(k) {
    return { $$typeof: w, _payload: { _status: -1, _result: k }, _init: Ke };
  }, re.memo = function(k, A) {
    return { $$typeof: v, type: k, compare: A === void 0 ? null : A };
  }, re.startTransition = function(k) {
    var A = U.transition;
    U.transition = {};
    try {
      k();
    } finally {
      U.transition = A;
    }
  }, re.unstable_act = F, re.useCallback = function(k, A) {
    return ke.current.useCallback(k, A);
  }, re.useContext = function(k) {
    return ke.current.useContext(k);
  }, re.useDebugValue = function() {
  }, re.useDeferredValue = function(k) {
    return ke.current.useDeferredValue(k);
  }, re.useEffect = function(k, A) {
    return ke.current.useEffect(k, A);
  }, re.useId = function() {
    return ke.current.useId();
  }, re.useImperativeHandle = function(k, A, te) {
    return ke.current.useImperativeHandle(k, A, te);
  }, re.useInsertionEffect = function(k, A) {
    return ke.current.useInsertionEffect(k, A);
  }, re.useLayoutEffect = function(k, A) {
    return ke.current.useLayoutEffect(k, A);
  }, re.useMemo = function(k, A) {
    return ke.current.useMemo(k, A);
  }, re.useReducer = function(k, A, te) {
    return ke.current.useReducer(k, A, te);
  }, re.useRef = function(k) {
    return ke.current.useRef(k);
  }, re.useState = function(k) {
    return ke.current.useState(k);
  }, re.useSyncExternalStore = function(k, A, te) {
    return ke.current.useSyncExternalStore(k, A, te);
  }, re.useTransition = function() {
    return ke.current.useTransition();
  }, re.version = "18.3.1", re;
}
var Xc;
function el() {
  return Xc || (Xc = 1, Ia.exports = qf()), Ia.exports;
}
var Hf = el();
const He = /* @__PURE__ */ Vf(Hf);
var Es = {}, ja = { exports: {} }, Ze = {}, Na = { exports: {} }, La = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc;
function Kf() {
  return Zc || (Zc = 1, (function(s) {
    function r(U, X) {
      var F = U.length;
      U.push(X);
      e: for (; 0 < F; ) {
        var k = F - 1 >>> 1, A = U[k];
        if (0 < u(A, X)) U[k] = X, U[F] = A, F = k;
        else break e;
      }
    }
    function i(U) {
      return U.length === 0 ? null : U[0];
    }
    function a(U) {
      if (U.length === 0) return null;
      var X = U[0], F = U.pop();
      if (F !== X) {
        U[0] = F;
        e: for (var k = 0, A = U.length, te = A >>> 1; k < te; ) {
          var ne = 2 * (k + 1) - 1, oe = U[ne], ae = ne + 1, he = U[ae];
          if (0 > u(oe, F)) ae < A && 0 > u(he, oe) ? (U[k] = he, U[ae] = F, k = ae) : (U[k] = oe, U[ne] = F, k = ne);
          else if (ae < A && 0 > u(he, F)) U[k] = he, U[ae] = F, k = ae;
          else break e;
        }
      }
      return X;
    }
    function u(U, X) {
      var F = U.sortIndex - X.sortIndex;
      return F !== 0 ? F : U.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      s.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, p = h.now();
      s.unstable_now = function() {
        return h.now() - p;
      };
    }
    var g = [], v = [], w = 1, R = null, b = 3, C = !1, O = !1, P = !1, j = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, B = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $(U) {
      for (var X = i(v); X !== null; ) {
        if (X.callback === null) a(v);
        else if (X.startTime <= U) a(v), X.sortIndex = X.expirationTime, r(g, X);
        else break;
        X = i(v);
      }
    }
    function K(U) {
      if (P = !1, $(U), !O) if (i(g) !== null) O = !0, Ke(ue);
      else {
        var X = i(v);
        X !== null && ke(K, X.startTime - U);
      }
    }
    function ue(U, X) {
      O = !1, P && (P = !1, D(Te), Te = -1), C = !0;
      var F = b;
      try {
        for ($(X), R = i(g); R !== null && (!(R.expirationTime > X) || U && !hr()); ) {
          var k = R.callback;
          if (typeof k == "function") {
            R.callback = null, b = R.priorityLevel;
            var A = k(R.expirationTime <= X);
            X = s.unstable_now(), typeof A == "function" ? R.callback = A : R === i(g) && a(g), $(X);
          } else a(g);
          R = i(g);
        }
        if (R !== null) var te = !0;
        else {
          var ne = i(v);
          ne !== null && ke(K, ne.startTime - X), te = !1;
        }
        return te;
      } finally {
        R = null, b = F, C = !1;
      }
    }
    var ee = !1, ie = null, Te = -1, Ie = 5, jt = -1;
    function hr() {
      return !(s.unstable_now() - jt < Ie);
    }
    function bt() {
      if (ie !== null) {
        var U = s.unstable_now();
        jt = U;
        var X = !0;
        try {
          X = ie(!0, U);
        } finally {
          X ? et() : (ee = !1, ie = null);
        }
      } else ee = !1;
    }
    var et;
    if (typeof B == "function") et = function() {
      B(bt);
    };
    else if (typeof MessageChannel < "u") {
      var pt = new MessageChannel(), Ct = pt.port2;
      pt.port1.onmessage = bt, et = function() {
        Ct.postMessage(null);
      };
    } else et = function() {
      j(bt, 0);
    };
    function Ke(U) {
      ie = U, ee || (ee = !0, et());
    }
    function ke(U, X) {
      Te = j(function() {
        U(s.unstable_now());
      }, X);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, s.unstable_continueExecution = function() {
      O || C || (O = !0, Ke(ue));
    }, s.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ie = 0 < U ? Math.floor(1e3 / U) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, s.unstable_getFirstCallbackNode = function() {
      return i(g);
    }, s.unstable_next = function(U) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = b;
      }
      var F = b;
      b = X;
      try {
        return U();
      } finally {
        b = F;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(U, X) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var F = b;
      b = U;
      try {
        return X();
      } finally {
        b = F;
      }
    }, s.unstable_scheduleCallback = function(U, X, F) {
      var k = s.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? k + F : k) : F = k, U) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return A = F + A, U = { id: w++, callback: X, priorityLevel: U, startTime: F, expirationTime: A, sortIndex: -1 }, F > k ? (U.sortIndex = F, r(v, U), i(g) === null && U === i(v) && (P ? (D(Te), Te = -1) : P = !0, ke(K, F - k))) : (U.sortIndex = A, r(g, U), O || C || (O = !0, Ke(ue))), U;
    }, s.unstable_shouldYield = hr, s.unstable_wrapCallback = function(U) {
      var X = b;
      return function() {
        var F = b;
        b = X;
        try {
          return U.apply(this, arguments);
        } finally {
          b = F;
        }
      };
    };
  })(La)), La;
}
var ed;
function Gf() {
  return ed || (ed = 1, Na.exports = Kf()), Na.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var td;
function Jf() {
  if (td) return Ze;
  td = 1;
  var s = el(), r = Gf();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), u = {};
  function d(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, w = {}, R = {};
  function b(e) {
    return g.call(R, e) ? !0 : g.call(w, e) ? !1 : v.test(e) ? R[e] = !0 : (w[e] = !0, !1);
  }
  function C(e, t, n, o) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function O(e, t, n, o) {
    if (t === null || typeof t > "u" || C(e, t, n, o)) return !0;
    if (o) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function P(e, t, n, o, l, c, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = f;
  }
  var j = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    j[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    j[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    j[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    j[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    j[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    j[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    j[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    j[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    j[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function B(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      D,
      B
    );
    j[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(D, B);
    j[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(D, B);
    j[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    j[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), j.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    j[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function $(e, t, n, o) {
    var l = j.hasOwnProperty(t) ? j[t] : null;
    (l !== null ? l.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, n, l, o) && (n = null), o || l === null ? b(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, o = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
  }
  var K = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = Symbol.for("react.element"), ee = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), Te = Symbol.for("react.strict_mode"), Ie = Symbol.for("react.profiler"), jt = Symbol.for("react.provider"), hr = Symbol.for("react.context"), bt = Symbol.for("react.forward_ref"), et = Symbol.for("react.suspense"), pt = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), ke = Symbol.for("react.offscreen"), U = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F = Object.assign, k;
  function A(e) {
    if (k === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      k = t && t[1] || "";
    }
    return `
` + k + e;
  }
  var te = !1;
  function ne(e, t) {
    if (!e || te) return "";
    te = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (T) {
          var o = T;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (T) {
          o = T;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (T) {
          o = T;
        }
        e();
      }
    } catch (T) {
      if (T && o && typeof T.stack == "string") {
        for (var l = T.stack.split(`
`), c = o.stack.split(`
`), f = l.length - 1, m = c.length - 1; 1 <= f && 0 <= m && l[f] !== c[m]; ) m--;
        for (; 1 <= f && 0 <= m; f--, m--) if (l[f] !== c[m]) {
          if (f !== 1 || m !== 1)
            do
              if (f--, m--, 0 > m || l[f] !== c[m]) {
                var y = `
` + l[f].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= f && 0 <= m);
          break;
        }
      }
    } finally {
      te = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? A(e) : "";
  }
  function oe(e) {
    switch (e.tag) {
      case 5:
        return A(e.type);
      case 16:
        return A("Lazy");
      case 13:
        return A("Suspense");
      case 19:
        return A("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ne(e.type, !1), e;
      case 11:
        return e = ne(e.type.render, !1), e;
      case 1:
        return e = ne(e.type, !0), e;
      default:
        return "";
    }
  }
  function ae(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ie:
        return "Fragment";
      case ee:
        return "Portal";
      case Ie:
        return "Profiler";
      case Te:
        return "StrictMode";
      case et:
        return "Suspense";
      case pt:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case hr:
        return (e.displayName || "Context") + ".Consumer";
      case jt:
        return (e._context.displayName || "Context") + ".Provider";
      case bt:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ct:
        return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
      case Ke:
        t = e._payload, e = e._init;
        try {
          return ae(e(t));
        } catch {
        }
    }
    return null;
  }
  function he(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ae(t);
      case 8:
        return t === Te ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ve(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function tt(e) {
    var t = ve(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, c = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(f) {
        o = "" + f, c.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(f) {
        o = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function fi(e) {
    e._valueTracker || (e._valueTracker = tt(e));
  }
  function nl(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), o = "";
    return e && (o = ve(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== n ? (t.setValue(e), !0) : !1;
  }
  function pi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ds(e, t) {
    var n = t.checked;
    return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function il(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, o = t.checked != null ? t.checked : t.defaultChecked;
    n = ce(t.value != null ? t.value : n), e._wrapperState = { initialChecked: o, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function sl(e, t) {
    t = t.checked, t != null && $(e, "checked", t, !1);
  }
  function zs(e, t) {
    sl(e, t);
    var n = ce(t.value), o = t.type;
    if (n != null) o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Bs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bs(e, t.type, ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ol(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Bs(e, t, n) {
    (t !== "number" || pi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var gn = Array.isArray;
  function Ir(e, t, n, o) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && o && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ce(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, o && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ms(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return F({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function al(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (gn(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ce(n) };
  }
  function ll(e, t) {
    var n = ce(t.value), o = ce(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), o != null && (e.defaultValue = "" + o);
  }
  function ul(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function cl(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? cl(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var gi, dl = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, o, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (gi = gi || document.createElement("div"), gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function mn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var vn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Kd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(vn).forEach(function(e) {
    Kd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), vn[t] = vn[e];
    });
  });
  function hl(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vn.hasOwnProperty(e) && vn[e] ? ("" + t).trim() : t + "px";
  }
  function fl(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var o = n.indexOf("--") === 0, l = hl(n, t[n], o);
      n === "float" && (n = "cssFloat"), o ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Gd = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ws(e, t) {
    if (t) {
      if (Gd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Vs(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var qs = null;
  function Hs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ks = null, jr = null, Nr = null;
  function pl(e) {
    if (e = zn(e)) {
      if (typeof Ks != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Di(t), Ks(e.stateNode, e.type, t));
    }
  }
  function gl(e) {
    jr ? Nr ? Nr.push(e) : Nr = [e] : jr = e;
  }
  function ml() {
    if (jr) {
      var e = jr, t = Nr;
      if (Nr = jr = null, pl(e), t) for (e = 0; e < t.length; e++) pl(t[e]);
    }
  }
  function vl(e, t) {
    return e(t);
  }
  function yl() {
  }
  var Gs = !1;
  function wl(e, t, n) {
    if (Gs) return e(t, n);
    Gs = !0;
    try {
      return vl(e, t, n);
    } finally {
      Gs = !1, (jr !== null || Nr !== null) && (yl(), ml());
    }
  }
  function yn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = Di(n);
    if (o === null) return null;
    n = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var Js = !1;
  if (p) try {
    var wn = {};
    Object.defineProperty(wn, "passive", { get: function() {
      Js = !0;
    } }), window.addEventListener("test", wn, wn), window.removeEventListener("test", wn, wn);
  } catch {
    Js = !1;
  }
  function Jd(e, t, n, o, l, c, f, m, y) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, T);
    } catch (I) {
      this.onError(I);
    }
  }
  var _n = !1, mi = null, vi = !1, Qs = null, Qd = { onError: function(e) {
    _n = !0, mi = e;
  } };
  function Yd(e, t, n, o, l, c, f, m, y) {
    _n = !1, mi = null, Jd.apply(Qd, arguments);
  }
  function Xd(e, t, n, o, l, c, f, m, y) {
    if (Yd.apply(this, arguments), _n) {
      if (_n) {
        var T = mi;
        _n = !1, mi = null;
      } else throw Error(i(198));
      vi || (vi = !0, Qs = T);
    }
  }
  function fr(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function _l(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function kl(e) {
    if (fr(e) !== e) throw Error(i(188));
  }
  function Zd(e) {
    var t = e.alternate;
    if (!t) {
      if (t = fr(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, o = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (o = l.return, o !== null) {
          n = o;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c; ) {
          if (c === n) return kl(l), e;
          if (c === o) return kl(l), t;
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== o.return) n = l, o = c;
      else {
        for (var f = !1, m = l.child; m; ) {
          if (m === n) {
            f = !0, n = l, o = c;
            break;
          }
          if (m === o) {
            f = !0, o = l, n = c;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = c.child; m; ) {
            if (m === n) {
              f = !0, n = c, o = l;
              break;
            }
            if (m === o) {
              f = !0, o = c, n = l;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(i(189));
        }
      }
      if (n.alternate !== o) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function Sl(e) {
    return e = Zd(e), e !== null ? El(e) : null;
  }
  function El(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = El(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Tl = r.unstable_scheduleCallback, bl = r.unstable_cancelCallback, eh = r.unstable_shouldYield, th = r.unstable_requestPaint, be = r.unstable_now, rh = r.unstable_getCurrentPriorityLevel, Ys = r.unstable_ImmediatePriority, Cl = r.unstable_UserBlockingPriority, yi = r.unstable_NormalPriority, nh = r.unstable_LowPriority, Rl = r.unstable_IdlePriority, wi = null, Rt = null;
  function ih(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function") try {
      Rt.onCommitFiberRoot(wi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var gt = Math.clz32 ? Math.clz32 : ah, sh = Math.log, oh = Math.LN2;
  function ah(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (sh(e) / oh | 0) | 0;
  }
  var _i = 64, ki = 4194304;
  function kn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Si(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0, l = e.suspendedLanes, c = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var m = f & ~l;
      m !== 0 ? o = kn(m) : (c &= f, c !== 0 && (o = kn(c)));
    } else f = n & ~l, f !== 0 ? o = kn(f) : c !== 0 && (o = kn(c));
    if (o === 0) return 0;
    if (t !== 0 && t !== o && (t & l) === 0 && (l = o & -o, c = t & -t, l >= c || l === 16 && (c & 4194240) !== 0)) return t;
    if ((o & 4) !== 0 && (o |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= o; 0 < t; ) n = 31 - gt(t), l = 1 << n, o |= e[n], t &= ~l;
    return o;
  }
  function lh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function uh(e, t) {
    for (var n = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var f = 31 - gt(c), m = 1 << f, y = l[f];
      y === -1 ? ((m & n) === 0 || (m & o) !== 0) && (l[f] = lh(m, t)) : y <= t && (e.expiredLanes |= m), c &= ~m;
    }
  }
  function Xs(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ol() {
    var e = _i;
    return _i <<= 1, (_i & 4194240) === 0 && (_i = 64), e;
  }
  function Zs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - gt(t), e[t] = n;
  }
  function ch(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - gt(n), c = 1 << l;
      t[l] = 0, o[l] = -1, e[l] = -1, n &= ~c;
    }
  }
  function eo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var o = 31 - gt(n), l = 1 << o;
      l & t | e[o] & t && (e[o] |= t), n &= ~l;
    }
  }
  var de = 0;
  function Pl(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var xl, to, Al, Il, jl, ro = !1, Ei = [], qt = null, Ht = null, Kt = null, En = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Gt = [], dh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Nl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        qt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ht = null;
        break;
      case "mouseover":
      case "mouseout":
        Kt = null;
        break;
      case "pointerover":
      case "pointerout":
        En.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tn.delete(t.pointerId);
    }
  }
  function bn(e, t, n, o, l, c) {
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: o, nativeEvent: c, targetContainers: [l] }, t !== null && (t = zn(t), t !== null && to(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function hh(e, t, n, o, l) {
    switch (t) {
      case "focusin":
        return qt = bn(qt, e, t, n, o, l), !0;
      case "dragenter":
        return Ht = bn(Ht, e, t, n, o, l), !0;
      case "mouseover":
        return Kt = bn(Kt, e, t, n, o, l), !0;
      case "pointerover":
        var c = l.pointerId;
        return En.set(c, bn(En.get(c) || null, e, t, n, o, l)), !0;
      case "gotpointercapture":
        return c = l.pointerId, Tn.set(c, bn(Tn.get(c) || null, e, t, n, o, l)), !0;
    }
    return !1;
  }
  function Ll(e) {
    var t = pr(e.target);
    if (t !== null) {
      var n = fr(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = _l(n), t !== null) {
            e.blockedOn = t, jl(e.priority, function() {
              Al(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ti(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        qs = o, n.target.dispatchEvent(o), qs = null;
      } else return t = zn(n), t !== null && to(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $l(e, t, n) {
    Ti(e) && n.delete(t);
  }
  function fh() {
    ro = !1, qt !== null && Ti(qt) && (qt = null), Ht !== null && Ti(Ht) && (Ht = null), Kt !== null && Ti(Kt) && (Kt = null), En.forEach($l), Tn.forEach($l);
  }
  function Cn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ro || (ro = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, fh)));
  }
  function Rn(e) {
    function t(l) {
      return Cn(l, e);
    }
    if (0 < Ei.length) {
      Cn(Ei[0], e);
      for (var n = 1; n < Ei.length; n++) {
        var o = Ei[n];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (qt !== null && Cn(qt, e), Ht !== null && Cn(Ht, e), Kt !== null && Cn(Kt, e), En.forEach(t), Tn.forEach(t), n = 0; n < Gt.length; n++) o = Gt[n], o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < Gt.length && (n = Gt[0], n.blockedOn === null); ) Ll(n), n.blockedOn === null && Gt.shift();
  }
  var Lr = K.ReactCurrentBatchConfig, bi = !0;
  function ph(e, t, n, o) {
    var l = de, c = Lr.transition;
    Lr.transition = null;
    try {
      de = 1, no(e, t, n, o);
    } finally {
      de = l, Lr.transition = c;
    }
  }
  function gh(e, t, n, o) {
    var l = de, c = Lr.transition;
    Lr.transition = null;
    try {
      de = 4, no(e, t, n, o);
    } finally {
      de = l, Lr.transition = c;
    }
  }
  function no(e, t, n, o) {
    if (bi) {
      var l = io(e, t, n, o);
      if (l === null) So(e, t, o, Ci, n), Nl(e, o);
      else if (hh(l, e, t, n, o)) o.stopPropagation();
      else if (Nl(e, o), t & 4 && -1 < dh.indexOf(e)) {
        for (; l !== null; ) {
          var c = zn(l);
          if (c !== null && xl(c), c = io(e, t, n, o), c === null && So(e, t, o, Ci, n), c === l) break;
          l = c;
        }
        l !== null && o.stopPropagation();
      } else So(e, t, o, null, n);
    }
  }
  var Ci = null;
  function io(e, t, n, o) {
    if (Ci = null, e = Hs(o), e = pr(e), e !== null) if (t = fr(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = _l(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ci = e, null;
  }
  function Ul(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (rh()) {
          case Ys:
            return 1;
          case Cl:
            return 4;
          case yi:
          case nh:
            return 16;
          case Rl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null, so = null, Ri = null;
  function Dl() {
    if (Ri) return Ri;
    var e, t = so, n = t.length, o, l = "value" in Jt ? Jt.value : Jt.textContent, c = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (o = 1; o <= f && t[n - o] === l[c - o]; o++) ;
    return Ri = l.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Oi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Pi() {
    return !0;
  }
  function zl() {
    return !1;
  }
  function rt(e) {
    function t(n, o, l, c, f) {
      this._reactName = n, this._targetInst = l, this.type = o, this.nativeEvent = c, this.target = f, this.currentTarget = null;
      for (var m in e) e.hasOwnProperty(m) && (n = e[m], this[m] = n ? n(c) : c[m]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Pi : zl, this.isPropagationStopped = zl, this;
    }
    return F(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pi);
    }, persist: function() {
    }, isPersistent: Pi }), t;
  }
  var $r = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, oo = rt($r), On = F({}, $r, { view: 0, detail: 0 }), mh = rt(On), ao, lo, Pn, xi = F({}, On, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: co, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (ao = e.screenX - Pn.screenX, lo = e.screenY - Pn.screenY) : lo = ao = 0, Pn = e), ao);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : lo;
  } }), Bl = rt(xi), vh = F({}, xi, { dataTransfer: 0 }), yh = rt(vh), wh = F({}, On, { relatedTarget: 0 }), uo = rt(wh), _h = F({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), kh = rt(_h), Sh = F({}, $r, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Eh = rt(Sh), Th = F({}, $r, { data: 0 }), Ml = rt(Th), bh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ch = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Rh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Oh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Rh[e]) ? !!t[e] : !1;
  }
  function co() {
    return Oh;
  }
  var Ph = F({}, On, { key: function(e) {
    if (e.key) {
      var t = bh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ch[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: co, charCode: function(e) {
    return e.type === "keypress" ? Oi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), xh = rt(Ph), Ah = F({}, xi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fl = rt(Ah), Ih = F({}, On, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: co }), jh = rt(Ih), Nh = F({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lh = rt(Nh), $h = F({}, xi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Uh = rt($h), Dh = [9, 13, 27, 32], ho = p && "CompositionEvent" in window, xn = null;
  p && "documentMode" in document && (xn = document.documentMode);
  var zh = p && "TextEvent" in window && !xn, Wl = p && (!ho || xn && 8 < xn && 11 >= xn), Vl = " ", ql = !1;
  function Hl(e, t) {
    switch (e) {
      case "keyup":
        return Dh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Kl(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ur = !1;
  function Bh(e, t) {
    switch (e) {
      case "compositionend":
        return Kl(t);
      case "keypress":
        return t.which !== 32 ? null : (ql = !0, Vl);
      case "textInput":
        return e = t.data, e === Vl && ql ? null : e;
      default:
        return null;
    }
  }
  function Mh(e, t) {
    if (Ur) return e === "compositionend" || !ho && Hl(e, t) ? (e = Dl(), Ri = so = Jt = null, Ur = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Wl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Fh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Gl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Fh[e.type] : t === "textarea";
  }
  function Jl(e, t, n, o) {
    gl(o), t = Li(t, "onChange"), 0 < t.length && (n = new oo("onChange", "change", null, n, o), e.push({ event: n, listeners: t }));
  }
  var An = null, In = null;
  function Wh(e) {
    fu(e, 0);
  }
  function Ai(e) {
    var t = Fr(e);
    if (nl(t)) return e;
  }
  function Vh(e, t) {
    if (e === "change") return t;
  }
  var Ql = !1;
  if (p) {
    var fo;
    if (p) {
      var po = "oninput" in document;
      if (!po) {
        var Yl = document.createElement("div");
        Yl.setAttribute("oninput", "return;"), po = typeof Yl.oninput == "function";
      }
      fo = po;
    } else fo = !1;
    Ql = fo && (!document.documentMode || 9 < document.documentMode);
  }
  function Xl() {
    An && (An.detachEvent("onpropertychange", Zl), In = An = null);
  }
  function Zl(e) {
    if (e.propertyName === "value" && Ai(In)) {
      var t = [];
      Jl(t, In, e, Hs(e)), wl(Wh, t);
    }
  }
  function qh(e, t, n) {
    e === "focusin" ? (Xl(), An = t, In = n, An.attachEvent("onpropertychange", Zl)) : e === "focusout" && Xl();
  }
  function Hh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ai(In);
  }
  function Kh(e, t) {
    if (e === "click") return Ai(t);
  }
  function Gh(e, t) {
    if (e === "input" || e === "change") return Ai(t);
  }
  function Jh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mt = typeof Object.is == "function" ? Object.is : Jh;
  function jn(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var l = n[o];
      if (!g.call(t, l) || !mt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function eu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tu(e, t) {
    var n = eu(e);
    e = 0;
    for (var o; n; ) {
      if (n.nodeType === 3) {
        if (o = e + n.textContent.length, e <= t && o >= t) return { node: n, offset: t - e };
        e = o;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = eu(n);
    }
  }
  function ru(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ru(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function nu() {
    for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = pi(e.document);
    }
    return t;
  }
  function go(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Qh(e) {
    var t = nu(), n = e.focusedElem, o = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ru(n.ownerDocument.documentElement, n)) {
      if (o !== null && go(n)) {
        if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, c = Math.min(o.start, l);
          o = o.end === void 0 ? c : Math.min(o.end, l), !e.extend && c > o && (l = o, o = c, c = l), l = tu(n, c);
          var f = tu(
            n,
            o
          );
          l && f && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), c > o ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Yh = p && "documentMode" in document && 11 >= document.documentMode, Dr = null, mo = null, Nn = null, vo = !1;
  function iu(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vo || Dr == null || Dr !== pi(o) || (o = Dr, "selectionStart" in o && go(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Nn && jn(Nn, o) || (Nn = o, o = Li(mo, "onSelect"), 0 < o.length && (t = new oo("onSelect", "select", null, t, n), e.push({ event: t, listeners: o }), t.target = Dr)));
  }
  function Ii(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var zr = { animationend: Ii("Animation", "AnimationEnd"), animationiteration: Ii("Animation", "AnimationIteration"), animationstart: Ii("Animation", "AnimationStart"), transitionend: Ii("Transition", "TransitionEnd") }, yo = {}, su = {};
  p && (su = document.createElement("div").style, "AnimationEvent" in window || (delete zr.animationend.animation, delete zr.animationiteration.animation, delete zr.animationstart.animation), "TransitionEvent" in window || delete zr.transitionend.transition);
  function ji(e) {
    if (yo[e]) return yo[e];
    if (!zr[e]) return e;
    var t = zr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in su) return yo[e] = t[n];
    return e;
  }
  var ou = ji("animationend"), au = ji("animationiteration"), lu = ji("animationstart"), uu = ji("transitionend"), cu = /* @__PURE__ */ new Map(), du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qt(e, t) {
    cu.set(e, t), d(t, [e]);
  }
  for (var wo = 0; wo < du.length; wo++) {
    var _o = du[wo], Xh = _o.toLowerCase(), Zh = _o[0].toUpperCase() + _o.slice(1);
    Qt(Xh, "on" + Zh);
  }
  Qt(ou, "onAnimationEnd"), Qt(au, "onAnimationIteration"), Qt(lu, "onAnimationStart"), Qt("dblclick", "onDoubleClick"), Qt("focusin", "onFocus"), Qt("focusout", "onBlur"), Qt(uu, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ef = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
  function hu(e, t, n) {
    var o = e.type || "unknown-event";
    e.currentTarget = n, Xd(o, t, void 0, e), e.currentTarget = null;
  }
  function fu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n], l = o.event;
      o = o.listeners;
      e: {
        var c = void 0;
        if (t) for (var f = o.length - 1; 0 <= f; f--) {
          var m = o[f], y = m.instance, T = m.currentTarget;
          if (m = m.listener, y !== c && l.isPropagationStopped()) break e;
          hu(l, m, T), c = y;
        }
        else for (f = 0; f < o.length; f++) {
          if (m = o[f], y = m.instance, T = m.currentTarget, m = m.listener, y !== c && l.isPropagationStopped()) break e;
          hu(l, m, T), c = y;
        }
      }
    }
    if (vi) throw e = Qs, vi = !1, Qs = null, e;
  }
  function ge(e, t) {
    var n = t[Oo];
    n === void 0 && (n = t[Oo] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    n.has(o) || (pu(t, e, 2, !1), n.add(o));
  }
  function ko(e, t, n) {
    var o = 0;
    t && (o |= 4), pu(n, e, o, t);
  }
  var Ni = "_reactListening" + Math.random().toString(36).slice(2);
  function $n(e) {
    if (!e[Ni]) {
      e[Ni] = !0, a.forEach(function(n) {
        n !== "selectionchange" && (ef.has(n) || ko(n, !1, e), ko(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ni] || (t[Ni] = !0, ko("selectionchange", !1, t));
    }
  }
  function pu(e, t, n, o) {
    switch (Ul(t)) {
      case 1:
        var l = ph;
        break;
      case 4:
        l = gh;
        break;
      default:
        l = no;
    }
    n = l.bind(null, t, n, e), l = void 0, !Js || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), o ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function So(e, t, n, o, l) {
    var c = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var f = o.tag;
      if (f === 3 || f === 4) {
        var m = o.stateNode.containerInfo;
        if (m === l || m.nodeType === 8 && m.parentNode === l) break;
        if (f === 4) for (f = o.return; f !== null; ) {
          var y = f.tag;
          if ((y === 3 || y === 4) && (y = f.stateNode.containerInfo, y === l || y.nodeType === 8 && y.parentNode === l)) return;
          f = f.return;
        }
        for (; m !== null; ) {
          if (f = pr(m), f === null) return;
          if (y = f.tag, y === 5 || y === 6) {
            o = c = f;
            continue e;
          }
          m = m.parentNode;
        }
      }
      o = o.return;
    }
    wl(function() {
      var T = c, I = Hs(n), N = [];
      e: {
        var x = cu.get(e);
        if (x !== void 0) {
          var z = oo, W = e;
          switch (e) {
            case "keypress":
              if (Oi(n) === 0) break e;
            case "keydown":
            case "keyup":
              z = xh;
              break;
            case "focusin":
              W = "focus", z = uo;
              break;
            case "focusout":
              W = "blur", z = uo;
              break;
            case "beforeblur":
            case "afterblur":
              z = uo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Bl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = yh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = jh;
              break;
            case ou:
            case au:
            case lu:
              z = kh;
              break;
            case uu:
              z = Lh;
              break;
            case "scroll":
              z = mh;
              break;
            case "wheel":
              z = Uh;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Eh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Fl;
          }
          var V = (t & 4) !== 0, Ce = !V && e === "scroll", S = V ? x !== null ? x + "Capture" : null : x;
          V = [];
          for (var _ = T, E; _ !== null; ) {
            E = _;
            var L = E.stateNode;
            if (E.tag === 5 && L !== null && (E = L, S !== null && (L = yn(_, S), L != null && V.push(Un(_, L, E)))), Ce) break;
            _ = _.return;
          }
          0 < V.length && (x = new z(x, W, null, n, I), N.push({ event: x, listeners: V }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (x = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", x && n !== qs && (W = n.relatedTarget || n.fromElement) && (pr(W) || W[Nt])) break e;
          if ((z || x) && (x = I.window === I ? I : (x = I.ownerDocument) ? x.defaultView || x.parentWindow : window, z ? (W = n.relatedTarget || n.toElement, z = T, W = W ? pr(W) : null, W !== null && (Ce = fr(W), W !== Ce || W.tag !== 5 && W.tag !== 6) && (W = null)) : (z = null, W = T), z !== W)) {
            if (V = Bl, L = "onMouseLeave", S = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (V = Fl, L = "onPointerLeave", S = "onPointerEnter", _ = "pointer"), Ce = z == null ? x : Fr(z), E = W == null ? x : Fr(W), x = new V(L, _ + "leave", z, n, I), x.target = Ce, x.relatedTarget = E, L = null, pr(I) === T && (V = new V(S, _ + "enter", W, n, I), V.target = E, V.relatedTarget = Ce, L = V), Ce = L, z && W) t: {
              for (V = z, S = W, _ = 0, E = V; E; E = Br(E)) _++;
              for (E = 0, L = S; L; L = Br(L)) E++;
              for (; 0 < _ - E; ) V = Br(V), _--;
              for (; 0 < E - _; ) S = Br(S), E--;
              for (; _--; ) {
                if (V === S || S !== null && V === S.alternate) break t;
                V = Br(V), S = Br(S);
              }
              V = null;
            }
            else V = null;
            z !== null && gu(N, x, z, V, !1), W !== null && Ce !== null && gu(N, Ce, W, V, !0);
          }
        }
        e: {
          if (x = T ? Fr(T) : window, z = x.nodeName && x.nodeName.toLowerCase(), z === "select" || z === "input" && x.type === "file") var q = Vh;
          else if (Gl(x)) if (Ql) q = Gh;
          else {
            q = Hh;
            var G = qh;
          }
          else (z = x.nodeName) && z.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (q = Kh);
          if (q && (q = q(e, T))) {
            Jl(N, q, n, I);
            break e;
          }
          G && G(e, x, T), e === "focusout" && (G = x._wrapperState) && G.controlled && x.type === "number" && Bs(x, "number", x.value);
        }
        switch (G = T ? Fr(T) : window, e) {
          case "focusin":
            (Gl(G) || G.contentEditable === "true") && (Dr = G, mo = T, Nn = null);
            break;
          case "focusout":
            Nn = mo = Dr = null;
            break;
          case "mousedown":
            vo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vo = !1, iu(N, n, I);
            break;
          case "selectionchange":
            if (Yh) break;
          case "keydown":
          case "keyup":
            iu(N, n, I);
        }
        var J;
        if (ho) e: {
          switch (e) {
            case "compositionstart":
              var Z = "onCompositionStart";
              break e;
            case "compositionend":
              Z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Z = "onCompositionUpdate";
              break e;
          }
          Z = void 0;
        }
        else Ur ? Hl(e, n) && (Z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Z = "onCompositionStart");
        Z && (Wl && n.locale !== "ko" && (Ur || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && Ur && (J = Dl()) : (Jt = I, so = "value" in Jt ? Jt.value : Jt.textContent, Ur = !0)), G = Li(T, Z), 0 < G.length && (Z = new Ml(Z, e, null, n, I), N.push({ event: Z, listeners: G }), J ? Z.data = J : (J = Kl(n), J !== null && (Z.data = J)))), (J = zh ? Bh(e, n) : Mh(e, n)) && (T = Li(T, "onBeforeInput"), 0 < T.length && (I = new Ml("onBeforeInput", "beforeinput", null, n, I), N.push({ event: I, listeners: T }), I.data = J));
      }
      fu(N, t);
    });
  }
  function Un(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Li(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
      var l = e, c = l.stateNode;
      l.tag === 5 && c !== null && (l = c, c = yn(e, n), c != null && o.unshift(Un(e, c, l)), c = yn(e, t), c != null && o.push(Un(e, c, l))), e = e.return;
    }
    return o;
  }
  function Br(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gu(e, t, n, o, l) {
    for (var c = t._reactName, f = []; n !== null && n !== o; ) {
      var m = n, y = m.alternate, T = m.stateNode;
      if (y !== null && y === o) break;
      m.tag === 5 && T !== null && (m = T, l ? (y = yn(n, c), y != null && f.unshift(Un(n, y, m))) : l || (y = yn(n, c), y != null && f.push(Un(n, y, m)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var tf = /\r\n?/g, rf = /\u0000|\uFFFD/g;
  function mu(e) {
    return (typeof e == "string" ? e : "" + e).replace(tf, `
`).replace(rf, "");
  }
  function $i(e, t, n) {
    if (t = mu(t), mu(e) !== t && n) throw Error(i(425));
  }
  function Ui() {
  }
  var Eo = null, To = null;
  function bo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Co = typeof setTimeout == "function" ? setTimeout : void 0, nf = typeof clearTimeout == "function" ? clearTimeout : void 0, vu = typeof Promise == "function" ? Promise : void 0, sf = typeof queueMicrotask == "function" ? queueMicrotask : typeof vu < "u" ? function(e) {
    return vu.resolve(null).then(e).catch(of);
  } : Co;
  function of(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ro(e, t) {
    var n = t, o = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (o === 0) {
          e.removeChild(l), Rn(t);
          return;
        }
        o--;
      } else n !== "$" && n !== "$?" && n !== "$!" || o++;
      n = l;
    } while (n);
    Rn(t);
  }
  function Yt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function yu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Mr = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + Mr, Dn = "__reactProps$" + Mr, Nt = "__reactContainer$" + Mr, Oo = "__reactEvents$" + Mr, af = "__reactListeners$" + Mr, lf = "__reactHandles$" + Mr;
  function pr(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Nt] || n[Ot]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = yu(e); e !== null; ) {
          if (n = e[Ot]) return n;
          e = yu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function zn(e) {
    return e = e[Ot] || e[Nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Di(e) {
    return e[Dn] || null;
  }
  var Po = [], Wr = -1;
  function Xt(e) {
    return { current: e };
  }
  function me(e) {
    0 > Wr || (e.current = Po[Wr], Po[Wr] = null, Wr--);
  }
  function fe(e, t) {
    Wr++, Po[Wr] = e.current, e.current = t;
  }
  var Zt = {}, Be = Xt(Zt), Ge = Xt(!1), gr = Zt;
  function Vr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zt;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
    var l = {}, c;
    for (c in n) l[c] = t[c];
    return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Je(e) {
    return e = e.childContextTypes, e != null;
  }
  function zi() {
    me(Ge), me(Be);
  }
  function wu(e, t, n) {
    if (Be.current !== Zt) throw Error(i(168));
    fe(Be, t), fe(Ge, n);
  }
  function _u(e, t, n) {
    var o = e.stateNode;
    if (t = t.childContextTypes, typeof o.getChildContext != "function") return n;
    o = o.getChildContext();
    for (var l in o) if (!(l in t)) throw Error(i(108, he(e) || "Unknown", l));
    return F({}, n, o);
  }
  function Bi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, gr = Be.current, fe(Be, e), fe(Ge, Ge.current), !0;
  }
  function ku(e, t, n) {
    var o = e.stateNode;
    if (!o) throw Error(i(169));
    n ? (e = _u(e, t, gr), o.__reactInternalMemoizedMergedChildContext = e, me(Ge), me(Be), fe(Be, e)) : me(Ge), fe(Ge, n);
  }
  var Lt = null, Mi = !1, xo = !1;
  function Su(e) {
    Lt === null ? Lt = [e] : Lt.push(e);
  }
  function uf(e) {
    Mi = !0, Su(e);
  }
  function er() {
    if (!xo && Lt !== null) {
      xo = !0;
      var e = 0, t = de;
      try {
        var n = Lt;
        for (de = 1; e < n.length; e++) {
          var o = n[e];
          do
            o = o(!0);
          while (o !== null);
        }
        Lt = null, Mi = !1;
      } catch (l) {
        throw Lt !== null && (Lt = Lt.slice(e + 1)), Tl(Ys, er), l;
      } finally {
        de = t, xo = !1;
      }
    }
    return null;
  }
  var qr = [], Hr = 0, Fi = null, Wi = 0, lt = [], ut = 0, mr = null, $t = 1, Ut = "";
  function vr(e, t) {
    qr[Hr++] = Wi, qr[Hr++] = Fi, Fi = e, Wi = t;
  }
  function Eu(e, t, n) {
    lt[ut++] = $t, lt[ut++] = Ut, lt[ut++] = mr, mr = e;
    var o = $t;
    e = Ut;
    var l = 32 - gt(o) - 1;
    o &= ~(1 << l), n += 1;
    var c = 32 - gt(t) + l;
    if (30 < c) {
      var f = l - l % 5;
      c = (o & (1 << f) - 1).toString(32), o >>= f, l -= f, $t = 1 << 32 - gt(t) + l | n << l | o, Ut = c + e;
    } else $t = 1 << c | n << l | o, Ut = e;
  }
  function Ao(e) {
    e.return !== null && (vr(e, 1), Eu(e, 1, 0));
  }
  function Io(e) {
    for (; e === Fi; ) Fi = qr[--Hr], qr[Hr] = null, Wi = qr[--Hr], qr[Hr] = null;
    for (; e === mr; ) mr = lt[--ut], lt[ut] = null, Ut = lt[--ut], lt[ut] = null, $t = lt[--ut], lt[ut] = null;
  }
  var nt = null, it = null, ye = !1, vt = null;
  function Tu(e, t) {
    var n = ft(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function bu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, it = Yt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, it = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mr !== null ? { id: $t, overflow: Ut } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, it = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function No(e) {
    if (ye) {
      var t = it;
      if (t) {
        var n = t;
        if (!bu(e, t)) {
          if (jo(e)) throw Error(i(418));
          t = Yt(n.nextSibling);
          var o = nt;
          t && bu(e, t) ? Tu(o, n) : (e.flags = e.flags & -4097 | 2, ye = !1, nt = e);
        }
      } else {
        if (jo(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, ye = !1, nt = e;
      }
    }
  }
  function Cu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    nt = e;
  }
  function Vi(e) {
    if (e !== nt) return !1;
    if (!ye) return Cu(e), ye = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bo(e.type, e.memoizedProps)), t && (t = it)) {
      if (jo(e)) throw Ru(), Error(i(418));
      for (; t; ) Tu(e, t), t = Yt(t.nextSibling);
    }
    if (Cu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                it = Yt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        it = null;
      }
    } else it = nt ? Yt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ru() {
    for (var e = it; e; ) e = Yt(e.nextSibling);
  }
  function Kr() {
    it = nt = null, ye = !1;
  }
  function Lo(e) {
    vt === null ? vt = [e] : vt.push(e);
  }
  var cf = K.ReactCurrentBatchConfig;
  function Bn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var o = n.stateNode;
        }
        if (!o) throw Error(i(147, e));
        var l = o, c = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function(f) {
          var m = l.refs;
          f === null ? delete m[c] : m[c] = f;
        }, t._stringRef = c, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function qi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ou(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pu(e) {
    function t(S, _) {
      if (e) {
        var E = S.deletions;
        E === null ? (S.deletions = [_], S.flags |= 16) : E.push(_);
      }
    }
    function n(S, _) {
      if (!e) return null;
      for (; _ !== null; ) t(S, _), _ = _.sibling;
      return null;
    }
    function o(S, _) {
      for (S = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? S.set(_.key, _) : S.set(_.index, _), _ = _.sibling;
      return S;
    }
    function l(S, _) {
      return S = lr(S, _), S.index = 0, S.sibling = null, S;
    }
    function c(S, _, E) {
      return S.index = E, e ? (E = S.alternate, E !== null ? (E = E.index, E < _ ? (S.flags |= 2, _) : E) : (S.flags |= 2, _)) : (S.flags |= 1048576, _);
    }
    function f(S) {
      return e && S.alternate === null && (S.flags |= 2), S;
    }
    function m(S, _, E, L) {
      return _ === null || _.tag !== 6 ? (_ = Ca(E, S.mode, L), _.return = S, _) : (_ = l(_, E), _.return = S, _);
    }
    function y(S, _, E, L) {
      var q = E.type;
      return q === ie ? I(S, _, E.props.children, L, E.key) : _ !== null && (_.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Ke && Ou(q) === _.type) ? (L = l(_, E.props), L.ref = Bn(S, _, E), L.return = S, L) : (L = gs(E.type, E.key, E.props, null, S.mode, L), L.ref = Bn(S, _, E), L.return = S, L);
    }
    function T(S, _, E, L) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== E.containerInfo || _.stateNode.implementation !== E.implementation ? (_ = Ra(E, S.mode, L), _.return = S, _) : (_ = l(_, E.children || []), _.return = S, _);
    }
    function I(S, _, E, L, q) {
      return _ === null || _.tag !== 7 ? (_ = br(E, S.mode, L, q), _.return = S, _) : (_ = l(_, E), _.return = S, _);
    }
    function N(S, _, E) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = Ca("" + _, S.mode, E), _.return = S, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case ue:
            return E = gs(_.type, _.key, _.props, null, S.mode, E), E.ref = Bn(S, null, _), E.return = S, E;
          case ee:
            return _ = Ra(_, S.mode, E), _.return = S, _;
          case Ke:
            var L = _._init;
            return N(S, L(_._payload), E);
        }
        if (gn(_) || X(_)) return _ = br(_, S.mode, E, null), _.return = S, _;
        qi(S, _);
      }
      return null;
    }
    function x(S, _, E, L) {
      var q = _ !== null ? _.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number") return q !== null ? null : m(S, _, "" + E, L);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ue:
            return E.key === q ? y(S, _, E, L) : null;
          case ee:
            return E.key === q ? T(S, _, E, L) : null;
          case Ke:
            return q = E._init, x(
              S,
              _,
              q(E._payload),
              L
            );
        }
        if (gn(E) || X(E)) return q !== null ? null : I(S, _, E, L, null);
        qi(S, E);
      }
      return null;
    }
    function z(S, _, E, L, q) {
      if (typeof L == "string" && L !== "" || typeof L == "number") return S = S.get(E) || null, m(_, S, "" + L, q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ue:
            return S = S.get(L.key === null ? E : L.key) || null, y(_, S, L, q);
          case ee:
            return S = S.get(L.key === null ? E : L.key) || null, T(_, S, L, q);
          case Ke:
            var G = L._init;
            return z(S, _, E, G(L._payload), q);
        }
        if (gn(L) || X(L)) return S = S.get(E) || null, I(_, S, L, q, null);
        qi(_, L);
      }
      return null;
    }
    function W(S, _, E, L) {
      for (var q = null, G = null, J = _, Z = _ = 0, Le = null; J !== null && Z < E.length; Z++) {
        J.index > Z ? (Le = J, J = null) : Le = J.sibling;
        var le = x(S, J, E[Z], L);
        if (le === null) {
          J === null && (J = Le);
          break;
        }
        e && J && le.alternate === null && t(S, J), _ = c(le, _, Z), G === null ? q = le : G.sibling = le, G = le, J = Le;
      }
      if (Z === E.length) return n(S, J), ye && vr(S, Z), q;
      if (J === null) {
        for (; Z < E.length; Z++) J = N(S, E[Z], L), J !== null && (_ = c(J, _, Z), G === null ? q = J : G.sibling = J, G = J);
        return ye && vr(S, Z), q;
      }
      for (J = o(S, J); Z < E.length; Z++) Le = z(J, S, Z, E[Z], L), Le !== null && (e && Le.alternate !== null && J.delete(Le.key === null ? Z : Le.key), _ = c(Le, _, Z), G === null ? q = Le : G.sibling = Le, G = Le);
      return e && J.forEach(function(ur) {
        return t(S, ur);
      }), ye && vr(S, Z), q;
    }
    function V(S, _, E, L) {
      var q = X(E);
      if (typeof q != "function") throw Error(i(150));
      if (E = q.call(E), E == null) throw Error(i(151));
      for (var G = q = null, J = _, Z = _ = 0, Le = null, le = E.next(); J !== null && !le.done; Z++, le = E.next()) {
        J.index > Z ? (Le = J, J = null) : Le = J.sibling;
        var ur = x(S, J, le.value, L);
        if (ur === null) {
          J === null && (J = Le);
          break;
        }
        e && J && ur.alternate === null && t(S, J), _ = c(ur, _, Z), G === null ? q = ur : G.sibling = ur, G = ur, J = Le;
      }
      if (le.done) return n(
        S,
        J
      ), ye && vr(S, Z), q;
      if (J === null) {
        for (; !le.done; Z++, le = E.next()) le = N(S, le.value, L), le !== null && (_ = c(le, _, Z), G === null ? q = le : G.sibling = le, G = le);
        return ye && vr(S, Z), q;
      }
      for (J = o(S, J); !le.done; Z++, le = E.next()) le = z(J, S, Z, le.value, L), le !== null && (e && le.alternate !== null && J.delete(le.key === null ? Z : le.key), _ = c(le, _, Z), G === null ? q = le : G.sibling = le, G = le);
      return e && J.forEach(function(Wf) {
        return t(S, Wf);
      }), ye && vr(S, Z), q;
    }
    function Ce(S, _, E, L) {
      if (typeof E == "object" && E !== null && E.type === ie && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ue:
            e: {
              for (var q = E.key, G = _; G !== null; ) {
                if (G.key === q) {
                  if (q = E.type, q === ie) {
                    if (G.tag === 7) {
                      n(S, G.sibling), _ = l(G, E.props.children), _.return = S, S = _;
                      break e;
                    }
                  } else if (G.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Ke && Ou(q) === G.type) {
                    n(S, G.sibling), _ = l(G, E.props), _.ref = Bn(S, G, E), _.return = S, S = _;
                    break e;
                  }
                  n(S, G);
                  break;
                } else t(S, G);
                G = G.sibling;
              }
              E.type === ie ? (_ = br(E.props.children, S.mode, L, E.key), _.return = S, S = _) : (L = gs(E.type, E.key, E.props, null, S.mode, L), L.ref = Bn(S, _, E), L.return = S, S = L);
            }
            return f(S);
          case ee:
            e: {
              for (G = E.key; _ !== null; ) {
                if (_.key === G) if (_.tag === 4 && _.stateNode.containerInfo === E.containerInfo && _.stateNode.implementation === E.implementation) {
                  n(S, _.sibling), _ = l(_, E.children || []), _.return = S, S = _;
                  break e;
                } else {
                  n(S, _);
                  break;
                }
                else t(S, _);
                _ = _.sibling;
              }
              _ = Ra(E, S.mode, L), _.return = S, S = _;
            }
            return f(S);
          case Ke:
            return G = E._init, Ce(S, _, G(E._payload), L);
        }
        if (gn(E)) return W(S, _, E, L);
        if (X(E)) return V(S, _, E, L);
        qi(S, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E, _ !== null && _.tag === 6 ? (n(S, _.sibling), _ = l(_, E), _.return = S, S = _) : (n(S, _), _ = Ca(E, S.mode, L), _.return = S, S = _), f(S)) : n(S, _);
    }
    return Ce;
  }
  var Gr = Pu(!0), xu = Pu(!1), Hi = Xt(null), Ki = null, Jr = null, $o = null;
  function Uo() {
    $o = Jr = Ki = null;
  }
  function Do(e) {
    var t = Hi.current;
    me(Hi), e._currentValue = t;
  }
  function zo(e, t, n) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Qr(e, t) {
    Ki = e, $o = Jr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Qe = !0), e.firstContext = null);
  }
  function ct(e) {
    var t = e._currentValue;
    if ($o !== e) if (e = { context: e, memoizedValue: t, next: null }, Jr === null) {
      if (Ki === null) throw Error(i(308));
      Jr = e, Ki.dependencies = { lanes: 0, firstContext: e };
    } else Jr = Jr.next = e;
    return t;
  }
  var yr = null;
  function Bo(e) {
    yr === null ? yr = [e] : yr.push(e);
  }
  function Au(e, t, n, o) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Bo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Dt(e, o);
  }
  function Dt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var tr = !1;
  function Mo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Iu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function zt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function rr(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (se & 2) !== 0) {
      var l = o.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), o.pending = t, Dt(e, n);
    }
    return l = o.interleaved, l === null ? (t.next = t, Bo(o)) : (t.next = l.next, l.next = t), o.interleaved = t, Dt(e, n);
  }
  function Gi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, eo(e, n);
    }
  }
  function ju(e, t) {
    var n = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, n === o)) {
      var l = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          c === null ? l = c = f : c = c.next = f, n = n.next;
        } while (n !== null);
        c === null ? l = c = t : c = c.next = t;
      } else l = c = t;
      n = { baseState: o.baseState, firstBaseUpdate: l, lastBaseUpdate: c, shared: o.shared, effects: o.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Ji(e, t, n, o) {
    var l = e.updateQueue;
    tr = !1;
    var c = l.firstBaseUpdate, f = l.lastBaseUpdate, m = l.shared.pending;
    if (m !== null) {
      l.shared.pending = null;
      var y = m, T = y.next;
      y.next = null, f === null ? c = T : f.next = T, f = y;
      var I = e.alternate;
      I !== null && (I = I.updateQueue, m = I.lastBaseUpdate, m !== f && (m === null ? I.firstBaseUpdate = T : m.next = T, I.lastBaseUpdate = y));
    }
    if (c !== null) {
      var N = l.baseState;
      f = 0, I = T = y = null, m = c;
      do {
        var x = m.lane, z = m.eventTime;
        if ((o & x) === x) {
          I !== null && (I = I.next = {
            eventTime: z,
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          });
          e: {
            var W = e, V = m;
            switch (x = t, z = n, V.tag) {
              case 1:
                if (W = V.payload, typeof W == "function") {
                  N = W.call(z, N, x);
                  break e;
                }
                N = W;
                break e;
              case 3:
                W.flags = W.flags & -65537 | 128;
              case 0:
                if (W = V.payload, x = typeof W == "function" ? W.call(z, N, x) : W, x == null) break e;
                N = F({}, N, x);
                break e;
              case 2:
                tr = !0;
            }
          }
          m.callback !== null && m.lane !== 0 && (e.flags |= 64, x = l.effects, x === null ? l.effects = [m] : x.push(m));
        } else z = { eventTime: z, lane: x, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, I === null ? (T = I = z, y = N) : I = I.next = z, f |= x;
        if (m = m.next, m === null) {
          if (m = l.shared.pending, m === null) break;
          x = m, m = x.next, x.next = null, l.lastBaseUpdate = x, l.shared.pending = null;
        }
      } while (!0);
      if (I === null && (y = N), l.baseState = y, l.firstBaseUpdate = T, l.lastBaseUpdate = I, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          f |= l.lane, l = l.next;
        while (l !== t);
      } else c === null && (l.shared.lanes = 0);
      kr |= f, e.lanes = f, e.memoizedState = N;
    }
  }
  function Nu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var o = e[t], l = o.callback;
      if (l !== null) {
        if (o.callback = null, o = n, typeof l != "function") throw Error(i(191, l));
        l.call(o);
      }
    }
  }
  var Mn = {}, Pt = Xt(Mn), Fn = Xt(Mn), Wn = Xt(Mn);
  function wr(e) {
    if (e === Mn) throw Error(i(174));
    return e;
  }
  function Fo(e, t) {
    switch (fe(Wn, t), fe(Fn, e), fe(Pt, Mn), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fs(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fs(t, e);
    }
    me(Pt), fe(Pt, t);
  }
  function Yr() {
    me(Pt), me(Fn), me(Wn);
  }
  function Lu(e) {
    wr(Wn.current);
    var t = wr(Pt.current), n = Fs(t, e.type);
    t !== n && (fe(Fn, e), fe(Pt, n));
  }
  function Wo(e) {
    Fn.current === e && (me(Pt), me(Fn));
  }
  var we = Xt(0);
  function Qi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Vo = [];
  function qo() {
    for (var e = 0; e < Vo.length; e++) Vo[e]._workInProgressVersionPrimary = null;
    Vo.length = 0;
  }
  var Yi = K.ReactCurrentDispatcher, Ho = K.ReactCurrentBatchConfig, _r = 0, _e = null, Pe = null, je = null, Xi = !1, Vn = !1, qn = 0, df = 0;
  function Me() {
    throw Error(i(321));
  }
  function Ko(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!mt(e[n], t[n])) return !1;
    return !0;
  }
  function Go(e, t, n, o, l, c) {
    if (_r = c, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yi.current = e === null || e.memoizedState === null ? gf : mf, e = n(o, l), Vn) {
      c = 0;
      do {
        if (Vn = !1, qn = 0, 25 <= c) throw Error(i(301));
        c += 1, je = Pe = null, t.updateQueue = null, Yi.current = vf, e = n(o, l);
      } while (Vn);
    }
    if (Yi.current = ts, t = Pe !== null && Pe.next !== null, _r = 0, je = Pe = _e = null, Xi = !1, t) throw Error(i(300));
    return e;
  }
  function Jo() {
    var e = qn !== 0;
    return qn = 0, e;
  }
  function xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? _e.memoizedState = je = e : je = je.next = e, je;
  }
  function dt() {
    if (Pe === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var t = je === null ? _e.memoizedState : je.next;
    if (t !== null) je = t, Pe = e;
    else {
      if (e === null) throw Error(i(310));
      Pe = e, e = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, je === null ? _e.memoizedState = je = e : je = je.next = e;
    }
    return je;
  }
  function Hn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qo(e) {
    var t = dt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var o = Pe, l = o.baseQueue, c = n.pending;
    if (c !== null) {
      if (l !== null) {
        var f = l.next;
        l.next = c.next, c.next = f;
      }
      o.baseQueue = l = c, n.pending = null;
    }
    if (l !== null) {
      c = l.next, o = o.baseState;
      var m = f = null, y = null, T = c;
      do {
        var I = T.lane;
        if ((_r & I) === I) y !== null && (y = y.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), o = T.hasEagerState ? T.eagerState : e(o, T.action);
        else {
          var N = {
            lane: I,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          };
          y === null ? (m = y = N, f = o) : y = y.next = N, _e.lanes |= I, kr |= I;
        }
        T = T.next;
      } while (T !== null && T !== c);
      y === null ? f = o : y.next = m, mt(o, t.memoizedState) || (Qe = !0), t.memoizedState = o, t.baseState = f, t.baseQueue = y, n.lastRenderedState = o;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        c = l.lane, _e.lanes |= c, kr |= c, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Yo(e) {
    var t = dt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch, l = n.pending, c = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = l = l.next;
      do
        c = e(c, f.action), f = f.next;
      while (f !== l);
      mt(c, t.memoizedState) || (Qe = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, o];
  }
  function $u() {
  }
  function Uu(e, t) {
    var n = _e, o = dt(), l = t(), c = !mt(o.memoizedState, l);
    if (c && (o.memoizedState = l, Qe = !0), o = o.queue, Xo(Bu.bind(null, n, o, e), [e]), o.getSnapshot !== t || c || je !== null && je.memoizedState.tag & 1) {
      if (n.flags |= 2048, Kn(9, zu.bind(null, n, o, l, t), void 0, null), Ne === null) throw Error(i(349));
      (_r & 30) !== 0 || Du(n, t, l);
    }
    return l;
  }
  function Du(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function zu(e, t, n, o) {
    t.value = n, t.getSnapshot = o, Mu(t) && Fu(e);
  }
  function Bu(e, t, n) {
    return n(function() {
      Mu(t) && Fu(e);
    });
  }
  function Mu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function Fu(e) {
    var t = Dt(e, 1);
    t !== null && kt(t, e, 1, -1);
  }
  function Wu(e) {
    var t = xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hn, lastRenderedState: e }, t.queue = e, e = e.dispatch = pf.bind(null, _e, e), [t.memoizedState, e];
  }
  function Kn(e, t, n, o) {
    return e = { tag: e, create: t, destroy: n, deps: o, next: null }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (o = n.next, n.next = e, e.next = o, t.lastEffect = e)), e;
  }
  function Vu() {
    return dt().memoizedState;
  }
  function Zi(e, t, n, o) {
    var l = xt();
    _e.flags |= e, l.memoizedState = Kn(1 | t, n, void 0, o === void 0 ? null : o);
  }
  function es(e, t, n, o) {
    var l = dt();
    o = o === void 0 ? null : o;
    var c = void 0;
    if (Pe !== null) {
      var f = Pe.memoizedState;
      if (c = f.destroy, o !== null && Ko(o, f.deps)) {
        l.memoizedState = Kn(t, n, c, o);
        return;
      }
    }
    _e.flags |= e, l.memoizedState = Kn(1 | t, n, c, o);
  }
  function qu(e, t) {
    return Zi(8390656, 8, e, t);
  }
  function Xo(e, t) {
    return es(2048, 8, e, t);
  }
  function Hu(e, t) {
    return es(4, 2, e, t);
  }
  function Ku(e, t) {
    return es(4, 4, e, t);
  }
  function Gu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ju(e, t, n) {
    return n = n != null ? n.concat([e]) : null, es(4, 4, Gu.bind(null, t, e), n);
  }
  function Zo() {
  }
  function Qu(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Ko(t, o[1]) ? o[0] : (n.memoizedState = [e, t], e);
  }
  function Yu(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Ko(t, o[1]) ? o[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Xu(e, t, n) {
    return (_r & 21) === 0 ? (e.baseState && (e.baseState = !1, Qe = !0), e.memoizedState = n) : (mt(n, t) || (n = Ol(), _e.lanes |= n, kr |= n, e.baseState = !0), t);
  }
  function hf(e, t) {
    var n = de;
    de = n !== 0 && 4 > n ? n : 4, e(!0);
    var o = Ho.transition;
    Ho.transition = {};
    try {
      e(!1), t();
    } finally {
      de = n, Ho.transition = o;
    }
  }
  function Zu() {
    return dt().memoizedState;
  }
  function ff(e, t, n) {
    var o = or(e);
    if (n = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null }, ec(e)) tc(t, n);
    else if (n = Au(e, t, n, o), n !== null) {
      var l = qe();
      kt(n, e, o, l), rc(n, t, o);
    }
  }
  function pf(e, t, n) {
    var o = or(e), l = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ec(e)) tc(t, l);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var f = t.lastRenderedState, m = c(f, n);
        if (l.hasEagerState = !0, l.eagerState = m, mt(m, f)) {
          var y = t.interleaved;
          y === null ? (l.next = l, Bo(t)) : (l.next = y.next, y.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Au(e, t, l, o), n !== null && (l = qe(), kt(n, e, o, l), rc(n, t, o));
    }
  }
  function ec(e) {
    var t = e.alternate;
    return e === _e || t !== null && t === _e;
  }
  function tc(e, t) {
    Vn = Xi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function rc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, eo(e, n);
    }
  }
  var ts = { readContext: ct, useCallback: Me, useContext: Me, useEffect: Me, useImperativeHandle: Me, useInsertionEffect: Me, useLayoutEffect: Me, useMemo: Me, useReducer: Me, useRef: Me, useState: Me, useDebugValue: Me, useDeferredValue: Me, useTransition: Me, useMutableSource: Me, useSyncExternalStore: Me, useId: Me, unstable_isNewReconciler: !1 }, gf = { readContext: ct, useCallback: function(e, t) {
    return xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ct, useEffect: qu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zi(
      4194308,
      4,
      Gu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Zi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Zi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var o = xt();
    return t = n !== void 0 ? n(t) : t, o.memoizedState = o.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, o.queue = e, e = e.dispatch = ff.bind(null, _e, e), [o.memoizedState, e];
  }, useRef: function(e) {
    var t = xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Wu, useDebugValue: Zo, useDeferredValue: function(e) {
    return xt().memoizedState = e;
  }, useTransition: function() {
    var e = Wu(!1), t = e[0];
    return e = hf.bind(null, e[1]), xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var o = _e, l = xt();
    if (ye) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Ne === null) throw Error(i(349));
      (_r & 30) !== 0 || Du(o, t, n);
    }
    l.memoizedState = n;
    var c = { value: n, getSnapshot: t };
    return l.queue = c, qu(Bu.bind(
      null,
      o,
      c,
      e
    ), [e]), o.flags |= 2048, Kn(9, zu.bind(null, o, c, n, t), void 0, null), n;
  }, useId: function() {
    var e = xt(), t = Ne.identifierPrefix;
    if (ye) {
      var n = Ut, o = $t;
      n = (o & ~(1 << 32 - gt(o) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = df++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, mf = {
    readContext: ct,
    useCallback: Qu,
    useContext: ct,
    useEffect: Xo,
    useImperativeHandle: Ju,
    useInsertionEffect: Hu,
    useLayoutEffect: Ku,
    useMemo: Yu,
    useReducer: Qo,
    useRef: Vu,
    useState: function() {
      return Qo(Hn);
    },
    useDebugValue: Zo,
    useDeferredValue: function(e) {
      var t = dt();
      return Xu(t, Pe.memoizedState, e);
    },
    useTransition: function() {
      var e = Qo(Hn)[0], t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: $u,
    useSyncExternalStore: Uu,
    useId: Zu,
    unstable_isNewReconciler: !1
  }, vf = { readContext: ct, useCallback: Qu, useContext: ct, useEffect: Xo, useImperativeHandle: Ju, useInsertionEffect: Hu, useLayoutEffect: Ku, useMemo: Yu, useReducer: Yo, useRef: Vu, useState: function() {
    return Yo(Hn);
  }, useDebugValue: Zo, useDeferredValue: function(e) {
    var t = dt();
    return Pe === null ? t.memoizedState = e : Xu(t, Pe.memoizedState, e);
  }, useTransition: function() {
    var e = Yo(Hn)[0], t = dt().memoizedState;
    return [e, t];
  }, useMutableSource: $u, useSyncExternalStore: Uu, useId: Zu, unstable_isNewReconciler: !1 };
  function yt(e, t) {
    if (e && e.defaultProps) {
      t = F({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ea(e, t, n, o) {
    t = e.memoizedState, n = n(o, t), n = n == null ? t : F({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var rs = { isMounted: function(e) {
    return (e = e._reactInternals) ? fr(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var o = qe(), l = or(e), c = zt(o, l);
    c.payload = t, n != null && (c.callback = n), t = rr(e, c, l), t !== null && (kt(t, e, l, o), Gi(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var o = qe(), l = or(e), c = zt(o, l);
    c.tag = 1, c.payload = t, n != null && (c.callback = n), t = rr(e, c, l), t !== null && (kt(t, e, l, o), Gi(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = qe(), o = or(e), l = zt(n, o);
    l.tag = 2, t != null && (l.callback = t), t = rr(e, l, o), t !== null && (kt(t, e, o, n), Gi(t, e, o));
  } };
  function nc(e, t, n, o, l, c, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, c, f) : t.prototype && t.prototype.isPureReactComponent ? !jn(n, o) || !jn(l, c) : !0;
  }
  function ic(e, t, n) {
    var o = !1, l = Zt, c = t.contextType;
    return typeof c == "object" && c !== null ? c = ct(c) : (l = Je(t) ? gr : Be.current, o = t.contextTypes, c = (o = o != null) ? Vr(e, l) : Zt), t = new t(n, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = rs, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = c), t;
  }
  function sc(e, t, n, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o), t.state !== e && rs.enqueueReplaceState(t, t.state, null);
  }
  function ta(e, t, n, o) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Mo(e);
    var c = t.contextType;
    typeof c == "object" && c !== null ? l.context = ct(c) : (c = Je(t) ? gr : Be.current, l.context = Vr(e, c)), l.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (ea(e, t, c, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && rs.enqueueReplaceState(l, l.state, null), Ji(e, n, l, o), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Xr(e, t) {
    try {
      var n = "", o = t;
      do
        n += oe(o), o = o.return;
      while (o);
      var l = n;
    } catch (c) {
      l = `
Error generating stack: ` + c.message + `
` + c.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ra(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function na(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var yf = typeof WeakMap == "function" ? WeakMap : Map;
  function oc(e, t, n) {
    n = zt(-1, n), n.tag = 3, n.payload = { element: null };
    var o = t.value;
    return n.callback = function() {
      us || (us = !0, ya = o), na(e, t);
    }, n;
  }
  function ac(e, t, n) {
    n = zt(-1, n), n.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var l = t.value;
      n.payload = function() {
        return o(l);
      }, n.callback = function() {
        na(e, t);
      };
    }
    var c = e.stateNode;
    return c !== null && typeof c.componentDidCatch == "function" && (n.callback = function() {
      na(e, t), typeof o != "function" && (ir === null ? ir = /* @__PURE__ */ new Set([this]) : ir.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function lc(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new yf();
      var l = /* @__PURE__ */ new Set();
      o.set(t, l);
    } else l = o.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), o.set(t, l));
    l.has(n) || (l.add(n), e = If.bind(null, e, t, n), t.then(e, e));
  }
  function uc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function cc(e, t, n, o, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, rr(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var wf = K.ReactCurrentOwner, Qe = !1;
  function Ve(e, t, n, o) {
    t.child = e === null ? xu(t, null, n, o) : Gr(t, e.child, n, o);
  }
  function dc(e, t, n, o, l) {
    n = n.render;
    var c = t.ref;
    return Qr(t, l), o = Go(e, t, n, o, c, l), n = Jo(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Bt(e, t, l)) : (ye && n && Ao(t), t.flags |= 1, Ve(e, t, o, l), t.child);
  }
  function hc(e, t, n, o, l) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !ba(c) && c.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = c, fc(e, t, c, o, l)) : (e = gs(n.type, null, o, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, (e.lanes & l) === 0) {
      var f = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : jn, n(f, o) && e.ref === t.ref) return Bt(e, t, l);
    }
    return t.flags |= 1, e = lr(c, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function fc(e, t, n, o, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (jn(c, o) && e.ref === t.ref) if (Qe = !1, t.pendingProps = o = c, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Qe = !0);
      else return t.lanes = e.lanes, Bt(e, t, l);
    }
    return ia(e, t, n, o, l);
  }
  function pc(e, t, n) {
    var o = t.pendingProps, l = o.children, c = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(en, st), st |= n;
    else {
      if ((n & 1073741824) === 0) return e = c !== null ? c.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(en, st), st |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = c !== null ? c.baseLanes : n, fe(en, st), st |= o;
    }
    else c !== null ? (o = c.baseLanes | n, t.memoizedState = null) : o = n, fe(en, st), st |= o;
    return Ve(e, t, l, n), t.child;
  }
  function gc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ia(e, t, n, o, l) {
    var c = Je(n) ? gr : Be.current;
    return c = Vr(t, c), Qr(t, l), n = Go(e, t, n, o, c, l), o = Jo(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Bt(e, t, l)) : (ye && o && Ao(t), t.flags |= 1, Ve(e, t, n, l), t.child);
  }
  function mc(e, t, n, o, l) {
    if (Je(n)) {
      var c = !0;
      Bi(t);
    } else c = !1;
    if (Qr(t, l), t.stateNode === null) is(e, t), ic(t, n, o), ta(t, n, o, l), o = !0;
    else if (e === null) {
      var f = t.stateNode, m = t.memoizedProps;
      f.props = m;
      var y = f.context, T = n.contextType;
      typeof T == "object" && T !== null ? T = ct(T) : (T = Je(n) ? gr : Be.current, T = Vr(t, T));
      var I = n.getDerivedStateFromProps, N = typeof I == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      N || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (m !== o || y !== T) && sc(t, f, o, T), tr = !1;
      var x = t.memoizedState;
      f.state = x, Ji(t, o, f, l), y = t.memoizedState, m !== o || x !== y || Ge.current || tr ? (typeof I == "function" && (ea(t, n, I, o), y = t.memoizedState), (m = tr || nc(t, n, m, o, x, y, T)) ? (N || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = y), f.props = o, f.state = y, f.context = T, o = m) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      f = t.stateNode, Iu(e, t), m = t.memoizedProps, T = t.type === t.elementType ? m : yt(t.type, m), f.props = T, N = t.pendingProps, x = f.context, y = n.contextType, typeof y == "object" && y !== null ? y = ct(y) : (y = Je(n) ? gr : Be.current, y = Vr(t, y));
      var z = n.getDerivedStateFromProps;
      (I = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (m !== N || x !== y) && sc(t, f, o, y), tr = !1, x = t.memoizedState, f.state = x, Ji(t, o, f, l);
      var W = t.memoizedState;
      m !== N || x !== W || Ge.current || tr ? (typeof z == "function" && (ea(t, n, z, o), W = t.memoizedState), (T = tr || nc(t, n, T, o, x, W, y) || !1) ? (I || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, W, y), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, W, y)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = W), f.props = o, f.state = W, f.context = y, o = T) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return sa(e, t, n, o, c, l);
  }
  function sa(e, t, n, o, l, c) {
    gc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!o && !f) return l && ku(t, n, !1), Bt(e, t, c);
    o = t.stateNode, wf.current = t;
    var m = f && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1, e !== null && f ? (t.child = Gr(t, e.child, null, c), t.child = Gr(t, null, m, c)) : Ve(e, t, m, c), t.memoizedState = o.state, l && ku(t, n, !0), t.child;
  }
  function vc(e) {
    var t = e.stateNode;
    t.pendingContext ? wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wu(e, t.context, !1), Fo(e, t.containerInfo);
  }
  function yc(e, t, n, o, l) {
    return Kr(), Lo(l), t.flags |= 256, Ve(e, t, n, o), t.child;
  }
  var oa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function aa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wc(e, t, n) {
    var o = t.pendingProps, l = we.current, c = !1, f = (t.flags & 128) !== 0, m;
    if ((m = f) || (m = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), m ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), fe(we, l & 1), e === null)
      return No(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = o.children, e = o.fallback, c ? (o = t.mode, c = t.child, f = { mode: "hidden", children: f }, (o & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = f) : c = ms(f, o, 0, null), e = br(e, o, n, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = aa(n), t.memoizedState = oa, e) : la(t, f));
    if (l = e.memoizedState, l !== null && (m = l.dehydrated, m !== null)) return _f(e, t, f, o, m, l, n);
    if (c) {
      c = o.fallback, f = t.mode, l = e.child, m = l.sibling;
      var y = { mode: "hidden", children: o.children };
      return (f & 1) === 0 && t.child !== l ? (o = t.child, o.childLanes = 0, o.pendingProps = y, t.deletions = null) : (o = lr(l, y), o.subtreeFlags = l.subtreeFlags & 14680064), m !== null ? c = lr(m, c) : (c = br(c, f, n, null), c.flags |= 2), c.return = t, o.return = t, o.sibling = c, t.child = o, o = c, c = t.child, f = e.child.memoizedState, f = f === null ? aa(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, c.memoizedState = f, c.childLanes = e.childLanes & ~n, t.memoizedState = oa, o;
    }
    return c = e.child, e = c.sibling, o = lr(c, { mode: "visible", children: o.children }), (t.mode & 1) === 0 && (o.lanes = n), o.return = t, o.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o;
  }
  function la(e, t) {
    return t = ms({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ns(e, t, n, o) {
    return o !== null && Lo(o), Gr(t, e.child, null, n), e = la(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function _f(e, t, n, o, l, c, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, o = ra(Error(i(422))), ns(e, t, f, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = o.fallback, l = t.mode, o = ms({ mode: "visible", children: o.children }, l, 0, null), c = br(c, l, f, null), c.flags |= 2, o.return = t, c.return = t, o.sibling = c, t.child = o, (t.mode & 1) !== 0 && Gr(t, e.child, null, f), t.child.memoizedState = aa(f), t.memoizedState = oa, c);
    if ((t.mode & 1) === 0) return ns(e, t, f, null);
    if (l.data === "$!") {
      if (o = l.nextSibling && l.nextSibling.dataset, o) var m = o.dgst;
      return o = m, c = Error(i(419)), o = ra(c, o, void 0), ns(e, t, f, o);
    }
    if (m = (f & e.childLanes) !== 0, Qe || m) {
      if (o = Ne, o !== null) {
        switch (f & -f) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (o.suspendedLanes | f)) !== 0 ? 0 : l, l !== 0 && l !== c.retryLane && (c.retryLane = l, Dt(e, l), kt(o, e, l, -1));
      }
      return Ta(), o = ra(Error(i(421))), ns(e, t, f, o);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jf.bind(null, e), l._reactRetry = t, null) : (e = c.treeContext, it = Yt(l.nextSibling), nt = t, ye = !0, vt = null, e !== null && (lt[ut++] = $t, lt[ut++] = Ut, lt[ut++] = mr, $t = e.id, Ut = e.overflow, mr = t), t = la(t, o.children), t.flags |= 4096, t);
  }
  function _c(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), zo(e.return, t, n);
  }
  function ua(e, t, n, o, l) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: n, tailMode: l } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = o, c.tail = n, c.tailMode = l);
  }
  function kc(e, t, n) {
    var o = t.pendingProps, l = o.revealOrder, c = o.tail;
    if (Ve(e, t, o.children, n), o = we.current, (o & 2) !== 0) o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _c(e, n, t);
        else if (e.tag === 19) _c(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      o &= 1;
    }
    if (fe(we, o), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Qi(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ua(t, !1, l, n, c);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Qi(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ua(t, !0, n, null, c);
        break;
      case "together":
        ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function is(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Bt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = lr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = lr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function kf(e, t, n) {
    switch (t.tag) {
      case 3:
        vc(t), Kr();
        break;
      case 5:
        Lu(t);
        break;
      case 1:
        Je(t.type) && Bi(t);
        break;
      case 4:
        Fo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context, l = t.memoizedProps.value;
        fe(Hi, o._currentValue), o._currentValue = l;
        break;
      case 13:
        if (o = t.memoizedState, o !== null)
          return o.dehydrated !== null ? (fe(we, we.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? wc(e, t, n) : (fe(we, we.current & 1), e = Bt(e, t, n), e !== null ? e.sibling : null);
        fe(we, we.current & 1);
        break;
      case 19:
        if (o = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (o) return kc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), fe(we, we.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, pc(e, t, n);
    }
    return Bt(e, t, n);
  }
  var Sc, ca, Ec, Tc;
  Sc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, ca = function() {
  }, Ec = function(e, t, n, o) {
    var l = e.memoizedProps;
    if (l !== o) {
      e = t.stateNode, wr(Pt.current);
      var c = null;
      switch (n) {
        case "input":
          l = Ds(e, l), o = Ds(e, o), c = [];
          break;
        case "select":
          l = F({}, l, { value: void 0 }), o = F({}, o, { value: void 0 }), c = [];
          break;
        case "textarea":
          l = Ms(e, l), o = Ms(e, o), c = [];
          break;
        default:
          typeof l.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Ui);
      }
      Ws(n, o);
      var f;
      n = null;
      for (T in l) if (!o.hasOwnProperty(T) && l.hasOwnProperty(T) && l[T] != null) if (T === "style") {
        var m = l[T];
        for (f in m) m.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (u.hasOwnProperty(T) ? c || (c = []) : (c = c || []).push(T, null));
      for (T in o) {
        var y = o[T];
        if (m = l?.[T], o.hasOwnProperty(T) && y !== m && (y != null || m != null)) if (T === "style") if (m) {
          for (f in m) !m.hasOwnProperty(f) || y && y.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in y) y.hasOwnProperty(f) && m[f] !== y[f] && (n || (n = {}), n[f] = y[f]);
        } else n || (c || (c = []), c.push(
          T,
          n
        )), n = y;
        else T === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, m = m ? m.__html : void 0, y != null && m !== y && (c = c || []).push(T, y)) : T === "children" ? typeof y != "string" && typeof y != "number" || (c = c || []).push(T, "" + y) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (u.hasOwnProperty(T) ? (y != null && T === "onScroll" && ge("scroll", e), c || m === y || (c = [])) : (c = c || []).push(T, y));
      }
      n && (c = c || []).push("style", n);
      var T = c;
      (t.updateQueue = T) && (t.flags |= 4);
    }
  }, Tc = function(e, t, n, o) {
    n !== o && (t.flags |= 4);
  };
  function Gn(e, t) {
    if (!ye) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var o = null; n !== null; ) n.alternate !== null && (o = n), n = n.sibling;
        o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
    }
  }
  function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, o = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, o |= l.subtreeFlags & 14680064, o |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, o |= l.subtreeFlags, o |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= o, e.childLanes = n, t;
  }
  function Sf(e, t, n) {
    var o = t.pendingProps;
    switch (Io(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Fe(t), null;
      case 1:
        return Je(t.type) && zi(), Fe(t), null;
      case 3:
        return o = t.stateNode, Yr(), me(Ge), me(Be), qo(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (Vi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vt !== null && (ka(vt), vt = null))), ca(e, t), Fe(t), null;
      case 5:
        Wo(t);
        var l = wr(Wn.current);
        if (n = t.type, e !== null && t.stateNode != null) Ec(e, t, n, o, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return Fe(t), null;
          }
          if (e = wr(Pt.current), Vi(t)) {
            o = t.stateNode, n = t.type;
            var c = t.memoizedProps;
            switch (o[Ot] = t, o[Dn] = c, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ge("cancel", o), ge("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", o);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) ge(Ln[l], o);
                break;
              case "source":
                ge("error", o);
                break;
              case "img":
              case "image":
              case "link":
                ge(
                  "error",
                  o
                ), ge("load", o);
                break;
              case "details":
                ge("toggle", o);
                break;
              case "input":
                il(o, c), ge("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!c.multiple }, ge("invalid", o);
                break;
              case "textarea":
                al(o, c), ge("invalid", o);
            }
            Ws(n, c), l = null;
            for (var f in c) if (c.hasOwnProperty(f)) {
              var m = c[f];
              f === "children" ? typeof m == "string" ? o.textContent !== m && (c.suppressHydrationWarning !== !0 && $i(o.textContent, m, e), l = ["children", m]) : typeof m == "number" && o.textContent !== "" + m && (c.suppressHydrationWarning !== !0 && $i(
                o.textContent,
                m,
                e
              ), l = ["children", "" + m]) : u.hasOwnProperty(f) && m != null && f === "onScroll" && ge("scroll", o);
            }
            switch (n) {
              case "input":
                fi(o), ol(o, c, !0);
                break;
              case "textarea":
                fi(o), ul(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (o.onclick = Ui);
            }
            o = l, t.updateQueue = o, o !== null && (t.flags |= 4);
          } else {
            f = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = cl(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = f.createElement(n, { is: o.is }) : (e = f.createElement(n), n === "select" && (f = e, o.multiple ? f.multiple = !0 : o.size && (f.size = o.size))) : e = f.createElementNS(e, n), e[Ot] = t, e[Dn] = o, Sc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = Vs(n, o), n) {
                case "dialog":
                  ge("cancel", e), ge("close", e), l = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ge("load", e), l = o;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Ln.length; l++) ge(Ln[l], e);
                  l = o;
                  break;
                case "source":
                  ge("error", e), l = o;
                  break;
                case "img":
                case "image":
                case "link":
                  ge(
                    "error",
                    e
                  ), ge("load", e), l = o;
                  break;
                case "details":
                  ge("toggle", e), l = o;
                  break;
                case "input":
                  il(e, o), l = Ds(e, o), ge("invalid", e);
                  break;
                case "option":
                  l = o;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!o.multiple }, l = F({}, o, { value: void 0 }), ge("invalid", e);
                  break;
                case "textarea":
                  al(e, o), l = Ms(e, o), ge("invalid", e);
                  break;
                default:
                  l = o;
              }
              Ws(n, l), m = l;
              for (c in m) if (m.hasOwnProperty(c)) {
                var y = m[c];
                c === "style" ? fl(e, y) : c === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && dl(e, y)) : c === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && mn(e, y) : typeof y == "number" && mn(e, "" + y) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (u.hasOwnProperty(c) ? y != null && c === "onScroll" && ge("scroll", e) : y != null && $(e, c, y, f));
              }
              switch (n) {
                case "input":
                  fi(e), ol(e, o, !1);
                  break;
                case "textarea":
                  fi(e), ul(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + ce(o.value));
                  break;
                case "select":
                  e.multiple = !!o.multiple, c = o.value, c != null ? Ir(e, !!o.multiple, c, !1) : o.defaultValue != null && Ir(
                    e,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ui);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Fe(t), null;
      case 6:
        if (e && t.stateNode != null) Tc(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(i(166));
          if (n = wr(Wn.current), wr(Pt.current), Vi(t)) {
            if (o = t.stateNode, n = t.memoizedProps, o[Ot] = t, (c = o.nodeValue !== n) && (e = nt, e !== null)) switch (e.tag) {
              case 3:
                $i(o.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && $i(o.nodeValue, n, (e.mode & 1) !== 0);
            }
            c && (t.flags |= 4);
          } else o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o), o[Ot] = t, t.stateNode = o;
        }
        return Fe(t), null;
      case 13:
        if (me(we), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ye && it !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ru(), Kr(), t.flags |= 98560, c = !1;
          else if (c = Vi(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(i(317));
              c[Ot] = t;
            } else Kr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Fe(t), c = !1;
          } else vt !== null && (ka(vt), vt = null), c = !0;
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (we.current & 1) !== 0 ? xe === 0 && (xe = 3) : Ta())), t.updateQueue !== null && (t.flags |= 4), Fe(t), null);
      case 4:
        return Yr(), ca(e, t), e === null && $n(t.stateNode.containerInfo), Fe(t), null;
      case 10:
        return Do(t.type._context), Fe(t), null;
      case 17:
        return Je(t.type) && zi(), Fe(t), null;
      case 19:
        if (me(we), c = t.memoizedState, c === null) return Fe(t), null;
        if (o = (t.flags & 128) !== 0, f = c.rendering, f === null) if (o) Gn(c, !1);
        else {
          if (xe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Qi(e), f !== null) {
              for (t.flags |= 128, Gn(c, !1), o = f.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = n, n = t.child; n !== null; ) c = n, e = o, c.flags &= 14680066, f = c.alternate, f === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = f.childLanes, c.lanes = f.lanes, c.child = f.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = f.memoizedProps, c.memoizedState = f.memoizedState, c.updateQueue = f.updateQueue, c.type = f.type, e = f.dependencies, c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return fe(we, we.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          c.tail !== null && be() > tn && (t.flags |= 128, o = !0, Gn(c, !1), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = Qi(f), e !== null) {
            if (t.flags |= 128, o = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Gn(c, !0), c.tail === null && c.tailMode === "hidden" && !f.alternate && !ye) return Fe(t), null;
          } else 2 * be() - c.renderingStartTime > tn && n !== 1073741824 && (t.flags |= 128, o = !0, Gn(c, !1), t.lanes = 4194304);
          c.isBackwards ? (f.sibling = t.child, t.child = f) : (n = c.last, n !== null ? n.sibling = f : t.child = f, c.last = f);
        }
        return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = be(), t.sibling = null, n = we.current, fe(we, o ? n & 1 | 2 : n & 1), t) : (Fe(t), null);
      case 22:
      case 23:
        return Ea(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && (t.mode & 1) !== 0 ? (st & 1073741824) !== 0 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Ef(e, t) {
    switch (Io(t), t.tag) {
      case 1:
        return Je(t.type) && zi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yr(), me(Ge), me(Be), qo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Wo(t), null;
      case 13:
        if (me(we), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          Kr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return me(we), null;
      case 4:
        return Yr(), null;
      case 10:
        return Do(t.type._context), null;
      case 22:
      case 23:
        return Ea(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ss = !1, We = !1, Tf = typeof WeakSet == "function" ? WeakSet : Set, M = null;
  function Zr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (o) {
      Se(e, t, o);
    }
    else n.current = null;
  }
  function da(e, t, n) {
    try {
      n();
    } catch (o) {
      Se(e, t, o);
    }
  }
  var bc = !1;
  function bf(e, t) {
    if (Eo = bi, e = nu(), go(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var l = o.anchorOffset, c = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, c.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, m = -1, y = -1, T = 0, I = 0, N = e, x = null;
          t: for (; ; ) {
            for (var z; N !== n || l !== 0 && N.nodeType !== 3 || (m = f + l), N !== c || o !== 0 && N.nodeType !== 3 || (y = f + o), N.nodeType === 3 && (f += N.nodeValue.length), (z = N.firstChild) !== null; )
              x = N, N = z;
            for (; ; ) {
              if (N === e) break t;
              if (x === n && ++T === l && (m = f), x === c && ++I === o && (y = f), (z = N.nextSibling) !== null) break;
              N = x, x = N.parentNode;
            }
            N = z;
          }
          n = m === -1 || y === -1 ? null : { start: m, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (To = { focusedElem: e, selectionRange: n }, bi = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
    else for (; M !== null; ) {
      t = M;
      try {
        var W = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (W !== null) {
              var V = W.memoizedProps, Ce = W.memoizedState, S = t.stateNode, _ = S.getSnapshotBeforeUpdate(t.elementType === t.type ? V : yt(t.type, V), Ce);
              S.__reactInternalSnapshotBeforeUpdate = _;
            }
            break;
          case 3:
            var E = t.stateNode.containerInfo;
            E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (L) {
        Se(t, t.return, L);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, M = e;
        break;
      }
      M = t.return;
    }
    return W = bc, bc = !1, W;
  }
  function Jn(e, t, n) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var l = o = o.next;
      do {
        if ((l.tag & e) === e) {
          var c = l.destroy;
          l.destroy = void 0, c !== void 0 && da(t, n, c);
        }
        l = l.next;
      } while (l !== o);
    }
  }
  function os(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var o = n.create;
          n.destroy = o();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ha(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Cc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Cc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ot], delete t[Dn], delete t[Oo], delete t[af], delete t[lf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Rc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Oc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fa(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ui));
    else if (o !== 4 && (e = e.child, e !== null)) for (fa(e, t, n), e = e.sibling; e !== null; ) fa(e, t, n), e = e.sibling;
  }
  function pa(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && (e = e.child, e !== null)) for (pa(e, t, n), e = e.sibling; e !== null; ) pa(e, t, n), e = e.sibling;
  }
  var $e = null, wt = !1;
  function nr(e, t, n) {
    for (n = n.child; n !== null; ) Pc(e, t, n), n = n.sibling;
  }
  function Pc(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function") try {
      Rt.onCommitFiberUnmount(wi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        We || Zr(n, t);
      case 6:
        var o = $e, l = wt;
        $e = null, nr(e, t, n), $e = o, wt = l, $e !== null && (wt ? (e = $e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : $e.removeChild(n.stateNode));
        break;
      case 18:
        $e !== null && (wt ? (e = $e, n = n.stateNode, e.nodeType === 8 ? Ro(e.parentNode, n) : e.nodeType === 1 && Ro(e, n), Rn(e)) : Ro($e, n.stateNode));
        break;
      case 4:
        o = $e, l = wt, $e = n.stateNode.containerInfo, wt = !0, nr(e, t, n), $e = o, wt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!We && (o = n.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          l = o = o.next;
          do {
            var c = l, f = c.destroy;
            c = c.tag, f !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && da(n, t, f), l = l.next;
          } while (l !== o);
        }
        nr(e, t, n);
        break;
      case 1:
        if (!We && (Zr(n, t), o = n.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = n.memoizedProps, o.state = n.memoizedState, o.componentWillUnmount();
        } catch (m) {
          Se(n, t, m);
        }
        nr(e, t, n);
        break;
      case 21:
        nr(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (We = (o = We) || n.memoizedState !== null, nr(e, t, n), We = o) : nr(e, t, n);
        break;
      default:
        nr(e, t, n);
    }
  }
  function xc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Tf()), t.forEach(function(o) {
        var l = Nf.bind(null, e, o);
        n.has(o) || (n.add(o), o.then(l, l));
      });
    }
  }
  function _t(e, t) {
    var n = t.deletions;
    if (n !== null) for (var o = 0; o < n.length; o++) {
      var l = n[o];
      try {
        var c = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 5:
              $e = m.stateNode, wt = !1;
              break e;
            case 3:
              $e = m.stateNode.containerInfo, wt = !0;
              break e;
            case 4:
              $e = m.stateNode.containerInfo, wt = !0;
              break e;
          }
          m = m.return;
        }
        if ($e === null) throw Error(i(160));
        Pc(c, f, l), $e = null, wt = !1;
        var y = l.alternate;
        y !== null && (y.return = null), l.return = null;
      } catch (T) {
        Se(l, t, T);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ac(t, e), t = t.sibling;
  }
  function Ac(e, t) {
    var n = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (_t(t, e), At(e), o & 4) {
          try {
            Jn(3, e, e.return), os(3, e);
          } catch (V) {
            Se(e, e.return, V);
          }
          try {
            Jn(5, e, e.return);
          } catch (V) {
            Se(e, e.return, V);
          }
        }
        break;
      case 1:
        _t(t, e), At(e), o & 512 && n !== null && Zr(n, n.return);
        break;
      case 5:
        if (_t(t, e), At(e), o & 512 && n !== null && Zr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            mn(l, "");
          } catch (V) {
            Se(e, e.return, V);
          }
        }
        if (o & 4 && (l = e.stateNode, l != null)) {
          var c = e.memoizedProps, f = n !== null ? n.memoizedProps : c, m = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            m === "input" && c.type === "radio" && c.name != null && sl(l, c), Vs(m, f);
            var T = Vs(m, c);
            for (f = 0; f < y.length; f += 2) {
              var I = y[f], N = y[f + 1];
              I === "style" ? fl(l, N) : I === "dangerouslySetInnerHTML" ? dl(l, N) : I === "children" ? mn(l, N) : $(l, I, N, T);
            }
            switch (m) {
              case "input":
                zs(l, c);
                break;
              case "textarea":
                ll(l, c);
                break;
              case "select":
                var x = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!c.multiple;
                var z = c.value;
                z != null ? Ir(l, !!c.multiple, z, !1) : x !== !!c.multiple && (c.defaultValue != null ? Ir(
                  l,
                  !!c.multiple,
                  c.defaultValue,
                  !0
                ) : Ir(l, !!c.multiple, c.multiple ? [] : "", !1));
            }
            l[Dn] = c;
          } catch (V) {
            Se(e, e.return, V);
          }
        }
        break;
      case 6:
        if (_t(t, e), At(e), o & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.stateNode, c = e.memoizedProps;
          try {
            l.nodeValue = c;
          } catch (V) {
            Se(e, e.return, V);
          }
        }
        break;
      case 3:
        if (_t(t, e), At(e), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Rn(t.containerInfo);
        } catch (V) {
          Se(e, e.return, V);
        }
        break;
      case 4:
        _t(t, e), At(e);
        break;
      case 13:
        _t(t, e), At(e), l = e.child, l.flags & 8192 && (c = l.memoizedState !== null, l.stateNode.isHidden = c, !c || l.alternate !== null && l.alternate.memoizedState !== null || (va = be())), o & 4 && xc(e);
        break;
      case 22:
        if (I = n !== null && n.memoizedState !== null, e.mode & 1 ? (We = (T = We) || I, _t(t, e), We = T) : _t(t, e), At(e), o & 8192) {
          if (T = e.memoizedState !== null, (e.stateNode.isHidden = T) && !I && (e.mode & 1) !== 0) for (M = e, I = e.child; I !== null; ) {
            for (N = M = I; M !== null; ) {
              switch (x = M, z = x.child, x.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jn(4, x, x.return);
                  break;
                case 1:
                  Zr(x, x.return);
                  var W = x.stateNode;
                  if (typeof W.componentWillUnmount == "function") {
                    o = x, n = x.return;
                    try {
                      t = o, W.props = t.memoizedProps, W.state = t.memoizedState, W.componentWillUnmount();
                    } catch (V) {
                      Se(o, n, V);
                    }
                  }
                  break;
                case 5:
                  Zr(x, x.return);
                  break;
                case 22:
                  if (x.memoizedState !== null) {
                    Nc(N);
                    continue;
                  }
              }
              z !== null ? (z.return = x, M = z) : Nc(N);
            }
            I = I.sibling;
          }
          e: for (I = null, N = e; ; ) {
            if (N.tag === 5) {
              if (I === null) {
                I = N;
                try {
                  l = N.stateNode, T ? (c = l.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (m = N.stateNode, y = N.memoizedProps.style, f = y != null && y.hasOwnProperty("display") ? y.display : null, m.style.display = hl("display", f));
                } catch (V) {
                  Se(e, e.return, V);
                }
              }
            } else if (N.tag === 6) {
              if (I === null) try {
                N.stateNode.nodeValue = T ? "" : N.memoizedProps;
              } catch (V) {
                Se(e, e.return, V);
              }
            } else if ((N.tag !== 22 && N.tag !== 23 || N.memoizedState === null || N === e) && N.child !== null) {
              N.child.return = N, N = N.child;
              continue;
            }
            if (N === e) break e;
            for (; N.sibling === null; ) {
              if (N.return === null || N.return === e) break e;
              I === N && (I = null), N = N.return;
            }
            I === N && (I = null), N.sibling.return = N.return, N = N.sibling;
          }
        }
        break;
      case 19:
        _t(t, e), At(e), o & 4 && xc(e);
        break;
      case 21:
        break;
      default:
        _t(
          t,
          e
        ), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Rc(n)) {
              var o = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (o.tag) {
          case 5:
            var l = o.stateNode;
            o.flags & 32 && (mn(l, ""), o.flags &= -33);
            var c = Oc(e);
            pa(e, c, l);
            break;
          case 3:
          case 4:
            var f = o.stateNode.containerInfo, m = Oc(e);
            fa(e, m, f);
            break;
          default:
            throw Error(i(161));
        }
      } catch (y) {
        Se(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Cf(e, t, n) {
    M = e, Ic(e);
  }
  function Ic(e, t, n) {
    for (var o = (e.mode & 1) !== 0; M !== null; ) {
      var l = M, c = l.child;
      if (l.tag === 22 && o) {
        var f = l.memoizedState !== null || ss;
        if (!f) {
          var m = l.alternate, y = m !== null && m.memoizedState !== null || We;
          m = ss;
          var T = We;
          if (ss = f, (We = y) && !T) for (M = l; M !== null; ) f = M, y = f.child, f.tag === 22 && f.memoizedState !== null ? Lc(l) : y !== null ? (y.return = f, M = y) : Lc(l);
          for (; c !== null; ) M = c, Ic(c), c = c.sibling;
          M = l, ss = m, We = T;
        }
        jc(e);
      } else (l.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = l, M = c) : jc(e);
    }
  }
  function jc(e) {
    for (; M !== null; ) {
      var t = M;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || os(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !We) if (n === null) o.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
                o.componentDidUpdate(l, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var c = t.updateQueue;
              c !== null && Nu(t, c, o);
              break;
            case 3:
              var f = t.updateQueue;
              if (f !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Nu(t, f, n);
              }
              break;
            case 5:
              var m = t.stateNode;
              if (n === null && t.flags & 4) {
                n = m;
                var y = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    y.autoFocus && n.focus();
                    break;
                  case "img":
                    y.src && (n.src = y.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var T = t.alternate;
                if (T !== null) {
                  var I = T.memoizedState;
                  if (I !== null) {
                    var N = I.dehydrated;
                    N !== null && Rn(N);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(i(163));
          }
          We || t.flags & 512 && ha(t);
        } catch (x) {
          Se(t, t.return, x);
        }
      }
      if (t === e) {
        M = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, M = n;
        break;
      }
      M = t.return;
    }
  }
  function Nc(e) {
    for (; M !== null; ) {
      var t = M;
      if (t === e) {
        M = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, M = n;
        break;
      }
      M = t.return;
    }
  }
  function Lc(e) {
    for (; M !== null; ) {
      var t = M;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              os(4, t);
            } catch (y) {
              Se(t, n, y);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var l = t.return;
              try {
                o.componentDidMount();
              } catch (y) {
                Se(t, l, y);
              }
            }
            var c = t.return;
            try {
              ha(t);
            } catch (y) {
              Se(t, c, y);
            }
            break;
          case 5:
            var f = t.return;
            try {
              ha(t);
            } catch (y) {
              Se(t, f, y);
            }
        }
      } catch (y) {
        Se(t, t.return, y);
      }
      if (t === e) {
        M = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        m.return = t.return, M = m;
        break;
      }
      M = t.return;
    }
  }
  var Rf = Math.ceil, as = K.ReactCurrentDispatcher, ga = K.ReactCurrentOwner, ht = K.ReactCurrentBatchConfig, se = 0, Ne = null, Re = null, Ue = 0, st = 0, en = Xt(0), xe = 0, Qn = null, kr = 0, ls = 0, ma = 0, Yn = null, Ye = null, va = 0, tn = 1 / 0, Mt = null, us = !1, ya = null, ir = null, cs = !1, sr = null, ds = 0, Xn = 0, wa = null, hs = -1, fs = 0;
  function qe() {
    return (se & 6) !== 0 ? be() : hs !== -1 ? hs : hs = be();
  }
  function or(e) {
    return (e.mode & 1) === 0 ? 1 : (se & 2) !== 0 && Ue !== 0 ? Ue & -Ue : cf.transition !== null ? (fs === 0 && (fs = Ol()), fs) : (e = de, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ul(e.type)), e);
  }
  function kt(e, t, n, o) {
    if (50 < Xn) throw Xn = 0, wa = null, Error(i(185));
    Sn(e, n, o), ((se & 2) === 0 || e !== Ne) && (e === Ne && ((se & 2) === 0 && (ls |= n), xe === 4 && ar(e, Ue)), Xe(e, o), n === 1 && se === 0 && (t.mode & 1) === 0 && (tn = be() + 500, Mi && er()));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    uh(e, t);
    var o = Si(e, e === Ne ? Ue : 0);
    if (o === 0) n !== null && bl(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = o & -o, e.callbackPriority !== t) {
      if (n != null && bl(n), t === 1) e.tag === 0 ? uf(Uc.bind(null, e)) : Su(Uc.bind(null, e)), sf(function() {
        (se & 6) === 0 && er();
      }), n = null;
      else {
        switch (Pl(o)) {
          case 1:
            n = Ys;
            break;
          case 4:
            n = Cl;
            break;
          case 16:
            n = yi;
            break;
          case 536870912:
            n = Rl;
            break;
          default:
            n = yi;
        }
        n = qc(n, $c.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function $c(e, t) {
    if (hs = -1, fs = 0, (se & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (rn() && e.callbackNode !== n) return null;
    var o = Si(e, e === Ne ? Ue : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = ps(e, o);
    else {
      t = o;
      var l = se;
      se |= 2;
      var c = zc();
      (Ne !== e || Ue !== t) && (Mt = null, tn = be() + 500, Er(e, t));
      do
        try {
          xf();
          break;
        } catch (m) {
          Dc(e, m);
        }
      while (!0);
      Uo(), as.current = c, se = l, Re !== null ? t = 0 : (Ne = null, Ue = 0, t = xe);
    }
    if (t !== 0) {
      if (t === 2 && (l = Xs(e), l !== 0 && (o = l, t = _a(e, l))), t === 1) throw n = Qn, Er(e, 0), ar(e, o), Xe(e, be()), n;
      if (t === 6) ar(e, o);
      else {
        if (l = e.current.alternate, (o & 30) === 0 && !Of(l) && (t = ps(e, o), t === 2 && (c = Xs(e), c !== 0 && (o = c, t = _a(e, c))), t === 1)) throw n = Qn, Er(e, 0), ar(e, o), Xe(e, be()), n;
        switch (e.finishedWork = l, e.finishedLanes = o, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Tr(e, Ye, Mt);
            break;
          case 3:
            if (ar(e, o), (o & 130023424) === o && (t = va + 500 - be(), 10 < t)) {
              if (Si(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & o) !== o) {
                qe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Co(Tr.bind(null, e, Ye, Mt), t);
              break;
            }
            Tr(e, Ye, Mt);
            break;
          case 4:
            if (ar(e, o), (o & 4194240) === o) break;
            for (t = e.eventTimes, l = -1; 0 < o; ) {
              var f = 31 - gt(o);
              c = 1 << f, f = t[f], f > l && (l = f), o &= ~c;
            }
            if (o = l, o = be() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Rf(o / 1960)) - o, 10 < o) {
              e.timeoutHandle = Co(Tr.bind(null, e, Ye, Mt), o);
              break;
            }
            Tr(e, Ye, Mt);
            break;
          case 5:
            Tr(e, Ye, Mt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Xe(e, be()), e.callbackNode === n ? $c.bind(null, e) : null;
  }
  function _a(e, t) {
    var n = Yn;
    return e.current.memoizedState.isDehydrated && (Er(e, t).flags |= 256), e = ps(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && ka(t)), e;
  }
  function ka(e) {
    Ye === null ? Ye = e : Ye.push.apply(Ye, e);
  }
  function Of(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var o = 0; o < n.length; o++) {
          var l = n[o], c = l.getSnapshot;
          l = l.value;
          try {
            if (!mt(c(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ar(e, t) {
    for (t &= ~ma, t &= ~ls, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - gt(t), o = 1 << n;
      e[n] = -1, t &= ~o;
    }
  }
  function Uc(e) {
    if ((se & 6) !== 0) throw Error(i(327));
    rn();
    var t = Si(e, 0);
    if ((t & 1) === 0) return Xe(e, be()), null;
    var n = ps(e, t);
    if (e.tag !== 0 && n === 2) {
      var o = Xs(e);
      o !== 0 && (t = o, n = _a(e, o));
    }
    if (n === 1) throw n = Qn, Er(e, 0), ar(e, t), Xe(e, be()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tr(e, Ye, Mt), Xe(e, be()), null;
  }
  function Sa(e, t) {
    var n = se;
    se |= 1;
    try {
      return e(t);
    } finally {
      se = n, se === 0 && (tn = be() + 500, Mi && er());
    }
  }
  function Sr(e) {
    sr !== null && sr.tag === 0 && (se & 6) === 0 && rn();
    var t = se;
    se |= 1;
    var n = ht.transition, o = de;
    try {
      if (ht.transition = null, de = 1, e) return e();
    } finally {
      de = o, ht.transition = n, se = t, (se & 6) === 0 && er();
    }
  }
  function Ea() {
    st = en.current, me(en);
  }
  function Er(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, nf(n)), Re !== null) for (n = Re.return; n !== null; ) {
      var o = n;
      switch (Io(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && zi();
          break;
        case 3:
          Yr(), me(Ge), me(Be), qo();
          break;
        case 5:
          Wo(o);
          break;
        case 4:
          Yr();
          break;
        case 13:
          me(we);
          break;
        case 19:
          me(we);
          break;
        case 10:
          Do(o.type._context);
          break;
        case 22:
        case 23:
          Ea();
      }
      n = n.return;
    }
    if (Ne = e, Re = e = lr(e.current, null), Ue = st = t, xe = 0, Qn = null, ma = ls = kr = 0, Ye = Yn = null, yr !== null) {
      for (t = 0; t < yr.length; t++) if (n = yr[t], o = n.interleaved, o !== null) {
        n.interleaved = null;
        var l = o.next, c = n.pending;
        if (c !== null) {
          var f = c.next;
          c.next = l, o.next = f;
        }
        n.pending = o;
      }
      yr = null;
    }
    return e;
  }
  function Dc(e, t) {
    do {
      var n = Re;
      try {
        if (Uo(), Yi.current = ts, Xi) {
          for (var o = _e.memoizedState; o !== null; ) {
            var l = o.queue;
            l !== null && (l.pending = null), o = o.next;
          }
          Xi = !1;
        }
        if (_r = 0, je = Pe = _e = null, Vn = !1, qn = 0, ga.current = null, n === null || n.return === null) {
          xe = 1, Qn = t, Re = null;
          break;
        }
        e: {
          var c = e, f = n.return, m = n, y = t;
          if (t = Ue, m.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var T = y, I = m, N = I.tag;
            if ((I.mode & 1) === 0 && (N === 0 || N === 11 || N === 15)) {
              var x = I.alternate;
              x ? (I.updateQueue = x.updateQueue, I.memoizedState = x.memoizedState, I.lanes = x.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var z = uc(f);
            if (z !== null) {
              z.flags &= -257, cc(z, f, m, c, t), z.mode & 1 && lc(c, T, t), t = z, y = T;
              var W = t.updateQueue;
              if (W === null) {
                var V = /* @__PURE__ */ new Set();
                V.add(y), t.updateQueue = V;
              } else W.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                lc(c, T, t), Ta();
                break e;
              }
              y = Error(i(426));
            }
          } else if (ye && m.mode & 1) {
            var Ce = uc(f);
            if (Ce !== null) {
              (Ce.flags & 65536) === 0 && (Ce.flags |= 256), cc(Ce, f, m, c, t), Lo(Xr(y, m));
              break e;
            }
          }
          c = y = Xr(y, m), xe !== 4 && (xe = 2), Yn === null ? Yn = [c] : Yn.push(c), c = f;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536, t &= -t, c.lanes |= t;
                var S = oc(c, y, t);
                ju(c, S);
                break e;
              case 1:
                m = y;
                var _ = c.type, E = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (ir === null || !ir.has(E)))) {
                  c.flags |= 65536, t &= -t, c.lanes |= t;
                  var L = ac(c, m, t);
                  ju(c, L);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Mc(n);
      } catch (q) {
        t = q, Re === n && n !== null && (Re = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function zc() {
    var e = as.current;
    return as.current = ts, e === null ? ts : e;
  }
  function Ta() {
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Ne === null || (kr & 268435455) === 0 && (ls & 268435455) === 0 || ar(Ne, Ue);
  }
  function ps(e, t) {
    var n = se;
    se |= 2;
    var o = zc();
    (Ne !== e || Ue !== t) && (Mt = null, Er(e, t));
    do
      try {
        Pf();
        break;
      } catch (l) {
        Dc(e, l);
      }
    while (!0);
    if (Uo(), se = n, as.current = o, Re !== null) throw Error(i(261));
    return Ne = null, Ue = 0, xe;
  }
  function Pf() {
    for (; Re !== null; ) Bc(Re);
  }
  function xf() {
    for (; Re !== null && !eh(); ) Bc(Re);
  }
  function Bc(e) {
    var t = Vc(e.alternate, e, st);
    e.memoizedProps = e.pendingProps, t === null ? Mc(e) : Re = t, ga.current = null;
  }
  function Mc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Sf(n, t, st), n !== null) {
          Re = n;
          return;
        }
      } else {
        if (n = Ef(n, t), n !== null) {
          n.flags &= 32767, Re = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          xe = 6, Re = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Re = t;
        return;
      }
      Re = t = e;
    } while (t !== null);
    xe === 0 && (xe = 5);
  }
  function Tr(e, t, n) {
    var o = de, l = ht.transition;
    try {
      ht.transition = null, de = 1, Af(e, t, n, o);
    } finally {
      ht.transition = l, de = o;
    }
    return null;
  }
  function Af(e, t, n, o) {
    do
      rn();
    while (sr !== null);
    if ((se & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var c = n.lanes | n.childLanes;
    if (ch(e, c), e === Ne && (Re = Ne = null, Ue = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || cs || (cs = !0, qc(yi, function() {
      return rn(), null;
    })), c = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || c) {
      c = ht.transition, ht.transition = null;
      var f = de;
      de = 1;
      var m = se;
      se |= 4, ga.current = null, bf(e, n), Ac(n, e), Qh(To), bi = !!Eo, To = Eo = null, e.current = n, Cf(n), th(), se = m, de = f, ht.transition = c;
    } else e.current = n;
    if (cs && (cs = !1, sr = e, ds = l), c = e.pendingLanes, c === 0 && (ir = null), ih(n.stateNode), Xe(e, be()), t !== null) for (o = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], o(l.value, { componentStack: l.stack, digest: l.digest });
    if (us) throw us = !1, e = ya, ya = null, e;
    return (ds & 1) !== 0 && e.tag !== 0 && rn(), c = e.pendingLanes, (c & 1) !== 0 ? e === wa ? Xn++ : (Xn = 0, wa = e) : Xn = 0, er(), null;
  }
  function rn() {
    if (sr !== null) {
      var e = Pl(ds), t = ht.transition, n = de;
      try {
        if (ht.transition = null, de = 16 > e ? 16 : e, sr === null) var o = !1;
        else {
          if (e = sr, sr = null, ds = 0, (se & 6) !== 0) throw Error(i(331));
          var l = se;
          for (se |= 4, M = e.current; M !== null; ) {
            var c = M, f = c.child;
            if ((M.flags & 16) !== 0) {
              var m = c.deletions;
              if (m !== null) {
                for (var y = 0; y < m.length; y++) {
                  var T = m[y];
                  for (M = T; M !== null; ) {
                    var I = M;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jn(8, I, c);
                    }
                    var N = I.child;
                    if (N !== null) N.return = I, M = N;
                    else for (; M !== null; ) {
                      I = M;
                      var x = I.sibling, z = I.return;
                      if (Cc(I), I === T) {
                        M = null;
                        break;
                      }
                      if (x !== null) {
                        x.return = z, M = x;
                        break;
                      }
                      M = z;
                    }
                  }
                }
                var W = c.alternate;
                if (W !== null) {
                  var V = W.child;
                  if (V !== null) {
                    W.child = null;
                    do {
                      var Ce = V.sibling;
                      V.sibling = null, V = Ce;
                    } while (V !== null);
                  }
                }
                M = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && f !== null) f.return = c, M = f;
            else e: for (; M !== null; ) {
              if (c = M, (c.flags & 2048) !== 0) switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Jn(9, c, c.return);
              }
              var S = c.sibling;
              if (S !== null) {
                S.return = c.return, M = S;
                break e;
              }
              M = c.return;
            }
          }
          var _ = e.current;
          for (M = _; M !== null; ) {
            f = M;
            var E = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && E !== null) E.return = f, M = E;
            else e: for (f = _; M !== null; ) {
              if (m = M, (m.flags & 2048) !== 0) try {
                switch (m.tag) {
                  case 0:
                  case 11:
                  case 15:
                    os(9, m);
                }
              } catch (q) {
                Se(m, m.return, q);
              }
              if (m === f) {
                M = null;
                break e;
              }
              var L = m.sibling;
              if (L !== null) {
                L.return = m.return, M = L;
                break e;
              }
              M = m.return;
            }
          }
          if (se = l, er(), Rt && typeof Rt.onPostCommitFiberRoot == "function") try {
            Rt.onPostCommitFiberRoot(wi, e);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        de = n, ht.transition = t;
      }
    }
    return !1;
  }
  function Fc(e, t, n) {
    t = Xr(n, t), t = oc(e, t, 1), e = rr(e, t, 1), t = qe(), e !== null && (Sn(e, 1, t), Xe(e, t));
  }
  function Se(e, t, n) {
    if (e.tag === 3) Fc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Fc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ir === null || !ir.has(o))) {
          e = Xr(n, e), e = ac(t, e, 1), t = rr(t, e, 1), e = qe(), t !== null && (Sn(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function If(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t), t = qe(), e.pingedLanes |= e.suspendedLanes & n, Ne === e && (Ue & n) === n && (xe === 4 || xe === 3 && (Ue & 130023424) === Ue && 500 > be() - va ? Er(e, 0) : ma |= n), Xe(e, t);
  }
  function Wc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ki, ki <<= 1, (ki & 130023424) === 0 && (ki = 4194304)));
    var n = qe();
    e = Dt(e, t), e !== null && (Sn(e, t, n), Xe(e, n));
  }
  function jf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Wc(e, n);
  }
  function Nf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), Wc(e, n);
  }
  var Vc;
  Vc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ge.current) Qe = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Qe = !1, kf(e, t, n);
      Qe = (e.flags & 131072) !== 0;
    }
    else Qe = !1, ye && (t.flags & 1048576) !== 0 && Eu(t, Wi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var o = t.type;
        is(e, t), e = t.pendingProps;
        var l = Vr(t, Be.current);
        Qr(t, n), l = Go(null, t, o, e, l, n);
        var c = Jo();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(o) ? (c = !0, Bi(t)) : c = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Mo(t), l.updater = rs, t.stateNode = l, l._reactInternals = t, ta(t, o, e, n), t = sa(null, t, o, !0, c, n)) : (t.tag = 0, ye && c && Ao(t), Ve(null, t, l, n), t = t.child), t;
      case 16:
        o = t.elementType;
        e: {
          switch (is(e, t), e = t.pendingProps, l = o._init, o = l(o._payload), t.type = o, l = t.tag = $f(o), e = yt(o, e), l) {
            case 0:
              t = ia(null, t, o, e, n);
              break e;
            case 1:
              t = mc(null, t, o, e, n);
              break e;
            case 11:
              t = dc(null, t, o, e, n);
              break e;
            case 14:
              t = hc(null, t, o, yt(o.type, e), n);
              break e;
          }
          throw Error(i(
            306,
            o,
            ""
          ));
        }
        return t;
      case 0:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : yt(o, l), ia(e, t, o, l, n);
      case 1:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : yt(o, l), mc(e, t, o, l, n);
      case 3:
        e: {
          if (vc(t), e === null) throw Error(i(387));
          o = t.pendingProps, c = t.memoizedState, l = c.element, Iu(e, t), Ji(t, o, null, n);
          var f = t.memoizedState;
          if (o = f.element, c.isDehydrated) if (c = { element: o, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
            l = Xr(Error(i(423)), t), t = yc(e, t, o, n, l);
            break e;
          } else if (o !== l) {
            l = Xr(Error(i(424)), t), t = yc(e, t, o, n, l);
            break e;
          } else for (it = Yt(t.stateNode.containerInfo.firstChild), nt = t, ye = !0, vt = null, n = xu(t, null, o, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Kr(), o === l) {
              t = Bt(e, t, n);
              break e;
            }
            Ve(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Lu(t), e === null && No(t), o = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, f = l.children, bo(o, l) ? f = null : c !== null && bo(o, c) && (t.flags |= 32), gc(e, t), Ve(e, t, f, n), t.child;
      case 6:
        return e === null && No(t), null;
      case 13:
        return wc(e, t, n);
      case 4:
        return Fo(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = Gr(t, null, o, n) : Ve(e, t, o, n), t.child;
      case 11:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : yt(o, l), dc(e, t, o, l, n);
      case 7:
        return Ve(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (o = t.type._context, l = t.pendingProps, c = t.memoizedProps, f = l.value, fe(Hi, o._currentValue), o._currentValue = f, c !== null) if (mt(c.value, f)) {
            if (c.children === l.children && !Ge.current) {
              t = Bt(e, t, n);
              break e;
            }
          } else for (c = t.child, c !== null && (c.return = t); c !== null; ) {
            var m = c.dependencies;
            if (m !== null) {
              f = c.child;
              for (var y = m.firstContext; y !== null; ) {
                if (y.context === o) {
                  if (c.tag === 1) {
                    y = zt(-1, n & -n), y.tag = 2;
                    var T = c.updateQueue;
                    if (T !== null) {
                      T = T.shared;
                      var I = T.pending;
                      I === null ? y.next = y : (y.next = I.next, I.next = y), T.pending = y;
                    }
                  }
                  c.lanes |= n, y = c.alternate, y !== null && (y.lanes |= n), zo(
                    c.return,
                    n,
                    t
                  ), m.lanes |= n;
                  break;
                }
                y = y.next;
              }
            } else if (c.tag === 10) f = c.type === t.type ? null : c.child;
            else if (c.tag === 18) {
              if (f = c.return, f === null) throw Error(i(341));
              f.lanes |= n, m = f.alternate, m !== null && (m.lanes |= n), zo(f, n, t), f = c.sibling;
            } else f = c.child;
            if (f !== null) f.return = c;
            else for (f = c; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (c = f.sibling, c !== null) {
                c.return = f.return, f = c;
                break;
              }
              f = f.return;
            }
            c = f;
          }
          Ve(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, o = t.pendingProps.children, Qr(t, n), l = ct(l), o = o(l), t.flags |= 1, Ve(e, t, o, n), t.child;
      case 14:
        return o = t.type, l = yt(o, t.pendingProps), l = yt(o.type, l), hc(e, t, o, l, n);
      case 15:
        return fc(e, t, t.type, t.pendingProps, n);
      case 17:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : yt(o, l), is(e, t), t.tag = 1, Je(o) ? (e = !0, Bi(t)) : e = !1, Qr(t, n), ic(t, o, l), ta(t, o, l, n), sa(null, t, o, !0, e, n);
      case 19:
        return kc(e, t, n);
      case 22:
        return pc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function qc(e, t) {
    return Tl(e, t);
  }
  function Lf(e, t, n, o) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ft(e, t, n, o) {
    return new Lf(e, t, n, o);
  }
  function ba(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function $f(e) {
    if (typeof e == "function") return ba(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === bt) return 11;
      if (e === Ct) return 14;
    }
    return 2;
  }
  function lr(e, t) {
    var n = e.alternate;
    return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function gs(e, t, n, o, l, c) {
    var f = 2;
    if (o = e, typeof e == "function") ba(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case ie:
        return br(n.children, l, c, t);
      case Te:
        f = 8, l |= 8;
        break;
      case Ie:
        return e = ft(12, n, t, l | 2), e.elementType = Ie, e.lanes = c, e;
      case et:
        return e = ft(13, n, t, l), e.elementType = et, e.lanes = c, e;
      case pt:
        return e = ft(19, n, t, l), e.elementType = pt, e.lanes = c, e;
      case ke:
        return ms(n, l, c, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case jt:
            f = 10;
            break e;
          case hr:
            f = 9;
            break e;
          case bt:
            f = 11;
            break e;
          case Ct:
            f = 14;
            break e;
          case Ke:
            f = 16, o = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = ft(f, n, t, l), t.elementType = e, t.type = o, t.lanes = c, t;
  }
  function br(e, t, n, o) {
    return e = ft(7, e, o, t), e.lanes = n, e;
  }
  function ms(e, t, n, o) {
    return e = ft(22, e, o, t), e.elementType = ke, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ca(e, t, n) {
    return e = ft(6, e, null, t), e.lanes = n, e;
  }
  function Ra(e, t, n) {
    return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Uf(e, t, n, o, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zs(0), this.expirationTimes = Zs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zs(0), this.identifierPrefix = o, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Oa(e, t, n, o, l, c, f, m, y) {
    return e = new Uf(e, t, n, m, y), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = ft(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = { element: o, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mo(c), e;
  }
  function Df(e, t, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ee, key: o == null ? null : "" + o, children: e, containerInfo: t, implementation: n };
  }
  function Hc(e) {
    if (!e) return Zt;
    e = e._reactInternals;
    e: {
      if (fr(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Je(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Je(n)) return _u(e, n, t);
    }
    return t;
  }
  function Kc(e, t, n, o, l, c, f, m, y) {
    return e = Oa(n, o, !0, e, l, c, f, m, y), e.context = Hc(null), n = e.current, o = qe(), l = or(n), c = zt(o, l), c.callback = t ?? null, rr(n, c, l), e.current.lanes = l, Sn(e, l, o), Xe(e, o), e;
  }
  function vs(e, t, n, o) {
    var l = t.current, c = qe(), f = or(l);
    return n = Hc(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(c, f), t.payload = { element: e }, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = rr(l, t, f), e !== null && (kt(e, l, f, c), Gi(e, l, f)), f;
  }
  function ys(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Gc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Pa(e, t) {
    Gc(e, t), (e = e.alternate) && Gc(e, t);
  }
  function zf() {
    return null;
  }
  var Jc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function xa(e) {
    this._internalRoot = e;
  }
  ws.prototype.render = xa.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    vs(e, t, null, null);
  }, ws.prototype.unmount = xa.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Sr(function() {
        vs(null, e, null, null);
      }), t[Nt] = null;
    }
  };
  function ws(e) {
    this._internalRoot = e;
  }
  ws.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Il();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++) ;
      Gt.splice(n, 0, e), n === 0 && Ll(e);
    }
  };
  function Aa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function _s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Qc() {
  }
  function Bf(e, t, n, o, l) {
    if (l) {
      if (typeof o == "function") {
        var c = o;
        o = function() {
          var T = ys(f);
          c.call(T);
        };
      }
      var f = Kc(t, o, e, 0, null, !1, !1, "", Qc);
      return e._reactRootContainer = f, e[Nt] = f.current, $n(e.nodeType === 8 ? e.parentNode : e), Sr(), f;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof o == "function") {
      var m = o;
      o = function() {
        var T = ys(y);
        m.call(T);
      };
    }
    var y = Oa(e, 0, !1, null, null, !1, !1, "", Qc);
    return e._reactRootContainer = y, e[Nt] = y.current, $n(e.nodeType === 8 ? e.parentNode : e), Sr(function() {
      vs(t, y, n, o);
    }), y;
  }
  function ks(e, t, n, o, l) {
    var c = n._reactRootContainer;
    if (c) {
      var f = c;
      if (typeof l == "function") {
        var m = l;
        l = function() {
          var y = ys(f);
          m.call(y);
        };
      }
      vs(t, f, e, l);
    } else f = Bf(n, t, e, l, o);
    return ys(f);
  }
  xl = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = kn(t.pendingLanes);
          n !== 0 && (eo(t, n | 1), Xe(t, be()), (se & 6) === 0 && (tn = be() + 500, er()));
        }
        break;
      case 13:
        Sr(function() {
          var o = Dt(e, 1);
          if (o !== null) {
            var l = qe();
            kt(o, e, 1, l);
          }
        }), Pa(e, 1);
    }
  }, to = function(e) {
    if (e.tag === 13) {
      var t = Dt(e, 134217728);
      if (t !== null) {
        var n = qe();
        kt(t, e, 134217728, n);
      }
      Pa(e, 134217728);
    }
  }, Al = function(e) {
    if (e.tag === 13) {
      var t = or(e), n = Dt(e, t);
      if (n !== null) {
        var o = qe();
        kt(n, e, t, o);
      }
      Pa(e, t);
    }
  }, Il = function() {
    return de;
  }, jl = function(e, t) {
    var n = de;
    try {
      return de = e, t();
    } finally {
      de = n;
    }
  }, Ks = function(e, t, n) {
    switch (t) {
      case "input":
        if (zs(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var o = n[t];
            if (o !== e && o.form === e.form) {
              var l = Di(o);
              if (!l) throw Error(i(90));
              nl(o), zs(o, l);
            }
          }
        }
        break;
      case "textarea":
        ll(e, n);
        break;
      case "select":
        t = n.value, t != null && Ir(e, !!n.multiple, t, !1);
    }
  }, vl = Sa, yl = Sr;
  var Mf = { usingClientEntryPoint: !1, Events: [zn, Fr, Di, gl, ml, Sa] }, Zn = { findFiberByHostInstance: pr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ff = { bundleType: Zn.bundleType, version: Zn.version, rendererPackageName: Zn.rendererPackageName, rendererConfig: Zn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: K.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Sl(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Zn.findFiberByHostInstance || zf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ss.isDisabled && Ss.supportsFiber) try {
      wi = Ss.inject(Ff), Rt = Ss;
    } catch {
    }
  }
  return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf, Ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Aa(t)) throw Error(i(200));
    return Df(e, t, null, n);
  }, Ze.createRoot = function(e, t) {
    if (!Aa(e)) throw Error(i(299));
    var n = !1, o = "", l = Jc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Oa(e, 1, !1, null, null, n, !1, o, l), e[Nt] = t.current, $n(e.nodeType === 8 ? e.parentNode : e), new xa(t);
  }, Ze.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = Sl(t), e = e === null ? null : e.stateNode, e;
  }, Ze.flushSync = function(e) {
    return Sr(e);
  }, Ze.hydrate = function(e, t, n) {
    if (!_s(t)) throw Error(i(200));
    return ks(null, e, t, !0, n);
  }, Ze.hydrateRoot = function(e, t, n) {
    if (!Aa(e)) throw Error(i(405));
    var o = n != null && n.hydratedSources || null, l = !1, c = "", f = Jc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = Kc(t, null, e, 1, n ?? null, l, !1, c, f), e[Nt] = t.current, $n(e), o) for (e = 0; e < o.length; e++) n = o[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ws(t);
  }, Ze.render = function(e, t, n) {
    if (!_s(t)) throw Error(i(200));
    return ks(null, e, t, !1, n);
  }, Ze.unmountComponentAtNode = function(e) {
    if (!_s(e)) throw Error(i(40));
    return e._reactRootContainer ? (Sr(function() {
      ks(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Nt] = null;
      });
    }), !0) : !1;
  }, Ze.unstable_batchedUpdates = Sa, Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
    if (!_s(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return ks(e, t, n, !1, o);
  }, Ze.version = "18.3.1-next-f1338f8080-20240426", Ze;
}
var rd;
function Qf() {
  if (rd) return ja.exports;
  rd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (r) {
        console.error(r);
      }
  }
  return s(), ja.exports = Jf(), ja.exports;
}
var nd;
function Yf() {
  if (nd) return Es;
  nd = 1;
  var s = Qf();
  return Es.createRoot = s.createRoot, Es.hydrateRoot = s.hydrateRoot, Es;
}
var Xf = Yf();
function Ns(s, r) {
  var i = {};
  for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && r.indexOf(a) < 0 && (i[a] = s[a]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, a = Object.getOwnPropertySymbols(s); u < a.length; u++)
      r.indexOf(a[u]) < 0 && Object.prototype.propertyIsEnumerable.call(s, a[u]) && (i[a[u]] = s[a[u]]);
  return i;
}
function Zf(s, r, i, a) {
  function u(d) {
    return d instanceof i ? d : new i(function(h) {
      h(d);
    });
  }
  return new (i || (i = Promise))(function(d, h) {
    function p(w) {
      try {
        v(a.next(w));
      } catch (R) {
        h(R);
      }
    }
    function g(w) {
      try {
        v(a.throw(w));
      } catch (R) {
        h(R);
      }
    }
    function v(w) {
      w.done ? d(w.value) : u(w.value).then(p, g);
    }
    v((a = a.apply(s, r || [])).next());
  });
}
const ep = (s) => s ? (...r) => s(...r) : (...r) => fetch(...r);
class tl extends Error {
  constructor(r, i = "FunctionsError", a) {
    super(r), this.name = i, this.context = a;
  }
}
class tp extends tl {
  constructor(r) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", r);
  }
}
class id extends tl {
  constructor(r) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", r);
  }
}
class sd extends tl {
  constructor(r) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", r);
  }
}
var Va;
(function(s) {
  s.Any = "any", s.ApNortheast1 = "ap-northeast-1", s.ApNortheast2 = "ap-northeast-2", s.ApSouth1 = "ap-south-1", s.ApSoutheast1 = "ap-southeast-1", s.ApSoutheast2 = "ap-southeast-2", s.CaCentral1 = "ca-central-1", s.EuCentral1 = "eu-central-1", s.EuWest1 = "eu-west-1", s.EuWest2 = "eu-west-2", s.EuWest3 = "eu-west-3", s.SaEast1 = "sa-east-1", s.UsEast1 = "us-east-1", s.UsWest1 = "us-west-1", s.UsWest2 = "us-west-2";
})(Va || (Va = {}));
class rp {
  /**
   * Creates a new Functions client bound to an Edge Functions URL.
   *
   * @example
   * ```ts
   * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
   *
   * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
   *   headers: { apikey: 'public-anon-key' },
   *   region: FunctionRegion.UsEast1,
   * })
   * ```
   */
  constructor(r, { headers: i = {}, customFetch: a, region: u = Va.Any } = {}) {
    this.url = r, this.headers = i, this.region = u, this.fetch = ep(a);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   * @example
   * ```ts
   * functions.setAuth(session.access_token)
   * ```
   */
  setAuth(r) {
    this.headers.Authorization = `Bearer ${r}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   * @example
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   */
  invoke(r) {
    return Zf(this, arguments, void 0, function* (i, a = {}) {
      var u;
      let d, h;
      try {
        const { headers: p, method: g, body: v, signal: w, timeout: R } = a;
        let b = {}, { region: C } = a;
        C || (C = this.region);
        const O = new URL(`${this.url}/${i}`);
        C && C !== "any" && (b["x-region"] = C, O.searchParams.set("forceFunctionRegion", C));
        let P;
        v && (p && !Object.prototype.hasOwnProperty.call(p, "Content-Type") || !p) ? typeof Blob < "u" && v instanceof Blob || v instanceof ArrayBuffer ? (b["Content-Type"] = "application/octet-stream", P = v) : typeof v == "string" ? (b["Content-Type"] = "text/plain", P = v) : typeof FormData < "u" && v instanceof FormData ? P = v : (b["Content-Type"] = "application/json", P = JSON.stringify(v)) : v && typeof v != "string" && !(typeof Blob < "u" && v instanceof Blob) && !(v instanceof ArrayBuffer) && !(typeof FormData < "u" && v instanceof FormData) ? P = JSON.stringify(v) : P = v;
        let j = w;
        R && (h = new AbortController(), d = setTimeout(() => h.abort(), R), w ? (j = h.signal, w.addEventListener("abort", () => h.abort())) : j = h.signal);
        const D = yield this.fetch(O.toString(), {
          method: g || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, b), this.headers), p),
          body: P,
          signal: j
        }).catch((ue) => {
          throw new tp(ue);
        }), B = D.headers.get("x-relay-error");
        if (B && B === "true")
          throw new id(D);
        if (!D.ok)
          throw new sd(D);
        let $ = ((u = D.headers.get("Content-Type")) !== null && u !== void 0 ? u : "text/plain").split(";")[0].trim(), K;
        return $ === "application/json" ? K = yield D.json() : $ === "application/octet-stream" || $ === "application/pdf" ? K = yield D.blob() : $ === "text/event-stream" ? K = D : $ === "multipart/form-data" ? K = yield D.formData() : K = yield D.text(), { data: K, error: null, response: D };
      } catch (p) {
        return {
          data: null,
          error: p,
          response: p instanceof sd || p instanceof id ? p.context : void 0
        };
      } finally {
        d && clearTimeout(d);
      }
    });
  }
}
var np = class extends Error {
  /**
  * @example
  * ```ts
  * import PostgrestError from '@supabase/postgrest-js'
  *
  * throw new PostgrestError({
  *   message: 'Row level security prevented the request',
  *   details: 'RLS denied the insert',
  *   hint: 'Check your policies',
  *   code: 'PGRST301',
  * })
  * ```
  */
  constructor(s) {
    super(s.message), this.name = "PostgrestError", this.details = s.details, this.hint = s.hint, this.code = s.code;
  }
}, ip = class {
  /**
  * Creates a builder configured for a specific PostgREST request.
  *
  * @example
  * ```ts
  * import PostgrestQueryBuilder from '@supabase/postgrest-js'
  *
  * const builder = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: new Headers({ apikey: 'public-anon-key' }) }
  * )
  * ```
  */
  constructor(s) {
    var r, i, a;
    this.shouldThrowOnError = !1, this.method = s.method, this.url = s.url, this.headers = new Headers(s.headers), this.schema = s.schema, this.body = s.body, this.shouldThrowOnError = (r = s.shouldThrowOnError) !== null && r !== void 0 ? r : !1, this.signal = s.signal, this.isMaybeSingle = (i = s.isMaybeSingle) !== null && i !== void 0 ? i : !1, this.urlLengthLimit = (a = s.urlLengthLimit) !== null && a !== void 0 ? a : 8e3, s.fetch ? this.fetch = s.fetch : this.fetch = fetch;
  }
  /**
  * If there's an error with the query, throwOnError will reject the promise by
  * throwing the error instead of returning it as part of a successful response.
  *
  * {@link https://github.com/supabase/supabase-js/issues/92}
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  */
  setHeader(s, r) {
    return this.headers = new Headers(this.headers), this.headers.set(s, r), this;
  }
  then(s, r) {
    var i = this;
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
    const a = this.fetch;
    let u = a(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (d) => {
      let h = null, p = null, g = null, v = d.status, w = d.statusText;
      if (d.ok) {
        var R, b;
        if (i.method !== "HEAD") {
          var C;
          const D = await d.text();
          D === "" || (i.headers.get("Accept") === "text/csv" || i.headers.get("Accept") && (!((C = i.headers.get("Accept")) === null || C === void 0) && C.includes("application/vnd.pgrst.plan+text")) ? p = D : p = JSON.parse(D));
        }
        const P = (R = i.headers.get("Prefer")) === null || R === void 0 ? void 0 : R.match(/count=(exact|planned|estimated)/), j = (b = d.headers.get("content-range")) === null || b === void 0 ? void 0 : b.split("/");
        P && j && j.length > 1 && (g = parseInt(j[1])), i.isMaybeSingle && i.method === "GET" && Array.isArray(p) && (p.length > 1 ? (h = {
          code: "PGRST116",
          details: `Results contain ${p.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, p = null, g = null, v = 406, w = "Not Acceptable") : p.length === 1 ? p = p[0] : p = null);
      } else {
        var O;
        const P = await d.text();
        try {
          h = JSON.parse(P), Array.isArray(h) && d.status === 404 && (p = [], h = null, v = 200, w = "OK");
        } catch {
          d.status === 404 && P === "" ? (v = 204, w = "No Content") : h = { message: P };
        }
        if (h && i.isMaybeSingle && (!(h == null || (O = h.details) === null || O === void 0) && O.includes("0 rows")) && (h = null, v = 200, w = "OK"), h && i.shouldThrowOnError) throw new np(h);
      }
      return {
        error: h,
        data: p,
        count: g,
        status: v,
        statusText: w
      };
    });
    return this.shouldThrowOnError || (u = u.catch((d) => {
      var h;
      let p = "", g = "", v = "";
      const w = d?.cause;
      if (w) {
        var R, b, C, O;
        const D = (R = w?.message) !== null && R !== void 0 ? R : "", B = (b = w?.code) !== null && b !== void 0 ? b : "";
        p = `${(C = d?.name) !== null && C !== void 0 ? C : "FetchError"}: ${d?.message}`, p += `

Caused by: ${(O = w?.name) !== null && O !== void 0 ? O : "Error"}: ${D}`, B && (p += ` (${B})`), w?.stack && (p += `
${w.stack}`);
      } else {
        var P;
        p = (P = d?.stack) !== null && P !== void 0 ? P : "";
      }
      const j = this.url.toString().length;
      return d?.name === "AbortError" || d?.code === "ABORT_ERR" ? (v = "", g = "Request was aborted (timeout or manual cancellation)", j > this.urlLengthLimit && (g += `. Note: Your request URL is ${j} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (w?.name === "HeadersOverflowError" || w?.code === "UND_ERR_HEADERS_OVERFLOW") && (v = "", g = "HTTP headers exceeded server limits (typically 16KB)", j > this.urlLengthLimit && (g += `. Your request URL is ${j} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
        error: {
          message: `${(h = d?.name) !== null && h !== void 0 ? h : "FetchError"}: ${d?.message}`,
          details: p,
          hint: g,
          code: v
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), u.then(s, r);
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  */
  returns() {
    return this;
  }
  /**
  * Override the type of the returned `data` field in the response.
  *
  * @typeParam NewResult - The new type to cast the response data to
  * @typeParam Options - Optional type configuration (defaults to { merge: true })
  * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
  * @example
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  * @returns A PostgrestBuilder instance with the new type
  */
  overrideTypes() {
    return this;
  }
}, sp = class extends ip {
  /**
  * Perform a SELECT on the query result.
  *
  * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
  * return modified rows. By calling this method, modified rows are returned in
  * `data`.
  *
  * @param columns - The columns to retrieve, separated by commas
  */
  select(s) {
    let r = !1;
    const i = (s ?? "*").split("").map((a) => /\s/.test(a) && !r ? "" : (a === '"' && (r = !r), a)).join("");
    return this.url.searchParams.set("select", i), this.headers.append("Prefer", "return=representation"), this;
  }
  /**
  * Order the query result by `column`.
  *
  * You can call this method multiple times to order by multiple columns.
  *
  * You can order referenced tables, but it only affects the ordering of the
  * parent table if you use `!inner` in the query.
  *
  * @param column - The column to order by
  * @param options - Named parameters
  * @param options.ascending - If `true`, the result will be in ascending order
  * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
  * `null`s appear last.
  * @param options.referencedTable - Set this to order a referenced table by
  * its columns
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  */
  order(s, { ascending: r = !0, nullsFirst: i, foreignTable: a, referencedTable: u = a } = {}) {
    const d = u ? `${u}.order` : "order", h = this.url.searchParams.get(d);
    return this.url.searchParams.set(d, `${h ? `${h},` : ""}${s}.${r ? "asc" : "desc"}${i === void 0 ? "" : i ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
  * Limit the query result by `count`.
  *
  * @param count - The maximum number of rows to return
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  */
  limit(s, { foreignTable: r, referencedTable: i = r } = {}) {
    const a = typeof i > "u" ? "limit" : `${i}.limit`;
    return this.url.searchParams.set(a, `${s}`), this;
  }
  /**
  * Limit the query result by starting at an offset `from` and ending at the offset `to`.
  * Only records within this range are returned.
  * This respects the query order and if there is no order clause the range could behave unexpectedly.
  * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
  * and fourth rows of the query.
  *
  * @param from - The starting index from which to limit the result
  * @param to - The last index to which to limit the result
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  */
  range(s, r, { foreignTable: i, referencedTable: a = i } = {}) {
    const u = typeof a > "u" ? "offset" : `${a}.offset`, d = typeof a > "u" ? "limit" : `${a}.limit`;
    return this.url.searchParams.set(u, `${s}`), this.url.searchParams.set(d, `${r - s + 1}`), this;
  }
  /**
  * Set the AbortSignal for the fetch request.
  *
  * @param signal - The AbortSignal to use for the fetch request
  */
  abortSignal(s) {
    return this.signal = s, this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be one row (e.g. using `.limit(1)`), otherwise this
  * returns an error.
  */
  single() {
    return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
  * this returns an error.
  */
  maybeSingle() {
    return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
  }
  /**
  * Return `data` as a string in CSV format.
  */
  csv() {
    return this.headers.set("Accept", "text/csv"), this;
  }
  /**
  * Return `data` as an object in [GeoJSON](https://geojson.org) format.
  */
  geojson() {
    return this.headers.set("Accept", "application/geo+json"), this;
  }
  /**
  * Return `data` as the EXPLAIN plan for the query.
  *
  * You need to enable the
  * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
  * setting before using this method.
  *
  * @param options - Named parameters
  *
  * @param options.analyze - If `true`, the query will be executed and the
  * actual run time will be returned
  *
  * @param options.verbose - If `true`, the query identifier will be returned
  * and `data` will include the output columns of the query
  *
  * @param options.settings - If `true`, include information on configuration
  * parameters that affect query planning
  *
  * @param options.buffers - If `true`, include information on buffer usage
  *
  * @param options.wal - If `true`, include information on WAL record generation
  *
  * @param options.format - The format of the output, can be `"text"` (default)
  * or `"json"`
  */
  explain({ analyze: s = !1, verbose: r = !1, settings: i = !1, buffers: a = !1, wal: u = !1, format: d = "text" } = {}) {
    var h;
    const p = [
      s ? "analyze" : null,
      r ? "verbose" : null,
      i ? "settings" : null,
      a ? "buffers" : null,
      u ? "wal" : null
    ].filter(Boolean).join("|"), g = (h = this.headers.get("Accept")) !== null && h !== void 0 ? h : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${d}; for="${g}"; options=${p};`), d === "json" ? this : this;
  }
  /**
  * Rollback the query.
  *
  * `data` will still be returned, but the query is not committed.
  */
  rollback() {
    return this.headers.append("Prefer", "tx=rollback"), this;
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  */
  returns() {
    return this;
  }
  /**
  * Set the maximum number of rows that can be affected by the query.
  * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
  *
  * @param value - The maximum number of rows that can be affected
  */
  maxAffected(s) {
    return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${s}`), this;
  }
};
const od = /* @__PURE__ */ new RegExp("[,()]");
var un = class extends sp {
  /**
  * Match only rows where `column` is equal to `value`.
  *
  * To check if the value of `column` is NULL, you should use `.is()` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  eq(s, r) {
    return this.url.searchParams.append(s, `eq.${r}`), this;
  }
  /**
  * Match only rows where `column` is not equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  neq(s, r) {
    return this.url.searchParams.append(s, `neq.${r}`), this;
  }
  /**
  * Match only rows where `column` is greater than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  gt(s, r) {
    return this.url.searchParams.append(s, `gt.${r}`), this;
  }
  /**
  * Match only rows where `column` is greater than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  gte(s, r) {
    return this.url.searchParams.append(s, `gte.${r}`), this;
  }
  /**
  * Match only rows where `column` is less than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  lt(s, r) {
    return this.url.searchParams.append(s, `lt.${r}`), this;
  }
  /**
  * Match only rows where `column` is less than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  lte(s, r) {
    return this.url.searchParams.append(s, `lte.${r}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-sensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  */
  like(s, r) {
    return this.url.searchParams.append(s, `like.${r}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  likeAllOf(s, r) {
    return this.url.searchParams.append(s, `like(all).{${r.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  likeAnyOf(s, r) {
    return this.url.searchParams.append(s, `like(any).{${r.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-insensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  */
  ilike(s, r) {
    return this.url.searchParams.append(s, `ilike.${r}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  ilikeAllOf(s, r) {
    return this.url.searchParams.append(s, `ilike(all).{${r.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  */
  ilikeAnyOf(s, r) {
    return this.url.searchParams.append(s, `ilike(any).{${r.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-sensitively (using the `~` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexMatch(s, r) {
    return this.url.searchParams.append(s, `match.${r}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-insensitively (using the `~*` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexIMatch(s, r) {
    return this.url.searchParams.append(s, `imatch.${r}`), this;
  }
  /**
  * Match only rows where `column` IS `value`.
  *
  * For non-boolean columns, this is only relevant for checking if the value of
  * `column` is NULL by setting `value` to `null`.
  *
  * For boolean columns, you can also set `value` to `true` or `false` and it
  * will behave the same way as `.eq()`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  is(s, r) {
    return this.url.searchParams.append(s, `is.${r}`), this;
  }
  /**
  * Match only rows where `column` IS DISTINCT FROM `value`.
  *
  * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
  * are considered equal (not distinct), and comparing `NULL` with any non-NULL
  * value returns true (distinct).
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  isDistinct(s, r) {
    return this.url.searchParams.append(s, `isdistinct.${r}`), this;
  }
  /**
  * Match only rows where `column` is included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  in(s, r) {
    const i = Array.from(new Set(r)).map((a) => typeof a == "string" && od.test(a) ? `"${a}"` : `${a}`).join(",");
    return this.url.searchParams.append(s, `in.(${i})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(s, r) {
    const i = Array.from(new Set(r)).map((a) => typeof a == "string" && od.test(a) ? `"${a}"` : `${a}`).join(",");
    return this.url.searchParams.append(s, `not.in.(${i})`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * `column` contains every element appearing in `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  */
  contains(s, r) {
    return typeof r == "string" ? this.url.searchParams.append(s, `cs.${r}`) : Array.isArray(r) ? this.url.searchParams.append(s, `cs.{${r.join(",")}}`) : this.url.searchParams.append(s, `cs.${JSON.stringify(r)}`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * every element appearing in `column` is contained by `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  */
  containedBy(s, r) {
    return typeof r == "string" ? this.url.searchParams.append(s, `cd.${r}`) : Array.isArray(r) ? this.url.searchParams.append(s, `cd.{${r.join(",")}}`) : this.url.searchParams.append(s, `cd.${JSON.stringify(r)}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is greater than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeGt(s, r) {
    return this.url.searchParams.append(s, `sr.${r}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or greater than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeGte(s, r) {
    return this.url.searchParams.append(s, `nxl.${r}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is less than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeLt(s, r) {
    return this.url.searchParams.append(s, `sl.${r}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or less than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeLte(s, r) {
    return this.url.searchParams.append(s, `nxr.${r}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where `column` is
  * mutually exclusive to `range` and there can be no element between the two
  * ranges.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  */
  rangeAdjacent(s, r) {
    return this.url.searchParams.append(s, `adj.${r}`), this;
  }
  /**
  * Only relevant for array and range columns. Match only rows where
  * `column` and `value` have an element in common.
  *
  * @param column - The array or range column to filter on
  * @param value - The array or range value to filter with
  */
  overlaps(s, r) {
    return typeof r == "string" ? this.url.searchParams.append(s, `ov.${r}`) : this.url.searchParams.append(s, `ov.{${r.join(",")}}`), this;
  }
  /**
  * Only relevant for text and tsvector columns. Match only rows where
  * `column` matches the query string in `query`.
  *
  * @param column - The text or tsvector column to filter on
  * @param query - The query text to match with
  * @param options - Named parameters
  * @param options.config - The text search configuration to use
  * @param options.type - Change how the `query` text is interpreted
  */
  textSearch(s, r, { config: i, type: a } = {}) {
    let u = "";
    a === "plain" ? u = "pl" : a === "phrase" ? u = "ph" : a === "websearch" && (u = "w");
    const d = i === void 0 ? "" : `(${i})`;
    return this.url.searchParams.append(s, `${u}fts${d}.${r}`), this;
  }
  /**
  * Match only rows where each column in `query` keys is equal to its
  * associated value. Shorthand for multiple `.eq()`s.
  *
  * @param query - The object to filter with, with column names as keys mapped
  * to their filter values
  */
  match(s) {
    return Object.entries(s).forEach(([r, i]) => {
      this.url.searchParams.append(r, `eq.${i}`);
    }), this;
  }
  /**
  * Match only rows which doesn't satisfy the filter.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to be negated to filter with, following
  * PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  */
  not(s, r, i) {
    return this.url.searchParams.append(s, `not.${r}.${i}`), this;
  }
  /**
  * Match only rows which satisfy at least one of the filters.
  *
  * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure it's properly sanitized.
  *
  * It's currently not possible to do an `.or()` filter across multiple tables.
  *
  * @param filters - The filters to use, following PostgREST syntax
  * @param options - Named parameters
  * @param options.referencedTable - Set this to filter on referenced tables
  * instead of the parent table
  * @param options.foreignTable - Deprecated, use `referencedTable` instead
  */
  or(s, { foreignTable: r, referencedTable: i = r } = {}) {
    const a = i ? `${i}.or` : "or";
    return this.url.searchParams.append(a, `(${s})`), this;
  }
  /**
  * Match only rows which satisfy the filter. This is an escape hatch - you
  * should use the specific filter methods wherever possible.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to filter with, following PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  */
  filter(s, r, i) {
    return this.url.searchParams.append(s, `${r}.${i}`), this;
  }
}, op = class {
  /**
  * Creates a query builder scoped to a Postgres table or view.
  *
  * @example
  * ```ts
  * import PostgrestQueryBuilder from '@supabase/postgrest-js'
  *
  * const query = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: { apikey: 'public-anon-key' } }
  * )
  * ```
  */
  constructor(s, { headers: r = {}, schema: i, fetch: a, urlLengthLimit: u = 8e3 }) {
    this.url = s, this.headers = new Headers(r), this.schema = i, this.fetch = a, this.urlLengthLimit = u;
  }
  /**
  * Clone URL and headers to prevent shared state between operations.
  */
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  /**
  * Perform a SELECT query on the table or view.
  *
  * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
  *
  * @param options - Named parameters
  *
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  *
  * @param options.count - Count algorithm to use to count rows in the table or view.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @remarks
  * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
  * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
  */
  select(s, r) {
    const { head: i = !1, count: a } = r ?? {}, u = i ? "HEAD" : "GET";
    let d = !1;
    const h = (s ?? "*").split("").map((v) => /\s/.test(v) && !d ? "" : (v === '"' && (d = !d), v)).join(""), { url: p, headers: g } = this.cloneRequestState();
    return p.searchParams.set("select", h), a && g.append("Prefer", `count=${a}`), new un({
      method: u,
      url: p,
      headers: g,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform an INSERT into the table or view.
  *
  * By default, inserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to insert. Pass an object to insert a single row
  * or an array to insert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count inserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. Only applies for bulk
  * inserts.
  */
  insert(s, { count: r, defaultToNull: i = !0 } = {}) {
    var a;
    const u = "POST", { url: d, headers: h } = this.cloneRequestState();
    if (r && h.append("Prefer", `count=${r}`), i || h.append("Prefer", "missing=default"), Array.isArray(s)) {
      const p = s.reduce((g, v) => g.concat(Object.keys(v)), []);
      if (p.length > 0) {
        const g = [...new Set(p)].map((v) => `"${v}"`);
        d.searchParams.set("columns", g.join(","));
      }
    }
    return new un({
      method: u,
      url: d,
      headers: h,
      schema: this.schema,
      body: s,
      fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform an UPSERT on the table or view. Depending on the column(s) passed
  * to `onConflict`, `.upsert()` allows you to perform the equivalent of
  * `.insert()` if a row with the corresponding `onConflict` columns doesn't
  * exist, or if it does exist, perform an alternative action depending on
  * `ignoreDuplicates`.
  *
  * By default, upserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to upsert with. Pass an object to upsert a
  * single row or an array to upsert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
  * duplicate rows are determined. Two rows are duplicates if all the
  * `onConflict` columns are equal.
  *
  * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
  * `false`, duplicate rows are merged with existing rows.
  *
  * @param options.count - Count algorithm to use to count upserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. This only applies when
  * inserting new rows, not when merging with existing rows under
  * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
  *
  * @example Upsert a single row using a unique key
  * ```ts
  * // Upserting a single row, overwriting based on the 'username' unique column
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
  *
  * // Example response:
  * // {
  * //   data: [
  * //     { id: 4, message: 'bar', username: 'supabot' }
  * //   ],
  * //   error: null
  * // }
  * ```
  *
  * @example Upsert with conflict resolution and exact row counting
  * ```ts
  * // Upserting and returning exact count
  * const { data, error, count } = await supabase
  *   .from('users')
  *   .upsert(
  *     {
  *       id: 3,
  *       message: 'foo',
  *       username: 'supabot'
  *     },
  *     {
  *       onConflict: 'username',
  *       count: 'exact'
  *     }
  *   )
  *
  * // Example response:
  * // {
  * //   data: [
  * //     {
  * //       id: 42,
  * //       handle: "saoirse",
  * //       display_name: "Saoirse"
  * //     }
  * //   ],
  * //   count: 1,
  * //   error: null
  * // }
  * ```
  */
  upsert(s, { onConflict: r, ignoreDuplicates: i = !1, count: a, defaultToNull: u = !0 } = {}) {
    var d;
    const h = "POST", { url: p, headers: g } = this.cloneRequestState();
    if (g.append("Prefer", `resolution=${i ? "ignore" : "merge"}-duplicates`), r !== void 0 && p.searchParams.set("on_conflict", r), a && g.append("Prefer", `count=${a}`), u || g.append("Prefer", "missing=default"), Array.isArray(s)) {
      const v = s.reduce((w, R) => w.concat(Object.keys(R)), []);
      if (v.length > 0) {
        const w = [...new Set(v)].map((R) => `"${R}"`);
        p.searchParams.set("columns", w.join(","));
      }
    }
    return new un({
      method: h,
      url: p,
      headers: g,
      schema: this.schema,
      body: s,
      fetch: (d = this.fetch) !== null && d !== void 0 ? d : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform an UPDATE on the table or view.
  *
  * By default, updated rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param values - The values to update with
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count updated rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  update(s, { count: r } = {}) {
    var i;
    const a = "PATCH", { url: u, headers: d } = this.cloneRequestState();
    return r && d.append("Prefer", `count=${r}`), new un({
      method: a,
      url: u,
      headers: d,
      schema: this.schema,
      body: s,
      fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform a DELETE on the table or view.
  *
  * By default, deleted rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count deleted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  delete({ count: s } = {}) {
    var r;
    const i = "DELETE", { url: a, headers: u } = this.cloneRequestState();
    return s && u.append("Prefer", `count=${s}`), new un({
      method: i,
      url: a,
      headers: u,
      schema: this.schema,
      fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
function si(s) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, si(s);
}
function ap(s, r) {
  if (si(s) != "object" || !s) return s;
  var i = s[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(s, r);
    if (si(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(s);
}
function lp(s) {
  var r = ap(s, "string");
  return si(r) == "symbol" ? r : r + "";
}
function up(s, r, i) {
  return (r = lp(r)) in s ? Object.defineProperty(s, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[r] = i, s;
}
function ad(s, r) {
  var i = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(s);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(s, u).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function Ts(s) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ad(Object(i), !0).forEach(function(a) {
      up(s, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : ad(Object(i)).forEach(function(a) {
      Object.defineProperty(s, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return s;
}
var cp = class Ad {
  /**
  * Creates a PostgREST client.
  *
  * @param url - URL of the PostgREST endpoint
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to switch to
  * @param options.fetch - Custom fetch
  * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
  * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
  * @example
  * ```ts
  * import PostgrestClient from '@supabase/postgrest-js'
  *
  * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
  *   headers: { apikey: 'public-anon-key' },
  *   schema: 'public',
  *   timeout: 30000, // 30 second timeout
  * })
  * ```
  */
  constructor(r, { headers: i = {}, schema: a, fetch: u, timeout: d, urlLengthLimit: h = 8e3 } = {}) {
    this.url = r, this.headers = new Headers(i), this.schemaName = a, this.urlLengthLimit = h;
    const p = u ?? globalThis.fetch;
    d !== void 0 && d > 0 ? this.fetch = (g, v) => {
      const w = new AbortController(), R = setTimeout(() => w.abort(), d), b = v?.signal;
      if (b) {
        if (b.aborted)
          return clearTimeout(R), p(g, v);
        const C = () => {
          clearTimeout(R), w.abort();
        };
        return b.addEventListener("abort", C, { once: !0 }), p(g, Ts(Ts({}, v), {}, { signal: w.signal })).finally(() => {
          clearTimeout(R), b.removeEventListener("abort", C);
        });
      }
      return p(g, Ts(Ts({}, v), {}, { signal: w.signal })).finally(() => clearTimeout(R));
    } : this.fetch = p;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(r) {
    if (!r || typeof r != "string" || r.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new op(new URL(`${this.url}/${r}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(r) {
    return new Ad(this.url, {
      headers: this.headers,
      schema: r,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @example
  * ```ts
  * // For cross-schema functions where type inference fails, use overrideTypes:
  * const { data } = await supabase
  *   .schema('schema_b')
  *   .rpc('function_a', {})
  *   .overrideTypes<{ id: string; user_id: string }[]>()
  * ```
  */
  rpc(r, i = {}, { head: a = !1, get: u = !1, count: d } = {}) {
    var h;
    let p;
    const g = new URL(`${this.url}/rpc/${r}`);
    let v;
    const w = (C) => C !== null && typeof C == "object" && (!Array.isArray(C) || C.some(w)), R = a && Object.values(i).some(w);
    R ? (p = "POST", v = i) : a || u ? (p = a ? "HEAD" : "GET", Object.entries(i).filter(([C, O]) => O !== void 0).map(([C, O]) => [C, Array.isArray(O) ? `{${O.join(",")}}` : `${O}`]).forEach(([C, O]) => {
      g.searchParams.append(C, O);
    })) : (p = "POST", v = i);
    const b = new Headers(this.headers);
    return R ? b.set("Prefer", d ? `count=${d},return=minimal` : "return=minimal") : d && b.set("Prefer", `count=${d}`), new un({
      method: p,
      url: g,
      headers: b,
      schema: this.schemaName,
      body: v,
      fetch: (h = this.fetch) !== null && h !== void 0 ? h : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
class dp {
  /**
   * Static-only utility – prevent instantiation.
   */
  constructor() {
  }
  static detectEnvironment() {
    var r;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((r = navigator.userAgent) === null || r === void 0) && r.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    const i = globalThis.process;
    if (i) {
      const a = i.versions;
      if (a && a.node) {
        const u = a.node, d = parseInt(u.replace(/^v/, "").split(".")[0]);
        return d >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${d} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${d} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  /**
   * Returns the best available WebSocket constructor for the current runtime.
   *
   * @example
   * ```ts
   * const WS = WebSocketFactory.getWebSocketConstructor()
   * const socket = new WS('wss://realtime.supabase.co/socket')
   * ```
   */
  static getWebSocketConstructor() {
    const r = this.detectEnvironment();
    if (r.constructor)
      return r.constructor;
    let i = r.error || "WebSocket not supported in this environment.";
    throw r.workaround && (i += `

Suggested solution: ${r.workaround}`), new Error(i);
  }
  /**
   * Creates a WebSocket using the detected constructor.
   *
   * @example
   * ```ts
   * const socket = WebSocketFactory.createWebSocket('wss://realtime.supabase.co/socket')
   * ```
   */
  static createWebSocket(r, i) {
    const a = this.getWebSocketConstructor();
    return new a(r, i);
  }
  /**
   * Detects whether the runtime can establish WebSocket connections.
   *
   * @example
   * ```ts
   * if (!WebSocketFactory.isWebSocketSupported()) {
   *   console.warn('Falling back to long polling')
   * }
   * ```
   */
  static isWebSocketSupported() {
    try {
      const r = this.detectEnvironment();
      return r.type === "native" || r.type === "ws";
    } catch {
      return !1;
    }
  }
}
const hp = "2.98.0", fp = `realtime-js/${hp}`, pp = "1.0.0", Id = "2.0.0", ld = Id, qa = 1e4, gp = 1e3, mp = 100;
var cr;
(function(s) {
  s[s.connecting = 0] = "connecting", s[s.open = 1] = "open", s[s.closing = 2] = "closing", s[s.closed = 3] = "closed";
})(cr || (cr = {}));
var Ae;
(function(s) {
  s.closed = "closed", s.errored = "errored", s.joined = "joined", s.joining = "joining", s.leaving = "leaving";
})(Ae || (Ae = {}));
var Tt;
(function(s) {
  s.close = "phx_close", s.error = "phx_error", s.join = "phx_join", s.reply = "phx_reply", s.leave = "phx_leave", s.access_token = "access_token";
})(Tt || (Tt = {}));
var Ha;
(function(s) {
  s.websocket = "websocket";
})(Ha || (Ha = {}));
var Pr;
(function(s) {
  s.Connecting = "connecting", s.Open = "open", s.Closing = "closing", s.Closed = "closed";
})(Pr || (Pr = {}));
class vp {
  constructor(r) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = r ?? [];
  }
  encode(r, i) {
    if (r.event === this.BROADCAST_EVENT && !(r.payload instanceof ArrayBuffer) && typeof r.payload.event == "string")
      return i(this._binaryEncodeUserBroadcastPush(r));
    let a = [r.join_ref, r.ref, r.topic, r.event, r.payload];
    return i(JSON.stringify(a));
  }
  _binaryEncodeUserBroadcastPush(r) {
    var i;
    return this._isArrayBuffer((i = r.payload) === null || i === void 0 ? void 0 : i.payload) ? this._encodeBinaryUserBroadcastPush(r) : this._encodeJsonUserBroadcastPush(r);
  }
  _encodeBinaryUserBroadcastPush(r) {
    var i, a;
    const u = (a = (i = r.payload) === null || i === void 0 ? void 0 : i.payload) !== null && a !== void 0 ? a : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(r, this.BINARY_ENCODING, u);
  }
  _encodeJsonUserBroadcastPush(r) {
    var i, a;
    const u = (a = (i = r.payload) === null || i === void 0 ? void 0 : i.payload) !== null && a !== void 0 ? a : {}, h = new TextEncoder().encode(JSON.stringify(u)).buffer;
    return this._encodeUserBroadcastPush(r, this.JSON_ENCODING, h);
  }
  _encodeUserBroadcastPush(r, i, a) {
    var u, d;
    const h = r.topic, p = (u = r.ref) !== null && u !== void 0 ? u : "", g = (d = r.join_ref) !== null && d !== void 0 ? d : "", v = r.payload.event, w = this.allowedMetadataKeys ? this._pick(r.payload, this.allowedMetadataKeys) : {}, R = Object.keys(w).length === 0 ? "" : JSON.stringify(w);
    if (g.length > 255)
      throw new Error(`joinRef length ${g.length} exceeds maximum of 255`);
    if (p.length > 255)
      throw new Error(`ref length ${p.length} exceeds maximum of 255`);
    if (h.length > 255)
      throw new Error(`topic length ${h.length} exceeds maximum of 255`);
    if (v.length > 255)
      throw new Error(`userEvent length ${v.length} exceeds maximum of 255`);
    if (R.length > 255)
      throw new Error(`metadata length ${R.length} exceeds maximum of 255`);
    const b = this.USER_BROADCAST_PUSH_META_LENGTH + g.length + p.length + h.length + v.length + R.length, C = new ArrayBuffer(this.HEADER_LENGTH + b);
    let O = new DataView(C), P = 0;
    O.setUint8(P++, this.KINDS.userBroadcastPush), O.setUint8(P++, g.length), O.setUint8(P++, p.length), O.setUint8(P++, h.length), O.setUint8(P++, v.length), O.setUint8(P++, R.length), O.setUint8(P++, i), Array.from(g, (D) => O.setUint8(P++, D.charCodeAt(0))), Array.from(p, (D) => O.setUint8(P++, D.charCodeAt(0))), Array.from(h, (D) => O.setUint8(P++, D.charCodeAt(0))), Array.from(v, (D) => O.setUint8(P++, D.charCodeAt(0))), Array.from(R, (D) => O.setUint8(P++, D.charCodeAt(0)));
    var j = new Uint8Array(C.byteLength + a.byteLength);
    return j.set(new Uint8Array(C), 0), j.set(new Uint8Array(a), C.byteLength), j.buffer;
  }
  decode(r, i) {
    if (this._isArrayBuffer(r)) {
      let a = this._binaryDecode(r);
      return i(a);
    }
    if (typeof r == "string") {
      const a = JSON.parse(r), [u, d, h, p, g] = a;
      return i({ join_ref: u, ref: d, topic: h, event: p, payload: g });
    }
    return i({});
  }
  _binaryDecode(r) {
    const i = new DataView(r), a = i.getUint8(0), u = new TextDecoder();
    switch (a) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(r, i, u);
    }
  }
  _decodeUserBroadcast(r, i, a) {
    const u = i.getUint8(1), d = i.getUint8(2), h = i.getUint8(3), p = i.getUint8(4);
    let g = this.HEADER_LENGTH + 4;
    const v = a.decode(r.slice(g, g + u));
    g = g + u;
    const w = a.decode(r.slice(g, g + d));
    g = g + d;
    const R = a.decode(r.slice(g, g + h));
    g = g + h;
    const b = r.slice(g, r.byteLength), C = p === this.JSON_ENCODING ? JSON.parse(a.decode(b)) : b, O = {
      type: this.BROADCAST_EVENT,
      event: w,
      payload: C
    };
    return h > 0 && (O.meta = JSON.parse(R)), { join_ref: null, ref: null, topic: v, event: this.BROADCAST_EVENT, payload: O };
  }
  _isArrayBuffer(r) {
    var i;
    return r instanceof ArrayBuffer || ((i = r?.constructor) === null || i === void 0 ? void 0 : i.name) === "ArrayBuffer";
  }
  _pick(r, i) {
    return !r || typeof r != "object" ? {} : Object.fromEntries(Object.entries(r).filter(([a]) => i.includes(a)));
  }
}
class jd {
  constructor(r, i) {
    this.callback = r, this.timerCalc = i, this.timer = void 0, this.tries = 0, this.callback = r, this.timerCalc = i;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer), this.timer = void 0;
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var pe;
(function(s) {
  s.abstime = "abstime", s.bool = "bool", s.date = "date", s.daterange = "daterange", s.float4 = "float4", s.float8 = "float8", s.int2 = "int2", s.int4 = "int4", s.int4range = "int4range", s.int8 = "int8", s.int8range = "int8range", s.json = "json", s.jsonb = "jsonb", s.money = "money", s.numeric = "numeric", s.oid = "oid", s.reltime = "reltime", s.text = "text", s.time = "time", s.timestamp = "timestamp", s.timestamptz = "timestamptz", s.timetz = "timetz", s.tsrange = "tsrange", s.tstzrange = "tstzrange";
})(pe || (pe = {}));
const ud = (s, r, i = {}) => {
  var a;
  const u = (a = i.skipTypes) !== null && a !== void 0 ? a : [];
  return r ? Object.keys(r).reduce((d, h) => (d[h] = yp(h, s, r, u), d), {}) : {};
}, yp = (s, r, i, a) => {
  const u = r.find((p) => p.name === s), d = u?.type, h = i[s];
  return d && !a.includes(d) ? Nd(d, h) : Ka(h);
}, Nd = (s, r) => {
  if (s.charAt(0) === "_") {
    const i = s.slice(1, s.length);
    return Sp(r, i);
  }
  switch (s) {
    case pe.bool:
      return wp(r);
    case pe.float4:
    case pe.float8:
    case pe.int2:
    case pe.int4:
    case pe.int8:
    case pe.numeric:
    case pe.oid:
      return _p(r);
    case pe.json:
    case pe.jsonb:
      return kp(r);
    case pe.timestamp:
      return Ep(r);
    // Format to be consistent with PostgREST
    case pe.abstime:
    // To allow users to cast it based on Timezone
    case pe.date:
    // To allow users to cast it based on Timezone
    case pe.daterange:
    case pe.int4range:
    case pe.int8range:
    case pe.money:
    case pe.reltime:
    // To allow users to cast it based on Timezone
    case pe.text:
    case pe.time:
    // To allow users to cast it based on Timezone
    case pe.timestamptz:
    // To allow users to cast it based on Timezone
    case pe.timetz:
    // To allow users to cast it based on Timezone
    case pe.tsrange:
    case pe.tstzrange:
      return Ka(r);
    default:
      return Ka(r);
  }
}, Ka = (s) => s, wp = (s) => {
  switch (s) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return s;
  }
}, _p = (s) => {
  if (typeof s == "string") {
    const r = parseFloat(s);
    if (!Number.isNaN(r))
      return r;
  }
  return s;
}, kp = (s) => {
  if (typeof s == "string")
    try {
      return JSON.parse(s);
    } catch {
      return s;
    }
  return s;
}, Sp = (s, r) => {
  if (typeof s != "string")
    return s;
  const i = s.length - 1, a = s[i];
  if (s[0] === "{" && a === "}") {
    let d;
    const h = s.slice(1, i);
    try {
      d = JSON.parse("[" + h + "]");
    } catch {
      d = h ? h.split(",") : [];
    }
    return d.map((p) => Nd(r, p));
  }
  return s;
}, Ep = (s) => typeof s == "string" ? s.replace(" ", "T") : s, Ld = (s) => {
  const r = new URL(s);
  return r.protocol = r.protocol.replace(/^ws/i, "http"), r.pathname = r.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), r.pathname === "" || r.pathname === "/" ? r.pathname = "/api/broadcast" : r.pathname = r.pathname + "/api/broadcast", r.href;
};
class $a {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(r, i, a = {}, u = qa) {
    this.channel = r, this.event = i, this.payload = a, this.timeout = u, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(r) {
    this.timeout = r, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(r) {
    this.payload = Object.assign(Object.assign({}, this.payload), r);
  }
  receive(r, i) {
    var a;
    return this._hasReceived(r) && i((a = this.receivedResp) === null || a === void 0 ? void 0 : a.response), this.recHooks.push({ status: r, callback: i }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const r = (i) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = i, this._matchReceive(i);
    };
    this.channel._on(this.refEvent, {}, r), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(r, i) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: r, response: i });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: r, response: i }) {
    this.recHooks.filter((a) => a.status === r).forEach((a) => a.callback(i));
  }
  _hasReceived(r) {
    return this.receivedResp && this.receivedResp.status === r;
  }
}
var cd;
(function(s) {
  s.SYNC = "sync", s.JOIN = "join", s.LEAVE = "leave";
})(cd || (cd = {}));
class ni {
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @example
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  constructor(r, i) {
    this.channel = r, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const a = i?.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(a.state, {}, (u) => {
      const { onJoin: d, onLeave: h, onSync: p } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = ni.syncState(this.state, u, d, h), this.pendingDiffs.forEach((g) => {
        this.state = ni.syncDiff(this.state, g, d, h);
      }), this.pendingDiffs = [], p();
    }), this.channel._on(a.diff, {}, (u) => {
      const { onJoin: d, onLeave: h, onSync: p } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(u) : (this.state = ni.syncDiff(this.state, u, d, h), p());
    }), this.onJoin((u, d, h) => {
      this.channel._trigger("presence", {
        event: "join",
        key: u,
        currentPresences: d,
        newPresences: h
      });
    }), this.onLeave((u, d, h) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: u,
        currentPresences: d,
        leftPresences: h
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(r, i, a, u) {
    const d = this.cloneDeep(r), h = this.transformState(i), p = {}, g = {};
    return this.map(d, (v, w) => {
      h[v] || (g[v] = w);
    }), this.map(h, (v, w) => {
      const R = d[v];
      if (R) {
        const b = w.map((j) => j.presence_ref), C = R.map((j) => j.presence_ref), O = w.filter((j) => C.indexOf(j.presence_ref) < 0), P = R.filter((j) => b.indexOf(j.presence_ref) < 0);
        O.length > 0 && (p[v] = O), P.length > 0 && (g[v] = P);
      } else
        p[v] = w;
    }), this.syncDiff(d, { joins: p, leaves: g }, a, u);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(r, i, a, u) {
    const { joins: d, leaves: h } = {
      joins: this.transformState(i.joins),
      leaves: this.transformState(i.leaves)
    };
    return a || (a = () => {
    }), u || (u = () => {
    }), this.map(d, (p, g) => {
      var v;
      const w = (v = r[p]) !== null && v !== void 0 ? v : [];
      if (r[p] = this.cloneDeep(g), w.length > 0) {
        const R = r[p].map((C) => C.presence_ref), b = w.filter((C) => R.indexOf(C.presence_ref) < 0);
        r[p].unshift(...b);
      }
      a(p, w, g);
    }), this.map(h, (p, g) => {
      let v = r[p];
      if (!v)
        return;
      const w = g.map((R) => R.presence_ref);
      v = v.filter((R) => w.indexOf(R.presence_ref) < 0), r[p] = v, u(p, v, g), v.length === 0 && delete r[p];
    }), r;
  }
  /** @internal */
  static map(r, i) {
    return Object.getOwnPropertyNames(r).map((a) => i(a, r[a]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(r) {
    return r = this.cloneDeep(r), Object.getOwnPropertyNames(r).reduce((i, a) => {
      const u = r[a];
      return "metas" in u ? i[a] = u.metas.map((d) => (d.presence_ref = d.phx_ref, delete d.phx_ref, delete d.phx_ref_prev, d)) : i[a] = u, i;
    }, {});
  }
  /** @internal */
  static cloneDeep(r) {
    return JSON.parse(JSON.stringify(r));
  }
  /** @internal */
  onJoin(r) {
    this.caller.onJoin = r;
  }
  /** @internal */
  onLeave(r) {
    this.caller.onLeave = r;
  }
  /** @internal */
  onSync(r) {
    this.caller.onSync = r;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var dd;
(function(s) {
  s.ALL = "*", s.INSERT = "INSERT", s.UPDATE = "UPDATE", s.DELETE = "DELETE";
})(dd || (dd = {}));
var ii;
(function(s) {
  s.BROADCAST = "broadcast", s.PRESENCE = "presence", s.POSTGRES_CHANGES = "postgres_changes", s.SYSTEM = "system";
})(ii || (ii = {}));
var Wt;
(function(s) {
  s.SUBSCRIBED = "SUBSCRIBED", s.TIMED_OUT = "TIMED_OUT", s.CLOSED = "CLOSED", s.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Wt || (Wt = {}));
class hn {
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  constructor(r, i = { config: {} }, a) {
    var u, d;
    if (this.topic = r, this.params = i, this.socket = a, this.bindings = {}, this.state = Ae.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = r.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, i.config), this.timeout = this.socket.timeout, this.joinPush = new $a(this, Tt.join, this.params, this.timeout), this.rejoinTimer = new jd(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = Ae.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((h) => h.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = Ae.closed, this.socket._remove(this);
    }), this._onError((h) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, h), this.state = Ae.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = Ae.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (h) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, h), this.state = Ae.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Tt.reply, {}, (h, p) => {
      this._trigger(this._replyEventName(p), h);
    }), this.presence = new ni(this), this.broadcastEndpointURL = Ld(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((d = (u = this.params.config) === null || u === void 0 ? void 0 : u.broadcast) === null || d === void 0) && d.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(r, i = this.timeout) {
    var a, u, d;
    if (this.socket.isConnected() || this.socket.connect(), this.state == Ae.closed) {
      const { config: { broadcast: h, presence: p, private: g } } = this.params, v = (u = (a = this.bindings.postgres_changes) === null || a === void 0 ? void 0 : a.map((C) => C.filter)) !== null && u !== void 0 ? u : [], w = !!this.bindings[ii.PRESENCE] && this.bindings[ii.PRESENCE].length > 0 || ((d = this.params.config.presence) === null || d === void 0 ? void 0 : d.enabled) === !0, R = {}, b = {
        broadcast: h,
        presence: Object.assign(Object.assign({}, p), { enabled: w }),
        postgres_changes: v,
        private: g
      };
      this.socket.accessTokenValue && (R.access_token = this.socket.accessTokenValue), this._onError((C) => r?.(Wt.CHANNEL_ERROR, C)), this._onClose(() => r?.(Wt.CLOSED)), this.updateJoinPayload(Object.assign({ config: b }, R)), this.joinedOnce = !0, this._rejoin(i), this.joinPush.receive("ok", async ({ postgres_changes: C }) => {
        var O;
        if (this.socket._isManualToken() || this.socket.setAuth(), C === void 0) {
          r?.(Wt.SUBSCRIBED);
          return;
        } else {
          const P = this.bindings.postgres_changes, j = (O = P?.length) !== null && O !== void 0 ? O : 0, D = [];
          for (let B = 0; B < j; B++) {
            const $ = P[B], { filter: { event: K, schema: ue, table: ee, filter: ie } } = $, Te = C && C[B];
            if (Te && Te.event === K && hn.isFilterValueEqual(Te.schema, ue) && hn.isFilterValueEqual(Te.table, ee) && hn.isFilterValueEqual(Te.filter, ie))
              D.push(Object.assign(Object.assign({}, $), { id: Te.id }));
            else {
              this.unsubscribe(), this.state = Ae.errored, r?.(Wt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = D, r && r(Wt.SUBSCRIBED);
          return;
        }
      }).receive("error", (C) => {
        this.state = Ae.errored, r?.(Wt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(C).join(", ") || "error")));
      }).receive("timeout", () => {
        r?.(Wt.TIMED_OUT);
      });
    }
    return this;
  }
  /**
   * Returns the current presence state for this channel.
   *
   * The shape is a map keyed by presence key (for example a user id) where each entry contains the
   * tracked metadata for that user.
   */
  presenceState() {
    return this.presence.state;
  }
  /**
   * Sends the supplied payload to the presence tracker so other subscribers can see that this
   * client is online. Use `untrack` to stop broadcasting presence for the same key.
   */
  async track(r, i = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: r
    }, i.timeout || this.timeout);
  }
  /**
   * Removes the current presence state for this client.
   */
  async untrack(r = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, r);
  }
  on(r, i, a) {
    return this.state === Ae.joined && r === ii.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(async () => await this.subscribe())), this._on(r, i, a);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   */
  async httpSend(r, i, a = {}) {
    var u;
    if (i == null)
      return Promise.reject("Payload is required for httpSend()");
    const d = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    this.socket.accessTokenValue && (d.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const h = {
      method: "POST",
      headers: d,
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: r,
            payload: i,
            private: this.private
          }
        ]
      })
    }, p = await this._fetchWithTimeout(this.broadcastEndpointURL, h, (u = a.timeout) !== null && u !== void 0 ? u : this.timeout);
    if (p.status === 202)
      return { success: !0 };
    let g = p.statusText;
    try {
      const v = await p.json();
      g = v.error || v.message || g;
    } catch {
    }
    return Promise.reject(new Error(g));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(r, i = {}) {
    var a, u;
    if (!this._canPush() && r.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: d, payload: h } = r, p = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      this.socket.accessTokenValue && (p.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const g = {
        method: "POST",
        headers: p,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: d,
              payload: h,
              private: this.private
            }
          ]
        })
      };
      try {
        const v = await this._fetchWithTimeout(this.broadcastEndpointURL, g, (a = i.timeout) !== null && a !== void 0 ? a : this.timeout);
        return await ((u = v.body) === null || u === void 0 ? void 0 : u.cancel()), v.ok ? "ok" : "error";
      } catch (v) {
        return v.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((d) => {
        var h, p, g;
        const v = this._push(r.type, r, i.timeout || this.timeout);
        r.type === "broadcast" && !(!((g = (p = (h = this.params) === null || h === void 0 ? void 0 : h.config) === null || p === void 0 ? void 0 : p.broadcast) === null || g === void 0) && g.ack) && d("ok"), v.receive("ok", () => d("ok")), v.receive("error", () => d("error")), v.receive("timeout", () => d("timed out"));
      });
  }
  /**
   * Updates the payload that will be sent the next time the channel joins (reconnects).
   * Useful for rotating access tokens or updating config without re-creating the channel.
   */
  updateJoinPayload(r) {
    this.joinPush.updatePayload(r);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(r = this.timeout) {
    this.state = Ae.leaving;
    const i = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Tt.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let a = null;
    return new Promise((u) => {
      a = new $a(this, Tt.leave, {}, r), a.receive("ok", () => {
        i(), u("ok");
      }).receive("timeout", () => {
        i(), u("timed out");
      }).receive("error", () => {
        u("error");
      }), a.send(), this._canPush() || a.trigger("ok", {});
    }).finally(() => {
      a?.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((r) => r.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = Ae.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(r, i, a) {
    const u = new AbortController(), d = setTimeout(() => u.abort(), a), h = await this.socket.fetch(r, Object.assign(Object.assign({}, i), { signal: u.signal }));
    return clearTimeout(d), h;
  }
  /** @internal */
  _push(r, i, a = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${r}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let u = new $a(this, r, i, a);
    return this._canPush() ? u.send() : this._addToPushBuffer(u), u;
  }
  /** @internal */
  _addToPushBuffer(r) {
    if (r.startTimeout(), this.pushBuffer.push(r), this.pushBuffer.length > mp) {
      const i = this.pushBuffer.shift();
      i && (i.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${i.event}`, i.payload));
    }
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(r, i, a) {
    return i;
  }
  /** @internal */
  _isMember(r) {
    return this.topic === r;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(r, i, a) {
    var u, d;
    const h = r.toLocaleLowerCase(), { close: p, error: g, leave: v, join: w } = Tt;
    if (a && [p, g, v, w].indexOf(h) >= 0 && a !== this._joinRef())
      return;
    let b = this._onMessage(h, i, a);
    if (i && !b)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(h) ? (u = this.bindings.postgres_changes) === null || u === void 0 || u.filter((C) => {
      var O, P, j;
      return ((O = C.filter) === null || O === void 0 ? void 0 : O.event) === "*" || ((j = (P = C.filter) === null || P === void 0 ? void 0 : P.event) === null || j === void 0 ? void 0 : j.toLocaleLowerCase()) === h;
    }).map((C) => C.callback(b, a)) : (d = this.bindings[h]) === null || d === void 0 || d.filter((C) => {
      var O, P, j, D, B, $;
      if (["broadcast", "presence", "postgres_changes"].includes(h))
        if ("id" in C) {
          const K = C.id, ue = (O = C.filter) === null || O === void 0 ? void 0 : O.event;
          return K && ((P = i.ids) === null || P === void 0 ? void 0 : P.includes(K)) && (ue === "*" || ue?.toLocaleLowerCase() === ((j = i.data) === null || j === void 0 ? void 0 : j.type.toLocaleLowerCase()));
        } else {
          const K = (B = (D = C?.filter) === null || D === void 0 ? void 0 : D.event) === null || B === void 0 ? void 0 : B.toLocaleLowerCase();
          return K === "*" || K === (($ = i?.event) === null || $ === void 0 ? void 0 : $.toLocaleLowerCase());
        }
      else
        return C.type.toLocaleLowerCase() === h;
    }).map((C) => {
      if (typeof b == "object" && "ids" in b) {
        const O = b.data, { schema: P, table: j, commit_timestamp: D, type: B, errors: $ } = O;
        b = Object.assign(Object.assign({}, {
          schema: P,
          table: j,
          commit_timestamp: D,
          eventType: B,
          new: {},
          old: {},
          errors: $
        }), this._getPayloadRecords(O));
      }
      C.callback(b, a);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === Ae.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === Ae.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === Ae.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === Ae.leaving;
  }
  /** @internal */
  _replyEventName(r) {
    return `chan_reply_${r}`;
  }
  /** @internal */
  _on(r, i, a) {
    const u = r.toLocaleLowerCase(), d = {
      type: u,
      filter: i,
      callback: a
    };
    return this.bindings[u] ? this.bindings[u].push(d) : this.bindings[u] = [d], this;
  }
  /** @internal */
  _off(r, i) {
    const a = r.toLocaleLowerCase();
    return this.bindings[a] && (this.bindings[a] = this.bindings[a].filter((u) => {
      var d;
      return !(((d = u.type) === null || d === void 0 ? void 0 : d.toLocaleLowerCase()) === a && hn.isEqual(u.filter, i));
    })), this;
  }
  /** @internal */
  static isEqual(r, i) {
    if (Object.keys(r).length !== Object.keys(i).length)
      return !1;
    for (const a in r)
      if (r[a] !== i[a])
        return !1;
    return !0;
  }
  /**
   * Compares two optional filter values for equality.
   * Treats undefined, null, and empty string as equivalent empty values.
   * @internal
   */
  static isFilterValueEqual(r, i) {
    return (r ?? void 0) === (i ?? void 0);
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(r) {
    this._on(Tt.close, {}, r);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(r) {
    this._on(Tt.error, {}, (i) => r(i));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(r = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = Ae.joining, this.joinPush.resend(r));
  }
  /** @internal */
  _getPayloadRecords(r) {
    const i = {
      new: {},
      old: {}
    };
    return (r.type === "INSERT" || r.type === "UPDATE") && (i.new = ud(r.columns, r.record)), (r.type === "UPDATE" || r.type === "DELETE") && (i.old = ud(r.columns, r.old_record)), i;
  }
}
const Ua = () => {
}, bs = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Tp = [1e3, 2e3, 5e3, 1e4], bp = 1e4, Cp = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Rp {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * client.connect()
   * ```
   */
  constructor(r, i) {
    var a;
    if (this.accessTokenValue = null, this.apiKey = null, this._manuallySetToken = !1, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = qa, this.transport = null, this.heartbeatIntervalMs = bs.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Ua, this.ref = 0, this.reconnectTimer = null, this.vsn = ld, this.logger = Ua, this.conn = null, this.sendBuffer = [], this.serializer = new vp(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._heartbeatSentAt = null, this._resolveFetch = (u) => u ? (...d) => u(...d) : (...d) => fetch(...d), !(!((a = i?.params) === null || a === void 0) && a.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = i.params.apikey, this.endPoint = `${r}/${Ha.websocket}`, this.httpEndpoint = Ld(r), this._initializeOptions(i), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(i?.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
      if (this._setConnectionState("connecting"), this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this.transport)
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = dp.createWebSocket(this.endpointURL());
        } catch (r) {
          this._setConnectionState("disconnected");
          const i = r.message;
          throw i.includes("Node.js") ? new Error(`${i}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${i}`);
        }
      this._setupConnectionHandlers();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: this.vsn }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(r, i) {
    if (!this.isDisconnecting())
      if (this._setConnectionState("disconnecting", !0), this.conn) {
        const a = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(a), this._setConnectionState("disconnected");
        }, typeof this.conn.close == "function" && (r ? this.conn.close(r, i ?? "") : this.conn.close()), this._teardownConnection();
      } else
        this._setConnectionState("disconnected");
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(r) {
    const i = await r.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), i;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const r = await Promise.all(this.channels.map((i) => i.unsubscribe()));
    return this.channels = [], this.disconnect(), r;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(r, i, a) {
    this.logger(r, i, a);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case cr.connecting:
        return Pr.Connecting;
      case cr.open:
        return Pr.Open;
      case cr.closing:
        return Pr.Closing;
      default:
        return Pr.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Pr.Open;
  }
  /**
   * Returns `true` if the connection is currently connecting.
   */
  isConnecting() {
    return this._connectionState === "connecting";
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   */
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  /**
   * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
   *
   * Topics are automatically prefixed with `realtime:` to match the Realtime service.
   * If a channel with the same topic already exists it will be returned instead of creating
   * a duplicate connection.
   */
  channel(r, i = { config: {} }) {
    const a = `realtime:${r}`, u = this.getChannels().find((d) => d.topic === a);
    if (u)
      return u;
    {
      const d = new hn(`realtime:${r}`, i, this);
      return this.channels.push(d), d;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(r) {
    const { topic: i, event: a, payload: u, ref: d } = r, h = () => {
      this.encode(r, (p) => {
        var g;
        (g = this.conn) === null || g === void 0 || g.send(p);
      });
    };
    this.log("push", `${i} ${a} (${d})`, u), this.isConnected() ? h() : this.sendBuffer.push(h);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * When a token is explicitly provided, it will be preserved across channel operations
   * (including removeChannel and resubscribe). The `accessToken` callback will not be
   * invoked until `setAuth()` is called without arguments.
   *
   * @param token A JWT string to override the token set on the client.
   *
   * @example
   * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
   * client.realtime.setAuth('my-custom-jwt')
   *
   * // Switch back to using the accessToken callback
   * client.realtime.setAuth()
   */
  async setAuth(r = null) {
    this._authPromise = this._performAuth(r);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Returns true if the current access token was explicitly set via setAuth(token),
   * false if it was obtained via the accessToken callback.
   * @internal
   */
  _isManualToken() {
    return this._manuallySetToken;
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var r;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (i) {
        this.log("error", "error in heartbeat callback", i);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this._heartbeatSentAt = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (i) {
        this.log("error", "error in heartbeat callback", i);
      }
      this._wasManualDisconnect = !1, (r = this.conn) === null || r === void 0 || r.close(gp, "heartbeat timeout"), setTimeout(() => {
        var i;
        this.isConnected() || (i = this.reconnectTimer) === null || i === void 0 || i.scheduleTimeout();
      }, bs.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    this._heartbeatSentAt = Date.now(), this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (i) {
      this.log("error", "error in heartbeat callback", i);
    }
    this._setAuthSafely("heartbeat");
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   */
  onHeartbeat(r) {
    this.heartbeatCallback = r;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((r) => r()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let r = this.ref + 1;
    return r === this.ref ? this.ref = 0 : this.ref = r, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(r) {
    let i = this.channels.find((a) => a.topic === r && (a._isJoined() || a._isJoining()));
    i && (this.log("transport", `leaving duplicate topic "${r}"`), i.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(r) {
    this.channels = this.channels.filter((i) => i.topic !== r.topic);
  }
  /** @internal */
  _onConnMessage(r) {
    this.decode(r.data, (i) => {
      if (i.topic === "phoenix" && i.event === "phx_reply" && i.ref && i.ref === this.pendingHeartbeatRef) {
        const v = this._heartbeatSentAt ? Date.now() - this._heartbeatSentAt : void 0;
        try {
          this.heartbeatCallback(i.payload.status === "ok" ? "ok" : "error", v);
        } catch (w) {
          this.log("error", "error in heartbeat callback", w);
        }
        this._heartbeatSentAt = null, this.pendingHeartbeatRef = null;
      }
      const { topic: a, event: u, payload: d, ref: h } = i, p = h ? `(${h})` : "", g = d.status || "";
      this.log("receive", `${g} ${a} ${u} ${p}`.trim(), d), this.channels.filter((v) => v._isMember(a)).forEach((v) => v._trigger(u, d, h)), this._triggerStateCallbacks("message", i);
    });
  }
  /**
   * Clear specific timer
   * @internal
   */
  _clearTimer(r) {
    var i;
    r === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : r === "reconnect" && ((i = this.reconnectTimer) === null || i === void 0 || i.reset());
  }
  /**
   * Clear all timers
   * @internal
   */
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  /**
   * Setup connection handlers for WebSocket events
   * @internal
   */
  _setupConnectionHandlers() {
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (r) => this._onConnError(r), this.conn.onmessage = (r) => this._onConnMessage(r), this.conn.onclose = (r) => this._onConnClose(r), this.conn.readyState === cr.open && this._onConnOpen());
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === cr.open || this.conn.readyState === cr.connecting)
        try {
          this.conn.close();
        } catch (r) {
          this.log("error", "Error closing connection", r);
        }
      this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, this.conn = null;
    }
    this._clearAllTimers(), this._terminateWorker(), this.channels.forEach((r) => r.teardown());
  }
  /** @internal */
  _onConnOpen() {
    this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).then(() => {
      this.accessTokenValue && (this.channels.forEach((i) => {
        i.updateJoinPayload({ access_token: this.accessTokenValue });
      }), this.sendBuffer = [], this.channels.forEach((i) => {
        i._isJoining() && (i.joinPush.sent = !1, i.joinPush.send());
      })), this.flushSendBuffer();
    }).catch((i) => {
      this.log("error", "error waiting for auth on connect", i), this.flushSendBuffer();
    }), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open");
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const r = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(r), this.workerRef.onerror = (i) => {
      this.log("worker", "worker error", i.message), this._terminateWorker();
    }, this.workerRef.onmessage = (i) => {
      i.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /**
   * Terminate the Web Worker and clear the reference
   * @internal
   */
  _terminateWorker() {
    this.workerRef && (this.log("worker", "terminating worker"), this.workerRef.terminate(), this.workerRef = void 0);
  }
  /** @internal */
  _onConnClose(r) {
    var i;
    this._setConnectionState("disconnected"), this.log("transport", "close", r), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (i = this.reconnectTimer) === null || i === void 0 || i.scheduleTimeout(), this._triggerStateCallbacks("close", r);
  }
  /** @internal */
  _onConnError(r) {
    this._setConnectionState("disconnected"), this.log("transport", `${r}`), this._triggerChanError(), this._triggerStateCallbacks("error", r);
    try {
      this.heartbeatCallback("error");
    } catch (i) {
      this.log("error", "error in heartbeat callback", i);
    }
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((r) => r._trigger(Tt.error));
  }
  /** @internal */
  _appendParams(r, i) {
    if (Object.keys(i).length === 0)
      return r;
    const a = r.match(/\?/) ? "&" : "?", u = new URLSearchParams(i);
    return `${r}${a}${u}`;
  }
  _workerObjectUrl(r) {
    let i;
    if (r)
      i = r;
    else {
      const a = new Blob([Cp], { type: "application/javascript" });
      i = URL.createObjectURL(a);
    }
    return i;
  }
  /**
   * Set connection state with proper state management
   * @internal
   */
  _setConnectionState(r, i = !1) {
    this._connectionState = r, r === "connecting" ? this._wasManualDisconnect = !1 : r === "disconnecting" && (this._wasManualDisconnect = i);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(r = null) {
    let i, a = !1;
    if (r)
      i = r, a = !0;
    else if (this.accessToken)
      try {
        i = await this.accessToken();
      } catch (u) {
        this.log("error", "Error fetching access token from callback", u), i = this.accessTokenValue;
      }
    else
      i = this.accessTokenValue;
    a ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != i && (this.accessTokenValue = i, this.channels.forEach((u) => {
      const d = {
        access_token: i,
        version: fp
      };
      i && u.updateJoinPayload(d), u.joinedOnce && u._isJoined() && u._push(Tt.access_token, {
        access_token: i
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(r = "general") {
    this._isManualToken() || this.setAuth().catch((i) => {
      this.log("error", `Error setting auth in ${r}`, i);
    });
  }
  /**
   * Trigger state change callbacks with proper error handling
   * @internal
   */
  _triggerStateCallbacks(r, i) {
    try {
      this.stateChangeCallbacks[r].forEach((a) => {
        try {
          a(i);
        } catch (u) {
          this.log("error", `error in ${r} callback`, u);
        }
      });
    } catch (a) {
      this.log("error", `error triggering ${r} callbacks`, a);
    }
  }
  /**
   * Setup reconnection timer with proper configuration
   * @internal
   */
  _setupReconnectionTimer() {
    this.reconnectTimer = new jd(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, bs.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(r) {
    var i, a, u, d, h, p, g, v, w, R, b, C;
    switch (this.transport = (i = r?.transport) !== null && i !== void 0 ? i : null, this.timeout = (a = r?.timeout) !== null && a !== void 0 ? a : qa, this.heartbeatIntervalMs = (u = r?.heartbeatIntervalMs) !== null && u !== void 0 ? u : bs.HEARTBEAT_INTERVAL, this.worker = (d = r?.worker) !== null && d !== void 0 ? d : !1, this.accessToken = (h = r?.accessToken) !== null && h !== void 0 ? h : null, this.heartbeatCallback = (p = r?.heartbeatCallback) !== null && p !== void 0 ? p : Ua, this.vsn = (g = r?.vsn) !== null && g !== void 0 ? g : ld, r?.params && (this.params = r.params), r?.logger && (this.logger = r.logger), (r?.logLevel || r?.log_level) && (this.logLevel = r.logLevel || r.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (v = r?.reconnectAfterMs) !== null && v !== void 0 ? v : ((O) => Tp[O - 1] || bp), this.vsn) {
      case pp:
        this.encode = (w = r?.encode) !== null && w !== void 0 ? w : ((O, P) => P(JSON.stringify(O))), this.decode = (R = r?.decode) !== null && R !== void 0 ? R : ((O, P) => P(JSON.parse(O)));
        break;
      case Id:
        this.encode = (b = r?.encode) !== null && b !== void 0 ? b : this.serializer.encode.bind(this.serializer), this.decode = (C = r?.decode) !== null && C !== void 0 ? C : this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = r?.workerUrl;
    }
  }
}
var oi = class extends Error {
  constructor(s, r) {
    super(s), this.name = "IcebergError", this.status = r.status, this.icebergType = r.icebergType, this.icebergCode = r.icebergCode, this.details = r.details, this.isCommitStateUnknown = r.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(r.status) && r.icebergType?.includes("CommitState") === !0;
  }
  /**
   * Returns true if the error is a 404 Not Found error.
   */
  isNotFound() {
    return this.status === 404;
  }
  /**
   * Returns true if the error is a 409 Conflict error.
   */
  isConflict() {
    return this.status === 409;
  }
  /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function Op(s, r, i) {
  const a = new URL(r, s);
  if (i)
    for (const [u, d] of Object.entries(i))
      d !== void 0 && a.searchParams.set(u, d);
  return a.toString();
}
async function Pp(s) {
  return !s || s.type === "none" ? {} : s.type === "bearer" ? { Authorization: `Bearer ${s.token}` } : s.type === "header" ? { [s.name]: s.value } : s.type === "custom" ? await s.getHeaders() : {};
}
function xp(s) {
  const r = s.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: i,
      path: a,
      query: u,
      body: d,
      headers: h
    }) {
      const p = Op(s.baseUrl, a, u), g = await Pp(s.auth), v = await r(p, {
        method: i,
        headers: {
          ...d ? { "Content-Type": "application/json" } : {},
          ...g,
          ...h
        },
        body: d ? JSON.stringify(d) : void 0
      }), w = await v.text(), R = (v.headers.get("content-type") || "").includes("application/json"), b = R && w ? JSON.parse(w) : w;
      if (!v.ok) {
        const C = R ? b : void 0, O = C?.error;
        throw new oi(
          O?.message ?? `Request failed with status ${v.status}`,
          {
            status: v.status,
            icebergType: O?.type,
            icebergCode: O?.code,
            details: C
          }
        );
      }
      return { status: v.status, headers: v.headers, data: b };
    }
  };
}
function Cs(s) {
  return s.join("");
}
var Ap = class {
  constructor(s, r = "") {
    this.client = s, this.prefix = r;
  }
  async listNamespaces(s) {
    const r = s ? { parent: Cs(s.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: r
    })).data.namespaces.map((a) => ({ namespace: a }));
  }
  async createNamespace(s, r) {
    const i = {
      namespace: s.namespace,
      properties: r?.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: i
    })).data;
  }
  async dropNamespace(s) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Cs(s.namespace)}`
    });
  }
  async loadNamespaceMetadata(s) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${Cs(s.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(s) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Cs(s.namespace)}`
      }), !0;
    } catch (r) {
      if (r instanceof oi && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createNamespaceIfNotExists(s, r) {
    try {
      return await this.createNamespace(s, r);
    } catch (i) {
      if (i instanceof oi && i.status === 409)
        return;
      throw i;
    }
  }
};
function nn(s) {
  return s.join("");
}
var Ip = class {
  constructor(s, r = "", i) {
    this.client = s, this.prefix = r, this.accessDelegation = i;
  }
  async listTables(s) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${nn(s.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(s, r) {
    const i = {};
    return this.accessDelegation && (i["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${nn(s.namespace)}/tables`,
      body: r,
      headers: i
    })).data.metadata;
  }
  async updateTable(s, r) {
    const i = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${nn(s.namespace)}/tables/${s.name}`,
      body: r
    });
    return {
      "metadata-location": i.data["metadata-location"],
      metadata: i.data.metadata
    };
  }
  async dropTable(s, r) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${nn(s.namespace)}/tables/${s.name}`,
      query: { purgeRequested: String(r?.purge ?? !1) }
    });
  }
  async loadTable(s) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${nn(s.namespace)}/tables/${s.name}`,
      headers: r
    })).data.metadata;
  }
  async tableExists(s) {
    const r = {};
    this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${nn(s.namespace)}/tables/${s.name}`,
        headers: r
      }), !0;
    } catch (i) {
      if (i instanceof oi && i.status === 404)
        return !1;
      throw i;
    }
  }
  async createTableIfNotExists(s, r) {
    try {
      return await this.createTable(s, r);
    } catch (i) {
      if (i instanceof oi && i.status === 409)
        return await this.loadTable({ namespace: s.namespace, name: r.name });
      throw i;
    }
  }
}, jp = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(s) {
    let r = "v1";
    s.catalogName && (r += `/${s.catalogName}`);
    const i = s.baseUrl.endsWith("/") ? s.baseUrl : `${s.baseUrl}/`;
    this.client = xp({
      baseUrl: i,
      auth: s.auth,
      fetchImpl: s.fetch
    }), this.accessDelegation = s.accessDelegation?.join(","), this.namespaceOps = new Ap(this.client, r), this.tableOps = new Ip(this.client, r, this.accessDelegation);
  }
  /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */
  async listNamespaces(s) {
    return this.namespaceOps.listNamespaces(s);
  }
  /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */
  async createNamespace(s, r) {
    return this.namespaceOps.createNamespace(s, r);
  }
  /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */
  async dropNamespace(s) {
    await this.namespaceOps.dropNamespace(s);
  }
  /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */
  async loadNamespaceMetadata(s) {
    return this.namespaceOps.loadNamespaceMetadata(s);
  }
  /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */
  async listTables(s) {
    return this.tableOps.listTables(s);
  }
  /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */
  async createTable(s, r) {
    return this.tableOps.createTable(s, r);
  }
  /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */
  async updateTable(s, r) {
    return this.tableOps.updateTable(s, r);
  }
  /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */
  async dropTable(s, r) {
    await this.tableOps.dropTable(s, r);
  }
  /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */
  async loadTable(s) {
    return this.tableOps.loadTable(s);
  }
  /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */
  async namespaceExists(s) {
    return this.namespaceOps.namespaceExists(s);
  }
  /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */
  async tableExists(s) {
    return this.tableOps.tableExists(s);
  }
  /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */
  async createNamespaceIfNotExists(s, r) {
    return this.namespaceOps.createNamespaceIfNotExists(s, r);
  }
  /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */
  async createTableIfNotExists(s, r) {
    return this.tableOps.createTableIfNotExists(s, r);
  }
}, Ls = class extends Error {
  constructor(s, r = "storage", i, a) {
    super(s), this.__isStorageError = !0, this.namespace = r, this.name = r === "vectors" ? "StorageVectorsError" : "StorageError", this.status = i, this.statusCode = a;
  }
};
function $s(s) {
  return typeof s == "object" && s !== null && "__isStorageError" in s;
}
var Rs = class extends Ls {
  constructor(s, r, i, a = "storage") {
    super(s, a, r, i), this.name = a === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = r, this.statusCode = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}, $d = class extends Ls {
  constructor(s, r, i = "storage") {
    super(s, i), this.name = i === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = r;
  }
};
const Np = (s) => s ? (...r) => s(...r) : (...r) => fetch(...r), Lp = (s) => {
  if (typeof s != "object" || s === null) return !1;
  const r = Object.getPrototypeOf(s);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, Ga = (s) => {
  if (Array.isArray(s)) return s.map((i) => Ga(i));
  if (typeof s == "function" || s !== Object(s)) return s;
  const r = {};
  return Object.entries(s).forEach(([i, a]) => {
    const u = i.replace(/([-_][a-z])/gi, (d) => d.toUpperCase().replace(/[-_]/g, ""));
    r[u] = Ga(a);
  }), r;
}, $p = (s) => !s || typeof s != "string" || s.length === 0 || s.length > 100 || s.trim() !== s || s.includes("/") || s.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(s);
function ai(s) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ai(s);
}
function Up(s, r) {
  if (ai(s) != "object" || !s) return s;
  var i = s[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(s, r);
    if (ai(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(s);
}
function Dp(s) {
  var r = Up(s, "string");
  return ai(r) == "symbol" ? r : r + "";
}
function zp(s, r, i) {
  return (r = Dp(r)) in s ? Object.defineProperty(s, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[r] = i, s;
}
function hd(s, r) {
  var i = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(s);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(s, u).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function Q(s) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? hd(Object(i), !0).forEach(function(a) {
      zp(s, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : hd(Object(i)).forEach(function(a) {
      Object.defineProperty(s, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return s;
}
const fd = (s) => {
  var r;
  return s.msg || s.message || s.error_description || (typeof s.error == "string" ? s.error : (r = s.error) === null || r === void 0 ? void 0 : r.message) || JSON.stringify(s);
}, Bp = async (s, r, i, a) => {
  if (s && typeof s == "object" && "status" in s && "ok" in s && typeof s.status == "number" && !i?.noResolveJson) {
    const u = s, d = u.status || 500;
    if (typeof u.json == "function") u.json().then((h) => {
      const p = h?.statusCode || h?.code || d + "";
      r(new Rs(fd(h), d, p, a));
    }).catch(() => {
      if (a === "vectors") {
        const h = d + "";
        r(new Rs(u.statusText || `HTTP ${d} error`, d, h, a));
      } else {
        const h = d + "";
        r(new Rs(u.statusText || `HTTP ${d} error`, d, h, a));
      }
    });
    else {
      const h = d + "";
      r(new Rs(u.statusText || `HTTP ${d} error`, d, h, a));
    }
  } else r(new $d(fd(s), s, a));
}, Mp = (s, r, i, a) => {
  const u = {
    method: s,
    headers: r?.headers || {}
  };
  return s === "GET" || s === "HEAD" || !a ? Q(Q({}, u), i) : (Lp(a) ? (u.headers = Q({ "Content-Type": "application/json" }, r?.headers), u.body = JSON.stringify(a)) : u.body = a, r?.duplex && (u.duplex = r.duplex), Q(Q({}, u), i));
};
async function ei(s, r, i, a, u, d, h) {
  return new Promise((p, g) => {
    s(i, Mp(r, a, u, d)).then((v) => {
      if (!v.ok) throw v;
      if (a?.noResolveJson) return v;
      if (h === "vectors") {
        const w = v.headers.get("content-type");
        if (v.headers.get("content-length") === "0" || v.status === 204) return {};
        if (!w || !w.includes("application/json")) return {};
      }
      return v.json();
    }).then((v) => p(v)).catch((v) => Bp(v, g, a, h));
  });
}
function Ud(s = "storage") {
  return {
    get: async (r, i, a, u) => ei(r, "GET", i, a, u, void 0, s),
    post: async (r, i, a, u, d) => ei(r, "POST", i, u, d, a, s),
    put: async (r, i, a, u, d) => ei(r, "PUT", i, u, d, a, s),
    head: async (r, i, a, u) => ei(r, "HEAD", i, Q(Q({}, a), {}, { noResolveJson: !0 }), u, void 0, s),
    remove: async (r, i, a, u, d) => ei(r, "DELETE", i, u, d, a, s)
  };
}
const Fp = Ud("storage"), { get: li, post: Et, put: Ja, head: Wp, remove: rl } = Fp, at = Ud("vectors");
var pn = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(s, r = {}, i, a = "storage") {
    this.shouldThrowOnError = !1, this.url = s, this.headers = r, this.fetch = Np(i), this.namespace = a;
  }
  /**
  * Enable throwing errors instead of returning them.
  * When enabled, errors are thrown instead of returned in { data, error } format.
  *
  * @returns this - For method chaining
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  * Creates a shallow copy of headers to avoid mutating shared state.
  *
  * @param name - Header name
  * @param value - Header value
  * @returns this - For method chaining
  */
  setHeader(s, r) {
    return this.headers = Q(Q({}, this.headers), {}, { [s]: r }), this;
  }
  /**
  * Handles API operation with standardized error handling
  * Eliminates repetitive try-catch blocks across all API methods
  *
  * This wrapper:
  * 1. Executes the operation
  * 2. Returns { data, error: null } on success
  * 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
  * 4. Throws error on failure (if shouldThrowOnError is true)
  *
  * @typeParam T - The expected data type from the operation
  * @param operation - Async function that performs the API call
  * @returns Promise with { data, error } tuple
  *
  * @example
  * ```typescript
  * async listBuckets() {
  *   return this.handleOperation(async () => {
  *     return await get(this.fetch, `${this.url}/bucket`, {
  *       headers: this.headers,
  *     })
  *   })
  * }
  * ```
  */
  async handleOperation(s) {
    var r = this;
    try {
      return {
        data: await s(),
        error: null
      };
    } catch (i) {
      if (r.shouldThrowOnError) throw i;
      if ($s(i)) return {
        data: null,
        error: i
      };
      throw i;
    }
  }
}, Vp = class {
  constructor(s, r) {
    this.downloadFn = s, this.shouldThrowOnError = r;
  }
  then(s, r) {
    return this.execute().then(s, r);
  }
  async execute() {
    var s = this;
    try {
      return {
        data: (await s.downloadFn()).body,
        error: null
      };
    } catch (r) {
      if (s.shouldThrowOnError) throw r;
      if ($s(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
};
let Dd;
Dd = Symbol.toStringTag;
var qp = class {
  constructor(s, r) {
    this.downloadFn = s, this.shouldThrowOnError = r, this[Dd] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new Vp(this.downloadFn, this.shouldThrowOnError);
  }
  then(s, r) {
    return this.getPromise().then(s, r);
  }
  catch(s) {
    return this.getPromise().catch(s);
  }
  finally(s) {
    return this.getPromise().finally(s);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var s = this;
    try {
      return {
        data: await (await s.downloadFn()).blob(),
        error: null
      };
    } catch (r) {
      if (s.shouldThrowOnError) throw r;
      if ($s(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
};
const Hp = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, pd = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var Kp = class extends pn {
  constructor(s, r = {}, i, a) {
    super(s, r, a, "storage"), this.bucketId = i;
  }
  /**
  * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
  *
  * @param method HTTP method.
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  */
  async uploadOrUpdate(s, r, i, a) {
    var u = this;
    return u.handleOperation(async () => {
      let d;
      const h = Q(Q({}, pd), a);
      let p = Q(Q({}, u.headers), s === "POST" && { "x-upsert": String(h.upsert) });
      const g = h.metadata;
      typeof Blob < "u" && i instanceof Blob ? (d = new FormData(), d.append("cacheControl", h.cacheControl), g && d.append("metadata", u.encodeMetadata(g)), d.append("", i)) : typeof FormData < "u" && i instanceof FormData ? (d = i, d.has("cacheControl") || d.append("cacheControl", h.cacheControl), g && !d.has("metadata") && d.append("metadata", u.encodeMetadata(g))) : (d = i, p["cache-control"] = `max-age=${h.cacheControl}`, p["content-type"] = h.contentType, g && (p["x-metadata"] = u.toBase64(u.encodeMetadata(g))), (typeof ReadableStream < "u" && d instanceof ReadableStream || d && typeof d == "object" && "pipe" in d && typeof d.pipe == "function") && !h.duplex && (h.duplex = "half")), a?.headers && (p = Q(Q({}, p), a.headers));
      const v = u._removeEmptyFolders(r), w = u._getFinalPath(v), R = await (s == "PUT" ? Ja : Et)(u.fetch, `${u.url}/object/${w}`, d, Q({ headers: p }, h?.duplex ? { duplex: h.duplex } : {}));
      return {
        path: v,
        id: R.Id,
        fullPath: R.Key
      };
    });
  }
  /**
  * Uploads a file to an existing bucket.
  *
  * @category File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Upload file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: false
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Upload file using `ArrayBuffer` from base64 file data
  * ```js
  * import { decode } from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  */
  async upload(s, r, i) {
    return this.uploadOrUpdate("POST", s, r, i);
  }
  /**
  * Upload a file with a token generated from `createSignedUploadUrl`.
  *
  * @category File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param token The token generated from `createSignedUploadUrl`
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions HTTP headers (cacheControl, contentType, etc.).
  * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
  * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
  * @returns Promise with response containing file path and fullPath or error
  *
  * @example Upload to a signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "folder/cat.jpg",
  *     "fullPath": "avatars/folder/cat.jpg"
  *   },
  *   "error": null
  * }
  * ```
  */
  async uploadToSignedUrl(s, r, i, a) {
    var u = this;
    const d = u._removeEmptyFolders(s), h = u._getFinalPath(d), p = new URL(u.url + `/object/upload/sign/${h}`);
    return p.searchParams.set("token", r), u.handleOperation(async () => {
      let g;
      const v = Q({ upsert: pd.upsert }, a), w = Q(Q({}, u.headers), { "x-upsert": String(v.upsert) });
      return typeof Blob < "u" && i instanceof Blob ? (g = new FormData(), g.append("cacheControl", v.cacheControl), g.append("", i)) : typeof FormData < "u" && i instanceof FormData ? (g = i, g.append("cacheControl", v.cacheControl)) : (g = i, w["cache-control"] = `max-age=${v.cacheControl}`, w["content-type"] = v.contentType), {
        path: d,
        fullPath: (await Ja(u.fetch, p.toString(), g, { headers: w })).Key
      };
    });
  }
  /**
  * Creates a signed upload URL.
  * Signed upload URLs can be used to upload files to the bucket without further authentication.
  * They are valid for 2 hours.
  *
  * @category File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
  * @returns Promise with response containing signed upload URL, token, and path or error
  *
  * @example Create Signed Upload URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUploadUrl('folder/cat.jpg')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
  *     "path": "folder/cat.jpg",
  *     "token": "<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  */
  async createSignedUploadUrl(s, r) {
    var i = this;
    return i.handleOperation(async () => {
      let a = i._getFinalPath(s);
      const u = Q({}, i.headers);
      r?.upsert && (u["x-upsert"] = "true");
      const d = await Et(i.fetch, `${i.url}/object/upload/sign/${a}`, {}, { headers: u }), h = new URL(i.url + d.url), p = h.searchParams.get("token");
      if (!p) throw new Ls("No token returned by API");
      return {
        signedUrl: h.toString(),
        path: s,
        token: p
      };
    });
  }
  /**
  * Replaces an existing file at the specified path with a new one.
  *
  * @category File Buckets
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Update file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: true
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Update file using `ArrayBuffer` from base64 file data
  * ```js
  * import {decode} from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  */
  async update(s, r, i) {
    return this.uploadOrUpdate("PUT", s, r, i);
  }
  /**
  * Moves an existing file to a new path in the same bucket.
  *
  * @category File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
  * @param options The destination options.
  * @returns Promise with response containing success message or error
  *
  * @example Move file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .move('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully moved"
  *   },
  *   "error": null
  * }
  * ```
  */
  async move(s, r, i) {
    var a = this;
    return a.handleOperation(async () => await Et(a.fetch, `${a.url}/object/move`, {
      bucketId: a.bucketId,
      sourceKey: s,
      destinationKey: r,
      destinationBucket: i?.destinationBucket
    }, { headers: a.headers }));
  }
  /**
  * Copies an existing file to a new path in the same bucket.
  *
  * @category File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
  * @param options The destination options.
  * @returns Promise with response containing copied file path or error
  *
  * @example Copy file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .copy('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "avatars/private/avatar2.png"
  *   },
  *   "error": null
  * }
  * ```
  */
  async copy(s, r, i) {
    var a = this;
    return a.handleOperation(async () => ({ path: (await Et(a.fetch, `${a.url}/object/copy`, {
      bucketId: a.bucketId,
      sourceKey: s,
      destinationKey: r,
      destinationBucket: i?.destinationBucket
    }, { headers: a.headers })).Key }));
  }
  /**
  * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @returns Promise with response containing signed URL or error
  *
  * @example Create Signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Create a signed URL for an asset with transformations
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Create a signed URL which triggers the download of the asset
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     download: true,
  *   })
  * ```
  */
  async createSignedUrl(s, r, i) {
    var a = this;
    return a.handleOperation(async () => {
      let u = a._getFinalPath(s), d = await Et(a.fetch, `${a.url}/object/sign/${u}`, Q({ expiresIn: r }, i?.transform ? { transform: i.transform } : {}), { headers: a.headers });
      const h = i?.download ? `&download=${i.download === !0 ? "" : i.download}` : "";
      return { signedUrl: encodeURI(`${a.url}${d.signedURL}${h}`) };
    });
  }
  /**
  * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category File Buckets
  * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
  * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @returns Promise with response containing array of objects with signedUrl, path, and error or error
  *
  * @example Create Signed URLs
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "error": null,
  *       "path": "folder/avatar1.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *     },
  *     {
  *       "error": null,
  *       "path": "folder/avatar2.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  */
  async createSignedUrls(s, r, i) {
    var a = this;
    return a.handleOperation(async () => {
      const u = await Et(a.fetch, `${a.url}/object/sign/${a.bucketId}`, {
        expiresIn: r,
        paths: s
      }, { headers: a.headers }), d = i?.download ? `&download=${i.download === !0 ? "" : i.download}` : "";
      return u.map((h) => Q(Q({}, h), {}, { signedUrl: h.signedURL ? encodeURI(`${a.url}${h.signedURL}${d}`) : null }));
    });
  }
  /**
  * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
  *
  * @category File Buckets
  * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
  * @param options.transform Transform the asset before serving it to the client.
  * @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
  * @returns BlobDownloadBuilder instance for downloading the file
  *
  * @example Download file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": <BLOB>,
  *   "error": null
  * }
  * ```
  *
  * @example Download file with transformations
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *       quality: 80
  *     }
  *   })
  * ```
  *
  * @example Download with cache control (useful in Edge Functions)
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { cache: 'no-store' })
  * ```
  *
  * @example Download with abort signal
  * ```js
  * const controller = new AbortController()
  * setTimeout(() => controller.abort(), 5000)
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { signal: controller.signal })
  * ```
  */
  download(s, r, i) {
    const a = typeof r?.transform < "u" ? "render/image/authenticated" : "object", u = this.transformOptsToQueryString(r?.transform || {}), d = u ? `?${u}` : "", h = this._getFinalPath(s), p = () => li(this.fetch, `${this.url}/${a}/${h}${d}`, {
      headers: this.headers,
      noResolveJson: !0
    }, i);
    return new qp(p, this.shouldThrowOnError);
  }
  /**
  * Retrieves the details of an existing file.
  *
  * @category File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing file metadata or error
  *
  * @example Get file info
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .info('folder/avatar1.png')
  * ```
  */
  async info(s) {
    var r = this;
    const i = r._getFinalPath(s);
    return r.handleOperation(async () => Ga(await li(r.fetch, `${r.url}/object/info/${i}`, { headers: r.headers })));
  }
  /**
  * Checks the existence of a file.
  *
  * @category File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing boolean indicating file existence or error
  *
  * @example Check file existence
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .exists('folder/avatar1.png')
  * ```
  */
  async exists(s) {
    var r = this;
    const i = r._getFinalPath(s);
    try {
      return await Wp(r.fetch, `${r.url}/object/${i}`, { headers: r.headers }), {
        data: !0,
        error: null
      };
    } catch (a) {
      if (r.shouldThrowOnError) throw a;
      if ($s(a) && a instanceof $d) {
        const u = a.originalError;
        if ([400, 404].includes(u?.status)) return {
          data: !1,
          error: a
        };
      }
      throw a;
    }
  }
  /**
  * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
  * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
  *
  * @category File Buckets
  * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
  * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @returns Object with public URL
  *
  * @example Returns the URL for an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
  *   }
  * }
  * ```
  *
  * @example Returns the URL for an asset in a public bucket with transformations
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Returns the URL which triggers the download of an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     download: true,
  *   })
  * ```
  */
  getPublicUrl(s, r) {
    const i = this._getFinalPath(s), a = [], u = r?.download ? `download=${r.download === !0 ? "" : r.download}` : "";
    u !== "" && a.push(u);
    const d = typeof r?.transform < "u" ? "render/image" : "object", h = this.transformOptsToQueryString(r?.transform || {});
    h !== "" && a.push(h);
    let p = a.join("&");
    return p !== "" && (p = `?${p}`), { data: { publicUrl: encodeURI(`${this.url}/${d}/public/${i}${p}`) } };
  }
  /**
  * Deletes files within the same bucket
  *
  * @category File Buckets
  * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
  * @returns Promise with response containing array of deleted file objects or error
  *
  * @example Delete file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .remove(['folder/avatar1.png'])
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [],
  *   "error": null
  * }
  * ```
  */
  async remove(s) {
    var r = this;
    return r.handleOperation(async () => await rl(r.fetch, `${r.url}/object/${r.bucketId}`, { prefixes: s }, { headers: r.headers }));
  }
  /**
  * Get file metadata
  * @param id the file id to retrieve metadata
  */
  /**
  * Update file metadata
  * @param id the file id to update metadata
  * @param meta the new file metadata
  */
  /**
  * Lists all the files and folders within a path of the bucket.
  *
  * @category File Buckets
  * @param path The folder path.
  * @param options Search options including limit (defaults to 100), offset, sortBy, and search
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing array of files or error
  *
  * @example List files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "avatar1.png",
  *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
  *       "updated_at": "2024-05-22T23:06:05.580Z",
  *       "created_at": "2024-05-22T23:04:34.443Z",
  *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
  *       "metadata": {
  *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
  *         "size": 32175,
  *         "mimetype": "image/png",
  *         "cacheControl": "max-age=3600",
  *         "lastModified": "2024-05-22T23:06:05.574Z",
  *         "contentLength": 32175,
  *         "httpStatusCode": 200
  *       }
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @example Search files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *     search: 'jon'
  *   })
  * ```
  */
  async list(s, r, i) {
    var a = this;
    return a.handleOperation(async () => {
      const u = Q(Q(Q({}, Hp), r), {}, { prefix: s || "" });
      return await Et(a.fetch, `${a.url}/object/list/${a.bucketId}`, u, { headers: a.headers }, i);
    });
  }
  /**
  * @experimental this method signature might change in the future
  *
  * @category File Buckets
  * @param options search options
  * @param parameters
  */
  async listV2(s, r) {
    var i = this;
    return i.handleOperation(async () => {
      const a = Q({}, s);
      return await Et(i.fetch, `${i.url}/object/list-v2/${i.bucketId}`, a, { headers: i.headers }, r);
    });
  }
  encodeMetadata(s) {
    return JSON.stringify(s);
  }
  toBase64(s) {
    return typeof Buffer < "u" ? Buffer.from(s).toString("base64") : btoa(s);
  }
  _getFinalPath(s) {
    return `${this.bucketId}/${s.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(s) {
    return s.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(s) {
    const r = [];
    return s.width && r.push(`width=${s.width}`), s.height && r.push(`height=${s.height}`), s.resize && r.push(`resize=${s.resize}`), s.format && r.push(`format=${s.format}`), s.quality && r.push(`quality=${s.quality}`), r.join("&");
  }
};
const Gp = "2.98.0", hi = { "X-Client-Info": `storage-js/${Gp}` };
var Jp = class extends pn {
  constructor(s, r = {}, i, a) {
    const u = new URL(s);
    a?.useNewHostname && /supabase\.(co|in|red)$/.test(u.hostname) && !u.hostname.includes("storage.supabase.") && (u.hostname = u.hostname.replace("supabase.", "storage.supabase."));
    const d = u.href.replace(/\/$/, ""), h = Q(Q({}, hi), r);
    super(d, h, i, "storage");
  }
  /**
  * Retrieves the details of all Storage buckets within an existing project.
  *
  * @category File Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of buckets or error
  *
  * @example List buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets()
  * ```
  *
  * @example List buckets with options
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc',
  *     search: 'prod'
  *   })
  * ```
  */
  async listBuckets(s) {
    var r = this;
    return r.handleOperation(async () => {
      const i = r.listBucketOptionsToQueryString(s);
      return await li(r.fetch, `${r.url}/bucket${i}`, { headers: r.headers });
    });
  }
  /**
  * Retrieves the details of an existing Storage bucket.
  *
  * @category File Buckets
  * @param id The unique identifier of the bucket you would like to retrieve.
  * @returns Promise with response containing bucket details or error
  *
  * @example Get bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .getBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "id": "avatars",
  *     "name": "avatars",
  *     "owner": "",
  *     "public": false,
  *     "file_size_limit": 1024,
  *     "allowed_mime_types": [
  *       "image/png"
  *     ],
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  */
  async getBucket(s) {
    var r = this;
    return r.handleOperation(async () => await li(r.fetch, `${r.url}/bucket/${s}`, { headers: r.headers }));
  }
  /**
  * Creates a new Storage bucket
  *
  * @category File Buckets
  * @param id A unique identifier for the bucket you are creating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
  *   - default bucket type is `STANDARD`
  * @returns Promise with response containing newly created bucket name or error
  *
  * @example Create bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .createBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "avatars"
  *   },
  *   "error": null
  * }
  * ```
  */
  async createBucket(s, r = { public: !1 }) {
    var i = this;
    return i.handleOperation(async () => await Et(i.fetch, `${i.url}/bucket`, {
      id: s,
      name: s,
      type: r.type,
      public: r.public,
      file_size_limit: r.fileSizeLimit,
      allowed_mime_types: r.allowedMimeTypes
    }, { headers: i.headers }));
  }
  /**
  * Updates a Storage bucket
  *
  * @category File Buckets
  * @param id A unique identifier for the bucket you are updating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @returns Promise with response containing success message or error
  *
  * @example Update bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .updateBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully updated"
  *   },
  *   "error": null
  * }
  * ```
  */
  async updateBucket(s, r) {
    var i = this;
    return i.handleOperation(async () => await Ja(i.fetch, `${i.url}/bucket/${s}`, {
      id: s,
      name: s,
      public: r.public,
      file_size_limit: r.fileSizeLimit,
      allowed_mime_types: r.allowedMimeTypes
    }, { headers: i.headers }));
  }
  /**
  * Removes all objects inside a single bucket.
  *
  * @category File Buckets
  * @param id The unique identifier of the bucket you would like to empty.
  * @returns Promise with success message or error
  *
  * @example Empty bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .emptyBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully emptied"
  *   },
  *   "error": null
  * }
  * ```
  */
  async emptyBucket(s) {
    var r = this;
    return r.handleOperation(async () => await Et(r.fetch, `${r.url}/bucket/${s}/empty`, {}, { headers: r.headers }));
  }
  /**
  * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
  * You must first `empty()` the bucket.
  *
  * @category File Buckets
  * @param id The unique identifier of the bucket you would like to delete.
  * @returns Promise with success message or error
  *
  * @example Delete bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .deleteBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  */
  async deleteBucket(s) {
    var r = this;
    return r.handleOperation(async () => await rl(r.fetch, `${r.url}/bucket/${s}`, {}, { headers: r.headers }));
  }
  listBucketOptionsToQueryString(s) {
    const r = {};
    return s && ("limit" in s && (r.limit = String(s.limit)), "offset" in s && (r.offset = String(s.offset)), s.search && (r.search = s.search), s.sortColumn && (r.sortColumn = s.sortColumn), s.sortOrder && (r.sortOrder = s.sortOrder)), Object.keys(r).length > 0 ? "?" + new URLSearchParams(r).toString() : "";
  }
}, Qp = class extends pn {
  /**
  * @alpha
  *
  * Creates a new StorageAnalyticsClient instance
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param url - The base URL for the storage API
  * @param headers - HTTP headers to include in requests
  * @param fetch - Optional custom fetch implementation
  *
  * @example
  * ```typescript
  * const client = new StorageAnalyticsClient(url, headers)
  * ```
  */
  constructor(s, r = {}, i) {
    const a = s.replace(/\/$/, ""), u = Q(Q({}, hi), r);
    super(a, u, i, "storage");
  }
  /**
  * @alpha
  *
  * Creates a new analytics bucket using Iceberg tables
  * Analytics buckets are optimized for analytical queries and data processing
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param name A unique name for the bucket you are creating
  * @returns Promise with response containing newly created analytics bucket or error
  *
  * @example Create analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "analytics-data",
  *     "type": "ANALYTICS",
  *     "format": "iceberg",
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  */
  async createBucket(s) {
    var r = this;
    return r.handleOperation(async () => await Et(r.fetch, `${r.url}/bucket`, { name: s }, { headers: r.headers }));
  }
  /**
  * @alpha
  *
  * Retrieves the details of all Analytics Storage buckets within an existing project
  * Only returns buckets of type 'ANALYTICS'
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of analytics buckets or error
  *
  * @example List analytics buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "analytics-data",
  *       "type": "ANALYTICS",
  *       "format": "iceberg",
  *       "created_at": "2024-05-22T22:26:05.100Z",
  *       "updated_at": "2024-05-22T22:26:05.100Z"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  */
  async listBuckets(s) {
    var r = this;
    return r.handleOperation(async () => {
      const i = new URLSearchParams();
      s?.limit !== void 0 && i.set("limit", s.limit.toString()), s?.offset !== void 0 && i.set("offset", s.offset.toString()), s?.sortColumn && i.set("sortColumn", s.sortColumn), s?.sortOrder && i.set("sortOrder", s.sortOrder), s?.search && i.set("search", s.search);
      const a = i.toString(), u = a ? `${r.url}/bucket?${a}` : `${r.url}/bucket`;
      return await li(r.fetch, u, { headers: r.headers });
    });
  }
  /**
  * @alpha
  *
  * Deletes an existing analytics bucket
  * A bucket can't be deleted with existing objects inside it
  * You must first empty the bucket before deletion
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param bucketName The unique identifier of the bucket you would like to delete
  * @returns Promise with response containing success message or error
  *
  * @example Delete analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .deleteBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  */
  async deleteBucket(s) {
    var r = this;
    return r.handleOperation(async () => await rl(r.fetch, `${r.url}/bucket/${s}`, {}, { headers: r.headers }));
  }
  /**
  * @alpha
  *
  * Get an Iceberg REST Catalog client configured for a specific analytics bucket
  * Use this to perform advanced table and namespace operations within the bucket
  * The returned client provides full access to the Apache Iceberg REST Catalog API
  * with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @param bucketName - The name of the analytics bucket (warehouse) to connect to
  * @returns The wrapped Iceberg catalog client
  * @throws {StorageError} If the bucket name is invalid
  *
  * @example Get catalog and create table
  * ```js
  * // First, create an analytics bucket
  * const { data: bucket, error: bucketError } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  *
  * // Get the Iceberg catalog for that bucket
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Create a namespace
  * const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
  *
  * // Create a table with schema
  * const { data: tableMetadata, error: tableError } = await catalog.createTable(
  *   { namespace: ['default'] },
  *   {
  *     name: 'events',
  *     schema: {
  *       type: 'struct',
  *       fields: [
  *         { id: 1, name: 'id', type: 'long', required: true },
  *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
  *         { id: 3, name: 'user_id', type: 'string', required: false }
  *       ],
  *       'schema-id': 0,
  *       'identifier-field-ids': [1]
  *     },
  *     'partition-spec': {
  *       'spec-id': 0,
  *       fields: []
  *     },
  *     'write-order': {
  *       'order-id': 0,
  *       fields: []
  *     },
  *     properties: {
  *       'write.format.default': 'parquet'
  *     }
  *   }
  * )
  * ```
  *
  * @example List tables in namespace
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all tables in the default namespace
  * const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
  * if (listError) {
  *   if (listError.isNotFound()) {
  *     console.log('Namespace not found')
  *   }
  *   return
  * }
  * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
  * ```
  *
  * @example Working with namespaces
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all namespaces
  * const { data: namespaces } = await catalog.listNamespaces()
  *
  * // Create namespace with properties
  * await catalog.createNamespace(
  *   { namespace: ['production'] },
  *   { properties: { owner: 'data-team', env: 'prod' } }
  * )
  * ```
  *
  * @example Cleanup operations
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Drop table with purge option (removes all data)
  * const { error: dropError } = await catalog.dropTable(
  *   { namespace: ['default'], name: 'events' },
  *   { purge: true }
  * )
  *
  * if (dropError?.isNotFound()) {
  *   console.log('Table does not exist')
  * }
  *
  * // Drop namespace (must be empty)
  * await catalog.dropNamespace({ namespace: ['default'] })
  * ```
  *
  * @remarks
  * This method provides a bridge between Supabase's bucket management and the standard
  * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
  * All authentication and configuration is handled automatically using your Supabase credentials.
  *
  * **Error Handling**: Invalid bucket names throw immediately. All catalog
  * operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
  * Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
  * Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
  *
  * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
  * deletes all table data. Without it, the table is marked as deleted but data remains.
  *
  * **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
  * For complete API documentation and advanced usage, refer to the
  * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
  */
  from(s) {
    var r = this;
    if (!$p(s)) throw new Ls("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const i = new jp({
      baseUrl: this.url,
      catalogName: s,
      auth: {
        type: "custom",
        getHeaders: async () => r.headers
      },
      fetch: this.fetch
    }), a = this.shouldThrowOnError;
    return new Proxy(i, { get(u, d) {
      const h = u[d];
      return typeof h != "function" ? h : async (...p) => {
        try {
          return {
            data: await h.apply(u, p),
            error: null
          };
        } catch (g) {
          if (a) throw g;
          return {
            data: null,
            error: g
          };
        }
      };
    } });
  }
}, Yp = class extends pn {
  /** Creates a new VectorIndexApi instance */
  constructor(s, r = {}, i) {
    const a = s.replace(/\/$/, ""), u = Q(Q({}, hi), {}, { "Content-Type": "application/json" }, r);
    super(a, u, i, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(s) {
    var r = this;
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/CreateIndex`, s, { headers: r.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(s, r) {
    var i = this;
    return i.handleOperation(async () => await at.post(i.fetch, `${i.url}/GetIndex`, {
      vectorBucketName: s,
      indexName: r
    }, { headers: i.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(s) {
    var r = this;
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/ListIndexes`, s, { headers: r.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(s, r) {
    var i = this;
    return i.handleOperation(async () => await at.post(i.fetch, `${i.url}/DeleteIndex`, {
      vectorBucketName: s,
      indexName: r
    }, { headers: i.headers }) || {});
  }
}, Xp = class extends pn {
  /** Creates a new VectorDataApi instance */
  constructor(s, r = {}, i) {
    const a = s.replace(/\/$/, ""), u = Q(Q({}, hi), {}, { "Content-Type": "application/json" }, r);
    super(a, u, i, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(s) {
    var r = this;
    if (s.vectors.length < 1 || s.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/PutVectors`, s, { headers: r.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(s) {
    var r = this;
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/GetVectors`, s, { headers: r.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(s) {
    var r = this;
    if (s.segmentCount !== void 0) {
      if (s.segmentCount < 1 || s.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (s.segmentIndex !== void 0 && (s.segmentIndex < 0 || s.segmentIndex >= s.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${s.segmentCount - 1}`);
    }
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/ListVectors`, s, { headers: r.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(s) {
    var r = this;
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/QueryVectors`, s, { headers: r.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(s) {
    var r = this;
    if (s.keys.length < 1 || s.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/DeleteVectors`, s, { headers: r.headers }) || {});
  }
}, Zp = class extends pn {
  /** Creates a new VectorBucketApi instance */
  constructor(s, r = {}, i) {
    const a = s.replace(/\/$/, ""), u = Q(Q({}, hi), {}, { "Content-Type": "application/json" }, r);
    super(a, u, i, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(s) {
    var r = this;
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/CreateVectorBucket`, { vectorBucketName: s }, { headers: r.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(s) {
    var r = this;
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/GetVectorBucket`, { vectorBucketName: s }, { headers: r.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(s = {}) {
    var r = this;
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/ListVectorBuckets`, s, { headers: r.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(s) {
    var r = this;
    return r.handleOperation(async () => await at.post(r.fetch, `${r.url}/DeleteVectorBucket`, { vectorBucketName: s }, { headers: r.headers }) || {});
  }
}, eg = class extends Zp {
  /**
  * @alpha
  *
  * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param url - Base URL of the Storage Vectors REST API.
  * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
  * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
  *
  * @example
  * ```typescript
  * const client = new StorageVectorsClient(url, options)
  * ```
  */
  constructor(s, r = {}) {
    super(s, r.headers || {}, r.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific vector bucket
  * Returns a scoped client for index and vector operations within the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Bucket-scoped client with index and vector operations
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  from(s) {
    return new tg(this.url, this.headers, s, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector bucket
  * Vector buckets are containers for vector indexes and their data
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Unique name for the vector bucket
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .createBucket('embeddings-prod')
  * ```
  */
  async createBucket(s) {
    var r = () => super.createBucket, i = this;
    return r().call(i, s);
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific vector bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Promise with bucket metadata or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .getBucket('embeddings-prod')
  *
  * console.log('Bucket created:', data?.vectorBucket.creationTime)
  * ```
  */
  async getBucket(s) {
    var r = () => super.getBucket, i = this;
    return r().call(i, s);
  }
  /**
  *
  * @alpha
  *
  * Lists all vector buckets with optional filtering and pagination
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Optional filters (prefix, maxResults, nextToken)
  * @returns Promise with list of buckets or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .listBuckets({ prefix: 'embeddings-' })
  *
  * data?.vectorBuckets.forEach(bucket => {
  *   console.log(bucket.vectorBucketName)
  * })
  * ```
  */
  async listBuckets(s = {}) {
    var r = () => super.listBuckets, i = this;
    return r().call(i, s);
  }
  /**
  *
  * @alpha
  *
  * Deletes a vector bucket (bucket must be empty)
  * All indexes must be deleted before deleting the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param vectorBucketName - Name of the vector bucket to delete
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .deleteBucket('embeddings-old')
  * ```
  */
  async deleteBucket(s) {
    var r = () => super.deleteBucket, i = this;
    return r().call(i, s);
  }
}, tg = class extends Yp {
  /**
  * @alpha
  *
  * Creates a helper that automatically scopes all index operations to the provided bucket.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  constructor(s, r, i, a) {
    super(s, r, a), this.vectorBucketName = i;
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Index configuration (vectorBucketName is automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.createIndex({
  *   indexName: 'documents-openai',
  *   dataType: 'float32',
  *   dimension: 1536,
  *   distanceMetric: 'cosine',
  *   metadataConfiguration: {
  *     nonFilterableMetadataKeys: ['raw_text']
  *   }
  * })
  * ```
  */
  async createIndex(s) {
    var r = () => super.createIndex, i = this;
    return r().call(i, Q(Q({}, s), {}, { vectorBucketName: i.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Lists indexes in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Listing options (vectorBucketName is automatically set)
  * @returns Promise with response containing indexes array and pagination token or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
  * ```
  */
  async listIndexes(s = {}) {
    var r = () => super.listIndexes, i = this;
    return r().call(i, Q(Q({}, s), {}, { vectorBucketName: i.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param indexName - Name of the index to retrieve
  * @returns Promise with index metadata or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.getIndex('documents-openai')
  * console.log('Dimension:', data?.index.dimension)
  * ```
  */
  async getIndex(s) {
    var r = () => super.getIndex, i = this;
    return r().call(i, i.vectorBucketName, s);
  }
  /**
  *
  * @alpha
  *
  * Deletes an index from this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param indexName - Name of the index to delete
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.deleteIndex('old-index')
  * ```
  */
  async deleteIndex(s) {
    var r = () => super.deleteIndex, i = this;
    return r().call(i, i.vectorBucketName, s);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific index within this bucket
  * Returns a scoped client for vector data operations
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param indexName - Name of the index
  * @returns Index-scoped client with vector data operations
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  *
  * // Insert vectors
  * await index.putVectors({
  *   vectors: [
  *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
  *   ]
  * })
  *
  * // Query similar vectors
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [...] },
  *   topK: 5
  * })
  * ```
  */
  index(s) {
    return new rg(this.url, this.headers, this.vectorBucketName, s, this.fetch);
  }
}, rg = class extends Xp {
  /**
  *
  * @alpha
  *
  * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * ```
  */
  constructor(s, r, i, a, u) {
    super(s, r, u), this.vectorBucketName = i, this.indexName = a;
  }
  /**
  *
  * @alpha
  *
  * Inserts or updates vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Vector insertion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.putVectors({
  *   vectors: [
  *     {
  *       key: 'doc-1',
  *       data: { float32: [0.1, 0.2, ...] },
  *       metadata: { title: 'Introduction', page: 1 }
  *     }
  *   ]
  * })
  * ```
  */
  async putVectors(s) {
    var r = () => super.putVectors, i = this;
    return r().call(i, Q(Q({}, s), {}, {
      vectorBucketName: i.vectorBucketName,
      indexName: i.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Vector retrieval options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.getVectors({
  *   keys: ['doc-1', 'doc-2'],
  *   returnMetadata: true
  * })
  * ```
  */
  async getVectors(s) {
    var r = () => super.getVectors, i = this;
    return r().call(i, Q(Q({}, s), {}, {
      vectorBucketName: i.vectorBucketName,
      indexName: i.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Lists vectors in this index with pagination
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Listing options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array and pagination token or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.listVectors({
  *   maxResults: 500,
  *   returnMetadata: true
  * })
  * ```
  */
  async listVectors(s = {}) {
    var r = () => super.listVectors, i = this;
    return r().call(i, Q(Q({}, s), {}, {
      vectorBucketName: i.vectorBucketName,
      indexName: i.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Queries for similar vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Query options (bucket and index names automatically set)
  * @returns Promise with response containing matches array of similar vectors ordered by distance or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [0.1, 0.2, ...] },
  *   topK: 5,
  *   filter: { category: 'technical' },
  *   returnDistance: true,
  *   returnMetadata: true
  * })
  * ```
  */
  async queryVectors(s) {
    var r = () => super.queryVectors, i = this;
    return r().call(i, Q(Q({}, s), {}, {
      vectorBucketName: i.vectorBucketName,
      indexName: i.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Deletes vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @param options - Deletion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.deleteVectors({
  *   keys: ['doc-1', 'doc-2', 'doc-3']
  * })
  * ```
  */
  async deleteVectors(s) {
    var r = () => super.deleteVectors, i = this;
    return r().call(i, Q(Q({}, s), {}, {
      vectorBucketName: i.vectorBucketName,
      indexName: i.indexName
    }));
  }
}, ng = class extends Jp {
  /**
  * Creates a client for Storage buckets, files, analytics, and vectors.
  *
  * @category File Buckets
  * @example
  * ```ts
  * import { StorageClient } from '@supabase/storage-js'
  *
  * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
  *   apikey: 'public-anon-key',
  * })
  * const avatars = storage.from('avatars')
  * ```
  */
  constructor(s, r = {}, i, a) {
    super(s, r, i, a);
  }
  /**
  * Perform file operation in a bucket.
  *
  * @category File Buckets
  * @param id The bucket id to operate on.
  *
  * @example
  * ```typescript
  * const avatars = supabase.storage.from('avatars')
  * ```
  */
  from(s) {
    return new Kp(this.url, this.headers, s, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access vector storage operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Vector Buckets
  * @returns A StorageVectorsClient instance configured with the current storage settings.
  */
  get vectors() {
    return new eg(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
  *
  * @alpha
  *
  * Access analytics storage operations using Iceberg tables.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Analytics Buckets
  * @returns A StorageAnalyticsClient instance configured with the current storage settings.
  */
  get analytics() {
    return new Qp(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const zd = "2.98.0", cn = 30 * 1e3, Qa = 3, Da = Qa * cn, ig = "http://localhost:9999", sg = "supabase.auth.token", og = { "X-Client-Info": `gotrue-js/${zd}` }, Ya = "X-Supabase-Api-Version", Bd = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, ag = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, lg = 600 * 1e3;
class ui extends Error {
  constructor(r, i, a) {
    super(r), this.__isAuthError = !0, this.name = "AuthError", this.status = i, this.code = a;
  }
}
function H(s) {
  return typeof s == "object" && s !== null && "__isAuthError" in s;
}
class ug extends ui {
  constructor(r, i, a) {
    super(r, i, a), this.name = "AuthApiError", this.status = i, this.code = a;
  }
}
function cg(s) {
  return H(s) && s.name === "AuthApiError";
}
class xr extends ui {
  constructor(r, i) {
    super(r), this.name = "AuthUnknownError", this.originalError = i;
  }
}
class Vt extends ui {
  constructor(r, i, a, u) {
    super(r, a, u), this.name = i, this.status = a;
  }
}
class ot extends Vt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function za(s) {
  return H(s) && s.name === "AuthSessionMissingError";
}
class sn extends Vt {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class Os extends Vt {
  constructor(r) {
    super(r, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Ps extends Vt {
  constructor(r, i = null) {
    super(r, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function dg(s) {
  return H(s) && s.name === "AuthImplicitGrantRedirectError";
}
class gd extends Vt {
  constructor(r, i = null) {
    super(r, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class hg extends Vt {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class Xa extends Vt {
  constructor(r, i) {
    super(r, "AuthRetryableFetchError", i, void 0);
  }
}
function Ba(s) {
  return H(s) && s.name === "AuthRetryableFetchError";
}
class md extends Vt {
  constructor(r, i, a) {
    super(r, "AuthWeakPasswordError", i, "weak_password"), this.reasons = a;
  }
}
class Za extends Vt {
  constructor(r) {
    super(r, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const As = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), vd = ` 	
\r=`.split(""), fg = (() => {
  const s = new Array(128);
  for (let r = 0; r < s.length; r += 1)
    s[r] = -1;
  for (let r = 0; r < vd.length; r += 1)
    s[vd[r].charCodeAt(0)] = -2;
  for (let r = 0; r < As.length; r += 1)
    s[As[r].charCodeAt(0)] = r;
  return s;
})();
function yd(s, r, i) {
  if (s !== null)
    for (r.queue = r.queue << 8 | s, r.queuedBits += 8; r.queuedBits >= 6; ) {
      const a = r.queue >> r.queuedBits - 6 & 63;
      i(As[a]), r.queuedBits -= 6;
    }
  else if (r.queuedBits > 0)
    for (r.queue = r.queue << 6 - r.queuedBits, r.queuedBits = 6; r.queuedBits >= 6; ) {
      const a = r.queue >> r.queuedBits - 6 & 63;
      i(As[a]), r.queuedBits -= 6;
    }
}
function Md(s, r, i) {
  const a = fg[s];
  if (a > -1)
    for (r.queue = r.queue << 6 | a, r.queuedBits += 6; r.queuedBits >= 8; )
      i(r.queue >> r.queuedBits - 8 & 255), r.queuedBits -= 8;
  else {
    if (a === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`);
  }
}
function wd(s) {
  const r = [], i = (h) => {
    r.push(String.fromCodePoint(h));
  }, a = {
    utf8seq: 0,
    codepoint: 0
  }, u = { queue: 0, queuedBits: 0 }, d = (h) => {
    mg(h, a, i);
  };
  for (let h = 0; h < s.length; h += 1)
    Md(s.charCodeAt(h), u, d);
  return r.join("");
}
function pg(s, r) {
  if (s <= 127) {
    r(s);
    return;
  } else if (s <= 2047) {
    r(192 | s >> 6), r(128 | s & 63);
    return;
  } else if (s <= 65535) {
    r(224 | s >> 12), r(128 | s >> 6 & 63), r(128 | s & 63);
    return;
  } else if (s <= 1114111) {
    r(240 | s >> 18), r(128 | s >> 12 & 63), r(128 | s >> 6 & 63), r(128 | s & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`);
}
function gg(s, r) {
  for (let i = 0; i < s.length; i += 1) {
    let a = s.charCodeAt(i);
    if (a > 55295 && a <= 56319) {
      const u = (a - 55296) * 1024 & 65535;
      a = (s.charCodeAt(i + 1) - 56320 & 65535 | u) + 65536, i += 1;
    }
    pg(a, r);
  }
}
function mg(s, r, i) {
  if (r.utf8seq === 0) {
    if (s <= 127) {
      i(s);
      return;
    }
    for (let a = 1; a < 6; a += 1)
      if ((s >> 7 - a & 1) === 0) {
        r.utf8seq = a;
        break;
      }
    if (r.utf8seq === 2)
      r.codepoint = s & 31;
    else if (r.utf8seq === 3)
      r.codepoint = s & 15;
    else if (r.utf8seq === 4)
      r.codepoint = s & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    r.utf8seq -= 1;
  } else if (r.utf8seq > 0) {
    if (s <= 127)
      throw new Error("Invalid UTF-8 sequence");
    r.codepoint = r.codepoint << 6 | s & 63, r.utf8seq -= 1, r.utf8seq === 0 && i(r.codepoint);
  }
}
function fn(s) {
  const r = [], i = { queue: 0, queuedBits: 0 }, a = (u) => {
    r.push(u);
  };
  for (let u = 0; u < s.length; u += 1)
    Md(s.charCodeAt(u), i, a);
  return new Uint8Array(r);
}
function vg(s) {
  const r = [];
  return gg(s, (i) => r.push(i)), new Uint8Array(r);
}
function Ar(s) {
  const r = [], i = { queue: 0, queuedBits: 0 }, a = (u) => {
    r.push(u);
  };
  return s.forEach((u) => yd(u, i, a)), yd(null, i, a), r.join("");
}
function yg(s) {
  return Math.round(Date.now() / 1e3) + s;
}
function wg() {
  return Symbol("auth-callback");
}
const ze = () => typeof window < "u" && typeof document < "u", Cr = {
  tested: !1,
  writable: !1
}, Fd = () => {
  if (!ze())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Cr.tested)
    return Cr.writable;
  const s = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(s, s), globalThis.localStorage.removeItem(s), Cr.tested = !0, Cr.writable = !0;
  } catch {
    Cr.tested = !0, Cr.writable = !1;
  }
  return Cr.writable;
};
function _g(s) {
  const r = {}, i = new URL(s);
  if (i.hash && i.hash[0] === "#")
    try {
      new URLSearchParams(i.hash.substring(1)).forEach((u, d) => {
        r[d] = u;
      });
    } catch {
    }
  return i.searchParams.forEach((a, u) => {
    r[u] = a;
  }), r;
}
const Wd = (s) => s ? (...r) => s(...r) : (...r) => fetch(...r), kg = (s) => typeof s == "object" && s !== null && "status" in s && "ok" in s && "json" in s && typeof s.json == "function", dn = async (s, r, i) => {
  await s.setItem(r, JSON.stringify(i));
}, Rr = async (s, r) => {
  const i = await s.getItem(r);
  if (!i)
    return null;
  try {
    return JSON.parse(i);
  } catch {
    return i;
  }
}, De = async (s, r) => {
  await s.removeItem(r);
};
class Us {
  constructor() {
    this.promise = new Us.promiseConstructor((r, i) => {
      this.resolve = r, this.reject = i;
    });
  }
}
Us.promiseConstructor = Promise;
function xs(s) {
  const r = s.split(".");
  if (r.length !== 3)
    throw new Za("Invalid JWT structure");
  for (let a = 0; a < r.length; a++)
    if (!ag.test(r[a]))
      throw new Za("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(wd(r[0])),
    payload: JSON.parse(wd(r[1])),
    signature: fn(r[2]),
    raw: {
      header: r[0],
      payload: r[1]
    }
  };
}
async function Sg(s) {
  return await new Promise((r) => {
    setTimeout(() => r(null), s);
  });
}
function Eg(s, r) {
  return new Promise((a, u) => {
    (async () => {
      for (let d = 0; d < 1 / 0; d++)
        try {
          const h = await s(d);
          if (!r(d, null, h)) {
            a(h);
            return;
          }
        } catch (h) {
          if (!r(d, h)) {
            u(h);
            return;
          }
        }
    })();
  });
}
function Tg(s) {
  return ("0" + s.toString(16)).substr(-2);
}
function bg() {
  const r = new Uint32Array(56);
  if (typeof crypto > "u") {
    const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", a = i.length;
    let u = "";
    for (let d = 0; d < 56; d++)
      u += i.charAt(Math.floor(Math.random() * a));
    return u;
  }
  return crypto.getRandomValues(r), Array.from(r, Tg).join("");
}
async function Cg(s) {
  const i = new TextEncoder().encode(s), a = await crypto.subtle.digest("SHA-256", i), u = new Uint8Array(a);
  return Array.from(u).map((d) => String.fromCharCode(d)).join("");
}
async function Rg(s) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), s;
  const i = await Cg(s);
  return btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function on(s, r, i = !1) {
  const a = bg();
  let u = a;
  i && (u += "/PASSWORD_RECOVERY"), await dn(s, `${r}-code-verifier`, u);
  const d = await Rg(a);
  return [d, a === d ? "plain" : "s256"];
}
const Og = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Pg(s) {
  const r = s.headers.get(Ya);
  if (!r || !r.match(Og))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${r}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function xg(s) {
  if (!s)
    throw new Error("Missing exp claim");
  const r = Math.floor(Date.now() / 1e3);
  if (s <= r)
    throw new Error("JWT has expired");
}
function Ag(s) {
  switch (s) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const Ig = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function an(s) {
  if (!Ig.test(s))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function Ma() {
  const s = {};
  return new Proxy(s, {
    get: (r, i) => {
      if (i === "__isUserNotAvailableProxy")
        return !0;
      if (typeof i == "symbol") {
        const a = i.toString();
        if (a === "Symbol(Symbol.toPrimitive)" || a === "Symbol(Symbol.toStringTag)" || a === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${i}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (r, i) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (r, i) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function jg(s, r) {
  return new Proxy(s, {
    get: (i, a, u) => {
      if (a === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof a == "symbol") {
        const d = a.toString();
        if (d === "Symbol(Symbol.toPrimitive)" || d === "Symbol(Symbol.toStringTag)" || d === "Symbol(util.inspect.custom)" || d === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(i, a, u);
      }
      return !r.value && typeof a == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), r.value = !0), Reflect.get(i, a, u);
    }
  });
}
function _d(s) {
  return JSON.parse(JSON.stringify(s));
}
const Or = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), Ng = [502, 503, 504];
async function kd(s) {
  var r;
  if (!kg(s))
    throw new Xa(Or(s), 0);
  if (Ng.includes(s.status))
    throw new Xa(Or(s), s.status);
  let i;
  try {
    i = await s.json();
  } catch (d) {
    throw new xr(Or(d), d);
  }
  let a;
  const u = Pg(s);
  if (u && u.getTime() >= Bd["2024-01-01"].timestamp && typeof i == "object" && i && typeof i.code == "string" ? a = i.code : typeof i == "object" && i && typeof i.error_code == "string" && (a = i.error_code), a) {
    if (a === "weak_password")
      throw new md(Or(i), s.status, ((r = i.weak_password) === null || r === void 0 ? void 0 : r.reasons) || []);
    if (a === "session_not_found")
      throw new ot();
  } else if (typeof i == "object" && i && typeof i.weak_password == "object" && i.weak_password && Array.isArray(i.weak_password.reasons) && i.weak_password.reasons.length && i.weak_password.reasons.reduce((d, h) => d && typeof h == "string", !0))
    throw new md(Or(i), s.status, i.weak_password.reasons);
  throw new ug(Or(i), s.status || 500, a);
}
const Lg = (s, r, i, a) => {
  const u = { method: s, headers: r?.headers || {} };
  return s === "GET" ? u : (u.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, r?.headers), u.body = JSON.stringify(a), Object.assign(Object.assign({}, u), i));
};
async function Y(s, r, i, a) {
  var u;
  const d = Object.assign({}, a?.headers);
  d[Ya] || (d[Ya] = Bd["2024-01-01"].name), a?.jwt && (d.Authorization = `Bearer ${a.jwt}`);
  const h = (u = a?.query) !== null && u !== void 0 ? u : {};
  a?.redirectTo && (h.redirect_to = a.redirectTo);
  const p = Object.keys(h).length ? "?" + new URLSearchParams(h).toString() : "", g = await $g(s, r, i + p, {
    headers: d,
    noResolveJson: a?.noResolveJson
  }, {}, a?.body);
  return a?.xform ? a?.xform(g) : { data: Object.assign({}, g), error: null };
}
async function $g(s, r, i, a, u, d) {
  const h = Lg(r, a, u, d);
  let p;
  try {
    p = await s(i, Object.assign({}, h));
  } catch (g) {
    throw console.error(g), new Xa(Or(g), 0);
  }
  if (p.ok || await kd(p), a?.noResolveJson)
    return p;
  try {
    return await p.json();
  } catch (g) {
    await kd(g);
  }
}
function St(s) {
  var r;
  let i = null;
  zg(s) && (i = Object.assign({}, s), s.expires_at || (i.expires_at = yg(s.expires_in)));
  const a = (r = s.user) !== null && r !== void 0 ? r : s;
  return { data: { session: i, user: a }, error: null };
}
function Sd(s) {
  const r = St(s);
  return !r.error && s.weak_password && typeof s.weak_password == "object" && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.message && typeof s.weak_password.message == "string" && s.weak_password.reasons.reduce((i, a) => i && typeof a == "string", !0) && (r.data.weak_password = s.weak_password), r;
}
function dr(s) {
  var r;
  return { data: { user: (r = s.user) !== null && r !== void 0 ? r : s }, error: null };
}
function Ug(s) {
  return { data: s, error: null };
}
function Dg(s) {
  const { action_link: r, email_otp: i, hashed_token: a, redirect_to: u, verification_type: d } = s, h = Ns(s, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), p = {
    action_link: r,
    email_otp: i,
    hashed_token: a,
    redirect_to: u,
    verification_type: d
  }, g = Object.assign({}, h);
  return {
    data: {
      properties: p,
      user: g
    },
    error: null
  };
}
function Ed(s) {
  return s;
}
function zg(s) {
  return s.access_token && s.refresh_token && s.expires_in;
}
const Fa = ["global", "local", "others"];
class Bg {
  /**
   * Creates an admin API client that can be used to manage users and OAuth clients.
   *
   * @example
   * ```ts
   * import { GoTrueAdminApi } from '@supabase/auth-js'
   *
   * const admin = new GoTrueAdminApi({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}` },
   * })
   * ```
   */
  constructor({ url: r = "", headers: i = {}, fetch: a }) {
    this.url = r, this.headers = i, this.fetch = Wd(a), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(r, i = Fa[0]) {
    if (Fa.indexOf(i) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Fa.join(", ")}`);
    try {
      return await Y(this.fetch, "POST", `${this.url}/logout?scope=${i}`, {
        headers: this.headers,
        jwt: r,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (a) {
      if (H(a))
        return { data: null, error: a };
      throw a;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(r, i = {}) {
    try {
      return await Y(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: r, data: i.data },
        headers: this.headers,
        redirectTo: i.redirectTo,
        xform: dr
      });
    } catch (a) {
      if (H(a))
        return { data: { user: null }, error: a };
      throw a;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(r) {
    try {
      const { options: i } = r, a = Ns(r, ["options"]), u = Object.assign(Object.assign({}, a), i);
      return "newEmail" in a && (u.new_email = a?.newEmail, delete u.newEmail), await Y(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: u,
        headers: this.headers,
        xform: Dg,
        redirectTo: i?.redirectTo
      });
    } catch (i) {
      if (H(i))
        return {
          data: {
            properties: null,
            user: null
          },
          error: i
        };
      throw i;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(r) {
    try {
      return await Y(this.fetch, "POST", `${this.url}/admin/users`, {
        body: r,
        headers: this.headers,
        xform: dr
      });
    } catch (i) {
      if (H(i))
        return { data: { user: null }, error: i };
      throw i;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(r) {
    var i, a, u, d, h, p, g;
    try {
      const v = { nextPage: null, lastPage: 0, total: 0 }, w = await Y(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (a = (i = r?.page) === null || i === void 0 ? void 0 : i.toString()) !== null && a !== void 0 ? a : "",
          per_page: (d = (u = r?.perPage) === null || u === void 0 ? void 0 : u.toString()) !== null && d !== void 0 ? d : ""
        },
        xform: Ed
      });
      if (w.error)
        throw w.error;
      const R = await w.json(), b = (h = w.headers.get("x-total-count")) !== null && h !== void 0 ? h : 0, C = (g = (p = w.headers.get("link")) === null || p === void 0 ? void 0 : p.split(",")) !== null && g !== void 0 ? g : [];
      return C.length > 0 && (C.forEach((O) => {
        const P = parseInt(O.split(";")[0].split("=")[1].substring(0, 1)), j = JSON.parse(O.split(";")[1].split("=")[1]);
        v[`${j}Page`] = P;
      }), v.total = parseInt(b)), { data: Object.assign(Object.assign({}, R), v), error: null };
    } catch (v) {
      if (H(v))
        return { data: { users: [] }, error: v };
      throw v;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(r) {
    an(r);
    try {
      return await Y(this.fetch, "GET", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        xform: dr
      });
    } catch (i) {
      if (H(i))
        return { data: { user: null }, error: i };
      throw i;
    }
  }
  /**
   * Updates the user data. Changes are applied directly without confirmation flows.
   *
   * @param uid The user's unique identifier
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @remarks
   * **Important:** This is a server-side operation and does **not** trigger client-side
   * `onAuthStateChange` listeners. The admin API has no connection to client state.
   *
   * To sync changes to the client after calling this method:
   * 1. On the client, call `supabase.auth.refreshSession()` to fetch the updated user data
   * 2. This will trigger the `TOKEN_REFRESHED` event and notify all listeners
   *
   * @example
   * ```typescript
   * // Server-side (Edge Function)
   * const { data, error } = await supabase.auth.admin.updateUserById(
   *   userId,
   *   { user_metadata: { preferences: { theme: 'dark' } } }
   * )
   *
   * // Client-side (to sync the changes)
   * const { data, error } = await supabase.auth.refreshSession()
   * // onAuthStateChange listeners will now be notified with updated user
   * ```
   *
   * @see {@link GoTrueClient.refreshSession} for syncing admin changes to the client
   * @see {@link GoTrueClient.updateUser} for client-side user updates (triggers listeners automatically)
   */
  async updateUserById(r, i) {
    an(r);
    try {
      return await Y(this.fetch, "PUT", `${this.url}/admin/users/${r}`, {
        body: i,
        headers: this.headers,
        xform: dr
      });
    } catch (a) {
      if (H(a))
        return { data: { user: null }, error: a };
      throw a;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(r, i = !1) {
    an(r);
    try {
      return await Y(this.fetch, "DELETE", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        body: {
          should_soft_delete: i
        },
        xform: dr
      });
    } catch (a) {
      if (H(a))
        return { data: { user: null }, error: a };
      throw a;
    }
  }
  async _listFactors(r) {
    an(r.userId);
    try {
      const { data: i, error: a } = await Y(this.fetch, "GET", `${this.url}/admin/users/${r.userId}/factors`, {
        headers: this.headers,
        xform: (u) => ({ data: { factors: u }, error: null })
      });
      return { data: i, error: a };
    } catch (i) {
      if (H(i))
        return { data: null, error: i };
      throw i;
    }
  }
  async _deleteFactor(r) {
    an(r.userId), an(r.id);
    try {
      return { data: await Y(this.fetch, "DELETE", `${this.url}/admin/users/${r.userId}/factors/${r.id}`, {
        headers: this.headers
      }), error: null };
    } catch (i) {
      if (H(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(r) {
    var i, a, u, d, h, p, g;
    try {
      const v = { nextPage: null, lastPage: 0, total: 0 }, w = await Y(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (a = (i = r?.page) === null || i === void 0 ? void 0 : i.toString()) !== null && a !== void 0 ? a : "",
          per_page: (d = (u = r?.perPage) === null || u === void 0 ? void 0 : u.toString()) !== null && d !== void 0 ? d : ""
        },
        xform: Ed
      });
      if (w.error)
        throw w.error;
      const R = await w.json(), b = (h = w.headers.get("x-total-count")) !== null && h !== void 0 ? h : 0, C = (g = (p = w.headers.get("link")) === null || p === void 0 ? void 0 : p.split(",")) !== null && g !== void 0 ? g : [];
      return C.length > 0 && (C.forEach((O) => {
        const P = parseInt(O.split(";")[0].split("=")[1].substring(0, 1)), j = JSON.parse(O.split(";")[1].split("=")[1]);
        v[`${j}Page`] = P;
      }), v.total = parseInt(b)), { data: Object.assign(Object.assign({}, R), v), error: null };
    } catch (v) {
      if (H(v))
        return { data: { clients: [] }, error: v };
      throw v;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(r) {
    try {
      return await Y(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: r,
        headers: this.headers,
        xform: (i) => ({ data: i, error: null })
      });
    } catch (i) {
      if (H(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(r) {
    try {
      return await Y(this.fetch, "GET", `${this.url}/admin/oauth/clients/${r}`, {
        headers: this.headers,
        xform: (i) => ({ data: i, error: null })
      });
    } catch (i) {
      if (H(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(r, i) {
    try {
      return await Y(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${r}`, {
        body: i,
        headers: this.headers,
        xform: (a) => ({ data: a, error: null })
      });
    } catch (a) {
      if (H(a))
        return { data: null, error: a };
      throw a;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(r) {
    try {
      return await Y(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${r}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (i) {
      if (H(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(r) {
    try {
      return await Y(this.fetch, "POST", `${this.url}/admin/oauth/clients/${r}/regenerate_secret`, {
        headers: this.headers,
        xform: (i) => ({ data: i, error: null })
      });
    } catch (i) {
      if (H(i))
        return { data: null, error: i };
      throw i;
    }
  }
}
function Td(s = {}) {
  return {
    getItem: (r) => s[r] || null,
    setItem: (r, i) => {
      s[r] = i;
    },
    removeItem: (r) => {
      delete s[r];
    }
  };
}
const Ft = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Fd() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Vd extends Error {
  constructor(r) {
    super(r), this.isAcquireTimeout = !0;
  }
}
class Mg extends Vd {
}
async function Fg(s, r, i) {
  Ft.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", s, r);
  const a = new globalThis.AbortController();
  r > 0 && setTimeout(() => {
    a.abort(), Ft.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", s);
  }, r), await Promise.resolve();
  try {
    return await globalThis.navigator.locks.request(s, r === 0 ? {
      mode: "exclusive",
      ifAvailable: !0
    } : {
      mode: "exclusive",
      signal: a.signal
    }, async (u) => {
      if (u) {
        Ft.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", s, u.name);
        try {
          return await i();
        } finally {
          Ft.debug && console.log("@supabase/gotrue-js: navigatorLock: released", s, u.name);
        }
      } else {
        if (r === 0)
          throw Ft.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", s), new Mg(`Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`);
        if (Ft.debug)
          try {
            const d = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(d, null, "  "));
          } catch (d) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", d);
          }
        return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await i();
      }
    });
  } catch (u) {
    if (u?.name === "AbortError" && r > 0)
      return Ft.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", s), console.warn(`@supabase/gotrue-js: Lock "${s}" was not released within ${r}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(() => globalThis.navigator.locks.request(s, {
        mode: "exclusive",
        steal: !0
      }, async (d) => {
        if (d) {
          Ft.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", s, d.name);
          try {
            return await i();
          } finally {
            Ft.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", s, d.name);
          }
        } else
          return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await i();
      }));
    throw u;
  }
}
function Wg() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function qd(s) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(s))
    throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);
  return s.toLowerCase();
}
function Vg(s) {
  return parseInt(s, 16);
}
function qg(s) {
  const r = new TextEncoder().encode(s);
  return "0x" + Array.from(r, (a) => a.toString(16).padStart(2, "0")).join("");
}
function Hg(s) {
  var r;
  const { chainId: i, domain: a, expirationTime: u, issuedAt: d = /* @__PURE__ */ new Date(), nonce: h, notBefore: p, requestId: g, resources: v, scheme: w, uri: R, version: b } = s;
  {
    if (!Number.isInteger(i))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${i}`);
    if (!a)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (h && h.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${h}`);
    if (!R)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (b !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${b}`);
    if (!((r = s.statement) === null || r === void 0) && r.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`);
  }
  const C = qd(s.address), O = w ? `${w}://${a}` : a, P = s.statement ? `${s.statement}
` : "", j = `${O} wants you to sign in with your Ethereum account:
${C}

${P}`;
  let D = `URI: ${R}
Version: ${b}
Chain ID: ${i}${h ? `
Nonce: ${h}` : ""}
Issued At: ${d.toISOString()}`;
  if (u && (D += `
Expiration Time: ${u.toISOString()}`), p && (D += `
Not Before: ${p.toISOString()}`), g && (D += `
Request ID: ${g}`), v) {
    let B = `
Resources:`;
    for (const $ of v) {
      if (!$ || typeof $ != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${$}`);
      B += `
- ${$}`;
    }
    D += B;
  }
  return `${j}
${D}`;
}
class Oe extends Error {
  constructor({ message: r, code: i, cause: a, name: u }) {
    var d;
    super(r, { cause: a }), this.__isWebAuthnError = !0, this.name = (d = u ?? (a instanceof Error ? a.name : void 0)) !== null && d !== void 0 ? d : "Unknown Error", this.code = i;
  }
}
class Is extends Oe {
  constructor(r, i) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: i,
      message: r
    }), this.name = "WebAuthnUnknownError", this.originalError = i;
  }
}
function Kg({ error: s, options: r }) {
  var i, a, u;
  const { publicKey: d } = r;
  if (!d)
    throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (r.signal instanceof AbortSignal)
      return new Oe({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s
      });
  } else if (s.name === "ConstraintError") {
    if (((i = d.authenticatorSelection) === null || i === void 0 ? void 0 : i.requireResidentKey) === !0)
      return new Oe({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: s
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      r.mediation === "conditional" && ((a = d.authenticatorSelection) === null || a === void 0 ? void 0 : a.userVerification) === "required"
    )
      return new Oe({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: s
      });
    if (((u = d.authenticatorSelection) === null || u === void 0 ? void 0 : u.userVerification) === "required")
      return new Oe({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: s
      });
  } else {
    if (s.name === "InvalidStateError")
      return new Oe({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: s
      });
    if (s.name === "NotAllowedError")
      return new Oe({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s
      });
    if (s.name === "NotSupportedError")
      return d.pubKeyCredParams.filter((p) => p.type === "public-key").length === 0 ? new Oe({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: s
      }) : new Oe({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: s
      });
    if (s.name === "SecurityError") {
      const h = window.location.hostname;
      if (Hd(h)) {
        if (d.rp.id !== h)
          return new Oe({
            message: `The RP ID "${d.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s
          });
      } else return new Oe({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: s
      });
    } else if (s.name === "TypeError") {
      if (d.user.id.byteLength < 1 || d.user.id.byteLength > 64)
        return new Oe({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: s
        });
    } else if (s.name === "UnknownError")
      return new Oe({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s
      });
  }
  return new Oe({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s
  });
}
function Gg({ error: s, options: r }) {
  const { publicKey: i } = r;
  if (!i)
    throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (r.signal instanceof AbortSignal)
      return new Oe({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s
      });
  } else {
    if (s.name === "NotAllowedError")
      return new Oe({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s
      });
    if (s.name === "SecurityError") {
      const a = window.location.hostname;
      if (Hd(a)) {
        if (i.rpId !== a)
          return new Oe({
            message: `The RP ID "${i.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s
          });
      } else return new Oe({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: s
      });
    } else if (s.name === "UnknownError")
      return new Oe({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s
      });
  }
  return new Oe({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s
  });
}
class Jg {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const i = new Error("Cancelling existing WebAuthn API call for new one");
      i.name = "AbortError", this.controller.abort(i);
    }
    const r = new AbortController();
    return this.controller = r, r.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const r = new Error("Manually cancelling existing WebAuthn API call");
      r.name = "AbortError", this.controller.abort(r), this.controller = void 0;
    }
  }
}
const Qg = new Jg();
function Yg(s) {
  if (!s)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      s
    );
  const { challenge: r, user: i, excludeCredentials: a } = s, u = Ns(
    s,
    ["challenge", "user", "excludeCredentials"]
  ), d = fn(r).buffer, h = Object.assign(Object.assign({}, i), { id: fn(i.id).buffer }), p = Object.assign(Object.assign({}, u), {
    challenge: d,
    user: h
  });
  if (a && a.length > 0) {
    p.excludeCredentials = new Array(a.length);
    for (let g = 0; g < a.length; g++) {
      const v = a[g];
      p.excludeCredentials[g] = Object.assign(Object.assign({}, v), {
        id: fn(v.id).buffer,
        type: v.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: v.transports
      });
    }
  }
  return p;
}
function Xg(s) {
  if (!s)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(s);
  const { challenge: r, allowCredentials: i } = s, a = Ns(
    s,
    ["challenge", "allowCredentials"]
  ), u = fn(r).buffer, d = Object.assign(Object.assign({}, a), { challenge: u });
  if (i && i.length > 0) {
    d.allowCredentials = new Array(i.length);
    for (let h = 0; h < i.length; h++) {
      const p = i[h];
      d.allowCredentials[h] = Object.assign(Object.assign({}, p), {
        id: fn(p.id).buffer,
        type: p.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: p.transports
      });
    }
  }
  return d;
}
function Zg(s) {
  var r;
  if ("toJSON" in s && typeof s.toJSON == "function")
    return s.toJSON();
  const i = s;
  return {
    id: s.id,
    rawId: s.id,
    response: {
      attestationObject: Ar(new Uint8Array(s.response.attestationObject)),
      clientDataJSON: Ar(new Uint8Array(s.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: s.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (r = i.authenticatorAttachment) !== null && r !== void 0 ? r : void 0
  };
}
function em(s) {
  var r;
  if ("toJSON" in s && typeof s.toJSON == "function")
    return s.toJSON();
  const i = s, a = s.getClientExtensionResults(), u = s.response;
  return {
    id: s.id,
    rawId: s.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: Ar(new Uint8Array(u.authenticatorData)),
      clientDataJSON: Ar(new Uint8Array(u.clientDataJSON)),
      signature: Ar(new Uint8Array(u.signature)),
      userHandle: u.userHandle ? Ar(new Uint8Array(u.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: a,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (r = i.authenticatorAttachment) !== null && r !== void 0 ? r : void 0
  };
}
function Hd(s) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    s === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s)
  );
}
function bd() {
  var s, r;
  return !!(ze() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((s = navigator?.credentials) === null || s === void 0 ? void 0 : s.create) == "function" && typeof ((r = navigator?.credentials) === null || r === void 0 ? void 0 : r.get) == "function");
}
async function tm(s) {
  try {
    const r = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      s
    );
    return r ? r instanceof PublicKeyCredential ? { data: r, error: null } : {
      data: null,
      error: new Is("Browser returned unexpected credential type", r)
    } : {
      data: null,
      error: new Is("Empty credential response", r)
    };
  } catch (r) {
    return {
      data: null,
      error: Kg({
        error: r,
        options: s
      })
    };
  }
}
async function rm(s) {
  try {
    const r = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      s
    );
    return r ? r instanceof PublicKeyCredential ? { data: r, error: null } : {
      data: null,
      error: new Is("Browser returned unexpected credential type", r)
    } : {
      data: null,
      error: new Is("Empty credential response", r)
    };
  } catch (r) {
    return {
      data: null,
      error: Gg({
        error: r,
        options: s
      })
    };
  }
}
const nm = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, im = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function js(...s) {
  const r = (u) => u !== null && typeof u == "object" && !Array.isArray(u), i = (u) => u instanceof ArrayBuffer || ArrayBuffer.isView(u), a = {};
  for (const u of s)
    if (u)
      for (const d in u) {
        const h = u[d];
        if (h !== void 0)
          if (Array.isArray(h))
            a[d] = h;
          else if (i(h))
            a[d] = h;
          else if (r(h)) {
            const p = a[d];
            r(p) ? a[d] = js(p, h) : a[d] = js(h);
          } else
            a[d] = h;
      }
  return a;
}
function sm(s, r) {
  return js(nm, s, r || {});
}
function om(s, r) {
  return js(im, s, r || {});
}
class am {
  constructor(r) {
    this.client = r, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(r) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, r), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: r, webauthn: i, friendlyName: a, signal: u }, d) {
    var h;
    try {
      const { data: p, error: g } = await this.client.mfa.challenge({
        factorId: r,
        webauthn: i
      });
      if (!p)
        return { data: null, error: g };
      const v = u ?? Qg.createNewAbortSignal();
      if (p.webauthn.type === "create") {
        const { user: w } = p.webauthn.credential_options.publicKey;
        if (!w.name) {
          const R = a;
          if (R)
            w.name = `${w.id}:${R}`;
          else {
            const C = (await this.client.getUser()).data.user, O = ((h = C?.user_metadata) === null || h === void 0 ? void 0 : h.name) || C?.email || C?.id || "User";
            w.name = `${w.id}:${O}`;
          }
        }
        w.displayName || (w.displayName = w.name);
      }
      switch (p.webauthn.type) {
        case "create": {
          const w = sm(p.webauthn.credential_options.publicKey, d?.create), { data: R, error: b } = await tm({
            publicKey: w,
            signal: v
          });
          return R ? {
            data: {
              factorId: r,
              challengeId: p.id,
              webauthn: {
                type: p.webauthn.type,
                credential_response: R
              }
            },
            error: null
          } : { data: null, error: b };
        }
        case "request": {
          const w = om(p.webauthn.credential_options.publicKey, d?.request), { data: R, error: b } = await rm(Object.assign(Object.assign({}, p.webauthn.credential_options), { publicKey: w, signal: v }));
          return R ? {
            data: {
              factorId: r,
              challengeId: p.id,
              webauthn: {
                type: p.webauthn.type,
                credential_response: R
              }
            },
            error: null
          } : { data: null, error: b };
        }
      }
    } catch (p) {
      return H(p) ? { data: null, error: p } : {
        data: null,
        error: new xr("Unexpected error in challenge", p)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: r, factorId: i, webauthn: a }) {
    return this.client.mfa.verify({
      factorId: i,
      challengeId: r,
      webauthn: a
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: r, webauthn: { rpId: i = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: a = typeof window < "u" ? [window.location.origin] : void 0, signal: u } = {} }, d) {
    if (!i)
      return {
        data: null,
        error: new ui("rpId is required for WebAuthn authentication")
      };
    try {
      if (!bd())
        return {
          data: null,
          error: new xr("Browser does not support WebAuthn", null)
        };
      const { data: h, error: p } = await this.challenge({
        factorId: r,
        webauthn: { rpId: i, rpOrigins: a },
        signal: u
      }, { request: d });
      if (!h)
        return { data: null, error: p };
      const { webauthn: g } = h;
      return this._verify({
        factorId: r,
        challengeId: h.challengeId,
        webauthn: {
          type: g.type,
          rpId: i,
          rpOrigins: a,
          credential_response: g.credential_response
        }
      });
    } catch (h) {
      return H(h) ? { data: null, error: h } : {
        data: null,
        error: new xr("Unexpected error in authenticate", h)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: r, webauthn: { rpId: i = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: a = typeof window < "u" ? [window.location.origin] : void 0, signal: u } = {} }, d) {
    if (!i)
      return {
        data: null,
        error: new ui("rpId is required for WebAuthn registration")
      };
    try {
      if (!bd())
        return {
          data: null,
          error: new xr("Browser does not support WebAuthn", null)
        };
      const { data: h, error: p } = await this._enroll({
        friendlyName: r
      });
      if (!h)
        return await this.client.mfa.listFactors().then((w) => {
          var R;
          return (R = w.data) === null || R === void 0 ? void 0 : R.all.find((b) => b.factor_type === "webauthn" && b.friendly_name === r && b.status !== "unverified");
        }).then((w) => w ? this.client.mfa.unenroll({ factorId: w?.id }) : void 0), { data: null, error: p };
      const { data: g, error: v } = await this._challenge({
        factorId: h.id,
        friendlyName: h.friendly_name,
        webauthn: { rpId: i, rpOrigins: a },
        signal: u
      }, {
        create: d
      });
      return g ? this._verify({
        factorId: h.id,
        challengeId: g.challengeId,
        webauthn: {
          rpId: i,
          rpOrigins: a,
          type: g.webauthn.type,
          credential_response: g.webauthn.credential_response
        }
      }) : { data: null, error: v };
    } catch (h) {
      return H(h) ? { data: null, error: h } : {
        data: null,
        error: new xr("Unexpected error in register", h)
      };
    }
  }
}
Wg();
const lm = {
  url: ig,
  storageKey: sg,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: og,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  // 5 seconds
  skipAutoInitialize: !1
};
async function Cd(s, r, i) {
  return await i();
}
const ln = {};
class ci {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var r, i;
    return (i = (r = ln[this.storageKey]) === null || r === void 0 ? void 0 : r.jwks) !== null && i !== void 0 ? i : { keys: [] };
  }
  set jwks(r) {
    ln[this.storageKey] = Object.assign(Object.assign({}, ln[this.storageKey]), { jwks: r });
  }
  get jwks_cached_at() {
    var r, i;
    return (i = (r = ln[this.storageKey]) === null || r === void 0 ? void 0 : r.cachedAt) !== null && i !== void 0 ? i : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(r) {
    ln[this.storageKey] = Object.assign(Object.assign({}, ln[this.storageKey]), { cachedAt: r });
  }
  /**
   * Create a new client for use in the browser.
   *
   * @example
   * ```ts
   * import { GoTrueClient } from '@supabase/auth-js'
   *
   * const auth = new GoTrueClient({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { apikey: 'public-anon-key' },
   *   storageKey: 'supabase-auth',
   * })
   * ```
   */
  constructor(r) {
    var i, a, u;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const d = Object.assign(Object.assign({}, lm), r);
    if (this.storageKey = d.storageKey, this.instanceID = (i = ci.nextInstanceID[this.storageKey]) !== null && i !== void 0 ? i : 0, ci.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!d.debug, typeof d.debug == "function" && (this.logger = d.debug), this.instanceID > 0 && ze()) {
      const h = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(h), this.logDebugMessages && console.trace(h);
    }
    if (this.persistSession = d.persistSession, this.autoRefreshToken = d.autoRefreshToken, this.admin = new Bg({
      url: d.url,
      headers: d.headers,
      fetch: d.fetch
    }), this.url = d.url, this.headers = d.headers, this.fetch = Wd(d.fetch), this.lock = d.lock || Cd, this.detectSessionInUrl = d.detectSessionInUrl, this.flowType = d.flowType, this.hasCustomAuthorizationHeader = d.hasCustomAuthorizationHeader, this.throwOnError = d.throwOnError, this.lockAcquireTimeout = d.lockAcquireTimeout, d.lock ? this.lock = d.lock : this.persistSession && ze() && (!((a = globalThis?.navigator) === null || a === void 0) && a.locks) ? this.lock = Fg : this.lock = Cd, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new am(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.persistSession ? (d.storage ? this.storage = d.storage : Fd() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Td(this.memoryStorage)), d.userStorage && (this.userStorage = d.userStorage)) : (this.memoryStorage = {}, this.storage = Td(this.memoryStorage)), ze() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (h) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", h);
      }
      (u = this.broadcastChannel) === null || u === void 0 || u.addEventListener("message", async (h) => {
        this._debug("received broadcast notification from other tab or client", h);
        try {
          await this._notifyAllSubscribers(h.data.event, h.data.session, !1);
        } catch (p) {
          this._debug("#broadcastChannel", "error", p);
        }
      });
    }
    d.skipAutoInitialize || this.initialize().catch((h) => {
      this._debug("#initialize()", "error", h);
    });
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(r) {
    if (this.throwOnError && r && r.error)
      throw r.error;
    return r;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${zd}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...r) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...r), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var r;
    try {
      let i = {}, a = "none";
      if (ze() && (i = _g(window.location.href), this._isImplicitGrantCallback(i) ? a = "implicit" : await this._isPKCECallback(i) && (a = "pkce")), ze() && this.detectSessionInUrl && a !== "none") {
        const { data: u, error: d } = await this._getSessionFromURL(i, a);
        if (d) {
          if (this._debug("#_initialize()", "error detecting session from URL", d), dg(d)) {
            const g = (r = d.details) === null || r === void 0 ? void 0 : r.code;
            if (g === "identity_already_exists" || g === "identity_not_found" || g === "single_identity_not_deletable")
              return { error: d };
          }
          return { error: d };
        }
        const { session: h, redirectType: p } = u;
        return this._debug("#_initialize()", "detected session in URL", h, "redirect type", p), await this._saveSession(h), setTimeout(async () => {
          p === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", h) : await this._notifyAllSubscribers("SIGNED_IN", h);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (i) {
      return H(i) ? this._returnResult({ error: i }) : this._returnResult({
        error: new xr("Unexpected error during initialization", i)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(r) {
    var i, a, u;
    try {
      const d = await Y(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (a = (i = r?.options) === null || i === void 0 ? void 0 : i.data) !== null && a !== void 0 ? a : {},
          gotrue_meta_security: { captcha_token: (u = r?.options) === null || u === void 0 ? void 0 : u.captchaToken }
        },
        xform: St
      }), { data: h, error: p } = d;
      if (p || !h)
        return this._returnResult({ data: { user: null, session: null }, error: p });
      const g = h.session, v = h.user;
      return h.session && (await this._saveSession(h.session), await this._notifyAllSubscribers("SIGNED_IN", g)), this._returnResult({ data: { user: v, session: g }, error: null });
    } catch (d) {
      if (H(d))
        return this._returnResult({ data: { user: null, session: null }, error: d });
      throw d;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(r) {
    var i, a, u;
    try {
      let d;
      if ("email" in r) {
        const { email: w, password: R, options: b } = r;
        let C = null, O = null;
        this.flowType === "pkce" && ([C, O] = await on(this.storage, this.storageKey)), d = await Y(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: b?.emailRedirectTo,
          body: {
            email: w,
            password: R,
            data: (i = b?.data) !== null && i !== void 0 ? i : {},
            gotrue_meta_security: { captcha_token: b?.captchaToken },
            code_challenge: C,
            code_challenge_method: O
          },
          xform: St
        });
      } else if ("phone" in r) {
        const { phone: w, password: R, options: b } = r;
        d = await Y(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: w,
            password: R,
            data: (a = b?.data) !== null && a !== void 0 ? a : {},
            channel: (u = b?.channel) !== null && u !== void 0 ? u : "sms",
            gotrue_meta_security: { captcha_token: b?.captchaToken }
          },
          xform: St
        });
      } else
        throw new Os("You must provide either an email or phone number and a password");
      const { data: h, error: p } = d;
      if (p || !h)
        return await De(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: p });
      const g = h.session, v = h.user;
      return h.session && (await this._saveSession(h.session), await this._notifyAllSubscribers("SIGNED_IN", g)), this._returnResult({ data: { user: v, session: g }, error: null });
    } catch (d) {
      if (await De(this.storage, `${this.storageKey}-code-verifier`), H(d))
        return this._returnResult({ data: { user: null, session: null }, error: d });
      throw d;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(r) {
    try {
      let i;
      if ("email" in r) {
        const { email: d, password: h, options: p } = r;
        i = await Y(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: d,
            password: h,
            gotrue_meta_security: { captcha_token: p?.captchaToken }
          },
          xform: Sd
        });
      } else if ("phone" in r) {
        const { phone: d, password: h, options: p } = r;
        i = await Y(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: d,
            password: h,
            gotrue_meta_security: { captcha_token: p?.captchaToken }
          },
          xform: Sd
        });
      } else
        throw new Os("You must provide either an email or phone number and a password");
      const { data: a, error: u } = i;
      if (u)
        return this._returnResult({ data: { user: null, session: null }, error: u });
      if (!a || !a.session || !a.user) {
        const d = new sn();
        return this._returnResult({ data: { user: null, session: null }, error: d });
      }
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", a.session)), this._returnResult({
        data: Object.assign({ user: a.user, session: a.session }, a.weak_password ? { weakPassword: a.weak_password } : null),
        error: u
      });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(r) {
    var i, a, u, d;
    return await this._handleProviderSignIn(r.provider, {
      redirectTo: (i = r.options) === null || i === void 0 ? void 0 : i.redirectTo,
      scopes: (a = r.options) === null || a === void 0 ? void 0 : a.scopes,
      queryParams: (u = r.options) === null || u === void 0 ? void 0 : u.queryParams,
      skipBrowserRedirect: (d = r.options) === null || d === void 0 ? void 0 : d.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(r) {
    return await this.initializePromise, this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(r));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   */
  async signInWithWeb3(r) {
    const { chain: i } = r;
    switch (i) {
      case "ethereum":
        return await this.signInWithEthereum(r);
      case "solana":
        return await this.signInWithSolana(r);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${i}"`);
    }
  }
  async signInWithEthereum(r) {
    var i, a, u, d, h, p, g, v, w, R, b;
    let C, O;
    if ("message" in r)
      C = r.message, O = r.signature;
    else {
      const { chain: P, wallet: j, statement: D, options: B } = r;
      let $;
      if (ze())
        if (typeof j == "object")
          $ = j;
        else {
          const Ie = window;
          if ("ethereum" in Ie && typeof Ie.ethereum == "object" && "request" in Ie.ethereum && typeof Ie.ethereum.request == "function")
            $ = Ie.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof j != "object" || !B?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        $ = j;
      }
      const K = new URL((i = B?.url) !== null && i !== void 0 ? i : window.location.href), ue = await $.request({
        method: "eth_requestAccounts"
      }).then((Ie) => Ie).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!ue || ue.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const ee = qd(ue[0]);
      let ie = (a = B?.signInWithEthereum) === null || a === void 0 ? void 0 : a.chainId;
      if (!ie) {
        const Ie = await $.request({
          method: "eth_chainId"
        });
        ie = Vg(Ie);
      }
      const Te = {
        domain: K.host,
        address: ee,
        statement: D,
        uri: K.href,
        version: "1",
        chainId: ie,
        nonce: (u = B?.signInWithEthereum) === null || u === void 0 ? void 0 : u.nonce,
        issuedAt: (h = (d = B?.signInWithEthereum) === null || d === void 0 ? void 0 : d.issuedAt) !== null && h !== void 0 ? h : /* @__PURE__ */ new Date(),
        expirationTime: (p = B?.signInWithEthereum) === null || p === void 0 ? void 0 : p.expirationTime,
        notBefore: (g = B?.signInWithEthereum) === null || g === void 0 ? void 0 : g.notBefore,
        requestId: (v = B?.signInWithEthereum) === null || v === void 0 ? void 0 : v.requestId,
        resources: (w = B?.signInWithEthereum) === null || w === void 0 ? void 0 : w.resources
      };
      C = Hg(Te), O = await $.request({
        method: "personal_sign",
        params: [qg(C), ee]
      });
    }
    try {
      const { data: P, error: j } = await Y(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: C,
          signature: O
        }, !((R = r.options) === null || R === void 0) && R.captchaToken ? { gotrue_meta_security: { captcha_token: (b = r.options) === null || b === void 0 ? void 0 : b.captchaToken } } : null),
        xform: St
      });
      if (j)
        throw j;
      if (!P || !P.session || !P.user) {
        const D = new sn();
        return this._returnResult({ data: { user: null, session: null }, error: D });
      }
      return P.session && (await this._saveSession(P.session), await this._notifyAllSubscribers("SIGNED_IN", P.session)), this._returnResult({ data: Object.assign({}, P), error: j });
    } catch (P) {
      if (H(P))
        return this._returnResult({ data: { user: null, session: null }, error: P });
      throw P;
    }
  }
  async signInWithSolana(r) {
    var i, a, u, d, h, p, g, v, w, R, b, C;
    let O, P;
    if ("message" in r)
      O = r.message, P = r.signature;
    else {
      const { chain: j, wallet: D, statement: B, options: $ } = r;
      let K;
      if (ze())
        if (typeof D == "object")
          K = D;
        else {
          const ee = window;
          if ("solana" in ee && typeof ee.solana == "object" && ("signIn" in ee.solana && typeof ee.solana.signIn == "function" || "signMessage" in ee.solana && typeof ee.solana.signMessage == "function"))
            K = ee.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof D != "object" || !$?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        K = D;
      }
      const ue = new URL((i = $?.url) !== null && i !== void 0 ? i : window.location.href);
      if ("signIn" in K && K.signIn) {
        const ee = await K.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, $?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: ue.host,
          uri: ue.href
        }), B ? { statement: B } : null));
        let ie;
        if (Array.isArray(ee) && ee[0] && typeof ee[0] == "object")
          ie = ee[0];
        else if (ee && typeof ee == "object" && "signedMessage" in ee && "signature" in ee)
          ie = ee;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in ie && "signature" in ie && (typeof ie.signedMessage == "string" || ie.signedMessage instanceof Uint8Array) && ie.signature instanceof Uint8Array)
          O = typeof ie.signedMessage == "string" ? ie.signedMessage : new TextDecoder().decode(ie.signedMessage), P = ie.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in K) || typeof K.signMessage != "function" || !("publicKey" in K) || typeof K != "object" || !K.publicKey || !("toBase58" in K.publicKey) || typeof K.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        O = [
          `${ue.host} wants you to sign in with your Solana account:`,
          K.publicKey.toBase58(),
          ...B ? ["", B, ""] : [""],
          "Version: 1",
          `URI: ${ue.href}`,
          `Issued At: ${(u = (a = $?.signInWithSolana) === null || a === void 0 ? void 0 : a.issuedAt) !== null && u !== void 0 ? u : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((d = $?.signInWithSolana) === null || d === void 0) && d.notBefore ? [`Not Before: ${$.signInWithSolana.notBefore}`] : [],
          ...!((h = $?.signInWithSolana) === null || h === void 0) && h.expirationTime ? [`Expiration Time: ${$.signInWithSolana.expirationTime}`] : [],
          ...!((p = $?.signInWithSolana) === null || p === void 0) && p.chainId ? [`Chain ID: ${$.signInWithSolana.chainId}`] : [],
          ...!((g = $?.signInWithSolana) === null || g === void 0) && g.nonce ? [`Nonce: ${$.signInWithSolana.nonce}`] : [],
          ...!((v = $?.signInWithSolana) === null || v === void 0) && v.requestId ? [`Request ID: ${$.signInWithSolana.requestId}`] : [],
          ...!((R = (w = $?.signInWithSolana) === null || w === void 0 ? void 0 : w.resources) === null || R === void 0) && R.length ? [
            "Resources",
            ...$.signInWithSolana.resources.map((ie) => `- ${ie}`)
          ] : []
        ].join(`
`);
        const ee = await K.signMessage(new TextEncoder().encode(O), "utf8");
        if (!ee || !(ee instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        P = ee;
      }
    }
    try {
      const { data: j, error: D } = await Y(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: O, signature: Ar(P) }, !((b = r.options) === null || b === void 0) && b.captchaToken ? { gotrue_meta_security: { captcha_token: (C = r.options) === null || C === void 0 ? void 0 : C.captchaToken } } : null),
        xform: St
      });
      if (D)
        throw D;
      if (!j || !j.session || !j.user) {
        const B = new sn();
        return this._returnResult({ data: { user: null, session: null }, error: B });
      }
      return j.session && (await this._saveSession(j.session), await this._notifyAllSubscribers("SIGNED_IN", j.session)), this._returnResult({ data: Object.assign({}, j), error: D });
    } catch (j) {
      if (H(j))
        return this._returnResult({ data: { user: null, session: null }, error: j });
      throw j;
    }
  }
  async _exchangeCodeForSession(r) {
    const i = await Rr(this.storage, `${this.storageKey}-code-verifier`), [a, u] = (i ?? "").split("/");
    try {
      if (!a && this.flowType === "pkce")
        throw new hg();
      const { data: d, error: h } = await Y(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: r,
          code_verifier: a
        },
        xform: St
      });
      if (await De(this.storage, `${this.storageKey}-code-verifier`), h)
        throw h;
      if (!d || !d.session || !d.user) {
        const p = new sn();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: p
        });
      }
      return d.session && (await this._saveSession(d.session), await this._notifyAllSubscribers("SIGNED_IN", d.session)), this._returnResult({ data: Object.assign(Object.assign({}, d), { redirectType: u ?? null }), error: h });
    } catch (d) {
      if (await De(this.storage, `${this.storageKey}-code-verifier`), H(d))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: d
        });
      throw d;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(r) {
    try {
      const { options: i, provider: a, token: u, access_token: d, nonce: h } = r, p = await Y(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: a,
          id_token: u,
          access_token: d,
          nonce: h,
          gotrue_meta_security: { captcha_token: i?.captchaToken }
        },
        xform: St
      }), { data: g, error: v } = p;
      if (v)
        return this._returnResult({ data: { user: null, session: null }, error: v });
      if (!g || !g.session || !g.user) {
        const w = new sn();
        return this._returnResult({ data: { user: null, session: null }, error: w });
      }
      return g.session && (await this._saveSession(g.session), await this._notifyAllSubscribers("SIGNED_IN", g.session)), this._returnResult({ data: g, error: v });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(r) {
    var i, a, u, d, h;
    try {
      if ("email" in r) {
        const { email: p, options: g } = r;
        let v = null, w = null;
        this.flowType === "pkce" && ([v, w] = await on(this.storage, this.storageKey));
        const { error: R } = await Y(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: p,
            data: (i = g?.data) !== null && i !== void 0 ? i : {},
            create_user: (a = g?.shouldCreateUser) !== null && a !== void 0 ? a : !0,
            gotrue_meta_security: { captcha_token: g?.captchaToken },
            code_challenge: v,
            code_challenge_method: w
          },
          redirectTo: g?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: R });
      }
      if ("phone" in r) {
        const { phone: p, options: g } = r, { data: v, error: w } = await Y(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: p,
            data: (u = g?.data) !== null && u !== void 0 ? u : {},
            create_user: (d = g?.shouldCreateUser) !== null && d !== void 0 ? d : !0,
            gotrue_meta_security: { captcha_token: g?.captchaToken },
            channel: (h = g?.channel) !== null && h !== void 0 ? h : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: v?.message_id },
          error: w
        });
      }
      throw new Os("You must provide either an email or phone number.");
    } catch (p) {
      if (await De(this.storage, `${this.storageKey}-code-verifier`), H(p))
        return this._returnResult({ data: { user: null, session: null }, error: p });
      throw p;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(r) {
    var i, a;
    try {
      let u, d;
      "options" in r && (u = (i = r.options) === null || i === void 0 ? void 0 : i.redirectTo, d = (a = r.options) === null || a === void 0 ? void 0 : a.captchaToken);
      const { data: h, error: p } = await Y(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, r), { gotrue_meta_security: { captcha_token: d } }),
        redirectTo: u,
        xform: St
      });
      if (p)
        throw p;
      if (!h)
        throw new Error("An error occurred on token verification.");
      const g = h.session, v = h.user;
      return g?.access_token && (await this._saveSession(g), await this._notifyAllSubscribers(r.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", g)), this._returnResult({ data: { user: v, session: g }, error: null });
    } catch (u) {
      if (H(u))
        return this._returnResult({ data: { user: null, session: null }, error: u });
      throw u;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(r) {
    var i, a, u, d, h;
    try {
      let p = null, g = null;
      this.flowType === "pkce" && ([p, g] = await on(this.storage, this.storageKey));
      const v = await Y(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in r ? { provider_id: r.providerId } : null), "domain" in r ? { domain: r.domain } : null), { redirect_to: (a = (i = r.options) === null || i === void 0 ? void 0 : i.redirectTo) !== null && a !== void 0 ? a : void 0 }), !((u = r?.options) === null || u === void 0) && u.captchaToken ? { gotrue_meta_security: { captcha_token: r.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: p, code_challenge_method: g }),
        headers: this.headers,
        xform: Ug
      });
      return !((d = v.data) === null || d === void 0) && d.url && ze() && !(!((h = r.options) === null || h === void 0) && h.skipBrowserRedirect) && window.location.assign(v.data.url), this._returnResult(v);
    } catch (p) {
      if (await De(this.storage, `${this.storageKey}-code-verifier`), H(p))
        return this._returnResult({ data: null, error: p });
      throw p;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: i }, error: a } = r;
        if (a)
          throw a;
        if (!i)
          throw new ot();
        const { error: u } = await Y(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: i.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: u });
      });
    } catch (r) {
      if (H(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(r) {
    try {
      const i = `${this.url}/resend`;
      if ("email" in r) {
        const { email: a, type: u, options: d } = r, { error: h } = await Y(this.fetch, "POST", i, {
          headers: this.headers,
          body: {
            email: a,
            type: u,
            gotrue_meta_security: { captcha_token: d?.captchaToken }
          },
          redirectTo: d?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: h });
      } else if ("phone" in r) {
        const { phone: a, type: u, options: d } = r, { data: h, error: p } = await Y(this.fetch, "POST", i, {
          headers: this.headers,
          body: {
            phone: a,
            type: u,
            gotrue_meta_security: { captcha_token: d?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: h?.message_id },
          error: p
        });
      }
      throw new Os("You must provide either an email or phone number and a type");
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (i) => i));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(r, i) {
    this._debug("#_acquireLock", "begin", r);
    try {
      if (this.lockAcquired) {
        const a = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), u = (async () => (await a, await i()))();
        return this.pendingInLock.push((async () => {
          try {
            await u;
          } catch {
          }
        })()), u;
      }
      return await this.lock(`lock:${this.storageKey}`, r, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const a = i();
          for (this.pendingInLock.push((async () => {
            try {
              await a;
            } catch {
            }
          })()), await a; this.pendingInLock.length; ) {
            const u = [...this.pendingInLock];
            await Promise.all(u), this.pendingInLock.splice(0, u.length);
          }
          return await a;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(r) {
    this._debug("#_useSession", "begin");
    try {
      const i = await this.__loadSession();
      return await r(i);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let r = null;
      const i = await Rr(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", i), i !== null && (this._isValidSession(i) ? r = i : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !r)
        return { data: { session: null }, error: null };
      const a = r.expires_at ? r.expires_at * 1e3 - Date.now() < Da : !1;
      if (this._debug("#__loadSession()", `session has${a ? "" : " not"} expired`, "expires_at", r.expires_at), !a) {
        if (this.userStorage) {
          const h = await Rr(this.userStorage, this.storageKey + "-user");
          h?.user ? r.user = h.user : r.user = Ma();
        }
        if (this.storage.isServer && r.user && !r.user.__isUserNotAvailableProxy) {
          const h = { value: this.suppressGetSessionWarning };
          r.user = jg(r.user, h), h.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: r }, error: null };
      }
      const { data: u, error: d } = await this._callRefreshToken(r.refresh_token);
      return d ? this._returnResult({ data: { session: null }, error: d }) : this._returnResult({ data: { session: u }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(r) {
    if (r)
      return await this._getUser(r);
    await this.initializePromise;
    const i = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    return i.data.user && (this.suppressGetSessionWarning = !0), i;
  }
  async _getUser(r) {
    try {
      return r ? await Y(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: r,
        xform: dr
      }) : await this._useSession(async (i) => {
        var a, u, d;
        const { data: h, error: p } = i;
        if (p)
          throw p;
        return !(!((a = h.session) === null || a === void 0) && a.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new ot() } : await Y(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (d = (u = h.session) === null || u === void 0 ? void 0 : u.access_token) !== null && d !== void 0 ? d : void 0,
          xform: dr
        });
      });
    } catch (i) {
      if (H(i))
        return za(i) && (await this._removeSession(), await De(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: i });
      throw i;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(r, i = {}) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(r, i));
  }
  async _updateUser(r, i = {}) {
    try {
      return await this._useSession(async (a) => {
        const { data: u, error: d } = a;
        if (d)
          throw d;
        if (!u.session)
          throw new ot();
        const h = u.session;
        let p = null, g = null;
        this.flowType === "pkce" && r.email != null && ([p, g] = await on(this.storage, this.storageKey));
        const { data: v, error: w } = await Y(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: i?.emailRedirectTo,
          body: Object.assign(Object.assign({}, r), { code_challenge: p, code_challenge_method: g }),
          jwt: h.access_token,
          xform: dr
        });
        if (w)
          throw w;
        return h.user = v.user, await this._saveSession(h), await this._notifyAllSubscribers("USER_UPDATED", h), this._returnResult({ data: { user: h.user }, error: null });
      });
    } catch (a) {
      if (await De(this.storage, `${this.storageKey}-code-verifier`), H(a))
        return this._returnResult({ data: { user: null }, error: a });
      throw a;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(r) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(r));
  }
  async _setSession(r) {
    try {
      if (!r.access_token || !r.refresh_token)
        throw new ot();
      const i = Date.now() / 1e3;
      let a = i, u = !0, d = null;
      const { payload: h } = xs(r.access_token);
      if (h.exp && (a = h.exp, u = a <= i), u) {
        const { data: p, error: g } = await this._callRefreshToken(r.refresh_token);
        if (g)
          return this._returnResult({ data: { user: null, session: null }, error: g });
        if (!p)
          return { data: { user: null, session: null }, error: null };
        d = p;
      } else {
        const { data: p, error: g } = await this._getUser(r.access_token);
        if (g)
          return this._returnResult({ data: { user: null, session: null }, error: g });
        d = {
          access_token: r.access_token,
          refresh_token: r.refresh_token,
          user: p.user,
          token_type: "bearer",
          expires_in: a - i,
          expires_at: a
        }, await this._saveSession(d), await this._notifyAllSubscribers("SIGNED_IN", d);
      }
      return this._returnResult({ data: { user: d.user, session: d }, error: null });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: { session: null, user: null }, error: i });
      throw i;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(r) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(r));
  }
  async _refreshSession(r) {
    try {
      return await this._useSession(async (i) => {
        var a;
        if (!r) {
          const { data: h, error: p } = i;
          if (p)
            throw p;
          r = (a = h.session) !== null && a !== void 0 ? a : void 0;
        }
        if (!r?.refresh_token)
          throw new ot();
        const { data: u, error: d } = await this._callRefreshToken(r.refresh_token);
        return d ? this._returnResult({ data: { user: null, session: null }, error: d }) : u ? this._returnResult({ data: { user: u.user, session: u }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(r, i) {
    try {
      if (!ze())
        throw new Ps("No browser detected.");
      if (r.error || r.error_description || r.error_code)
        throw new Ps(r.error_description || "Error in URL with unspecified error_description", {
          error: r.error || "unspecified_error",
          code: r.error_code || "unspecified_code"
        });
      switch (i) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new gd("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Ps("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (i === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !r.code)
          throw new gd("No code detected.");
        const { data: B, error: $ } = await this._exchangeCodeForSession(r.code);
        if ($)
          throw $;
        const K = new URL(window.location.href);
        return K.searchParams.delete("code"), window.history.replaceState(window.history.state, "", K.toString()), { data: { session: B.session, redirectType: null }, error: null };
      }
      const { provider_token: a, provider_refresh_token: u, access_token: d, refresh_token: h, expires_in: p, expires_at: g, token_type: v } = r;
      if (!d || !p || !h || !v)
        throw new Ps("No session defined in URL");
      const w = Math.round(Date.now() / 1e3), R = parseInt(p);
      let b = w + R;
      g && (b = parseInt(g));
      const C = b - w;
      C * 1e3 <= cn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${C}s, should have been closer to ${R}s`);
      const O = b - R;
      w - O >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", O, b, w) : w - O < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", O, b, w);
      const { data: P, error: j } = await this._getUser(d);
      if (j)
        throw j;
      const D = {
        provider_token: a,
        provider_refresh_token: u,
        access_token: d,
        expires_in: R,
        expires_at: b,
        refresh_token: h,
        token_type: v,
        user: P.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: D, redirectType: r.type }, error: null });
    } catch (a) {
      if (H(a))
        return this._returnResult({ data: { session: null, redirectType: null }, error: a });
      throw a;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   *
   * If `detectSessionInUrl` is a function, it will be called with the URL and params to determine
   * if the URL should be processed as a Supabase auth callback. This allows users to exclude
   * URLs from other OAuth providers (e.g., Facebook Login) that also return access_token in the fragment.
   */
  _isImplicitGrantCallback(r) {
    return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), r) : !!(r.access_token || r.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(r) {
    const i = await Rr(this.storage, `${this.storageKey}-code-verifier`);
    return !!(r.code && i);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(r = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(r));
  }
  async _signOut({ scope: r } = { scope: "global" }) {
    return await this._useSession(async (i) => {
      var a;
      const { data: u, error: d } = i;
      if (d && !za(d))
        return this._returnResult({ error: d });
      const h = (a = u.session) === null || a === void 0 ? void 0 : a.access_token;
      if (h) {
        const { error: p } = await this.admin.signOut(h, r);
        if (p && !(cg(p) && (p.status === 404 || p.status === 401 || p.status === 403) || za(p)))
          return this._returnResult({ error: p });
      }
      return r !== "others" && (await this._removeSession(), await De(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(r) {
    const i = wg(), a = {
      id: i,
      callback: r,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", i), this.stateChangeEmitters.delete(i);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", i), this.stateChangeEmitters.set(i, a), (async () => (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      this._emitInitialSession(i);
    })))(), { data: { subscription: a } };
  }
  async _emitInitialSession(r) {
    return await this._useSession(async (i) => {
      var a, u;
      try {
        const { data: { session: d }, error: h } = i;
        if (h)
          throw h;
        await ((a = this.stateChangeEmitters.get(r)) === null || a === void 0 ? void 0 : a.callback("INITIAL_SESSION", d)), this._debug("INITIAL_SESSION", "callback id", r, "session", d);
      } catch (d) {
        await ((u = this.stateChangeEmitters.get(r)) === null || u === void 0 ? void 0 : u.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", r, "error", d), console.error(d);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(r, i = {}) {
    let a = null, u = null;
    this.flowType === "pkce" && ([a, u] = await on(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await Y(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: r,
          code_challenge: a,
          code_challenge_method: u,
          gotrue_meta_security: { captcha_token: i.captchaToken }
        },
        headers: this.headers,
        redirectTo: i.redirectTo
      });
    } catch (d) {
      if (await De(this.storage, `${this.storageKey}-code-verifier`), H(d))
        return this._returnResult({ data: null, error: d });
      throw d;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var r;
    try {
      const { data: i, error: a } = await this.getUser();
      if (a)
        throw a;
      return this._returnResult({ data: { identities: (r = i.user.identities) !== null && r !== void 0 ? r : [] }, error: null });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async linkIdentity(r) {
    return "token" in r ? this.linkIdentityIdToken(r) : this.linkIdentityOAuth(r);
  }
  async linkIdentityOAuth(r) {
    var i;
    try {
      const { data: a, error: u } = await this._useSession(async (d) => {
        var h, p, g, v, w;
        const { data: R, error: b } = d;
        if (b)
          throw b;
        const C = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, r.provider, {
          redirectTo: (h = r.options) === null || h === void 0 ? void 0 : h.redirectTo,
          scopes: (p = r.options) === null || p === void 0 ? void 0 : p.scopes,
          queryParams: (g = r.options) === null || g === void 0 ? void 0 : g.queryParams,
          skipBrowserRedirect: !0
        });
        return await Y(this.fetch, "GET", C, {
          headers: this.headers,
          jwt: (w = (v = R.session) === null || v === void 0 ? void 0 : v.access_token) !== null && w !== void 0 ? w : void 0
        });
      });
      if (u)
        throw u;
      return ze() && !(!((i = r.options) === null || i === void 0) && i.skipBrowserRedirect) && window.location.assign(a?.url), this._returnResult({
        data: { provider: r.provider, url: a?.url },
        error: null
      });
    } catch (a) {
      if (H(a))
        return this._returnResult({ data: { provider: r.provider, url: null }, error: a });
      throw a;
    }
  }
  async linkIdentityIdToken(r) {
    return await this._useSession(async (i) => {
      var a;
      try {
        const { error: u, data: { session: d } } = i;
        if (u)
          throw u;
        const { options: h, provider: p, token: g, access_token: v, nonce: w } = r, R = await Y(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (a = d?.access_token) !== null && a !== void 0 ? a : void 0,
          body: {
            provider: p,
            id_token: g,
            access_token: v,
            nonce: w,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: h?.captchaToken }
          },
          xform: St
        }), { data: b, error: C } = R;
        return C ? this._returnResult({ data: { user: null, session: null }, error: C }) : !b || !b.session || !b.user ? this._returnResult({
          data: { user: null, session: null },
          error: new sn()
        }) : (b.session && (await this._saveSession(b.session), await this._notifyAllSubscribers("USER_UPDATED", b.session)), this._returnResult({ data: b, error: C }));
      } catch (u) {
        if (await De(this.storage, `${this.storageKey}-code-verifier`), H(u))
          return this._returnResult({ data: { user: null, session: null }, error: u });
        throw u;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(r) {
    try {
      return await this._useSession(async (i) => {
        var a, u;
        const { data: d, error: h } = i;
        if (h)
          throw h;
        return await Y(this.fetch, "DELETE", `${this.url}/user/identities/${r.identity_id}`, {
          headers: this.headers,
          jwt: (u = (a = d.session) === null || a === void 0 ? void 0 : a.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(r) {
    const i = `#_refreshAccessToken(${r.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      const a = Date.now();
      return await Eg(async (u) => (u > 0 && await Sg(200 * Math.pow(2, u - 1)), this._debug(i, "refreshing attempt", u), await Y(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: r },
        headers: this.headers,
        xform: St
      })), (u, d) => {
        const h = 200 * Math.pow(2, u);
        return d && Ba(d) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + h - a < cn;
      });
    } catch (a) {
      if (this._debug(i, "error", a), H(a))
        return this._returnResult({ data: { session: null, user: null }, error: a });
      throw a;
    } finally {
      this._debug(i, "end");
    }
  }
  _isValidSession(r) {
    return typeof r == "object" && r !== null && "access_token" in r && "refresh_token" in r && "expires_at" in r;
  }
  async _handleProviderSignIn(r, i) {
    const a = await this._getUrlForProvider(`${this.url}/authorize`, r, {
      redirectTo: i.redirectTo,
      scopes: i.scopes,
      queryParams: i.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", r, "options", i, "url", a), ze() && !i.skipBrowserRedirect && window.location.assign(a), { data: { provider: r, url: a }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var r, i;
    const a = "#_recoverAndRefresh()";
    this._debug(a, "begin");
    try {
      const u = await Rr(this.storage, this.storageKey);
      if (u && this.userStorage) {
        let h = await Rr(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !h && (h = { user: u.user }, await dn(this.userStorage, this.storageKey + "-user", h)), u.user = (r = h?.user) !== null && r !== void 0 ? r : Ma();
      } else if (u && !u.user && !u.user) {
        const h = await Rr(this.storage, this.storageKey + "-user");
        h && h?.user ? (u.user = h.user, await De(this.storage, this.storageKey + "-user"), await dn(this.storage, this.storageKey, u)) : u.user = Ma();
      }
      if (this._debug(a, "session from storage", u), !this._isValidSession(u)) {
        this._debug(a, "session is not valid"), u !== null && await this._removeSession();
        return;
      }
      const d = ((i = u.expires_at) !== null && i !== void 0 ? i : 1 / 0) * 1e3 - Date.now() < Da;
      if (this._debug(a, `session has${d ? "" : " not"} expired with margin of ${Da}s`), d) {
        if (this.autoRefreshToken && u.refresh_token) {
          const { error: h } = await this._callRefreshToken(u.refresh_token);
          h && (console.error(h), Ba(h) || (this._debug(a, "refresh failed with a non-retryable error, removing the session", h), await this._removeSession()));
        }
      } else if (u.user && u.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: h, error: p } = await this._getUser(u.access_token);
          !p && h?.user ? (u.user = h.user, await this._saveSession(u), await this._notifyAllSubscribers("SIGNED_IN", u)) : this._debug(a, "could not get user data, skipping SIGNED_IN notification");
        } catch (h) {
          console.error("Error getting user data:", h), this._debug(a, "error getting user data, skipping SIGNED_IN notification", h);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", u);
    } catch (u) {
      this._debug(a, "error", u), console.error(u);
      return;
    } finally {
      this._debug(a, "end");
    }
  }
  async _callRefreshToken(r) {
    var i, a;
    if (!r)
      throw new ot();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const u = `#_callRefreshToken(${r.substring(0, 5)}...)`;
    this._debug(u, "begin");
    try {
      this.refreshingDeferred = new Us();
      const { data: d, error: h } = await this._refreshAccessToken(r);
      if (h)
        throw h;
      if (!d.session)
        throw new ot();
      await this._saveSession(d.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", d.session);
      const p = { data: d.session, error: null };
      return this.refreshingDeferred.resolve(p), p;
    } catch (d) {
      if (this._debug(u, "error", d), H(d)) {
        const h = { data: null, error: d };
        return Ba(d) || await this._removeSession(), (i = this.refreshingDeferred) === null || i === void 0 || i.resolve(h), h;
      }
      throw (a = this.refreshingDeferred) === null || a === void 0 || a.reject(d), d;
    } finally {
      this.refreshingDeferred = null, this._debug(u, "end");
    }
  }
  async _notifyAllSubscribers(r, i, a = !0) {
    const u = `#_notifyAllSubscribers(${r})`;
    this._debug(u, "begin", i, `broadcast = ${a}`);
    try {
      this.broadcastChannel && a && this.broadcastChannel.postMessage({ event: r, session: i });
      const d = [], h = Array.from(this.stateChangeEmitters.values()).map(async (p) => {
        try {
          await p.callback(r, i);
        } catch (g) {
          d.push(g);
        }
      });
      if (await Promise.all(h), d.length > 0) {
        for (let p = 0; p < d.length; p += 1)
          console.error(d[p]);
        throw d[0];
      }
    } finally {
      this._debug(u, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(r) {
    this._debug("#_saveSession()", r), this.suppressGetSessionWarning = !0, await De(this.storage, `${this.storageKey}-code-verifier`);
    const i = Object.assign({}, r), a = i.user && i.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !a && i.user && await dn(this.userStorage, this.storageKey + "-user", {
        user: i.user
      });
      const u = Object.assign({}, i);
      delete u.user;
      const d = _d(u);
      await dn(this.storage, this.storageKey, d);
    } else {
      const u = _d(i);
      await dn(this.storage, this.storageKey, u);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await De(this.storage, this.storageKey), await De(this.storage, this.storageKey + "-code-verifier"), await De(this.storage, this.storageKey + "-user"), this.userStorage && await De(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const r = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      r && ze() && window?.removeEventListener && window.removeEventListener("visibilitychange", r);
    } catch (i) {
      console.error("removing visibilitychange callback failed", i);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const r = setInterval(() => this._autoRefreshTokenTick(), cn);
    this.autoRefreshTicker = r, r && typeof r == "object" && typeof r.unref == "function" ? r.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(r);
    const i = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = i, i && typeof i == "object" && typeof i.unref == "function" ? i.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(i);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const r = this.autoRefreshTicker;
    this.autoRefreshTicker = null, r && clearInterval(r);
    const i = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null, i && clearTimeout(i);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const r = Date.now();
          try {
            return await this._useSession(async (i) => {
              const { data: { session: a } } = i;
              if (!a || !a.refresh_token || !a.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const u = Math.floor((a.expires_at * 1e3 - r) / cn);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${u} ticks, a tick lasts ${cn}ms, refresh threshold is ${Qa} ticks`), u <= Qa && await this._callRefreshToken(a.refresh_token);
            });
          } catch (i) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", i);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (r) {
      if (r.isAcquireTimeout || r instanceof Vd)
        this._debug("auto refresh token tick lock not available");
      else
        throw r;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !ze() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (r) {
          this._debug("#visibilityChangedCallback", "error", r);
        }
      }, window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (r) {
      console.error("_handleVisibilityChange", r);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(r) {
    const i = `#_onVisibilityChanged(${r})`;
    this._debug(i, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), r || (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(i, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(r, i, a) {
    const u = [`provider=${encodeURIComponent(i)}`];
    if (a?.redirectTo && u.push(`redirect_to=${encodeURIComponent(a.redirectTo)}`), a?.scopes && u.push(`scopes=${encodeURIComponent(a.scopes)}`), this.flowType === "pkce") {
      const [d, h] = await on(this.storage, this.storageKey), p = new URLSearchParams({
        code_challenge: `${encodeURIComponent(d)}`,
        code_challenge_method: `${encodeURIComponent(h)}`
      });
      u.push(p.toString());
    }
    if (a?.queryParams) {
      const d = new URLSearchParams(a.queryParams);
      u.push(d.toString());
    }
    return a?.skipBrowserRedirect && u.push(`skip_http_redirect=${a.skipBrowserRedirect}`), `${r}?${u.join("&")}`;
  }
  async _unenroll(r) {
    try {
      return await this._useSession(async (i) => {
        var a;
        const { data: u, error: d } = i;
        return d ? this._returnResult({ data: null, error: d }) : await Y(this.fetch, "DELETE", `${this.url}/factors/${r.factorId}`, {
          headers: this.headers,
          jwt: (a = u?.session) === null || a === void 0 ? void 0 : a.access_token
        });
      });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async _enroll(r) {
    try {
      return await this._useSession(async (i) => {
        var a, u;
        const { data: d, error: h } = i;
        if (h)
          return this._returnResult({ data: null, error: h });
        const p = Object.assign({ friendly_name: r.friendlyName, factor_type: r.factorType }, r.factorType === "phone" ? { phone: r.phone } : r.factorType === "totp" ? { issuer: r.issuer } : {}), { data: g, error: v } = await Y(this.fetch, "POST", `${this.url}/factors`, {
          body: p,
          headers: this.headers,
          jwt: (a = d?.session) === null || a === void 0 ? void 0 : a.access_token
        });
        return v ? this._returnResult({ data: null, error: v }) : (r.factorType === "totp" && g.type === "totp" && (!((u = g?.totp) === null || u === void 0) && u.qr_code) && (g.totp.qr_code = `data:image/svg+xml;utf-8,${g.totp.qr_code}`), this._returnResult({ data: g, error: null }));
      });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async _verify(r) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (i) => {
          var a;
          const { data: u, error: d } = i;
          if (d)
            return this._returnResult({ data: null, error: d });
          const h = Object.assign({ challenge_id: r.challengeId }, "webauthn" in r ? {
            webauthn: Object.assign(Object.assign({}, r.webauthn), { credential_response: r.webauthn.type === "create" ? Zg(r.webauthn.credential_response) : em(r.webauthn.credential_response) })
          } : { code: r.code }), { data: p, error: g } = await Y(this.fetch, "POST", `${this.url}/factors/${r.factorId}/verify`, {
            body: h,
            headers: this.headers,
            jwt: (a = u?.session) === null || a === void 0 ? void 0 : a.access_token
          });
          return g ? this._returnResult({ data: null, error: g }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + p.expires_in }, p)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", p), this._returnResult({ data: p, error: g }));
        });
      } catch (i) {
        if (H(i))
          return this._returnResult({ data: null, error: i });
        throw i;
      }
    });
  }
  async _challenge(r) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (i) => {
          var a;
          const { data: u, error: d } = i;
          if (d)
            return this._returnResult({ data: null, error: d });
          const h = await Y(this.fetch, "POST", `${this.url}/factors/${r.factorId}/challenge`, {
            body: r,
            headers: this.headers,
            jwt: (a = u?.session) === null || a === void 0 ? void 0 : a.access_token
          });
          if (h.error)
            return h;
          const { data: p } = h;
          if (p.type !== "webauthn")
            return { data: p, error: null };
          switch (p.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, p), { webauthn: Object.assign(Object.assign({}, p.webauthn), { credential_options: Object.assign(Object.assign({}, p.webauthn.credential_options), { publicKey: Yg(p.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, p), { webauthn: Object.assign(Object.assign({}, p.webauthn), { credential_options: Object.assign(Object.assign({}, p.webauthn.credential_options), { publicKey: Xg(p.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (i) {
        if (H(i))
          return this._returnResult({ data: null, error: i });
        throw i;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(r) {
    const { data: i, error: a } = await this._challenge({
      factorId: r.factorId
    });
    return a ? this._returnResult({ data: null, error: a }) : await this._verify({
      factorId: r.factorId,
      challengeId: i.id,
      code: r.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var r;
    const { data: { user: i }, error: a } = await this.getUser();
    if (a)
      return { data: null, error: a };
    const u = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const d of (r = i?.factors) !== null && r !== void 0 ? r : [])
      u.all.push(d), d.status === "verified" && u[d.factor_type].push(d);
    return {
      data: u,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(r) {
    var i, a, u, d;
    if (r)
      try {
        const { payload: C } = xs(r);
        let O = null;
        C.aal && (O = C.aal);
        let P = O;
        const { data: { user: j }, error: D } = await this.getUser(r);
        if (D)
          return this._returnResult({ data: null, error: D });
        ((a = (i = j?.factors) === null || i === void 0 ? void 0 : i.filter((K) => K.status === "verified")) !== null && a !== void 0 ? a : []).length > 0 && (P = "aal2");
        const $ = C.amr || [];
        return { data: { currentLevel: O, nextLevel: P, currentAuthenticationMethods: $ }, error: null };
      } catch (C) {
        if (H(C))
          return this._returnResult({ data: null, error: C });
        throw C;
      }
    const { data: { session: h }, error: p } = await this.getSession();
    if (p)
      return this._returnResult({ data: null, error: p });
    if (!h)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: g } = xs(h.access_token);
    let v = null;
    g.aal && (v = g.aal);
    let w = v;
    ((d = (u = h.user.factors) === null || u === void 0 ? void 0 : u.filter((C) => C.status === "verified")) !== null && d !== void 0 ? d : []).length > 0 && (w = "aal2");
    const b = g.amr || [];
    return { data: { currentLevel: v, nextLevel: w, currentAuthenticationMethods: b }, error: null };
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the response includes only a redirect_url field, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(r) {
    try {
      return await this._useSession(async (i) => {
        const { data: { session: a }, error: u } = i;
        return u ? this._returnResult({ data: null, error: u }) : a ? await Y(this.fetch, "GET", `${this.url}/oauth/authorizations/${r}`, {
          headers: this.headers,
          jwt: a.access_token,
          xform: (d) => ({ data: d, error: null })
        }) : this._returnResult({ data: null, error: new ot() });
      });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(r, i) {
    try {
      return await this._useSession(async (a) => {
        const { data: { session: u }, error: d } = a;
        if (d)
          return this._returnResult({ data: null, error: d });
        if (!u)
          return this._returnResult({ data: null, error: new ot() });
        const h = await Y(this.fetch, "POST", `${this.url}/oauth/authorizations/${r}/consent`, {
          headers: this.headers,
          jwt: u.access_token,
          body: { action: "approve" },
          xform: (p) => ({ data: p, error: null })
        });
        return h.data && h.data.redirect_url && ze() && !i?.skipBrowserRedirect && window.location.assign(h.data.redirect_url), h;
      });
    } catch (a) {
      if (H(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(r, i) {
    try {
      return await this._useSession(async (a) => {
        const { data: { session: u }, error: d } = a;
        if (d)
          return this._returnResult({ data: null, error: d });
        if (!u)
          return this._returnResult({ data: null, error: new ot() });
        const h = await Y(this.fetch, "POST", `${this.url}/oauth/authorizations/${r}/consent`, {
          headers: this.headers,
          jwt: u.access_token,
          body: { action: "deny" },
          xform: (p) => ({ data: p, error: null })
        });
        return h.data && h.data.redirect_url && ze() && !i?.skipBrowserRedirect && window.location.assign(h.data.redirect_url), h;
      });
    } catch (a) {
      if (H(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: i }, error: a } = r;
        return a ? this._returnResult({ data: null, error: a }) : i ? await Y(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: i.access_token,
          xform: (u) => ({ data: u, error: null })
        }) : this._returnResult({ data: null, error: new ot() });
      });
    } catch (r) {
      if (H(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _revokeOAuthGrant(r) {
    try {
      return await this._useSession(async (i) => {
        const { data: { session: a }, error: u } = i;
        return u ? this._returnResult({ data: null, error: u }) : a ? (await Y(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: a.access_token,
          query: { client_id: r.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new ot() });
      });
    } catch (i) {
      if (H(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async fetchJwk(r, i = { keys: [] }) {
    let a = i.keys.find((p) => p.kid === r);
    if (a)
      return a;
    const u = Date.now();
    if (a = this.jwks.keys.find((p) => p.kid === r), a && this.jwks_cached_at + lg > u)
      return a;
    const { data: d, error: h } = await Y(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (h)
      throw h;
    return !d.keys || d.keys.length === 0 || (this.jwks = d, this.jwks_cached_at = u, a = d.keys.find((p) => p.kid === r), !a) ? null : a;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(r, i = {}) {
    try {
      let a = r;
      if (!a) {
        const { data: C, error: O } = await this.getSession();
        if (O || !C.session)
          return this._returnResult({ data: null, error: O });
        a = C.session.access_token;
      }
      const { header: u, payload: d, signature: h, raw: { header: p, payload: g } } = xs(a);
      i?.allowExpired || xg(d.exp);
      const v = !u.alg || u.alg.startsWith("HS") || !u.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(u.kid, i?.keys ? { keys: i.keys } : i?.jwks);
      if (!v) {
        const { error: C } = await this.getUser(a);
        if (C)
          throw C;
        return {
          data: {
            claims: d,
            header: u,
            signature: h
          },
          error: null
        };
      }
      const w = Ag(u.alg), R = await crypto.subtle.importKey("jwk", v, w, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(w, R, h, vg(`${p}.${g}`)))
        throw new Za("Invalid JWT signature");
      return {
        data: {
          claims: d,
          header: u,
          signature: h
        },
        error: null
      };
    } catch (a) {
      if (H(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
}
ci.nextInstanceID = {};
const um = ci, cm = "2.98.0";
let ri = "";
typeof Deno < "u" ? ri = "deno" : typeof document < "u" ? ri = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? ri = "react-native" : ri = "node";
const dm = { "X-Client-Info": `supabase-js-${ri}/${cm}` }, hm = { headers: dm }, fm = { schema: "public" }, pm = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, gm = {};
function di(s) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, di(s);
}
function mm(s, r) {
  if (di(s) != "object" || !s) return s;
  var i = s[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(s, r);
    if (di(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(s);
}
function vm(s) {
  var r = mm(s, "string");
  return di(r) == "symbol" ? r : r + "";
}
function ym(s, r, i) {
  return (r = vm(r)) in s ? Object.defineProperty(s, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[r] = i, s;
}
function Rd(s, r) {
  var i = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(s);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(s, u).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function Ee(s) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Rd(Object(i), !0).forEach(function(a) {
      ym(s, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : Rd(Object(i)).forEach(function(a) {
      Object.defineProperty(s, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return s;
}
const wm = (s) => s ? (...r) => s(...r) : (...r) => fetch(...r), _m = () => Headers, km = (s, r, i) => {
  const a = wm(i), u = _m();
  return async (d, h) => {
    var p;
    const g = (p = await r()) !== null && p !== void 0 ? p : s;
    let v = new u(h?.headers);
    return v.has("apikey") || v.set("apikey", s), v.has("Authorization") || v.set("Authorization", `Bearer ${g}`), a(d, Ee(Ee({}, h), {}, { headers: v }));
  };
};
function Sm(s) {
  return s.endsWith("/") ? s : s + "/";
}
function Em(s, r) {
  var i, a;
  const { db: u, auth: d, realtime: h, global: p } = s, { db: g, auth: v, realtime: w, global: R } = r, b = {
    db: Ee(Ee({}, g), u),
    auth: Ee(Ee({}, v), d),
    realtime: Ee(Ee({}, w), h),
    storage: {},
    global: Ee(Ee(Ee({}, R), p), {}, { headers: Ee(Ee({}, (i = R?.headers) !== null && i !== void 0 ? i : {}), (a = p?.headers) !== null && a !== void 0 ? a : {}) }),
    accessToken: async () => ""
  };
  return s.accessToken ? b.accessToken = s.accessToken : delete b.accessToken, b;
}
function Tm(s) {
  const r = s?.trim();
  if (!r) throw new Error("supabaseUrl is required.");
  if (!r.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(Sm(r));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var bm = class extends um {
  constructor(s) {
    super(s);
  }
}, Cm = class {
  /**
  * Create a new client for use in the browser.
  * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
  * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
  * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
  * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
  * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
  * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
  * @param options.realtime Options passed along to realtime-js constructor.
  * @param options.storage Options passed along to the storage-js constructor.
  * @param options.global.fetch A custom fetch implementation.
  * @param options.global.headers Any additional headers to send with each network request.
  * @example
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
  * const { data } = await supabase.from('profiles').select('*')
  * ```
  */
  constructor(s, r, i) {
    var a, u;
    this.supabaseUrl = s, this.supabaseKey = r;
    const d = Tm(s);
    if (!r) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", d), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", d), this.storageUrl = new URL("storage/v1", d), this.functionsUrl = new URL("functions/v1", d);
    const h = `sb-${d.hostname.split(".")[0]}-auth-token`, p = {
      db: fm,
      realtime: gm,
      auth: Ee(Ee({}, pm), {}, { storageKey: h }),
      global: hm
    }, g = Em(i ?? {}, p);
    if (this.storageKey = (a = g.auth.storageKey) !== null && a !== void 0 ? a : "", this.headers = (u = g.global.headers) !== null && u !== void 0 ? u : {}, g.accessToken)
      this.accessToken = g.accessToken, this.auth = new Proxy({}, { get: (w, R) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(R)} is not possible`);
      } });
    else {
      var v;
      this.auth = this._initSupabaseAuthClient((v = g.auth) !== null && v !== void 0 ? v : {}, this.headers, g.global.fetch);
    }
    this.fetch = km(r, this._getAccessToken.bind(this), g.global.fetch), this.realtime = this._initRealtimeClient(Ee({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this)
    }, g.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((w) => this.realtime.setAuth(w)).catch((w) => console.warn("Failed to set initial Realtime auth token:", w)), this.rest = new cp(new URL("rest/v1", d).href, {
      headers: this.headers,
      schema: g.db.schema,
      fetch: this.fetch,
      timeout: g.db.timeout,
      urlLengthLimit: g.db.urlLengthLimit
    }), this.storage = new ng(this.storageUrl.href, this.headers, this.fetch, i?.storage), g.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new rp(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(s) {
    return this.rest.from(s);
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(s) {
    return this.rest.schema(s);
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  rpc(s, r = {}, i = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(s, r, i);
  }
  /**
  * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
  *
  * @param {string} name - The name of the Realtime channel.
  * @param {Object} opts - The options to pass to the Realtime channel.
  *
  */
  channel(s, r = { config: {} }) {
    return this.realtime.channel(s, r);
  }
  /**
  * Returns all Realtime channels.
  */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
  * Unsubscribes and removes Realtime channel from Realtime client.
  *
  * @param {RealtimeChannel} channel - The name of the Realtime channel.
  *
  */
  removeChannel(s) {
    return this.realtime.removeChannel(s);
  }
  /**
  * Unsubscribes and removes all Realtime channels from Realtime client.
  */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var s = this, r, i;
    if (s.accessToken) return await s.accessToken();
    const { data: a } = await s.auth.getSession();
    return (r = (i = a.session) === null || i === void 0 ? void 0 : i.access_token) !== null && r !== void 0 ? r : s.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: s, persistSession: r, detectSessionInUrl: i, storage: a, userStorage: u, storageKey: d, flowType: h, lock: p, debug: g, throwOnError: v }, w, R) {
    const b = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new bm({
      url: this.authUrl.href,
      headers: Ee(Ee({}, b), w),
      storageKey: d,
      autoRefreshToken: s,
      persistSession: r,
      detectSessionInUrl: i,
      storage: a,
      userStorage: u,
      flowType: h,
      lock: p,
      debug: g,
      throwOnError: v,
      fetch: R,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((C) => C.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(s) {
    return new Rp(this.realtimeUrl.href, Ee(Ee({}, s), {}, { params: Ee(Ee({}, { apikey: this.supabaseKey }), s?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((s, r) => {
      this._handleTokenChanged(s, "CLIENT", r?.access_token);
    });
  }
  _handleTokenChanged(s, r, i) {
    (s === "TOKEN_REFRESHED" || s === "SIGNED_IN") && this.changedAccessToken !== i ? (this.changedAccessToken = i, this.realtime.setAuth(i)) : s === "SIGNED_OUT" && (this.realtime.setAuth(), r == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
};
const Rm = (s, r, i) => new Cm(s, r, i);
function Om() {
  if (typeof window < "u") return !1;
  const s = globalThis.process;
  if (!s) return !1;
  const r = s.version;
  if (r == null) return !1;
  const i = r.match(/^v(\d+)\./);
  return i ? parseInt(i[1], 10) <= 18 : !1;
}
Om() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const Pm = "https://qxozqgpuzthemsfotmvo.supabase.co", xm = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4b3pxZ3B1enRoZW1zZm90bXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2Nzg2NTUsImV4cCI6MjA4NjI1NDY1NX0.N_10hGPsTjO4aH5DkqVd3EkE14QLpuOQoENgff0uTbE", Od = Rm(Pm, xm);
var Wa = { exports: {} }, ti = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pd;
function Am() {
  if (Pd) return ti;
  Pd = 1;
  var s = el(), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(p, g, v) {
    var w, R = {}, b = null, C = null;
    v !== void 0 && (b = "" + v), g.key !== void 0 && (b = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (w in g) a.call(g, w) && !d.hasOwnProperty(w) && (R[w] = g[w]);
    if (p && p.defaultProps) for (w in g = p.defaultProps, g) R[w] === void 0 && (R[w] = g[w]);
    return { $$typeof: r, type: p, key: b, ref: C, props: R, _owner: u.current };
  }
  return ti.Fragment = i, ti.jsx = h, ti.jsxs = h, ti;
}
var xd;
function Im() {
  return xd || (xd = 1, Wa.exports = Am()), Wa.exports;
}
Im();
const jm = ["community", "bg", "text", "accent", "font"], Nm = `
  :host {
    display: block;
    contain: content;
  }

  :host([hidden]) {
    display: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .banner-mount {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: var(--embed-bg, transparent);
    color: var(--embed-text, #F5F0EB);
    font-family: var(--embed-font, sans-serif);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
function Lm({ announcements: s, onDismiss: r }) {
  const [i, a] = He.useState(!1), [u, d] = He.useState(0);
  if (!s || s.length === 0 || i)
    return null;
  const h = s.length, p = s[u], g = () => {
    d((u - 1 + h) % h);
  }, v = () => {
    d((u + 1) % h);
  }, w = () => {
    a(!0), r && r();
  };
  return He.createElement(
    "div",
    { style: It.banner },
    He.createElement(
      "div",
      { style: It.content },
      He.createElement(
        "div",
        { style: It.textArea },
        He.createElement("span", { style: It.title }, p.title),
        p.body && He.createElement("span", { style: It.body }, " — ", p.body)
      ),
      He.createElement(
        "div",
        { style: It.controls },
        h > 1 && He.createElement(
          He.Fragment,
          null,
          He.createElement("button", {
            onClick: g,
            style: It.arrowBtn,
            "aria-label": "Previous announcement"
          }, "‹"),
          He.createElement("span", { style: It.indicator }, `${u + 1} of ${h}`),
          He.createElement("button", {
            onClick: v,
            style: It.arrowBtn,
            "aria-label": "Next announcement"
          }, "›")
        ),
        He.createElement("button", {
          onClick: w,
          style: It.dismissBtn,
          "aria-label": "Dismiss announcements"
        }, "✕")
      )
    )
  );
}
const It = {
  banner: {
    background: "var(--embed-surface, var(--embed-bg, #1a1a1a))",
    color: "var(--embed-text, #F5F0EB)",
    borderLeft: "3px solid var(--embed-accent, var(--embed-primary, #6B2D5E))",
    borderRadius: "4px",
    padding: "0.5rem 0.75rem",
    fontSize: "0.85rem",
    lineHeight: "1.4"
  },
  content: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  },
  textArea: {
    flex: 1,
    minWidth: 0,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical"
  },
  title: {
    fontWeight: 700
  },
  body: {
    opacity: 0.85
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    flexShrink: 0
  },
  indicator: {
    fontSize: "0.75rem",
    opacity: 0.6,
    whiteSpace: "nowrap"
  },
  arrowBtn: {
    background: "none",
    border: "none",
    color: "var(--embed-text, #F5F0EB)",
    cursor: "pointer",
    fontSize: "1.1rem",
    padding: "0 0.2rem",
    lineHeight: 1,
    opacity: 0.7
  },
  dismissBtn: {
    background: "none",
    border: "none",
    color: "var(--embed-text, #F5F0EB)",
    cursor: "pointer",
    fontSize: "0.8rem",
    padding: "0 0.25rem",
    lineHeight: 1,
    opacity: 0.5,
    marginLeft: "0.25rem"
  }
};
class $m extends HTMLElement {
  static get observedAttributes() {
    return jm;
  }
  constructor() {
    super(), this._shadow = this.attachShadow({ mode: "open" }), this._root = null, this._mounted = !1, this._refreshTimer = null, this._announcements = [];
    const r = document.createElement("style");
    r.textContent = Nm, this._shadow.appendChild(r), this._mountEl = document.createElement("div"), this._mountEl.className = "banner-mount", this._shadow.appendChild(this._mountEl);
  }
  connectedCallback() {
    this._mounted = !0, this._applyTheme(), this._loadFont(), this._fetchAndRender(), this._refreshTimer = setInterval(() => {
      this._fetchAndRender();
    }, 6e4);
  }
  disconnectedCallback() {
    this._mounted = !1, this._refreshTimer && (clearInterval(this._refreshTimer), this._refreshTimer = null), this._root && (this._root.unmount(), this._root = null);
  }
  attributeChangedCallback(r, i, a) {
    i !== a && this._mounted && (this._applyTheme(), this._loadFont(), r === "community" ? this._fetchAndRender() : this._render());
  }
  _dispatch(r, i = {}) {
    this.dispatchEvent(new CustomEvent(r, {
      bubbles: !0,
      composed: !0,
      detail: i
    }));
  }
  _applyTheme() {
    const r = this.getAttribute("bg"), i = this.getAttribute("text"), a = this.getAttribute("accent"), u = this.getAttribute("font");
    if (r && (this._mountEl.style.setProperty("--embed-bg", r), this._mountEl.style.setProperty("--embed-surface", r)), i && this._mountEl.style.setProperty("--embed-text", i), a && (this._mountEl.style.setProperty("--embed-accent", a), this._mountEl.style.setProperty("--embed-primary", a)), u) {
      const d = `"${u.replace(/\+/g, " ")}", sans-serif`;
      this._mountEl.style.setProperty("--embed-font", d);
    }
  }
  _loadFont() {
    const r = this.getAttribute("font");
    if (!r) return;
    const i = "gstreet-banner-font", a = this._shadow.getElementById(i);
    a && a.remove();
    const u = r.replace(/\+/g, " "), d = document.createElement("link");
    d.id = i, d.rel = "stylesheet", d.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(u)}:wght@400;600;700&display=swap`, this._shadow.appendChild(d);
  }
  async _fetchAndRender() {
    const r = this.getAttribute("community");
    if (!r) {
      this._announcements = [], this._render();
      return;
    }
    const { data: i } = await Od.from("communities").select("id").eq("slug", r).single();
    if (!i) {
      this._announcements = [], this._render();
      return;
    }
    const { data: a } = await Od.from("community_announcements").select("title, body, pinned").eq("community_id", i.id).eq("pinned", !0).order("created_at", { ascending: !1 }).limit(3);
    this._announcements = a || [], this._dispatch("banner:loaded", { count: this._announcements.length }), this._render();
  }
  _render() {
    if (this._mounted) {
      if (this._announcements.length === 0) {
        this._root && (this._root.unmount(), this._root = null), this._mountEl.innerHTML = "";
        return;
      }
      this._root || (this._mountEl.innerHTML = "", this._root = Xf.createRoot(this._mountEl)), this._root.render(
        He.createElement(Lm, {
          announcements: this._announcements,
          onDismiss: () => this._dispatch("banner:dismissed")
        })
      );
    }
  }
}
customElements.get("gstreet-banner") || customElements.define("gstreet-banner", $m);
export {
  $m as GstreetBannerElement
};
