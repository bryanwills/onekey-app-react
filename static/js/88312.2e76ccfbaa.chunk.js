"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[88312,77563],{339330:(e,t,r)=>{r.d(t,{G:()=>m});var n=r(324586),i=r(586330),o=r(230414),a=r(929296),s=r(195309),c=r(972715),u=r(241440),d=r(167612),l=r(824116),p=r(750918),f=r(507140),v=r(514527),h=r(272615),y=r(491180),g=r(825145),A=r(606777),w=r(64238),b=r(901048).Buffer;function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,c.A)(e);if(t){var i=(0,c.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var m=function(e){(0,a.A)(KeyringHardware,e);var t=_createSuper(KeyringHardware);function KeyringHardware(...e){var r,n,o;return(r=t.call(this,...e)).coreApi=p.A.btc.hd,r.buildHardwareInput=(n=(0,i.A)((function*(e,t){var{getHDPath:r,getScriptType:n}=yield(0,h.hc)(),i=r(t),o=n(i);return{prev_index:e.vout,prev_hash:e.txid,amount:new u.A(e.value).toFixed(),address_n:i,script_type:o}})),function(e,t){return n.apply(this,arguments)}),r.buildHardwareOutput=(o=(0,i.A)((function*(e){var{isCharge:t,bip44Path:r,opReturn:n}=e.payload||{};if(n&&"string"==typeof n&&n.length>0)return{script_type:"PAYTOOPRETURN",amount:"0",op_return_data:A.A.bytesToHex(b.from(n))};if(t&&r){var{getHDPath:i,getOutputScriptType:o}=yield(0,h.hc)(),a=i(r);return{script_type:o(a),address_n:a,amount:new u.A(e.value).toFixed()}}return{script_type:"PAYTOADDRESS",address:e.address,amount:new u.A(e.value).toFixed()}})),function(e){return o.apply(this,arguments)}),r.buildPrevTx=function(e){var t=d.ZX.fromHex(e);return{hash:t.getId(),version:t.version,inputs:t.ins.map((function(e){return{prev_hash:e.hash.reverse().toString("hex"),prev_index:e.index,script_sig:e.script.toString("hex"),sequence:e.sequence}})),bin_outputs:t.outs.map((function(e){return{amount:e.value,script_pubkey:e.script.toString("hex")}})),lock_time:t.locktime}},r}var r,n,s,c=KeyringHardware.prototype;return c.signTransaction=(r=(0,i.A)((function*(e){var t=this,{unsignedTx:r}=e,{inputs:n,outputs:o}=r.encodedTx,{dbDevice:a,deviceCommonParams:s}=(0,g.wT)(e.deviceParams),c=yield this.getNetwork(),u=this.vault,l=yield this.coreApi.getCoinName({network:c}),p=n.map((function(e){return e.address})),f=yield u._collectUTXOsInfoByApi(),h={};for(var y of f){var{address:A,path:w}=y;p.includes(A)&&(h[A]=w)}var b,m,x=Array.from(new Set(n.map((function(e){return e.txid})))).filter(Boolean),T=yield u.collectTxs(x),I=yield this.getHardwareSDKInstance(),{connectId:_,deviceId:S}=a,R=yield I.btcSignTransaction(_,S,_objectSpread({coin:l.toLowerCase(),inputs:yield Promise.all(n.map((m=(0,i.A)((function*(e){return t.buildHardwareInput(e,h[e.address])})),function(e){return m.apply(this,arguments)}))),outputs:yield Promise.all(o.map((b=(0,i.A)((function*(e){return t.buildHardwareOutput(e)})),function(e){return b.apply(this,arguments)}))),refTxs:Object.values(T).map((function(e){return t.buildPrevTx(e)}))},s));if(R.success){var{serializedTx:K}=R.payload;return{txid:d.ZX.fromHex(K).getId(),rawTx:K,encodedTx:r.encodedTx}}throw(0,v.MP)(R.payload)})),function signTransaction(e){return r.apply(this,arguments)}),c.signMessage=(n=(0,i.A)((function*(){throw new f.MS})),function signMessage(){return n.apply(this,arguments)}),c.prepareAccounts=(s=(0,i.A)((function*(e){var t,r=this,n=yield this.getCoreApiNetworkInfo(),o=(0,l.getBtcForkNetwork)(n.networkChainCode),a=e.deriveInfo?.addressEncoding;return this.basePrepareHdUtxoAccounts(e,{checkIsAccountUsed:l.checkBtcAddressIsUsed,buildAddressesInfo:(t=(0,i.A)((function*({usedIndexes:t}){for(var n,s=yield r.baseGetDeviceAccountPublicKeys({params:e,usedIndexes:t,sdkGetPublicKeysFn:(n=(0,i.A)((function*({connectId:n,deviceId:i,pathPrefix:o,coinName:a,showOnOnekeyFn:s}){var c=yield r.getHardwareSDKInstance();return yield c.btcGetPublicKey(n,i,_objectSpread(_objectSpread({},e.deviceParams.deviceCommonParams),{},{bundle:t.map((function(e,t){return{path:`${o}/${e}'`,coin:a?.toLowerCase(),showOnOneKey:s(t)}}))}))})),function sdkGetPublicKeysFn(e){return n.apply(this,arguments)})}),c=[],u=0;u<s.length;u+=1){var d=s[u],{path:l,xpub:p,xpubSegwit:f}=d,v=y.A.buildUtxoAddressRelPath(),{addresses:h}=yield r.coreApi.getAddressFromXpub({network:o,xpub:p,relativePaths:[v],addressEncoding:a}),{[v]:g}=h,A={address:g,publicKey:"",path:l,relPath:v,xpub:p,xpubSegwit:f,addresses:{[v]:g}};c.push(A)}return c})),function buildAddressesInfo(e){return t.apply(this,arguments)})})})),function prepareAccounts(e){return s.apply(this,arguments)}),(0,o.A)(KeyringHardware)}(w.V)},368390:(e,t,r)=>{r.d(t,{M:()=>d});var n=r(586330),i=r(230414),o=r(929296),a=r(195309),s=r(972715),c=r(824116),u=r(750918);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var d=function(e){(0,o.A)(KeyringHd,e);var t=_createSuper(KeyringHd);function KeyringHd(...e){var r;return(r=t.call(this,...e)).coreApi=u.A.btc.hd,r}var a,s,d,l,p=KeyringHd.prototype;return p.getPrivateKeys=(a=(0,n.A)((function*(e){return this.baseGetPrivateKeys(e)})),function getPrivateKeys(e){return a.apply(this,arguments)}),p.prepareAccounts=(s=(0,n.A)((function*(e){return(yield Promise.resolve().then(r.bind(r,824116))).initBitcoinEcc(),this.basePrepareAccountsHdUtxo(e,{checkIsAccountUsed:c.checkBtcAddressIsUsed})})),function prepareAccounts(e){return s.apply(this,arguments)}),p.signTransaction=(d=(0,n.A)((function*(e){return this.baseSignTransactionBtc(e)})),function signTransaction(e){return d.apply(this,arguments)}),p.signMessage=(l=(0,n.A)((function*(e){return this.baseSignMessageBtc(e)})),function signMessage(e){return l.apply(this,arguments)}),(0,i.A)(KeyringHd)}(r(129441).R)},884882:(e,t,r)=>{r.d(t,{e:()=>u});var n=r(586330),i=r(230414),o=r(929296),a=r(195309),s=r(972715),c=r(750918);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var u=function(e){(0,o.A)(KeyringImported,e);var t=_createSuper(KeyringImported);function KeyringImported(...e){var r;return(r=t.call(this,...e)).coreApi=c.A.btc.imported,r}var r,a,s,u,d=KeyringImported.prototype;return d.getPrivateKeys=(r=(0,n.A)((function*(e){return this.baseGetPrivateKeys(e)})),function getPrivateKeys(e){return r.apply(this,arguments)}),d.prepareAccounts=(a=(0,n.A)((function*(e){return this.basePrepareAccountsImportedUtxo(e)})),function prepareAccounts(e){return a.apply(this,arguments)}),d.signTransaction=(s=(0,n.A)((function*(e){return this.baseSignTransactionBtc(e)})),function signTransaction(e){return s.apply(this,arguments)}),d.signMessage=(u=(0,n.A)((function*(e){return this.baseSignMessage(e)})),function signMessage(e){return u.apply(this,arguments)}),(0,i.A)(KeyringImported)}(r(275061).V)},304589:(e,t,r)=>{r.d(t,{v:()=>f});var n=r(586330),i=r(230414),o=r(929296),a=r(195309),s=r(972715),c=r(824116),u=r(750918),d=r(507140),l=r(491180),p=r(330189);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var f=function(e){(0,o.A)(KeyringQr,e);var t=_createSuper(KeyringQr);function KeyringQr(...e){var r;return(r=t.call(this,...e)).coreApi=u.A.btc.hd,r}var r,a=KeyringQr.prototype;return a.buildAirGapAccountChildPathTemplate=function buildAirGapAccountChildPathTemplate(e){return l.A.buildUtxoAddressRelPath()},a.signTransaction=function signTransaction(e){throw new d.MS},a.signMessage=function signMessage(e){throw new d.MS},a.prepareAccounts=(r=(0,n.A)((function*(e){var t,r=this,i=yield p.A.getWallet({walletId:this.walletId}),o=yield this.getCoreApiNetworkInfo(),a=(0,c.getBtcForkNetwork)(o.networkChainCode),s=e.deriveInfo?.addressEncoding;return this.basePrepareHdUtxoAccounts(e,{buildAddressesInfo:(t=(0,n.A)((function*({usedIndexes:t}){var n=[];for(var o of t){var{fullPath:c,airGapAccount:u,childPathTemplate:p}=yield r.findQrWalletAirGapAccount(e,{index:o,wallet:i});if(!u)throw new d.a2;var f="",v=void 0;if(p){v=l.A.buildPathFromTemplate({template:p,index:o});var h=u?.extendedPublicKey;if(!h)throw new Error("xpub not found");f=h}if(!f)throw new Error("publicKey not found");if(!v)throw new Error("addressRelPath not found");var y=yield r.coreApi.getAddressFromXpub({network:a,xpub:f,relativePaths:[v],addressEncoding:s}),{[v]:g}=y.addresses,A={address:g,publicKey:"",path:u.path,relPath:v,xpub:f,xpubSegwit:y.xpubSegwit,addresses:{[v]:g}};n.push(A),console.log("KeyringQr prepareAccounts",{params:e,wallet:i,fullPath:c,airGapAccount:u,addressInfo:A})}return n})),function buildAddressesInfo(e){return t.apply(this,arguments)})})})),function prepareAccounts(e){return r.apply(this,arguments)}),(0,i.A)(KeyringQr)}(r(832818).W)},887895:(e,t,r)=>{r.d(t,{r:()=>d});var n=r(586330),i=r(230414),o=r(85018),a=r(929296),s=r(195309),c=r(972715),u=r(750918);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,c.A)(e);if(t){var i=(0,c.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var d=function(e){(0,a.A)(KeyringWatching,e);var t,r=_createSuper(KeyringWatching);function KeyringWatching(...e){var t;return(t=r.call(this,...e)).coreApi=u.A.btc.hd,t}return KeyringWatching.prototype.prepareAccounts=(t=(0,n.A)((function*(e){return(0,o.A)((0,c.A)(KeyringWatching.prototype),"basePrepareUtxoWatchingAccounts",this).call(this,e)})),function prepareAccounts(e){return t.apply(this,arguments)}),(0,i.A)(KeyringWatching)}(r(7440).w)},877563:(e,t,r)=>{r.r(t),r.d(t,{default:()=>B});var n=r(324586),i=r(839850),o=r(503668),a=r.n(o),s=r(603514),c=r.n(s),u=r(586330),d=r(230414),l=r(929296),p=r(195309),f=r(972715),v=r(241440),h=r(824116),y=r(554902),g=r(404727),A=r(180556),w=r(814878),b=r(507140),m=r(825145),x=r(657355),T=r(584186),I=r(369387),_=r(232471),S=r(34344),R=r(339330),K=r(368390),P=r(884882),O=r(304589),k=r(887895),F=["txId","value"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,f.A)(e);if(t){var i=(0,f.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,p.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var B=function(e){(0,l.A)(VaultBtc,e);var t=_createSuper(VaultBtc);function VaultBtc(...e){var r;return(r=t.call(this,...e)).keyringMap={hd:K.M,qr:O.v,hw:R.G,imported:P.e,watching:k.r,external:k.r},r._getFeeRate=(0,x.E)((0,u.A)((function*(){try{var e=yield r.backgroundApi.serviceGas.estimateFee({networkId:r.networkId,accountAddress:yield r.getAccountAddress()}),{feeUTXO:t}=e;if(!t||c()(t))throw new b.He("Failed to get fee rates.");for(var n=t.map((function(e){var t;return new v.A(null!=(t=e.feeRate)?t:0).toFixed(0)})),i=n.findIndex((function(e){return new v.A(e).lt(0)}));i>=0;){for(var o=i-1,a=i+1;;){if(o>=0&&new v.A(n[o]).gte(0)){n[i]=n[o];break}if(a<n.length&&new v.A(n[a]).gte(0)){n[i]=n[a];break}if(a+=1,(o-=1)<0&&a>=n.length)break}i=n.findIndex((function(e){return new v.A(e).lt(0)}))}return n.sort((function(e,t){return new v.A(e).comparedTo(new v.A(t))}))}catch(e){throw console.error(e),new b.He("Failed to get fee rates.")}})),{promise:!0,max:1,maxAge:3e4}),r._collectUTXOsInfoByApi=(0,x.E)((0,u.A)((function*(){try{var{utxoList:e}=yield r.backgroundApi.serviceAccountProfile.fetchAccountDetails({networkId:r.networkId,accountAddress:yield r.getAccountAddress(),xpub:yield r.getAccountXpub(),withUTXOList:!0});if(!e)throw new b.He("Failed to get UTXO list.");return e}catch(e){throw new b.He("Failed to get UTXO list.")}})),{promise:!0,max:1,maxAge:T.A.getTimeDurationMs({seconds:30})}),r}var r,n,o,s,p,f,S,B,C,E,N,H,j,M,U,X,V,W,D,G,Q,q=VaultBtc.prototype;return q.buildAccountAddressDetail=(r=(0,u.A)((function*(e){var{account:t,networkId:r}=e,{address:n}=t;return{networkId:r,normalizedAddress:n,displayAddress:n,address:n,baseAddress:n,isValid:!0,allowEmptyAddress:!1}})),function buildAccountAddressDetail(e){return r.apply(this,arguments)}),q.buildDecodedTx=(n=(0,u.A)((function*(e){var{unsignedTx:t}=e,r=t.encodedTx,{inputs:n,outputs:i,psbtHex:o,inputsToSign:a}=r,s=yield this.getNetwork(),c=yield this.getAccount(),u=yield this.backgroundApi.serviceToken.getToken({networkId:this.networkId,tokenIdOnNetwork:"",accountAddress:c.address});if(!u)throw new b.He("Native token not found");var d,l=n.map((function(e){return{address:e.address,balance:new v.A(e.value).shiftedBy(-s.decimals).toFixed(),balanceValue:e.value,symbol:s.symbol,isMine:!0}})),p=i.filter((function(e){return!e.payload?.isCharge})).map((function(e){return{address:e.address,balance:new v.A(e.value).shiftedBy(-s.decimals).toFixed(),balanceValue:e.value,symbol:s.symbol,isMine:e.address===c.address}})),f=new v.A(0),h=new v.A(0);d=[{type:_.kF.ASSET_TRANSFER,assetTransfer:{from:c.address,to:p[0].address,sends:p.map((function(e){var t;return f=f.plus(e.balance),h=h.plus(e.balanceValue),{from:c.address,to:e.address,isNative:!0,tokenIdOnNetwork:"",name:u.name,icon:null!=(t=u.logoURI)?t:"",amount:e.balance,amountValue:e.balanceValue,symbol:s.symbol}})),receives:[],utxoFrom:l,utxoTo:p}}];var y=new v.A(r.fee).shiftedBy(-1*s.feeMeta.decimals).toFixed();return{txid:"",owner:c.address,signer:c.address,nonce:0,actions:d,status:_.Y1.Pending,networkId:this.networkId,accountId:this.accountId,extraInfo:null,payload:{type:I.mz.Send},encodedTx:r,totalFeeInNative:y,nativeAmount:f.toFixed(),nativeAmountValue:h.toFixed()}})),function buildDecodedTx(e){return n.apply(this,arguments)}),q.buildEncodedTx=(o=(0,u.A)((function*(e){var{transfersInfo:t,specifiedFeeRate:r}=e;if(!t||c()(t))throw new b.He("transfersInfo is required");return this._buildEncodedTxFromTransfer({transfersInfo:t,specifiedFeeRate:r})})),function buildEncodedTx(e){return o.apply(this,arguments)}),q.buildUnsignedTx=(s=(0,u.A)((function*(e){var t,r,n=null!=(t=e.encodedTx)?t:yield this.buildEncodedTx(e);if(n)return this._buildUnsignedTxFromEncodedTx({encodedTx:n,transfersInfo:null!=(r=e.transfersInfo)?r:[]});throw new b.He})),function buildUnsignedTx(e){return s.apply(this,arguments)}),q.updateUnsignedTx=(p=(0,u.A)((function*(e){var{unsignedTx:t,feeInfo:r}=e,n=t.encodedTx,{psbtHex:i,inputsToSign:o}=n;if(r&&(!i||!o)){if(!t.transfersInfo||c()(t.transfersInfo))throw new b.He("transfersInfo is required");n=yield this._attachFeeInfoToEncodedTx({encodedTx:t.encodedTx,transfersInfo:t.transfersInfo,feeInfo:r})}return t.encodedTx=n,Promise.resolve(t)})),function updateUnsignedTx(e){return p.apply(this,arguments)}),q._attachFeeInfoToEncodedTx=(f=(0,u.A)((function*({encodedTx:e,feeInfo:t,transfersInfo:r}){var n=yield this.getNetwork();if(t.feeUTXO?.feeRate){var i=new v.A(t.feeUTXO.feeRate).shiftedBy(-n.feeMeta.decimals).toFixed();if("string"==typeof i)return this._buildEncodedTxFromTransfer({transfersInfo:r,specifiedFeeRate:i})}return Promise.resolve(e)})),function _attachFeeInfoToEncodedTx(e){return f.apply(this,arguments)}),q.getBtcForkNetwork=(S=(0,u.A)((function*(){return(0,h.getBtcForkNetwork)(yield this.getNetworkImpl())})),function getBtcForkNetwork(){return S.apply(this,arguments)}),q.validatePrivateKey=function validatePrivateKey(){return Promise.resolve({isValid:!1})},q.validateXpub=(B=(0,u.A)((function*(e){return Promise.resolve((0,h.validateBtcXpub)({xpub:e}))})),function validateXpub(e){return B.apply(this,arguments)}),q.validateXprvt=(C=(0,u.A)((function*(e){return Promise.resolve((0,h.validateBtcXprvt)({xprvt:e}))})),function validateXprvt(e){return C.apply(this,arguments)}),q.validateAddress=(E=(0,u.A)((function*(e){return(0,h.validateBtcAddress)({address:e,network:yield this.getBtcForkNetwork()})})),function validateAddress(e){return E.apply(this,arguments)}),q.validateGeneralInput=(N=(0,u.A)((function*(e){var{result:t,inputDecoded:r}=yield this.baseValidateGeneralInput(e),n="";t.xpubResult?.isValid&&(n=r);var i=yield this.getBtcForkNetwork();if(!n&&t.xprvtResult?.isValid&&({xpub:n}=(0,h.getBtcXpubFromXprvt)({network:i,privateKeyRaw:(0,h.convertBtcXprvtToHex)({xprvt:r})})),n){var{supportEncodings:o}=(0,h.getBtcXpubSupportedAddressEncodings)({xpub:n,network:i});if(o&&o.length){var a=yield this.getVaultSettings(),s=Object.values(a.accountDeriveInfo);t.deriveInfoItems=s.filter((function(e){return e.addressEncoding&&o.includes(e.addressEncoding)}))}}return t})),function validateGeneralInput(e){return N.apply(this,arguments)}),q.parseAddressEncodings=function parseAddressEncodings(e){var t=this;return Promise.all(e.map((function(e){return t.validateAddress(e)}))).then((function(e){return e.map((function(e){return e.encoding}))}))},q._buildEncodedTxFromTransfer=(H=(0,u.A)((function*(e){var{transfersInfo:t}=e;if(1===t.length&&!t[0].to)throw new Error("buildEncodedTx ERROR: transferInfo.to is missing");return this._buildEncodedTxFromBatchTransfer(e)})),function _buildEncodedTxFromTransfer(e){return H.apply(this,arguments)}),q._buildEncodedTxFromBatchTransfer=(j=(0,u.A)((function*(e){var{transfersInfo:t}=e,r=t[0],n=yield this.getAccount(),{inputs:o,outputs:s,fee:c,inputsForCoinSelect:u,outputsForCoinSelect:d}=yield this._buildTransferParamsWithCoinSelector(e);if(!o||!s||a()(c))throw new b.c4({message:"Failed to select UTXOs"});return{inputs:o.map((function(e){var{txId:t,value:r}=e,o=(0,i.A)(e,F);return _objectSpread(_objectSpread({address:n.address,path:""},o),{},{txid:t,value:r.toString()})})),outputs:s.map((function({value:e,address:t,script:i}){var o=e?.toString();if(o&&new v.A(o).eq(0)&&!t&&i===r.opReturn)return{address:"",value:o,payload:{opReturn:r.opReturn}};var a=t||n.address;if(!a)throw new Error("buildEncodedTxFromBatchTransfer ERROR: Invalid change address");if(!o||new v.A(o).lte(0))throw new Error("buildEncodedTxFromBatchTransfer ERROR: Invalid value");return{address:a,value:o,payload:t?void 0:{isCharge:!0,bip44Path:(0,A.zf)(n,n.address)}}})),inputsForCoinSelect:u,outputsForCoinSelect:d,fee:c.toString()}})),function _buildEncodedTxFromBatchTransfer(e){return j.apply(this,arguments)}),q._buildTransferParamsWithCoinSelector=(M=(0,u.A)((function*({transfersInfo:e,specifiedFeeRate:t}){var r=yield this.getNetwork();if(!e.length)throw new Error("buildTransferParamsWithCoinSelector ERROR: transferInfos is required");var n=e.length>1,i=yield this._collectUTXOsInfoByApi(),o=void 0!==t?new v.A(t).shiftedBy(r.feeMeta.decimals).toFixed():(yield this._getFeeRate())[1],a=i.map((function({txid:e,vout:t,value:r,address:n,path:i}){return{txId:e,vout:t,value:parseInt(r),address:n,path:i}})),s=[];if(n)s=e.map((function({to:e,amount:t}){return{address:e,value:parseInt(new v.A(t).shiftedBy(r.decimals).toFixed())}}));else{var c=e[0],{to:u,amount:d}=c,l=i.reduce((function(e,{value:t}){return e.plus(t)}),new v.A("0")).shiftedBy(-r.decimals);if(l.lt(d))throw new b.c4;var p=l.lte(d),f=parseInt(new v.A(d).shiftedBy(r.decimals).toFixed());s=[p?{address:u,isMax:!0}:{address:u,value:f}],c.opReturn&&"string"==typeof c.opReturn&&c.opReturn.length&&s.push({address:"",value:0,script:c.opReturn})}var h=n?void 0:e[0].coinSelectAlgorithm;if(!n&&s.length>2)throw new Error("single transfer should only have one output");var{inputs:y,outputs:g,fee:A}=(0,w.qk)({inputsForCoinSelect:a,outputsForCoinSelect:s,feeRate:o,algorithm:h});return{inputs:y,outputs:g,fee:A,inputsForCoinSelect:a,outputsForCoinSelect:s,feeRate:o}})),function _buildTransferParamsWithCoinSelector(e){return M.apply(this,arguments)}),q._buildUnsignedTxFromEncodedTx=(U=(0,u.A)((function*({encodedTx:e,transfersInfo:t}){var{inputs:r,outputs:n,inputsForCoinSelect:i}=e,o=79,a=[];for(var s of r){var c=new v.A(s.value);a.push({address:s.address,value:c,utxo:{txid:s.txid,vout:s.vout,value:c}})}var u,d=i?.filter((function(e){return a.some((function(t){return t.utxo?.txid===e.txId&&t.utxo.vout===e.vout}))}));Number(d?.length)>0&&n.length>0&&(o=(0,A.Ac)(null!=d?d:[],null!=(u=n.map((function(e){return{address:e.address,value:parseInt(e.value)}})))?u:[]));var l={txSize:o,encodedTx:e,transfersInfo:t};return Promise.resolve(l)})),function _buildUnsignedTxFromEncodedTx(e){return U.apply(this,arguments)}),q.collectTxs=(X=(0,u.A)((function*(e){try{var t={},r=yield this.backgroundApi.serviceSend.getRawTransactions({networkId:this.networkId,txids:e});return Object.keys(r).forEach((function(e){return t[e]=r[e].rawTx})),t}catch(e){throw console.error(e),new b.He("Failed to get raw transactions.")}})),function collectTxs(e){return X.apply(this,arguments)}),q._getRelPathToAddressByApi=(V=(0,u.A)((function*({addresses:e,account:t}){var r=yield this._collectUTXOsInfoByApi(),n={};for(var i of r){var{address:o,path:a}=i;if(e.includes(o)){var s=a.split("/").slice(-2).join("/");n[a]={address:o,relPath:s}}}var c="0/0",u=[t.path,c].join("/");return n[u]||(n[u]={address:t.address,relPath:c}),{relPaths:Object.values(n).map((function(e){return e.relPath})),pathToAddresses:n}})),function _getRelPathToAddressByApi(e){return V.apply(this,arguments)}),q._collectInfoForSoftwareSign=(W=(0,u.A)((function*(e){var{inputs:t}=e.encodedTx,r=yield this.parseAddressEncodings(t.map((function(e){return e.address}))),n=Array.from(new Set(r.map((function(e,r){if(e===g.EAddressEncodings.P2PKH)return(0,m.wT)(t[r]).txid})).filter((function(e){return!!e}))));return[r,yield this.collectTxs(n)]})),function _collectInfoForSoftwareSign(e){return W.apply(this,arguments)}),q.prepareBtcSignExtraInfo=(D=(0,u.A)((function*({unsignedTx:e,unsignedMessage:t}){var r=yield this.getAccount(),n=[];if(t&&(n=[r.address]),e){var{inputs:i,inputsToSign:o}=e.encodedTx;n=[].concat(null!=o?o:[],null!=i?i:[]).filter(Boolean).map((function(e){return e.address})).concat(r.address)}var{relPaths:a,pathToAddresses:s}=yield this._getRelPathToAddressByApi({addresses:n,account:r}),c={pathToAddresses:s};if(e){var[u,d]=yield this._collectInfoForSoftwareSign(e);c.inputAddressesEncodings=u,c.nonWitnessPrevTxs=d}return{btcExtraInfo:c,account:_objectSpread(_objectSpread({},r),{},{relPaths:a})}})),function prepareBtcSignExtraInfo(e){return D.apply(this,arguments)}),q.getPrivateKeyFromImported=function getPrivateKeyFromImported(e){var t=(0,y.mP)({encodedText:e.input}),r=(0,h.convertBtcXprvtToHex)({xprvt:t});return r=(0,y.uX)({text:r}),Promise.resolve({privateKey:r})},q.getAccountXpub=(G=(0,u.A)((function*(){var e,t=yield this.getAccount();return null!=(e=t.xpubSegwit)?e:t.xpub})),function getAccountXpub(){return G.apply(this,arguments)}),q.buildEstimateFeeParams=(Q=(0,u.A)((function*(){return Promise.resolve(void 0)})),function buildEstimateFeeParams(){return Q.apply(this,arguments)}),(0,d.A)(VaultBtc)}(S.S)},688312:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(230414),i=r(929296),o=r(195309),a=r(972715),s=r(750918),c=r(877563);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var u=function(e){(0,i.A)(KeyringHardware,e);var t=_createSuper(KeyringHardware);function KeyringHardware(...e){var r;return(r=t.call(this,...e)).coreApi=s.A.neurai.hd,r}return(0,n.A)(KeyringHardware)}(r(339330).G);function KeyringHd_createSuper(e){var t=KeyringHd_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function KeyringHd_isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(KeyringHd_isNativeReflectConstruct=function(){return!!e})()}var d=function(e){(0,i.A)(KeyringHd,e);var t=KeyringHd_createSuper(KeyringHd);function KeyringHd(...e){var r;return(r=t.call(this,...e)).coreApi=s.A.neurai.hd,r}return(0,n.A)(KeyringHd)}(r(368390).M);function KeyringImported_createSuper(e){var t=KeyringImported_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function KeyringImported_isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(KeyringImported_isNativeReflectConstruct=function(){return!!e})()}var l=function(e){(0,i.A)(KeyringImported,e);var t=KeyringImported_createSuper(KeyringImported);function KeyringImported(...e){var r;return(r=t.call(this,...e)).coreApi=s.A.neurai.imported,r}return(0,n.A)(KeyringImported)}(r(884882).e),p=r(586330),f=r(507140);function KeyringQr_createSuper(e){var t=KeyringQr_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function KeyringQr_isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(KeyringQr_isNativeReflectConstruct=function(){return!!e})()}var v=function(e){(0,i.A)(KeyringQr,e);var t=KeyringQr_createSuper(KeyringQr);function KeyringQr(...e){var r;return(r=t.call(this,...e)).coreApi=void 0,r}var r,o=KeyringQr.prototype;return o.signTransaction=function signTransaction(e){throw new f.MS},o.signMessage=function signMessage(e){throw new f.MS},o.prepareAccounts=(r=(0,p.A)((function*(e){throw new f.MS})),function prepareAccounts(e){return r.apply(this,arguments)}),(0,n.A)(KeyringQr)}(r(832818).W);function KeyringWatching_createSuper(e){var t=KeyringWatching_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function KeyringWatching_isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(KeyringWatching_isNativeReflectConstruct=function(){return!!e})()}var h=function(e){(0,i.A)(KeyringWatching,e);var t=KeyringWatching_createSuper(KeyringWatching);function KeyringWatching(){return t.apply(this,arguments)}return(0,n.A)(KeyringWatching)}(r(887895).r);function Vault_createSuper(e){var t=Vault_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function Vault_isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Vault_isNativeReflectConstruct=function(){return!!e})()}var y=function(e){(0,i.A)(Vault,e);var t=Vault_createSuper(Vault);function Vault(...e){var r;return(r=t.call(this,...e)).coreApi=s.A.neurai.hd,r.keyringMap={hd:d,qr:v,hw:u,imported:l,watching:h,external:h},r}return(0,n.A)(Vault)}(c.default)}}]);