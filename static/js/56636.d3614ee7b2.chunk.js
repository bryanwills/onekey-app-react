(self.webpackChunkweb=self.webpackChunkweb||[]).push([[56636],{156636:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ImportRecoveryPhrase:()=>ImportRecoveryPhrase,default:()=>l});var n=r(514041),o=r(490343),s=r(498356),u=r(632617),a=r(952954),c=r(730223),i=r(831085);function ImportRecoveryPhrase(){var e=(0,s.A)(),t=(0,n.useCallback)((function(t){e.push(c.ex.BackupDotMap,{encodedText:t,title:""})}),[e]),r=(0,n.useMemo)((function(){return(0,i.jsx)(u.b,{defaultPhrases:[],onConfirm:t,FooterComponent:(0,i.jsx)(a.U,{px:"$5",list:a.y})})}),[t]);return(0,i.jsxs)(o.Page,{scrollEnabled:!0,children:[(0,i.jsx)(o.Page.Header,{title:"Import Recovery Phrase"}),r]})}const l=ImportRecoveryPhrase},632617:(e,t,r)=>{"use strict";r.d(t,{b:()=>PhaseInputArea});var n=r(516238),o=r.n(n),s=r(586330),u=r(573758),a=r.n(u),c=r(324586),i=r(839850),l=r(514041),p=r(416526),f=r(230690),d=r(490343),b=r(310955),g=(r(663522),r(630938)),h=r.n(g),v=r(868557),j=r(701732);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,c.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var useSuggestion=function(e,t=12){var r,{fetchSuggestions:n,suggestions:o,updateSuggestions:u,suggestionsRef:a}=function(){var[e,t]=(0,l.useState)([]),r=(0,l.useRef)(new Map),n=(0,l.useRef)([]),o=(0,l.useCallback)((function(e){n.current=e,t(e)}),[]);return{fetchSuggestions:(0,l.useCallback)((function(e){if(!e)return[];var t=r.current.get(e);if(t)o(t);else{var s=v.filter((function(t){return t.startsWith(e)}));r.current.set(e,h()(s)),o(s)}return n.current}),[o]),suggestionsRef:n,suggestions:e,updateSuggestions:o}}(),[c,i]=(0,l.useState)({}),[p,f]=(0,l.useState)(-1),b=(0,l.useRef)(!1),g=(0,l.useRef)(!1),y=(0,l.useCallback)((function(e,t,r=!1){setTimeout((function(){if(t){if(r&&(!b.current||a.current&&0===a.current?.length))return n=t,void(v.includes(n)?i((function(t){return _objectSpread(_objectSpread({},t),{},{[e]:!1})})):i((function(t){return _objectSpread(_objectSpread({},t),{},{[e]:!0})})));var n;p===e&&a.current&&a.current?.length>0?i((function(t){return _objectSpread(_objectSpread({},t),{},{[e]:!1})})):i((function(t){return _objectSpread(_objectSpread({},t),{},{[e]:!1})}))}else i((function(t){return _objectSpread(_objectSpread({},t),{},{[e]:!1})}))}),0)}),[p,a]),m=(0,l.useCallback)((function(){b.current=!1,u([])}),[u]),x=(0,l.useCallback)((0,s.A)((function*(){yield j.A.runAfterInteractions();var t=`phrase${p+2}`;yield new Promise((function(r){setTimeout((function(){e.setFocus(t),r()}),300)}))})),[e,t,p]),P=(0,l.useCallback)((function(t){var r=`phrase${p+1}`;e.setValue(r,t)}),[e,p]),S=(0,l.useCallback)((function(e){if(g.current)return e;e||m();var t=e.toLowerCase().trim(),r=n(t);return b.current=r.length>0,y(p,t),t}),[y,n,m,p]),w=(0,l.useCallback)((function(t){var r=`phrase${t+1}`;return e.getValues()[r]}),[e]),I=(0,l.useCallback)((r=(0,s.A)((function*(e){g.current=!0,P(e),m(),e&&e.length>0?(yield x(),setTimeout((function(){g.current=!1}),0)):g.current=!1})),function(e){return r.apply(this,arguments)}),[x,m,P]);(0,d.useKeyboardEvent)({keyboardWillHide:function(){setTimeout((function(){u([])}))}});var C,k=(0,l.useCallback)((function(e){f(e)}),[]),O=(0,l.useCallback)((C=(0,s.A)((function*(e){b.current&&e===p||(e===p&&f(-1),b.current=!1,y(p,w(e),!0))})),function(e){return C.apply(this,arguments)}),[y,w,p]),{clearText:$}=(0,d.useClipboard)(),R=(0,l.useCallback)((function(r){var n=r.split(" ");return n.length===t&&(setTimeout((function(){$(),d.Toast.success({title:"Pasted and clipboard cleared"}),e.reset(n.reduce((function(e,t,r){return e[`phrase${r+1}`]=t,e}),{})),m()}),10),!0)}),[$,e,t,m]),A=(0,l.useCallback)((function(){m(),y(p,w(p),!0)}),[y,w,m,p]);return(0,l.useMemo)((function(){return{isShowErrors:c,suggestions:o,onInputFocus:k,onInputBlur:O,onPasteMnemonic:R,suggestionsRef:a,updateInputValue:I,openStatusRef:b,onInputChange:S,selectInputIndex:p,focusNextInput:x,closePopover:A}}),[c,o,k,O,R,a,I,S,p,x,A])},y=r(831085),m=["word","onPress","tabIndex","buttonRef","number"];function PhaseInputArea_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function PhaseInputArea_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?PhaseInputArea_ownKeys(Object(r),!0).forEach((function(t){(0,c.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):PhaseInputArea_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=f.A,P=[{label:"12 words",value:"12"},{label:"15 words",value:"15"},{label:"18 words",value:"18"},{label:"21 words",value:"21"},{label:"24 words",value:"24"}];function WordItem(e){var{word:t,onPress:r,tabIndex:n=-1,buttonRef:o,number:s}=e,u=(0,i.A)(e,m),a=(0,l.useCallback)((function(){r(t)}),[r,t]);return(0,y.jsxs)(d.Stack,{position:"relative",children:[(0,y.jsx)(d.Button,PhaseInputArea_objectSpread(PhaseInputArea_objectSpread({size:"small",ref:o,onPress:a,focusable:!0,tabIndex:n},u),{},{children:t})),(0,y.jsx)(d.Stack,{bg:"$bg",position:"absolute",right:"$px",top:"$0",height:"$4",width:"$4",justifyContent:"center",alignItems:"center",borderRadius:"$full",children:(0,y.jsx)(d.SizableText,{size:"$bodySmMedium",color:"$textSubdued",children:s})})]})}function SuggestionList({suggestions:e,onPressItem:t,firstButtonRef:r,isFocusable:n=!1}){var o=e.slice(0,9).map((function(e,o){return(0,y.jsx)(WordItem,{number:o+1,buttonRef:0===o?r:void 0,tabIndex:n?0:-1,word:e,onPress:t,m:"$1.5",testID:`suggest-${e}`},e)}));return(0,y.jsx)(d.XStack,{flexWrap:"wrap",p:"$1.5",children:o})}function PageFooter({suggestions:e,updateInputValue:t,onConfirm:r}){var n=(0,d.useIsKeyboardShown)();return(0,y.jsxs)(d.Page.Footer,{children:[(0,y.jsx)(d.Page.FooterActions,{onConfirm:r}),n?(0,y.jsx)(SuggestionList,{suggestions:e,onPressItem:t}):null]})}var{height:S}=p.A.get("window");var w=(0,l.forwardRef)((function BasicPhaseInput({index:e,onChange:t,value:r,isShowError:n=!1,onInputChange:o,onInputFocus:s,onInputBlur:u,onPasteMnemonic:a,suggestionsRef:c,updateInputValue:i,selectInputIndex:p,openStatusRef:f,closePopover:b,onReturnKeyPressed:g,getReturnKeyLabel:h,testID:v=""},j){var m,P=(0,l.useRef)(null),S=(0,d.useMedia)(),{getContentOffset:w,pageRef:I}=(0,d.usePage)(),C=(0,l.useRef)(null),[k,O]=(0,l.useState)(!1);(0,l.useImperativeHandle)(j,(function(){return{focus:function(){P.current?.focus()}}}));var $=(0,l.useCallback)((function(){return h(e)}),[h,e]),R=(0,l.useCallback)((function(){s(e)}),[w,e,s,I]),A=(0,l.useCallback)((function(){u(e)}),[e,u]),_=(0,l.useCallback)((function(e){if(a(e))return o(""),void t?.("");var r=e.replaceAll(" ",""),n=o(r);t?.(n)}),[t,o,a]),D=(0,l.useCallback)((function(e){e||(b(),O(!1))}),[b]),T=(0,l.useCallback)((function(e){if(c.current&&e.keyCode>48&&e.keyCode<58){var t=e.keyCode-48;i(c.current[t-1]),e.preventDefault(),e.stopPropagation()}}),[c,i]),K=(0,l.useCallback)((function(e){9===e.keyCode?f.current&&(C.current?.focus(),O(!0),e.preventDefault(),e.stopPropagation()):T(e)}),[T,f]),F=((0,l.useCallback)((function(){g(e)}),[e,g]),p!==e&&r?.length&&!n?"••••":r),B=null!=(m=c.current)?m:[],M=$(),E={value:F,ref:P,keyboardType:"ascii-capable",autoCapitalize:"none",autoCorrect:!1,spellCheck:!1,autoComplete:"off",size:S.md?"large":"medium",leftAddOnProps:{label:`${e+1}`,minWidth:"$10",justifyContent:"center"},error:n,onChangeText:_,onFocus:R,onBlur:A,returnKeyLabel:M.toUpperCase(),returnKeyType:M,autoFocus:0===e};return(0,y.jsx)(d.Popover,{title:"Select Word",placement:"bottom-start",usingSheet:!1,onOpenChange:D,open:!!f.current&&(p===e&&B.length>0),floatingPanelProps:{$md:{px:"$4",width:"100vw",outlineWidth:0,bg:"$transparent",borderWidth:0}},renderContent:(0,y.jsx)(d.Stack,{$md:{bg:"$bg",borderRadius:"$3"},children:(0,y.jsx)(x,{onKeyDown:T,children:(0,y.jsx)(SuggestionList,{firstButtonRef:C,suggestions:B,onPressItem:i,isFocusable:k})})}),renderTrigger:(0,y.jsx)(d.Stack,{children:(0,y.jsx)(d.Input,PhaseInputArea_objectSpread(PhaseInputArea_objectSpread({},E),{},{onKeyPress:K,"data-1p-ignore":!0,testID:v}))})})}));function PhaseInputArea({onConfirm:e,FooterComponent:t,showPhraseLengthSelector:r=!0,showClearAllButton:n=!0,defaultPhrases:u=[]}){var[c,i]=(0,l.useState)(P[0].value),{serviceAccount:p,servicePassword:f}=b.A,g=(0,l.useMemo)((function(){var e={};return a()(0,Number(c))?.forEach((function(t,r){e[`phrase${r+1}`]=u[r]||""})),e}),[u,c]),h=(0,d.useForm)({defaultValues:g}),v=(0,l.useCallback)((0,s.A)((function*(){var t=Object.values(h.getValues()).join(" "),r=yield f.encodeSensitiveText({text:t});yield p.validateMnemonic(r),e(r)})),[h,e,p,f]),{suggestions:j,updateInputValue:m,onInputFocus:x,onInputBlur:S,onInputChange:I,suggestionsRef:C,openStatusRef:k,selectInputIndex:O,closePopover:$,focusNextInput:R,onPasteMnemonic:A,isShowErrors:_}=useSuggestion(h,Number(c)),D=(0,l.useCallback)((function(e){e===Number(c)-1?v():R()}),[R,v,c]);(0,d.useKeyboardEvent)({keyboardWillHide:$});var T=(0,l.useCallback)((function(e){return e===Number(c)-1||o()(Object.values(h.getValues())).length===Number(c)?"done":"next"}),[h,c]),K=(0,l.useCallback)((function(){Object.entries(g).forEach((function([e,t]){h.setValue(e,t)}))}),[g,h]),F=(0,l.useCallback)((function(e){i(e),K()}),[K]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(d.Page.Body,{children:[r||n?(0,y.jsxs)(d.XStack,{px:"$5",pb:"$2",pt:"$2",justifyContent:"space-between",children:[r?(0,y.jsx)(d.Select,{title:"Select a length",placement:"bottom-start",items:P,value:c,onChange:F,renderTrigger:function({value:e}){return(0,y.jsxs)(d.Button,{iconAfter:"ChevronDownSmallOutline",size:"small",variant:"tertiary",testID:"phrase-length",children:[e," words"]})}}):null,n?(0,y.jsx)(d.Button,{icon:"BroomOutline",size:"small",variant:"tertiary",onPress:K,testID:"clear-all",children:"Clear"}):null]}):null,(0,y.jsx)(d.SecureView,{children:(0,y.jsx)(d.Form,{form:h,children:(0,y.jsx)(d.XStack,{px:"$4",flexWrap:"wrap",children:Array.from({length:Number(c)}).map((function(e,t){return(0,y.jsx)(d.Stack,{$md:{flexBasis:"50%"},flexBasis:"33.33%",p:"$1",children:(0,y.jsx)(d.Form.Field,{name:`phrase${t+1}`,children:(0,y.jsx)(w,{index:t,isShowError:_[t],onInputBlur:S,onInputChange:I,onInputFocus:x,onPasteMnemonic:A,suggestionsRef:C,updateInputValue:m,openStatusRef:k,selectInputIndex:O,closePopover:$,onReturnKeyPressed:D,getReturnKeyLabel:T,testID:`phrase-input-index${t}`})})},t)}))})})}),(0,y.jsxs)(d.HeightTransition,{children:[null,null]}),t]}),(0,y.jsx)(PageFooter,{suggestions:j,updateInputValue:m,onConfirm:v})]})}},952954:(e,t,r)=>{"use strict";r.d(t,{U:()=>Tutorials,y:()=>c});var n=r(324586),o=r(839850),s=r(490343),u=r(831085),a=["list"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Tutorials(e){var{list:t}=e,r=(0,o.A)(e,a);return(0,u.jsx)(s.Stack,_objectSpread(_objectSpread({mt:"$10"},r),{},{children:t.map((function({title:e,description:t,iconName:r},n){return(0,u.jsxs)(s.XStack,_objectSpread(_objectSpread({},0!==n&&{mt:"$5"}),{},{children:[r?(0,u.jsx)(s.Stack,{px:"$0.5",mr:"$4",children:(0,u.jsx)(s.Icon,{name:r,flexShrink:0,color:"$iconSubdued",size:"$5"})}):null,(0,u.jsxs)(s.Stack,{flex:1,children:[(0,u.jsx)(s.SizableText,{size:"$bodyMd",children:e}),(0,u.jsx)(s.SizableText,{size:"$bodyMd",mt:"$1",color:"$textSubdued",children:t})]})]}),e)}))}))}var c=[{title:"What is a recovery phrase?",description:"A series of 12, 18, or 24 words to restore your wallet."},{title:"Is it safe to enter it into OneKey?",description:"Yes, it's stored locally and never shared without consent."},{title:"Why can't I type full words?",description:"To prevent keylogger attacks. Use suggested words for security."},{title:"Why can't I paste directly?",description:"To reduce risk of asset loss, avoid pasting sensitive information."}]},259668:(e,t,r)=>{var n=r(284354),o=r(63151);e.exports=function arrayShuffle(e){return o(n(e))}},796902:e=>{var t=Math.ceil,r=Math.max;e.exports=function baseRange(e,n,o,s){for(var u=-1,a=r(t((n-e)/(o||1)),0),c=Array(a);a--;)c[s?a:++u]=e,e+=o;return c}},927154:(e,t,r)=>{var n=r(63151),o=r(39817);e.exports=function baseShuffle(e){return n(o(e))}},803905:(e,t,r)=>{var n=r(965111);e.exports=function baseValues(e,t){return n(t,(function(t){return e[t]}))}},840165:(e,t,r)=>{var n=r(796902),o=r(674535),s=r(743301);e.exports=function createRange(e){return function(t,r,u){return u&&"number"!=typeof u&&o(t,r,u)&&(r=u=void 0),t=s(t),void 0===r?(r=t,t=0):r=s(r),u=void 0===u?t<r?1:-1:s(u),n(t,r,u,e)}}},63151:(e,t,r)=>{var n=r(306484);e.exports=function shuffleSelf(e,t){var r=-1,o=e.length,s=o-1;for(t=void 0===t?o:t;++r<t;){var u=n(r,s),a=e[u];e[u]=e[r],e[r]=a}return e.length=t,e}},516238:e=>{e.exports=function compact(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var s=e[t];s&&(o[n++]=s)}return o}},573758:(e,t,r)=>{var n=r(840165)();e.exports=n},630938:(e,t,r)=>{var n=r(259668),o=r(927154),s=r(153142);e.exports=function shuffle(e){return(s(e)?n:o)(e)}},39817:(e,t,r)=>{var n=r(803905),o=r(781211);e.exports=function values(e){return null==e?[]:n(e,o(e))}}}]);