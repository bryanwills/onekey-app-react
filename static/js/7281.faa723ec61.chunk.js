(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7281],{375539:(e,n,t)=>{"use strict";t.d(n,{u:()=>DotMap});var r=t(573758),i=t.n(r),s=t(988126),a=t.n(s),c=t(514041),l=t(17617),o=t(490343),d=t(370156),u=t.n(d),h=t(717288),mnemonicWordToValueData=function(e){var n=h.wordlists.english.indexOf(e);if(n<0)throw new Error("Invalid mnemonic");var t=parseInt(`${n+1}`).toString(2);return u()(t,12,"0").split("").map((function(e){return"1"===e}))},x=t(831085),Dot=function({disabled:e,value:n}){return e?(0,x.jsx)(o.Stack,{width:"$4",height:"$4",backgroundColor:"$bgDisabled"}):(0,x.jsx)(o.Stack,{width:"$4",height:"$4",justifyContent:"center",alignItems:"center",children:n?(0,x.jsx)(o.Stack,{width:"$1.5",height:"$1.5",borderRadius:"$full",backgroundColor:"#299764"}):null})},Dot4Group=function({values:e,disabled:n}){var t=(0,c.useMemo)((function(){return!e||e.length<4?[!1,!1,!1,!1]:e.slice(0,4)}),[e]);return(0,x.jsx)(o.XStack,{borderWidth:l.A.hairlineWidth,borderColor:"$border",separator:(0,x.jsx)(o.Divider,{vertical:!0,backgroundColor:"$border"}),children:t.map((function(e,t){return(0,x.jsx)(Dot,{value:e,disabled:n},t)}))})},DotWord=function({values:e}){var n=a()(e,4);return(0,x.jsxs)(o.XStack,{separator:(0,x.jsx)(o.Stack,{width:"$2",height:"$2"}),children:[(0,x.jsx)(Dot4Group,{values:n?.[0],disabled:0===n.length}),(0,x.jsx)(Dot4Group,{values:n?.[1],disabled:0===n.length}),(0,x.jsx)(Dot4Group,{values:n?.[2],disabled:0===n.length})]})},DotMapRow=function({data:e}){return(0,x.jsxs)(o.XStack,{alignItems:"center",children:[(0,x.jsx)(o.XStack,{width:"$6",justifyContent:"flex-end",children:(0,x.jsx)(o.SizableText,{size:"$bodySm",mr:"$2",color:"$textSubdued",children:e.index})}),(0,x.jsx)(DotWord,{values:e.values})]})},DotMapRowGroup=function({items:e}){return e.map((function(e,n){return(0,x.jsx)(DotMapRow,{data:e},n)}))},DotMapBaseHeader=function(){var e=(0,c.useMemo)((function(){return i()(1,13)}),[]);return(0,x.jsxs)(o.XStack,{alignItems:"flex-end",pb:"$2",children:[(0,x.jsx)(o.XStack,{width:"$6",justifyContent:"flex-end",children:(0,x.jsx)(o.Icon,{name:"OnekeyBrand"})}),(0,x.jsx)(o.XStack,{h:"$10",alignItems:"flex-end",separator:(0,x.jsx)(o.Divider,{vertical:!0,backgroundColor:"$transparent"}),children:e.map((function(e){return(0,x.jsx)(o.XStack,{width:"$4",height:"$10",mr:e%4==0?"$2":void 0,children:(0,x.jsx)(o.Stack,{style:{transform:[{rotate:"-90deg"}]},children:(0,x.jsx)(o.SizableText,{size:"$bodySm",color:"$textSubdued",w:"$10",children:2**(12-e)})})},e)}))})]})},DotMapBase=function({items:e}){var n=a()(e,4);return(0,x.jsx)(o.Stack,{backgroundColor:"$bgSubdued",p:"$4",borderRadius:14,borderWidth:"$1.5",borderColor:"$borderSubdued",children:(0,x.jsxs)(o.YStack,{children:[(0,x.jsx)(DotMapBaseHeader,{}),(0,x.jsx)(o.YStack,{separator:(0,x.jsx)(o.Stack,{width:"$2",height:"$2"}),children:n.map((function(e,n){return(0,x.jsx)(DotMapRowGroup,{items:e},n)}))})]})})},DotMap=function({mnemonic:e}){var{first12:n,last12:t,resp:r}=(0,c.useMemo)((function(){var n=function(e){var n=e.trim().replace(/\s+/g," "),t=h.validateMnemonic(n);if(!t)throw new Error("Invalid mnemonic");var r=n.split(" ");if(!(t=h.validateMnemonic(r.join(" "))))throw new Error("Invalid mnemonic");var i=[];return r.forEach((function(e,n){var t={index:n+1,values:mnemonicWordToValueData(e)};i.push(t)})),i}(e),t=n.slice(0,12),r=n.slice(12);return r.length>0&&(r=Array.from({length:12},(function(e,n){return r[n]||{index:n+13,values:[]}}))),{first12:t,last12:r,resp:n}}),[e]);return(0,x.jsxs)(o.YStack,{separator:(0,x.jsx)(o.Stack,{h:"$4"}),alignItems:"flex-start",children:[(0,x.jsxs)(o.Stack,{children:[(0,x.jsx)(DotMapBase,{items:n}),(0,x.jsx)(o.XStack,{justifyContent:"center",mt:"$1",children:(0,x.jsx)(o.SizableText,{size:"$bodyMd",color:"$textSubdued",children:"Front (#1 - 12)"})})]}),t.length>0?(0,x.jsxs)(o.Stack,{children:[(0,x.jsx)(DotMapBase,{items:t}),(0,x.jsx)(o.XStack,{justifyContent:"center",mt:"$1",children:(0,x.jsxs)(o.SizableText,{size:"$bodyMd",color:"$textSubdued",children:["Back (#13 - #",r.length,")"]})})]}):null]})}},307281:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(514041),i=t(717288),s=t(490343),a=t(375539),c=t(654004),l=t(831085),DotMapInputDemo=function(){var[e,n]=(0,r.useState)("");return(0,l.jsxs)(s.YStack,{children:[(0,l.jsx)(s.TextArea,{mb:"$8",value:e,onChangeText:function(e){i.validateMnemonic(e)?n(e):s.Toast.error({title:"invalid mnemonic"})}}),(0,l.jsx)(s.XStack,{children:e?(0,l.jsx)(a.u,{mnemonic:e}):null})]})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,l.jsx)(c.P,{description:"",suggestions:[],boundaryConditions:[],elements:[{title:"12 words",element:(0,l.jsx)(s.YStack,{space:"$8",children:(0,l.jsx)(s.XStack,{children:(0,l.jsx)(a.u,{mnemonic:"envelope same ranch valve knee day lock pink old world minor pill"})})})},{title:"18 words",element:(0,l.jsx)(s.YStack,{space:"$8",children:(0,l.jsx)(s.XStack,{children:(0,l.jsx)(a.u,{mnemonic:"until announce path lock crime wish oblige trick face bright digital into chat vehicle episode club verb tank"})})})},{title:"24 words",element:(0,l.jsx)(s.YStack,{space:"$8",children:(0,l.jsx)(s.XStack,{children:(0,l.jsx)(a.u,{mnemonic:"typical record cupboard grid all shield border weapon crisp wolf find enact people search skate enough judge response royal wish enroll salad bomb cruel"})})})},{title:"Input Mnemonic",element:(0,l.jsx)(s.YStack,{space:"$8",children:(0,l.jsx)(DotMapInputDemo,{})})}]})}},654004:(e,n,t)=>{"use strict";t.d(n,{P:()=>Layout});var r=t(586330),i=t(728234),s=t(490343),a=t(795871),c=t(310955),l=t(498356),o=t(730223),d=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(s.Stack,{children:(0,d.jsxs)(s.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.Stack,{space:"$1",children:e.map((function(n,t){return(0,d.jsx)(s.Stack,{children:(0,d.jsxs)(s.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:u=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:x="never",skipLoading:j=!1,children:m}){var S=(0,a.U6)(),k=(0,l.A)();return(0,d.jsx)(s.Page,{skipLoading:j,children:(0,d.jsx)(s.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:S,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:x,children:(0,d.jsxs)(s.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(s.XStack,{children:[(0,d.jsx)(s.IconButton,{icon:"HomeLineOutline",onPress:function(){k.dispatch(i.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,d.jsx)(s.Button,{ml:"$4",onPress:(0,r.A)((function*(){yield c.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(s.Button,{ml:"$4",variant:"primary",onPress:(0,r.A)((function*(){yield c.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(s.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,n?(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(s.Stack,{children:u?.map((function(e,n){return(0,d.jsxs)(s.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(s.Stack,{flexDirection:"column",children:[(0,d.jsx)(s.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(s.Stack,{paddingTop:1,children:(0,d.jsxs)(s.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(s.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,d.jsx)(s.Stack,{children:m?(0,d.jsx)(s.Stack,{space:"$3",children:m}):null})]})]})})})}},796902:e=>{var n=Math.ceil,t=Math.max;e.exports=function baseRange(e,r,i,s){for(var a=-1,c=t(n((r-e)/(i||1)),0),l=Array(c);c--;)l[s?c:++a]=e,e+=i;return l}},840165:(e,n,t)=>{var r=t(796902),i=t(674535),s=t(743301);e.exports=function createRange(e){return function(n,t,a){return a&&"number"!=typeof a&&i(n,t,a)&&(t=a=void 0),n=s(n),void 0===t?(t=n,n=0):t=s(t),a=void 0===a?n<t?1:-1:s(a),r(n,t,a,e)}}},988126:(e,n,t)=>{var r=t(73501),i=t(674535),s=t(667642),a=Math.ceil,c=Math.max;e.exports=function chunk(e,n,t){n=(t?i(e,n,t):void 0===n)?1:c(s(n),0);var l=null==e?0:e.length;if(!l||n<1)return[];for(var o=0,d=0,u=Array(a(l/n));o<l;)u[d++]=r(e,o,o+=n);return u}},573758:(e,n,t)=>{var r=t(840165)();e.exports=r}}]);