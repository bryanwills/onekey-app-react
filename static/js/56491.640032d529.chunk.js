"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[56491],{656491:(e,r,n)=>{n.r(r),n.d(r,{default:()=>a});var t=n(514041),i=n(728234),o=n(908867),d=n(17617),c=n(490343),l=n(298254),s=n(831085);const a=function ReceiveInvoice(){(0,o.A)();var e=(0,i.lq)(),{networkId:r,accountId:n,paymentRequest:a,paymentHash:u}=e.params,{account:h,network:b}=(0,l.b)({accountId:n,networkId:r}),{copyText:g}=(0,c.useClipboard)(),x=(0,t.useCallback)((function(){g(a)}),[g,a]),p=(0,t.useCallback)((function(){return h&&b&&a?(0,s.jsxs)(c.YStack,{px:"$5",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(c.Stack,{p:"$4",alignItems:"center",borderWidth:d.A.hairlineWidth,borderColor:"$borderSubdued",borderRadius:"$6",overflow:"hidden",borderCurve:"continuous",children:(0,s.jsx)(c.QRCode,{value:a,logo:{uri:b.logoURI},size:240})}),(0,s.jsx)(c.XStack,{p:"$2",alignItems:"center",justifyContent:"center",children:(0,s.jsx)(c.SizableText,{size:"$headingLg",children:"Invoice"})}),(0,s.jsx)(c.Stack,{alignItems:"center",px:"$5",mb:"$2",children:(0,s.jsx)(c.ConfirmHighlighter,{highlight:!0,my:"$2.5",py:"$1.5",px:"$3",borderWidth:d.A.hairlineWidth,borderColor:"$borderSubdued",borderRadius:"$3",borderCurve:"continuous",children:(0,s.jsx)(c.SizableText,{textAlign:"center",size:"$bodyLg",style:{wordBreak:"break-all"},children:a})})}),(0,s.jsx)(c.Button,{icon:"Copy1Outline",onPress:x,children:"Copy"})]}):null}),[h,x,b,a]);return(0,s.jsxs)(c.Page,{children:[(0,s.jsx)(c.Page.Header,{title:"Lightning Invoice"}),(0,s.jsx)(c.Page.Body,{children:p()})]})}}}]);