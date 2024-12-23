! function(i) {
    var e, s = i(window),
        l = i("body"),
        a = i("#wrapper"),
        o = i("#header"),
        n = i("#footer"),
        t = i("#main"),
        r = t.children("article");
    breakpoints({
        xlarge: ["1281px", "1680px"],
        large: ["981px", "1280px"],
        medium: ["737px", "980px"],
        small: ["481px", "736px"],
        xsmall: ["361px", "480px"],
        xxsmall: [null, "360px"]
    }), s.on("load", function() {
        window.setTimeout(function() {
            l.removeClass("is-preload")
        }, 100)
    }), "ie" == browser.name && s.on("resize.flexbox-fix", function() {
        clearTimeout(e), e = setTimeout(function() {
            a.prop("scrollHeight") > s.height() ? a.css("height", "auto") : a.css("height", "100vh")
        }, 250)
    }).triggerHandler("resize.flexbox-fix");
    var h = o.children("nav");
    var d = !1;
    if (t._show = function(i, e) {
            var a = r.filter("#" + i);
            if (0 != a.length) {
                if (d || void 0 !== e && !0 === e) {
                    l.addClass("is-switching"), l.addClass("is-article-visible"), r.removeClass("active"), o.hide(), n.hide(), t.show(), a.show(), a.addClass("active"), d = !1, setTimeout(function() {
                        l.removeClass("is-switching")
                    }, e ? 1e3 : 0);
                    return
                }
                if (d = !0, l.hasClass("is-article-visible")) {
                    var h = r.filter(".active");
                    h.removeClass("active"), setTimeout(function() {
                        h.hide(), a.show(), setTimeout(function() {
                            a.addClass("active"), s.scrollTop(0).triggerHandler("resize.flexbox-fix"), setTimeout(function() {
                                d = !1
                            }, 200)
                        }, 25)
                    }, 200)
                } else l.addClass("is-article-visible"), setTimeout(function() {
                    o.hide(), n.hide(), t.show(), a.show(), setTimeout(function() {
                        a.addClass("active"), s.scrollTop(0).triggerHandler("resize.flexbox-fix"), setTimeout(function() {
                            d = !1
                        }, 200)
                    }, 25)
                }, 200)
            }
        }, t._hide = function(i) {
            var e = r.filter(".active");
            if (l.hasClass("is-article-visible")) {
                if (void 0 !== i && !0 === i && history.pushState(null, null, "#"), d) {
                    l.addClass("is-switching"), e.removeClass("active"), e.hide(), t.hide(), n.show(), o.show(), l.removeClass("is-article-visible"), d = !1, l.removeClass("is-switching"), s.scrollTop(0).triggerHandler("resize.flexbox-fix");
                    return
                }
                d = !0, e.removeClass("active"), setTimeout(function() {
                    e.hide(), t.hide(), n.show(), o.show(), setTimeout(function() {
                        l.removeClass("is-article-visible"), s.scrollTop(0).triggerHandler("resize.flexbox-fix"), setTimeout(function() {
                            d = !1
                        }, 200)
                    }, 25)
                }, 200)
            }
        }, r.each(function() {
            var e = i(this);
            i('<div class="close">Close</div>').appendTo(e).on("click", function() {
                location.hash = ""
            }), e.on("click", function(i) {
                i.stopPropagation()
            })
        }), l.on("click", function(i) {
            l.hasClass("is-article-visible") && t._hide(!0)
        }), s.on("keyup", function(i) {
            27 === i.keyCode && l.hasClass("is-article-visible") && t._hide(!0)
        }), s.on("hashchange", function(i) {
            "" == location.hash || "#" == location.hash ? (i.preventDefault(), i.stopPropagation(), t._hide()) : r.filter(location.hash).length > 0 && (i.preventDefault(), i.stopPropagation(), t._show(location.hash.substr(1)))
        }), "scrollRestoration" in history) history.scrollRestoration = "manual";
    else {
        var f = 0,
            $ = 0,
            u = i("html,body");
        s.on("scroll", function() {
            f = $, $ = u.scrollTop()
        }).on("hashchange", function() {
            s.scrollTop(f)
        })
    }
    t.hide(), r.hide(), "" != location.hash && "#" != location.hash && s.on("load", function() {
        t._show(location.hash.substr(1), !0)
    })
}(jQuery);