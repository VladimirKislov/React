webpackHotUpdate("main",{

/***/ "./src/shared/CommentUsers/Comment/ReplyComment/ReplyComment.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CommentUsers/Comment/ReplyComment/ReplyComment.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReplyComment = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar replycomment_scss_1 = __importDefault(__webpack_require__(/*! ./replycomment.scss */ \"./src/shared/CommentUsers/Comment/ReplyComment/replycomment.scss\"));\r\nfunction ReplyComment(_a) {\r\n    // const { value, onChange } = useContext(CommentContext)\r\n    var onClose = _a.onClose, author = _a.author;\r\n    // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {\r\n    //   onChange(event.target.value)\r\n    // }\r\n    // function handelSubmit(event: FormEvent) {\r\n    //   event.preventDefault()\r\n    // }\r\n    var ref = (0, react_1.useRef)(null);\r\n    // useEffect(() => {\r\n    //   function handelClick(event: MouseEvent) {\r\n    //     if (event.target instanceof Node && !ref.current?.contains(event.target)) {\r\n    //       onClose?.()\r\n    //     }\r\n    //   }\r\n    //   document.addEventListener('click', handelClick)\r\n    //   return () => {\r\n    //     document.removeEventListener('click', handelClick)\r\n    //   }\r\n    // }, [])\r\n    var node = document.querySelector('#dropdown');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: replycomment_scss_1.default.wrapperForm, ref: ref },\r\n        react_1.default.createElement(\"form\", { className: replycomment_scss_1.default.form, onSubmit: handelSubmit },\r\n            react_1.default.createElement(\"textarea\", { className: replycomment_scss_1.default.input, value: value, onChange: handleChange }),\r\n            react_1.default.createElement(\"button\", { type: 'submit', className: replycomment_scss_1.default.button }, \"\\u041A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")))), node);\r\n}\r\nexports.ReplyComment = ReplyComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/Comment/ReplyComment/ReplyComment.tsx?");

/***/ }),

/***/ "./src/shared/CommentUsers/Comment/ReplyComment/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CommentUsers/Comment/ReplyComment/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ReplyComment */ \"./src/shared/CommentUsers/Comment/ReplyComment/ReplyComment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/Comment/ReplyComment/index.ts?");

/***/ })

})