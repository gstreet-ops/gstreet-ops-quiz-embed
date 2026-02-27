function rp(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var La = { exports: {} }, ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var td;
function np() {
  if (td) return ae;
  td = 1;
  var s = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), h = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), k = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != "object" ? null : (b = k && b[k] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var E = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, O = {};
  function A(b, L, oe) {
    this.props = b, this.context = L, this.refs = O, this.updater = oe || E;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(b, L) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, L, "setState");
  }, A.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function j() {
  }
  j.prototype = A.prototype;
  function M(b, L, oe) {
    this.props = b, this.context = L, this.refs = O, this.updater = oe || E;
  }
  var P = M.prototype = new j();
  P.constructor = M, C(P, A.prototype), P.isPureReactComponent = !0;
  var B = Array.isArray, Z = Object.prototype.hasOwnProperty, U = { current: null }, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(b, L, oe) {
    var le, de = {}, he = null, ye = null;
    if (L != null) for (le in L.ref !== void 0 && (ye = L.ref), L.key !== void 0 && (he = "" + L.key), L) Z.call(L, le) && !ie.hasOwnProperty(le) && (de[le] = L[le]);
    var pe = arguments.length - 2;
    if (pe === 1) de.children = oe;
    else if (1 < pe) {
      for (var Ee = Array(pe), ot = 0; ot < pe; ot++) Ee[ot] = arguments[ot + 2];
      de.children = Ee;
    }
    if (b && b.defaultProps) for (le in pe = b.defaultProps, pe) de[le] === void 0 && (de[le] = pe[le]);
    return { $$typeof: s, type: b, key: he, ref: ye, props: de, _owner: U.current };
  }
  function _e(b, L) {
    return { $$typeof: s, type: b.type, key: L, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function He(b) {
    return typeof b == "object" && b !== null && b.$$typeof === s;
  }
  function _t(b) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(oe) {
      return L[oe];
    });
  }
  var Ze = /\/+/g;
  function Ce(b, L) {
    return typeof b == "object" && b !== null && b.key != null ? _t("" + b.key) : L.toString(36);
  }
  function ge(b, L, oe, le, de) {
    var he = typeof b;
    (he === "undefined" || he === "boolean") && (b = null);
    var ye = !1;
    if (b === null) ye = !0;
    else switch (he) {
      case "string":
      case "number":
        ye = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case s:
          case r:
            ye = !0;
        }
    }
    if (ye) return ye = b, de = de(ye), b = le === "" ? "." + Ce(ye, 0) : le, B(de) ? (oe = "", b != null && (oe = b.replace(Ze, "$&/") + "/"), ge(de, L, oe, "", function(ot) {
      return ot;
    })) : de != null && (He(de) && (de = _e(de, oe + (!de.key || ye && ye.key === de.key ? "" : ("" + de.key).replace(Ze, "$&/") + "/") + b)), L.push(de)), 1;
    if (ye = 0, le = le === "" ? "." : le + ":", B(b)) for (var pe = 0; pe < b.length; pe++) {
      he = b[pe];
      var Ee = le + Ce(he, pe);
      ye += ge(he, L, oe, Ee, de);
    }
    else if (Ee = w(b), typeof Ee == "function") for (b = Ee.call(b), pe = 0; !(he = b.next()).done; ) he = he.value, Ee = le + Ce(he, pe++), ye += ge(he, L, oe, Ee, de);
    else if (he === "object") throw L = String(b), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    return ye;
  }
  function Re(b, L, oe) {
    if (b == null) return b;
    var le = [], de = 0;
    return ge(b, le, "", "", function(he) {
      return L.call(oe, he, de++);
    }), le;
  }
  function Le(b) {
    if (b._status === -1) {
      var L = b._result;
      L = L(), L.then(function(oe) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = oe);
      }, function(oe) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = oe);
      }), b._status === -1 && (b._status = 0, b._result = L);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var H = { current: null }, D = { transition: null }, J = { ReactCurrentDispatcher: H, ReactCurrentBatchConfig: D, ReactCurrentOwner: U };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ae.Children = { map: Re, forEach: function(b, L, oe) {
    Re(b, function() {
      L.apply(this, arguments);
    }, oe);
  }, count: function(b) {
    var L = 0;
    return Re(b, function() {
      L++;
    }), L;
  }, toArray: function(b) {
    return Re(b, function(L) {
      return L;
    }) || [];
  }, only: function(b) {
    if (!He(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, ae.Component = A, ae.Fragment = i, ae.Profiler = u, ae.PureComponent = M, ae.StrictMode = a, ae.Suspense = m, ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, ae.act = W, ae.cloneElement = function(b, L, oe) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var le = C({}, b.props), de = b.key, he = b.ref, ye = b._owner;
    if (L != null) {
      if (L.ref !== void 0 && (he = L.ref, ye = U.current), L.key !== void 0 && (de = "" + L.key), b.type && b.type.defaultProps) var pe = b.type.defaultProps;
      for (Ee in L) Z.call(L, Ee) && !ie.hasOwnProperty(Ee) && (le[Ee] = L[Ee] === void 0 && pe !== void 0 ? pe[Ee] : L[Ee]);
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) le.children = oe;
    else if (1 < Ee) {
      pe = Array(Ee);
      for (var ot = 0; ot < Ee; ot++) pe[ot] = arguments[ot + 2];
      le.children = pe;
    }
    return { $$typeof: s, type: b.type, key: de, ref: he, props: le, _owner: ye };
  }, ae.createContext = function(b) {
    return b = { $$typeof: h, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: c, _context: b }, b.Consumer = b;
  }, ae.createElement = ue, ae.createFactory = function(b) {
    var L = ue.bind(null, b);
    return L.type = b, L;
  }, ae.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(b) {
    return { $$typeof: f, render: b };
  }, ae.isValidElement = He, ae.lazy = function(b) {
    return { $$typeof: v, _payload: { _status: -1, _result: b }, _init: Le };
  }, ae.memo = function(b, L) {
    return { $$typeof: g, type: b, compare: L === void 0 ? null : L };
  }, ae.startTransition = function(b) {
    var L = D.transition;
    D.transition = {};
    try {
      b();
    } finally {
      D.transition = L;
    }
  }, ae.unstable_act = W, ae.useCallback = function(b, L) {
    return H.current.useCallback(b, L);
  }, ae.useContext = function(b) {
    return H.current.useContext(b);
  }, ae.useDebugValue = function() {
  }, ae.useDeferredValue = function(b) {
    return H.current.useDeferredValue(b);
  }, ae.useEffect = function(b, L) {
    return H.current.useEffect(b, L);
  }, ae.useId = function() {
    return H.current.useId();
  }, ae.useImperativeHandle = function(b, L, oe) {
    return H.current.useImperativeHandle(b, L, oe);
  }, ae.useInsertionEffect = function(b, L) {
    return H.current.useInsertionEffect(b, L);
  }, ae.useLayoutEffect = function(b, L) {
    return H.current.useLayoutEffect(b, L);
  }, ae.useMemo = function(b, L) {
    return H.current.useMemo(b, L);
  }, ae.useReducer = function(b, L, oe) {
    return H.current.useReducer(b, L, oe);
  }, ae.useRef = function(b) {
    return H.current.useRef(b);
  }, ae.useState = function(b) {
    return H.current.useState(b);
  }, ae.useSyncExternalStore = function(b, L, oe) {
    return H.current.useSyncExternalStore(b, L, oe);
  }, ae.useTransition = function() {
    return H.current.useTransition();
  }, ae.version = "18.3.1", ae;
}
var rd;
function il() {
  return rd || (rd = 1, La.exports = np()), La.exports;
}
var X = il();
const ip = /* @__PURE__ */ rp(X);
var Ts = {}, $a = { exports: {} }, st = {}, Ua = { exports: {} }, Da = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nd;
function sp() {
  return nd || (nd = 1, (function(s) {
    function r(D, J) {
      var W = D.length;
      D.push(J);
      e: for (; 0 < W; ) {
        var b = W - 1 >>> 1, L = D[b];
        if (0 < u(L, J)) D[b] = J, D[W] = L, W = b;
        else break e;
      }
    }
    function i(D) {
      return D.length === 0 ? null : D[0];
    }
    function a(D) {
      if (D.length === 0) return null;
      var J = D[0], W = D.pop();
      if (W !== J) {
        D[0] = W;
        e: for (var b = 0, L = D.length, oe = L >>> 1; b < oe; ) {
          var le = 2 * (b + 1) - 1, de = D[le], he = le + 1, ye = D[he];
          if (0 > u(de, W)) he < L && 0 > u(ye, de) ? (D[b] = ye, D[he] = W, b = he) : (D[b] = de, D[le] = W, b = le);
          else if (he < L && 0 > u(ye, W)) D[b] = ye, D[he] = W, b = he;
          else break e;
        }
      }
      return J;
    }
    function u(D, J) {
      var W = D.sortIndex - J.sortIndex;
      return W !== 0 ? W : D.id - J.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      s.unstable_now = function() {
        return c.now();
      };
    } else {
      var h = Date, f = h.now();
      s.unstable_now = function() {
        return h.now() - f;
      };
    }
    var m = [], g = [], v = 1, k = null, w = 3, E = !1, C = !1, O = !1, A = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function P(D) {
      for (var J = i(g); J !== null; ) {
        if (J.callback === null) a(g);
        else if (J.startTime <= D) a(g), J.sortIndex = J.expirationTime, r(m, J);
        else break;
        J = i(g);
      }
    }
    function B(D) {
      if (O = !1, P(D), !C) if (i(m) !== null) C = !0, Le(Z);
      else {
        var J = i(g);
        J !== null && H(B, J.startTime - D);
      }
    }
    function Z(D, J) {
      C = !1, O && (O = !1, j(ue), ue = -1), E = !0;
      var W = w;
      try {
        for (P(J), k = i(m); k !== null && (!(k.expirationTime > J) || D && !_t()); ) {
          var b = k.callback;
          if (typeof b == "function") {
            k.callback = null, w = k.priorityLevel;
            var L = b(k.expirationTime <= J);
            J = s.unstable_now(), typeof L == "function" ? k.callback = L : k === i(m) && a(m), P(J);
          } else a(m);
          k = i(m);
        }
        if (k !== null) var oe = !0;
        else {
          var le = i(g);
          le !== null && H(B, le.startTime - J), oe = !1;
        }
        return oe;
      } finally {
        k = null, w = W, E = !1;
      }
    }
    var U = !1, ie = null, ue = -1, _e = 5, He = -1;
    function _t() {
      return !(s.unstable_now() - He < _e);
    }
    function Ze() {
      if (ie !== null) {
        var D = s.unstable_now();
        He = D;
        var J = !0;
        try {
          J = ie(!0, D);
        } finally {
          J ? Ce() : (U = !1, ie = null);
        }
      } else U = !1;
    }
    var Ce;
    if (typeof M == "function") Ce = function() {
      M(Ze);
    };
    else if (typeof MessageChannel < "u") {
      var ge = new MessageChannel(), Re = ge.port2;
      ge.port1.onmessage = Ze, Ce = function() {
        Re.postMessage(null);
      };
    } else Ce = function() {
      A(Ze, 0);
    };
    function Le(D) {
      ie = D, U || (U = !0, Ce());
    }
    function H(D, J) {
      ue = A(function() {
        D(s.unstable_now());
      }, J);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, s.unstable_continueExecution = function() {
      C || E || (C = !0, Le(Z));
    }, s.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _e = 0 < D ? Math.floor(1e3 / D) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, s.unstable_getFirstCallbackNode = function() {
      return i(m);
    }, s.unstable_next = function(D) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = w;
      }
      var W = w;
      w = J;
      try {
        return D();
      } finally {
        w = W;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(D, J) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var W = w;
      w = D;
      try {
        return J();
      } finally {
        w = W;
      }
    }, s.unstable_scheduleCallback = function(D, J, W) {
      var b = s.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? b + W : b) : W = b, D) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = W + L, D = { id: v++, callback: J, priorityLevel: D, startTime: W, expirationTime: L, sortIndex: -1 }, W > b ? (D.sortIndex = W, r(g, D), i(m) === null && D === i(g) && (O ? (j(ue), ue = -1) : O = !0, H(B, W - b))) : (D.sortIndex = L, r(m, D), C || E || (C = !0, Le(Z))), D;
    }, s.unstable_shouldYield = _t, s.unstable_wrapCallback = function(D) {
      var J = w;
      return function() {
        var W = w;
        w = J;
        try {
          return D.apply(this, arguments);
        } finally {
          w = W;
        }
      };
    };
  })(Da)), Da;
}
var id;
function op() {
  return id || (id = 1, Ua.exports = sp()), Ua.exports;
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
var sd;
function ap() {
  if (sd) return st;
  sd = 1;
  var s = il(), r = op();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), u = {};
  function c(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, k = {};
  function w(e) {
    return m.call(k, e) ? !0 : m.call(v, e) ? !1 : g.test(e) ? k[e] = !0 : (v[e] = !0, !1);
  }
  function E(e, t, n, o) {
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
  function C(e, t, n, o) {
    if (t === null || typeof t > "u" || E(e, t, n, o)) return !0;
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
  function O(e, t, n, o, l, d, p) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = p;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    A[e] = new O(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    A[t] = new O(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    A[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    A[e] = new O(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    A[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    A[e] = new O(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    A[e] = new O(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    A[e] = new O(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    A[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      j,
      M
    );
    A[t] = new O(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(j, M);
    A[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(j, M);
    A[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    A[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    A[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function P(e, t, n, o) {
    var l = A.hasOwnProperty(t) ? A[t] : null;
    (l !== null ? l.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C(t, n, l, o) && (n = null), o || l === null ? w(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, o = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
  }
  var B = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Z = Symbol.for("react.element"), U = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), ue = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), He = Symbol.for("react.provider"), _t = Symbol.for("react.context"), Ze = Symbol.for("react.forward_ref"), Ce = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), Re = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), D = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Object.assign, b;
  function L(e) {
    if (b === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      b = t && t[1] || "";
    }
    return `
` + b + e;
  }
  var oe = !1;
  function le(e, t) {
    if (!e || oe) return "";
    oe = !0;
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
        } catch (R) {
          var o = R;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (R) {
          o = R;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (R) {
          o = R;
        }
        e();
      }
    } catch (R) {
      if (R && o && typeof R.stack == "string") {
        for (var l = R.stack.split(`
`), d = o.stack.split(`
`), p = l.length - 1, y = d.length - 1; 1 <= p && 0 <= y && l[p] !== d[y]; ) y--;
        for (; 1 <= p && 0 <= y; p--, y--) if (l[p] !== d[y]) {
          if (p !== 1 || y !== 1)
            do
              if (p--, y--, 0 > y || l[p] !== d[y]) {
                var _ = `
` + l[p].replace(" at new ", " at ");
                return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), _;
              }
            while (1 <= p && 0 <= y);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function de(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = le(e.type, !1), e;
      case 11:
        return e = le(e.type.render, !1), e;
      case 1:
        return e = le(e.type, !0), e;
      default:
        return "";
    }
  }
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ie:
        return "Fragment";
      case U:
        return "Portal";
      case _e:
        return "Profiler";
      case ue:
        return "StrictMode";
      case Ce:
        return "Suspense";
      case ge:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case _t:
        return (e.displayName || "Context") + ".Consumer";
      case He:
        return (e._context.displayName || "Context") + ".Provider";
      case Ze:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Re:
        return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
      case Le:
        t = e._payload, e = e._init;
        try {
          return he(e(t));
        } catch {
        }
    }
    return null;
  }
  function ye(e) {
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
        return he(t);
      case 8:
        return t === ue ? "StrictMode" : "Mode";
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
  function pe(e) {
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
  function Ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ot(e) {
    var t = Ee(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, d = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(p) {
        o = "" + p, d.call(this, p);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(p) {
        o = "" + p;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function gi(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function al(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), o = "";
    return e && (o = Ee(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== n ? (t.setValue(e), !0) : !1;
  }
  function yi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Fs(e, t) {
    var n = t.checked;
    return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ll(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, o = t.checked != null ? t.checked : t.defaultChecked;
    n = pe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: o, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ul(e, t) {
    t = t.checked, t != null && P(e, "checked", t, !1);
  }
  function Ms(e, t) {
    ul(e, t);
    var n = pe(t.value), o = t.type;
    if (n != null) o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? qs(e, t.type, n) : t.hasOwnProperty("defaultValue") && qs(e, t.type, pe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function cl(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function qs(e, t, n) {
    (t !== "number" || yi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var yn = Array.isArray;
  function Nr(e, t, n, o) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && o && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + pe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, o && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ws(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function dl(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (yn(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: pe(n) };
  }
  function hl(e, t) {
    var n = pe(t.value), o = pe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), o != null && (e.defaultValue = "" + o);
  }
  function fl(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function pl(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? pl(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var vi, ml = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, o, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (vi = vi || document.createElement("div"), vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function vn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wn = {
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
  }, sh = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wn).forEach(function(e) {
    sh.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), wn[t] = wn[e];
    });
  });
  function gl(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wn.hasOwnProperty(e) && wn[e] ? ("" + t).trim() : t + "px";
  }
  function yl(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var o = n.indexOf("--") === 0, l = gl(n, t[n], o);
      n === "float" && (n = "cssFloat"), o ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var oh = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Hs(e, t) {
    if (t) {
      if (oh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Ks(e, t) {
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
  var Gs = null;
  function Js(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Qs = null, Lr = null, $r = null;
  function vl(e) {
    if (e = Fn(e)) {
      if (typeof Qs != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Fi(t), Qs(e.stateNode, e.type, t));
    }
  }
  function wl(e) {
    Lr ? $r ? $r.push(e) : $r = [e] : Lr = e;
  }
  function _l() {
    if (Lr) {
      var e = Lr, t = $r;
      if ($r = Lr = null, vl(e), t) for (e = 0; e < t.length; e++) vl(t[e]);
    }
  }
  function Sl(e, t) {
    return e(t);
  }
  function kl() {
  }
  var Ys = !1;
  function El(e, t, n) {
    if (Ys) return e(t, n);
    Ys = !0;
    try {
      return Sl(e, t, n);
    } finally {
      Ys = !1, (Lr !== null || $r !== null) && (kl(), _l());
    }
  }
  function _n(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = Fi(n);
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
  var Xs = !1;
  if (f) try {
    var Sn = {};
    Object.defineProperty(Sn, "passive", { get: function() {
      Xs = !0;
    } }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
  } catch {
    Xs = !1;
  }
  function ah(e, t, n, o, l, d, p, y, _) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch ($) {
      this.onError($);
    }
  }
  var kn = !1, wi = null, _i = !1, Zs = null, lh = { onError: function(e) {
    kn = !0, wi = e;
  } };
  function uh(e, t, n, o, l, d, p, y, _) {
    kn = !1, wi = null, ah.apply(lh, arguments);
  }
  function ch(e, t, n, o, l, d, p, y, _) {
    if (uh.apply(this, arguments), kn) {
      if (kn) {
        var R = wi;
        kn = !1, wi = null;
      } else throw Error(i(198));
      _i || (_i = !0, Zs = R);
    }
  }
  function mr(e) {
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
  function bl(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function xl(e) {
    if (mr(e) !== e) throw Error(i(188));
  }
  function dh(e) {
    var t = e.alternate;
    if (!t) {
      if (t = mr(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, o = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var d = l.alternate;
      if (d === null) {
        if (o = l.return, o !== null) {
          n = o;
          continue;
        }
        break;
      }
      if (l.child === d.child) {
        for (d = l.child; d; ) {
          if (d === n) return xl(l), e;
          if (d === o) return xl(l), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== o.return) n = l, o = d;
      else {
        for (var p = !1, y = l.child; y; ) {
          if (y === n) {
            p = !0, n = l, o = d;
            break;
          }
          if (y === o) {
            p = !0, o = l, n = d;
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = d.child; y; ) {
            if (y === n) {
              p = !0, n = d, o = l;
              break;
            }
            if (y === o) {
              p = !0, o = d, n = l;
              break;
            }
            y = y.sibling;
          }
          if (!p) throw Error(i(189));
        }
      }
      if (n.alternate !== o) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function Tl(e) {
    return e = dh(e), e !== null ? Cl(e) : null;
  }
  function Cl(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Cl(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Rl = r.unstable_scheduleCallback, Ol = r.unstable_cancelCallback, hh = r.unstable_shouldYield, fh = r.unstable_requestPaint, Pe = r.unstable_now, ph = r.unstable_getCurrentPriorityLevel, eo = r.unstable_ImmediatePriority, Al = r.unstable_UserBlockingPriority, Si = r.unstable_NormalPriority, mh = r.unstable_LowPriority, Pl = r.unstable_IdlePriority, ki = null, jt = null;
  function gh(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function") try {
      jt.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var St = Math.clz32 ? Math.clz32 : wh, yh = Math.log, vh = Math.LN2;
  function wh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yh(e) / vh | 0) | 0;
  }
  var Ei = 64, bi = 4194304;
  function En(e) {
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
  function xi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0, l = e.suspendedLanes, d = e.pingedLanes, p = n & 268435455;
    if (p !== 0) {
      var y = p & ~l;
      y !== 0 ? o = En(y) : (d &= p, d !== 0 && (o = En(d)));
    } else p = n & ~l, p !== 0 ? o = En(p) : d !== 0 && (o = En(d));
    if (o === 0) return 0;
    if (t !== 0 && t !== o && (t & l) === 0 && (l = o & -o, d = t & -t, l >= d || l === 16 && (d & 4194240) !== 0)) return t;
    if ((o & 4) !== 0 && (o |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= o; 0 < t; ) n = 31 - St(t), l = 1 << n, o |= e[n], t &= ~l;
    return o;
  }
  function _h(e, t) {
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
  function Sh(e, t) {
    for (var n = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
      var p = 31 - St(d), y = 1 << p, _ = l[p];
      _ === -1 ? ((y & n) === 0 || (y & o) !== 0) && (l[p] = _h(y, t)) : _ <= t && (e.expiredLanes |= y), d &= ~y;
    }
  }
  function to(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function jl() {
    var e = Ei;
    return Ei <<= 1, (Ei & 4194240) === 0 && (Ei = 64), e;
  }
  function ro(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
  }
  function kh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - St(n), d = 1 << l;
      t[l] = 0, o[l] = -1, e[l] = -1, n &= ~d;
    }
  }
  function no(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var o = 31 - St(n), l = 1 << o;
      l & t | e[o] & t && (e[o] |= t), n &= ~l;
    }
  }
  var me = 0;
  function Il(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Nl, io, Ll, $l, Ul, so = !1, Ti = [], Gt = null, Jt = null, Qt = null, xn = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Yt = [], Eh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Dl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gt = null;
        break;
      case "dragenter":
      case "dragleave":
        Jt = null;
        break;
      case "mouseover":
      case "mouseout":
        Qt = null;
        break;
      case "pointerover":
      case "pointerout":
        xn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tn.delete(t.pointerId);
    }
  }
  function Cn(e, t, n, o, l, d) {
    return e === null || e.nativeEvent !== d ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: o, nativeEvent: d, targetContainers: [l] }, t !== null && (t = Fn(t), t !== null && io(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function bh(e, t, n, o, l) {
    switch (t) {
      case "focusin":
        return Gt = Cn(Gt, e, t, n, o, l), !0;
      case "dragenter":
        return Jt = Cn(Jt, e, t, n, o, l), !0;
      case "mouseover":
        return Qt = Cn(Qt, e, t, n, o, l), !0;
      case "pointerover":
        var d = l.pointerId;
        return xn.set(d, Cn(xn.get(d) || null, e, t, n, o, l)), !0;
      case "gotpointercapture":
        return d = l.pointerId, Tn.set(d, Cn(Tn.get(d) || null, e, t, n, o, l)), !0;
    }
    return !1;
  }
  function zl(e) {
    var t = gr(e.target);
    if (t !== null) {
      var n = mr(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = bl(n), t !== null) {
            e.blockedOn = t, Ul(e.priority, function() {
              Ll(n);
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
  function Ci(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ao(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        Gs = o, n.target.dispatchEvent(o), Gs = null;
      } else return t = Fn(n), t !== null && io(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Bl(e, t, n) {
    Ci(e) && n.delete(t);
  }
  function xh() {
    so = !1, Gt !== null && Ci(Gt) && (Gt = null), Jt !== null && Ci(Jt) && (Jt = null), Qt !== null && Ci(Qt) && (Qt = null), xn.forEach(Bl), Tn.forEach(Bl);
  }
  function Rn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, so || (so = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, xh)));
  }
  function On(e) {
    function t(l) {
      return Rn(l, e);
    }
    if (0 < Ti.length) {
      Rn(Ti[0], e);
      for (var n = 1; n < Ti.length; n++) {
        var o = Ti[n];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (Gt !== null && Rn(Gt, e), Jt !== null && Rn(Jt, e), Qt !== null && Rn(Qt, e), xn.forEach(t), Tn.forEach(t), n = 0; n < Yt.length; n++) o = Yt[n], o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < Yt.length && (n = Yt[0], n.blockedOn === null); ) zl(n), n.blockedOn === null && Yt.shift();
  }
  var Ur = B.ReactCurrentBatchConfig, Ri = !0;
  function Th(e, t, n, o) {
    var l = me, d = Ur.transition;
    Ur.transition = null;
    try {
      me = 1, oo(e, t, n, o);
    } finally {
      me = l, Ur.transition = d;
    }
  }
  function Ch(e, t, n, o) {
    var l = me, d = Ur.transition;
    Ur.transition = null;
    try {
      me = 4, oo(e, t, n, o);
    } finally {
      me = l, Ur.transition = d;
    }
  }
  function oo(e, t, n, o) {
    if (Ri) {
      var l = ao(e, t, n, o);
      if (l === null) xo(e, t, o, Oi, n), Dl(e, o);
      else if (bh(l, e, t, n, o)) o.stopPropagation();
      else if (Dl(e, o), t & 4 && -1 < Eh.indexOf(e)) {
        for (; l !== null; ) {
          var d = Fn(l);
          if (d !== null && Nl(d), d = ao(e, t, n, o), d === null && xo(e, t, o, Oi, n), d === l) break;
          l = d;
        }
        l !== null && o.stopPropagation();
      } else xo(e, t, o, null, n);
    }
  }
  var Oi = null;
  function ao(e, t, n, o) {
    if (Oi = null, e = Js(o), e = gr(e), e !== null) if (t = mr(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = bl(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Oi = e, null;
  }
  function Fl(e) {
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
        switch (ph()) {
          case eo:
            return 1;
          case Al:
            return 4;
          case Si:
          case mh:
            return 16;
          case Pl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xt = null, lo = null, Ai = null;
  function Ml() {
    if (Ai) return Ai;
    var e, t = lo, n = t.length, o, l = "value" in Xt ? Xt.value : Xt.textContent, d = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var p = n - e;
    for (o = 1; o <= p && t[n - o] === l[d - o]; o++) ;
    return Ai = l.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Pi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ji() {
    return !0;
  }
  function ql() {
    return !1;
  }
  function at(e) {
    function t(n, o, l, d, p) {
      this._reactName = n, this._targetInst = l, this.type = o, this.nativeEvent = d, this.target = p, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(d) : d[y]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ji : ql, this.isPropagationStopped = ql, this;
    }
    return W(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ji);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ji);
    }, persist: function() {
    }, isPersistent: ji }), t;
  }
  var Dr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, uo = at(Dr), An = W({}, Dr, { view: 0, detail: 0 }), Rh = at(An), co, ho, Pn, Ii = W({}, An, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: po, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (co = e.screenX - Pn.screenX, ho = e.screenY - Pn.screenY) : ho = co = 0, Pn = e), co);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ho;
  } }), Wl = at(Ii), Oh = W({}, Ii, { dataTransfer: 0 }), Ah = at(Oh), Ph = W({}, An, { relatedTarget: 0 }), fo = at(Ph), jh = W({}, Dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ih = at(jh), Nh = W({}, Dr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Lh = at(Nh), $h = W({}, Dr, { data: 0 }), Vl = at($h), Uh = {
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
  }, Dh = {
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
  }, zh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zh[e]) ? !!t[e] : !1;
  }
  function po() {
    return Bh;
  }
  var Fh = W({}, An, { key: function(e) {
    if (e.key) {
      var t = Uh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: po, charCode: function(e) {
    return e.type === "keypress" ? Pi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Mh = at(Fh), qh = W({}, Ii, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hl = at(qh), Wh = W({}, An, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: po }), Vh = at(Wh), Hh = W({}, Dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kh = at(Hh), Gh = W({}, Ii, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Jh = at(Gh), Qh = [9, 13, 27, 32], mo = f && "CompositionEvent" in window, jn = null;
  f && "documentMode" in document && (jn = document.documentMode);
  var Yh = f && "TextEvent" in window && !jn, Kl = f && (!mo || jn && 8 < jn && 11 >= jn), Gl = " ", Jl = !1;
  function Ql(e, t) {
    switch (e) {
      case "keyup":
        return Qh.indexOf(t.keyCode) !== -1;
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
  function Yl(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var zr = !1;
  function Xh(e, t) {
    switch (e) {
      case "compositionend":
        return Yl(t);
      case "keypress":
        return t.which !== 32 ? null : (Jl = !0, Gl);
      case "textInput":
        return e = t.data, e === Gl && Jl ? null : e;
      default:
        return null;
    }
  }
  function Zh(e, t) {
    if (zr) return e === "compositionend" || !mo && Ql(e, t) ? (e = Ml(), Ai = lo = Xt = null, zr = !1, e) : null;
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
        return Kl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ef = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Xl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ef[e.type] : t === "textarea";
  }
  function Zl(e, t, n, o) {
    wl(o), t = Di(t, "onChange"), 0 < t.length && (n = new uo("onChange", "change", null, n, o), e.push({ event: n, listeners: t }));
  }
  var In = null, Nn = null;
  function tf(e) {
    yu(e, 0);
  }
  function Ni(e) {
    var t = Wr(e);
    if (al(t)) return e;
  }
  function rf(e, t) {
    if (e === "change") return t;
  }
  var eu = !1;
  if (f) {
    var go;
    if (f) {
      var yo = "oninput" in document;
      if (!yo) {
        var tu = document.createElement("div");
        tu.setAttribute("oninput", "return;"), yo = typeof tu.oninput == "function";
      }
      go = yo;
    } else go = !1;
    eu = go && (!document.documentMode || 9 < document.documentMode);
  }
  function ru() {
    In && (In.detachEvent("onpropertychange", nu), Nn = In = null);
  }
  function nu(e) {
    if (e.propertyName === "value" && Ni(Nn)) {
      var t = [];
      Zl(t, Nn, e, Js(e)), El(tf, t);
    }
  }
  function nf(e, t, n) {
    e === "focusin" ? (ru(), In = t, Nn = n, In.attachEvent("onpropertychange", nu)) : e === "focusout" && ru();
  }
  function sf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ni(Nn);
  }
  function of(e, t) {
    if (e === "click") return Ni(t);
  }
  function af(e, t) {
    if (e === "input" || e === "change") return Ni(t);
  }
  function lf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var kt = typeof Object.is == "function" ? Object.is : lf;
  function Ln(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var l = n[o];
      if (!m.call(t, l) || !kt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function iu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function su(e, t) {
    var n = iu(e);
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
      n = iu(n);
    }
  }
  function ou(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ou(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function au() {
    for (var e = window, t = yi(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = yi(e.document);
    }
    return t;
  }
  function vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function uf(e) {
    var t = au(), n = e.focusedElem, o = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ou(n.ownerDocument.documentElement, n)) {
      if (o !== null && vo(n)) {
        if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, d = Math.min(o.start, l);
          o = o.end === void 0 ? d : Math.min(o.end, l), !e.extend && d > o && (l = o, o = d, d = l), l = su(n, d);
          var p = su(
            n,
            o
          );
          l && p && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== p.node || e.focusOffset !== p.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), d > o ? (e.addRange(t), e.extend(p.node, p.offset)) : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var cf = f && "documentMode" in document && 11 >= document.documentMode, Br = null, wo = null, $n = null, _o = !1;
  function lu(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    _o || Br == null || Br !== yi(o) || (o = Br, "selectionStart" in o && vo(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), $n && Ln($n, o) || ($n = o, o = Di(wo, "onSelect"), 0 < o.length && (t = new uo("onSelect", "select", null, t, n), e.push({ event: t, listeners: o }), t.target = Br)));
  }
  function Li(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Fr = { animationend: Li("Animation", "AnimationEnd"), animationiteration: Li("Animation", "AnimationIteration"), animationstart: Li("Animation", "AnimationStart"), transitionend: Li("Transition", "TransitionEnd") }, So = {}, uu = {};
  f && (uu = document.createElement("div").style, "AnimationEvent" in window || (delete Fr.animationend.animation, delete Fr.animationiteration.animation, delete Fr.animationstart.animation), "TransitionEvent" in window || delete Fr.transitionend.transition);
  function $i(e) {
    if (So[e]) return So[e];
    if (!Fr[e]) return e;
    var t = Fr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in uu) return So[e] = t[n];
    return e;
  }
  var cu = $i("animationend"), du = $i("animationiteration"), hu = $i("animationstart"), fu = $i("transitionend"), pu = /* @__PURE__ */ new Map(), mu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Zt(e, t) {
    pu.set(e, t), c(t, [e]);
  }
  for (var ko = 0; ko < mu.length; ko++) {
    var Eo = mu[ko], df = Eo.toLowerCase(), hf = Eo[0].toUpperCase() + Eo.slice(1);
    Zt(df, "on" + hf);
  }
  Zt(cu, "onAnimationEnd"), Zt(du, "onAnimationIteration"), Zt(hu, "onAnimationStart"), Zt("dblclick", "onDoubleClick"), Zt("focusin", "onFocus"), Zt("focusout", "onBlur"), Zt(fu, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Un = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ff = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));
  function gu(e, t, n) {
    var o = e.type || "unknown-event";
    e.currentTarget = n, ch(o, t, void 0, e), e.currentTarget = null;
  }
  function yu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n], l = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (t) for (var p = o.length - 1; 0 <= p; p--) {
          var y = o[p], _ = y.instance, R = y.currentTarget;
          if (y = y.listener, _ !== d && l.isPropagationStopped()) break e;
          gu(l, y, R), d = _;
        }
        else for (p = 0; p < o.length; p++) {
          if (y = o[p], _ = y.instance, R = y.currentTarget, y = y.listener, _ !== d && l.isPropagationStopped()) break e;
          gu(l, y, R), d = _;
        }
      }
    }
    if (_i) throw e = Zs, _i = !1, Zs = null, e;
  }
  function Se(e, t) {
    var n = t[Po];
    n === void 0 && (n = t[Po] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    n.has(o) || (vu(t, e, 2, !1), n.add(o));
  }
  function bo(e, t, n) {
    var o = 0;
    t && (o |= 4), vu(n, e, o, t);
  }
  var Ui = "_reactListening" + Math.random().toString(36).slice(2);
  function Dn(e) {
    if (!e[Ui]) {
      e[Ui] = !0, a.forEach(function(n) {
        n !== "selectionchange" && (ff.has(n) || bo(n, !1, e), bo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ui] || (t[Ui] = !0, bo("selectionchange", !1, t));
    }
  }
  function vu(e, t, n, o) {
    switch (Fl(t)) {
      case 1:
        var l = Th;
        break;
      case 4:
        l = Ch;
        break;
      default:
        l = oo;
    }
    n = l.bind(null, t, n, e), l = void 0, !Xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), o ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function xo(e, t, n, o, l) {
    var d = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var p = o.tag;
      if (p === 3 || p === 4) {
        var y = o.stateNode.containerInfo;
        if (y === l || y.nodeType === 8 && y.parentNode === l) break;
        if (p === 4) for (p = o.return; p !== null; ) {
          var _ = p.tag;
          if ((_ === 3 || _ === 4) && (_ = p.stateNode.containerInfo, _ === l || _.nodeType === 8 && _.parentNode === l)) return;
          p = p.return;
        }
        for (; y !== null; ) {
          if (p = gr(y), p === null) return;
          if (_ = p.tag, _ === 5 || _ === 6) {
            o = d = p;
            continue e;
          }
          y = y.parentNode;
        }
      }
      o = o.return;
    }
    El(function() {
      var R = d, $ = Js(n), z = [];
      e: {
        var N = pu.get(e);
        if (N !== void 0) {
          var q = uo, K = e;
          switch (e) {
            case "keypress":
              if (Pi(n) === 0) break e;
            case "keydown":
            case "keyup":
              q = Mh;
              break;
            case "focusin":
              K = "focus", q = fo;
              break;
            case "focusout":
              K = "blur", q = fo;
              break;
            case "beforeblur":
            case "afterblur":
              q = fo;
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
              q = Wl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = Ah;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = Vh;
              break;
            case cu:
            case du:
            case hu:
              q = Ih;
              break;
            case fu:
              q = Kh;
              break;
            case "scroll":
              q = Rh;
              break;
            case "wheel":
              q = Jh;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = Lh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Hl;
          }
          var G = (t & 4) !== 0, je = !G && e === "scroll", x = G ? N !== null ? N + "Capture" : null : N;
          G = [];
          for (var S = R, T; S !== null; ) {
            T = S;
            var F = T.stateNode;
            if (T.tag === 5 && F !== null && (T = F, x !== null && (F = _n(S, x), F != null && G.push(zn(S, F, T)))), je) break;
            S = S.return;
          }
          0 < G.length && (N = new q(N, K, null, n, $), z.push({ event: N, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", N && n !== Gs && (K = n.relatedTarget || n.fromElement) && (gr(K) || K[Ut])) break e;
          if ((q || N) && (N = $.window === $ ? $ : (N = $.ownerDocument) ? N.defaultView || N.parentWindow : window, q ? (K = n.relatedTarget || n.toElement, q = R, K = K ? gr(K) : null, K !== null && (je = mr(K), K !== je || K.tag !== 5 && K.tag !== 6) && (K = null)) : (q = null, K = R), q !== K)) {
            if (G = Wl, F = "onMouseLeave", x = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (G = Hl, F = "onPointerLeave", x = "onPointerEnter", S = "pointer"), je = q == null ? N : Wr(q), T = K == null ? N : Wr(K), N = new G(F, S + "leave", q, n, $), N.target = je, N.relatedTarget = T, F = null, gr($) === R && (G = new G(x, S + "enter", K, n, $), G.target = T, G.relatedTarget = je, F = G), je = F, q && K) t: {
              for (G = q, x = K, S = 0, T = G; T; T = Mr(T)) S++;
              for (T = 0, F = x; F; F = Mr(F)) T++;
              for (; 0 < S - T; ) G = Mr(G), S--;
              for (; 0 < T - S; ) x = Mr(x), T--;
              for (; S--; ) {
                if (G === x || x !== null && G === x.alternate) break t;
                G = Mr(G), x = Mr(x);
              }
              G = null;
            }
            else G = null;
            q !== null && wu(z, N, q, G, !1), K !== null && je !== null && wu(z, je, K, G, !0);
          }
        }
        e: {
          if (N = R ? Wr(R) : window, q = N.nodeName && N.nodeName.toLowerCase(), q === "select" || q === "input" && N.type === "file") var Q = rf;
          else if (Xl(N)) if (eu) Q = af;
          else {
            Q = sf;
            var ee = nf;
          }
          else (q = N.nodeName) && q.toLowerCase() === "input" && (N.type === "checkbox" || N.type === "radio") && (Q = of);
          if (Q && (Q = Q(e, R))) {
            Zl(z, Q, n, $);
            break e;
          }
          ee && ee(e, N, R), e === "focusout" && (ee = N._wrapperState) && ee.controlled && N.type === "number" && qs(N, "number", N.value);
        }
        switch (ee = R ? Wr(R) : window, e) {
          case "focusin":
            (Xl(ee) || ee.contentEditable === "true") && (Br = ee, wo = R, $n = null);
            break;
          case "focusout":
            $n = wo = Br = null;
            break;
          case "mousedown":
            _o = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            _o = !1, lu(z, n, $);
            break;
          case "selectionchange":
            if (cf) break;
          case "keydown":
          case "keyup":
            lu(z, n, $);
        }
        var te;
        if (mo) e: {
          switch (e) {
            case "compositionstart":
              var se = "onCompositionStart";
              break e;
            case "compositionend":
              se = "onCompositionEnd";
              break e;
            case "compositionupdate":
              se = "onCompositionUpdate";
              break e;
          }
          se = void 0;
        }
        else zr ? Ql(e, n) && (se = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (se = "onCompositionStart");
        se && (Kl && n.locale !== "ko" && (zr || se !== "onCompositionStart" ? se === "onCompositionEnd" && zr && (te = Ml()) : (Xt = $, lo = "value" in Xt ? Xt.value : Xt.textContent, zr = !0)), ee = Di(R, se), 0 < ee.length && (se = new Vl(se, e, null, n, $), z.push({ event: se, listeners: ee }), te ? se.data = te : (te = Yl(n), te !== null && (se.data = te)))), (te = Yh ? Xh(e, n) : Zh(e, n)) && (R = Di(R, "onBeforeInput"), 0 < R.length && ($ = new Vl("onBeforeInput", "beforeinput", null, n, $), z.push({ event: $, listeners: R }), $.data = te));
      }
      yu(z, t);
    });
  }
  function zn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Di(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
      var l = e, d = l.stateNode;
      l.tag === 5 && d !== null && (l = d, d = _n(e, n), d != null && o.unshift(zn(e, d, l)), d = _n(e, t), d != null && o.push(zn(e, d, l))), e = e.return;
    }
    return o;
  }
  function Mr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function wu(e, t, n, o, l) {
    for (var d = t._reactName, p = []; n !== null && n !== o; ) {
      var y = n, _ = y.alternate, R = y.stateNode;
      if (_ !== null && _ === o) break;
      y.tag === 5 && R !== null && (y = R, l ? (_ = _n(n, d), _ != null && p.unshift(zn(n, _, y))) : l || (_ = _n(n, d), _ != null && p.push(zn(n, _, y)))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var pf = /\r\n?/g, mf = /\u0000|\uFFFD/g;
  function _u(e) {
    return (typeof e == "string" ? e : "" + e).replace(pf, `
`).replace(mf, "");
  }
  function zi(e, t, n) {
    if (t = _u(t), _u(e) !== t && n) throw Error(i(425));
  }
  function Bi() {
  }
  var To = null, Co = null;
  function Ro(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Oo = typeof setTimeout == "function" ? setTimeout : void 0, gf = typeof clearTimeout == "function" ? clearTimeout : void 0, Su = typeof Promise == "function" ? Promise : void 0, yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Su < "u" ? function(e) {
    return Su.resolve(null).then(e).catch(vf);
  } : Oo;
  function vf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ao(e, t) {
    var n = t, o = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (o === 0) {
          e.removeChild(l), On(t);
          return;
        }
        o--;
      } else n !== "$" && n !== "$?" && n !== "$!" || o++;
      n = l;
    } while (n);
    On(t);
  }
  function er(e) {
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
  function ku(e) {
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
  var qr = Math.random().toString(36).slice(2), It = "__reactFiber$" + qr, Bn = "__reactProps$" + qr, Ut = "__reactContainer$" + qr, Po = "__reactEvents$" + qr, wf = "__reactListeners$" + qr, _f = "__reactHandles$" + qr;
  function gr(e) {
    var t = e[It];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ut] || n[It]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ku(e); e !== null; ) {
          if (n = e[It]) return n;
          e = ku(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Fn(e) {
    return e = e[It] || e[Ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Wr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Fi(e) {
    return e[Bn] || null;
  }
  var jo = [], Vr = -1;
  function tr(e) {
    return { current: e };
  }
  function ke(e) {
    0 > Vr || (e.current = jo[Vr], jo[Vr] = null, Vr--);
  }
  function ve(e, t) {
    Vr++, jo[Vr] = e.current, e.current = t;
  }
  var rr = {}, Ke = tr(rr), et = tr(!1), yr = rr;
  function Hr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return rr;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
    var l = {}, d;
    for (d in n) l[d] = t[d];
    return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function tt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Mi() {
    ke(et), ke(Ke);
  }
  function Eu(e, t, n) {
    if (Ke.current !== rr) throw Error(i(168));
    ve(Ke, t), ve(et, n);
  }
  function bu(e, t, n) {
    var o = e.stateNode;
    if (t = t.childContextTypes, typeof o.getChildContext != "function") return n;
    o = o.getChildContext();
    for (var l in o) if (!(l in t)) throw Error(i(108, ye(e) || "Unknown", l));
    return W({}, n, o);
  }
  function qi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rr, yr = Ke.current, ve(Ke, e), ve(et, et.current), !0;
  }
  function xu(e, t, n) {
    var o = e.stateNode;
    if (!o) throw Error(i(169));
    n ? (e = bu(e, t, yr), o.__reactInternalMemoizedMergedChildContext = e, ke(et), ke(Ke), ve(Ke, e)) : ke(et), ve(et, n);
  }
  var Dt = null, Wi = !1, Io = !1;
  function Tu(e) {
    Dt === null ? Dt = [e] : Dt.push(e);
  }
  function Sf(e) {
    Wi = !0, Tu(e);
  }
  function nr() {
    if (!Io && Dt !== null) {
      Io = !0;
      var e = 0, t = me;
      try {
        var n = Dt;
        for (me = 1; e < n.length; e++) {
          var o = n[e];
          do
            o = o(!0);
          while (o !== null);
        }
        Dt = null, Wi = !1;
      } catch (l) {
        throw Dt !== null && (Dt = Dt.slice(e + 1)), Rl(eo, nr), l;
      } finally {
        me = t, Io = !1;
      }
    }
    return null;
  }
  var Kr = [], Gr = 0, Vi = null, Hi = 0, ft = [], pt = 0, vr = null, zt = 1, Bt = "";
  function wr(e, t) {
    Kr[Gr++] = Hi, Kr[Gr++] = Vi, Vi = e, Hi = t;
  }
  function Cu(e, t, n) {
    ft[pt++] = zt, ft[pt++] = Bt, ft[pt++] = vr, vr = e;
    var o = zt;
    e = Bt;
    var l = 32 - St(o) - 1;
    o &= ~(1 << l), n += 1;
    var d = 32 - St(t) + l;
    if (30 < d) {
      var p = l - l % 5;
      d = (o & (1 << p) - 1).toString(32), o >>= p, l -= p, zt = 1 << 32 - St(t) + l | n << l | o, Bt = d + e;
    } else zt = 1 << d | n << l | o, Bt = e;
  }
  function No(e) {
    e.return !== null && (wr(e, 1), Cu(e, 1, 0));
  }
  function Lo(e) {
    for (; e === Vi; ) Vi = Kr[--Gr], Kr[Gr] = null, Hi = Kr[--Gr], Kr[Gr] = null;
    for (; e === vr; ) vr = ft[--pt], ft[pt] = null, Bt = ft[--pt], ft[pt] = null, zt = ft[--pt], ft[pt] = null;
  }
  var lt = null, ut = null, be = !1, Et = null;
  function Ru(e, t) {
    var n = vt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Ou(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, ut = er(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, ut = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = vr !== null ? { id: zt, overflow: Bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = vt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, ut = null, !0) : !1;
      default:
        return !1;
    }
  }
  function $o(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Uo(e) {
    if (be) {
      var t = ut;
      if (t) {
        var n = t;
        if (!Ou(e, t)) {
          if ($o(e)) throw Error(i(418));
          t = er(n.nextSibling);
          var o = lt;
          t && Ou(e, t) ? Ru(o, n) : (e.flags = e.flags & -4097 | 2, be = !1, lt = e);
        }
      } else {
        if ($o(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, be = !1, lt = e;
      }
    }
  }
  function Au(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    lt = e;
  }
  function Ki(e) {
    if (e !== lt) return !1;
    if (!be) return Au(e), be = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ro(e.type, e.memoizedProps)), t && (t = ut)) {
      if ($o(e)) throw Pu(), Error(i(418));
      for (; t; ) Ru(e, t), t = er(t.nextSibling);
    }
    if (Au(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ut = er(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ut = null;
      }
    } else ut = lt ? er(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pu() {
    for (var e = ut; e; ) e = er(e.nextSibling);
  }
  function Jr() {
    ut = lt = null, be = !1;
  }
  function Do(e) {
    Et === null ? Et = [e] : Et.push(e);
  }
  var kf = B.ReactCurrentBatchConfig;
  function Mn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var o = n.stateNode;
        }
        if (!o) throw Error(i(147, e));
        var l = o, d = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(p) {
          var y = l.refs;
          p === null ? delete y[d] : y[d] = p;
        }, t._stringRef = d, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Gi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ju(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Iu(e) {
    function t(x, S) {
      if (e) {
        var T = x.deletions;
        T === null ? (x.deletions = [S], x.flags |= 16) : T.push(S);
      }
    }
    function n(x, S) {
      if (!e) return null;
      for (; S !== null; ) t(x, S), S = S.sibling;
      return null;
    }
    function o(x, S) {
      for (x = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? x.set(S.key, S) : x.set(S.index, S), S = S.sibling;
      return x;
    }
    function l(x, S) {
      return x = dr(x, S), x.index = 0, x.sibling = null, x;
    }
    function d(x, S, T) {
      return x.index = T, e ? (T = x.alternate, T !== null ? (T = T.index, T < S ? (x.flags |= 2, S) : T) : (x.flags |= 2, S)) : (x.flags |= 1048576, S);
    }
    function p(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function y(x, S, T, F) {
      return S === null || S.tag !== 6 ? (S = Oa(T, x.mode, F), S.return = x, S) : (S = l(S, T), S.return = x, S);
    }
    function _(x, S, T, F) {
      var Q = T.type;
      return Q === ie ? $(x, S, T.props.children, F, T.key) : S !== null && (S.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Le && ju(Q) === S.type) ? (F = l(S, T.props), F.ref = Mn(x, S, T), F.return = x, F) : (F = vs(T.type, T.key, T.props, null, x.mode, F), F.ref = Mn(x, S, T), F.return = x, F);
    }
    function R(x, S, T, F) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== T.containerInfo || S.stateNode.implementation !== T.implementation ? (S = Aa(T, x.mode, F), S.return = x, S) : (S = l(S, T.children || []), S.return = x, S);
    }
    function $(x, S, T, F, Q) {
      return S === null || S.tag !== 7 ? (S = Cr(T, x.mode, F, Q), S.return = x, S) : (S = l(S, T), S.return = x, S);
    }
    function z(x, S, T) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return S = Oa("" + S, x.mode, T), S.return = x, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Z:
            return T = vs(S.type, S.key, S.props, null, x.mode, T), T.ref = Mn(x, null, S), T.return = x, T;
          case U:
            return S = Aa(S, x.mode, T), S.return = x, S;
          case Le:
            var F = S._init;
            return z(x, F(S._payload), T);
        }
        if (yn(S) || J(S)) return S = Cr(S, x.mode, T, null), S.return = x, S;
        Gi(x, S);
      }
      return null;
    }
    function N(x, S, T, F) {
      var Q = S !== null ? S.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number") return Q !== null ? null : y(x, S, "" + T, F);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Z:
            return T.key === Q ? _(x, S, T, F) : null;
          case U:
            return T.key === Q ? R(x, S, T, F) : null;
          case Le:
            return Q = T._init, N(
              x,
              S,
              Q(T._payload),
              F
            );
        }
        if (yn(T) || J(T)) return Q !== null ? null : $(x, S, T, F, null);
        Gi(x, T);
      }
      return null;
    }
    function q(x, S, T, F, Q) {
      if (typeof F == "string" && F !== "" || typeof F == "number") return x = x.get(T) || null, y(S, x, "" + F, Q);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Z:
            return x = x.get(F.key === null ? T : F.key) || null, _(S, x, F, Q);
          case U:
            return x = x.get(F.key === null ? T : F.key) || null, R(S, x, F, Q);
          case Le:
            var ee = F._init;
            return q(x, S, T, ee(F._payload), Q);
        }
        if (yn(F) || J(F)) return x = x.get(T) || null, $(S, x, F, Q, null);
        Gi(S, F);
      }
      return null;
    }
    function K(x, S, T, F) {
      for (var Q = null, ee = null, te = S, se = S = 0, Fe = null; te !== null && se < T.length; se++) {
        te.index > se ? (Fe = te, te = null) : Fe = te.sibling;
        var fe = N(x, te, T[se], F);
        if (fe === null) {
          te === null && (te = Fe);
          break;
        }
        e && te && fe.alternate === null && t(x, te), S = d(fe, S, se), ee === null ? Q = fe : ee.sibling = fe, ee = fe, te = Fe;
      }
      if (se === T.length) return n(x, te), be && wr(x, se), Q;
      if (te === null) {
        for (; se < T.length; se++) te = z(x, T[se], F), te !== null && (S = d(te, S, se), ee === null ? Q = te : ee.sibling = te, ee = te);
        return be && wr(x, se), Q;
      }
      for (te = o(x, te); se < T.length; se++) Fe = q(te, x, se, T[se], F), Fe !== null && (e && Fe.alternate !== null && te.delete(Fe.key === null ? se : Fe.key), S = d(Fe, S, se), ee === null ? Q = Fe : ee.sibling = Fe, ee = Fe);
      return e && te.forEach(function(hr) {
        return t(x, hr);
      }), be && wr(x, se), Q;
    }
    function G(x, S, T, F) {
      var Q = J(T);
      if (typeof Q != "function") throw Error(i(150));
      if (T = Q.call(T), T == null) throw Error(i(151));
      for (var ee = Q = null, te = S, se = S = 0, Fe = null, fe = T.next(); te !== null && !fe.done; se++, fe = T.next()) {
        te.index > se ? (Fe = te, te = null) : Fe = te.sibling;
        var hr = N(x, te, fe.value, F);
        if (hr === null) {
          te === null && (te = Fe);
          break;
        }
        e && te && hr.alternate === null && t(x, te), S = d(hr, S, se), ee === null ? Q = hr : ee.sibling = hr, ee = hr, te = Fe;
      }
      if (fe.done) return n(
        x,
        te
      ), be && wr(x, se), Q;
      if (te === null) {
        for (; !fe.done; se++, fe = T.next()) fe = z(x, fe.value, F), fe !== null && (S = d(fe, S, se), ee === null ? Q = fe : ee.sibling = fe, ee = fe);
        return be && wr(x, se), Q;
      }
      for (te = o(x, te); !fe.done; se++, fe = T.next()) fe = q(te, x, se, fe.value, F), fe !== null && (e && fe.alternate !== null && te.delete(fe.key === null ? se : fe.key), S = d(fe, S, se), ee === null ? Q = fe : ee.sibling = fe, ee = fe);
      return e && te.forEach(function(tp) {
        return t(x, tp);
      }), be && wr(x, se), Q;
    }
    function je(x, S, T, F) {
      if (typeof T == "object" && T !== null && T.type === ie && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Z:
            e: {
              for (var Q = T.key, ee = S; ee !== null; ) {
                if (ee.key === Q) {
                  if (Q = T.type, Q === ie) {
                    if (ee.tag === 7) {
                      n(x, ee.sibling), S = l(ee, T.props.children), S.return = x, x = S;
                      break e;
                    }
                  } else if (ee.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Le && ju(Q) === ee.type) {
                    n(x, ee.sibling), S = l(ee, T.props), S.ref = Mn(x, ee, T), S.return = x, x = S;
                    break e;
                  }
                  n(x, ee);
                  break;
                } else t(x, ee);
                ee = ee.sibling;
              }
              T.type === ie ? (S = Cr(T.props.children, x.mode, F, T.key), S.return = x, x = S) : (F = vs(T.type, T.key, T.props, null, x.mode, F), F.ref = Mn(x, S, T), F.return = x, x = F);
            }
            return p(x);
          case U:
            e: {
              for (ee = T.key; S !== null; ) {
                if (S.key === ee) if (S.tag === 4 && S.stateNode.containerInfo === T.containerInfo && S.stateNode.implementation === T.implementation) {
                  n(x, S.sibling), S = l(S, T.children || []), S.return = x, x = S;
                  break e;
                } else {
                  n(x, S);
                  break;
                }
                else t(x, S);
                S = S.sibling;
              }
              S = Aa(T, x.mode, F), S.return = x, x = S;
            }
            return p(x);
          case Le:
            return ee = T._init, je(x, S, ee(T._payload), F);
        }
        if (yn(T)) return K(x, S, T, F);
        if (J(T)) return G(x, S, T, F);
        Gi(x, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? (T = "" + T, S !== null && S.tag === 6 ? (n(x, S.sibling), S = l(S, T), S.return = x, x = S) : (n(x, S), S = Oa(T, x.mode, F), S.return = x, x = S), p(x)) : n(x, S);
    }
    return je;
  }
  var Qr = Iu(!0), Nu = Iu(!1), Ji = tr(null), Qi = null, Yr = null, zo = null;
  function Bo() {
    zo = Yr = Qi = null;
  }
  function Fo(e) {
    var t = Ji.current;
    ke(Ji), e._currentValue = t;
  }
  function Mo(e, t, n) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Xr(e, t) {
    Qi = e, zo = Yr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (rt = !0), e.firstContext = null);
  }
  function mt(e) {
    var t = e._currentValue;
    if (zo !== e) if (e = { context: e, memoizedValue: t, next: null }, Yr === null) {
      if (Qi === null) throw Error(i(308));
      Yr = e, Qi.dependencies = { lanes: 0, firstContext: e };
    } else Yr = Yr.next = e;
    return t;
  }
  var _r = null;
  function qo(e) {
    _r === null ? _r = [e] : _r.push(e);
  }
  function Lu(e, t, n, o) {
    var l = t.interleaved;
    return l === null ? (n.next = n, qo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ft(e, o);
  }
  function Ft(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ir = !1;
  function Wo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $u(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Mt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function sr(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (ce & 2) !== 0) {
      var l = o.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), o.pending = t, Ft(e, n);
    }
    return l = o.interleaved, l === null ? (t.next = t, qo(o)) : (t.next = l.next, l.next = t), o.interleaved = t, Ft(e, n);
  }
  function Yi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, no(e, n);
    }
  }
  function Uu(e, t) {
    var n = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, n === o)) {
      var l = null, d = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          d === null ? l = d = p : d = d.next = p, n = n.next;
        } while (n !== null);
        d === null ? l = d = t : d = d.next = t;
      } else l = d = t;
      n = { baseState: o.baseState, firstBaseUpdate: l, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Xi(e, t, n, o) {
    var l = e.updateQueue;
    ir = !1;
    var d = l.firstBaseUpdate, p = l.lastBaseUpdate, y = l.shared.pending;
    if (y !== null) {
      l.shared.pending = null;
      var _ = y, R = _.next;
      _.next = null, p === null ? d = R : p.next = R, p = _;
      var $ = e.alternate;
      $ !== null && ($ = $.updateQueue, y = $.lastBaseUpdate, y !== p && (y === null ? $.firstBaseUpdate = R : y.next = R, $.lastBaseUpdate = _));
    }
    if (d !== null) {
      var z = l.baseState;
      p = 0, $ = R = _ = null, y = d;
      do {
        var N = y.lane, q = y.eventTime;
        if ((o & N) === N) {
          $ !== null && ($ = $.next = {
            eventTime: q,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          e: {
            var K = e, G = y;
            switch (N = t, q = n, G.tag) {
              case 1:
                if (K = G.payload, typeof K == "function") {
                  z = K.call(q, z, N);
                  break e;
                }
                z = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = G.payload, N = typeof K == "function" ? K.call(q, z, N) : K, N == null) break e;
                z = W({}, z, N);
                break e;
              case 2:
                ir = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, N = l.effects, N === null ? l.effects = [y] : N.push(y));
        } else q = { eventTime: q, lane: N, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, $ === null ? (R = $ = q, _ = z) : $ = $.next = q, p |= N;
        if (y = y.next, y === null) {
          if (y = l.shared.pending, y === null) break;
          N = y, y = N.next, N.next = null, l.lastBaseUpdate = N, l.shared.pending = null;
        }
      } while (!0);
      if ($ === null && (_ = z), l.baseState = _, l.firstBaseUpdate = R, l.lastBaseUpdate = $, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          p |= l.lane, l = l.next;
        while (l !== t);
      } else d === null && (l.shared.lanes = 0);
      Er |= p, e.lanes = p, e.memoizedState = z;
    }
  }
  function Du(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var o = e[t], l = o.callback;
      if (l !== null) {
        if (o.callback = null, o = n, typeof l != "function") throw Error(i(191, l));
        l.call(o);
      }
    }
  }
  var qn = {}, Nt = tr(qn), Wn = tr(qn), Vn = tr(qn);
  function Sr(e) {
    if (e === qn) throw Error(i(174));
    return e;
  }
  function Vo(e, t) {
    switch (ve(Vn, t), ve(Wn, e), ve(Nt, qn), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Vs(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vs(t, e);
    }
    ke(Nt), ve(Nt, t);
  }
  function Zr() {
    ke(Nt), ke(Wn), ke(Vn);
  }
  function zu(e) {
    Sr(Vn.current);
    var t = Sr(Nt.current), n = Vs(t, e.type);
    t !== n && (ve(Wn, e), ve(Nt, n));
  }
  function Ho(e) {
    Wn.current === e && (ke(Nt), ke(Wn));
  }
  var xe = tr(0);
  function Zi(e) {
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
  var Ko = [];
  function Go() {
    for (var e = 0; e < Ko.length; e++) Ko[e]._workInProgressVersionPrimary = null;
    Ko.length = 0;
  }
  var es = B.ReactCurrentDispatcher, Jo = B.ReactCurrentBatchConfig, kr = 0, Te = null, $e = null, ze = null, ts = !1, Hn = !1, Kn = 0, Ef = 0;
  function Ge() {
    throw Error(i(321));
  }
  function Qo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function Yo(e, t, n, o, l, d) {
    if (kr = d, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, es.current = e === null || e.memoizedState === null ? Cf : Rf, e = n(o, l), Hn) {
      d = 0;
      do {
        if (Hn = !1, Kn = 0, 25 <= d) throw Error(i(301));
        d += 1, ze = $e = null, t.updateQueue = null, es.current = Of, e = n(o, l);
      } while (Hn);
    }
    if (es.current = is, t = $e !== null && $e.next !== null, kr = 0, ze = $e = Te = null, ts = !1, t) throw Error(i(300));
    return e;
  }
  function Xo() {
    var e = Kn !== 0;
    return Kn = 0, e;
  }
  function Lt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ze === null ? Te.memoizedState = ze = e : ze = ze.next = e, ze;
  }
  function gt() {
    if ($e === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = ze === null ? Te.memoizedState : ze.next;
    if (t !== null) ze = t, $e = e;
    else {
      if (e === null) throw Error(i(310));
      $e = e, e = { memoizedState: $e.memoizedState, baseState: $e.baseState, baseQueue: $e.baseQueue, queue: $e.queue, next: null }, ze === null ? Te.memoizedState = ze = e : ze = ze.next = e;
    }
    return ze;
  }
  function Gn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zo(e) {
    var t = gt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var o = $e, l = o.baseQueue, d = n.pending;
    if (d !== null) {
      if (l !== null) {
        var p = l.next;
        l.next = d.next, d.next = p;
      }
      o.baseQueue = l = d, n.pending = null;
    }
    if (l !== null) {
      d = l.next, o = o.baseState;
      var y = p = null, _ = null, R = d;
      do {
        var $ = R.lane;
        if ((kr & $) === $) _ !== null && (_ = _.next = { lane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), o = R.hasEagerState ? R.eagerState : e(o, R.action);
        else {
          var z = {
            lane: $,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          _ === null ? (y = _ = z, p = o) : _ = _.next = z, Te.lanes |= $, Er |= $;
        }
        R = R.next;
      } while (R !== null && R !== d);
      _ === null ? p = o : _.next = y, kt(o, t.memoizedState) || (rt = !0), t.memoizedState = o, t.baseState = p, t.baseQueue = _, n.lastRenderedState = o;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        d = l.lane, Te.lanes |= d, Er |= d, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ea(e) {
    var t = gt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch, l = n.pending, d = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var p = l = l.next;
      do
        d = e(d, p.action), p = p.next;
      while (p !== l);
      kt(d, t.memoizedState) || (rt = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), n.lastRenderedState = d;
    }
    return [d, o];
  }
  function Bu() {
  }
  function Fu(e, t) {
    var n = Te, o = gt(), l = t(), d = !kt(o.memoizedState, l);
    if (d && (o.memoizedState = l, rt = !0), o = o.queue, ta(Wu.bind(null, n, o, e), [e]), o.getSnapshot !== t || d || ze !== null && ze.memoizedState.tag & 1) {
      if (n.flags |= 2048, Jn(9, qu.bind(null, n, o, l, t), void 0, null), Be === null) throw Error(i(349));
      (kr & 30) !== 0 || Mu(n, t, l);
    }
    return l;
  }
  function Mu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function qu(e, t, n, o) {
    t.value = n, t.getSnapshot = o, Vu(t) && Hu(e);
  }
  function Wu(e, t, n) {
    return n(function() {
      Vu(t) && Hu(e);
    });
  }
  function Vu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function Hu(e) {
    var t = Ft(e, 1);
    t !== null && Ct(t, e, 1, -1);
  }
  function Ku(e) {
    var t = Lt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Tf.bind(null, Te, e), [t.memoizedState, e];
  }
  function Jn(e, t, n, o) {
    return e = { tag: e, create: t, destroy: n, deps: o, next: null }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (o = n.next, n.next = e, e.next = o, t.lastEffect = e)), e;
  }
  function Gu() {
    return gt().memoizedState;
  }
  function rs(e, t, n, o) {
    var l = Lt();
    Te.flags |= e, l.memoizedState = Jn(1 | t, n, void 0, o === void 0 ? null : o);
  }
  function ns(e, t, n, o) {
    var l = gt();
    o = o === void 0 ? null : o;
    var d = void 0;
    if ($e !== null) {
      var p = $e.memoizedState;
      if (d = p.destroy, o !== null && Qo(o, p.deps)) {
        l.memoizedState = Jn(t, n, d, o);
        return;
      }
    }
    Te.flags |= e, l.memoizedState = Jn(1 | t, n, d, o);
  }
  function Ju(e, t) {
    return rs(8390656, 8, e, t);
  }
  function ta(e, t) {
    return ns(2048, 8, e, t);
  }
  function Qu(e, t) {
    return ns(4, 2, e, t);
  }
  function Yu(e, t) {
    return ns(4, 4, e, t);
  }
  function Xu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Zu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ns(4, 4, Xu.bind(null, t, e), n);
  }
  function ra() {
  }
  function ec(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Qo(t, o[1]) ? o[0] : (n.memoizedState = [e, t], e);
  }
  function tc(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Qo(t, o[1]) ? o[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function rc(e, t, n) {
    return (kr & 21) === 0 ? (e.baseState && (e.baseState = !1, rt = !0), e.memoizedState = n) : (kt(n, t) || (n = jl(), Te.lanes |= n, Er |= n, e.baseState = !0), t);
  }
  function bf(e, t) {
    var n = me;
    me = n !== 0 && 4 > n ? n : 4, e(!0);
    var o = Jo.transition;
    Jo.transition = {};
    try {
      e(!1), t();
    } finally {
      me = n, Jo.transition = o;
    }
  }
  function nc() {
    return gt().memoizedState;
  }
  function xf(e, t, n) {
    var o = ur(e);
    if (n = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null }, ic(e)) sc(t, n);
    else if (n = Lu(e, t, n, o), n !== null) {
      var l = Xe();
      Ct(n, e, o, l), oc(n, t, o);
    }
  }
  function Tf(e, t, n) {
    var o = ur(e), l = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ic(e)) sc(t, l);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null)) try {
        var p = t.lastRenderedState, y = d(p, n);
        if (l.hasEagerState = !0, l.eagerState = y, kt(y, p)) {
          var _ = t.interleaved;
          _ === null ? (l.next = l, qo(t)) : (l.next = _.next, _.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Lu(e, t, l, o), n !== null && (l = Xe(), Ct(n, e, o, l), oc(n, t, o));
    }
  }
  function ic(e) {
    var t = e.alternate;
    return e === Te || t !== null && t === Te;
  }
  function sc(e, t) {
    Hn = ts = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function oc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, no(e, n);
    }
  }
  var is = { readContext: mt, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useInsertionEffect: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useSyncExternalStore: Ge, useId: Ge, unstable_isNewReconciler: !1 }, Cf = { readContext: mt, useCallback: function(e, t) {
    return Lt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: mt, useEffect: Ju, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, rs(
      4194308,
      4,
      Xu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return rs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return rs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Lt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var o = Lt();
    return t = n !== void 0 ? n(t) : t, o.memoizedState = o.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, o.queue = e, e = e.dispatch = xf.bind(null, Te, e), [o.memoizedState, e];
  }, useRef: function(e) {
    var t = Lt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ku, useDebugValue: ra, useDeferredValue: function(e) {
    return Lt().memoizedState = e;
  }, useTransition: function() {
    var e = Ku(!1), t = e[0];
    return e = bf.bind(null, e[1]), Lt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var o = Te, l = Lt();
    if (be) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Be === null) throw Error(i(349));
      (kr & 30) !== 0 || Mu(o, t, n);
    }
    l.memoizedState = n;
    var d = { value: n, getSnapshot: t };
    return l.queue = d, Ju(Wu.bind(
      null,
      o,
      d,
      e
    ), [e]), o.flags |= 2048, Jn(9, qu.bind(null, o, d, n, t), void 0, null), n;
  }, useId: function() {
    var e = Lt(), t = Be.identifierPrefix;
    if (be) {
      var n = Bt, o = zt;
      n = (o & ~(1 << 32 - St(o) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Ef++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Rf = {
    readContext: mt,
    useCallback: ec,
    useContext: mt,
    useEffect: ta,
    useImperativeHandle: Zu,
    useInsertionEffect: Qu,
    useLayoutEffect: Yu,
    useMemo: tc,
    useReducer: Zo,
    useRef: Gu,
    useState: function() {
      return Zo(Gn);
    },
    useDebugValue: ra,
    useDeferredValue: function(e) {
      var t = gt();
      return rc(t, $e.memoizedState, e);
    },
    useTransition: function() {
      var e = Zo(Gn)[0], t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: Bu,
    useSyncExternalStore: Fu,
    useId: nc,
    unstable_isNewReconciler: !1
  }, Of = { readContext: mt, useCallback: ec, useContext: mt, useEffect: ta, useImperativeHandle: Zu, useInsertionEffect: Qu, useLayoutEffect: Yu, useMemo: tc, useReducer: ea, useRef: Gu, useState: function() {
    return ea(Gn);
  }, useDebugValue: ra, useDeferredValue: function(e) {
    var t = gt();
    return $e === null ? t.memoizedState = e : rc(t, $e.memoizedState, e);
  }, useTransition: function() {
    var e = ea(Gn)[0], t = gt().memoizedState;
    return [e, t];
  }, useMutableSource: Bu, useSyncExternalStore: Fu, useId: nc, unstable_isNewReconciler: !1 };
  function bt(e, t) {
    if (e && e.defaultProps) {
      t = W({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function na(e, t, n, o) {
    t = e.memoizedState, n = n(o, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ss = { isMounted: function(e) {
    return (e = e._reactInternals) ? mr(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var o = Xe(), l = ur(e), d = Mt(o, l);
    d.payload = t, n != null && (d.callback = n), t = sr(e, d, l), t !== null && (Ct(t, e, l, o), Yi(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var o = Xe(), l = ur(e), d = Mt(o, l);
    d.tag = 1, d.payload = t, n != null && (d.callback = n), t = sr(e, d, l), t !== null && (Ct(t, e, l, o), Yi(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Xe(), o = ur(e), l = Mt(n, o);
    l.tag = 2, t != null && (l.callback = t), t = sr(e, l, o), t !== null && (Ct(t, e, o, n), Yi(t, e, o));
  } };
  function ac(e, t, n, o, l, d, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, d, p) : t.prototype && t.prototype.isPureReactComponent ? !Ln(n, o) || !Ln(l, d) : !0;
  }
  function lc(e, t, n) {
    var o = !1, l = rr, d = t.contextType;
    return typeof d == "object" && d !== null ? d = mt(d) : (l = tt(t) ? yr : Ke.current, o = t.contextTypes, d = (o = o != null) ? Hr(e, l) : rr), t = new t(n, d), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ss, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = d), t;
  }
  function uc(e, t, n, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o), t.state !== e && ss.enqueueReplaceState(t, t.state, null);
  }
  function ia(e, t, n, o) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Wo(e);
    var d = t.contextType;
    typeof d == "object" && d !== null ? l.context = mt(d) : (d = tt(t) ? yr : Ke.current, l.context = Hr(e, d)), l.state = e.memoizedState, d = t.getDerivedStateFromProps, typeof d == "function" && (na(e, t, d, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ss.enqueueReplaceState(l, l.state, null), Xi(e, n, l, o), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function en(e, t) {
    try {
      var n = "", o = t;
      do
        n += de(o), o = o.return;
      while (o);
      var l = n;
    } catch (d) {
      l = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function sa(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function oa(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Af = typeof WeakMap == "function" ? WeakMap : Map;
  function cc(e, t, n) {
    n = Mt(-1, n), n.tag = 3, n.payload = { element: null };
    var o = t.value;
    return n.callback = function() {
      hs || (hs = !0, Sa = o), oa(e, t);
    }, n;
  }
  function dc(e, t, n) {
    n = Mt(-1, n), n.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var l = t.value;
      n.payload = function() {
        return o(l);
      }, n.callback = function() {
        oa(e, t);
      };
    }
    var d = e.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (n.callback = function() {
      oa(e, t), typeof o != "function" && (ar === null ? ar = /* @__PURE__ */ new Set([this]) : ar.add(this));
      var p = t.stack;
      this.componentDidCatch(t.value, { componentStack: p !== null ? p : "" });
    }), n;
  }
  function hc(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Af();
      var l = /* @__PURE__ */ new Set();
      o.set(t, l);
    } else l = o.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), o.set(t, l));
    l.has(n) || (l.add(n), e = Wf.bind(null, e, t, n), t.then(e, e));
  }
  function fc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function pc(e, t, n, o, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mt(-1, 1), t.tag = 2, sr(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Pf = B.ReactCurrentOwner, rt = !1;
  function Ye(e, t, n, o) {
    t.child = e === null ? Nu(t, null, n, o) : Qr(t, e.child, n, o);
  }
  function mc(e, t, n, o, l) {
    n = n.render;
    var d = t.ref;
    return Xr(t, l), o = Yo(e, t, n, o, d, l), n = Xo(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qt(e, t, l)) : (be && n && No(t), t.flags |= 1, Ye(e, t, o, l), t.child);
  }
  function gc(e, t, n, o, l) {
    if (e === null) {
      var d = n.type;
      return typeof d == "function" && !Ra(d) && d.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = d, yc(e, t, d, o, l)) : (e = vs(n.type, null, o, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, (e.lanes & l) === 0) {
      var p = d.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ln, n(p, o) && e.ref === t.ref) return qt(e, t, l);
    }
    return t.flags |= 1, e = dr(d, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function yc(e, t, n, o, l) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Ln(d, o) && e.ref === t.ref) if (rt = !1, t.pendingProps = o = d, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (rt = !0);
      else return t.lanes = e.lanes, qt(e, t, l);
    }
    return aa(e, t, n, o, l);
  }
  function vc(e, t, n) {
    var o = t.pendingProps, l = o.children, d = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve(rn, ct), ct |= n;
    else {
      if ((n & 1073741824) === 0) return e = d !== null ? d.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve(rn, ct), ct |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : n, ve(rn, ct), ct |= o;
    }
    else d !== null ? (o = d.baseLanes | n, t.memoizedState = null) : o = n, ve(rn, ct), ct |= o;
    return Ye(e, t, l, n), t.child;
  }
  function wc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function aa(e, t, n, o, l) {
    var d = tt(n) ? yr : Ke.current;
    return d = Hr(t, d), Xr(t, l), n = Yo(e, t, n, o, d, l), o = Xo(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qt(e, t, l)) : (be && o && No(t), t.flags |= 1, Ye(e, t, n, l), t.child);
  }
  function _c(e, t, n, o, l) {
    if (tt(n)) {
      var d = !0;
      qi(t);
    } else d = !1;
    if (Xr(t, l), t.stateNode === null) as(e, t), lc(t, n, o), ia(t, n, o, l), o = !0;
    else if (e === null) {
      var p = t.stateNode, y = t.memoizedProps;
      p.props = y;
      var _ = p.context, R = n.contextType;
      typeof R == "object" && R !== null ? R = mt(R) : (R = tt(n) ? yr : Ke.current, R = Hr(t, R));
      var $ = n.getDerivedStateFromProps, z = typeof $ == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      z || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (y !== o || _ !== R) && uc(t, p, o, R), ir = !1;
      var N = t.memoizedState;
      p.state = N, Xi(t, o, p, l), _ = t.memoizedState, y !== o || N !== _ || et.current || ir ? (typeof $ == "function" && (na(t, n, $, o), _ = t.memoizedState), (y = ir || ac(t, n, y, o, N, _, R)) ? (z || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = _), p.props = o, p.state = _, p.context = R, o = y) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      p = t.stateNode, $u(e, t), y = t.memoizedProps, R = t.type === t.elementType ? y : bt(t.type, y), p.props = R, z = t.pendingProps, N = p.context, _ = n.contextType, typeof _ == "object" && _ !== null ? _ = mt(_) : (_ = tt(n) ? yr : Ke.current, _ = Hr(t, _));
      var q = n.getDerivedStateFromProps;
      ($ = typeof q == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (y !== z || N !== _) && uc(t, p, o, _), ir = !1, N = t.memoizedState, p.state = N, Xi(t, o, p, l);
      var K = t.memoizedState;
      y !== z || N !== K || et.current || ir ? (typeof q == "function" && (na(t, n, q, o), K = t.memoizedState), (R = ir || ac(t, n, R, o, N, K, _) || !1) ? ($ || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(o, K, _), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(o, K, _)), typeof p.componentDidUpdate == "function" && (t.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = K), p.props = o, p.state = K, p.context = _, o = R) : (typeof p.componentDidUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return la(e, t, n, o, d, l);
  }
  function la(e, t, n, o, l, d) {
    wc(e, t);
    var p = (t.flags & 128) !== 0;
    if (!o && !p) return l && xu(t, n, !1), qt(e, t, d);
    o = t.stateNode, Pf.current = t;
    var y = p && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1, e !== null && p ? (t.child = Qr(t, e.child, null, d), t.child = Qr(t, null, y, d)) : Ye(e, t, y, d), t.memoizedState = o.state, l && xu(t, n, !0), t.child;
  }
  function Sc(e) {
    var t = e.stateNode;
    t.pendingContext ? Eu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Eu(e, t.context, !1), Vo(e, t.containerInfo);
  }
  function kc(e, t, n, o, l) {
    return Jr(), Do(l), t.flags |= 256, Ye(e, t, n, o), t.child;
  }
  var ua = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ca(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ec(e, t, n) {
    var o = t.pendingProps, l = xe.current, d = !1, p = (t.flags & 128) !== 0, y;
    if ((y = p) || (y = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), y ? (d = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ve(xe, l & 1), e === null)
      return Uo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (p = o.children, e = o.fallback, d ? (o = t.mode, d = t.child, p = { mode: "hidden", children: p }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = p) : d = ws(p, o, 0, null), e = Cr(e, o, n, null), d.return = t, e.return = t, d.sibling = e, t.child = d, t.child.memoizedState = ca(n), t.memoizedState = ua, e) : da(t, p));
    if (l = e.memoizedState, l !== null && (y = l.dehydrated, y !== null)) return jf(e, t, p, o, y, l, n);
    if (d) {
      d = o.fallback, p = t.mode, l = e.child, y = l.sibling;
      var _ = { mode: "hidden", children: o.children };
      return (p & 1) === 0 && t.child !== l ? (o = t.child, o.childLanes = 0, o.pendingProps = _, t.deletions = null) : (o = dr(l, _), o.subtreeFlags = l.subtreeFlags & 14680064), y !== null ? d = dr(y, d) : (d = Cr(d, p, n, null), d.flags |= 2), d.return = t, o.return = t, o.sibling = d, t.child = o, o = d, d = t.child, p = e.child.memoizedState, p = p === null ? ca(n) : { baseLanes: p.baseLanes | n, cachePool: null, transitions: p.transitions }, d.memoizedState = p, d.childLanes = e.childLanes & ~n, t.memoizedState = ua, o;
    }
    return d = e.child, e = d.sibling, o = dr(d, { mode: "visible", children: o.children }), (t.mode & 1) === 0 && (o.lanes = n), o.return = t, o.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o;
  }
  function da(e, t) {
    return t = ws({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function os(e, t, n, o) {
    return o !== null && Do(o), Qr(t, e.child, null, n), e = da(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function jf(e, t, n, o, l, d, p) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, o = sa(Error(i(422))), os(e, t, p, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (d = o.fallback, l = t.mode, o = ws({ mode: "visible", children: o.children }, l, 0, null), d = Cr(d, l, p, null), d.flags |= 2, o.return = t, d.return = t, o.sibling = d, t.child = o, (t.mode & 1) !== 0 && Qr(t, e.child, null, p), t.child.memoizedState = ca(p), t.memoizedState = ua, d);
    if ((t.mode & 1) === 0) return os(e, t, p, null);
    if (l.data === "$!") {
      if (o = l.nextSibling && l.nextSibling.dataset, o) var y = o.dgst;
      return o = y, d = Error(i(419)), o = sa(d, o, void 0), os(e, t, p, o);
    }
    if (y = (p & e.childLanes) !== 0, rt || y) {
      if (o = Be, o !== null) {
        switch (p & -p) {
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
        l = (l & (o.suspendedLanes | p)) !== 0 ? 0 : l, l !== 0 && l !== d.retryLane && (d.retryLane = l, Ft(e, l), Ct(o, e, l, -1));
      }
      return Ca(), o = sa(Error(i(421))), os(e, t, p, o);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vf.bind(null, e), l._reactRetry = t, null) : (e = d.treeContext, ut = er(l.nextSibling), lt = t, be = !0, Et = null, e !== null && (ft[pt++] = zt, ft[pt++] = Bt, ft[pt++] = vr, zt = e.id, Bt = e.overflow, vr = t), t = da(t, o.children), t.flags |= 4096, t);
  }
  function bc(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), Mo(e.return, t, n);
  }
  function ha(e, t, n, o, l) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: n, tailMode: l } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = n, d.tailMode = l);
  }
  function xc(e, t, n) {
    var o = t.pendingProps, l = o.revealOrder, d = o.tail;
    if (Ye(e, t, o.children, n), o = xe.current, (o & 2) !== 0) o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bc(e, n, t);
        else if (e.tag === 19) bc(e, n, t);
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
    if (ve(xe, o), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Zi(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ha(t, !1, l, n, d);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Zi(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ha(t, !0, n, null, d);
        break;
      case "together":
        ha(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function as(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Er |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = dr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function If(e, t, n) {
    switch (t.tag) {
      case 3:
        Sc(t), Jr();
        break;
      case 5:
        zu(t);
        break;
      case 1:
        tt(t.type) && qi(t);
        break;
      case 4:
        Vo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context, l = t.memoizedProps.value;
        ve(Ji, o._currentValue), o._currentValue = l;
        break;
      case 13:
        if (o = t.memoizedState, o !== null)
          return o.dehydrated !== null ? (ve(xe, xe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ec(e, t, n) : (ve(xe, xe.current & 1), e = qt(e, t, n), e !== null ? e.sibling : null);
        ve(xe, xe.current & 1);
        break;
      case 19:
        if (o = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (o) return xc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ve(xe, xe.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, vc(e, t, n);
    }
    return qt(e, t, n);
  }
  var Tc, fa, Cc, Rc;
  Tc = function(e, t) {
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
  }, fa = function() {
  }, Cc = function(e, t, n, o) {
    var l = e.memoizedProps;
    if (l !== o) {
      e = t.stateNode, Sr(Nt.current);
      var d = null;
      switch (n) {
        case "input":
          l = Fs(e, l), o = Fs(e, o), d = [];
          break;
        case "select":
          l = W({}, l, { value: void 0 }), o = W({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          l = Ws(e, l), o = Ws(e, o), d = [];
          break;
        default:
          typeof l.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Bi);
      }
      Hs(n, o);
      var p;
      n = null;
      for (R in l) if (!o.hasOwnProperty(R) && l.hasOwnProperty(R) && l[R] != null) if (R === "style") {
        var y = l[R];
        for (p in y) y.hasOwnProperty(p) && (n || (n = {}), n[p] = "");
      } else R !== "dangerouslySetInnerHTML" && R !== "children" && R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && R !== "autoFocus" && (u.hasOwnProperty(R) ? d || (d = []) : (d = d || []).push(R, null));
      for (R in o) {
        var _ = o[R];
        if (y = l?.[R], o.hasOwnProperty(R) && _ !== y && (_ != null || y != null)) if (R === "style") if (y) {
          for (p in y) !y.hasOwnProperty(p) || _ && _.hasOwnProperty(p) || (n || (n = {}), n[p] = "");
          for (p in _) _.hasOwnProperty(p) && y[p] !== _[p] && (n || (n = {}), n[p] = _[p]);
        } else n || (d || (d = []), d.push(
          R,
          n
        )), n = _;
        else R === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, y = y ? y.__html : void 0, _ != null && y !== _ && (d = d || []).push(R, _)) : R === "children" ? typeof _ != "string" && typeof _ != "number" || (d = d || []).push(R, "" + _) : R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && (u.hasOwnProperty(R) ? (_ != null && R === "onScroll" && Se("scroll", e), d || y === _ || (d = [])) : (d = d || []).push(R, _));
      }
      n && (d = d || []).push("style", n);
      var R = d;
      (t.updateQueue = R) && (t.flags |= 4);
    }
  }, Rc = function(e, t, n, o) {
    n !== o && (t.flags |= 4);
  };
  function Qn(e, t) {
    if (!be) switch (e.tailMode) {
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
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, o = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, o |= l.subtreeFlags & 14680064, o |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, o |= l.subtreeFlags, o |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= o, e.childLanes = n, t;
  }
  function Nf(e, t, n) {
    var o = t.pendingProps;
    switch (Lo(t), t.tag) {
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
        return Je(t), null;
      case 1:
        return tt(t.type) && Mi(), Je(t), null;
      case 3:
        return o = t.stateNode, Zr(), ke(et), ke(Ke), Go(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (Ki(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Et !== null && (ba(Et), Et = null))), fa(e, t), Je(t), null;
      case 5:
        Ho(t);
        var l = Sr(Vn.current);
        if (n = t.type, e !== null && t.stateNode != null) Cc(e, t, n, o, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return Je(t), null;
          }
          if (e = Sr(Nt.current), Ki(t)) {
            o = t.stateNode, n = t.type;
            var d = t.memoizedProps;
            switch (o[It] = t, o[Bn] = d, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Se("cancel", o), Se("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Se("load", o);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Un.length; l++) Se(Un[l], o);
                break;
              case "source":
                Se("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Se(
                  "error",
                  o
                ), Se("load", o);
                break;
              case "details":
                Se("toggle", o);
                break;
              case "input":
                ll(o, d), Se("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Se("invalid", o);
                break;
              case "textarea":
                dl(o, d), Se("invalid", o);
            }
            Hs(n, d), l = null;
            for (var p in d) if (d.hasOwnProperty(p)) {
              var y = d[p];
              p === "children" ? typeof y == "string" ? o.textContent !== y && (d.suppressHydrationWarning !== !0 && zi(o.textContent, y, e), l = ["children", y]) : typeof y == "number" && o.textContent !== "" + y && (d.suppressHydrationWarning !== !0 && zi(
                o.textContent,
                y,
                e
              ), l = ["children", "" + y]) : u.hasOwnProperty(p) && y != null && p === "onScroll" && Se("scroll", o);
            }
            switch (n) {
              case "input":
                gi(o), cl(o, d, !0);
                break;
              case "textarea":
                gi(o), fl(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Bi);
            }
            o = l, t.updateQueue = o, o !== null && (t.flags |= 4);
          } else {
            p = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pl(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = p.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = p.createElement(n, { is: o.is }) : (e = p.createElement(n), n === "select" && (p = e, o.multiple ? p.multiple = !0 : o.size && (p.size = o.size))) : e = p.createElementNS(e, n), e[It] = t, e[Bn] = o, Tc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (p = Ks(n, o), n) {
                case "dialog":
                  Se("cancel", e), Se("close", e), l = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Se("load", e), l = o;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Un.length; l++) Se(Un[l], e);
                  l = o;
                  break;
                case "source":
                  Se("error", e), l = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Se(
                    "error",
                    e
                  ), Se("load", e), l = o;
                  break;
                case "details":
                  Se("toggle", e), l = o;
                  break;
                case "input":
                  ll(e, o), l = Fs(e, o), Se("invalid", e);
                  break;
                case "option":
                  l = o;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!o.multiple }, l = W({}, o, { value: void 0 }), Se("invalid", e);
                  break;
                case "textarea":
                  dl(e, o), l = Ws(e, o), Se("invalid", e);
                  break;
                default:
                  l = o;
              }
              Hs(n, l), y = l;
              for (d in y) if (y.hasOwnProperty(d)) {
                var _ = y[d];
                d === "style" ? yl(e, _) : d === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, _ != null && ml(e, _)) : d === "children" ? typeof _ == "string" ? (n !== "textarea" || _ !== "") && vn(e, _) : typeof _ == "number" && vn(e, "" + _) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (u.hasOwnProperty(d) ? _ != null && d === "onScroll" && Se("scroll", e) : _ != null && P(e, d, _, p));
              }
              switch (n) {
                case "input":
                  gi(e), cl(e, o, !1);
                  break;
                case "textarea":
                  gi(e), fl(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + pe(o.value));
                  break;
                case "select":
                  e.multiple = !!o.multiple, d = o.value, d != null ? Nr(e, !!o.multiple, d, !1) : o.defaultValue != null && Nr(
                    e,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Bi);
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
        return Je(t), null;
      case 6:
        if (e && t.stateNode != null) Rc(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Sr(Vn.current), Sr(Nt.current), Ki(t)) {
            if (o = t.stateNode, n = t.memoizedProps, o[It] = t, (d = o.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
              case 3:
                zi(o.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && zi(o.nodeValue, n, (e.mode & 1) !== 0);
            }
            d && (t.flags |= 4);
          } else o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o), o[It] = t, t.stateNode = o;
        }
        return Je(t), null;
      case 13:
        if (ke(xe), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (be && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Pu(), Jr(), t.flags |= 98560, d = !1;
          else if (d = Ki(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(i(317));
              d[It] = t;
            } else Jr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), d = !1;
          } else Et !== null && (ba(Et), Et = null), d = !0;
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (xe.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Ca())), t.updateQueue !== null && (t.flags |= 4), Je(t), null);
      case 4:
        return Zr(), fa(e, t), e === null && Dn(t.stateNode.containerInfo), Je(t), null;
      case 10:
        return Fo(t.type._context), Je(t), null;
      case 17:
        return tt(t.type) && Mi(), Je(t), null;
      case 19:
        if (ke(xe), d = t.memoizedState, d === null) return Je(t), null;
        if (o = (t.flags & 128) !== 0, p = d.rendering, p === null) if (o) Qn(d, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (p = Zi(e), p !== null) {
              for (t.flags |= 128, Qn(d, !1), o = p.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = n, n = t.child; n !== null; ) d = n, e = o, d.flags &= 14680066, p = d.alternate, p === null ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = p.childLanes, d.lanes = p.lanes, d.child = p.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = p.memoizedProps, d.memoizedState = p.memoizedState, d.updateQueue = p.updateQueue, d.type = p.type, e = p.dependencies, d.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ve(xe, xe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          d.tail !== null && Pe() > nn && (t.flags |= 128, o = !0, Qn(d, !1), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = Zi(p), e !== null) {
            if (t.flags |= 128, o = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qn(d, !0), d.tail === null && d.tailMode === "hidden" && !p.alternate && !be) return Je(t), null;
          } else 2 * Pe() - d.renderingStartTime > nn && n !== 1073741824 && (t.flags |= 128, o = !0, Qn(d, !1), t.lanes = 4194304);
          d.isBackwards ? (p.sibling = t.child, t.child = p) : (n = d.last, n !== null ? n.sibling = p : t.child = p, d.last = p);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Pe(), t.sibling = null, n = xe.current, ve(xe, o ? n & 1 | 2 : n & 1), t) : (Je(t), null);
      case 22:
      case 23:
        return Ta(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && (t.mode & 1) !== 0 ? (ct & 1073741824) !== 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Lf(e, t) {
    switch (Lo(t), t.tag) {
      case 1:
        return tt(t.type) && Mi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Zr(), ke(et), ke(Ke), Go(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ho(t), null;
      case 13:
        if (ke(xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          Jr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ke(xe), null;
      case 4:
        return Zr(), null;
      case 10:
        return Fo(t.type._context), null;
      case 22:
      case 23:
        return Ta(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ls = !1, Qe = !1, $f = typeof WeakSet == "function" ? WeakSet : Set, V = null;
  function tn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (o) {
      Oe(e, t, o);
    }
    else n.current = null;
  }
  function pa(e, t, n) {
    try {
      n();
    } catch (o) {
      Oe(e, t, o);
    }
  }
  var Oc = !1;
  function Uf(e, t) {
    if (To = Ri, e = au(), vo(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var l = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, d.nodeType;
          } catch {
            n = null;
            break e;
          }
          var p = 0, y = -1, _ = -1, R = 0, $ = 0, z = e, N = null;
          t: for (; ; ) {
            for (var q; z !== n || l !== 0 && z.nodeType !== 3 || (y = p + l), z !== d || o !== 0 && z.nodeType !== 3 || (_ = p + o), z.nodeType === 3 && (p += z.nodeValue.length), (q = z.firstChild) !== null; )
              N = z, z = q;
            for (; ; ) {
              if (z === e) break t;
              if (N === n && ++R === l && (y = p), N === d && ++$ === o && (_ = p), (q = z.nextSibling) !== null) break;
              z = N, N = z.parentNode;
            }
            z = q;
          }
          n = y === -1 || _ === -1 ? null : { start: y, end: _ };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Co = { focusedElem: e, selectionRange: n }, Ri = !1, V = t; V !== null; ) if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
    else for (; V !== null; ) {
      t = V;
      try {
        var K = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (K !== null) {
              var G = K.memoizedProps, je = K.memoizedState, x = t.stateNode, S = x.getSnapshotBeforeUpdate(t.elementType === t.type ? G : bt(t.type, G), je);
              x.__reactInternalSnapshotBeforeUpdate = S;
            }
            break;
          case 3:
            var T = t.stateNode.containerInfo;
            T.nodeType === 1 ? T.textContent = "" : T.nodeType === 9 && T.documentElement && T.removeChild(T.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (F) {
        Oe(t, t.return, F);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, V = e;
        break;
      }
      V = t.return;
    }
    return K = Oc, Oc = !1, K;
  }
  function Yn(e, t, n) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var l = o = o.next;
      do {
        if ((l.tag & e) === e) {
          var d = l.destroy;
          l.destroy = void 0, d !== void 0 && pa(t, n, d);
        }
        l = l.next;
      } while (l !== o);
    }
  }
  function us(e, t) {
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
  function ma(e) {
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
  function Ac(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ac(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[It], delete t[Bn], delete t[Po], delete t[wf], delete t[_f])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Pc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function jc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Pc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ga(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Bi));
    else if (o !== 4 && (e = e.child, e !== null)) for (ga(e, t, n), e = e.sibling; e !== null; ) ga(e, t, n), e = e.sibling;
  }
  function ya(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && (e = e.child, e !== null)) for (ya(e, t, n), e = e.sibling; e !== null; ) ya(e, t, n), e = e.sibling;
  }
  var Me = null, xt = !1;
  function or(e, t, n) {
    for (n = n.child; n !== null; ) Ic(e, t, n), n = n.sibling;
  }
  function Ic(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == "function") try {
      jt.onCommitFiberUnmount(ki, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Qe || tn(n, t);
      case 6:
        var o = Me, l = xt;
        Me = null, or(e, t, n), Me = o, xt = l, Me !== null && (xt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Me.removeChild(n.stateNode));
        break;
      case 18:
        Me !== null && (xt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? Ao(e.parentNode, n) : e.nodeType === 1 && Ao(e, n), On(e)) : Ao(Me, n.stateNode));
        break;
      case 4:
        o = Me, l = xt, Me = n.stateNode.containerInfo, xt = !0, or(e, t, n), Me = o, xt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qe && (o = n.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          l = o = o.next;
          do {
            var d = l, p = d.destroy;
            d = d.tag, p !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && pa(n, t, p), l = l.next;
          } while (l !== o);
        }
        or(e, t, n);
        break;
      case 1:
        if (!Qe && (tn(n, t), o = n.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = n.memoizedProps, o.state = n.memoizedState, o.componentWillUnmount();
        } catch (y) {
          Oe(n, t, y);
        }
        or(e, t, n);
        break;
      case 21:
        or(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Qe = (o = Qe) || n.memoizedState !== null, or(e, t, n), Qe = o) : or(e, t, n);
        break;
      default:
        or(e, t, n);
    }
  }
  function Nc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new $f()), t.forEach(function(o) {
        var l = Hf.bind(null, e, o);
        n.has(o) || (n.add(o), o.then(l, l));
      });
    }
  }
  function Tt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var o = 0; o < n.length; o++) {
      var l = n[o];
      try {
        var d = e, p = t, y = p;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              Me = y.stateNode, xt = !1;
              break e;
            case 3:
              Me = y.stateNode.containerInfo, xt = !0;
              break e;
            case 4:
              Me = y.stateNode.containerInfo, xt = !0;
              break e;
          }
          y = y.return;
        }
        if (Me === null) throw Error(i(160));
        Ic(d, p, l), Me = null, xt = !1;
        var _ = l.alternate;
        _ !== null && (_.return = null), l.return = null;
      } catch (R) {
        Oe(l, t, R);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Lc(t, e), t = t.sibling;
  }
  function Lc(e, t) {
    var n = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Tt(t, e), $t(e), o & 4) {
          try {
            Yn(3, e, e.return), us(3, e);
          } catch (G) {
            Oe(e, e.return, G);
          }
          try {
            Yn(5, e, e.return);
          } catch (G) {
            Oe(e, e.return, G);
          }
        }
        break;
      case 1:
        Tt(t, e), $t(e), o & 512 && n !== null && tn(n, n.return);
        break;
      case 5:
        if (Tt(t, e), $t(e), o & 512 && n !== null && tn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            vn(l, "");
          } catch (G) {
            Oe(e, e.return, G);
          }
        }
        if (o & 4 && (l = e.stateNode, l != null)) {
          var d = e.memoizedProps, p = n !== null ? n.memoizedProps : d, y = e.type, _ = e.updateQueue;
          if (e.updateQueue = null, _ !== null) try {
            y === "input" && d.type === "radio" && d.name != null && ul(l, d), Ks(y, p);
            var R = Ks(y, d);
            for (p = 0; p < _.length; p += 2) {
              var $ = _[p], z = _[p + 1];
              $ === "style" ? yl(l, z) : $ === "dangerouslySetInnerHTML" ? ml(l, z) : $ === "children" ? vn(l, z) : P(l, $, z, R);
            }
            switch (y) {
              case "input":
                Ms(l, d);
                break;
              case "textarea":
                hl(l, d);
                break;
              case "select":
                var N = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!d.multiple;
                var q = d.value;
                q != null ? Nr(l, !!d.multiple, q, !1) : N !== !!d.multiple && (d.defaultValue != null ? Nr(
                  l,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Nr(l, !!d.multiple, d.multiple ? [] : "", !1));
            }
            l[Bn] = d;
          } catch (G) {
            Oe(e, e.return, G);
          }
        }
        break;
      case 6:
        if (Tt(t, e), $t(e), o & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.stateNode, d = e.memoizedProps;
          try {
            l.nodeValue = d;
          } catch (G) {
            Oe(e, e.return, G);
          }
        }
        break;
      case 3:
        if (Tt(t, e), $t(e), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
          On(t.containerInfo);
        } catch (G) {
          Oe(e, e.return, G);
        }
        break;
      case 4:
        Tt(t, e), $t(e);
        break;
      case 13:
        Tt(t, e), $t(e), l = e.child, l.flags & 8192 && (d = l.memoizedState !== null, l.stateNode.isHidden = d, !d || l.alternate !== null && l.alternate.memoizedState !== null || (_a = Pe())), o & 4 && Nc(e);
        break;
      case 22:
        if ($ = n !== null && n.memoizedState !== null, e.mode & 1 ? (Qe = (R = Qe) || $, Tt(t, e), Qe = R) : Tt(t, e), $t(e), o & 8192) {
          if (R = e.memoizedState !== null, (e.stateNode.isHidden = R) && !$ && (e.mode & 1) !== 0) for (V = e, $ = e.child; $ !== null; ) {
            for (z = V = $; V !== null; ) {
              switch (N = V, q = N.child, N.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yn(4, N, N.return);
                  break;
                case 1:
                  tn(N, N.return);
                  var K = N.stateNode;
                  if (typeof K.componentWillUnmount == "function") {
                    o = N, n = N.return;
                    try {
                      t = o, K.props = t.memoizedProps, K.state = t.memoizedState, K.componentWillUnmount();
                    } catch (G) {
                      Oe(o, n, G);
                    }
                  }
                  break;
                case 5:
                  tn(N, N.return);
                  break;
                case 22:
                  if (N.memoizedState !== null) {
                    Dc(z);
                    continue;
                  }
              }
              q !== null ? (q.return = N, V = q) : Dc(z);
            }
            $ = $.sibling;
          }
          e: for ($ = null, z = e; ; ) {
            if (z.tag === 5) {
              if ($ === null) {
                $ = z;
                try {
                  l = z.stateNode, R ? (d = l.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (y = z.stateNode, _ = z.memoizedProps.style, p = _ != null && _.hasOwnProperty("display") ? _.display : null, y.style.display = gl("display", p));
                } catch (G) {
                  Oe(e, e.return, G);
                }
              }
            } else if (z.tag === 6) {
              if ($ === null) try {
                z.stateNode.nodeValue = R ? "" : z.memoizedProps;
              } catch (G) {
                Oe(e, e.return, G);
              }
            } else if ((z.tag !== 22 && z.tag !== 23 || z.memoizedState === null || z === e) && z.child !== null) {
              z.child.return = z, z = z.child;
              continue;
            }
            if (z === e) break e;
            for (; z.sibling === null; ) {
              if (z.return === null || z.return === e) break e;
              $ === z && ($ = null), z = z.return;
            }
            $ === z && ($ = null), z.sibling.return = z.return, z = z.sibling;
          }
        }
        break;
      case 19:
        Tt(t, e), $t(e), o & 4 && Nc(e);
        break;
      case 21:
        break;
      default:
        Tt(
          t,
          e
        ), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Pc(n)) {
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
            o.flags & 32 && (vn(l, ""), o.flags &= -33);
            var d = jc(e);
            ya(e, d, l);
            break;
          case 3:
          case 4:
            var p = o.stateNode.containerInfo, y = jc(e);
            ga(e, y, p);
            break;
          default:
            throw Error(i(161));
        }
      } catch (_) {
        Oe(e, e.return, _);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Df(e, t, n) {
    V = e, $c(e);
  }
  function $c(e, t, n) {
    for (var o = (e.mode & 1) !== 0; V !== null; ) {
      var l = V, d = l.child;
      if (l.tag === 22 && o) {
        var p = l.memoizedState !== null || ls;
        if (!p) {
          var y = l.alternate, _ = y !== null && y.memoizedState !== null || Qe;
          y = ls;
          var R = Qe;
          if (ls = p, (Qe = _) && !R) for (V = l; V !== null; ) p = V, _ = p.child, p.tag === 22 && p.memoizedState !== null ? zc(l) : _ !== null ? (_.return = p, V = _) : zc(l);
          for (; d !== null; ) V = d, $c(d), d = d.sibling;
          V = l, ls = y, Qe = R;
        }
        Uc(e);
      } else (l.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = l, V = d) : Uc(e);
    }
  }
  function Uc(e) {
    for (; V !== null; ) {
      var t = V;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qe || us(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !Qe) if (n === null) o.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : bt(t.type, n.memoizedProps);
                o.componentDidUpdate(l, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = t.updateQueue;
              d !== null && Du(t, d, o);
              break;
            case 3:
              var p = t.updateQueue;
              if (p !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Du(t, p, n);
              }
              break;
            case 5:
              var y = t.stateNode;
              if (n === null && t.flags & 4) {
                n = y;
                var _ = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    _.autoFocus && n.focus();
                    break;
                  case "img":
                    _.src && (n.src = _.src);
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
                var R = t.alternate;
                if (R !== null) {
                  var $ = R.memoizedState;
                  if ($ !== null) {
                    var z = $.dehydrated;
                    z !== null && On(z);
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
          Qe || t.flags & 512 && ma(t);
        } catch (N) {
          Oe(t, t.return, N);
        }
      }
      if (t === e) {
        V = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, V = n;
        break;
      }
      V = t.return;
    }
  }
  function Dc(e) {
    for (; V !== null; ) {
      var t = V;
      if (t === e) {
        V = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, V = n;
        break;
      }
      V = t.return;
    }
  }
  function zc(e) {
    for (; V !== null; ) {
      var t = V;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              us(4, t);
            } catch (_) {
              Oe(t, n, _);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var l = t.return;
              try {
                o.componentDidMount();
              } catch (_) {
                Oe(t, l, _);
              }
            }
            var d = t.return;
            try {
              ma(t);
            } catch (_) {
              Oe(t, d, _);
            }
            break;
          case 5:
            var p = t.return;
            try {
              ma(t);
            } catch (_) {
              Oe(t, p, _);
            }
        }
      } catch (_) {
        Oe(t, t.return, _);
      }
      if (t === e) {
        V = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        y.return = t.return, V = y;
        break;
      }
      V = t.return;
    }
  }
  var zf = Math.ceil, cs = B.ReactCurrentDispatcher, va = B.ReactCurrentOwner, yt = B.ReactCurrentBatchConfig, ce = 0, Be = null, Ie = null, qe = 0, ct = 0, rn = tr(0), Ue = 0, Xn = null, Er = 0, ds = 0, wa = 0, Zn = null, nt = null, _a = 0, nn = 1 / 0, Wt = null, hs = !1, Sa = null, ar = null, fs = !1, lr = null, ps = 0, ei = 0, ka = null, ms = -1, gs = 0;
  function Xe() {
    return (ce & 6) !== 0 ? Pe() : ms !== -1 ? ms : ms = Pe();
  }
  function ur(e) {
    return (e.mode & 1) === 0 ? 1 : (ce & 2) !== 0 && qe !== 0 ? qe & -qe : kf.transition !== null ? (gs === 0 && (gs = jl()), gs) : (e = me, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Fl(e.type)), e);
  }
  function Ct(e, t, n, o) {
    if (50 < ei) throw ei = 0, ka = null, Error(i(185));
    bn(e, n, o), ((ce & 2) === 0 || e !== Be) && (e === Be && ((ce & 2) === 0 && (ds |= n), Ue === 4 && cr(e, qe)), it(e, o), n === 1 && ce === 0 && (t.mode & 1) === 0 && (nn = Pe() + 500, Wi && nr()));
  }
  function it(e, t) {
    var n = e.callbackNode;
    Sh(e, t);
    var o = xi(e, e === Be ? qe : 0);
    if (o === 0) n !== null && Ol(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = o & -o, e.callbackPriority !== t) {
      if (n != null && Ol(n), t === 1) e.tag === 0 ? Sf(Fc.bind(null, e)) : Tu(Fc.bind(null, e)), yf(function() {
        (ce & 6) === 0 && nr();
      }), n = null;
      else {
        switch (Il(o)) {
          case 1:
            n = eo;
            break;
          case 4:
            n = Al;
            break;
          case 16:
            n = Si;
            break;
          case 536870912:
            n = Pl;
            break;
          default:
            n = Si;
        }
        n = Jc(n, Bc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Bc(e, t) {
    if (ms = -1, gs = 0, (ce & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (sn() && e.callbackNode !== n) return null;
    var o = xi(e, e === Be ? qe : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = ys(e, o);
    else {
      t = o;
      var l = ce;
      ce |= 2;
      var d = qc();
      (Be !== e || qe !== t) && (Wt = null, nn = Pe() + 500, xr(e, t));
      do
        try {
          Mf();
          break;
        } catch (y) {
          Mc(e, y);
        }
      while (!0);
      Bo(), cs.current = d, ce = l, Ie !== null ? t = 0 : (Be = null, qe = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (l = to(e), l !== 0 && (o = l, t = Ea(e, l))), t === 1) throw n = Xn, xr(e, 0), cr(e, o), it(e, Pe()), n;
      if (t === 6) cr(e, o);
      else {
        if (l = e.current.alternate, (o & 30) === 0 && !Bf(l) && (t = ys(e, o), t === 2 && (d = to(e), d !== 0 && (o = d, t = Ea(e, d))), t === 1)) throw n = Xn, xr(e, 0), cr(e, o), it(e, Pe()), n;
        switch (e.finishedWork = l, e.finishedLanes = o, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Tr(e, nt, Wt);
            break;
          case 3:
            if (cr(e, o), (o & 130023424) === o && (t = _a + 500 - Pe(), 10 < t)) {
              if (xi(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & o) !== o) {
                Xe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Oo(Tr.bind(null, e, nt, Wt), t);
              break;
            }
            Tr(e, nt, Wt);
            break;
          case 4:
            if (cr(e, o), (o & 4194240) === o) break;
            for (t = e.eventTimes, l = -1; 0 < o; ) {
              var p = 31 - St(o);
              d = 1 << p, p = t[p], p > l && (l = p), o &= ~d;
            }
            if (o = l, o = Pe() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * zf(o / 1960)) - o, 10 < o) {
              e.timeoutHandle = Oo(Tr.bind(null, e, nt, Wt), o);
              break;
            }
            Tr(e, nt, Wt);
            break;
          case 5:
            Tr(e, nt, Wt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return it(e, Pe()), e.callbackNode === n ? Bc.bind(null, e) : null;
  }
  function Ea(e, t) {
    var n = Zn;
    return e.current.memoizedState.isDehydrated && (xr(e, t).flags |= 256), e = ys(e, t), e !== 2 && (t = nt, nt = n, t !== null && ba(t)), e;
  }
  function ba(e) {
    nt === null ? nt = e : nt.push.apply(nt, e);
  }
  function Bf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var o = 0; o < n.length; o++) {
          var l = n[o], d = l.getSnapshot;
          l = l.value;
          try {
            if (!kt(d(), l)) return !1;
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
  function cr(e, t) {
    for (t &= ~wa, t &= ~ds, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - St(t), o = 1 << n;
      e[n] = -1, t &= ~o;
    }
  }
  function Fc(e) {
    if ((ce & 6) !== 0) throw Error(i(327));
    sn();
    var t = xi(e, 0);
    if ((t & 1) === 0) return it(e, Pe()), null;
    var n = ys(e, t);
    if (e.tag !== 0 && n === 2) {
      var o = to(e);
      o !== 0 && (t = o, n = Ea(e, o));
    }
    if (n === 1) throw n = Xn, xr(e, 0), cr(e, t), it(e, Pe()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tr(e, nt, Wt), it(e, Pe()), null;
  }
  function xa(e, t) {
    var n = ce;
    ce |= 1;
    try {
      return e(t);
    } finally {
      ce = n, ce === 0 && (nn = Pe() + 500, Wi && nr());
    }
  }
  function br(e) {
    lr !== null && lr.tag === 0 && (ce & 6) === 0 && sn();
    var t = ce;
    ce |= 1;
    var n = yt.transition, o = me;
    try {
      if (yt.transition = null, me = 1, e) return e();
    } finally {
      me = o, yt.transition = n, ce = t, (ce & 6) === 0 && nr();
    }
  }
  function Ta() {
    ct = rn.current, ke(rn);
  }
  function xr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, gf(n)), Ie !== null) for (n = Ie.return; n !== null; ) {
      var o = n;
      switch (Lo(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Mi();
          break;
        case 3:
          Zr(), ke(et), ke(Ke), Go();
          break;
        case 5:
          Ho(o);
          break;
        case 4:
          Zr();
          break;
        case 13:
          ke(xe);
          break;
        case 19:
          ke(xe);
          break;
        case 10:
          Fo(o.type._context);
          break;
        case 22:
        case 23:
          Ta();
      }
      n = n.return;
    }
    if (Be = e, Ie = e = dr(e.current, null), qe = ct = t, Ue = 0, Xn = null, wa = ds = Er = 0, nt = Zn = null, _r !== null) {
      for (t = 0; t < _r.length; t++) if (n = _r[t], o = n.interleaved, o !== null) {
        n.interleaved = null;
        var l = o.next, d = n.pending;
        if (d !== null) {
          var p = d.next;
          d.next = l, o.next = p;
        }
        n.pending = o;
      }
      _r = null;
    }
    return e;
  }
  function Mc(e, t) {
    do {
      var n = Ie;
      try {
        if (Bo(), es.current = is, ts) {
          for (var o = Te.memoizedState; o !== null; ) {
            var l = o.queue;
            l !== null && (l.pending = null), o = o.next;
          }
          ts = !1;
        }
        if (kr = 0, ze = $e = Te = null, Hn = !1, Kn = 0, va.current = null, n === null || n.return === null) {
          Ue = 1, Xn = t, Ie = null;
          break;
        }
        e: {
          var d = e, p = n.return, y = n, _ = t;
          if (t = qe, y.flags |= 32768, _ !== null && typeof _ == "object" && typeof _.then == "function") {
            var R = _, $ = y, z = $.tag;
            if (($.mode & 1) === 0 && (z === 0 || z === 11 || z === 15)) {
              var N = $.alternate;
              N ? ($.updateQueue = N.updateQueue, $.memoizedState = N.memoizedState, $.lanes = N.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var q = fc(p);
            if (q !== null) {
              q.flags &= -257, pc(q, p, y, d, t), q.mode & 1 && hc(d, R, t), t = q, _ = R;
              var K = t.updateQueue;
              if (K === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(_), t.updateQueue = G;
              } else K.add(_);
              break e;
            } else {
              if ((t & 1) === 0) {
                hc(d, R, t), Ca();
                break e;
              }
              _ = Error(i(426));
            }
          } else if (be && y.mode & 1) {
            var je = fc(p);
            if (je !== null) {
              (je.flags & 65536) === 0 && (je.flags |= 256), pc(je, p, y, d, t), Do(en(_, y));
              break e;
            }
          }
          d = _ = en(_, y), Ue !== 4 && (Ue = 2), Zn === null ? Zn = [d] : Zn.push(d), d = p;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, t &= -t, d.lanes |= t;
                var x = cc(d, _, t);
                Uu(d, x);
                break e;
              case 1:
                y = _;
                var S = d.type, T = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof S.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (ar === null || !ar.has(T)))) {
                  d.flags |= 65536, t &= -t, d.lanes |= t;
                  var F = dc(d, y, t);
                  Uu(d, F);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Vc(n);
      } catch (Q) {
        t = Q, Ie === n && n !== null && (Ie = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qc() {
    var e = cs.current;
    return cs.current = is, e === null ? is : e;
  }
  function Ca() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), Be === null || (Er & 268435455) === 0 && (ds & 268435455) === 0 || cr(Be, qe);
  }
  function ys(e, t) {
    var n = ce;
    ce |= 2;
    var o = qc();
    (Be !== e || qe !== t) && (Wt = null, xr(e, t));
    do
      try {
        Ff();
        break;
      } catch (l) {
        Mc(e, l);
      }
    while (!0);
    if (Bo(), ce = n, cs.current = o, Ie !== null) throw Error(i(261));
    return Be = null, qe = 0, Ue;
  }
  function Ff() {
    for (; Ie !== null; ) Wc(Ie);
  }
  function Mf() {
    for (; Ie !== null && !hh(); ) Wc(Ie);
  }
  function Wc(e) {
    var t = Gc(e.alternate, e, ct);
    e.memoizedProps = e.pendingProps, t === null ? Vc(e) : Ie = t, va.current = null;
  }
  function Vc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Nf(n, t, ct), n !== null) {
          Ie = n;
          return;
        }
      } else {
        if (n = Lf(n, t), n !== null) {
          n.flags &= 32767, Ie = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ue = 6, Ie = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function Tr(e, t, n) {
    var o = me, l = yt.transition;
    try {
      yt.transition = null, me = 1, qf(e, t, n, o);
    } finally {
      yt.transition = l, me = o;
    }
    return null;
  }
  function qf(e, t, n, o) {
    do
      sn();
    while (lr !== null);
    if ((ce & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var d = n.lanes | n.childLanes;
    if (kh(e, d), e === Be && (Ie = Be = null, qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || fs || (fs = !0, Jc(Si, function() {
      return sn(), null;
    })), d = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || d) {
      d = yt.transition, yt.transition = null;
      var p = me;
      me = 1;
      var y = ce;
      ce |= 4, va.current = null, Uf(e, n), Lc(n, e), uf(Co), Ri = !!To, Co = To = null, e.current = n, Df(n), fh(), ce = y, me = p, yt.transition = d;
    } else e.current = n;
    if (fs && (fs = !1, lr = e, ps = l), d = e.pendingLanes, d === 0 && (ar = null), gh(n.stateNode), it(e, Pe()), t !== null) for (o = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], o(l.value, { componentStack: l.stack, digest: l.digest });
    if (hs) throw hs = !1, e = Sa, Sa = null, e;
    return (ps & 1) !== 0 && e.tag !== 0 && sn(), d = e.pendingLanes, (d & 1) !== 0 ? e === ka ? ei++ : (ei = 0, ka = e) : ei = 0, nr(), null;
  }
  function sn() {
    if (lr !== null) {
      var e = Il(ps), t = yt.transition, n = me;
      try {
        if (yt.transition = null, me = 16 > e ? 16 : e, lr === null) var o = !1;
        else {
          if (e = lr, lr = null, ps = 0, (ce & 6) !== 0) throw Error(i(331));
          var l = ce;
          for (ce |= 4, V = e.current; V !== null; ) {
            var d = V, p = d.child;
            if ((V.flags & 16) !== 0) {
              var y = d.deletions;
              if (y !== null) {
                for (var _ = 0; _ < y.length; _++) {
                  var R = y[_];
                  for (V = R; V !== null; ) {
                    var $ = V;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yn(8, $, d);
                    }
                    var z = $.child;
                    if (z !== null) z.return = $, V = z;
                    else for (; V !== null; ) {
                      $ = V;
                      var N = $.sibling, q = $.return;
                      if (Ac($), $ === R) {
                        V = null;
                        break;
                      }
                      if (N !== null) {
                        N.return = q, V = N;
                        break;
                      }
                      V = q;
                    }
                  }
                }
                var K = d.alternate;
                if (K !== null) {
                  var G = K.child;
                  if (G !== null) {
                    K.child = null;
                    do {
                      var je = G.sibling;
                      G.sibling = null, G = je;
                    } while (G !== null);
                  }
                }
                V = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && p !== null) p.return = d, V = p;
            else e: for (; V !== null; ) {
              if (d = V, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Yn(9, d, d.return);
              }
              var x = d.sibling;
              if (x !== null) {
                x.return = d.return, V = x;
                break e;
              }
              V = d.return;
            }
          }
          var S = e.current;
          for (V = S; V !== null; ) {
            p = V;
            var T = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && T !== null) T.return = p, V = T;
            else e: for (p = S; V !== null; ) {
              if (y = V, (y.flags & 2048) !== 0) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    us(9, y);
                }
              } catch (Q) {
                Oe(y, y.return, Q);
              }
              if (y === p) {
                V = null;
                break e;
              }
              var F = y.sibling;
              if (F !== null) {
                F.return = y.return, V = F;
                break e;
              }
              V = y.return;
            }
          }
          if (ce = l, nr(), jt && typeof jt.onPostCommitFiberRoot == "function") try {
            jt.onPostCommitFiberRoot(ki, e);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        me = n, yt.transition = t;
      }
    }
    return !1;
  }
  function Hc(e, t, n) {
    t = en(n, t), t = cc(e, t, 1), e = sr(e, t, 1), t = Xe(), e !== null && (bn(e, 1, t), it(e, t));
  }
  function Oe(e, t, n) {
    if (e.tag === 3) Hc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Hc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ar === null || !ar.has(o))) {
          e = en(n, e), e = dc(t, e, 1), t = sr(t, e, 1), e = Xe(), t !== null && (bn(t, 1, e), it(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Wf(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (qe & n) === n && (Ue === 4 || Ue === 3 && (qe & 130023424) === qe && 500 > Pe() - _a ? xr(e, 0) : wa |= n), it(e, t);
  }
  function Kc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = bi, bi <<= 1, (bi & 130023424) === 0 && (bi = 4194304)));
    var n = Xe();
    e = Ft(e, t), e !== null && (bn(e, t, n), it(e, n));
  }
  function Vf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Kc(e, n);
  }
  function Hf(e, t) {
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
    o !== null && o.delete(t), Kc(e, n);
  }
  var Gc;
  Gc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || et.current) rt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return rt = !1, If(e, t, n);
      rt = (e.flags & 131072) !== 0;
    }
    else rt = !1, be && (t.flags & 1048576) !== 0 && Cu(t, Hi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var o = t.type;
        as(e, t), e = t.pendingProps;
        var l = Hr(t, Ke.current);
        Xr(t, n), l = Yo(null, t, o, e, l, n);
        var d = Xo();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tt(o) ? (d = !0, qi(t)) : d = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Wo(t), l.updater = ss, t.stateNode = l, l._reactInternals = t, ia(t, o, e, n), t = la(null, t, o, !0, d, n)) : (t.tag = 0, be && d && No(t), Ye(null, t, l, n), t = t.child), t;
      case 16:
        o = t.elementType;
        e: {
          switch (as(e, t), e = t.pendingProps, l = o._init, o = l(o._payload), t.type = o, l = t.tag = Gf(o), e = bt(o, e), l) {
            case 0:
              t = aa(null, t, o, e, n);
              break e;
            case 1:
              t = _c(null, t, o, e, n);
              break e;
            case 11:
              t = mc(null, t, o, e, n);
              break e;
            case 14:
              t = gc(null, t, o, bt(o.type, e), n);
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
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : bt(o, l), aa(e, t, o, l, n);
      case 1:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : bt(o, l), _c(e, t, o, l, n);
      case 3:
        e: {
          if (Sc(t), e === null) throw Error(i(387));
          o = t.pendingProps, d = t.memoizedState, l = d.element, $u(e, t), Xi(t, o, null, n);
          var p = t.memoizedState;
          if (o = p.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: p.cache, pendingSuspenseBoundaries: p.pendingSuspenseBoundaries, transitions: p.transitions }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
            l = en(Error(i(423)), t), t = kc(e, t, o, n, l);
            break e;
          } else if (o !== l) {
            l = en(Error(i(424)), t), t = kc(e, t, o, n, l);
            break e;
          } else for (ut = er(t.stateNode.containerInfo.firstChild), lt = t, be = !0, Et = null, n = Nu(t, null, o, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Jr(), o === l) {
              t = qt(e, t, n);
              break e;
            }
            Ye(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return zu(t), e === null && Uo(t), o = t.type, l = t.pendingProps, d = e !== null ? e.memoizedProps : null, p = l.children, Ro(o, l) ? p = null : d !== null && Ro(o, d) && (t.flags |= 32), wc(e, t), Ye(e, t, p, n), t.child;
      case 6:
        return e === null && Uo(t), null;
      case 13:
        return Ec(e, t, n);
      case 4:
        return Vo(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = Qr(t, null, o, n) : Ye(e, t, o, n), t.child;
      case 11:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : bt(o, l), mc(e, t, o, l, n);
      case 7:
        return Ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (o = t.type._context, l = t.pendingProps, d = t.memoizedProps, p = l.value, ve(Ji, o._currentValue), o._currentValue = p, d !== null) if (kt(d.value, p)) {
            if (d.children === l.children && !et.current) {
              t = qt(e, t, n);
              break e;
            }
          } else for (d = t.child, d !== null && (d.return = t); d !== null; ) {
            var y = d.dependencies;
            if (y !== null) {
              p = d.child;
              for (var _ = y.firstContext; _ !== null; ) {
                if (_.context === o) {
                  if (d.tag === 1) {
                    _ = Mt(-1, n & -n), _.tag = 2;
                    var R = d.updateQueue;
                    if (R !== null) {
                      R = R.shared;
                      var $ = R.pending;
                      $ === null ? _.next = _ : (_.next = $.next, $.next = _), R.pending = _;
                    }
                  }
                  d.lanes |= n, _ = d.alternate, _ !== null && (_.lanes |= n), Mo(
                    d.return,
                    n,
                    t
                  ), y.lanes |= n;
                  break;
                }
                _ = _.next;
              }
            } else if (d.tag === 10) p = d.type === t.type ? null : d.child;
            else if (d.tag === 18) {
              if (p = d.return, p === null) throw Error(i(341));
              p.lanes |= n, y = p.alternate, y !== null && (y.lanes |= n), Mo(p, n, t), p = d.sibling;
            } else p = d.child;
            if (p !== null) p.return = d;
            else for (p = d; p !== null; ) {
              if (p === t) {
                p = null;
                break;
              }
              if (d = p.sibling, d !== null) {
                d.return = p.return, p = d;
                break;
              }
              p = p.return;
            }
            d = p;
          }
          Ye(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, o = t.pendingProps.children, Xr(t, n), l = mt(l), o = o(l), t.flags |= 1, Ye(e, t, o, n), t.child;
      case 14:
        return o = t.type, l = bt(o, t.pendingProps), l = bt(o.type, l), gc(e, t, o, l, n);
      case 15:
        return yc(e, t, t.type, t.pendingProps, n);
      case 17:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : bt(o, l), as(e, t), t.tag = 1, tt(o) ? (e = !0, qi(t)) : e = !1, Xr(t, n), lc(t, o, l), ia(t, o, l, n), la(null, t, o, !0, e, n);
      case 19:
        return xc(e, t, n);
      case 22:
        return vc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Jc(e, t) {
    return Rl(e, t);
  }
  function Kf(e, t, n, o) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function vt(e, t, n, o) {
    return new Kf(e, t, n, o);
  }
  function Ra(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gf(e) {
    if (typeof e == "function") return Ra(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ze) return 11;
      if (e === Re) return 14;
    }
    return 2;
  }
  function dr(e, t) {
    var n = e.alternate;
    return n === null ? (n = vt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function vs(e, t, n, o, l, d) {
    var p = 2;
    if (o = e, typeof e == "function") Ra(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else e: switch (e) {
      case ie:
        return Cr(n.children, l, d, t);
      case ue:
        p = 8, l |= 8;
        break;
      case _e:
        return e = vt(12, n, t, l | 2), e.elementType = _e, e.lanes = d, e;
      case Ce:
        return e = vt(13, n, t, l), e.elementType = Ce, e.lanes = d, e;
      case ge:
        return e = vt(19, n, t, l), e.elementType = ge, e.lanes = d, e;
      case H:
        return ws(n, l, d, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case He:
            p = 10;
            break e;
          case _t:
            p = 9;
            break e;
          case Ze:
            p = 11;
            break e;
          case Re:
            p = 14;
            break e;
          case Le:
            p = 16, o = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = vt(p, n, t, l), t.elementType = e, t.type = o, t.lanes = d, t;
  }
  function Cr(e, t, n, o) {
    return e = vt(7, e, o, t), e.lanes = n, e;
  }
  function ws(e, t, n, o) {
    return e = vt(22, e, o, t), e.elementType = H, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Oa(e, t, n) {
    return e = vt(6, e, null, t), e.lanes = n, e;
  }
  function Aa(e, t, n) {
    return t = vt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Jf(e, t, n, o, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ro(0), this.expirationTimes = ro(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ro(0), this.identifierPrefix = o, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Pa(e, t, n, o, l, d, p, y, _) {
    return e = new Jf(e, t, n, y, _), t === 1 ? (t = 1, d === !0 && (t |= 8)) : t = 0, d = vt(3, null, null, t), e.current = d, d.stateNode = e, d.memoizedState = { element: o, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wo(d), e;
  }
  function Qf(e, t, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: U, key: o == null ? null : "" + o, children: e, containerInfo: t, implementation: n };
  }
  function Qc(e) {
    if (!e) return rr;
    e = e._reactInternals;
    e: {
      if (mr(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (tt(t.type)) {
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
      if (tt(n)) return bu(e, n, t);
    }
    return t;
  }
  function Yc(e, t, n, o, l, d, p, y, _) {
    return e = Pa(n, o, !0, e, l, d, p, y, _), e.context = Qc(null), n = e.current, o = Xe(), l = ur(n), d = Mt(o, l), d.callback = t ?? null, sr(n, d, l), e.current.lanes = l, bn(e, l, o), it(e, o), e;
  }
  function _s(e, t, n, o) {
    var l = t.current, d = Xe(), p = ur(l);
    return n = Qc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Mt(d, p), t.payload = { element: e }, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = sr(l, t, p), e !== null && (Ct(e, l, p, d), Yi(e, l, p)), p;
  }
  function Ss(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Xc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ja(e, t) {
    Xc(e, t), (e = e.alternate) && Xc(e, t);
  }
  function Yf() {
    return null;
  }
  var Zc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ia(e) {
    this._internalRoot = e;
  }
  ks.prototype.render = Ia.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    _s(e, t, null, null);
  }, ks.prototype.unmount = Ia.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      br(function() {
        _s(null, e, null, null);
      }), t[Ut] = null;
    }
  };
  function ks(e) {
    this._internalRoot = e;
  }
  ks.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = $l();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++) ;
      Yt.splice(n, 0, e), n === 0 && zl(e);
    }
  };
  function Na(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Es(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ed() {
  }
  function Xf(e, t, n, o, l) {
    if (l) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var R = Ss(p);
          d.call(R);
        };
      }
      var p = Yc(t, o, e, 0, null, !1, !1, "", ed);
      return e._reactRootContainer = p, e[Ut] = p.current, Dn(e.nodeType === 8 ? e.parentNode : e), br(), p;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof o == "function") {
      var y = o;
      o = function() {
        var R = Ss(_);
        y.call(R);
      };
    }
    var _ = Pa(e, 0, !1, null, null, !1, !1, "", ed);
    return e._reactRootContainer = _, e[Ut] = _.current, Dn(e.nodeType === 8 ? e.parentNode : e), br(function() {
      _s(t, _, n, o);
    }), _;
  }
  function bs(e, t, n, o, l) {
    var d = n._reactRootContainer;
    if (d) {
      var p = d;
      if (typeof l == "function") {
        var y = l;
        l = function() {
          var _ = Ss(p);
          y.call(_);
        };
      }
      _s(t, p, e, l);
    } else p = Xf(n, t, e, l, o);
    return Ss(p);
  }
  Nl = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = En(t.pendingLanes);
          n !== 0 && (no(t, n | 1), it(t, Pe()), (ce & 6) === 0 && (nn = Pe() + 500, nr()));
        }
        break;
      case 13:
        br(function() {
          var o = Ft(e, 1);
          if (o !== null) {
            var l = Xe();
            Ct(o, e, 1, l);
          }
        }), ja(e, 1);
    }
  }, io = function(e) {
    if (e.tag === 13) {
      var t = Ft(e, 134217728);
      if (t !== null) {
        var n = Xe();
        Ct(t, e, 134217728, n);
      }
      ja(e, 134217728);
    }
  }, Ll = function(e) {
    if (e.tag === 13) {
      var t = ur(e), n = Ft(e, t);
      if (n !== null) {
        var o = Xe();
        Ct(n, e, t, o);
      }
      ja(e, t);
    }
  }, $l = function() {
    return me;
  }, Ul = function(e, t) {
    var n = me;
    try {
      return me = e, t();
    } finally {
      me = n;
    }
  }, Qs = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ms(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var o = n[t];
            if (o !== e && o.form === e.form) {
              var l = Fi(o);
              if (!l) throw Error(i(90));
              al(o), Ms(o, l);
            }
          }
        }
        break;
      case "textarea":
        hl(e, n);
        break;
      case "select":
        t = n.value, t != null && Nr(e, !!n.multiple, t, !1);
    }
  }, Sl = xa, kl = br;
  var Zf = { usingClientEntryPoint: !1, Events: [Fn, Wr, Fi, wl, _l, xa] }, ti = { findFiberByHostInstance: gr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ep = { bundleType: ti.bundleType, version: ti.version, rendererPackageName: ti.rendererPackageName, rendererConfig: ti.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: B.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Tl(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ti.findFiberByHostInstance || Yf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xs.isDisabled && xs.supportsFiber) try {
      ki = xs.inject(ep), jt = xs;
    } catch {
    }
  }
  return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zf, st.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Na(t)) throw Error(i(200));
    return Qf(e, t, null, n);
  }, st.createRoot = function(e, t) {
    if (!Na(e)) throw Error(i(299));
    var n = !1, o = "", l = Zc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Pa(e, 1, !1, null, null, n, !1, o, l), e[Ut] = t.current, Dn(e.nodeType === 8 ? e.parentNode : e), new Ia(t);
  }, st.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = Tl(t), e = e === null ? null : e.stateNode, e;
  }, st.flushSync = function(e) {
    return br(e);
  }, st.hydrate = function(e, t, n) {
    if (!Es(t)) throw Error(i(200));
    return bs(null, e, t, !0, n);
  }, st.hydrateRoot = function(e, t, n) {
    if (!Na(e)) throw Error(i(405));
    var o = n != null && n.hydratedSources || null, l = !1, d = "", p = Zc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (d = n.identifierPrefix), n.onRecoverableError !== void 0 && (p = n.onRecoverableError)), t = Yc(t, null, e, 1, n ?? null, l, !1, d, p), e[Ut] = t.current, Dn(e), o) for (e = 0; e < o.length; e++) n = o[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ks(t);
  }, st.render = function(e, t, n) {
    if (!Es(t)) throw Error(i(200));
    return bs(null, e, t, !1, n);
  }, st.unmountComponentAtNode = function(e) {
    if (!Es(e)) throw Error(i(40));
    return e._reactRootContainer ? (br(function() {
      bs(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ut] = null;
      });
    }), !0) : !1;
  }, st.unstable_batchedUpdates = xa, st.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
    if (!Es(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return bs(e, t, n, !1, o);
  }, st.version = "18.3.1-next-f1338f8080-20240426", st;
}
var od;
function lp() {
  if (od) return $a.exports;
  od = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (r) {
        console.error(r);
      }
  }
  return s(), $a.exports = ap(), $a.exports;
}
var ad;
function up() {
  if (ad) return Ts;
  ad = 1;
  var s = lp();
  return Ts.createRoot = s.createRoot, Ts.hydrateRoot = s.hydrateRoot, Ts;
}
var cp = up(), za = { exports: {} }, ri = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ld;
function dp() {
  if (ld) return ri;
  ld = 1;
  var s = il(), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(f, m, g) {
    var v, k = {}, w = null, E = null;
    g !== void 0 && (w = "" + g), m.key !== void 0 && (w = "" + m.key), m.ref !== void 0 && (E = m.ref);
    for (v in m) a.call(m, v) && !c.hasOwnProperty(v) && (k[v] = m[v]);
    if (f && f.defaultProps) for (v in m = f.defaultProps, m) k[v] === void 0 && (k[v] = m[v]);
    return { $$typeof: r, type: f, key: w, ref: E, props: k, _owner: u.current };
  }
  return ri.Fragment = i, ri.jsx = h, ri.jsxs = h, ri;
}
var ud;
function hp() {
  return ud || (ud = 1, za.exports = dp()), za.exports;
}
var I = hp();
function Us(s, r) {
  var i = {};
  for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && r.indexOf(a) < 0 && (i[a] = s[a]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, a = Object.getOwnPropertySymbols(s); u < a.length; u++)
      r.indexOf(a[u]) < 0 && Object.prototype.propertyIsEnumerable.call(s, a[u]) && (i[a[u]] = s[a[u]]);
  return i;
}
function fp(s, r, i, a) {
  function u(c) {
    return c instanceof i ? c : new i(function(h) {
      h(c);
    });
  }
  return new (i || (i = Promise))(function(c, h) {
    function f(v) {
      try {
        g(a.next(v));
      } catch (k) {
        h(k);
      }
    }
    function m(v) {
      try {
        g(a.throw(v));
      } catch (k) {
        h(k);
      }
    }
    function g(v) {
      v.done ? c(v.value) : u(v.value).then(f, m);
    }
    g((a = a.apply(s, r || [])).next());
  });
}
const pp = (s) => s ? (...r) => s(...r) : (...r) => fetch(...r);
class sl extends Error {
  constructor(r, i = "FunctionsError", a) {
    super(r), this.name = i, this.context = a;
  }
}
class mp extends sl {
  constructor(r) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", r);
  }
}
class cd extends sl {
  constructor(r) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", r);
  }
}
class dd extends sl {
  constructor(r) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", r);
  }
}
var Ga;
(function(s) {
  s.Any = "any", s.ApNortheast1 = "ap-northeast-1", s.ApNortheast2 = "ap-northeast-2", s.ApSouth1 = "ap-south-1", s.ApSoutheast1 = "ap-southeast-1", s.ApSoutheast2 = "ap-southeast-2", s.CaCentral1 = "ca-central-1", s.EuCentral1 = "eu-central-1", s.EuWest1 = "eu-west-1", s.EuWest2 = "eu-west-2", s.EuWest3 = "eu-west-3", s.SaEast1 = "sa-east-1", s.UsEast1 = "us-east-1", s.UsWest1 = "us-west-1", s.UsWest2 = "us-west-2";
})(Ga || (Ga = {}));
class gp {
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
  constructor(r, { headers: i = {}, customFetch: a, region: u = Ga.Any } = {}) {
    this.url = r, this.headers = i, this.region = u, this.fetch = pp(a);
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
    return fp(this, arguments, void 0, function* (i, a = {}) {
      var u;
      let c, h;
      try {
        const { headers: f, method: m, body: g, signal: v, timeout: k } = a;
        let w = {}, { region: E } = a;
        E || (E = this.region);
        const C = new URL(`${this.url}/${i}`);
        E && E !== "any" && (w["x-region"] = E, C.searchParams.set("forceFunctionRegion", E));
        let O;
        g && (f && !Object.prototype.hasOwnProperty.call(f, "Content-Type") || !f) ? typeof Blob < "u" && g instanceof Blob || g instanceof ArrayBuffer ? (w["Content-Type"] = "application/octet-stream", O = g) : typeof g == "string" ? (w["Content-Type"] = "text/plain", O = g) : typeof FormData < "u" && g instanceof FormData ? O = g : (w["Content-Type"] = "application/json", O = JSON.stringify(g)) : g && typeof g != "string" && !(typeof Blob < "u" && g instanceof Blob) && !(g instanceof ArrayBuffer) && !(typeof FormData < "u" && g instanceof FormData) ? O = JSON.stringify(g) : O = g;
        let A = v;
        k && (h = new AbortController(), c = setTimeout(() => h.abort(), k), v ? (A = h.signal, v.addEventListener("abort", () => h.abort())) : A = h.signal);
        const j = yield this.fetch(C.toString(), {
          method: m || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, w), this.headers), f),
          body: O,
          signal: A
        }).catch((Z) => {
          throw new mp(Z);
        }), M = j.headers.get("x-relay-error");
        if (M && M === "true")
          throw new cd(j);
        if (!j.ok)
          throw new dd(j);
        let P = ((u = j.headers.get("Content-Type")) !== null && u !== void 0 ? u : "text/plain").split(";")[0].trim(), B;
        return P === "application/json" ? B = yield j.json() : P === "application/octet-stream" || P === "application/pdf" ? B = yield j.blob() : P === "text/event-stream" ? B = j : P === "multipart/form-data" ? B = yield j.formData() : B = yield j.text(), { data: B, error: null, response: j };
      } catch (f) {
        return {
          data: null,
          error: f,
          response: f instanceof dd || f instanceof cd ? f.context : void 0
        };
      } finally {
        c && clearTimeout(c);
      }
    });
  }
}
var yp = class extends Error {
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
}, vp = class {
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
    }).then(async (c) => {
      let h = null, f = null, m = null, g = c.status, v = c.statusText;
      if (c.ok) {
        var k, w;
        if (i.method !== "HEAD") {
          var E;
          const j = await c.text();
          j === "" || (i.headers.get("Accept") === "text/csv" || i.headers.get("Accept") && (!((E = i.headers.get("Accept")) === null || E === void 0) && E.includes("application/vnd.pgrst.plan+text")) ? f = j : f = JSON.parse(j));
        }
        const O = (k = i.headers.get("Prefer")) === null || k === void 0 ? void 0 : k.match(/count=(exact|planned|estimated)/), A = (w = c.headers.get("content-range")) === null || w === void 0 ? void 0 : w.split("/");
        O && A && A.length > 1 && (m = parseInt(A[1])), i.isMaybeSingle && i.method === "GET" && Array.isArray(f) && (f.length > 1 ? (h = {
          code: "PGRST116",
          details: `Results contain ${f.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, f = null, m = null, g = 406, v = "Not Acceptable") : f.length === 1 ? f = f[0] : f = null);
      } else {
        var C;
        const O = await c.text();
        try {
          h = JSON.parse(O), Array.isArray(h) && c.status === 404 && (f = [], h = null, g = 200, v = "OK");
        } catch {
          c.status === 404 && O === "" ? (g = 204, v = "No Content") : h = { message: O };
        }
        if (h && i.isMaybeSingle && (!(h == null || (C = h.details) === null || C === void 0) && C.includes("0 rows")) && (h = null, g = 200, v = "OK"), h && i.shouldThrowOnError) throw new yp(h);
      }
      return {
        error: h,
        data: f,
        count: m,
        status: g,
        statusText: v
      };
    });
    return this.shouldThrowOnError || (u = u.catch((c) => {
      var h;
      let f = "", m = "", g = "";
      const v = c?.cause;
      if (v) {
        var k, w, E, C;
        const j = (k = v?.message) !== null && k !== void 0 ? k : "", M = (w = v?.code) !== null && w !== void 0 ? w : "";
        f = `${(E = c?.name) !== null && E !== void 0 ? E : "FetchError"}: ${c?.message}`, f += `

Caused by: ${(C = v?.name) !== null && C !== void 0 ? C : "Error"}: ${j}`, M && (f += ` (${M})`), v?.stack && (f += `
${v.stack}`);
      } else {
        var O;
        f = (O = c?.stack) !== null && O !== void 0 ? O : "";
      }
      const A = this.url.toString().length;
      return c?.name === "AbortError" || c?.code === "ABORT_ERR" ? (g = "", m = "Request was aborted (timeout or manual cancellation)", A > this.urlLengthLimit && (m += `. Note: Your request URL is ${A} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (v?.name === "HeadersOverflowError" || v?.code === "UND_ERR_HEADERS_OVERFLOW") && (g = "", m = "HTTP headers exceeded server limits (typically 16KB)", A > this.urlLengthLimit && (m += `. Your request URL is ${A} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
        error: {
          message: `${(h = c?.name) !== null && h !== void 0 ? h : "FetchError"}: ${c?.message}`,
          details: f,
          hint: m,
          code: g
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
}, wp = class extends vp {
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
    const c = u ? `${u}.order` : "order", h = this.url.searchParams.get(c);
    return this.url.searchParams.set(c, `${h ? `${h},` : ""}${s}.${r ? "asc" : "desc"}${i === void 0 ? "" : i ? ".nullsfirst" : ".nullslast"}`), this;
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
    const u = typeof a > "u" ? "offset" : `${a}.offset`, c = typeof a > "u" ? "limit" : `${a}.limit`;
    return this.url.searchParams.set(u, `${s}`), this.url.searchParams.set(c, `${r - s + 1}`), this;
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
  explain({ analyze: s = !1, verbose: r = !1, settings: i = !1, buffers: a = !1, wal: u = !1, format: c = "text" } = {}) {
    var h;
    const f = [
      s ? "analyze" : null,
      r ? "verbose" : null,
      i ? "settings" : null,
      a ? "buffers" : null,
      u ? "wal" : null
    ].filter(Boolean).join("|"), m = (h = this.headers.get("Accept")) !== null && h !== void 0 ? h : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${c}; for="${m}"; options=${f};`), c === "json" ? this : this;
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
const hd = /* @__PURE__ */ new RegExp("[,()]");
var dn = class extends wp {
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
    const i = Array.from(new Set(r)).map((a) => typeof a == "string" && hd.test(a) ? `"${a}"` : `${a}`).join(",");
    return this.url.searchParams.append(s, `in.(${i})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(s, r) {
    const i = Array.from(new Set(r)).map((a) => typeof a == "string" && hd.test(a) ? `"${a}"` : `${a}`).join(",");
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
    const c = i === void 0 ? "" : `(${i})`;
    return this.url.searchParams.append(s, `${u}fts${c}.${r}`), this;
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
}, _p = class {
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
    let c = !1;
    const h = (s ?? "*").split("").map((g) => /\s/.test(g) && !c ? "" : (g === '"' && (c = !c), g)).join(""), { url: f, headers: m } = this.cloneRequestState();
    return f.searchParams.set("select", h), a && m.append("Prefer", `count=${a}`), new dn({
      method: u,
      url: f,
      headers: m,
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
    const u = "POST", { url: c, headers: h } = this.cloneRequestState();
    if (r && h.append("Prefer", `count=${r}`), i || h.append("Prefer", "missing=default"), Array.isArray(s)) {
      const f = s.reduce((m, g) => m.concat(Object.keys(g)), []);
      if (f.length > 0) {
        const m = [...new Set(f)].map((g) => `"${g}"`);
        c.searchParams.set("columns", m.join(","));
      }
    }
    return new dn({
      method: u,
      url: c,
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
    var c;
    const h = "POST", { url: f, headers: m } = this.cloneRequestState();
    if (m.append("Prefer", `resolution=${i ? "ignore" : "merge"}-duplicates`), r !== void 0 && f.searchParams.set("on_conflict", r), a && m.append("Prefer", `count=${a}`), u || m.append("Prefer", "missing=default"), Array.isArray(s)) {
      const g = s.reduce((v, k) => v.concat(Object.keys(k)), []);
      if (g.length > 0) {
        const v = [...new Set(g)].map((k) => `"${k}"`);
        f.searchParams.set("columns", v.join(","));
      }
    }
    return new dn({
      method: h,
      url: f,
      headers: m,
      schema: this.schema,
      body: s,
      fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch,
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
    const a = "PATCH", { url: u, headers: c } = this.cloneRequestState();
    return r && c.append("Prefer", `count=${r}`), new dn({
      method: a,
      url: u,
      headers: c,
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
    return s && u.append("Prefer", `count=${s}`), new dn({
      method: i,
      url: a,
      headers: u,
      schema: this.schema,
      fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
function li(s) {
  "@babel/helpers - typeof";
  return li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, li(s);
}
function Sp(s, r) {
  if (li(s) != "object" || !s) return s;
  var i = s[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(s, r);
    if (li(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(s);
}
function kp(s) {
  var r = Sp(s, "string");
  return li(r) == "symbol" ? r : r + "";
}
function Ep(s, r, i) {
  return (r = kp(r)) in s ? Object.defineProperty(s, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[r] = i, s;
}
function fd(s, r) {
  var i = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(s);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(s, u).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function Cs(s) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? fd(Object(i), !0).forEach(function(a) {
      Ep(s, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : fd(Object(i)).forEach(function(a) {
      Object.defineProperty(s, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return s;
}
var bp = class zd {
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
  constructor(r, { headers: i = {}, schema: a, fetch: u, timeout: c, urlLengthLimit: h = 8e3 } = {}) {
    this.url = r, this.headers = new Headers(i), this.schemaName = a, this.urlLengthLimit = h;
    const f = u ?? globalThis.fetch;
    c !== void 0 && c > 0 ? this.fetch = (m, g) => {
      const v = new AbortController(), k = setTimeout(() => v.abort(), c), w = g?.signal;
      if (w) {
        if (w.aborted)
          return clearTimeout(k), f(m, g);
        const E = () => {
          clearTimeout(k), v.abort();
        };
        return w.addEventListener("abort", E, { once: !0 }), f(m, Cs(Cs({}, g), {}, { signal: v.signal })).finally(() => {
          clearTimeout(k), w.removeEventListener("abort", E);
        });
      }
      return f(m, Cs(Cs({}, g), {}, { signal: v.signal })).finally(() => clearTimeout(k));
    } : this.fetch = f;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(r) {
    if (!r || typeof r != "string" || r.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new _p(new URL(`${this.url}/${r}`), {
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
    return new zd(this.url, {
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
  rpc(r, i = {}, { head: a = !1, get: u = !1, count: c } = {}) {
    var h;
    let f;
    const m = new URL(`${this.url}/rpc/${r}`);
    let g;
    const v = (E) => E !== null && typeof E == "object" && (!Array.isArray(E) || E.some(v)), k = a && Object.values(i).some(v);
    k ? (f = "POST", g = i) : a || u ? (f = a ? "HEAD" : "GET", Object.entries(i).filter(([E, C]) => C !== void 0).map(([E, C]) => [E, Array.isArray(C) ? `{${C.join(",")}}` : `${C}`]).forEach(([E, C]) => {
      m.searchParams.append(E, C);
    })) : (f = "POST", g = i);
    const w = new Headers(this.headers);
    return k ? w.set("Prefer", c ? `count=${c},return=minimal` : "return=minimal") : c && w.set("Prefer", `count=${c}`), new dn({
      method: f,
      url: m,
      headers: w,
      schema: this.schemaName,
      body: g,
      fetch: (h = this.fetch) !== null && h !== void 0 ? h : fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
class xp {
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
        const u = a.node, c = parseInt(u.replace(/^v/, "").split(".")[0]);
        return c >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${c} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${c} detected without native WebSocket support.`,
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
const Tp = "2.98.0", Cp = `realtime-js/${Tp}`, Rp = "1.0.0", Bd = "2.0.0", pd = Bd, Ja = 1e4, Op = 1e3, Ap = 100;
var fr;
(function(s) {
  s[s.connecting = 0] = "connecting", s[s.open = 1] = "open", s[s.closing = 2] = "closing", s[s.closed = 3] = "closed";
})(fr || (fr = {}));
var De;
(function(s) {
  s.closed = "closed", s.errored = "errored", s.joined = "joined", s.joining = "joining", s.leaving = "leaving";
})(De || (De = {}));
var At;
(function(s) {
  s.close = "phx_close", s.error = "phx_error", s.join = "phx_join", s.reply = "phx_reply", s.leave = "phx_leave", s.access_token = "access_token";
})(At || (At = {}));
var Qa;
(function(s) {
  s.websocket = "websocket";
})(Qa || (Qa = {}));
var Pr;
(function(s) {
  s.Connecting = "connecting", s.Open = "open", s.Closing = "closing", s.Closed = "closed";
})(Pr || (Pr = {}));
class Pp {
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
    var u, c;
    const h = r.topic, f = (u = r.ref) !== null && u !== void 0 ? u : "", m = (c = r.join_ref) !== null && c !== void 0 ? c : "", g = r.payload.event, v = this.allowedMetadataKeys ? this._pick(r.payload, this.allowedMetadataKeys) : {}, k = Object.keys(v).length === 0 ? "" : JSON.stringify(v);
    if (m.length > 255)
      throw new Error(`joinRef length ${m.length} exceeds maximum of 255`);
    if (f.length > 255)
      throw new Error(`ref length ${f.length} exceeds maximum of 255`);
    if (h.length > 255)
      throw new Error(`topic length ${h.length} exceeds maximum of 255`);
    if (g.length > 255)
      throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);
    if (k.length > 255)
      throw new Error(`metadata length ${k.length} exceeds maximum of 255`);
    const w = this.USER_BROADCAST_PUSH_META_LENGTH + m.length + f.length + h.length + g.length + k.length, E = new ArrayBuffer(this.HEADER_LENGTH + w);
    let C = new DataView(E), O = 0;
    C.setUint8(O++, this.KINDS.userBroadcastPush), C.setUint8(O++, m.length), C.setUint8(O++, f.length), C.setUint8(O++, h.length), C.setUint8(O++, g.length), C.setUint8(O++, k.length), C.setUint8(O++, i), Array.from(m, (j) => C.setUint8(O++, j.charCodeAt(0))), Array.from(f, (j) => C.setUint8(O++, j.charCodeAt(0))), Array.from(h, (j) => C.setUint8(O++, j.charCodeAt(0))), Array.from(g, (j) => C.setUint8(O++, j.charCodeAt(0))), Array.from(k, (j) => C.setUint8(O++, j.charCodeAt(0)));
    var A = new Uint8Array(E.byteLength + a.byteLength);
    return A.set(new Uint8Array(E), 0), A.set(new Uint8Array(a), E.byteLength), A.buffer;
  }
  decode(r, i) {
    if (this._isArrayBuffer(r)) {
      let a = this._binaryDecode(r);
      return i(a);
    }
    if (typeof r == "string") {
      const a = JSON.parse(r), [u, c, h, f, m] = a;
      return i({ join_ref: u, ref: c, topic: h, event: f, payload: m });
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
    const u = i.getUint8(1), c = i.getUint8(2), h = i.getUint8(3), f = i.getUint8(4);
    let m = this.HEADER_LENGTH + 4;
    const g = a.decode(r.slice(m, m + u));
    m = m + u;
    const v = a.decode(r.slice(m, m + c));
    m = m + c;
    const k = a.decode(r.slice(m, m + h));
    m = m + h;
    const w = r.slice(m, r.byteLength), E = f === this.JSON_ENCODING ? JSON.parse(a.decode(w)) : w, C = {
      type: this.BROADCAST_EVENT,
      event: v,
      payload: E
    };
    return h > 0 && (C.meta = JSON.parse(k)), { join_ref: null, ref: null, topic: g, event: this.BROADCAST_EVENT, payload: C };
  }
  _isArrayBuffer(r) {
    var i;
    return r instanceof ArrayBuffer || ((i = r?.constructor) === null || i === void 0 ? void 0 : i.name) === "ArrayBuffer";
  }
  _pick(r, i) {
    return !r || typeof r != "object" ? {} : Object.fromEntries(Object.entries(r).filter(([a]) => i.includes(a)));
  }
}
class Fd {
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
var we;
(function(s) {
  s.abstime = "abstime", s.bool = "bool", s.date = "date", s.daterange = "daterange", s.float4 = "float4", s.float8 = "float8", s.int2 = "int2", s.int4 = "int4", s.int4range = "int4range", s.int8 = "int8", s.int8range = "int8range", s.json = "json", s.jsonb = "jsonb", s.money = "money", s.numeric = "numeric", s.oid = "oid", s.reltime = "reltime", s.text = "text", s.time = "time", s.timestamp = "timestamp", s.timestamptz = "timestamptz", s.timetz = "timetz", s.tsrange = "tsrange", s.tstzrange = "tstzrange";
})(we || (we = {}));
const md = (s, r, i = {}) => {
  var a;
  const u = (a = i.skipTypes) !== null && a !== void 0 ? a : [];
  return r ? Object.keys(r).reduce((c, h) => (c[h] = jp(h, s, r, u), c), {}) : {};
}, jp = (s, r, i, a) => {
  const u = r.find((f) => f.name === s), c = u?.type, h = i[s];
  return c && !a.includes(c) ? Md(c, h) : Ya(h);
}, Md = (s, r) => {
  if (s.charAt(0) === "_") {
    const i = s.slice(1, s.length);
    return $p(r, i);
  }
  switch (s) {
    case we.bool:
      return Ip(r);
    case we.float4:
    case we.float8:
    case we.int2:
    case we.int4:
    case we.int8:
    case we.numeric:
    case we.oid:
      return Np(r);
    case we.json:
    case we.jsonb:
      return Lp(r);
    case we.timestamp:
      return Up(r);
    // Format to be consistent with PostgREST
    case we.abstime:
    // To allow users to cast it based on Timezone
    case we.date:
    // To allow users to cast it based on Timezone
    case we.daterange:
    case we.int4range:
    case we.int8range:
    case we.money:
    case we.reltime:
    // To allow users to cast it based on Timezone
    case we.text:
    case we.time:
    // To allow users to cast it based on Timezone
    case we.timestamptz:
    // To allow users to cast it based on Timezone
    case we.timetz:
    // To allow users to cast it based on Timezone
    case we.tsrange:
    case we.tstzrange:
      return Ya(r);
    default:
      return Ya(r);
  }
}, Ya = (s) => s, Ip = (s) => {
  switch (s) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return s;
  }
}, Np = (s) => {
  if (typeof s == "string") {
    const r = parseFloat(s);
    if (!Number.isNaN(r))
      return r;
  }
  return s;
}, Lp = (s) => {
  if (typeof s == "string")
    try {
      return JSON.parse(s);
    } catch {
      return s;
    }
  return s;
}, $p = (s, r) => {
  if (typeof s != "string")
    return s;
  const i = s.length - 1, a = s[i];
  if (s[0] === "{" && a === "}") {
    let c;
    const h = s.slice(1, i);
    try {
      c = JSON.parse("[" + h + "]");
    } catch {
      c = h ? h.split(",") : [];
    }
    return c.map((f) => Md(r, f));
  }
  return s;
}, Up = (s) => typeof s == "string" ? s.replace(" ", "T") : s, qd = (s) => {
  const r = new URL(s);
  return r.protocol = r.protocol.replace(/^ws/i, "http"), r.pathname = r.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), r.pathname === "" || r.pathname === "/" ? r.pathname = "/api/broadcast" : r.pathname = r.pathname + "/api/broadcast", r.href;
};
class Ba {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(r, i, a = {}, u = Ja) {
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
var gd;
(function(s) {
  s.SYNC = "sync", s.JOIN = "join", s.LEAVE = "leave";
})(gd || (gd = {}));
class oi {
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
      const { onJoin: c, onLeave: h, onSync: f } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = oi.syncState(this.state, u, c, h), this.pendingDiffs.forEach((m) => {
        this.state = oi.syncDiff(this.state, m, c, h);
      }), this.pendingDiffs = [], f();
    }), this.channel._on(a.diff, {}, (u) => {
      const { onJoin: c, onLeave: h, onSync: f } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(u) : (this.state = oi.syncDiff(this.state, u, c, h), f());
    }), this.onJoin((u, c, h) => {
      this.channel._trigger("presence", {
        event: "join",
        key: u,
        currentPresences: c,
        newPresences: h
      });
    }), this.onLeave((u, c, h) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: u,
        currentPresences: c,
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
    const c = this.cloneDeep(r), h = this.transformState(i), f = {}, m = {};
    return this.map(c, (g, v) => {
      h[g] || (m[g] = v);
    }), this.map(h, (g, v) => {
      const k = c[g];
      if (k) {
        const w = v.map((A) => A.presence_ref), E = k.map((A) => A.presence_ref), C = v.filter((A) => E.indexOf(A.presence_ref) < 0), O = k.filter((A) => w.indexOf(A.presence_ref) < 0);
        C.length > 0 && (f[g] = C), O.length > 0 && (m[g] = O);
      } else
        f[g] = v;
    }), this.syncDiff(c, { joins: f, leaves: m }, a, u);
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
    const { joins: c, leaves: h } = {
      joins: this.transformState(i.joins),
      leaves: this.transformState(i.leaves)
    };
    return a || (a = () => {
    }), u || (u = () => {
    }), this.map(c, (f, m) => {
      var g;
      const v = (g = r[f]) !== null && g !== void 0 ? g : [];
      if (r[f] = this.cloneDeep(m), v.length > 0) {
        const k = r[f].map((E) => E.presence_ref), w = v.filter((E) => k.indexOf(E.presence_ref) < 0);
        r[f].unshift(...w);
      }
      a(f, v, m);
    }), this.map(h, (f, m) => {
      let g = r[f];
      if (!g)
        return;
      const v = m.map((k) => k.presence_ref);
      g = g.filter((k) => v.indexOf(k.presence_ref) < 0), r[f] = g, u(f, g, m), g.length === 0 && delete r[f];
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
      return "metas" in u ? i[a] = u.metas.map((c) => (c.presence_ref = c.phx_ref, delete c.phx_ref, delete c.phx_ref_prev, c)) : i[a] = u, i;
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
var yd;
(function(s) {
  s.ALL = "*", s.INSERT = "INSERT", s.UPDATE = "UPDATE", s.DELETE = "DELETE";
})(yd || (yd = {}));
var ai;
(function(s) {
  s.BROADCAST = "broadcast", s.PRESENCE = "presence", s.POSTGRES_CHANGES = "postgres_changes", s.SYSTEM = "system";
})(ai || (ai = {}));
var Ht;
(function(s) {
  s.SUBSCRIBED = "SUBSCRIBED", s.TIMED_OUT = "TIMED_OUT", s.CLOSED = "CLOSED", s.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Ht || (Ht = {}));
class pn {
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
    var u, c;
    if (this.topic = r, this.params = i, this.socket = a, this.bindings = {}, this.state = De.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = r.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, i.config), this.timeout = this.socket.timeout, this.joinPush = new Ba(this, At.join, this.params, this.timeout), this.rejoinTimer = new Fd(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = De.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((h) => h.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = De.closed, this.socket._remove(this);
    }), this._onError((h) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, h), this.state = De.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = De.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (h) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, h), this.state = De.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(At.reply, {}, (h, f) => {
      this._trigger(this._replyEventName(f), h);
    }), this.presence = new oi(this), this.broadcastEndpointURL = qd(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((c = (u = this.params.config) === null || u === void 0 ? void 0 : u.broadcast) === null || c === void 0) && c.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(r, i = this.timeout) {
    var a, u, c;
    if (this.socket.isConnected() || this.socket.connect(), this.state == De.closed) {
      const { config: { broadcast: h, presence: f, private: m } } = this.params, g = (u = (a = this.bindings.postgres_changes) === null || a === void 0 ? void 0 : a.map((E) => E.filter)) !== null && u !== void 0 ? u : [], v = !!this.bindings[ai.PRESENCE] && this.bindings[ai.PRESENCE].length > 0 || ((c = this.params.config.presence) === null || c === void 0 ? void 0 : c.enabled) === !0, k = {}, w = {
        broadcast: h,
        presence: Object.assign(Object.assign({}, f), { enabled: v }),
        postgres_changes: g,
        private: m
      };
      this.socket.accessTokenValue && (k.access_token = this.socket.accessTokenValue), this._onError((E) => r?.(Ht.CHANNEL_ERROR, E)), this._onClose(() => r?.(Ht.CLOSED)), this.updateJoinPayload(Object.assign({ config: w }, k)), this.joinedOnce = !0, this._rejoin(i), this.joinPush.receive("ok", async ({ postgres_changes: E }) => {
        var C;
        if (this.socket._isManualToken() || this.socket.setAuth(), E === void 0) {
          r?.(Ht.SUBSCRIBED);
          return;
        } else {
          const O = this.bindings.postgres_changes, A = (C = O?.length) !== null && C !== void 0 ? C : 0, j = [];
          for (let M = 0; M < A; M++) {
            const P = O[M], { filter: { event: B, schema: Z, table: U, filter: ie } } = P, ue = E && E[M];
            if (ue && ue.event === B && pn.isFilterValueEqual(ue.schema, Z) && pn.isFilterValueEqual(ue.table, U) && pn.isFilterValueEqual(ue.filter, ie))
              j.push(Object.assign(Object.assign({}, P), { id: ue.id }));
            else {
              this.unsubscribe(), this.state = De.errored, r?.(Ht.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = j, r && r(Ht.SUBSCRIBED);
          return;
        }
      }).receive("error", (E) => {
        this.state = De.errored, r?.(Ht.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(E).join(", ") || "error")));
      }).receive("timeout", () => {
        r?.(Ht.TIMED_OUT);
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
    return this.state === De.joined && r === ai.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(async () => await this.subscribe())), this._on(r, i, a);
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
    const c = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    this.socket.accessTokenValue && (c.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const h = {
      method: "POST",
      headers: c,
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
    }, f = await this._fetchWithTimeout(this.broadcastEndpointURL, h, (u = a.timeout) !== null && u !== void 0 ? u : this.timeout);
    if (f.status === 202)
      return { success: !0 };
    let m = f.statusText;
    try {
      const g = await f.json();
      m = g.error || g.message || m;
    } catch {
    }
    return Promise.reject(new Error(m));
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
      const { event: c, payload: h } = r, f = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      this.socket.accessTokenValue && (f.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const m = {
        method: "POST",
        headers: f,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: c,
              payload: h,
              private: this.private
            }
          ]
        })
      };
      try {
        const g = await this._fetchWithTimeout(this.broadcastEndpointURL, m, (a = i.timeout) !== null && a !== void 0 ? a : this.timeout);
        return await ((u = g.body) === null || u === void 0 ? void 0 : u.cancel()), g.ok ? "ok" : "error";
      } catch (g) {
        return g.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((c) => {
        var h, f, m;
        const g = this._push(r.type, r, i.timeout || this.timeout);
        r.type === "broadcast" && !(!((m = (f = (h = this.params) === null || h === void 0 ? void 0 : h.config) === null || f === void 0 ? void 0 : f.broadcast) === null || m === void 0) && m.ack) && c("ok"), g.receive("ok", () => c("ok")), g.receive("error", () => c("error")), g.receive("timeout", () => c("timed out"));
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
    this.state = De.leaving;
    const i = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(At.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let a = null;
    return new Promise((u) => {
      a = new Ba(this, At.leave, {}, r), a.receive("ok", () => {
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
    this.pushBuffer.forEach((r) => r.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = De.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(r, i, a) {
    const u = new AbortController(), c = setTimeout(() => u.abort(), a), h = await this.socket.fetch(r, Object.assign(Object.assign({}, i), { signal: u.signal }));
    return clearTimeout(c), h;
  }
  /** @internal */
  _push(r, i, a = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${r}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let u = new Ba(this, r, i, a);
    return this._canPush() ? u.send() : this._addToPushBuffer(u), u;
  }
  /** @internal */
  _addToPushBuffer(r) {
    if (r.startTimeout(), this.pushBuffer.push(r), this.pushBuffer.length > Ap) {
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
    var u, c;
    const h = r.toLocaleLowerCase(), { close: f, error: m, leave: g, join: v } = At;
    if (a && [f, m, g, v].indexOf(h) >= 0 && a !== this._joinRef())
      return;
    let w = this._onMessage(h, i, a);
    if (i && !w)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(h) ? (u = this.bindings.postgres_changes) === null || u === void 0 || u.filter((E) => {
      var C, O, A;
      return ((C = E.filter) === null || C === void 0 ? void 0 : C.event) === "*" || ((A = (O = E.filter) === null || O === void 0 ? void 0 : O.event) === null || A === void 0 ? void 0 : A.toLocaleLowerCase()) === h;
    }).map((E) => E.callback(w, a)) : (c = this.bindings[h]) === null || c === void 0 || c.filter((E) => {
      var C, O, A, j, M, P;
      if (["broadcast", "presence", "postgres_changes"].includes(h))
        if ("id" in E) {
          const B = E.id, Z = (C = E.filter) === null || C === void 0 ? void 0 : C.event;
          return B && ((O = i.ids) === null || O === void 0 ? void 0 : O.includes(B)) && (Z === "*" || Z?.toLocaleLowerCase() === ((A = i.data) === null || A === void 0 ? void 0 : A.type.toLocaleLowerCase()));
        } else {
          const B = (M = (j = E?.filter) === null || j === void 0 ? void 0 : j.event) === null || M === void 0 ? void 0 : M.toLocaleLowerCase();
          return B === "*" || B === ((P = i?.event) === null || P === void 0 ? void 0 : P.toLocaleLowerCase());
        }
      else
        return E.type.toLocaleLowerCase() === h;
    }).map((E) => {
      if (typeof w == "object" && "ids" in w) {
        const C = w.data, { schema: O, table: A, commit_timestamp: j, type: M, errors: P } = C;
        w = Object.assign(Object.assign({}, {
          schema: O,
          table: A,
          commit_timestamp: j,
          eventType: M,
          new: {},
          old: {},
          errors: P
        }), this._getPayloadRecords(C));
      }
      E.callback(w, a);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === De.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === De.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === De.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === De.leaving;
  }
  /** @internal */
  _replyEventName(r) {
    return `chan_reply_${r}`;
  }
  /** @internal */
  _on(r, i, a) {
    const u = r.toLocaleLowerCase(), c = {
      type: u,
      filter: i,
      callback: a
    };
    return this.bindings[u] ? this.bindings[u].push(c) : this.bindings[u] = [c], this;
  }
  /** @internal */
  _off(r, i) {
    const a = r.toLocaleLowerCase();
    return this.bindings[a] && (this.bindings[a] = this.bindings[a].filter((u) => {
      var c;
      return !(((c = u.type) === null || c === void 0 ? void 0 : c.toLocaleLowerCase()) === a && pn.isEqual(u.filter, i));
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
    this._on(At.close, {}, r);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(r) {
    this._on(At.error, {}, (i) => r(i));
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
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = De.joining, this.joinPush.resend(r));
  }
  /** @internal */
  _getPayloadRecords(r) {
    const i = {
      new: {},
      old: {}
    };
    return (r.type === "INSERT" || r.type === "UPDATE") && (i.new = md(r.columns, r.record)), (r.type === "UPDATE" || r.type === "DELETE") && (i.old = md(r.columns, r.old_record)), i;
  }
}
const Fa = () => {
}, Rs = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Dp = [1e3, 2e3, 5e3, 1e4], zp = 1e4, Bp = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Fp {
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
    if (this.accessTokenValue = null, this.apiKey = null, this._manuallySetToken = !1, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Ja, this.transport = null, this.heartbeatIntervalMs = Rs.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Fa, this.ref = 0, this.reconnectTimer = null, this.vsn = pd, this.logger = Fa, this.conn = null, this.sendBuffer = [], this.serializer = new Pp(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._heartbeatSentAt = null, this._resolveFetch = (u) => u ? (...c) => u(...c) : (...c) => fetch(...c), !(!((a = i?.params) === null || a === void 0) && a.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = i.params.apikey, this.endPoint = `${r}/${Qa.websocket}`, this.httpEndpoint = qd(r), this._initializeOptions(i), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(i?.fetch);
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
          this.conn = xp.createWebSocket(this.endpointURL());
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
      case fr.connecting:
        return Pr.Connecting;
      case fr.open:
        return Pr.Open;
      case fr.closing:
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
    const a = `realtime:${r}`, u = this.getChannels().find((c) => c.topic === a);
    if (u)
      return u;
    {
      const c = new pn(`realtime:${r}`, i, this);
      return this.channels.push(c), c;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(r) {
    const { topic: i, event: a, payload: u, ref: c } = r, h = () => {
      this.encode(r, (f) => {
        var m;
        (m = this.conn) === null || m === void 0 || m.send(f);
      });
    };
    this.log("push", `${i} ${a} (${c})`, u), this.isConnected() ? h() : this.sendBuffer.push(h);
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
      this._wasManualDisconnect = !1, (r = this.conn) === null || r === void 0 || r.close(Op, "heartbeat timeout"), setTimeout(() => {
        var i;
        this.isConnected() || (i = this.reconnectTimer) === null || i === void 0 || i.scheduleTimeout();
      }, Rs.HEARTBEAT_TIMEOUT_FALLBACK);
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
        const g = this._heartbeatSentAt ? Date.now() - this._heartbeatSentAt : void 0;
        try {
          this.heartbeatCallback(i.payload.status === "ok" ? "ok" : "error", g);
        } catch (v) {
          this.log("error", "error in heartbeat callback", v);
        }
        this._heartbeatSentAt = null, this.pendingHeartbeatRef = null;
      }
      const { topic: a, event: u, payload: c, ref: h } = i, f = h ? `(${h})` : "", m = c.status || "";
      this.log("receive", `${m} ${a} ${u} ${f}`.trim(), c), this.channels.filter((g) => g._isMember(a)).forEach((g) => g._trigger(u, c, h)), this._triggerStateCallbacks("message", i);
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
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (r) => this._onConnError(r), this.conn.onmessage = (r) => this._onConnMessage(r), this.conn.onclose = (r) => this._onConnClose(r), this.conn.readyState === fr.open && this._onConnOpen());
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === fr.open || this.conn.readyState === fr.connecting)
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
    this.channels.forEach((r) => r._trigger(At.error));
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
      const a = new Blob([Bp], { type: "application/javascript" });
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
      const c = {
        access_token: i,
        version: Cp
      };
      i && u.updateJoinPayload(c), u.joinedOnce && u._isJoined() && u._push(At.access_token, {
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
    this.reconnectTimer = new Fd(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Rs.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(r) {
    var i, a, u, c, h, f, m, g, v, k, w, E;
    switch (this.transport = (i = r?.transport) !== null && i !== void 0 ? i : null, this.timeout = (a = r?.timeout) !== null && a !== void 0 ? a : Ja, this.heartbeatIntervalMs = (u = r?.heartbeatIntervalMs) !== null && u !== void 0 ? u : Rs.HEARTBEAT_INTERVAL, this.worker = (c = r?.worker) !== null && c !== void 0 ? c : !1, this.accessToken = (h = r?.accessToken) !== null && h !== void 0 ? h : null, this.heartbeatCallback = (f = r?.heartbeatCallback) !== null && f !== void 0 ? f : Fa, this.vsn = (m = r?.vsn) !== null && m !== void 0 ? m : pd, r?.params && (this.params = r.params), r?.logger && (this.logger = r.logger), (r?.logLevel || r?.log_level) && (this.logLevel = r.logLevel || r.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (g = r?.reconnectAfterMs) !== null && g !== void 0 ? g : ((C) => Dp[C - 1] || zp), this.vsn) {
      case Rp:
        this.encode = (v = r?.encode) !== null && v !== void 0 ? v : ((C, O) => O(JSON.stringify(C))), this.decode = (k = r?.decode) !== null && k !== void 0 ? k : ((C, O) => O(JSON.parse(C)));
        break;
      case Bd:
        this.encode = (w = r?.encode) !== null && w !== void 0 ? w : this.serializer.encode.bind(this.serializer), this.decode = (E = r?.decode) !== null && E !== void 0 ? E : this.serializer.decode.bind(this.serializer);
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
var ui = class extends Error {
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
function Mp(s, r, i) {
  const a = new URL(r, s);
  if (i)
    for (const [u, c] of Object.entries(i))
      c !== void 0 && a.searchParams.set(u, c);
  return a.toString();
}
async function qp(s) {
  return !s || s.type === "none" ? {} : s.type === "bearer" ? { Authorization: `Bearer ${s.token}` } : s.type === "header" ? { [s.name]: s.value } : s.type === "custom" ? await s.getHeaders() : {};
}
function Wp(s) {
  const r = s.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: i,
      path: a,
      query: u,
      body: c,
      headers: h
    }) {
      const f = Mp(s.baseUrl, a, u), m = await qp(s.auth), g = await r(f, {
        method: i,
        headers: {
          ...c ? { "Content-Type": "application/json" } : {},
          ...m,
          ...h
        },
        body: c ? JSON.stringify(c) : void 0
      }), v = await g.text(), k = (g.headers.get("content-type") || "").includes("application/json"), w = k && v ? JSON.parse(v) : v;
      if (!g.ok) {
        const E = k ? w : void 0, C = E?.error;
        throw new ui(
          C?.message ?? `Request failed with status ${g.status}`,
          {
            status: g.status,
            icebergType: C?.type,
            icebergCode: C?.code,
            details: E
          }
        );
      }
      return { status: g.status, headers: g.headers, data: w };
    }
  };
}
function Os(s) {
  return s.join("");
}
var Vp = class {
  constructor(s, r = "") {
    this.client = s, this.prefix = r;
  }
  async listNamespaces(s) {
    const r = s ? { parent: Os(s.namespace) } : void 0;
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
      path: `${this.prefix}/namespaces/${Os(s.namespace)}`
    });
  }
  async loadNamespaceMetadata(s) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${Os(s.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(s) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Os(s.namespace)}`
      }), !0;
    } catch (r) {
      if (r instanceof ui && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createNamespaceIfNotExists(s, r) {
    try {
      return await this.createNamespace(s, r);
    } catch (i) {
      if (i instanceof ui && i.status === 409)
        return;
      throw i;
    }
  }
};
function on(s) {
  return s.join("");
}
var Hp = class {
  constructor(s, r = "", i) {
    this.client = s, this.prefix = r, this.accessDelegation = i;
  }
  async listTables(s) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${on(s.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(s, r) {
    const i = {};
    return this.accessDelegation && (i["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${on(s.namespace)}/tables`,
      body: r,
      headers: i
    })).data.metadata;
  }
  async updateTable(s, r) {
    const i = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${on(s.namespace)}/tables/${s.name}`,
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
      path: `${this.prefix}/namespaces/${on(s.namespace)}/tables/${s.name}`,
      query: { purgeRequested: String(r?.purge ?? !1) }
    });
  }
  async loadTable(s) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${on(s.namespace)}/tables/${s.name}`,
      headers: r
    })).data.metadata;
  }
  async tableExists(s) {
    const r = {};
    this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${on(s.namespace)}/tables/${s.name}`,
        headers: r
      }), !0;
    } catch (i) {
      if (i instanceof ui && i.status === 404)
        return !1;
      throw i;
    }
  }
  async createTableIfNotExists(s, r) {
    try {
      return await this.createTable(s, r);
    } catch (i) {
      if (i instanceof ui && i.status === 409)
        return await this.loadTable({ namespace: s.namespace, name: r.name });
      throw i;
    }
  }
}, Kp = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(s) {
    let r = "v1";
    s.catalogName && (r += `/${s.catalogName}`);
    const i = s.baseUrl.endsWith("/") ? s.baseUrl : `${s.baseUrl}/`;
    this.client = Wp({
      baseUrl: i,
      auth: s.auth,
      fetchImpl: s.fetch
    }), this.accessDelegation = s.accessDelegation?.join(","), this.namespaceOps = new Vp(this.client, r), this.tableOps = new Hp(this.client, r, this.accessDelegation);
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
}, Ds = class extends Error {
  constructor(s, r = "storage", i, a) {
    super(s), this.__isStorageError = !0, this.namespace = r, this.name = r === "vectors" ? "StorageVectorsError" : "StorageError", this.status = i, this.statusCode = a;
  }
};
function zs(s) {
  return typeof s == "object" && s !== null && "__isStorageError" in s;
}
var As = class extends Ds {
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
}, Wd = class extends Ds {
  constructor(s, r, i = "storage") {
    super(s, i), this.name = i === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = r;
  }
};
const Gp = (s) => s ? (...r) => s(...r) : (...r) => fetch(...r), Jp = (s) => {
  if (typeof s != "object" || s === null) return !1;
  const r = Object.getPrototypeOf(s);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, Xa = (s) => {
  if (Array.isArray(s)) return s.map((i) => Xa(i));
  if (typeof s == "function" || s !== Object(s)) return s;
  const r = {};
  return Object.entries(s).forEach(([i, a]) => {
    const u = i.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace(/[-_]/g, ""));
    r[u] = Xa(a);
  }), r;
}, Qp = (s) => !s || typeof s != "string" || s.length === 0 || s.length > 100 || s.trim() !== s || s.includes("/") || s.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(s);
function ci(s) {
  "@babel/helpers - typeof";
  return ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ci(s);
}
function Yp(s, r) {
  if (ci(s) != "object" || !s) return s;
  var i = s[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(s, r);
    if (ci(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(s);
}
function Xp(s) {
  var r = Yp(s, "string");
  return ci(r) == "symbol" ? r : r + "";
}
function Zp(s, r, i) {
  return (r = Xp(r)) in s ? Object.defineProperty(s, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[r] = i, s;
}
function vd(s, r) {
  var i = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(s);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(s, u).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function re(s) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? vd(Object(i), !0).forEach(function(a) {
      Zp(s, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : vd(Object(i)).forEach(function(a) {
      Object.defineProperty(s, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return s;
}
const wd = (s) => {
  var r;
  return s.msg || s.message || s.error_description || (typeof s.error == "string" ? s.error : (r = s.error) === null || r === void 0 ? void 0 : r.message) || JSON.stringify(s);
}, em = async (s, r, i, a) => {
  if (s && typeof s == "object" && "status" in s && "ok" in s && typeof s.status == "number" && !i?.noResolveJson) {
    const u = s, c = u.status || 500;
    if (typeof u.json == "function") u.json().then((h) => {
      const f = h?.statusCode || h?.code || c + "";
      r(new As(wd(h), c, f, a));
    }).catch(() => {
      if (a === "vectors") {
        const h = c + "";
        r(new As(u.statusText || `HTTP ${c} error`, c, h, a));
      } else {
        const h = c + "";
        r(new As(u.statusText || `HTTP ${c} error`, c, h, a));
      }
    });
    else {
      const h = c + "";
      r(new As(u.statusText || `HTTP ${c} error`, c, h, a));
    }
  } else r(new Wd(wd(s), s, a));
}, tm = (s, r, i, a) => {
  const u = {
    method: s,
    headers: r?.headers || {}
  };
  return s === "GET" || s === "HEAD" || !a ? re(re({}, u), i) : (Jp(a) ? (u.headers = re({ "Content-Type": "application/json" }, r?.headers), u.body = JSON.stringify(a)) : u.body = a, r?.duplex && (u.duplex = r.duplex), re(re({}, u), i));
};
async function ni(s, r, i, a, u, c, h) {
  return new Promise((f, m) => {
    s(i, tm(r, a, u, c)).then((g) => {
      if (!g.ok) throw g;
      if (a?.noResolveJson) return g;
      if (h === "vectors") {
        const v = g.headers.get("content-type");
        if (g.headers.get("content-length") === "0" || g.status === 204) return {};
        if (!v || !v.includes("application/json")) return {};
      }
      return g.json();
    }).then((g) => f(g)).catch((g) => em(g, m, a, h));
  });
}
function Vd(s = "storage") {
  return {
    get: async (r, i, a, u) => ni(r, "GET", i, a, u, void 0, s),
    post: async (r, i, a, u, c) => ni(r, "POST", i, u, c, a, s),
    put: async (r, i, a, u, c) => ni(r, "PUT", i, u, c, a, s),
    head: async (r, i, a, u) => ni(r, "HEAD", i, re(re({}, a), {}, { noResolveJson: !0 }), u, void 0, s),
    remove: async (r, i, a, u, c) => ni(r, "DELETE", i, u, c, a, s)
  };
}
const rm = Vd("storage"), { get: di, post: Ot, put: Za, head: nm, remove: ol } = rm, ht = Vd("vectors");
var gn = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(s, r = {}, i, a = "storage") {
    this.shouldThrowOnError = !1, this.url = s, this.headers = r, this.fetch = Gp(i), this.namespace = a;
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
    return this.headers = re(re({}, this.headers), {}, { [s]: r }), this;
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
      if (zs(i)) return {
        data: null,
        error: i
      };
      throw i;
    }
  }
}, im = class {
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
      if (zs(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
};
let Hd;
Hd = Symbol.toStringTag;
var sm = class {
  constructor(s, r) {
    this.downloadFn = s, this.shouldThrowOnError = r, this[Hd] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new im(this.downloadFn, this.shouldThrowOnError);
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
      if (zs(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
};
const om = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, _d = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var am = class extends gn {
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
      let c;
      const h = re(re({}, _d), a);
      let f = re(re({}, u.headers), s === "POST" && { "x-upsert": String(h.upsert) });
      const m = h.metadata;
      typeof Blob < "u" && i instanceof Blob ? (c = new FormData(), c.append("cacheControl", h.cacheControl), m && c.append("metadata", u.encodeMetadata(m)), c.append("", i)) : typeof FormData < "u" && i instanceof FormData ? (c = i, c.has("cacheControl") || c.append("cacheControl", h.cacheControl), m && !c.has("metadata") && c.append("metadata", u.encodeMetadata(m))) : (c = i, f["cache-control"] = `max-age=${h.cacheControl}`, f["content-type"] = h.contentType, m && (f["x-metadata"] = u.toBase64(u.encodeMetadata(m))), (typeof ReadableStream < "u" && c instanceof ReadableStream || c && typeof c == "object" && "pipe" in c && typeof c.pipe == "function") && !h.duplex && (h.duplex = "half")), a?.headers && (f = re(re({}, f), a.headers));
      const g = u._removeEmptyFolders(r), v = u._getFinalPath(g), k = await (s == "PUT" ? Za : Ot)(u.fetch, `${u.url}/object/${v}`, c, re({ headers: f }, h?.duplex ? { duplex: h.duplex } : {}));
      return {
        path: g,
        id: k.Id,
        fullPath: k.Key
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
    const c = u._removeEmptyFolders(s), h = u._getFinalPath(c), f = new URL(u.url + `/object/upload/sign/${h}`);
    return f.searchParams.set("token", r), u.handleOperation(async () => {
      let m;
      const g = re({ upsert: _d.upsert }, a), v = re(re({}, u.headers), { "x-upsert": String(g.upsert) });
      return typeof Blob < "u" && i instanceof Blob ? (m = new FormData(), m.append("cacheControl", g.cacheControl), m.append("", i)) : typeof FormData < "u" && i instanceof FormData ? (m = i, m.append("cacheControl", g.cacheControl)) : (m = i, v["cache-control"] = `max-age=${g.cacheControl}`, v["content-type"] = g.contentType), {
        path: c,
        fullPath: (await Za(u.fetch, f.toString(), m, { headers: v })).Key
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
      const u = re({}, i.headers);
      r?.upsert && (u["x-upsert"] = "true");
      const c = await Ot(i.fetch, `${i.url}/object/upload/sign/${a}`, {}, { headers: u }), h = new URL(i.url + c.url), f = h.searchParams.get("token");
      if (!f) throw new Ds("No token returned by API");
      return {
        signedUrl: h.toString(),
        path: s,
        token: f
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
    return a.handleOperation(async () => await Ot(a.fetch, `${a.url}/object/move`, {
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
    return a.handleOperation(async () => ({ path: (await Ot(a.fetch, `${a.url}/object/copy`, {
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
      let u = a._getFinalPath(s), c = await Ot(a.fetch, `${a.url}/object/sign/${u}`, re({ expiresIn: r }, i?.transform ? { transform: i.transform } : {}), { headers: a.headers });
      const h = i?.download ? `&download=${i.download === !0 ? "" : i.download}` : "";
      return { signedUrl: encodeURI(`${a.url}${c.signedURL}${h}`) };
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
      const u = await Ot(a.fetch, `${a.url}/object/sign/${a.bucketId}`, {
        expiresIn: r,
        paths: s
      }, { headers: a.headers }), c = i?.download ? `&download=${i.download === !0 ? "" : i.download}` : "";
      return u.map((h) => re(re({}, h), {}, { signedUrl: h.signedURL ? encodeURI(`${a.url}${h.signedURL}${c}`) : null }));
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
    const a = typeof r?.transform < "u" ? "render/image/authenticated" : "object", u = this.transformOptsToQueryString(r?.transform || {}), c = u ? `?${u}` : "", h = this._getFinalPath(s), f = () => di(this.fetch, `${this.url}/${a}/${h}${c}`, {
      headers: this.headers,
      noResolveJson: !0
    }, i);
    return new sm(f, this.shouldThrowOnError);
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
    return r.handleOperation(async () => Xa(await di(r.fetch, `${r.url}/object/info/${i}`, { headers: r.headers })));
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
      return await nm(r.fetch, `${r.url}/object/${i}`, { headers: r.headers }), {
        data: !0,
        error: null
      };
    } catch (a) {
      if (r.shouldThrowOnError) throw a;
      if (zs(a) && a instanceof Wd) {
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
    const c = typeof r?.transform < "u" ? "render/image" : "object", h = this.transformOptsToQueryString(r?.transform || {});
    h !== "" && a.push(h);
    let f = a.join("&");
    return f !== "" && (f = `?${f}`), { data: { publicUrl: encodeURI(`${this.url}/${c}/public/${i}${f}`) } };
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
    return r.handleOperation(async () => await ol(r.fetch, `${r.url}/object/${r.bucketId}`, { prefixes: s }, { headers: r.headers }));
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
      const u = re(re(re({}, om), r), {}, { prefix: s || "" });
      return await Ot(a.fetch, `${a.url}/object/list/${a.bucketId}`, u, { headers: a.headers }, i);
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
      const a = re({}, s);
      return await Ot(i.fetch, `${i.url}/object/list-v2/${i.bucketId}`, a, { headers: i.headers }, r);
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
const lm = "2.98.0", mi = { "X-Client-Info": `storage-js/${lm}` };
var um = class extends gn {
  constructor(s, r = {}, i, a) {
    const u = new URL(s);
    a?.useNewHostname && /supabase\.(co|in|red)$/.test(u.hostname) && !u.hostname.includes("storage.supabase.") && (u.hostname = u.hostname.replace("supabase.", "storage.supabase."));
    const c = u.href.replace(/\/$/, ""), h = re(re({}, mi), r);
    super(c, h, i, "storage");
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
      return await di(r.fetch, `${r.url}/bucket${i}`, { headers: r.headers });
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
    return r.handleOperation(async () => await di(r.fetch, `${r.url}/bucket/${s}`, { headers: r.headers }));
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
    return i.handleOperation(async () => await Ot(i.fetch, `${i.url}/bucket`, {
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
    return i.handleOperation(async () => await Za(i.fetch, `${i.url}/bucket/${s}`, {
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
    return r.handleOperation(async () => await Ot(r.fetch, `${r.url}/bucket/${s}/empty`, {}, { headers: r.headers }));
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
    return r.handleOperation(async () => await ol(r.fetch, `${r.url}/bucket/${s}`, {}, { headers: r.headers }));
  }
  listBucketOptionsToQueryString(s) {
    const r = {};
    return s && ("limit" in s && (r.limit = String(s.limit)), "offset" in s && (r.offset = String(s.offset)), s.search && (r.search = s.search), s.sortColumn && (r.sortColumn = s.sortColumn), s.sortOrder && (r.sortOrder = s.sortOrder)), Object.keys(r).length > 0 ? "?" + new URLSearchParams(r).toString() : "";
  }
}, cm = class extends gn {
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
    const a = s.replace(/\/$/, ""), u = re(re({}, mi), r);
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
    return r.handleOperation(async () => await Ot(r.fetch, `${r.url}/bucket`, { name: s }, { headers: r.headers }));
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
      return await di(r.fetch, u, { headers: r.headers });
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
    return r.handleOperation(async () => await ol(r.fetch, `${r.url}/bucket/${s}`, {}, { headers: r.headers }));
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
    if (!Qp(s)) throw new Ds("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const i = new Kp({
      baseUrl: this.url,
      catalogName: s,
      auth: {
        type: "custom",
        getHeaders: async () => r.headers
      },
      fetch: this.fetch
    }), a = this.shouldThrowOnError;
    return new Proxy(i, { get(u, c) {
      const h = u[c];
      return typeof h != "function" ? h : async (...f) => {
        try {
          return {
            data: await h.apply(u, f),
            error: null
          };
        } catch (m) {
          if (a) throw m;
          return {
            data: null,
            error: m
          };
        }
      };
    } });
  }
}, dm = class extends gn {
  /** Creates a new VectorIndexApi instance */
  constructor(s, r = {}, i) {
    const a = s.replace(/\/$/, ""), u = re(re({}, mi), {}, { "Content-Type": "application/json" }, r);
    super(a, u, i, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(s) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/CreateIndex`, s, { headers: r.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(s, r) {
    var i = this;
    return i.handleOperation(async () => await ht.post(i.fetch, `${i.url}/GetIndex`, {
      vectorBucketName: s,
      indexName: r
    }, { headers: i.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(s) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/ListIndexes`, s, { headers: r.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(s, r) {
    var i = this;
    return i.handleOperation(async () => await ht.post(i.fetch, `${i.url}/DeleteIndex`, {
      vectorBucketName: s,
      indexName: r
    }, { headers: i.headers }) || {});
  }
}, hm = class extends gn {
  /** Creates a new VectorDataApi instance */
  constructor(s, r = {}, i) {
    const a = s.replace(/\/$/, ""), u = re(re({}, mi), {}, { "Content-Type": "application/json" }, r);
    super(a, u, i, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(s) {
    var r = this;
    if (s.vectors.length < 1 || s.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/PutVectors`, s, { headers: r.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(s) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/GetVectors`, s, { headers: r.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(s) {
    var r = this;
    if (s.segmentCount !== void 0) {
      if (s.segmentCount < 1 || s.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (s.segmentIndex !== void 0 && (s.segmentIndex < 0 || s.segmentIndex >= s.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${s.segmentCount - 1}`);
    }
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/ListVectors`, s, { headers: r.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(s) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/QueryVectors`, s, { headers: r.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(s) {
    var r = this;
    if (s.keys.length < 1 || s.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/DeleteVectors`, s, { headers: r.headers }) || {});
  }
}, fm = class extends gn {
  /** Creates a new VectorBucketApi instance */
  constructor(s, r = {}, i) {
    const a = s.replace(/\/$/, ""), u = re(re({}, mi), {}, { "Content-Type": "application/json" }, r);
    super(a, u, i, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(s) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/CreateVectorBucket`, { vectorBucketName: s }, { headers: r.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(s) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/GetVectorBucket`, { vectorBucketName: s }, { headers: r.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(s = {}) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/ListVectorBuckets`, s, { headers: r.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(s) {
    var r = this;
    return r.handleOperation(async () => await ht.post(r.fetch, `${r.url}/DeleteVectorBucket`, { vectorBucketName: s }, { headers: r.headers }) || {});
  }
}, pm = class extends fm {
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
    return new mm(this.url, this.headers, s, this.fetch);
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
}, mm = class extends dm {
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
    return r().call(i, re(re({}, s), {}, { vectorBucketName: i.vectorBucketName }));
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
    return r().call(i, re(re({}, s), {}, { vectorBucketName: i.vectorBucketName }));
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
    return new gm(this.url, this.headers, this.vectorBucketName, s, this.fetch);
  }
}, gm = class extends hm {
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
    return r().call(i, re(re({}, s), {}, {
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
    return r().call(i, re(re({}, s), {}, {
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
    return r().call(i, re(re({}, s), {}, {
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
    return r().call(i, re(re({}, s), {}, {
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
    return r().call(i, re(re({}, s), {}, {
      vectorBucketName: i.vectorBucketName,
      indexName: i.indexName
    }));
  }
}, ym = class extends um {
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
    return new am(this.url, this.headers, s, this.fetch);
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
    return new pm(this.url + "/vector", {
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
    return new cm(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const Kd = "2.98.0", hn = 30 * 1e3, el = 3, Ma = el * hn, vm = "http://localhost:9999", wm = "supabase.auth.token", _m = { "X-Client-Info": `gotrue-js/${Kd}` }, tl = "X-Supabase-Api-Version", Gd = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Sm = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, km = 600 * 1e3;
class hi extends Error {
  constructor(r, i, a) {
    super(r), this.__isAuthError = !0, this.name = "AuthError", this.status = i, this.code = a;
  }
}
function Y(s) {
  return typeof s == "object" && s !== null && "__isAuthError" in s;
}
class Em extends hi {
  constructor(r, i, a) {
    super(r, i, a), this.name = "AuthApiError", this.status = i, this.code = a;
  }
}
function bm(s) {
  return Y(s) && s.name === "AuthApiError";
}
class jr extends hi {
  constructor(r, i) {
    super(r), this.name = "AuthUnknownError", this.originalError = i;
  }
}
class Kt extends hi {
  constructor(r, i, a, u) {
    super(r, a, u), this.name = i, this.status = a;
  }
}
class dt extends Kt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function qa(s) {
  return Y(s) && s.name === "AuthSessionMissingError";
}
class an extends Kt {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class Ps extends Kt {
  constructor(r) {
    super(r, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class js extends Kt {
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
function xm(s) {
  return Y(s) && s.name === "AuthImplicitGrantRedirectError";
}
class Sd extends Kt {
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
class Tm extends Kt {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class rl extends Kt {
  constructor(r, i) {
    super(r, "AuthRetryableFetchError", i, void 0);
  }
}
function Wa(s) {
  return Y(s) && s.name === "AuthRetryableFetchError";
}
class kd extends Kt {
  constructor(r, i, a) {
    super(r, "AuthWeakPasswordError", i, "weak_password"), this.reasons = a;
  }
}
class nl extends Kt {
  constructor(r) {
    super(r, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Ns = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Ed = ` 	
\r=`.split(""), Cm = (() => {
  const s = new Array(128);
  for (let r = 0; r < s.length; r += 1)
    s[r] = -1;
  for (let r = 0; r < Ed.length; r += 1)
    s[Ed[r].charCodeAt(0)] = -2;
  for (let r = 0; r < Ns.length; r += 1)
    s[Ns[r].charCodeAt(0)] = r;
  return s;
})();
function bd(s, r, i) {
  if (s !== null)
    for (r.queue = r.queue << 8 | s, r.queuedBits += 8; r.queuedBits >= 6; ) {
      const a = r.queue >> r.queuedBits - 6 & 63;
      i(Ns[a]), r.queuedBits -= 6;
    }
  else if (r.queuedBits > 0)
    for (r.queue = r.queue << 6 - r.queuedBits, r.queuedBits = 6; r.queuedBits >= 6; ) {
      const a = r.queue >> r.queuedBits - 6 & 63;
      i(Ns[a]), r.queuedBits -= 6;
    }
}
function Jd(s, r, i) {
  const a = Cm[s];
  if (a > -1)
    for (r.queue = r.queue << 6 | a, r.queuedBits += 6; r.queuedBits >= 8; )
      i(r.queue >> r.queuedBits - 8 & 255), r.queuedBits -= 8;
  else {
    if (a === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`);
  }
}
function xd(s) {
  const r = [], i = (h) => {
    r.push(String.fromCodePoint(h));
  }, a = {
    utf8seq: 0,
    codepoint: 0
  }, u = { queue: 0, queuedBits: 0 }, c = (h) => {
    Am(h, a, i);
  };
  for (let h = 0; h < s.length; h += 1)
    Jd(s.charCodeAt(h), u, c);
  return r.join("");
}
function Rm(s, r) {
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
function Om(s, r) {
  for (let i = 0; i < s.length; i += 1) {
    let a = s.charCodeAt(i);
    if (a > 55295 && a <= 56319) {
      const u = (a - 55296) * 1024 & 65535;
      a = (s.charCodeAt(i + 1) - 56320 & 65535 | u) + 65536, i += 1;
    }
    Rm(a, r);
  }
}
function Am(s, r, i) {
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
function mn(s) {
  const r = [], i = { queue: 0, queuedBits: 0 }, a = (u) => {
    r.push(u);
  };
  for (let u = 0; u < s.length; u += 1)
    Jd(s.charCodeAt(u), i, a);
  return new Uint8Array(r);
}
function Pm(s) {
  const r = [];
  return Om(s, (i) => r.push(i)), new Uint8Array(r);
}
function Ir(s) {
  const r = [], i = { queue: 0, queuedBits: 0 }, a = (u) => {
    r.push(u);
  };
  return s.forEach((u) => bd(u, i, a)), bd(null, i, a), r.join("");
}
function jm(s) {
  return Math.round(Date.now() / 1e3) + s;
}
function Im() {
  return Symbol("auth-callback");
}
const Ve = () => typeof window < "u" && typeof document < "u", Rr = {
  tested: !1,
  writable: !1
}, Qd = () => {
  if (!Ve())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Rr.tested)
    return Rr.writable;
  const s = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(s, s), globalThis.localStorage.removeItem(s), Rr.tested = !0, Rr.writable = !0;
  } catch {
    Rr.tested = !0, Rr.writable = !1;
  }
  return Rr.writable;
};
function Nm(s) {
  const r = {}, i = new URL(s);
  if (i.hash && i.hash[0] === "#")
    try {
      new URLSearchParams(i.hash.substring(1)).forEach((u, c) => {
        r[c] = u;
      });
    } catch {
    }
  return i.searchParams.forEach((a, u) => {
    r[u] = a;
  }), r;
}
const Yd = (s) => s ? (...r) => s(...r) : (...r) => fetch(...r), Lm = (s) => typeof s == "object" && s !== null && "status" in s && "ok" in s && "json" in s && typeof s.json == "function", fn = async (s, r, i) => {
  await s.setItem(r, JSON.stringify(i));
}, Or = async (s, r) => {
  const i = await s.getItem(r);
  if (!i)
    return null;
  try {
    return JSON.parse(i);
  } catch {
    return i;
  }
}, We = async (s, r) => {
  await s.removeItem(r);
};
class Bs {
  constructor() {
    this.promise = new Bs.promiseConstructor((r, i) => {
      this.resolve = r, this.reject = i;
    });
  }
}
Bs.promiseConstructor = Promise;
function Is(s) {
  const r = s.split(".");
  if (r.length !== 3)
    throw new nl("Invalid JWT structure");
  for (let a = 0; a < r.length; a++)
    if (!Sm.test(r[a]))
      throw new nl("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(xd(r[0])),
    payload: JSON.parse(xd(r[1])),
    signature: mn(r[2]),
    raw: {
      header: r[0],
      payload: r[1]
    }
  };
}
async function $m(s) {
  return await new Promise((r) => {
    setTimeout(() => r(null), s);
  });
}
function Um(s, r) {
  return new Promise((a, u) => {
    (async () => {
      for (let c = 0; c < 1 / 0; c++)
        try {
          const h = await s(c);
          if (!r(c, null, h)) {
            a(h);
            return;
          }
        } catch (h) {
          if (!r(c, h)) {
            u(h);
            return;
          }
        }
    })();
  });
}
function Dm(s) {
  return ("0" + s.toString(16)).substr(-2);
}
function zm() {
  const r = new Uint32Array(56);
  if (typeof crypto > "u") {
    const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", a = i.length;
    let u = "";
    for (let c = 0; c < 56; c++)
      u += i.charAt(Math.floor(Math.random() * a));
    return u;
  }
  return crypto.getRandomValues(r), Array.from(r, Dm).join("");
}
async function Bm(s) {
  const i = new TextEncoder().encode(s), a = await crypto.subtle.digest("SHA-256", i), u = new Uint8Array(a);
  return Array.from(u).map((c) => String.fromCharCode(c)).join("");
}
async function Fm(s) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), s;
  const i = await Bm(s);
  return btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function ln(s, r, i = !1) {
  const a = zm();
  let u = a;
  i && (u += "/PASSWORD_RECOVERY"), await fn(s, `${r}-code-verifier`, u);
  const c = await Fm(a);
  return [c, a === c ? "plain" : "s256"];
}
const Mm = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function qm(s) {
  const r = s.headers.get(tl);
  if (!r || !r.match(Mm))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${r}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Wm(s) {
  if (!s)
    throw new Error("Missing exp claim");
  const r = Math.floor(Date.now() / 1e3);
  if (s <= r)
    throw new Error("JWT has expired");
}
function Vm(s) {
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
const Hm = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function un(s) {
  if (!Hm.test(s))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function Va() {
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
function Km(s, r) {
  return new Proxy(s, {
    get: (i, a, u) => {
      if (a === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof a == "symbol") {
        const c = a.toString();
        if (c === "Symbol(Symbol.toPrimitive)" || c === "Symbol(Symbol.toStringTag)" || c === "Symbol(util.inspect.custom)" || c === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(i, a, u);
      }
      return !r.value && typeof a == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), r.value = !0), Reflect.get(i, a, u);
    }
  });
}
function Td(s) {
  return JSON.parse(JSON.stringify(s));
}
const Ar = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), Gm = [502, 503, 504];
async function Cd(s) {
  var r;
  if (!Lm(s))
    throw new rl(Ar(s), 0);
  if (Gm.includes(s.status))
    throw new rl(Ar(s), s.status);
  let i;
  try {
    i = await s.json();
  } catch (c) {
    throw new jr(Ar(c), c);
  }
  let a;
  const u = qm(s);
  if (u && u.getTime() >= Gd["2024-01-01"].timestamp && typeof i == "object" && i && typeof i.code == "string" ? a = i.code : typeof i == "object" && i && typeof i.error_code == "string" && (a = i.error_code), a) {
    if (a === "weak_password")
      throw new kd(Ar(i), s.status, ((r = i.weak_password) === null || r === void 0 ? void 0 : r.reasons) || []);
    if (a === "session_not_found")
      throw new dt();
  } else if (typeof i == "object" && i && typeof i.weak_password == "object" && i.weak_password && Array.isArray(i.weak_password.reasons) && i.weak_password.reasons.length && i.weak_password.reasons.reduce((c, h) => c && typeof h == "string", !0))
    throw new kd(Ar(i), s.status, i.weak_password.reasons);
  throw new Em(Ar(i), s.status || 500, a);
}
const Jm = (s, r, i, a) => {
  const u = { method: s, headers: r?.headers || {} };
  return s === "GET" ? u : (u.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, r?.headers), u.body = JSON.stringify(a), Object.assign(Object.assign({}, u), i));
};
async function ne(s, r, i, a) {
  var u;
  const c = Object.assign({}, a?.headers);
  c[tl] || (c[tl] = Gd["2024-01-01"].name), a?.jwt && (c.Authorization = `Bearer ${a.jwt}`);
  const h = (u = a?.query) !== null && u !== void 0 ? u : {};
  a?.redirectTo && (h.redirect_to = a.redirectTo);
  const f = Object.keys(h).length ? "?" + new URLSearchParams(h).toString() : "", m = await Qm(s, r, i + f, {
    headers: c,
    noResolveJson: a?.noResolveJson
  }, {}, a?.body);
  return a?.xform ? a?.xform(m) : { data: Object.assign({}, m), error: null };
}
async function Qm(s, r, i, a, u, c) {
  const h = Jm(r, a, u, c);
  let f;
  try {
    f = await s(i, Object.assign({}, h));
  } catch (m) {
    throw console.error(m), new rl(Ar(m), 0);
  }
  if (f.ok || await Cd(f), a?.noResolveJson)
    return f;
  try {
    return await f.json();
  } catch (m) {
    await Cd(m);
  }
}
function Rt(s) {
  var r;
  let i = null;
  Zm(s) && (i = Object.assign({}, s), s.expires_at || (i.expires_at = jm(s.expires_in)));
  const a = (r = s.user) !== null && r !== void 0 ? r : s;
  return { data: { session: i, user: a }, error: null };
}
function Rd(s) {
  const r = Rt(s);
  return !r.error && s.weak_password && typeof s.weak_password == "object" && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.message && typeof s.weak_password.message == "string" && s.weak_password.reasons.reduce((i, a) => i && typeof a == "string", !0) && (r.data.weak_password = s.weak_password), r;
}
function pr(s) {
  var r;
  return { data: { user: (r = s.user) !== null && r !== void 0 ? r : s }, error: null };
}
function Ym(s) {
  return { data: s, error: null };
}
function Xm(s) {
  const { action_link: r, email_otp: i, hashed_token: a, redirect_to: u, verification_type: c } = s, h = Us(s, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), f = {
    action_link: r,
    email_otp: i,
    hashed_token: a,
    redirect_to: u,
    verification_type: c
  }, m = Object.assign({}, h);
  return {
    data: {
      properties: f,
      user: m
    },
    error: null
  };
}
function Od(s) {
  return s;
}
function Zm(s) {
  return s.access_token && s.refresh_token && s.expires_in;
}
const Ha = ["global", "local", "others"];
class eg {
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
    this.url = r, this.headers = i, this.fetch = Yd(a), this.mfa = {
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
  async signOut(r, i = Ha[0]) {
    if (Ha.indexOf(i) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Ha.join(", ")}`);
    try {
      return await ne(this.fetch, "POST", `${this.url}/logout?scope=${i}`, {
        headers: this.headers,
        jwt: r,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (a) {
      if (Y(a))
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
      return await ne(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: r, data: i.data },
        headers: this.headers,
        redirectTo: i.redirectTo,
        xform: pr
      });
    } catch (a) {
      if (Y(a))
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
      const { options: i } = r, a = Us(r, ["options"]), u = Object.assign(Object.assign({}, a), i);
      return "newEmail" in a && (u.new_email = a?.newEmail, delete u.newEmail), await ne(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: u,
        headers: this.headers,
        xform: Xm,
        redirectTo: i?.redirectTo
      });
    } catch (i) {
      if (Y(i))
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
      return await ne(this.fetch, "POST", `${this.url}/admin/users`, {
        body: r,
        headers: this.headers,
        xform: pr
      });
    } catch (i) {
      if (Y(i))
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
    var i, a, u, c, h, f, m;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 }, v = await ne(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (a = (i = r?.page) === null || i === void 0 ? void 0 : i.toString()) !== null && a !== void 0 ? a : "",
          per_page: (c = (u = r?.perPage) === null || u === void 0 ? void 0 : u.toString()) !== null && c !== void 0 ? c : ""
        },
        xform: Od
      });
      if (v.error)
        throw v.error;
      const k = await v.json(), w = (h = v.headers.get("x-total-count")) !== null && h !== void 0 ? h : 0, E = (m = (f = v.headers.get("link")) === null || f === void 0 ? void 0 : f.split(",")) !== null && m !== void 0 ? m : [];
      return E.length > 0 && (E.forEach((C) => {
        const O = parseInt(C.split(";")[0].split("=")[1].substring(0, 1)), A = JSON.parse(C.split(";")[1].split("=")[1]);
        g[`${A}Page`] = O;
      }), g.total = parseInt(w)), { data: Object.assign(Object.assign({}, k), g), error: null };
    } catch (g) {
      if (Y(g))
        return { data: { users: [] }, error: g };
      throw g;
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
    un(r);
    try {
      return await ne(this.fetch, "GET", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        xform: pr
      });
    } catch (i) {
      if (Y(i))
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
    un(r);
    try {
      return await ne(this.fetch, "PUT", `${this.url}/admin/users/${r}`, {
        body: i,
        headers: this.headers,
        xform: pr
      });
    } catch (a) {
      if (Y(a))
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
    un(r);
    try {
      return await ne(this.fetch, "DELETE", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        body: {
          should_soft_delete: i
        },
        xform: pr
      });
    } catch (a) {
      if (Y(a))
        return { data: { user: null }, error: a };
      throw a;
    }
  }
  async _listFactors(r) {
    un(r.userId);
    try {
      const { data: i, error: a } = await ne(this.fetch, "GET", `${this.url}/admin/users/${r.userId}/factors`, {
        headers: this.headers,
        xform: (u) => ({ data: { factors: u }, error: null })
      });
      return { data: i, error: a };
    } catch (i) {
      if (Y(i))
        return { data: null, error: i };
      throw i;
    }
  }
  async _deleteFactor(r) {
    un(r.userId), un(r.id);
    try {
      return { data: await ne(this.fetch, "DELETE", `${this.url}/admin/users/${r.userId}/factors/${r.id}`, {
        headers: this.headers
      }), error: null };
    } catch (i) {
      if (Y(i))
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
    var i, a, u, c, h, f, m;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 }, v = await ne(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (a = (i = r?.page) === null || i === void 0 ? void 0 : i.toString()) !== null && a !== void 0 ? a : "",
          per_page: (c = (u = r?.perPage) === null || u === void 0 ? void 0 : u.toString()) !== null && c !== void 0 ? c : ""
        },
        xform: Od
      });
      if (v.error)
        throw v.error;
      const k = await v.json(), w = (h = v.headers.get("x-total-count")) !== null && h !== void 0 ? h : 0, E = (m = (f = v.headers.get("link")) === null || f === void 0 ? void 0 : f.split(",")) !== null && m !== void 0 ? m : [];
      return E.length > 0 && (E.forEach((C) => {
        const O = parseInt(C.split(";")[0].split("=")[1].substring(0, 1)), A = JSON.parse(C.split(";")[1].split("=")[1]);
        g[`${A}Page`] = O;
      }), g.total = parseInt(w)), { data: Object.assign(Object.assign({}, k), g), error: null };
    } catch (g) {
      if (Y(g))
        return { data: { clients: [] }, error: g };
      throw g;
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
      return await ne(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: r,
        headers: this.headers,
        xform: (i) => ({ data: i, error: null })
      });
    } catch (i) {
      if (Y(i))
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
      return await ne(this.fetch, "GET", `${this.url}/admin/oauth/clients/${r}`, {
        headers: this.headers,
        xform: (i) => ({ data: i, error: null })
      });
    } catch (i) {
      if (Y(i))
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
      return await ne(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${r}`, {
        body: i,
        headers: this.headers,
        xform: (a) => ({ data: a, error: null })
      });
    } catch (a) {
      if (Y(a))
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
      return await ne(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${r}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (i) {
      if (Y(i))
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
      return await ne(this.fetch, "POST", `${this.url}/admin/oauth/clients/${r}/regenerate_secret`, {
        headers: this.headers,
        xform: (i) => ({ data: i, error: null })
      });
    } catch (i) {
      if (Y(i))
        return { data: null, error: i };
      throw i;
    }
  }
}
function Ad(s = {}) {
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
const Vt = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Qd() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Xd extends Error {
  constructor(r) {
    super(r), this.isAcquireTimeout = !0;
  }
}
class tg extends Xd {
}
async function rg(s, r, i) {
  Vt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", s, r);
  const a = new globalThis.AbortController();
  r > 0 && setTimeout(() => {
    a.abort(), Vt.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", s);
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
        Vt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", s, u.name);
        try {
          return await i();
        } finally {
          Vt.debug && console.log("@supabase/gotrue-js: navigatorLock: released", s, u.name);
        }
      } else {
        if (r === 0)
          throw Vt.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", s), new tg(`Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`);
        if (Vt.debug)
          try {
            const c = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(c, null, "  "));
          } catch (c) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", c);
          }
        return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await i();
      }
    });
  } catch (u) {
    if (u?.name === "AbortError" && r > 0)
      return Vt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", s), console.warn(`@supabase/gotrue-js: Lock "${s}" was not released within ${r}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(() => globalThis.navigator.locks.request(s, {
        mode: "exclusive",
        steal: !0
      }, async (c) => {
        if (c) {
          Vt.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", s, c.name);
          try {
            return await i();
          } finally {
            Vt.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", s, c.name);
          }
        } else
          return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await i();
      }));
    throw u;
  }
}
function ng() {
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
function Zd(s) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(s))
    throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);
  return s.toLowerCase();
}
function ig(s) {
  return parseInt(s, 16);
}
function sg(s) {
  const r = new TextEncoder().encode(s);
  return "0x" + Array.from(r, (a) => a.toString(16).padStart(2, "0")).join("");
}
function og(s) {
  var r;
  const { chainId: i, domain: a, expirationTime: u, issuedAt: c = /* @__PURE__ */ new Date(), nonce: h, notBefore: f, requestId: m, resources: g, scheme: v, uri: k, version: w } = s;
  {
    if (!Number.isInteger(i))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${i}`);
    if (!a)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (h && h.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${h}`);
    if (!k)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (w !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${w}`);
    if (!((r = s.statement) === null || r === void 0) && r.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`);
  }
  const E = Zd(s.address), C = v ? `${v}://${a}` : a, O = s.statement ? `${s.statement}
` : "", A = `${C} wants you to sign in with your Ethereum account:
${E}

${O}`;
  let j = `URI: ${k}
Version: ${w}
Chain ID: ${i}${h ? `
Nonce: ${h}` : ""}
Issued At: ${c.toISOString()}`;
  if (u && (j += `
Expiration Time: ${u.toISOString()}`), f && (j += `
Not Before: ${f.toISOString()}`), m && (j += `
Request ID: ${m}`), g) {
    let M = `
Resources:`;
    for (const P of g) {
      if (!P || typeof P != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${P}`);
      M += `
- ${P}`;
    }
    j += M;
  }
  return `${A}
${j}`;
}
class Ne extends Error {
  constructor({ message: r, code: i, cause: a, name: u }) {
    var c;
    super(r, { cause: a }), this.__isWebAuthnError = !0, this.name = (c = u ?? (a instanceof Error ? a.name : void 0)) !== null && c !== void 0 ? c : "Unknown Error", this.code = i;
  }
}
class Ls extends Ne {
  constructor(r, i) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: i,
      message: r
    }), this.name = "WebAuthnUnknownError", this.originalError = i;
  }
}
function ag({ error: s, options: r }) {
  var i, a, u;
  const { publicKey: c } = r;
  if (!c)
    throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (r.signal instanceof AbortSignal)
      return new Ne({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s
      });
  } else if (s.name === "ConstraintError") {
    if (((i = c.authenticatorSelection) === null || i === void 0 ? void 0 : i.requireResidentKey) === !0)
      return new Ne({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: s
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      r.mediation === "conditional" && ((a = c.authenticatorSelection) === null || a === void 0 ? void 0 : a.userVerification) === "required"
    )
      return new Ne({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: s
      });
    if (((u = c.authenticatorSelection) === null || u === void 0 ? void 0 : u.userVerification) === "required")
      return new Ne({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: s
      });
  } else {
    if (s.name === "InvalidStateError")
      return new Ne({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: s
      });
    if (s.name === "NotAllowedError")
      return new Ne({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s
      });
    if (s.name === "NotSupportedError")
      return c.pubKeyCredParams.filter((f) => f.type === "public-key").length === 0 ? new Ne({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: s
      }) : new Ne({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: s
      });
    if (s.name === "SecurityError") {
      const h = window.location.hostname;
      if (eh(h)) {
        if (c.rp.id !== h)
          return new Ne({
            message: `The RP ID "${c.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s
          });
      } else return new Ne({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: s
      });
    } else if (s.name === "TypeError") {
      if (c.user.id.byteLength < 1 || c.user.id.byteLength > 64)
        return new Ne({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: s
        });
    } else if (s.name === "UnknownError")
      return new Ne({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s
      });
  }
  return new Ne({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s
  });
}
function lg({ error: s, options: r }) {
  const { publicKey: i } = r;
  if (!i)
    throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (r.signal instanceof AbortSignal)
      return new Ne({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s
      });
  } else {
    if (s.name === "NotAllowedError")
      return new Ne({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s
      });
    if (s.name === "SecurityError") {
      const a = window.location.hostname;
      if (eh(a)) {
        if (i.rpId !== a)
          return new Ne({
            message: `The RP ID "${i.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s
          });
      } else return new Ne({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: s
      });
    } else if (s.name === "UnknownError")
      return new Ne({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s
      });
  }
  return new Ne({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s
  });
}
class ug {
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
const cg = new ug();
function dg(s) {
  if (!s)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      s
    );
  const { challenge: r, user: i, excludeCredentials: a } = s, u = Us(
    s,
    ["challenge", "user", "excludeCredentials"]
  ), c = mn(r).buffer, h = Object.assign(Object.assign({}, i), { id: mn(i.id).buffer }), f = Object.assign(Object.assign({}, u), {
    challenge: c,
    user: h
  });
  if (a && a.length > 0) {
    f.excludeCredentials = new Array(a.length);
    for (let m = 0; m < a.length; m++) {
      const g = a[m];
      f.excludeCredentials[m] = Object.assign(Object.assign({}, g), {
        id: mn(g.id).buffer,
        type: g.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: g.transports
      });
    }
  }
  return f;
}
function hg(s) {
  if (!s)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(s);
  const { challenge: r, allowCredentials: i } = s, a = Us(
    s,
    ["challenge", "allowCredentials"]
  ), u = mn(r).buffer, c = Object.assign(Object.assign({}, a), { challenge: u });
  if (i && i.length > 0) {
    c.allowCredentials = new Array(i.length);
    for (let h = 0; h < i.length; h++) {
      const f = i[h];
      c.allowCredentials[h] = Object.assign(Object.assign({}, f), {
        id: mn(f.id).buffer,
        type: f.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: f.transports
      });
    }
  }
  return c;
}
function fg(s) {
  var r;
  if ("toJSON" in s && typeof s.toJSON == "function")
    return s.toJSON();
  const i = s;
  return {
    id: s.id,
    rawId: s.id,
    response: {
      attestationObject: Ir(new Uint8Array(s.response.attestationObject)),
      clientDataJSON: Ir(new Uint8Array(s.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: s.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (r = i.authenticatorAttachment) !== null && r !== void 0 ? r : void 0
  };
}
function pg(s) {
  var r;
  if ("toJSON" in s && typeof s.toJSON == "function")
    return s.toJSON();
  const i = s, a = s.getClientExtensionResults(), u = s.response;
  return {
    id: s.id,
    rawId: s.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: Ir(new Uint8Array(u.authenticatorData)),
      clientDataJSON: Ir(new Uint8Array(u.clientDataJSON)),
      signature: Ir(new Uint8Array(u.signature)),
      userHandle: u.userHandle ? Ir(new Uint8Array(u.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: a,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (r = i.authenticatorAttachment) !== null && r !== void 0 ? r : void 0
  };
}
function eh(s) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    s === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s)
  );
}
function Pd() {
  var s, r;
  return !!(Ve() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((s = navigator?.credentials) === null || s === void 0 ? void 0 : s.create) == "function" && typeof ((r = navigator?.credentials) === null || r === void 0 ? void 0 : r.get) == "function");
}
async function mg(s) {
  try {
    const r = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      s
    );
    return r ? r instanceof PublicKeyCredential ? { data: r, error: null } : {
      data: null,
      error: new Ls("Browser returned unexpected credential type", r)
    } : {
      data: null,
      error: new Ls("Empty credential response", r)
    };
  } catch (r) {
    return {
      data: null,
      error: ag({
        error: r,
        options: s
      })
    };
  }
}
async function gg(s) {
  try {
    const r = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      s
    );
    return r ? r instanceof PublicKeyCredential ? { data: r, error: null } : {
      data: null,
      error: new Ls("Browser returned unexpected credential type", r)
    } : {
      data: null,
      error: new Ls("Empty credential response", r)
    };
  } catch (r) {
    return {
      data: null,
      error: lg({
        error: r,
        options: s
      })
    };
  }
}
const yg = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, vg = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function $s(...s) {
  const r = (u) => u !== null && typeof u == "object" && !Array.isArray(u), i = (u) => u instanceof ArrayBuffer || ArrayBuffer.isView(u), a = {};
  for (const u of s)
    if (u)
      for (const c in u) {
        const h = u[c];
        if (h !== void 0)
          if (Array.isArray(h))
            a[c] = h;
          else if (i(h))
            a[c] = h;
          else if (r(h)) {
            const f = a[c];
            r(f) ? a[c] = $s(f, h) : a[c] = $s(h);
          } else
            a[c] = h;
      }
  return a;
}
function wg(s, r) {
  return $s(yg, s, r || {});
}
function _g(s, r) {
  return $s(vg, s, r || {});
}
class Sg {
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
  async _challenge({ factorId: r, webauthn: i, friendlyName: a, signal: u }, c) {
    var h;
    try {
      const { data: f, error: m } = await this.client.mfa.challenge({
        factorId: r,
        webauthn: i
      });
      if (!f)
        return { data: null, error: m };
      const g = u ?? cg.createNewAbortSignal();
      if (f.webauthn.type === "create") {
        const { user: v } = f.webauthn.credential_options.publicKey;
        if (!v.name) {
          const k = a;
          if (k)
            v.name = `${v.id}:${k}`;
          else {
            const E = (await this.client.getUser()).data.user, C = ((h = E?.user_metadata) === null || h === void 0 ? void 0 : h.name) || E?.email || E?.id || "User";
            v.name = `${v.id}:${C}`;
          }
        }
        v.displayName || (v.displayName = v.name);
      }
      switch (f.webauthn.type) {
        case "create": {
          const v = wg(f.webauthn.credential_options.publicKey, c?.create), { data: k, error: w } = await mg({
            publicKey: v,
            signal: g
          });
          return k ? {
            data: {
              factorId: r,
              challengeId: f.id,
              webauthn: {
                type: f.webauthn.type,
                credential_response: k
              }
            },
            error: null
          } : { data: null, error: w };
        }
        case "request": {
          const v = _g(f.webauthn.credential_options.publicKey, c?.request), { data: k, error: w } = await gg(Object.assign(Object.assign({}, f.webauthn.credential_options), { publicKey: v, signal: g }));
          return k ? {
            data: {
              factorId: r,
              challengeId: f.id,
              webauthn: {
                type: f.webauthn.type,
                credential_response: k
              }
            },
            error: null
          } : { data: null, error: w };
        }
      }
    } catch (f) {
      return Y(f) ? { data: null, error: f } : {
        data: null,
        error: new jr("Unexpected error in challenge", f)
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
  async _authenticate({ factorId: r, webauthn: { rpId: i = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: a = typeof window < "u" ? [window.location.origin] : void 0, signal: u } = {} }, c) {
    if (!i)
      return {
        data: null,
        error: new hi("rpId is required for WebAuthn authentication")
      };
    try {
      if (!Pd())
        return {
          data: null,
          error: new jr("Browser does not support WebAuthn", null)
        };
      const { data: h, error: f } = await this.challenge({
        factorId: r,
        webauthn: { rpId: i, rpOrigins: a },
        signal: u
      }, { request: c });
      if (!h)
        return { data: null, error: f };
      const { webauthn: m } = h;
      return this._verify({
        factorId: r,
        challengeId: h.challengeId,
        webauthn: {
          type: m.type,
          rpId: i,
          rpOrigins: a,
          credential_response: m.credential_response
        }
      });
    } catch (h) {
      return Y(h) ? { data: null, error: h } : {
        data: null,
        error: new jr("Unexpected error in authenticate", h)
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
  async _register({ friendlyName: r, webauthn: { rpId: i = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: a = typeof window < "u" ? [window.location.origin] : void 0, signal: u } = {} }, c) {
    if (!i)
      return {
        data: null,
        error: new hi("rpId is required for WebAuthn registration")
      };
    try {
      if (!Pd())
        return {
          data: null,
          error: new jr("Browser does not support WebAuthn", null)
        };
      const { data: h, error: f } = await this._enroll({
        friendlyName: r
      });
      if (!h)
        return await this.client.mfa.listFactors().then((v) => {
          var k;
          return (k = v.data) === null || k === void 0 ? void 0 : k.all.find((w) => w.factor_type === "webauthn" && w.friendly_name === r && w.status !== "unverified");
        }).then((v) => v ? this.client.mfa.unenroll({ factorId: v?.id }) : void 0), { data: null, error: f };
      const { data: m, error: g } = await this._challenge({
        factorId: h.id,
        friendlyName: h.friendly_name,
        webauthn: { rpId: i, rpOrigins: a },
        signal: u
      }, {
        create: c
      });
      return m ? this._verify({
        factorId: h.id,
        challengeId: m.challengeId,
        webauthn: {
          rpId: i,
          rpOrigins: a,
          type: m.webauthn.type,
          credential_response: m.webauthn.credential_response
        }
      }) : { data: null, error: g };
    } catch (h) {
      return Y(h) ? { data: null, error: h } : {
        data: null,
        error: new jr("Unexpected error in register", h)
      };
    }
  }
}
ng();
const kg = {
  url: vm,
  storageKey: wm,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: _m,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  // 5 seconds
  skipAutoInitialize: !1
};
async function jd(s, r, i) {
  return await i();
}
const cn = {};
class fi {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var r, i;
    return (i = (r = cn[this.storageKey]) === null || r === void 0 ? void 0 : r.jwks) !== null && i !== void 0 ? i : { keys: [] };
  }
  set jwks(r) {
    cn[this.storageKey] = Object.assign(Object.assign({}, cn[this.storageKey]), { jwks: r });
  }
  get jwks_cached_at() {
    var r, i;
    return (i = (r = cn[this.storageKey]) === null || r === void 0 ? void 0 : r.cachedAt) !== null && i !== void 0 ? i : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(r) {
    cn[this.storageKey] = Object.assign(Object.assign({}, cn[this.storageKey]), { cachedAt: r });
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
    const c = Object.assign(Object.assign({}, kg), r);
    if (this.storageKey = c.storageKey, this.instanceID = (i = fi.nextInstanceID[this.storageKey]) !== null && i !== void 0 ? i : 0, fi.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!c.debug, typeof c.debug == "function" && (this.logger = c.debug), this.instanceID > 0 && Ve()) {
      const h = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(h), this.logDebugMessages && console.trace(h);
    }
    if (this.persistSession = c.persistSession, this.autoRefreshToken = c.autoRefreshToken, this.admin = new eg({
      url: c.url,
      headers: c.headers,
      fetch: c.fetch
    }), this.url = c.url, this.headers = c.headers, this.fetch = Yd(c.fetch), this.lock = c.lock || jd, this.detectSessionInUrl = c.detectSessionInUrl, this.flowType = c.flowType, this.hasCustomAuthorizationHeader = c.hasCustomAuthorizationHeader, this.throwOnError = c.throwOnError, this.lockAcquireTimeout = c.lockAcquireTimeout, c.lock ? this.lock = c.lock : this.persistSession && Ve() && (!((a = globalThis?.navigator) === null || a === void 0) && a.locks) ? this.lock = rg : this.lock = jd, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Sg(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.persistSession ? (c.storage ? this.storage = c.storage : Qd() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Ad(this.memoryStorage)), c.userStorage && (this.userStorage = c.userStorage)) : (this.memoryStorage = {}, this.storage = Ad(this.memoryStorage)), Ve() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (h) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", h);
      }
      (u = this.broadcastChannel) === null || u === void 0 || u.addEventListener("message", async (h) => {
        this._debug("received broadcast notification from other tab or client", h);
        try {
          await this._notifyAllSubscribers(h.data.event, h.data.session, !1);
        } catch (f) {
          this._debug("#broadcastChannel", "error", f);
        }
      });
    }
    c.skipAutoInitialize || this.initialize().catch((h) => {
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
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Kd}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
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
      if (Ve() && (i = Nm(window.location.href), this._isImplicitGrantCallback(i) ? a = "implicit" : await this._isPKCECallback(i) && (a = "pkce")), Ve() && this.detectSessionInUrl && a !== "none") {
        const { data: u, error: c } = await this._getSessionFromURL(i, a);
        if (c) {
          if (this._debug("#_initialize()", "error detecting session from URL", c), xm(c)) {
            const m = (r = c.details) === null || r === void 0 ? void 0 : r.code;
            if (m === "identity_already_exists" || m === "identity_not_found" || m === "single_identity_not_deletable")
              return { error: c };
          }
          return { error: c };
        }
        const { session: h, redirectType: f } = u;
        return this._debug("#_initialize()", "detected session in URL", h, "redirect type", f), await this._saveSession(h), setTimeout(async () => {
          f === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", h) : await this._notifyAllSubscribers("SIGNED_IN", h);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (i) {
      return Y(i) ? this._returnResult({ error: i }) : this._returnResult({
        error: new jr("Unexpected error during initialization", i)
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
      const c = await ne(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (a = (i = r?.options) === null || i === void 0 ? void 0 : i.data) !== null && a !== void 0 ? a : {},
          gotrue_meta_security: { captcha_token: (u = r?.options) === null || u === void 0 ? void 0 : u.captchaToken }
        },
        xform: Rt
      }), { data: h, error: f } = c;
      if (f || !h)
        return this._returnResult({ data: { user: null, session: null }, error: f });
      const m = h.session, g = h.user;
      return h.session && (await this._saveSession(h.session), await this._notifyAllSubscribers("SIGNED_IN", m)), this._returnResult({ data: { user: g, session: m }, error: null });
    } catch (c) {
      if (Y(c))
        return this._returnResult({ data: { user: null, session: null }, error: c });
      throw c;
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
      let c;
      if ("email" in r) {
        const { email: v, password: k, options: w } = r;
        let E = null, C = null;
        this.flowType === "pkce" && ([E, C] = await ln(this.storage, this.storageKey)), c = await ne(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: w?.emailRedirectTo,
          body: {
            email: v,
            password: k,
            data: (i = w?.data) !== null && i !== void 0 ? i : {},
            gotrue_meta_security: { captcha_token: w?.captchaToken },
            code_challenge: E,
            code_challenge_method: C
          },
          xform: Rt
        });
      } else if ("phone" in r) {
        const { phone: v, password: k, options: w } = r;
        c = await ne(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: v,
            password: k,
            data: (a = w?.data) !== null && a !== void 0 ? a : {},
            channel: (u = w?.channel) !== null && u !== void 0 ? u : "sms",
            gotrue_meta_security: { captcha_token: w?.captchaToken }
          },
          xform: Rt
        });
      } else
        throw new Ps("You must provide either an email or phone number and a password");
      const { data: h, error: f } = c;
      if (f || !h)
        return await We(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: f });
      const m = h.session, g = h.user;
      return h.session && (await this._saveSession(h.session), await this._notifyAllSubscribers("SIGNED_IN", m)), this._returnResult({ data: { user: g, session: m }, error: null });
    } catch (c) {
      if (await We(this.storage, `${this.storageKey}-code-verifier`), Y(c))
        return this._returnResult({ data: { user: null, session: null }, error: c });
      throw c;
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
        const { email: c, password: h, options: f } = r;
        i = await ne(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: c,
            password: h,
            gotrue_meta_security: { captcha_token: f?.captchaToken }
          },
          xform: Rd
        });
      } else if ("phone" in r) {
        const { phone: c, password: h, options: f } = r;
        i = await ne(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: c,
            password: h,
            gotrue_meta_security: { captcha_token: f?.captchaToken }
          },
          xform: Rd
        });
      } else
        throw new Ps("You must provide either an email or phone number and a password");
      const { data: a, error: u } = i;
      if (u)
        return this._returnResult({ data: { user: null, session: null }, error: u });
      if (!a || !a.session || !a.user) {
        const c = new an();
        return this._returnResult({ data: { user: null, session: null }, error: c });
      }
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", a.session)), this._returnResult({
        data: Object.assign({ user: a.user, session: a.session }, a.weak_password ? { weakPassword: a.weak_password } : null),
        error: u
      });
    } catch (i) {
      if (Y(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(r) {
    var i, a, u, c;
    return await this._handleProviderSignIn(r.provider, {
      redirectTo: (i = r.options) === null || i === void 0 ? void 0 : i.redirectTo,
      scopes: (a = r.options) === null || a === void 0 ? void 0 : a.scopes,
      queryParams: (u = r.options) === null || u === void 0 ? void 0 : u.queryParams,
      skipBrowserRedirect: (c = r.options) === null || c === void 0 ? void 0 : c.skipBrowserRedirect
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
    var i, a, u, c, h, f, m, g, v, k, w;
    let E, C;
    if ("message" in r)
      E = r.message, C = r.signature;
    else {
      const { chain: O, wallet: A, statement: j, options: M } = r;
      let P;
      if (Ve())
        if (typeof A == "object")
          P = A;
        else {
          const _e = window;
          if ("ethereum" in _e && typeof _e.ethereum == "object" && "request" in _e.ethereum && typeof _e.ethereum.request == "function")
            P = _e.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof A != "object" || !M?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        P = A;
      }
      const B = new URL((i = M?.url) !== null && i !== void 0 ? i : window.location.href), Z = await P.request({
        method: "eth_requestAccounts"
      }).then((_e) => _e).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!Z || Z.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const U = Zd(Z[0]);
      let ie = (a = M?.signInWithEthereum) === null || a === void 0 ? void 0 : a.chainId;
      if (!ie) {
        const _e = await P.request({
          method: "eth_chainId"
        });
        ie = ig(_e);
      }
      const ue = {
        domain: B.host,
        address: U,
        statement: j,
        uri: B.href,
        version: "1",
        chainId: ie,
        nonce: (u = M?.signInWithEthereum) === null || u === void 0 ? void 0 : u.nonce,
        issuedAt: (h = (c = M?.signInWithEthereum) === null || c === void 0 ? void 0 : c.issuedAt) !== null && h !== void 0 ? h : /* @__PURE__ */ new Date(),
        expirationTime: (f = M?.signInWithEthereum) === null || f === void 0 ? void 0 : f.expirationTime,
        notBefore: (m = M?.signInWithEthereum) === null || m === void 0 ? void 0 : m.notBefore,
        requestId: (g = M?.signInWithEthereum) === null || g === void 0 ? void 0 : g.requestId,
        resources: (v = M?.signInWithEthereum) === null || v === void 0 ? void 0 : v.resources
      };
      E = og(ue), C = await P.request({
        method: "personal_sign",
        params: [sg(E), U]
      });
    }
    try {
      const { data: O, error: A } = await ne(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: E,
          signature: C
        }, !((k = r.options) === null || k === void 0) && k.captchaToken ? { gotrue_meta_security: { captcha_token: (w = r.options) === null || w === void 0 ? void 0 : w.captchaToken } } : null),
        xform: Rt
      });
      if (A)
        throw A;
      if (!O || !O.session || !O.user) {
        const j = new an();
        return this._returnResult({ data: { user: null, session: null }, error: j });
      }
      return O.session && (await this._saveSession(O.session), await this._notifyAllSubscribers("SIGNED_IN", O.session)), this._returnResult({ data: Object.assign({}, O), error: A });
    } catch (O) {
      if (Y(O))
        return this._returnResult({ data: { user: null, session: null }, error: O });
      throw O;
    }
  }
  async signInWithSolana(r) {
    var i, a, u, c, h, f, m, g, v, k, w, E;
    let C, O;
    if ("message" in r)
      C = r.message, O = r.signature;
    else {
      const { chain: A, wallet: j, statement: M, options: P } = r;
      let B;
      if (Ve())
        if (typeof j == "object")
          B = j;
        else {
          const U = window;
          if ("solana" in U && typeof U.solana == "object" && ("signIn" in U.solana && typeof U.solana.signIn == "function" || "signMessage" in U.solana && typeof U.solana.signMessage == "function"))
            B = U.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof j != "object" || !P?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        B = j;
      }
      const Z = new URL((i = P?.url) !== null && i !== void 0 ? i : window.location.href);
      if ("signIn" in B && B.signIn) {
        const U = await B.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, P?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: Z.host,
          uri: Z.href
        }), M ? { statement: M } : null));
        let ie;
        if (Array.isArray(U) && U[0] && typeof U[0] == "object")
          ie = U[0];
        else if (U && typeof U == "object" && "signedMessage" in U && "signature" in U)
          ie = U;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in ie && "signature" in ie && (typeof ie.signedMessage == "string" || ie.signedMessage instanceof Uint8Array) && ie.signature instanceof Uint8Array)
          C = typeof ie.signedMessage == "string" ? ie.signedMessage : new TextDecoder().decode(ie.signedMessage), O = ie.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in B) || typeof B.signMessage != "function" || !("publicKey" in B) || typeof B != "object" || !B.publicKey || !("toBase58" in B.publicKey) || typeof B.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        C = [
          `${Z.host} wants you to sign in with your Solana account:`,
          B.publicKey.toBase58(),
          ...M ? ["", M, ""] : [""],
          "Version: 1",
          `URI: ${Z.href}`,
          `Issued At: ${(u = (a = P?.signInWithSolana) === null || a === void 0 ? void 0 : a.issuedAt) !== null && u !== void 0 ? u : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((c = P?.signInWithSolana) === null || c === void 0) && c.notBefore ? [`Not Before: ${P.signInWithSolana.notBefore}`] : [],
          ...!((h = P?.signInWithSolana) === null || h === void 0) && h.expirationTime ? [`Expiration Time: ${P.signInWithSolana.expirationTime}`] : [],
          ...!((f = P?.signInWithSolana) === null || f === void 0) && f.chainId ? [`Chain ID: ${P.signInWithSolana.chainId}`] : [],
          ...!((m = P?.signInWithSolana) === null || m === void 0) && m.nonce ? [`Nonce: ${P.signInWithSolana.nonce}`] : [],
          ...!((g = P?.signInWithSolana) === null || g === void 0) && g.requestId ? [`Request ID: ${P.signInWithSolana.requestId}`] : [],
          ...!((k = (v = P?.signInWithSolana) === null || v === void 0 ? void 0 : v.resources) === null || k === void 0) && k.length ? [
            "Resources",
            ...P.signInWithSolana.resources.map((ie) => `- ${ie}`)
          ] : []
        ].join(`
`);
        const U = await B.signMessage(new TextEncoder().encode(C), "utf8");
        if (!U || !(U instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        O = U;
      }
    }
    try {
      const { data: A, error: j } = await ne(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: C, signature: Ir(O) }, !((w = r.options) === null || w === void 0) && w.captchaToken ? { gotrue_meta_security: { captcha_token: (E = r.options) === null || E === void 0 ? void 0 : E.captchaToken } } : null),
        xform: Rt
      });
      if (j)
        throw j;
      if (!A || !A.session || !A.user) {
        const M = new an();
        return this._returnResult({ data: { user: null, session: null }, error: M });
      }
      return A.session && (await this._saveSession(A.session), await this._notifyAllSubscribers("SIGNED_IN", A.session)), this._returnResult({ data: Object.assign({}, A), error: j });
    } catch (A) {
      if (Y(A))
        return this._returnResult({ data: { user: null, session: null }, error: A });
      throw A;
    }
  }
  async _exchangeCodeForSession(r) {
    const i = await Or(this.storage, `${this.storageKey}-code-verifier`), [a, u] = (i ?? "").split("/");
    try {
      if (!a && this.flowType === "pkce")
        throw new Tm();
      const { data: c, error: h } = await ne(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: r,
          code_verifier: a
        },
        xform: Rt
      });
      if (await We(this.storage, `${this.storageKey}-code-verifier`), h)
        throw h;
      if (!c || !c.session || !c.user) {
        const f = new an();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: f
        });
      }
      return c.session && (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", c.session)), this._returnResult({ data: Object.assign(Object.assign({}, c), { redirectType: u ?? null }), error: h });
    } catch (c) {
      if (await We(this.storage, `${this.storageKey}-code-verifier`), Y(c))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: c
        });
      throw c;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(r) {
    try {
      const { options: i, provider: a, token: u, access_token: c, nonce: h } = r, f = await ne(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: a,
          id_token: u,
          access_token: c,
          nonce: h,
          gotrue_meta_security: { captcha_token: i?.captchaToken }
        },
        xform: Rt
      }), { data: m, error: g } = f;
      if (g)
        return this._returnResult({ data: { user: null, session: null }, error: g });
      if (!m || !m.session || !m.user) {
        const v = new an();
        return this._returnResult({ data: { user: null, session: null }, error: v });
      }
      return m.session && (await this._saveSession(m.session), await this._notifyAllSubscribers("SIGNED_IN", m.session)), this._returnResult({ data: m, error: g });
    } catch (i) {
      if (Y(i))
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
    var i, a, u, c, h;
    try {
      if ("email" in r) {
        const { email: f, options: m } = r;
        let g = null, v = null;
        this.flowType === "pkce" && ([g, v] = await ln(this.storage, this.storageKey));
        const { error: k } = await ne(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: f,
            data: (i = m?.data) !== null && i !== void 0 ? i : {},
            create_user: (a = m?.shouldCreateUser) !== null && a !== void 0 ? a : !0,
            gotrue_meta_security: { captcha_token: m?.captchaToken },
            code_challenge: g,
            code_challenge_method: v
          },
          redirectTo: m?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: k });
      }
      if ("phone" in r) {
        const { phone: f, options: m } = r, { data: g, error: v } = await ne(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: f,
            data: (u = m?.data) !== null && u !== void 0 ? u : {},
            create_user: (c = m?.shouldCreateUser) !== null && c !== void 0 ? c : !0,
            gotrue_meta_security: { captcha_token: m?.captchaToken },
            channel: (h = m?.channel) !== null && h !== void 0 ? h : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: g?.message_id },
          error: v
        });
      }
      throw new Ps("You must provide either an email or phone number.");
    } catch (f) {
      if (await We(this.storage, `${this.storageKey}-code-verifier`), Y(f))
        return this._returnResult({ data: { user: null, session: null }, error: f });
      throw f;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(r) {
    var i, a;
    try {
      let u, c;
      "options" in r && (u = (i = r.options) === null || i === void 0 ? void 0 : i.redirectTo, c = (a = r.options) === null || a === void 0 ? void 0 : a.captchaToken);
      const { data: h, error: f } = await ne(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, r), { gotrue_meta_security: { captcha_token: c } }),
        redirectTo: u,
        xform: Rt
      });
      if (f)
        throw f;
      if (!h)
        throw new Error("An error occurred on token verification.");
      const m = h.session, g = h.user;
      return m?.access_token && (await this._saveSession(m), await this._notifyAllSubscribers(r.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", m)), this._returnResult({ data: { user: g, session: m }, error: null });
    } catch (u) {
      if (Y(u))
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
    var i, a, u, c, h;
    try {
      let f = null, m = null;
      this.flowType === "pkce" && ([f, m] = await ln(this.storage, this.storageKey));
      const g = await ne(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in r ? { provider_id: r.providerId } : null), "domain" in r ? { domain: r.domain } : null), { redirect_to: (a = (i = r.options) === null || i === void 0 ? void 0 : i.redirectTo) !== null && a !== void 0 ? a : void 0 }), !((u = r?.options) === null || u === void 0) && u.captchaToken ? { gotrue_meta_security: { captcha_token: r.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: f, code_challenge_method: m }),
        headers: this.headers,
        xform: Ym
      });
      return !((c = g.data) === null || c === void 0) && c.url && Ve() && !(!((h = r.options) === null || h === void 0) && h.skipBrowserRedirect) && window.location.assign(g.data.url), this._returnResult(g);
    } catch (f) {
      if (await We(this.storage, `${this.storageKey}-code-verifier`), Y(f))
        return this._returnResult({ data: null, error: f });
      throw f;
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
          throw new dt();
        const { error: u } = await ne(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: i.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: u });
      });
    } catch (r) {
      if (Y(r))
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
        const { email: a, type: u, options: c } = r, { error: h } = await ne(this.fetch, "POST", i, {
          headers: this.headers,
          body: {
            email: a,
            type: u,
            gotrue_meta_security: { captcha_token: c?.captchaToken }
          },
          redirectTo: c?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: h });
      } else if ("phone" in r) {
        const { phone: a, type: u, options: c } = r, { data: h, error: f } = await ne(this.fetch, "POST", i, {
          headers: this.headers,
          body: {
            phone: a,
            type: u,
            gotrue_meta_security: { captcha_token: c?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: h?.message_id },
          error: f
        });
      }
      throw new Ps("You must provide either an email or phone number and a type");
    } catch (i) {
      if (Y(i))
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
      const i = await Or(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", i), i !== null && (this._isValidSession(i) ? r = i : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !r)
        return { data: { session: null }, error: null };
      const a = r.expires_at ? r.expires_at * 1e3 - Date.now() < Ma : !1;
      if (this._debug("#__loadSession()", `session has${a ? "" : " not"} expired`, "expires_at", r.expires_at), !a) {
        if (this.userStorage) {
          const h = await Or(this.userStorage, this.storageKey + "-user");
          h?.user ? r.user = h.user : r.user = Va();
        }
        if (this.storage.isServer && r.user && !r.user.__isUserNotAvailableProxy) {
          const h = { value: this.suppressGetSessionWarning };
          r.user = Km(r.user, h), h.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: r }, error: null };
      }
      const { data: u, error: c } = await this._callRefreshToken(r.refresh_token);
      return c ? this._returnResult({ data: { session: null }, error: c }) : this._returnResult({ data: { session: u }, error: null });
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
      return r ? await ne(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: r,
        xform: pr
      }) : await this._useSession(async (i) => {
        var a, u, c;
        const { data: h, error: f } = i;
        if (f)
          throw f;
        return !(!((a = h.session) === null || a === void 0) && a.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new dt() } : await ne(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (c = (u = h.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0,
          xform: pr
        });
      });
    } catch (i) {
      if (Y(i))
        return qa(i) && (await this._removeSession(), await We(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: i });
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
        const { data: u, error: c } = a;
        if (c)
          throw c;
        if (!u.session)
          throw new dt();
        const h = u.session;
        let f = null, m = null;
        this.flowType === "pkce" && r.email != null && ([f, m] = await ln(this.storage, this.storageKey));
        const { data: g, error: v } = await ne(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: i?.emailRedirectTo,
          body: Object.assign(Object.assign({}, r), { code_challenge: f, code_challenge_method: m }),
          jwt: h.access_token,
          xform: pr
        });
        if (v)
          throw v;
        return h.user = g.user, await this._saveSession(h), await this._notifyAllSubscribers("USER_UPDATED", h), this._returnResult({ data: { user: h.user }, error: null });
      });
    } catch (a) {
      if (await We(this.storage, `${this.storageKey}-code-verifier`), Y(a))
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
        throw new dt();
      const i = Date.now() / 1e3;
      let a = i, u = !0, c = null;
      const { payload: h } = Is(r.access_token);
      if (h.exp && (a = h.exp, u = a <= i), u) {
        const { data: f, error: m } = await this._callRefreshToken(r.refresh_token);
        if (m)
          return this._returnResult({ data: { user: null, session: null }, error: m });
        if (!f)
          return { data: { user: null, session: null }, error: null };
        c = f;
      } else {
        const { data: f, error: m } = await this._getUser(r.access_token);
        if (m)
          return this._returnResult({ data: { user: null, session: null }, error: m });
        c = {
          access_token: r.access_token,
          refresh_token: r.refresh_token,
          user: f.user,
          token_type: "bearer",
          expires_in: a - i,
          expires_at: a
        }, await this._saveSession(c), await this._notifyAllSubscribers("SIGNED_IN", c);
      }
      return this._returnResult({ data: { user: c.user, session: c }, error: null });
    } catch (i) {
      if (Y(i))
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
          const { data: h, error: f } = i;
          if (f)
            throw f;
          r = (a = h.session) !== null && a !== void 0 ? a : void 0;
        }
        if (!r?.refresh_token)
          throw new dt();
        const { data: u, error: c } = await this._callRefreshToken(r.refresh_token);
        return c ? this._returnResult({ data: { user: null, session: null }, error: c }) : u ? this._returnResult({ data: { user: u.user, session: u }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (i) {
      if (Y(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(r, i) {
    try {
      if (!Ve())
        throw new js("No browser detected.");
      if (r.error || r.error_description || r.error_code)
        throw new js(r.error_description || "Error in URL with unspecified error_description", {
          error: r.error || "unspecified_error",
          code: r.error_code || "unspecified_code"
        });
      switch (i) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Sd("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new js("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (i === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !r.code)
          throw new Sd("No code detected.");
        const { data: M, error: P } = await this._exchangeCodeForSession(r.code);
        if (P)
          throw P;
        const B = new URL(window.location.href);
        return B.searchParams.delete("code"), window.history.replaceState(window.history.state, "", B.toString()), { data: { session: M.session, redirectType: null }, error: null };
      }
      const { provider_token: a, provider_refresh_token: u, access_token: c, refresh_token: h, expires_in: f, expires_at: m, token_type: g } = r;
      if (!c || !f || !h || !g)
        throw new js("No session defined in URL");
      const v = Math.round(Date.now() / 1e3), k = parseInt(f);
      let w = v + k;
      m && (w = parseInt(m));
      const E = w - v;
      E * 1e3 <= hn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${E}s, should have been closer to ${k}s`);
      const C = w - k;
      v - C >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", C, w, v) : v - C < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", C, w, v);
      const { data: O, error: A } = await this._getUser(c);
      if (A)
        throw A;
      const j = {
        provider_token: a,
        provider_refresh_token: u,
        access_token: c,
        expires_in: k,
        expires_at: w,
        refresh_token: h,
        token_type: g,
        user: O.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: j, redirectType: r.type }, error: null });
    } catch (a) {
      if (Y(a))
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
    const i = await Or(this.storage, `${this.storageKey}-code-verifier`);
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
      const { data: u, error: c } = i;
      if (c && !qa(c))
        return this._returnResult({ error: c });
      const h = (a = u.session) === null || a === void 0 ? void 0 : a.access_token;
      if (h) {
        const { error: f } = await this.admin.signOut(h, r);
        if (f && !(bm(f) && (f.status === 404 || f.status === 401 || f.status === 403) || qa(f)))
          return this._returnResult({ error: f });
      }
      return r !== "others" && (await this._removeSession(), await We(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(r) {
    const i = Im(), a = {
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
        const { data: { session: c }, error: h } = i;
        if (h)
          throw h;
        await ((a = this.stateChangeEmitters.get(r)) === null || a === void 0 ? void 0 : a.callback("INITIAL_SESSION", c)), this._debug("INITIAL_SESSION", "callback id", r, "session", c);
      } catch (c) {
        await ((u = this.stateChangeEmitters.get(r)) === null || u === void 0 ? void 0 : u.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", r, "error", c), console.error(c);
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
    this.flowType === "pkce" && ([a, u] = await ln(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await ne(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: r,
          code_challenge: a,
          code_challenge_method: u,
          gotrue_meta_security: { captcha_token: i.captchaToken }
        },
        headers: this.headers,
        redirectTo: i.redirectTo
      });
    } catch (c) {
      if (await We(this.storage, `${this.storageKey}-code-verifier`), Y(c))
        return this._returnResult({ data: null, error: c });
      throw c;
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
      if (Y(i))
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
      const { data: a, error: u } = await this._useSession(async (c) => {
        var h, f, m, g, v;
        const { data: k, error: w } = c;
        if (w)
          throw w;
        const E = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, r.provider, {
          redirectTo: (h = r.options) === null || h === void 0 ? void 0 : h.redirectTo,
          scopes: (f = r.options) === null || f === void 0 ? void 0 : f.scopes,
          queryParams: (m = r.options) === null || m === void 0 ? void 0 : m.queryParams,
          skipBrowserRedirect: !0
        });
        return await ne(this.fetch, "GET", E, {
          headers: this.headers,
          jwt: (v = (g = k.session) === null || g === void 0 ? void 0 : g.access_token) !== null && v !== void 0 ? v : void 0
        });
      });
      if (u)
        throw u;
      return Ve() && !(!((i = r.options) === null || i === void 0) && i.skipBrowserRedirect) && window.location.assign(a?.url), this._returnResult({
        data: { provider: r.provider, url: a?.url },
        error: null
      });
    } catch (a) {
      if (Y(a))
        return this._returnResult({ data: { provider: r.provider, url: null }, error: a });
      throw a;
    }
  }
  async linkIdentityIdToken(r) {
    return await this._useSession(async (i) => {
      var a;
      try {
        const { error: u, data: { session: c } } = i;
        if (u)
          throw u;
        const { options: h, provider: f, token: m, access_token: g, nonce: v } = r, k = await ne(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (a = c?.access_token) !== null && a !== void 0 ? a : void 0,
          body: {
            provider: f,
            id_token: m,
            access_token: g,
            nonce: v,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: h?.captchaToken }
          },
          xform: Rt
        }), { data: w, error: E } = k;
        return E ? this._returnResult({ data: { user: null, session: null }, error: E }) : !w || !w.session || !w.user ? this._returnResult({
          data: { user: null, session: null },
          error: new an()
        }) : (w.session && (await this._saveSession(w.session), await this._notifyAllSubscribers("USER_UPDATED", w.session)), this._returnResult({ data: w, error: E }));
      } catch (u) {
        if (await We(this.storage, `${this.storageKey}-code-verifier`), Y(u))
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
        const { data: c, error: h } = i;
        if (h)
          throw h;
        return await ne(this.fetch, "DELETE", `${this.url}/user/identities/${r.identity_id}`, {
          headers: this.headers,
          jwt: (u = (a = c.session) === null || a === void 0 ? void 0 : a.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
    } catch (i) {
      if (Y(i))
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
      return await Um(async (u) => (u > 0 && await $m(200 * Math.pow(2, u - 1)), this._debug(i, "refreshing attempt", u), await ne(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: r },
        headers: this.headers,
        xform: Rt
      })), (u, c) => {
        const h = 200 * Math.pow(2, u);
        return c && Wa(c) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + h - a < hn;
      });
    } catch (a) {
      if (this._debug(i, "error", a), Y(a))
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
    return this._debug("#_handleProviderSignIn()", "provider", r, "options", i, "url", a), Ve() && !i.skipBrowserRedirect && window.location.assign(a), { data: { provider: r, url: a }, error: null };
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
      const u = await Or(this.storage, this.storageKey);
      if (u && this.userStorage) {
        let h = await Or(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !h && (h = { user: u.user }, await fn(this.userStorage, this.storageKey + "-user", h)), u.user = (r = h?.user) !== null && r !== void 0 ? r : Va();
      } else if (u && !u.user && !u.user) {
        const h = await Or(this.storage, this.storageKey + "-user");
        h && h?.user ? (u.user = h.user, await We(this.storage, this.storageKey + "-user"), await fn(this.storage, this.storageKey, u)) : u.user = Va();
      }
      if (this._debug(a, "session from storage", u), !this._isValidSession(u)) {
        this._debug(a, "session is not valid"), u !== null && await this._removeSession();
        return;
      }
      const c = ((i = u.expires_at) !== null && i !== void 0 ? i : 1 / 0) * 1e3 - Date.now() < Ma;
      if (this._debug(a, `session has${c ? "" : " not"} expired with margin of ${Ma}s`), c) {
        if (this.autoRefreshToken && u.refresh_token) {
          const { error: h } = await this._callRefreshToken(u.refresh_token);
          h && (console.error(h), Wa(h) || (this._debug(a, "refresh failed with a non-retryable error, removing the session", h), await this._removeSession()));
        }
      } else if (u.user && u.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: h, error: f } = await this._getUser(u.access_token);
          !f && h?.user ? (u.user = h.user, await this._saveSession(u), await this._notifyAllSubscribers("SIGNED_IN", u)) : this._debug(a, "could not get user data, skipping SIGNED_IN notification");
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
      throw new dt();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const u = `#_callRefreshToken(${r.substring(0, 5)}...)`;
    this._debug(u, "begin");
    try {
      this.refreshingDeferred = new Bs();
      const { data: c, error: h } = await this._refreshAccessToken(r);
      if (h)
        throw h;
      if (!c.session)
        throw new dt();
      await this._saveSession(c.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", c.session);
      const f = { data: c.session, error: null };
      return this.refreshingDeferred.resolve(f), f;
    } catch (c) {
      if (this._debug(u, "error", c), Y(c)) {
        const h = { data: null, error: c };
        return Wa(c) || await this._removeSession(), (i = this.refreshingDeferred) === null || i === void 0 || i.resolve(h), h;
      }
      throw (a = this.refreshingDeferred) === null || a === void 0 || a.reject(c), c;
    } finally {
      this.refreshingDeferred = null, this._debug(u, "end");
    }
  }
  async _notifyAllSubscribers(r, i, a = !0) {
    const u = `#_notifyAllSubscribers(${r})`;
    this._debug(u, "begin", i, `broadcast = ${a}`);
    try {
      this.broadcastChannel && a && this.broadcastChannel.postMessage({ event: r, session: i });
      const c = [], h = Array.from(this.stateChangeEmitters.values()).map(async (f) => {
        try {
          await f.callback(r, i);
        } catch (m) {
          c.push(m);
        }
      });
      if (await Promise.all(h), c.length > 0) {
        for (let f = 0; f < c.length; f += 1)
          console.error(c[f]);
        throw c[0];
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
    this._debug("#_saveSession()", r), this.suppressGetSessionWarning = !0, await We(this.storage, `${this.storageKey}-code-verifier`);
    const i = Object.assign({}, r), a = i.user && i.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !a && i.user && await fn(this.userStorage, this.storageKey + "-user", {
        user: i.user
      });
      const u = Object.assign({}, i);
      delete u.user;
      const c = Td(u);
      await fn(this.storage, this.storageKey, c);
    } else {
      const u = Td(i);
      await fn(this.storage, this.storageKey, u);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await We(this.storage, this.storageKey), await We(this.storage, this.storageKey + "-code-verifier"), await We(this.storage, this.storageKey + "-user"), this.userStorage && await We(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
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
      r && Ve() && window?.removeEventListener && window.removeEventListener("visibilitychange", r);
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
    const r = setInterval(() => this._autoRefreshTokenTick(), hn);
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
              const u = Math.floor((a.expires_at * 1e3 - r) / hn);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${u} ticks, a tick lasts ${hn}ms, refresh threshold is ${el} ticks`), u <= el && await this._callRefreshToken(a.refresh_token);
            });
          } catch (i) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", i);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (r) {
      if (r.isAcquireTimeout || r instanceof Xd)
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
    if (this._debug("#_handleVisibilityChange()"), !Ve() || !window?.addEventListener)
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
      const [c, h] = await ln(this.storage, this.storageKey), f = new URLSearchParams({
        code_challenge: `${encodeURIComponent(c)}`,
        code_challenge_method: `${encodeURIComponent(h)}`
      });
      u.push(f.toString());
    }
    if (a?.queryParams) {
      const c = new URLSearchParams(a.queryParams);
      u.push(c.toString());
    }
    return a?.skipBrowserRedirect && u.push(`skip_http_redirect=${a.skipBrowserRedirect}`), `${r}?${u.join("&")}`;
  }
  async _unenroll(r) {
    try {
      return await this._useSession(async (i) => {
        var a;
        const { data: u, error: c } = i;
        return c ? this._returnResult({ data: null, error: c }) : await ne(this.fetch, "DELETE", `${this.url}/factors/${r.factorId}`, {
          headers: this.headers,
          jwt: (a = u?.session) === null || a === void 0 ? void 0 : a.access_token
        });
      });
    } catch (i) {
      if (Y(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async _enroll(r) {
    try {
      return await this._useSession(async (i) => {
        var a, u;
        const { data: c, error: h } = i;
        if (h)
          return this._returnResult({ data: null, error: h });
        const f = Object.assign({ friendly_name: r.friendlyName, factor_type: r.factorType }, r.factorType === "phone" ? { phone: r.phone } : r.factorType === "totp" ? { issuer: r.issuer } : {}), { data: m, error: g } = await ne(this.fetch, "POST", `${this.url}/factors`, {
          body: f,
          headers: this.headers,
          jwt: (a = c?.session) === null || a === void 0 ? void 0 : a.access_token
        });
        return g ? this._returnResult({ data: null, error: g }) : (r.factorType === "totp" && m.type === "totp" && (!((u = m?.totp) === null || u === void 0) && u.qr_code) && (m.totp.qr_code = `data:image/svg+xml;utf-8,${m.totp.qr_code}`), this._returnResult({ data: m, error: null }));
      });
    } catch (i) {
      if (Y(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async _verify(r) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (i) => {
          var a;
          const { data: u, error: c } = i;
          if (c)
            return this._returnResult({ data: null, error: c });
          const h = Object.assign({ challenge_id: r.challengeId }, "webauthn" in r ? {
            webauthn: Object.assign(Object.assign({}, r.webauthn), { credential_response: r.webauthn.type === "create" ? fg(r.webauthn.credential_response) : pg(r.webauthn.credential_response) })
          } : { code: r.code }), { data: f, error: m } = await ne(this.fetch, "POST", `${this.url}/factors/${r.factorId}/verify`, {
            body: h,
            headers: this.headers,
            jwt: (a = u?.session) === null || a === void 0 ? void 0 : a.access_token
          });
          return m ? this._returnResult({ data: null, error: m }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + f.expires_in }, f)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", f), this._returnResult({ data: f, error: m }));
        });
      } catch (i) {
        if (Y(i))
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
          const { data: u, error: c } = i;
          if (c)
            return this._returnResult({ data: null, error: c });
          const h = await ne(this.fetch, "POST", `${this.url}/factors/${r.factorId}/challenge`, {
            body: r,
            headers: this.headers,
            jwt: (a = u?.session) === null || a === void 0 ? void 0 : a.access_token
          });
          if (h.error)
            return h;
          const { data: f } = h;
          if (f.type !== "webauthn")
            return { data: f, error: null };
          switch (f.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, f), { webauthn: Object.assign(Object.assign({}, f.webauthn), { credential_options: Object.assign(Object.assign({}, f.webauthn.credential_options), { publicKey: dg(f.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, f), { webauthn: Object.assign(Object.assign({}, f.webauthn), { credential_options: Object.assign(Object.assign({}, f.webauthn.credential_options), { publicKey: hg(f.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (i) {
        if (Y(i))
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
    for (const c of (r = i?.factors) !== null && r !== void 0 ? r : [])
      u.all.push(c), c.status === "verified" && u[c.factor_type].push(c);
    return {
      data: u,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(r) {
    var i, a, u, c;
    if (r)
      try {
        const { payload: E } = Is(r);
        let C = null;
        E.aal && (C = E.aal);
        let O = C;
        const { data: { user: A }, error: j } = await this.getUser(r);
        if (j)
          return this._returnResult({ data: null, error: j });
        ((a = (i = A?.factors) === null || i === void 0 ? void 0 : i.filter((B) => B.status === "verified")) !== null && a !== void 0 ? a : []).length > 0 && (O = "aal2");
        const P = E.amr || [];
        return { data: { currentLevel: C, nextLevel: O, currentAuthenticationMethods: P }, error: null };
      } catch (E) {
        if (Y(E))
          return this._returnResult({ data: null, error: E });
        throw E;
      }
    const { data: { session: h }, error: f } = await this.getSession();
    if (f)
      return this._returnResult({ data: null, error: f });
    if (!h)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: m } = Is(h.access_token);
    let g = null;
    m.aal && (g = m.aal);
    let v = g;
    ((c = (u = h.user.factors) === null || u === void 0 ? void 0 : u.filter((E) => E.status === "verified")) !== null && c !== void 0 ? c : []).length > 0 && (v = "aal2");
    const w = m.amr || [];
    return { data: { currentLevel: g, nextLevel: v, currentAuthenticationMethods: w }, error: null };
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
        return u ? this._returnResult({ data: null, error: u }) : a ? await ne(this.fetch, "GET", `${this.url}/oauth/authorizations/${r}`, {
          headers: this.headers,
          jwt: a.access_token,
          xform: (c) => ({ data: c, error: null })
        }) : this._returnResult({ data: null, error: new dt() });
      });
    } catch (i) {
      if (Y(i))
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
        const { data: { session: u }, error: c } = a;
        if (c)
          return this._returnResult({ data: null, error: c });
        if (!u)
          return this._returnResult({ data: null, error: new dt() });
        const h = await ne(this.fetch, "POST", `${this.url}/oauth/authorizations/${r}/consent`, {
          headers: this.headers,
          jwt: u.access_token,
          body: { action: "approve" },
          xform: (f) => ({ data: f, error: null })
        });
        return h.data && h.data.redirect_url && Ve() && !i?.skipBrowserRedirect && window.location.assign(h.data.redirect_url), h;
      });
    } catch (a) {
      if (Y(a))
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
        const { data: { session: u }, error: c } = a;
        if (c)
          return this._returnResult({ data: null, error: c });
        if (!u)
          return this._returnResult({ data: null, error: new dt() });
        const h = await ne(this.fetch, "POST", `${this.url}/oauth/authorizations/${r}/consent`, {
          headers: this.headers,
          jwt: u.access_token,
          body: { action: "deny" },
          xform: (f) => ({ data: f, error: null })
        });
        return h.data && h.data.redirect_url && Ve() && !i?.skipBrowserRedirect && window.location.assign(h.data.redirect_url), h;
      });
    } catch (a) {
      if (Y(a))
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
        return a ? this._returnResult({ data: null, error: a }) : i ? await ne(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: i.access_token,
          xform: (u) => ({ data: u, error: null })
        }) : this._returnResult({ data: null, error: new dt() });
      });
    } catch (r) {
      if (Y(r))
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
        return u ? this._returnResult({ data: null, error: u }) : a ? (await ne(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: a.access_token,
          query: { client_id: r.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new dt() });
      });
    } catch (i) {
      if (Y(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async fetchJwk(r, i = { keys: [] }) {
    let a = i.keys.find((f) => f.kid === r);
    if (a)
      return a;
    const u = Date.now();
    if (a = this.jwks.keys.find((f) => f.kid === r), a && this.jwks_cached_at + km > u)
      return a;
    const { data: c, error: h } = await ne(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (h)
      throw h;
    return !c.keys || c.keys.length === 0 || (this.jwks = c, this.jwks_cached_at = u, a = c.keys.find((f) => f.kid === r), !a) ? null : a;
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
        const { data: E, error: C } = await this.getSession();
        if (C || !E.session)
          return this._returnResult({ data: null, error: C });
        a = E.session.access_token;
      }
      const { header: u, payload: c, signature: h, raw: { header: f, payload: m } } = Is(a);
      i?.allowExpired || Wm(c.exp);
      const g = !u.alg || u.alg.startsWith("HS") || !u.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(u.kid, i?.keys ? { keys: i.keys } : i?.jwks);
      if (!g) {
        const { error: E } = await this.getUser(a);
        if (E)
          throw E;
        return {
          data: {
            claims: c,
            header: u,
            signature: h
          },
          error: null
        };
      }
      const v = Vm(u.alg), k = await crypto.subtle.importKey("jwk", g, v, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(v, k, h, Pm(`${f}.${m}`)))
        throw new nl("Invalid JWT signature");
      return {
        data: {
          claims: c,
          header: u,
          signature: h
        },
        error: null
      };
    } catch (a) {
      if (Y(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
}
fi.nextInstanceID = {};
const Eg = fi, bg = "2.98.0";
let si = "";
typeof Deno < "u" ? si = "deno" : typeof document < "u" ? si = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? si = "react-native" : si = "node";
const xg = { "X-Client-Info": `supabase-js-${si}/${bg}` }, Tg = { headers: xg }, Cg = { schema: "public" }, Rg = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Og = {};
function pi(s) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, pi(s);
}
function Ag(s, r) {
  if (pi(s) != "object" || !s) return s;
  var i = s[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(s, r);
    if (pi(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(s);
}
function Pg(s) {
  var r = Ag(s, "string");
  return pi(r) == "symbol" ? r : r + "";
}
function jg(s, r, i) {
  return (r = Pg(r)) in s ? Object.defineProperty(s, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[r] = i, s;
}
function Id(s, r) {
  var i = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(s);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(s, u).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function Ae(s) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Id(Object(i), !0).forEach(function(a) {
      jg(s, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : Id(Object(i)).forEach(function(a) {
      Object.defineProperty(s, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return s;
}
const Ig = (s) => s ? (...r) => s(...r) : (...r) => fetch(...r), Ng = () => Headers, Lg = (s, r, i) => {
  const a = Ig(i), u = Ng();
  return async (c, h) => {
    var f;
    const m = (f = await r()) !== null && f !== void 0 ? f : s;
    let g = new u(h?.headers);
    return g.has("apikey") || g.set("apikey", s), g.has("Authorization") || g.set("Authorization", `Bearer ${m}`), a(c, Ae(Ae({}, h), {}, { headers: g }));
  };
};
function $g(s) {
  return s.endsWith("/") ? s : s + "/";
}
function Ug(s, r) {
  var i, a;
  const { db: u, auth: c, realtime: h, global: f } = s, { db: m, auth: g, realtime: v, global: k } = r, w = {
    db: Ae(Ae({}, m), u),
    auth: Ae(Ae({}, g), c),
    realtime: Ae(Ae({}, v), h),
    storage: {},
    global: Ae(Ae(Ae({}, k), f), {}, { headers: Ae(Ae({}, (i = k?.headers) !== null && i !== void 0 ? i : {}), (a = f?.headers) !== null && a !== void 0 ? a : {}) }),
    accessToken: async () => ""
  };
  return s.accessToken ? w.accessToken = s.accessToken : delete w.accessToken, w;
}
function Dg(s) {
  const r = s?.trim();
  if (!r) throw new Error("supabaseUrl is required.");
  if (!r.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL($g(r));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var zg = class extends Eg {
  constructor(s) {
    super(s);
  }
}, Bg = class {
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
    const c = Dg(s);
    if (!r) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", c), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", c), this.storageUrl = new URL("storage/v1", c), this.functionsUrl = new URL("functions/v1", c);
    const h = `sb-${c.hostname.split(".")[0]}-auth-token`, f = {
      db: Cg,
      realtime: Og,
      auth: Ae(Ae({}, Rg), {}, { storageKey: h }),
      global: Tg
    }, m = Ug(i ?? {}, f);
    if (this.storageKey = (a = m.auth.storageKey) !== null && a !== void 0 ? a : "", this.headers = (u = m.global.headers) !== null && u !== void 0 ? u : {}, m.accessToken)
      this.accessToken = m.accessToken, this.auth = new Proxy({}, { get: (v, k) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(k)} is not possible`);
      } });
    else {
      var g;
      this.auth = this._initSupabaseAuthClient((g = m.auth) !== null && g !== void 0 ? g : {}, this.headers, m.global.fetch);
    }
    this.fetch = Lg(r, this._getAccessToken.bind(this), m.global.fetch), this.realtime = this._initRealtimeClient(Ae({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this)
    }, m.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((v) => this.realtime.setAuth(v)).catch((v) => console.warn("Failed to set initial Realtime auth token:", v)), this.rest = new bp(new URL("rest/v1", c).href, {
      headers: this.headers,
      schema: m.db.schema,
      fetch: this.fetch,
      timeout: m.db.timeout,
      urlLengthLimit: m.db.urlLengthLimit
    }), this.storage = new ym(this.storageUrl.href, this.headers, this.fetch, i?.storage), m.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new gp(this.functionsUrl.href, {
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
  _initSupabaseAuthClient({ autoRefreshToken: s, persistSession: r, detectSessionInUrl: i, storage: a, userStorage: u, storageKey: c, flowType: h, lock: f, debug: m, throwOnError: g }, v, k) {
    const w = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new zg({
      url: this.authUrl.href,
      headers: Ae(Ae({}, w), v),
      storageKey: c,
      autoRefreshToken: s,
      persistSession: r,
      detectSessionInUrl: i,
      storage: a,
      userStorage: u,
      flowType: h,
      lock: f,
      debug: m,
      throwOnError: g,
      fetch: k,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((E) => E.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(s) {
    return new Fp(this.realtimeUrl.href, Ae(Ae({}, s), {}, { params: Ae(Ae({}, { apikey: this.supabaseKey }), s?.params) }));
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
const Fg = (s, r, i) => new Bg(s, r, i);
function Mg() {
  if (typeof window < "u") return !1;
  const s = globalThis.process;
  if (!s) return !1;
  const r = s.version;
  if (r == null) return !1;
  const i = r.match(/^v(\d+)\./);
  return i ? parseInt(i[1], 10) <= 18 : !1;
}
Mg() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const qg = "https://qxozqgpuzthemsfotmvo.supabase.co", Wg = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4b3pxZ3B1enRoZW1zZm90bXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2Nzg2NTUsImV4cCI6MjA4NjI1NDY1NX0.N_10hGPsTjO4aH5DkqVd3EkE14QLpuOQoENgff0uTbE", Pt = Fg(qg, Wg);
function Vg(s) {
  const [r, i] = X.useState(null), [a, u] = X.useState([]), [c, h] = X.useState(!0), [f, m] = X.useState(null), g = X.useCallback(async () => {
    if (!s.community) {
      m("No community specified."), h(!1);
      return;
    }
    h(!0), m(null);
    try {
      const { data: v, error: k } = await Pt.from("communities").select("id, name, slug, settings").eq("slug", s.community).single();
      if (k || !v) {
        m(`Community "${s.community}" not found. Check the community parameter in your embed URL.`), h(!1);
        return;
      }
      i(v);
      let w = Pt.from("community_questions").select("*").eq("community_id", v.id).eq("status", "active");
      s.difficulty !== "mixed" && (w = w.eq("difficulty", s.difficulty)), s.category !== "all" && (w = w.eq("category", s.category));
      const { data: E, error: C } = await w;
      if (C) {
        m("Failed to load questions. Please try again."), h(!1);
        return;
      }
      if (!E || E.length === 0) {
        m("No questions available for this community. Check back soon!"), h(!1);
        return;
      }
      const O = [...E];
      for (let j = O.length - 1; j > 0; j--) {
        const M = Math.floor(Math.random() * (j + 1));
        [O[j], O[M]] = [O[M], O[j]];
      }
      const A = O.slice(0, s.count).map((j) => ({
        id: j.id,
        question: j.question_text,
        correctAnswer: j.correct_answer,
        incorrectAnswers: j.incorrect_answers || [],
        difficulty: j.difficulty,
        category: j.category,
        imageUrl: j.image_url || null,
        videoUrl: j.video_url || null,
        explanation: j.explanation || null
      }));
      u(A);
    } catch (v) {
      console.error("useQuestions error:", v), m("Something went wrong loading the quiz.");
    } finally {
      h(!1);
    }
  }, [s.community, s.difficulty, s.category, s.count]);
  return X.useEffect(() => {
    g();
  }, [g]), { community: r, questions: a, loading: c, error: f, refetch: g };
}
function Hg() {
  const [s, r] = X.useState(null), [i, a] = X.useState(!0);
  X.useEffect(() => {
    Pt.auth.getSession().then(({ data: { session: g } }) => {
      r(g?.user || null), a(!1);
    });
    const { data: { subscription: m } } = Pt.auth.onAuthStateChange((g, v) => {
      r(v?.user || null);
    });
    return () => m.unsubscribe();
  }, []);
  const u = X.useCallback(async (m, g) => {
    const { error: v } = await Pt.auth.signInWithPassword({ email: m, password: g });
    if (v)
      throw v.message === "Invalid login credentials" ? new Error("Incorrect email or password.") : v;
  }, []), c = X.useCallback(async (m, g, v) => {
    const { data: k, error: w } = await Pt.auth.signUp({
      email: m,
      password: g,
      options: {
        data: { username: v }
      }
    });
    if (w) throw w;
    if (k?.user?.identities?.length === 0)
      throw new Error("An account with this email already exists.");
    return k;
  }, []), h = X.useCallback(async (m) => {
    if (s)
      try {
        await Pt.from("games").update({ user_id: s.id }).eq("session_id", m).is("user_id", null);
      } catch (g) {
        console.error("Failed to claim anonymous scores:", g);
      }
  }, [s]), f = X.useCallback(async () => {
    await Pt.auth.signOut();
  }, []);
  return { user: s, loading: i, login: u, register: c, logout: f, claimAnonymousScores: h };
}
const Nd = "quiz-embed-session-id", Ld = "quiz-embed-guest-name";
function $d() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (s) => {
    const r = Math.random() * 16 | 0;
    return (s === "x" ? r : r & 3 | 8).toString(16);
  });
}
function th() {
  try {
    let s = localStorage.getItem(Nd);
    return s || (s = $d(), localStorage.setItem(Nd, s)), s;
  } catch {
    return $d();
  }
}
function Kg() {
  try {
    let s = localStorage.getItem(Ld);
    return s || (s = `Guest-${th().slice(0, 4).toUpperCase()}`, localStorage.setItem(Ld, s)), s;
  } catch {
    return "Guest";
  }
}
function Gg(s) {
  const r = s.length, i = s.filter((u) => u.correct).length, a = r > 0 ? Math.round(i / r * 100) : 0;
  return { score: i, total: r, percentage: a };
}
async function Jg(s, {
  userId: r = null,
  sessionId: i = null,
  communityId: a,
  score: u,
  totalQuestions: c,
  category: h = null,
  difficulty: f = null,
  answers: m = []
}) {
  try {
    let g = null;
    try {
      window.self !== window.top && document.referrer && (g = new URL(document.referrer).hostname);
    } catch {
    }
    const v = {
      community_id: a,
      score: Math.min(u, c),
      total_questions: c,
      category: h,
      difficulty: f,
      source: "embed",
      host_origin: g
    };
    r && (v.user_id = r), i && (v.session_id = i);
    const { data: k, error: w } = await s.from("games").insert([v]).select().single();
    if (w) throw w;
    if (k?.id && m.length > 0) {
      const E = m.map((C) => ({
        game_id: k.id,
        question_id: C.questionId || null,
        selected_answer: C.selectedAnswer,
        correct_answer: C.correctAnswer,
        is_correct: C.correct,
        ...r ? { user_id: r } : {}
      }));
      await s.from("game_answers").insert(E);
    }
    return { gameId: k?.id || null, error: null };
  } catch (g) {
    return console.error("saveGame error:", g), { gameId: null, error: g.message };
  }
}
const rh = "quiz-streak-";
function nh(s) {
  return s.toLocaleDateString("en-CA");
}
function Qg() {
  return nh(/* @__PURE__ */ new Date());
}
function Yg() {
  const s = /* @__PURE__ */ new Date();
  return s.setDate(s.getDate() - 1), nh(s);
}
function Xg(s) {
  try {
    const r = localStorage.getItem(rh + s);
    return r ? JSON.parse(r) : { count: 0, lastPlayDate: null };
  } catch {
    return { count: 0, lastPlayDate: null };
  }
}
function Ud(s, r) {
  try {
    localStorage.setItem(
      rh + s,
      JSON.stringify(r)
    );
  } catch {
  }
}
function Zg(s) {
  const r = Xg(s), i = Qg(), a = Yg();
  if (r.lastPlayDate === i)
    return { count: r.count, isNew: !1 };
  if (r.lastPlayDate === a) {
    const c = { count: r.count + 1, lastPlayDate: i };
    return Ud(s, c), { count: c.count, isNew: !0 };
  }
  return Ud(s, { count: 1, lastPlayDate: i }), { count: 1, isNew: r.count === 0 };
}
async function ey({
  webhookUrl: s,
  communitySlug: r,
  communityName: i,
  score: a,
  total: u,
  percentage: c,
  playerName: h,
  isAnonymous: f,
  streak: m
}) {
  if (!s) return;
  const g = {
    event: "game.completed",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    community: {
      slug: r,
      name: i
    },
    player: {
      name: h,
      anonymous: f
    },
    result: {
      score: a,
      total: u,
      percentage: c,
      streak: m || null
    }
  };
  try {
    await fetch(s, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(g),
      mode: "no-cors",
      // Allow cross-origin without preflight
      signal: AbortSignal.timeout(5e3)
    });
  } catch (v) {
    console.debug("Webhook failed (non-blocking):", v.message);
  }
}
function ty({ questions: s, community: r, timer: i, difficulty: a, onComplete: u, onQuizStarted: c, onAnswered: h }) {
  const [f, m] = X.useState(0), [g, v] = X.useState(null), [k, w] = X.useState(!1), [E, C] = X.useState(!1), [O, A] = X.useState([]), [j, M] = X.useState(i || 0), [P, B] = X.useState([]), Z = X.useRef(null), U = s[f], ie = f === s.length - 1, ue = i > 0, [_e, He] = X.useState([]), _t = () => {
    if (E || k) return;
    const H = P.filter((D) => D !== U.correctAnswer);
    for (let D = H.length - 1; D > 0; D--) {
      const J = Math.floor(Math.random() * (D + 1));
      [H[D], H[J]] = [H[J], H[D]];
    }
    He(H.slice(0, 2)), C(!0);
  };
  X.useEffect(() => {
    if (!U) return;
    const H = [U.correctAnswer, ...U.incorrectAnswers];
    for (let D = H.length - 1; D > 0; D--) {
      const J = Math.floor(Math.random() * (D + 1));
      [H[D], H[J]] = [H[J], H[D]];
    }
    B(H);
  }, [f, U]), X.useEffect(() => {
    f === 0 && s.length > 0 && c?.({
      communitySlug: r?.slug,
      questionCount: s.length,
      difficulty: a || "mixed"
    });
  }, []), X.useEffect(() => {
    if (!(!ue || k))
      return M(i), Z.current = setInterval(() => {
        M((H) => H <= 1 ? (clearInterval(Z.current), Ze(), 0) : H - 1);
      }, 1e3), () => clearInterval(Z.current);
  }, [f, ue, i, k]);
  const Ze = X.useCallback(() => {
    if (k) return;
    const H = {
      questionId: U.id,
      selectedAnswer: null,
      correctAnswer: U.correctAnswer,
      correct: !1,
      timedOut: !0,
      usedHint: E
    };
    v("__timed_out__"), w(!0), A((D) => [...D, H]), h?.({
      questionIndex: f,
      correct: !1,
      selectedAnswer: null,
      correctAnswer: U.correctAnswer
    });
  }, [U, f, k, E, h]), Ce = (H) => {
    if (k) return;
    clearInterval(Z.current);
    const D = H === U.correctAnswer, J = {
      questionId: U.id,
      selectedAnswer: H,
      correctAnswer: U.correctAnswer,
      correct: D,
      timedOut: !1,
      usedHint: E
    };
    v(H), w(!0), A((W) => [...W, J]), h?.({
      questionIndex: f,
      correct: D,
      selectedAnswer: H,
      correctAnswer: U.correctAnswer
    });
  }, ge = () => {
    ie ? u(O) : (v(null), w(!1), C(!1), He([]), m((H) => H + 1));
  };
  if (!U) return null;
  const Re = O.filter((H) => H.correct).length, Le = (H) => {
    const D = {
      width: "100%",
      padding: "0.875rem 1rem",
      marginBottom: "0.5rem",
      border: "2px solid",
      borderRadius: "8px",
      cursor: k ? "default" : "pointer",
      fontSize: "1rem",
      fontFamily: "var(--embed-font)",
      color: "var(--embed-text)",
      textAlign: "left",
      transition: "all 0.2s ease",
      backgroundColor: "var(--embed-surface)",
      borderColor: "transparent"
    };
    return k ? H === U.correctAnswer ? { ...D, borderColor: "var(--embed-accent)", backgroundColor: "rgba(0,180,0,0.15)" } : H === g && H !== U.correctAnswer ? { ...D, borderColor: "#e74c3c", backgroundColor: "rgba(231,76,60,0.15)" } : { ...D, opacity: 0.5 } : _e.includes(H) ? { ...D, opacity: 0.15, borderColor: "rgba(255,255,255,0.05)", cursor: "default", textDecoration: "line-through" } : { ...D, borderColor: "rgba(255,255,255,0.1)" };
  };
  return /* @__PURE__ */ I.jsxs("div", { style: { maxWidth: "600px", margin: "0 auto" }, children: [
    /* @__PURE__ */ I.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem",
      fontSize: "0.875rem",
      opacity: 0.7
    }, children: [
      /* @__PURE__ */ I.jsx("span", { children: r?.name }),
      /* @__PURE__ */ I.jsxs("span", { children: [
        Re,
        "/",
        O.length + 0,
        " correct"
      ] })
    ] }),
    /* @__PURE__ */ I.jsx("div", { style: {
      width: "100%",
      height: "4px",
      backgroundColor: "var(--embed-surface)",
      borderRadius: "2px",
      marginBottom: "1.5rem",
      overflow: "hidden"
    }, children: /* @__PURE__ */ I.jsx("div", { style: {
      width: `${(f + (k ? 1 : 0)) / s.length * 100}%`,
      height: "100%",
      backgroundColor: "var(--embed-accent)",
      transition: "width 0.3s ease"
    } }) }),
    ue && /* @__PURE__ */ I.jsxs("div", { style: {
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: "1.25rem",
      fontWeight: "600",
      color: j <= 5 ? "#e74c3c" : "var(--embed-text)"
    }, children: [
      "⏱ ",
      j,
      "s"
    ] }),
    /* @__PURE__ */ I.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
      /* @__PURE__ */ I.jsxs("div", { style: { fontSize: "0.8rem", opacity: 0.5, marginBottom: "0.25rem" }, children: [
        "Question ",
        f + 1,
        " of ",
        s.length
      ] }),
      /* @__PURE__ */ I.jsx("h2", { style: { fontSize: "1.25rem", fontWeight: "600", margin: 0, lineHeight: 1.4 }, children: U.question })
    ] }),
    /* @__PURE__ */ I.jsx("div", { style: { marginBottom: "1rem" }, children: P.map((H, D) => /* @__PURE__ */ I.jsx(
      "button",
      {
        onClick: () => !_e.includes(H) && Ce(H),
        disabled: k || _e.includes(H),
        style: Le(H),
        onMouseOver: (J) => {
          k || (J.target.style.borderColor = "var(--embed-primary)");
        },
        onMouseOut: (J) => {
          k || (J.target.style.borderColor = "rgba(255,255,255,0.1)");
        },
        children: H
      },
      D
    )) }),
    !k && !E && /* @__PURE__ */ I.jsx("div", { style: { marginBottom: "1rem", textAlign: "center" }, children: /* @__PURE__ */ I.jsx(
      "button",
      {
        onClick: _t,
        style: {
          padding: "0.5rem 1.25rem",
          backgroundColor: "transparent",
          color: "var(--embed-text)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "20px",
          fontSize: "0.85rem",
          fontFamily: "var(--embed-font)",
          cursor: "pointer",
          opacity: 0.7,
          transition: "opacity 0.2s ease"
        },
        onMouseOver: (H) => {
          H.target.style.opacity = "1";
        },
        onMouseOut: (H) => {
          H.target.style.opacity = "0.7";
        },
        children: "🎲 50/50"
      }
    ) }),
    k && g === "__timed_out__" && /* @__PURE__ */ I.jsxs("div", { style: {
      padding: "0.75rem",
      borderRadius: "8px",
      backgroundColor: "rgba(231,76,60,0.15)",
      marginBottom: "1rem",
      fontSize: "0.9rem"
    }, children: [
      "⏰ Time's up! The correct answer was ",
      /* @__PURE__ */ I.jsx("strong", { children: U.correctAnswer })
    ] }),
    k && U.explanation && /* @__PURE__ */ I.jsxs("div", { style: {
      padding: "0.75rem",
      borderRadius: "8px",
      backgroundColor: "var(--embed-surface)",
      marginBottom: "1rem",
      fontSize: "0.875rem",
      lineHeight: 1.5
    }, children: [
      "💡 ",
      U.explanation
    ] }),
    k && /* @__PURE__ */ I.jsx(
      "button",
      {
        onClick: ge,
        style: {
          width: "100%",
          padding: "0.875rem",
          backgroundColor: "var(--embed-primary)",
          color: "var(--embed-text)",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "600",
          fontFamily: "var(--embed-font)",
          cursor: "pointer"
        },
        children: ie ? "See Results" : "Next Question →"
      }
    )
  ] });
}
async function ry({
  score: s,
  total: r,
  percentage: i,
  emoji: a,
  message: u,
  communityName: c,
  playerName: h,
  theme: f,
  streak: m = null
}) {
  const k = document.createElement("canvas");
  k.width = 600, k.height = 340;
  const w = k.getContext("2d");
  w.fillStyle = f.bg || "#0D0D0D", w.fillRect(0, 0, 600, 340), w.fillStyle = f.primary || "#6B2D5E", w.fillRect(0, 0, 600, 4);
  const E = 24, C = 20, O = 296;
  w.fillStyle = f.surface || "#1A1A2E", Ka(w, E, C, 600 - E * 2, O, 16), w.fill();
  const A = 600 / 2, j = f.text || "#F5F0EB";
  w.font = "52px serif", w.textAlign = "center", w.fillStyle = j, w.fillText(a, A, C + 64), w.font = "bold 44px system-ui, -apple-system, sans-serif", w.fillStyle = j, w.fillText(`${s} / ${r}`, A, C + 120), w.font = "20px system-ui, -apple-system, sans-serif", w.fillStyle = j, w.globalAlpha = 0.7, w.fillText(`${i}% correct`, A, C + 152), w.globalAlpha = 1, w.font = "15px system-ui, -apple-system, sans-serif", w.fillStyle = j, w.globalAlpha = 0.5, w.fillText(`${u} — ${h}`, A, C + 182), w.globalAlpha = 1;
  const M = C + 204, P = 600 - E * 2 - 60, B = 8, Z = A - P / 2;
  w.fillStyle = "rgba(255,255,255,0.1)", Ka(w, Z, M, P, B, 4), w.fill();
  const U = Math.max(i / 100 * P, 4);
  return w.fillStyle = f.accent || "#8B0000", Ka(w, Z, M, U, B, 4), w.fill(), c && (w.font = "13px system-ui, -apple-system, sans-serif", w.fillStyle = j, w.globalAlpha = 0.35, w.fillText(c, A, C + 248), w.globalAlpha = 1), m && m > 1 && (w.font = "bold 14px system-ui, -apple-system, sans-serif", w.fillStyle = f.accent || "#8B0000", w.globalAlpha = 0.9, w.fillText(`🔥 ${m} day streak`, A, C + 272), w.globalAlpha = 1), w.font = "11px system-ui, -apple-system, sans-serif", w.fillStyle = j, w.globalAlpha = 0.2, w.fillText("Powered by GStreet Trivia", A, C + O - 12), w.globalAlpha = 1, new Promise((ie) => {
    k.toBlob((ue) => ie(ue), "image/png");
  });
}
async function ny(s, r) {
  const i = `trivia-score-${r || "quiz"}.png`;
  if (navigator.share && navigator.canShare) {
    const h = { files: [new File([s], i, { type: "image/png" })] };
    if (navigator.canShare(h))
      try {
        return await navigator.share(h), "shared";
      } catch (f) {
        if (f.name === "AbortError") return "cancelled";
      }
  }
  const a = URL.createObjectURL(s), u = document.createElement("a");
  return u.href = a, u.download = i, document.body.appendChild(u), u.click(), document.body.removeChild(u), URL.revokeObjectURL(a), "downloaded";
}
function Ka(s, r, i, a, u, c) {
  s.beginPath(), s.moveTo(r + c, i), s.lineTo(r + a - c, i), s.quadraticCurveTo(r + a, i, r + a, i + c), s.lineTo(r + a, i + u - c), s.quadraticCurveTo(r + a, i + u, r + a - c, i + u), s.lineTo(r + c, i + u), s.quadraticCurveTo(r, i + u, r, i + u - c), s.lineTo(r, i + c), s.quadraticCurveTo(r, i, r + c, i), s.closePath();
}
function iy({ scoreData: s, answers: r, questions: i, community: a, guestName: u, user: c, onPlayAgain: h, onLoginClick: f, onLogout: m, theme: g, streakData: v }) {
  const [k, w] = X.useState(!1), [E, C] = X.useState(null), [O, A] = X.useState(null), j = s.percentage >= 80 ? "🎉" : s.percentage >= 50 ? "👍" : s.percentage >= 30 ? "💪" : "😅", M = s.percentage === 100 ? "Perfect score!" : s.percentage >= 80 ? "Great job!" : s.percentage >= 50 ? "Not bad!" : "Keep practicing!", P = async () => {
    A("generating");
    try {
      const B = g || {
        bg: getComputedStyle(document.documentElement).getPropertyValue("--embed-bg").trim() || "#0D0D0D",
        surface: getComputedStyle(document.documentElement).getPropertyValue("--embed-surface").trim() || "#1A1A2E",
        primary: getComputedStyle(document.documentElement).getPropertyValue("--embed-primary").trim() || "#6B2D5E",
        accent: getComputedStyle(document.documentElement).getPropertyValue("--embed-accent").trim() || "#8B0000",
        text: getComputedStyle(document.documentElement).getPropertyValue("--embed-text").trim() || "#F5F0EB"
      }, Z = await ry({
        score: s.score,
        total: s.total,
        percentage: s.percentage,
        emoji: j,
        message: M,
        communityName: a?.name || "",
        playerName: c?.user_metadata?.username || u,
        theme: B,
        streak: v?.count > 1 ? v.count : null
      }), U = await ny(Z, a?.slug);
      A(U), setTimeout(() => A(null), 2500);
    } catch (B) {
      console.error("Share failed:", B), A(null);
    }
  };
  return /* @__PURE__ */ I.jsxs("div", { style: { maxWidth: "600px", margin: "0 auto", padding: "1.5rem 0" }, children: [
    /* @__PURE__ */ I.jsxs("div", { style: { textAlign: "center", marginBottom: "2rem" }, children: [
      /* @__PURE__ */ I.jsx("div", { style: { fontSize: "3.5rem", marginBottom: "0.25rem" }, children: j }),
      /* @__PURE__ */ I.jsxs("h2", { style: { margin: "0 0 0.25rem", fontSize: "2rem", fontWeight: "700" }, children: [
        s.score,
        " / ",
        s.total
      ] }),
      /* @__PURE__ */ I.jsxs("p", { style: { opacity: 0.7, fontSize: "1.1rem", margin: "0 0 0.25rem" }, children: [
        s.percentage,
        "% correct"
      ] }),
      /* @__PURE__ */ I.jsxs("p", { style: { opacity: 0.5, fontSize: "0.875rem", margin: 0 }, children: [
        M,
        " — ",
        u
      ] }),
      a && /* @__PURE__ */ I.jsx("p", { style: { opacity: 0.4, fontSize: "0.75rem", marginTop: "0.5rem" }, children: a.name }),
      v && v.count > 1 && /* @__PURE__ */ I.jsxs("p", { style: {
        marginTop: "0.75rem",
        fontSize: "0.9rem",
        fontWeight: "600",
        color: "var(--embed-accent)"
      }, children: [
        "🔥 ",
        v.count,
        " day streak",
        v.isNew ? " — keep it going!" : ""
      ] })
    ] }),
    /* @__PURE__ */ I.jsxs("div", { style: { display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }, children: [
      /* @__PURE__ */ I.jsx(
        "button",
        {
          onClick: h,
          style: {
            flex: 1,
            padding: "0.875rem",
            backgroundColor: "var(--embed-primary)",
            color: "var(--embed-text)",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            fontFamily: "var(--embed-font)",
            cursor: "pointer"
          },
          children: "Play Again"
        }
      ),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          onClick: P,
          disabled: O === "generating",
          style: {
            flex: 1,
            padding: "0.875rem",
            backgroundColor: "var(--embed-surface)",
            color: "var(--embed-text)",
            border: "2px solid var(--embed-primary)",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            fontFamily: "var(--embed-font)",
            cursor: O === "generating" ? "wait" : "pointer",
            opacity: O === "generating" ? 0.7 : 1
          },
          children: O === "generating" ? "⏳" : O === "shared" ? "✅ Shared!" : O === "downloaded" ? "✅ Saved!" : "📤 Share"
        }
      ),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          onClick: () => w(!k),
          style: {
            flex: 1,
            padding: "0.875rem",
            backgroundColor: "var(--embed-surface)",
            color: "var(--embed-text)",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            fontFamily: "var(--embed-font)",
            cursor: "pointer"
          },
          children: k ? "Hide Review" : "Review Answers"
        }
      )
    ] }),
    /* @__PURE__ */ I.jsx("div", { style: {
      padding: "1rem",
      borderRadius: "8px",
      backgroundColor: "var(--embed-surface)",
      textAlign: "center",
      marginBottom: "1.5rem",
      border: "1px solid rgba(255,255,255,0.05)"
    }, children: c ? /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      /* @__PURE__ */ I.jsxs("p", { style: { margin: "0 0 0.5rem", fontSize: "0.9rem" }, children: [
        "✅ Signed in as ",
        /* @__PURE__ */ I.jsx("strong", { children: c.user_metadata?.username || c.email })
      ] }),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          onClick: m,
          style: {
            background: "none",
            border: "none",
            color: "var(--embed-text)",
            opacity: 0.5,
            fontSize: "0.75rem",
            cursor: "pointer",
            textDecoration: "underline"
          },
          children: "Sign out"
        }
      )
    ] }) : /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      /* @__PURE__ */ I.jsx("p", { style: { margin: "0 0 0.5rem", fontSize: "0.9rem" }, children: "🔒 Sign in to save your scores and appear on the leaderboard" }),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          onClick: f,
          style: {
            padding: "0.5rem 1.5rem",
            backgroundColor: "var(--embed-primary)",
            color: "var(--embed-text)",
            border: "none",
            borderRadius: "6px",
            fontSize: "0.85rem",
            fontWeight: "600",
            fontFamily: "var(--embed-font)",
            cursor: "pointer",
            marginTop: "0.5rem"
          },
          children: "Sign In / Register"
        }
      ),
      /* @__PURE__ */ I.jsxs("p", { style: { margin: "0.5rem 0 0", fontSize: "0.75rem", opacity: 0.5 }, children: [
        "Playing as ",
        u
      ] })
    ] }) }),
    k && /* @__PURE__ */ I.jsxs("div", { children: [
      /* @__PURE__ */ I.jsx("h3", { style: { fontSize: "1rem", marginBottom: "1rem", opacity: 0.7 }, children: "Answer Review" }),
      r.map((B, Z) => {
        const U = i[Z], ie = E === Z;
        return /* @__PURE__ */ I.jsxs(
          "div",
          {
            onClick: () => C(ie ? null : Z),
            style: {
              padding: "0.75rem 1rem",
              marginBottom: "0.5rem",
              borderRadius: "8px",
              backgroundColor: "var(--embed-surface)",
              cursor: "pointer",
              border: "2px solid",
              borderColor: B.correct ? "rgba(0,180,0,0.3)" : "rgba(231,76,60,0.3)"
            },
            children: [
              /* @__PURE__ */ I.jsxs("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }, children: [
                /* @__PURE__ */ I.jsxs("span", { style: { fontSize: "0.875rem" }, children: [
                  B.correct ? "✅" : B.timedOut ? "⏰" : "❌",
                  " ",
                  B.usedHint ? "💡 " : "",
                  /* @__PURE__ */ I.jsxs("strong", { children: [
                    "Q",
                    Z + 1,
                    ":"
                  ] }),
                  " ",
                  U ? U.question.slice(0, 60) + (U.question.length > 60 ? "..." : "") : ""
                ] }),
                /* @__PURE__ */ I.jsx("span", { style: { opacity: 0.4, fontSize: "0.75rem" }, children: ie ? "▲" : "▼" })
              ] }),
              ie && U && /* @__PURE__ */ I.jsxs("div", { style: { marginTop: "0.75rem", fontSize: "0.85rem", lineHeight: 1.6 }, children: [
                /* @__PURE__ */ I.jsxs("p", { style: { margin: "0 0 0.5rem" }, children: [
                  /* @__PURE__ */ I.jsx("strong", { children: "Question:" }),
                  " ",
                  U.question
                ] }),
                B.timedOut ? /* @__PURE__ */ I.jsx("p", { style: { margin: "0 0 0.25rem", color: "#e74c3c" }, children: "⏰ Time ran out" }) : /* @__PURE__ */ I.jsxs("p", { style: {
                  margin: "0 0 0.25rem",
                  color: B.correct ? "rgba(0,200,0,0.9)" : "#e74c3c"
                }, children: [
                  /* @__PURE__ */ I.jsx("strong", { children: "Your answer:" }),
                  " ",
                  B.selectedAnswer
                ] }),
                !B.correct && /* @__PURE__ */ I.jsxs("p", { style: { margin: "0 0 0.25rem", color: "rgba(0,200,0,0.9)" }, children: [
                  /* @__PURE__ */ I.jsx("strong", { children: "Correct answer:" }),
                  " ",
                  B.correctAnswer
                ] }),
                U.explanation && /* @__PURE__ */ I.jsxs("p", { style: { margin: "0.5rem 0 0", opacity: 0.7 }, children: [
                  "💡 ",
                  U.explanation
                ] })
              ] })
            ]
          },
          Z
        );
      })
    ] })
  ] });
}
function sy({ onClose: s, onLogin: r, onRegister: i, onSuccess: a }) {
  const [u, c] = X.useState("login"), [h, f] = X.useState(""), [m, g] = X.useState(""), [v, k] = X.useState(""), [w, E] = X.useState(null), [C, O] = X.useState(!1), [A, j] = X.useState(!1), M = async (B) => {
    B.preventDefault(), E(null), O(!0);
    try {
      if (u === "login")
        await r(h, m), a?.(), s();
      else {
        if (!v.trim() || v.trim().length < 3)
          throw new Error("Username must be at least 3 characters.");
        if (!/^[a-zA-Z0-9_]+$/.test(v.trim()))
          throw new Error("Username: letters, numbers, and underscores only.");
        if (m.length < 8)
          throw new Error("Password must be at least 8 characters.");
        await i(h, m, v.trim()), j(!0), setTimeout(() => {
          c("login"), j(!1);
        }, 2e3);
      }
    } catch (Z) {
      E(Z.message);
    } finally {
      O(!1);
    }
  }, P = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "var(--embed-bg)",
    color: "var(--embed-text)",
    border: "2px solid rgba(255,255,255,0.15)",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontFamily: "var(--embed-font)",
    boxSizing: "border-box",
    marginBottom: "0.75rem",
    outline: "none"
  };
  return /* @__PURE__ */ I.jsx("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1e3,
    padding: "1rem"
  }, children: /* @__PURE__ */ I.jsxs("div", { style: {
    backgroundColor: "var(--embed-surface)",
    borderRadius: "12px",
    padding: "1.5rem",
    maxWidth: "380px",
    width: "100%",
    position: "relative"
  }, children: [
    /* @__PURE__ */ I.jsx(
      "button",
      {
        onClick: s,
        style: {
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
          background: "none",
          border: "none",
          color: "var(--embed-text)",
          fontSize: "1.25rem",
          cursor: "pointer",
          opacity: 0.6
        },
        children: "✕"
      }
    ),
    /* @__PURE__ */ I.jsx("h3", { style: { margin: "0 0 1rem", fontSize: "1.1rem", textAlign: "center" }, children: u === "login" ? "Sign In" : "Create Account" }),
    A && /* @__PURE__ */ I.jsx("div", { style: {
      padding: "0.75rem",
      borderRadius: "6px",
      backgroundColor: "rgba(0,180,0,0.15)",
      marginBottom: "1rem",
      fontSize: "0.85rem",
      textAlign: "center"
    }, children: "✅ Account created! Check your email to confirm, then sign in." }),
    w && /* @__PURE__ */ I.jsx("div", { style: {
      padding: "0.75rem",
      borderRadius: "6px",
      backgroundColor: "rgba(231,76,60,0.15)",
      marginBottom: "1rem",
      fontSize: "0.85rem",
      color: "#e74c3c"
    }, children: w }),
    /* @__PURE__ */ I.jsxs("form", { onSubmit: M, children: [
      u === "register" && /* @__PURE__ */ I.jsx(
        "input",
        {
          type: "text",
          placeholder: "Username",
          value: v,
          onChange: (B) => k(B.target.value),
          style: P,
          required: !0
        }
      ),
      /* @__PURE__ */ I.jsx(
        "input",
        {
          type: "email",
          placeholder: "Email",
          value: h,
          onChange: (B) => f(B.target.value),
          style: P,
          required: !0
        }
      ),
      /* @__PURE__ */ I.jsx(
        "input",
        {
          type: "password",
          placeholder: "Password",
          value: m,
          onChange: (B) => g(B.target.value),
          style: P,
          required: !0,
          minLength: u === "register" ? 8 : void 0
        }
      ),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          type: "submit",
          disabled: C,
          style: {
            width: "100%",
            padding: "0.875rem",
            backgroundColor: "var(--embed-primary)",
            color: "var(--embed-text)",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            fontFamily: "var(--embed-font)",
            cursor: C ? "wait" : "pointer",
            opacity: C ? 0.7 : 1
          },
          children: C ? "..." : u === "login" ? "Sign In" : "Create Account"
        }
      )
    ] }),
    /* @__PURE__ */ I.jsx("p", { style: {
      textAlign: "center",
      marginTop: "1rem",
      marginBottom: 0,
      fontSize: "0.8rem",
      opacity: 0.6
    }, children: u === "login" ? /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ I.jsx(
        "span",
        {
          onClick: () => {
            c("register"), E(null);
          },
          style: { color: "var(--embed-primary)", cursor: "pointer", textDecoration: "underline" },
          children: "Sign up"
        }
      )
    ] }) : /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ I.jsx(
        "span",
        {
          onClick: () => {
            c("login"), E(null);
          },
          style: { color: "var(--embed-primary)", cursor: "pointer", textDecoration: "underline" },
          children: "Sign in"
        }
      )
    ] }) })
  ] }) });
}
function ih({ community: s, leaderboardParam: r, user: i, guestName: a }) {
  const u = r === "community" || r === "both", c = r === "platform" || r === "both", [h, f] = X.useState(u ? "community" : "platform"), [m, g] = X.useState([]), [v, k] = X.useState([]), [w, E] = X.useState(!0), C = X.useCallback(async () => {
    if (!s?.id) return;
    const { data: P } = await Pt.from("community_leaderboards").select("*").eq("community_id", s.id).order("rank", { ascending: !0 }).limit(10);
    g(P || []);
  }, [s?.id]), O = X.useCallback(async () => {
    const { data: P } = await Pt.from("community_leaderboards").select("user_id, username, games_played, total_score, total_questions, avg_percentage").order("avg_percentage", { ascending: !1 }).limit(50);
    if (!P) {
      k([]);
      return;
    }
    const B = {};
    P.forEach((U) => {
      B[U.user_id] || (B[U.user_id] = {
        user_id: U.user_id,
        username: U.username,
        games_played: 0,
        total_score: 0,
        total_questions: 0
      }), B[U.user_id].games_played += U.games_played, B[U.user_id].total_score += U.total_score, B[U.user_id].total_questions += U.total_questions;
    });
    const Z = Object.values(B).map((U) => ({
      ...U,
      avg_percentage: U.total_questions > 0 ? Math.round(U.total_score / U.total_questions * 1e3) / 10 : 0
    })).sort((U, ie) => ie.avg_percentage - U.avg_percentage).slice(0, 10);
    k(Z);
  }, []);
  X.useEffect(() => {
    (async () => {
      E(!0), await Promise.all([
        u ? C() : Promise.resolve(),
        c ? O() : Promise.resolve()
      ]), E(!1);
    })();
  }, [u, c, C, O]), X.useCallback(async () => {
    await Promise.all([
      u ? C() : Promise.resolve(),
      c ? O() : Promise.resolve()
    ]);
  }, [u, c, C, O]);
  const A = h === "community" ? m : v, j = (P) => ({
    flex: 1,
    padding: "0.625rem",
    backgroundColor: P ? "var(--embed-primary)" : "transparent",
    color: "var(--embed-text)",
    border: P ? "none" : "1px solid rgba(255,255,255,0.1)",
    borderRadius: "6px",
    fontSize: "0.85rem",
    fontWeight: "600",
    fontFamily: "var(--embed-font)",
    cursor: "pointer",
    opacity: P ? 1 : 0.6
  }), M = (P) => P === 1 ? "🥇" : P === 2 ? "🥈" : P === 3 ? "🥉" : `#${P}`;
  return /* @__PURE__ */ I.jsxs("div", { style: { maxWidth: "600px", margin: "0 auto" }, children: [
    /* @__PURE__ */ I.jsx("h3", { style: { fontSize: "1rem", margin: "0 0 0.75rem", opacity: 0.7 }, children: "Leaderboard" }),
    u && c && /* @__PURE__ */ I.jsxs("div", { style: { display: "flex", gap: "0.5rem", marginBottom: "1rem" }, children: [
      /* @__PURE__ */ I.jsx("button", { style: j(h === "community"), onClick: () => f("community"), children: s?.name || "Community" }),
      /* @__PURE__ */ I.jsx("button", { style: j(h === "platform"), onClick: () => f("platform"), children: "All Communities" })
    ] }),
    w && /* @__PURE__ */ I.jsx("div", { style: { textAlign: "center", padding: "1rem", opacity: 0.5 }, children: "Loading leaderboard..." }),
    !w && A.length === 0 && /* @__PURE__ */ I.jsx("div", { style: { textAlign: "center", padding: "1rem", opacity: 0.5, fontSize: "0.9rem" }, children: "No scores yet. Be the first!" }),
    !w && A.length > 0 && /* @__PURE__ */ I.jsx("div", { children: A.map((P, B) => {
      const Z = B + 1, U = i && P.user_id === i.id;
      return /* @__PURE__ */ I.jsxs(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "0.625rem 0.75rem",
            marginBottom: "0.375rem",
            borderRadius: "8px",
            backgroundColor: U ? "rgba(107,45,94,0.2)" : "var(--embed-surface)",
            border: U ? "2px solid var(--embed-primary)" : "2px solid transparent"
          },
          children: [
            /* @__PURE__ */ I.jsx("div", { style: { width: "2.5rem", fontWeight: "700", fontSize: "0.9rem" }, children: M(Z) }),
            /* @__PURE__ */ I.jsxs("div", { style: { flex: 1, fontSize: "0.9rem" }, children: [
              P.username || "Anonymous",
              U && /* @__PURE__ */ I.jsx("span", { style: { opacity: 0.5, fontSize: "0.75rem" }, children: " (you)" })
            ] }),
            /* @__PURE__ */ I.jsxs("div", { style: { textAlign: "right", fontSize: "0.8rem" }, children: [
              /* @__PURE__ */ I.jsxs("div", { style: { fontWeight: "600" }, children: [
                P.avg_percentage,
                "%"
              ] }),
              /* @__PURE__ */ I.jsxs("div", { style: { opacity: 0.5, fontSize: "0.7rem" }, children: [
                P.games_played,
                " games"
              ] })
            ] })
          ]
        },
        P.user_id || B
      );
    }) }),
    !i && !w && /* @__PURE__ */ I.jsxs("p", { style: { textAlign: "center", fontSize: "0.75rem", opacity: 0.4, marginTop: "0.75rem" }, children: [
      "Sign in to appear on the leaderboard • Playing as ",
      a
    ] })
  ] });
}
ih.refetch = null;
function oy({ params: s, onQuizStarted: r, onQuizCompleted: i, onAnswered: a }) {
  const { community: u, questions: c, loading: h, error: f, refetch: m } = Vg(s), { user: g, login: v, register: k, logout: w, claimAnonymousScores: E } = Hg(), [C, O] = X.useState("loading"), [A, j] = X.useState([]), [M, P] = X.useState(null), [B, Z] = X.useState(!1), [U, ie] = X.useState(null), ue = X.useRef(null), _e = X.useRef(th()), He = X.useRef(Kg());
  X.useEffect(() => {
    const Ce = () => {
      if (ue.current) {
        const Re = ue.current.scrollHeight;
        window.parent.postMessage({ type: "quiz-embed-resize", height: Re }, "*");
      }
    }, ge = new ResizeObserver(Ce);
    return ue.current && ge.observe(ue.current), Ce(), () => ge.disconnect();
  }, [C]), X.useEffect(() => {
    !h && !f && c.length > 0 && O("quiz");
  }, [h, f, c]);
  const _t = async (Ce) => {
    j(Ce);
    const ge = Gg(Ce);
    if (P(ge), await Jg(Pt, {
      userId: g?.id || null,
      sessionId: _e.current,
      communityId: u?.id,
      score: ge.score,
      totalQuestions: ge.total,
      category: s.category !== "all" ? s.category : null,
      difficulty: s.difficulty,
      answers: Ce.map((Re) => ({
        questionId: Re.questionId,
        selectedAnswer: Re.selectedAnswer,
        correctAnswer: Re.correctAnswer,
        correct: Re.correct
      }))
    }), u?.id) {
      const Re = Zg(u.id);
      ie(Re);
      const Le = u?.settings?.webhook_url;
      Le && ey({
        webhookUrl: Le,
        communitySlug: u.slug,
        communityName: u.name,
        score: ge.score,
        total: ge.total,
        percentage: ge.percentage,
        playerName: g?.user_metadata?.username || He.current,
        isAnonymous: !g,
        streak: Re.count
      });
    }
    i?.({
      score: ge.score,
      total: ge.total,
      percentage: ge.percentage,
      streak: U?.count,
      communitySlug: u?.slug
    }), O("results");
  }, Ze = () => {
    j([]), P(null), O("loading"), m();
  };
  return /* @__PURE__ */ I.jsxs(
    "div",
    {
      ref: ue,
      style: {
        backgroundColor: "var(--embed-bg)",
        color: "var(--embed-text)",
        fontFamily: "var(--embed-font)",
        minHeight: "100vh",
        padding: "1rem",
        boxSizing: "border-box"
      },
      children: [
        C === "loading" && h && /* @__PURE__ */ I.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px" }, children: /* @__PURE__ */ I.jsxs("div", { style: { textAlign: "center" }, children: [
          /* @__PURE__ */ I.jsx("div", { style: { fontSize: "1.5rem", marginBottom: "0.5rem" }, children: "Loading quiz..." }),
          /* @__PURE__ */ I.jsx("div", { style: { opacity: 0.6 }, children: u?.name || s.community })
        ] }) }),
        f && /* @__PURE__ */ I.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px" }, children: /* @__PURE__ */ I.jsxs("div", { style: { textAlign: "center", maxWidth: "400px" }, children: [
          /* @__PURE__ */ I.jsx("div", { style: { fontSize: "1.25rem", marginBottom: "0.5rem" }, children: "😕" }),
          /* @__PURE__ */ I.jsx("p", { children: f })
        ] }) }),
        C === "quiz" && /* @__PURE__ */ I.jsx(
          ty,
          {
            questions: c,
            community: u,
            timer: s.timer,
            difficulty: s.difficulty,
            onComplete: _t,
            onQuizStarted: r,
            onAnswered: a
          }
        ),
        C === "results" && M && /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
          /* @__PURE__ */ I.jsx(
            iy,
            {
              scoreData: M,
              answers: A,
              questions: c,
              community: u,
              guestName: He.current,
              user: g,
              onPlayAgain: Ze,
              onLoginClick: () => Z(!0),
              onLogout: w,
              streakData: U
            }
          ),
          s.leaderboard !== "none" && /* @__PURE__ */ I.jsx(
            ih,
            {
              community: u,
              leaderboardParam: s.leaderboard,
              user: g,
              guestName: He.current
            }
          )
        ] }),
        B && /* @__PURE__ */ I.jsx(
          sy,
          {
            onClose: () => Z(!1),
            onLogin: v,
            onRegister: k,
            onSuccess: () => E(_e.current)
          }
        )
      ]
    }
  );
}
const wt = {
  // Theme
  bg: "#0D0D0D",
  surface: "#1A1A2E",
  primary: "#6B2D5E",
  accent: "#8B0000",
  text: "#F5F0EB",
  font: "Inter",
  // Behavior
  count: 10,
  difficulty: "mixed",
  timer: 0,
  leaderboard: "community",
  category: "all",
  // Version — stability contract for embed clients
  v: 1
}, ay = [5, 10, 15, 20], ly = ["easy", "medium", "hard", "mixed"], uy = ["community", "platform", "both"];
function cy(s) {
  if (!s) return !1;
  const r = s.startsWith("#") ? s.slice(1) : s;
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(r);
}
function ii(s, r) {
  if (!s) return r;
  const i = decodeURIComponent(s);
  return cy(i) ? i.startsWith("#") ? i : `#${i}` : r;
}
function dy(s) {
  const r = [], i = s.get("community")?.trim() || null;
  i || r.push("Missing required parameter: community");
  const a = ii(s.get("bg"), wt.bg), u = ii(s.get("surface"), wt.surface), c = ii(s.get("primary"), wt.primary), h = ii(s.get("accent"), wt.accent), f = ii(s.get("text"), wt.text), m = s.get("font")?.trim() || wt.font;
  let g = parseInt(s.get("count"), 10);
  (isNaN(g) || !ay.includes(g)) && (g = wt.count);
  let v = s.get("difficulty")?.toLowerCase().trim();
  ly.includes(v) || (v = wt.difficulty);
  let k = parseInt(s.get("timer"), 10);
  (isNaN(k) || k < 0) && (k = wt.timer);
  let w = s.get("leaderboard")?.toLowerCase().trim();
  uy.includes(w) || (w = wt.leaderboard);
  const E = s.get("category")?.trim() || wt.category;
  let C = parseInt(s.get("v"), 10);
  return (isNaN(C) || C < 1) && (C = wt.v), {
    params: {
      community: i,
      bg: a,
      surface: u,
      primary: c,
      accent: h,
      text: f,
      font: m,
      count: g,
      difficulty: v,
      timer: k,
      leaderboard: w,
      category: E,
      v: C
    },
    errors: r
  };
}
function hy(s, r) {
  s.style.setProperty("--embed-bg", r.bg), s.style.setProperty("--embed-surface", r.surface), s.style.setProperty("--embed-primary", r.primary), s.style.setProperty("--embed-accent", r.accent), s.style.setProperty("--embed-text", r.text);
  const i = r.font && r.font !== "Inter" ? `"${r.font.replace(/\+/g, " ")}", sans-serif` : "sans-serif";
  s.style.setProperty("--embed-font", i);
}
function fy(s, r) {
  if (!r || r === "Inter") return;
  const i = "quiz-embed-google-font", a = s.getElementById(i);
  a && a.remove();
  const u = r.replace(/\+/g, " "), c = document.createElement("link");
  c.id = i, c.rel = "stylesheet", c.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(u)}:wght@400;600;700&display=swap`, s.appendChild(c);
}
const py = `
  :host {
    display: block;
    min-height: 200px;
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

  .quiz-embed-mount {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: inherit;
    background-color: var(--embed-bg, #0D0D0D);
    color: var(--embed-text, #F5F0EB);
    font-family: var(--embed-font, sans-serif);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .quiz-embed-error {
    padding: 2rem;
    font-family: sans-serif;
    color: #F5F0EB;
    background-color: #0D0D0D;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .quiz-embed-error h2 {
    margin: 0 0 1rem;
    font-size: 1.25rem;
  }

  .quiz-embed-error p {
    margin: 0.5rem 0;
  }

  .quiz-embed-error code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.15em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }

  .quiz-embed-error .hint {
    opacity: 0.6;
    font-size: 0.875rem;
  }
`;
function my(s) {
  return new CustomEvent("quiz:started", {
    bubbles: !0,
    composed: !0,
    detail: s
    // { communitySlug, questionCount, difficulty }
  });
}
function gy(s) {
  return new CustomEvent("quiz:completed", {
    bubbles: !0,
    composed: !0,
    detail: s
    // { score, total, percentage, streak, communitySlug }
  });
}
function yy(s) {
  return new CustomEvent("quiz:answer", {
    bubbles: !0,
    composed: !0,
    detail: s
    // { questionIndex, correct, selectedAnswer, correctAnswer }
  });
}
const Dd = [
  "community",
  "bg",
  "surface",
  "primary",
  "accent",
  "text",
  "font",
  "count",
  "difficulty",
  "timer",
  "leaderboard",
  "category",
  "v"
];
class vy extends HTMLElement {
  static get observedAttributes() {
    return Dd;
  }
  constructor() {
    super(), this._shadow = this.attachShadow({ mode: "open" }), this._root = null, this._mounted = !1;
    const r = document.createElement("style");
    r.textContent = py, this._shadow.appendChild(r), this._mountEl = document.createElement("div"), this._mountEl.className = "quiz-embed-mount", this._shadow.appendChild(this._mountEl);
  }
  connectedCallback() {
    this._mounted = !0, this._render();
  }
  disconnectedCallback() {
    this._mounted = !1, this._root && (this._root.unmount(), this._root = null);
  }
  attributeChangedCallback() {
    this._mounted && this._render();
  }
  /**
   * Read all attributes and convert to a URLSearchParams-compatible object,
   * then run through the same parseEmbedParams() validator the iframe path uses.
   */
  _getParams() {
    const r = new URLSearchParams();
    for (const i of Dd) {
      const a = this.getAttribute(i);
      a !== null && r.set(i, a);
    }
    return dy(r);
  }
  /**
   * Render React into the shadow root, or show an error if community is missing.
   */
  _render() {
    const { params: r, errors: i } = this._getParams();
    if (!r.community || i.length > 0) {
      this._unmountReact(), this._mountEl.innerHTML = `
        <div class="quiz-embed-error">
          <div>
            <h2>Quiz Embed</h2>
            <p>Missing required attribute: <code>community</code></p>
            <p class="hint">Add <code>community="your-slug"</code> to the element.</p>
          </div>
        </div>
      `;
      return;
    }
    hy(this._mountEl, r), fy(this._shadow, r.font), this._root || (this._mountEl.innerHTML = "", this._root = cp.createRoot(this._mountEl)), this._root.render(
      ip.createElement(oy, {
        params: r,
        onQuizStarted: (a) => this.dispatchEvent(my(a)),
        onQuizCompleted: (a) => this.dispatchEvent(gy(a)),
        onAnswered: (a) => this.dispatchEvent(yy(a))
      })
    );
  }
  /**
   * Tear down React root if it exists (used before switching to error HTML).
   */
  _unmountReact() {
    this._root && (this._root.unmount(), this._root = null);
  }
}
customElements.get("quiz-embed") || customElements.define("quiz-embed", vy);
export {
  vy as QuizEmbedElement
};
