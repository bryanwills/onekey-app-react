"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[68655],{940916:(e,r,t)=>{t.d(r,{G:()=>g});var n=t(482451),i=t.n(n),o=t(324586),a=t(586330),s=t(230414),u=t(507140),c=t(606777),p=t(554902),f=t(180556),l=t(929296),d=t(195309),y=t(972715),v=t(901048).Buffer;function _createSuper(e){var r=_isNativeReflectConstruct();return function _createSuperInternal(){var t,n=(0,y.A)(e);if(r){var i=(0,y.A)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,d.A)(this,t)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var h=function(e){(0,l.A)(ChainSigner,e);var r=_createSuper(ChainSigner);function ChainSigner(e,t,n){var i,o=(0,p.N)(n,{key:e,chainCode:v.alloc(32)},t).key.toString("hex");return(i=r.call(this,o,n)).encryptedPrivateKey=e,i.password=t,i.curve=n,i}var t,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,p.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(t=(0,a.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return t.apply(this,arguments)}),n.sign=function sign(e){var r=(0,p._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([r.slice(0,-1),r[r.length-1]]):Promise.resolve([r,0])},(0,s.A)(ChainSigner)}(function(){function Verifier(e,r){this.curve=r,this.compressedPublicKey=v.from(e,"hex"),this.uncompressedPublicKey=(0,p.sA)(r,this.compressedPublicKey)}var e,r=Verifier.prototype;return r.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},r.getPubkeyHex=(e=(0,a.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(r){return e.apply(this,arguments)}),r.verify=function verify(){return Promise.resolve(v.from([]))},r.verifySignature=function verifySignature({publicKey:e,digest:r,signature:t}){var n=c.A.toBuffer(e),i=c.A.toBuffer(r),o=c.A.toBuffer(t),{curve:a}=this,s=(0,p.MX)(a,n,i,o);return Promise.resolve(s)},(0,s.A)(Verifier)}());function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,o.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=function(){function CoreChainApiBase(){}var e,r,t,n,o,l=CoreChainApiBase.prototype;return l.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return p.ev;case"secp256k1":return p.bI;case"nistp256":return p.OX;default:throw new u.He("Unsupported curve")}},l.baseCreateSigner=(e=(0,a.A)((function*({curve:e,privateKey:r,password:t}){if(void 0===t)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(r);return Promise.resolve(new h(n,t,e))})),function baseCreateSigner(r){return e.apply(this,arguments)}),l.baseGetSingleSigner=(r=(0,a.A)((function*({payload:e,curve:r}){var t=yield this.getPrivateKeys(e),n=e.account.path,i=t[n],o=e.account.relPaths?.[0];if(!i&&o&&(i=t[[n,o].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:r,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return r.apply(this,arguments)}),l.baseGetPrivateKeys=(t=(0,a.A)((function*({payload:e,curve:r}){var{credentials:t,account:n,password:i}=e,o={};if(t.hd&&t.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(t.hd){var{relPaths:a}=n;o=yield this.baseGetPrivateKeysHd({curve:r,account:n,hdCredential:t.hd,password:i,relPaths:a})}if(t.imported){var{privateKey:s}=(0,p.VV)({password:i,credential:t.imported}),f=c.A.bytesToHex((0,p.w)(i,s));o[n.path]=f,o[""]=f}if(!Object.keys(o).length)throw new Error("No private keys found");return o})),function baseGetPrivateKeys(e){return t.apply(this,arguments)}),l.baseGetPrivateKeysHd=(n=(0,a.A)((function*({curve:e,password:r,account:t,relPaths:n,hdCredential:i}){var{path:o}=t,a=o.split("/"),s=n||[a.pop()],f=a.join("/");if(0===s.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,p.Wu)(e,i,r,f,s).reduce((function(e,r){return _objectSpread(_objectSpread({},e),{},{[r.path]:c.A.bytesToHex(r.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),l.baseGetAddressesFromHd=(o=(0,a.A)((function*(e,r){var t=this,{curve:n,generateFrom:o}=r,{template:s,hdCredential:l,password:d,indexes:y}=e,{pathPrefix:v,pathSuffix:h}=(0,f.Ah)(s),g=y.map((function(e){return h.replace("{index}",e.toString())})),b="privateKey"===o,A=[],w=[];b?w=(0,p.Wu)(n,l,d,v,g):A=(0,p.W6)(n,l,d,v,g);var P=b?w:A;if(P.length!==y.length)throw new u.He("Unable to get publick key.");var S,m=yield Promise.all(P.map((S=(0,a.A)((function*(r){var n,o,{path:a,extendedKey:{key:s}}=r;if(b){var u=c.A.bytesToHex((0,p.Yc)(d,s));o=yield t.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:r})}else n=s.toString("hex"),o=yield t.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:r});return i()({publicKey:n,path:a},o)})),function(e){return S.apply(this,arguments)})));return{addresses:m}})),function baseGetAddressesFromHd(e,r){return o.apply(this,arguments)}),(0,s.A)(CoreChainApiBase)}()},968655:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=t(230414),i=t(929296),o=t(195309),a=t(972715);function _createSuper(e){var r=_isNativeReflectConstruct();return function _createSuperInternal(){var t,n=(0,a.A)(e);if(r){var i=(0,a.A)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,o.A)(this,t)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var s=function(e){(0,i.A)(CoreChainImported,e);var r=_createSuper(CoreChainImported);function CoreChainImported(){return r.apply(this,arguments)}return(0,n.A)(CoreChainImported)}(t(267658).A)},267658:(e,r,t)=>{t.d(r,{A:()=>g});var n=t(230414),i=t(929296),o=t(195309),a=t(972715),s=t(586330),u=t(517007),c=t(930671),p=t(554902),f=t(507140),l=t(606777),d=t(424754),y=t(940916),v=t(901048).Buffer;function _createSuper(e){var r=_isNativeReflectConstruct();return function _createSuperInternal(){var t,n=(0,a.A)(e);if(r){var i=(0,a.A)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,o.A)(this,t)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var h="ed25519";function _deserializeTransactionAptos(){return(_deserializeTransactionAptos=(0,s.A)((function*(e){var r=l.A.toBuffer(e),t=new u.r8.Deserializer(r),n=u.DT.RawTransaction.deserialize(t);return Promise.resolve(n)}))).apply(this,arguments)}function _buildSignedTx(){return(_buildSignedTx=(0,s.A)((function*(e,r,t,n){var i=new u.DT.Ed25519Signature(l.A.hexToBytes(t)),o=new u.DT.TransactionAuthenticatorEd25519(new u.DT.Ed25519PublicKey(l.A.hexToBytes(d.A.stripHexPrefix(r))),i),a=u.r8.bcsToBytes(new u.DT.SignedTransaction(e,o));return Promise.resolve({txid:"",rawTx:l.A.bytesToHex(a),encodedTx:n})}))).apply(this,arguments)}var g=function(e){(0,i.A)(CoreChainSoftware,e);var r=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return r.apply(this,arguments)}var t,o,a,y,g,b,A=CoreChainSoftware.prototype;return A.getPrivateKeys=(t=(0,s.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:h})})),function getPrivateKeys(e){return t.apply(this,arguments)}),A.signTransaction=(o=(0,s.A)((function*(e){var{unsignedTx:r,account:t}=e,n=yield this.baseGetSingleSigner({payload:e,curve:h}),{rawTxUnsigned:i,encodedTx:o}=r;if(!i)throw new Error("rawTxUnsigned is undefined");var a=t.pub;if(!a)throw new f.He("Unable to get sender public key.");var s=yield function deserializeTransactionAptos(e){return _deserializeTransactionAptos.apply(this,arguments)}(i),c=u.Qc.getSigningMessage(s),[p]=yield n.sign(l.A.toBuffer(c));return function buildSignedTx(e,r,t,n){return _buildSignedTx.apply(this,arguments)}(s,a,d.A.hexlify(p,{noPrefix:!0}),o)})),function signTransaction(e){return o.apply(this,arguments)}),A.signMessage=(a=(0,s.A)((function*(e){var r=e.unsignedMsg,t=yield this.baseGetSingleSigner({payload:e,curve:h}),[n]=yield t.sign(v.from(r.message));return d.A.addHexPrefix(n.toString("hex"))})),function signMessage(e){return a.apply(this,arguments)}),A.getAddressFromPublic=(y=(0,s.A)((function*(e){var{publicKey:r}=e,t=l.A.toBuffer(r),n=c.sha3_256.create();n.update(t),n.update("\0");var i=d.A.addHexPrefix(n.hex());return Promise.resolve({address:i,publicKey:r})})),function getAddressFromPublic(e){return y.apply(this,arguments)}),A.getAddressFromPrivate=(g=(0,s.A)((function*(e){var{privateKeyRaw:r}=e,t=l.A.toBuffer(r);if(32!==t.length)throw new f.He("Invalid private key.");var n=p.ev.publicFromPrivate(t);return this.getAddressFromPublic({publicKey:l.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return g.apply(this,arguments)}),A.getAddressesFromHd=(b=(0,s.A)((function*(e){return this.baseGetAddressesFromHd(e,{curve:h})})),function getAddressesFromHd(e){return b.apply(this,arguments)}),(0,n.A)(CoreChainSoftware)}(y.G)}}]);