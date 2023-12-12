/*! For license information please see components-Checkbox-Checkbox-stories.cf5b6c51.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkthemis_ui=self.webpackChunkthemis_ui||[]).push([[612],{"./node_modules/@ariakit/core/esm/__chunks/HJS6GJT4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CE:()=>omit2,Ld:()=>subscribe,MT:()=>createStore,Ny:()=>throwOnConflictingProps,S1:()=>init,Z_:()=>sync,cY:()=>setup,dC:()=>batch,yt:()=>mergeStore});var _I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");function getInternal(store,key){const internals=store.__unstableInternals;return(0,_I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.kG)(internals,"Invalid store"),internals[key]}function createStore(initialState,...stores){let state=initialState,prevStateBatch=state,lastUpdate=Symbol(),initialized=!1;const updatedKeys=new Set,setups=new Set,listeners=new Set,batchListeners=new Set,disposables=new WeakMap,listenerKeys=new WeakMap,sub=(keys,listener,set=listeners)=>(set.add(listener),listenerKeys.set(listener,keys),()=>{var _a;null==(_a=disposables.get(listener))||_a(),disposables.delete(listener),listenerKeys.delete(listener),set.delete(listener)}),setState=(key,value,fromStores=!1)=>{if(!(0,_I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.nr)(state,key))return;const nextValue=(0,_I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.Ei)(value,state[key]);if(nextValue===state[key])return;fromStores||stores.forEach((store=>{var _a;null==(_a=null==store?void 0:store.setState)||_a.call(store,key,nextValue)}));const prevState=state;state=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__.EZ)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__.ih)({},state),{[key]:nextValue});const thisUpdate=Symbol();lastUpdate=thisUpdate,updatedKeys.add(key);const run=(listener,prev,uKeys)=>{var _a;const keys=listenerKeys.get(listener);keys&&!keys.some((k=>uKeys?uKeys.has(k):k===key))||(null==(_a=disposables.get(listener))||_a(),disposables.set(listener,listener(state,prev)))};listeners.forEach((listener=>{run(listener,prevState)})),queueMicrotask((()=>{if(lastUpdate!==thisUpdate)return;const snapshot=state;batchListeners.forEach((listener=>{run(listener,prevStateBatch,updatedKeys)})),prevStateBatch=snapshot,updatedKeys.clear()}))},finalStore={getState:()=>state,setState,__unstableInternals:{setup:callback=>(setups.add(callback),()=>setups.delete(callback)),init:()=>{if(initialized)return _I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.ZT;if(!stores.length)return _I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.ZT;initialized=!0;const desyncs=(0,_I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.RR)(state).map((key=>(0,_I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.tS)(...stores.map((store=>{var _a;const storeState=null==(_a=null==store?void 0:store.getState)?void 0:_a.call(store);if(storeState&&(0,_I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.nr)(storeState,key))return sync(store,[key],(state2=>setState(key,state2[key],!0)))}))))),teardowns=[];setups.forEach((setup2=>teardowns.push(setup2())));const cleanups=stores.map(init);return(0,_I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.tS)(...desyncs,...teardowns,...cleanups,(()=>{initialized=!1}))},subscribe:(keys,listener)=>sub(keys,listener),sync:(keys,listener)=>(disposables.set(listener,listener(state,state)),sub(keys,listener)),batch:(keys,listener)=>(disposables.set(listener,listener(state,prevStateBatch)),sub(keys,listener,batchListeners)),pick:keys=>createStore((0,_I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.ei)(state,keys),finalStore),omit:keys=>createStore((0,_I2VQ3XGR_js__WEBPACK_IMPORTED_MODULE_0__.CE)(state,keys),finalStore)}};return finalStore}function setup(store,...args){if(store)return getInternal(store,"setup")(...args)}function init(store,...args){if(store)return getInternal(store,"init")(...args)}function subscribe(store,...args){if(store)return getInternal(store,"subscribe")(...args)}function sync(store,...args){if(store)return getInternal(store,"sync")(...args)}function batch(store,...args){if(store)return getInternal(store,"batch")(...args)}function omit2(store,...args){if(store)return getInternal(store,"omit")(...args)}function mergeStore(...stores){return createStore(stores.reduce(((state,store2)=>{var _a;const nextState=null==(_a=null==store2?void 0:store2.getState)?void 0:_a.call(store2);return nextState?(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__.ih)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__.ih)({},state),nextState):state}),{}),...stores)}function throwOnConflictingProps(props,store){}},"./node_modules/@ariakit/react-core/esm/__chunks/XF5ITC6P.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kw:()=>useStoreState,XS:()=>useStoreProps,oR:()=>useStore});var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/HJS6GJT4.js"),use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js"),{useSyncExternalStore}=use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__,noopSubscribe=()=>()=>{};function useStoreState(store,keyOrSelector=_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.yR){const storeSubscribe=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((callback=>store?(0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__.Ld)(store,null,callback):noopSubscribe()),[store]),getSnapshot=()=>{const key="string"==typeof keyOrSelector?keyOrSelector:null,selector="function"==typeof keyOrSelector?keyOrSelector:null,state=null==store?void 0:store.getState();return selector?selector(state):state&&key&&(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.nr)(state,key)?state[key]:void 0};return useSyncExternalStore(storeSubscribe,getSnapshot,getSnapshot)}function useStoreProps(store,props,key,setKey){const value=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.nr)(props,key)?props[key]:void 0,setValue=setKey?props[setKey]:void 0,propsRef=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.cP)({value,setValue}),canSyncValue=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!0);(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.Gw)((()=>(0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__.Z_)(store,[key],((state,prev)=>{const{value:value2,setValue:setValue2}=propsRef.current;setValue2&&state[key]!==prev[key]&&state[key]!==value2&&(canSyncValue.current=!1,setValue2(state[key]))}))),[store,key]),(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.Gw)((()=>{if(void 0!==value)return canSyncValue.current=!0,(0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__.Z_)(store,[key],(()=>{void 0!==value&&canSyncValue.current&&store.setState(key,value)}))}))}function useStore(createStore,props){const[store,setStore]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>createStore(props)));(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.Gw)((()=>(0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__.S1)(store)),[store]);const useState2=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((keyOrSelector=>useStoreState(store,keyOrSelector)),[store]);return[react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__.EZ)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__.ih)({},store),{useState:useState2})),[store,useState2]),(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.zX)((()=>{setStore((store2=>createStore((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__.ih)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__.ih)({},props),store2.getState()))))}))]}},"./src/components/Checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxStory:()=>CheckboxStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _CheckboxStory$parame,_CheckboxStory$parame2,_CheckboxStory$parame3,_Checkbox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Checkbox/Checkbox.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_Checkbox__WEBPACK_IMPORTED_MODULE_0__.X},CheckboxStory={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_0__.X,{name:"terms",label:"I agree to the terms and conditions"})};CheckboxStory.parameters={...CheckboxStory.parameters,docs:{...null===(_CheckboxStory$parame=CheckboxStory.parameters)||void 0===_CheckboxStory$parame?void 0:_CheckboxStory$parame.docs,source:{originalSource:'{\n  render: args => <Checkbox name="terms" label="I agree to the terms and conditions" />\n}',...null===(_CheckboxStory$parame2=CheckboxStory.parameters)||void 0===_CheckboxStory$parame2||null===(_CheckboxStory$parame3=_CheckboxStory$parame2.docs)||void 0===_CheckboxStory$parame3?void 0:_CheckboxStory$parame3.source}}};const __namedExportsOrder=["CheckboxStory"]},"./src/common/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Colors});const Colors={BACKGROUND:"rgba(229, 229, 229, 1)",PRIMARY:"rgba(66, 51, 53, 1)",SECONDARY:"rgba(144, 111, 114, 1)",TERTIARY:"#F2C94C",ERROR:"rgba(163, 22, 22, 1)",SUCCESS:"rgba(44, 110, 47, 1)",LINK:"rgba(7, 94, 157, 1)",WHITE:"rgba(255, 255, 255, 1)"}},"./src/common/fonts.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Fonts});const Fonts={HEADING:"Corben, sans-serif",BODY:"Montserrat, sans-serif"}},"./src/common/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Spacing});const Spacing={XXS:"4px",XS:"8px",S:"12px",M:"16px",L:"24px",XL:"32px",XXL:"40px"}},"./src/components/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox_Checkbox});var taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_3ORBWXWF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),ctx=(0,_3ORBWXWF.re)(),useCheckboxContext=ctx.useContext,CheckboxCheckedContext=(ctx.useScopedContext,ctx.useProviderContext,ctx.ContextProvider,ctx.ScopedContextProvider,(0,react.createContext)(!1)),NWCBQ4CV=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/NWCBQ4CV.js"),XF5ITC6P=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/XF5ITC6P.js"),_6O5OEQGF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),I2VQ3XGR=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function setMixed(element,mixed){mixed?element.indeterminate=!0:element.indeterminate&&(element.indeterminate=!1)}function getPrimitiveValue(value){return Array.isArray(value)?value.toString():value}var useCheckbox=(0,_3ORBWXWF.Bi)((_a=>{var _b=_a,{store,name,value:valueProp,checked:checkedProp,defaultChecked}=_b,props=(0,_4R3V3JGP.S0)(_b,["store","name","value","checked","defaultChecked"]);const context=useCheckboxContext();store=store||context;const[_checked,setChecked]=(0,react.useState)(null!=defaultChecked&&defaultChecked),checked=(0,XF5ITC6P.Kw)(store,(state=>{if(void 0!==checkedProp)return checkedProp;if(void 0===(null==state?void 0:state.value))return _checked;if(null!=valueProp){if(Array.isArray(state.value)){const primitiveValue=getPrimitiveValue(valueProp);return state.value.includes(primitiveValue)}return state.value===valueProp}return!Array.isArray(state.value)&&("boolean"==typeof state.value&&state.value)})),ref=(0,react.useRef)(null),nativeCheckbox=function isNativeCheckbox(tagName,type){return"input"===tagName&&(!type||"checkbox"===type)}((0,_6O5OEQGF.O)(ref,props.as||"input"),props.type),mixed=checked?"mixed"===checked:void 0,isChecked="mixed"!==checked&&checked,disabled=(0,I2VQ3XGR.EE)(props),[propertyUpdated,schedulePropertyUpdate]=(0,_6O5OEQGF.NW)();(0,react.useEffect)((()=>{const element=ref.current;element&&(setMixed(element,mixed),nativeCheckbox||(element.checked=isChecked,void 0!==name&&(element.name=name),void 0!==valueProp&&(element.value=`${valueProp}`)))}),[propertyUpdated,mixed,nativeCheckbox,isChecked,name,valueProp]);const onChangeProp=props.onChange,onChange=(0,_6O5OEQGF.zX)((event=>{if(disabled)return event.stopPropagation(),void event.preventDefault();if(setMixed(event.currentTarget,mixed),nativeCheckbox||(event.currentTarget.checked=!event.currentTarget.checked,schedulePropertyUpdate()),null==onChangeProp||onChangeProp(event),event.defaultPrevented)return;const elementChecked=event.currentTarget.checked;setChecked(elementChecked),null==store||store.setValue((prevValue=>{if(null==valueProp)return elementChecked;const primitiveValue=getPrimitiveValue(valueProp);return Array.isArray(prevValue)?elementChecked?prevValue.includes(primitiveValue)?prevValue:[...prevValue,primitiveValue]:prevValue.filter((v=>v!==primitiveValue)):prevValue!==primitiveValue&&primitiveValue}))})),onClickProp=props.onClick,onClick=(0,_6O5OEQGF.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||nativeCheckbox||onChange(event)}));return props=(0,_6O5OEQGF.OJ)(props,(element=>(0,jsx_runtime.jsx)(CheckboxCheckedContext.Provider,{value:isChecked,children:element})),[isChecked]),props=(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)({role:nativeCheckbox?void 0:"checkbox",type:nativeCheckbox?"checkbox":void 0,"aria-checked":checked},props),{ref:(0,_6O5OEQGF.qq)(ref,props.ref),onChange,onClick}),props=(0,NWCBQ4CV.Y)((0,_4R3V3JGP.ih)({clickOnEnter:!nativeCheckbox},props)),(0,_4R3V3JGP.ih)({name:nativeCheckbox?name:void 0,value:nativeCheckbox?valueProp:void 0,checked:isChecked},props)})),Checkbox=(0,_3ORBWXWF.LM)((props=>{const htmlProps=useCheckbox(props);return(0,_3ORBWXWF.az)("input",htmlProps)}));var _templateObject,_templateObject2,spacing=__webpack_require__("./src/common/spacing.ts"),Label=__webpack_require__("./src/components/Input/Label.tsx");const Checkbox_Checkbox=_ref=>{let{className,label,name}=_ref;const labelStyle=(0,emotion_css_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    margin-bottom: ",";\n    gap: ",";"])),spacing.K.XS,spacing.K.XS),checkboxStyle=(0,emotion_css_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    padding: ",";\n    gap: ",";"])),spacing.K.XS,spacing.K.XS);return(0,jsx_runtime.jsxs)(Label._,{className:(0,emotion_css_esm.cx)(labelStyle,className),children:[(0,jsx_runtime.jsx)(Checkbox,{name,className:checkboxStyle}),label]})};try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label,y:()=>labelStyle});var _templateObject,_Users_jenbo_themis_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js")),_common_spacing__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/spacing.ts"),_common_colors__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/colors.ts"),_common_fonts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/common/fonts.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const labelStyle=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject||(_templateObject=(0,_Users_jenbo_themis_ui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\ndisplay: block;\ncolor: ",";\nfont-family: ",";\nfont-size: 1.25rem;\nfont-weight: 700;\nmargin-bottom: ",";"])),_common_colors__WEBPACK_IMPORTED_MODULE_3__.w.PRIMARY,_common_fonts__WEBPACK_IMPORTED_MODULE_4__.F.BODY,_common_spacing__WEBPACK_IMPORTED_MODULE_2__.K.XS),Label=_ref=>{let{className,children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(labelStyle,className),children})};try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Input/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")}}]);