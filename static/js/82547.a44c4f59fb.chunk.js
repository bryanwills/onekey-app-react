"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[82547],{82547:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=t(514041),l=t(490343),s=t(654004),c=t(831085),SliderDemo=function(){var[e,n]=(0,i.useState)(0);return(0,c.jsx)(l.Stack,{space:"$2",children:(0,c.jsx)(l.Slider,{value:e,min:1,max:100,step:.01,onChange:function(e){console.log(e),n(e)}})})},SlidingEventDemo=function(){var[e,n]=(0,i.useState)();return(0,c.jsx)(l.Slider,{min:1,max:100,step:1,value:e,onChange:function(e){console.log("onChange",e),n(e)},onSlideStart:function(){console.log("onSlideStart:")},onSlideMove:function(e){console.log("onSlideMove:",e)},onSlideEnd:function(){console.log("onSlideEnd:")}})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,c.jsx)(s.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:(0,c.jsx)(SliderDemo,{})},{title:"Styled",element:(0,c.jsx)(l.Slider,{width:"$60",height:"$10",m:"$8",min:100,max:1e3,step:1,onChange:console.log})},{title:"Disabled",element:(0,c.jsx)(l.Stack,{space:"$2",children:(0,c.jsx)(l.Slider,{disabled:!0,min:1,max:100,value:50,step:1})})},{title:"Listen Sliding event",element:(0,c.jsx)(SlidingEventDemo,{})},{title:"Slider in Dialog",element:(0,c.jsx)(l.Stack,{space:"$2",children:(0,c.jsx)(l.Button,{onPress:function(){l.Dialog.show({renderContent:(0,c.jsx)(l.Stack,{paddingVertical:100,children:(0,c.jsx)(l.Slider,{min:1,max:100,step:1})})})},children:"打开"})})}]})}},654004:(e,n,t)=>{t.d(n,{P:()=>Layout});var i=t(586330),l=t(728234),s=t(490343),c=t(795871),r=t(310955),a=t(498356),o=t(730223),d=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(s.Stack,{children:(0,d.jsxs)(s.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.Stack,{space:"$1",children:e.map((function(n,t){return(0,d.jsx)(s.Stack,{children:(0,d.jsxs)(s.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:x=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:u="never",skipLoading:S=!1,children:j}){var m=(0,c.U6)(),g=(0,a.A)();return(0,d.jsx)(s.Page,{skipLoading:S,children:(0,d.jsx)(s.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:m,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:u,children:(0,d.jsxs)(s.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(s.XStack,{children:[(0,d.jsx)(s.IconButton,{icon:"HomeLineOutline",onPress:function(){g.dispatch(l.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,d.jsx)(s.Button,{ml:"$4",onPress:(0,i.A)((function*(){yield r.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(s.Button,{ml:"$4",variant:"primary",onPress:(0,i.A)((function*(){yield r.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(s.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,n?(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(s.Stack,{children:x?.map((function(e,n){return(0,d.jsxs)(s.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(s.Stack,{flexDirection:"column",children:[(0,d.jsx)(s.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(s.Stack,{paddingTop:1,children:(0,d.jsxs)(s.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(s.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,d.jsx)(s.Stack,{children:j?(0,d.jsx)(s.Stack,{space:"$3",children:j}):null})]})]})})})}}}]);