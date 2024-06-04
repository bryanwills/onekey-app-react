"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[70552],{700655:(e,t,n)=>{n.d(t,{r:()=>AddressBookListContent});var r=n(324586),s=n(586330),o=n(487809),i=n.n(o),a=n(514041),c=n(908867),d=n(490343),l=n(791088),u=n(498356),h=n(22937),f=n(730223),m=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var getSectionTitle=function(e){return e.networkId.startsWith("evm--")?"EVM":e.network.name};function getSectionIndex(e){var t;return"bitcoin"===e.title.toLowerCase()?-10:"evm"===e.title.toLowerCase()?-9:null!=(t=e.data[0]?.createdAt)?t:0}var buildSections=function(e){var t=i()(e,getSectionTitle);return Object.entries(t).map((function(e){return{title:e[0],data:e[1]}})).sort((function(e,t){return getSectionIndex(e)-getSectionIndex(t)}))},RenderAddressBookItem=function({item:e,onPress:t,showActions:n}){var r,o,i,h=(0,c.A)(),{copyText:y}=(0,d.useClipboard)(),p=(0,u.A)(),g=(0,a.useCallback)((function(){return(0,m.jsx)(d.Stack,{justifyContent:"center",alignItems:"center",w:"$10",h:"$10",borderRadius:"$full",backgroundColor:"$gray3",children:(0,m.jsx)(d.SizableText,{size:"$bodyLgMedium",children:e.name.slice(0,1).toUpperCase()})})}),[e.name]);return(0,m.jsx)(l.c,{title:e.name,titleMatch:e.nameMatch,subtitle:e.address,subTitleMatch:e.addressMatch,renderAvatar:g,onPress:function(){return t?.(e)},testID:`address-item-${e.address||""}`,children:n?(0,m.jsx)(d.ActionList,{title:h.formatMessage({id:"title__menu"}),items:[{label:h.formatMessage({id:"action__copy"}),icon:"Copy1Outline",onPress:(i=(0,s.A)((function*(){y(e.address)})),function onPress(){return i.apply(this,arguments)}),testID:`address-menu-copy-${null!=(r=e.address)?r:""}`},{label:h.formatMessage({id:"action__edit"}),icon:"PencilOutline",onPress:function(){e.id&&p.push(f.sv.EditItemModal,{id:e.id,name:e.name,address:e.address,networkId:e.networkId})},testID:`address-menu-edit-${null!=(o=e.address)?o:""}`}],renderTrigger:(0,m.jsx)(l.c.IconButton,{icon:"DotVerSolid",testID:`address-menu-${e.address||""}`})}):null})},RenderEmptyAddressBook=function({hideAddItemButton:e}){var t=(0,c.A)(),n=(0,u.A)();return(0,m.jsx)(d.Empty,{icon:"SearchOutline",title:t.formatMessage({id:"content__no_results"}),description:"You haven't added any address yet",buttonProps:e?void 0:{children:t.formatMessage({id:"action__add"}),onPress:function(){n.push(f.sv.AddItemModal)},testID:"address-book-add-button"}})},RenderNoSearchResult=function(){var e=(0,c.A)();return(0,m.jsx)(d.Empty,{icon:"SearchOutline",title:e.formatMessage({id:"content__no_results"}),description:"No match found for your search. Try to add this contact.",testID:"address-book-search-empty"})},AddressBookListContent=function({items:e,onContentSizeChange:t,showActions:n,onPressItem:r,searchKey:s,hideEmptyAddButton:o}){var[i,c]=(0,a.useState)([]),l=(0,a.useCallback)((function(e){return c((function(t){return t.includes(e)?t.filter((function(t){return t!==e})):t.concat(e)}))}),[]);(0,a.useEffect)((function(){c([])}),[s]);var u=(0,a.useCallback)((function({section:e}){return s?null:(0,m.jsx)(d.SectionList.SectionHeader,{title:e.title.toUpperCase(),justifyContent:"space-between",children:(0,m.jsx)(d.IconButton,{size:"small",variant:"tertiary",testID:`address-cat-${e.title.toUpperCase()}-${e.isFold?"fold":"unfold"}`,icon:e.isFold?"ChevronRightSmallOutline":"ChevronDownSmallSolid",onPress:function(){return l(e.title)}})})}),[l,s]),f=(0,a.useCallback)((function({item:e}){return(0,m.jsx)(RenderAddressBookItem,{item:e,showActions:n,onPress:r})}),[n,r]),y=(0,a.useMemo)((function(){var t=[];if(s){var n=(0,h.q)(e,{keys:["address","name"]}).search(s).map((function(e){return _objectSpread(_objectSpread({},e.item),{},{nameMatch:e.matches?.find((function(e){return"name"===e.key})),addressMatch:e.matches?.find((function(e){try{return"address"===e.key&&1===e.indices.length&&e.value&&e.indices[0][1]-e.indices[0][0]==e.value.length-1}catch{return!1}}))})}));t=buildSections(n)}else t=buildSections(e);return t.map((function(e){var t=i.includes(e.title),{data:n}=e;return{title:e.title,data:t?[]:n,isFold:t}}))}),[i,e,s]);return(0,m.jsx)(d.SectionList,{onContentSizeChange:t,estimatedItemSize:"$6",sections:y,renderSectionHeader:u,renderItem:f,SectionSeparatorComponent:null,ListEmptyComponent:e.length?RenderNoSearchResult:(0,m.jsx)(RenderEmptyAddressBook,{hideAddItemButton:o}),keyExtractor:function(e){return e.address}})}},773594:(e,t,n)=>{n.d(t,{W:()=>PageLoading});var r=n(908867),s=n(490343),o=n(831085),PageLoading=function(){var e=(0,r.A)();return(0,o.jsxs)(s.Page,{children:[(0,o.jsx)(s.Page.Header,{title:e.formatMessage({id:"title__address_book"})}),(0,o.jsx)(s.Page.Body,{children:(0,o.jsx)(s.Stack,{h:"100%",justifyContent:"center",alignItems:"center",children:(0,o.jsx)(s.Spinner,{size:"large"})})})]})}},882964:(e,t,n)=>{n.d(t,{e:()=>UnsafeContent});var r=n(586330),s=n(514041),o=n(908867),i=n(490343),a=n(310955),c=n(831085),UnsafeContent=function(){var e=(0,o.A)(),{copyText:t}=(0,i.useClipboard)(),n=(0,s.useCallback)((function(){var e,n;i.Dialog.show({title:"Confirm",icon:"PlaceholderOutline",description:"Confirming this operation will reset your address book data. To avoid losing your data entirely, you can copy the data to the clipboard and save it.",tone:"destructive",showConfirmButton:!0,showCancelButton:!0,onConfirm:(n=(0,r.A)((function*(e){var n=yield a.A.serviceAddressBook.stringifyItems();yield a.A.serviceAddressBook.resetItems(),t(n,"msg__success"),yield e.close()})),function onConfirm(e){return n.apply(this,arguments)}),onConfirmText:"Reset",onCancelText:"Copy",cancelButtonProps:{icon:"Copy2Outline"},onCancel:(e=(0,r.A)((function*(e){var n=yield a.A.serviceAddressBook.stringifyItems();t(n),yield e()})),function onCancel(t){return e.apply(this,arguments)})})}),[t]);return(0,c.jsxs)(i.Page,{children:[(0,c.jsx)(i.Page.Header,{title:e.formatMessage({id:"title__address_book"})}),(0,c.jsx)(i.Page.Body,{children:(0,c.jsxs)(i.Stack,{p:"$4",children:[(0,c.jsx)(i.Alert,{type:"critical",title:"Data anomaly",icon:"ErrorOutline"}),(0,c.jsx)(i.SizableText,{size:"$headingMd",py:"$5",children:"Your contact data may have undergone abnormal changes. To ensure the security of your assets, we strongly recommend resetting your address book."}),(0,c.jsxs)(i.Stack,{mt:"$5",children:[(0,c.jsx)(i.SizableText,{size:"$headingSm",children:"Why is my data at risk?"}),(0,c.jsx)(i.SizableText,{size:"$bodyMd",children:"Your data is different from the last confirmation save. Onekey ensures the security of your data through cryptographic hashing algorithms."})]}),(0,c.jsxs)(i.Stack,{mt:"$5",children:[(0,c.jsx)(i.SizableText,{size:"$headingSm",children:"Why do I need to reset my address book?"}),(0,c.jsx)(i.SizableText,{size:"$bodyMd",children:"Resetting the data will result in the loss of your current contact information. However, it will fully ensure the security of your assets."})]})]})}),(0,c.jsx)(i.Page.Footer,{onConfirmText:"Reset",onCancelText:"Close",onConfirm:n,onCancel:function(e){return e()}})]})}},670552:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=n(586330),s=n(514041),o=n(728234),i=n(908867),a=n(490343),c=n(498356),d=n(700655),l=n(773594),u=n(882964),h=n(143063),f=n(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){var e,t,n=(0,i.A)(),m=(0,o.lq)(),{onPick:y,networkId:p}=m.params,[g,b]=(0,s.useState)(""),{isLoading:x,result:j}=(0,h.$)(p),v=(0,c.A)(),C=(0,s.useCallback)((t=(0,r.A)((function*(e){y?.(e),v.pop()})),function(e){return t.apply(this,arguments)}),[y,v]);return x?(0,f.jsx)(l.W,{}):j?.isSafe?(0,f.jsxs)(a.Page,{children:[(0,f.jsx)(a.Page.Header,{title:"Select Address",headerSearchBarOptions:{placeholder:n.formatMessage({id:"form__search"}),onChangeText(e){b(e.nativeEvent.text)}}}),(0,f.jsx)(a.Page.Body,{px:"$4",children:(0,f.jsx)(d.r,{onPressItem:C,items:null!=(e=j?.items)?e:[],searchKey:g.trim(),hideEmptyAddButton:!0})})]}):(0,f.jsx)(u.e,{})}}}]);