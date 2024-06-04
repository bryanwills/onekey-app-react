"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[14275],{214275:(e,r,t)=>{t.r(r),t.d(r,{default:()=>MarketHomeWithProvider});var n=t(324586),o=t(514041),a=t(490343),i=t(734809),c=t(310955),s=t(908867),l=t(217715),u=t(831085);function MarketHomeHeader(){var e=(0,s.A)(),r=(0,o.useCallback)((function(){return null}),[]),t=(0,o.useCallback)((function(){return(0,u.jsx)(a.Stack,{width:280,children:(0,u.jsx)(l.I,{})})}),[]);return(0,u.jsx)(a.Page.Header,{title:e.formatMessage({id:"title__market"}),headerLeft:r,headerRight:t})}var d=t(663522);function MarketHomeHeader_md_MarketHomeHeader(){var e=(0,s.A)(),r=(0,o.useCallback)((function(){return(0,u.jsx)(a.SizableText,{size:"$headingLg",ml:d.Ay.isNativeIOS?"$1":void 0,children:e.formatMessage({id:"title__market"})})}),[e]),t=(0,o.useCallback)((function(){return null}),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Page.Header,{title:"",headerLeft:r,headerRight:t}),(0,u.jsx)(a.Stack,{px:"$5",pb:"$3",children:(0,u.jsx)(l.I,{})})]})}var m=t(586330),h=t(839850),p=t(17617),f=t(32943),b=t(911998),g=t(730223),j=t(791088),x=t(498356),k=t(450255);var y=(0,o.memo)((function BasicMarketMore({coingeckoId:e}){var r=(0,k.B)(),t=(0,o.useCallback)((function(){r.removeFormWatchList(e)}),[r,e]),n=(0,o.useCallback)((function(){r.MoveToTop(e)}),[r,e]),i=(0,o.useMemo)((function(){return[{items:[{destructive:!0,icon:"DeleteOutline",label:"Remove from Favorites",onPress:t},{icon:"ArrowTopOutline",label:"Move to Top",onPress:n}]}]}),[n,t]);return(0,u.jsx)(a.ActionList,{title:"",renderTrigger:(0,u.jsx)(a.IconButton,{icon:"DotVerSolid",variant:"tertiary",mx:"$3",iconSize:"$5"}),sections:i})})),S=t(172120),v=t(781889),$=(0,o.forwardRef)((function({height:e,width:r},t){return(0,u.jsx)(a.View,{width:r,height:e,children:(0,u.jsx)("canvas",{style:{width:`${r}px`,height:`${e}px`},ref:t})})}));$.displayName="Canvas";const C=(0,o.memo)((function({data:e,lineColor:r="rgba(0, 184, 18, 1)",linearGradientColor:t="rgba(0, 184, 18, 0.3)",height:n=40,width:a=50,lineWidth:i=2,smooth:c=!0,scale:s=.1}){var l,d=(0,o.useMemo)((function(){return window.devicePixelRatio||1}),[]),h=(0,o.useCallback)((l=(0,m.A)((function*(o){if(o){o.width=a*d,o.height=n*d;var l=n-5,u=e||[],m=Math.max(...u),h=Math.min(...u),p=l/(m-h),f=o.getContext("2d");if(f){f.scale(d,d),f.beginPath(),f.lineWidth=i,f.strokeStyle=r;var b=a/(u.length-1),g=0,j=0;u.forEach((function(e,r){var t=l-(e-h)*p;if(c&&r>=2&&r<u.length-1){var n=b*(r-1),o=l-(u[r-1]-h)*p,a=b*(r-2),i=l-(u[r-2]-h)*p,d=b*(r+1),m=l-(u[r+1]-h)*p,x=n+(g-a)*s,k=o+(t-i)*s,y=g-(d-n)*s,S=t-(m-o)*s;k<0&&(k=0),S<0&&(S=0),f.bezierCurveTo(x,k,y,S,g,t)}else f.lineTo(g,t);r===u.length-1&&(j=t),g+=b})),f.lineTo(g+b,j),f.lineTo(g+b,n),f.lineTo(0,n),f.stroke(),f.closePath();var x=f.createLinearGradient(0,0,0,l);x.addColorStop(0,t),x.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=x,f.fill(),f.clearRect(0,n-i,a,i)}}})),function(e){return l.apply(this,arguments)}),[a,d,n,e,i,r,c,s,t]);return(0,u.jsx)($,{width:a,height:n,ref:h})}));var w=["label","value","onPress","variant"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function OptionButton(e){var{label:r,value:t,onPress:n,variant:i}=e,c=(0,h.A)(e,w),s=(0,o.useCallback)((function(){n(t)}),[n,t]);return(0,u.jsx)(a.Button,_objectSpread(_objectSpread({variant:i,onPress:s},c),{},{children:r}))}function ToggleButton({value:e,title:r,options:t,onChange:n}){return(0,u.jsxs)(a.YStack,{children:[(0,u.jsx)(a.SizableText,{size:"$bodyMdMedium",children:r}),(0,u.jsx)(a.XStack,{flexWrap:"wrap",space:"$3",children:t.map((function({label:r,value:t}){return(0,u.jsx)(OptionButton,{mt:"$2",variant:t===e?"primary":void 0,label:r,value:t,onPress:n},t)}))})]})}var P=t(610101),O=["alignLeft","alignRight","children","width","sortType","order","onPress","cursor","name"];function MarketHomeList_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function MarketHomeList_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?MarketHomeList_ownKeys(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):MarketHomeList_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Column(e){var{alignLeft:r,alignRight:t,children:n,width:i,sortType:c,order:s,onPress:l,cursor:d,name:m}=e,p=(0,h.A)(e,O),f=(0,o.useMemo)((function(){return r?"flex-start":t?"flex-end":void 0}),[r,t]),b=c===m&&s,g=(0,o.useCallback)((function(){l?.(m)}),[m,l]),j=(0,o.useCallback)((function(){return b?(0,u.jsx)(a.Icon,{cursor:d,name:"desc"===s?"ChevronDownSmallOutline":"ChevronTopSmallOutline",color:"$iconSubdued",size:"$4"}):null}),[d,s,b]);return(0,u.jsxs)(a.XStack,MarketHomeList_objectSpread(MarketHomeList_objectSpread({testID:`list-column-${m}`,jc:f,ai:"center",alignItems:"center",width:i,onPress:g},p),{},{children:["flex-end"===f?j():null,"string"==typeof n?(0,u.jsx)(a.SizableText,{cursor:d,color:"$textSubdued",size:"$bodySmMedium",selectable:!1,children:n}):n,"flex-start"===f?j():null]}),m)}var useBuildTableHeaderConfig=function(){return{serialNumber:function(){return"#"},name:function(){return"Name"},price:function(){return"Price"},priceChangePercentage1H:function(){return"1h%"},priceChangePercentage24H:function(){return"24h%"},priceChangePercentage7D:function(){return"7d%"},totalVolume:function(){return"24h volume"},marketCap:function(){return"Market cap"},sparkline:function(){return"Last 7 days"}}},useBuildTableRowConfig=function(e=!1){(0,x.A)();return(0,o.useMemo)((function(){return{serialNumber:function(e){return(0,u.jsx)(a.SizableText,{size:"$bodyMd",color:"$textSubdued",children:e.serialNumber})},name:function(e){return(0,u.jsxs)(a.XStack,{space:"$3",ai:"center",children:[(0,u.jsx)(a.Image,{src:decodeURIComponent(e.image),size:"$8",borderRadius:"$full"}),(0,u.jsxs)(a.YStack,{width:"$20",children:[(0,u.jsx)(a.SizableText,{size:"$bodyLgMedium",children:e.symbol.toUpperCase()}),(0,u.jsx)(a.SizableText,{size:"$bodySm",color:"$textSubdued",numberOfLines:1,children:e.name})]})]})},price:function(e){return(0,u.jsx)(a.NumberSizeableText,{size:"$bodyMd",formatter:"price",formatterOptions:{currency:"$"},children:e.price})},priceChangePercentage1H:function(e){return(0,u.jsx)(v.E,{children:e.priceChangePercentage1H})},priceChangePercentage24H:function(e){return(0,u.jsx)(v.E,{children:e.priceChangePercentage24H})},priceChangePercentage7D:function(e){return(0,u.jsx)(v.E,{children:e.priceChangePercentage7D})},totalVolume:function(e){return(0,u.jsx)(a.NumberSizeableText,{size:"$bodyMd",formatter:"marketCap",formatterOptions:{currency:"$"},children:e.totalVolume})},marketCap:function(e){return(0,u.jsx)(a.NumberSizeableText,{size:"$bodyMd",formatter:"marketCap",formatterOptions:{currency:"$"},children:e.marketCap})},sparkline:function(e){return(0,u.jsx)(C,{data:e.sparkline,width:144,height:40,lineColor:e.priceChangePercentage24H&&Number(e.priceChangePercentage24H)>=0?"#33C641":"#FF6259",linearGradientColor:e.priceChangePercentage24H&&Number(e.priceChangePercentage24H)>=0?"rgba(0, 184, 18, 0.2)":"rgba(255, 98, 89, 0.2)"})},actions:function(r){return(0,u.jsxs)(a.XStack,{children:[(0,u.jsx)(S.J,{coingeckoId:r.coingeckoId,mx:"$3"}),e?(0,u.jsx)(y,{coingeckoId:r.coingeckoId}):null]})}}}),[e])};function TableRow({item:e={},tableConfig:r,minHeight:t=60,onPress:n,sortType:i,onSortTypeChange:c,showMoreAction:s=!1,showListItemPressStyle:l=!1,isLoading:d,py:m}){var{serialNumber:h,name:p,price:f,priceChangePercentage1H:b,priceChangePercentage24H:g,priceChangePercentage7D:x,totalVolume:k,marketCap:y,sparkline:S,actions:v}=r,{gtLg:$}=(0,a.useMedia)(),C=(0,o.useCallback)((function(){n?.(e)}),[e,n]),w=!(!i&&!c),P=(0,o.useCallback)((function(e){if(w){if(e===i?.columnName){var r="desc";return"desc"===i?.order?r="asc":"asc"===i?.order&&(r=void 0),void c?.({columnName:e,order:r})}c?.({columnName:e,order:"desc"})}}),[c,i?.columnName,i?.order,w]),O=w?"pointer":void 0;return(0,u.jsxs)(a.XStack,MarketHomeList_objectSpread(MarketHomeList_objectSpread({space:"$3",px:"$5",py:m,minHeight:t,onPress:C},l&&j.Y),{},{children:[(0,u.jsx)(Column,{name:"serialNumber",alignLeft:!0,width:40,sortType:i?.columnName,order:i?.order,onPress:P,cursor:O,children:d?(0,u.jsx)(a.Skeleton,{w:"$4",h:"$3"}):h?.(e)}),(0,u.jsx)(Column,{name:"name",alignLeft:!0,width:140,sortType:i?.columnName,order:i?.order,onPress:P,cursor:O,children:d?(0,u.jsxs)(a.XStack,{space:"$3",children:[(0,u.jsx)(a.Skeleton,{w:"$8",h:"$8",radius:"round"}),(0,u.jsxs)(a.YStack,{space:"$2",children:[(0,u.jsx)(a.Skeleton,{w:"$16",h:"$3"}),(0,u.jsx)(a.Skeleton,{w:"$24",h:"$3"})]})]}):p?.(e)}),(0,u.jsx)(Column,{name:"price",alignRight:!0,flexGrow:1,flexBasis:0,sortType:i?.columnName,order:i?.order,onPress:P,cursor:O,children:d?(0,u.jsx)(a.Skeleton,{w:"$20",h:"$3"}):f?.(e)}),(0,u.jsx)(Column,{name:"priceChangePercentage1H",alignRight:!0,flexGrow:1,flexBasis:0,sortType:i?.columnName,order:i?.order,onPress:P,cursor:O,children:d?(0,u.jsx)(a.Skeleton,{w:"$10",h:"$3"}):b?.(e)}),(0,u.jsx)(Column,{name:"priceChangePercentage24H",alignRight:!0,flexGrow:1,flexBasis:0,sortType:i?.columnName,order:i?.order,onPress:P,cursor:O,children:d?(0,u.jsx)(a.Skeleton,{w:"$10",h:"$3"}):g?.(e)}),(0,u.jsx)(Column,{flexGrow:1,flexBasis:0,name:"priceChangePercentage7D",alignRight:!0,sortType:i?.columnName,order:i?.order,onPress:P,cursor:O,children:d?(0,u.jsx)(a.Skeleton,{w:"$10",h:"$3"}):x?.(e)}),(0,u.jsx)(Column,{flexGrow:1,flexBasis:0,name:"totalVolume",alignRight:!0,sortType:i?.columnName,order:i?.order,onPress:P,cursor:O,children:d?(0,u.jsx)(a.Skeleton,{w:"$20",h:"$3"}):k?.(e)}),(0,u.jsx)(Column,{flexGrow:1,flexBasis:0,name:"marketCap",alignRight:!0,sortType:i?.columnName,order:i?.order,onPress:P,cursor:O,children:d?(0,u.jsx)(a.Skeleton,{w:"$20",h:"$3"}):y?.(e)}),$?(0,u.jsx)(Column,{minWidth:160,name:"sparkline",alignRight:!0,pl:"$4",sortType:i?.columnName,order:i?.order,onPress:P,cursor:O,children:d?(0,u.jsx)(a.Skeleton,{w:"$20",h:"$3"}):S?.(e)}):null,(0,u.jsx)(Column,{name:"action",width:s?88:64,jc:"center",px:"$3",onPress:P,cursor:O,children:d?null:v?.(e)})]}))}function PopoverSettingsContent({dataDisplay:e,priceChange:r,onConfirm:t}){var{closePopover:n}=(0,a.usePopoverContext)(),[i,c]=(0,o.useState)(e),[s,l]=(0,o.useState)(r);return(0,u.jsxs)(a.YStack,{px:"$5",space:"$5",children:[(0,u.jsx)(ToggleButton,{title:"Data Display",value:i,onChange:c,options:[{label:"Price",value:"price"},{label:"24h volume",value:"totalVolume"},{label:"Market Cap",value:"marketCap"}]}),(0,u.jsx)(ToggleButton,{title:"Price Change",value:s,onChange:l,options:[{label:"1 hour",value:"priceChangePercentage1H"},{label:"24 hour",value:"priceChangePercentage24H"},{label:"7 days",value:"priceChangePercentage7D"}]}),(0,u.jsx)(a.Button,{my:"$5",variant:"primary",onPress:(0,m.A)((function*(){yield n?.(),t({dataDisplay:i,priceChange:s})})),children:"Confirm"})]})}function TableMdSkeletonRow(){return(0,u.jsxs)(a.XStack,{h:60,jc:"space-between",children:[(0,u.jsxs)(a.XStack,{space:"$3",ai:"center",children:[(0,u.jsx)(a.Skeleton,{w:"$10",h:"$10",radius:"round"}),(0,u.jsxs)(a.YStack,{space:"$2",children:[(0,u.jsx)(a.Skeleton,{w:"$16",h:"$2.5"}),(0,u.jsx)(a.Skeleton,{w:"$24",h:"$2.5"})]})]}),(0,u.jsxs)(a.XStack,{space:"$5",ai:"center",children:[(0,u.jsx)(a.Skeleton,{w:"$16",h:"$2.5"}),(0,u.jsx)(a.Skeleton,{w:"$16",h:"$2.5"})]})]})}function ListEmptyComponent(){var{gtMd:e}=(0,a.useMedia)();return e?(0,u.jsx)(a.YStack,{children:new Array(6).fill(0).map((function(e){return(0,u.jsx)(TableRow,{isLoading:!0,showMoreAction:!0,tableConfig:{},minHeight:52},e)}))}):(0,u.jsx)(a.YStack,{px:"$5",children:new Array(6).fill(0).map((function(e,r){return(0,u.jsx)(TableMdSkeletonRow,{},r)}))})}function MdPlaceholder(){return(0,u.jsx)(a.Stack,{borderRadius:"$2",width:"$20",height:"$8",bg:"$bgDisabled",jc:"center",ai:"center",children:(0,u.jsx)(a.SizableText,{size:"$bodyMdMedium",children:"-"})})}function MarketHomeList({category:e,showMoreAction:r=!1}){var t,n=(0,x.A)(),{result:i}=(0,b.yk)((0,m.A)((function*(){return c.A.serviceMarket.fetchCategory(e.categoryId,e.coingeckoIds,!0)})),[e.categoryId,e.coingeckoIds]),s=useBuildTableRowConfig(r),l=(0,o.useCallback)((function(e){n.push(g.FE.MarketDetail,{coinGeckoId:e.coingeckoId,icon:e.image,symbol:e.symbol})}),[n]),{gtMd:d}=(0,a.useMedia)(),h=useBuildTableHeaderConfig(),y=(0,o.useMemo)((function(){return e.coingeckoIds?.length?i?.filter((function(r){return e.coingeckoIds.includes(r.coingeckoId)})):i}),[i,e.coingeckoIds]),{sortedListData:S,handleSortTypeChange:v,sortByType:$,setSortByType:C}=(0,P.K)(y),w=(0,o.useMemo)((function(){return(0,u.jsx)(TableRow,{showMoreAction:r,tableConfig:h,minHeight:"$4",sortType:$,onSortTypeChange:v,py:"$2"})}),[v,r,$,h]),O=(0,o.useCallback)((function({item:e}){return(0,u.jsx)(TableRow,{showListItemPressStyle:!0,showMoreAction:r,tableConfig:s,item:e,minHeight:60,onPress:l})}),[r,s,l]),[M,T]=(0,o.useState)(["price","priceChangePercentage24H"]),I=(0,k.B)(),H=(0,o.useCallback)((t=(0,m.A)((function*({coingeckoId:e,symbol:t}){var n=I.isInWatchList(e),o=t.toUpperCase();a.ActionList.show(n?{title:o,sections:[{items:[{destructive:!0,icon:"DeleteOutline",label:"Remove from Favorites",onPress:function(){I.removeFormWatchList(e)}},r&&{icon:"ArrowTopOutline",label:"Move to Top",onPress:function(){I.MoveToTop(e)}}].filter(Boolean)}]}:{title:o,sections:[{items:[{icon:"StarOutline",label:"Add to Favorites",onPress:function(){I.addIntoWatchList(e)}}]}]})})),function(e){return t.apply(this,arguments)}),[I,r]),L=(0,o.useCallback)((function({item:e}){return(0,u.jsx)(f.Dc,{onPress:function(){return l(e)},onLongPress:function(){return H(e)},children:(0,u.jsxs)(a.XStack,MarketHomeList_objectSpread(MarketHomeList_objectSpread({px:"$5",height:60,justifyContent:"space-between",userSelect:"none"},j.Y),{},{children:[(0,u.jsxs)(a.XStack,{space:"$3",ai:"center",children:[(0,u.jsx)(a.Image,{src:decodeURIComponent(e.image),size:"$10",borderRadius:"$full"}),(0,u.jsxs)(a.YStack,{children:[(0,u.jsx)(a.SizableText,{size:"$bodyLgMedium",children:e.symbol.toUpperCase()}),(0,u.jsxs)(a.SizableText,{size:"$bodySm",color:"$textSubdued",children:["VOL ",(0,u.jsx)(a.NumberSizeableText,{size:"$bodySm",formatter:"marketCap",color:"$textSubdued",formatterOptions:{currency:"$"},children:e.totalVolume})]})]})]}),(0,u.jsxs)(a.XStack,{ai:"center",space:"$5",flexShrink:1,children:[(0,u.jsx)(a.NumberSizeableText,{flexShrink:1,numberOfLines:1,size:"$bodyLgMedium",formatter:"price"===M[0]?"price":"marketCap",formatterOptions:{currency:"$"},children:e[M[0]]}),e[M[1]]?(0,u.jsx)(a.XStack,{width:"$20",height:"$8",jc:"center",ai:"center",backgroundColor:Number(e.priceChangePercentage24H)>0?"$bgSuccessStrong":"$bgCriticalStrong",borderRadius:"$2",children:(0,u.jsx)(a.NumberSizeableText,{size:"$bodyMdMedium",color:"white",formatter:"priceChange",children:e[M[1]]})}):(0,u.jsx)(MdPlaceholder,{})]})]}))})}),[H,M,l]),z=(0,o.useCallback)((function({label:e}){return(0,u.jsxs)(a.XStack,{ai:"center",space:"$1",children:[(0,u.jsx)(a.SizableText,{children:e}),(0,u.jsx)(a.Icon,{name:"ChevronBottomSolid",size:"$4"})]})}),[]),A=(0,o.useCallback)((function({dataDisplay:e,priceChange:r}){T([e,r])}),[]),[N,D]=(0,o.useState)(),R=(0,o.useMemo)((function(){return[{label:"Last price",value:"last_price",options:{columnName:"price",order:"desc"}},{label:"Most 24h volume",value:"Most 24h volume",options:{columnName:"totalVolume",order:"desc"}},{label:"Most market cap",value:"Most market cap",options:{columnName:"marketCap",order:"desc"}},{label:"Price change up",value:"Price change up",options:{columnName:M[1],order:"desc"}},{label:"Price change down",value:"Price change down",options:{columnName:M[1],order:"desc"}}]}),[M]),B=(0,o.useCallback)((function(e){D(e);var r=R.find((function(r){return r.value===e}));r?.options&&C(r?.options)}),[R,C]),[W,_]=(0,o.useState)(!1),E=(0,o.useRef)(null),K=(0,o.useCallback)((function(e){return _(e.nativeEvent.contentOffset.y>0)}),[]),X=(0,o.useCallback)((function(){E.current&&E.current?.scrollToOffset({offset:0,animated:!0})}),[]);return(0,u.jsxs)(u.Fragment,{children:[d?void 0:(0,u.jsx)(a.YStack,{px:"$5",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:(0,u.jsxs)(a.XStack,{h:"$11",ai:"center",justifyContent:"space-between",children:[(0,u.jsxs)(a.XStack,{ai:"center",space:"$2",children:[(0,u.jsx)(a.Icon,{name:"FilterSortOutline",color:"$iconSubdued",size:"$5"}),(0,u.jsx)(a.Select,{items:R,title:"Sort by",value:N,onChange:B,renderTrigger:z})]}),(0,u.jsx)(a.Popover,{title:"Settings",renderTrigger:(0,u.jsx)(a.IconButton,{icon:"SliderVerOutline",color:"$iconSubdued",size:"small",variant:"tertiary",iconSize:"$5"}),renderContent:(0,u.jsx)(PopoverSettingsContent,{dataDisplay:M[0],priceChange:M[1],onConfirm:A})})]})}),(0,u.jsxs)(a.YStack,{flex:1,py:"$3",children:[d?w:void 0,(0,u.jsx)(a.ListView,{ref:E,stickyHeaderHiddenOnScroll:!0,estimatedItemSize:60,onScroll:K,scrollEventThrottle:100,data:S,renderItem:d?O:L,ListFooterComponent:(0,u.jsx)(a.Stack,{height:60}),ListEmptyComponent:(0,u.jsx)(ListEmptyComponent,{}),extraData:d?void 0:M}),W?(0,u.jsx)(a.Stack,{position:"absolute",bg:"$bg",borderRadius:"$full",bottom:d?"$8":"$4",right:d?"$8":"$4",children:(0,u.jsx)(a.IconButton,{borderWidth:p.A.hairlineWidth,borderColor:"$transparent",iconColor:"$icon",icon:"AlignTopOutline",onPress:X})}):null]})]})}var M=t(310944);function RecommendItem({icon:e,checked:r=!1,onChange:t,tokenName:n,symbol:o,coingeckoId:i}){return(0,u.jsxs)(a.XStack,{cursor:"pointer",flexGrow:1,flexBasis:0,justifyContent:"space-between",px:"$4",py:"$3.5",bg:"$bgSubdued",borderColor:"$borderSubdued",borderWidth:"$px",borderRadius:"$3",onPress:function(){t(!r,i)},ai:"center",children:[(0,u.jsxs)(a.XStack,{space:"$3",ai:"center",flexShrink:1,children:[(0,u.jsx)(a.Image,{src:decodeURIComponent(e),size:"$8",borderRadius:"$full"}),(0,u.jsxs)(a.YStack,{flexShrink:1,children:[(0,u.jsx)(a.SizableText,{selectable:!1,size:"$bodyLgMedium",numberOfLines:1,children:o.toUpperCase()}),(0,u.jsx)(a.SizableText,{selectable:!1,size:"$bodyMd",color:"$textSubdued",flexShrink:1,numberOfLines:1,children:n})]})]}),r?(0,u.jsx)(a.Icon,{name:"CheckRadioSolid",size:"$6",color:"$iconActive"}):(0,u.jsx)(a.Stack,{w:"$6",h:"$6"})]})}var T=8;function MarketWatchList({category:e}){var[{data:r,loading:t}]=(0,M.Kv)(),n=(0,k.B)(),i=(0,o.useMemo)((function(){return e?.recommendedTokens?.slice(0,T)?.map((function(e){return e.coingeckoId}))||[]}),[e.recommendedTokens]),[c,s]=(0,o.useState)(i),l=(0,o.useCallback)((function(e,r){s((function(t){return e?[...t,r]:t.filter((function(e){return e!==r}))}))}),[]),d=(0,o.useCallback)((function(){n.addIntoWatchList(c)}),[n,c]),{gtMd:m}=(0,a.useMedia)(),h=(0,o.useCallback)((function(){return e?.recommendedTokens?(0,u.jsxs)(a.YStack,{flex:1,ai:"center",jc:"center",px:"$5",py:"$8",children:[(0,u.jsx)(a.SizableText,{size:"$heading3xl",children:"Your watchlist is empty"}),(0,u.jsx)(a.SizableText,{size:"$bodyLgMedium",pt:"$2",children:"Add your favorite tokens to watchlist"}),(0,u.jsxs)(a.YStack,{pt:"$8",space:"$2.5",flexWrap:"wrap",width:"100%",$gtMd:{maxWidth:480},children:[new Array(Math.ceil(T/2)).fill(0).map((function(r,t){return(0,u.jsx)(a.XStack,{space:"$2.5",children:new Array(2).fill(0).map((function(r,n){var o=e.recommendedTokens?.[2*t+n];return o?(0,u.jsx)(RecommendItem,{coingeckoId:o.coingeckoId,checked:c.includes(o.coingeckoId),icon:o.iconUrl,symbol:o.symbol,tokenName:o.name,onChange:l},o.coingeckoId):null}))},t)})),(0,u.jsx)(a.Button,{mt:"$8",width:"100%",size:"large",disabled:!c.length,variant:"primary",onPress:d,children:c.length?`Add ${c.length} tokens`:"Add tokens"})]})]}):null}),[e.recommendedTokens,c,d,l]);return t?null:0===r?.length?h():(0,u.jsx)(MarketHomeList,{showMoreAction:m,category:{categoryId:"all",coingeckoIds:r?.map((function({coingeckoId:e}){return e}))}})}var I=t(802172);function MarketHome_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function MarketHome(){var[e,r]=(0,o.useState)([]);(0,o.useEffect)((function(){c.A.serviceMarket.fetchCategories().then((function(e){r(e)}))}),[]);var{gtMd:t}=(0,a.useMedia)(),i=(0,o.useMemo)((function(){return e?.map((function(e,r){return{title:e.name,page:function(){return 0===r?(0,u.jsx)(MarketWatchList,{category:e}):(0,u.jsx)(MarketHomeList,{category:e})}}}))||[]}),[e]);return(0,u.jsxs)(a.Page,{children:[t?(0,u.jsx)(MarketHomeHeader,{}):(0,u.jsx)(MarketHomeHeader_md_MarketHomeHeader,{}),(0,u.jsx)(a.Page.Body,{children:(0,u.jsx)(a.Tab.Page,{data:i,headerProps:{contentContainerStyle:{paddingRight:"$5"},renderItem:function(e,r,o){return 0!==r||t?(0,u.jsx)(a.Tab.SelectedLabel,function MarketHome_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?MarketHome_ownKeys(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):MarketHome_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},o)):(0,u.jsx)(a.Icon,{name:"StarOutline"})}},onSelectedPageIndex:function(e){console.log("选中",e)}})})]})}function MarketHomeWithProvider(){return(0,u.jsx)(I.m,{storeName:i.EJotaiContextStoreNames.marketWatchList,children:(0,u.jsx)(MarketHome,{})})}},802172:(e,r,t)=>{t.d(r,{m:()=>u});var n=t(324586),o=t(514041),a=t(2577),i=t(597102),c=t(310944),s=t(907481),l=t(831085);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u=(0,o.memo)((function(e){var{children:r,storeName:t}=e,n=(0,s.z)(t),o=a.A.getOrCreateStore(n);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.H,_objectSpread({},n)),(0,l.jsx)(c.Hn,{store:o,children:r})]})}));u.displayName="MarketWatchListProviderMirror"},217715:(e,r,t)=>{t.d(r,{I:()=>MarketHomeHeaderSearchBar});var n=t(514041),o=t(490343),a=t(498356),i=t(730223),c=t(390574),s=t(506851),l=t(831085);function MarketHomeHeaderSearchBar(){var e=(0,a.A)(),r=(0,n.useCallback)((function(){e.pushModal(i.ry.UniversalSearchModal,{screen:c.j.UniversalSearch,params:{filterType:s.j.MarketToken}})}),[e]);return(0,l.jsxs)(o.XStack,{$gtMd:{minWidth:280},children:[(0,l.jsx)(o.SearchBar,{placeholder:"Search symbol, contract address",containerProps:{w:"100%"},$gtMd:{size:"small"}},"MarketHomeSearchInput"),(0,l.jsx)(o.View,{position:"absolute",top:0,left:0,right:0,bottom:0,onPress:r})]})}},172120:(e,r,t)=>{t.d(r,{J:()=>d});var n=t(324586),o=t(839850),a=t(514041),i=t(728234),c=t(490343),s=t(450255),l=t(831085),u=["coingeckoId"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var d=(0,a.memo)((function BasicMarketStar(e){var{coingeckoId:r}=e,t=(0,o.A)(e,u),d=(0,s.B)(),[m,h]=(0,a.useState)((function(){return d.isInWatchList(r)})),p=(0,i.jH)();(0,a.useEffect)((function(){p&&h(d.isInWatchList(r))}),[d,r,p]);var f=(0,a.useCallback)((function(){m?d.removeFormWatchList(r):d.addIntoWatchList(r),h(!m)}),[d,r,m]);return(0,l.jsx)(c.IconButton,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({icon:m?"StarSolid":"StarOutline",variant:"tertiary",iconSize:"$5",iconProps:{color:m?"$iconActive":"$iconDisabled"},onPress:f},t))}))},781889:(e,r,t)=>{t.d(r,{E:()=>PriceChangePercentage});var n=t(324586),o=t(839850),a=t(490343),i=t(831085),c=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function PriceChangePercentage(e){var{children:r}=e,t=(0,o.A)(e,c);return r?(0,i.jsx)(a.NumberSizeableText,_objectSpread(_objectSpread({size:"$bodyMd",formatter:"priceChange",color:Number(r)>0?"$textSuccess":"$textCritical",formatterOptions:{showPlusMinusSigns:!0}},t),{},{children:r})):(0,i.jsx)(a.SizableText,{size:"$bodyMd",children:"-"})}},610101:(e,r,t)=>{t.d(r,{K:()=>useSortType});var n=t(514041),useSortType=function(e,r){var t=(0,n.useRef)(),o=(0,n.useRef)(r);!t.current&&e?.length&&(t.current=e),o.current!==r&&(o.current=r,t.current=e);var[a,i]=(0,n.useState)({columnName:"default",order:"desc"}),c=(0,n.useCallback)((function(e){i(e)}),[]),s=(0,n.useMemo)((function(){var r=t.current?.[0]?.[a.columnName];return r&&a.order?"number"==typeof r?t.current?.slice().sort((function(e,r){var t=e[a.columnName],n=r[a.columnName];return"desc"===a.order?n-t:t-n})):"string"==typeof r?t.current?.slice().sort((function(e,r){var t=e[a.columnName],n=r[a.columnName];return"desc"===a.order?t.charCodeAt(0)-n.charCodeAt(0):n.charCodeAt(0)-t.charCodeAt(0)})):e:e}),[e,a.columnName,a.order]);return(0,n.useMemo)((function(){return{sortedListData:s,handleSortTypeChange:c,sortByType:a,setSortByType:i}}),[c,a,s,i])}},450255:(e,r,t)=>{t.d(r,{B:()=>useWatchListAction});var n=t(514041),o=t(310944),useWatchListAction=function(){var e=(0,o.qr)(),r=(0,n.useCallback)((function(r){var t={coingeckoId:r};e.current.removeFormWatchList(t)}),[e]),t=(0,n.useCallback)((function(r){var t=Array.isArray(r)?r:[r];e.current.addIntoWatchList(t.map((function(e){return{coingeckoId:e}})))}),[e]),a=(0,n.useCallback)((function(r){var t={coingeckoId:r};e.current.moveToTop(t)}),[e]),i=(0,n.useCallback)((function(r){return e.current.isInWatchList(r)}),[e]);return(0,n.useMemo)((function(){return{removeFormWatchList:r,addIntoWatchList:t,MoveToTop:a,isInWatchList:i}}),[a,t,i,r])}}}]);