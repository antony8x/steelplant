!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 6));
})([
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(11);
    Object.defineProperty(t, "AllSubstringsIndexStrategy", {
      enumerable: !0,
      get: function () {
        return r.AllSubstringsIndexStrategy;
      },
    });
    var o = n(12);
    Object.defineProperty(t, "ExactWordIndexStrategy", {
      enumerable: !0,
      get: function () {
        return o.ExactWordIndexStrategy;
      },
    });
    var a = n(13);
    Object.defineProperty(t, "PrefixIndexStrategy", {
      enumerable: !0,
      get: function () {
        return a.PrefixIndexStrategy;
      },
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(14);
    Object.defineProperty(t, "CaseSensitiveSanitizer", {
      enumerable: !0,
      get: function () {
        return r.CaseSensitiveSanitizer;
      },
    });
    var o = n(15);
    Object.defineProperty(t, "LowerCaseSanitizer", {
      enumerable: !0,
      get: function () {
        return o.LowerCaseSanitizer;
      },
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(16);
    Object.defineProperty(t, "TfIdfSearchIndex", {
      enumerable: !0,
      get: function () {
        return r.TfIdfSearchIndex;
      },
    });
    var o = n(17);
    Object.defineProperty(t, "UnorderedSearchIndex", {
      enumerable: !0,
      get: function () {
        return o.UnorderedSearchIndex;
      },
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e, t) {
        t = t || [];
        for (var n = (e = e || {}), r = 0; r < t.length; r++)
          if (null == (n = n[t[r]])) return null;
        return n;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(18);
    Object.defineProperty(t, "SimpleTokenizer", {
      enumerable: !0,
      get: function () {
        return r.SimpleTokenizer;
      },
    });
    var o = n(19);
    Object.defineProperty(t, "StemmingTokenizer", {
      enumerable: !0,
      get: function () {
        return o.StemmingTokenizer;
      },
    });
    var a = n(20);
    Object.defineProperty(t, "StopWordsTokenizer", {
      enumerable: !0,
      get: function () {
        return a.StopWordsTokenizer;
      },
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (t.StopWordsMap = {
      a: !0,
      able: !0,
      about: !0,
      across: !0,
      after: !0,
      all: !0,
      almost: !0,
      also: !0,
      am: !0,
      among: !0,
      an: !0,
      and: !0,
      any: !0,
      are: !0,
      as: !0,
      at: !0,
      be: !0,
      because: !0,
      been: !0,
      but: !0,
      by: !0,
      can: !0,
      cannot: !0,
      could: !0,
      dear: !0,
      did: !0,
      do: !0,
      does: !0,
      either: !0,
      else: !0,
      ever: !0,
      every: !0,
      for: !0,
      from: !0,
      get: !0,
      got: !0,
      had: !0,
      has: !0,
      have: !0,
      he: !0,
      her: !0,
      hers: !0,
      him: !0,
      his: !0,
      how: !0,
      however: !0,
      i: !0,
      if: !0,
      in: !0,
      into: !0,
      is: !0,
      it: !0,
      its: !0,
      just: !0,
      least: !0,
      let: !0,
      like: !0,
      likely: !0,
      may: !0,
      me: !0,
      might: !0,
      most: !0,
      must: !0,
      my: !0,
      neither: !0,
      no: !0,
      nor: !0,
      not: !0,
      of: !0,
      off: !0,
      often: !0,
      on: !0,
      only: !0,
      or: !0,
      other: !0,
      our: !0,
      own: !0,
      rather: !0,
      said: !0,
      say: !0,
      says: !0,
      she: !0,
      should: !0,
      since: !0,
      so: !0,
      some: !0,
      than: !0,
      that: !0,
      the: !0,
      their: !0,
      them: !0,
      then: !0,
      there: !0,
      these: !0,
      they: !0,
      this: !0,
      tis: !0,
      to: !0,
      too: !0,
      twas: !0,
      us: !0,
      wants: !0,
      was: !0,
      we: !0,
      were: !0,
      what: !0,
      when: !0,
      where: !0,
      which: !0,
      while: !0,
      who: !0,
      whom: !0,
      why: !0,
      will: !0,
      with: !0,
      would: !0,
      yet: !0,
      you: !0,
      your: !0,
    });
    (r.constructor = !1),
      (r.hasOwnProperty = !1),
      (r.isPrototypeOf = !1),
      (r.propertyIsEnumerable = !1),
      (r.toLocaleString = !1),
      (r.toString = !1),
      (r.valueOf = !1);
  },
  function (e, t, n) {
    e.exports = n(7);
  },
  function (e, t, n) {
    "use strict";
    function r() {
      (n = $(window).height() - 54) > 1e3 && (n = 1e3),
        $("div#map").height(n - 8),
        g.map.invalidateSize(),
        $("div.content").height(n);
      var e = $(".dataTables_scrollBody");
      if (e.length) {
        var t = 300;
        e.hasHorizontalScrollBar() && (t += 10);
        var n = $("body").height() - t;
        e.css("height", n), g.table.columns.adjust().draw();
      }
    }
    function o(e) {
      return new Promise(function (t, n) {
        $.get(e, function (e) {
          t(e);
        });
      });
    }
    function a() {
      if (!g.first_load) {
        var e = new URLSearchParams(window.location.search),
          t = g.map.getZoom(),
          n = g.map.getCenter(),
          r = n.lat.toPrecision(8) + "," + n.lng.toPrecision(8) + "," + t;
        e.delete("view"),
          e.append("view", r),
          e.delete("country"),
          g.selected_country &&
            g.selected_country.name &&
            e.append("country", g.selected_country.name);
        var o = $("div#status-types input:checked")
          .map(function () {
            return $(this).val();
          })
          .get();
        o.length && (e.delete("status"), e.append("status", o));
        var a = $("div#process-types input:checked")
          .map(function () {
            return $(this).val();
          })
          .get();
        a.length && (e.delete("process"), e.append("process", a));
        var i = $("div.leaflet-control-mapswitcher-option-active").data().layer;
        i && (e.delete("maptype"), e.append("maptype", i));
        var s = $("div.leaflet-control-basemapbar-option-active").data().layer;
        s && (e.delete("basemap"), e.append("basemap", s));
        var l = $("input#mapsearch").val();
        e.delete("search"), l && e.append("search", l);
        var c = decodeURIComponent(e.toString());
        if (c) {
          var T = "?" + c;
          window.history.replaceState(T, "", T);
        }
        parent.postMessage(T, "*");
      }
    }
    function i(e) {
      void 0 === e && (e = {}),
        void 0 === e.name && (e.name = ""),
        void 0 === e.map && (e.map = !0),
        void 0 === e.results && (e.results = !0),
        void 0 === e.table && (e.table = !0),
        $("div.searchwrapper a.clear-search").hide(),
        e.map && s(H.fossil_data.features),
        e.results && c(H.fossil_data.features),
        e.table && T(H.fossil_data.features, e.name);
    }
    function s(e) {
      !(function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        g.clusters.RemoveMarkers(),
          e.forEach(function (e) {
            var t = e.properties.process,
              n = e.geometry.coordinates[0],
              r = e.geometry.coordinates[1];
            if (g.process_types[t]) {
              var o = g.process_types[t].cssclass,
                a = new PruneCluster.Marker(parseFloat(r), parseFloat(n), {
                  title: e.properties.project,
                  icon: L.divIcon({
                    className: "circle-div " + o,
                    iconSize: [15, 15],
                  }),
                });
              (a.data.attributes = e.properties), (a.data.coordinates = [r, n]);
              var i = g.process_types[t].order;
              (a.category = parseInt(i - 1)), g.clusters.RegisterMarker(a);
            }
          }),
          g.clusters.ProcessView();
        var n = g.clusters.Cluster.ComputeGlobalBounds();
        if (n)
          var r = [
            [n.minLat, n.minLng],
            [n.maxLat, n.maxLng],
          ];
        else r = g.homebounds;
        t &&
          setTimeout(function () {
            if ((g.map.fitBounds(r), !g.homebounds)) {
              var e = g.map.getCenter(),
                t = g.map.getBoundsZoom(r, !0);
              g.map.setView([e.lat, e.lng], t),
                g.map.once("moveend zoomend", function () {
                  g.homebounds = g.map.getBounds();
                });
            }
          }, 200);
      })(e),
        (function (e) {
          g.circle_layer.clearLayers(),
            e.sort(function (e, t) {
              return t.properties.steel_capacity - e.properties.steel_capacity;
            }),
            L.geoJson(e, {
              pointToLayer: function (e, t) {
                var n = void 0,
                  r = e.properties.steel_capacity;
                if ("N/A" != r && "unknown" != r) {
                  if (">0" == r || isNaN(r)) {
                    var o = L.divIcon({
                      className: "fossil-feature circle-div status8",
                      iconSize: [v.a.circlesize, v.a.circlesize],
                    });
                    n = L.marker(t, { icon: o });
                  } else
                    n = L.circleMarker(t, {
                      color: "#333",
                      weight: 1,
                      opacity: 0.5,
                      fillColor: g.process_types[e.properties.process].color,
                      fillOpacity: 0.5,
                      radius: l(r),
                    });
                  return n;
                }
              },
              onEachFeature: function (e, t) {
                var n =
                  "<div style='text-align:center;'><strong>" +
                  e.properties.project +
                  "</strong><br><div class='popup-click-msg'>Steel Capacity: " +
                  g.format.mixed(e.properties.steel_capacity) +
                  " (TTPA)</div></div>";
                t.bindTooltip(n),
                  "function" == typeof t.setStyle &&
                    (t.on("mouseover", function () {
                      t.setStyle({ weight: 2, fillOpacity: 1 });
                    }),
                    t.on("mouseout", function () {
                      t.setStyle({ weight: 1, fillOpacity: 0.5 });
                    }));
              },
            }).addTo(g.circle_layer);
          var t = e.map(function (e) {
              return parseInt(e.properties.steel_capacity);
            }),
            n = _.min(t),
            r = _.max(t),
            o = l(n),
            a = l(r),
            i = document.getElementById("circle-legend-canvas");
          i.height = 2 * a + 30;
          var s = i.getContext("2d"),
            c = i.width / 2,
            T = i.height / 2,
            u = new Path2D();
          (s.fillStyle = "rgba(255, 255, 255, 0.5)"),
            (s.lineWidth = 1),
            u.arc(c, T, a, 0, 2 * Math.PI, !1),
            s.fill(u),
            (s.strokeStyle = "#ccc"),
            s.stroke(u);
          var S = new Path2D();
          (s.fillStyle = "rgba(255, 255, 255, 0.5)"),
            S.arc(c, i.height - o - 15, o, 0, 2 * Math.PI, !1),
            s.fill(S),
            (s.strokeStyle = "#aaa"),
            s.stroke(S),
            (s.font = "8pt Arial"),
            (s.textAlign = "center"),
            (s.fillStyle = "#333");
          var b = g.format.number(n) + " TTPA",
            d = g.format.number(r) + " TTPA";
          s.fillText(b, c, i.height - 2 * o - 19.8),
            s.fillText(d, c, i.height - (i.height - 9.9));
        })(e);
    }
    function l(e) {
      return 0.5 * Math.sqrt(e / Math.PI);
    }
    function c(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : g.default_title;
      $("div#country-results div#results-title h3").text(t);
      var n = $("div#type-count").empty(),
        r = 0,
        o = 0,
        a = 0,
        i = ["cancelled", "mothballed", "retired"],
        s = ["announced", "construction", "operating"];
      Object.keys(g.process_types).forEach(function (t) {
        var l = 0;
        e.forEach(function (e) {
          e.properties.process == t && (l += 1),
            e.properties.process == t &&
              -1 == e.properties.id.indexOf("-") &&
              (r += 1),
            e.properties.process == t &&
              e.properties.id.indexOf("-") > -1 &&
              i.indexOf(e.properties.status) > -1 &&
              (o += 1),
            e.properties.process == t &&
              e.properties.id.indexOf("-") > -1 &&
              s.indexOf(e.properties.status) > -1 &&
              (a += 1);
        });
        var c = g.process_types[t].text,
          T = $("<div>", { html: c + "<span>" + l + "</span>" }).appendTo(n);
        0 == l && T.addClass("zerocount");
      });
      var l = $("div#country-results div#total-count").empty(),
        c =
          r > 0
            ? r > 1
              ? r + " " + g.fossil_name + "s"
              : e.length + " " + g.fossil_name
            : "Nothing found";
      $("<div>", { text: c }).appendTo(l);
      var T =
        o > 0
          ? o > 1
            ? o + " " + g.fossil_name2 + "s"
            : o + " " + g.fossil_name2
          : "";
      $("<div>", { text: T }).appendTo(l);
      var u =
        a > 0
          ? a > 1
            ? a + " " + g.fossil_name3 + "s"
            : a + " " + g.fossil_name3
          : "";
      $("<div>", { text: u }).appendTo(l),
        H.filtered &&
          e.length &&
          $(
            '<div id="zoom-filtered"><a class="zoomto">zoom to results</a></div>'
          ).appendTo(l);
    }
    function T(e, t) {
      var n = t || g.default_title;
      $("div#table h3 span").text(n);
      var r = $.map(g.attributes, function (e) {
          if (e.table) return e;
        }),
        o = [];
      Object.keys(g.attributes).forEach(function (e) {
        g.attributes[e].table && o.push(e);
      });
      var a = [];
      r.forEach(function (e) {
        var t = {};
        (t.title = e.name), (t.className = e.classname), a.push(t);
      });
      var i = [];
      e.forEach(function (e) {
        if (e.properties.project) {
          var t = e.properties,
            n = [];
          o.forEach(function (r) {
            var o = t[r];
            void 0 === o || "" == o
              ? (o = "n/a")
              : ((o = g.format[g.attributes[r].format](o)),
                "project" == r &&
                  (o =
                    '<a href="' +
                    e.properties.url +
                    '" target="_blank" title="click to open the Wiki page for this project">' +
                    e.properties.project +
                    "</a>"),
                "process" == r && (o = g.process_types[o].text),
                "status" == r && (o = g.status_types[o].text)),
              n.push(o);
          }),
            i.push(n);
        }
      });
      var s = $("#table-content table");
      g.table
        ? (g.table.clear(), g.table.rows.add(i), g.table.search("").draw())
        : (g.table = s.DataTable({
            data: i,
            columns: a,
            autoWidth: !0,
            scrollY: "1px",
            scrollX: !0,
            lengthMenu: [50, 100, 500],
            iDisplayLength: 500,
            dom: "litp",
            initComplete: function () {
              Object.keys(g.attributes).forEach(function (e) {
                if (g.attributes[e].hasOwnProperty("tooltip")) {
                  var t = g.attributes[e].classname,
                    n = g.attributes[e].tooltip,
                    r = $("#table-content table th." + t);
                  $("<span>", {
                    class: "info",
                    "data-tippy-content": n,
                  }).appendTo(r);
                }
              });
            },
          })),
        Object.keys(g.attributes).forEach(function (e) {
          if (g.attributes[e].hasOwnProperty("classname")) {
            var t = g.table.column(g.attributes[e].classname + ":name"),
              n = t.header().innerHTML;
            t.header().innerHTML = n +=
              '<span data-tippy-content="something"></span>';
          }
        }),
        (n =
          "undefined" == typeof name ? "All records" : "Records for " + name),
        $("#table h2 span").text(n);
    }
    function u(e) {
      e.preventDefault();
      var t = $("form.free-search input").val();
      return (
        (H.filtered = g.searchengine.search(t)),
        s(H.filtered),
        c(H.filtered, t),
        T(H.filtered, t),
        $("form#nav-table-search input").val(t),
        g.selected_country.layer.clearLayers(),
        (g.selected_country.name = ""),
        $("div#country-results").show(),
        $("a.clear-search").show(),
        $("div.leaflet-control-layers-overlays input").prop(
          "checked",
          "checked"
        ),
        a(),
        !1
      );
    }
    function S(e) {
      e.preventDefault();
      var t = $("form#nav-table-search input").val();
      t && $("div#table h3 span").text(t), g.table.search(t).draw();
      var n = g.table
        .rows({ filter: "applied" })
        .data()
        .map(function (e) {
          return +e[0];
        });
      (H.filtered = []),
        H.fossil_data.features.forEach(function (e) {
          n.indexOf(+e.properties.id) > -1 && H.filtered.push(e);
        }),
        s(H.filtered),
        $("form.free-search input").val(t).submit(),
        g.selected_country.layer.clearLayers(),
        c(H.filtered, t),
        $("a.clear-search").show(),
        $("div.leaflet-control-layers-overlays input").prop(
          "checked",
          "checked"
        ),
        a();
    }
    function b(e, t) {
      (("ontouchstart" in window || window.navigator.msMaxTouchPoints > 0) &&
        (d() ||
          (navigator.userAgent.match(/iPad/i) &&
            null != navigator.userAgent.match(/iPad/i)))) ||
        t
          .on("mouseover", function (e) {
            var t = this.feature.properties.NAME;
            t != g.hovered && g.countries.setStyle(g.country_no_style),
              (g.hovered = t),
              this.setStyle(g.country_hover_style);
          })
          .on("mouseout", function (e) {
            (e.originalEvent.toElement &&
              e.originalEvent.toElement.classList.contains("fossil-feature")) ||
              ((g.hovered = ""), this.setStyle(g.country_no_style));
          }),
        t.on("click", function () {
          !(function (e) {
            $("form.free-search input").val("");
            var t = e.properties.NAME;
            if (g.selected_country.name == t)
              (g.selected_country.name = ""),
                g.selected_country.layer.clearLayers(),
                i();
            else {
              (g.selected_country.name = t),
                g.selected_country.layer.clearLayers(),
                g.selected_country.layer.addData(e);
              var n = L.geoJSON(e).getBounds();
              !(function (e, t) {
                var n = [];
                if (
                  (H.fossil_data.features.forEach(function (t) {
                    var r =
                      "China" == t.properties.country ? "province" : "country";
                    t.properties[r] == e && n.push(t);
                  }),
                  !n.length)
                )
                  return !1;
                if (t) {
                  switch (e) {
                    case "Russia":
                      t = L.latLngBounds([38.354, 24], [78.11962, 178]);
                      break;
                    case "United States":
                      t = L.latLngBounds([18.3, -172.6], [71.7, -67.4]);
                      break;
                    case "Canada":
                      t = L.latLngBounds([41.6, -141], [81.7, -52.6]);
                  }
                  setTimeout(function () {
                    g.map.fitBounds(t);
                  }, 0);
                }
                $("div.leaflet-control-layers-overlays input").prop(
                  "checked",
                  "checked"
                ),
                  i({ name: e, map: !0, results: !1, table: !1 }),
                  c(n, e),
                  T(H.fossil_data.features);
              })(t, n);
            }
            (H.filtered = null), a();
          })(this.feature);
        });
    }
    function d() {
      return C.mobile();
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var p,
      f,
      P,
      h,
      M = n(8),
      m = n.n(M),
      A = n(10),
      G = (n.n(A), n(23)),
      y = (n.n(G), n(24)),
      v = n.n(y),
      B =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      g = {},
      H = {};
    (g.default_basemap = "basemap"),
      (g.default_title = "Worldwide"),
      (g.fossil_name = "iron/steel plant"),
      (g.fossil_name2 = "iron/steel plant capacity reduction"),
      (g.fossil_name3 = "iron/steel plant capacity addition"),
      (g.outerring = [
        [-90, -360],
        [-90, 360],
        [90, 360],
        [90, -360],
        [-90, -360],
      ]),
      (g.homebounds = [
        [51.069, 110.566],
        [-36.738, -110.566],
      ]),
      (g.minzoom = 2),
      (g.maxzoom = 15),
      (g.country_hover_style = {
        stroke: 3,
        color: "#1267a5",
        opacity: 0.6,
        fill: "#fff",
        fillOpacity: 0,
      }),
      (g.country_selected_style = {
        stroke: 3,
        color: "#1267a5",
        opacity: 1,
        fill: !1,
        fillOpacity: 0,
      }),
      (g.country_no_style = { opacity: 0, fillOpacity: 0 }),
      (g.attributes = {
        id: { name: "ID", format: "string", classname: "pid", table: !1 },
        project: {
          name: "Tên nhà máy (English)",
          format: "string",
          classname: "project",
          table: !0,
        },
        project_other: {
          name: "Tên nhà máy (ngôn ngữ khác)",
          format: "string",
          classname: "project_other",
          table: !0,
        },
        parent: {
          name: "Công ty mẹ",
          format: "string",
          classname: "parent",
          table: !0,
        },
        owner: {
          name: "Chủ Sở hữu",
          format: "string",
          classname: "owner",
          table: !0,
        },
        province: {
          name: "Địa phương",
          format: "string",
          classname: "province",
          tooltip: "province, state, administrative division, etc.",
          table: !0,
        },
        country: {
          name: "Quốc gia",
          format: "string",
          classname: "country",
          table: !0,
        },
        region: {
          name: "Vùng",
          format: "string",
          classname: "region",
          table: !0,
        },
        status: {
          name: "Trạng thái",
          format: "string",
          classname: "status",
          table: !0,
        },
        steel_capacity: {
          name: "Công suất thép thô",
          format: "mixed",
          classname: "steel_capacity",
          tooltip: "TTPA (thousand tons per annum)",
          table: !0,
        },
        iron_capacity: {
          name: "Iron capacity",
          format: "mixed",
          classname: "iron_capacity",
          tooltip: "TTPA (thousand tons per annum)",
          table: !0,
        },
        process: {
          name: "Quy trình luyện thép",
          format: "string",
          classname: "process",
          tooltip: "integrated, electric, or oxygen",
          table: !0,
        },
        equipment: {
          name: "Thiết bị sản xuất thép",
          format: "string",
          classname: "equipment",
          table: !0,
        },
        url: { name: "Wiki page", format: "string", table: !1 },
      }),
      (g.format = {
        string: function (e) {
          return e;
        },
        number: function (e) {
          return parseFloat(e).toLocaleString("vi-VN", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          });
        },
        mixed: function (e) {
          return isNaN(e) ? e : g.format.number(e);
        },
      }),
      (g.process_types = {
        electric: {
          text: "Electric",
          order: 1,
          color: v.a.status4,
          cssclass: "status4",
        },
        electric_oxygen: {
          text: "Electric, Oxygen",
          order: 2,
          color: v.a.status5,
          cssclass: "status5",
        },
        integrated_BF_and_DRI: {
          text: "Integrated (BF and DRI)",
          order: 3,
          color: v.a.status2,
          cssclass: "status2",
        },
        integrated_BF: {
          text: "Integrated (BF)",
          order: 4,
          color: v.a.status1,
          cssclass: "status1",
        },
        integrated_DRI: {
          text: "Integrated (DRI)",
          order: 5,
          color: v.a.status3,
          cssclass: "status3",
        },
        integrated_unknown: {
          text: "Integrated (unknown)",
          order: 6,
          color: v.a.status9,
          cssclass: "status9",
        },
        unknown: {
          text: "Unknown",
          order: 7,
          color: v.a.status11,
          cssclass: "status11",
        },
        oxygen: {
          text: "Oxygen",
          order: 8,
          color: v.a.status6,
          cssclass: "status6",
        },
        ironmaking_BF: {
          text: "Ironmaking (BF)",
          order: 9,
          color: v.a.status7,
          cssclass: "status7",
        },
        ironmaking_DRI: {
          text: "Ironmaking (DRI)",
          order: 10,
          color: v.a.status10,
          cssclass: "status10",
        },
        ironmaking_BF_and_DRI: {
          text: "Ironmaking (BF and DRI)",
          order: 11,
          color: v.a.status12,
          cssclass: "status12",
        },
        ironmaking_unknown: {
          text: "Ironmaking (unknown)",
          order: 12,
          color: v.a.status8,
          cssclass: "status8",
        },
        ironmaking_other: {
          text: "Ironmaking (other)",
          order: 13,
          color: v.a.status13,
          cssclass: "status13",
        },
      }),
      (g.status_types = {
        announced: { text: "Đã được công bố" },
        construction: { text: "Đang sửa chữa" },
        operating: { text: "Đang vận hành" },
        mothballed: { text: "Đã ngừng sản xuất" },
        retired: { text: "Đình chỉ hoạt động" },
        cancelled: { text: "Đã dừng" },
      }),
      (g.markercluster_colors = Object.keys(g.process_types).map(function (e) {
        return g.process_types[e].color;
      })),
      (g.first_load = !0),
      (g.map_loaded = !1),
      (g.ch_provinces = [
        "Anhui",
        "Beijing",
        "Chongqing",
        "Fujian",
        "Gansu",
        "Guangdong",
        "Guangxi",
        "Guizhou",
        "Hainan",
        "Hebei",
        "Heilongjiang",
        "Henan",
        "Hubei",
        "Hunan",
        "Inner Mongolia",
        "Jiangsu",
        "Jiangxi",
        "Jilin",
        "Liaoning",
        "Ningxia",
        "Qinghai",
        "Shaanxi",
        "Shandong",
        "Shanghai",
        "Shanxi",
        "Sichuan",
        "Tianjin",
        "Tibet",
        "Xinjiang",
        "Yunnan",
        "Zhejiang",
      ]),
      $(document).ready(function () {
        Promise.all([o("./data/data.csv"), o("./data/countries.json")]).then(
          function (e) {
            var t, n;
            !(function (e) {
              H.country_data = e[1];
              var t = Object.keys(g.process_types),
                n = { type: "FeatureCollection", features: [] };
              Papa.parse(e[0], { header: !0 }).data.forEach(function (e, r) {
                var o = {
                  type: "Feature",
                  geometry: {},
                  properties: {},
                  id: r,
                };
                if (t.indexOf(e.process) < 0)
                  console.log(
                    "Error: " +
                      e.project +
                      " has invalid production type: " +
                      e.process
                  );
                else if (e.lat && e.lng) {
                  (isNaN(parseFloat(e.lat)) || isNaN(parseFloat(e.lng))) &&
                    console.log(
                      "Error: " +
                        e.project +
                        " invalid latitude and/or longitude"
                    );
                  var a = [];
                  (a[0] = parseFloat(e.lng)),
                    (a[1] = parseFloat(e.lat)),
                    (o.geometry.type = "Point"),
                    (o.geometry.coordinates = a);
                  var i = Object.keys(g.attributes);
                  i.forEach(function (t) {
                    var n = e[t];
                    o.properties[t] = n;
                  }),
                    n.features.push(o);
                } else
                  console.log(
                    "Error: " + e.project + " missing latitude and/or longitude"
                  );
              }),
                (H.fossil_data = n);
            })(e),
              $("div a#home-button").on("click", function () {
                $("form.search-form input").val(""),
                  i({ name: "", map: !0, results: !0, table: !0 }),
                  g.selected_country.layer.clearLayers(),
                  (g.selected_country.name = ""),
                  (H.filtered = null),
                  $("div#zoom-filtered").remove(),
                  $("input#map-tab").click(),
                  r(),
                  g.map.fitBounds(g.homebounds),
                  g.basemap_control.selectLayer("map"),
                  $('div#map-type-controls input[value="clusters"]').click(),
                  $("div.leaflet-control-layers-overlays input").prop(
                    "checked",
                    "checked"
                  );
              }),
              $("form.search-form span.glyphicon-search").on(
                "click",
                function () {
                  $(this).closest("form").submit();
                }
              ),
              $("div.close").on("click", function () {
                $(this).parent().hide();
              }),
              $("#layers-icon").on("click", function () {
                $("div.layer-control").show();
              }),
              $("div#results-icon").on("click", function () {
                $("div#country-results").show();
              }),
              $("div.searchwrapper a.clear-search").on("click", function () {
                $("form.search-form input").val("").trigger("keyup"),
                  $(this).hide(),
                  (H.filtered = null),
                  $("div#zoom-filtered").remove(),
                  a();
              }),
              $("div#layer-control-clear span#select-all").on(
                "click",
                function (e) {
                  var t = $(this).data().type;
                  return (
                    $("div#" + t + "-types input:not(:checked)").each(function (
                      e
                    ) {
                      $(this).click();
                    }),
                    !1
                  );
                }
              ),
              $("div#layer-control-clear span#clear-all").on(
                "click",
                function (e) {
                  var t = $(this).data().type;
                  return (
                    $("div#" + t + "-types input:checked").each(function (e) {
                      $(this).click();
                    }),
                    !1
                  );
                }
              ),
              $("body").on("click", "a.zoomto", function () {
                !(function () {
                  if (H.filtered.length) {
                    var e = L.geoJSON(H.filtered).getBounds();
                    g.map.fitBounds(e);
                  }
                })();
              }),
              $("#btn-zoom").click(function () {
                var e = this.dataset.zoom.split(","),
                  t = L.latLng([e[0], e[1]]);
                g.basemap_control.selectLayer("photo"),
                  g.backbutton.setTargetTracker($(this).data().tracker),
                  g.backbutton.setPreviousBounds(g.map.getBounds()),
                  0 == $(".btn-back").length && g.backbutton.addTo(g.map),
                  g.map.setView(t, 16);
              }),
              $(document).on("#tracker-modal", "shown.bs.modal", function () {
                setTimeout(function () {
                  var e = $("#tracker-modal").find(".modal-cols"),
                    t = -1;
                  e.each(function () {
                    var e = $(this);
                    t = t > e.height() ? t : e.height();
                  }),
                    e.each(function () {
                      $(this).height(t);
                    });
                }, 500);
              }),
              (function () {
                $("input.tab").on("click", function (e) {
                  switch (e.currentTarget.id.split("-")[0]) {
                    case "map":
                      $("#nav-table-search").hide(),
                        $("#nav-place-search").show(),
                        g.map.invalidateSize(!1);
                      break;
                    case "table":
                      g.table && r(),
                        $("#nav-place-search").hide(),
                        $("#nav-table-search").show();
                      break;
                    default:
                      $("form.search-form").hide();
                  }
                });
                var e = new Date().getFullYear();
                $("span#year").text(e);
              })(),
              (function () {
                (g.searchengine = new A.Search("id")),
                  Object.keys(g.attributes).forEach(function (e) {
                    g.searchengine.addIndex(["properties", e]);
                  });
                var e = [];
                H.fossil_data.features.forEach(function (t) {
                  e.push(t);
                }),
                  g.searchengine.addDocuments(e);
              })(),
              $("form.free-search input").on("keyup", function (e) {
                if ((e.preventDefault(), !this.value)) return i();
                $(this).submit();
              }),
              $("form.free-search").on("submit", u),
              $("form#nav-table-search input").keyup(
                _.debounce(function () {
                  if (!this.value) return i();
                  $(this).submit();
                }, 200)
              ),
              $("form#nav-table-search").on("submit", S),
              (function () {
                (g.map = L.map("map", {
                  attributionControl: !1,
                  zoomControl: !1,
                  minZoom: g.minzoom,
                  maxZoom: g.maxzoom,
                })),
                  g.map.createPane("basemap-map"),
                  (g.map.getPane("basemap-map").style.zIndex = 200),
                  g.map.createPane("basemap-photo"),
                  (g.map.getPane("basemap-photo").style.zIndex = 225),
                  g.map.createPane("basemap-labels"),
                  (g.map.getPane("basemap-labels").style.zIndex = 575),
                  (g.map.getPane("basemap-labels").style.pointerEvents =
                    "none"),
                  g.map.createPane("country-hover"),
                  (g.map.getPane("country-hover").style.zIndex = 350),
                  g.map.createPane("country-select"),
                  (g.map.getPane("country-select").style.zIndex = 450);
                var e = [
                    {
                      type: "xyz",
                      label: "photo",
                      pane: "basemap-photo",
                      maxZoom: g.maxzoom,
                      minZoom: g.minzoom,
                      url: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                      attribution:
                        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community.",
                      tooltip: "Satellite + aerial photo basemap by ESRI",
                    },
                    {
                      type: "xyz",
                      label: "map",
                      pane: "basemap-map",
                      maxZoom: g.maxzoom,
                      minZoom: g.minzoom,
                      url:
                        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}" +
                        (L.Browser.retina ? "@2x.png" : ".png"),
                      attribution:
                        'Map tiles by <a target="_blank" href="http://www.mapbox.com">MapBox</a>. Tile data &copy; <a target="_blank" href="http://openstreetmap.org/copyright" target="_blank">OpenStreetMap contributers</a>',
                      tooltip: "Plain grey map with Open Street Map data",
                    },
                  ],
                  t = L.control
                    .attribution({
                      prefix:
                        'Interactive mapping by <a href="http://greeninfo.org" target="_blank">GreenInfo Network</a>. Data: <a href="https://globalenergymonitor.org/" target="_blank">Global Energy Monitor</a>',
                      position: "bottomleft",
                    })
                    .addTo(g.map);
                (g.basemap_control = new L.Control.BasemapBar({
                  layers: e,
                  position: "topright",
                  credits: t,
                })),
                  (g.zoombar = new L.Control.ZoomBar({
                    position: "topright",
                    homeBounds: g.homebounds,
                    homeZoom: g.startzoom,
                  })),
                  (g.countries = L.featureGroup([], {
                    pane: "country-hover",
                  }).addTo(g.map)),
                  L.geoJSON(H.country_data, {
                    style: g.country_no_style,
                    onEachFeature: b,
                  }).addTo(g.countries),
                  (g.selected_country = {}),
                  (g.selected_country.layer = L.geoJson([], {
                    style: g.country_selected_style,
                    pane: "country-select",
                  }).addTo(g.map));
                var n = $(".layer-control");
                d() && n.hide(),
                  g.map.on("load", function () {
                    r(), g.map.invalidateSize(), (g.map_loaded = !0);
                  }),
                  (g.backbutton = new L.backButton({
                    basemapControl: g.basemap_control,
                  })),
                  g.map.on("move zoom", function () {
                    a();
                  }),
                  g.map.on("zoomend", function () {
                    g.map.getZoom() > 10
                      ? g.countries.removeFrom(g.map)
                      : g.countries.addTo(g.map);
                  });
              })(),
              (function () {
                var e = L.tileLayer(
                  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}@2x.png",
                  { pane: "basemap-labels" }
                );
                g.map.addLayer(e),
                  (g.cluster_layer = L.featureGroup([], {}).addTo(g.map)),
                  (g.circle_layer = L.featureGroup([], {}));
                var t = [
                  {
                    label: "plant view",
                    key: "plantview",
                    layer: g.cluster_layer,
                    tooltip: "Select plant view",
                  },
                  {
                    label: "steelmaking capacity view",
                    key: "capacityview",
                    layer: g.circle_layer,
                    tooltip: "Select capacity view",
                  },
                ];
                (g.mapswitcher = new L.Control.MapSwitcher({
                  layers: t,
                  position: "topright",
                })
                  .addTo(g.map)
                  .selectMap("plantview")),
                  g.basemap_control.addTo(g.map).selectLayer("map"),
                  g.zoombar.addTo(g.map);
                var n = new MutationObserver(function (e) {
                  e.forEach(function (e) {
                    if (
                      "attributes" === e.type ||
                      "class" === e.attributeName
                    ) {
                      switch (e.target.dataset.layer) {
                        case "plantview":
                        case "capacityview":
                          a(),
                            "capacityview" ==
                            $(
                              "div.leaflet-control-mapswitcher-option-active"
                            ).data().layer
                              ? $("div#circle-legend").show()
                              : $("div#circle-legend").hide();
                          break;
                        case "map":
                        case "photo":
                          a();
                      }
                    }
                  });
                });
                document
                  .querySelectorAll(".leaflet-control-mapswitcher-option")
                  .forEach(function (e) {
                    return n.observe(e, { attributes: !0 });
                  }),
                  document
                    .querySelectorAll(".leaflet-control-basemapbar-option")
                    .forEach(function (e) {
                      return n.observe(e, { attributes: !0 });
                    }),
                  d() && (v.a.circlesize = v.a.circlesize_mobile);
              })(),
              (t = Object.keys(g.process_types)),
              (n = Object.keys(g.status_types)),
              t.sort(function (e, t) {
                return g.process_types[e].order - g.process_types[t].order;
              }),
              t.forEach(function (e) {
                var t = $(
                    "div.layer-control div#process-types div.leaflet-control-layers-overlays"
                  ),
                  n = $("<div>", { class: "legend-labels" }).appendTo(t),
                  r = $("<label>").appendTo(n),
                  o =
                    ($("<input>", {
                      type: "checkbox",
                      value: e,
                      checked: !0,
                    }).appendTo(r),
                    $("<span>").appendTo(r));
                $("<div>", {
                  class: "circle " + g.process_types[e].cssclass,
                }).appendTo(o),
                  $("<span>", { text: " " + g.process_types[e].text }).appendTo(
                    o
                  );
              }),
              n.forEach(function (e) {
                var t = $(
                    "div.layer-control div#status-types div.leaflet-control-layers-overlays"
                  ),
                  n = $("<div>", { class: "legend-labels" }).appendTo(t),
                  r = $("<label>").appendTo(n),
                  o =
                    ($("<input>", {
                      type: "checkbox",
                      value: e,
                      checked: !0,
                    }).appendTo(r),
                    $("<span>").appendTo(r));
                $("<span>", { text: " " + g.status_types[e].text }).appendTo(o);
              }),
              $("div.layer-control div.leaflet-control-layers-overlays").on(
                "change",
                "input",
                function (e) {
                  e.currentTarget.dataset.layer, $(this);
                  var t = $("div#status-types input:checkbox:checked")
                      .map(function () {
                        return this.value;
                      })
                      .get(),
                    n = $("div#process-types input:checkbox:checked")
                      .map(function () {
                        return this.value;
                      })
                      .get(),
                    r = H.fossil_data.features,
                    o = r.filter(function (e) {
                      return (
                        t.indexOf(e.properties.status) > -1 &&
                        n.indexOf(e.properties.process) > -1
                      );
                    });
                  $("form.search-form input").val(""),
                    $("a.clear-search").hide(),
                    (H.filtered = null);
                  var i = (function () {
                    var e = $("div#status-types input").length,
                      t = $("div#status-types input:checked").length,
                      n = $("div#process-types input").length,
                      r = $("div#process-types input:checked").length,
                      o = "";
                    return (
                      e == t && n == r
                        ? (o = g.default_title)
                        : e != t && n != r
                        ? (o = "Filtered by process and status")
                        : e == t && n != r
                        ? (o = "Filtered by process")
                        : e != t && n == r && (o = "Đã lọc theo trạng thái"),
                      o
                    );
                  })();
                  c(o, i), s(o), T(o, i), a();
                }
              ),
              $("div#map-type-controls input").on("change", function () {
                var e = $(this);
                g.map.removeLayer(g.circle_layer),
                  g.map.removeLayer(g.cluster_layer),
                  e.is(":checked") &&
                    ("circles" == e.val() &&
                      ($("div#circle-legend").show(),
                      g.map.addLayer(g.circle_layer)),
                    "clusters" == e.val() &&
                      ($("div#circle-legend").hide(),
                      g.map.addLayer(g.cluster_layer))),
                  a();
              }),
              (function () {
                (g.clusters = new PruneClusterForLeaflet(30)),
                  g.cluster_layer.addLayer(g.clusters),
                  (g.clusters.BuildLeafletClusterIcon = function (e) {
                    var t = new L.Icon.MarkerCluster();
                    return (
                      (t.stats = e.stats), (t.population = e.population), t
                    );
                  });
                var e = 2 * Math.PI;
                (L.Icon.MarkerCluster = L.Icon.extend({
                  options: {
                    iconSize: new L.Point(22, 22),
                    className: "prunecluster leaflet-markercluster-icon",
                  },
                  createIcon: function () {
                    var e = document.createElement("canvas");
                    this._setIconStyles(e, "icon");
                    var t = this.options.iconSize;
                    return (
                      (e.width = t.x),
                      (e.height = t.y),
                      this.draw(e.getContext("2d"), t.x, t.y),
                      e
                    );
                  },
                  createShadow: function () {
                    return null;
                  },
                  draw: function (t, n, r) {
                    for (
                      var o = 0, a = 0, i = g.markercluster_colors.length;
                      a < i;
                      ++a
                    ) {
                      var s = this.stats[a] / this.population;
                      if (s > 0) {
                        t.beginPath(),
                          t.moveTo(11, 11),
                          (t.fillStyle = g.markercluster_colors[a]);
                        var l = 1 == s ? 0 : 0.15,
                          c = o + l,
                          T = o + s * e;
                        T < c && (c = o),
                          t.arc(11, 11, 11, c, T),
                          (o += s * e),
                          t.lineTo(11, 11),
                          t.fill(),
                          t.closePath();
                      }
                    }
                    t.beginPath(),
                      (t.fillStyle = "white"),
                      t.arc(11, 11, 7, 0, 2 * Math.PI),
                      t.fill(),
                      t.closePath(),
                      (t.fillStyle = "#555"),
                      (t.textAlign = "center"),
                      (t.textBaseline = "middle"),
                      (t.font = "bold 9px sans-serif"),
                      t.fillText(this.population, 11, 11, 15);
                  },
                })),
                  (g.clusters.BuildLeafletCluster = function (e, t) {
                    var n = this,
                      r = new L.Marker(t, {
                        icon: this.BuildLeafletClusterIcon(e),
                      });
                    return (
                      r.on("click", function () {
                        var t = n.Cluster.FindMarkersInArea(e.bounds);
                        n.Cluster.ComputeBounds(t) &&
                          n._map.fire("overlappingmarkers", {
                            cluster: n,
                            markers: t,
                            center: r.getLatLng(),
                            marker: r,
                          });
                      }),
                      r
                    );
                  }),
                  (g.clusters.PrepareLeafletMarker = function (e, t) {
                    var n =
                      "<div style='text-align:center;'><strong>" +
                      t.title +
                      "</strong><br><div class='popup-click-msg'>Click the circle for details</div></div>";
                    e.bindPopup(n),
                      e.setIcon(t.icon),
                      (e.attributes = t.attributes),
                      (e.coordinates = t.coordinates),
                      e.on("click", function () {
                        !(function (e) {
                          var t = e.attributes,
                            n = $("#tracker-modal");
                          Object.keys(g.attributes).forEach(function (e) {
                            var n = t[e];
                            void 0 === n || "" == n
                              ? (n = "n/a")
                              : ((n = g.format[g.attributes[e].format](n)),
                                "status" == e && (n = g.status_types[n].text),
                                "process" == e &&
                                  (n = g.process_types[n].text)),
                              $("#tracker-modal .modal-content span")
                                .filter('[data-name="' + e + '"]')
                                .text(n);
                          });
                          var r = n.find("a#wiki-link");
                          t.url ? (r.attr("href", t.url), r.show()) : r.hide();
                          var o = $("#btn-zoom");
                          o.attr(
                            "data-zoom",
                            e.coordinates[0] + "," + e.coordinates[1]
                          ),
                            (o.data().tracker = e),
                            n.modal();
                        })(this);
                      }),
                      e.on("mouseover", function () {
                        this.openPopup();
                      }),
                      e.on("mouseout", function () {
                        g.map.closePopup();
                      });
                  }),
                  (g.clusters.FilterMarkers = function (e, t) {
                    for (var n = 0, r = e.length; n < r; ++n) e[n].filtered = t;
                  });
              })(),
              (function () {
                g.map.fitBounds(g.homebounds);
                var e = new URLSearchParams(window.location.search);
                e.toString()
                  ? (function (e) {
                      if (e.has("status")) {
                        $("div#status-types input").prop("checked", !1);
                        e.get("status")
                          .split(",")
                          .forEach(function (e) {
                            $("div#status-types input[value=" + e + "]").prop(
                              "checked",
                              !0
                            );
                          });
                      }
                      if (e.has("process")) {
                        $("div#process-types input").prop("checked", !1);
                        e.get("process")
                          .split(",")
                          .forEach(function (e) {
                            $("div#process-types input[value=" + e + "]").prop(
                              "checked",
                              !0
                            );
                          });
                      }
                      if (
                        ((e.has("process") || e.has("status")) &&
                          $("div#process-types input")
                            .first()
                            .trigger("change"),
                        e.has("basemap"))
                      ) {
                        var t = e.get("basemap");
                        g.basemap_control.selectLayer(t);
                      }
                      if (e.has("country")) {
                        var n = e.get("country");
                        n = n.toTitleCase();
                        var r = void 0;
                        H.country_data.features.forEach(function (e) {
                          e.properties.NAME != n || (r = e);
                        });
                        var o =
                            g.ch_provinces.indexOf(n) > -1
                              ? "province"
                              : "country",
                          a = [];
                        H.fossil_data.features.forEach(function (e) {
                          e.properties[o] == n && a.push(e);
                        }),
                          (g.selected_country.name = n),
                          g.selected_country.layer.addData(r),
                          c(a, n);
                      }
                      if (e.has("view")) {
                        var i = e.get("view"),
                          s = i.split(",");
                        g.map.setView([s[0], s[1]], s[2]);
                      }
                      if (e.has("maptype")) {
                        var l = e.get("maptype");
                        $(
                          'div.leaflet-control-mapswitcher-option[data-layer="' +
                            l +
                            '"]'
                        ).click();
                      }
                      if (e.has("search")) {
                        var T = e.get("search");
                        $("input#mapsearch").val(T).submit();
                      }
                    })(e)
                  : i();
              })(),
              tippy("[data-tippy-content]"),
              console.log(H),
              console.log(g),
              setTimeout(function () {
                r(), $("div#loading").hide(), (g.first_load = !1);
              }, 300);
          }
        ),
          $(window).on("resize", r);
      }),
      String.prototype.trim ||
        (String.prototype.trim = function () {
          return this.replace(/^\s+|\s+$/g, "");
        }),
      (String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
      }),
      ($.fn.hasHorizontalScrollBar = function () {
        return this.get(0).scrollWidth > this.get(0).clientWidth;
      }),
      Object.keys ||
        (Object.keys =
          ((p = Object.prototype.hasOwnProperty),
          (f = !{ toString: null }.propertyIsEnumerable("toString")),
          (h = (P = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ]).length),
          function (e) {
            if (
              "object" != (void 0 === e ? "undefined" : B(e)) &&
              ("function" != typeof e || null === e)
            )
              throw new TypeError("Object.keys called on non-object");
            var t,
              n,
              r = [];
            for (t in e) p.call(e, t) && r.push(t);
            if (f) for (n = 0; h > n; n++) p.call(e, P[n]) && r.push(P[n]);
            return r;
          })),
      (String.prototype.toTitleCase = function () {
        var e, t, n, r, o;
        for (
          n = this.replace(/([^\W_]+[^\s-]*) */g, function (e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
          }),
            e = 0,
            t = (r = [
              "A",
              "An",
              "The",
              "And",
              "But",
              "Or",
              "For",
              "Nor",
              "As",
              "At",
              "By",
              "For",
              "From",
              "In",
              "Into",
              "Near",
              "Of",
              "On",
              "Onto",
              "To",
              "With",
            ]).length;
          t > e;
          e++
        )
          n = n.replace(new RegExp("\\s" + r[e] + "\\s", "g"), function (e) {
            return e.toLowerCase();
          });
        for (e = 0, t = (o = ["Id", "Tv"]).length; t > e; e++)
          n = n.replace(
            new RegExp("\\b" + o[e] + "\\b", "g"),
            o[e].toUpperCase()
          );
        return n;
      });
    var C = new m.a(window.navigator.userAgent);
  },
  function (e, t, n) {
    (void 0 !== e && e.exports
      ? function (t) {
          e.exports = t();
        }
      : n(9))(function () {
      "use strict";
      function e(e, t) {
        return null != e && null != t && e.toLowerCase() === t.toLowerCase();
      }
      function t(e, t) {
        var n,
          r,
          o = e.length;
        if (!o || !t) return !1;
        for (n = t.toLowerCase(), r = 0; r < o; ++r)
          if (n === e[r].toLowerCase()) return !0;
        return !1;
      }
      function n(e) {
        for (var t in e) i.call(e, t) && (e[t] = new RegExp(e[t], "i"));
      }
      function r(e, t) {
        (this.ua = (function (e) {
          return (e || "").substr(0, 500);
        })(e)),
          (this._cache = {}),
          (this.maxPhoneWidth = t || 600);
      }
      var o,
        a = {
          mobileDetectRules: {
            phones: {
              iPhone: "\\biPhone\\b|\\biPod\\b",
              BlackBerry:
                "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
              HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
              Nexus:
                "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
              Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
              Motorola:
                "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
              Samsung:
                "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
              LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
              Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
              Asus: "Asus.*Galaxy|PadFone.*Mobile",
              NokiaLumia: "Lumia [0-9]{3,4}",
              Micromax:
                "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
              Palm: "PalmSource|Palm",
              Vertu:
                "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
              Pantech:
                "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
              Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
              Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
              iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
              SimValley:
                "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
              Wolfgang:
                "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
              Alcatel: "Alcatel",
              Nintendo: "Nintendo (3DS|Switch)",
              Amoi: "Amoi",
              INQ: "INQ",
              OnePlus: "ONEPLUS",
              GenericPhone:
                "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
            },
            tablets: {
              iPad: "iPad|iPad.*Mobile",
              NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
              GoogleTablet: "Android.*Pixel C",
              SamsungTablet:
                "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
              Kindle:
                "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
              SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
              HPTablet:
                "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
              AsusTablet:
                "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
              BlackBerryTablet: "PlayBook|RIM Tablet",
              HTCtablet:
                "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
              MotorolaTablet:
                "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
              NookTablet:
                "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
              AcerTablet:
                "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
              ToshibaTablet:
                "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
              LGTablet:
                "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
              FujitsuTablet:
                "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
              PrestigioTablet:
                "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
              LenovoTablet:
                "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
              DellTablet:
                "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
              YarvikTablet:
                "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
              MedionTablet:
                "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
              ArnovaTablet:
                "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
              IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
              IRUTablet: "M702pro",
              MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
              EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
              AllViewTablet:
                "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
              ArchosTablet:
                "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
              AinolTablet:
                "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
              NokiaLumiaTablet: "Lumia 2520",
              SonyTablet:
                "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
              PhilipsTablet:
                "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
              CubeTablet:
                "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
              CobyTablet:
                "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
              MIDTablet:
                "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
              MSITablet:
                "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
              SMiTTablet:
                "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
              RockChipTablet:
                "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
              FlyTablet: "IQ310|Fly Vision",
              bqTablet:
                "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
              HuaweiTablet:
                "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
              NecTablet: "\\bN-06D|\\bN-08D",
              PantechTablet: "Pantech.*P4100",
              BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
              VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
              ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
              PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
              NabiTablet: "Android.*\\bNabi",
              KoboTablet:
                "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
              DanewTablet:
                "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
              TexetTablet:
                "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
              PlaystationTablet: "Playstation.*(Portable|Vita)",
              TrekstorTablet:
                "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
              PyleAudioTablet:
                "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
              AdvanTablet:
                "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
              DanyTechTablet:
                "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
              GalapadTablet: "Android.*\\bG1\\b(?!\\))",
              MicromaxTablet:
                "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
              KarbonnTablet:
                "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
              AllFineTablet:
                "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
              PROSCANTablet:
                "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
              YONESTablet:
                "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
              ChangJiaTablet:
                "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
              GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
              PointOfViewTablet:
                "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
              OvermaxTablet:
                "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
              HCLTablet:
                "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
              DPSTablet: "DPS Dream 9|DPS Dual 7",
              VistureTablet:
                "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
              CrestaTablet:
                "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
              MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
              ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
              GoCleverTablet:
                "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
              ModecomTablet:
                "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
              VoninoTablet:
                "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
              ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
              StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
              VodafoneTablet:
                "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
              EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
              RossMoorTablet:
                "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
              iMobileTablet: "i-mobile i-note",
              TolinoTablet: "tolino tab [0-9.]+|tolino shine",
              AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
              AMPETablet: "Android.* A78 ",
              SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
              TecnoTablet: "TECNO P9|TECNO DP8D",
              JXDTablet:
                "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
              iJoyTablet:
                "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
              FX2Tablet: "FX2 PAD7|FX2 PAD10",
              XoroTablet:
                "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
              ViewsonicTablet:
                "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
              VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
              OdysTablet:
                "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
              CaptivaTablet: "CAPTIVA PAD",
              IconbitTablet:
                "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
              TeclastTablet:
                "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
              OndaTablet:
                "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
              JaytechTablet: "TPC-PA762",
              BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
              DigmaTablet:
                "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
              EvolioTablet:
                "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
              LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
              AocTablet:
                "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
              MpmanTablet:
                "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
              CelkonTablet:
                "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
              WolderTablet:
                "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
              MediacomTablet:
                "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
              MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
              NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
              NexoTablet:
                "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
              LeaderTablet:
                "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
              UbislateTablet: "UbiSlate[\\s]?7C",
              PocketBookTablet: "Pocketbook",
              KocasoTablet: "\\b(TB-1207)\\b",
              HisenseTablet: "\\b(F5281|E2371)\\b",
              Hudl: "Hudl HT7S3|Hudl 2",
              TelstraTablet: "T-Hub2",
              GenericTablet:
                "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
            },
            oss: {
              AndroidOS: "Android",
              BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
              PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
              SymbianOS:
                "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
              WindowsMobileOS:
                "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
              WindowsPhoneOS:
                "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
              iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
              iPadOS: "CPU OS 13",
              MeeGoOS: "MeeGo",
              MaemoOS: "Maemo",
              JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
              webOS: "webOS|hpwOS",
              badaOS: "\\bBada\\b",
              BREWOS: "BREW",
            },
            uas: {
              Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
              Dolfin: "\\bDolfin\\b",
              Opera:
                "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
              Skyfire: "Skyfire",
              Edge: "Mobile Safari/[.0-9]* Edge",
              IE: "IEMobile|MSIEMobile",
              Firefox:
                "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
              Bolt: "bolt",
              TeaShark: "teashark",
              Blazer: "Blazer",
              Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
              WeChat: "\\bMicroMessenger\\b",
              UCBrowser: "UC.*Browser|UCWEB",
              baiduboxapp: "baiduboxapp",
              baidubrowser: "baidubrowser",
              DiigoBrowser: "DiigoBrowser",
              Mercury: "\\bMercury\\b",
              ObigoBrowser: "Obigo",
              NetFront: "NF-Browser",
              GenericBrowser:
                "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
              PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
            },
            props: {
              Mobile: "Mobile/[VER]",
              Build: "Build/[VER]",
              Version: "Version/[VER]",
              VendorID: "VendorID/[VER]",
              iPad: "iPad.*CPU[a-z ]+[VER]",
              iPhone: "iPhone.*CPU[a-z ]+[VER]",
              iPod: "iPod.*CPU[a-z ]+[VER]",
              Kindle: "Kindle/[VER]",
              Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
              Coast: ["Coast/[VER]"],
              Dolfin: "Dolfin/[VER]",
              Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
              Fennec: "Fennec/[VER]",
              Edge: "Edge/[VER]",
              IE: [
                "IEMobile/[VER];",
                "IEMobile [VER]",
                "MSIE [VER];",
                "Trident/[0-9.]+;.*rv:[VER]",
              ],
              NetFront: "NetFront/[VER]",
              NokiaBrowser: "NokiaBrowser/[VER]",
              Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
              "Opera Mini": "Opera Mini/[VER]",
              "Opera Mobi": "Version/[VER]",
              UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
              MQQBrowser: "MQQBrowser/[VER]",
              MicroMessenger: "MicroMessenger/[VER]",
              baiduboxapp: "baiduboxapp/[VER]",
              baidubrowser: "baidubrowser/[VER]",
              SamsungBrowser: "SamsungBrowser/[VER]",
              Iron: "Iron/[VER]",
              Safari: ["Version/[VER]", "Safari/[VER]"],
              Skyfire: "Skyfire/[VER]",
              Tizen: "Tizen/[VER]",
              Webkit: "webkit[ /][VER]",
              PaleMoon: "PaleMoon/[VER]",
              Gecko: "Gecko/[VER]",
              Trident: "Trident/[VER]",
              Presto: "Presto/[VER]",
              Goanna: "Goanna/[VER]",
              iOS: " \\bi?OS\\b [VER][ ;]{1}",
              Android: "Android [VER]",
              BlackBerry: [
                "BlackBerry[\\w]+/[VER]",
                "BlackBerry.*Version/[VER]",
                "Version/[VER]",
              ],
              BREW: "BREW [VER]",
              Java: "Java/[VER]",
              "Windows Phone OS": [
                "Windows Phone OS [VER]",
                "Windows Phone [VER]",
              ],
              "Windows Phone": "Windows Phone [VER]",
              "Windows CE": "Windows CE/[VER]",
              "Windows NT": "Windows NT [VER]",
              Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
              webOS: ["webOS/[VER]", "hpwOS/[VER];"],
            },
            utils: {
              Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
              MobileBot:
                "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
              DesktopMode: "WPDesktop",
              TV: "SonyDTV|HbbTV",
              WebKit: "(webkit)[ /]([\\w.]+)",
              Console:
                "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
              Watch: "SM-V700",
            },
          },
          detectMobileBrowsers: {
            fullPattern:
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern:
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i,
          },
        },
        i = Object.prototype.hasOwnProperty;
      return (
        (a.FALLBACK_PHONE = "UnknownPhone"),
        (a.FALLBACK_TABLET = "UnknownTablet"),
        (a.FALLBACK_MOBILE = "UnknownMobile"),
        (o =
          "isArray" in Array
            ? Array.isArray
            : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              }),
        (function () {
          var e,
            t,
            r,
            s,
            l,
            c,
            T = a.mobileDetectRules;
          for (e in T.props)
            if (i.call(T.props, e)) {
              for (
                t = T.props[e], o(t) || (t = [t]), l = t.length, s = 0;
                s < l;
                ++s
              )
                (c = (r = t[s]).indexOf("[VER]")) >= 0 &&
                  (r =
                    r.substring(0, c) + "([\\w._\\+]+)" + r.substring(c + 5)),
                  (t[s] = new RegExp(r, "i"));
              T.props[e] = t;
            }
          n(T.oss),
            n(T.phones),
            n(T.tablets),
            n(T.uas),
            n(T.utils),
            (T.oss0 = {
              WindowsPhoneOS: T.oss.WindowsPhoneOS,
              WindowsMobileOS: T.oss.WindowsMobileOS,
            });
        })(),
        (a.findMatch = function (e, t) {
          for (var n in e) if (i.call(e, n) && e[n].test(t)) return n;
          return null;
        }),
        (a.findMatches = function (e, t) {
          var n = [];
          for (var r in e) i.call(e, r) && e[r].test(t) && n.push(r);
          return n;
        }),
        (a.getVersionStr = function (e, t) {
          var n,
            r,
            o,
            s,
            l = a.mobileDetectRules.props;
          if (i.call(l, e))
            for (o = (n = l[e]).length, r = 0; r < o; ++r)
              if (null !== (s = n[r].exec(t))) return s[1];
          return null;
        }),
        (a.getVersion = function (e, t) {
          var n = a.getVersionStr(e, t);
          return n ? a.prepareVersionNo(n) : NaN;
        }),
        (a.prepareVersionNo = function (e) {
          var t;
          return (
            1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]),
            t.length > 1 && ((e = t[0] + "."), t.shift(), (e += t.join(""))),
            Number(e)
          );
        }),
        (a.isMobileFallback = function (e) {
          return (
            a.detectMobileBrowsers.fullPattern.test(e) ||
            a.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
          );
        }),
        (a.isTabletFallback = function (e) {
          return a.detectMobileBrowsers.tabletPattern.test(e);
        }),
        (a.prepareDetectionCache = function (e, t, n) {
          if (void 0 === e.mobile) {
            var o, i, s;
            if ((i = a.findMatch(a.mobileDetectRules.tablets, t)))
              return (e.mobile = e.tablet = i), void (e.phone = null);
            if ((o = a.findMatch(a.mobileDetectRules.phones, t)))
              return (e.mobile = e.phone = o), void (e.tablet = null);
            a.isMobileFallback(t)
              ? void 0 === (s = r.isPhoneSized(n))
                ? ((e.mobile = a.FALLBACK_MOBILE), (e.tablet = e.phone = null))
                : s
                ? ((e.mobile = e.phone = a.FALLBACK_PHONE), (e.tablet = null))
                : ((e.mobile = e.tablet = a.FALLBACK_TABLET), (e.phone = null))
              : a.isTabletFallback(t)
              ? ((e.mobile = e.tablet = a.FALLBACK_TABLET), (e.phone = null))
              : (e.mobile = e.tablet = e.phone = null);
          }
        }),
        (a.mobileGrade = function (e) {
          var t = null !== e.mobile();
          return (e.os("iOS") && e.version("iPad") >= 4.3) ||
            (e.os("iOS") && e.version("iPhone") >= 3.1) ||
            (e.os("iOS") && e.version("iPod") >= 3.1) ||
            (e.version("Android") > 2.1 && e.is("Webkit")) ||
            e.version("Windows Phone OS") >= 7 ||
            (e.is("BlackBerry") && e.version("BlackBerry") >= 6) ||
            e.match("Playbook.*Tablet") ||
            (e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi")) ||
            e.match("hp.*TouchPad") ||
            (e.is("Firefox") && e.version("Firefox") >= 12) ||
            (e.is("Chrome") &&
              e.is("AndroidOS") &&
              e.version("Android") >= 4) ||
            (e.is("Skyfire") &&
              e.version("Skyfire") >= 4.1 &&
              e.is("AndroidOS") &&
              e.version("Android") >= 2.3) ||
            (e.is("Opera") &&
              e.version("Opera Mobi") > 11 &&
              e.is("AndroidOS")) ||
            e.is("MeeGoOS") ||
            e.is("Tizen") ||
            (e.is("Dolfin") && e.version("Bada") >= 2) ||
            ((e.is("UC Browser") || e.is("Dolfin")) &&
              e.version("Android") >= 2.3) ||
            e.match("Kindle Fire") ||
            (e.is("Kindle") && e.version("Kindle") >= 3) ||
            (e.is("AndroidOS") && e.is("NookTablet")) ||
            (e.version("Chrome") >= 11 && !t) ||
            (e.version("Safari") >= 5 && !t) ||
            (e.version("Firefox") >= 4 && !t) ||
            (e.version("MSIE") >= 7 && !t) ||
            (e.version("Opera") >= 10 && !t)
            ? "A"
            : (e.os("iOS") && e.version("iPad") < 4.3) ||
              (e.os("iOS") && e.version("iPhone") < 3.1) ||
              (e.os("iOS") && e.version("iPod") < 3.1) ||
              (e.is("Blackberry") &&
                e.version("BlackBerry") >= 5 &&
                e.version("BlackBerry") < 6) ||
              (e.version("Opera Mini") >= 5 &&
                e.version("Opera Mini") <= 6.5 &&
                (e.version("Android") >= 2.3 || e.is("iOS"))) ||
              e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
              (e.version("Opera Mobi") >= 11 && e.is("SymbianOS"))
            ? "B"
            : (e.version("BlackBerry") < 5 ||
                e.match("MSIEMobile|Windows CE.*Mobile") ||
                e.version("Windows Mobile"),
              "C");
        }),
        (a.detectOS = function (e) {
          return (
            a.findMatch(a.mobileDetectRules.oss0, e) ||
            a.findMatch(a.mobileDetectRules.oss, e)
          );
        }),
        (a.getDeviceSmallerSide = function () {
          return window.screen.width < window.screen.height
            ? window.screen.width
            : window.screen.height;
        }),
        (r.prototype = {
          constructor: r,
          mobile: function () {
            return (
              a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
              this._cache.mobile
            );
          },
          phone: function () {
            return (
              a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
              this._cache.phone
            );
          },
          tablet: function () {
            return (
              a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
              this._cache.tablet
            );
          },
          userAgent: function () {
            return (
              void 0 === this._cache.userAgent &&
                (this._cache.userAgent = a.findMatch(
                  a.mobileDetectRules.uas,
                  this.ua
                )),
              this._cache.userAgent
            );
          },
          userAgents: function () {
            return (
              void 0 === this._cache.userAgents &&
                (this._cache.userAgents = a.findMatches(
                  a.mobileDetectRules.uas,
                  this.ua
                )),
              this._cache.userAgents
            );
          },
          os: function () {
            return (
              void 0 === this._cache.os &&
                (this._cache.os = a.detectOS(this.ua)),
              this._cache.os
            );
          },
          version: function (e) {
            return a.getVersion(e, this.ua);
          },
          versionStr: function (e) {
            return a.getVersionStr(e, this.ua);
          },
          is: function (n) {
            return (
              t(this.userAgents(), n) ||
              e(n, this.os()) ||
              e(n, this.phone()) ||
              e(n, this.tablet()) ||
              t(a.findMatches(a.mobileDetectRules.utils, this.ua), n)
            );
          },
          match: function (e) {
            return (
              e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
            );
          },
          isPhoneSized: function (e) {
            return r.isPhoneSized(e || this.maxPhoneWidth);
          },
          mobileGrade: function () {
            return (
              void 0 === this._cache.grade &&
                (this._cache.grade = a.mobileGrade(this)),
              this._cache.grade
            );
          },
        }),
        "undefined" != typeof window && window.screen
          ? (r.isPhoneSized = function (e) {
              return e < 0 ? void 0 : a.getDeviceSmallerSide() <= e;
            })
          : (r.isPhoneSized = function () {}),
        (r._impl = a),
        (r.version = "1.4.4 2019-09-21"),
        r
      );
    });
  },
  function (e, t) {
    e.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0);
    Object.defineProperty(t, "AllSubstringsIndexStrategy", {
      enumerable: !0,
      get: function () {
        return r.AllSubstringsIndexStrategy;
      },
    }),
      Object.defineProperty(t, "ExactWordIndexStrategy", {
        enumerable: !0,
        get: function () {
          return r.ExactWordIndexStrategy;
        },
      }),
      Object.defineProperty(t, "PrefixIndexStrategy", {
        enumerable: !0,
        get: function () {
          return r.PrefixIndexStrategy;
        },
      });
    var o = n(1);
    Object.defineProperty(t, "CaseSensitiveSanitizer", {
      enumerable: !0,
      get: function () {
        return o.CaseSensitiveSanitizer;
      },
    }),
      Object.defineProperty(t, "LowerCaseSanitizer", {
        enumerable: !0,
        get: function () {
          return o.LowerCaseSanitizer;
        },
      });
    var a = n(2);
    Object.defineProperty(t, "TfIdfSearchIndex", {
      enumerable: !0,
      get: function () {
        return a.TfIdfSearchIndex;
      },
    }),
      Object.defineProperty(t, "UnorderedSearchIndex", {
        enumerable: !0,
        get: function () {
          return a.UnorderedSearchIndex;
        },
      });
    var i = n(4);
    Object.defineProperty(t, "SimpleTokenizer", {
      enumerable: !0,
      get: function () {
        return i.SimpleTokenizer;
      },
    }),
      Object.defineProperty(t, "StemmingTokenizer", {
        enumerable: !0,
        get: function () {
          return i.StemmingTokenizer;
        },
      }),
      Object.defineProperty(t, "StopWordsTokenizer", {
        enumerable: !0,
        get: function () {
          return i.StopWordsTokenizer;
        },
      });
    var s = n(21);
    Object.defineProperty(t, "Search", {
      enumerable: !0,
      get: function () {
        return s.Search;
      },
    });
    var l = n(5);
    Object.defineProperty(t, "StopWordsMap", {
      enumerable: !0,
      get: function () {
        return l.StopWordsMap;
      },
    });
    var c = n(22);
    Object.defineProperty(t, "TokenHighlighter", {
      enumerable: !0,
      get: function () {
        return c.TokenHighlighter;
      },
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    t.AllSubstringsIndexStrategy = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      return (
        r(e, [
          {
            key: "expandToken",
            value: function (e) {
              for (var t, n = [], r = 0, o = e.length; r < o; ++r) {
                t = "";
                for (var a = r; a < o; ++a) (t += e.charAt(a)), n.push(t);
              }
              return n;
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    t.ExactWordIndexStrategy = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      return (
        r(e, [
          {
            key: "expandToken",
            value: function (e) {
              return e ? [e] : [];
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    t.PrefixIndexStrategy = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      return (
        r(e, [
          {
            key: "expandToken",
            value: function (e) {
              for (var t = [], n = "", r = 0, o = e.length; r < o; ++r)
                (n += e.charAt(r)), t.push(n);
              return t;
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    t.CaseSensitiveSanitizer = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      return (
        r(e, [
          {
            key: "sanitize",
            value: function (e) {
              return e ? e.trim() : "";
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    t.LowerCaseSanitizer = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      return (
        r(e, [
          {
            key: "sanitize",
            value: function (e) {
              return e ? e.toLocaleLowerCase().trim() : "";
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TfIdfSearchIndex = void 0);
    var r,
      o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      i = n(3),
      s = (r = i) && r.__esModule ? r : { default: r };
    t.TfIdfSearchIndex = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._uidFieldName = t),
          (this._tokenToIdfCache = {}),
          (this._tokenMap = {});
      }
      return (
        a(e, [
          {
            key: "indexDocument",
            value: function (e, t, n) {
              this._tokenToIdfCache = {};
              var r,
                a = this._tokenMap;
              "object" !== o(a[e])
                ? (a[e] = r =
                    {
                      $numDocumentOccurrences: 0,
                      $totalNumOccurrences: 1,
                      $uidMap: {},
                    })
                : (r = a[e]).$totalNumOccurrences++;
              var i = r.$uidMap;
              "object" !== o(i[t])
                ? (r.$numDocumentOccurrences++,
                  (i[t] = { $document: n, $numTokenOccurrences: 1 }))
                : i[t].$numTokenOccurrences++;
            },
          },
          {
            key: "search",
            value: function (e, t) {
              for (var n = {}, r = 0, a = e.length; r < a; r++) {
                var i = e[r],
                  s = this._tokenMap[i];
                if (!s) return [];
                if (0 === r)
                  for (
                    var l = 0, c = (T = Object.keys(s.$uidMap)).length;
                    l < c;
                    l++
                  )
                    n[(u = T[l])] = s.$uidMap[u].$document;
                else {
                  var T;
                  for (l = 0, c = (T = Object.keys(n)).length; l < c; l++) {
                    var u = T[l];
                    "object" !== o(s.$uidMap[u]) && delete n[u];
                  }
                }
              }
              var S = [];
              for (var u in n) S.push(n[u]);
              var b = this._createCalculateTfIdf();
              return S.sort(function (n, r) {
                return b(e, r, t) - b(e, n, t);
              });
            },
          },
          {
            key: "_createCalculateIdf",
            value: function () {
              var e = this._tokenMap,
                t = this._tokenToIdfCache;
              return function (n, r) {
                if (!t[n]) {
                  var o = void 0 !== e[n] ? e[n].$numDocumentOccurrences : 0;
                  t[n] = 1 + Math.log(r.length / (1 + o));
                }
                return t[n];
              };
            },
          },
          {
            key: "_createCalculateTfIdf",
            value: function () {
              var e = this._tokenMap,
                t = this._uidFieldName,
                n = this._createCalculateIdf();
              return function (r, o, a) {
                for (var i = 0, l = 0, c = r.length; l < c; ++l) {
                  var T,
                    u = r[l],
                    S = n(u, a);
                  S === 1 / 0 && (S = 0),
                    (T =
                      t instanceof Array
                        ? o && (0, s.default)(o, t)
                        : o && o[t]),
                    (i +=
                      (void 0 !== e[u] && void 0 !== e[u].$uidMap[T]
                        ? e[u].$uidMap[T].$numTokenOccurrences
                        : 0) * S);
                }
                return i;
              };
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      o = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
    t.UnorderedSearchIndex = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._tokenToUidToDocumentMap = {});
      }
      return (
        o(e, [
          {
            key: "indexDocument",
            value: function (e, t, n) {
              "object" !== r(this._tokenToUidToDocumentMap[e]) &&
                (this._tokenToUidToDocumentMap[e] = {}),
                (this._tokenToUidToDocumentMap[e][t] = n);
            },
          },
          {
            key: "search",
            value: function (e, t) {
              for (
                var n = {},
                  o = this._tokenToUidToDocumentMap,
                  a = 0,
                  i = e.length;
                a < i;
                a++
              ) {
                var s = o[e[a]];
                if (!s) return [];
                if (0 === a)
                  for (var l = 0, c = (u = Object.keys(s)).length; l < c; l++)
                    n[(T = u[l])] = s[T];
                else
                  for (l = 0, c = (u = Object.keys(n)).length; l < c; l++) {
                    var T = u[l];
                    "object" !== r(s[T]) && delete n[T];
                  }
              }
              var u,
                S = [];
              for (a = 0, c = (u = Object.keys(n)).length; a < c; a++)
                (T = u[a]), S.push(n[T]);
              return S;
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = /[^a-zа-яё0-9\-']+/i;
    t.SimpleTokenizer = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      return (
        r(e, [
          {
            key: "tokenize",
            value: function (e) {
              return e.split(o).filter(function (e) {
                return e;
              });
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    t.StemmingTokenizer = (function () {
      function e(t, n) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._stemmingFunction = t),
          (this._tokenizer = n);
      }
      return (
        r(e, [
          {
            key: "tokenize",
            value: function (e) {
              return this._tokenizer.tokenize(e).map(this._stemmingFunction);
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.StopWordsTokenizer = void 0);
    var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = n(5);
    t.StopWordsTokenizer = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._tokenizer = t);
      }
      return (
        r(e, [
          {
            key: "tokenize",
            value: function (e) {
              return this._tokenizer.tokenize(e).filter(function (e) {
                return !o.StopWordsMap[e];
              });
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Search = void 0);
    var r,
      o = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      a = n(3),
      i = (r = a) && r.__esModule ? r : { default: r },
      s = n(0),
      l = n(1),
      c = n(2),
      T = n(4);
    t.Search = (function () {
      function e(t) {
        if (
          ((function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          !t)
        )
          throw Error(
            "js-search requires a uid field name constructor parameter"
          );
        (this._uidFieldName = t),
          (this._indexStrategy = new s.PrefixIndexStrategy()),
          (this._searchIndex = new c.TfIdfSearchIndex(t)),
          (this._sanitizer = new l.LowerCaseSanitizer()),
          (this._tokenizer = new T.SimpleTokenizer()),
          (this._documents = []),
          (this._searchableFields = []);
      }
      return (
        o(e, [
          {
            key: "addDocument",
            value: function (e) {
              this.addDocuments([e]);
            },
          },
          {
            key: "addDocuments",
            value: function (e) {
              (this._documents = this._documents.concat(e)),
                this.indexDocuments_(e, this._searchableFields);
            },
          },
          {
            key: "addIndex",
            value: function (e) {
              this._searchableFields.push(e),
                this.indexDocuments_(this._documents, [e]);
            },
          },
          {
            key: "search",
            value: function (e) {
              var t = this._tokenizer.tokenize(this._sanitizer.sanitize(e));
              return this._searchIndex.search(t, this._documents);
            },
          },
          {
            key: "indexDocuments_",
            value: function (e, t) {
              this._initialized = !0;
              for (
                var n = this._indexStrategy,
                  r = this._sanitizer,
                  o = this._searchIndex,
                  a = this._tokenizer,
                  s = this._uidFieldName,
                  l = 0,
                  c = e.length;
                l < c;
                l++
              ) {
                var T,
                  u = e[l];
                T = s instanceof Array ? (0, i.default)(u, s) : u[s];
                for (var S = 0, b = t.length; S < b; S++) {
                  var d,
                    p = t[S];
                  if (
                    (null !=
                      (d = p instanceof Array ? (0, i.default)(u, p) : u[p]) &&
                      "string" != typeof d &&
                      d.toString &&
                      (d = d.toString()),
                    "string" == typeof d)
                  )
                    for (
                      var f = a.tokenize(r.sanitize(d)), P = 0, h = f.length;
                      P < h;
                      P++
                    )
                      for (
                        var M = f[P], m = n.expandToken(M), A = 0, G = m.length;
                        A < G;
                        A++
                      ) {
                        var y = m[A];
                        o.indexDocument(y, T, u);
                      }
                }
              }
            },
          },
          {
            key: "indexStrategy",
            set: function (e) {
              if (this._initialized)
                throw Error(
                  "IIndexStrategy cannot be set after initialization"
                );
              this._indexStrategy = e;
            },
            get: function () {
              return this._indexStrategy;
            },
          },
          {
            key: "sanitizer",
            set: function (e) {
              if (this._initialized)
                throw Error("ISanitizer cannot be set after initialization");
              this._sanitizer = e;
            },
            get: function () {
              return this._sanitizer;
            },
          },
          {
            key: "searchIndex",
            set: function (e) {
              if (this._initialized)
                throw Error("ISearchIndex cannot be set after initialization");
              this._searchIndex = e;
            },
            get: function () {
              return this._searchIndex;
            },
          },
          {
            key: "tokenizer",
            set: function (e) {
              if (this._initialized)
                throw Error("ITokenizer cannot be set after initialization");
              this._tokenizer = e;
            },
            get: function () {
              return this._tokenizer;
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TokenHighlighter = void 0);
    var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = n(0),
      a = n(1);
    t.TokenHighlighter = (function () {
      function e(t, n, r) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._indexStrategy = t || new o.PrefixIndexStrategy()),
          (this._sanitizer = n || new a.LowerCaseSanitizer()),
          (this._wrapperTagName = r || "mark");
      }
      return (
        r(e, [
          {
            key: "highlight",
            value: function (e, t) {
              for (
                var n = this._wrapText("").length,
                  r = Object.create(null),
                  o = 0,
                  a = t.length;
                o < a;
                o++
              )
                for (
                  var i = this._sanitizer.sanitize(t[o]),
                    s = this._indexStrategy.expandToken(i),
                    l = 0,
                    c = s.length;
                  l < c;
                  l++
                ) {
                  var T = s[l];
                  r[T] ? r[T].push(i) : (r[T] = [i]);
                }
              for (
                var u = "", S = "", b = 0, d = ((o = 0), e.length);
                o < d;
                o++
              ) {
                var p = e.charAt(o);
                " " === p
                  ? ((u = ""), (S = ""), (b = o + 1))
                  : ((u += p), (S += this._sanitizer.sanitize(p))),
                  r[S] &&
                    r[S].indexOf(S) >= 0 &&
                    ((u = this._wrapText(u)),
                    (e = e.substring(0, b) + u + e.substring(o + 1)),
                    (o += n),
                    (d += n));
              }
              return e;
            },
          },
          {
            key: "_wrapText",
            value: function (e) {
              var t = this._wrapperTagName;
              return "<" + t + ">" + e + "</" + t + ">";
            },
          },
        ]),
        e
      );
    })();
  },
  function (e, t) {},
  function (e, t) {
    e.exports = {
      status1: "#c00",
      status2: "orange",
      status3: "#845440",
      status4: "#7dd47d",
      status5: "#74add1",
      status6: "#4575b4",
      status7: "#666",
      status8: "#ccc",
      status9: "#c1a99f",
      status10: "#800060",
      status11: "#999",
      lineopacity: ".8",
      linewidth: "3",
      linewidth_mobile: "5",
      circlesize: "12",
      circlesize_mobile: "14",
      circleopacity: ".85",
      highlight_color: "#f2e360",
    };
  },
]);
//# sourceMappingURL=app.8bbb5887d465b181bfb4.js.map
