"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[76748],{576748:(e,n,s)=>{s.r(n),s.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=s(514041),r=s(908867),a=s(490343),i=s(325809),d=s(370968),l=s(714191),c=s(654004),o=s(831085),Demo1=function(){var e=(0,r.A)(),n=(0,a.useForm)({defaultValues:{name:"",address:{raw:"",resolved:void 0}},mode:"onChange",reValidateMode:"onBlur"}),{handleSubmit:s}=n,i=(0,t.useCallback)((function(e){var n;a.Toast.message({title:"Address",message:null!=(n=e.address.resolved)?n:""})}),[]);return(0,o.jsxs)(a.YStack,{children:[(0,o.jsx)(a.Form,{form:n,children:(0,o.jsx)(a.Form.Field,{name:"address",rules:{required:"required",validate:function(n){var s;if(!n.pending&&!n.resolved)return null!=(s=n.validateError?.message)?s:e.formatMessage({id:"form__address_invalid"})}},children:(0,o.jsx)(d.N,{networkId:"evm--1",enableAddressBook:!0,enableWalletName:!0,contacts:!0})})}),(0,o.jsx)(a.Button,{mt:"$4",onPress:function(){return s(i)()},children:"Submit"}),(0,o.jsx)(a.Button,{mt:"$4",onPress:function(){n.setValue("address.raw","0x76f3f64cb3cD19debEE51436dF630a342B736C24")},children:"Set Address Value"})]})},Demo2=function({networkId:e,num:n=0}){var s=(0,r.A)(),c=(0,a.useForm)({defaultValues:{name:"",address:{raw:"0xFFFF",resolved:void 0}},mode:"onChange",reValidateMode:"onBlur"}),{handleSubmit:u}=c,h=(0,t.useCallback)((function(e){var n;a.Toast.message({title:"Address",message:null!=(n=e.address.resolved)?n:""})}),[]);return(0,o.jsxs)(a.YStack,{children:[(0,o.jsx)(a.Form,{form:c,children:(0,o.jsx)(i.b8,{config:{sceneName:l.Zs.addressInput,sceneUrl:""},enabledNum:[n],availableNetworksMap:{[n]:{networkIds:[e],defaultNetworkId:e}},children:(0,o.jsx)(a.Form.Field,{name:"address",rules:{required:"required",validate:function(e){var n;if(!e.pending&&!e.resolved)return null!=(n=e.validateError?.message)?n:s.formatMessage({id:"form__address_invalid"})}},children:(0,o.jsx)(d.N,{networkId:e,enableAddressBook:!0,enableWalletName:!0,contacts:!0,accountSelector:{num:n}})})})}),(0,o.jsx)(a.Button,{mt:"$4",onPress:function(){return u(h)()},children:"Submit"})]})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,o.jsx)(c.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"AddressInput",element:(0,o.jsx)(a.Stack,{space:"$4",children:(0,o.jsx)(Demo1,{})})},{title:"AddressInput With AccountSelector/Contact EVM",element:(0,o.jsx)(a.Stack,{space:"$4",children:(0,o.jsx)(Demo2,{networkId:"evm--1",num:0})})}]})}},654004:(e,n,s)=>{s.d(n,{P:()=>Layout});var t=s(586330),r=s(728234),a=s(490343),i=s(795871),d=s(310955),l=s(498356),c=s(730223),o=s(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,o.jsx)(a.Stack,{children:(0,o.jsxs)(a.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,o.jsx)(a.Stack,{children:(0,o.jsx)(a.Stack,{space:"$1",children:e.map((function(n,s){return(0,o.jsx)(a.Stack,{children:(0,o.jsxs)(a.SizableText,{children:[s+1,". ",n,s===e.length-1?"。":"；"]})},s.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:s=[],elements:u=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:x="never",skipLoading:m=!1,children:j}){var S=(0,i.U6)(),k=(0,l.A)();return(0,o.jsx)(a.Page,{skipLoading:m,children:(0,o.jsx)(a.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:S,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:x,children:(0,o.jsxs)(a.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,o.jsxs)(a.XStack,{children:[(0,o.jsx)(a.IconButton,{icon:"HomeLineOutline",onPress:function(){k.dispatch(r.y9.replace(c.WP.Main,{screen:c.V4.Developer,params:{screen:c.f$.TabDeveloper}}))}}),(0,o.jsx)(a.Button,{ml:"$4",onPress:(0,t.A)((function*(){yield d.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,o.jsx)(a.Button,{ml:"$4",variant:"primary",onPress:(0,t.A)((function*(){yield d.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,o.jsxs)(a.Stack,{space:"$2",children:[(0,o.jsx)(a.Stack,{children:(0,o.jsx)(a.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,o.jsx)(a.Stack,{children:(0,o.jsx)(FormattedText,{text:e})})]}):null,n?(0,o.jsxs)(a.Stack,{space:"$2",children:[(0,o.jsx)(a.Stack,{children:(0,o.jsx)(a.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,o.jsx)(FormattedText,{text:n})]}):null,s?.length>0?(0,o.jsxs)(a.Stack,{space:"$2",children:[(0,o.jsx)(a.Stack,{children:(0,o.jsx)(a.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,o.jsx)(FormattedText,{text:s})]}):null,(0,o.jsxs)(a.Stack,{space:"$2",children:[(0,o.jsx)(a.Stack,{children:(0,o.jsx)(a.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,o.jsx)(a.Stack,{children:u?.map((function(e,n){return(0,o.jsxs)(a.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,o.jsxs)(a.Stack,{flexDirection:"column",children:[(0,o.jsx)(a.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,o.jsx)(a.Stack,{paddingTop:1,children:(0,o.jsxs)(a.SizableText,{children:[e.description,"。"]})}):null]}),(0,o.jsx)(a.Stack,{children:"function"==typeof e.element?(0,o.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,o.jsx)(a.Stack,{children:j?(0,o.jsx)(a.Stack,{space:"$3",children:j}):null})]})]})})})}}}]);