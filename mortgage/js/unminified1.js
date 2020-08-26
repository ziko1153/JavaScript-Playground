/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Modules: pie, theme-pie
 * Version: 8.0.1.1726 (2017-10-16)
 * License: http://www.anychart.com/buy/
 * Contact: sales@anychart.com
 * Copyright: AnyChart.com 2017. All rights reserved.
 */
(function(global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var wrapper = function(w) {
            if (!w.document) {
                throw Error('AnyChart requires a window with a document');
            }
            factory.call(w, w, w.document);
            w.acgraph.isNodeJS = true;
            return w.anychart;
        };
        module.exports = global.document ? wrapper(global) : wrapper;
    } else {
        factory.call(global, window, document)
    }
})(typeof window !== 'undefined' ? window : this, function(window, document, opt_noGlobal) {
    var $, _, $_ = this.anychart;
    if ($_ && (_ = $_._)) {
        $ = $_.$
    } else {
        throw Error('anychart-base.min.js module should be included first');
        $ = {};
        _ = {}
    }
    if (!_.pie) {
        _.pie = 1;
        (function($) {
            var BH = function(a, b, c, d) {
                    var e;
                    a > b && (e = a, a = b, b = e);
                    c > d && (e = c, c = d, d = e);
                    return Math.max(a, c) <= Math.min(b, d)
                },
                CH = function() {
                    return $.Gc("iPad") || $.Gc("Android") && !$.Gc("Mobile") || $.Gc("Silk")
                },
                DH = function() {
                    return !CH() && ($.Gc("iPod") || $.Gc("iPhone") || $.Gc("Android") || $.Gc("IEMobile"))
                },
                EH = function() {
                    return new $.lw
                },
                FH = function(a) {
                    $.uu.call(this, a)
                },
                GH = function(a, b, c, d) {
                    var e = !1,
                        f, h;
                    if (!d) return !1;
                    f = 0;
                    for (h = d.length; f < h - 1; f += 2)
                        if (!e) var e = d[f],
                            k = d[f + 1],
                            e = (a - e) * (a - e) + (b - k) * (b - k) > c * c;
                    return e
                },
                HH = function(a,
                    b, c, d, e) {
                    var f = !1,
                        h, k, l, m;
                    if (!e) return !1;
                    l = 0;
                    for (m = e.length; l < m - 1; l += 2)
                        if (h = l == m - 2 ? 0 : l + 2, k = l == m - 2 ? 1 : l + 3, !f) {
                            var f = e[l],
                                p = e[l + 1];
                            h = e[h];
                            k = e[k];
                            f = BH(f, h, a, c) && BH(p, k, b, d) && 0 >= ((h - f) * (b - p) - (k - p) * (a - f)) * ((h - f) * (d - p) - (k - p) * (c - f)) && 0 >= ((c - a) * (p - b) - (d - b) * (f - a)) * ((c - a) * (k - b) - (d - b) * (h - a))
                        }
                    return f
                },
                IH = function(a, b, c) {
                    $.hw.call(this, null, [], [], b, c);
                    this.ya = a
                },
                KH = function(a, b, c, d, e) {
                    $.rq.call(this, a);
                    this.B = b;
                    this.j = c || null;
                    this.K = d || function(a, b) {
                        a.value += Math.max(0, +b) || 0;
                        return a
                    };
                    this.ma = e || function() {
                        return {
                            value: 0
                        }
                    };
                    this.g = new JH;
                    this.g.G(0, "groupedPoint", !0)
                },
                JH = function() {
                    $.hq.call(this);
                    $.xq(this);
                    this.j = void 0
                },
                MH = function(a, b, c) {
                    $.hw.call(this, null, [], [], b, c);
                    this.ya = a;
                    this.F = LH(this.ya);
                    this.J = this.ya.N("connectorStroke")
                },
                NH = function(a, b) {
                    $.Ax.call(this, a, b)
                },
                PH = function(a, b) {
                    $.Pu.call(this);
                    $.T(this);
                    this.Y = this.Sa = this.P = this.o = this.Oc = null;
                    this.Ob = {};
                    this.Ie = function() {
                        var a = this.sourceColor,
                            b = this.aquaStyleObj;
                        return {
                            keys: [{
                                offset: 0,
                                color: $.Pl(a, .5)
                            }, {
                                offset: .95,
                                color: $.Ql(a, .4)
                            }, {
                                offset: 1,
                                color: $.Ql(a,
                                    .4)
                            }],
                            cx: .5,
                            cy: .5,
                            fx: b.fx,
                            fy: b.fy,
                            mode: b.mode
                        }
                    };
                    this.F = [];
                    this.state = new FH(this);
                    this.data(a || null, b);
                    this.D(4294967295);
                    $.vp(this.J, [
                        ["overlapMode", 4096, 1],
                        ["radius", 4, 1],
                        ["innerRadius", 4, 1],
                        ["startAngle", 4112, 1],
                        ["explode", 4116, 1],
                        ["sort", 16, 1, 0, function() {
                            OH(this)
                        }],
                        ["outsideLabelsSpace", 4100, 9],
                        ["insideLabelsOffset", 4100, 9],
                        ["connectorLength", 4100, 9],
                        ["outsideLabelsCriticalAngle", 4096, 1],
                        ["forceHoverLabels", 4096, 1],
                        ["connectorStroke", 16, 1],
                        ["mode3d", 4112, 1]
                    ]);
                    var c = {};
                    $.vp(c, [
                        ["fill", 528, 1],
                        ["stroke", 528, 1],
                        ["hatchFill", 528, 1],
                        ["labels", 0, 0]
                    ]);
                    this.ca = new $.pw(this, c, $.cm, [
                        [1, "fill", function(a) {
                            var b = !1;
                            $.B(a[0]) && (a[0] = a[0].toLowerCase(), b = "aquastyle" == a[0]);
                            return this.N("mode3d") && b ? this.N("fill") : $.D(a[0]) || b ? a[0] : $.wc.apply(null, a)
                        }]
                    ]);
                    this.ca.ua.labelsFactoryConstructor = EH;
                    $.iq(this.ca, "labelsAfterInitCallback", function(a) {
                        $.S(a, this.sd, this);
                        a.mb(this);
                        this.D(4096, 1)
                    });
                    c = {};
                    $.vp(c, [
                        ["fill", 16, 1],
                        ["stroke", 16, 1],
                        ["hatchFill", 0, 0],
                        ["labels", 0, 0]
                    ]);
                    this.Xb = new $.pw(this, c, 1);
                    this.Xb.ua.labelsFactoryConstructor =
                        EH;
                    this.ka(!1)
                },
                OH = function(a) {
                    $.K(a.Na);
                    delete a.Ha;
                    a.Na = Cca(a, a.Sa);
                    $.S(a.Na, a.c3, a);
                    $.L(a, a.Na);
                    a.D(13104, 17)
                },
                Cca = function(a, b) {
                    if (a.Oc) {
                        var c = b;
                        b = new KH(b, "value", a.Oc, void 0, function() {
                            return {
                                value: 0
                            }
                        });
                        $.L(c, b);
                        b.bN = !0
                    }
                    c = a.N("sort");
                    "none" != c && (b = "asc" == c ? b.sort("value", function(a, b) {
                        return a - b
                    }) : b.sort("value", function(a, b) {
                        return b - a
                    }), b.bN = !0);
                    return b
                },
                QH = function(a, b, c) {
                    if ($.J(a.o, b)) c && a.o.X(c);
                    else {
                        var d = !!a.o;
                        $.K(a.o);
                        a.o = new b;
                        c && a.o.X(c);
                        $.S(a.o, a.WP, a);
                        $.L(a, a.o);
                        d && a.D(528, 1)
                    }
                },
                SH = function(a, b, c) {
                    if (!a) return $.Vl;
                    var d = b + "|" + a + "|" + c,
                        e = RH[d];
                    if (!e) {
                        switch (b) {
                            case 2:
                                e = $.Xl;
                                break;
                            case 3:
                                e = $.Yl;
                                break;
                            default:
                            case 1:
                                e = $.Zl
                        }
                        RH[d] = e = $.va(Dca, a, e, 3 == b, c)
                    }
                    return e
                },
                Dca = function(a, b, c, d, e, f, h) {
                    var k;
                    if (f != $.cm && d && (k = e.Si(a, f, e.la(), b, !1, void 0, h), c && !0 === k && (k = b(e.Ci())), $.n(k))) {
                        if (!$.D(k)) return k;
                        if (c) return c = e.Tk(h), b(k.call(c, c))
                    }
                    a = e.Si(a, 0, e.la(), b, !1, void 0, h);
                    d = $.B(a) && "aquastyle" == a;
                    c && !0 === a && (a = b(e.Ci()));
                    $.D(a) && (c = c ? e.Tk(h) : e.Yi(void 0, h), a = b(a.call(c, c)));
                    d && (c = e.la(),
                        c = {
                            aquaStyleObj: e.Ob,
                            sourceColor: e.Mq().pd(c.sa())
                        }, a = e.Ie.call(c));
                    k && (c = e.Yi(a, h), a = b(k.call(c, c)));
                    return a
                },
                Eca = function(a, b) {
                    var c = Math.min(b.width, b.height);
                    a.fh = LH(a) && a.labels().enabled() ? $.M(a.N("outsideLabelsSpace"), c) : 0;
                    a.b = $.M(a.N("radius"), c - a.fh);
                    a.K = $.M(a.N("connectorLength"), a.b);
                    var d = a.N("innerRadius");
                    a.Ua = $.D(d) ? d(a.b) : $.M(d, a.b);
                    a.B = $.M(a.N("explode"), c);
                    a.Fb = b.left + b.width / 2;
                    a.Ab = b.top + b.height / 2;
                    a.de = new $.I(a.Fb - a.b, a.Ab - a.b, 2 * a.b, 2 * a.b);
                    var d = $.H(-145),
                        e = Math.min(b.width,
                            b.height) / 2,
                        c = .5 * e * Math.cos(d) / b.width + .5,
                        d = .5 * e * Math.sin(d) / b.height + .5;
                    0 > b.width && (b.width = 0);
                    0 > b.height && (b.height = 0);
                    a.Ob.fx = !(0, window.isNaN)(c) && (0, window.isFinite)(c) ? c : 0;
                    a.Ob.fy = !(0, window.isNaN)(d) && (0, window.isFinite)(d) ? d : 0;
                    a.Ob.mode = b;
                    c = a.labels();
                    $.T(c);
                    c.Dd(a.Fb);
                    c.Ed(a.Ab);
                    $.mw(c, a.b);
                    c.Wd(a.N("startAngle"));
                    c.eh(360);
                    c.oa(a.de);
                    c.ka(!1);
                    a.Kb().labels().oa(a.de)
                },
                TH = function(a) {
                    return $.A(a) && a.hasOwnProperty("mode") && a.hasOwnProperty("cx")
                },
                UH = function(a) {
                    a = null === a ? window.NaN : +a;
                    return !($.C(a) && !(0, window.isNaN)(a) && 0 < a)
                },
                VH = function(a, b, c, d) {
                    var e = a.labels();
                    $.T(e);
                    e.fontOpacity(b);
                    e.ea();
                    e.ka(!1);
                    if (d && a.g)
                        for (var f in a.g) a.g.hasOwnProperty(f) && a.g[f].stroke($.Tl(a.N("connectorStroke"), c))
                },
                YH = function(a, b) {
                    var c = a.la(),
                        d = c.sa(),
                        e = c.G("start"),
                        f = c.G("sweep"),
                        h = !!c.G("exploded") && 1 != c.Ib(),
                        k, l;
                    b ? (k = c.G("slice"), l = c.G("hatchSlice"), k.clear(), l && l.clear()) : (k = $.Ty(a.ha), c.G("slice", k), l = $.Ty(a.Ba), c.G("hatchSlice", l));
                    h ? (h = e + f / 2, k = $.Zi(k, a.Fb + a.B * Math.cos($.H(h)), a.Ab + a.B *
                        Math.sin($.H(h)), a.b, a.Ua, e, f)) : k = $.Zi(k, a.Fb, a.Ab, a.b, a.Ua, e, f);
                    k.tag = {
                        ia: a,
                        index: d
                    };
                    c = $.zu(a.state, c.sa());
                    WH(a, c);
                    l && (l.jd(k.O()), l.tag = {
                        ia: a,
                        index: d
                    }, XH(a, c))
                },
                Fca = function(a) {
                    var b = a.la(),
                        c = b.sa(),
                        d = b.G("start"),
                        b = b.G("sweep"),
                        e = d + b;
                    if ($.n(d) && $.n(b) && b) {
                        var f = d + b / 2,
                            h = a.B * Math.cos($.H(f)),
                            f = .45 * a.B * Math.sin($.H(f));
                        a.F.push({
                            index: c,
                            type: "top",
                            start: d,
                            KA: b,
                            Sy: h,
                            Ty: f
                        });
                        if (360 != Math.abs(b)) {
                            var k;
                            k = $.H(d);
                            var l = $.Om(Math.cos(k), 7);
                            k = $.Om(Math.sin(k), 7);
                            var m = ZH(l, k);
                            ((l || 1 != Math.abs(k)) && 3 == m ||
                                2 == m) && a.F.push({
                                index: c,
                                type: "start",
                                angle: d,
                                Sy: h,
                                Ty: f
                            });
                            k = $.H(e);
                            l = $.Om(Math.cos(k), 7);
                            k = $.Om(Math.sin(k), 7);
                            m = ZH(l, k);
                            ((l || 1 != Math.abs(k)) && 1 == m || 4 == m) && a.F.push({
                                index: c,
                                type: "end",
                                angle: e,
                                Sy: h,
                                Ty: f
                            })
                        }
                        var p;
                        p = d;
                        m = e;
                        p == m ? l = !1 : (p = $.H(p), m = $.H(m), l = $.Om(Math.cos(p), 7), k = $.Om(Math.cos(m), 7), p = ZH(l, Math.sin(p)), m = ZH(k, Math.sin(m)), l = 1 == p || 2 == p ? !0 : 3 == p ? 1 == m || 2 == m ? !0 : 3 == m ? l >= k : !1 : 4 == p ? 4 == m ? l >= k : !0 : !1);
                        if (l) {
                            k = $.Om(Math.cos($.H(d)), 7);
                            m = $.Om(Math.cos($.H(e)), 7);
                            p = ZH(k, Math.sin($.H(d)));
                            var q = ZH(m, Math.sin($.H(e))),
                                l = [];
                            if (1 == p) switch (q) {
                                case 1:
                                    k >= m ? l.push({
                                        start: d,
                                        end: e
                                    }) : (l.push({
                                        start: d,
                                        end: 180,
                                        Jj: !0
                                    }), l.push({
                                        start: 360,
                                        end: e
                                    }));
                                    break;
                                case 2:
                                    l.push({
                                        start: d,
                                        end: e,
                                        Jj: !0
                                    });
                                    break;
                                case 3:
                                case 4:
                                    l.push({
                                        start: d,
                                        end: 180,
                                        Jj: !0
                                    })
                            } else if (2 == p) switch (q) {
                                case 1:
                                    l.push({
                                        start: d,
                                        end: 180
                                    });
                                    l.push({
                                        start: 360,
                                        end: e
                                    });
                                    break;
                                case 2:
                                    k >= m ? l.push({
                                        start: d,
                                        end: e
                                    }) : (l.push({
                                        start: d,
                                        end: 180
                                    }), l.push({
                                        start: 360,
                                        end: e,
                                        Jj: !0
                                    }));
                                    break;
                                case 3:
                                case 4:
                                    l.push({
                                        start: d,
                                        end: 180
                                    })
                            } else if (3 == p) switch (q) {
                                    case 1:
                                        l.push({
                                            start: 360,
                                            end: e
                                        });
                                        break;
                                    case 2:
                                        l.push({
                                            start: 360,
                                            end: e,
                                            Jj: !0
                                        });
                                        break;
                                    case 3:
                                        k >= m && l.push({
                                            start: 0,
                                            end: 180,
                                            Jj: !0
                                        })
                                } else if (4 == p) switch (q) {
                                    case 1:
                                        l.push({
                                            start: 360,
                                            end: e
                                        });
                                        break;
                                    case 2:
                                        l.push({
                                            start: 360,
                                            end: e,
                                            Jj: !0
                                        });
                                        break;
                                    case 3:
                                        l.push({
                                            start: 360,
                                            end: 180,
                                            Jj: !0
                                        });
                                        break;
                                    case 4:
                                        k >= m && l.push({
                                            start: 0,
                                            end: 180,
                                            Jj: !0
                                        })
                                }
                                k = a.F.length;
                            m = l.length;
                            a.F.length = k + m;
                            for (p = 0; p < m; p++) l[p].index = c, l[p].type = "front", l[p].KA = b, l[p].Sy = h, l[p].Ty = f, a.F[k + p] = l[p]
                        }
                        p = d;
                        m = e;
                        p != m && a.Ua ? (p = $.H(p), m = $.H(m), l = $.Om(Math.cos(p), 7), k = $.Om(Math.cos(m), 7),
                            p = ZH(l, Math.sin(p)), m = ZH(k, Math.sin(m)), l = 3 == p || 4 == p ? !0 : 1 == p ? 3 == m || 4 == m ? !0 : 1 == m ? l <= k : !1 : 2 == p ? 2 == m ? l <= k : !0 : !1) : l = !1;
                        if (l) {
                            k = $.Om(Math.cos($.H(d)), 7);
                            m = $.Om(Math.cos($.H(e)), 7);
                            p = ZH(k, Math.sin($.H(d)));
                            q = ZH(m, Math.sin($.H(e)));
                            l = [];
                            if (1 == p) switch (q) {
                                case 1:
                                    k <= m && l.push({
                                        start: 180,
                                        end: 360
                                    });
                                    break;
                                case 3:
                                    l.push({
                                        start: 180,
                                        end: e
                                    });
                                    break;
                                case 4:
                                    l.push({
                                        start: 180,
                                        end: e,
                                        Jj: !0
                                    })
                            } else if (2 == p) switch (q) {
                                case 1:
                                    l.push({
                                        start: 180,
                                        end: 360,
                                        Jj: !0
                                    });
                                    break;
                                case 2:
                                    k <= m && l.push({
                                        start: 180,
                                        end: 360,
                                        Jj: !0
                                    });
                                    break;
                                case 3:
                                    l.push({
                                        start: 180,
                                        end: e
                                    });
                                    break;
                                case 4:
                                    l.push({
                                        start: 180,
                                        end: e,
                                        Jj: !0
                                    })
                            } else if (3 == p) switch (q) {
                                    case 1:
                                    case 2:
                                        l.push({
                                            start: d,
                                            end: 360,
                                            Jj: !0
                                        });
                                        break;
                                    case 3:
                                        k >= m ? (l.push({
                                            start: d,
                                            end: 360
                                        }), l.push({
                                            start: 180,
                                            end: e
                                        })) : l.push({
                                            start: d,
                                            end: e
                                        });
                                        break;
                                    case 4:
                                        l.push({
                                            start: d,
                                            end: e,
                                            Jj: !0
                                        })
                                } else if (4 == p) switch (q) {
                                    case 1:
                                    case 2:
                                        l.push({
                                            start: d,
                                            end: 360
                                        });
                                        break;
                                    case 3:
                                        l.push({
                                            start: d,
                                            end: 360
                                        });
                                        l.push({
                                            start: 180,
                                            end: e
                                        });
                                        break;
                                    case 4:
                                        k >= m ? (l.push({
                                            start: d,
                                            end: 360
                                        }), l.push({
                                            start: 180,
                                            end: e
                                        })) : l.push({
                                            start: d,
                                            end: e
                                        })
                                }
                                k = a.F.length;
                            m = l.length;
                            a.F.length = k + m;
                            for (p = 0; p < m; p++) l[p].index = c, l[p].type = "back", l[p].KA = b, l[p].Sy = h, l[p].Ty = f, a.F[k + p] = l[p]
                        }
                    }
                },
                bI = function(a, b, c) {
                    var d = 0,
                        e = a.F.length,
                        f;
                    if ($.n(b))
                        for (d = 0; d < e; d++) f = a.F[d], f.index == b && $H(a, f, c);
                    else {
                        for (d = 0; d < e; d++) switch (f = a.F[d], f.type) {
                            case "top":
                                f.AA = 1;
                                break;
                            case "front":
                                f.AA = f.Jj ? 1 : $.Om(Math.sin($.H(aI(f.start, f.end))), 7);
                                break;
                            case "back":
                                f.AA = f.Jj ? -1 : $.Om(Math.sin($.H(aI(f.start, f.end))), 7);
                                break;
                            default:
                                f.AA = $.Om(Math.sin($.H(f.angle)), 7)
                        }
                        a.F.sort(function(a, b) {
                            return a.AA - b.AA
                        });
                        for (d = 0; d < e; d++) $H(a, a.F[d])
                    }
                },
                $H = function(a, b, c) {
                    var d = a.la();
                    d.select(b.index);
                    var e = !!d.G("exploded") && 1 != d.Ib(),
                        f = a.Fb,
                        h = a.Ab;
                    e && (f += b.Sy, h += b.Ty);
                    var k = a.b,
                        e = a.Ua,
                        d = $.zu(a.state, d.sa());
                    switch (b.type) {
                        case "top":
                            var l = b.start;
                            b = b.KA;
                            0 > k && (k = 0);
                            0 > e && (e = 0);
                            if (k < e) var m = k,
                                k = e,
                                e = m;
                            b = $.Hb(b, -360, 360);
                            c = cI(a, "topPath", c);
                            0 >= e ? 360 == Math.abs(b) ? c.Wc(f, h, k, .45 * k, l, b, !1) : c.moveTo(f, h).Wc(f, h, k, .45 * k, l, b, !0).close() : (m = 360 > Math.abs(b), c.Wc(f, h, k, .45 * k, l, b).Wc(f, h, e, .45 * e, l + b, -b, m), m && c.close());
                            dI(a, "topPath",
                                d);
                            break;
                        case "front":
                            var e = f,
                                f = h,
                                p = b.start,
                                m = b.end,
                                q = b.KA;
                            b = "frontPath" + p;
                            c = cI(a, b, c);
                            h = .45 * k;
                            l = .2 * a.b;
                            m < p && (m += 360);
                            360 == Math.abs(q) && (p = 0, m = 180);
                            q = $.H(p);
                            p = $.H(m);
                            m = e + k * +Math.cos(q).toFixed(5);
                            q = f + h * +Math.sin(q).toFixed(5);
                            e += k * +Math.cos(p).toFixed(5);
                            f += h * +Math.sin(p).toFixed(5);
                            c.moveTo(m, q);
                            c.ie(e, f, k, h, !1, !0);
                            c.lineTo(e, f + l);
                            c.ie(m, q + l, k, h, !1, !1);
                            c.lineTo(m, q);
                            c.close();
                            dI(a, b, d);
                            break;
                        case "back":
                            k = f;
                            f = h;
                            p = b.start;
                            m = b.end;
                            q = b.KA;
                            b = "backPath" + p;
                            c = cI(a, b, c);
                            h = .45 * e;
                            l = .2 * a.b;
                            m < p && (m += 360);
                            360 ==
                                Math.abs(q) && (p = 180, m = 0);
                            q = $.H(p);
                            p = $.H(m);
                            m = k + e * Math.cos(q);
                            q = f + h * Math.sin(q);
                            k += e * Math.cos(p);
                            f += h * Math.sin(p);
                            c.moveTo(m, q);
                            c.ie(k, f, e, h, !1, !0);
                            c.lineTo(k, f + l);
                            c.ie(m, q + l, e, h, !1, !1);
                            c.lineTo(m, q);
                            c.close();
                            dI(a, b, d);
                            break;
                        case "start":
                            eI(a, "startPath", f, h, k, e, b.angle, d, c);
                            break;
                        case "end":
                            eI(a, "endPath", f, h, k, e, b.angle, d, c)
                    }
                },
                cI = function(a, b, c) {
                    var d = a.la(),
                        e = "hatch" + String(b.charAt(0)).toUpperCase() + b.substr(1);
                    c ? (c = d.G(b), a = d.G(e), c.clear(), a && a.clear()) : (c = $.Ty(a.ha), d.G(b, c), a = $.Ty(a.ha), d.G(e,
                        a));
                    return c
                },
                fI = function(a, b) {
                    var c = a.la(),
                        d = c.sa(),
                        e = c.get("normal"),
                        f = $.so($.n(e) ? e.fill : void 0, c.get("fill"), a.fill());
                    b & 1 ? (e = c.get("hovered"), c = $.so($.n(e) ? e.fill : void 0, c.get("hoverFill"), f), f = a.DI(c, f)) : f = a.DI(f);
                    var h;
                    $.B(f) && (h = $.Ll(f));
                    var d = a.Mq().pd(d),
                        k;
                    $.A(d) && (d.color ? k = $.Ll(d.color) : d.keys && d.keys.length && (k = $.Ll(d.keys[0].color)));
                    k = k ? k.Qf : d;
                    return h ? h.Qf : k
                },
                dI = function(a, b, c) {
                    var d = a.la(),
                        e = d.sa(),
                        f = fI(a, c),
                        h = $.El(f),
                        k = d.G(b);
                    k.tag = {
                        ia: a,
                        index: e
                    };
                    var l, m = $.Il(h, .3),
                        p = $.Hl([255, 255,
                            255
                        ], h, .1),
                        q = $.uc($.Hl(h, m, .7)),
                        p = $.uc($.Hl(m, p, .1)),
                        r = $.uc($.Hl(h, m, .8)),
                        t = $.uc($.Hl(h, m, .2)),
                        h = $.uc($.Hl(h, m, .1)),
                        m = !!(c & 1);
                    "topPath" == b ? l = {
                        angle: -50,
                        keys: [{
                            position: 0,
                            opacity: 1,
                            color: m ? $.Pl(f, .3) : f
                        }, {
                            position: 1,
                            opacity: 1,
                            color: m ? $.Pl(q, .2) : q
                        }]
                    } : $.xa(b, "frontPath") ? l = {
                        angle: 45,
                        keys: [{
                            position: 0,
                            opacity: 1,
                            color: m ? $.Pl(f, .2) : $.Pl(f, .1)
                        }, {
                            position: .19,
                            opacity: 1,
                            color: m ? $.Pl(p, .2) : p
                        }, {
                            position: 1,
                            opacity: 1,
                            color: m ? $.Pl(r, .2) : r
                        }]
                    } : l = $.xa(b, "backPath") ? m ? $.Pl(t, .2) : t : m ? $.Pl(h, .2) : h;
                    k.fill(l);
                    k.stroke(l);
                    b = "hatch" + String(b.charAt(0)).toUpperCase() + b.substr(1);
                    if (d = d.G(b)) d.jd(k.O()), d.tag = {
                        ia: a,
                        index: e
                    }, XH(a, c, b)
                },
                ZH = function(a, b) {
                    return 0 <= a && 0 <= b ? 1 : 0 >= a && 0 <= b ? 2 : 0 >= a && 0 > b ? 3 : 4
                },
                eI = function(a, b, c, d, e, f, h, k, l) {
                    var m = $.H(h);
                    h = .2 * a.b;
                    var p = c + f * Math.cos(m);
                    c += e * Math.cos(m);
                    f = d + .45 * f * Math.sin(m);
                    d += .45 * e * Math.sin(m);
                    l = cI(a, b, l);
                    l.moveTo(p, f);
                    l.lineTo(c, d);
                    l.lineTo(c, d + h);
                    l.lineTo(p, f + h);
                    l.lineTo(p, f);
                    l.close();
                    dI(a, b, k)
                },
                aI = function(a, b) {
                    b < a && (b += 360);
                    return (a + b) / 2
                },
                jI = function(a, b, c) {
                    if (LH(a)) {
                        var d = a.la(),
                            e = !!(b & 1),
                            f = d.get("normal"),
                            f = $.n(f) ? f.label : void 0,
                            h = d.get("hovered"),
                            h = $.n(h) ? h.label : void 0,
                            f = $.so(f, d.get("label")),
                            h = e ? $.so(h, d.get("hoverLabel")) : null,
                            k = d.sa(),
                            l = a.Kb().labels(),
                            m = e ? l : null;
                        b = a.labels().Yd(k);
                        var p = f && $.n(f.enabled) ? f.enabled : null,
                            q = h && $.n(h.enabled) ? h.enabled : null,
                            e = e ? null === q ? null === l.enabled() ? null === p ? b && $.n(b.enabled()) ? b.enabled() : a.labels().enabled() : p : l.enabled() : q : null === p ? b && $.n(b.enabled()) ? b.enabled() : a.labels().enabled() : p,
                            p = gI(a, !0),
                            q = hI(a);
                        if (e) {
                            if (l = !b) b = a.labels().add(p,
                                q, k);
                            k = b.enabled();
                            b.ig();
                            $.dv(b, m);
                            b.wc(f, h);
                            b.enabled(k);
                            d = d.G("anchor");
                            $.n(d) && b.anchor(d);
                            l || b.ea()
                        } else b ? (k = b.enabled(), b.clear(), b.enabled(k)) : (b = a.labels().add(p, q, k), d = d.G("anchor"), $.n(d) && b.anchor(d), b.enabled(!1));
                        if (c && (c = b) && a.g) {
                            var d = c.sa(),
                                r;
                            (r = a.g[d]) ? c && 0 != c.enabled() && e ? iI(a, c, r) : r.clear(): e ? iI(a, c, a.Rc) : a.Rc.clear()
                        }
                        return b
                    }
                    r = !!(b & 1);
                    var t = a.la();
                    b = t.get("normal");
                    b = $.n(b) ? b.label : void 0;
                    c = t.get("hovered");
                    c = $.n(c) ? c.label : void 0;
                    b = $.so(b, t.get("label"));
                    c = r ? $.so(c, t.get("hoverLabel")) :
                        null;
                    var d = t.sa(),
                        f = a.Kb().labels(),
                        h = r ? f : null,
                        m = a.labels().Yd(d),
                        k = b && $.n(b.enabled) ? b.enabled : null,
                        e = c && $.n(c.enabled) ? c.enabled : null,
                        l = hI(a),
                        p = gI(a, !0),
                        u = a.N("mode3d"),
                        q = !0;
                    if ((!r || r && !a.N("forceHoverLabels")) && "allow-overlap" != a.N("overlapMode")) {
                        var v = t.G("start"),
                            w = t.G("sweep"),
                            q = a.Fb,
                            x = a.Ab,
                            z;
                        if (t.G("exploded") && 1 != t.Ib()) {
                            z = (v + w / 2) * Math.PI / 180;
                            var E = (u ? .45 * a.B : a.B) * Math.sin(z),
                                q = q + a.B * Math.cos(z),
                                x = x + E
                        }
                        z = v * Math.PI / 180;
                        var E = q + a.b * Math.cos(z),
                            N = x + (u ? .45 * a.b : a.b) * Math.sin(z);
                        z = (v + w) * Math.PI /
                            180;
                        v = q + a.b * Math.cos(z);
                        z = x + (u ? .45 * a.b : a.b) * Math.sin(z);
                        a.ub ? a.ub.clear() : a.ub = new $.nw;
                        a.ub.Fe(p);
                        a.ub.rc(l);
                        a.ub.ig();
                        $.cv(a.ub, a.labels());
                        $.dv(a.ub, h);
                        a.ub.wc(b, c);
                        u = a.labels().ki(a.ub, null, null, d);
                        w = (t = (1 == t.Ib() || 360 == w) && !a.Ua) || !HH(q, x, v, z, u);
                        v = !GH(q, x, a.b, u);
                        z = t || GH(q, x, a.Ua, u);
                        q = (t || !HH(E, N, q, x, u)) && w && v && z
                    }(r ? null === e ? null === f.enabled() ? null === k ? a.labels().enabled() : k : f.enabled() : e : null === k ? a.labels().enabled() : k) && q ? (m ? (m.Fe(p), m.rc(l)) : m = a.labels().add(p, l, d), m.ig(), $.dv(m, h), m.wc(b,
                        c), r && !m.$() && a.labels().$e() && (m.$(a.labels().$e()), m.$().parent() || m.$().parent(a.labels().$()))) : m && a.labels().clear(m.sa());
                    return m
                },
                WH = function(a, b) {
                    if (a.N("mode3d")) {
                        var c, d = a.F.length,
                            e, f = a.la().sa();
                        for (c = 0; c < d; c++) e = a.F[c], e.index == f && dI(a, e.type + "Path" + ("front" == e.type || "back" == e.type ? e.start : ""), b)
                    } else c = a.la().G("slice"), $.n(c) && (d = SH("fill", 1, !0)(a, b, !1, !0), TH(d) && null === d.mode && (d.mode = a.de ? a.de : null), c.fill(d), d = SH("stroke", 2, !0)(a, b, !1, !0), TH(d) && null === d.mode && (d.mode = a.de ? a.de :
                        null), c.stroke(d), XH(a, b))
                },
                XH = function(a, b, c) {
                    if (c = a.la().G(c || "hatchSlice")) a = SH("hatchFill", 3, !0)(a, b, !1), c.stroke(null).fill(a)
                },
                lI = function(a, b) {
                    var c = a.la();
                    if (1 != c.Ib() && 360 != c.G("sweep")) {
                        if ($.n(b)) c.G("exploded", b);
                        else {
                            var d = c.G("exploded");
                            c.G("exploded", !d)
                        }
                        var d = c.G("start"),
                            e = c.G("sweep");
                        $.n(d) && $.n(e) && e && (d = c.sa(), a.N("mode3d") ? bI(a, d, !0) : YH(a, !0), LH(a) && ($.T(a.labels()), a.labels().clear(), kI(a), a.labels().ea(), a.labels().ka(!0), c.select(d)), c = a.state.j | $.zu(a.state, c.sa()), jI(a,
                            c, !!(c & 1)), a.labels().ea())
                    }
                },
                LH = function(a) {
                    return "outside" == $.Wk(a.labels().N("position"))
                },
                gI = function(a, b) {
                    var c = a.la();
                    if (!a.ba || b) a.ba = new $.Nt;
                    a.ba.Eh(c).vh([a.$d(c.sa()), a]);
                    var d = {
                        x: {
                            value: c.get("x"),
                            type: "string"
                        },
                        value: {
                            value: c.get("value"),
                            type: "number"
                        },
                        name: {
                            value: c.get("name"),
                            type: "string"
                        },
                        index: {
                            value: c.sa(),
                            type: "number"
                        },
                        chart: {
                            value: a,
                            type: ""
                        }
                    };
                    c.G("groupedPoint") && (d.name = {
                        value: "Other points",
                        type: "string"
                    }, d.groupedPoint = {
                        value: !0,
                        type: "string"
                    }, d.names = {
                        value: c.G("names"),
                        type: ""
                    }, d.values = {
                        value: c.G("values"),
                        type: ""
                    });
                    return $.Ct(a.ba, d)
                },
                nI = function(a, b) {
                    a.Jd || (a.Jd = []);
                    var c = b.sa();
                    a.Jd[c] || (a.Jd[c] = $.$m(a.labels().ki(b)));
                    return a.Jd[c]
                },
                oI = function(a, b) {
                    var c = b.sa();
                    a.Jd && (a.Jd[c] = null)
                },
                kI = function(a) {
                    var b = a.la(),
                        c, d, e, f;
                    a.dc = [];
                    var h = a.N("mode3d");
                    a.Ja ? (a.Ja.clear(), h && a.vc.clear()) : (a.Ja = new $.Sy(function() {
                        return $.kk()
                    }, function(a) {
                        a.clear()
                    }), a.Ja.parent(a.Ta), a.Ja.zIndex(32), h && (a.vc = new $.Sy(function() {
                            return $.kk()
                        }, function(a) {
                            a.clear()
                        }), a.vc.parent(a.Ta),
                        a.vc.zIndex(29)));
                    a.g = [];
                    var k = a.N("connectorStroke");
                    a.Rc || (a.Rc = a.Ta.path(), a.Rc.stroke(k));
                    var l = [],
                        m = [],
                        p, q;
                    b.reset();
                    for (var r = !1, t = !1; b.advance();)
                        if (!UH(b.get("value"))) {
                            var u = b.sa();
                            f = b.G("start");
                            d = b.G("sweep");
                            c = b.G("exploded") && 1 != b.Ib();
                            d = (f + d / 2) * Math.PI / 180;
                            var v = $.Jb($.Kb(d));
                            270 < v && !r && (m.length || q && q.length) && (r = !0, p = []);
                            90 < v && !t && (l.length || p && p.length) && (t = !0, q = []);
                            f = 90 > v || 270 < v;
                            e = a.b + (c ? a.B : 0);
                            var w = h ? .45 * a.b + (c ? .45 * a.B : 0) : e;
                            c = a.Fb + e * Math.cos(d);
                            d = a.Ab + w * Math.sin(d);
                            h && (d += .2 * a.b /
                                2);
                            e = f ? 5 : -5;
                            b.G("connector", e);
                            a.dc[2 * u] = c;
                            a.dc[2 * u + 1] = d;
                            b.G("anchor", f ? "left-center" : "right-center");
                            c = jI(a, $.cm, !1);
                            oI(a, c);
                            c.ha = v;
                            f ? r ? p.push(c) : l.push(c) : t ? q.push(c) : m.push(c);
                            "allow-overlap" == a.N("overlapMode") && c && 0 != c.enabled() && (u = c.sa(), a.g[u] || (d = a.dc[2 * u + 1] - .2 * a.b / 2, d = h && d < a.Ab ? $.Ty(a.vc) : $.Ty(a.Ja), a.g[u] = d, d.stroke(k), iI(a, c, d)))
                        }
                    l = p ? p.concat(l) : l;
                    m = q ? q.concat(m) : m;
                    if ("allow-overlap" != a.N("overlapMode")) {
                        var x, r = [];
                        f = null;
                        p = 0;
                        for (q = m.length; p < q; p++)
                            if (c = m[p]) {
                                b.select(c.sa());
                                c.Fe(gI(a));
                                d = nI(a, c);
                                if (!f || pI(f, d)) f && r.push(f), f = "left-center" == c.anchor(), f = new qI(f, a, r);
                                rI(f, c)
                            }
                        f && r.push(f);
                        p = 0;
                        for (q = r.length; p < q; p++)(f = r[p]) && f.Cj && (x || (x = []), x = $.lb(x, f.Cj));
                        f = null;
                        if (x) {
                            $.wb(x, function(a, b) {
                                return a.sa() > b.sa() ? 1 : a.sa() < b.sa() ? -1 : 0
                            });
                            p = 0;
                            for (q = x.length; p < q; p++)
                                if (c = x[p]) {
                                    b.select(c.sa());
                                    c.Fe(gI(a));
                                    d = nI(a, c);
                                    t = !0;
                                    v = 0;
                                    for (u = r.length; v < u; v++) t = t && pI(r[v], d);
                                    if (t) {
                                        f || (f = "left-center" == c.anchor(), f = new qI(f, a, []));
                                        sI(f, c);
                                        d = f.sb();
                                        t = !0;
                                        for (v = 0; v < u; v++) t = t && pI(r[v], d);
                                        f.md || !t ? (f.labels.pop().enabled(!1),
                                            tI(f), r.push(f), f = null) : c.enabled(!0)
                                    } else f && (r.push(f), f = null)
                                }
                            f && (r.push(f), f = null)
                        }
                        m = [];
                        f = null;
                        for (p = l.length; p--;)
                            if (c = l[p]) {
                                b.select(c.sa());
                                c.Fe(gI(a));
                                d = nI(a, c);
                                if (!f || pI(f, d)) f && m.push(f), f = "left-center" == c.anchor(), f = new qI(f, a, m);
                                rI(f, c)
                            }
                        f && m.push(f);
                        x && (x.length = 0);
                        p = 0;
                        for (q = m.length; p < q; p++)(f = m[p]) && f.Cj && (x || (x = []), x = $.lb(x, f.Cj));
                        f = null;
                        if (x)
                            for ($.wb(x, function(a, b) {
                                    return a.sa() > b.sa() ? 1 : a.sa() < b.sa() ? -1 : 0
                                }), p = x.length; p--;)
                                if (c = x[p]) {
                                    b.select(c.sa());
                                    c.Fe(gI(a));
                                    d = nI(a, c);
                                    t = !0;
                                    v =
                                        0;
                                    for (u = m.length; v < u; v++) t = t && pI(m[v], d);
                                    if (t) {
                                        f || (f = "left-center" == c.anchor(), f = new qI(f, a, []));
                                        sI(f, c);
                                        d = f.sb();
                                        t = !0;
                                        for (v = 0; v < u; v++) t = t && pI(m[v], d);
                                        f.md || !t ? (f.labels.pop().enabled(!1), tI(f), m.push(f), f = null) : c.enabled(!0)
                                    } else f && (m.push(f), f = null)
                                }
                        f && (r.push(f), f = null);
                        p = 0;
                        for (q = r.length; p < q; p++)
                            if (f = r[p])
                                for (uI(f), b = 0, l = f.labels.length; b < l; b++)(c = f.labels[b]) && 0 != c.enabled() && (u = c.sa(), a.g[u] || (d = a.dc[2 * u + 1] - .2 * a.b / 2, d = h && d < a.Ab ? $.Ty(a.vc) : $.Ty(a.Ja), a.g[u] = d, d.stroke(k), iI(a, c, d)));
                        p = 0;
                        for (q =
                            m.length; p < q; p++)
                            if (f = m[p])
                                for (uI(f), b = 0, l = f.labels.length; b < l; b++)(c = f.labels[b]) && 0 != c.enabled() && (u = c.sa(), a.g[u] || (d = a.dc[2 * u + 1] - .2 * a.b / 2, d = h && d < a.Ab ? $.Ty(a.vc) : $.Ty(a.Ja), a.g[u] = d, d.stroke(k), iI(a, c, d)))
                    }
                },
                iI = function(a, b, c) {
                    var d = a.data().la(),
                        e = b.sa();
                    if (d.select(e)) {
                        var f = a.dc[2 * e],
                            e = a.dc[2 * e + 1],
                            d = d.G("connector"),
                            h = b.rc().value,
                            k = $.n(b.N("offsetY")) ? b.N("offsetY") : a.labels().N("offsetY");
                        k || (k = 0);
                        k = $.M(k, a.b);
                        (b = $.n(b.N("offsetX")) ? b.N("offsetX") : a.labels().N("offsetX")) || (b = 0);
                        b = $.H(h.angle +
                            $.M(b, 360));
                        k = h.radius + k;
                        h = a.Fb + k * Math.cos(b) - d;
                        a = a.Ab + k * Math.sin(b);
                        c.clear().moveTo(f, e).lineTo(h, a).lineTo(h + d, a)
                    }
                },
                hI = function(a) {
                    var b = LH(a),
                        c = a.la(),
                        d = c.G("start"),
                        e = c.G("sweep"),
                        f = 1 == c.Ib() || 360 == e,
                        c = c.G("exploded") && !f,
                        d = d + e / 2,
                        h, k, l;
                    l = a.N("mode3d");
                    e = a.N("insideLabelsOffset");
                    return l ? (b ? (f = a.b + a.K, e = .45 * a.b + a.K, c && (f += a.B, e += .45 * a.B)) : (h = a.b, b = .45 * a.b, k = a.Ua, l = .45 * a.Ua, f && !k ? e = f = 0 : (f = $.M(e, k + h), e = $.Vn(e) ? $.M(e, l + b) : .45 * $.M(e, l + b), c && (f += a.B, e += .45 * a.B))), {
                        value: {
                            angle: d,
                            radius: f,
                            radiusY: e
                        }
                    }) : {
                        value: {
                            angle: d,
                            radius: b ? a.b + a.K + (c ? a.B : 0) : $.M(e, f && !a.Ua ? 0 : a.b - a.Ua) + a.Ua + (c ? a.B : 0)
                        }
                    }
                },
                qI = function(a, b, c) {
                    this.J = c;
                    this.b = b;
                    this.labels = [];
                    this.y = this.height = 0;
                    this.g = [];
                    this.j = a;
                    this.md = !1;
                    this.Bh = null
                },
                rI = function(a, b) {
                    b && (a.labels.push(b), vI(a))
                },
                sI = function(a, b) {
                    b && (a.labels.push(b), tI(a))
                },
                pI = function(a, b) {
                    var c = $.Zm(a.sb());
                    return !$.Wm(c, $.Zm(b))
                },
                uI = function(a) {
                    for (var b = 0, c = a.labels.length; b < c; b++) {
                        var d = a.labels[b],
                            e = a.g[3 * b],
                            f = a.g[3 * b + 1],
                            h = a.g[3 * b + 2],
                            k = d.rc().value;
                        k.angle = e;
                        k.radius = f;
                        k.radiusY = h;
                        oI(a.b, d)
                    }
                },
                tI = function(a) {
                    var b, c, d = a.height = 0;
                    a.od();
                    var e = a.b.kT(),
                        f = e.x,
                        e = e.y,
                        h, k, l = a.b.N("mode3d");
                    l ? (h = e + .45 * a.b.b + a.b.K - .1 + .2 * a.b.b / 2, k = e - (.45 * a.b.b + a.b.K) + .1 - .2 * a.b.b / 2) : (h = e + a.b.b + a.b.K - .1, k = e - (a.b.b + a.b.K) + .1);
                    for (var m = 0, p = a.labels.length; m < p; m++) b = a.labels[m], c = nI(a.b, b), d += c.top - a.height - c.height / 2, a.height += c.height;
                    a.y = d / p;
                    d = a.y + a.height;
                    d > h && (d = h, a.y = h - a.height);
                    a.labels.length && (c = nI(a.b, a.labels[0]).height, a.y + c < k && (d = k - c + a.height, a.y = k - c));
                    k = a.b.N("outsideLabelsCriticalAngle");
                    a.g.length = 0;
                    h = a.b.data().la();
                    var q, r, t, u, v, w, x, z;
                    a.x = window.NaN;
                    a.width = window.NaN;
                    a.F = null;
                    a.B = window.NaN;
                    a.o = window.NaN;
                    a.md = !1;
                    m = 0;
                    for (p = a.labels.length; m < p; m++) {
                        b = a.labels[m];
                        c = nI(a.b, b);
                        q = m == p - 1 ? 0 : nI(a.b, a.labels[m + 1]).height;
                        h.select(b.sa());
                        r = h.G("start");
                        t = h.G("sweep");
                        u = h.G("exploded");
                        var E = $.n(b.N("offsetX")) ? b.N("offsetX") : a.b.labels().N("offsetX");
                        E || (E = 0);
                        var E = $.M(E, 360),
                            N = $.n(b.N("offsetY")) ? b.N("offsetY") : a.b.labels().N("offsetY");
                        N || (N = 0);
                        N = $.M(N, a.b.b);
                        t = (r + t / 2 + E) * Math.PI / 180;
                        r = a.j ? 5 : -5;
                        w = a.b.b + (u ? a.b.B : 0);
                        v = a.b.b + a.b.K + (u ? a.b.B : 0) + N;
                        var R;
                        l ? (x = .45 * a.b.b + (u ? .45 * a.b.B : 0), R = .45 * a.b.b + a.b.K + (u ? .45 * a.b.B : 0) + .45 * N) : (x = w, R = v);
                        u = d;
                        z = w + a.b.K;
                        var P = x + a.b.K;
                        Math.abs(u - e) > P && (P = Math.abs(u - e));
                        P = z * Math.sqrt(Math.pow(P, 2) - Math.pow(u - e, 2)) / P;
                        z = f + (a.j ? 1 : -1) * Math.abs(P);
                        w = f + w * Math.cos(t);
                        x = e + x * Math.sin(t);
                        v = f + v * Math.cos(t);
                        t = e + R * Math.sin(t);
                        t = $.Kb(Math.acos($.Ym(w, x, v, t).toFixed(3) / $.Ym(w, x, z, u).toFixed(3)));
                        if (t > a.o || (0, window.isNaN)(a.o) || 0 > P) a.o = 0 > P ? Number.POSITIVE_INFINITY : t, a.F =
                            b, a.B = m;
                        if (t > k || 0 > P) a.md = !0;
                        b = z + r;
                        r = a.j ? b : b - c.width;
                        a.x = (0, window.isNaN)(a.x) ? r : a.x > r ? r : a.x;
                        r = a.j ? b + c.width : b;
                        a.width = (0, window.isNaN)(a.width) ? r : a.width < r ? r : a.width;
                        b -= f;
                        u -= e;
                        l && (u += .2 * a.b.b / 2);
                        r = Math.sqrt(Math.pow(b, 2) + Math.pow(u, 2)) - N;
                        N = Math.sqrt(Math.pow(b, 2) + Math.pow(u, 2)) - N;
                        t = window.NaN;
                        0 < b && 0 <= u ? t = $.Kb(Math.atan(u / b)) : 0 < b && 0 > u ? t = $.Kb(Math.atan(u / b)) + 360 : 0 > b ? t = $.Kb(Math.atan(u / b)) + 180 : !b && 0 < u ? t = 90 : !b && 0 > u && (t = 270);
                        t -= E;
                        a.g.push(t, r, N);
                        d -= c.height / 2 + q / 2
                    }
                    a.width -= a.x
                },
                vI = function(a) {
                    tI(a);
                    if (a.md) {
                        var b =
                            a.F,
                            c = a.B;
                        (0, window.isNaN)(c) || (b.enabled(!1), a.Cj || (a.Cj = []), a.Cj.push(b), $.gb(a.labels, c, 1));
                        var d = a.b,
                            b = a.labels,
                            e = a.J,
                            f, h, k, l, m = e[e.length - 1];
                        if (m != a) {
                            var p = null,
                                c = b.slice(),
                                q = e.length,
                                r = !1;
                            f = 0;
                            for (h = b.length; f < h; f++)
                                if (k = b[f]) l = nI(d, k), !m || pI(m, l) ? !p || pI(p, l) ? (p && (e.push(p), m = p), l = "left-center" == k.anchor(), p = new qI(l, d, e), sI(p, k)) : (sI(p, k), d.md ? (k.enabled(!1), p.Cj || (p.Cj = []), p.Cj.push(k), p.labels.pop(), tI(p)) : m && p && !pI(m, p.sb()) && (e.pop(), p.labels = $.lb(m.labels, p.labels), m = null, tI(p), r = !0)) :
                                    (k.enabled(!1), p && (p.Cj || (p.Cj = []), p.Cj.push(k)));
                            if (p)
                                if (0 < e.length - q || r) a.labels = p.labels;
                                else {
                                    d = p;
                                    if (d.Cj) {
                                        e = 0;
                                        for (f = d.Cj.length; e < f; e++) d.Cj[e].enabled(!0);
                                        d.Cj.length = 0
                                    }
                                    c.length != b.length && (a.labels = c)
                                }
                        }
                        vI(a)
                    } else if ((b = a.J[a.J.length - 1]) && (c = b.sb()), c && !pI(a, c)) {
                        a.J.pop();
                        a.labels = $.lb(b.labels, a.labels);
                        b = 0;
                        for (c = a.labels.length; b < c; b++) a.labels[b].enabled(!0);
                        vI(a)
                    }
                },
                wI = function(a, b) {
                    var c = new PH(a, b);
                    c.va(!0, $.jm("pie"));
                    return c
                },
                xI = function(a, b) {
                    var c = new PH(a, b);
                    c.va(!0, $.jm("pie3d"));
                    return c
                };
            $.G(FH, $.uu);
            FH.prototype.B = function(a, b) {
                if (this.target.la().select(b)) {
                    var c = $.ub(this.J, b);
                    a != $.cm && (0 > c ? ($.hb(this.J, b, ~c), $.hb(this.b, a, ~c), this.j == $.cm && this.target.jh(a), $.wu(this, window.NaN) && !this.target.vf() && "single" == this.target.Mc() && this.target.kh(a)) : (this.b[c] |= a, this.target.jh(this.b[c])))
                }
            };
            $.G(IH, $.hw);
            $.g = IH.prototype;
            $.g.update = function() {
                this.g.length = this.j.length = 0;
                for (var a = this.ya.qf(); a.advance();)
                    if (!a.G("missing")) {
                        var b = a.G("start"),
                            c = a.G("sweep"),
                            d = this.ya.b,
                            e = this.ya.CT();
                        this.g.push(this.ya.oh(), 0, 0, 0);
                        this.j.push(b, c, d, e)
                    }
            };
            $.g.sl = function() {
                VH(this.ya, 1E-5, 1E-5, LH(this.ya))
            };
            $.g.li = function() {
                for (var a = this.ya.qf(), b = 0; a.advance();)
                    if (!a.G("missing")) {
                        a.G("start", this.b[b++]);
                        a.G("sweep", this.b[b++]);
                        a.G("radius", this.b[b++]);
                        a.G("innerRadius", this.b[b++]);
                        var c = this.ya,
                            d = a,
                            e = d.G("slice");
                        e.clear();
                        var f = d.G("start"),
                            h = d.G("sweep"),
                            k = d.G("radius"),
                            l = d.G("innerRadius");
                        if (d.G("exploded") && 1 != d.Ib()) var m = f + h / 2,
                            e = $.Zi(e, c.Fb + c.B * Math.cos($.H(m)), c.Ab + c.B * Math.sin($.H(m)), k, l, f, h);
                        else e = $.Zi(e, c.Fb, c.Ab, k, l, f, h);
                        if (f = d.G("hatchSlice")) c.la().select(d.sa()), f.clear(), f.jd(e.O()),
                            c = SH("hatchFill", 3, !0)(c, $.zu(c.state, d.sa()), !1), f.stroke(null).fill(c)
                    }
            };
            $.g.Ng = function() {
                this.li()
            };
            $.g.da = function() {
                IH.I.da.call(this);
                this.ya = null
            };
            $.G(KH, $.rq);
            $.g = KH.prototype;
            $.g.ty = function() {
                var a = [],
                    b = this.b.la(),
                    c = void 0,
                    d = void 0;
                if (this.j)
                    for (; b.advance();) {
                        var e = b.get(this.B),
                            f = b.get("name");
                        $.n(f) || (f = "Point " + b.sa());
                        this.j(e) ? a.push(b.sa()) : c ? (c.push(e), d.push(f)) : (c = [e], d = [f])
                    } else
                        for (e = 0, b = b.Ib(); e < b; e++) a.push(e);
                c ? (this.g.Ff(0, (0, $.hh)(c, this.K, this.ma())), this.g.G(0, "names", d), this.g.G(0, "values", c)) : (this.g.Ff(0, c), this.g.G(0, "names", []), this.g.G(0, "values", []));
                return a
            };
            $.g.Ib = function() {
                $.sq(this);
                return (this.ck ? this.ck.length : this.b.Ib()) + this.g.Ib()
            };
            $.g.ci = function(a) {
                $.sq(this);
                var b = this.b.Ib();
                return a < b ? this.b.ci(a) : this.g.ci(a - b)
            };
            $.g.Zn = function() {
                return $.lb(this.b.Zn(), this.g)
            };
            $.g.Ff = function(a, b) {
                $.sq(this);
                var c = this.ck ? this.ck.length : this.b.Ib();
                if (a < c) return $.rq.prototype.Ff.apply(this, arguments);
                a -= c;
                return this.g.Ff.apply(this.g, arguments)
            };
            $.g.kF = function(a, b, c) {
                var d = this.ck ? this.ck.length : this.b.Ib();
                if (a > d) throw Error("Index can not be masked by this View");
                return a >= d ? (a -= d, 2 < arguments.length ? (this.g.G.apply(this.g, arguments), this) : this.g.G.apply(this.g, arguments)) : $.rq.prototype.kF.apply(this, arguments)
            };
            $.G(JH, $.yq);
            JH.prototype.Ff = function(a, b) {
                if (!a) {
                    var c = this.j;
                    1 < arguments.length && (this.j = b);
                    return c
                }
            };
            JH.prototype.G = function(a, b, c) {
                if (!a) return $.rq.prototype.G.apply(this, arguments)
            };
            JH.prototype.Ib = function() {
                return $.n(this.j) ? 1 : 0
            };
            var yI = JH.prototype;
            yI.row = yI.Ff;
            yI.getRowsCount = yI.Ib;
            $.G(MH, $.hw);
            MH.prototype.update = function() {
                this.g.length = this.j.length = 0;
                this.g.push(1E-5, 1E-5);
                this.j.push(1, this.J.opacity || 1)
            };
            MH.prototype.li = function() {
                VH(this.ya, this.b[0], this.b[1], this.F)
            };
            MH.prototype.Ng = function() {
                this.li()
            };
            MH.prototype.da = function() {
                MH.I.da.call(this);
                this.J = this.ya = null;
                delete this.F
            };
            $.G(NH, $.Ax);
            NH.prototype.oh = function() {
                return this.ya.data().G(this.index, "start")
            };
            NH.prototype.j = function() {
                var a = this.ya.data(),
                    b = a.G(this.index, "start"),
                    a = a.G(this.index, "sweep");
                return b + a
            };
            NH.prototype.selected = function(a) {
                return $.n(a) ? (this.Yb().iK(this.index, !!a), this) : this.ya.data().G(this.index, "exploded")
            };
            NH.prototype.g = NH.prototype.selected;
            var zI = NH.prototype;
            zI.getStartAngle = zI.oh;
            zI.getEndAngle = zI.j;
            zI.hovered = zI.Kb;
            zI.selected = zI.selected;
            zI.exploded = zI.g;
            $.G(PH, $.Pu);
            $.Hp(PH, ["fill", "stroke", "hatchFill"]);
            $.g = PH.prototype;
            $.g.Za = function(a) {
                return $.n(a) ? (this.ca.X(a), this) : this.ca
            };
            $.g.Kb = function(a) {
                return $.n(a) ? (this.Xb.X(a), this) : this.Xb
            };
            $.g.Va = function() {
                return this.N("mode3d") ? "pie-3d" : "pie"
            };
            $.g.Aa = $.Pu.prototype.Aa | 16;
            $.g.xa = $.Pu.prototype.xa | 12304;
            $.g.pD = function() {
                if (!this.N("mode3d") && this.Jl().enabled() && 0 < this.Jl().duration())
                    if (this.fa && 1 == this.fa.Ud) this.fa.update();
                    else if (this.W(2048)) {
                    $.K(this.fa);
                    this.fa = new $.Ry;
                    var a = this.Jl().duration(),
                        b = a * (1 - .85),
                        a = new IH(this, .85 * a),
                        b = new MH(this, b);
                    this.fa.add(a);
                    this.fa.add(b);
                    this.fa.pa("begin", function() {
                        $.Iu(this, !0);
                        $.lq(this, {
                            type: "animationstart",
                            chart: this
                        })
                    }, !1, this);
                    this.fa.pa("end", function() {
                        $.Iu(this, !1);
                        $.lq(this, {
                            type: "animationend",
                            chart: this
                        })
                    }, !1, this);
                    this.fa.Jh(!1)
                }
            };
            $.g.we = function() {
                return [this]
            };
            $.g.vf = function() {
                return !0
            };
            $.g.Yg = function() {
                return !1
            };
            $.g.xg = function() {
                return !0
            };
            $.g.data = function(a, b) {
                if ($.n(a)) {
                    if (a) {
                        var c = a.title || a.caption;
                        c && this.title(c);
                        a.rows && (a = a.rows)
                    }
                    if (this.Ia !== a) {
                        this.Ia = a;
                        if (this.Sa != a || null === a) {
                            $.K(this.Y);
                            var d;
                            $.J(a, $.rq) ? (d = a, this.Y = null) : ($.J(a, $.Cq) ? d = (this.Y = a).qe() : d = (this.Y = new $.Cq($.y(a) || $.B(a) ? a : null, b)).qe(), $.L(this, this.Y));
                            this.Sa = d.xk()
                        }
                        OH(this)
                    }
                    return this
                }
                return this.Na
            };
            $.g.la = function() {
                return this.Ha || (this.Ha = this.Na.la())
            };
            $.g.hc = function() {
                return this.Ha = this.Na.la()
            };
            $.g.qf = function() {
                return this.Na.la()
            };
            $.g.Mq = function(a) {
                if ($.J(a, $.xr)) return QH(this, $.xr, a), this;
                if ($.J(a, $.tr)) return QH(this, $.tr, a), this;
                $.A(a) && "range" == a.type ? QH(this, $.xr) : !$.A(a) && this.o || QH(this, $.tr);
                return $.n(a) ? (this.o.X(a), this) : this.o
            };
            $.g.PB = function(a) {
                this.P || (this.P = new $.ur, $.S(this.P, this.WP, this), $.L(this, this.P));
                return $.n(a) ? (this.P.X(a), this) : this.P
            };
            var RH = {};
            PH.prototype.Si = function(a, b, c, d, e, f, h) {
                f = !!(b & 1);
                e = (f ? this.Xb : this.ca).N(a);
                h ? a = e : (h = c.get(f ? "hovered" : "normal"), a = $.so($.n(h) ? h[a] : void 0, c.get($.dm(b, a)), e));
                $.n(a) && (a = d(a));
                return a
            };
            PH.prototype.Ci = function() {
                return $.zc(this.PB().pd(this.la().sa()) || "none")
            };
            PH.prototype.Tk = function() {
                var a = this.la();
                return {
                    index: a.sa(),
                    sourceHatchFill: this.Ci(),
                    iterator: a
                }
            };
            PH.prototype.Yi = function(a) {
                var b = this.la();
                return {
                    index: b.sa(),
                    sourceColor: a || this.Mq().pd(b.sa()) || "blue",
                    iterator: b
                }
            };
            var AI = function() {
                var a = {};
                $.Q(a, 0, "overlapMode", $.Sk);
                $.Q(a, 0, "radius", function(a) {
                    return $.Wn(a, "100%")
                });
                $.Q(a, 0, "innerRadius", function(a) {
                    return $.D(a) ? a : $.Wn(a)
                });
                $.Q(a, 0, "startAngle", function(a) {
                    return $.Jb($.O(a) || 0)
                });
                $.Q(a, 0, "explode", function(a) {
                    return $.Wn(a, 15)
                });
                $.Q(a, 0, "sort", $.Mk);
                $.Q(a, 0, "outsideLabelsSpace", function(a) {
                    return $.Wn(a, "30%")
                });
                $.Q(a, 0, "insideLabelsOffset", $.Wn);
                $.Q(a, 0, "connectorLength", function(a) {
                    return $.Wn(a, "20%")
                });
                $.Q(a, 0, "outsideLabelsCriticalAngle", function(a) {
                    return $.Jb($.M(a))
                });
                $.Q(a, 0, "forceHoverLabels", $.Bp);
                $.Q(a, 1, "connectorStroke", $.Np);
                $.Q(a, 0, "mode3d", $.Cp);
                return a
            }();
            $.Gp(PH, AI);
            $.g = PH.prototype;
            $.g.labels = function(a) {
                return $.n(a) ? (this.ca.labels(a), this) : this.ca.labels()
            };
            $.g.VP = function(a) {
                return $.n(a) ? ($.D(a) && a != this.Oc ? (this.Oc = a, OH(this)) : $.to(a) && (this.Oc = null, OH(this)), this) : this.Oc
            };
            $.g.kT = function() {
                return {
                    x: this.Fb,
                    y: this.Ab
                }
            };
            $.g.d3 = function() {
                return this.b
            };
            $.g.CT = function() {
                return this.Ua
            };
            $.g.H9 = function() {
                return this.B
            };
            $.g.oh = function() {
                return this.N("startAngle") + -90
            };
            $.g.iK = function(a, b) {
                var c = this.la();
                c.select(a) && !UH(c.get("value")) && lI(this, $.n(b) ? !!b : !0);
                return this
            };
            $.g.f9 = function(a) {
                var b = this.la().reset();
                if ($.y(a))
                    for (var c = 0, d = a.length; c < d; c++) b.select(a[c]) && !UH(b.get("value")) && lI(this, !0);
                else
                    for (; b.advance();) b.select(b.sa()) && !UH(b.get("value")) && lI(this, a);
                return this
            };
            $.g.DI = function(a, b) {
                var c;
                c = this.la().sa();
                var d;
                $.B(a) && "aquastyle" == a ? (c = {
                    aquaStyleObj: this.Ob,
                    sourceColor: this.Mq().pd(c)
                }, c = this.Ie.call(c)) : $.D(a) ? (d = 1 < arguments.length ? this.DI.apply(this, $.pb(arguments, 1)) : this.Mq().pd(c), c = {
                    index: c,
                    sourceColor: d,
                    iterator: this.la()
                }, c = a.call(c)) : c = a;
                return c
            };
            $.g.xx = function() {
                this.o && $.J(this.o, $.xr) && this.o.count(this.la().Ib())
            };
            $.g.$h = function(a) {
                this.yc();
                $.bv(this.labels());
                var b = this.la(),
                    c;
                b.Ib();
                var d = this.N("mode3d");
                this.W(4) && (Eca(this, a), this.D(4112));
                if (this.W(16)) {
                    this.ha ? this.ha.clear() : (this.ha = new $.Sy(function() {
                        return $.kk()
                    }, function(a) {
                        a.clear()
                    }), this.ha.zIndex(30), this.ha.parent(this.Ta));
                    this.Ba ? this.Ba.clear() : (this.Ba = new $.Sy(function() {
                        return $.kk()
                    }, function(a) {
                        a.clear()
                    }), this.Ba.parent(this.Ta), this.Ba.zIndex(31).Xc(!0));
                    d && (this.F.length = 0);
                    var e = this.oh(),
                        f = 0;
                    for (b.reset(); b.advance();) c = b.get("value"),
                        UH(c) ? b.G("missing", !0) : (c = +c, f = c / this.af("sum") * 360, b.G("start", e).G("sweep", f), $.n(c = b.G("exploded")) || (c = !!b.get("exploded"), b.G("exploded", c), c && this.state.o(2, b.sa())), d ? Fca(this) : YH(this), e += f);
                    d && bI(this);
                    e = this.N("connectorStroke");
                    if (this.g)
                        for (var h in this.g) this.g.hasOwnProperty(h) && this.g[h].stroke(e);
                    this.Rc && this.Rc.stroke(e);
                    this.U(16)
                }
                if (this.W(4096)) {
                    this.labels().$() || this.labels().$(this.Ta);
                    this.labels().clear();
                    this.Ja && (this.Ja.clear(), d && this.vc.clear());
                    d = LH(this) ? $.jm("pie.outsideLabels") :
                        $.jm("pie.insideLabels");
                    this.labels().yl(d.autoColor);
                    this.labels().disablePointerEvents(d.disablePointerEvents);
                    if (LH(this)) kI(this);
                    else
                        for (b.reset(); b.advance();) UH(b.get("value")) || (d = this.state.j | $.zu(this.state, b.sa()), jI(this, d, !!(d & 1)));
                    this.labels().ea();
                    this.labels().$e().clip(a);
                    this.U(4096)
                }
            };
            $.g.Mc = function(a) {
                return $.n(a) ? (a = $.yk(a), a != this.qa && (this.qa = a), this) : this.qa
            };
            $.g.c3 = function(a) {
                $.U(a, 16) && this.D(13104, 17)
            };
            $.g.sd = function(a) {
                var b = 0,
                    c = 0;
                $.U(a, 1) && (b |= 4096, c |= 1);
                $.U(a, 8) && (b |= 4100, c |= 9);
                this.D(b, c)
            };
            $.g.WP = function(a) {
                $.U(a, 2) && this.D(528, 1)
            };
            $.g.Um = function() {
                return []
            };
            $.g.If = function(a) {
                a = {
                    type: a.type,
                    target: this,
                    relatedTarget: $.js(a.relatedTarget) || a.relatedTarget,
                    domTarget: a.target,
                    relatedDomTarget: a.relatedTarget,
                    offsetX: a.offsetX,
                    offsetY: a.offsetY,
                    clientX: a.clientX,
                    clientY: a.clientY,
                    screenX: a.screenX,
                    screenY: a.screenY,
                    button: a.button,
                    keyCode: a.keyCode,
                    charCode: a.charCode,
                    ctrlKey: a.ctrlKey,
                    altKey: a.altKey,
                    shiftKey: a.shiftKey,
                    metaKey: a.metaKey,
                    platformModifierKey: a.platformModifierKey,
                    state: a.state
                };
                var b = $.Tn(a.domTarget).index;
                if (!$.n(b) && $.yu(this.state, 1)) {
                    var c =
                        $.Du(this.state, 1);
                    c.length && (b = c[0])
                }
                b = $.O(b);
                (0, window.isNaN)(b) || (a.pointIndex = a.sliceIndex = b);
                return a
            };
            $.g.Ml = function(a) {
                var b = this.lf(a);
                if (b) {
                    var c = b.pointIndex;
                    this.dispatchEvent(b) && this.la().select(c) && (this.jg(c), a = this.th("selected", a, [{
                        ia: this,
                        qc: [c],
                        fd: {
                            index: c,
                            Le: 0
                        }
                    }]), a.currentPoint.selected = !!this.la().G("exploded"), this.dispatchEvent(a))
                }
            };
            $.g.dg = function(a) {
                (a = this.lf(a)) && this.dispatchEvent(a)
            };
            $.g.lf = function(a) {
                var b;
                "pointIndex" in a ? b = a.pointIndex : "labelIndex" in a ? b = a.labelIndex : "markerIndex" in a && (b = a.markerIndex);
                b = $.O(b);
                if ((0, window.isNaN)(b)) return null;
                a.pointIndex = b;
                var c = a.type;
                switch (c) {
                    case "mouseout":
                        c = "pointmouseout";
                        break;
                    case "mouseover":
                        c = "pointmouseover";
                        break;
                    case "mousemove":
                        c = "pointmousemove";
                        break;
                    case "mousedown":
                        c = "pointmousedown";
                        break;
                    case "mouseup":
                        c = "pointmouseup";
                        break;
                    case "click":
                        c = "pointclick";
                        break;
                    case "dblclick":
                        c = "pointdblclick";
                        break;
                    default:
                        return null
                }
                var d =
                    this.data().la();
                d.select(b) || d.reset();
                return {
                    type: c,
                    actualTarget: a.target,
                    pie: this,
                    iterator: d,
                    sliceIndex: b,
                    pointIndex: b,
                    target: this,
                    originalEvent: a,
                    point: this.$d(b)
                }
            };
            $.g.$d = function(a) {
                var b = new NH(this, a),
                    c;
                this.la().select(a) && b.$s() && !UH(c = b.get("value")) && (a = c / this.af("sum") * 100, b.Da("percentValue", a), b.Da("yPercentOfTotal", a));
                return b
            };
            $.g.bj = function(a, b) {
                var c = [],
                    d = this.la().reset(),
                    e, f = "aquastyle" == this.ca.N("fill");
                if (f) {
                    var h = this.Ob;
                    this.Ob = {}
                }
                for (; d.advance();) {
                    e = d.sa();
                    var k = d.get("legendItem") || {},
                        l = null;
                    $.D(b) && (l = gI(this), l = b.call(l, l), $.C(l) && (l = String(l)));
                    $.B(l) || (l = d.G("groupedPoint") ? "Other points" : String($.n(d.get("name")) ? d.get("name") : d.get("x")));
                    var m = this.N("mode3d"),
                        p = SH("fill", 1, !1),
                        q = SH("stroke", 2, !1),
                        r = SH("hatchFill", 3, !1),
                        l = {
                            enabled: !0,
                            meta: {
                                pointIndex: e,
                                pointValue: d.get("value")
                            },
                            iconType: "square",
                            text: l,
                            iconStroke: m ? $.Ql(fI(this, $.cm), .2) : q(this, $.cm, !1),
                            iconFill: m ? fI(this, $.cm) : p(this, $.cm, !1),
                            iconHatchFill: r(this, $.cm, !1)
                        };
                    $.Tc(l, k);
                    l.sourceUid = $.ra(this);
                    l.sourceKey = e;
                    c.push(l)
                }
                f && (this.Ob = h);
                return c
            };
            $.g.Zm = function() {
                return !0
            };
            $.g.em = function(a) {
                a = a.Jf();
                var b = this.data().la();
                b.select(a) && (b = !!b.G("exploded"), this.iK(a, !b))
            };
            $.g.il = function(a, b) {
                var c = a.Jf();
                if (!a || null != c || (0, window.isNaN)(c))
                    if (c = $.Tn(b.domTarget)) c.ia = this
            };
            $.g.hl = function(a, b) {
                var c = a.Jf();
                if (!a || null != c || (0, window.isNaN)(c))
                    if (c = $.Tn(b.domTarget)) c.ia = this
            };
            $.g.Xg = function(a) {
                $.n(a) ? this.eg(a) : this.hi();
                return this
            };
            $.g.Qc = function(a) {
                if (($.yu(this.state, 1) || $.Fu(this.state.Kg(), 1)) && this.enabled()) {
                    var b;
                    $.n(a) ? b = a : b = this.state.j == $.cm ? window.NaN : void 0;
                    this.state.g(1, b);
                    a = this.Db();
                    this.tc(DH() || CH() ? "touchstart" : "mousemove", this.QB);
                    a.cd()
                }
            };
            $.g.eg = function(a, b) {
                if (!this.enabled()) return this;
                if ($.y(a)) {
                    for (var c = $.Du(this.state, 1), d = 0; d < c.length; d++) $.eb(a, c[d]) || this.state.g(1, c[d]);
                    $.Bu(this.state, 1, a);
                    $.n(b) && this.QB(b)
                } else $.C(a) && (this.Qc(), $.Bu(this.state, 1, a), $.n(b) && this.QB(b));
                return this
            };
            $.g.hi = function() {
                if (!this.enabled()) return this;
                this.state.o(1);
                return this
            };
            $.g.jg = function(a) {
                if (!this.enabled()) return this;
                var b = this.la();
                this.la().select(a[0] || a);
                b.G("exploded") ? this.state.g(2, a) : $.Bu(this.state, 2, a);
                lI(this);
                return this
            };
            $.g.jh = function(a) {
                WH(this, a);
                jI(this, a, !0)
            };
            $.g.Hi = function() {
                this.labels().ea()
            };
            $.g.kh = function(a) {
                WH(this, a)
            };
            $.g.XC = function() {
                var a = new $.Ht(0);
                $.L(this, a);
                a.ya(this);
                $.S(a, this.e3, this);
                return a
            };
            $.g.e3 = function() {
                this.Db().ea()
            };
            $.g.QB = function(a) {
                if (!a || a.target != this.be()) {
                    var b = this.Db(),
                        c = gI(this);
                    a && ($.T(b), $.Wt(b, a.clientX, a.clientY, c), b.ka(!1), this.pa(DH() || CH() ? "touchstart" : "mousemove", this.QB))
                }
            };
            $.g.yc = function() {
                if (this.W(8192)) {
                    this.jk = {};
                    for (var a = this.data().la(), b, c = 0, d = Number.MAX_VALUE, e = -Number.MAX_VALUE, f = 0; a.advance();) b = a.get("value"), UH(b) ? c++ : (b = +b, d = Math.min(b, d), e = Math.max(b, e), f += b);
                    var a = a.Ib() - c,
                        h;
                    a ? h = f / a : d = e = f = h = void 0;
                    this.Da("count", a);
                    this.Da("min", d);
                    this.Da("max", e);
                    this.Da("sum", f);
                    this.Da("average", h);
                    this.U(8192)
                }
            };
            $.g.Dh = function() {
                return gI(this)
            };
            $.g.uj = function() {
                return !this.la().Ib()
            };
            $.g.O = function() {
                var a = PH.I.O.call(this);
                a.type = this.Va();
                a.data = this.data().O();
                a.palette = this.Mq().O();
                a.hatchFillPalette = this.PB().O();
                a.tooltip = this.Db().O();
                $.Rp(this, AI, a, "Pie");
                a.normal = this.ca.O();
                a.hovered = this.Xb.O();
                return {
                    chart: a
                }
            };
            $.g.ga = function(a, b) {
                PH.I.ga.call(this, a, b);
                this.VP(a.group);
                this.data(a.data);
                this.Mq(a.palette);
                this.PB(a.hatchFillPalette);
                "tooltip" in a && this.Db().va(!!b, a.tooltip);
                $.Ip(this, AI, a);
                this.ca.va(!!b, a);
                this.ca.va(!!b, a.normal);
                this.Xb.va(!!b, a.hovered)
            };
            qI.prototype.sb = function() {
                if (!this.Bh) {
                    var a = this.labels[0] ? nI(this.b, this.labels[0]).height : 0;
                    this.Bh = new $.I(this.x, this.y + a / 2, this.width, this.height)
                }
                return this.Bh
            };
            qI.prototype.od = function() {
                this.Bh = null
            };
            PH.prototype.da = function() {
                $.od(this.fa, this.ca, this.Xb);
                PH.I.da.call(this)
            };
            var BI = PH.prototype;
            BI.group = BI.VP;
            BI.data = BI.data;
            BI.labels = BI.labels;
            BI.getCenterPoint = BI.kT;
            BI.getPixelRadius = BI.d3;
            BI.getPixelInnerRadius = BI.CT;
            BI.getPixelExplode = BI.H9;
            BI.palette = BI.Mq;
            BI.explodeSlice = BI.iK;
            BI.explodeSlices = BI.f9;
            BI.tooltip = BI.Db;
            BI.hatchFillPalette = BI.PB;
            BI.getType = BI.Va;
            BI.hover = BI.Xg;
            BI.unhover = BI.Qc;
            BI.getPoint = BI.$d;
            BI.toCsv = BI.nk;
            BI.normal = BI.Za;
            BI.hovered = BI.Kb;
            $.Yo.pie = wI;
            $.Yo["pie-3d"] = xI;
            $.F("anychart.pie", wI);
            $.F("anychart.pie3d", xI);
        }).call(this, $)
    }
    if (!_.theme_pie) {
        _.theme_pie = 1;
        (function($) {
            $.wa($.fa.anychart.themes.defaultTheme, {
                pie: {
                    animation: {
                        duration: 2E3
                    },
                    title: {
                        text: "Pie Chart"
                    },
                    group: !1,
                    sort: "none",
                    radius: "45%",
                    innerRadius: 0,
                    startAngle: 0,
                    explode: 15,
                    outsideLabelsCriticalAngle: 60,
                    outsideLabelsSpace: 30,
                    insideLabelsOffset: "50%",
                    normal: {
                        labels: {
                            format: "{%PercentValue}{decimalsCount:1,zeroFillDecimals:true}%"
                        }
                    },
                    a11y: {
                        titleFormat: function() {
                            var a = this.chart,
                                b = $.LG.apply(this),
                                b = b + (", with " + a.af("count") + " points. ");
                            return b += "Min value is " + a.af("min") + ", max value is " + a.af("max") +
                                "."
                        }
                    }
                },
                pie3d: {
                    mode3d: !0,
                    explode: "5%",
                    connectorLength: "15%",
                    legendItem: {
                        iconStroke: null
                    }
                }
            });
        }).call(this, $)
    }
    $_ = window.anychart;
    $_.$ = $;
    $_._ = _
});