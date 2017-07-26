webpackJsonp([1],{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(63)(
  /* script */
  __webpack_require__(526),
  /* template */
  __webpack_require__(527),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\vuetified\\resources\\assets\\js\\pages\\Register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83761cdc", Component.options)
  } else {
    hotAPI.reload("data-v-83761cdc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(63)(
  /* script */
  __webpack_require__(494),
  /* template */
  __webpack_require__(517),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\vuetified\\resources\\assets\\js\\layouts\\Main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b093fdfa", Component.options)
  } else {
    hotAPI.reload("data-v-b093fdfa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_FabButton_vue__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_FabButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_FabButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            title: 'Vlogger'
        };
    },
    mounted: function mounted() {
        console.log('Layout Loaded');
    },

    components: {
        AppFooter: __WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue___default.a,
        AppNavBar: __WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue___default.a,
        LeftSideBar: __WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue___default.a,
        FabButton: __WEBPACK_IMPORTED_MODULE_3__components_FabButton_vue___default.a
    }
});

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(496)
}
var Component = __webpack_require__(63)(
  /* script */
  __webpack_require__(498),
  /* template */
  __webpack_require__(499),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\vuetified\\resources\\assets\\js\\partials\\AppFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb9bd2ba", Component.options)
  } else {
    hotAPI.reload("data-v-bb9bd2ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(497);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(65)("8f955d64", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb9bd2ba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb9bd2ba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-footer', {
    staticClass: "primary"
  }, [_c('span', {
    staticClass: "white--text"
  }, [_vm._v("© 2017")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bb9bd2ba", module.exports)
  }
}

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(501)
}
var Component = __webpack_require__(63)(
  /* script */
  __webpack_require__(503),
  /* template */
  __webpack_require__(504),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\vuetified\\resources\\assets\\js\\partials\\AppNavBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppNavBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7c65b10", Component.options)
  } else {
    hotAPI.reload("data-v-b7c65b10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(502);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(65)("1c249e37", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7c65b10\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7c65b10\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['title'],
    methods: {
        toggleDrawer: function toggleDrawer() {
            Bus.$emit('toggleDrawer');
        }
    }
});

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-toolbar', {
    staticClass: "red"
  }, [_c('v-toolbar-title', [_c('v-toolbar-side-icon', {
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.toggleDrawer()
      }
    }
  }), _vm._v(" "), _c('v-icon', {
    staticClass: "ml-3"
  }, [_vm._v("fa-youtube")]), _vm._v(" " + _vm._s(_vm.title) + "\n      ")], 1), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-text-field', {
    attrs: {
      "label": "Search...",
      "single-line": "",
      "append-icon": "search",
      "dark": "",
      "hide-details": ""
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b7c65b10", module.exports)
  }
}

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(63)(
  /* script */
  __webpack_require__(506),
  /* template */
  __webpack_require__(513),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\vuetified\\resources\\assets\\js\\partials\\LeftSideBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LeftSideBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b3ae87c", Component.options)
  } else {
    hotAPI.reload("data-v-3b3ae87c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VLink_vue__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MemberLink_vue__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MemberLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_MemberLink_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            drawer: true,
            links: [{ icon: 'fa-fa', name: 'Home', href: '/' }, { icon: 'subscriptions', name: 'Courses', href: '/courses' }, { icon: 'fa-plug', name: 'Login', href: '/login' }, { icon: 'fa-university', name: 'Learn Now', href: '/register' }, { icon: 'fa-support', name: 'Need Help?', href: '/support' }, { icon: 'fa-youtube-play', name: 'About Us', href: '/about' }],
            members: {}
        };
    },

    components: {
        VLink: __WEBPACK_IMPORTED_MODULE_0__components_VLink_vue___default.a,
        MemberLink: __WEBPACK_IMPORTED_MODULE_1__components_MemberLink_vue___default.a
    },
    created: function created() {
        var self = this;
        Bus.$on('toggleDrawer', function () {
            self.drawer = !self.drawer;
        });
    },
    mounted: function mounted() {
        this.fetchUsers();
    },

    methods: {
        fetchUsers: function fetchUsers() {
            this.members = [{ picture: 28, name: 'Joseph' }, { picture: 38, name: 'Apple' }, { picture: 48, name: 'Xbox Ahoy' }, { picture: 58, name: 'Nokia' }, { picture: 78, name: 'MKBHD' }];
        }
    }
});

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(63)(
  /* script */
  __webpack_require__(508),
  /* template */
  __webpack_require__(509),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\vuetified\\resources\\assets\\js\\components\\VLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d87eaca", Component.options)
  } else {
    hotAPI.reload("data-v-2d87eaca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    href: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    icon: {
      type: String
    }
  },
  computed: {
    isActive: function isActive() {
      return this.href === window.location.pathname;
    }
  }
});

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-list-tile', {
    attrs: {
      "href": _vm.href
    }
  }, [_c('v-list-tile-action', [_c('v-icon', [_vm._v(_vm._s(_vm.icon))])], 1), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', {
    class: {
      'router-link-active': _vm.isActive
    }
  }, [_vm._v("\n          " + _vm._s(_vm.name) + "\n        ")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d87eaca", module.exports)
  }
}

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(63)(
  /* script */
  __webpack_require__(511),
  /* template */
  __webpack_require__(512),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\vuetified\\resources\\assets\\js\\components\\MemberLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MemberLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b55f3b9", Component.options)
  } else {
    hotAPI.reload("data-v-4b55f3b9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String
    }
  }
});

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-list-tile', {
    attrs: {
      "avatar": ""
    }
  }, [_c('v-list-tile-avatar', [_c('img', {
    attrs: {
      "src": _vm.avatar,
      "alt": ""
    }
  })]), _vm._v(" "), _c('v-list-tile-title', {
    domProps: {
      "textContent": _vm._s(_vm.name)
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b55f3b9", module.exports)
  }
}

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-navigation-drawer', {
    staticClass: "pb-0",
    attrs: {
      "persistent": "",
      "absolute": "",
      "height": "100%",
      "clipped": "",
      "enable-resize-watcher": ""
    },
    model: {
      value: (_vm.drawer),
      callback: function($$v) {
        _vm.drawer = $$v
      },
      expression: "drawer"
    }
  }, [_c('v-list', {
    attrs: {
      "dense": ""
    }
  }, [_vm._l((_vm.links), function(link) {
    return _c('v-link', {
      key: link.text,
      attrs: {
        "name": link.name,
        "href": link.href,
        "icon": link.icon
      }
    })
  }), _vm._v(" "), _c('v-link', {
    attrs: {
      "name": "Logout",
      "href": "/logout",
      "icon": "fa-power-off"
    }
  }), _vm._v(" "), _c('v-subheader', {
    staticClass: "mt-3 grey--text text--darken-1"
  }, [_vm._v("Latest Members")]), _vm._v(" "), _c('v-list', _vm._l((_vm.members), function(member) {
    return _c('member-link', {
      key: member.text,
      attrs: {
        "name": member.name,
        "avatar": ("https://randomuser.me/api/portraits/men/" + (member.picture) + ".jpg")
      }
    })
  })), _vm._v(" "), _c('v-list-tile', {
    staticClass: "mt-3"
  }, [_c('v-list-tile-action', [_c('v-icon', {
    staticClass: "grey--text text--darken-1"
  }, [_vm._v("add_circle_outline")])], 1), _vm._v(" "), _c('v-list-tile-title', {
    staticClass: "grey--text text--darken-1"
  }, [_vm._v("Browse Channels")])], 1), _vm._v(" "), _c('v-list-tile', [_c('v-list-tile-action', [_c('v-icon', {
    staticClass: "grey--text text--darken-1"
  }, [_vm._v("settings")])], 1), _vm._v(" "), _c('v-list-tile-title', {
    staticClass: "grey--text text--darken-1"
  }, [_vm._v("Manage Subscriptions")])], 1)], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3b3ae87c", module.exports)
  }
}

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(63)(
  /* script */
  __webpack_require__(515),
  /* template */
  __webpack_require__(516),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\vuetified\\resources\\assets\\js\\components\\FabButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FabButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c089fb8", Component.options)
  } else {
    hotAPI.reload("data-v-2c089fb8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            direction: 'top',
            fab: false,
            hover: false,
            top: false,
            right: true,
            bottom: true,
            left: false,
            transition: 'slide-y-reverse-transition',
            buttons: [{ name: 'home', href: '/', class: 'green', icon: 'fa-fa' }, { name: 'login', href: '/login', class: 'indigo', icon: 'fa-plug' }, { name: 'logout', href: '/logout', class: 'red', icon: 'fa-power-off' }],
            activeFab: {
                'class': 'teal lighten-1', icon: 'explore'
            }
        };
    },

    watch: {
        top: function top(val) {
            this.bottom = !val;
        },
        right: function right(val) {
            this.left = !val;
        },
        bottom: function bottom(val) {
            this.top = !val;
        },
        left: function left(val) {
            this.right = !val;
        }
    },
    methods: {
        changeFab: function changeFab(button) {
            this.activeFab = { class: button.class, icon: button.icon };
        },
        goTop: function goTop() {}
    }
});

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-speed-dial', {
    staticClass: "fab-float",
    attrs: {
      "top": _vm.top,
      "bottom": _vm.bottom,
      "right": _vm.right,
      "left": _vm.left,
      "direction": _vm.direction,
      "hover": _vm.hover,
      "transition": _vm.transition
    },
    model: {
      value: (_vm.fab),
      callback: function($$v) {
        _vm.fab = $$v
      },
      expression: "fab"
    }
  }, [_c('v-btn', {
    class: [_vm.activeFab.class],
    attrs: {
      "dark": "",
      "fab": "",
      "hover": ""
    },
    slot: "activator",
    model: {
      value: (_vm.fab),
      callback: function($$v) {
        _vm.fab = $$v
      },
      expression: "fab"
    }
  }, [_c('v-icon', [_vm._v(_vm._s(_vm.activeFab.icon))]), _vm._v(" "), _c('v-icon', [_vm._v("close")])], 1), _vm._v(" "), _vm._l((_vm.buttons), function(button) {
    return _c('v-btn', {
      key: button.name,
      class: [button.class],
      attrs: {
        "fab": "",
        "dark": "",
        "small": "",
        "href": button.href
      },
      nativeOn: {
        "click": function($event) {
          _vm.changeFab(button)
        }
      }
    }, [_c('v-icon', [_vm._v(_vm._s(button.icon))])], 1)
  }), _vm._v(" "), _c('v-btn', {
    staticClass: "amber",
    attrs: {
      "fab": "",
      "dark": "",
      "small": "",
      "href": "#main-app"
    }
  }, [_c('v-icon', [_vm._v("fa-chevron-up")])], 1)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c089fb8", module.exports)
  }
}

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', {
    attrs: {
      "dark": "",
      "id": "main-app",
      "standalone": ""
    }
  }, [_c('left-side-bar'), _vm._v(" "), _c('app-nav-bar', {
    attrs: {
      "title": _vm.title
    }
  }), _vm._v(" "), _c('main', [_c('v-container', [_c('transition', [_vm._t("default")], 2)], 1)], 1), _vm._v(" "), _c('fab-button'), _vm._v(" "), _c('app-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b093fdfa", module.exports)
  }
}

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        MainLayout: __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue___default.a
    }
});

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main-layout', [_c('p', [_vm._v("Register page")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-83761cdc", module.exports)
  }
}

/***/ })

});