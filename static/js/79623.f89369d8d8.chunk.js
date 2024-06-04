"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[79623,43103],{643103:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__,mapIndexToData:()=>mapIndexToData});var r=n(324586),o=n(514041),c=n(490343),i=n(791088),a=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var mapIndexToData=function(e,t,n){return{index:t,backgroundColor:function(e,t=25){var n=e*(255/(t-1));return`rgb(${n}, ${Math.abs(128-n)}, ${255-n})`}(t,n.length)}};const __WEBPACK_DEFAULT_EXPORT__=function(){var[e,t]=(0,o.useState)(new Array(15).fill({}).map(mapIndexToData)),[n,r]=(0,o.useState)(!1),s=(0,o.useCallback)((function(){return(0,a.jsx)(c.Button,{onPress:function(){return r(!n)},children:n?"Done":"Edit"})}),[n,r]),u=(0,o.useCallback)((function(n){var r=n();if(void 0!==r){var o=[...e];o.splice(r,1),t(o)}}),[e,t]);return(0,a.jsxs)(c.Page,{children:[(0,a.jsx)(c.Page.Header,{headerRight:s}),(0,a.jsx)(c.SortableListView,{bg:"$bgApp",data:e,enabled:n,keyExtractor:function(e){return`${e.index}`},renderItem:function({item:e,getIndex:t,drag:r}){return(0,a.jsx)(c.SwipeableCell,{swipeEnabled:!n,rightItemList:[{width:200,title:"DELETE",backgroundColor:"$bgCriticalStrong",onPress:function({close:e}){e?.(),u(t)}}],children:(0,a.jsx)(i.c,_objectSpread(_objectSpread({h:70,avatarProps:{src:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png",size:"$8"},title:`${e.index}可左滑拖动删除`},!n&&{onPress:function(){return console.log(`点击${e.index}`)}}),{},{children:n?(0,a.jsx)(i.c.IconButton,{animation:"quick",enterStyle:{opacity:0,scale:0},cursor:"move",icon:"DragOutline",onPressIn:r},"darg"):null}))})},getItemLayout:function(e,t){return{length:70,offset:70*t,index:t}},onDragEnd:function(e){return t(e.data)}})]})}},179623:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=n(324586),o=n(514041),c=n(490343),i=n(791088),a=n(643103),s=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const __WEBPACK_DEFAULT_EXPORT__=function(){var[e,t]=(0,o.useState)(new Array(3).fill({}).map((function(){return{data:new Array(10).fill({}).map(a.mapIndexToData)}}))),[n,r]=(0,o.useState)(!1),u=(0,o.useCallback)((function(){return(0,s.jsx)(c.Button,{onPress:function(){return r(!n)},children:n?"Done":"Edit"})}),[n,r]),l=(0,o.useCallback)((function(n,r){var o=n();if(void 0!==o){var c=e.find((function(e){return e===r}));if(c){var i=[...c.data];i.splice(o,1),c.data=i,t(r)}}}),[e,t]);return(0,s.jsxs)(c.Page,{children:[(0,s.jsx)(c.Page.Header,{headerRight:u}),(0,s.jsx)(c.SortableSectionList,{bg:"$bgApp",sections:e,enabled:n,keyExtractor:function(e){return`${e?.index}`},getItemLayout:function(e,t){return{offset:70,length:70*t,index:t}},renderSectionHeader:function({index:e}){return(0,s.jsx)(c.SortableSectionList.SectionHeader,{px:0,title:`Section ${e}`})},renderItem:function({item:e,getIndex:t,section:r,drag:o}){return(0,s.jsx)(c.SwipeableCell,{swipeEnabled:!n,rightItemList:[{width:200,title:"DELETE",backgroundColor:"$bgCriticalStrong",onPress:function({close:e}){e?.(),l(t,r)}}],children:(0,s.jsx)(i.c,_objectSpread(_objectSpread({h:70,avatarProps:{src:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png",size:"$8"},title:`${e.index}可左滑拖动删除`},!n&&{onPress:function(){return console.log(`点击${e.index}`)}}),{},{children:n?(0,s.jsx)(i.c.IconButton,{animation:"quick",enterStyle:{opacity:0,scale:0},cursor:"move",icon:"DragOutline",onPressIn:o},"darg"):null}))})},onDragEnd:function(e){return t(e.sections)},stickySectionHeadersEnabled:!0})]})}}}]);