"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[35637],{793437:(e,n,t)=>{t.d(n,{X:()=>OpenInAppButton});var r=t(586330),o=t(514041),i=t(17617),a=t(490343),s=t(726130),c=t(663522),l=t(117746),u=t(911998),d=t(831085);function OpenInAppButton({buildDeepLinkUrl:e,buildFullUrl:n}){var{result:t}=(0,u.yk)((0,r.A)((function*(){var n=e();return(yield l.Ay.linkingCanOpenURL(n))?n:""})),[e]),p=(0,o.useMemo)((function(){return c.Ay.isWebMobile?c.Ay.isWebMobileAndroid?"Open by OneKey Android":c.Ay.isWebMobileIOS?"Open by OneKey iOS":void 0:"Open by OneKey Desktop"}),[]),f=(0,o.useCallback)((function(){var e=n();a.Dialog.show({title:"Scan to open in OneKey",floatingPanelProps:{overflow:"hidden"},renderContent:(0,d.jsxs)(a.Stack,{children:[(0,d.jsxs)(a.Stack,{alignItems:"center",justifyContent:"center",overflow:"hidden",children:[t&&p?(0,d.jsx)(a.Button,{mb:"$4",onPress:function(){console.log("URL Account openByApp deepLinkUrl",t),l.Ay.linkingOpenURL(t)},children:p}):null,(0,d.jsx)(a.Stack,{p:"$4",borderRadius:"$6",borderCurve:"continuous",borderWidth:i.A.hairlineWidth,borderColor:"$borderSubdued",children:(0,d.jsx)(a.QRCode,{value:e,logoSvg:"OnekeyBrand",size:224})})]}),(0,d.jsxs)(a.XStack,{m:"$-5",mt:"$5",py:"$4",px:"$5",backgroundColor:"$bgSubdued",alignItems:"center",children:[(0,d.jsx)(a.SizableText,{size:"$bodyMd",color:"$textSubdued",flex:1,children:"Don’t have the app yet?"}),(0,d.jsx)(a.Button,{size:"small",onPress:function(){(0,l.Dr)(s.A8)},children:"Download"})]})]}),showFooter:!1})}),[n,t,p]);return(0,d.jsx)(a.Button,{size:"small",onPress:f,children:"Open in the app"})}},660823:(e,n,t)=>{t.d(n,{i:()=>TabPageHeader});var r=t(514041),o=t(490343),i=t(901976),a=t(162616),s=t(325809),c=t(663522),l=t(714191),u=t(831085);function HeaderLeft({sceneName:e}){var n=(0,r.useMemo)((function(){return e===l.Zs.homeUrlAccount?null:(0,u.jsx)(s.Qt,{num:0},"accountSelectorTrigger")}),[e]);return(0,u.jsx)(s.b8,{enabledNum:[0],config:{sceneName:e,sceneUrl:""},children:n})}var d=t(586330),p=t(972800),f=t(730223),h=t(310955),y=t(498356),m=t(259641),b=t(793437),v=t(211129),A=t(491180),g=t(796151),k=t(826339);function OpenInAppButtonContainer(){var{activeAccount:{account:e,network:n}}=(0,a.LH)({num:0}),t=(0,r.useCallback)((function(){return e&&n?g.Ay.buildDeepLinkUrl({path:v.oO.url_account,query:{networkCode:n.code,address:e.address}}):""}),[e,n]),o=(0,r.useCallback)((function(){return e&&n?(0,k.Hw)({account:e,network:n}):"n"}),[e,n]);return e?.address&&n?.id?(0,u.jsx)(b.X,{buildDeepLinkUrl:t,buildFullUrl:o}):null}function ShareButton(){var{activeAccount:{account:e,network:n}}=(0,a.LH)({num:0}),{copyText:t}=(0,o.useClipboard)();return e?.address&&n?.id?(0,u.jsx)(o.HeaderIconButton,{onPress:(0,d.A)((function*(){var r=(0,k.Hw)({account:e,network:n});(yield m.G())?yield m.w(r):t(r)})),icon:"ShareOutline"}):null}var w={Address:function Address(){var{activeAccount:{account:e}}=(0,a.LH)({num:0});return(0,u.jsx)(o.XStack,{alignItems:"center",children:(0,u.jsx)(o.SizableText,{size:"$headingLg",children:A.A.shortenAddress({address:e?.address})})})},OpenInApp:function OpenInApp(){return(0,u.jsx)(s.b8,{config:{sceneName:l.Zs.homeUrlAccount,sceneUrl:""},enabledNum:[0],children:(0,u.jsx)(OpenInAppButtonContainer,{})})},Share:function Share(){return(0,u.jsx)(s.b8,{config:{sceneName:l.Zs.homeUrlAccount,sceneUrl:""},enabledNum:[0],children:(0,u.jsx)(ShareButton,{})})}},j=t(147882),x=t(390574),S=t(506851);function UniversalSearchInput(){var e=(0,y.A)(),n=(0,r.useCallback)((function(){e.pushModal(f.ry.UniversalSearchModal,{screen:x.j.UniversalSearch,params:{filterType:S.j.Address}})}),[e]);return(0,u.jsxs)(o.XStack,{w:280,children:[(0,u.jsx)(o.Input,{containerProps:{w:"100%"},size:"small",placeholder:"Search address"},"searchInput"),(0,u.jsx)(o.View,{position:"absolute",top:0,left:0,right:0,bottom:0,onPress:n})]})}function HeaderRight({sceneName:e}){var n=(0,y.A)(),t=(0,j.A)(),{activeAccount:{account:i}}=(0,a.LH)({num:0}),s=(0,r.useCallback)((function(){n.pushModal(f.ry.SettingModal,{screen:f.Pj.SettingListModal})}),[n]),m=(0,r.useCallback)((function(){return t.start({handlers:t.PARSE_HANDLER_NAMES.all,autoHandleResult:!0,accountId:i?.id})}),[t,i?.id]),b=(0,r.useCallback)((0,d.A)((function*(){yield h.A.serviceApp.openExtensionExpandTab({routes:""})})),[]),v=(0,o.useMedia)(),A=(0,r.useMemo)((function(){var n=(0,u.jsx)(p.v$,{title:"Settings",icon:"SettingsOutline",testID:"setting",onPress:s},"setting"),t=(0,u.jsx)(p.v$,{title:"Expand View",icon:"CameraExposureSquareOutline",onPress:b},"expandExtView"),r=(0,u.jsx)(p.v$,{title:"Scan",icon:"ScanOutline",onPress:m},"scan"),o=v.gtMd?(0,u.jsx)(UniversalSearchInput,{},"searchInput"):null;return e===l.Zs.homeUrlAccount?[(0,u.jsx)(w.OpenInApp,{},"urlAccountOpenInApp"),(0,u.jsx)(w.Share,{},"urlAccountShare")].filter(Boolean):c.Ay.isExtensionUiPopup?[t,n]:[r,n,o]}),[v.gtMd,m,b,s,e]);return(0,u.jsx)(p.bE,{testID:"Wallet-Page-Header-Right",children:A})}function HeaderTitle({sceneName:e}){var n=(0,r.useMemo)((function(){if(e===l.Zs.homeUrlAccount)return(0,u.jsx)(w.Address,{},"urlAccountNavHeaderAddress")}),[e]);return(0,u.jsx)(s.b8,{enabledNum:[0],config:{sceneName:e,sceneUrl:""},children:n})}function TabPageHeader({sceneName:e,showHeaderRight:n}){(0,i.e)({name:`web TabPageHeader:${e}:${String(n)}`});var t=(0,r.useCallback)((function(){return(0,u.jsx)(HeaderLeft,{sceneName:e})}),[e]),{config:c}=(0,a.H9)(),l=(0,r.useCallback)((function(){return n&&c?(0,u.jsx)(s.b8,{enabledNum:[0],config:c,children:(0,u.jsx)(HeaderRight,{sceneName:e})}):null}),[c,e,n]),d=(0,r.useCallback)((function(){return(0,u.jsx)(HeaderTitle,{sceneName:e})}),[e]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.Page.Header,{headerTitle:d,headerLeft:t,headerRight:l})})}},536612:(e,n,t)=>{t.d(n,{S:()=>useAppUpdateInfo,x:()=>useAppChangeLog});var r=t(324586),o=t(514041),i=t(734809),a=t(713132),s=t(639451),c=t(730223),l=t(310955),u=t(498356),d=t(911998);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var useAppChangeLog=function(e){var n=(0,d.yk)((function(){return e?l.A.serviceAppUpdate.fetchChangeLog():Promise.resolve(null)}),[e]);return(0,o.useMemo)((function(){return n.result}),[n.result])},useAppUpdateInfo=function(e=!1){var[n]=(0,i.useAppUpdatePersistAtom)(),t=(0,u.A)(),r=(0,o.useCallback)((function(){setTimeout((function(){(e?t.pushFullModal:t.pushModal)(c.ry.AppUpdateModal,{screen:c.mk.WhatsNew})}))}),[e,t.pushFullModal,t.pushModal]),d=(0,o.useCallback)((function(e=!1,r){(e?t.pushFullModal:t.pushModal)(c.ry.AppUpdateModal,{screen:c.mk.UpdatePreview,params:_objectSpread({latestVersion:n.latestVersion,isForceUpdate:n.isForceUpdate,autoClose:e},r)})}),[n.isForceUpdate,n.latestVersion,t.pushFullModal,t.pushModal]);(0,o.useEffect)((function(){(0,a.fK)(n)&&r(),n.status===a.ue.downloading&&(0,s.Xo)(n).then((function(){l.A.serviceAppUpdate.readyToInstall()})).catch((function(e){l.A.serviceAppUpdate.notifyFailed(e)})),l.A.serviceAppUpdate.fetchAppUpdateInfo().then((function(e){e?.isForceUpdate&&(0,a._q)(e.latestVersion,e.status)&&d(!0,e)}))}),[]);var p=(0,o.useCallback)((function(){switch(n.status){case a.ue.notify:case a.ue.downloading:d(e);break;case a.ue.ready:(0,s.Ed)(n).catch((function(e){return l.A.serviceAppUpdate.notifyFailed(e)}));break;case a.ue.failed:l.A.serviceAppUpdate.startDownloading(),(0,s.Xo)(n).then((function(){l.A.serviceAppUpdate.readyToInstall()})).catch((function(e){l.A.serviceAppUpdate.notifyFailed(e)}))}}),[n,e,d]);return(0,o.useMemo)((function(){return{isNeedUpdate:(0,a._q)(n.latestVersion,n.status),data:n,onUpdateAction:p,toUpdatePreviewPage:d,onViewReleaseInfo:r}}),[n,p,r,d])}},349521:(e,n,t)=>{t.d(n,{F:()=>FirmwareUpdateReminderAlert,a:()=>HomeFirmwareUpdateReminder});var r=t(586330),o=t(514041),i=t(490343),a=t(734809),s=t(714191),c=t(310955),l=t(325809),u=t(498356),d=t(911998),p=t(162616),f=t(613838),h=t(318822);function BootloaderModeUpdateReminder(){var e=(0,u.A)(),n=(0,f.B)();return(0,o.useEffect)((function(){var fn=function(e){n.showBootloaderMode({connectId:e.connectId})};return h.iL.on(h.Tu.ShowFirmwareUpdateFromBootloaderMode,fn),function(){h.iL.off(h.Tu.ShowFirmwareUpdateFromBootloaderMode,fn)}}),[n,e]),null}var y=t(728234),m=t(491180),b=t(831085);function HomeFirmwareUpdateDetectCmp(){var{activeAccount:e}=(0,p.LH)({num:0}),n=e.device?.connectId,t=(0,y.jH)(),r=(0,o.useMemo)((function(){return m.A.isHwWallet({walletId:e.wallet?.id})}),[e.wallet?.id]);return(0,o.useEffect)((function(){r&&n&&t&&c.A.serviceFirmwareUpdate.detectActiveAccountFirmwareUpdates({connectId:n})}),[r,n,t]),null}var v=(0,o.memo)((function HomeFirmwareUpdateDetectWithProvider(){return(0,b.jsx)(l.b8,{config:{sceneName:s.Zs.home},enabledNum:[0],children:(0,b.jsx)(HomeFirmwareUpdateDetectCmp,{})})}));function FirmwareUpdateReminderAlert({message:e,onPress:n}){return(0,b.jsxs)(i.XStack,{px:"$5",py:"$2",borderTopWidth:"$px",borderBottomWidth:"$px",bg:"$bgInfoSubdued",borderColor:"$borderInfoSubdued",alignItems:"center",space:"$2",flex:1,children:[(0,b.jsx)(i.Icon,{size:"$4",name:"DownloadOutline",color:"$iconInfo"}),(0,b.jsx)(i.SizableText,{flex:1,size:"$bodyMdMedium",color:"$text",numberOfLines:1,children:e}),(0,b.jsx)(i.Button,{size:"small",onPress:n,children:"View"})]})}function HomeFirmwareUpdateReminderCmp(){var{activeAccount:e}=(0,p.LH)({num:0}),n=e.device?.connectId,t=(0,f.B)(),[s]=(0,a.useFirmwareUpdatesDetectStatusAtom)(),{result:l}=((0,u.A)(),(0,d.yk)((0,r.A)((function*(){if(n){var e=s?.[n],t=e?.connectId===n&&e?.hasUpgrade;yield c.A.serviceFirmwareUpdate.getFirmwareUpdateDetectInfo({connectId:n});return{shouldUpdate:t,detectResult:e}}})),[n,s])),h=(0,o.useMemo)((function(){if(l?.shouldUpdate){var e="New firmware is available";return l?.detectResult?.toVersion?e=`Firmware ${l?.detectResult?.toVersion} is available`:l?.detectResult?.toVersionBle&&(e=`BLE Firmware ${l?.detectResult?.toVersionBle} is available`),(0,b.jsx)(FirmwareUpdateReminderAlert,{message:e,onPress:(0,r.A)((function*(){t.openChangeLogModal({connectId:n})}))})}return null}),[t,n,l]);return(0,b.jsxs)(i.XStack,{children:[(0,b.jsx)(v,{}),(0,b.jsx)(BootloaderModeUpdateReminder,{}),h]})}function HomeFirmwareUpdateReminder(){return(0,b.jsx)(l.b8,{config:{sceneName:s.Zs.home},enabledNum:[0],children:(0,b.jsx)(HomeFirmwareUpdateReminderCmp,{})})}},435637:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var r=t(514041);function DAppConnectExtensionFloatingTrigger(){return null}var o=t(901976),i=t(714191),a=t(325809),s=t(471230),c=t(262424),l=t(831085);const u=function HomePageContainer(){var[e,n]=(0,r.useState)(!1);if(console.log("HomePageContainer render"),(0,o.e)({name:"HomePageContainer"}),e)return null;var t=i.Zs.home;return(0,l.jsxs)(a.b8,{config:{sceneName:t,sceneUrl:""},enabledNum:[0],children:[(0,l.jsx)(c.U,{sceneName:t,onPressHide:function(){return n((function(e){return!e}))}},t),(0,l.jsx)(DAppConnectExtensionFloatingTrigger,{}),(0,l.jsx)(s.YG,{})]})}},262424:(e,n,t)=>{t.d(n,{U:()=>HomePageView});var r=t(586330),o=t(514041),i=t(908867),a=t(546591),s=t(462723),c=t(490343),l=t(928557),u=t(310955),d=t(357829),p=t(660823),f=t(713132),h=t(663522),y=t(117746);t(536612);var m=t(831085);f.ue.notify,f.ue.downloading,f.ue.ready,f.ue.failed,f.ue.done;f.ue.notify,f.ue.downloading,f.ue.ready,h.Ay.isNativeAndroid,f.ue.failed,(0,m.jsx)((function OpenOnGithub(){var e=(0,o.useCallback)((function(){(0,y.Dr)("https://github.com/OneKeyHQ/app-monorepo/releases")}),[]);return(0,m.jsxs)(c.XStack,{space:"$2",justifyContent:"space-between",alignItems:"center",cursor:"pointer",onPress:e,children:[(0,m.jsx)(c.SizableText,{size:"$bodyMdMedium",color:"$textSubdued",children:"Download on Github"}),(0,m.jsx)(c.Icon,{name:"ArrowTopRightOutline",size:"$4.5"})]})}),{}),f.ue.done;f.ue.notify,f.ue.downloading,f.ue.ready,f.ue.failed,f.ue.done;var UpdateReminder=function(){return null},b=t(911998),v=t(162616),A=t(349521),g=t(324586),k=t(839850),w=t(325809),j=t(575995),x=t(84269),S=["createAddressDisabled"];function HomeSelector_ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function HomeSelector_objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?HomeSelector_ownKeys(Object(t),!0).forEach((function(n){(0,g.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):HomeSelector_ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const I=(0,o.memo)((function HomeSelector(e){var{createAddressDisabled:n}=e,t=(0,k.A)(e,S);return(0,m.jsx)(c.XStack,HomeSelector_objectSpread(HomeSelector_objectSpread({testID:"Wallet-Address-Generator",alignItems:"center",space:"$3"},t),{},{children:n?(0,m.jsx)(x.vO,{num:0}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.vO,{num:0}),(0,m.jsx)(w.Ln,{num:0}),(0,m.jsx)(j.X,{miniMode:!0,num:0})]})}))}));var O=t(812715),T=t(40651),C=t(795871);var P=t(208257),M=t(734809),L=t(227428);function HomeOverviewContainer(){var e,{activeAccount:{account:n,network:t,wallet:i}}=(0,v.LH)({num:0}),[a,s]=(0,o.useState)({initialized:!1,isRefreshing:!1}),[l]=(0,M.useSettingsPersistAtom)(),{result:d}=(0,b.yk)((0,r.A)((function*(){if(n&&t){var e=yield u.A.serviceAccount.getAccountAddressForApi({accountId:n.id,networkId:t.id}),r=yield u.A.serviceAccountProfile.fetchAccountDetails({networkId:t.id,accountAddress:e,xpub:yield u.A.serviceAccount.getAccountXpub({accountId:n.id,networkId:t.id}),withNetWorth:!0,withNonce:!1});return s({initialized:!0,isRefreshing:!1}),r}})),[n,t],{debounced:L.EI,pollingInterval:L.HU});return(0,o.useEffect)((function(){n?.id&&t?.id&&i?.id&&s({initialized:!1,isRefreshing:!0})}),[n?.id,t?.id,i?.id]),a.isRefreshing&&!a.initialized?(0,m.jsx)(c.Stack,{py:"$2.5",children:(0,m.jsx)(c.Skeleton,{w:"$40",h:"$7",my:"$2.5"})}):(0,m.jsx)(c.NumberSizeableText,{formatter:"value",formatterOptions:{currency:l.currencyInfo.symbol},size:"$heading5xl",children:null!=(e=d?.netWorth)?e:0})}function HomeHeaderContainer(){return(0,m.jsx)(P.p,{children:(0,m.jsxs)(c.Stack,{testID:"Wallet-Tab-Header",p:"$5",children:[(0,m.jsx)(I,{mb:"$2.5"}),(0,m.jsxs)(c.Stack,{$gtLg:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,m.jsx)(HomeOverviewContainer,{}),(0,m.jsx)(c.Portal.Container,{name:c.Portal.Constant.WALLET_ACTIONS})]})]})})}var H=t(230414),F=t(929296),N=t(195309),$=t(972715),U=t(657355),R=t(714178),D=t(809690),{Provider:_,withProvider:B,contextAtom:z,contextAtomMethod:E}=(0,D.f)(),{atom:W,use:K}=z("");function _createSuper(e){var n=_isNativeReflectConstruct();return function _createSuperInternal(){var t,r=(0,$.A)(e);if(n){var o=(0,$.A)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,N.A)(this,t)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var V=function(e){(0,F.A)(ContextJotaiActionsNFTList,e);var n=_createSuper(ContextJotaiActionsNFTList);function ContextJotaiActionsNFTList(...e){var t;return(t=n.call(this,...e)).updateSearchKey=E((function(e,n,t){n(W(),t)})),t}return(0,H.A)(ContextJotaiActionsNFTList)}(R.x),X=(0,U.j)((function(){return console.log("new ContextJotaiActionsNFTList()",Date.now()),new V}));function useNFTListActions(){var e=X().updateSearchKey.use();return(0,o.useRef)({updateSearchKey:e})}var Z=t(535864),G=t(498356),q=t(730223);var J=t(712784),Y=t.n(J),Q=t(327550);function NFTListHeader(e){var{nfts:n,filteredNfts:t}=e,[r]=K(),{updateSearchKey:o}=useNFTListActions().current;return(0,m.jsx)(Q.W,{searchProps:n.length>=L.hP?{onChangeText:Y()((function(e){return o(e)}),L.FV),searchResultCount:r&&r.length>=L.NZ?t.length:0}:void 0})}var ee=t(241440),ne=t(982447);function NFTListItem(e){var n,t,{nft:r,onPress:o}=e;return(0,m.jsxs)(c.Stack,{group:"nftItem",flexBasis:"50%",$gtSm:{flexBasis:"33.333333%"},$gtLg:{flexBasis:"25%"},$gtXl:{flexBasis:"16.666666%"},$gt2xl:{flexBasis:"14.2857142857%"},focusable:!0,focusStyle:{outlineColor:"$focusRing",outlineWidth:2,outlineStyle:"solid",outlineOffset:-2},p:"$2.5",borderRadius:"$4",onPress:function(){o?.(r)},userSelect:"none",children:[(0,m.jsx)(c.Stack,{pb:"100%","$group-nftItem-hover":{opacity:.8},children:(0,m.jsxs)(c.Stack,{position:"absolute",left:0,top:0,right:0,bottom:0,children:[(0,m.jsxs)(c.Image,{w:"100%",h:"100%",borderRadius:"$2.5",children:[(0,m.jsx)(c.Image.Source,{src:r.metadata?.image}),(0,m.jsx)(c.Image.Fallback,{bg:"$bgStrong",justifyContent:"center",alignItems:"center",children:(0,m.jsx)(c.Icon,{name:"ImageSquareWavesOutline",color:"$iconDisabled"})})]}),r.collectionType===ne.m.ERC1155&&new ee.A(null!=(n=r.amount)?n:1).gt(1)?(0,m.jsxs)(c.SizableText,{position:"absolute",right:"$0",bottom:"$0",size:"$bodyMdMedium",px:"$2",bg:"$bgInverse",color:"$textInverse",borderRadius:"$2.5",borderWidth:2,borderColor:"$bgApp",children:["x",r.amount]}):null]})}),(0,m.jsxs)(c.Stack,{mt:"$2",children:[(0,m.jsx)(c.SizableText,{size:"$bodyLgMedium",numberOfLines:1,children:null!=(t=r.metadata?.name)?t:"-"}),(0,m.jsx)(c.SizableText,{size:"$bodySm",color:"$textSubdued",numberOfLines:1,children:r.collectionName})]})]},r.itemId)}function NFTListView(e){var{data:n,isLoading:t,initialized:r,onContentSizeChange:i}=e,[a]=K(),s=function getFilteredNftsBySearchKey({nfts:e,searchKey:n}){return!n||n.length<L.NZ?e:(n=n.trim().toLowerCase(),e.filter((function(e){return e.collectionAddress?.toLowerCase()===n||e.collectionName?.toLowerCase().includes(n)||e.metadata?.name?.toLowerCase().includes(n)})))}({nfts:n,searchKey:a}),l=(0,G.A)(),{activeAccount:{account:u,network:p,wallet:f}}=(0,v.LH)({num:0}),y=(0,o.useCallback)((function(e){u&&p&&f&&l.pushModal(q.ry.MainModal,{screen:q.kZ.NFTDetails,params:{networkId:p.id,accountId:u.id,walletId:f.id,accountAddress:u.address,collectionAddress:e.collectionAddress,itemId:e.itemId}})}),[u,l,p,f]),b=(0,o.useCallback)((function(){return s&&0!==s.length?(0,m.jsx)(c.XStack,{flexWrap:"wrap",px:"$2.5",pb:"$6",pt:"$0.5",children:s.map((function(e){return(0,m.jsx)(NFTListItem,{nft:e,onPress:y},`${e.collectionAddress}-${e.itemId}`)}))}):a?(0,m.jsx)(d.wE,{}):(0,m.jsx)(d.eZ,{})}),[s,y,a]);return!r&&t?(0,m.jsx)(Z.yu,{onContentSizeChange:i}):(0,m.jsxs)(c.ScrollView,{h:"100%",py:"$3",scrollEnabled:h.Ay.isWebTouchable,disableScrollViewPanResponder:!0,onContentSizeChange:i,children:[(0,m.jsx)(NFTListHeader,{nfts:n,filteredNfts:s}),b()]})}var te=(0,o.memo)(B((function NFTListContainer(e){var n,{onContentSizeChange:t}=e,{isFocused:i}=(0,c.useTabIsRefreshingFocused)(),{updateSearchKey:a}=useNFTListActions().current,[s,l]=(0,o.useState)({initialized:!1,isRefreshing:!1}),{activeAccount:{account:d,network:p,wallet:f}}=(0,v.LH)({num:0}),h=(0,b.yk)((0,r.A)((function*(){if(d&&p){var e=yield u.A.serviceNFT.fetchAccountNFTs({networkId:p.id,accountAddress:d.address,xpub:yield u.A.serviceAccount.getAccountXpub({accountId:d.id,networkId:p.id})});return l({initialized:!0,isRefreshing:!1}),e.data}})),[d,p],{overrideIsFocused:function(e){return e&&i},debounced:L.EI,pollingInterval:L.Pi});return(0,o.useEffect)((function(){d?.id&&p?.id&&f?.id&&(l({initialized:!1,isRefreshing:!0}),a(""))}),[d?.id,p?.id,a,f?.id]),(0,m.jsx)(NFTListView,{data:null!=(n=h.result)?n:[],isLoading:s.isRefreshing,onContentSizeChange:t,initialized:s.initialized})}))),re=t(875669);const{Axios:oe,AxiosError:ie,CanceledError:ae,isCancel:se,CancelToken:ce,VERSION:le,all:ue,Cancel:de,isAxiosError:pe,spread:fe,toFormData:he,AxiosHeaders:ye,HttpStatusCode:me,formToJSON:be,getAdapter:ve,mergeConfig:Ae}=re.A;var ge=t(491180),ke=t(291877),we=t(69531);function useBuyToken({accountId:e,networkId:n}){var{result:t}=(0,we.yt)({networkId:n,type:"buy"}),r=(0,G.A)();return{handleOnBuy:(0,o.useCallback)((function(){r.pushModal(q.ry.FiatCryptoModal,{screen:q.Mg.BuyModal,params:{networkId:n,accountId:e}})}),[e,r,n]),isSupported:t}}var je=t(184251);function useReceiveToken({accountId:e,networkId:n,walletId:t,deriveInfo:r,deriveType:i}){var a=(0,G.A)();return{handleOnReceive:(0,o.useCallback)((function(){je.A.isLightningNetworkByNetworkId(n)?a.pushModal(q.ry.ReceiveModal,{screen:q.MD.CreateInvoice,params:{networkId:n,accountId:e}}):r&&a.pushModal(q.ry.ReceiveModal,{screen:q.MD.ReceiveToken,params:{networkId:n,accountId:e,walletId:t,deriveInfo:r,deriveType:i}})}),[e,r,i,a,n,t])}}var xe=t(384013),Se=t(641106),Ie=t(727476);function UrlAccountHomeTokenListProviderMirror_ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function UrlAccountHomeTokenListProviderMirror_objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?UrlAccountHomeTokenListProviderMirror_ownKeys(Object(t),!0).forEach((function(n){(0,g.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):UrlAccountHomeTokenListProviderMirror_ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Oe=(0,o.memo)((function(e){var n=(0,Ie.y)();return(0,m.jsx)(Se.m,UrlAccountHomeTokenListProviderMirror_objectSpread(UrlAccountHomeTokenListProviderMirror_objectSpread({},e),{},{data:n}))}));Oe.displayName="UrlAccountHomeTokenListProviderMirror";var useReviewControl=function(){var[{reviewControl:e}]=(0,M.useSettingsPersistAtom)();return!h.Ay.isAppleStoreEnv&&!h.Ay.isMas||Boolean(e)},ReviewControl=function({children:e}){return useReviewControl()?e:null},Te=t(584186),Ce=t(398509);function WalletActionBuy(e){var{networkId:n,accountId:t}=e,{isSupported:r,handleOnBuy:o}=useBuyToken({networkId:null!=n?n:"",accountId:null!=t?t:""});return(0,m.jsx)(Ce.c.Buy,{onPress:o,disabled:!r})}var Pe=t(971670),Me=t(796151);function WalletActionMore(){var e,{activeAccount:{account:n,network:t}}=(0,v.LH)({num:0}),r=(0,i.A)(),{copyText:a}=(0,c.useClipboard)(),s=(0,G.A)(),{result:l}=(0,we.yt)({networkId:null!=(e=t?.id)?e:"",type:"sell"}),u=(0,o.useCallback)((function(){var e,r;s.pushModal(q.ry.FiatCryptoModal,{screen:q.Mg.SellModal,params:{networkId:null!=(e=t?.id)?e:"",accountId:null!=(r=n?.id)?r:""}})}),[s,t,n]),d=useReviewControl(),p=[{items:[{label:r.formatMessage({id:"action__view_in_explorer"}),icon:"GlobusOutline",onPress:function(){return(0,Pe.C)((0,Me.BA)({network:t,address:n?.address}))}},{label:r.formatMessage({id:"action__copy_address"}),icon:"Copy1Outline",onPress:function(){return a(n?.address||"")}}]}];return d&&p.unshift({items:[{label:r.formatMessage({id:"action__sell_crypto"}),icon:"MinusLargeOutline",disabled:!l,onPress:u}]}),(0,m.jsx)(Ce.c.More,{sections:p})}function WalletActionReceive(e){var{accountId:n,networkId:t,walletId:r,deriveInfo:o,deriveType:i}=e,{handleOnReceive:a}=useReceiveToken({accountId:null!=n?n:"",networkId:null!=t?t:"",walletId:null!=r?r:"",deriveInfo:o,deriveType:i});return(0,m.jsx)(Ce.c.Receive,{onPress:a})}function WalletActionSend(){var e=(0,G.A)(),{activeAccount:{account:n,network:t}}=(0,v.LH)({num:0}),[i]=(0,xe.RI)(),[a]=(0,xe.D4)(),[s]=(0,xe.V3)(),c=(0,b.yk)((0,r.A)((function*(){var e;return(yield u.A.serviceNetwork.getVaultSettings({networkId:null!=(e=t?.id)?e:""})).isSingleToken})),[t?.id]).result,l=(0,o.useCallback)((0,r.A)((function*(){if(n&&t)if(c){var o=yield u.A.serviceToken.getNativeToken({networkId:t.id,accountAddress:n.address});e.pushModal(q.ry.SendModal,{screen:q.j$.SendDataInput,params:{accountId:n.id,networkId:t.id,isNFT:!1,token:o}})}else{var s;e.pushModal(q.ry.AssetSelectorModal,{screen:q.jA.TokenSelector,params:{networkId:t.id,accountId:n.id,networkName:t.name,tokens:{data:i.tokens,keys:i.keys,map:a},onSelect:(s=(0,r.A)((function*(r){yield Te.A.wait(600),e.pushModal(q.ry.SendModal,{screen:q.j$.SendDataInput,params:{accountId:n.id,networkId:t.id,isNFT:!1,token:r}})})),function onSelect(e){return s.apply(this,arguments)})}})}})),[n,i.keys,i.tokens,c,a,e,t]);return(0,m.jsx)(Ce.c.Send,{onPress:l,disabled:!s.initialized})}function WalletActionSwap({networkId:e}){var n=(0,G.A)(),t=(0,o.useCallback)((function(){n.pushModal(q.ry.SwapModal,{screen:q.uw.SwapMainLand,params:{importNetworkId:e}})}),[n,e]);return(0,m.jsx)(Ce.c.Swap,{onPress:t})}function WalletActions(){var{activeAccount:{network:e,account:n,wallet:t,deriveInfo:r,deriveType:o}}=(0,v.LH)({num:0});return(0,m.jsxs)(Ce.c,{children:[(0,m.jsx)(ReviewControl,{children:(0,m.jsx)(WalletActionBuy,{networkId:e?.id,accountId:n?.id})}),(0,m.jsx)(WalletActionSwap,{networkId:e?.id}),(0,m.jsx)(WalletActionSend,{}),(0,m.jsx)(WalletActionReceive,{accountId:n?.id,networkId:e?.id,walletId:t?.id,deriveInfo:r,deriveType:o}),(0,m.jsx)(WalletActionMore,{})]})}var Le=["showWalletActions"];function TokenListContainer_ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function TokenListContainer_objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?TokenListContainer_ownKeys(Object(t),!0).forEach((function(n){(0,g.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TokenListContainer_ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function TokenListContainer(e){var n,t,i,a,s,{showWalletActions:l=!1}=e,d=(0,k.A)(e,Le),{onContentSizeChange:p}=d,{isFocused:f}=(0,c.useTabIsRefreshingFocused)(),{activeAccount:{account:h,network:y,wallet:A,deriveInfo:g,deriveType:w}}=(0,v.LH)({num:0}),{handleOnBuy:j,isSupported:x}=useBuyToken({accountId:null!=(n=h?.id)?n:"",networkId:null!=(t=y?.id)?t:""}),{handleOnReceive:S}=useReceiveToken({accountId:null!=(i=h?.id)?i:"",networkId:null!=(a=y?.id)?a:"",walletId:null!=(s=A?.id)?s:"",deriveInfo:g,deriveType:w}),I=(0,c.useMedia)(),O=(0,G.A)(),{refreshAllTokenList:T,refreshAllTokenListMap:C,refreshTokenList:P,refreshTokenListMap:M,refreshRiskyTokenList:H,refreshRiskyTokenListMap:F,refreshSmallBalanceTokenList:N,refreshSmallBalanceTokenListMap:$,refreshSmallBalanceTokensFiatValue:U,updateTokenListState:R,updateSearchKey:D}=(0,xe.WE)().current;(0,b.yk)((0,r.A)((function*(){try{var e;if(!h||!y)return;yield u.A.serviceToken.abortFetchAccountTokens();var n=yield u.A.serviceAccount.getAccountAddressForApi({accountId:h.id,networkId:y.id}),t=yield u.A.serviceToken.getBlockedTokens({networkId:y.id}),r=yield u.A.serviceToken.fetchAccountTokens({mergeTokens:!0,networkId:y.id,accountAddress:n,flag:"home-token-list",xpub:yield u.A.serviceAccount.getAccountXpub({accountId:h.id,networkId:y.id}),blockedTokens:Object.keys(t)});if(P({keys:r.tokens.keys,tokens:r.tokens.data}),M(r.tokens.map),H({keys:r.riskTokens.keys,riskyTokens:r.riskTokens.data}),F(r.riskTokens.map),N({keys:r.smallBalanceTokens.keys,smallBalanceTokens:r.smallBalanceTokens.data}),$(r.smallBalanceTokens.map),U(null!=(e=r.smallBalanceTokens.fiatValue)?e:"0"),r.allTokens){T({keys:r.allTokens?.keys,tokens:r.allTokens?.data}),C(r.allTokens.map);var o=r.allTokens.data;o&&o.length&&u.A.serviceToken.updateLocalTokens({networkId:y.id,tokens:o}),R({initialized:!0,isRefreshing:!1})}}catch(e){if(!(e instanceof ae))throw e;console.log("fetchAccountTokens canceled")}})),[h,y,P,M,H,F,N,$,U,T,C,R],{overrideIsFocused:function(e){return e&&f},debounced:L.EI,pollingInterval:L.iD}),(0,o.useEffect)((function(){h?.id&&y?.id&&A?.id&&(R({initialized:!1,isRefreshing:!0}),D(""))}),[h?.id,y?.id,D,R,A?.id]);var _=(0,o.useCallback)((function(e){h&&y&&A&&g&&O.pushModal(q.ry.MainModal,{screen:q.kZ.TokenDetails,params:{accountId:h.id,networkId:y.id,walletId:A.id,deriveInfo:g,deriveType:w,tokenInfo:e}})}),[h,g,w,O,y,A]);return(0,m.jsxs)(m.Fragment,{children:[l?(0,m.jsx)(c.Portal.Body,{container:c.Portal.Constant.WALLET_ACTIONS,children:(0,m.jsx)(WalletActions,{})}):null,(0,m.jsx)(ke.x,TokenListContainer_objectSpread({withHeader:!0,withFooter:!0,withPrice:!0,withBuyAndReceive:!0,isBuyTokenSupported:x,onBuyToken:j,onReceiveToken:S,onPressToken:_,onContentSizeChange:p},I.gtLg&&{tableLayout:!0}))]})}var He=(0,o.memo)((function(e){var n,{activeAccount:{account:t}}=(0,v.LH)({num:0});return ge.A.isUrlAccountFn({accountId:null!=(n=t?.id)?n:""})?(0,m.jsx)(Oe,{children:(0,m.jsx)(TokenListContainer,TokenListContainer_objectSpread({},e))}):(0,m.jsx)(P.p,{children:(0,m.jsx)(TokenListContainer,TokenListContainer_objectSpread({showWalletActions:!0},e))})}));He.displayName="TokenListContainerWithProvider";var Fe=t(644047),Ne=t(616552);function TxHistoryContainer_ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var $e=(0,o.memo)((0,Ne.UK)((function TxHistoryListContainer(e){var n,{onContentSizeChange:t}=e,{isFocused:i}=(0,c.useTabIsRefreshingFocused)(),{updateSearchKey:a}=(0,Ne.n8)().current,[s,l]=(0,o.useState)({initialized:!1,isRefreshing:!1}),d=(0,c.useMedia)(),p=(0,G.A)(),{activeAccount:{account:f,network:h,wallet:y}}=(0,v.LH)({num:0}),A=(0,o.useCallback)((function(e){f&&h&&p.pushModal(q.ry.MainModal,{screen:q.kZ.HistoryDetails,params:{networkId:h.id,accountAddress:f.address,historyTx:e}})}),[f,p,h]),k=(0,b.yk)((0,r.A)((function*(){if(f&&h){var[e,n]=yield Promise.all([u.A.serviceAccount.getAccountXpub({accountId:f.id,networkId:h.id}),u.A.serviceNetwork.getVaultSettings({networkId:h.id})]),t=yield u.A.serviceHistory.fetchAccountHistory({accountId:f.id,networkId:h.id,accountAddress:f.address,xpub:e,onChainHistoryDisabled:n.onChainHistoryDisabled});return l({initialized:!0,isRefreshing:!1}),t}})),[f,h],{overrideIsFocused:function(e){return e&&i},debounced:L.EI,pollingInterval:L.fu});return(0,o.useEffect)((function(){f?.id&&h?.id&&y?.id&&(l({initialized:!1,isRefreshing:!0}),a(""))}),[f?.id,h?.id,a,y?.id]),(0,m.jsx)(Fe.q,function TxHistoryContainer_objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?TxHistoryContainer_ownKeys(Object(t),!0).forEach((function(n){(0,g.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TxHistoryContainer_ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({showIcon:!0,data:null!=(n=k.result)?n:[],onPressHistory:A,showHeader:!0,isLoading:s.isRefreshing,initialized:s.initialized,onContentSizeChange:t},d.gtLg&&{tableLayout:!0}))})));const Ue=function LNHardwareWalletAuth({children:e,accountId:n,networkId:t}){var a=(0,i.A)(),[s,l]=(0,o.useState)(!1),[d,p]=(0,o.useState)(!1),{result:f,run:h}=(0,b.yk)((0,r.A)((function*(){try{return yield u.A.serviceLightning.checkAuth({accountId:n,networkId:t}),!0}catch{return!1}finally{l(!0)}})),[t,n]),y=(0,o.useCallback)((0,r.A)((function*(){p(!0);try{yield u.A.serviceLightning.exchangeToken({networkId:t,accountId:n}),setTimeout((function(){h()}),200)}catch(e){console.error("refresh lightning network token failed: ",e),c.Toast.error({title:a.formatMessage({id:"msg__authentication_failed_verify_again"})})}finally{p(!1)}})),[t,n,a,h]);return s?f?(0,m.jsx)(m.Fragment,{children:e}):(0,m.jsx)(c.Stack,{testID:"LNHardware",w:"100%",h:"100%",justifyContent:"center",alignItems:"center",children:(0,m.jsx)(c.Empty,{icon:"PasswordOutline",title:"Authorize Access",description:"Connecting your hardware wallet to access the Lightning account",buttonProps:{children:a.formatMessage({id:"action__connect"}),onPress:function(){y()},loading:d}})}):(0,m.jsx)(c.Stack,{w:"full",h:"full",children:(0,m.jsx)(c.Spinner,{size:"large"})})};const Re=function WalletContentWithAuth({networkId:e,accountId:n,children:t}){return je.A.isLightningNetworkByNetworkId(e)&&ge.A.isHwAccount({accountId:n})?(0,m.jsx)(Ue,{networkId:e,accountId:n,children:t}):t};var De;function HomePageView({onPressHide:e,sceneName:n}){var t,f,{screenWidth:h,pageWidth:y}=function useHomePageWidth(){var e=(0,c.useMedia)(),n=(0,O.A)().width,t=(0,C.RQ)().size.sideBarWidth.val,{leftSidebarCollapsed:r}=(0,T.A)();return{screenWidth:n,pageWidth:e.md||r?n:n-t}}();null==De&&(De=new a.A.Value(y)),(0,o.useEffect)((function(){De&&a.A.timing(De,{toValue:y,duration:400,easing:s.A.inOut(s.A.quad),useNativeDriver:!1}).start()}),[y]);var g=(0,i.A)(),{activeAccount:{account:k,accountName:w,network:j,deriveInfo:x,wallet:S,ready:P,device:M}}=(0,v.LH)({num:0}),[L,H]=(x?.labelKey?g.formatMessage({id:x?.labelKey}):t=x?.label,(0,o.useState)(!1)),F=(0,b.yk)((0,r.A)((function*(){var e;return j?u.A.serviceNetwork.getVaultSettings({networkId:null!=(e=j?.id)?e:""}):Promise.resolve(void 0)})),[j]).result,N=F?.NFTEnabled&&(0,l.cN)().includes(null!=(f=j?.id)?f:""),$=F?.validationRequired,U=F?.enabledOnClassicOnly,R=(0,o.useMemo)((function(){return[{title:g.formatMessage({id:"asset__tokens"}),page:(0,o.memo)(He,(function(){return!0}))},N?{title:g.formatMessage({id:"asset__collectibles"}),page:(0,o.memo)(te,(function(){return!0}))}:null,{title:g.formatMessage({id:"transaction__history"}),page:(0,o.memo)($e,(function(){return!0}))}].filter(Boolean)}),[g,N]),D=(0,o.useCallback)((function(){return(0,m.jsx)(c.Tab,{data:R,ListHeaderComponent:(0,m.jsx)(HomeHeaderContainer,{}),initialScrollIndex:0,contentItemWidth:De,contentWidth:h,showsVerticalScrollIndicator:!1})}),[R,h]),_=(0,o.useCallback)((function(){return U&&"classic"!==M?.deviceType?(0,m.jsxs)(c.YStack,{height:"100%",children:[(0,m.jsx)(I,{createAddressDisabled:!0,padding:"$5"}),(0,m.jsxs)(c.Stack,{flex:1,justifyContent:"center",children:[(0,m.jsx)(c.Empty,{icon:"LinkSolid",title:"Selected network supports only 「Classic」"}),";"]})]}):k?$?(0,m.jsx)(Re,{networkId:null!=(t=j?.id)?t:"",accountId:null!=(r=k?.id)?r:"",children:(0,m.jsx)(m.Fragment,{children:D()})}):(0,m.jsx)(m.Fragment,{children:D()}):(0,m.jsxs)(c.YStack,{height:"100%",children:[(0,m.jsx)(I,{padding:"$5"}),(0,m.jsx)(c.Stack,{flex:1,justifyContent:"center",children:(0,m.jsx)(d.TP,{name:w,chain:null!=(e=j?.name)?e:"",type:null!=(n=x?.labelKey?g.formatMessage({id:x?.labelKey}):x?.label)?n:""})})]});var e,n,t,r}),[U,M?.deviceType,k,$,D,w,j?.name,j?.id,x?.labelKey,x?.label,g]),B=(0,o.useCallback)((function(){if(!P)return null;var e=(0,m.jsx)(c.Stack,{h:"100%",justifyContent:"center",children:(0,m.jsx)(d.Bl,{})});return S&&(e=_()),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p.i,{showHeaderRight:!0,sceneName:n}),(0,m.jsxs)(c.Page.Body,{children:[(0,m.jsx)(UpdateReminder,{}),(0,m.jsx)(A.a,{}),e]})]})}),[P,S,n,_]);return(0,o.useMemo)((function(){return(0,m.jsx)(c.Page,{children:B()})}),[B])}},952954:(e,n,t)=>{t.d(n,{U:()=>Tutorials,y:()=>c});var r=t(324586),o=t(839850),i=t(490343),a=t(831085),s=["list"];function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Tutorials(e){var{list:n}=e,t=(0,o.A)(e,s);return(0,a.jsx)(i.Stack,_objectSpread(_objectSpread({mt:"$10"},t),{},{children:n.map((function({title:e,description:n,iconName:t},r){return(0,a.jsxs)(i.XStack,_objectSpread(_objectSpread({},0!==r&&{mt:"$5"}),{},{children:[t?(0,a.jsx)(i.Stack,{px:"$0.5",mr:"$4",children:(0,a.jsx)(i.Icon,{name:t,flexShrink:0,color:"$iconSubdued",size:"$5"})}):null,(0,a.jsxs)(i.Stack,{flex:1,children:[(0,a.jsx)(i.SizableText,{size:"$bodyMd",children:e}),(0,a.jsx)(i.SizableText,{size:"$bodyMd",mt:"$1",color:"$textSubdued",children:n})]})]}),e)}))}))}var c=[{title:"What is a recovery phrase?",description:"A series of 12, 18, or 24 words to restore your wallet."},{title:"Is it safe to enter it into OneKey?",description:"Yes, it's stored locally and never shared without consent."},{title:"Why can't I type full words?",description:"To prevent keylogger attacks. Use suggested words for security."},{title:"Why can't I paste directly?",description:"To reduce risk of asset loss, avoid pasting sensitive information."}]},471230:(e,n,t)=>{t.d(n,{YG:()=>u,U9:()=>i.U});t(490343),t(791088);var r=t(730223),o=t(498356);t(831085);var i=t(952954),a=t(586330),s=t(514041),c=t(318822),l=t(310955);var u=(0,s.memo)((function OnboardingOnMountCmp(){var e=(0,o.A)(),n=(0,s.useCallback)((0,a.A)((function*(){var{isOnboardingDone:n}=yield l.A.serviceOnboarding.isOnboardingDone();n||e.pushFullModal(r.ry.OnboardingModal,{screen:r.xl.GetStarted})})),[e]);return(0,s.useEffect)((function(){n()}),[n]),(0,s.useEffect)((function(){return c.iL.on(c.Tu.WalletClear,n),function(){c.iL.off(c.Tu.WalletClear,n)}}),[n]),null}))},639451:(e,n,t)=>{t.d(n,{Ed:()=>s,Xo:()=>a,xf:()=>useDownloadProgress});var r,o,i=t(586330),a=(r=(0,i.A)((function*(){})),function downloadPackage(){return r.apply(this,arguments)}),s=(o=(0,i.A)((function*(){})),function installPackage(){return o.apply(this,arguments)}),useDownloadProgress=function(){return 0}},259641:(e,n,t)=>{t.d(n,{G:()=>isAvailableAsync,w:()=>shareAsync});var r=t(586330),o=t(72631),i=t(324586);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,i.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const a={get name(){return"ExpoSharing"},isAvailableAsync:()=>(0,r.A)((function*(){return"undefined"!=typeof navigator&&!!navigator.share}))(),shareAsync:(e,n={})=>(0,r.A)((function*(){if(!navigator.share)throw new o.V("navigator","share");yield navigator.share(_objectSpread(_objectSpread({},n),{},{url:e}))}))()};function isAvailableAsync(){return _isAvailableAsync.apply(this,arguments)}function _isAvailableAsync(){return(_isAvailableAsync=(0,r.A)((function*(){return!!a&&(!a.isAvailableAsync||(yield a.isAvailableAsync()))}))).apply(this,arguments)}function shareAsync(e){return _shareAsync.apply(this,arguments)}function _shareAsync(){return(_shareAsync=(0,r.A)((function*(e,n={}){if(!a||!a.shareAsync)throw new o.V("Sharing","shareAsync");return yield a.shareAsync(e,n)}))).apply(this,arguments)}}}]);