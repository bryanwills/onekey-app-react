"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[71558],{593827:(e,t,n)=>{n.d(t,{L:()=>WalletAvatar});var r=n(503668),o=n.n(r),i=n(490343),l=n(491180),a=n(258988),c=n(831085);function WalletAvatarBase({size:e,img:t,wallet:n}){var r,o,s=t||n?.avatarInfo?.img;return s?l.A.isHwHiddenWallet({wallet:n})?(0,c.jsx)(i.Icon,{size:"$10",name:"LockSolid",color:"$iconSubdued"}):(0,c.jsxs)(i.Image,{size:e,children:[(0,c.jsx)(i.Image.Source,{source:null!=(r=a.UO[s])?r:a.UO.bear}),(0,c.jsx)(i.Image.Fallback,{delayMs:300,justifyContent:"center",alignItems:"center",children:(0,c.jsx)(i.SizableText,{children:null!=(o=n?.avatarInfo?.emoji)?o:""})})]}):null}function WalletAvatar({size:e="$10",status:t,badge:n,img:r,wallet:l}){return(0,c.jsxs)(i.Stack,{w:e,h:e,justifyContent:"center",alignItems:"center",children:[(0,c.jsx)(WalletAvatarBase,{size:e,img:r,wallet:l}),"connected"===t?(0,c.jsx)(i.Stack,{position:"absolute",bottom:-2,right:-2,bg:"$bgSidebar",p:"$0.5",borderRadius:"$full",zIndex:"$1",children:(0,c.jsx)(i.Stack,{borderRadius:"$full",w:"$2.5",h:"$2.5",bg:"$bgSuccessStrong"})}):null,o()(n)?null:(0,c.jsx)(i.Stack,{position:"absolute",bottom:-3,right:0,bg:"$bgSubdued",w:"$3.5",h:"$3.5",alignItems:"center",justifyContent:"center",borderRadius:"$full",zIndex:"$1",children:(0,c.jsx)(i.SizableText,{size:"$bodySmMedium",textAlign:"center",children:n})})]})}},390334:(e,t,n)=>{n.d(t,{P:()=>useHelpLink});var r=n(726130),o=n(886738),i=n(12730);function normalizePath(e){return e?e.replace(/^\/|\/$/g,""):""}function useHelpLink({path:e=""}){var t=(0,i.z)(),n=(0,o.L)(),l=("system"===n?t:n).replace(/_/g,"-").toLowerCase(),a=normalizePath(e);return normalizePath(`${r.mE}/${l}/${a}`)}},771558:(e,t,n)=>{n.r(t),n.d(t,{AccountSelectorStack:()=>AccountSelectorStack,default:()=>AccountSelectorStackPage});var r=n(490343),o=n(325809),i=n(324586),l=n(586330),a=n(514041),c=n(310955),s=n(287121),u=n(525603),d=n(791088),f=n(498356),p=n(911998),b=n(162616),m=n(491180),A=n(831085);function AccountRemoveDialog({indexedAccount:e,account:t}){var n,o=(0,b.z$)(),[i,c]=(0,a.useState)(!1);return(0,A.jsx)(r.Dialog.Footer,{confirmButtonProps:{variant:"destructive",loading:i},onConfirm:(n=(0,l.A)((function*({close:n}){try{c(!0),yield o.current.removeAccount({indexedAccount:e,account:t})}finally{c(!1),yield n()}})),function(e){return n.apply(this,arguments)})})}function AccountRemoveButton({name:e,indexedAccount:t,account:n,onClose:i}){var{config:c}=(0,b.H9)(),s=(0,a.useMemo)((function(){if(t)return'You can restore this account later in this wallet by using "Add Account" or "Bulk Add Accounts".';if(n){var e=m.A.getWalletIdFromAccountId({accountId:n.id});if(e&&m.A.isImportedWallet({walletId:e}))return"You can restore the account using its private key after removal. Ensure it's backed up to avoid permanent loss of access."}return"This account will be removed."}),[n,t]);return(0,A.jsx)(r.ActionList.Item,{icon:"DeleteOutline",label:"Remove",destructive:!0,onClose:i,onPress:(0,l.A)((function*(){!function showAccountRemoveDialog({title:e,description:t,config:n,indexedAccount:i,account:l}){return r.Dialog.show({icon:"ErrorOutline",tone:"destructive",title:e,description:t,renderContent:n?(0,A.jsx)(o.b8,{enabledNum:[0],config:n,children:(0,A.jsx)(AccountRemoveDialog,{account:l,indexedAccount:i})}):null})}({config:c,title:`Remove ${e}`,description:s,account:n,indexedAccount:t})}))})}var h=n(839850),w=["onSubmit","maxLength"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var showRenameDialog=function(e,t){var n,{onSubmit:o,maxLength:a=24}=t,c=(0,h.A)(t,w);return r.Dialog.show(function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:"Rename",renderContent:(0,A.jsx)(r.Dialog.Form,{formProps:{values:{name:e}},children:(0,A.jsx)(r.Dialog.FormField,{name:"name",rules:{required:{value:!0,message:"Name is required."}},children:(0,A.jsx)(r.Input,{size:"large",$gtMd:{size:"medium"},maxLength:a,autoFocus:!0})})}),onConfirm:(n=(0,l.A)((function*({getForm:e,close:t}){var n=e();try{yield o(n?.getValues().name),yield t(),r.Toast.success({title:"Change Saved"})}catch(e){throw r.Toast.error({title:`Change Failed via ${e.message}`}),e}})),function onConfirm(e){return n.apply(this,arguments)})},c))};function AccountRenameButton({name:e,indexedAccount:t,account:n,onClose:o}){var{serviceAccount:i}=c.A;return(0,A.jsx)(r.ActionList.Item,{icon:"PencilOutline",label:"Rename",onClose:o,onPress:(0,l.A)((function*(){var r;showRenameDialog(e,{onSubmit:(r=(0,l.A)((function*(e){t?.id&&e?yield i.setAccountName({indexedAccountId:t?.id,name:e}):n?.id&&e&&(yield i.setAccountName({accountId:n.id,name:e}))})),function onSubmit(e){return r.apply(this,arguments)})})}))})}function AccountEditButton({indexedAccount:e,account:t}){var n=e?.name||t?.name||"--",{config:i}=(0,b.H9)();return i?(0,A.jsx)(r.ActionList,{title:n,renderTrigger:(0,A.jsx)(d.c.IconButton,{icon:"DotHorOutline"}),renderItems:function({handleActionListClose:r}){return(0,A.jsxs)(o.b8,{enabledNum:[0],config:i,children:[(0,A.jsx)(AccountRenameButton,{name:n,indexedAccount:e,account:t,onClose:r}),(0,A.jsx)(AccountRemoveButton,{name:n,indexedAccount:e,account:t,onClose:r})]})}}):null}var v=Object.freeze([]),y=(Object.freeze({}),n(181447)),g=n(318822),j=n(730223),S=n(728234);function useAccountSelectorRoute(){return(0,S.lq)()}var x=n(17617);function WalletRemoveDialog({defaultValue:e,wallet:t,showCheckBox:n}){var[o,i]=(0,a.useState)(e),c=(0,a.useCallback)((function(e){i(!!e)}),[]),s=(0,b.z$)();return(0,A.jsxs)(A.Fragment,{children:[n?(0,A.jsx)(r.Checkbox,{value:o,onChange:c,label:"I've written down the recovery phrase"}):null,(0,A.jsx)(r.Dialog.Footer,{onConfirmText:"Remove",confirmButtonProps:{disabled:n&&!o,variant:"destructive"},onConfirm:(0,l.A)((function*(){yield s.current.removeWallet({walletId:t?.id||""})}))})]})}function WalletRemoveButton({wallet:e}){var{title:t,description:n}=function getTitleAndDescription({wallet:e}){return"hw"===e?.type?m.A.isHwHiddenWallet({wallet:e})?{title:"Remove Device",description:"This will permanently delete your data. Ensure you have saved the passphrase of this hidden wallet"}:{title:"Remove Device",description:"This will permanently delete your data. But you still can restore it from the hardware wallet which is loaded the recovery phrase of this wallet."}:{title:"Remove Wallet",description:"Make sure you’ve written down the recovery phrase before removing the wallet. Otherwise, you won’t be able to recover the wallet."}}({wallet:e}),{config:i}=(0,b.H9)();return(0,A.jsx)(r.IconButton,{title:"Remove",icon:"DeleteOutline",variant:"tertiary",onPress:function(){!function showWalletRemoveDialog({title:e,description:t,defaultChecked:n,wallet:i,config:l,showCheckBox:a}){return r.Dialog.show({icon:"ErrorOutline",tone:"destructive",title:e,description:t,renderContent:l?(0,A.jsx)(o.b8,{enabledNum:[0],config:l,children:(0,A.jsx)(WalletRemoveDialog,{wallet:i,defaultValue:n,showCheckBox:a})}):null})}({config:i,title:t,description:n,showCheckBox:"hw"!==e?.type,defaultChecked:!1,wallet:e})}})}var O=n(284908);function DescriptionList({label:e,description:t}){return(0,A.jsxs)(r.XStack,{justifyContent:"space-between",alignItems:"center",minHeight:"$9",children:[(0,A.jsx)(r.SizableText,{textAlign:"right",color:"$textSubdued",size:"$bodyMd",children:e}),(0,A.jsx)(r.SizableText,{size:"$bodyMdMedium",children:t})]})}function AboutDevice({device:e}){var{result:t=[]}=(0,p.yk)((0,l.A)((function*(){var t=e?.featuresInfo;if(!t)return[];var{bleVersion:n,firmwareVersion:r,bootloaderVersion:o}=yield O.A.getDeviceVersion({device:e,features:e.featuresInfo});return[{label:"Serial Number",description:e.uuid||"--"},{label:"Bluetooth Name",description:t.ble_name||"--"},{label:"Firmware Version",description:r||"--"},{label:"Bluetooth Firmware Version",description:n||"--"},{label:"Bootloader Version",description:o||"--"}]})),[e]);return(0,A.jsx)(r.IconButton,{title:"About",icon:"InfoCircleOutline",variant:"tertiary",onPress:function(){return r.Dialog.show({title:"About",showFooter:!1,renderContent:(0,A.jsx)(A.Fragment,{children:t.map((function(e){return(0,A.jsx)(DescriptionList,{label:e.label,description:e.description},e.label)}))})})}})}var P=["wallet","device","editable","editMode","onEditButtonPress"];function WalletDetailsHeader_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function WalletDetailsHeader_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?WalletDetailsHeader_ownKeys(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WalletDetailsHeader_ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function WalletDetailsHeader(e){var{wallet:t,device:n,editable:o,editMode:i,onEditButtonPress:l}=e,a=(0,h.A)(e,P),c=m.A.isHwWallet({walletId:t?.id})&&!m.A.isHwHiddenWallet({wallet:t}),s=!!t?.id&&!m.A.isOthersWallet({walletId:t?.id});return(0,A.jsxs)(d.c,WalletDetailsHeader_objectSpread(WalletDetailsHeader_objectSpread({mt:"$1.5",justifyContent:"flex-end"},a),{},{children:[i&&o?(0,A.jsxs)(r.XStack,{pr:"$5",mr:"$2",space:"$5",borderRightWidth:x.A.hairlineWidth,borderRightColor:"$borderSubdued",children:[c?(0,A.jsx)(AboutDevice,{device:n}):null,s?(0,A.jsx)(WalletRemoveButton,{wallet:t}):null]}):null,o?(0,A.jsx)(r.Button,{testID:"AccountSelectorModal-EditButton",variant:"tertiary",onPress:l,children:i?"Done":"Edit"}):null]}))}var I=n(908867),W=n(554902),k=["label","description","icon","iconColor","isLoading","children","drillIn"];function WalletOptionItem_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function WalletOptionItem_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?WalletOptionItem_ownKeys(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WalletOptionItem_ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function WalletOptionItem(e){var{label:t,description:n,icon:o,iconColor:i="$iconSubdued",isLoading:l,children:a,drillIn:c}=e,s=(0,h.A)(e,k);return(0,A.jsxs)(d.c,WalletOptionItem_objectSpread(WalletOptionItem_objectSpread({userSelect:"none"},s),{},{children:[o?(0,A.jsx)(r.Stack,{px:"$2",children:(0,A.jsx)(r.Icon,{name:o,color:i})}):null,(0,A.jsx)(d.c.Text,{primary:t,secondary:n,flex:1}),a,l?(0,A.jsx)(r.Spinner,{}):null]}))}function HiddenWalletAddButton({wallet:e}){var t=(0,b.z$)();return e&&m.A.isHwWallet({walletId:e.id})&&!m.A.isHwHiddenWallet({wallet:e})?(0,A.jsx)(WalletOptionItem,{icon:"LockOutline",label:"Add Hidden Wallet",onPress:(0,l.A)((function*(){yield t.current.createHWHiddenWallet({walletId:e?.id})}))}):null}var C=n(609476),$=n(663522),D=n(15159);function Advance_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Advance_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Advance_ownKeys(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Advance_ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function EnterPinOnSoftwareSwitch(e){var t,{defaultValue:n}=e,[o,i]=(0,a.useState)(n);return(0,A.jsx)(r.Switch,{size:r.ESwitchSize.small,value:o,onChange:(t=(0,l.A)((function*(t){try{i(t),yield c.A.serviceHardware.setInputPinOnSoftware({walletId:e?.wallet?.id||"",inputPinOnSoftware:t})}catch(e){console.error(e),i(!t)}})),function(e){return t.apply(this,arguments)})})}function EnablePassphraseSwitch(e){var t,{defaultValue:n}=e,[o,i]=(0,a.useState)(n);return(0,A.jsx)(r.Switch,{size:r.ESwitchSize.small,value:o,onChange:(t=(0,l.A)((function*(t){try{i(t),yield c.A.serviceHardware.setPassphraseEnabled({walletId:e?.wallet?.id||"",passphraseEnabled:t})}catch(e){console.error(e),i(!t)}})),function(e){return t.apply(this,arguments)})})}function AdvanceDialogContent(e){var{onFail:t}=e,{result:n}=(0,p.yk)((0,l.A)((function*(){try{return yield c.A.serviceHardware.getDeviceAdvanceSettings({walletId:e?.wallet?.id||""})}catch(e){throw t?.(e),e}})),[t,e?.wallet?.id]);return n?(0,A.jsxs)(r.Stack,{mx:"$-5",children:[n.inputPinOnSoftwareSupport?(0,A.jsx)(d.c,{title:"Enter Pin on App",pt:"$0",children:(0,A.jsx)(EnterPinOnSoftwareSwitch,Advance_objectSpread(Advance_objectSpread({},e),{},{defaultValue:n.inputPinOnSoftware}))}):null,(0,A.jsx)(d.c,{title:"Passphrase",children:(0,A.jsx)(EnablePassphraseSwitch,Advance_objectSpread(Advance_objectSpread({},e),{},{defaultValue:n.passphraseEnabled}))}),(0,A.jsx)(r.SizableText,{px:"$5",size:"$bodyMd",children:"Passphrase adds a custom phrase to your recovery phrase to create a hidden wallet. Each hidden wallet has its passphrase. Do not forget it, as it can't be retrieved & funds will be lost permanently."})]}):(0,A.jsx)(r.Stack,{borderRadius:"$3",p:"$5",bg:"$bgSubdued",borderCurve:"continuous",children:(0,A.jsx)(r.Spinner,{size:"large"})})}function Advance(e){return(0,A.jsx)(WalletOptionItem,{icon:"SwitchOutline",label:"Advance",onPress:function(){var t=r.Dialog.show({title:"Advance",renderContent:(0,A.jsx)(AdvanceDialogContent,Advance_objectSpread(Advance_objectSpread({},e),{},{onFail:function(){t.close()}})),showFooter:!1})}})}function HiddenWalletRememberSwitch({wallet:e}){var[t,n]=(0,a.useState)(!e?.isTemp);return(0,A.jsx)(WalletOptionItem,{label:"Keep Accessible",description:"Hidden wallets clear on app close. Toggle to preserve.",drillIn:!1,children:(0,A.jsx)(r.Switch,{size:r.ESwitchSize.small,value:t,onChange:(0,l.A)((function*(){if(e?.id){var r=!t;try{yield c.A.serviceAccount.setWalletTempStatus({walletId:e?.id,isTemp:!r}),n(r)}catch(e){throw n(t),e}}}))})})}var H=new Array(53).fill(0);function HomeScreen(){var[e,t]=(0,a.useState)(-1);return(0,A.jsx)(WalletOptionItem,{icon:"AiImagesOutline",label:"Homescreen",onPress:function(){r.Dialog.show({title:"Homescreen",renderContent:(0,A.jsx)(r.ScrollView,{mx:"$-5",maxHeight:"$96",children:(0,A.jsx)(r.XStack,{flexWrap:"wrap",px:"$4",my:"$-1",children:H.map((function(n,o){return(0,A.jsxs)(r.XStack,{flexBasis:"25%",p:"$1",hoverStyle:{opacity:.7},pressStyle:{opacity:.5},onPress:function(){t(o)},children:[(0,A.jsx)(r.Image,{flex:1,w:"$full",source:{width:96,height:48,uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAYAAADS1n9/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD6SURBVHgB7dpBCsJAFAXBP+L9rxwRVwmIhKxMda1dto8hM2tmtgnrMaEVAK4AcAWAKwBcAeAKAFcAuALAFQCuAHAFgCsA3HNQ27a/BF1rjagFwDELcPzH56MFwBUArgBwzBngeMrvTPDRAuAKAFcAuALAFQCuAHAFgCsAXAHg3p/H+iQGawFw3IugX3cA2sugFgDHnAHO3v4pS9AC4G6/AGdf/2qvhVsA3G0X4Oo/WVmCFgBXALgCwBUArgBwBYArAFxfAi/+/t+1ALhuA7/oNjAE7k1gL4L2WgBcr4JxLQCuAHAFgCsAXAHgCgBXALgCwBUArgBwBYB7AWZ7MHQzZwsrAAAAAElFTkSuQmCC"}}),(0,A.jsx)(r.AnimatePresence,{children:e===o?(0,A.jsx)(r.Icon,{position:"absolute",right:"$1.5",bottom:"$1.5",size:"$5",name:"CheckRadioSolid",color:(0,r.getThemeTokens)().color.$iconInverseLight.val,animation:"quick",enterStyle:{opacity:0,scale:0},exitStyle:{opacity:0,scale:0}}):null})]},o)}))})})})}})}var L=n(282029);function Verification({device:e}){var{iconColor:t,iconName:n}=e?.verifiedAtVersion?{iconName:"BadgeVerifiedSolid",iconColor:"$iconSuccess"}:""===e?.verifiedAtVersion?{iconName:"ErrorSolid",iconColor:"$iconCritical"}:{iconName:"DocumentSearch2Outline",iconColor:"$iconSubdued"},{showFirmwareVerifyDialog:r}=(0,L.It)({noContinue:!0});return(0,A.jsx)(WalletOptionItem,{icon:n,iconColor:t,label:"Device Authentication",onPress:(0,l.A)((function*(){var t;e&&(yield r({device:e,onContinue:(t=(0,l.A)((function*({checked:e}){console.log(e)})),function onContinue(e){return t.apply(this,arguments)})}))}))})}var B=n(593827),E=n(258988);function WalletAvatarEditDialog({wallet:e}){var{serviceAccount:t}=c.A,[n,o]=(0,a.useState)(e?.avatarInfo?.img);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(r.XStack,{flexWrap:"wrap",children:E.mx.map((function(e,t){return(0,A.jsxs)(r.Stack,{justifyContent:"center",alignItems:"center",flexBasis:"25%",py:"$2",animation:"quick",hoverStyle:{scale:1.1},pressStyle:{scale:.9},onPress:function(){o(e)},children:[(0,A.jsx)(B.L,{size:"$12",img:e,wallet:void 0}),(0,A.jsx)(r.AnimatePresence,{children:n===e?(0,A.jsx)(r.Stack,{position:"absolute",zIndex:"$1",right:"$4",bottom:"$1",p:"$px",bg:"$bg",borderRadius:"$full",enterStyle:{opacity:0,scale:0},exitStyle:{opacity:0,scale:0},children:(0,A.jsx)(r.Icon,{size:"$5",color:"$iconActive",name:"CheckRadioSolid"})}):null})]},t)}))}),(0,A.jsx)(r.Dialog.Footer,{onConfirm:(0,l.A)((function*(){e?.id&&n&&(yield t.setWalletNameAndAvatar({walletId:e?.id,avatar:{img:n}}))}))})]})}function WalletRenameButton({wallet:e}){var{serviceAccount:t}=c.A;return(0,A.jsxs)(r.XStack,{py:"$1",px:"$1.5",alignItems:"center",userSelect:"none",borderRadius:"$2",hoverStyle:{bg:"$bgHover"},pressStyle:{bg:"$bgActive"},focusable:!0,focusStyle:{outlineOffset:2,outlineWidth:2,outlineColor:"$focusRing",outlineStyle:"solid"},onPress:(0,l.A)((function*(){var n;showRenameDialog(e.name,{onSubmit:(n=(0,l.A)((function*(n){e?.id&&n&&(yield t.setWalletNameAndAvatar({walletId:e?.id,name:n}))})),function onSubmit(e){return n.apply(this,arguments)})})})),children:[(0,A.jsx)(r.SizableText,{size:"$bodyLgMedium",pr:"$1.5",children:e?.name}),(0,A.jsx)(r.Icon,{flexShrink:0,name:"PencilSolid",size:"$4",color:"$iconSubdued"})]})}function WalletProfile_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function WalletProfile_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?WalletProfile_ownKeys(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WalletProfile_ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function WalletProfile({wallet:e}){return(0,A.jsx)(d.c,{space:"$1.5",renderAvatar:(0,A.jsx)(r.Stack,WalletProfile_objectSpread(WalletProfile_objectSpread({role:"button",borderRadius:"$2"},m.A.isHdWallet({walletId:e.id})&&{onPress:function(){return function showWalletAvatarEditDialog({wallet:e}){r.Dialog.show({title:"Edit Avatar",estimatedContentHeight:276,renderContent:(0,A.jsx)(WalletAvatarEditDialog,{wallet:e})})}({wallet:e})},hoverStyle:{bg:"$bgHover"},pressStyle:{bg:"$bgActive"},focusable:!0,focusStyle:{outlineOffset:2,outlineWidth:2,outlineColor:"$focusRing",outlineStyle:"solid"}}),{},{children:(0,A.jsxs)(r.Stack,{children:[(0,A.jsx)(B.L,{size:"$10",wallet:e}),m.A.isHdWallet({walletId:e.id})?(0,A.jsx)(d.c.Avatar.CornerIcon,{name:"MenuCircleHorSolid",color:"$iconSubdued"}):null]})})),children:(0,A.jsx)(WalletRenameButton,{wallet:e})})}function WalletOptions({wallet:e,device:t}){var n=(0,f.A)(),o=(0,I.A)(),i=(0,C.A)(),s=(0,a.useCallback)((0,l.A)((function*(){if(e?.id){var{mnemonic:t}=yield c.A.serviceAccount.getHDAccountMnemonic({walletId:e?.id,reason:D.a.Security});t&&(0,W.KE)(t),n.pushModal(j.ry.OnboardingModal,{screen:j.xl.BeforeShowRecoveryPhrase,params:{mnemonic:t,isBackup:!0}})}})),[n,e?.id]),u=(0,a.useCallback)((function(){i.backupWallet(e?.id)}),[i,e?.id]),d=(0,a.useCallback)((0,l.A)((function*(){if(e){var{mnemonic:t}=yield c.A.serviceAccount.getHDAccountMnemonic({walletId:e.id,reason:D.a.Security});t&&(0,W.KE)(t),n.pushModal(j.ry.KeyTagModal,{screen:j.ex.BackupDotMap,params:{encodedText:t,title:e.name}})}})),[n,e]),[p]=(0,b.UZ)(),h=(0,a.useMemo)((function(){return m.A.isHwWallet({walletId:e?.id})?m.A.isHwHiddenWallet({wallet:e})?(0,A.jsx)(HiddenWalletRememberSwitch,{wallet:e}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Verification,{device:t}),(0,A.jsx)(HomeScreen,{}),(0,A.jsx)(Advance,{wallet:e}),(0,A.jsx)(HiddenWalletAddButton,{wallet:e})]}):m.A.isHdWallet({walletId:e?.id})?(0,A.jsx)(r.ActionList,{offset:{mainAxis:0,crossAxis:18},placement:"bottom-start",title:"Backup",items:[{label:o.formatMessage({id:"backup__manual_backup"}),icon:"PenOutline",onPress:function(){s()}},{label:"OneKey KeyTag",icon:"OnekeyKeytagOutline",onPress:function(){d()}}],renderTrigger:(0,A.jsx)(WalletOptionItem,{icon:"Shield2CheckOutline",label:"Backup"})}):null}),[t,u,s,d,o,e]);return(0,A.jsx)(r.HeightTransition,{children:(0,A.jsx)(r.AnimatePresence,{children:p?(0,A.jsxs)(r.Stack,{testID:"wallet-edit-options",animation:"quick",exitStyle:{opacity:0},enterStyle:{opacity:0},children:[e?(0,A.jsx)(WalletProfile,{wallet:e}):null,h,(0,A.jsx)(r.Stack,{py:"$2.5",children:(0,A.jsx)(r.Divider,{mt:"auto"})})]}):null})})}function WalletDetails_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function WalletDetails_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?WalletDetails_ownKeys(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WalletDetails_ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function WalletDetails({num:e}){var[t,n]=(0,b.UZ)(),{serviceAccount:o,serviceAccountSelector:i}=c.A,{selectedAccount:h}=(0,b.wz)({num:e}),{activeAccount:w}=(0,b.LH)({num:e}),S=(0,b.z$)(),x=(0,a.useRef)(null),O=useAccountSelectorRoute(),P=O.params?.linkNetwork,I=O.params?.editable,W=P?h?.networkId:void 0,k=(0,f.A)(),C="$$others"===h?.focusedWallet,$=Boolean(h?.focusedWallet&&m.A.isOthersWallet({walletId:h?.focusedWallet})),D=C||$,H=(0,a.useCallback)((function(){k.pushModal(j.ry.OnboardingModal,{screen:j.xl.ImportAddress})}),[k]),L=(0,a.useCallback)((function(){k.pushModal(j.ry.OnboardingModal,{screen:j.xl.ImportPrivateKey})}),[k]),B=(0,a.useCallback)((function(){console.log("handleAddExternalAccount"),k.pushModal(j.ry.OnboardingModal,{screen:j.xl.ConnectWalletSelectNetworks})}),[k]),{result:E,run:R}=(0,p.yk)((0,l.A)((function*(){if(h?.focusedWallet){m.A.isHdWallet({walletId:h?.focusedWallet});var e=m.A.isHwWallet({walletId:h?.focusedWallet});try{var t,n=yield o.getWallet({walletId:h?.focusedWallet});return e&&(t=yield o.getWalletDevice({walletId:h?.focusedWallet})),{wallet:n,device:t}}catch(e){return void console.error(e)}}})),[h?.focusedWallet,o],{checkIsFocused:!1});(0,a.useEffect)((function(){var e,t=(e=(0,l.A)((function*(){yield R()})),function fn(){return e.apply(this,arguments)});return g.iL.on(g.Tu.WalletUpdate,t),function(){g.iL.off(g.Tu.WalletUpdate,t)}}),[R]);var{result:z,run:T}=(0,p.yk)((0,l.A)((function*(){return h?.focusedWallet?i.getAccountSelectorAccountsListSectionData({focusedWallet:h?.focusedWallet,linkedNetworkId:W,deriveType:h.deriveType,othersNetworkId:h?.networkId}):Promise.resolve(void 0)})),[W,h.deriveType,h?.focusedWallet,h?.networkId,i],{checkIsFocused:!1});(0,a.useEffect)((function(){var e,t=(e=(0,l.A)((function*(){yield T()})),function fn(){return e.apply(this,arguments)});return g.iL.on(g.Tu.AccountUpdate,t),g.iL.on(g.Tu.WalletUpdate,t),function(){g.iL.off(g.Tu.AccountUpdate,t),g.iL.off(g.Tu.WalletUpdate,t)}}),[T]);var{scrollToLocation:_,onLayout:M}=(0,r.useSafelyScrollToLocation)(x);(0,a.useEffect)((function(){if(z?.[0]?.data){var e=z[0].data?.findIndex((function({id:e}){return C?h.othersWalletAccountId===e:h.indexedAccountId===e}));console.log("itemIndex----",e),_({animated:!0,sectionIndex:0,itemIndex:Math.max(e,0)})}}),[C,_,z,h.indexedAccountId,h.othersWalletAccountId]);var[F,K]=(0,a.useState)(!1),{bottom:N}=(0,r.useSafeAreaInsets)(),U=(0,a.useCallback)((function(e){var t,n=!1;if(D){var r=e;t=r?.address}else{var o=e,i=o?.associateAccount;t=i?.address,i?.addressDetail?.isValid&&i?.addressDetail?.normalizedAddress&&(n=!0)}return t||D||!P||n?{address:t?m.A.shortenAddress({address:t}):"",isEmptyAddress:!1}:{address:`No ${w?.network?.shortname||""} address`,isEmptyAddress:!0}}),[w?.network?.shortname,D,P]),V=(0,a.useMemo)((function(){return!!I&&!(!z||0===z.length)}),[z,I]);return(0,A.jsxs)(r.Stack,{flex:1,pb:N,children:[(0,A.jsx)(WalletDetailsHeader,WalletDetails_objectSpread({wallet:E?.wallet,device:E?.device,titleProps:{opacity:t&&V?0:1},editMode:t,editable:V,onEditButtonPress:function(){n((function(e){return!e}))}},!t&&{title:C?"Others":E?.wallet?.name})),(0,A.jsx)(r.SectionList,{ref:x,onLayout:M,ListEmptyComponent:(0,A.jsx)(r.Stack,{p:"$3",children:(0,A.jsx)(r.SizableText,{children:"No Wallets"})}),contentContainerStyle:{pb:"$3"},estimatedItemSize:"$14",extraData:[h.indexedAccountId,t,F],ListHeaderComponent:D?null:(0,A.jsx)(WalletOptions,{wallet:E?.wallet,device:E?.device}),sections:null!=z?z:v,renderSectionHeader:function({section:e}){return(0,A.jsxs)(A.Fragment,{children:[e.title?(0,A.jsx)(r.SectionList.SectionHeader,{title:e.title,children:e.isHiddenWalletData&&t?(0,A.jsx)(r.ActionList,{title:e.title,renderTrigger:(0,A.jsx)(r.IconButton,{icon:"DotHorOutline",variant:"tertiary",ml:"$2"}),sections:[{items:[WalletDetails_objectSpread(WalletDetails_objectSpread({icon:F?"CheckboxSolid":"SuqarePlaceholderOutline"},F&&{iconProps:{color:"$iconActive"}}),{},{label:"Remember",onPress:function(){return K(!F)}})]},{items:[{icon:"PencilOutline",label:"Rename",onPress:function(){return alert("edit 1112")}},{destructive:!0,icon:"DeleteOutline",label:"Remove",onPress:function(){return alert("edit 3332")}}]}]}):null}):null,0===e.data.length&&e.emptyText?(0,A.jsx)(d.c,{title:e.emptyText,titleProps:{size:"$bodyLg"}}):null]})},renderItem:function({item:n}){var o,i,a=D?n:void 0,c=D?void 0:n,f=U(n),p=P&&f.isEmptyAddress,b=t?(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(AccountEditButton,{account:a,indexedAccount:c})}):p?(0,A.jsx)(u.J,{num:e,selectAfterCreate:!0,account:{walletId:E?.wallet?.id,networkId:W,indexedAccountId:c?.id,deriveType:h.deriveType},children:(0,A.jsx)(r.Icon,{name:"PlusSmallOutline"})}):null;return D&&a&&(o=m.A.getAccountCompatibleNetwork({account:a,networkId:P?h?.networkId:a.createAtNetwork})),(0,A.jsx)(d.c,WalletDetails_objectSpread(WalletDetails_objectSpread({renderAvatar:(0,A.jsx)(s.h,{loading:(0,A.jsx)(s.h.Loading,{w:"$10",h:"$10"}),indexedAccount:c,account:a,networkId:o}),title:n.name,titleProps:{numberOfLines:1},subtitle:f.address,subtitleProps:{color:f.isEmptyAddress?"$textCaution":void 0}},!t&&{onPress:(i=(0,l.A)((function*(){p||(D?yield S.current.confirmAccountSelect({num:e,indexedAccount:void 0,othersWalletAccount:a,autoChangeToAccountMatchedNetworkId:o}):E&&(yield S.current.confirmAccountSelect({num:e,indexedAccount:c,othersWalletAccount:void 0,autoChangeToAccountMatchedNetworkId:void 0})),k.popStack())})),function onPress(){return i.apply(this,arguments)}),checkMark:function(){if(!p)return D?h.othersWalletAccountId===n.id:h.indexedAccountId===n.id}()}),{},{children:b}),n.id)},renderSectionFooter:function({section:t}){return I?(0,A.jsxs)(d.c,{onPress:(0,l.A)((function*(){if(D)return t.walletId===y.Hk&&H(),t.walletId===y.C5&&L(),void(t.walletId===y.lS&&B());if(console.log(t),E){var n=yield o.addHDNextIndexedAccount({walletId:t.walletId});console.log("addHDNextIndexedAccount>>>",n),S.current.updateSelectedAccountForHdOrHwAccount({num:e,walletId:E?.wallet?.id,indexedAccountId:n.indexedAccountId})}})),children:[(0,A.jsx)(r.Stack,{bg:"$bgStrong",borderRadius:"$2",p:"$2",borderCurve:"continuous",children:(0,A.jsx)(r.Icon,{name:"PlusSmallOutline"})}),(0,A.jsx)(d.c.Text,{userSelect:"none",primary:"Add Account",primaryTextProps:{color:"$textSubdued"}})]}):null}})]})}var R=n(972800);function AccountSelectorCreateWalletButton(){var e=(0,r.useMedia)(),t=((0,C.A)(),(0,f.A)()),n=useAccountSelectorRoute(),o=n.params?.editable,i=(0,a.useCallback)((function(){t.pushModal(j.ry.OnboardingModal,{screen:j.xl.ConnectYourDevice})}),[t]),s=(0,a.useCallback)((0,l.A)((function*(){yield c.A.servicePassword.promptPasswordVerify(),t.pushModal(j.ry.OnboardingModal,{screen:j.xl.BeforeShowRecoveryPhrase})})),[t]),u=(0,a.useCallback)((function(){t.pushModal(j.ry.OnboardingModal,{screen:j.xl.ImportRecoveryPhrase})}),[t]);if(!o)return null;(0,A.jsx)(r.ActionList,{placement:"right-start",renderTrigger:(0,A.jsx)(r.IconButton,{icon:"PlusSmallOutline",testID:"add-wallet"}),title:"Add wallet",floatingPanelProps:{w:"$64"},sections:[{items:[{label:"Connect Hardware Wallet",icon:"UsbOutline",onPress:i,testID:"hardware-wallet"}]},{items:[{label:"Create Recovery Phrase",icon:"PlusCircleOutline",onPress:function(){s()},testID:"create-wallet"}]},{items:[{label:"Enter Recovery Phrase",icon:"Document2Outline",onPress:u,testID:"import-wallet"},{label:"Import with OneKey KeyTag",icon:"OnekeyKeytagOutline",onPress:function(){return console.log("clicked")}}]}]});var d=(0,A.jsx)(r.IconButton,{onPress:function(){t.pushModal(j.ry.OnboardingModal,{screen:j.xl.GetStarted})},icon:"PlusSmallOutline",testID:"add-wallet"});return(0,A.jsxs)(r.Stack,{p:"$1",my:"$2",alignItems:"center",children:[d,e.gtMd?(0,A.jsx)(r.SizableText,{size:"$bodySm",color:"$textSubdued",mt:"$1",children:"Add wallet"}):null]})}var z=["wallet","focusedWallet","onWalletPress","isOthers","badge"];function WalletListItem_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function WalletListItem_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?WalletListItem_ownKeys(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WalletListItem_ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function WalletListItem_WalletListItem(e){var{wallet:t,focusedWallet:n,onWalletPress:o,isOthers:i,badge:l}=e,a=(0,h.A)(e,z),c=(0,r.useMedia)(),s={wallet:t,status:"default",badge:l},u=t?.name,d=n===t?.id,onPress=function(){return t?.id&&o(t?.id)};i&&(u="Others",d="$$others"===n,s={img:"cardDividers",wallet:void 0},onPress=function(){return o("$$others")});var f=(0,A.jsxs)(r.Stack,WalletListItem_objectSpread(WalletListItem_objectSpread(WalletListItem_objectSpread({role:"button",alignItems:"center",p:"$1",borderRadius:"$3",borderCurve:"continuous",userSelect:"none"},d?{bg:"$bgActive"}:{hoverStyle:{bg:"$bgHover"},pressStyle:{bg:"$bgActive"}}),{},{focusable:!0,focusStyle:{outlineWidth:2,outlineColor:"$focusRing",outlineStyle:"solid"}},a),{},{onPress,children:[s?(0,A.jsx)(B.L,WalletListItem_objectSpread({},s)):null,c.gtMd?(0,A.jsx)(r.SizableText,{flex:1,numberOfLines:1,mt:"$1",size:"$bodySm",color:d?"$text":"$textSubdued",children:u}):null]})),p=t?.hiddenWallets;return p&&p.length>0?(0,A.jsxs)(r.Stack,{borderRadius:"$3",borderWidth:1,borderColor:"$borderSubdued",space:"$3",borderCurve:"continuous",children:[f,p.map((function(e,t){return(0,A.jsx)(WalletListItem_WalletListItem,WalletListItem_objectSpread({wallet:e,focusedWallet:n,onWalletPress:o},c.md&&{badge:Number(t)+1}),t)}))]}):f}function ListItemSeparator(){return(0,A.jsx)(r.Stack,{h:"$3"})}function AccountSelectorWalletListSideBar({num:e}){var t,{serviceAccount:n}=c.A,{bottom:o}=(0,r.useSafeAreaInsets)(),i=(0,b.z$)(),s=useAccountSelectorRoute(),u=s.params?.editable,{selectedAccount:d}=(0,b.wz)({num:e}),{result:f,run:h}=(0,p.yk)((function(){return n.getWallets({nestedHiddenWallets:!0,ignoreEmptySingletonWalletAccounts:!0})}),[n],{checkIsFocused:!1}),w=null!=(t=f?.wallets)?t:v;(0,a.useEffect)((function(){var e,t=(e=(0,l.A)((function*(){yield h()})),function fn(){return e.apply(this,arguments)});return g.iL.on(g.Tu.WalletUpdate,t),g.iL.on(g.Tu.AccountUpdate,t),function(){g.iL.off(g.Tu.WalletUpdate,t),g.iL.off(g.Tu.AccountUpdate,t)}}),[h]);var y=(0,a.useCallback)((function(t){i.current.updateSelectedAccountFocusedWallet({num:e,focusedWallet:t})}),[i,e]);return(0,A.jsxs)(r.Stack,{w:"$16",$gtMd:{w:"$32"},bg:"$bgSubdued",borderRightWidth:x.A.hairlineWidth,borderRightColor:"$neutral3",children:[$.Ay.isNativeAndroid?(0,A.jsx)(r.XStack,{py:"$4",justifyContent:"center",children:(0,A.jsx)(r.Page.Close,{children:(0,A.jsx)(R.v$,{icon:"CrossedLargeOutline"})})}):null,(0,A.jsx)(r.ListView,{p:"$2",estimatedItemSize:"$10",data:w,extraData:d.focusedWallet,renderItem:function({item:e}){var t;return m.A.isQrWallet({walletId:e.id})&&(t="QR"),(0,A.jsx)(WalletListItem_WalletListItem,{wallet:e,focusedWallet:d.focusedWallet,onWalletPress:y,testID:`wallet-${e.id}`,badge:t},e.id)},ItemSeparatorComponent:ListItemSeparator}),u?(0,A.jsx)(r.Stack,{p:"$2",borderTopWidth:x.A.hairlineWidth,borderTopColor:"$borderSubdued",mb:o,children:(0,A.jsx)(AccountSelectorCreateWalletButton,{})}):null]})}function AccountSelectorStack({num:e}){return(0,A.jsxs)(r.Page,{safeAreaEnabled:!1,children:[(0,A.jsx)(r.Page.Header,{headerShown:!1}),(0,A.jsxs)(r.Page.Body,{flexDirection:"row",children:[(0,A.jsx)(AccountSelectorWalletListSideBar,{num:e}),(0,A.jsx)(WalletDetails,{num:e})]})]})}function AccountSelectorStackPage({route:e}){var{num:t,sceneName:n,sceneUrl:r}=e.params;return(0,A.jsx)(o.b8,{enabledNum:[t],config:{sceneName:n,sceneUrl:r},children:(0,A.jsx)(AccountSelectorStack,{num:t})})}},282029:(e,t,n)=>{n.d(t,{It:()=>useFirmwareVerifyDialog});var r=n(324586),o=n(586330),i=n(514041),l=n(813362),a=n(435137),c=n(17617),s=n(490343),u=n(310955),d=n(390334),f=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function useFirmwareVerifyBase({device:e,skipDeviceCancel:t}){var[n,r]=(0,i.useState)("unknown"),[a,c]=(0,i.useState)(),s=(0,i.useCallback)((0,o.A)((function*(){try{c(void 0);var n=yield u.A.serviceHardware.firmwareAuthenticate({device:e,skipDeviceCancel:t});console.log("firmwareAuthenticate >>>> ",n),n.verified?r("official"):r("unofficial")}catch(e){throw r("error"),e.code===l.HardwareErrorCode.DeviceUnexpectedBootloaderMode&&c("UnexpectedBootloaderMode"),e}finally{yield u.A.serviceHardwareUI.closeHardwareUiStateDialog({connectId:e.connectId||"",skipDeviceCancel:t})}})),[e,t]);return(0,i.useEffect)((function(){s()}),[s]),{result:n,reset:(0,i.useCallback)((function(){r("unknown"),c(void 0)}),[]),errorState:a,verify:s}}function FirmwareAuthenticationDialogContent({onContinue:e,device:t,skipDeviceCancel:n,noContinue:r}){var[l,u]=(0,i.useState)(!0),{result:p,reset:b,errorState:m,verify:A}=useFirmwareVerifyBase({device:t,skipDeviceCancel:n}),h=(0,d.P)({path:"requests/new"}),w=(0,i.useMemo)((function(){if("unknown"===p)return(0,f.jsx)(s.Stack,{p:"$5",bg:"$bgSubdued",borderRadius:"$3",borderCurve:"continuous",children:(0,f.jsx)(s.Spinner,{size:"large"})});var t,n,i={unknown:{onPress:function(){},button:"Loading"},official:{onPress:function(){return e({checked:!0})},button:"Continue",textStackProps:{bg:"$bgSuccessSubdued",borderColor:"$borderSuccessSubdued"}},unofficial:{onPress:(n=(0,o.A)((function*(){yield a.A.openURL(h)})),function onPress(){return n.apply(this,arguments)}),button:"Contact us",textStackProps:{bg:"$bgCriticalSubdued",borderColor:"$borderCriticalSubdued"}},error:{onPress:(t=(0,o.A)((function*(){b(),u(!0),yield A()})),function onPress(){return t.apply(this,arguments)}),button:"Retry",textStackProps:{bg:"$bgCautionSubdued",borderColor:"$borderCautionSubdued"}}},d=(0,f.jsx)(s.Button,{$md:{size:"large"},variant:"primary",onPress:i[p].onPress,children:i[p].button});"official"===p&&r&&(d=null);var w=_objectSpread({p:"$5",space:"$5",borderRadius:"$3",borderCurve:"continuous",borderWidth:c.A.hairlineWidth},i[p].textStackProps),v="official"===p?(0,f.jsx)(s.Stack,_objectSpread(_objectSpread({},w),{},{children:(0,f.jsx)(s.SizableText,{textAlign:"center",children:"Your device is running official firmware"})})):null,y="unofficial"===p?(0,f.jsx)(s.Stack,_objectSpread(_objectSpread({},w),{},{children:(0,f.jsx)(s.SizableText,{textAlign:"center",children:"Unofficial firmware detected!"})})):null,g=l?(0,f.jsx)(s.Button,{$md:{size:"large"},onPress:function(){return r?e({checked:!1}):u(!1)},children:"I Understand"}):(0,f.jsx)(s.Button,{$md:{size:"large"},variant:"destructive",onPress:function(){return e({checked:!1})},children:"Continue Anyway"},"continue-anyway"),j="We're currently unable to verify your device. Continuing may pose\n    security risks.";"error"===p&&"UnexpectedBootloaderMode"===m&&(g=null,j="Device is in unexpected bootloader mode.");var S="error"===p?(0,f.jsxs)(s.Stack,_objectSpread(_objectSpread({},w),{},{children:[(0,f.jsx)(s.SizableText,{children:j}),g]})):null;return(0,f.jsxs)(s.Stack,{space:"$4",children:[v,y,d,S]})}),[p,r,l,m,e,h,b,A]);return(0,f.jsx)(s.Stack,{space:"$5",children:w})}function useFirmwareVerifyDialog({noContinue:e}={}){var t,n=(0,i.useCallback)((t=(0,o.A)((function*({device:t,onContinue:n}){var r,i=s.Dialog.show({tone:"success",icon:"DocumentSearch2Outline",title:"Device Authentication",description:"Confirm on your device to verify its authenticity and secure your connection.",dismissOnOverlayPress:!1,showFooter:!1,renderContent:(0,f.jsx)(FirmwareAuthenticationDialogContent,{device:t,noContinue:e,onContinue:(r=(0,o.A)((function*({checked:e}){yield i.close(),yield n({checked:e})})),function(e){return r.apply(this,arguments)}),skipDeviceCancel:!0}),onClose:()=>(0,o.A)((function*(){t.connectId&&(yield u.A.serviceHardwareUI.closeHardwareUiStateDialog({connectId:t.connectId,skipDeviceCancel:!0}))}))()})})),function(e){return t.apply(this,arguments)}),[e]);return{showFirmwareVerifyDialog:n}}}}]);