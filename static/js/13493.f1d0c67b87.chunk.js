"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[13493],{940916:(e,r,t)=>{t.d(r,{G:()=>g});var n=t(482451),i=t.n(n),a=t(324586),s=t(586330),o=t(230414),c=t(507140),u=t(606777),p=t(554902),l=t(180556),f=t(929296),d=t(195309),y=t(972715),h=t(901048).Buffer;function _createSuper(e){var r=_isNativeReflectConstruct();return function _createSuperInternal(){var t,n=(0,y.A)(e);if(r){var i=(0,y.A)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,d.A)(this,t)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var v=function(e){(0,f.A)(ChainSigner,e);var r=_createSuper(ChainSigner);function ChainSigner(e,t,n){var i,a=(0,p.N)(n,{key:e,chainCode:h.alloc(32)},t).key.toString("hex");return(i=r.call(this,a,n)).encryptedPrivateKey=e,i.password=t,i.curve=n,i}var t,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,p.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(t=(0,s.A)((function*(){return u.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return t.apply(this,arguments)}),n.sign=function sign(e){var r=(0,p._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([r.slice(0,-1),r[r.length-1]]):Promise.resolve([r,0])},(0,o.A)(ChainSigner)}(function(){function Verifier(e,r){this.curve=r,this.compressedPublicKey=h.from(e,"hex"),this.uncompressedPublicKey=(0,p.sA)(r,this.compressedPublicKey)}var e,r=Verifier.prototype;return r.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},r.getPubkeyHex=(e=(0,s.A)((function*(e){return u.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(r){return e.apply(this,arguments)}),r.verify=function verify(){return Promise.resolve(h.from([]))},r.verifySignature=function verifySignature({publicKey:e,digest:r,signature:t}){var n=u.A.toBuffer(e),i=u.A.toBuffer(r),a=u.A.toBuffer(t),{curve:s}=this,o=(0,p.MX)(s,n,i,a);return Promise.resolve(o)},(0,o.A)(Verifier)}());function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,a.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=function(){function CoreChainApiBase(){}var e,r,t,n,a,f=CoreChainApiBase.prototype;return f.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return p.ev;case"secp256k1":return p.bI;case"nistp256":return p.OX;default:throw new c.He("Unsupported curve")}},f.baseCreateSigner=(e=(0,s.A)((function*({curve:e,privateKey:r,password:t}){if(void 0===t)throw new c.He("Software signing requires a password.");var n=u.A.toBuffer(r);return Promise.resolve(new v(n,t,e))})),function baseCreateSigner(r){return e.apply(this,arguments)}),f.baseGetSingleSigner=(r=(0,s.A)((function*({payload:e,curve:r}){var t=yield this.getPrivateKeys(e),n=e.account.path,i=t[n],a=e.account.relPaths?.[0];if(!i&&a&&(i=t[[n,a].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:r,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return r.apply(this,arguments)}),f.baseGetPrivateKeys=(t=(0,s.A)((function*({payload:e,curve:r}){var{credentials:t,account:n,password:i}=e,a={};if(t.hd&&t.imported)throw new c.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(t.hd){var{relPaths:s}=n;a=yield this.baseGetPrivateKeysHd({curve:r,account:n,hdCredential:t.hd,password:i,relPaths:s})}if(t.imported){var{privateKey:o}=(0,p.VV)({password:i,credential:t.imported}),l=u.A.bytesToHex((0,p.w)(i,o));a[n.path]=l,a[""]=l}if(!Object.keys(a).length)throw new Error("No private keys found");return a})),function baseGetPrivateKeys(e){return t.apply(this,arguments)}),f.baseGetPrivateKeysHd=(n=(0,s.A)((function*({curve:e,password:r,account:t,relPaths:n,hdCredential:i}){var{path:a}=t,s=a.split("/"),o=n||[s.pop()],l=s.join("/");if(0===o.length)throw new c.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,p.Wu)(e,i,r,l,o).reduce((function(e,r){return _objectSpread(_objectSpread({},e),{},{[r.path]:u.A.bytesToHex(r.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),f.baseGetAddressesFromHd=(a=(0,s.A)((function*(e,r){var t=this,{curve:n,generateFrom:a}=r,{template:o,hdCredential:f,password:d,indexes:y}=e,{pathPrefix:h,pathSuffix:v}=(0,l.Ah)(o),g=y.map((function(e){return v.replace("{index}",e.toString())})),b="privateKey"===a,w=[],P=[];b?P=(0,p.Wu)(n,f,d,h,g):w=(0,p.W6)(n,f,d,h,g);var A=b?P:w;if(A.length!==y.length)throw new c.He("Unable to get publick key.");var m,S=yield Promise.all(A.map((m=(0,s.A)((function*(r){var n,a,{path:s,extendedKey:{key:o}}=r;if(b){var c=u.A.bytesToHex((0,p.Yc)(d,o));a=yield t.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:c,privateKeyInfo:r})}else n=o.toString("hex"),a=yield t.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:r});return i()({publicKey:n,path:s},a)})),function(e){return m.apply(this,arguments)})));return{addresses:S}})),function baseGetAddressesFromHd(e,r){return a.apply(this,arguments)}),(0,o.A)(CoreChainApiBase)}()},513493:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var n=t(230414),i=t(929296),a=t(195309),s=t(972715);function _createSuper(e){var r=_isNativeReflectConstruct();return function _createSuperInternal(){var t,n=(0,s.A)(e);if(r){var i=(0,s.A)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,a.A)(this,t)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var o=function(e){(0,i.A)(CoreChainImported,e);var r=_createSuper(CoreChainImported);function CoreChainImported(){return r.apply(this,arguments)}return(0,n.A)(CoreChainImported)}(t(774300).A)},774300:(e,r,t)=>{t.d(r,{A:()=>x});var n=t(482451),i=t.n(n),a=t(324586),s=t(586330),o=t(230414),c=t(929296),u=t(195309),p=t(972715),l=t(311099),f=t(218160),d=t(240483),y=t(303303),h=t(507140),v=t(606777),g=t(424754),b=t(940916),w=t(554902),P=t(180556),A=t(510220),m=t(387845),S=t(901048).Buffer;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,a.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=_isNativeReflectConstruct();return function _createSuperInternal(){var t,n=(0,p.A)(e);if(r){var i=(0,p.A)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,u.A)(this,t)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var O="ed25519",derivationHdLedger=function(e,r){try{return(0,d.i)(e,r)}catch(e){var{message:t}=e;if("Expected a mnemonic with 24 words (or 25 including a password)"===t)throw new h.He({message:t,key:"msg__error_mnemonics_can_only_be_12_24"});throw e}},x=function(e){(0,c.A)(CoreChainSoftware,e);var r=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return r.apply(this,arguments)}var t,n,a,u,p,d,b,x=CoreChainSoftware.prototype;return x.baseGetPrivateKeys=(t=(0,s.A)((function*({payload:e}){var{credentials:r,account:t,password:n}=e,i={};if(r.hd){var{relPaths:a}=t,s=t.path.split("/"),o=a||[s.pop()],c=s.join("/"),u=(0,w.s8)(r.hd,n);i=o.map((function(e){var r=`${c}/${e}`,t=derivationHdLedger(u,r);return{path:r,key:(0,w.w)(n,S.from(t.secretKey.slice(0,32)))}})).reduce((function(e,r){return _objectSpread(_objectSpread({},e),{},{[r.path]:v.A.bytesToHex(r.key)})}),{})}if(r.imported){var{privateKey:p}=(0,w.VV)({password:n,credential:r.imported}),l=v.A.bytesToHex((0,w.w)(n,p));i[t.path]=l,i[""]=l}if(!Object.keys(i).length)throw new Error("No private keys found");return i})),function baseGetPrivateKeys(e){return t.apply(this,arguments)}),x.getPrivateKeys=(n=(0,s.A)((function*(e){return this.baseGetPrivateKeys({payload:e})})),function getPrivateKeys(e){return n.apply(this,arguments)}),x.signTransaction=(a=(0,s.A)((function*(e){var{unsignedTx:r}=e,t=yield this.baseGetSingleSigner({payload:e,curve:O});if(!r.rawTxUnsigned)throw new Error("rawTxUnsigned is undefined");var[n]=yield t.sign(v.A.toBuffer(v.A.hexToBytes(r.rawTxUnsigned))),i=(0,l.z)(A.I.ed25519,(0,f.e)(n)),a=v.A.bytesToHex(i),s=yield(0,m.rQ)(r.encodedTx,a);return{encodedTx:r.encodedTx,txid:"",rawTx:s,signature:g.A.addHexPrefix(a)}})),function signTransaction(e){return a.apply(this,arguments)}),x.signMessage=(u=(0,s.A)((function*(e){var{message:r}=e.unsignedMsg,t=yield this.baseGetSingleSigner({payload:e,curve:O}),n=yield(0,m.Ex)(r),[i]=yield t.sign(n),a=(0,l.z)(A.I.ed25519,(0,f.e)(i));return g.A.addHexPrefix(v.A.bytesToHex(a))})),function signMessage(e){return u.apply(this,arguments)}),x.getAddressFromPrivate=(p=(0,s.A)((function*(e){var{privateKeyRaw:r}=e,t=v.A.toBuffer(r),n=this.baseGetCurve(O).publicFromPrivate(t);return this.getAddressFromPublic({publicKey:v.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return p.apply(this,arguments)}),x.getAddressFromPublic=(d=(0,s.A)((function*(e){var r,{publicKey:t,networkInfo:n}=e,i=v.A.hexToBytes(g.A.stripHexPrefix(t));return Promise.resolve({address:"",addresses:{[n.networkId]:(0,y.j)(i,+(null!=(r=n.addressPrefix)?r:0))},publicKey:t})})),function getAddressFromPublic(e){return d.apply(this,arguments)}),x.getAddressesFromHd=(b=(0,s.A)((function*(e){var r=this,{template:t,hdCredential:n,password:a,indexes:o}=e,{pathPrefix:c,pathSuffix:u}=(0,P.Ah)(t),p=o.map((function(e){return u.replace("{index}",e.toString())})),l=(0,w.s8)(n,a),f=p.map((function(e){var r=`${c}/${e}`;return{path:r,pubkey:derivationHdLedger(l,r).publicKey}}));if(f.length!==o.length)throw new h.He("Unable to get public key.");var d,y=yield Promise.all(f.map((d=(0,s.A)((function*(t){var{path:n,pubkey:a}=t,s=v.A.bytesToHex(a),o=yield r.getAddressFromPublic({publicKey:s,networkInfo:e.networkInfo});return i()({publicKey:s,path:n},o)})),function(e){return d.apply(this,arguments)})));return{addresses:y}})),function getAddressesFromHd(e){return b.apply(this,arguments)}),(0,o.A)(CoreChainSoftware)}(b.G)},387845:(e,r,t)=>{t.d(r,{Ex:()=>serializeMessage,QG:()=>serializeUnsignedTransaction,rQ:()=>serializeSignedTransaction});var n=t(324586),i=t(586330),a=t(816959),s=t(244912),o=t(380488),c=t(403144),u=t(869631),p=t(424754),l=t(901048).Buffer;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function serializeMessage(e){return _serializeMessage.apply(this,arguments)}function _serializeMessage(){return(_serializeMessage=(0,i.A)((function*(e){var r=(0,a.C1)(e);return l.from((0,s.e)(r))}))).apply(this,arguments)}function serializeUnsignedTransaction(e){return _serializeUnsignedTransaction.apply(this,arguments)}function _serializeUnsignedTransaction(){return(_serializeUnsignedTransaction=(0,i.A)((function*(e){var r,t,{metadataRpc:n}=e,i=(0,o.getRegistry)({metadataRpc:n,specName:null!=(r=e.specName)?r:"",specVersion:+c.Ay.hexToDecimal(e.specVersion).toString(),chainName:null!=(t=e.chainName)?t:""});i.setMetadata((0,o.createMetadata)(i,n));var a=o.construct.signingPayload(e,{registry:i}),p=i.createType("ExtrinsicPayload",a,{version:u.EXTRINSIC_VERSION}).toU8a({method:!0}),l=p.length>256?i.hash(p):p;return{rawTx:p,hash:(0,s.e)(l)}}))).apply(this,arguments)}function serializeSignedTransaction(e,r){return _serializeSignedTransaction.apply(this,arguments)}function _serializeSignedTransaction(){return(_serializeSignedTransaction=(0,i.A)((function*(e,r){var t,n,{metadataRpc:i}=e,a=(0,o.getRegistry)(_objectSpread(_objectSpread({},e),{},{specName:null!=(t=e.specName)?t:"",specVersion:+c.Ay.hexToDecimal(e.specVersion).toString(),chainName:null!=(n=e.chainName)?n:""}));return o.construct.signedTx(e,p.A.addHexPrefix(r),{metadataRpc:i,registry:a})}))).apply(this,arguments)}},510220:(e,r,t)=>{t.d(r,{I:()=>n});var n={ecdsa:new Uint8Array([2]),ed25519:new Uint8Array([0]),ethereum:new Uint8Array([2]),sr25519:new Uint8Array([1])}}}]);