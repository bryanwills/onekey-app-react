"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[38334],{638334:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=n(324586),o=n(514041),c=n(490343),a=n(88803),s=n(304695),l=n(771821),i=n(654004),d=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,d.jsx)(i.P,{description:"",suggestions:[""],boundaryConditions:[""],elements:[{title:"Example 1 (Send)",element:function(){var[e,t]=(0,o.useState)("123");return(0,d.jsx)(a.J,{value:e,onChange:t,valueProps:{value:"1.00",onPress:function(){alert("onSwitchPress")},currency:"$"},balanceProps:{value:"0.5",onPress:function(){alert("onBalancePress")}},inputProps:{placeholder:"0"},tokenSelectorTriggerProps:{selectedTokenImageUri:"https://uni.onekey-asset.com/static/chain/btc.png",selectedTokenSymbol:"BTC"},enableMaxAmount:!0,reversible:!0})}},{title:"Example 2 (fallback element)",element:function(){var[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)({selectedTokenImageUri:"https://uni.onekey-asset.com/static/chain/btc.png",selectedTokenSymbol:"BTC"}),[s,l]=(0,o.useState)({balance:"",onPress:function(){alert("onBalancePress")}}),[i,u]=(0,o.useState)({value:"1.00",onPress:function(){alert("onAmountPress")}}),[p,b]=(0,o.useState)(!1),h=(0,o.useCallback)((function(){b(!0),setTimeout((function(){b(!1)}),3e3)}),[]),m=(0,o.useCallback)((function(){r((function(e){return _objectSpread(_objectSpread({},e),{},{loading:!0})})),setTimeout((function(){r((function(e){return _objectSpread(_objectSpread({},e),{},{loading:!1})}))}),3e3)}),[]),j=(0,o.useCallback)((function(){u((function(e){return _objectSpread(_objectSpread({},e),{},{loading:!0})})),setTimeout((function(){u((function(e){return _objectSpread(_objectSpread({},e),{},{value:"131231.123123",loading:!1})}))}),3e3)}),[]),x=(0,o.useCallback)((function(){l((function(e){return _objectSpread(_objectSpread({},e),{},{loading:!0})})),setTimeout((function(){l((function(e){return _objectSpread(_objectSpread({},e),{},{balance:"111111.2222",loading:!1})}))}),3e3)}),[]);return(0,d.jsxs)(c.YStack,{space:"$5",children:[(0,d.jsx)(a.J,{value:e,onChange:t,valueProps:i,balanceProps:s,inputProps:{placeholder:"0",loading:p},tokenSelectorTriggerProps:n,enableMaxAmount:!0,reversible:!0}),(0,d.jsx)(c.Button,{onPress:h,children:"Amount loading"}),(0,d.jsx)(c.Button,{onPress:m,children:"Token loading"}),(0,d.jsx)(c.Button,{onPress:j,children:"Value loading"}),(0,d.jsx)(c.Button,{onPress:x,children:"Balance loading"})]})}},{title:"Example 3 (Swap - Empty)",element:function(){var[e,t]=(0,o.useState)("123");return(0,d.jsx)(a.J,{valueProps:{},value:e,onChange:t,tokenSelectorTriggerProps:{onPress:function(){return alert("TokenSelectorModal")}},inputProps:{placeholder:"0"}})}},{title:"Example 4 (Swap - From Token)",element:(0,d.jsx)(a.J,{inputProps:{placeholder:"0"},valueProps:{},tokenSelectorTriggerProps:{selectedTokenImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdc.png",selectedNetworkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/matic.png",selectedTokenSymbol:"BTC",onPress:function(){return alert("TokenSelectorModal")}},balanceProps:{value:"0.5"},enableMaxAmount:!0})},{title:"Example 5 (Swap - To Token)",element:(0,d.jsx)(a.J,{value:"0.5",valueProps:{},inputProps:{placeholder:"0",readOnly:!0},tokenSelectorTriggerProps:{selectedTokenImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdc.png",selectedNetworkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/matic.png",selectedTokenSymbol:"BTC",onPress:function(){return alert("TokenSelectorModal")}},balanceProps:{value:"0.5"}})},{title:"Example 6 (Error)",element:function(){var e=(0,c.useForm)({defaultValues:{amount:""}});return(0,d.jsx)(c.Form,{form:e,children:(0,d.jsx)(c.Form.Field,{name:"amount",rules:{required:!0},children:(0,d.jsx)(a.J,{valueProps:{},balanceProps:{value:"0.5"}})})})}},{title:"Example 7 (Form)",element:function(){var e=(0,c.useForm)({defaultValues:{amount:""}});return(0,d.jsxs)(c.Stack,{space:"$2",children:[(0,d.jsx)(c.Form,{form:e,children:(0,d.jsx)(c.Form.Field,{name:"amount",children:(0,d.jsx)(a.J,{valueProps:{},balanceProps:{value:"0.5"}})})}),(0,d.jsx)(c.Button,{onPress:function(){alert(JSON.stringify(e.getValues()))},children:"get form values"})]})}},{title:"TokenListItem in TokenSearchModal",element:(0,d.jsxs)(c.Stack,{children:[(0,d.jsxs)(c.Stack,{children:[(0,d.jsxs)(c.XStack,{px:"$5",pt:"$1",pb:"$3",space:"$2",children:[(0,d.jsx)(s.V,{networkName:"All",tooltipContent:"All Networks"}),(0,d.jsx)(s.V,{networkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/eth.png",isSelected:!0,tooltipContent:"Ethereum"}),(0,d.jsx)(s.V,{networkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png",tooltipContent:"Bitcoin"}),(0,d.jsx)(s.V,{networkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/eth.png",tooltipContent:"Ethereum"}),(0,d.jsx)(s.V,{networkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png",tooltipContent:"Bitcoin",disabled:!0}),(0,d.jsx)(s.V,{networkName:"12+",flex:1})]}),(0,d.jsxs)(c.XStack,{px:"$5",py:"$2",children:[(0,d.jsx)(c.SizableText,{size:"$headingSm",pr:"$2",children:"Network:"}),(0,d.jsxs)(c.XStack,{children:[(0,d.jsx)(c.Image,{height:"$5",width:"$5",borderRadius:"$full",children:(0,d.jsx)(c.Image.Source,{source:{uri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/eth.png"}})}),(0,d.jsx)(c.SizableText,{size:"$bodyMd",pl:"$2",children:"Ethereum"})]})]})]}),(0,d.jsx)(c.ListView,{estimatedItemSize:60,data:new Array(10).fill({tokenImageSrc:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdc.png",networkImageSrc:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/matic.png",tokenName:"USD Coin",tokenSymbol:"USDC",tokenContrastAddress:"0x1234...5678",balance:"89.9",value:"$89.75",onPress:function(){return console.log("clicked")}}),renderItem:function({item:e}){return(0,d.jsx)(l.v,_objectSpread({},e))}})]})}]})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var r=n(586330),o=n(728234),c=n(490343),a=n(795871),s=n(310955),l=n(498356),i=n(730223),d=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(c.Stack,{children:(0,d.jsxs)(c.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.Stack,{space:"$1",children:e.map((function(t,n){return(0,d.jsx)(c.Stack,{children:(0,d.jsxs)(c.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:u=[],scrollEnabled:p=!0,contentInsetAdjustmentBehavior:b="never",skipLoading:h=!1,children:m}){var j=(0,a.U6)(),x=(0,l.A)();return(0,d.jsx)(c.Page,{skipLoading:h,children:(0,d.jsx)(c.ScrollView,{maxWidth:"100%",scrollEnabled:p,flex:1,marginBottom:j,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:b,children:(0,d.jsxs)(c.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(c.XStack,{children:[(0,d.jsx)(c.IconButton,{icon:"HomeLineOutline",onPress:function(){x.dispatch(o.y9.replace(i.WP.Main,{screen:i.V4.Developer,params:{screen:i.f$.TabDeveloper}}))}}),(0,d.jsx)(c.Button,{ml:"$4",onPress:(0,r.A)((function*(){yield s.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(c.Button,{ml:"$4",variant:"primary",onPress:(0,r.A)((function*(){yield s.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(c.Stack,{space:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(c.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,t?(0,d.jsxs)(c.Stack,{space:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,d.jsxs)(c.Stack,{space:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,(0,d.jsxs)(c.Stack,{space:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(c.Stack,{children:u?.map((function(e,t){return(0,d.jsxs)(c.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(c.Stack,{flexDirection:"column",children:[(0,d.jsx)(c.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(c.Stack,{paddingTop:1,children:(0,d.jsxs)(c.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(c.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,d.jsx)(c.Stack,{children:m?(0,d.jsx)(c.Stack,{space:"$3",children:m}):null})]})]})})})}}}]);