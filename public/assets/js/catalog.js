(function() {
  var __webpack_modules__ = {
    /***/
    9402: (
      /***/
      function(module, exports) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !function(t, e) {
          if ("object" == typeof module.exports) {
            if (!t.document) throw new Error("HC-Sticky requires a browser to run.");
            module.exports = e(t);
          } else true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = e(t), __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
        }("undefined" != typeof window ? window : this, function(V) {
          var i, n, Q = V.document, U = { top: 0, bottom: 0, bottomEnd: 0, innerTop: 0, innerSticker: null, stickyClass: "sticky", stickTo: null, followScroll: true, responsive: null, mobileFirst: false, onStart: null, onStop: null, onBeforeResize: null, onResize: null, resizeDebounce: 100, disable: false }, Y = function(t, e, o) {
            console.warn("%cHC Sticky:%c " + o + "%c '" + t + "'%c is now deprecated and will be removed. Use%c '" + e + "'%c instead.", "color: #fa253b", "color: default", "color: #5595c6", "color: default", "color: #5595c6", "color: default");
          }, $ = function(n2, f) {
            var o = this;
            if (f = f || {}, !(n2 = "string" == typeof n2 ? Q.querySelector(n2) : n2)) return false;
            f.queries && Y("queries", "responsive", "option"), f.queryFlow && Y("queryFlow", "mobileFirst", "option");
            var p = {}, u = $.Helpers, s = n2.parentNode;
            "static" === u.getStyle(s, "position") && (s.style.position = "relative");
            function d(t2) {
              u.isEmptyObject(t2 = t2 || {}) && !u.isEmptyObject(p) || (p = Object.assign({}, U, p, t2));
            }
            function t() {
              return p.disable;
            }
            function e() {
              var t2, e2 = p.responsive || p.queries;
              if (e2) {
                var o2 = V.innerWidth;
                if (t2 = f, (p = Object.assign({}, U, t2 || {})).mobileFirst) for (var i3 in e2) i3 <= o2 && !u.isEmptyObject(e2[i3]) && d(e2[i3]);
                else {
                  var n3, s2 = [];
                  for (n3 in e2) {
                    var r2 = {};
                    r2[n3] = e2[n3], s2.push(r2);
                  }
                  for (var l2 = s2.length - 1; 0 <= l2; l2--) {
                    var a2 = s2[l2], c2 = Object.keys(a2)[0];
                    o2 <= c2 && !u.isEmptyObject(a2[c2]) && d(a2[c2]);
                  }
                }
              }
            }
            function i2() {
              var t2, e2, o2, i3;
              I.css = (t2 = n2, e2 = u.getCascadedStyle(t2), o2 = u.getStyle(t2), i3 = { height: t2.offsetHeight + "px", left: e2.left, right: e2.right, top: e2.top, bottom: e2.bottom, position: o2.position, display: o2.display, verticalAlign: o2.verticalAlign, boxSizing: o2.boxSizing, marginLeft: e2.marginLeft, marginRight: e2.marginRight, marginTop: e2.marginTop, marginBottom: e2.marginBottom, paddingLeft: e2.paddingLeft, paddingRight: e2.paddingRight }, e2.float && (i3.float = e2.float || "none"), e2.cssFloat && (i3.cssFloat = e2.cssFloat || "none"), o2.MozBoxSizing && (i3.MozBoxSizing = o2.MozBoxSizing), i3.width = "auto" !== e2.width ? e2.width : "border-box" === i3.boxSizing || "border-box" === i3.MozBoxSizing ? t2.offsetWidth + "px" : o2.width, i3), P.init(), y = !(!p.stickTo || !("document" === p.stickTo || p.stickTo.nodeType && 9 === p.stickTo.nodeType || "object" == typeof p.stickTo && p.stickTo instanceof ("undefined" != typeof HTMLDocument ? HTMLDocument : Document))), h = p.stickTo ? y ? Q : u.getElement(p.stickTo) : s, z = (R = function() {
                var t3 = n2.offsetHeight + (parseInt(I.css.marginTop) || 0) + (parseInt(I.css.marginBottom) || 0), e3 = (z || 0) - t3;
                return -1 <= e3 && e3 <= 1 ? z : t3;
              })(), v = (H = function() {
                return y ? Math.max(Q.documentElement.clientHeight, Q.body.scrollHeight, Q.documentElement.scrollHeight, Q.body.offsetHeight, Q.documentElement.offsetHeight) : h.offsetHeight;
              })(), S = y ? 0 : u.offset(h).top, w = p.stickTo ? y ? 0 : u.offset(s).top : S, E = V.innerHeight, N = n2.offsetTop - (parseInt(I.css.marginTop) || 0), b = u.getElement(p.innerSticker), L = isNaN(p.top) && -1 < p.top.indexOf("%") ? parseFloat(p.top) / 100 * E : p.top, k = isNaN(p.bottom) && -1 < p.bottom.indexOf("%") ? parseFloat(p.bottom) / 100 * E : p.bottom, x = b ? b.offsetTop : p.innerTop || 0, T = isNaN(p.bottomEnd) && -1 < p.bottomEnd.indexOf("%") ? parseFloat(p.bottomEnd) / 100 * E : p.bottomEnd, j = S - L + x + N;
            }
            function r() {
              z = R(), v = H(), O = S + v - L - T, C = E < z;
              var t2, e2 = V.pageYOffset || Q.documentElement.scrollTop, o2 = u.offset(n2).top, i3 = o2 - e2;
              B = e2 < F ? "up" : "down", A = e2 - F, j < (F = e2) ? O + L + (C ? k : 0) - (p.followScroll && C ? 0 : L) <= e2 + z - x - (E - (j - x) < z - x && p.followScroll && 0 < (t2 = z - E - x) ? t2 : 0) ? I.release({ position: "absolute", bottom: w + s.offsetHeight - O - L }) : C && p.followScroll ? "down" == B ? i3 + z + k <= E + 0.9 ? I.stick({ bottom: k }) : "fixed" === I.position && I.release({ position: "absolute", top: o2 - L - j - A + x }) : Math.ceil(i3 + x) < 0 && "fixed" === I.position ? I.release({ position: "absolute", top: o2 - L - j + x - A }) : e2 + L - x <= o2 && I.stick({ top: L - x }) : I.stick({ top: L - x }) : I.release({ stop: true });
            }
            function l() {
              M && (V.removeEventListener("scroll", r, u.supportsPassive), M = false);
            }
            function a() {
              null !== n2.offsetParent && "none" !== u.getStyle(n2, "display") ? (i2(), v < z ? l() : (r(), M || (V.addEventListener("scroll", r, u.supportsPassive), M = true))) : l();
            }
            function c() {
              n2.style.position = "", n2.style.left = "", n2.style.top = "", n2.style.bottom = "", n2.style.width = "", n2.classList ? n2.classList.remove(p.stickyClass) : n2.className = n2.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), I.css = {}, !(I.position = null) === P.isAttached && P.detach();
            }
            function g() {
              c(), e(), (t() ? l : a)();
            }
            function m() {
              q && (V.removeEventListener("resize", W, u.supportsPassive), q = false), l();
            }
            var y, h, b, v, S, w, E, L, k, x, T, j, O, C, z, N, H, R, A, B, I = { css: {}, position: null, stick: function(t2) {
              t2 = t2 || {}, u.hasClass(n2, p.stickyClass) || (false === P.isAttached && P.attach(), I.position = "fixed", n2.style.position = "fixed", n2.style.left = P.offsetLeft + "px", n2.style.width = P.width, void 0 === t2.bottom ? n2.style.bottom = "auto" : n2.style.bottom = t2.bottom + "px", void 0 === t2.top ? n2.style.top = "auto" : n2.style.top = t2.top + "px", n2.classList ? n2.classList.add(p.stickyClass) : n2.className += " " + p.stickyClass, p.onStart && p.onStart.call(n2, Object.assign({}, p)));
            }, release: function(t2) {
              var e2;
              (t2 = t2 || {}).stop = t2.stop || false, true !== t2.stop && "fixed" !== I.position && null !== I.position && (void 0 === t2.top && void 0 === t2.bottom || void 0 !== t2.top && (parseInt(u.getStyle(n2, "top")) || 0) === t2.top || void 0 !== t2.bottom && (parseInt(u.getStyle(n2, "bottom")) || 0) === t2.bottom) || (true === t2.stop ? true === P.isAttached && P.detach() : false === P.isAttached && P.attach(), e2 = t2.position || I.css.position, I.position = e2, n2.style.position = e2, n2.style.left = true === t2.stop ? I.css.left : P.positionLeft + "px", n2.style.width = ("absolute" !== e2 ? I.css : P).width, void 0 === t2.bottom ? n2.style.bottom = true === t2.stop ? "" : "auto" : n2.style.bottom = t2.bottom + "px", void 0 === t2.top ? n2.style.top = true === t2.stop ? "" : "auto" : n2.style.top = t2.top + "px", n2.classList ? n2.classList.remove(p.stickyClass) : n2.className = n2.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), p.onStop && p.onStop.call(n2, Object.assign({}, p)));
            } }, P = { el: Q.createElement("div"), offsetLeft: null, positionLeft: null, width: null, isAttached: false, init: function() {
              for (var t2 in P.el.className = "sticky-spacer", I.css) P.el.style[t2] = I.css[t2];
              P.el.style["z-index"] = "-1";
              var e2 = u.getStyle(n2);
              P.offsetLeft = u.offset(n2).left - (parseInt(e2.marginLeft) || 0), P.positionLeft = u.position(n2).left, P.width = u.getStyle(n2, "width");
            }, attach: function() {
              s.insertBefore(P.el, n2), P.isAttached = true;
            }, detach: function() {
              P.el = s.removeChild(P.el), P.isAttached = false;
            } }, F = V.pageYOffset || Q.documentElement.scrollTop, M = false, q = false, D = function() {
              p.onBeforeResize && p.onBeforeResize.call(n2, Object.assign({}, p)), g(), p.onResize && p.onResize.call(n2, Object.assign({}, p));
            }, W = p.resizeDebounce ? u.debounce(D, p.resizeDebounce) : D, D = function() {
              q || (V.addEventListener("resize", W, u.supportsPassive), q = true), e(), (t() ? l : a)();
            };
            this.options = function(t2) {
              return t2 ? p[t2] : Object.assign({}, p);
            }, this.refresh = g, this.update = function(t2) {
              d(t2), f = Object.assign({}, f, t2 || {}), g();
            }, this.attach = D, this.detach = m, this.destroy = function() {
              m(), c();
            }, this.triggerMethod = function(t2, e2) {
              "function" == typeof o[t2] && o[t2](e2);
            }, this.reinit = function() {
              Y("reinit", "refresh", "method"), g();
            }, d(f), D(), V.addEventListener("load", g);
          };
          return void 0 !== V.jQuery && (i = V.jQuery, n = "hcSticky", i.fn.extend({ hcSticky: function(e, o) {
            return this.length ? "options" === e ? i.data(this.get(0), n).options() : this.each(function() {
              var t = i.data(this, n);
              t ? t.triggerMethod(e, o) : (t = new $(this, e), i.data(this, n, t));
            }) : this;
          } })), V.hcSticky = V.hcSticky || $, $;
        }), function(a) {
          var t = a.hcSticky, c = a.document;
          "function" != typeof Object.assign && Object.defineProperty(Object, "assign", { value: function(t2, e2) {
            if (null == t2) throw new TypeError("Cannot convert undefined or null to object");
            for (var o2 = Object(t2), i = 1; i < arguments.length; i++) {
              var n2 = arguments[i];
              if (null != n2) for (var s2 in n2) Object.prototype.hasOwnProperty.call(n2, s2) && (o2[s2] = n2[s2]);
            }
            return o2;
          }, writable: true, configurable: true }), Array.prototype.forEach || (Array.prototype.forEach = function(t2) {
            var e2, o2;
            if (null == this) throw new TypeError("this is null or not defined");
            var i, n2 = Object(this), s2 = n2.length >>> 0;
            if ("function" != typeof t2) throw new TypeError(t2 + " is not a function");
            for (1 < arguments.length && (e2 = arguments[1]), o2 = 0; o2 < s2; ) o2 in n2 && (i = n2[o2], t2.call(e2, i, o2, n2)), o2++;
          });
          var e = false;
          try {
            var o = Object.defineProperty({}, "passive", { get: function() {
              e = { passive: false };
            } });
            a.addEventListener("testPassive", null, o), a.removeEventListener("testPassive", null, o);
          } catch (t2) {
          }
          function n(t2, e2) {
            return a.getComputedStyle ? e2 ? c.defaultView.getComputedStyle(t2, null).getPropertyValue(e2) : c.defaultView.getComputedStyle(t2, null) : t2.currentStyle ? e2 ? t2.currentStyle[e2.replace(/-\w/g, function(t3) {
              return t3.toUpperCase().replace("-", "");
            })] : t2.currentStyle : void 0;
          }
          function s(t2) {
            var e2 = t2.getBoundingClientRect(), o2 = a.pageYOffset || c.documentElement.scrollTop, t2 = a.pageXOffset || c.documentElement.scrollLeft;
            return { top: e2.top + o2, left: e2.left + t2 };
          }
          t.Helpers = { supportsPassive: e, isEmptyObject: function(t2) {
            for (var e2 in t2) return false;
            return true;
          }, debounce: function(i, n2, s2) {
            var r;
            return function() {
              var t2 = this, e2 = arguments, o2 = s2 && !r;
              clearTimeout(r), r = setTimeout(function() {
                r = null, s2 || i.apply(t2, e2);
              }, n2), o2 && i.apply(t2, e2);
            };
          }, hasClass: function(t2, e2) {
            return t2.classList ? t2.classList.contains(e2) : new RegExp("(^| )" + e2 + "( |$)", "gi").test(t2.className);
          }, offset: s, position: function(t2) {
            var e2 = t2.offsetParent, o2 = s(e2), i = s(t2), e2 = n(e2), t2 = n(t2);
            return o2.top += parseInt(e2.borderTopWidth) || 0, o2.left += parseInt(e2.borderLeftWidth) || 0, { top: i.top - o2.top - (parseInt(t2.marginTop) || 0), left: i.left - o2.left - (parseInt(t2.marginLeft) || 0) };
          }, getElement: function(t2) {
            var e2 = null;
            return "string" == typeof t2 ? e2 = c.querySelector(t2) : a.jQuery && t2 instanceof a.jQuery && t2.length ? e2 = t2[0] : t2 instanceof Element && (e2 = t2), e2;
          }, getStyle: n, getCascadedStyle: function(t2) {
            var e2, o2 = t2.cloneNode(true);
            o2.style.display = "none", Array.prototype.slice.call(o2.querySelectorAll('input[type="radio"]')).forEach(function(t3) {
              t3.removeAttribute("name");
            }), t2.parentNode.insertBefore(o2, t2.nextSibling), o2.currentStyle ? e2 = o2.currentStyle : a.getComputedStyle && (e2 = c.defaultView.getComputedStyle(o2, null));
            var i, n2, s2, r = {};
            for (i in e2) !isNaN(i) || "string" != typeof e2[i] && "number" != typeof e2[i] || (r[i] = e2[i]);
            if (Object.keys(r).length < 3) for (var l in r = {}, e2) isNaN(l) || (r[e2[l].replace(/-\w/g, function(t3) {
              return t3.toUpperCase().replace("-", "");
            })] = e2.getPropertyValue(e2[l]));
            return r.margin || "auto" !== r.marginLeft ? r.margin || r.marginLeft !== r.marginRight || r.marginLeft !== r.marginTop || r.marginLeft !== r.marginBottom || (r.margin = r.marginLeft) : r.margin = "auto", r.margin || "0px" !== r.marginLeft || "0px" !== r.marginRight || (s2 = (n2 = t2.offsetLeft - t2.parentNode.offsetLeft) - (parseInt(r.left) || 0) - (parseInt(r.right) || 0), 0 != (s2 = t2.parentNode.offsetWidth - t2.offsetWidth - n2 - (parseInt(r.right) || 0) + (parseInt(r.left) || 0) - s2) && 1 != s2 || (r.margin = "auto")), o2.parentNode.removeChild(o2), o2 = null, r;
          } };
        }(window);
      }
    ),
    /***/
    940: (
      /***/
      function() {
        document.addEventListener("DOMContentLoaded", () => {
          const body = document.body;
          const form = body.querySelector(".catalogFilters");
          if (!form) return;
          const inputs = Array.from(form.querySelectorAll(".catalogFilterInput"));
          const tooltip = body.querySelector(".catalogFiltersTooltip");
          function setLeft() {
            tooltip.style.left = Math.floor(form.getBoundingClientRect().width + form.getBoundingClientRect().left) + "px";
          }
          function hide() {
            tooltip.classList.remove("_active");
          }
          function handleChange(event) {
            const input = event.target;
            tooltip.style.top = Math.floor(input.getBoundingClientRect().top) + "px";
            setLeft();
            tooltip.classList.add("_active");
          }
          inputs.forEach((input) => {
            input.addEventListener("change", handleChange);
            input.addEventListener("input", handleChange);
            input.addEventListener("blue", handleChange);
          });
          setLeft();
          hide();
          window.addEventListener("scroll", hide, {
            passive: true
          });
          window.addEventListener("resize", () => {
            hide();
            setLeft();
          }, {
            passive: true
          });
          body.addEventListener("click", (event) => {
            const target = event.target;
            hide();
            if (target.closest(".catalogSortSummary")) {
              const sort = target.closest(".catalogSort");
              const list = sort.querySelector(".catalogSortList");
              const overlay = document.body.querySelector(".catalogSortOverlay");
              list.classList.toggle("_active");
              overlay.classList.toggle("_active");
            }
            if (target.closest(".catalogSortItem")) {
              const sort = target.closest(".catalogSort");
              const current = sort.querySelector(".catalogSortCurrent");
              current.textContent = target.closest(".catalogSortItem").textContent.trim().toLowerCase();
              setTimeout(() => {
                const overlay = body.querySelector(".catalogSortOverlay");
                const list = sort.querySelector(".catalogSortList");
                overlay.classList.remove("_active");
                list.classList.remove("_active");
              }, 150);
            }
            if (!target.closest(".catalogSort")) {
              const elements = Array.from(body.querySelectorAll(".catalogSort"));
              elements.forEach((sort) => {
                const overlay = body.querySelector(".catalogSortOverlay");
                const list = sort.querySelector(".catalogSortList");
                overlay.classList.remove("_active");
                sort.classList.remove("_active");
                list.classList.remove("_active");
              });
            }
          });
        }, {
          passive: true,
          once: true
        });
      }
    ),
    /***/
    9706: (
      /***/
      function() {
        document.addEventListener("DOMContentLoaded", () => {
          const body = document.body;
          body.addEventListener("click", (event) => {
            const target = event.target;
            if (target.closest(".catalogNavTabMore")) {
              const parent = target.closest(".catalogNavTabs");
              const parentHidden = parent.querySelector(".catalogNavTabsHidden");
              const button = target.closest(".catalogNavTabMore");
              parent.classList.toggle("_active");
              parentHidden.classList.toggle("_active");
              button.classList.toggle("_active");
            }
          }, {
            passive: true
          });
        }, {
          passive: true,
          once: true
        });
      }
    )
    /******/
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== void 0) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed
      /******/
      // no module.loaded needed
      /******/
      exports: {}
      /******/
    };
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
  }
  !function() {
    __webpack_require__.n = function(module) {
      var getter = module && module.__esModule ? (
        /******/
        function() {
          return module["default"];
        }
      ) : (
        /******/
        function() {
          return module;
        }
      );
      __webpack_require__.d(getter, { a: getter });
      return getter;
    };
  }();
  !function() {
    __webpack_require__.d = function(exports, definition) {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  }();
  !function() {
    __webpack_require__.g = function() {
      if (typeof globalThis === "object") return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if (typeof window === "object") return window;
      }
    }();
  }();
  !function() {
    __webpack_require__.o = function(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
  }();
  !function() {
    var scriptUrl;
    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    var document2 = __webpack_require__.g.document;
    if (!scriptUrl && document2) {
      if (document2.currentScript && document2.currentScript.tagName.toUpperCase() === "SCRIPT")
        scriptUrl = document2.currentScript.src;
      if (!scriptUrl) {
        var scripts = document2.getElementsByTagName("script");
        if (scripts.length) {
          var i = scripts.length - 1;
          while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
        }
      }
    }
    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    __webpack_require__.p = scriptUrl + "../";
  }();
  var __webpack_exports__ = {};
  !function() {
    "use strict";
    ;
    var PipsMode;
    (function(PipsMode2) {
      PipsMode2["Range"] = "range";
      PipsMode2["Steps"] = "steps";
      PipsMode2["Positions"] = "positions";
      PipsMode2["Count"] = "count";
      PipsMode2["Values"] = "values";
    })(PipsMode || (PipsMode = {}));
    var PipsType;
    (function(PipsType2) {
      PipsType2[PipsType2["None"] = -1] = "None";
      PipsType2[PipsType2["NoValue"] = 0] = "NoValue";
      PipsType2[PipsType2["LargeValue"] = 1] = "LargeValue";
      PipsType2[PipsType2["SmallValue"] = 2] = "SmallValue";
    })(PipsType || (PipsType = {}));
    function isValidFormatter(entry) {
      return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
      return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
      el.parentElement.removeChild(el);
    }
    function isSet(value) {
      return value !== null && value !== void 0;
    }
    function preventDefault(e) {
      e.preventDefault();
    }
    function unique(array) {
      return array.filter(function(a) {
        return !this[a] ? this[a] = true : false;
      }, {});
    }
    function closest(value, to) {
      return Math.round(value / to) * to;
    }
    function offset(elem, orientation) {
      var rect = elem.getBoundingClientRect();
      var doc = elem.ownerDocument;
      var docElem = doc.documentElement;
      var pageOffset = getPageOffset(doc);
      if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
      }
      return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    function isNumeric(a) {
      return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    function addClassFor(element, className, duration) {
      if (duration > 0) {
        addClass(element, className);
        setTimeout(function() {
          removeClass(element, className);
        }, duration);
      }
    }
    function limit(a) {
      return Math.max(Math.min(a, 100), 0);
    }
    function asArray(a) {
      return Array.isArray(a) ? a : [a];
    }
    function countDecimals(numStr) {
      numStr = String(numStr);
      var pieces = numStr.split(".");
      return pieces.length > 1 ? pieces[1].length : 0;
    }
    function addClass(el, className) {
      if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
      } else {
        el.className += " " + className;
      }
    }
    function removeClass(el, className) {
      if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
    }
    function hasClass(el, className) {
      return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    function getPageOffset(doc) {
      var supportPageOffset = window.pageXOffset !== void 0;
      var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
      var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
      var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
      return {
        x,
        y
      };
    }
    function getActions() {
      return window.navigator.pointerEnabled ? {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
      } : window.navigator.msPointerEnabled ? {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
      } : {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
      };
    }
    function getSupportsPassive() {
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, "passive", {
          get: function() {
            supportsPassive = true;
          }
        });
        window.addEventListener("test", null, opts);
      } catch (e) {
      }
      return supportsPassive;
    }
    function getSupportsTouchActionNone() {
      return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    function subRangeRatio(pa, pb) {
      return 100 / (pb - pa);
    }
    function fromPercentage(range, value, startRange) {
      return value * 100 / (range[startRange + 1] - range[startRange]);
    }
    function toPercentage(range, value) {
      return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    function isPercentage(range, value) {
      return value * (range[1] - range[0]) / 100 + range[0];
    }
    function getJ(value, arr) {
      var j = 1;
      while (value >= arr[j]) {
        j += 1;
      }
      return j;
    }
    function toStepping(xVal, xPct, value) {
      if (value >= xVal.slice(-1)[0]) {
        return 100;
      }
      var j = getJ(value, xVal);
      var va = xVal[j - 1];
      var vb = xVal[j];
      var pa = xPct[j - 1];
      var pb = xPct[j];
      return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    function fromStepping(xVal, xPct, value) {
      if (value >= 100) {
        return xVal.slice(-1)[0];
      }
      var j = getJ(value, xPct);
      var va = xVal[j - 1];
      var vb = xVal[j];
      var pa = xPct[j - 1];
      var pb = xPct[j];
      return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    function getStep(xPct, xSteps, snap, value) {
      if (value === 100) {
        return value;
      }
      var j = getJ(value, xPct);
      var a = xPct[j - 1];
      var b = xPct[j];
      if (snap) {
        if (value - a > (b - a) / 2) {
          return b;
        }
        return a;
      }
      if (!xSteps[j - 1]) {
        return value;
      }
      return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    var Spectrum = (
      /** @class */
      function() {
        function Spectrum2(entry, snap, singleStep) {
          this.xPct = [];
          this.xVal = [];
          this.xSteps = [];
          this.xNumSteps = [];
          this.xHighestCompleteStep = [];
          this.xSteps = [singleStep || false];
          this.xNumSteps = [false];
          this.snap = snap;
          var index;
          var ordered = [];
          Object.keys(entry).forEach(function(index2) {
            ordered.push([asArray(entry[index2]), index2]);
          });
          ordered.sort(function(a, b) {
            return a[0][0] - b[0][0];
          });
          for (index = 0; index < ordered.length; index++) {
            this.handleEntryPoint(ordered[index][1], ordered[index][0]);
          }
          this.xNumSteps = this.xSteps.slice(0);
          for (index = 0; index < this.xNumSteps.length; index++) {
            this.handleStepPoint(index, this.xNumSteps[index]);
          }
        }
        Spectrum2.prototype.getDistance = function(value) {
          var distances = [];
          for (var index = 0; index < this.xNumSteps.length - 1; index++) {
            distances[index] = fromPercentage(this.xVal, value, index);
          }
          return distances;
        };
        Spectrum2.prototype.getAbsoluteDistance = function(value, distances, direction) {
          var xPct_index = 0;
          if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
              xPct_index++;
            }
          } else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
          }
          if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
          }
          if (distances === null) {
            distances = [];
          }
          var start_factor;
          var rest_factor = 1;
          var rest_rel_distance = distances[xPct_index];
          var range_pct = 0;
          var rel_range_distance = 0;
          var abs_distance_counter = 0;
          var range_counter = 0;
          if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
          } else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
          }
          while (rest_rel_distance > 0) {
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
              rel_range_distance = range_pct * start_factor;
              rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
              start_factor = 1;
            } else {
              rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
              rest_factor = 0;
            }
            if (direction) {
              abs_distance_counter = abs_distance_counter - rel_range_distance;
              if (this.xPct.length + range_counter >= 1) {
                range_counter--;
              }
            } else {
              abs_distance_counter = abs_distance_counter + rel_range_distance;
              if (this.xPct.length - range_counter >= 1) {
                range_counter++;
              }
            }
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
          }
          return value + abs_distance_counter;
        };
        Spectrum2.prototype.toStepping = function(value) {
          value = toStepping(this.xVal, this.xPct, value);
          return value;
        };
        Spectrum2.prototype.fromStepping = function(value) {
          return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum2.prototype.getStep = function(value) {
          value = getStep(this.xPct, this.xSteps, this.snap, value);
          return value;
        };
        Spectrum2.prototype.getDefaultStep = function(value, isDown, size) {
          var j = getJ(value, this.xPct);
          if (value === 100 || isDown && value === this.xPct[j - 1]) {
            j = Math.max(j - 1, 1);
          }
          return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum2.prototype.getNearbySteps = function(value) {
          var j = getJ(value, this.xPct);
          return {
            stepBefore: {
              startValue: this.xVal[j - 2],
              step: this.xNumSteps[j - 2],
              highestStep: this.xHighestCompleteStep[j - 2]
            },
            thisStep: {
              startValue: this.xVal[j - 1],
              step: this.xNumSteps[j - 1],
              highestStep: this.xHighestCompleteStep[j - 1]
            },
            stepAfter: {
              startValue: this.xVal[j],
              step: this.xNumSteps[j],
              highestStep: this.xHighestCompleteStep[j]
            }
          };
        };
        Spectrum2.prototype.countStepDecimals = function() {
          var stepDecimals = this.xNumSteps.map(countDecimals);
          return Math.max.apply(null, stepDecimals);
        };
        Spectrum2.prototype.hasNoSize = function() {
          return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        Spectrum2.prototype.convert = function(value) {
          return this.getStep(this.toStepping(value));
        };
        Spectrum2.prototype.handleEntryPoint = function(index, value) {
          var percentage;
          if (index === "min") {
            percentage = 0;
          } else if (index === "max") {
            percentage = 100;
          } else {
            percentage = parseFloat(index);
          }
          if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
          }
          this.xPct.push(percentage);
          this.xVal.push(value[0]);
          var value1 = Number(value[1]);
          if (!percentage) {
            if (!isNaN(value1)) {
              this.xSteps[0] = value1;
            }
          } else {
            this.xSteps.push(isNaN(value1) ? false : value1);
          }
          this.xHighestCompleteStep.push(0);
        };
        Spectrum2.prototype.handleStepPoint = function(i, n) {
          if (!n) {
            return;
          }
          if (this.xVal[i] === this.xVal[i + 1]) {
            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
            return;
          }
          this.xSteps[i] = fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
          var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
          var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
          var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
          this.xHighestCompleteStep[i] = step;
        };
        return Spectrum2;
      }()
    );
    var defaultFormatter = {
      to: function(value) {
        return value === void 0 ? "" : value.toFixed(2);
      },
      from: Number
    };
    var cssClasses = {
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
      valueSub: "value-sub"
    };
    var INTERNAL_EVENT_NS = {
      tooltips: ".__tooltips",
      aria: ".__aria"
    };
    function testStep(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'step' is not numeric.");
      }
      parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      }
      parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
      }
      parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      }
      parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
      if (typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider: 'range' is not an object.");
      }
      if (entry.min === void 0 || entry.max === void 0) {
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      }
      parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
      entry = asArray(entry);
      if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider: 'start' option is incorrect.");
      }
      parsed.handles = entry.length;
      parsed.start = entry;
    }
    function testSnap(parsed, entry) {
      if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
      }
      parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
      if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
      }
      parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
      if (typeof entry !== "number") {
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
      }
      parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
      var connect = [false];
      var i;
      if (entry === "lower") {
        entry = [true, false];
      } else if (entry === "upper") {
        entry = [false, true];
      }
      if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
          connect.push(entry);
        }
        connect.push(false);
      } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
      } else {
        connect = entry;
      }
      parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
      switch (entry) {
        case "horizontal":
          parsed.ort = 0;
          break;
        case "vertical":
          parsed.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }
    function testMargin(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'margin' option must be numeric.");
      }
      if (entry === 0) {
        return;
      }
      parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'limit' option must be numeric.");
      }
      parsed.limit = parsed.spectrum.getDistance(entry);
      if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
      }
    }
    function testPadding(parsed, entry) {
      var index;
      if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      }
      if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      }
      if (entry === 0) {
        return;
      }
      if (!Array.isArray(entry)) {
        entry = [entry, entry];
      }
      parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
      for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
          throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        }
      }
      var totalPadding = entry[0] + entry[1];
      var firstValue = parsed.spectrum.xVal[0];
      var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
      if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
      }
    }
    function testDirection(parsed, entry) {
      switch (entry) {
        case "ltr":
          parsed.dir = 0;
          break;
        case "rtl":
          parsed.dir = 1;
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }
    function testBehaviour(parsed, entry) {
      if (typeof entry !== "string") {
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      }
      var tap = entry.indexOf("tap") >= 0;
      var drag = entry.indexOf("drag") >= 0;
      var fixed = entry.indexOf("fixed") >= 0;
      var snap = entry.indexOf("snap") >= 0;
      var hover = entry.indexOf("hover") >= 0;
      var unconstrained = entry.indexOf("unconstrained") >= 0;
      var invertConnects = entry.indexOf("invert-connects") >= 0;
      var dragAll = entry.indexOf("drag-all") >= 0;
      var smoothSteps = entry.indexOf("smooth-steps") >= 0;
      if (fixed) {
        if (parsed.handles !== 2) {
          throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
      }
      if (invertConnects && parsed.handles !== 2) {
        throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
      }
      if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
      }
      parsed.events = {
        tap: tap || snap,
        drag,
        dragAll,
        smoothSteps,
        fixed,
        snap,
        hover,
        unconstrained,
        invertConnects
      };
    }
    function testTooltips(parsed, entry) {
      if (entry === false) {
        return;
      }
      if (entry === true || isValidPartialFormatter(entry)) {
        parsed.tooltips = [];
        for (var i = 0; i < parsed.handles; i++) {
          parsed.tooltips.push(entry);
        }
      } else {
        entry = asArray(entry);
        if (entry.length !== parsed.handles) {
          throw new Error("noUiSlider: must pass a formatter for all handles.");
        }
        entry.forEach(function(formatter) {
          if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
            throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
          }
        });
        parsed.tooltips = entry;
      }
    }
    function testHandleAttributes(parsed, entry) {
      if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a attributes for all handles.");
      }
      parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
      if (!isValidPartialFormatter(entry)) {
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      }
      parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
      if (!isValidFormatter(entry)) {
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
      }
      parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
      if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
      }
      parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
      parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
      if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      }
      parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
      if (typeof entry !== "object") {
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
      }
      if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};
        Object.keys(entry).forEach(function(key) {
          parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        });
      } else {
        parsed.cssClasses = entry;
      }
    }
    function testOptions(options) {
      var parsed = {
        margin: null,
        limit: null,
        padding: null,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter
      };
      var tests = {
        step: { r: false, t: testStep },
        keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
        keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
        keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
        start: { r: true, t: testStart },
        connect: { r: true, t: testConnect },
        direction: { r: true, t: testDirection },
        snap: { r: false, t: testSnap },
        animate: { r: false, t: testAnimate },
        animationDuration: { r: false, t: testAnimationDuration },
        range: { r: true, t: testRange },
        orientation: { r: false, t: testOrientation },
        margin: { r: false, t: testMargin },
        limit: { r: false, t: testLimit },
        padding: { r: false, t: testPadding },
        behaviour: { r: true, t: testBehaviour },
        ariaFormat: { r: false, t: testAriaFormat },
        format: { r: false, t: testFormat },
        tooltips: { r: false, t: testTooltips },
        keyboardSupport: { r: true, t: testKeyboardSupport },
        documentElement: { r: false, t: testDocumentElement },
        cssPrefix: { r: true, t: testCssPrefix },
        cssClasses: { r: true, t: testCssClasses },
        handleAttributes: { r: false, t: testHandleAttributes }
      };
      var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10
      };
      if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
      }
      Object.keys(tests).forEach(function(name) {
        if (!isSet(options[name]) && defaults[name] === void 0) {
          if (tests[name].r) {
            throw new Error("noUiSlider: '" + name + "' is required.");
          }
          return;
        }
        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
      });
      parsed.pips = options.pips;
      var d = document.createElement("div");
      var msPrefix = d.style.msTransform !== void 0;
      var noPrefix = d.style.transform !== void 0;
      parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
      var styles = [
        ["left", "top"],
        ["right", "bottom"]
      ];
      parsed.style = styles[parsed.dir][parsed.ort];
      return parsed;
    }
    function scope(target, options, originalOptions) {
      var actions = getActions();
      var supportsTouchActionNone = getSupportsTouchActionNone();
      var supportsPassive = supportsTouchActionNone && getSupportsPassive();
      var scope_Target = target;
      var scope_Base;
      var scope_ConnectBase;
      var scope_Handles;
      var scope_Connects;
      var scope_Pips;
      var scope_Tooltips;
      var scope_Spectrum = options.spectrum;
      var scope_Values = [];
      var scope_Locations = [];
      var scope_HandleNumbers = [];
      var scope_ActiveHandlesCount = 0;
      var scope_Events = {};
      var scope_ConnectsInverted = false;
      var scope_Document = target.ownerDocument;
      var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
      var scope_Body = scope_Document.body;
      var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
      function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");
        if (className) {
          addClass(div, className);
        }
        addTarget.appendChild(div);
        return div;
      }
      function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", String(handleNumber));
        if (options.keyboardSupport) {
          handle.setAttribute("tabindex", "0");
          handle.addEventListener("keydown", function(event) {
            return eventKeydown(event, handleNumber);
          });
        }
        if (options.handleAttributes !== void 0) {
          var attributes_1 = options.handleAttributes[handleNumber];
          Object.keys(attributes_1).forEach(function(attribute) {
            handle.setAttribute(attribute, attributes_1[attribute]);
          });
        }
        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
        if (handleNumber === 0) {
          addClass(handle, options.cssClasses.handleLower);
        } else if (handleNumber === options.handles - 1) {
          addClass(handle, options.cssClasses.handleUpper);
        }
        origin.handle = handle;
        return origin;
      }
      function addConnect(base, add) {
        if (!add) {
          return false;
        }
        return addNodeTo(base, options.cssClasses.connect);
      }
      function addElements(connectOptions, base) {
        scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
        for (var i = 0; i < options.handles; i++) {
          scope_Handles.push(addOrigin(base, i));
          scope_HandleNumbers[i] = i;
          scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
        }
      }
      function addSlider(addTarget) {
        addClass(addTarget, options.cssClasses.target);
        if (options.dir === 0) {
          addClass(addTarget, options.cssClasses.ltr);
        } else {
          addClass(addTarget, options.cssClasses.rtl);
        }
        if (options.ort === 0) {
          addClass(addTarget, options.cssClasses.horizontal);
        } else {
          addClass(addTarget, options.cssClasses.vertical);
        }
        var textDirection = getComputedStyle(addTarget).direction;
        if (textDirection === "rtl") {
          addClass(addTarget, options.cssClasses.textDirectionRtl);
        } else {
          addClass(addTarget, options.cssClasses.textDirectionLtr);
        }
        return addNodeTo(addTarget, options.cssClasses.base);
      }
      function addTooltip(handle, handleNumber) {
        if (!options.tooltips || !options.tooltips[handleNumber]) {
          return false;
        }
        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
      }
      function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
      }
      function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
      }
      function disable(handleNumber) {
        if (handleNumber !== null && handleNumber !== void 0) {
          scope_Handles[handleNumber].setAttribute("disabled", "");
          scope_Handles[handleNumber].handle.removeAttribute("tabindex");
        } else {
          scope_Target.setAttribute("disabled", "");
          scope_Handles.forEach(function(handle) {
            handle.handle.removeAttribute("tabindex");
          });
        }
      }
      function enable(handleNumber) {
        if (handleNumber !== null && handleNumber !== void 0) {
          scope_Handles[handleNumber].removeAttribute("disabled");
          scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
        } else {
          scope_Target.removeAttribute("disabled");
          scope_Handles.forEach(function(handle) {
            handle.removeAttribute("disabled");
            handle.handle.setAttribute("tabindex", "0");
          });
        }
      }
      function removeTooltips() {
        if (scope_Tooltips) {
          removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
          scope_Tooltips.forEach(function(tooltip) {
            if (tooltip) {
              removeElement(tooltip);
            }
          });
          scope_Tooltips = null;
        }
      }
      function tooltips() {
        removeTooltips();
        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function(values, handleNumber, unencoded) {
          if (!scope_Tooltips || !options.tooltips) {
            return;
          }
          if (scope_Tooltips[handleNumber] === false) {
            return;
          }
          var formattedValue = values[handleNumber];
          if (options.tooltips[handleNumber] !== true) {
            formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
          }
          scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
      }
      function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function(values, handleNumber, unencoded, tap, positions) {
          scope_HandleNumbers.forEach(function(index) {
            var handle = scope_Handles[index];
            var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
            var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
            var now = positions[index];
            var text = String(options.ariaFormat.to(unencoded[index]));
            min = scope_Spectrum.fromStepping(min).toFixed(1);
            max = scope_Spectrum.fromStepping(max).toFixed(1);
            now = scope_Spectrum.fromStepping(now).toFixed(1);
            handle.children[0].setAttribute("aria-valuemin", min);
            handle.children[0].setAttribute("aria-valuemax", max);
            handle.children[0].setAttribute("aria-valuenow", now);
            handle.children[0].setAttribute("aria-valuetext", text);
          });
        });
      }
      function getGroup(pips2) {
        if (pips2.mode === PipsMode.Range || pips2.mode === PipsMode.Steps) {
          return scope_Spectrum.xVal;
        }
        if (pips2.mode === PipsMode.Count) {
          if (pips2.values < 2) {
            throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
          }
          var interval = pips2.values - 1;
          var spread = 100 / interval;
          var values = [];
          while (interval--) {
            values[interval] = interval * spread;
          }
          values.push(100);
          return mapToRange(values, pips2.stepped);
        }
        if (pips2.mode === PipsMode.Positions) {
          return mapToRange(pips2.values, pips2.stepped);
        }
        if (pips2.mode === PipsMode.Values) {
          if (pips2.stepped) {
            return pips2.values.map(function(value) {
              return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
            });
          }
          return pips2.values;
        }
        return [];
      }
      function mapToRange(values, stepped) {
        return values.map(function(value) {
          return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
      }
      function generateSpread(pips2) {
        function safeIncrement(value, increment) {
          return Number((value + increment).toFixed(7));
        }
        var group = getGroup(pips2);
        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0;
        group = unique(group.slice().sort(function(a, b) {
          return a - b;
        }));
        if (group[0] !== firstInRange) {
          group.unshift(firstInRange);
          ignoreFirst = true;
        }
        if (group[group.length - 1] !== lastInRange) {
          group.push(lastInRange);
          ignoreLast = true;
        }
        group.forEach(function(current, index) {
          var step;
          var i;
          var q;
          var low = current;
          var high = group[index + 1];
          var newPct;
          var pctDifference;
          var pctPos;
          var type;
          var steps;
          var realSteps;
          var stepSize;
          var isSteps = pips2.mode === PipsMode.Steps;
          if (isSteps) {
            step = scope_Spectrum.xNumSteps[index];
          }
          if (!step) {
            step = high - low;
          }
          if (high === void 0) {
            high = low;
          }
          step = Math.max(step, 1e-7);
          for (i = low; i <= high; i = safeIncrement(i, step)) {
            newPct = scope_Spectrum.toStepping(i);
            pctDifference = newPct - prevPct;
            steps = pctDifference / (pips2.density || 1);
            realSteps = Math.round(steps);
            stepSize = pctDifference / realSteps;
            for (q = 1; q <= realSteps; q += 1) {
              pctPos = prevPct + q * stepSize;
              indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
            }
            type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
            if (!index && ignoreFirst && i !== high) {
              type = 0;
            }
            if (!(i === high && ignoreLast)) {
              indexes[newPct.toFixed(5)] = [i, type];
            }
            prevPct = newPct;
          }
        });
        return indexes;
      }
      function addMarking(spread, filterFunc, formatter) {
        var _a, _b;
        var element = scope_Document.createElement("div");
        var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, _a);
        var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, _b);
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
        function getClasses(type, source) {
          var a = source === options.cssClasses.value;
          var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
          var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
          return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }
        function addSpread(offset2, value, type) {
          type = filterFunc ? filterFunc(value, type) : type;
          if (type === PipsType.None) {
            return;
          }
          var node = addNodeTo(element, false);
          node.className = getClasses(type, options.cssClasses.marker);
          node.style[options.style] = offset2 + "%";
          if (type > PipsType.NoValue) {
            node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.value);
            node.setAttribute("data-value", String(value));
            node.style[options.style] = offset2 + "%";
            node.innerHTML = String(formatter.to(value));
          }
        }
        Object.keys(spread).forEach(function(offset2) {
          addSpread(offset2, spread[offset2][0], spread[offset2][1]);
        });
        return element;
      }
      function removePips() {
        if (scope_Pips) {
          removeElement(scope_Pips);
          scope_Pips = null;
        }
      }
      function pips(pips2) {
        removePips();
        var spread = generateSpread(pips2);
        var filter = pips2.filter;
        var format = pips2.format || {
          to: function(value) {
            return String(Math.round(value));
          }
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
      }
      function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = "offset" + ["Width", "Height"][options.ort];
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
      }
      function attachEvent(events, element, callback, data) {
        var method = function(event) {
          var e = fixEvent(event, data.pageOffset, data.target || element);
          if (!e) {
            return false;
          }
          if (isSliderDisabled() && !data.doNotReject) {
            return false;
          }
          if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
            return false;
          }
          if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) {
            return false;
          }
          if (data.hover && e.buttons) {
            return false;
          }
          if (!supportsPassive) {
            e.preventDefault();
          }
          e.calcPoint = e.points[options.ort];
          callback(e, data);
          return;
        };
        var methods = [];
        events.split(" ").forEach(function(eventName) {
          element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
          methods.push([eventName, method]);
        });
        return methods;
      }
      function fixEvent(e, pageOffset, eventTarget) {
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x = 0;
        var y = 0;
        if (e.type.indexOf("MSPointer") === 0) {
          pointer = true;
        }
        if (e.type === "mousedown" && !e.buttons && !e.touches) {
          return false;
        }
        if (touch) {
          var isTouchOnTarget = function(checkTouch) {
            var target2 = checkTouch.target;
            return target2 === eventTarget || eventTarget.contains(target2) || e.composed && e.composedPath().shift() === eventTarget;
          };
          if (e.type === "touchstart") {
            var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
            if (targetTouches.length > 1) {
              return false;
            }
            x = targetTouches[0].pageX;
            y = targetTouches[0].pageY;
          } else {
            var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
            if (!targetTouch) {
              return false;
            }
            x = targetTouch.pageX;
            y = targetTouch.pageY;
          }
        }
        pageOffset = pageOffset || getPageOffset(scope_Document);
        if (mouse || pointer) {
          x = e.clientX + pageOffset.x;
          y = e.clientY + pageOffset.y;
        }
        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer;
        return e;
      }
      function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = location * 100 / baseSize();
        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
      }
      function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function(handle, index) {
          if (isHandleDisabled(index)) {
            return;
          }
          var handlePosition = scope_Locations[index];
          var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
          var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
          var isCloser = differenceWithThisHandle < smallestDifference;
          var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
          if (isCloser || isCloserAfter || clickAtEdge) {
            handleNumber = index;
            smallestDifference = differenceWithThisHandle;
          }
        });
        return handleNumber;
      }
      function documentLeave(event, data) {
        if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
          eventEnd(event, data);
        }
      }
      function eventMove(event, data) {
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
          return eventEnd(event, data);
        }
        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
        var proposal = movement * 100 / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
      }
      function eventEnd(event, data) {
        if (data.handle) {
          removeClass(data.handle, options.cssClasses.active);
          scope_ActiveHandlesCount -= 1;
        }
        data.listeners.forEach(function(c) {
          scope_DocumentElement.removeEventListener(c[0], c[1]);
        });
        if (scope_ActiveHandlesCount === 0) {
          removeClass(scope_Target, options.cssClasses.drag);
          setZindex();
          if (event.cursor) {
            scope_Body.style.cursor = "";
            scope_Body.removeEventListener("selectstart", preventDefault);
          }
        }
        if (options.events.smoothSteps) {
          data.handleNumbers.forEach(function(handleNumber) {
            setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
          });
          data.handleNumbers.forEach(function(handleNumber) {
            fireEvent("update", handleNumber);
          });
        }
        data.handleNumbers.forEach(function(handleNumber) {
          fireEvent("change", handleNumber);
          fireEvent("set", handleNumber);
          fireEvent("end", handleNumber);
        });
      }
      function eventStart(event, data) {
        if (data.handleNumbers.some(isHandleDisabled)) {
          return;
        }
        var handle;
        if (data.handleNumbers.length === 1) {
          var handleOrigin = scope_Handles[data.handleNumbers[0]];
          handle = handleOrigin.children[0];
          scope_ActiveHandlesCount += 1;
          addClass(handle, options.cssClasses.active);
        }
        event.stopPropagation();
        var listeners = [];
        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
          // The event target has changed so we need to propagate the original one so that we keep
          // relying on it to extract target touches.
          target: event.target,
          handle,
          connect: data.connect,
          listeners,
          startCalcPoint: event.calcPoint,
          baseSize: baseSize(),
          pageOffset: event.pageOffset,
          handleNumbers: data.handleNumbers,
          buttonsProperty: event.buttons,
          locations: scope_Locations.slice()
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
          target: event.target,
          handle,
          listeners,
          doNotReject: true,
          handleNumbers: data.handleNumbers
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
          target: event.target,
          handle,
          listeners,
          doNotReject: true,
          handleNumbers: data.handleNumbers
        });
        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
        if (event.cursor) {
          scope_Body.style.cursor = getComputedStyle(event.target).cursor;
          if (scope_Handles.length > 1) {
            addClass(scope_Target, options.cssClasses.drag);
          }
          scope_Body.addEventListener("selectstart", preventDefault, false);
        }
        data.handleNumbers.forEach(function(handleNumber) {
          fireEvent("start", handleNumber);
        });
      }
      function eventTap(event) {
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal);
        if (handleNumber === false) {
          return;
        }
        if (!options.events.snap) {
          addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        if (!options.events.snap) {
          fireEvent("change", handleNumber, true);
          fireEvent("set", handleNumber, true);
        } else {
          eventStart(event, { handleNumbers: [handleNumber] });
        }
      }
      function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function(targetEvent) {
          if ("hover" === targetEvent.split(".")[0]) {
            scope_Events[targetEvent].forEach(function(callback) {
              callback.call(scope_Self, value);
            });
          }
        });
      }
      function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
          return false;
        }
        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];
        if (options.dir && !options.ort) {
          horizontalKeys.reverse();
        } else if (options.ort && !options.dir) {
          verticalKeys.reverse();
          largeStepKeys.reverse();
        }
        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];
        if (!isDown && !isUp && !isMin && !isMax) {
          return true;
        }
        event.preventDefault();
        var to;
        if (isUp || isDown) {
          var direction = isDown ? 0 : 1;
          var steps = getNextStepsForHandle(handleNumber);
          var step = steps[direction];
          if (step === null) {
            return false;
          }
          if (step === false) {
            step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
          }
          if (isLargeUp || isLargeDown) {
            step *= options.keyboardPageMultiplier;
          } else {
            step *= options.keyboardMultiplier;
          }
          step = Math.max(step, 1e-7);
          step = (isDown ? -1 : 1) * step;
          to = scope_Values[handleNumber] + step;
        } else if (isMax) {
          to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        } else {
          to = options.spectrum.xVal[0];
        }
        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
      }
      function bindSliderEvents(behaviour) {
        if (!behaviour.fixed) {
          scope_Handles.forEach(function(handle, index) {
            attachEvent(actions.start, handle.children[0], eventStart, {
              handleNumbers: [index]
            });
          });
        }
        if (behaviour.tap) {
          attachEvent(actions.start, scope_Base, eventTap, {});
        }
        if (behaviour.hover) {
          attachEvent(actions.move, scope_Base, eventHover, {
            hover: true
          });
        }
        if (behaviour.drag) {
          scope_Connects.forEach(function(connect, index) {
            if (connect === false || index === 0 || index === scope_Connects.length - 1) {
              return;
            }
            var handleBefore = scope_Handles[index - 1];
            var handleAfter = scope_Handles[index];
            var eventHolders = [connect];
            var handlesToDrag = [handleBefore, handleAfter];
            var handleNumbersToDrag = [index - 1, index];
            addClass(connect, options.cssClasses.draggable);
            if (behaviour.fixed) {
              eventHolders.push(handleBefore.children[0]);
              eventHolders.push(handleAfter.children[0]);
            }
            if (behaviour.dragAll) {
              handlesToDrag = scope_Handles;
              handleNumbersToDrag = scope_HandleNumbers;
            }
            eventHolders.forEach(function(eventHolder) {
              attachEvent(actions.start, eventHolder, eventStart, {
                handles: handlesToDrag,
                handleNumbers: handleNumbersToDrag,
                connect
              });
            });
          });
        }
      }
      function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);
        if (namespacedEvent.split(".")[0] === "update") {
          scope_Handles.forEach(function(a, index) {
            fireEvent("update", index);
          });
        }
      }
      function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
      }
      function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function(bind) {
          var tEvent = bind.split(".")[0];
          var tNamespace = bind.substring(tEvent.length);
          if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
            if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
              delete scope_Events[bind];
            }
          }
        });
      }
      function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function(targetEvent) {
          var eventType = targetEvent.split(".")[0];
          if (eventName === eventType) {
            scope_Events[targetEvent].forEach(function(callback) {
              callback.call(
                // Use the slider public API as the scope ('this')
                scope_Self,
                // Return values as array, so arg_1[arg_2] is always valid.
                scope_Values.map(options.format.to),
                // Handle index, 0 or 1
                handleNumber,
                // Un-formatted slider values
                scope_Values.slice(),
                // Event is fired by tap, true or false
                tap || false,
                // Left offset of the handle, in relation to the slider
                scope_Locations.slice(),
                // add the slider public API to an accessible parameter when this is unavailable
                scope_Self
              );
            });
          }
        });
      }
      function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
        var distance;
        if (scope_Handles.length > 1 && !options.events.unconstrained) {
          if (lookBackward && handleNumber > 0) {
            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
            to = Math.max(to, distance);
          }
          if (lookForward && handleNumber < scope_Handles.length - 1) {
            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
            to = Math.min(to, distance);
          }
        }
        if (scope_Handles.length > 1 && options.limit) {
          if (lookBackward && handleNumber > 0) {
            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
            to = Math.min(to, distance);
          }
          if (lookForward && handleNumber < scope_Handles.length - 1) {
            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
            to = Math.max(to, distance);
          }
        }
        if (options.padding) {
          if (handleNumber === 0) {
            distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
            to = Math.max(to, distance);
          }
          if (handleNumber === scope_Handles.length - 1) {
            distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
            to = Math.min(to, distance);
          }
        }
        if (!smoothSteps) {
          to = scope_Spectrum.getStep(to);
        }
        to = limit(to);
        if (to === reference[handleNumber] && !getValue) {
          return false;
        }
        return to;
      }
      function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
      }
      function moveHandles(upward, proposal, locations, handleNumbers, connect) {
        var proposals = locations.slice();
        var firstHandle = handleNumbers[0];
        var smoothSteps = options.events.smoothSteps;
        var b = [!upward, upward];
        var f = [upward, !upward];
        handleNumbers = handleNumbers.slice();
        if (upward) {
          handleNumbers.reverse();
        }
        if (handleNumbers.length > 1) {
          handleNumbers.forEach(function(handleNumber, o) {
            var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
            if (to === false) {
              proposal = 0;
            } else {
              proposal = to - proposals[handleNumber];
              proposals[handleNumber] = to;
            }
          });
        } else {
          b = f = [true];
        }
        var state = false;
        handleNumbers.forEach(function(handleNumber, o) {
          state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
        });
        if (state) {
          handleNumbers.forEach(function(handleNumber) {
            fireEvent("update", handleNumber);
            fireEvent("slide", handleNumber);
          });
          if (connect != void 0) {
            fireEvent("drag", firstHandle);
          }
        }
      }
      function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
      }
      function updateHandlePosition(handleNumber, to) {
        scope_Locations[handleNumber] = to;
        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = transformDirection(to, 0) - scope_DirOffset;
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        if (options.events.invertConnects && scope_Locations.length > 1) {
          var handlesAreInOrder = scope_Locations.every(function(position, index, locations) {
            return index === 0 || position >= locations[index - 1];
          });
          if (scope_ConnectsInverted !== !handlesAreInOrder) {
            invertConnects();
            return;
          }
        }
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
        if (scope_ConnectsInverted) {
          updateConnect(handleNumber - 1);
          updateConnect(handleNumber + 2);
        }
      }
      function setZindex() {
        scope_HandleNumbers.forEach(function(handleNumber) {
          var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
          var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
          scope_Handles[handleNumber].style.zIndex = String(zIndex);
        });
      }
      function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
        if (!exactInput) {
          to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
        }
        if (to === false) {
          return false;
        }
        updateHandlePosition(handleNumber, to);
        return true;
      }
      function updateConnect(index) {
        if (!scope_Connects[index]) {
          return;
        }
        var locations = scope_Locations.slice();
        if (scope_ConnectsInverted) {
          locations.sort(function(a, b) {
            return a - b;
          });
        }
        var l = 0;
        var h = 100;
        if (index !== 0) {
          l = locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
          h = locations[index];
        }
        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
      }
      function resolveToValue(to, handleNumber) {
        if (to === null || to === false || to === void 0) {
          return scope_Locations[handleNumber];
        }
        if (typeof to === "number") {
          to = String(to);
        }
        to = options.format.from(to);
        if (to !== false) {
          to = scope_Spectrum.toStepping(to);
        }
        if (to === false || isNaN(to)) {
          return scope_Locations[handleNumber];
        }
        return to;
      }
      function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === void 0;
        fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
        if (options.animate && !isInit) {
          addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        scope_HandleNumbers.forEach(function(handleNumber) {
          setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
        if (isInit && scope_Spectrum.hasNoSize()) {
          exactInput = true;
          scope_Locations[0] = 0;
          if (scope_HandleNumbers.length > 1) {
            var space_1 = 100 / (scope_HandleNumbers.length - 1);
            scope_HandleNumbers.forEach(function(handleNumber) {
              scope_Locations[handleNumber] = handleNumber * space_1;
            });
          }
        }
        for (; i < scope_HandleNumbers.length; ++i) {
          scope_HandleNumbers.forEach(function(handleNumber) {
            setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
          });
        }
        setZindex();
        scope_HandleNumbers.forEach(function(handleNumber) {
          fireEvent("update", handleNumber);
          if (values[handleNumber] !== null && fireSetEvent) {
            fireEvent("set", handleNumber);
          }
        });
      }
      function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
      }
      function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        handleNumber = Number(handleNumber);
        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
          throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
        }
        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);
        if (fireSetEvent) {
          fireEvent("set", handleNumber);
        }
      }
      function valueGet(unencoded) {
        if (unencoded === void 0) {
          unencoded = false;
        }
        if (unencoded) {
          return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
        }
        var values = scope_Values.map(options.format.to);
        if (values.length === 1) {
          return values[0];
        }
        return values;
      }
      function destroy() {
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);
        Object.keys(options.cssClasses).forEach(function(key) {
          removeClass(scope_Target, options.cssClasses[key]);
        });
        while (scope_Target.firstChild) {
          scope_Target.removeChild(scope_Target.firstChild);
        }
        delete scope_Target.noUiSlider;
      }
      function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null;
        if (options.snap) {
          return [
            value - nearbySteps.stepBefore.startValue || null,
            nearbySteps.stepAfter.startValue - value || null
          ];
        }
        if (increment !== false) {
          if (value + increment > nearbySteps.stepAfter.startValue) {
            increment = nearbySteps.stepAfter.startValue - value;
          }
        }
        if (value > nearbySteps.thisStep.startValue) {
          decrement = nearbySteps.thisStep.step;
        } else if (nearbySteps.stepBefore.step === false) {
          decrement = false;
        } else {
          decrement = value - nearbySteps.stepBefore.highestStep;
        }
        if (location === 100) {
          increment = null;
        } else if (location === 0) {
          decrement = null;
        }
        var stepDecimals = scope_Spectrum.countStepDecimals();
        if (increment !== null && increment !== false) {
          increment = Number(increment.toFixed(stepDecimals));
        }
        if (decrement !== null && decrement !== false) {
          decrement = Number(decrement.toFixed(stepDecimals));
        }
        return [decrement, increment];
      }
      function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
      }
      function updateOptions(optionsToUpdate, fireSetEvent) {
        var v = valueGet();
        var updateAble = [
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
          "connect"
        ];
        updateAble.forEach(function(name) {
          if (optionsToUpdate[name] !== void 0) {
            originalOptions[name] = optionsToUpdate[name];
          }
        });
        var newOptions = testOptions(originalOptions);
        updateAble.forEach(function(name) {
          if (optionsToUpdate[name] !== void 0) {
            options[name] = newOptions[name];
          }
        });
        scope_Spectrum = newOptions.spectrum;
        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding;
        if (options.pips) {
          pips(options.pips);
        } else {
          removePips();
        }
        if (options.tooltips) {
          tooltips();
        } else {
          removeTooltips();
        }
        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        if (optionsToUpdate.connect) {
          updateConnectOption();
        }
      }
      function updateConnectOption() {
        while (scope_ConnectBase.firstChild) {
          scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
        }
        for (var i = 0; i <= options.handles; i++) {
          scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
          updateConnect(i);
        }
        bindSliderEvents({ drag: options.events.drag, fixed: true });
      }
      function invertConnects() {
        scope_ConnectsInverted = !scope_ConnectsInverted;
        testConnect(
          options,
          // inverse the connect boolean array
          options.connect.map(function(b) {
            return !b;
          })
        );
        updateConnectOption();
      }
      function setupSlider() {
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);
        bindSliderEvents(options.events);
        valueSet(options.start);
        if (options.pips) {
          pips(options.pips);
        }
        if (options.tooltips) {
          tooltips();
        }
        aria();
      }
      setupSlider();
      var scope_Self = {
        destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        disable,
        enable,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function(upward, proposal, handleNumbers) {
          moveHandles(upward, proposal, scope_Locations, handleNumbers);
        },
        options: originalOptions,
        updateOptions,
        target: scope_Target,
        removePips,
        removeTooltips,
        getPositions: function() {
          return scope_Locations.slice();
        },
        getTooltips: function() {
          return scope_Tooltips;
        },
        getOrigins: function() {
          return scope_Handles;
        },
        pips
        // Issue #594
      };
      return scope_Self;
    }
    function initialize(target, originalOptions) {
      if (!target || !target.nodeName) {
        throw new Error("noUiSlider: create requires a single element, got: " + target);
      }
      if (target.noUiSlider) {
        throw new Error("noUiSlider: Slider was already initialized.");
      }
      var options = testOptions(originalOptions);
      var api = scope(target, options, originalOptions);
      target.noUiSlider = api;
      return api;
    }
    var nouislider = {
      // Exposed for unit testing, don't use this in your application.
      __spectrum: Spectrum,
      // A reference to the default classes, allows global changes.
      // Use the cssClasses option for changes to one slider.
      cssClasses,
      create: initialize
    };
    ;
    function prepareValue(value) {
      return parseInt(value.trim());
    }
    function getDefaultMin(slider) {
      return prepareValue(slider.getAttribute("data-min"));
    }
    function getDefaultMax(slider) {
      return prepareValue(slider.getAttribute("data-max"));
    }
    function formatNumber(value) {
      return value.toLocaleString();
    }
    function parseFormattedNumber(value) {
      return parseInt(value.replace(/\D/g, ""), 10);
    }
    function initializeSlider(slider, inputMin, inputMax) {
      const getMin = () => slider.getAttribute("data-min") ? prepareValue(slider.getAttribute("data-min")) : 0;
      const getMax = () => slider.getAttribute("data-max") ? prepareValue(slider.getAttribute("data-max")) : 100;
      initialize(slider, {
        start: [
          getMin(),
          getMax()
        ],
        step: 1,
        connect: true,
        range: {
          min: getMin(),
          max: getMax()
        }
      });
      setupSliderUpdate(slider, inputMin, inputMax);
      setupInputListeners(slider, inputMin, inputMax);
    }
    function setupSliderUpdate(slider, inputMin, inputMax) {
      slider.noUiSlider.on("update", (values, handle) => {
        const value = parseInt(values[handle]);
        if (handle === 0) {
          inputMin.value = formatNumber(value);
        } else {
          inputMax.value = formatNumber(value);
        }
      });
    }
    function setupInputListeners(slider, inputMin, inputMax) {
      let typingTimerMin;
      let typingTimerMax;
      const delay = 500;
      inputMin.addEventListener("keyup", () => {
        clearTimeout(typingTimerMin);
        typingTimerMin = setTimeout(() => {
          updateSliderFromInputs(slider, inputMin, inputMax);
        }, delay);
      });
      inputMax.addEventListener("keyup", () => {
        clearTimeout(typingTimerMax);
        typingTimerMax = setTimeout(() => {
          updateSliderFromInputs(slider, inputMin, inputMax);
        }, delay);
      });
    }
    function updateSliderFromInputs(slider, inputMin, inputMax) {
      const minValue = parseFormattedNumber(inputMin.value);
      const maxValue = parseFormattedNumber(inputMax.value);
      if (!isNaN(minValue) && !isNaN(maxValue)) {
        slider.noUiSlider.set([
          minValue,
          maxValue
        ]);
      }
    }
    function resetFilters(sliders) {
      sliders.forEach((slider) => {
        const filter = slider.closest(".catalogFilter");
        const inputMin = filter.querySelector("[data-catalog-filter=input-min]");
        const inputMax = filter.querySelector("[data-catalog-filter=input-max]");
        slider.noUiSlider.reset();
        slider.noUiSlider.set([
          getDefaultMin(slider),
          getDefaultMax(slider)
        ]);
        setTimeout(() => {
          inputMin.value = formatNumber(getDefaultMin(slider));
          inputMax.value = formatNumber(getDefaultMax(slider));
        }, 100);
      });
    }
    document.addEventListener("DOMContentLoaded", () => {
      const sliders = Array.from(document.querySelectorAll("[data-catalog-filter=range]"));
      sliders.forEach((slider) => {
        const filter = slider.closest(".catalogFilter");
        const inputMin = filter.querySelector("[data-catalog-filter=input-min]");
        const inputMax = filter.querySelector("[data-catalog-filter=input-max]");
        initializeSlider(slider, inputMin, inputMax);
      });
      document.body.addEventListener("click", (event) => {
        const target = event.target;
        if (target.closest(".catalogFiltersReset")) {
          resetFilters(sliders);
        }
      }, {
        passive: true
      });
    }, {
      passive: true,
      once: true
    });
    ;
    ;
    var catalogFilters = __webpack_require__(940);
    ;
    function _define_property(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _object_spread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _define_property(target, key, source[key]);
        });
      }
      return target;
    }
    class Details {
      init() {
        this.updateListeners();
        this.updateElements();
      }
      updateElements() {
        const { body } = document;
        const details = Array.from(body.querySelectorAll(this.selectors.details));
        if (details.length > 0) this.elements = this.updateElementsData(details);
      }
      openAll() {
        this.elements.forEach((element) => {
          element.parameters.isOpen = element.details.classList.contains("open");
          if (!element.parameters.isOpen) this.expand(element);
        });
      }
      collapseAll() {
        this.elements.forEach((element) => {
          element.parameters.isOpen = element.details.classList.contains("open");
          if (element.parameters.isOpen) this.shrink(element);
        });
      }
      calculateDuration(startHeight, endHeight) {
        let duration = this.durationMin;
        const valueAddedDuration = Math.abs(endHeight - startHeight);
        duration = duration + valueAddedDuration * this.durationPerHeight;
        if (duration > this.durationMax) duration = this.durationMax;
        duration = Math.round(duration);
        return duration;
      }
      expand(data) {
        data.parameters.isOpening = true;
        data.details.classList.add("is-opening");
        data.content.classList.add("is-opening");
        const startHeight = data.details.offsetHeight + "px";
        const endHeight = data.summary.offsetHeight + data.content.offsetHeight + "px";
        if (data.parameters.animation) data.parameters.animation.cancel();
        data.parameters.animation = data.details.animate({
          height: [
            startHeight,
            endHeight
          ]
        }, {
          duration: this.calculateDuration(data.details.offsetHeight, data.summary.offsetHeight + data.content.offsetHeight),
          easing: this.easing
        });
        data.parameters.animation.onfinish = () => this.onAnimationFinish(data, true);
        data.parameters.animation.oncancel = () => data.parameters.isOpening = false;
      }
      shouldDisable() {
        return window.matchMedia(`(min-width: ${this.options.disableAfter}px)`).matches;
      }
      disable() {
        if (this.shouldDisable()) {
          this.openAll();
          return;
        }
      }
      handleClick(event) {
        const target = event.target;
        const condition = target.closest(this.selectors.summary) || target.closest(this.selectors.button);
        if (condition && !target.closest("a[href]")) {
          event.preventDefault();
          const summary = target.closest(this.selectors.summary);
          const data = this.elements.find((data2) => {
            return data2.summary === summary ? data2 : false;
          });
          data.details.style.overflow = "hidden";
          if (data.parameters.isClosing || !data.parameters.isOpen) {
            this.open(data);
          } else if (data.parameters.isOpening || data.parameters.isOpen) {
            this.shrink(data);
          }
        }
      }
      handleResize() {
        this.updateClickListeners();
      }
      hasVerticalScrollbar(element) {
        return element.scrollHeight > element.clientHeight;
      }
      onAnimationFinish(data, open) {
        data.details.open = open;
        data.parameters.isOpen = open;
        data.parameters.animation = null;
        data.parameters.isClosing = false;
        data.parameters.isOpening = false;
        data.details.style.height = data.details.style.overflow = "";
        this.setupScrollbarStyles(data.details);
        this.updateDetailsStyles(data.details, open);
        this.updateDetailsStyles(data.content, open);
        data.content.classList.remove("is-closing");
        data.content.classList.remove("is-opening");
        data.details.classList.remove("is-closing");
        data.details.classList.remove("is-opening");
      }
      open(data) {
        data.details.style.height = data.details.offsetHeight + "px";
        data.details.open = true;
        window.requestAnimationFrame(() => this.expand(data));
      }
      setupScrollbarStyles(element) {
        const hasVerticalScrollbar = this.hasVerticalScrollbar(element);
        if (hasVerticalScrollbar === false) {
          element.classList.remove(this.selectors.scrollbars.vertical);
        } else {
          element.classList.add(this.selectors.scrollbars.vertical);
        }
      }
      shrink(data) {
        data.parameters.isClosing = true;
        data.details.classList.add("is-closing");
        data.content.classList.add("is-closing");
        const startHeight = data.details.offsetHeight + "px";
        const endHeight = data.summary.offsetHeight + "px";
        if (data.parameters.animation) data.parameters.animation.cancel();
        data.parameters.animation = data.details.animate({
          height: [
            startHeight,
            endHeight
          ]
        }, {
          duration: this.calculateDuration(data.details.offsetHeight, data.summary.offsetHeight),
          easing: this.easing
        });
        data.parameters.animation.onfinish = () => this.onAnimationFinish(data, false);
        data.parameters.animation.oncancel = () => data.parameters.isClosing = false;
      }
      updateClickListeners() {
        if (this.options.disableAfter !== null) {
          document.removeEventListener("click", this.onClick);
          if (this.shouldDisable()) {
            this.openAll();
          } else {
            document.addEventListener("click", this.onClick);
          }
        } else {
          document.removeEventListener("click", this.onClick);
          document.addEventListener("click", this.onClick);
        }
      }
      updateDetailsStyles(element, isOpen) {
        if (isOpen) {
          element.classList.add("open");
        } else {
          element.classList.remove("open");
        }
      }
      updateElementsData(elements) {
        return elements.map((element) => {
          const isOpen = element.classList.contains("open") || element.hasAttribute("open");
          const content = element.querySelector(this.selectors.content);
          if (isOpen) content.classList.add("open");
          return {
            details: element,
            summary: element.querySelector(this.selectors.summary),
            button: element.querySelector(this.selectors.button),
            content,
            parameters: {
              isOpen,
              isClosing: false,
              isOpening: false
            }
          };
        });
      }
      updateListeners() {
        window.removeEventListener("resize", this.onResize);
        window.addEventListener("resize", this.onResize);
        this.updateClickListeners();
      }
      constructor(optionsCustom) {
        _define_property(this, "elements", void 0);
        _define_property(this, "options", void 0);
        _define_property(this, "selectors", void 0);
        _define_property(this, "durationMax", void 0);
        _define_property(this, "durationMin", void 0);
        _define_property(this, "durationPerHeight", void 0);
        _define_property(this, "easing", void 0);
        _define_property(this, "onClick", void 0);
        _define_property(this, "onResize", void 0);
        this.selectors = _object_spread({}, Details.optionsDefault.selectors, optionsCustom === null || optionsCustom === void 0 ? void 0 : optionsCustom.selectors);
        this.elements = [];
        this.durationMin = 250;
        this.durationMax = 500;
        this.durationPerHeight = 0.5;
        this.easing = "ease-in-out";
        this.onClick = this.handleClick.bind(this);
        this.onResize = this.handleResize.bind(this);
        this.options = _object_spread({}, Details.optionsDefault, optionsCustom);
      }
    }
    _define_property(Details, "optionsDefault", {
      preferButtonIfExist: true,
      selectors: {
        details: "[data-details=details]",
        summary: "[data-details=summary]",
        button: "[data-details=button]",
        content: "[data-details=body]",
        scrollbars: {
          vertical: "has-vertical-scrollbar"
        }
      },
      disableAfter: null
    });
    ;
    document.addEventListener("DOMContentLoaded", () => {
      const details = new Details({
        preferButtonIfExist: true,
        selectors: {
          details: ".catalogFilter",
          summary: ".catalogFilterSummary",
          button: ".catalogFilterButton",
          content: ".catalogFilterBody",
          scrollbars: {
            vertical: "has-verticalScrollbar"
          }
        },
        disableAfter: null
      });
      details.init();
    }, {
      passive: true,
      once: true
    });
    var hc_sticky = __webpack_require__(9402);
    var hc_sticky_default = /* @__PURE__ */ __webpack_require__.n(hc_sticky);
    ;
    document.addEventListener("DOMContentLoaded", () => {
      const body = document.body;
      if (body.querySelector(".catalogAside")) {
        new (hc_sticky_default())(".catalogAside", {
          stickTo: ".catalogLayout",
          mobileFirst: true,
          responsive: {
            0: {
              disable: true
            },
            1024: {
              disable: false,
              top: 20
            }
          }
        });
      }
    }, {
      passive: true,
      once: true
    });
    var catalogNav = __webpack_require__(9706);
    ;
    var shape_asher_namespaceObject = __webpack_require__.p + "img/catalog/shape-asher.svg";
    ;
    var shape_baget_namespaceObject = __webpack_require__.p + "img/catalog/shape-baget.svg";
    ;
    var shape_brilliant_namespaceObject = __webpack_require__.p + "img/catalog/shape-brilliant.svg";
    ;
    var shape_corazon_namespaceObject = __webpack_require__.p + "img/catalog/shape-corazon.svg";
    ;
    var shape_izumrud_namespaceObject = __webpack_require__.p + "img/catalog/shape-izumrud.svg";
    ;
    var shape_kushon_namespaceObject = __webpack_require__.p + "img/catalog/shape-kushon.svg";
    ;
    var shape_markiz_namespaceObject = __webpack_require__.p + "img/catalog/shape-markiz.svg";
    ;
    var shape_octagon_namespaceObject = __webpack_require__.p + "img/catalog/shape-octagon.svg";
    ;
    var shape_ovalado_namespaceObject = __webpack_require__.p + "img/catalog/shape-ovalado.svg";
    ;
    var shape_pera_namespaceObject = __webpack_require__.p + "img/catalog/shape-pera.svg";
    ;
    var shape_princesa_namespaceObject = __webpack_require__.p + "img/catalog/shape-princesa.svg";
    ;
    var shape_radiant_namespaceObject = __webpack_require__.p + "img/catalog/shape-radiant.svg";
    ;
    var shape_triangulo_namespaceObject = __webpack_require__.p + "img/catalog/shape-triangulo.svg";
    ;
    var multicolor_namespaceObject = __webpack_require__.p + "img/catalog/multicolor.png";
    ;
    var transparent_namespaceObject = __webpack_require__.p + "img/catalog/transparent.png";
    ;
    ;
  }();
})();
