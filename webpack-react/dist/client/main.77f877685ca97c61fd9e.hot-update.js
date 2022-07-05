webpackHotUpdate("main",{

/***/ "./src/hooks/useCommentUsers.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentUsers.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentUsers = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction useCommentUsers(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId;\r\n    var _b = (0, react_1.useState)([]), comment = _b[0], setComment = _b[1];\r\n    (0, react_1.useEffect)(function () {\r\n        if (!subreddit)\r\n            return;\r\n        axios_1.default.get(\"http://api.reddit.com/\".concat(subreddit, \"/comments/\").concat(postId))\r\n            .then(function (response) {\r\n            setComment(response.data[1].data.children);\r\n        })\r\n            .catch(console.log);\r\n        return function () {\r\n            setComment([]);\r\n        };\r\n    }, []);\r\n    if (comment.length > 0)\r\n        return [comment];\r\n}\r\nexports.useCommentUsers = useCommentUsers;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentUsers.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar post_scss_1 = __importDefault(__webpack_require__(/*! ./post.scss */ \"./src/shared/Post/post.scss\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nvar CommentUsers_1 = __webpack_require__(/*! ../CommentUsers */ \"./src/shared/CommentUsers/index.ts\");\r\nvar useCommentUsers_1 = __webpack_require__(/*! ../../hooks/useCommentUsers */ \"./src/hooks/useCommentUsers.ts\");\r\nfunction Post(_a) {\r\n    var _b;\r\n    var onClose = _a.onClose, subreddit = _a.subreddit, postId = _a.postId, title = _a.title, image = _a.image;\r\n    var ref = (0, react_1.useRef)(null);\r\n    var data = (0, useCommentUsers_1.useCommentUsers)({ subreddit: subreddit, postId: postId })[0];\r\n    console.log(data.length);\r\n    (0, react_1.useEffect)(function () {\r\n        function handelClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        }\r\n        document.addEventListener('click', handelClick);\r\n        return function () {\r\n            document.removeEventListener('click', handelClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector('#modal');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_scss_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", { className: post_scss_1.default.title }, title || 'Следует отметить, что новая модель организационной деятельности поможет'),\r\n        react_1.default.createElement(\"div\", { className: post_scss_1.default.content }, image\r\n            ? react_1.default.createElement(\"img\", { className: post_scss_1.default.image, src: (image === undefined || (!image.endsWith('.jpg') && !image.endsWith('.jpeg') && !image.endsWith('.gif') && !image.endsWith('.png'))) ? \"https://cdn.dribbble.com/userupload/2774008/file/original-315f5378ea4ec89bb81d1ac6c6a4d26e.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1600\" : \"\".concat(image), alt: \"image\" })\r\n            : react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\"),\r\n                react_1.default.createElement(\"p\", null, \"\\u0411\\u0435\\u0437\\u0443\\u0441\\u043B\\u043E\\u0432\\u043D\\u043E, \\u0433\\u043B\\u0443\\u0431\\u043E\\u043A\\u0438\\u0439 \\u0443\\u0440\\u043E\\u0432\\u0435\\u043D\\u044C \\u043F\\u043E\\u0433\\u0440\\u0443\\u0436\\u0435\\u043D\\u0438\\u044F \\u0441\\u043E\\u0437\\u0434\\u0430\\u0451\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u0432\\u043A\\u043B\\u044E\\u0447\\u0435\\u043D\\u0438\\u044F \\u0432 \\u043F\\u0440\\u043E\\u0438\\u0437\\u0432\\u043E\\u0434\\u0441\\u0442\\u0432\\u0435\\u043D\\u043D\\u044B\\u0439 \\u043F\\u043B\\u0430\\u043D \\u0446\\u0435\\u043B\\u043E\\u0433\\u043E \\u0440\\u044F\\u0434\\u0430 \\u0432\\u043D\\u0435\\u043E\\u0447\\u0435\\u0440\\u0435\\u0434\\u043D\\u044B\\u0445 \\u043C\\u0435\\u0440\\u043E\\u043F\\u0440\\u0438\\u044F\\u0442\\u0438\\u0439 \\u0441 \\u0443\\u0447\\u0451\\u0442\\u043E\\u043C \\u043A\\u043E\\u043C\\u043F\\u043B\\u0435\\u043A\\u0441\\u0430 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043C\\u044B \\u043C\\u0430\\u0441\\u0441\\u043E\\u0432\\u043E\\u0433\\u043E \\u0443\\u0447\\u0430\\u0441\\u0442\\u0438\\u044F. \\u0412\\u043D\\u0435\\u0437\\u0430\\u043F\\u043D\\u043E, \\u0441\\u0434\\u0435\\u043B\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043D\\u0430 \\u0431\\u0430\\u0437\\u0435 \\u0438\\u043D\\u0442\\u0435\\u0440\\u043D\\u0435\\u0442-\\u0430\\u043D\\u0430\\u043B\\u0438\\u0442\\u0438\\u043A\\u0438 \\u0432\\u044B\\u0432\\u043E\\u0434\\u044B \\u043E\\u0441\\u0432\\u0435\\u0449\\u0430\\u044E\\u0442 \\u0447\\u0440\\u0435\\u0437\\u0432\\u044B\\u0447\\u0430\\u0439\\u043D\\u043E \\u0438\\u043D\\u0442\\u0435\\u0440\\u0435\\u0441\\u043D\\u044B\\u0435 \\u043E\\u0441\\u043E\\u0431\\u0435\\u043D\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043A\\u0430\\u0440\\u0442\\u0438\\u043D\\u044B \\u0432 \\u0446\\u0435\\u043B\\u043E\\u043C, \\u043E\\u0434\\u043D\\u0430\\u043A\\u043E \\u043A\\u043E\\u043D\\u043A\\u0440\\u0435\\u0442\\u043D\\u044B\\u0435 \\u0432\\u044B\\u0432\\u043E\\u0434\\u044B, \\u0440\\u0430\\u0437\\u0443\\u043C\\u0435\\u0435\\u0442\\u0441\\u044F, \\u043E\\u043F\\u0438\\u0441\\u0430\\u043D\\u044B \\u043C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u043E \\u043F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u043E.\"),\r\n                react_1.default.createElement(\"p\", null, \"\\u0420\\u0430\\u0437\\u043D\\u043E\\u043E\\u0431\\u0440\\u0430\\u0437\\u043D\\u044B\\u0439 \\u0438 \\u0431\\u043E\\u0433\\u0430\\u0442\\u044B\\u0439 \\u043E\\u043F\\u044B\\u0442 \\u0433\\u043E\\u0432\\u043E\\u0440\\u0438\\u0442 \\u043D\\u0430\\u043C, \\u0447\\u0442\\u043E \\u0432\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0439 \\u043D\\u0430\\u043C\\u0438 \\u0438\\u043D\\u043D\\u043E\\u0432\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u044B\\u0439 \\u043F\\u0443\\u0442\\u044C \\u043E\\u0431\\u0435\\u0441\\u043F\\u0435\\u0447\\u0438\\u0432\\u0430\\u0435\\u0442 \\u0448\\u0438\\u0440\\u043E\\u043A\\u043E\\u043C\\u0443 \\u043A\\u0440\\u0443\\u0433\\u0443 (\\u0441\\u043F\\u0435\\u0446\\u0438\\u0430\\u043B\\u0438\\u0441\\u0442\\u043E\\u0432) \\u0443\\u0447\\u0430\\u0441\\u0442\\u0438\\u0435 \\u0432 \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0438 \\u043D\\u043E\\u0432\\u044B\\u0445 \\u043F\\u0440\\u0438\\u043D\\u0446\\u0438\\u043F\\u043E\\u0432 \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043C\\u0430\\u0442\\u0435\\u0440\\u0438\\u0430\\u043B\\u044C\\u043D\\u043E-\\u0442\\u0435\\u0445\\u043D\\u0438\\u0447\\u0435\\u0441\\u043A\\u043E\\u0439 \\u0438 \\u043A\\u0430\\u0434\\u0440\\u043E\\u0432\\u043E\\u0439 \\u0431\\u0430\\u0437\\u044B. \\u0422\\u0430\\u043A\\u0436\\u0435 \\u043A\\u0430\\u043A \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0430\\u044F \\u0442\\u0435\\u043E\\u0440\\u0438\\u044F \\u0432 \\u0437\\u043D\\u0430\\u0447\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0439 \\u0441\\u0442\\u0435\\u043F\\u0435\\u043D\\u0438 \\u043E\\u0431\\u0443\\u0441\\u043B\\u043E\\u0432\\u043B\\u0438\\u0432\\u0430\\u0435\\u0442 \\u0432\\u0430\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C \\u0431\\u043B\\u0430\\u0433\\u043E\\u043F\\u0440\\u0438\\u044F\\u0442\\u043D\\u044B\\u0445 \\u043F\\u0435\\u0440\\u0441\\u043F\\u0435\\u043A\\u0442\\u0438\\u0432. \\u0414\\u043B\\u044F \\u0441\\u043E\\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u043C\\u0438\\u0440\\u0430 \\u043A\\u043E\\u043D\\u0441\\u0443\\u043B\\u044C\\u0442\\u0430\\u0446\\u0438\\u044F \\u0441 \\u0448\\u0438\\u0440\\u043E\\u043A\\u0438\\u043C \\u0430\\u043A\\u0442\\u0438\\u0432\\u043E\\u043C \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u043E\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u044F\\u0435\\u0442 \\u043A\\u0430\\u0436\\u0434\\u043E\\u0433\\u043E \\u0443\\u0447\\u0430\\u0441\\u0442\\u043D\\u0438\\u043A\\u0430 \\u043A\\u0430\\u043A \\u0441\\u043F\\u043E\\u0441\\u043E\\u0431\\u043D\\u043E\\u0433\\u043E \\u043F\\u0440\\u0438\\u043D\\u0438\\u043C\\u0430\\u0442\\u044C \\u0441\\u043E\\u0431\\u0441\\u0442\\u0432\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u044F \\u043A\\u0430\\u0441\\u0430\\u0435\\u043C\\u043E \\u043F\\u0440\\u0438\\u043E\\u0440\\u0438\\u0442\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0440\\u0430\\u0437\\u0443\\u043C\\u0430 \\u043D\\u0430\\u0434 \\u044D\\u043C\\u043E\\u0446\\u0438\\u044F\\u043C\\u0438!\"))),\r\n        react_1.default.createElement(CommentForm_1.CommentForm, null), (_b = data.length > 0) !== null && _b !== void 0 ? _b : react_1.default.createElement(CommentUsers_1.CommentUsers, null))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ })

})