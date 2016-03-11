var Head_menu = "";
/// <reference path="jquery-1.10.2.min.js" />
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
(function (n) { function i(t) { var i = t || window.event, e = [].slice.call(arguments, 1), r = 0, f = 0, u = 0; return t = n.event.fix(i), t.type = "mousewheel", i.wheelDelta && (r = i.wheelDelta / 120), i.detail && (r = -i.detail / 3), u = r, i.axis !== undefined && i.axis === i.HORIZONTAL_AXIS && (u = 0, f = -1 * r), i.wheelDeltaY !== undefined && (u = i.wheelDeltaY / 120), i.wheelDeltaX !== undefined && (f = i.wheelDeltaX / -120), e.unshift(t, r, f, u), (n.event.dispatch || n.event.handle).apply(this, e) } var t = ["DOMMouseScroll", "mousewheel"], r; if (n.event.fixHooks) for (r = t.length; r;) n.event.fixHooks[t[--r]] = n.event.mouseHooks; n.event.special.mousewheel = { setup: function () { if (this.addEventListener) for (var n = t.length; n;) this.addEventListener(t[--n], i, !1); else this.onmousewheel = i }, teardown: function () { if (this.removeEventListener) for (var n = t.length; n;) this.removeEventListener(t[--n], i, !1); else this.onmousewheel = null } }; n.fn.extend({ mousewheel: function (n) { return n ? this.bind("mousewheel", n) : this.trigger("mousewheel") }, unmousewheel: function (n) { return this.unbind("mousewheel", n) } }) })(jQuery); var pluginNS = "mCustomScrollbar", pluginPfx = "mCS", defaultSelector = ".mCustomScrollbar", defaults = { setTop: 0, setLeft: 0, axis: "y", scrollbarPosition: "inside", scrollInertia: 500, autoDraggerLength: !0, alwaysShowScrollbar: 0, snapOffset: 0, mouseWheel: { enable: !0, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] }, scrollButtons: { scrollType: "stepless", scrollAmount: "auto" }, keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" }, contentTouchScroll: 25, documentTouchScroll: !0, advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: !0, updateOnImageLoad: "auto", autoUpdateTimeout: 60 }, theme: "light", callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0 } }, totalInstances = 0, liveTimers = {}, oldIE = window.attachEvent && !window.addEventListener ? 1 : 0, touchActive = !1, touchable, classes = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], methods = { init: function (n) { var n = $.extend(!0, {}, defaults, n), r = _selector.call(this), t, i; if (n.live) { if (t = n.liveSelector || this.selector || defaultSelector, i = $(t), n.live === "off") { removeLiveTimers(t); return } liveTimers[t] = setTimeout(function () { i.mCustomScrollbar(n); n.live === "once" && i.length && removeLiveTimers(t) }, 500) } else removeLiveTimers(t); return n.setWidth = n.set_width ? n.set_width : n.setWidth, n.setHeight = n.set_height ? n.set_height : n.setHeight, n.axis = n.horizontalScroll ? "x" : _findAxis(n.axis), n.scrollInertia = n.scrollInertia > 0 && n.scrollInertia < 17 ? 17 : n.scrollInertia, typeof n.mouseWheel != "object" && n.mouseWheel == !0 && (n.mouseWheel = { enable: !0, scrollAmount: "auto", axis: "y", preventDefault: !1, deltaFactor: "auto", normalizeDelta: !1, invert: !1 }), n.mouseWheel.scrollAmount = n.mouseWheelPixels ? n.mouseWheelPixels : n.mouseWheel.scrollAmount, n.mouseWheel.normalizeDelta = n.advanced.normalizeMouseWheelDelta ? n.advanced.normalizeMouseWheelDelta : n.mouseWheel.normalizeDelta, n.scrollButtons.scrollType = _findScrollButtonsType(n.scrollButtons.scrollType), _theme(n), $(r).each(function () { var t = $(this); if (!t.data(pluginPfx)) { t.data(pluginPfx, { idx: ++totalInstances, opt: n, scrollRatio: { y: null, x: null }, overflowed: null, contentReset: { y: null, x: null }, bindEvents: !1, tweenRunning: !1, sequential: {}, langDir: t.css("direction"), cbOffsets: null, trigger: null, poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } } }); var r = t.data(pluginPfx), i = r.opt, u = t.data("mcs-axis"), f = t.data("mcs-scrollbar-position"), e = t.data("mcs-theme"); u && (i.axis = u); f && (i.scrollbarPosition = f); e && (i.theme = e, _theme(i)); _pluginMarkup.call(this); r && i.callbacks.onCreate && typeof i.callbacks.onCreate == "function" && i.callbacks.onCreate.call(this); $("#mCSB_" + r.idx + "_container img:not(." + classes[2] + ")").addClass(classes[2]); methods.update.call(null, t) } }) }, update: function (n, t) { var i = n || _selector.call(this); return $(i).each(function () { var r = $(this), f; if (r.data(pluginPfx)) { var i = r.data(pluginPfx), n = i.opt, u = $("#mCSB_" + i.idx + "_container"), o = $("#mCSB_" + i.idx), e = [$("#mCSB_" + i.idx + "_dragger_vertical"), $("#mCSB_" + i.idx + "_dragger_horizontal")]; if (!u.length) return; i.tweenRunning && _stop(r); t && i && n.callbacks.onBeforeUpdate && typeof n.callbacks.onBeforeUpdate == "function" && n.callbacks.onBeforeUpdate.call(this); r.hasClass(classes[3]) && r.removeClass(classes[3]); r.hasClass(classes[4]) && r.removeClass(classes[4]); o.css("max-height", "none"); o.height() !== r.height() && o.css("max-height", r.height()); _expandContentHorizontally.call(this); n.axis === "y" || n.advanced.autoExpandHorizontalScroll || u.css("width", _contentWidth(u)); i.overflowed = _overflowed.call(this); _scrollbarVisibility.call(this); n.autoDraggerLength && _setDraggerLength.call(this); _scrollRatio.call(this); _bindEvents.call(this); f = [Math.abs(u[0].offsetTop), Math.abs(u[0].offsetLeft)]; n.axis !== "x" && (i.overflowed[0] ? e[0].height() > e[0].parent().height() ? _resetContentPosition.call(this) : (_scrollTo(r, f[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), i.contentReset.y = null) : (_resetContentPosition.call(this), n.axis === "y" ? _unbindEvents.call(this) : n.axis === "yx" && i.overflowed[1] && _scrollTo(r, f[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))); n.axis !== "y" && (i.overflowed[1] ? e[1].width() > e[1].parent().width() ? _resetContentPosition.call(this) : (_scrollTo(r, f[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), i.contentReset.x = null) : (_resetContentPosition.call(this), n.axis === "x" ? _unbindEvents.call(this) : n.axis === "yx" && i.overflowed[0] && _scrollTo(r, f[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))); t && i && (t === 2 && n.callbacks.onImageLoad && typeof n.callbacks.onImageLoad == "function" ? n.callbacks.onImageLoad.call(this) : t === 3 && n.callbacks.onSelectorChange && typeof n.callbacks.onSelectorChange == "function" ? n.callbacks.onSelectorChange.call(this) : n.callbacks.onUpdate && typeof n.callbacks.onUpdate == "function" && n.callbacks.onUpdate.call(this)); _autoUpdate.call(this) } }) }, scrollTo: function (n, t) { if (typeof n != "undefined" && n != null) { var i = _selector.call(this); return $(i).each(function () { var f = $(this); if (f.data(pluginPfx)) { var u = f.data(pluginPfx), e = u.opt, o = { trigger: "external", scrollInertia: e.scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: !1, timeout: 60, callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 }, i = $.extend(!0, {}, o, t), r = _arr.call(this, n), s = i.scrollInertia > 0 && i.scrollInertia < 17 ? 17 : i.scrollInertia; r[0] = _to.call(this, r[0], "y"); r[1] = _to.call(this, r[1], "x"); i.moveDragger && (r[0] *= u.scrollRatio.y, r[1] *= u.scrollRatio.x); i.dur = _isTabHidden() ? 0 : s; setTimeout(function () { r[0] !== null && typeof r[0] != "undefined" && e.axis !== "x" && u.overflowed[0] && (i.dir = "y", i.overwrite = "all", _scrollTo(f, r[0].toString(), i)); r[1] !== null && typeof r[1] != "undefined" && e.axis !== "y" && u.overflowed[1] && (i.dir = "x", i.overwrite = "none", _scrollTo(f, r[1].toString(), i)) }, i.timeout) } }) } }, stop: function () { var n = _selector.call(this); return $(n).each(function () { var n = $(this); n.data(pluginPfx) && _stop(n) }) }, disable: function (n) { var t = _selector.call(this); return $(t).each(function () { var t = $(this), i; t.data(pluginPfx) && (i = t.data(pluginPfx), _autoUpdate.call(this, "remove"), _unbindEvents.call(this), n && _resetContentPosition.call(this), _scrollbarVisibility.call(this, !0), t.addClass(classes[3])) }) }, destroy: function () { var n = _selector.call(this); return $(n).each(function () { var i = $(this); if (i.data(pluginPfx)) { var t = i.data(pluginPfx), r = t.opt, f = $("#mCSB_" + t.idx), u = $("#mCSB_" + t.idx + "_container"), e = $(".mCSB_" + t.idx + "_scrollbar"); r.live && removeLiveTimers(r.liveSelector || $(n).selector); _autoUpdate.call(this, "remove"); _unbindEvents.call(this); _resetContentPosition.call(this); i.removeData(pluginPfx); _delete(this, "mcs"); e.remove(); u.find("img." + classes[2]).removeClass(classes[2]); f.replaceWith(u.contents()); i.removeClass(pluginNS + " _" + pluginPfx + "_" + t.idx + " " + classes[6] + " " + classes[7] + " " + classes[5] + " " + classes[3]).addClass(classes[4]) } }) } }, _selector = function () { return typeof $(this) != "object" || $(this).length < 1 ? defaultSelector : this }, _theme = function (n) { n.autoDraggerLength = $.inArray(n.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1 ? !1 : n.autoDraggerLength; n.autoExpandScrollbar = $.inArray(n.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1 ? !1 : n.autoExpandScrollbar; n.scrollButtons.enable = $.inArray(n.theme, ["minimal", "minimal-dark"]) > -1 ? !1 : n.scrollButtons.enable; n.autoHideScrollbar = $.inArray(n.theme, ["minimal", "minimal-dark"]) > -1 ? !0 : n.autoHideScrollbar; n.scrollbarPosition = $.inArray(n.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : n.scrollbarPosition }, removeLiveTimers = function (n) { liveTimers[n] && (clearTimeout(liveTimers[n]), _delete(liveTimers, n)) }, _findAxis = function (n) { return n === "yx" || n === "xy" || n === "auto" ? "yx" : n === "x" || n === "horizontal" ? "x" : "y" }, _findScrollButtonsType = function (n) { return n === "stepped" || n === "pixels" || n === "step" || n === "click" ? "stepped" : "stepless" }, _pluginMarkup = function () { var i = $(this), t = i.data(pluginPfx), n = t.opt, o = n.autoExpandScrollbar ? " " + classes[1] + "_expand" : "", u = ["<div id='mCSB_" + t.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_vertical" + o + "'><div class='" + classes[12] + "'><div id='mCSB_" + t.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /><\/div><div class='mCSB_draggerRail' /><\/div><\/div>", "<div id='mCSB_" + t.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_horizontal" + o + "'><div class='" + classes[12] + "'><div id='mCSB_" + t.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /><\/div><div class='mCSB_draggerRail' /><\/div><\/div>"], h = n.axis === "yx" ? "mCSB_vertical_horizontal" : n.axis === "x" ? "mCSB_horizontal" : "mCSB_vertical", s = n.axis === "yx" ? u[0] + u[1] : n.axis === "x" ? u[1] : u[0], c = n.axis === "yx" ? "<div id='mCSB_" + t.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "", l = n.autoHideScrollbar ? " " + classes[6] : "", a = n.axis !== "x" && t.langDir === "rtl" ? " " + classes[7] : "", e, f, r; n.setWidth && i.css("width", n.setWidth); n.setHeight && i.css("height", n.setHeight); n.setLeft = n.axis !== "y" && t.langDir === "rtl" ? "989999px" : n.setLeft; i.addClass(pluginNS + " _" + pluginPfx + "_" + t.idx + l + a).wrapInner("<div id='mCSB_" + t.idx + "' class='mCustomScrollBox mCS-" + n.theme + " " + h + "'><div id='mCSB_" + t.idx + "_container' class='mCSB_container' style='position:relative; top:" + n.setTop + "; left:" + n.setLeft + ";' dir=" + t.langDir + " /><\/div>"); e = $("#mCSB_" + t.idx); f = $("#mCSB_" + t.idx + "_container"); n.axis === "y" || n.advanced.autoExpandHorizontalScroll || f.css("width", _contentWidth(f)); n.scrollbarPosition === "outside" ? (i.css("position") === "static" && i.css("position", "relative"), i.css("overflow", "visible"), e.addClass("mCSB_outside").after(s)) : (e.addClass("mCSB_inside").append(s), f.wrap(c)); _scrollButtons.call(this); r = [$("#mCSB_" + t.idx + "_dragger_vertical"), $("#mCSB_" + t.idx + "_dragger_horizontal")]; r[0].css("min-height", r[0].height()); r[1].css("min-width", r[1].width()) }, _contentWidth = function (n) { var t = [n[0].scrollWidth, Math.max.apply(Math, n.children().map(function () { return $(this).outerWidth(!0) }).get())], i = n.parent().width(); return t[0] > i ? t[0] : t[1] > i ? t[1] : "100%" }, _expandContentHorizontally = function () { var u = $(this), r = u.data(pluginPfx), t = r.opt, n = $("#mCSB_" + r.idx + "_container"), i; t.advanced.autoExpandHorizontalScroll && t.axis !== "y" && (n.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" }), i = Math.ceil(n[0].scrollWidth), t.advanced.autoExpandHorizontalScroll === 3 || t.advanced.autoExpandHorizontalScroll !== 2 && i > n.parent().width() ? n.css({ width: i, "min-width": "100%", "overflow-x": "inherit" }) : n.css({ "overflow-x": "inherit", position: "absolute" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: Math.ceil(n[0].getBoundingClientRect().right + .4) - Math.floor(n[0].getBoundingClientRect().left), "min-width": "100%", position: "relative" }).unwrap()) }, _scrollButtons = function () { var f = $(this), u = f.data(pluginPfx), t = u.opt, e = $(".mCSB_" + u.idx + "_scrollbar:first"), i = _isNumeric(t.scrollButtons.tabindex) ? "tabindex='" + t.scrollButtons.tabindex + "'" : "", n = ["<a href='#' class='" + classes[13] + "' oncontextmenu='return false;' " + i + " />", "<a href='#' class='" + classes[14] + "' oncontextmenu='return false;' " + i + " />", "<a href='#' class='" + classes[15] + "' oncontextmenu='return false;' " + i + " />", "<a href='#' class='" + classes[16] + "' oncontextmenu='return false;' " + i + " />"], r = [t.axis === "x" ? n[2] : n[0], t.axis === "x" ? n[3] : n[1], n[2], n[3]]; t.scrollButtons.enable && e.prepend(r[0]).append(r[1]).next(".mCSB_scrollTools").prepend(r[2]).append(r[3]) }, _setDraggerLength = function () { var e = $(this), i = e.data(pluginPfx), r = $("#mCSB_" + i.idx), u = $("#mCSB_" + i.idx + "_container"), t = [$("#mCSB_" + i.idx + "_dragger_vertical"), $("#mCSB_" + i.idx + "_dragger_horizontal")], f = [r.height() / u.outerHeight(!1), r.width() / u.outerWidth(!1)], n = [parseInt(t[0].css("min-height")), Math.round(f[0] * t[0].parent().height()), parseInt(t[1].css("min-width")), Math.round(f[1] * t[1].parent().width())], o = oldIE && n[1] < n[0] ? n[0] : n[1], s = oldIE && n[3] < n[2] ? n[2] : n[3]; t[0].css({ height: o, "max-height": t[0].parent().height() - 10 }).find(".mCSB_dragger_bar").css({ "line-height": n[0] + "px" }); t[1].css({ width: s, "max-width": t[1].parent().width() - 10 }) }, _scrollRatio = function () { var e = $(this), n = e.data(pluginPfx), i = $("#mCSB_" + n.idx), r = $("#mCSB_" + n.idx + "_container"), t = [$("#mCSB_" + n.idx + "_dragger_vertical"), $("#mCSB_" + n.idx + "_dragger_horizontal")], u = [r.outerHeight(!1) - i.height(), r.outerWidth(!1) - i.width()], f = [u[0] / (t[0].parent().height() - t[0].height()), u[1] / (t[1].parent().width() - t[1].width())]; n.scrollRatio = { y: f[0], x: f[1] } }, _onDragClasses = function (n, t, i) { var u = i ? classes[0] + "_expanded" : "", r = n.closest(".mCSB_scrollTools"); t === "active" ? (n.toggleClass(classes[0] + " " + u), r.toggleClass(classes[1]), n[0]._draggable = n[0]._draggable ? 0 : 1) : n[0]._draggable || (t === "hide" ? (n.removeClass(classes[0]), r.removeClass(classes[1])) : (n.addClass(classes[0]), r.addClass(classes[1]))) }, _overflowed = function () { var o = $(this), t = o.data(pluginPfx), u = $("#mCSB_" + t.idx), n = $("#mCSB_" + t.idx + "_container"), i = t.overflowed == null ? n.height() : n.outerHeight(!1), r = t.overflowed == null ? n.width() : n.outerWidth(!1), f = n[0].scrollHeight, e = n[0].scrollWidth; return f > i && (i = f), e > r && (r = e), [i > u.height(), r > u.width()] }, _resetContentPosition = function () { var t = $(this), n = t.data(pluginPfx), i = n.opt, e = $("#mCSB_" + n.idx), u = $("#mCSB_" + n.idx + "_container"), f = [$("#mCSB_" + n.idx + "_dragger_vertical"), $("#mCSB_" + n.idx + "_dragger_horizontal")], r; _stop(t); (i.axis !== "x" && !n.overflowed[0] || i.axis === "y" && n.overflowed[0]) && (f[0].add(u).css("top", 0), _scrollTo(t, "_resetY")); (i.axis !== "y" && !n.overflowed[1] || i.axis === "x" && n.overflowed[1]) && (r = dx = 0, n.langDir === "rtl" && (r = e.width() - u.outerWidth(!1), dx = Math.abs(r / n.scrollRatio.x)), u.css("left", r), f[1].css("left", dx), _scrollTo(t, "_resetX")) }, _bindEvents = function () { var i = $(this), t = i.data(pluginPfx), n = t.opt, u; if (!t.bindEvents) { if (_draggable.call(this), n.contentTouchScroll && _contentDraggable.call(this), _selectable.call(this), n.mouseWheel.enable) { function r() { u = setTimeout(function () { $.event.special.mousewheel ? (clearTimeout(u), _mousewheel.call(i[0])) : r() }, 100) } r() } _draggerRail.call(this); _wrapperScroll.call(this); n.advanced.autoScrollOnFocus && _focus.call(this); n.scrollButtons.enable && _buttons.call(this); n.keyboard.enable && _keyboard.call(this); t.bindEvents = !0 } }, _unbindEvents = function () { var i = $(this), n = i.data(pluginPfx), t = n.opt, u = pluginPfx + "_" + n.idx, f = ".mCSB_" + n.idx + "_scrollbar", r = $("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + f + " ." + classes[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + f + ">a"), e = $("#mCSB_" + n.idx + "_container"); t.advanced.releaseDraggableSelectors && r.add($(t.advanced.releaseDraggableSelectors)); t.advanced.extraDraggableSelectors && r.add($(t.advanced.extraDraggableSelectors)); n.bindEvents && ($(document).add($(top.document)).unbind("." + u), r.each(function () { $(this).unbind("." + u) }), clearTimeout(i[0]._focusTimeout), _delete(i[0], "_focusTimeout"), clearTimeout(n.sequential.step), _delete(n.sequential, "step"), clearTimeout(e[0].onCompleteTimeout), _delete(e[0], "onCompleteTimeout"), n.bindEvents = !1) }, _scrollbarVisibility = function (n) { var e = $(this), t = e.data(pluginPfx), u = t.opt, o = $("#mCSB_" + t.idx + "_container_wrapper"), i = o.length ? o : $("#mCSB_" + t.idx + "_container"), r = [$("#mCSB_" + t.idx + "_scrollbar_vertical"), $("#mCSB_" + t.idx + "_scrollbar_horizontal")], f = [r[0].find(".mCSB_dragger"), r[1].find(".mCSB_dragger")]; u.axis !== "x" && (t.overflowed[0] && !n ? (r[0].add(f[0]).add(r[0].children("a")).css("display", "block"), i.removeClass(classes[8] + " " + classes[10])) : (u.alwaysShowScrollbar ? (u.alwaysShowScrollbar !== 2 && f[0].css("display", "none"), i.removeClass(classes[10])) : (r[0].css("display", "none"), i.addClass(classes[10])), i.addClass(classes[8]))); u.axis !== "y" && (t.overflowed[1] && !n ? (r[1].add(f[1]).add(r[1].children("a")).css("display", "block"), i.removeClass(classes[9] + " " + classes[11])) : (u.alwaysShowScrollbar ? (u.alwaysShowScrollbar !== 2 && f[1].css("display", "none"), i.removeClass(classes[11])) : (r[1].css("display", "none"), i.addClass(classes[11])), i.addClass(classes[9]))); t.overflowed[0] || t.overflowed[1] ? e.removeClass(classes[5]) : e.addClass(classes[5]) }, _coordinates = function (n) { var f = n.type, t = n.target.ownerDocument !== document ? [$(frameElement).offset().top, $(frameElement).offset().left] : null, r = n.target.ownerDocument !== top.document ? [$(n.view.frameElement).offset().top, $(n.view.frameElement).offset().left] : [0, 0], i, u; switch (f) { case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp": return t ? [n.originalEvent.pageY - t[0] + r[0], n.originalEvent.pageX - t[1] + r[1], !1] : [n.originalEvent.pageY, n.originalEvent.pageX, !1]; case "touchstart": case "touchmove": case "touchend": return i = n.originalEvent.touches[0] || n.originalEvent.changedTouches[0], u = n.originalEvent.touches.length || n.originalEvent.changedTouches.length, n.target.ownerDocument !== document ? [i.screenY, i.screenX, u > 1] : [i.pageY, i.pageX, u > 1]; default: return t ? [n.pageY - t[0] + r[0], n.pageX - t[1] + r[1], !1] : [n.pageY, n.pageX, !1] } }, _draggable = function () { function c(n) { var t = h.find("iframe"), i; t.length && (i = n ? "auto" : "none", t.css("pointer-events", i)) } function l(t, u, f, s) { var c, l; h[0].idleTimer = r.scrollInertia < 233 ? 250 : 0; n.attr("id") === o[1] ? (c = "x", l = (n[0].offsetLeft - u + s) * i.scrollRatio.x) : (c = "y", l = (n[0].offsetTop - t + f) * i.scrollRatio.y); _scrollTo(e, l.toString(), { dir: c, drag: !0 }) } var e = $(this), i = e.data(pluginPfx), r = i.opt, t = pluginPfx + "_" + i.idx, o = ["mCSB_" + i.idx + "_dragger_vertical", "mCSB_" + i.idx + "_dragger_horizontal"], h = $("#mCSB_" + i.idx + "_container"), s = $("#" + o[0] + ",#" + o[1]), n, u, f, a = r.advanced.releaseDraggableSelectors ? s.add($(r.advanced.releaseDraggableSelectors)) : s, v = r.advanced.extraDraggableSelectors ? $(top.document).add($(r.advanced.extraDraggableSelectors)) : $(top.document); s.bind("mousedown." + t + " touchstart." + t + " pointerdown." + t + " MSPointerDown." + t, function (t) { if (t.stopImmediatePropagation(), t.preventDefault(), _mouseBtnLeft(t)) { touchActive = !0; oldIE && (document.onselectstart = function () { return !1 }); c(!1); _stop(e); n = $(this); var i = n.offset(), o = _coordinates(t)[0] - i.top, s = _coordinates(t)[1] - i.left, h = n.height() + i.top, l = n.width() + i.left; o < h && o > 0 && s < l && s > 0 && (u = o, f = s); _onDragClasses(n, "active", r.autoExpandScrollbar) } }).bind("touchmove." + t, function (t) { t.stopImmediatePropagation(); t.preventDefault(); var i = n.offset(), r = _coordinates(t)[0] - i.top, e = _coordinates(t)[1] - i.left; l(u, f, r, e) }); $(document).add(v).bind("mousemove." + t + " pointermove." + t + " MSPointerMove." + t, function (t) { if (n) { var i = n.offset(), r = _coordinates(t)[0] - i.top, e = _coordinates(t)[1] - i.left; if (u === r && f === e) return; l(u, f, r, e) } }).add(a).bind("mouseup." + t + " touchend." + t + " pointerup." + t + " MSPointerUp." + t, function () { n && (_onDragClasses(n, "active", r.autoExpandScrollbar), n = null); touchActive = !1; oldIE && (document.onselectstart = null); c(!0) }) }, _contentDraggable = function () { function ht(n) { if (!_pointerTouch(n) || touchActive || _coordinates(n)[2]) { touchable = 0; return } touchable = 1; w = 0; b = 0; d = 1; h.removeClass("mCS_touch_action"); var t = s.offset(); c = _coordinates(n)[0] - t.top; l = _coordinates(n)[1] - t.left; f = [_coordinates(n)[0], _coordinates(n)[1]] } function ct(r) { var nt, it, rt, ut; if (_pointerTouch(r) && !touchActive && !_coordinates(r)[2] && (t.documentTouchScroll || r.preventDefault(), r.stopImmediatePropagation(), !b || w) && d) { ft = _getTime(); var o = a.offset(), u = _coordinates(r)[0] - o.top, e = _coordinates(r)[1] - o.left, g = "mcsLinearOut"; y.push(u); p.push(e); f[2] = Math.abs(_coordinates(r)[0] - f[0]); f[3] = Math.abs(_coordinates(r)[1] - f[1]); n.overflowed[0] && (nt = v[0].parent().height() - v[0].height(), it = c - u > 0 && u - c > -(nt * n.scrollRatio.y) && (f[3] * 2 < f[2] || t.axis === "yx")); n.overflowed[1] && (rt = v[1].parent().width() - v[1].width(), ut = l - e > 0 && e - l > -(rt * n.scrollRatio.x) && (f[2] * 2 < f[3] || t.axis === "yx")); it || ut ? (st || r.preventDefault(), w = 1) : (b = 1, h.addClass("mCS_touch_action")); st && r.preventDefault(); i = t.axis === "yx" ? [c - u, l - e] : t.axis === "x" ? [null, l - e] : [c - u, null]; s[0].idleTimer = 250; n.overflowed[0] && k(i[0], et, g, "y", "all", !0); n.overflowed[1] && k(i[1], et, g, "x", tt, !0) } } function lt(n) { if (!_pointerTouch(n) || touchActive || _coordinates(n)[2]) { touchable = 0; return } touchable = 1; n.stopImmediatePropagation(); _stop(h); ut = _getTime(); var t = a.offset(); it = _coordinates(n)[0] - t.top; rt = _coordinates(n)[1] - t.left; y = []; p = [] } function at(r) { var f, o, c; if (_pointerTouch(r) && !touchActive && !_coordinates(r)[2]) { d = 0; r.stopImmediatePropagation(); w = 0; b = 0; g = _getTime(); var l = a.offset(), v = _coordinates(r)[0] - l.top, et = _coordinates(r)[1] - l.left; if (!(g - ft > 30)) { u = 1e3 / (g - ut); var ot = "mcsEaseOut", h = u < 2.5, st = h ? [y[y.length - 2], p[p.length - 2]] : [0, 0]; e = h ? [v - st[0], et - st[1]] : [v - it, et - rt]; f = [Math.abs(e[0]), Math.abs(e[1])]; u = h ? [Math.abs(e[0] / 4), Math.abs(e[1] / 4)] : [u, u]; o = [Math.abs(s[0].offsetTop) - e[0] * vt(f[0] / u[0], u[0]), Math.abs(s[0].offsetLeft) - e[1] * vt(f[1] / u[1], u[1])]; i = t.axis === "yx" ? [o[0], o[1]] : t.axis === "x" ? [null, o[1]] : [o[0], null]; nt = [f[0] * 4 + t.scrollInertia, f[1] * 4 + t.scrollInertia]; c = parseInt(t.contentTouchScroll) || 0; i[0] = f[0] > c ? i[0] : 0; i[1] = f[1] > c ? i[1] : 0; n.overflowed[0] && k(i[0], nt[0], ot, "y", tt, !1); n.overflowed[1] && k(i[1], nt[1], ot, "x", tt, !1) } } } function vt(n, t) { var i = [t * 1.5, t * 2, t / 1.5, t / 2]; return n > 90 ? t > 4 ? i[0] : i[3] : n > 60 ? t > 3 ? i[3] : i[2] : n > 30 ? t > 8 ? i[1] : t > 6 ? i[0] : t > 4 ? t : i[2] : t > 8 ? t : i[3] } function k(n, t, i, r, u, f) { n && _scrollTo(h, n.toString(), { dur: t, scrollEasing: i, dir: r, overwrite: u, drag: f }) } var h = $(this), n = h.data(pluginPfx), t = n.opt, r = pluginPfx + "_" + n.idx, a = $("#mCSB_" + n.idx), s = $("#mCSB_" + n.idx + "_container"), v = [$("#mCSB_" + n.idx + "_dragger_vertical"), $("#mCSB_" + n.idx + "_dragger_horizontal")], d, c, l, it, rt, y = [], p = [], ut, ft, g, e, u, i, et = 0, nt, tt = t.axis === "yx" ? "none" : "all", f = [], w, b, ot = s.find("iframe"), o = ["touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, "touchmove." + r + " pointermove." + r + " MSPointerMove." + r, "touchend." + r + " pointerup." + r + " MSPointerUp." + r], st = document.body.style.touchAction !== undefined; s.bind(o[0], function (n) { ht(n) }).bind(o[1], function (n) { ct(n) }); a.bind(o[0], function (n) { lt(n) }).bind(o[2], function (n) { at(n) }); ot.length && ot.each(function () { $(this).load(function () { _canAccessIFrame(this) && $(this.contentDocument || this.contentWindow.document).bind(o[0], function (n) { ht(n); lt(n) }).bind(o[1], function (n) { ct(n) }).bind(o[2], function (n) { at(n) }) }) }) }, _selectable = function () { function h() { return window.getSelection ? window.getSelection().toString() : document.selection && document.selection.type != "Control" ? document.selection.createRange().text : 0 } function i(n, i, r) { e.type = r && t ? "stepped" : "stepless"; e.scrollAmount = 10; _sequentialScroll(o, n, i, "mcsLinearOut", r ? 60 : null) } var o = $(this), n = o.data(pluginPfx), s = n.opt, e = n.sequential, u = pluginPfx + "_" + n.idx, r = $("#mCSB_" + n.idx + "_container"), f = r.parent(), t; r.bind("mousedown." + u, function () { touchable || t || (t = 1, touchActive = !0) }).add(document).bind("mousemove." + u, function (u) { if (!touchable && t && h()) { var l = r.offset(), o = _coordinates(u)[0] - l.top + r[0].offsetTop, c = _coordinates(u)[1] - l.left + r[0].offsetLeft; o > 0 && o < f.height() && c > 0 && c < f.width() ? e.step && i("off", null, "stepped") : (s.axis !== "x" && n.overflowed[0] && (o < 0 ? i("on", 38) : o > f.height() && i("on", 40)), s.axis !== "y" && n.overflowed[1] && (c < 0 ? i("on", 37) : c > f.width() && i("on", 39))) } }).bind("mouseup." + u + " dragend." + u, function () { touchable || (t && (t = 0, i("off", null)), touchActive = !1) }) }, _mousewheel = function () { function o(f, e) { var h, c; if (_stop(u), !_disableMousewheel(u, f.target)) { if (h = n.mouseWheel.deltaFactor !== "auto" ? parseInt(n.mouseWheel.deltaFactor) : oldIE && f.deltaFactor < 100 ? 100 : f.deltaFactor || 100, c = n.scrollInertia, n.axis === "x" || n.mouseWheel.axis === "x") var l = "x", s = [Math.round(h * t.scrollRatio.x), parseInt(n.mouseWheel.scrollAmount)], a = n.mouseWheel.scrollAmount !== "auto" ? s[1] : s[0] >= r.width() ? r.width() * .9 : s[0], y = Math.abs($("#mCSB_" + t.idx + "_container")[0].offsetLeft), v = i[1][0].offsetLeft, p = i[1].parent().width() - i[1].width(), o = f.deltaX || f.deltaY || e; else var l = "y", s = [Math.round(h * t.scrollRatio.y), parseInt(n.mouseWheel.scrollAmount)], a = n.mouseWheel.scrollAmount !== "auto" ? s[1] : s[0] >= r.height() ? r.height() * .9 : s[0], y = Math.abs($("#mCSB_" + t.idx + "_container")[0].offsetTop), v = i[0][0].offsetTop, p = i[0].parent().height() - i[0].height(), o = f.deltaY || e; (l !== "y" || t.overflowed[0]) && (l !== "x" || t.overflowed[1]) && ((n.mouseWheel.invert || f.webkitDirectionInvertedFromDevice) && (o = -o), n.mouseWheel.normalizeDelta && (o = o < 0 ? -1 : 1), (o > 0 && v !== 0 || o < 0 && v !== p || n.mouseWheel.preventDefault) && (f.stopImmediatePropagation(), f.preventDefault()), f.deltaFactor < 2 && !n.mouseWheel.normalizeDelta && (a = f.deltaFactor, c = 17), _scrollTo(u, (y - o * a).toString(), { dir: l, dur: c })) } } if ($(this).data(pluginPfx)) { var u = $(this), t = u.data(pluginPfx), n = t.opt, f = pluginPfx + "_" + t.idx, r = $("#mCSB_" + t.idx), i = [$("#mCSB_" + t.idx + "_dragger_vertical"), $("#mCSB_" + t.idx + "_dragger_horizontal")], e = $("#mCSB_" + t.idx + "_container").find("iframe"); e.length && e.each(function () { $(this).load(function () { _canAccessIFrame(this) && $(this.contentDocument || this.contentWindow.document).bind("mousewheel." + f, function (n, t) { o(n, t) }) }) }); r.bind("mousewheel." + f, function (n, t) { o(n, t) }) } }, _canAccessIFrame = function (n) { var t = null, i; try { i = n.contentDocument || n.contentWindow.document; t = i.body.innerHTML } catch (r) { } return t !== null }, _disableMousewheel = function (n, t) { var i = t.nodeName.toLowerCase(), r = n.data(pluginPfx).opt.mouseWheel.disableOver; return $.inArray(i, r) > -1 && !($.inArray(i, ["select", "textarea"]) > -1 && !$(t).is(":focus")) }, _draggerRail = function () { var i = $(this), t = i.data(pluginPfx), n = pluginPfx + "_" + t.idx, r = $("#mCSB_" + t.idx + "_container"), f = r.parent(), e = $(".mCSB_" + t.idx + "_scrollbar ." + classes[12]), u; e.bind("mousedown." + n + " touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function (n) { touchActive = !0; $(n.target).hasClass("mCSB_dragger") || (u = 1) }).bind("touchend." + n + " pointerup." + n + " MSPointerUp." + n, function () { touchActive = !1 }).bind("click." + n, function (n) { var e, o; if (u && (u = 0, $(n.target).hasClass(classes[12]) || $(n.target).hasClass("mCSB_draggerRail"))) { if (_stop(i), e = $(this), o = e.find(".mCSB_dragger"), e.parent(".mCSB_scrollTools_horizontal").length > 0) { if (!t.overflowed[1]) return; var h = "x", s = n.pageX > o.offset().left ? -1 : 1, c = Math.abs(r[0].offsetLeft) - s * f.width() * .9 } else { if (!t.overflowed[0]) return; var h = "y", s = n.pageY > o.offset().top ? -1 : 1, c = Math.abs(r[0].offsetTop) - s * f.height() * .9 } _scrollTo(i, c.toString(), { dir: h, scrollEasing: "mcsEaseInOut" }) } }) }, _focus = function () { var n = $(this), r = n.data(pluginPfx), i = r.opt, f = pluginPfx + "_" + r.idx, t = $("#mCSB_" + r.idx + "_container"), u = t.parent(); t.bind("focusin." + f, function () { var r = $(document.activeElement), e = t.find(".mCustomScrollBox").length, f = 0; r.is(i.advanced.autoScrollOnFocus) && (_stop(n), clearTimeout(n[0]._focusTimeout), n[0]._focusTimer = e ? (f + 17) * e : 0, n[0]._focusTimeout = setTimeout(function () { var e = [_childPos(r)[0], _childPos(r)[1]], o = [t[0].offsetTop, t[0].offsetLeft], s = [o[0] + e[0] >= 0 && o[0] + e[0] < u.height() - r.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < u.width() - r.outerWidth(!1)], h = i.axis === "yx" && !s[0] && !s[1] ? "none" : "all"; i.axis === "x" || s[0] || _scrollTo(n, e[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: h, dur: f }); i.axis === "y" || s[1] || _scrollTo(n, e[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: h, dur: f }) }, n[0]._focusTimer)) }) }, _wrapperScroll = function () { var i = $(this), n = i.data(pluginPfx), r = pluginPfx + "_" + n.idx, t = $("#mCSB_" + n.idx + "_container").parent(); t.bind("scroll." + r, function () { (t.scrollTop() !== 0 || t.scrollLeft() !== 0) && $(".mCSB_" + n.idx + "_scrollbar").css("visibility", "hidden") }) }, _buttons = function () { var r = $(this), t = r.data(pluginPfx), u = t.opt, i = t.sequential, n = pluginPfx + "_" + t.idx, f = ".mCSB_" + t.idx + "_scrollbar", e = $(f + ">a"); e.bind("mousedown." + n + " touchstart." + n + " pointerdown." + n + " MSPointerDown." + n + " mouseup." + n + " touchend." + n + " pointerup." + n + " MSPointerUp." + n + " mouseout." + n + " pointerout." + n + " MSPointerOut." + n + " click." + n, function (n) { function e(n, t) { i.scrollAmount = u.scrollButtons.scrollAmount; _sequentialScroll(r, n, t) } if (n.preventDefault(), _mouseBtnLeft(n)) { var f = $(this).attr("class"); i.type = u.scrollButtons.scrollType; switch (n.type) { case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown": if (i.type === "stepped") return; touchActive = !0; t.tweenRunning = !1; e("on", f); break; case "mouseup": case "touchend": case "pointerup": case "MSPointerUp": case "mouseout": case "pointerout": case "MSPointerOut": if (i.type === "stepped") return; touchActive = !1; i.dir && e("off", f); break; case "click": if (i.type !== "stepped" || t.tweenRunning) return; e("on", f) } } }) }, _keyboard = function () { function c(e) { function v(i, f) { (u.type = t.keyboard.scrollType, u.scrollAmount = t.keyboard.scrollAmount, u.type === "stepped" && n.tweenRunning) || _sequentialScroll(r, i, f) } var s, l, a, h, c; switch (e.type) { case "blur": n.tweenRunning && u.dir && v("off", null); break; case "keydown": case "keyup": if (s = e.keyCode ? e.keyCode : e.which, l = "on", t.axis !== "x" && (s === 38 || s === 40) || t.axis !== "y" && (s === 37 || s === 39)) { if ((s === 38 || s === 40) && !n.overflowed[0] || (s === 37 || s === 39) && !n.overflowed[1]) return; e.type === "keyup" && (l = "off"); $(document.activeElement).is(o) || (e.preventDefault(), e.stopImmediatePropagation(), v(l, s)) } else s === 33 || s === 34 ? ((n.overflowed[0] || n.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), e.type === "keyup" && (_stop(r), a = s === 34 ? -1 : 1, t.axis === "x" || t.axis === "yx" && n.overflowed[1] && !n.overflowed[0] ? (h = "x", c = Math.abs(i[0].offsetLeft) - a * f.width() * .9) : (h = "y", c = Math.abs(i[0].offsetTop) - a * f.height() * .9), _scrollTo(r, c.toString(), { dir: h, scrollEasing: "mcsEaseInOut" }))) : (s === 35 || s === 36) && ($(document.activeElement).is(o) || ((n.overflowed[0] || n.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), e.type === "keyup" && (t.axis === "x" || t.axis === "yx" && n.overflowed[1] && !n.overflowed[0] ? (h = "x", c = s === 35 ? Math.abs(f.width() - i.outerWidth(!1)) : 0) : (h = "y", c = s === 35 ? Math.abs(f.height() - i.outerHeight(!1)) : 0), _scrollTo(r, c.toString(), { dir: h, scrollEasing: "mcsEaseInOut" })))) } } var r = $(this), n = r.data(pluginPfx), t = n.opt, u = n.sequential, e = pluginPfx + "_" + n.idx, l = $("#mCSB_" + n.idx), i = $("#mCSB_" + n.idx + "_container"), f = i.parent(), o = "input,textarea,select,datalist,keygen,[contenteditable='true']", s = i.find("iframe"), h = ["blur." + e + " keydown." + e + " keyup." + e]; s.length && s.each(function () { $(this).load(function () { _canAccessIFrame(this) && $(this.contentDocument || this.contentWindow.document).bind(h[0], function (n) { c(n) }) }) }); l.attr("tabindex", "0").bind(h[0], function (n) { c(n) }) }, _sequentialScroll = function (n, t, i, r, u) { function s(t) { e.snapAmount && (f.scrollAmount = (e.snapAmount instanceof Array) ? f.dir[0] === "x" ? e.snapAmount[1] : e.snapAmount[0] : e.snapAmount); var c = f.type !== "stepped", v = u ? u : t ? c ? l / 1.5 : a : 1e3 / 60, y = t ? c ? 7.5 : 40 : 2.5, i = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)], p = [o.scrollRatio.y > 10 ? 10 : o.scrollRatio.y, o.scrollRatio.x > 10 ? 10 : o.scrollRatio.x], b = f.dir[0] === "x" ? i[1] + f.dir[1] * p[1] * y : i[0] + f.dir[1] * p[0] * y, k = f.dir[0] === "x" ? i[1] + f.dir[1] * parseInt(f.scrollAmount) : i[0] + f.dir[1] * parseInt(f.scrollAmount), w = f.scrollAmount !== "auto" ? k : b, d = r ? r : t ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear", g = t ? !0 : !1; if (t && v < 17 && (w = f.dir[0] === "x" ? i[1] : i[0]), _scrollTo(n, w.toString(), { dir: f.dir[0], scrollEasing: d, dur: v, onComplete: g }), t) { f.dir = !1; return } clearTimeout(f.step); f.step = setTimeout(function () { s() }, v) } function v() { clearTimeout(f.step); _delete(f, "step"); _stop(n) } var o = n.data(pluginPfx), e = o.opt, f = o.sequential, h = $("#mCSB_" + o.idx + "_container"), c = f.type === "stepped" ? !0 : !1, l = e.scrollInertia < 26 ? 26 : e.scrollInertia, a = e.scrollInertia < 1 ? 17 : e.scrollInertia; switch (t) { case "on": if (f.dir = [i === classes[16] || i === classes[15] || i === 39 || i === 37 ? "x" : "y", i === classes[13] || i === classes[15] || i === 38 || i === 37 ? -1 : 1], _stop(n), _isNumeric(i) && f.type === "stepped") return; s(c); break; case "off": v(); (c || o.tweenRunning && f.dir) && s(!0) } }, _arr = function (n) { var i = $(this).data(pluginPfx).opt, t = []; return typeof n == "function" && (n = n()), n instanceof Array ? t = n.length > 1 ? [n[0], n[1]] : i.axis === "x" ? [null, n[0]] : [n[0], null] : (t[0] = n.y ? n.y : n.x || i.axis === "x" ? null : n, t[1] = n.x ? n.x : n.y || i.axis === "y" ? null : n), typeof t[0] == "function" && (t[0] = t[0]()), typeof t[1] == "function" && (t[1] = t[1]()), t }, _to = function (n, t) { var u, r; if (n != null && typeof n != "undefined") { var f = $(this), e = f.data(pluginPfx), h = e.opt, i = $("#mCSB_" + e.idx + "_container"), o = i.parent(), c = typeof n; t || (t = h.axis === "x" ? "x" : "y"); var l = t === "x" ? i.outerWidth(!1) : i.outerHeight(!1), s = t === "x" ? i[0].offsetLeft : i[0].offsetTop, a = t === "x" ? "left" : "top"; switch (c) { case "function": return n(); case "object": return (r = n.jquery ? n : $(n), !r.length) ? void 0 : t === "x" ? _childPos(r)[1] : _childPos(r)[0]; case "string": case "number": if (_isNumeric(n)) return Math.abs(n); if (n.indexOf("%") !== -1) return Math.abs(l * parseInt(n) / 100); if (n.indexOf("-=") !== -1) return Math.abs(s - parseInt(n.split("-=")[1])); if (n.indexOf("+=") !== -1) return u = s + parseInt(n.split("+=")[1]), u >= 0 ? 0 : Math.abs(u); if (n.indexOf("px") !== -1 && _isNumeric(n.split("px")[0])) return Math.abs(n.split("px")[0]); if (n === "top" || n === "left") return 0; if (n === "bottom") return Math.abs(o.height() - i.outerHeight(!1)); if (n === "right") return Math.abs(o.width() - i.outerWidth(!1)); if (n === "first" || n === "last") return r = i.find(":" + n), t === "x" ? _childPos(r)[1] : _childPos(r)[0]; if ($(n).length) return t === "x" ? _childPos($(n))[1] : _childPos($(n))[0]; i.css(a, n); methods.update.call(null, f[0]); return } } }, _autoUpdate = function (n) { function e() { if (clearTimeout(r[0].autoUpdate), u.parents("html").length === 0) { u = null; return } r[0].autoUpdate = setTimeout(function () { if (i.advanced.updateOnSelectorChange && (t.poll.change.n = s(), t.poll.change.n !== t.poll.change.o)) { t.poll.change.o = t.poll.change.n; f(3); return } if (i.advanced.updateOnContentResize && (t.poll.size.n = u[0].scrollHeight + u[0].scrollWidth + r[0].offsetHeight + u[0].offsetHeight + u[0].offsetWidth, t.poll.size.n !== t.poll.size.o)) { t.poll.size.o = t.poll.size.n; f(1); return } if (i.advanced.updateOnImageLoad && !(i.advanced.updateOnImageLoad === "auto" && i.axis === "y") && (t.poll.img.n = r.find("img").length, t.poll.img.n !== t.poll.img.o)) { t.poll.img.o = t.poll.img.n; r.find("img").each(function () { o(this) }); return } (i.advanced.updateOnSelectorChange || i.advanced.updateOnContentResize || i.advanced.updateOnImageLoad) && e() }, i.advanced.autoUpdateTimeout) } function o(n) { function i(n, t) { return function () { return t.apply(n, arguments) } } function r() { this.onload = null; $(n).addClass(classes[2]); f(2) } if ($(n).hasClass(classes[2])) { f(); return } var t = new Image; t.onload = i(t, r); t.src = n.src } function s() { i.advanced.updateOnSelectorChange === !0 && (i.advanced.updateOnSelectorChange = "*"); var n = 0, t = r.find(i.advanced.updateOnSelectorChange); return i.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () { n += this.offsetHeight + this.offsetWidth }), n } function f(n) { clearTimeout(r[0].autoUpdate); methods.update.call(null, u[0], n) } var u = $(this), t = u.data(pluginPfx), i = t.opt, r = $("#mCSB_" + t.idx + "_container"); if (n) { clearTimeout(r[0].autoUpdate); _delete(r[0], "autoUpdate"); return } e() }, _snapAmount = function (n, t, i) { return Math.round(n / t) * t - i }, _stop = function (n) { var t = n.data(pluginPfx), i = $("#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper,#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal"); i.each(function () { _stopTween.call(this) }) }, _scrollTo = function (n, t, i) { function o(n) { return r && u.callbacks[n] && typeof u.callbacks[n] == "function" } function rt() { return [u.callbacks.alwaysTriggerOffsets || y >= h[0] + l, u.callbacks.alwaysTriggerOffsets || y <= -a] } function c() { var t = [f[0].offsetTop, f[0].offsetLeft], r = [s[0].offsetTop, s[0].offsetLeft], u = [f.outerHeight(!1), f.outerWidth(!1)], e = [v.height(), v.width()]; n[0].mcs = { content: f, top: t[0], left: t[1], draggerTop: r[0], draggerLeft: r[1], topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(u[0]) - e[0])), leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(u[1]) - e[1])), direction: i.dir } } var r = n.data(pluginPfx), u = r.opt, nt = { trigger: "internal", dir: "y", scrollEasing: "mcsEaseOut", drag: !1, dur: u.scrollInertia, overwrite: "all", callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 }, i = $.extend(nt, i), w = [i.dur, i.drag ? 0 : i.dur], v = $("#mCSB_" + r.idx), f = $("#mCSB_" + r.idx + "_container"), p = f.parent(), b = u.callbacks.onTotalScrollOffset ? _arr.call(n, u.callbacks.onTotalScrollOffset) : [0, 0], k = u.callbacks.onTotalScrollBackOffset ? _arr.call(n, u.callbacks.onTotalScrollBackOffset) : [0, 0], d; if (r.trigger = i.trigger, (p.scrollTop() !== 0 || p.scrollLeft() !== 0) && ($(".mCSB_" + r.idx + "_scrollbar").css("visibility", "visible"), p.scrollTop(0).scrollLeft(0)), t !== "_resetY" || r.contentReset.y || (o("onOverflowYNone") && u.callbacks.onOverflowYNone.call(n[0]), r.contentReset.y = 1), t !== "_resetX" || r.contentReset.x || (o("onOverflowXNone") && u.callbacks.onOverflowXNone.call(n[0]), r.contentReset.x = 1), t !== "_resetY" && t !== "_resetX") { (r.contentReset.y || !n[0].mcs) && r.overflowed[0] && (o("onOverflowY") && u.callbacks.onOverflowY.call(n[0]), r.contentReset.x = null); (r.contentReset.x || !n[0].mcs) && r.overflowed[1] && (o("onOverflowX") && u.callbacks.onOverflowX.call(n[0]), r.contentReset.x = null); u.snapAmount && (d = (u.snapAmount instanceof Array) ? i.dir === "x" ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount, t = _snapAmount(t, d, u.snapOffset)); switch (i.dir) { case "x": var s = $("#mCSB_" + r.idx + "_dragger_horizontal"), g = "left", y = f[0].offsetLeft, h = [v.width() - f.outerWidth(!1), s.parent().width() - s.width()], e = [t, t === 0 ? 0 : t / r.scrollRatio.x], l = b[1], a = k[1], tt = l > 0 ? l / r.scrollRatio.x : 0, it = a > 0 ? a / r.scrollRatio.x : 0; break; case "y": var s = $("#mCSB_" + r.idx + "_dragger_vertical"), g = "top", y = f[0].offsetTop, h = [v.height() - f.outerHeight(!1), s.parent().height() - s.height()], e = [t, t === 0 ? 0 : t / r.scrollRatio.y], l = b[0], a = k[0], tt = l > 0 ? l / r.scrollRatio.y : 0, it = a > 0 ? a / r.scrollRatio.y : 0 } (e[1] < 0 || e[0] === 0 && e[1] === 0 ? e = [0, 0] : e[1] >= h[1] ? e = [h[0], h[1]] : e[0] = -e[0], n[0].mcs || (c(), o("onInit") && u.callbacks.onInit.call(n[0])), clearTimeout(f[0].onCompleteTimeout), _tweenTo(s[0], g, Math.round(e[1]), w[1], i.scrollEasing), !r.tweenRunning && (y === 0 && e[0] >= 0 || y === h[0] && e[0] <= h[0])) || _tweenTo(f[0], g, Math.round(e[0]), w[0], i.scrollEasing, i.overwrite, { onStart: function () { i.callbacks && i.onStart && !r.tweenRunning && (o("onScrollStart") && (c(), u.callbacks.onScrollStart.call(n[0])), r.tweenRunning = !0, _onDragClasses(s), r.cbOffsets = rt()) }, onUpdate: function () { i.callbacks && i.onUpdate && o("whileScrolling") && (c(), u.callbacks.whileScrolling.call(n[0])) }, onComplete: function () { if (i.callbacks && i.onComplete) { u.axis === "yx" && clearTimeout(f[0].onCompleteTimeout); var t = f[0].idleTimer || 0; f[0].onCompleteTimeout = setTimeout(function () { o("onScroll") && (c(), u.callbacks.onScroll.call(n[0])); o("onTotalScroll") && e[1] >= h[1] - tt && r.cbOffsets[0] && (c(), u.callbacks.onTotalScroll.call(n[0])); o("onTotalScrollBack") && e[1] <= it && r.cbOffsets[1] && (c(), u.callbacks.onTotalScrollBack.call(n[0])); r.tweenRunning = !1; f[0].idleTimer = 0; _onDragClasses(s, "hide") }, t) } } }) } }, _tweenTo = function (n, t, i, r, u, f, e) { function y() { o.stop || (s || w.call(), s = _getTime() - d, p(), s >= o.time && (o.time = s > o.time ? s + h - (s - o.time) : s + h - 1, o.time < s + 1 && (o.time = s + 1)), o.time < r ? o.id = l(y) : k.call()) } function p() { r > 0 ? (o.currVal = tt(o.time, c, v, r, u), a[t] = Math.round(o.currVal) + "px") : a[t] = i + "px"; b.call() } function g() { h = 1e3 / 60; o.time = s + h; l = window.requestAnimationFrame ? window.requestAnimationFrame : function (n) { return p(), setTimeout(n, .01) }; o.id = l(y) } function nt() { o.id != null && (window.requestAnimationFrame ? window.cancelAnimationFrame(o.id) : clearTimeout(o.id), o.id = null) } function tt(n, t, i, r, u) { switch (u) { case "linear": case "mcsLinear": return i * n / r + t; case "mcsLinearOut": return n /= r, n--, i * Math.sqrt(1 - n * n) + t; case "easeInOutSmooth": return (n /= r / 2, n < 1) ? i / 2 * n * n + t : (n--, -i / 2 * (n * (n - 2) - 1) + t); case "easeInOutStrong": return (n /= r / 2, n < 1) ? i / 2 * Math.pow(2, 10 * (n - 1)) + t : (n--, i / 2 * (-Math.pow(2, -10 * n) + 2) + t); case "easeInOut": case "mcsEaseInOut": return (n /= r / 2, n < 1) ? i / 2 * n * n * n + t : (n -= 2, i / 2 * (n * n * n + 2) + t); case "easeOutSmooth": return n /= r, n--, -i * (n * n * n * n - 1) + t; case "easeOutStrong": return i * (-Math.pow(2, -10 * n / r) + 1) + t; case "easeOut": case "mcsEaseOut": default: var f = (n /= r) * n, e = f * n; return t + i * (.499999999999997 * e * f + -2.5 * f * f + 5.5 * e + -6.5 * f + 4 * n) } } var v; n._mTween || (n._mTween = { top: {}, left: {} }); var e = e || {}, w = e.onStart || function () { }, b = e.onUpdate || function () { }, k = e.onComplete || function () { }, d = _getTime(), h, s = 0, c = n.offsetTop, a = n.style, l, o = n._mTween[t]; t === "left" && (c = n.offsetLeft); v = i - c; o.stop = 0; f !== "none" && nt(); g() }, _getTime = function () { return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime() }, _stopTween = function () { var n = this, r, i, t; for (n._mTween || (n._mTween = { top: {}, left: {} }), r = ["top", "left"], i = 0; i < r.length; i++) t = r[i], n._mTween[t].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(n._mTween[t].id) : clearTimeout(n._mTween[t].id), n._mTween[t].id = null, n._mTween[t].stop = 1) }, _delete = function (n, t) { try { delete n[t] } catch (i) { n[t] = null } }, _mouseBtnLeft = function (n) { return !(n.which && n.which !== 1) }, _pointerTouch = function (n) { var t = n.originalEvent.pointerType; return !(t && t !== "touch" && t !== 2) }, _isNumeric = function (n) { return !isNaN(parseFloat(n)) && isFinite(n) }, _childPos = function (n) { var t = n.parents(".mCSB_container"); return [n.offset().top - t.offset().top, n.offset().left - t.offset().left] }, _isTabHidden = function () { function t() { var t = ["webkit", "moz", "ms", "o"], n; if ("hidden" in document) return "hidden"; for (n = 0; n < t.length; n++) if (t[n] + "Hidden" in document) return t[n] + "Hidden"; return null } var n = t(); return n ? document[n] : !1 }; $.fn[pluginNS] = function (n) { if (methods[n]) return methods[n].apply(this, Array.prototype.slice.call(arguments, 1)); if (typeof n != "object" && n) $.error("Method " + n + " does not exist"); else return methods.init.apply(this, arguments) }; $[pluginNS] = function (n) { if (methods[n]) return methods[n].apply(this, Array.prototype.slice.call(arguments, 1)); if (typeof n != "object" && n) $.error("Method " + n + " does not exist"); else return methods.init.apply(this, arguments) }; $[pluginNS].defaults = defaults; window[pluginNS] = !0; $(window).load(function () { $(defaultSelector)[pluginNS](); $.extend($.expr[":"], { mcsInView: $.expr[":"].mcsInView || function (n) { var t = $(n), r = t.parents(".mCSB_container"), u, i; if (r.length) return u = r.parent(), i = [r[0].offsetTop, r[0].offsetLeft], i[0] + _childPos(t)[0] >= 0 && i[0] + _childPos(t)[0] < u.height() - t.outerHeight(!1) && i[1] + _childPos(t)[1] >= 0 && i[1] + _childPos(t)[1] < u.width() - t.outerWidth(!1) }, mcsOverflow: $.expr[":"].mcsOverflow || function (n) { var t = $(n).data(pluginPfx); if (t) return t.overflowed[0] || t.overflowed[1] } }) });

// 以上为公用插件






// 静态网页js-start

    // 获取url参数-封装函数-start
        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null){
                return r[2];
            }else{
                return null;
            }
        }
    // 获取url参数-封装函数-end

    // 全局改动添加底部电话地址节点-start
        function dianhua(){
            aa='<div class="gy_yqlj_line22">'
            aa+='                <a href="../0_home_page/index.html"><img src="../imgs/gy/logo.png" alt=""></a>'
            aa+='                <ul>'
            aa+='                    <li class="gy_f_1"><img src="../imgs/gy/gy_f_1_12.png" alt=""><span>86-010-69667627</span></li>'
            aa+='                    <li class="gy_f_2"><img src="../imgs/gy/gy_f_2_16.png" alt=""><span>北京市怀柔区雁栖经济开发区乐园南二街1号</span></li>'
            aa+='                </ul>'
            aa+='            </div>'
            $('.gy_yqlj_line22').remove();
            $('.gy_yqlj_line2').append(aa);
        }
        dianhua();
    // 全局改动添加底部电话地址节点-end

    // 全局改动添加搜索框节点-start
        function sousuokuang(){
             var aa='<div class="gy_header_line12_sosuo seach">'
                aa+='<input type="text" class="gy_text text">'
                aa+='<a href="/0_home_page/zhK-search.html" class=" btn"><img src="../imgs/gy/gy_sousuo.jpg" alt=""></a>'
            aa+='</div>'
            aa+='<div class="gy_header_line12_sosuo_xiexian"></div>'
            $('.gy_header_line12').empty();
            $('.gy_header_line12').append(aa);
        }
        sousuokuang();
    // 全局改动添加搜索框节点-end

    // 全局改动添加友情链接节点-start
        function youqinglianjie(){
            var aa='<span class="gy_yqlj_line1_span">友情链接 ></span>'
             aa+='       <ul class="gy_yqlj_line1_ul">'
             aa += '           <li class="gy_yqlj_line1_li">'
              aa+='              <a href="">政府机构</a>'
             aa+='               <span></span>'
             aa += '               <ul class="mCustomScrollbar" data-mcs-theme="minimal-dark">'
             aa+='                   <li><a href="">百度</a></li>'
             aa+='                   <li><a href="">百度</a></li>'
             aa+='                   <li><a href="">百度</a></li>'
             aa+='               </ul>'
            aa+='            </li>'
              aa+='          <li class="gy_yqlj_line1_li">'
              aa+='              <a href="">合作伙伴</a>'
              aa+='              <span></span>'
              aa += '              <ul class="mCustomScrollbar" data-mcs-theme="minimal-dark">'
              aa+='                  <li><a href="">百度</a></li>'
             aa+='                   <li><a href="">百度</a></li>'
              aa+='                  <li><a href="">百度</a></li>'
              aa+='              </ul>'
              aa+='          </li>'
              aa+='          <li class="gy_yqlj_line1_li">'
             aa+='               <a href="">社会团体</a>'
               aa+='             <span></span>'
               aa += '              <ul class="mCustomScrollbar" data-mcs-theme="minimal-dark">'
              aa+='                  <li><a href="">百度</a></li>'
              aa+='                  <li><a href="">百度</a></li>'
              aa+='                  <li><a href="">百度</a></li>'
              aa+='              </ul>'
              aa+='          </li>'
              aa+='          <li class="gy_yqlj_line1_li">'
              aa+='              <a href="">常用链接</a>'
              aa+='              <span></span>'
              aa += '              <ul class="mCustomScrollbar" data-mcs-theme="minimal-dark">'
              aa+='                  <li><a href="">百度</a></li>'
              aa+='                  <li><a href="">百度</a></li>'
              aa+='                  <li><a href="">百度</a></li>'
              aa+='              </ul>'
              aa+='          </li>'
              aa+='      </ul>'
            $('.gy_yqlj_line1').empty();
            $('.gy_yqlj_line1').append(aa);
        }
        youqinglianjie();
    // 全局改动添加友情链接节点-end

    // 全局改动添加底部蓝条节点-start
        function lantiao(){
            aa = '<p>Copyright(C)2011 Synefuels China Technology Co. Ltd.版权所有 京ICP备13050464号 <a href="/1_about/site_map.html">网站地图</a><span>|</span><a href="/1_about/privacy.html">隐私条款</a><span>|</span><a href="/1_about/statement.html">法律声明</a></p>'
            $('.gy_lantiao p').remove();
            $('.gy_lantiao').append(aa);
        }
        lantiao();
    // 全局改动添加底部蓝条节点-end

    // 全局改动添加头部细线节点-start
        function gy_border(){
            aa='<div class="gy_border"></div>'
            $('.gy_border').remove();
            $('.gy_header_line1').append(aa);
        }
        gy_border();
    // 全局改动添加头部细线节点-end

    // 顶部第一行全局改动-start
        // 登陆
// var yyy='<div class="gy_lianjie">'
// yyy+=' <span>分享至：</span>'
// yyy+=' <a href=""><img src="../imgs/gy/gy_fx1_03.jpg" alt=""
// class="gy_lianjie1"></a>'
// yyy+=' <a href=""><img src="../imgs/gy/gy_fx2_05.jpg" alt=""
// class="gy_lianjie2"></a>'
// yyy+=' <a href=""><img src="../imgs/gy/gy_fx32_07.jpg" alt=""
// class="gy_lianjie3"></a>'
// yyy+=' <a href=""><img src="../imgs/gy/gy_fx4_09.jpg" alt=""
// class="gy_lianjie4"></a>'
// yyy+=' </div>'
        	 
             var yyy = 	  '<div class="gy_lianjie">';
            	 yyy += 	'<div class="jiathis_style" style="margin-right:8px;float:left;" id="ckepop">'
                 yyy +='        <span>分享至：</span>'
                 yyy +='    	<a class="jiathis_button_cqq" title="分享到QQ" style="margin-top:7px;"></a>'
                 yyy+='           <a class="jiathis_button_weixin" title="分享到微信" style="margin-top:7px;"></a>'
                 yyy+='           <a class="jiathis_button_tsina" title="分享到新浪微博" style="margin-top:7px;"></a>'
                 yyy+='           <a class="jiathis_button_tqq" title="分享到腾讯微博" style="margin-top:7px;"></a>'	 
                 yyy += '<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=1" charset="utf-8"></script>'
                	 
                 yyy +='    </div>'
                 yyy +='  </div>'
        	 
          yyy+='               <div class="gy_denglu">'
          yyy+='              <a href="" class="gy_denglu_denglu">登陆</a>'
          yyy+='              <ul class="gy_denglu_ul">'
         yyy+='                   <li><a href="http://mail.synfuelschina.com.cn/">企业邮箱</a></li>'
        yyy+='                    <li><a href="">OA办公系统</a></li>'
        yyy+='                 </ul>'
        yyy+='             </div>'
        $('.gy_lianjie').remove();
        $('.gy_header_line11').append(yyy);
        // 分享鼠标触碰
        $('.gy_lianjie1').mouseenter(function (){
            $(this).attr("src","../imgs/gy/gy_fx12_03.jpg");
        })
        $('.gy_lianjie2').mouseenter(function (){
            $(this).attr("src","../imgs/gy/gy_fx22_05.jpg");
        })
        $('.gy_lianjie3').mouseenter(function (){
            $(this).attr("src","../imgs/gy/gy_fx3_07.jpg");
        })
        $('.gy_lianjie4').mouseenter(function (){
            $(this).attr("src","../imgs/gy/gy_fx42_09.jpg");
        })
        $('.gy_lianjie1').mouseleave(function (){
            $(this).attr("src","../imgs/gy/gy_fx1_03.jpg");
        })
        $('.gy_lianjie2').mouseleave(function (){
            $(this).attr("src","../imgs/gy/gy_fx2_05.jpg");
        })
        $('.gy_lianjie3').mouseleave(function (){
            $(this).attr("src","../imgs/gy/gy_fx32_07.jpg");
        })
        $('.gy_lianjie4').mouseleave(function (){
            $(this).attr("src","../imgs/gy/gy_fx4_09.jpg");
        })
    // 顶部第一行全局改动-end

    // 友情链接点击-start
        $('.gy_yqlj_line1 .gy_yqlj_line1_li').click(function () {
            $(this).children('ul').show();
        })
        $('.gy_yqlj_line1 .gy_yqlj_line1_li').mouseleave(function () {
            $(this).children('ul').hide();
        })
    // 友情链接点击-end

    // 回到顶部-start
        $(function () {
            var breadcrumb = $('.breadcrumb');
            var breadcrumbOffSet = breadcrumb.length > 0 ? (breadcrumb.offset().top+20) : 0;
            $(window).scroll(function () {
                var scT=$(window).scrollTop();
                if ( scT> 100) {
                    $(".gy_goTop ").fadeIn();
                    if (breadcrumb.length > 0 && scT > (breadcrumbOffSet)) {
                        breadcrumb.addClass('fixed');
                    }
                }
                else {
                    $(".gy_goTop ").hide();
                }
                if (breadcrumb.length > 0 && scT <= (breadcrumbOffSet)) {
                    breadcrumb.removeClass('fixed');
                }
            });
            $(".gy_goTop ").click(function () {

                $('html,body').animate({ 'scrollTop': 0 }, 500);
            });
        });
        // 返回顶部mouseenter事件
        $('.gy_goTop img').mouseenter(function(){
            $('.gy_goTop img').attr("src","../imgs/gy/gy_goTop_03.png")
        })
        $('.gy_goTop img').mouseleave(function(){
            $('.gy_goTop img').attr("src","../imgs/gy/gy_goTop.png")
        })
    // 回到顶部-end

    // 导航鼠标点击移出事件-satrt
        // 二级菜单
        $('.gy_header').on('mouseenter', '.gy_header_line2 .gy_cd > li', function () {
            $('.subNav').show();
            $(this).addClass('current').siblings().removeClass("current");

            if (!$(this).hasClass('no_child')) {
                // $('.subNav').slideDown();
                $('.subNav').stop().animate({height:'516px'},500);
            } else {
                // $('.subNav').slideUp();
                $('.subNav').stop().animate({height:'0px'},500);
            }
            $('.subNav .conwidth').eq($(this).index()).show().siblings().hide();

        });
        $('.body,.gy_header_line3,.gy_header_line1').on('mouseenter', function () {
            // $('.subNav').slideUp(function () {
            // $('.gy_cd > li').removeClass('current');

            // });
            $('.gy_cd > li').removeClass('current');
            $('.subNav').stop().animate({height:'0px'},500,function(){
                $('.subNav').show();
            });
            
        });
    // 导航鼠标点击移出事件-end

    // 面包屑导航-satrt
        $('.breadcrumb>li>a').on({
            mouseover: function () {
                $(this).next().stop().fadeTo(300, 1);
                $(this).find(".icon").html("<i></i>");
                $(this).addClass('hover');
            }, mouseleave: function () {
                
            }
        });
        $('.breadcrumb li').on("mouseleave", function () {
            $('.breadcrumb li dl').stop().fadeTo(300, 0).hide();
            $('.breadcrumb>li>a').removeClass('hover');
        });
        $('.breadcrumb li dl dd').on({
            mouseover: function () {
                $(this).addClass('active');
            },
            mouseleave:function () {
                $(this).removeClass('active');
            }
        });
        $('.breadcrumb li dl').on('mouseleave', function () {
            $(this).stop().fadeTo(300, 0);
            $('.breadcrumb>li>a').removeClass('hover');
        });
    // 面包屑导航-end

    // 导航 start
        var navStr = "<div class=\"gy_header_line2\">";
        navStr += "	<ul class=\"gy_cd\">";
        navStr += "		<li>";
        navStr += "			<a href=\"../1_about/index_gsjj.html\">关于中科</a>";
        navStr += "			<ul></ul>";
        navStr += "		</li>";
        navStr += "		<li>";
        navStr += "			<a href=\"../2_news/index_gsxw.html\">新闻资讯</a>";
        navStr += "			<ul></ul>";
        navStr += "		</li>";
        navStr += "		<li>";
        navStr += "            <a href=\"../3_business/index.html\">业务范围</a>";
        navStr += "			<ul></ul>";
        navStr += "		</li>";
        navStr += "		<li>";
        navStr += "			<a href=\"../4_project/index.html\">项目展示</a>";
        navStr += "			<ul></ul>";
        navStr += "		</li>";
        navStr += "		<li>";
        navStr += "			<a href=\"../5_engineering/index.html\">工程研发</a>";
        navStr += "			<ul></ul>";
        navStr += "		</li>";
        navStr += "		<li>";
        navStr += "			<a href=\"../6_IR/index_gpxx.html\">投资者关系</a>";
        navStr += "			<ul></ul>";
        navStr += "		</li>";
        navStr += "		<li class=\"no_child\">";
        navStr += "			<a href=\"../7_social_responsibility/index.html\">社会责任</a>";
        navStr += "			<ul></ul>";
        navStr += "		</li>";
        navStr += "		<li>";
        navStr += "			<a href=\"../8_career_development/index_rzzk.html\">职业发展</a>";
        navStr += "			<ul></ul>";
        navStr += "		</li>";
        navStr += "	</ul>";
        navStr += "</div>";
        $('.gy_header_line2').replaceWith(navStr);
    // 导航 end

    // 底部链接-start
        var xxxx = '<ul class="gy_yqlj_line21">'
        xxxx += '<li class="gy_yqlj_line21_li">'
        xxxx += '<a href="../1_about/index_gsjj.html" class="gy_yqlj_line21_a">关于中科</a>'
        xxxx += '<ul>'
        xxxx += '<li><a href="../1_about/index_gsjj.html">公司简介</a></li>'
        xxxx += '<li><a href="../1_about/index_zzjg.html">组织结构</a></li>'
        xxxx += '<li><a href="../1_about/index_fzlc.html">发展历程</a></li>'
        xxxx += '<li><a href="../1_about/index_qyry.html">企业荣誉</a></li>'
        xxxx += '</ul>'
        xxxx += '</li>'
        xxxx += '<li class="gy_yqlj_line21_li">'
        xxxx += '<a href="../3_business/index.html" class="gy_yqlj_line21_a">业务范围</a>'
        xxxx += '<ul>'
        xxxx += '<li><a href="../3_business/consultation.html">工程咨询</a></li>'
        xxxx += '<li><a href="../3_business/design.html">工程设计</a></li>'
        xxxx += '<li><a href="../3_business/equipment.html">专利专有设备</a></li>'
        xxxx += '<li><a href="../3_business/epc.html">EPC总承包</a></li>'
        xxxx += '</ul>'
        xxxx += '</li>'
        xxxx += '<li class="gy_yqlj_line21_li">'
        xxxx += '<a href="../5_engineering/index.html" class="gy_yqlj_line21_a">工程研发</a>'
        xxxx += '<ul>'
        xxxx += '<li><a href="../5_engineering/index.html">研发机制</a></li>'
        xxxx += '<li><a href="../5_engineering/process.html">研发流程</a></li>'
        xxxx += '<li><a href="../5_engineering/proprietary.html">专有技术</a></li>'
        // xxxx += '<li><a href="../5_engineering/patent.html">专利技术</a></li>'
        xxxx += '</ul>'
        xxxx += '</li>'
        xxxx += '<li class="gy_yqlj_line21_li">'
        xxxx += '<a href="" class="gy_yqlj_line21_a">投资者关系</a>'
        xxxx += '<ul>'
        xxxx += '<li><a href="">股票信息</a></li>'
        xxxx += '<li><a href="">公告信息</a></li>'
        xxxx += '<li><a href="">投资者服务</a></li>'
//        xxxx += '<li><a href="">利润分配</a></li>'
        xxxx += '</ul>'
        xxxx += '</li>'
        xxxx += '<li class="gy_yqlj_line21_li">'
        xxxx += '<a href="../8_career_development/index_dwjs.html" class="gy_yqlj_line21_a">职业发展</a>'
        xxxx += '<ul>'
        xxxx += '<li><a href="../8_career_development/index_rzzk.html">人在中科</a></li>'
        xxxx += '<li><a href="../8_career_development/index_ygtd.html">员工天地</a></li>'
        xxxx += '<li><a href="../8_career_development/index_dwjs.html">队伍建设</a></li>'
        xxxx += '<li><a href="../8_career_development/index_rczp.html">人才招聘</a></li>'
        xxxx += '</ul>'
        xxxx += '</li>'
        xxxx += '</ul>'
        $('.gy_yqlj_line21').remove();
        $('.gy_yqlj_line2').prepend(xxxx);
    // 底部链接-end

    // 下拉导航-start
        var html = "<!-- 下拉导航 -->";
        html += "<div class=\"subNav\">";
        html += "    <!-- 关于中科 -->";
        html += "    <div class=\"conwidth\">";
        html += "        <ul>";
        html += "            <li>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_gsjj.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh1_03.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_gsjj.html\">公司简介</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_dsczc.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh2_06.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_dsczc.html\">董事长致辞</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_qyzl.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh3_08.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_qyzl.html\">企业治理</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_zzjg.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh4_10.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_zzjg.html\">组织结构</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "            </li>";
        html += "            <li>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_fzzl.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh5_05.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_fzzl.html\">发展战略</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_fzlc.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh6_10.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_fzlc.html\">发展历程</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_lyxg.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh7.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_lyxg.html\">利益相关方</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_qyry.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh8.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_qyry.html\">企业荣誉</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "            </li>";
        html += "            <li>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_txjs.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh9_07.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_txjs.html\">体系建设</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../1_about/index_lxwm.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh10_14.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../1_about/index_lxwm.html\">联系我们</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "                <!--<div class=\"pic\">";
        html += "                    <a href=\"#\">";
        html += "                        <img src=\"../imgs/gy/gy_dh_datu1_27.jpg\" width=\"348\" height=\"252\" />";
        html += "                    </a>";
        html += "                </div>";
        html += "                <img src=\"../imgs/gy/icon_sub_9.jpg\" width=\"349\" height=\"136\" />-->";
        html += "            </li>";
        html += "        </ul>";
        html += "    </div>";
        html += "    <!-- 新闻资讯 -->";
        html += "    <div class=\"conwidth\">";
        html += "        <ul>";
        html += "            <li>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../2_news/index_gsxw.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh11_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../2_news/index_gsxw.html\">公司新闻</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../2_news/index_hydt.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh12_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../2_news/index_hydt.html\">行业动态</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../2_news/index_xmjz.html\">";
        html += "                                    <img src=\"../imgs/gy/icon_xmjz_1.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../2_news/index_xmjz.html\">项目进展</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td style='height:70px;'>";
//        html += "                                <a href=\"../2_news/index_xmjz.html\">";
//        html += "                                    <img src=\"../imgs/gy/icon_xmjz_1.jpg\" width=\"70\" height=\"70\" />";
//        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "            </li>";
        html += "            <li>";
        html += "                    ";
        html += "            </li>";
        html += "            <li class=\"boder_0\">";
        html += "                <div class=\"pic\">";
        html += "                    <a href=\"#\">";
        html += "                        <img src=\"../imgs/gy/gy_dh_datu1_27.jpg\" width=\"348\" height=\"369\" />";
        html += "                    </a>";
        html += "                </div>";
//        html += "                <img src=\"../imgs/gy/gy_dh_datu_27.jpg\" width=\"349\" height=\"136\" />";
        html += "            </li>";
        html += "        </ul>";
        html += "    </div>";
        html += "    <!-- 业务范围 -->";
        html += "    <div class=\"conwidth\">";
        html += "        <ul>";
        html += "            <li>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../3_business/consultation.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh13_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../3_business/consultation.html\">工程咨询</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../3_business/design.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh14_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../3_business/design.html\">工程设计</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../3_business/equipment.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh15_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../3_business/equipment.html\">专利专有设备</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../3_business/epc.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh16_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../3_business/epc.html\">EPC总承包</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "            </li>";
        html += "            <li>";
        html += "";
        html += "            </li>";
        html += "            <li class=\"boder_0\">";
        html += "                <div class=\"pic\">";
        html += "                    <a href=\"#\">";
        html += "                        <img src=\"../imgs/gy/gy_dh_datu1_27.jpg\" width=\"348\" height=\"369\" />";
        html += "                    </a>";
        html += "                </div>";
//        html += "                <img src=\"../imgs/gy/gy_dh_datu_27.jpg\" width=\"349\" height=\"136\" />";
        html += "            </li>";
        html += "        </ul>";
        html += "    </div>";
        html += "    <!-- 项目展示 -->";
        html += "    <div class=\"conwidth\">";
        html += "        <ul>";
        html += "            <li>";
        html += "                <p style='font-size: 16px;color: #013b59;font-weight: bold; margin-bottom:30px;'>已建成煤制油示范厂项目</p>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../4_project/yitaishifanchang.html?id=4028814d52871d3d015287bd5e23005d\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh17_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../4_project/yitaishifanchang.html?id=4028814d52871d3d015287bd5e23005d\">伊泰示范厂</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../4_project/luanshifanchang.html?id=8aad12b1528c49db01529ab2c9fa0018\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh18_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../4_project/luanshifanchang.html?id=8aad12b1528c49db01529ab2c9fa0018\">潞安示范厂</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../4_project/shenhuashifanchang.html?id=8aad12b152ed61890152ee42234e007d\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh19_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../4_project/shenhuashifanchang.html?id=8aad12b152ed61890152ee42234e007d\">神华示范厂</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += " <a href='javascript:void(0);' style='margin-top: 44px;' class='zhuyegengduogengduo'></a>";
        html += "            </li>";
        html += "            <li>";
        html += "                <p style='font-size: 16px;color: #013b59;font-weight: bold; margin-bottom:30px;'>正在执行的煤制油商业化项目</p>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../4_project/shenhuaningmei.html?id=4028814d52871d3d015287bc7b510059\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh20_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../4_project/shenhuaningmei.html?id=4028814d52871d3d015287bc7b510059\">神华宁煤项目</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../4_project/shanxiluan.html?id=4028814d52871d3d015287bcdc53005b\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh21_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../4_project/shanxiluan.html?id=4028814d52871d3d015287bcdc53005b\">山西潞安项目</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../4_project/yitaikangjinqi.html?id=8aad12b152ed61890152ee3b4604006e\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh22_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../4_project/yitaikangjinqi.html?id=8aad12b152ed61890152ee3b4604006e\">伊泰杭锦旗项目</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        // html += " <tr>";
        // html += " <td>";
        // html += " <a href=\"../4_project/yitaiyili.html\">";
        // html += " <img src=\"../imgs/gy/gy_dh23_26.jpg\" width=\"70\"
		// height=\"70\" />";
        // html += " </a>";
        // html += " </td>";
        // html += " <td>";
        // html += " <strong><a
		// href=\"../4_project/yitaiyili.html\">伊泰伊犁项目</a></strong>";
        // html += " </td>";
        // html += " </tr>";
        // html += " <tr>";
        // html += " <td>";
        // html += " <a href=\"../4_project/yitaiganquanbao.html\">";
        // html += " <img src=\"../imgs/gy/gy_dh24_26.jpg\" width=\"70\"
		// height=\"70\" />";
        // html += " </a>";
        // html += " </td>";
        // html += " <td>";
        // html += " <strong><a
		// href=\"../4_project/yitaiganquanbao.html\">伊泰甘泉堡项目</a></strong>";
        // html += " </td>";
        // html += " </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "                <a href=\"../4_project/index.html?id=402881e9511defaf01511df185850005\" style='margin-top: 23px;' class='zhuyegengduogengduo'>更多...</a>";
        html += "            </li>";
        html += "            <li class=\"boder_0\">";
        html += "                <p style='font-size: 16px;color: #013b59;font-weight: bold; margin-bottom:30px;'>其他项目</p>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../4_project/jingneng.html?id=4028814d52871d3d015287bdb24a005f\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh25.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../4_project/jingneng.html?id=4028814d52871d3d015287bdb24a005f\">京能项目</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        // html += " <tr>";
        // html += " <td>";
        // html += " <a href=\"../4_project/yitaidalu.html\">";
        // html += " <img src=\"../imgs/gy/gy_dh25c.jpg\" width=\"70\"
		// height=\"70\" />";
        // html += " </a>";
        // html += " </td>";
        // html += " <td>";
        // html += " <strong><a
		// href=\"../4_project/yitaidalu.html\">伊泰大路项目</a></strong>";
        // html += " </td>";
        // html += " </tr>";
        // html += " <tr>";
        // html += " <td>";
        // html += " <a href=\"../4_project/guizhouyufu.html\">";
        // html += " <img src=\"../imgs/gy/gy_dh27.jpg\" width=\"70\"
		// height=\"70\" />";
        // html += " </a>";
        // html += " </td>";
        // html += " <td>";
        // html += " <strong><a
		// href=\"../4_project/guizhouyufu.html\">贵州渝富项目</a></strong>";
        // html += " </td>";
        // html += " </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../4_project/qinghaiguilu.html?id=4028814d52871d3d015287be46040061\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh28_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../4_project/qinghaiguilu.html?id=4028814d52871d3d015287be46040061\">青海桂鲁项目</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "                <a href=\"../4_project/index.html?id=402881e9511defaf01511df185850005\" style='margin-top: 113px;' class='zhuyegengduogengduo'>更多...</a>";
        // html += " <div class=\"pic\">";
        // html += " <a href=\"#\">";
        // html += " <img src=\"../imgs/gy/icon_sub_8.jpg\" width=\"348\"
		// height=\"252\" />";
        // html += " </a>";
        // html += " </div>";
        // html += " <img src=\"../imgs/gy/icon_sub_9.jpg\" width=\"349\"
		// height=\"136\" />";
        html += "            </li>";
        html += "        </ul>";
        html += "    </div>";
        html += "    <!-- 工程研发 -->";
        html += "    <div class=\"conwidth\">";
        html += "        <ul>";
        html += "            <li>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../5_engineering/index.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh29_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../5_engineering/index.html\">研发机制</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../5_engineering/process.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh30_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../5_engineering/process.html\">研发流程</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../5_engineering/patent.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh31_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../5_engineering/patent.html\">专利技术</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td style='height:70px;'>";
//        html += "                                <a href=\"../5_engineering/patent.html\">";
//        html += "                                    <img src=\"../imgs/gy/gy_dh31_26.jpg\" width=\"70\" height=\"70\" />";
//        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        // html += " <tr>";
        // html += " <td>";
        // html += " <a href=\"../5_engineering/proprietary.html\">";
        // html += " <img src=\"../imgs/gy/icon_sub_4.jpg\" width=\"70\"
		// height=\"70\" />";
        // html += " </a>";
        // html += " </td>";
        // html += " <td>";
        // html += " <strong><a
		// href=\"../5_engineering/proprietary.html\">专有技术</a></strong>";
        // html += " </td>";
        // html += " </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "            </li>";
        html += "            <li>";
        html += "";
        html += "            </li>";
        html += "            <li class=\"boder_0\">";
        html += "                <div class=\"pic\">";
        html += "                    <a href=\"#\">";
        html += "                        <img src=\"../imgs/gy/gy_dh_datu1_27.jpg\" width=\"348\" height=\"369\" />";
        html += "                    </a>";
        html += "                </div>";
//        html += "                <img src=\"../imgs/gy/gy_dh_datu_27.jpg\" width=\"349\" height=\"136\" />";
        html += "            </li>";
        html += "        </ul>";
        html += "    </div>";
        html += "    <!-- 投资者关系 -->";
//        html += "    <div class=\"conwidth\"></div>";
        
        html += "    <div class=\"conwidth\">";
        html += "        <ul>";
        html += "            <li>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../6_IR/index_gpxx.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_tz_01.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../6_IR/index_gpxx.html\">股票信息</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../6_IR/index_ggxx.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_tz_02.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../6_IR/index_ggxx.html\">公告信息</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../6_IR/index_tzzfw.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_tz_03.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../6_IR/index_tzzfw.html\">投资者服务</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td style='height:70px;'>";
//        html += "                                <a href=\"../2_news/index_xmjz.html\">";
//        html += "                                    <img src=\"../imgs/gy/icon_xmjz_1.jpg\" width=\"70\" height=\"70\" />";
//        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "            </li>";
        html += "            <li>";
        html += "                    ";
        html += "            </li>";
        html += "            <li class=\"boder_0\">";
        html += "                <div class=\"pic\">";
        html += "                    <a href=\"#\">";
        html += "                        <img src=\"../imgs/gy/gy_dh_datu1_27.jpg\" width=\"348\" height=\"369\" />";
        html += "                    </a>";
        html += "                </div>";
//        html += "                <img src=\"../imgs/gy/gy_dh_datu_27.jpg\" width=\"349\" height=\"136\" />";
        html += "            </li>";
        html += "        </ul>";
        html += "    </div>";
        
        html += "    <!-- 社会责任 -->";
        html += "    <div class=\"conwidth\"></div>";
        html += "    <!-- 职业发展 -->";
        html += "    <div class=\"conwidth\">";
        html += "        <ul>";
        html += "            <li>";
        html += "                <table>";
        html += "                    <tbody>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../8_career_development/index_rzzk.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh32_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../8_career_development/index_rzzk.html\">人在中科</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../8_career_development/index_ygtd.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh33_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../8_career_development/index_ygtd.html\">员工天地</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../8_career_development/index_dwjs.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh34_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../8_career_development/index_dwjs.html\">队伍建设</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                        <tr>";
        html += "                            <td>";
        html += "                                <a href=\"../8_career_development/index_rczp.html\">";
        html += "                                    <img src=\"../imgs/gy/gy_dh35_26.jpg\" width=\"70\" height=\"70\" />";
        html += "                                </a>";
        html += "                            </td>";
        html += "                            <td>";
        html += "                                <strong><a href=\"../8_career_development/index_rczp.html\">人才招聘</a></strong>";
        html += "                            </td>";
        html += "                        </tr>";
        html += "                    </tbody>";
        html += "                </table>";
        html += "            </li>";
        html += "            <li>";
        html += "";
        html += "            </li>";
        html += "            <li class=\"boder_0\">";
        html += "                <div class=\"pic\">";
        html += "                    <a href=\"#\">";
        html += "                        <img src=\"../imgs/gy/gy_dh_datu1_27.jpg\" width=\"348\" height=\"369\" />";
        html += "                    </a>";
        html += "                </div>";
//        html += "                <img src=\"../imgs/gy/gy_dh_datu_27.jpg\" width=\"349\" height=\"136\" />";
        html += "            </li>";
        html += "        </ul>";
        html += "    </div>";
        html += "</div>";
        html += "<!-- //下拉导航 -->";
        $('.gy_header').after(html);
    // 下拉导航-end
// 静态网页js-end

// ajax-start
    // logo-start
        function logo_ajax(){
            $.ajax({
                type:'get',
                url:'/zky/zkLogo/getZkLogo',
// async : false,
                success:function (data){
                    if (data) {
                        if (data.picSrc) {
                            $('.logo img').attr('src',data.picSrc);
                            $('.gy_yqlj_line22 a img').attr('src',data.picSrc);
                        };
                    };
                },
                error:function(){
                   console.log("加载失败");
                }
            }); 
        }
        logo_ajax();
    // logo-end

    // 友情链接-satrt
        function yqlj_ajax(){
            $.ajax({
                type:'get',
                url:'/zky/zkLinkInfo/selectZkLinkInfoList',
// async : false,
                success:function (data){
                    if (data) {
                        $('.gy_yqlj_line1 > ul > li').find('li').remove();
                        for (var i = 0; i < data.length; i++) {
                            for (var x = 0; x < data[i].list.length; x++) {
                                $('.gy_yqlj_line1 > ul > li').eq(i).find('ul').append('<li><a href="'+data[i].list[x].url+'" target="_blank">'+data[i].list[x].name+'</li></a>')
                            };
                        };
                    };
                },
                error:function(){
                   console.log("加载失败");
                }
            }); 
        }
        yqlj_ajax();
    // 友情链接-end

    // 公司信息-satrt
        function gsxx_ajax(){
            $.ajax({
                type:'get',
                url:'/zky/zkCompInfo/selectZkCompInfo',
// async : false,
                success:function (data){
                    if (data) {
                        $('.gy_yqlj_line22 li span').eq(0).html(data.list[1].tele);
                        $('.gy_yqlj_line22 li span').eq(1).html(data.list[1].addr);
                    };
                },
                error:function(){
                   console.log("加载失败");
                }
            }); 
        }
        gsxx_ajax();
    // 公司信息-end

    // 获取所有首部菜单-satrt
        function ywfw_ajax(){
            $.ajax({
                type:'get',
                url:'/zky/zkMenu/getHeadMenuList',
                async : false, 
                success:function (data){
                    if (data) {
                    	Head_menu = data;
                        // 获取一级菜单
                        for (var i = 0; i < data.length; i++) {
                            var url=$('.gy_cd li a').eq(i).attr('href');
                            $('.gy_cd li a').eq(i).html(data[i].functionname).attr('href',url+"?id="+data[i].id);

                            // 获取二级菜单
                            for (var x = 0; x < data[i].subList.length; x++) {
                                // var
								// url_er=$('.conwidth').eq(i).find('tr').eq(x).find('a').eq(0).attr('href');
                                // $('.conwidth').eq(i).find('tr').eq(x).find('a').attr('href',url_er+"?id="+data[i].subList[x].id);
                                // $('.conwidth').eq(i).find('tr').eq(x).find('strong
								// a').html(data[i].subList[x].functionname);
                                if (i!=3) {
                                    var url_er=$('.conwidth').eq(i).find('tr').eq(x).find('a').eq(0).attr('href');
                                    $('.conwidth').eq(i).find('tr').eq(x).find('a').attr('href',url_er+"?id="+data[i].subList[x].id);
                                    $('.conwidth').eq(i).find('tr').eq(x).find('strong a').html(data[i].subList[x].functionname);
                                };
                            };
                        };
                        try {
                            // 关于中科没有主页，默认跳转到关于我们子页面
                            $('.gy_cd li a').eq(0).html(data[0].functionname).attr('href', '../1_about/index_gsjj.html?id=4028814d52871d3d0152878beb110015');
                            // 工程研发没有主页，默认跳转到子页面
                            $('.gy_cd li a').eq(4).html(data[4].functionname).attr('href', '../5_engineering/index.html?id=4028814d52871d3d015287c15b6e0063');
                            // 职业发展没有主页，默认跳转到子页面
                            $('.gy_cd li a').eq(7).html(data[7].functionname).attr('href', '../8_career_development/index_rzzk.html?id=4028814d52871d3d015287abf0a50039');
                            // 新闻资讯没有主页，默认跳转到子页面
                            $('.gy_cd li a').eq(1).html(data[1].functionname).attr('href', '../2_news/index_gsxw.html?id=4028814d52871d3d015287a3546b0031');
                        } catch (e) {

                        }
                        
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
        }
        ywfw_ajax();
    // 获取所有首部菜单-end

    // 获取所有底部菜单-satrt
        function dbcd_ajax(){
            $.ajax({
                type:'get',
                url:'/zky/zkMenu/getFootMenuList',
// async : false,
                success:function (data){
                    if (data) {
                        // 获取一级菜单
                        for (var i = 0; i < data.length; i++) {
                            var url=$('.gy_yqlj_line21 > li > a').eq(i).attr('href');
                            $('.gy_yqlj_line21 > li > a').eq(i).html(data[i].functionname).attr('href',url+"?id="+data[i].id);

                            // 获取二级菜单
                            for (var x = 0; x < data[i].subList.length; x++) {
                                var url_er=$('.gy_yqlj_line21 > li').eq(i).find('li a').eq(x).attr('href');
                                $('.gy_yqlj_line21 > li').eq(i).find('li a').eq(x).html(data[i].subList[x].functionname).attr('href',url_er+"?id="+data[i].subList[x].id);
                            };
                        };
                        try {
                            // 关于中科没有主页，默认跳转到关于我们子页面
                            $('.gy_yqlj_line21 > li > a').eq(0).html(data[0].functionname).attr('href', '../1_about/index_gsjj.html?id=4028814d52871d3d0152878beb110015');
                            // 工程研发没有主页，默认跳转到子页面
                            $('.gy_yqlj_line21 > li > a').eq(2).html(data[2].functionname).attr('href', '../5_engineering/index.html?id=4028814d52871d3d015287c15b6e0063');
                            // 职业发展没有主页，默认跳转到子页面
                            $('.gy_yqlj_line21 > li > a').eq(4).html(data[4].functionname).attr('href', '../8_career_development/index_rzzk.html?id=4028814d52871d3d015287abf0a50039');
                        } catch (e) {

                        }
                        
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
        }
        dbcd_ajax();
    // 获取所有底部菜单-end

    // 关于中科导航封装-satrt
        var gyzk_menuId = "402881e9511ddff901511de44ac80002";
        function min_sbcd_ajax(){
            $.ajax({
                type:'get',
// url:'/zky/zkMenu/getHeadMenuList',
// url:'/zky/zkMenu/selectHeadMenuByParentId',
                url:'/zky/zkMenu/selectMenuListByParentId',
                data:{parentId:gyzk_menuId},
// async : false,
                success:function (data){
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            var url_er=$('.breadcrumb dd a').eq(i).attr('href');
                            $('.breadcrumb dd a').eq(i).html(data[i].functionname).attr('href',url_er+"?id="+data[i].id);
                        };

// try {
// for (var i = 0; i < data[1].subList.length; i++) {
// var url_er = $('.breadcrumb dd a').eq(i).attr('href');
// $('.breadcrumb dd
// a').eq(i).html(data[1].subList[i].functionname).attr('href', url_er + "?id="
// + data[1].subList[i].id);
// };
// } catch (e) {
//
// }

                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
            // 头部banner
            $.ajax({
                type:'get',
                url:'/zky/zkContentInfo/selectContentByMenuId?menuId=402881e9511ddff901511de44ac80002',
// async : false,
                success:function (data){
                    if (data) {
                        $('.gy_header_line3 .gy_text span').eq(0).html(data[0].title);
                        $('.gy_header_line3 .gy_text span').eq(1).html(data[0].content);
                        $('.gy_header_line3 img').attr('src',data[0].imgs);
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
        }
    // 关于中科导航封装-end

    // 新闻资讯导航封装-satrt
    var xwzx_menuId = "402881e9511ddff901511de575aa0005";   
    function min_xwzx_ajax(){
        $.ajax({
            type:'get',
// url:'/zky/zkMenu/getHeadMenuList',
// url:'/zky/zkMenu/selectHeadMenuByParentId',
            url:'/zky/zkMenu/selectMenuListByParentId',
            data:{parentId:xwzx_menuId},
// async : false,
            success:function (data){
                if (data) {
                    for (var i = 0; i < data.length; i++) {
                        var url_er=$('.breadcrumb dd a').eq(i).attr('href');
                        $('.breadcrumb dd a').eq(i).html(data[i].functionname).attr('href',url_er+"?id="+data[i].id);
                    };
                };
            },
            error:function(){
                console.log("加载失败");
            }
        });
        // 头部banner
        $.ajax({
            type:'get',
            url:'/zky/zkContentInfo/selectContentByMenuId?menuId=402881e9511ddff901511de575aa0005',
// async : false,
            success:function (data){
                if (data) {
                    $('.gy_header_line3 .gy_text span').eq(0).html(data[0].title);
                    $('.gy_header_line3 .gy_text span').eq(1).html(data[0].content);
                    $('.gy_header_line3 img').attr('src',data[0].imgs);
                };
            },
            error:function(){
                console.log("加载失败");
            }
        });
    }
// 新闻资讯导航封装-end
    
    // 业务范围导航封装-satrt
    var ywfw_menuId = '402881e9511defaf01511df12df70002';
        function min_ywfw_ajax(){
            $.ajax({
                type:'get',
// url:'/zky/zkMenu/getHeadMenuList',
// url:'/zky/zkMenu/selectHeadMenuByParentId',
                url:'/zky/zkMenu/selectMenuListByParentId',
                data:{parentId:ywfw_menuId},
// async : false,
                success:function (data){
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            var url_er=$('.breadcrumb dd a').eq(i).attr('href');
                            $('.breadcrumb dd a').eq(i).html(data[i].functionname).attr('href',url_er+"?id="+data[i].id);
                        };
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
            // 头部banner
            $.ajax({
                type:'get',
                url:'/zky/zkContentInfo/selectContentByMenuId?menuId=402881e9511defaf01511df12df70002',
// async : false,
                success:function (data){
                    if (data) {
                        $('.gy_header_line3 .gy_text span').eq(0).html(data[0].title);
                        $('.gy_header_line3 .gy_text span').eq(1).html(data[0].content);
                        $('.gy_header_line3 img').attr('src',data[0].imgs);
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
        }
    // 业务范围导航封装-end
        
        // 项目展示导航封装-satrt
        var xmzs_menuId = '402881e9511defaf01511df185850005';
        function min_xmzs_ajax(){
            $.ajax({
                type:'get',
// url:'/zky/zkMenu/getHeadMenuList',
// url:'/zky/zkMenu/selectHeadMenuByParentId',
                url:'/zky/zkMenu/selectMenuListByParentId',
                data:{parentId:xmzs_menuId},
// async : false,
                success:function (data){
                    if (data.length>0) {
                        for (var i = 0; i < data.length; i++) {
                            var url_er=$('.breadcrumb dd a').eq(i).attr('href');
                            $('.breadcrumb dd a').eq(i).html(data[i].functionname).attr('href',url_er+"?id="+data[i].id);
                        };
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
            // 头部banner
            $.ajax({
                type:'get',
                url:'/zky/zkContentInfo/selectContentByMenuId?menuId=402881e9511defaf01511df185850005',
// async : false,
                success:function (data){
                    if (data[0]) {
                        $('.gy_header_line3 .gy_text span').eq(0).html(data[0].title);
                        $('.gy_header_line3 .gy_text span').eq(1).html(data[0].content);
                        $('.gy_header_line3 img').attr('src',data[0].imgs);
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
        }
    // 项目展示导航封装-end

    // 工程研发导航封装-satrt
        var gcyf_menuId = '402881e9511defaf01511df1b3ff0008';
        function min_gcyf_ajax(){
            $.ajax({
                type:'get',
// url:'/zky/zkMenu/getHeadMenuList',
// url:'/zky/zkMenu/selectHeadMenuByParentId',
                url:'/zky/zkMenu/selectMenuListByParentId',                
                data:{parentId:gcyf_menuId},
// async : false,
                success:function (data){
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            var url_er=$('.breadcrumb dd a').eq(i).attr('href');
                            $('.breadcrumb dd a').eq(i).html(data[i].functionname).attr('href',url_er+"?id="+data[i].id);
                        };
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
            // 头部banner
            $.ajax({
                type:'get',
                url:'/zky/zkContentInfo/selectContentByMenuId?menuId=402881e9511defaf01511df1b3ff0008',
// async : false,
                success:function (data){
                    if (data) {
                        $('.gy_header_line3 .gy_text span').eq(0).html(data[0].title);
                        $('.gy_header_line3 .gy_text span').eq(1).html(data[0].content);
                        $('.gy_header_line3 img').attr('src',data[0].imgs);
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
        }
    // 工程研发导航封装-end
        
     //投资者关系导航封装-satrt
        var tzzgx_menuId = "402881e9511defaf01511df1d7ab000b";   
        function min_tzzgx_ajax(){
            $.ajax({
                type:'get',
    // url:'/zky/zkMenu/getHeadMenuList',
    // url:'/zky/zkMenu/selectHeadMenuByParentId',
                url:'/zky/zkMenu/selectMenuListByParentId',
                data:{parentId:tzzgx_menuId},
    // async : false,
                success:function (data){
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            var url_er=$('.breadcrumb dd a').eq(i).attr('href');
                            $('.breadcrumb dd a').eq(i).html(data[i].functionname).attr('href',url_er+"?id="+data[i].id);
                        };
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
            // 头部banner
            $.ajax({
                type:'get',
                url:'/zky/zkContentInfo/selectContentByMenuId?menuId='+tzzgx_menuId,
    // async : false,
                success:function (data){
                    if (data[0]) {
                        $('.gy_header_line3 .gy_text span').eq(0).html(data[0].title);
                        $('.gy_header_line3 .gy_text span').eq(1).html(data[0].content);
                        $('.gy_header_line3 img').attr('src',data[0].imgs);
                        
                        $('.breadcrumb li').eq(0).find('.text').html(data[0].title);
                        
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
        }
    // 投资者关系导航封装-end    
        

    // 职业发展导航封装-satrt
        var zyfz_menuId = '4028814d52871d3d015287854bf20009';
        function min_zyfz_ajax(){
            $.ajax({
                type:'get',
// url:'/zky/zkMenu/getHeadMenuList',
// url:'/zky/zkMenu/selectHeadMenuByParentId',
                url:'/zky/zkMenu/selectMenuListByParentId',
                data:{parentId:zyfz_menuId},
// async : false,
                success:function (data){
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            var url_er=$('.breadcrumb dd a').eq(i).attr('href');
                            $('.breadcrumb dd a').eq(i).html(data[i].functionname).attr('href',url_er+"?id="+data[i].id);
                        };
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
            // 头部banner
            $.ajax({
                type:'get',
                url:'/zky/zkContentInfo/selectContentByMenuId?menuId=4028814d52871d3d015287854bf20009',
// async : false,
                success:function (data){
                    if (data) {
                        $('.gy_header_line3 .gy_text span').eq(0).html(data[0].title);
                        $('.gy_header_line3 .gy_text span').eq(1).html(data[0].content);
                        $('.gy_header_line3 img').attr('src',data[0].imgs);
                    };
                },
                error:function(){
                    console.log("加载失败");
                }
            });
        }
    // 职业发展导航封装-end

        // 异步刷新页面的li的第二个元素值
// console.log(getQueryString('id'));
try {
    $.ajax({
        type: 'get',
        // url:'/zky/zkMenu/getHeadMenuList',
        url: '/zky/zkMenu/selectHeadMenuByParentId',
        data: { parentId: getQueryString('id') },
        // async : false,
        success: function (data) {
            if (data[0]) {
                $('.breadcrumb li').eq(1).html(data[0].functionname);
            };
        },
        error: function () {
            console.log("加载失败");
        }
    });
} catch (e) {

}

      // 搜索
        $('.seach .btn').click(function(){
            var url_ss=$('.seach a').attr('href');
            var ss_nr=$('.seach .text').val();
            ss_nr=encodeURI(ss_nr);
            $('.seach a').attr("href",url_ss+"?category=1"+"&pageCurrent=1"+"&query="+ss_nr);
        })
   
        function sitemap_ajax(){
        	
        	//异步获取首部菜单并设置网站地图
        	   $.ajax({
        	       type:'get',
        	       url:'/zky/zkMenu/getHeadMenuList',
//        	       async : false, 
        	       success:function (data){
        		       	if (data) {
//        		       		$('.body2 .site_map li').remove();
        					var res = "";	
        					for(var i=0;i<data.length;i++){
        						var s = $('.body2 .site_map li img').eq(i).attr('src');
        						s = s.substring(0,s.lastIndexOf('/'));
        						$('.body2 .site_map li img').eq(i).attr('src',s+'/map_0'+(i+1)+'.jpg');
        						$('.body2 .site_map li h1').eq(i).html(data[i].functionname);
//        						res +=	'<li>';
//        		                  	res += 	'	<div class="box">';
//        		                  	res +=  ' 	<div class="pic"><img src="../imgs/gy/map_0'+(i+1)+'.jpg" alt="" /></div>'
//        		                  	res +=  '     <h1>'+data[i].functionname+'</h1>';
//        		                  	res +=  '  	<div class="line"></div>';
//        		                  	res +=  '  	<dl>';
        		                  	
        		                  	if(data[i].subList.length>0){
        		                  		
        		                  		for(var k=0;k<data[i].subList.length;k++){
        		                  			if(data[i].subList[k] && data[i].subList[k].id){
        		                  				var h = $('.body2 .site_map li dl').eq(i).find('dd a').eq(k).attr('href');
        		                  				if(h){
        		                  					h = h.substring(0,h.indexOf('.'));
        		                  					$('.body2 .site_map li dl').eq(i).find('dd a').eq(k).attr('href',h+'.html?id='+data[i].subList[k].id);
        		                  					$('.body2 .site_map li dl').eq(i).find('dd a').eq(k).html(data[i].subList[k].functionname);
        		                  				}
//        			                          	res +=  '  		<dd><a href="/1_about/index_gsjj.html?id='+data[i].subList[k].id+'">'+data[i].subList[k].functionname+'</a></dd>';
        		                  			}
        		                  		}
        		                  	}
//        		                      res +=  '  	</dl>';		
//        		                      res +=  ' 	</div>';
//        		                      res +=  '</li>';
        					}
//        					if(res){
//        						$('.body2 .site_map ul').html(res);
//        					}
        		       	};
        	       },
        	       error:function(){
        	           console.log("加载失败");
        	       }
        	   });
        	
        }
        
// ajax-end
