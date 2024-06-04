"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[37327],{775892:(e,t,s)=>{s.d(t,{z:()=>CreateOrEditContent});var r=s(586330),a=s(514041),n=s(908867),d=s(490343),i=s(310955),o=s(370968),l=s(142097),c=s(831085),CreateOrEditContent=function({title:e,item:t,onSubmit:s,onRemove:m}){var u,f,h,v=(0,n.A)(),p=(0,d.useForm)({defaultValues:{id:t.id,networkId:t.networkId,name:t.name,address:{raw:t.address,resolved:""}},mode:"onChange",reValidateMode:"onChange"}),I=(0,a.useCallback)((function(){return m?(0,c.jsx)(d.IconButton,{icon:"DeleteOutline",variant:"tertiary",onPress:function(){return m(t)},testID:"address-form-remove"}):null}),[m,t]),k=p.watch("networkId"),b=p.watch("address.pending"),g=(0,a.useCallback)((u=(0,r.A)((function*(e){var t;yield s?.({id:e.id,name:e.name,networkId:e.networkId,address:null!=(t=e.address.resolved)?t:""})})),function(e){return u.apply(this,arguments)}),[s]);return(0,c.jsxs)(d.Page,{children:[(0,c.jsx)(d.Page.Header,{title:e,headerRight:I}),(0,c.jsx)(d.Page.Body,{p:"$4",children:(0,c.jsxs)(d.Form,{form:p,children:[(0,c.jsx)(d.Form.Field,{label:"Network",name:"networkId",rules:{required:!0},children:(0,c.jsx)(l.P,{})}),(0,c.jsx)(d.Form.Field,{label:"Name",name:"name",rules:{required:{value:!0,message:"Name cannot be empty."},maxLength:{value:24,message:"The maximum length is 24 characters."},validate:(h=(0,r.A)((function*(e){var s=yield i.A.serviceAddressBook.findItem({name:e});if(s&&t.id!==s.id)return"The name already exists."})),function validate(e){return h.apply(this,arguments)})},testID:"address-form-name-field",children:(0,c.jsx)(d.Input,{placeholder:"Required",testID:"address-form-name"})}),(0,c.jsx)(d.Form.Field,{label:"Address",name:"address",rules:{validate:(f=(0,r.A)((function*(e){if(!e.pending){var s;if(!e.resolved)return null!=(s=e.validateError?.message)?s:"Invalid address";var r=yield i.A.serviceAddressBook.findItem({address:e.resolved});if(r&&t.id!==r.id)return"The address already exists."}})),function validate(e){return f.apply(this,arguments)})},description:k.startsWith("evm--")?(0,c.jsxs)(d.XStack,{alignItems:"center",mt:"$1",children:[(0,c.jsx)(d.Icon,{size:"$4",name:"CheckRadioSolid"}),(0,c.jsx)(d.SizableText,{size:"$bodyMd",ml:"$1",children:"Also add to additional EVM-compatible Chains"})]}):null,testID:"address-form-address-field",children:(0,c.jsx)(o.N,{networkId:k,placeholder:"Address",autoError:!1,testID:"address-form-address",enableNameResolve:!0})})]})}),(0,c.jsx)(d.Page.Footer,{onConfirmText:v.formatMessage({id:"action__save"}),confirmButtonProps:{variant:"primary",loading:p.formState.isSubmitting,disabled:!p.formState.isValid||b,onPress:p.handleSubmit(g),testID:"address-form-save"}})]})}},737327:(e,t,s)=>{s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(586330),a=s(514041),n=s(728234),d=s(908867),i=s(490343),o=s(310955),l=s(498356),c=s(775892),m=s(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){var e,t,s=(0,d.A)(),u=(0,l.A)(),f=(0,n.lq)(),h=(0,a.useCallback)((e=(0,r.A)((function*(e){try{yield o.A.serviceAddressBook.updateItem(e),i.Toast.success({title:"Save Successful"}),u.pop()}catch(e){i.Toast.error({title:e.message})}})),function(t){return e.apply(this,arguments)}),[u]),v=(0,a.useCallback)((t=(0,r.A)((function*(e){var t;i.Dialog.show({title:"Delete Contact",icon:"DeleteOutline",description:'Please confirm whether to delete this contact from the address book. Type "Confirm" to delete.',tone:"destructive",showConfirmButton:!0,showCancelButton:!0,onConfirm:(t=(0,r.A)((function*(){if(e.id)try{yield o.A.serviceAddressBook.removeItem(e.id),i.Toast.success({title:"Delete Successful"}),u.pop()}catch(e){i.Toast.error({title:e.message})}})),function onConfirm(){return t.apply(this,arguments)}),confirmButtonProps:{testID:"address-remove-confirm"},cancelButtonProps:{testID:"address-remove-cancel"}})})),function(e){return t.apply(this,arguments)}),[u]);return(0,m.jsx)(c.z,{title:s.formatMessage({id:"title__edit_address"}),item:f.params,onSubmit:h,onRemove:v})}}}]);