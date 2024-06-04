"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[23608,15882],{215882:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var c=n(404727),a=n(928557),r=n(746661),i={default:{namePrefix:"BTC Nested SegWit",label:"Nested SegWit",template:`m/49'/${a.sR}'/${a.h2}'/0/0`,coinType:a.sR,coinName:a.Ly,addressEncoding:c.EAddressEncodings.P2SH_P2WPKH,desc:"P2WPKH (m/49'/0'/0'), Starts with '3'"},BIP86:{namePrefix:"BTC Taproot",label:"Taproot",template:`m/86'/${a.sR}'/${a.h2}'/0/0`,coinType:a.sR,coinName:a.Ly,addressEncoding:c.EAddressEncodings.P2TR,desc:"P2TR (m/86'/0'/0'), Starts with 'bc1p’"},BIP84:{namePrefix:"BTC Native SegWit",label:"Native SegWit",template:`m/84'/${a.sR}'/${a.h2}'/0/0`,coinType:a.sR,coinName:a.Ly,addressEncoding:c.EAddressEncodings.P2WPKH,desc:"P2SH-P2WPKH (m/84'/0'/0'), Starts with 'bc1q'"},BIP44:{namePrefix:"BTC Legacy",label:"Legacy",template:`m/44'/${a.sR}'/${a.h2}'/0/0`,coinType:a.sR,coinName:a.Ly,addressEncoding:c.EAddressEncodings.P2PKH,desc:"P2PKH (m/44'/0'/0'), Starts with '1'"}},s={impl:a.PA,coinTypeDefault:a.sR,accountType:r.rX.UTXO,importedAccountEnabled:!0,hardwareAccountEnabled:!0,externalAccountEnabled:!1,watchingAccountEnabled:!0,isUtxo:!0,isSingleToken:!0,NFTEnabled:!1,nonceRequired:!1,feeUTXORequired:!0,editFeeEnabled:!0,replaceTxEnabled:!1,minTransferAmount:"0.00000546",defaultFeePresetIndex:1,accountDeriveInfo:i,networkInfo:{default:{curve:"secp256k1",addressPrefix:""}},signOnlyFullTxRequired:!0};const d=Object.freeze(s)},723608:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var c=n(324586),a=n(404727),r=n(928557),i=n(215882);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,c.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={default:{namePrefix:"LTC Nested SegWit",template:`m/49'/${r.w2}'/${r.h2}'/0/0`,coinType:r.w2,coinName:r.Lf,label:"Nested SegWit",descI18n:{id:"form__bitcoin__nested_segwit_desc",data:{0:"M"}},addressEncoding:a.EAddressEncodings.P2SH_P2WPKH},BIP84:{namePrefix:"LTC Native SegWit",template:`m/84'/${r.w2}'/${r.h2}'/0/0`,coinType:r.w2,coinName:r.Lf,label:"Native SegWit",descI18n:{id:"form__bitcoin__native_segwit_desc",data:{0:"ltc1"}},addressEncoding:a.EAddressEncodings.P2WPKH},BIP44:{namePrefix:"LTC Legacy",template:`m/44'/${r.w2}'/${r.h2}'/0/0`,coinType:r.w2,coinName:r.Lf,label:"Legacy",descI18n:{id:"form__bitcoin__legacy_desc",data:{0:"L"}},addressEncoding:a.EAddressEncodings.P2PKH}},d=_objectSpread(_objectSpread({},i.default),{},{accountDeriveInfo:s,impl:r.le,coinTypeDefault:r.w2,minTransferAmount:"0.00000546"});const o=Object.freeze(d)}}]);