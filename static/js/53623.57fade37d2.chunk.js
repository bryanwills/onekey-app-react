(self.webpackChunkweb=self.webpackChunkweb||[]).push([[53623],{375539:(e,r,t)=>{"use strict";t.d(r,{u:()=>DotMap});var n=t(573758),i=t.n(n),a=t(988126),s=t.n(a),o=t(514041),c=t(17617),d=t(490343),l=t(370156),u=t.n(l),h=t(717288),mnemonicWordToValueData=function(e){var r=h.wordlists.english.indexOf(e);if(r<0)throw new Error("Invalid mnemonic");var t=parseInt(`${r+1}`).toString(2);return u()(t,12,"0").split("").map((function(e){return"1"===e}))},x=t(831085),Dot=function({disabled:e,value:r}){return e?(0,x.jsx)(d.Stack,{width:"$4",height:"$4",backgroundColor:"$bgDisabled"}):(0,x.jsx)(d.Stack,{width:"$4",height:"$4",justifyContent:"center",alignItems:"center",children:r?(0,x.jsx)(d.Stack,{width:"$1.5",height:"$1.5",borderRadius:"$full",backgroundColor:"#299764"}):null})},Dot4Group=function({values:e,disabled:r}){var t=(0,o.useMemo)((function(){return!e||e.length<4?[!1,!1,!1,!1]:e.slice(0,4)}),[e]);return(0,x.jsx)(d.XStack,{borderWidth:c.A.hairlineWidth,borderColor:"$border",separator:(0,x.jsx)(d.Divider,{vertical:!0,backgroundColor:"$border"}),children:t.map((function(e,t){return(0,x.jsx)(Dot,{value:e,disabled:r},t)}))})},DotWord=function({values:e}){var r=s()(e,4);return(0,x.jsxs)(d.XStack,{separator:(0,x.jsx)(d.Stack,{width:"$2",height:"$2"}),children:[(0,x.jsx)(Dot4Group,{values:r?.[0],disabled:0===r.length}),(0,x.jsx)(Dot4Group,{values:r?.[1],disabled:0===r.length}),(0,x.jsx)(Dot4Group,{values:r?.[2],disabled:0===r.length})]})},DotMapRow=function({data:e}){return(0,x.jsxs)(d.XStack,{alignItems:"center",children:[(0,x.jsx)(d.XStack,{width:"$6",justifyContent:"flex-end",children:(0,x.jsx)(d.SizableText,{size:"$bodySm",mr:"$2",color:"$textSubdued",children:e.index})}),(0,x.jsx)(DotWord,{values:e.values})]})},DotMapRowGroup=function({items:e}){return e.map((function(e,r){return(0,x.jsx)(DotMapRow,{data:e},r)}))},DotMapBaseHeader=function(){var e=(0,o.useMemo)((function(){return i()(1,13)}),[]);return(0,x.jsxs)(d.XStack,{alignItems:"flex-end",pb:"$2",children:[(0,x.jsx)(d.XStack,{width:"$6",justifyContent:"flex-end",children:(0,x.jsx)(d.Icon,{name:"OnekeyBrand"})}),(0,x.jsx)(d.XStack,{h:"$10",alignItems:"flex-end",separator:(0,x.jsx)(d.Divider,{vertical:!0,backgroundColor:"$transparent"}),children:e.map((function(e){return(0,x.jsx)(d.XStack,{width:"$4",height:"$10",mr:e%4==0?"$2":void 0,children:(0,x.jsx)(d.Stack,{style:{transform:[{rotate:"-90deg"}]},children:(0,x.jsx)(d.SizableText,{size:"$bodySm",color:"$textSubdued",w:"$10",children:2**(12-e)})})},e)}))})]})},DotMapBase=function({items:e}){var r=s()(e,4);return(0,x.jsx)(d.Stack,{backgroundColor:"$bgSubdued",p:"$4",borderRadius:14,borderWidth:"$1.5",borderColor:"$borderSubdued",children:(0,x.jsxs)(d.YStack,{children:[(0,x.jsx)(DotMapBaseHeader,{}),(0,x.jsx)(d.YStack,{separator:(0,x.jsx)(d.Stack,{width:"$2",height:"$2"}),children:r.map((function(e,r){return(0,x.jsx)(DotMapRowGroup,{items:e},r)}))})]})})},DotMap=function({mnemonic:e}){var{first12:r,last12:t,resp:n}=(0,o.useMemo)((function(){var r=function(e){var r=e.trim().replace(/\s+/g," "),t=h.validateMnemonic(r);if(!t)throw new Error("Invalid mnemonic");var n=r.split(" ");if(!(t=h.validateMnemonic(n.join(" "))))throw new Error("Invalid mnemonic");var i=[];return n.forEach((function(e,r){var t={index:r+1,values:mnemonicWordToValueData(e)};i.push(t)})),i}(e),t=r.slice(0,12),n=r.slice(12);return n.length>0&&(n=Array.from({length:12},(function(e,r){return n[r]||{index:r+13,values:[]}}))),{first12:t,last12:n,resp:r}}),[e]);return(0,x.jsxs)(d.YStack,{separator:(0,x.jsx)(d.Stack,{h:"$4"}),alignItems:"flex-start",children:[(0,x.jsxs)(d.Stack,{children:[(0,x.jsx)(DotMapBase,{items:r}),(0,x.jsx)(d.XStack,{justifyContent:"center",mt:"$1",children:(0,x.jsx)(d.SizableText,{size:"$bodyMd",color:"$textSubdued",children:"Front (#1 - 12)"})})]}),t.length>0?(0,x.jsxs)(d.Stack,{children:[(0,x.jsx)(DotMapBase,{items:t}),(0,x.jsx)(d.XStack,{justifyContent:"center",mt:"$1",children:(0,x.jsxs)(d.SizableText,{size:"$bodyMd",color:"$textSubdued",children:["Back (#13 - #",n.length,")"]})})]}):null]})}},153623:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var n=t(514041),i=t(728234),a=t(490343),s=t(310955),o=t(375539),c=t(498356),d=t(911998),l=t(730223),u=t(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){var e=(0,i.lq)(),{encodedText:r,title:t}=e.params,{result:h}=(0,d.yk)((function(){return s.A.servicePassword.decodeSensitiveText({encodedText:r})}),[r]),x=(0,c.A)(),f=(0,n.useCallback)((function(){return(0,u.jsx)(a.IconButton,{icon:"QuestionmarkOutline",variant:"tertiary",onPress:function(){x.push(l.ex.BackupDocs)}})}),[x]);return(0,u.jsxs)(a.Page,{scrollEnabled:!0,children:[(0,u.jsx)(a.Page.Header,{title:t,headerRight:f}),(0,u.jsx)(a.Page.Body,{children:(0,u.jsx)(a.YStack,{alignItems:"center",children:h?(0,u.jsx)(o.u,{mnemonic:h}):null})}),(0,u.jsx)(a.Page.Footer,{onConfirmText:"I've Saved the Phrase",confirmButtonProps:{variant:"primary",onPress:function(){x.popStack()}}})]})}},796902:e=>{var r=Math.ceil,t=Math.max;e.exports=function baseRange(e,n,i,a){for(var s=-1,o=t(r((n-e)/(i||1)),0),c=Array(o);o--;)c[a?o:++s]=e,e+=i;return c}},840165:(e,r,t)=>{var n=t(796902),i=t(674535),a=t(743301);e.exports=function createRange(e){return function(r,t,s){return s&&"number"!=typeof s&&i(r,t,s)&&(t=s=void 0),r=a(r),void 0===t?(t=r,r=0):t=a(t),s=void 0===s?r<t?1:-1:a(s),n(r,t,s,e)}}},988126:(e,r,t)=>{var n=t(73501),i=t(674535),a=t(667642),s=Math.ceil,o=Math.max;e.exports=function chunk(e,r,t){r=(t?i(e,r,t):void 0===r)?1:o(a(r),0);var c=null==e?0:e.length;if(!c||r<1)return[];for(var d=0,l=0,u=Array(s(c/r));d<c;)u[l++]=n(e,d,d+=r);return u}},573758:(e,r,t)=>{var n=t(840165)();e.exports=n}}]);