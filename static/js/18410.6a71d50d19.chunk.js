"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[18410],{918410:(e,l,n)=>{n.r(l),n.d(l,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var c=n(490343),s=n(654004),i=n(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,i.jsx)(s.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Sizes",element:(0,i.jsxs)(c.Stack,{space:"$4",children:[(0,i.jsx)(c.Input,{size:"small",placeholder:"Placeholder"}),(0,i.jsx)(c.Input,{size:"medium",placeholder:"Placeholder"}),(0,i.jsx)(c.Input,{size:"large",placeholder:"Placeholder"})]})},{title:"Input with icon",element:(0,i.jsxs)(c.Stack,{space:"$4",children:[(0,i.jsx)(c.Input,{size:"small",placeholder:"Placeholder",leftIconName:"SearchOutline"}),(0,i.jsx)(c.Input,{size:"medium",placeholder:"Placeholder",leftIconName:"SearchOutline"}),(0,i.jsx)(c.Input,{size:"large",placeholder:"Placeholder",leftIconName:"SearchOutline"})]})},{title:"Input with actions",element:(0,i.jsxs)(c.Stack,{space:"$4",children:[(0,i.jsx)(c.Input,{size:"small",placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){console.log("clicked")}},{iconName:"TouchIdOutline",onPress:function(){console.log("clicked")}}]}),(0,i.jsx)(c.Input,{size:"medium",placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){console.log("clicked")}},{iconName:"TouchIdOutline",onPress:function(){console.log("clicked")}}]}),(0,i.jsx)(c.Input,{size:"large",disabled:!0,placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){console.log("clicked")},loading:!0}]}),(0,i.jsx)(c.Input,{size:"large",readonly:!0,placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){console.log("clicked")},loading:!0}]}),(0,i.jsx)(c.Input,{size:"large",placeholder:"Placeholder",addOns:[{iconName:"EyeOutline",onPress:function(){console.log("clicked")}},{iconName:"ArrowRightOutline",onPress:function(){console.log("clicked")}}]}),(0,i.jsx)(c.Input,{size:"small",placeholder:"Placeholder",addOns:[{label:"Paste",onPress:function(){console.log("clicked")}}]}),(0,i.jsx)(c.Input,{size:"medium",placeholder:"Placeholder",addOns:[{label:"Paste",onPress:function(){console.log("clicked")}}]}),(0,i.jsx)(c.Input,{size:"large",placeholder:"Placeholder",addOns:[{label:"Paste",onPress:function(){console.log("clicked")}}]})]})},{title:"States",element:(0,i.jsxs)(c.Stack,{space:"$4",children:[(0,i.jsx)(c.Input,{size:"medium",value:"Disabled",disabled:!0,placeholder:"Placeholder",leftIconName:"SearchOutline",addOns:[{iconName:"XCircleOutline",onPress:function(){console.log("clicked")}}]}),(0,i.jsx)(c.Input,{size:"medium",value:"Readonly",editable:!1,placeholder:"Placeholder",leftIconName:"SearchOutline",addOns:[{iconName:"XCircleOutline",onPress:function(){console.log("clicked")}}]}),(0,i.jsx)(c.Input,{size:"medium",value:"Error",error:!0,placeholder:"Placeholder",leftIconName:"SearchOutline",addOns:[{iconName:"XCircleOutline",onPress:function(){console.log("clicked")}}]})]})}]})}},654004:(e,l,n)=>{n.d(l,{P:()=>Layout});var c=n(586330),s=n(728234),i=n(490343),t=n(795871),o=n(310955),a=n(498356),r=n(730223),d=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(i.Stack,{children:(0,d.jsxs)(i.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.Stack,{space:"$1",children:e.map((function(l,n){return(0,d.jsx)(i.Stack,{children:(0,d.jsxs)(i.SizableText,{children:[n+1,". ",l,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:l=[],boundaryConditions:n=[],elements:h=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:x="never",skipLoading:p=!1,children:m}){var j=(0,t.U6)(),g=(0,a.A)();return(0,d.jsx)(i.Page,{skipLoading:p,children:(0,d.jsx)(i.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:j,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:x,children:(0,d.jsxs)(i.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(i.XStack,{children:[(0,d.jsx)(i.IconButton,{icon:"HomeLineOutline",onPress:function(){g.dispatch(s.y9.replace(r.WP.Main,{screen:r.V4.Developer,params:{screen:r.f$.TabDeveloper}}))}}),(0,d.jsx)(i.Button,{ml:"$4",onPress:(0,c.A)((function*(){yield o.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(i.Button,{ml:"$4",variant:"primary",onPress:(0,c.A)((function*(){yield o.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(i.Stack,{space:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(i.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,l?(0,d.jsxs)(i.Stack,{space:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:l})]}):null,n?.length>0?(0,d.jsxs)(i.Stack,{space:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,(0,d.jsxs)(i.Stack,{space:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(i.Stack,{children:h?.map((function(e,l){return(0,d.jsxs)(i.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(i.Stack,{flexDirection:"column",children:[(0,d.jsx)(i.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(i.Stack,{paddingTop:1,children:(0,d.jsxs)(i.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(i.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${l}`)}))}),(0,d.jsx)(i.Stack,{children:m?(0,d.jsx)(i.Stack,{space:"$3",children:m}):null})]})]})})})}}}]);