"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7057],{607057:(e,t,r)=>{r.r(t),r.d(t,{default:()=>components_LastActivityTracker});var n=r(514041),c=r(735567),u=r(310955);var s=r(734809);r(663522);const components_LastActivityTracker=function(){var[{enableSystemIdleLock:e,appLockDuration:t}]=(0,s.usePasswordPersistAtom)(),[{unLock:r}]=(0,s.usePasswordAtom)(),[a]=(0,s.useSystemIdleLockSupport)(),o=(0,n.useCallback)((function(){"active"===c.A.currentState&&u.A.serviceSetting.refreshLastActivity().catch(console.error)}),[]),f=(0,n.useCallback)((function(e){"idle"!==e&&"locked"!==e||u.A.servicePassword.lockApp()}),[]);return function useInterval(e,t){var r=(0,n.useRef)(e);(0,n.useEffect)((function(){r.current=e}),[e]),(0,n.useEffect)((function(){if(t||0===t){var e=setInterval((function(){return r.current()}),t);return function(){return clearInterval(e)}}}),[t])}(o,5e3),(0,n.useEffect)(o,[]),(0,n.useEffect)((function(){}),[t,e,f,a,r]),null}}}]);