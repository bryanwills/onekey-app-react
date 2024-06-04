"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[87606],{278484:(e,n,t)=>{t.d(n,{wI:()=>DAppAccountListItem,ZY:()=>DAppAccountListStandAloneItem,X1:()=>DAppAccountListStandAloneItemForHomeScene,VV:()=>WalletConnectAccountTriggerList});var o=t(460986),c=t.n(o),r=t(586330),s=t(514041),u=t(17617),i=t(490343),a=t(310955),l=t(325809),d=t(237532),p=t(24284),A=t(911998),m=t(162616),f=t(226952),h=t(584186),g=t(714191),b=t(82506);var x=t(831085);function DAppAccountListInitFromHome({num:e}){var n=(0,m.z$)();return(0,s.useEffect)((function(){(0,r.A)((function*(){yield h.A.wait(600),yield n.current.syncFromScene({from:{sceneName:g.Zs.home,sceneNum:0},num:e})}))()}),[n,e]),null}function DAppAccountListItem({num:e,handleAccountChanged:n,readonly:t,networkReadonly:o,compressionUiMode:c,initFromHome:r,beforeShowTrigger:a}){!function useHandleDiscoveryAccountChanged({num:e,handleAccountChanged:n}){var{activeAccount:t}=(0,m.LH)({num:e}),{selectedAccount:o}=(0,m.wz)({num:e}),c=(0,b.d)(t,200),r=(0,b.d)(o,200),u=(0,s.useRef)(t),i=(0,s.useRef)(o);(0,s.useEffect)((function(){u.current=t,i.current=o}),[t,o]),(0,s.useEffect)((function(){n&&(c.isOthersWallet&&c.account?.id===r.othersWalletAccountId||c.indexedAccount?.id===r.indexedAccountId)&&n({activeAccount:u.current,selectedAccount:i.current},e)}),[c,r,n,e])}({num:e,handleAccountChanged:n});var p=r&&!t,A=p?800:500;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(i.XGroup,{bg:"$bg",borderRadius:"$3",borderColor:"$borderSubdued",borderWidth:u.A.hairlineWidth,separator:(0,x.jsx)(i.Divider,{vertical:!0}),disabled:t,children:[(0,x.jsx)(i.Group.Item,{children:(0,x.jsx)(l.jY,{num:e,beforeShowTrigger:a,disabled:o||t,loadingDuration:A})}),(0,x.jsx)(i.Group.Item,{children:(0,x.jsx)(d.U,{num:e,compressionUiMode:c,beforeShowTrigger:a,loadingDuration:A})})]}),p?(0,x.jsx)(DAppAccountListInitFromHome,{num:e}):null]})}function DAppAccountListStandAloneItem({readonly:e,handleAccountChanged:n,onConnectedAccountInfoChanged:t}){var{serviceDApp:o,serviceNetwork:u}=a.A,{$sourceInfo:d}=(0,p.A)(),{result:m}=(0,A.yk)((0,r.A)((function*(){var e,n;if(!d?.origin||!d.scope)return{accountSelectorNum:null,networkIds:null};var t=(0,f.zg)(d.scope),c=t?(yield u.getNetworkIdsByImpls({impls:t})).networkIds:null,r=yield o.getConnectedAccountsInfo({origin:d.origin,scope:null!=(e=d.scope)?e:"",isWalletConnectRequest:d.isWalletConnectRequest});return Array.isArray(r)&&r.length>0&&"number"==typeof r[0]?.num?{accountSelectorNum:r[0].num,networkIds:c,existConnectedAccount:!0}:{accountSelectorNum:yield o.getAccountSelectorNum({origin:d.origin,scope:null!=(n=d.scope)?n:"",isWalletConnectRequest:d.isWalletConnectRequest}),networkIds:c,existConnectedAccount:!1}})),[d?.origin,d?.scope,d?.isWalletConnectRequest,o,u]);return(0,s.useEffect)((function(){c()(m?.accountSelectorNum)&&t&&t({num:m.accountSelectorNum,existConnectedAccount:m.existConnectedAccount})}),[m?.accountSelectorNum,m?.existConnectedAccount,t]),(0,x.jsxs)(i.YStack,{space:"$2",testID:"DAppAccountListStandAloneItem",children:[(0,x.jsx)(i.SizableText,{size:"$headingMd",color:"$text",children:"Accounts"}),"number"==typeof m?.accountSelectorNum&&Array.isArray(m?.networkIds)?(0,x.jsx)(l.b8,{config:{sceneName:g.Zs.discover,sceneUrl:d?.origin},enabledNum:[m.accountSelectorNum],availableNetworksMap:{[m.accountSelectorNum]:{networkIds:m.networkIds}},children:(0,x.jsx)(DAppAccountListItem,{initFromHome:!m?.existConnectedAccount,num:m?.accountSelectorNum,handleAccountChanged:n,readonly:e})}):null]})}function DAppAccountListStandAloneItemForHomeScene(){return(0,x.jsxs)(i.YStack,{space:"$2",testID:"DAppAccountListStandAloneItem",children:[(0,x.jsx)(i.SizableText,{size:"$headingMd",color:"$text",children:"Accounts"}),(0,x.jsx)(l.b8,{config:{sceneName:g.Zs.home},enabledNum:[0],children:(0,x.jsx)(DAppAccountListItem,{initFromHome:!1,num:0,readonly:!0})})]})}function WalletConnectAccountTriggerList({sceneUrl:e,sessionAccountsInfo:n,handleAccountChanged:t}){var o=n.map((function(e){return e.accountSelectorNum})),c=n.reduce((function(e,n){var t=n.networkIds.filter(Boolean);return e[n.accountSelectorNum]={networkIds:t,defaultNetworkId:t[0]},e}),{});return(0,x.jsxs)(i.YStack,{space:"$2",children:[(0,x.jsx)(i.SizableText,{size:"$headingMd",color:"$text",children:"Accounts"}),Array.isArray(n)&&n.length?(0,x.jsx)(l.b8,{config:{sceneName:g.Zs.discover,sceneUrl:e},enabledNum:o,availableNetworksMap:c,children:(0,x.jsx)(i.YStack,{space:"$2",children:n.map((function(e){return(0,x.jsx)(i.Stack,{children:(0,x.jsx)(DAppAccountListItem,{initFromHome:!0,num:e.accountSelectorNum,handleAccountChanged:t})},e.accountSelectorNum)}))})}):null]})}},701378:(e,n,t)=>{t.d(n,{_:()=>DAppRequestedPermissionContent,N:()=>DAppSignMessageContent});var o=t(17617),c=t(490343),r=t(831085);function DAppRequestedPermissionContent({requestPermissions:e=["View your balance and activity","Send approval requests"]}){return(0,r.jsxs)(c.YStack,{space:"$2",children:[(0,r.jsx)(c.SizableText,{color:"$text",size:"$headingMd",children:"Requested permissions"}),(0,r.jsx)(c.YStack,{py:"$2.5",px:"$3",space:"$3",minHeight:"$8",bg:"$bg",borderRadius:"$3",borderWidth:o.A.hairlineWidth,borderColor:"$borderSubdued",borderCurve:"continuous",children:e.map((function(e){return(0,r.jsxs)(c.XStack,{space:"$3",children:[(0,r.jsx)(c.Icon,{name:"CheckLargeOutline",color:"$icon",size:"$5"}),(0,r.jsx)(c.SizableText,{color:"$text",size:"$bodyMd",children:e})]},e)}))})]})}function DAppSignMessageContent({content:e}){return(0,r.jsxs)(c.YStack,{justifyContent:"center",children:[(0,r.jsx)(c.SizableText,{color:"$text",size:"$headingMd",mb:"$2",children:"Message"}),(0,r.jsx)(c.TextArea,{value:e,editable:!1,numberOfLines:14})]})}},980342:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(490343),c=t(831085);const r=function DappOpenModalPage({children:e,onClose:n,dappApprove:t}){return(0,c.jsxs)(o.Page,{scrollEnabled:!0,onClose:function(e){e||t.reject(),"function"==typeof n&&n(e)},children:[(0,c.jsx)(o.Page.Header,{headerShown:!1}),e]})}},387606:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var o=t(324586),c=t(586330),r=t(514041),s=t(908867),u=t(490343),i=t(310955),a=t(796895),l=t(24284),d=t(911998),p=t(278484),A=t(701378),m=t(748032),f=t(905710),h=t(980342),g=t(831085);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,o.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const b=function SessionProposalModal(){var e,n,{serviceWalletConnect:t}=i.A,o=(0,s.A)(),{proposal:b,$sourceInfo:x}=(0,l.A)(),j=(0,a.A)({id:null!=(e=x?.id)?e:"",closeWindowAfterResolved:!0}),{origin:S}=new URL(b.params.proposer.metadata.url),v=b.params.proposer.metadata.icons[0],{showContinueOperate:y,continueOperate:I,setContinueOperate:C,riskLevel:w,urlSecurityInfo:k}=(0,f.q)({origin:S}),{result:$}=(0,d.yk)((0,c.A)((function*(){return t.getSessionApprovalAccountInfo(b)})),[t]),[N,D]=(0,r.useState)({}),O=(0,r.useMemo)((function(){return!I}),[I]),L=(0,r.useCallback)((n=(0,c.A)((function*(e){var n=Object.values(N);if(n.length===$?.length){var c=[];for(var r of n){var s,i,a,l,d,p,{activeAccount:A,selectedAccount:m}=r;if(!A.account?.address)return void u.Toast.success({title:`Please select ${null!=(p=A.network?.name)?p:""} account`});var{wallet:f,account:h,network:g,indexedAccount:x}=A,S={networkImpl:null!=(s=g?.impl)?s:"",walletId:null!=(i=f?.id)?i:"",indexedAccountId:null!=(a=x?.id)?a:"",networkId:null!=(l=g?.id)?l:"",accountId:h.id,address:h.address,deriveType:null!=(d=A?.deriveType)?d:"default",focusedWallet:m?.focusedWallet,othersWalletAccountId:m?.othersWalletAccountId};c.push(S)}var v=yield t.buildWalletConnectNamespace({proposal:b,accountsInfo:c});yield j.resolve({close:e,result:{accountsInfo:c,supportedNamespaces:v}}),u.Toast.success({title:o.formatMessage({id:"content__connected"})})}else u.Toast.success({title:"Please select all accounts"})})),function(e){return n.apply(this,arguments)}),[o,j,N,$,t,b]),P=(0,r.useCallback)((function(e,n){var{activeAccount:t,selectedAccount:o}=e;console.log("connectionmodal setActiveAccount: ",t.account?.id,n),"number"==typeof n&&D((function(e){return _objectSpread(_objectSpread({},e),{},{[n]:{activeAccount:t,selectedAccount:o}})}))}),[]);return(0,r.useEffect)((function(){console.log("selectedAccountsMap: ",N)}),[N]),(0,g.jsx)(h.A,{dappApprove:j,children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.Page.Header,{headerShown:!1}),(0,g.jsx)(u.Page.Body,{children:(0,g.jsxs)(m.HJ,{title:"Connection Request",subtitleShown:!1,origin:S,urlSecurityInfo:k,favicon:v,children:[Array.isArray($)?(0,g.jsx)(p.VV,{sceneUrl:S,sessionAccountsInfo:$,handleAccountChanged:P}):null,(0,g.jsx)(A._,{})]})}),(0,g.jsx)(u.Page.Footer,{children:(0,g.jsx)(m.OS,{continueOperate:I,setContinueOperate:function(e){return C(!!e)},onConfirm:L,onCancel:function(){j.reject()},confirmButtonProps:{disabled:O},showContinueOperateCheckbox:y,riskLevel:w})})]})})}}}]);