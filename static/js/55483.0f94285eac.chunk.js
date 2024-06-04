"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[55483],{455483:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=t(514041),s=t(490343),l=t(654004),r=t(831085),RadioExample=function(){var[e,n]=(0,i.useState)();return(0,r.jsx)(s.Radio,{value:e,onChange:n,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,r.jsx)(l.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:(0,r.jsx)(RadioExample,{})}]})}},654004:(e,n,t)=>{t.d(n,{P:()=>Layout});var i=t(586330),s=t(728234),l=t(490343),r=t(795871),a=t(310955),c=t(498356),d=t(730223),o=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,o.jsx)(l.Stack,{children:(0,o.jsxs)(l.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,o.jsx)(l.Stack,{children:(0,o.jsx)(l.Stack,{space:"$1",children:e.map((function(n,t){return(0,o.jsx)(l.Stack,{children:(0,o.jsxs)(l.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:h=[],scrollEnabled:x=!0,contentInsetAdjustmentBehavior:u="never",skipLoading:j=!1,children:p}){var S=(0,r.U6)(),k=(0,c.A)();return(0,o.jsx)(l.Page,{skipLoading:j,children:(0,o.jsx)(l.ScrollView,{maxWidth:"100%",scrollEnabled:x,flex:1,marginBottom:S,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:u,children:(0,o.jsxs)(l.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,o.jsxs)(l.XStack,{children:[(0,o.jsx)(l.IconButton,{icon:"HomeLineOutline",onPress:function(){k.dispatch(s.y9.replace(d.WP.Main,{screen:d.V4.Developer,params:{screen:d.f$.TabDeveloper}}))}}),(0,o.jsx)(l.Button,{ml:"$4",onPress:(0,i.A)((function*(){yield a.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,o.jsx)(l.Button,{ml:"$4",variant:"primary",onPress:(0,i.A)((function*(){yield a.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,o.jsxs)(l.Stack,{space:"$2",children:[(0,o.jsx)(l.Stack,{children:(0,o.jsx)(l.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,o.jsx)(l.Stack,{children:(0,o.jsx)(FormattedText,{text:e})})]}):null,n?(0,o.jsxs)(l.Stack,{space:"$2",children:[(0,o.jsx)(l.Stack,{children:(0,o.jsx)(l.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,o.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,o.jsxs)(l.Stack,{space:"$2",children:[(0,o.jsx)(l.Stack,{children:(0,o.jsx)(l.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,o.jsx)(FormattedText,{text:t})]}):null,(0,o.jsxs)(l.Stack,{space:"$2",children:[(0,o.jsx)(l.Stack,{children:(0,o.jsx)(l.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,o.jsx)(l.Stack,{children:h?.map((function(e,n){return(0,o.jsxs)(l.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,o.jsxs)(l.Stack,{flexDirection:"column",children:[(0,o.jsx)(l.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,o.jsx)(l.Stack,{paddingTop:1,children:(0,o.jsxs)(l.SizableText,{children:[e.description,"。"]})}):null]}),(0,o.jsx)(l.Stack,{children:"function"==typeof e.element?(0,o.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,o.jsx)(l.Stack,{children:p?(0,o.jsx)(l.Stack,{space:"$3",children:p}):null})]})]})})})}}}]);