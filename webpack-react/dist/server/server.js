/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar tokenContext_1 = __webpack_require__(/*! ./context/tokenContext */ \"./src/context/tokenContext.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./context/userContext */ \"./src/context/userContext.tsx\");\r\nvar PostsContext_1 = __webpack_require__(/*! ./context/PostsContext */ \"./src/context/PostsContext.ts\");\r\nvar usePostsData_1 = __webpack_require__(/*! ./hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nfunction AppComponent() {\r\n    var token = (0, useToken_1.useToken)()[0];\r\n    var postData = (0, usePostsData_1.usePostsData)(token);\r\n    return (react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token === '' || token === undefined ? '' : token },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(PostsContext_1.PostsContext.Provider, { value: [postData] },\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardList_1.CardList, null)))))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/context/PostsContext.ts":
/*!*************************************!*\
  !*** ./src/context/PostsContext.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.PostsContext = react_1.default.createContext([]);\r\n\n\n//# sourceURL=webpack:///./src/context/PostsContext.ts?");

/***/ }),

/***/ "./src/context/tokenContext.ts":
/*!*************************************!*\
  !*** ./src/context/tokenContext.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.tokenContext = react_1.default.createContext('');\r\n\n\n//# sourceURL=webpack:///./src/context/tokenContext.ts?");

/***/ }),

/***/ "./src/context/userContext.tsx":
/*!*************************************!*\
  !*** ./src/context/userContext.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = (0, useUserData_1.useUserData)()[0];\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/context/userContext.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction usePostsData(token) {\r\n    var _a = (0, react_1.useState)(), postData = _a[0], setPostData = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        if (token === '')\r\n            return;\r\n        axios_1.default.get('https://oauth.reddit.com/best', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var posts = resp.data.data.children;\r\n            setPostData(posts);\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [postData];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useToken() {\r\n    var _a = (0, react_1.useState)(''), token = _a[0], setToken = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        if (window.__token__) {\r\n            setToken(window.__token__);\r\n        }\r\n    }, []);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/context/tokenContext.ts\");\r\nfunction useUserData() {\r\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    (0, react_1.useEffect)(function () {\r\n        if (token === '')\r\n            return;\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({ name: userData.name, iconImg: userData.icon_img.split('?').shift() });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:          #333333;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script>\\n        window.__token__ = '\".concat(token, \"'\\n    </script>\\n    <title>Document</title>\\n</head>\\n<body>\\n    <div id=\\\"root\\\">\").concat(content, \"</div>\\n</body>\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = (0, express_1.default)();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\r\n        auth: { username: 'LTCW2f7TVj4zTVCfmNFpoA', password: 'u1vHnURE0oApchJj-8fM-oDkvzeaEg' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_scss_1 = __importDefault(__webpack_require__(/*! ./card.scss */ \"./src/shared/CardList/Card/card.scss\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/index.ts\");\r\nfunction Card(_a) {\r\n    var image = _a.image, title = _a.title, avatar = _a.avatar, author = _a.author, date = _a.date, like = _a.like;\r\n    return (react_1.default.createElement(\"li\", { className: card_scss_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { title: title, author: author, date: date, avatar: avatar }),\r\n        react_1.default.createElement(Preview_1.Preview, { image: image }),\r\n        react_1.default.createElement(Controls_1.Controls, { like: like }),\r\n        react_1.default.createElement(Menu_1.Menu, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Controls.tsx":
/*!********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Controls.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_scss_1 = __importDefault(__webpack_require__(/*! ./controls.scss */ \"./src/shared/CardList/Card/Controls/controls.scss\"));\r\nfunction Controls(_a) {\r\n    var like = _a.like;\r\n    var _b = react_1.default.useState(like || 234), count = _b[0], setCount = _b[1];\r\n    function upCount() {\r\n        setCount(function (prevCount) { return prevCount + 1; });\r\n    }\r\n    function downCount() {\r\n        setCount(function (prevCount) { return prevCount - 1; });\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: controls_scss_1.default.controls },\r\n        react_1.default.createElement(\"div\", { className: controls_scss_1.default.karmaCounter },\r\n            react_1.default.createElement(\"button\", { className: controls_scss_1.default.up, onClick: upCount },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\r\n            react_1.default.createElement(\"span\", { className: controls_scss_1.default.karmaValue }, count),\r\n            react_1.default.createElement(\"button\", { className: controls_scss_1.default.down, onClick: downCount },\r\n                react_1.default.createElement(\"svg\", { className: controls_scss_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })))),\r\n        react_1.default.createElement(\"button\", { className: controls_scss_1.default.commentsButton },\r\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n            react_1.default.createElement(\"span\", { className: controls_scss_1.default.commentsNumber }, \"14\")),\r\n        react_1.default.createElement(\"div\", { className: controls_scss_1.default.actions },\r\n            react_1.default.createElement(\"button\", { className: controls_scss_1.default.shareButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\r\n            react_1.default.createElement(\"button\", { className: controls_scss_1.default.saveButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/controls.scss":
/*!*********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/controls.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--2oCbL\",\n\t\"actions\": \"controls__actions--3Yr7Y\",\n\t\"karmaCounter\": \"controls__karmaCounter--1EUdq\",\n\t\"karmaValue\": \"controls__karmaValue--2EWKm\",\n\t\"down\": \"controls__down--4xOxC\",\n\t\"commentsButton\": \"controls__commentsButton--2np_t\",\n\t\"commentsNumber\": \"controls__commentsNumber--3ua6g\",\n\t\"shareButton\": \"controls__shareButton--15quJ\",\n\t\"saveButton\": \"controls__saveButton--2Im-p\",\n\t\"up\": \"controls__up--V_4b5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/controls.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/Menu.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/Menu.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar menu_scss_1 = __importDefault(__webpack_require__(/*! ./menu.scss */ \"./src/shared/CardList/Card/Menu/menu.scss\"));\r\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardList/Card/Menu/MenuItemsList/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_scss_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_scss_1.default.menuButton },\r\n                react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.menu, size: 16, mobileSize: 12 })) },\r\n            react_1.default.createElement(\"div\", { className: menu_scss_1.default.dropdownWrapper },\r\n                react_1.default.createElement(MenuItemsList_1.MenuItemsList, null),\r\n                react_1.default.createElement(\"button\", { className: menu_scss_1.default.dropdownClose }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menuitemslist_scss_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.scss */ \"./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss\"));\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.tsx\");\r\nvar merge_1 = __webpack_require__(/*! ../../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar list = [\r\n    {\r\n        As: 'li', text: 'Комментарии', className: \"\".concat(menuitemslist_scss_1.default.dropdownItem), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.comment, size: 16, mobileSize: 12 })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Поделиться', className: \"\".concat(menuitemslist_scss_1.default.dropdownItem), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.share, size: 16, mobileSize: 12 })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Скрыть', className: \"\".concat(menuitemslist_scss_1.default.dropdownItemMobile), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.hidden, size: 16, mobileSize: 12 })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Сохранить', className: \"\".concat(menuitemslist_scss_1.default.dropdownItem), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.save, size: 16, mobileSize: 12 })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Пожаловаться', className: \"\".concat(menuitemslist_scss_1.default.dropdownItemMobile), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.comPlain, size: 16, mobileSize: 12 })\r\n    },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction MenuItemsList() {\r\n    var handleItemClick = function (id) {\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_scss_1.default.dropdownList },\r\n        react_1.default.createElement(GenericList_1.GenericList, { list: list.map((0, merge_1.merge)({ onClick: handleItemClick })) })));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss":
/*!************************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"dropdownList\": \"menuitemslist__dropdownList--3Awxc\",\n\t\"dropdownItem\": \"menuitemslist__dropdownItem--39IdE\",\n\t\"dropdownItemMobile\": \"menuitemslist__dropdownItemMobile--2wDJY\",\n\t\"dropdownSpan\": \"menuitemslist__dropdownSpan--2V5-l\",\n\t\"divider\": \"menuitemslist__divider--vvAHf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/index.ts":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/menu.scss":
/*!*************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/menu.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3ALMa\",\n\t\"menuButton\": \"menu__menuButton--1o5uL\",\n\t\"dropdown\": \"menu__dropdown--yOri2\",\n\t\"closeButton\": \"menu__closeButton--3cfWS\",\n\t\"dropdownWrapper\": \"menu__dropdownWrapper--2HF4b\",\n\t\"dropdownClose\": \"menu__dropdownClose--26zij\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/menu.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/Preview.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/Preview.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_scss_1 = __importDefault(__webpack_require__(/*! ./preview.scss */ \"./src/shared/CardList/Card/Preview/preview.scss\"));\r\nfunction Preview(image) {\r\n    return (react_1.default.createElement(\"div\", { className: preview_scss_1.default.preview },\r\n        react_1.default.createElement(\"img\", { src: (image.image === undefined || (!image.image.endsWith('.jpg') && !image.image.endsWith('.jpeg') && !image.image.endsWith('.gif') && !image.image.endsWith('.png'))) ? \"https://cdn.dribbble.com/userupload/2774008/file/original-315f5378ea4ec89bb81d1ac6c6a4d26e.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1600\" : \"\".concat(image.image), alt: \"preview\", className: preview_scss_1.default.previewImg })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/preview.scss":
/*!*******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/preview.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--3v8sd\",\n\t\"previewImg\": \"preview__previewImg--1EsgH\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/preview.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textcontent_scss_1 = __importDefault(__webpack_require__(/*! ./textcontent.scss */ \"./src/shared/CardList/Card/TextContent/textcontent.scss\"));\r\nfunction TextContent(_a) {\r\n    var author = _a.author, date = _a.date, title = _a.title, avatar = _a.avatar;\r\n    function viewAvatar() {\r\n        if (avatar === undefined || (!avatar.endsWith('.jpg') && !avatar.endsWith('.jpeg') && !avatar.endsWith('.gif') && !avatar.endsWith('.png'))) {\r\n            return \"http://spovv.com/file/2020/10/Group-47-1.png\";\r\n        }\r\n        else {\r\n            return avatar;\r\n        }\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { src: viewAvatar(), alt: \"avatar\", className: textcontent_scss_1.default.avatar }),\r\n                react_1.default.createElement(\"a\", { href: \"#\", className: textcontent_scss_1.default.username }, author || 'Дмитрий Гришин')),\r\n            react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n                \" \",\r\n                date || 4,\r\n                \" \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n        react_1.default.createElement(\"h2\", { className: textcontent_scss_1.default.title },\r\n            react_1.default.createElement(\"a\", { href: \"#\", className: textcontent_scss_1.default.postLink }, title || 'Следует отметить, что новая модель организационной деятельности...'))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/textcontent.scss":
/*!***************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/textcontent.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--36RnO\",\n\t\"metaData\": \"textcontent__metaData--3SRhz\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--3qyv9\",\n\t\"createdAt\": \"textcontent__createdAt--2XYRb\",\n\t\"userLink\": \"textcontent__userLink--2DvdL\",\n\t\"avatar\": \"textcontent__avatar--39M_r\",\n\t\"username\": \"textcontent__username--nWPj1\",\n\t\"title\": \"textcontent__title--3n-Ks\",\n\t\"postLink\": \"textcontent__postLink--2czDE\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/textcontent.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/card.scss":
/*!********************************************!*\
  !*** ./src/shared/CardList/Card/card.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--6OfeO\",\n\t\"textContent\": \"card__textContent--UyHOh\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/card.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/index.ts\");\r\nvar cardlist_scss_1 = __importDefault(__webpack_require__(/*! ./cardlist.scss */ \"./src/shared/CardList/cardlist.scss\"));\r\nvar PostsContext_1 = __webpack_require__(/*! ../../context/PostsContext */ \"./src/context/PostsContext.ts\");\r\nfunction CardList() {\r\n    var postData = (0, react_1.useContext)(PostsContext_1.PostsContext);\r\n    var posts = postData[0][0];\r\n    return (react_1.default.createElement(\"ul\", { className: cardlist_scss_1.default.cardList }, posts === undefined\r\n        ? react_1.default.createElement(Card_1.Card, null)\r\n        : posts.map(function (item) { return (react_1.default.createElement(Card_1.Card, { key: item.data.id, image: item.data.url, title: item.data.title, avatar: item.data.thumbnail, author: item.data.author, date: item.data.wls, like: item.data.ups })); })));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/cardlist.scss":
/*!*******************************************!*\
  !*** ./src/shared/CardList/cardlist.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardlist__cardsList--Rg7KE\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/cardlist.scss?");

/***/ }),

/***/ "./src/shared/CardList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/CardList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardList */ \"./src/shared/CardList/CardList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_scss_1 = __importDefault(__webpack_require__(/*! ./content.scss */ \"./src/shared/Content/content.scss\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_scss_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.scss":
/*!*****************************************!*\
  !*** ./src/shared/Content/content.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--61-H9\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.scss?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_scss_1 = __importDefault(__webpack_require__(/*! ./dropdown.scss */ \"./src/shared/Dropdown/dropdown.scss\"));\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;\r\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    react_1.default.useEffect(function () {\r\n        setIsDropdownOpen(isOpen);\r\n    }, [isOpen]);\r\n    react_1.default.useEffect(function () {\r\n        isDropdownOpen ? onOpen() : onClose();\r\n    }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen },\r\n            \" \",\r\n            button,\r\n            \" \"),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.scss":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--o1mMR\",\n\t\"listContainer\": \"dropdown__listContainer--3nCwY\",\n\t\"list\": \"dropdown__list--1nfRv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.scss?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar noop = function () { };\r\nfunction GenericList(_a) {\r\n    var list = _a.list;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? noop : _c, className = _a.className, id = _a.id, href = _a.href, svg = _a.svg, _d = _a.As2, As2 = _d === void 0 ? 'span' : _d, classNameSpan = _a.classNameSpan;\r\n        return (react_1.default.createElement(As, { className: className, onClick: function () { return onClick(id); }, key: id, href: href },\r\n            react_1.default.createElement(As2, { className: classNameSpan }, svg),\r\n            text));\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/GenericList/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/GenericList/GenericList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nvar header_scss_1 = __importDefault(__webpack_require__(/*! ./header.scss */ \"./src/shared/Header/header.scss\"));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_scss_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar userContext_1 = __webpack_require__(/*! ../../../context/userContext */ \"./src/context/userContext.tsx\");\r\nvar searchblock_scss_1 = __importDefault(__webpack_require__(/*! ./searchblock.scss */ \"./src/shared/Header/SearchBlock/searchblock.scss\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock/UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\");\r\nfunction SearchBlock() {\r\n    var _a = (0, react_1.useContext)(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_scss_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar userblock_scss_1 = __importDefault(__webpack_require__(/*! ./userblock.scss */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.scss\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: 'https://www.reddit.com/api/v1/authorize?client_id=LTCW2f7TVj4zTVCfmNFpoA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity', className: userblock_scss_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user_avatar\", className: userblock_scss_1.default.avatarImage })\r\n            : react_1.default.createElement(Icons_1.IconAnon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.username },\r\n            react_1.default.createElement(\"span\", null, username || 'Аноним'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.scss":
/*!****************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--1fubG\",\n\t\"avatarBox\": \"userblock__avatarBox--zfE9Z\",\n\t\"avatarImage\": \"userblock__avatarImage--CXX_4\",\n\t\"username\": \"userblock__username--8sDRn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.scss?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.scss":
/*!********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3Rcx1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.scss?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_scss_1 = __importDefault(__webpack_require__(/*! ./sortblock.scss */ \"./src/shared/Header/SortBlock/sortblock.scss\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_scss_1.default.sortBlock }, \"Sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.scss":
/*!****************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--1otXh\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.scss?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_scss_1 = __importDefault(__webpack_require__(/*! ./threadtitle.scss */ \"./src/shared/Header/ThreadTitle/threadtitle.scss\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_scss_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.scss":
/*!********************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--1fvoP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.scss?");

/***/ }),

/***/ "./src/shared/Header/header.scss":
/*!***************************************!*\
  !*** ./src/shared/Header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--4oGEs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.scss?");

/***/ }),

/***/ "./src/shared/Icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentIcon = CommentIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ComplainIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/ComplainIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ComplainIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ComplainIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n}\r\nexports.ComplainIcon = ComplainIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ComplainIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/HiddenIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/HiddenIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.HiddenIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction HiddenIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n}\r\nexports.HiddenIcon = HiddenIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/HiddenIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Icon.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Icon.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icons = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icon_scss_1 = __importDefault(__webpack_require__(/*! ./icon.scss */ \"./src/shared/Icons/icon.scss\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar CommentIcon_1 = __webpack_require__(/*! ./CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\");\r\nvar ComplainIcon_1 = __webpack_require__(/*! ./ComplainIcon */ \"./src/shared/Icons/ComplainIcon.tsx\");\r\nvar HiddenIcon_1 = __webpack_require__(/*! ./HiddenIcon */ \"./src/shared/Icons/HiddenIcon.tsx\");\r\nvar MenuIcon_1 = __webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\");\r\nvar SaveIcon_1 = __webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\");\r\nvar ShareIcon_1 = __webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\");\r\nvar IconAnon_1 = __webpack_require__(/*! ./IconAnon */ \"./src/shared/Icons/IconAnon.tsx\");\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"comment\"] = \"comment\";\r\n    EIcons[\"comPlain\"] = \"comPlain\";\r\n    EIcons[\"hidden\"] = \"hidden\";\r\n    EIcons[\"menu\"] = \"menu\";\r\n    EIcons[\"save\"] = \"save\";\r\n    EIcons[\"share\"] = \"share\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nfunction Icons(_a) {\r\n    var _b, _c, _d;\r\n    var _e = _a.As, As = _e === void 0 ? 'span' : _e, children = _a.children, name = _a.name, size = _a.size, mobileSize = _a.mobileSize, tabletSize = _a.tabletSize, desktopSize = _a.desktopSize;\r\n    switch (name) {\r\n        case EIcons.comment:\r\n            children = react_1.default.createElement(CommentIcon_1.CommentIcon, null);\r\n            break;\r\n        case EIcons.comPlain:\r\n            children = react_1.default.createElement(ComplainIcon_1.ComplainIcon, null);\r\n            break;\r\n        case EIcons.hidden:\r\n            children = react_1.default.createElement(HiddenIcon_1.HiddenIcon, null);\r\n            break;\r\n        case EIcons.menu:\r\n            children = react_1.default.createElement(MenuIcon_1.MenuIcon, null);\r\n            break;\r\n        case EIcons.save:\r\n            children = react_1.default.createElement(SaveIcon_1.SaveIcon, null);\r\n            break;\r\n        case EIcons.share:\r\n            children = react_1.default.createElement(ShareIcon_1.ShareIcon, null);\r\n            break;\r\n        case EIcons.share:\r\n            children = react_1.default.createElement(IconAnon_1.IconAnon, null);\r\n            break;\r\n    }\r\n    var classes = (0, classnames_1.default)(icon_scss_1.default[\"s\".concat(size)], (_b = {}, _b[icon_scss_1.default[\"m\".concat(mobileSize)]] = mobileSize, _b), (_c = {}, _c[icon_scss_1.default[\"t\".concat(tabletSize)]] = tabletSize, _c), (_d = {}, _d[icon_scss_1.default[\"d\".concat(desktopSize)]] = desktopSize, _d));\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Icons = Icons;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconAnon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconAnon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconAnon = IconAnon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/icon.scss":
/*!************************************!*\
  !*** ./src/shared/Icons/icon.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s18\": \"icon__s18--3cClR\",\n\t\"s16\": \"icon__s16--3KPzU\",\n\t\"s14\": \"icon__s14--29oX-\",\n\t\"s12\": \"icon__s12--MTfS7\",\n\t\"s10\": \"icon__s10--11Se-\",\n\t\"d18\": \"icon__d18--D1OQa\",\n\t\"d16\": \"icon__d16--266JK\",\n\t\"d14\": \"icon__d14--PNNJp\",\n\t\"d12\": \"icon__d12--3mQ8u\",\n\t\"d10\": \"icon__d10--3RUfL\",\n\t\"t18\": \"icon__t18--1-peu\",\n\t\"t16\": \"icon__t16--2126l\",\n\t\"t14\": \"icon__t14--2zLj9\",\n\t\"t12\": \"icon__t12--HzYc8\",\n\t\"t10\": \"icon__t10--KJTQ7\",\n\t\"m18\": \"icon__m18--35Pad\",\n\t\"m16\": \"icon__m16--1G6uU\",\n\t\"m14\": \"icon__m14--2Yp9Z\",\n\t\"m12\": \"icon__m12--1SaCR\",\n\t\"m10\": \"icon__m10--WV0o2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icons/icon.scss?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./HiddenIcon */ \"./src/shared/Icons/HiddenIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ComplainIcon */ \"./src/shared/Icons/ComplainIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/Icons/IconAnon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_scss_1 = __importDefault(__webpack_require__(/*! ./layout.scss */ \"./src/shared/Layout/layout.scss\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_scss_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/layout.scss":
/*!***************************************!*\
  !*** ./src/shared/Layout/layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--ZBOll\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.scss?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/merge.ts":
/*!*******************************!*\
  !*** ./src/utils/js/merge.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.merge = void 0;\r\nfunction merge(obj) {\r\n    return function (obj2) { return (__assign(__assign({}, obj), obj2)); };\r\n}\r\nexports.merge = merge;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/merge.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.tsx":
/*!*************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\n// export const assignId = assoc('id', generateRandomString());\r\nvar generateId = function (obj) { return (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj); };\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.tsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });