webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./context/userContext */ \"./src/context/userContext.tsx\");\r\nvar PostsContext_1 = __webpack_require__(/*! ./context/PostsContext */ \"./src/context/PostsContext.ts\");\r\nvar usePostsData_1 = __webpack_require__(/*! ./hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nvar storeToken_1 = __webpack_require__(/*! ./storeToken */ \"./src/storeToken.ts\");\r\n// const store = createStore(rootReducer, composeWithDevTools())\r\nvar storeToken = (0, redux_1.createStore)(storeToken_1.tokenReducer, (0, redux_devtools_extension_1.composeWithDevTools)());\r\nfunction AppComponent() {\r\n    var token = (0, useToken_1.useToken)()[0];\r\n    var postData = (0, usePostsData_1.usePostsData)(token);\r\n    return (\r\n    // <Provider store={store}>\r\n    react_1.default.createElement(react_redux_1.Provider, { store: storeToken },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(PostsContext_1.PostsContext.Provider, { value: [postData] },\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardList_1.CardList, null))))))\r\n    // </Provider>\r\n    );\r\n}\r\nexports.App = (0, root_1.hot)(function () {\r\n    return react_1.default.createElement(react_redux_1.Provider, { store: storeToken },\r\n        react_1.default.createElement(AppComponent, null));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useCommentUsers.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentUsers.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentUsers = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction useCommentUsers(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId;\r\n    var _b = (0, react_1.useState)([]), comment = _b[0], setComment = _b[1];\r\n    (0, react_1.useEffect)(function () {\r\n        if (!subreddit)\r\n            return;\r\n        axios_1.default.get(\"http://api.reddit.com/\".concat(subreddit, \"/comments/\").concat(postId))\r\n            .then(function (response) {\r\n            setComment(response.data[1].data.children);\r\n        })\r\n            .catch(console.log);\r\n        return function () {\r\n            setComment([]);\r\n        };\r\n    }, []);\r\n    return [comment];\r\n}\r\nexports.useCommentUsers = useCommentUsers;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentUsers.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (12:30)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|         if (window.__token__) {\\n|             setToken(window.__token__);\\n>             dispatch({ type:  });\\n|         }\\n|     }, []);\");\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ })

})