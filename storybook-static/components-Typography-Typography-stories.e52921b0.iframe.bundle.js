"use strict";(self.webpackChunkthemis_ui=self.webpackChunkthemis_ui||[]).push([[646],{"./src/components/Typography/Typography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TypographyStory:()=>TypographyStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TypographyStory$para,_TypographyStory$para2,_TypographyStory$para3,_Typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Typography/Typography.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_Typography__WEBPACK_IMPORTED_MODULE_0__.Z},TypographyStory={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_0__.Z,{variant:"headingPage",component:"h1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_0__.Z,{variant:"headingSection",component:"h2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_0__.Z,{variant:"headingSubsection",component:"h3",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_0__.Z,{variant:"body",component:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_0__.Z,{variant:"caption",component:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})};TypographyStory.parameters={...TypographyStory.parameters,docs:{...null===(_TypographyStory$para=TypographyStory.parameters)||void 0===_TypographyStory$para?void 0:_TypographyStory$para.docs,source:{originalSource:'{\n  render: () => <>\n      <Typography variant="headingPage" component="h1">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      </Typography>\n      <Typography variant="headingSection" component="h2">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      </Typography>\n      <Typography variant="headingSubsection" component="h3">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      </Typography>\n      <Typography variant="body" component="p">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      </Typography>\n      <Typography variant="caption" component="p">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      </Typography>\n    </>\n}',...null===(_TypographyStory$para2=TypographyStory.parameters)||void 0===_TypographyStory$para2||null===(_TypographyStory$para3=_TypographyStory$para2.docs)||void 0===_TypographyStory$para3?void 0:_TypographyStory$para3.source}}};const __namedExportsOrder=["TypographyStory"]},"./src/common/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Colors});const Colors={BACKGROUND:"rgba(229, 229, 229, 1)",PRIMARY:"rgba(66, 51, 53, 1)",SECONDARY:"rgba(144, 111, 114, 1)",TERTIARY:"#F2C94C",ERROR:"rgba(163, 22, 22, 1)",SUCCESS:"rgba(44, 110, 47, 1)",LINK:"rgba(7, 94, 157, 1)",WHITE:"rgba(255, 255, 255, 1)"}},"./src/common/fonts.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Fonts});const Fonts={HEADING:"Corben, sans-serif",BODY:"Montserrat, sans-serif"}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography});var _templateObject,_Users_jenbo_themis_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_common_colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/colors.ts"),_common_fonts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Typography=_ref=>{let{className,variant,bold,children,component}=_ref;const typeMap={headingPage:{component:"h1",family:_common_fonts__WEBPACK_IMPORTED_MODULE_3__.F.HEADING,size:"4.209rem",weight:700},headingSection:{component:"h2",family:_common_fonts__WEBPACK_IMPORTED_MODULE_3__.F.HEADING,size:"2.802rem",weight:700},headingSubsection:{component:"h3",family:_common_fonts__WEBPACK_IMPORTED_MODULE_3__.F.HEADING,size:"1.868rem",weight:700},caption:{component:"p",family:_common_fonts__WEBPACK_IMPORTED_MODULE_3__.F.BODY,size:"0.625rem",weight:500},body:{component:"p",family:_common_fonts__WEBPACK_IMPORTED_MODULE_3__.F.BODY,size:"1rem",weight:bold?500:400}},type=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>typeMap[variant]),[variant]),TypographyComponent=component||type.component,typographyStyle=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject||(_templateObject=(0,_Users_jenbo_themis_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n    color: ",";\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";"])),_common_colors__WEBPACK_IMPORTED_MODULE_2__.w.PRIMARY,type.family,type.size,type.weight);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TypographyComponent,{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(typographyStyle,className),children})};try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"headingPage"'},{value:'"headingSection"'},{value:'"headingSubsection"'},{value:'"caption"'},{value:'"body"'}]}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}}}]);