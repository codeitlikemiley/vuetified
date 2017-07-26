webpackJsonp([7],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(457),
  /* template */
  __webpack_require__(481),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\jerichoesber\\resources\\assets\\js\\layouts\\Main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-436b9e0b", Component.options)
  } else {
    hotAPI.reload("data-v-436b9e0b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_FabButton_vue__ = __webpack_require__(478);
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

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(459)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(462),
  /* template */
  __webpack_require__(463),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\jerichoesber\\resources\\assets\\js\\partials\\AppFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88a064aa", Component.options)
  } else {
    hotAPI.reload("data-v-88a064aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(460);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(245)("595106c5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-88a064aa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-88a064aa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(244)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 462:
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

/***/ 463:
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
     require("vue-hot-reload-api").rerender("data-v-88a064aa", module.exports)
  }
}

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(465)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(467),
  /* template */
  __webpack_require__(468),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\jerichoesber\\resources\\assets\\js\\partials\\AppNavBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppNavBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84caed00", Component.options)
  } else {
    hotAPI.reload("data-v-84caed00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(466);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(245)("63ae13fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84caed00\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84caed00\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(244)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 467:
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

/***/ 468:
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
     require("vue-hot-reload-api").rerender("data-v-84caed00", module.exports)
  }
}

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(470),
  /* template */
  __webpack_require__(477),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\jerichoesber\\resources\\assets\\js\\partials\\LeftSideBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LeftSideBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27b204f8", Component.options)
  } else {
    hotAPI.reload("data-v-27b204f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VLink_vue__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MemberLink_vue__ = __webpack_require__(474);
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

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(472),
  /* template */
  __webpack_require__(473),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\jerichoesber\\resources\\assets\\js\\components\\VLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-474be3a3", Component.options)
  } else {
    hotAPI.reload("data-v-474be3a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 472:
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

/***/ 473:
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
     require("vue-hot-reload-api").rerender("data-v-474be3a3", module.exports)
  }
}

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(475),
  /* template */
  __webpack_require__(476),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\jerichoesber\\resources\\assets\\js\\components\\MemberLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MemberLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9027009e", Component.options)
  } else {
    hotAPI.reload("data-v-9027009e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 475:
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

/***/ 476:
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
     require("vue-hot-reload-api").rerender("data-v-9027009e", module.exports)
  }
}

/***/ }),

/***/ 477:
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
     require("vue-hot-reload-api").rerender("data-v-27b204f8", module.exports)
  }
}

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(479),
  /* template */
  __webpack_require__(480),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\jerichoesber\\resources\\assets\\js\\components\\FabButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FabButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca3075a8", Component.options)
  } else {
    hotAPI.reload("data-v-ca3075a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 479:
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
      direction: "top",
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

/***/ 480:
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
     require("vue-hot-reload-api").rerender("data-v-ca3075a8", module.exports)
  }
}

/***/ }),

/***/ 481:
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
     require("vue-hot-reload-api").rerender("data-v-436b9e0b", module.exports)
  }
}

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(483),
  /* template */
  __webpack_require__(484),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\jerichoesber\\resources\\assets\\js\\pages\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ce9fc56", Component.options)
  } else {
    hotAPI.reload("data-v-6ce9fc56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue__ = __webpack_require__(34);
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

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main-layout', [_c('p', [_vm._v("Welcome home")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ce9fc56", module.exports)
  }
}

/***/ })

});