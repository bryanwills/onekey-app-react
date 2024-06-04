"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[90367],{790367:(e,l,n)=>{n.r(l),n.d(l,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=n(324586),t=n(186207),r=n(514041),i=n(490343),s=n(654004),c=n(831085);function ownKeys(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,a)}return n}function CheckboxDemo(e){var l=Object.assign({},((0,t.A)(e),e)),[n,s]=(0,r.useState)(!1);return(0,c.jsx)(i.Checkbox,function _objectSpread(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?ownKeys(Object(n),!0).forEach((function(l){(0,a.A)(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}({value:n,onChange:function(){s(!n)}},l))}function CheckboxGroupDemo(){var[e,l]=(0,r.useState)([!1,!0,!1]);return(0,c.jsx)(i.Checkbox.Group,{label:"All",listStyle:{},options:[{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"}],value:e,onChange:function(e){l(e)}})}const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,c.jsx)(s.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:(0,c.jsxs)(i.Stack,{children:[(0,c.jsx)(CheckboxDemo,{}),(0,c.jsx)(CheckboxDemo,{label:"With label"}),(0,c.jsx)(CheckboxDemo,{label:"Unchecked and disabled",disabled:!0,value:!1}),(0,c.jsx)(CheckboxDemo,{label:"Checked and disabled",disabled:!0,value:!0})]})},{title:"Checkbox Group",description:"Checkbox Group 中展示的 Checkbox 数量越多，在数据更新时将会越影响性能。通过虚拟列表减少同屏展示的视图数量，可以缓解性能问题。",element:(0,c.jsx)(CheckboxGroupDemo,{})}]})}},654004:(e,l,n)=>{n.d(l,{P:()=>Layout});var a=n(586330),t=n(728234),r=n(490343),i=n(795871),s=n(310955),c=n(498356),o=n(730223),b=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,b.jsx)(r.Stack,{children:(0,b.jsxs)(r.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,b.jsx)(r.Stack,{children:(0,b.jsx)(r.Stack,{space:"$1",children:e.map((function(l,n){return(0,b.jsx)(r.Stack,{children:(0,b.jsxs)(r.SizableText,{children:[n+1,". ",l,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:l=[],boundaryConditions:n=[],elements:d=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:p="never",skipLoading:x=!1,children:u}){var j=(0,i.U6)(),m=(0,c.A)();return(0,b.jsx)(r.Page,{skipLoading:x,children:(0,b.jsx)(r.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:j,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:p,children:(0,b.jsxs)(r.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,b.jsxs)(r.XStack,{children:[(0,b.jsx)(r.IconButton,{icon:"HomeLineOutline",onPress:function(){m.dispatch(t.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,b.jsx)(r.Button,{ml:"$4",onPress:(0,a.A)((function*(){yield s.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,b.jsx)(r.Button,{ml:"$4",variant:"primary",onPress:(0,a.A)((function*(){yield s.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,b.jsxs)(r.Stack,{space:"$2",children:[(0,b.jsx)(r.Stack,{children:(0,b.jsx)(r.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,b.jsx)(r.Stack,{children:(0,b.jsx)(FormattedText,{text:e})})]}):null,l?(0,b.jsxs)(r.Stack,{space:"$2",children:[(0,b.jsx)(r.Stack,{children:(0,b.jsx)(r.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,b.jsx)(FormattedText,{text:l})]}):null,n?.length>0?(0,b.jsxs)(r.Stack,{space:"$2",children:[(0,b.jsx)(r.Stack,{children:(0,b.jsx)(r.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,b.jsx)(FormattedText,{text:n})]}):null,(0,b.jsxs)(r.Stack,{space:"$2",children:[(0,b.jsx)(r.Stack,{children:(0,b.jsx)(r.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,b.jsx)(r.Stack,{children:d?.map((function(e,l){return(0,b.jsxs)(r.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,b.jsxs)(r.Stack,{flexDirection:"column",children:[(0,b.jsx)(r.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,b.jsx)(r.Stack,{paddingTop:1,children:(0,b.jsxs)(r.SizableText,{children:[e.description,"。"]})}):null]}),(0,b.jsx)(r.Stack,{children:"function"==typeof e.element?(0,b.jsx)(e.element,{}):e.element})]},`elements-${l}`)}))}),(0,b.jsx)(r.Stack,{children:u?(0,b.jsx)(r.Stack,{space:"$3",children:u}):null})]})]})})})}}}]);