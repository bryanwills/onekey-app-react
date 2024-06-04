(self.webpackChunkweb=self.webpackChunkweb||[]).push([[46491],{940916:(e,t,r)=>{"use strict";r.d(t,{G:()=>v});var n=r(482451),i=r.n(n),s=r(324586),o=r(586330),a=r(230414),u=r(507140),c=r(606777),d=r(554902),p=r(180556),l=r(929296),f=r(195309),h=r(972715),g=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,h.A)(e);if(t){var i=(0,h.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,f.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var y=function(e){(0,l.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,s=(0,d.N)(n,{key:e,chainCode:g.alloc(32)},r).key.toString("hex");return(i=t.call(this,s,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,d.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,o.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,d._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,a.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=g.from(e,"hex"),this.uncompressedPublicKey=(0,d.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,o.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(g.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),s=c.A.toBuffer(r),{curve:o}=this,a=(0,d.MX)(o,n,i,s);return Promise.resolve(a)},(0,a.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,s.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function CoreChainApiBase(){}var e,t,r,n,s,l=CoreChainApiBase.prototype;return l.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return d.ev;case"secp256k1":return d.bI;case"nistp256":return d.OX;default:throw new u.He("Unsupported curve")}},l.baseCreateSigner=(e=(0,o.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new y(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),l.baseGetSingleSigner=(t=(0,o.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],s=e.account.relPaths?.[0];if(!i&&s&&(i=r[[n,s].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),l.baseGetPrivateKeys=(r=(0,o.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i}=e,s={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd){var{relPaths:o}=n;s=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:o})}if(r.imported){var{privateKey:a}=(0,d.VV)({password:i,credential:r.imported}),p=c.A.bytesToHex((0,d.w)(i,a));s[n.path]=p,s[""]=p}if(!Object.keys(s).length)throw new Error("No private keys found");return s})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),l.baseGetPrivateKeysHd=(n=(0,o.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:s}=r,o=s.split("/"),a=n||[o.pop()],p=o.join("/");if(0===a.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,d.Wu)(e,i,t,p,a).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),l.baseGetAddressesFromHd=(s=(0,o.A)((function*(e,t){var r=this,{curve:n,generateFrom:s}=t,{template:a,hdCredential:l,password:f,indexes:h}=e,{pathPrefix:g,pathSuffix:y}=(0,p.Ah)(a),v=h.map((function(e){return y.replace("{index}",e.toString())})),w="privateKey"===s,b=[],P=[];w?P=(0,d.Wu)(n,l,f,g,v):b=(0,d.W6)(n,l,f,g,v);var A=w?P:b;if(A.length!==h.length)throw new u.He("Unable to get publick key.");var m,k=yield Promise.all(A.map((m=(0,o.A)((function*(t){var n,s,{path:o,extendedKey:{key:a}}=t;if(w){var u=c.A.bytesToHex((0,d.Yc)(f,a));s=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=a.toString("hex"),s=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:o},s)})),function(e){return m.apply(this,arguments)})));return{addresses:k}})),function baseGetAddressesFromHd(e,t){return s.apply(this,arguments)}),(0,a.A)(CoreChainApiBase)}()},681092:(e,t,r)=>{"use strict";r.d(t,{A:()=>I});var n=r(324586),i=r(586330),s=r(230414),o=r(929296),a=r(195309),u=r(972715),c=r(717288),d=r(167612),p=r(236989),l=r.n(p),f=r(529848),h=r.n(f),g=r(377820),y=r(928557),v=r(507140),w=r(825145),b=r(606777),P=r(161024),A=r(241440),m=r(940916),k=r(554902),S=r(404727),C=r(180556),x=r(824116),K=r(826412),T=r(901048).Buffer;function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,u.A)(e);if(t){var i=(0,u.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var O="secp256k1",validator=function(e,t,r){return(0,k.MX)(O,e,t,r)},bip0322Hash=function(e){var{sha256:t}=d.Et,r=t(T.from("BIP0322-signed-message"));return t(T.concat([r,r,T.from(e)])).toString("hex")},I=function(e){(0,o.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,n,a,u,p,f,m,I,B,E,R,F,H,j,N=CoreChainSoftware.prototype;return N.getCoinName=(r=(0,i.A)((function*({network:e}){return Promise.resolve(e.isTestnet?"TEST":"BTC")})),function getCoinName(e){return r.apply(this,arguments)}),N.decodeAddress=function decodeAddress(e){return e},N.encodeAddress=function encodeAddress(e){return e},N.getPsbt=function getPsbt({network:e}){return new d.iL({network:e})},N.getAddressFromPublic=(n=(0,i.A)((function*(e){var{networkInfo:t,publicKey:r,addressEncoding:n}=e,i=(0,x.getBtcForkNetwork)(t.networkChainCode),s=r,{addresses:o,xpubSegwit:a}=yield this.getAddressFromXpub({network:i,xpub:s,relativePaths:["0/0"],addressEncoding:n});return{address:o["0/0"],publicKey:"",xpub:s,xpubSegwit:a,addresses:o}})),function getAddressFromPublic(e){return n.apply(this,arguments)}),N.getAddressFromXpub=(a=(0,i.A)((function*({network:e,xpub:t,relativePaths:r,addressEncoding:n}){return(0,x.getAddressFromXpub)({curve:O,network:e,xpub:t,relativePaths:r,addressEncoding:n,encodeAddress:this.encodeAddress})})),function getAddressFromXpub(e){return a.apply(this,arguments)}),N.buildSignersMap=(u=(0,i.A)((function*({payload:e}){var{password:t}=e,r=yield this.getPrivateKeysInFullPath({payload:e}),n=e?.btcExtraInfo?.pathToAddresses,i={};for(var[s,o]of Object.entries(r)){var a=n?.[s]?.address;if(!a)throw new Error("getSignersMap ERROR: address is required, is privateKeys including fullPath?");var u=yield this.buildSignerBtc({privateKey:o,password:t});i[a]=u}return i})),function buildSignersMap(e){return u.apply(this,arguments)}),N.buildSignerBtc=function buildSignerBtc({privateKey:e,password:t}){return this.baseCreateSigner({curve:O,privateKey:e,password:t})},N.getBitcoinSignerPro=(p=(0,i.A)((function*({network:e,signer:t,input:r}){var n,s=yield t.getPubkey(!0);if((0,K.isTaprootInput)(r)){var o=!0;if(r.tapLeafScript&&r.tapLeafScript?.length>0&&!r.tapMerkleRoot&&r.tapLeafScript.forEach((function(e){e.controlBlock&&e.script&&(o=!1)})),r.tapInternalKey){var a=yield t.getPrvkey();return(0,x.tweakSigner)(a,s,{network:e,needTweak:o})}}return{publicKey:s,sign:(n=(0,i.A)((function*(e){var[r]=yield t.sign(e);return r})),function sign(e){return n.apply(this,arguments)})}})),function getBitcoinSignerPro(e){return p.apply(this,arguments)}),N.packTransaction=(f=(0,i.A)((function*({network:e,signers:t,payload:r}){for(var{unsignedTx:n,btcExtraInfo:i}=r,{inputs:s,outputs:o}=n.encodedTx,a=(0,w.wT)(i?.inputAddressesEncodings),u=(0,w.wT)(i?.nonWitnessPrevTxs),c=this.getPsbt({network:e}),p=0;p<s.length;++p){var l=s[p],f=new A.A(l.value).toNumber(),h=a[p],g={},y=this.pickSigner(t,l.address);switch(h){case S.EAddressEncodings.P2PKH:g.nonWitnessUtxo=T.from(u[l.txid],"hex");break;case S.EAddressEncodings.P2WPKH:g.witnessUtxo={script:(0,w.wT)((0,x.pubkeyToPayment)({pubkey:yield y.getPubkey(!0),encoding:h,network:e})).output,value:f};break;case S.EAddressEncodings.P2SH_P2WPKH:var v=(0,w.wT)((0,x.pubkeyToPayment)({pubkey:yield y.getPubkey(!0),encoding:h,network:e}));g.witnessUtxo={script:v.output,value:f},g.redeemScript=v.redeem?.output;break;case S.EAddressEncodings.P2TR:var b=(0,w.wT)((0,x.pubkeyToPayment)({pubkey:yield y.getPubkey(!0),encoding:h,network:e}));g.witnessUtxo={script:b.output,value:f},g.tapInternalKey=b.internalPubkey}c.addInput(_objectSpread({hash:l.txid,index:l.vout},g))}return o.forEach((function(e){var{payload:t}=e;if(t?.opReturn&&"string"==typeof t?.opReturn&&t?.opReturn.length>0){var r=d.KT.embed({data:[(0,x.loadOPReturn)(t?.opReturn)]});c.addOutput({script:(0,w.wT)(r.output),value:0})}else{var n=new A.A(e.value).toNumber();c.addOutput({address:e.address,value:n})}})),c})),function packTransaction(e){return f.apply(this,arguments)}),N.appendImportedRelPathPrivateKeys=function appendImportedRelPathPrivateKeys({privateKeys:e,password:t,relPaths:r}){var n=new k.UV(T.from("Bitcoin seed"),k.bI),i=e[""],s=(0,k.Yc)(t,b.A.toBuffer(i)),o={chainCode:s.slice(13,45),key:s.slice(46,78)},a={};return r?.forEach((function(r){var i=r.split("/"),s="",u=o;i.forEach((function(e){if(s=s.length>0?`${s}/${e}`:e,void 0===a[s]){var t=e.endsWith("'")?parseInt(e.slice(0,-1))+2**31:parseInt(e),r=n.CKDPriv(u,t);a[s]=r}u=a[s]})),e[r]=b.A.bytesToHex((0,k.w)(t,a[r].key))})),e},N.getPrivateKeysInFullPath=(m=(0,i.A)((function*({payload:e}){var t=(0,w.wT)(e.btcExtraInfo),r=yield this.getPrivateKeys(e),n=!!e.credentials.imported,{pathToAddresses:i}=t,s=(0,w.wT)(e.networkInfo.networkImpl),o={};for(var[a,{address:u,relPath:c}]of Object.entries(i)){var d=n?c:a,p=r[d];if(s===y.Jj&&(p||(p=r[d.replace("m/86'/0'/","m/86'/1'/")]),p||(p=r[d.replace("m/86'/1'/","m/86'/0'/")])),u!=u)throw new Error("addressFromPrivateKey and utxoAddress not matched");if(!p)throw new Error(`privateKey not found: ${u} ${a}`);o[a]=p}return o})),function getPrivateKeysInFullPath(e){return m.apply(this,arguments)}),N.signBip322MessageSimple=(I=(0,i.A)((function*({encodedTx:e,account:t,message:r,signers:n,psbtNetwork:i}){(0,x.initBitcoinEcc)();var s=d.hl.toOutputScript(t.address,i),o=T.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),a=T.concat([T.from("0020","hex"),T.from(bip0322Hash(r),"hex")]),u=new d.ZX;u.version=0,u.addInput(o,4294967295,0,a),u.addOutput(s,0);var c=new d.iL;c.setVersion(0),c.addInput({hash:u.getHash(),index:0,sequence:0,witnessUtxo:{script:s,value:0}}),c.addOutput({script:T.from("6a","hex"),value:0});var p=(0,x.getInputsToSignFromPsbt)({psbt:c,psbtNetwork:i,account:t,isBtcWalletProvider:!1});yield this.signPsbt({encodedTx:e,psbt:c,signers:n,inputsToSign:p,network:i}),p.forEach((function(e){c.finalizeInput(e.index)}));var l=c.extractTransaction(),f=(0,g.encode)(l.ins[0].witness.length);return T.concat([f,...l.ins[0].witness.map((function(e){return t=e,T.concat([(0,g.encode)(t.byteLength),t]);var t}))])})),function signBip322MessageSimple(e){return I.apply(this,arguments)}),N.signPsbt=(B=(0,i.A)((function*({encodedTx:e,network:t,psbt:r,signers:n,inputsToSign:i}){for(var s=0,o=i.length;s<o;s+=1){var a=i[s],u=this.pickSigner(n,a.address),c=yield this.getBitcoinSignerPro({network:t,signer:u,input:r.data.inputs[a.index]});r.signInput(a.index,c,a.sighashTypes)}return{encodedTx:e,txid:"",rawTx:"",psbtHex:r.toHex()}})),function signPsbt(e){return B.apply(this,arguments)}),N.getPrivateKeys=(E=(0,i.A)((function*(e){var{password:t,account:r}=e,n=!!e.credentials.imported,i=yield this.baseGetPrivateKeys({payload:e,curve:O});if(n){var{relPaths:s}=r;this.appendImportedRelPathPrivateKeys({privateKeys:i,password:t,relPaths:s})}return i})),function getPrivateKeys(e){return E.apply(this,arguments)}),N.getAddressFromPrivate=(R=(0,i.A)((function*(e){var{privateKeyRaw:t,networkInfo:r,addressEncoding:n}=e,i=(0,x.getBtcForkNetwork)(r.networkChainCode),{xpub:s,pubKey:o}=(0,x.getBtcXpubFromXprvt)({privateKeyRaw:t,network:i}),a=n,u="0/0",{addresses:c,xpubSegwit:d}=yield this.getAddressFromXpub({network:i,xpub:s,relativePaths:[u],addressEncoding:a}),{[u]:p}=c;return Promise.resolve({publicKey:o,xpub:s,xpubSegwit:d,relPath:u,address:p,addresses:c})})),function getAddressFromPrivate(e){return R.apply(this,arguments)}),N.getAddressesFromHd=(F=(0,i.A)((function*(e){var t=this,{template:r,hdCredential:n,password:s,indexes:o,networkInfo:{networkChainCode:a},addressEncoding:u}=e,{pathPrefix:d}=(0,C.Ah)(r),p=o.map((function(e){return`${e.toString()}'`})),l=(0,k.W6)(O,n,s,d,p);if(l.length!==o.length)throw new v.He("Unable to get publick key.");if(!a)throw new Error("networkChainCode is required");var f,g=(0,x.getBtcForkNetwork)(a),{public:y}=(g.segwitVersionBytes||{})[u]||g.bip32,w=(0,k.s8)(n,s),b=(0,x.getBitcoinBip32)().fromSeed((0,c.mnemonicToSeedSync)(w)),P=[T.from(y.toString(16).padStart(8,"0"),"hex"),T.from([3])],A=yield Promise.all(l.map((f=(0,i.A)((function*(e,r){var{path:i,parentFingerPrint:a,extendedKey:c}=e,d=b.derivePath(`${i}/0/0`),p=(0,x.getBitcoinECPair)().fromWIF(d.toWIF()).publicKey.toString("hex"),l=h().encode(T.concat([...P,a,T.from((o[r]+2**31).toString(16).padStart(8,"0"),"hex"),c.chainCode,c.key])),f="0/0",y=[f],{addresses:v,xpubSegwit:w}=yield t.getAddressFromXpub({network:g,xpub:l,relativePaths:y,addressEncoding:u}),{[f]:A}=v;return{address:A,publicKey:p,path:i,relPath:f,xpub:l,xpubSegwit:(0,x.buildBtcXpubSegwit)({xpub:l,addressEncoding:u,hdAccountPayload:{curveName:O,hdCredential:n,password:s,path:i}}),addresses:{[f]:A}}})),function(e,t){return f.apply(this,arguments)})));return{addresses:A}})),function getAddressesFromHd(e){return F.apply(this,arguments)}),N.signTransaction=(H=(0,i.A)((function*(e){var{unsignedTx:t,networkInfo:{networkChainCode:r},account:n}=e,i=t.encodedTx,{psbtHex:s,inputsToSign:o}=i;if(!n.relPaths?.length)throw new Error("BTC sign transaction need relPaths");var a=(0,x.getBtcForkNetwork)(r),u=yield this.buildSignersMap({payload:e});if(s&&o){var c=d.iL.fromHex(s,{network:a});return this.signPsbt({encodedTx:t.encodedTx,network:a,psbt:c,signers:u,inputsToSign:o})}for(var p=yield this.packTransaction({network:a,signers:u,payload:e}),l=0;l<i.inputs.length;++l){var{address:f}=i.inputs[l],h=this.pickSigner(u,f),g=p.data.inputs[0],y=yield this.getBitcoinSignerPro({signer:h,input:g,network:a});yield p.signInputAsync(l,y)}p.validateSignaturesOfAllInputs(validator),p.finalizeAllInputs();var v=p.extractTransaction();return{encodedTx:t.encodedTx,txid:v.getId(),rawTx:v.toHex(),psbtHex:void 0}})),function signTransaction(e){return H.apply(this,arguments)}),N.pickSigner=function pickSigner(e,t){var r=e[t];if(!r)throw new Error(`BTC signer not found: ${t}`);return r},N.signMessage=(j=(0,i.A)((function*(e){var{account:t,networkInfo:{networkChainCode:r}}=e;if(!t.relPaths?.length)throw new Error("BTC sign message need relPaths");var n=e.unsignedMsg,i=(0,x.getBtcForkNetwork)(r),s=yield this.buildSignersMap({payload:e});if(n.type===P.nc.BIP322_SIMPLE){var o=yield this.signBip322MessageSimple({encodedTx:null,account:t,message:n.message,signers:s,psbtNetwork:i});return b.A.bytesToHex(o)}var a=this.pickSigner(s,t.address),u=yield a.getPrvkey(),c=(0,x.getBitcoinECPair)().fromPrivateKey(u,{network:i}),d=n.sigOptions||{segwitType:"p2wpkh"},p=l().sign(n.message,(0,w.wT)(c.privateKey),c.compressed,d);return b.A.bytesToHex(p)})),function signMessage(e){return j.apply(this,arguments)}),(0,s.A)(CoreChainSoftware)}(m.G)},514346:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(230414),i=r(929296),s=r(195309),o=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,o.A)(e);if(t){var i=(0,o.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var a=function(e){(0,i.A)(CoreChainImported,e);var t=_createSuper(CoreChainImported);function CoreChainImported(){return t.apply(this,arguments)}return(0,n.A)(CoreChainImported)}(r(610859).A)},610859:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(586330),i=r(230414),s=r(85018),o=r(929296),a=r(195309),u=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,u.A)(e);if(t){var i=(0,u.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var c=function(e){(0,o.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,a=CoreChainSoftware.prototype;return a.getCoinName=(r=(0,n.A)((function*(){return Promise.resolve("NEURAI")})),function getCoinName(){return r.apply(this,arguments)}),a.signMessage=function signMessage(e){return(0,s.A)((0,u.A)(CoreChainSoftware.prototype),"signMessage",this).call(this,e)},a.signTransaction=function signTransaction(e){return(0,s.A)((0,u.A)(CoreChainSoftware.prototype),"signTransaction",this).call(this,e)},a.getPrivateKeys=function getPrivateKeys(e){return(0,s.A)((0,u.A)(CoreChainSoftware.prototype),"getPrivateKeys",this).call(this,e)},a.getAddressFromPrivate=function getAddressFromPrivate(e){return(0,s.A)((0,u.A)(CoreChainSoftware.prototype),"getAddressFromPrivate",this).call(this,e)},a.getAddressFromPublic=function getAddressFromPublic(e){return(0,s.A)((0,u.A)(CoreChainSoftware.prototype),"getAddressFromPublic",this).call(this,e)},a.getAddressesFromHd=function getAddressesFromHd(e){return(0,s.A)((0,u.A)(CoreChainSoftware.prototype),"getAddressesFromHd",this).call(this,e)},(0,i.A)(CoreChainSoftware)}(r(681092).A)},879314:()=>{}}]);