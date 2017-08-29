webpackJsonp([3],{

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(510),
  /* template */
  __webpack_require__(511),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\aimworldwide\\resources\\assets\\js\\pages\\Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e1c3c4e", Component.options)
  } else {
    hotAPI.reload("data-v-3e1c3c4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 476:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(483)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(479),
  /* template */
  __webpack_require__(503),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\aimworldwide\\resources\\assets\\js\\layouts\\Main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07a1cc14", Component.options)
  } else {
    hotAPI.reload("data-v-07a1cc14", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_AppFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_AppNavBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__partials_LeftSideBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_FabButton_vue__ = __webpack_require__(500);
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

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(481)
}
var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(484),
  /* template */
  __webpack_require__(485),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\aimworldwide\\resources\\assets\\js\\partials\\AppFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a2390f4", Component.options)
  } else {
    hotAPI.reload("data-v-3a2390f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(482);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(477)("a1c10b28", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a2390f4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a2390f4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(468)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 483:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 484:
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

/***/ 485:
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
     require("vue-hot-reload-api").rerender("data-v-3a2390f4", module.exports)
  }
}

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(487)
}
var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(489),
  /* template */
  __webpack_require__(490),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\aimworldwide\\resources\\assets\\js\\partials\\AppNavBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppNavBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c0e4cc9", Component.options)
  } else {
    hotAPI.reload("data-v-3c0e4cc9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(488);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(477)("33df0e6d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c0e4cc9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c0e4cc9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(468)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 489:
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

/***/ 490:
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
     require("vue-hot-reload-api").rerender("data-v-3c0e4cc9", module.exports)
  }
}

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(492),
  /* template */
  __webpack_require__(499),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\aimworldwide\\resources\\assets\\js\\partials\\LeftSideBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LeftSideBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c691dae6", Component.options)
  } else {
    hotAPI.reload("data-v-c691dae6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VLink_vue__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MemberLink_vue__ = __webpack_require__(496);
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

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(494),
  /* template */
  __webpack_require__(495),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\aimworldwide\\resources\\assets\\js\\components\\VLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed8c35a8", Component.options)
  } else {
    hotAPI.reload("data-v-ed8c35a8", Component.options)
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

/***/ 495:
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
     require("vue-hot-reload-api").rerender("data-v-ed8c35a8", module.exports)
  }
}

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(497),
  /* template */
  __webpack_require__(498),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\aimworldwide\\resources\\assets\\js\\components\\MemberLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MemberLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-195f0bc8", Component.options)
  } else {
    hotAPI.reload("data-v-195f0bc8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 497:
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

/***/ 498:
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
     require("vue-hot-reload-api").rerender("data-v-195f0bc8", module.exports)
  }
}

/***/ }),

/***/ 499:
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
     require("vue-hot-reload-api").rerender("data-v-c691dae6", module.exports)
  }
}

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(501),
  /* template */
  __webpack_require__(502),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\aimworldwide\\resources\\assets\\js\\components\\FabButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FabButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b77da35", Component.options)
  } else {
    hotAPI.reload("data-v-4b77da35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 501:
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

/***/ 502:
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
     require("vue-hot-reload-api").rerender("data-v-4b77da35", module.exports)
  }
}

/***/ }),

/***/ 503:
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
     require("vue-hot-reload-api").rerender("data-v-07a1cc14", module.exports)
  }
}

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue__ = __webpack_require__(478);
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

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main-layout', [_c('p', [_vm._v("Login Page")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e1c3c4e", module.exports)
  }
}

/***/ })

});