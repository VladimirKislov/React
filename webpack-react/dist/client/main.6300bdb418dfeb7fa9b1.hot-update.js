webpackHotUpdate("main",{

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar meAction_1 = __webpack_require__(/*! ../store/me/meAction */ \"./src/store/me/meAction.ts\");\r\nfunction useUserData() {\r\n    var data = react_redux_1.useSelector;\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (token === '')\r\n            return;\r\n        dispatch((0, meAction_1.MeRequest)());\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            dispatch((0, meAction_1.MeRequestSuccess)({ name: userData.name, iconImg: userData.icon_img.split('?').shift() }));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch((0, meAction_1.MeRequestError)(error.message));\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ })

})