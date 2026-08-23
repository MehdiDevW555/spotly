import{v as I,j as i,ap as ee,aq as ye,r as b,x as d,z as u,y as tt,a1 as Jt,$ as Yt,a0 as te,P as R,ar as Gn,as as Xt,at as qn,R as Jn,A as Yn,S as Xn,C as Qn,D as Zn,E as er}from"./Store-BhIcN2_i.js";import{j as ge,n as tr,s as we,T as gt,D as ue,P as Qt,A as Zt,v as nr,r as rr,C as en,O as or,W as ir,X as pt}from"./SuccessShopSetup-CVxYhpSh.js";import{K as sr}from"./KeyboardDoubleArrowDown-DU7AhLzV.js";const ar=I(i.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})),cr=I(i.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"})),lr=I(i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"})),dr=I(i.jsx("path",{d:"M20 4H4v2h16zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6zm-9 4H6v-4h6z"}));let tn=e=>{var t,n;return(n=(t=e.users)==null?void 0:t.dashboard)==null?void 0:n.shop},fr=e=>{var t,n;return(n=(t=e.users)==null?void 0:t.dashboard)==null?void 0:n.bookPlace},ur=e=>{var t,n;return(n=(t=e.users)==null?void 0:t.dashboard)==null?void 0:n.ticketStatus},hr=e=>{var t,n;return(n=(t=e.users)==null?void 0:t.dashboard)==null?void 0:n.queue};function bt(e,t,n){console.log("SEND UUID:",t),console.log("SHOP UUID:",n),ge.get(`/api/web/customer/ticket-status/${t}`).then(r=>{console.log("TICKET RESPONSE:",r.data),r.data.active?e(ee({activeTicket:!0,ticketNumber:r.data.ticket_number,peopleBeforeMe:r.data.people_before_me,status:r.data.status,customer:r.data.customer})):(console.log("TICKET FINISHED:",r.data.status),localStorage.removeItem(`ticket_uuid_${n}`),e(ee({activeTicket:!1,status:r.data.status,ticketNumber:null,peopleBeforeMe:0,customer:null})))}).catch(r=>{console.log("TICKET ERROR:",r)}).finally(()=>{e(ee({checking:!1}))})}function xr(e,t,n,r,o,s,a){e(ye({loading:0})),ge.post("/api/web/sendBookPlace",{uuid:t,full_name:n,phone:r,serviceId:o,fcm_token:a}).then(l=>{localStorage.setItem(`ticket_uuid_${t}`,l.data.ticket_uuid),localStorage.setItem(`ticket_id_${t}`,l.data.ticket_id),window.location.reload()}).catch(l=>{console.log(l.response),e(ye({loading:1,message:l.response.data.message,errors:l.response.data.errors}))})}const gr=()=>{};var mt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},pr=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[n++];t[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=e[n++],a=e[n++],l=e[n++],f=((o&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},rn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const s=e[o],a=o+1<e.length,l=a?e[o+1]:0,f=o+2<e.length,c=f?e[o+2]:0,g=s>>2,m=(s&3)<<4|l>>4;let w=(l&15)<<2|c>>6,F=c&63;f||(F=64,a||(w=64)),r.push(n[g],n[m],n[w],n[F])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pr(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const s=n[e.charAt(o++)],l=o<e.length?n[e.charAt(o)]:0;++o;const c=o<e.length?n[e.charAt(o)]:64;++o;const m=o<e.length?n[e.charAt(o)]:64;if(++o,s==null||l==null||c==null||m==null)throw new br;const w=s<<2|l>>4;if(r.push(w),c!==64){const F=l<<4&240|c>>2;if(r.push(F),m!==64){const B=c<<6&192|m;r.push(B)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class br extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mr=function(e){const t=nn(e);return rn.encodeByteArray(t,!0)},on=function(e){return mr(e).replace(/\./g,"")},Er=function(e){try{return rn.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=()=>wr().__FIREBASE_DEFAULTS__,yr=()=>{if(typeof process>"u"||typeof mt>"u")return;const e=mt.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sr=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Er(e[1]);return t&&JSON.parse(t)},Cr=()=>{try{return gr()||Fr()||yr()||Sr()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sn=()=>{var e;return(e=Cr())==null?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function an(){try{return typeof indexedDB=="object"}catch{return!1}}function cn(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;t(((s=o.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}function Ar(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="FirebaseError";class ie extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=vr,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ae.prototype.create)}}class Ae{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?_r(s,r):"Error",l=`${this.serviceName}: ${a} (${o}).`;return new ie(o,l,r)}}function _r(e,t){try{let n=0,r="";for(;n<e.length;){const o=e.indexOf("{$",n);if(o===-1){r+=e.substring(n);break}const s=e.indexOf("}",o+2);if(s===-1){r+=e.substring(n);break}const a=e.substring(o+2,s),l=t[a];r+=e.substring(n,o)+(l!=null?String(l):`<${a}?>`),n=s+1}return r}catch{return e}}function Ge(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const s=e[o],a=t[o];if(Et(s)&&Et(a)){if(!Ge(s,a))return!1}else if(s!==a)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Et(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e){return e&&e._delegate?e._delegate:e}class L{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ir;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Tr(t))try{this.getOrInitializeService({instanceIdentifier:U})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(t=U){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=U){return this.instances.has(t)}getOptions(t=U){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(o)}return o}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(t),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&t(s,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dr(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=U){return this.component?this.component.multipleInstances?t:U:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dr(e){return e===U?void 0:e}function Tr(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new kr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(p||(p={}));const Br={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},Rr=p.INFO,Nr={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},Or=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=Nr[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mr{constructor(t){this.name=t,this._logLevel=Rr,this._logHandler=Or,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in p))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Br[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...t),this._logHandler(this,p.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...t),this._logHandler(this,p.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,p.INFO,...t),this._logHandler(this,p.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,p.WARN,...t),this._logHandler(this,p.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...t),this._logHandler(this,p.ERROR,...t)}}const Pr=(e,t)=>t.some(n=>e instanceof n);let wt,Ft;function $r(){return wt||(wt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zr(){return Ft||(Ft=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ln=new WeakMap,qe=new WeakMap,dn=new WeakMap,Oe=new WeakMap,rt=new WeakMap;function Wr(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(O(e.result)),o()},a=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&ln.set(n,e)}).catch(()=>{}),rt.set(t,e),t}function Hr(e){if(qe.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),o()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});qe.set(e,t)}let Je={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qe.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Lr(e){Je=e(Je)}function Vr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Me(this),t,...n);return dn.set(r,t.sort?t.sort():[t]),O(r)}:zr().includes(e)?function(...t){return e.apply(Me(this),t),O(ln.get(this))}:function(...t){return O(e.apply(Me(this),t))}}function Ur(e){return typeof e=="function"?Vr(e):(e instanceof IDBTransaction&&Hr(e),Pr(e,$r())?new Proxy(e,Je):e)}function O(e){if(e instanceof IDBRequest)return Wr(e);if(Oe.has(e))return Oe.get(e);const t=Ur(e);return t!==e&&(Oe.set(e,t),rt.set(t,e)),t}const Me=e=>rt.get(e);function ve(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),l=O(a);return r&&a.addEventListener("upgradeneeded",f=>{r(O(a.result),f.oldVersion,f.newVersion,O(a.transaction),f)}),n&&a.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),l.then(f=>{s&&f.addEventListener("close",()=>s()),o&&f.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function Fe(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),O(n).then(()=>{})}const Kr=["get","getKey","getAll","getAllKeys","count"],Gr=["put","add","delete","clear"],Pe=new Map;function yt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Pe.get(t))return Pe.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Gr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Kr.includes(n)))return;const s=async function(a,...l){const f=this.transaction(a,o?"readwrite":"readonly");let c=f.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),o&&f.done]))[0]};return Pe.set(t,s),s}Lr(e=>({...e,get:(t,n,r)=>yt(t,n)||e.get(t,n,r),has:(t,n)=>!!yt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ye="@firebase/app",St="0.16.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=new Mr("@firebase/app"),Yr="@firebase/app-compat",Xr="@firebase/analytics-compat",Qr="@firebase/analytics",Zr="@firebase/app-check-compat",eo="@firebase/app-check",to="@firebase/auth",no="@firebase/auth-compat",ro="@firebase/database",oo="@firebase/data-connect",io="@firebase/database-compat",so="@firebase/functions",ao="@firebase/functions-compat",co="@firebase/installations",lo="@firebase/installations-compat",fo="@firebase/messaging",uo="@firebase/messaging-compat",ho="@firebase/performance",xo="@firebase/performance-compat",go="@firebase/remote-config",po="@firebase/remote-config-compat",bo="@firebase/storage",mo="@firebase/storage-compat",Eo="@firebase/firestore",wo="@firebase/ai",Fo="@firebase/firestore-compat",yo="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="[DEFAULT]",So={[Ye]:"fire-core",[Yr]:"fire-core-compat",[Qr]:"fire-analytics",[Xr]:"fire-analytics-compat",[eo]:"fire-app-check",[Zr]:"fire-app-check-compat",[to]:"fire-auth",[no]:"fire-auth-compat",[ro]:"fire-rtdb",[oo]:"fire-data-connect",[io]:"fire-rtdb-compat",[so]:"fire-fn",[ao]:"fire-fn-compat",[co]:"fire-iid",[lo]:"fire-iid-compat",[fo]:"fire-fcm",[uo]:"fire-fcm-compat",[ho]:"fire-perf",[xo]:"fire-perf-compat",[go]:"fire-rc",[po]:"fire-rc-compat",[bo]:"fire-gcs",[mo]:"fire-gcs-compat",[Eo]:"fire-fst",[Fo]:"fire-fst-compat",[wo]:"fire-vertex","fire-js":"fire-js",[yo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=new Map,Co=new Map,Qe=new Map;function Ct(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function G(e){const t=e.name;if(Qe.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;Qe.set(t,e);for(const n of Se.values())Ct(n,e);for(const n of Co.values())Ct(n,e);return!0}function ot(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},N=new Ae("app","Firebase",Io);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new L("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw N.create("app-deleted",{appName:this._name})}}function fn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Xe,automaticDataCollectionEnabled:!0,...t},o=r.name;if(typeof o!="string"||!o)throw N.create("bad-app-name",{appName:String(o)});if(n||(n=sn()),!n)throw N.create("no-options");const s=Se.get(o);if(s)if(Ge(n,s.options)){if(Ge(r,s.config))return s;throw N.create("duplicate-app",{appName:o,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw N.create("duplicate-app",{appName:o,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const a=new jr(o);for(const f of Qe.values())a.addComponent(f);const l=new Ao(n,r,a);return Se.set(o,l),l}function vo(e=Xe){const t=Se.get(e);if(!t&&e===Xe&&sn())return fn();if(!t)throw N.create("no-app",{appName:e});return t}function H(e,t,n){let r=So[e]??e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${r}" with version "${t}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),P.warn(a.join(" "));return}G(new L(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="firebase-heartbeat-database",ko=1,xe="firebase-heartbeat-store";let $e=null;function un(){return $e||($e=ve(_o,ko,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(xe)}catch(n){console.warn(n)}}}}).catch(e=>{throw N.create("idb-open",{originalErrorMessage:e.message})})),$e}async function Do(e){try{const n=(await un()).transaction(xe),r=await n.objectStore(xe).get(hn(e));return await n.done,r}catch(t){if(t instanceof ie)P.warn(t.message);else{const n=N.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});P.warn(n.message)}}}async function It(e,t){try{const r=(await un()).transaction(xe,"readwrite");await r.objectStore(xe).put(t,hn(e)),await r.done}catch(n){if(n instanceof ie)P.warn(n.message);else{const r=N.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});P.warn(r.message)}}}function hn(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=1024,jo=30;class Bo{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new No(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=At();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats.length>jo){const a=Oo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){P.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=At(),{heartbeatsToSend:r,unsentEntries:o}=Ro(this._heartbeatsCache.heartbeats),s=on(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return P.warn(n),""}}}function At(){return new Date().toISOString().substring(0,10)}function Ro(e,t=To){const n=[];let r=e.slice();for(const o of e){const s=n.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),vt(n)>t){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),vt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class No{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return an()?cn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Do(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return It(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return It(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function vt(e){return on(JSON.stringify({version:2,heartbeats:e})).length}function Oo(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e){G(new L("platform-logger",t=>new qr(t),"PRIVATE")),G(new L("heartbeat",t=>new Bo(t),"PRIVATE")),H(Ye,St,e),H(Ye,St,"esm2020"),H("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mo("");const xn="@firebase/installations",it="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=1e4,pn=`w:${it}`,bn="FIS_v2",Po="https://firebaseinstallations.googleapis.com/v1",$o=60*60*1e3,zo="installations",Wo="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},q=new Ae(zo,Wo,Ho);function mn(e){return e instanceof ie&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En({projectId:e}){return`${Po}/projects/${e}/installations`}function wn(e){return{token:e.token,requestStatus:2,expiresIn:Vo(e.expiresIn),creationTime:Date.now()}}async function Fn(e,t){const r=(await t.json()).error;return q.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Lo(e,{refreshToken:t}){const n=yn(e);return n.append("Authorization",Uo(t)),n}async function Sn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Vo(e){return Number(e.replace("s","000"))}function Uo(e){return`${bn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=En(e),o=yn(e),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const a={fid:n,authVersion:bn,appId:e.appId,sdkVersion:pn},l={method:"POST",headers:o,body:JSON.stringify(a)},f=await Sn(()=>fetch(r,l));if(f.ok){const c=await f.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:wn(c.authToken)}}else throw await Fn("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=/^[cdef][\w-]{21}$/,Ze="";function Jo(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Yo(e);return qo.test(n)?n:Ze}catch{return Ze}}function Yo(e){return Go(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Map;function In(e,t){const n=se(e);An(n,t),Zo(n,t)}function Xo(e,t){vn();const n=se(e);let r=ne.get(n);r||(r=new Set,ne.set(n,r)),r.add(t)}function Qo(e,t){const n=se(e),r=ne.get(n);r&&(r.delete(t),r.size===0&&ne.delete(n),_n())}function An(e,t){const n=ne.get(e);if(n)for(const r of n)r(t)}function Zo(e,t){const n=vn();n&&n.postMessage({key:e,fid:t}),_n()}let K=null;function vn(){return!K&&"BroadcastChannel"in self&&(K=new BroadcastChannel("[Firebase] FID Change"),K.onmessage=e=>{An(e.data.key,e.data.fid)}),K}function _n(){ne.size===0&&K&&(K.close(),K=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="firebase-installations-database",ti=1,J="firebase-installations-store";let ze=null;function st(){return ze||(ze=ve(ei,ti,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(J)}}})),ze}async function Ce(e,t){const n=se(e),o=(await st()).transaction(J,"readwrite"),s=o.objectStore(J),a=await s.get(n);return await s.put(t,n),await o.done,(!a||a.fid!==t.fid)&&In(e,t.fid),t}async function kn(e){const t=se(e),r=(await st()).transaction(J,"readwrite");await r.objectStore(J).delete(t),await r.done}async function _e(e,t){const n=se(e),o=(await st()).transaction(J,"readwrite"),s=o.objectStore(J),a=await s.get(n),l=t(a);return l===void 0?await s.delete(n):await s.put(l,n),await o.done,l&&(!a||a.fid!==l.fid)&&In(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e){let t;const n=await _e(e.appConfig,r=>{const o=ni(r),s=ri(e,o);return t=s.registrationPromise,s.installationEntry});return n.fid===Ze?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ni(e){const t=e||{fid:Jo(),registrationStatus:0};return Dn(t)}function ri(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(q.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=oi(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ii(e)}:{installationEntry:t}}async function oi(e,t){try{const n=await Ko(e,t);return Ce(e.appConfig,n)}catch(n){throw mn(n)&&n.customData.serverCode===409?await kn(e.appConfig):await Ce(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ii(e){let t=await _t(e.appConfig);for(;t.registrationStatus===1;)await Cn(100),t=await _t(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await at(e);return r||n}return t}function _t(e){return _e(e,t=>{if(!t)throw q.create("installation-not-found");return Dn(t)})}function Dn(e){return si(e)?{fid:e.fid,registrationStatus:0}:e}function si(e){return e.registrationStatus===1&&e.registrationTime+gn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai({appConfig:e,heartbeatServiceProvider:t},n){const r=ci(e,n),o=Lo(e,n),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const a={installation:{sdkVersion:pn,appId:e.appId}},l={method:"POST",headers:o,body:JSON.stringify(a)},f=await Sn(()=>fetch(r,l));if(f.ok){const c=await f.json();return wn(c)}else throw await Fn("Generate Auth Token",f)}function ci(e,{fid:t}){return`${En(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t=!1){let n;const r=await _e(e.appConfig,s=>{if(!Tn(s))throw q.create("not-registered");const a=s.authToken;if(!t&&fi(a))return s;if(a.requestStatus===1)return n=li(e,t),s;{if(!navigator.onLine)throw q.create("app-offline");const l=hi(s);return n=di(e,l),l}});return n?await n:r.authToken}async function li(e,t){let n=await kt(e.appConfig);for(;n.authToken.requestStatus===1;)await Cn(100),n=await kt(e.appConfig);const r=n.authToken;return r.requestStatus===0?ct(e,t):r}function kt(e){return _e(e,t=>{if(!Tn(t))throw q.create("not-registered");const n=t.authToken;return xi(n)?{...t,authToken:{requestStatus:0}}:t})}async function di(e,t){try{const n=await ai(e,t),r={...t,authToken:n};return await Ce(e.appConfig,r),n}catch(n){if(mn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kn(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await Ce(e.appConfig,r)}throw n}}function Tn(e){return e!==void 0&&e.registrationStatus===2}function fi(e){return e.requestStatus===2&&!ui(e)}function ui(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+$o}function hi(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function xi(e){return e.requestStatus===1&&e.requestTime+gn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(e){const t=e,{installationEntry:n,registrationPromise:r}=await at(t);return r?r.catch(console.error):ct(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e,t=!1){const n=e;return await bi(n),(await ct(n,t)).token}async function bi(e){const{registrationPromise:t}=await at(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e,t){const{appConfig:n}=e;return Xo(n,t),()=>{Qo(n,t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e){if(!e||!e.options)throw We("App Configuration");if(!e.name)throw We("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw We(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function We(e){return q.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="installations",wi="installations-internal",Fi=e=>{const t=e.getProvider("app").getImmediate(),n=Ei(t),r=ot(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yi=e=>{const t=e.getProvider("app").getImmediate(),n=ot(t,jn).getImmediate();return{getId:()=>gi(n),getToken:o=>pi(n,o)}};function Si(){G(new L(jn,Fi,"PUBLIC")),G(new L(wi,yi,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Si();H(xn,it);H(xn,it,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="/firebase-messaging-sw.js",Ii="/firebase-cloud-messaging-push-scope",Bn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ai="https://fcmregistrations.googleapis.com/v1",Rn="google.c.a.c_id",vi="google.c.a.c_l",_i="google.c.a.ts",ki="google.c.a.e",Dt=1e4;var Tt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Tt||(Tt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var re;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked",e.FID_REGISTERED="fid-registered"})(re||(re={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Nn(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let s=0;s<r.length;++s)o[s]=r.charCodeAt(s);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="fcm_token_details_db",Di=5,jt="fcm_token_object_Store";async function Ti(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(He))return null;let t=null;return(await ve(He,Di,{upgrade:async(r,o,s,a)=>{if(o<2||!r.objectStoreNames.contains(jt))return;const l=a.objectStore(jt),f=await l.index("fcmSenderId").get(e);if(await l.clear(),!!f){if(o===2){const c=f;if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:v(c.vapidKey)}}}else if(o===3){const c=f;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:v(c.auth),p256dh:v(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:v(c.vapidKey)}}}else if(o===4){const c=f;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:v(c.auth),p256dh:v(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:v(c.vapidKey)}}}}}})).close(),await Fe(He),await Fe("fcm_vapid_details_db"),await Fe("undefined"),ji(t)?t:null}function ji(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","fid-registration-failed":"A problem occurred while creating an FCM registration via FID: {$errorInfo}","fid-unregister-failed":"A problem occurred while unregistering the FCM registration via FID: {$errorInfo}","fid-registration-idb-schema-unavailable":"Unable to read or persist FID registration metadata because the messaging IndexedDB schema is unavailable (for example, the database could not be upgraded to the latest version).","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.","invalid-on-registered-handler":"No onRegistered callback handler was provided or registered. Implement onRegistered() before register()."},x=new Ae("messaging","Messaging",Bi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="firebase-messaging-database",Rt=2,Y="firebase-messaging-store",M="firebase-messaging-fid-registration-store",Ri={openDB:ve,deleteDB:Fe};let Nt=Ri,he=null;function Ni(e,t,n){switch(t){case 0:if(e.createObjectStore(Y),n===1)break;case 1:n===2&&e.createObjectStore(M)}}function Ot(e){return{upgrade:(t,n)=>{Ni(t,n,e)},blocked:()=>{},blocking:(t,n,r)=>{var o;he=null,(o=r.target)==null||o.close()},terminated:()=>{he=null}}}function ke(){return he||(he=Nt.openDB(Bt,Rt,Ot(2)).catch(()=>Nt.openDB(Bt,Rt-1,Ot(1)))),he}function On(e,t){return e.objectStoreNames.contains(t)}function Mn(e){if(!On(e,M))throw x.create("fid-registration-idb-schema-unavailable")}async function Oi(e){const t=De(e),r=await(await ke()).transaction(Y).objectStore(Y).get(t);if(r)return r;{const o=await Ti(e.appConfig.senderId);if(o)return await lt(e,o),o}}async function lt(e,t){const n=De(e),r=await ke(),o=[Y],s=On(r,M);s&&o.push(M);const a=r.transaction(o,"readwrite");return await a.objectStore(Y).put(t,n),s&&await a.objectStore(M).delete(n),await a.done,t}async function Pn(e){const t=De(e),n=await ke();return Mn(n),await n.transaction(M).objectStore(M).get(t)}async function Mi(e,t){const n=De(e),r=await ke();Mn(r);const o=r.transaction([Y,M],"readwrite");return await o.objectStore(M).put(t,n),await o.objectStore(Y).delete(n),await o.done,t}function De({appConfig:e}){return e.appId}const Mt="@firebase/messaging",et="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=3,$i=1e3;async function zi(e,t){const n=await je(e),r=dt(t,e.appConfig.appName,!1),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Te(e.appConfig),o)).json()}catch(a){throw x.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw x.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw x.create("token-subscribe-no-token");return s.token}async function Wi(e,t){var f;const n=await je(e),r=dt(t,e.appConfig.appName,!0),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await Ki(()=>fetch(Te(e.appConfig),o),Pi,$i)}catch(c){throw x.create("fid-registration-failed",{errorInfo:c==null?void 0:c.toString()})}if(s.ok)return{responseFid:await Hi(s)};let a;try{a=await s.json()}catch{throw x.create("fid-registration-failed",{errorInfo:s.statusText})}const l=((f=a.error)==null?void 0:f.message)??s.statusText;throw x.create("fid-registration-failed",{errorInfo:l})}async function Hi(e){const t=await e.text();if(!t.trim())throw x.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is empty"});let n;try{n=JSON.parse(t)}catch{throw x.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is not valid JSON"})}const r=n.name;if(typeof r!="string"||r.length===0)throw x.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response did not include a non-empty name"});return Li(r)}const Pt="/registrations/";function Li(e){const t=e.indexOf(Pt);if(t!==-1){const n=e.slice(t+Pt.length);if(n.length>0)return n}throw x.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response name is not a valid registration resource name"})}async function Vi(e,t){const n=await je(e),r=dt(t.subscriptionOptions,e.appConfig.appName,!1),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Te(e.appConfig)}/${t.token}`,o)).json()}catch(a){throw x.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw x.create("token-update-failed",{errorInfo:a})}if(!s.token)throw x.create("token-update-no-token");return s.token}async function Ui(e,t){const r={method:"DELETE",headers:await je(e)};try{const s=await(await fetch(`${Te(e.appConfig)}/${t}`,r)).json();if(s.error){const a=s.error.message;throw x.create("token-unsubscribe-failed",{errorInfo:a})}}catch(o){throw x.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}async function Ki(e,t,n){let r;for(let o=0;o<t;o++)try{return await e()}catch(s){if(r=s,o<t-1){const a=n*Math.pow(2,o);await new Promise(l=>setTimeout(l,a))}}throw r}function Te({projectId:e}){return`${Ai}/projects/${e}/registrations`}async function je({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Gi(e,t){var n,r;try{if(/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e))return new URL(e).host}catch{}try{if(typeof self<"u"&&((n=self.location)!=null&&n.href))return new URL(e,self.location.origin).host}catch{}return typeof self<"u"&&((r=self.location)!=null&&r.host)?self.location.host:t}function dt({p256dh:e,auth:t,endpoint:n,vapidKey:r,swScope:o},s,a){const l={web:{origin:Gi(o,s),endpoint:n,auth:t,p256dh:e}};return a&&(l.fcm_sdk_version=et),r!==Bn&&(l.web.applicationPubKey=r),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=7*24*60*60*1e3;async function Ji(e){const t=await Xi(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:v(t.getKey("auth")),p256dh:v(t.getKey("p256dh"))},r=await Oi(e.firebaseDependencies);if(r){if(Qi(r.subscriptionOptions,n))return Date.now()>=r.createTime+qi?Yi(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ui(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return $t(e.firebaseDependencies,n)}else return $t(e.firebaseDependencies,n)}async function Yi(e,t){try{const n=await Vi(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await lt(e.firebaseDependencies,r),n}catch(n){throw n}}async function $t(e,t){const r={token:await zi(e,t),createTime:Date.now(),subscriptionOptions:t};return await lt(e,r),r.token}async function Xi(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Nn(t)})}function Qi(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&o&&s}function Zi(e,t){const n=e.onRegisteredHandler;n&&(typeof n=="function"?n(t):n.next(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(e){try{e.swRegistration=await navigator.serviceWorker.register(Ci,{scope:Ii}),e.swRegistration.update().catch(()=>{}),await ts(e.swRegistration)}catch(t){throw x.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function ts(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Dt} ms`)),Dt),o=e.installing||e.waiting;e.active?(clearTimeout(r),t()):o?o.onstatechange=s=>{var a;((a=s.target)==null?void 0:a.state)==="activated"&&(o.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(e,t){if(!t&&!e.swRegistration&&await es(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw x.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Bn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=3;async function ns(e,t){const n=await rs(e.swRegistration,e.vapidKey),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:n.endpoint,auth:v(n.getKey("auth")),p256dh:v(n.getKey("p256dh"))},o=e.firebaseDependencies.installations;for(let s=0;s<zt;s++){const{responseFid:a}=await Wi(e.firebaseDependencies,r);if(a===t)return;s<zt-1&&await o.getToken(!0)}throw x.create("fid-registration-failed",{errorInfo:"CreateRegistration response FID does not match Firebase Installation ID"})}async function rs(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Nn(t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=7*24*60*60*1e3;async function Wn(e,t){if(!navigator)throw x.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw x.create("permission-blocked");if(!e.onRegisteredHandler)throw x.create("invalid-on-registered-handler");await zn(e,t==null?void 0:t.vapidKey),await $n(e,t==null?void 0:t.serviceWorkerRegistration);const n=e._registerNotifyChain.catch(()=>{});return e._registerNotifyChain=n.then(async()=>{const r=await e.firebaseDependencies.installations.getId(),o=await Pn(e.firebaseDependencies),s=Date.now();if((!o||o.fid!==r||s>=o.lastRegisterTime+os)&&(await ns(e,r),await Mi(e.firebaseDependencies,{fid:r,lastRegisterTime:s,vapidKey:e.vapidKey})),!e.onRegisteredHandler)throw x.create("invalid-on-registered-handler");Zi(e,r)}),e._registerNotifyChain}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t){return mi(t,()=>{(async()=>!e.onRegisteredHandler||!await Pn(e.firebaseDependencies)||await Wn(e).catch(()=>{}))()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return ss(t,e),as(t,e),cs(t,e),t}function ss(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function as(e,t){t.data&&(e.data=t.data)}function cs(e,t){var o,s,a,l;if(!t.fcmOptions&&!((o=t.notification)!=null&&o.click_action))return;e.fcmOptions={};const n=((s=t.fcmOptions)==null?void 0:s.link)??((a=t.notification)==null?void 0:a.click_action);n&&(e.fcmOptions.link=n);const r=(l=t.fcmOptions)==null?void 0:l.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){return typeof e=="object"&&!!e&&Rn in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e){if(!e||!e.options)throw Le("App Configuration Object");if(!e.name)throw Le("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Le(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Le(e){return x.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.onRegisteredHandler=null,this.onUnregisteredHandler=null,this._registerNotifyChain=Promise.resolve(),this._fidChangeUnsubscribe=null,this.logEvents=[],this.logQueue={state:"stopped"};const o=ds(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return this._fidChangeUnsubscribe&&(this._fidChangeUnsubscribe(),this._fidChangeUnsubscribe=null),this.logQueue.state==="scheduled"&&clearTimeout(this.logQueue.timerId),this.logQueue={state:"stopped"},Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(e,t){if(!navigator)throw x.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw x.create("permission-blocked");return await zn(e,t==null?void 0:t.vapidKey),await $n(e,t==null?void 0:t.serviceWorkerRegistration),Ji(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(e,t,n){const r=hs(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Rn],message_name:n[vi],message_time:n[_i],message_device_time:Math.floor(Date.now()/1e3)})}function hs(e){switch(e){case re.NOTIFICATION_CLICKED:return"notification_open";case re.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;if(e.onMessageHandler&&n.messageType===re.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Wt(n)):e.onMessageHandler.next(Wt(n))),e.onRegisteredHandler&&n.messageType===re.FID_REGISTERED){const o=n.fid;typeof e.onRegisteredHandler=="function"?e.onRegisteredHandler(o):e.onRegisteredHandler.next(o)}const r=n.data;ls(r)&&r[ki]==="1"&&await us(e,n.messageType,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=e=>{const t=new fs(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>xs(t,n)),t._fidChangeUnsubscribe=is(t,e.getProvider("installations").getImmediate()),t},ps=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Hn(t,r),register:r=>Wn(t,r)}};function bs(){G(new L("messaging",gs,"PUBLIC")),G(new L("messaging-internal",ps,"PRIVATE")),H(Mt,et),H(Mt,et,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(){try{await cn()}catch{return!1}return typeof window<"u"&&an()&&Ar()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e,t){if(!navigator)throw x.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(e=vo()){return ms().then(t=>{if(!t)throw x.create("unsupported-browser")},t=>{throw x.create("indexed-db-unsupported")}),ot(nt(e),"messaging").getImmediate()}async function Ln(e,t){return e=nt(e),Hn(e,t)}function Fs(e,t){return e=nt(e),Es(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bs();var ys="firebase",Ss="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */H(ys,Ss,"app");const Cs={apiKey:"AIzaSyAUjyNbF__Ki6QVYmpviFP9MEddgZxGZIQ",authDomain:"spotlly.firebaseapp.com",projectId:"spotlly",storageBucket:"spotlly.firebasestorage.app",messagingSenderId:"1057323783239",appId:"1:1057323783239:web:c9d2e421f615d9e8e94d62"},Is=fn(Cs);let Ie=null;typeof window<"u"&&(Ie=ws(Is));const As=I(i.jsx("path",{d:"M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.68-1.5-1.51-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.3 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71zm-6.01 6c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2M6.77 4.73c.42-.38.43-1.03.03-1.43-.38-.38-1-.39-1.39-.02C3.7 4.84 2.52 6.96 2.14 9.34c-.09.61.38 1.16 1 1.16.48 0 .9-.35.98-.83.3-1.94 1.26-3.67 2.65-4.94M18.6 3.28c-.4-.37-1.02-.36-1.4.02-.4.4-.38 1.04.03 1.42 1.38 1.27 2.35 3 2.65 4.94.07.48.49.83.98.83.61 0 1.09-.55.99-1.16-.38-2.37-1.55-4.48-3.25-6.05"})),vs=I(i.jsx("path",{d:"M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0s.39-1.02 0-1.41l-6.59-6.59a.996.996 0 0 0-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1"})),_s="/build/assets/gide-allow-notification-imag-Bz-7_bo6.png";function ks({open:e,onClose:t,uuid:n,fromBooking:r=!1,onTokenReady:o}){const[s,a]=b.useState(!1),[l,f]=b.useState(!1);b.useEffect(()=>{if(e){if(Notification.permission==="denied"){f(!!r);return}f(!1)}},[e,r]);const c=async()=>{try{if(a(!0),Notification.permission==="denied"){if(a(!1),r){f(!0);return}t();return}const g=await Notification.requestPermission();if(console.log("NOTIFICATION PERMISSION:",g),g==="denied"){if(a(!1),r){f(!0);return}t();return}if(g!=="granted"){a(!1),t();return}const m=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),w=await Ln(Ie,{vapidKey:"BMrlXhCM4FvgLg4dhS1qIRdWG_-0dzrH4p6goE2Gm5vOKP_TwkWVFmjsv2G-Bts2Jny0NBf0OHMd6OY6MTeLLUw",serviceWorkerRegistration:m});if(console.log("FCM TOKEN:",w),!w){console.error("FCM TOKEN WAS NOT GENERATED"),a(!1);return}o&&o(w);const F=localStorage.getItem(`ticket_id_${n}`);if(F){const B=await ge.post("/api/web/save-fcm-token",{ticket_id:F,fcm_token:w});console.log("FCM TOKEN SAVED:",B.data)}a(!1),f(!1),t()}catch(g){console.error("FCM ERROR:",g),a(!1)}};return e?i.jsx(d,{sx:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.65)",backdropFilter:"blur(5px)",p:2},children:i.jsxs(d,{sx:{width:"100%",maxWidth:420,maxHeight:"90vh",overflowY:"auto",backgroundColor:"#fff",borderRadius:4,py:3,px:2,textAlign:"center",boxShadow:"0 25px 70px rgba(0,0,0,.35)"},children:[i.jsx(As,{sx:{fontSize:70,color:"#0ab7ab"}}),i.jsx(u,{sx:{fontSize:22,fontWeight:900,mb:1},children:"فعّل الإشعارات"}),l?i.jsxs(i.Fragment,{children:[i.jsxs(d,{sx:{position:"fixed",top:8,left:"50%",transform:"translateX(-50%)",zIndex:10001,display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",animation:"browserArrow 1.2s ease-in-out infinite","@keyframes browserArrow":{"0%, 100%":{transform:"translate(-50%, 0)"},"50%":{transform:"translate(-50%, -7px)"}}},children:[i.jsx(u,{sx:{color:"#fff",fontSize:{xs:14,sm:16},fontWeight:900,background:"rgba(0,0,0,.75)",px:2,py:.7,borderRadius:2,whiteSpace:"nowrap"},children:"👆 انظر إلى أعلى المتصفح"}),i.jsx(vs,{sx:{color:"#ff5252",fontSize:{xs:48,sm:58}}})]}),i.jsxs(u,{sx:{color:"#64748b",lineHeight:1.7,fontSize:15,mb:2},children:["الإشعارات محظورة حالياً.",i.jsx("br",{}),"لتفعيلها، استخدم إعدادات الموقع الموجودة بجانب عنوان الصفحة."]}),i.jsxs(d,{sx:{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:3,p:1.5},children:[i.jsxs(u,{sx:{fontWeight:900,color:"#334155",fontSize:14},children:["اضغط على أيقونة بجانب اسم الموقع",i.jsx("br",{}),"ثم اختر:"]}),i.jsx(u,{sx:{color:"#0ab7ab",fontWeight:900,fontSize:14},children:"السماح → الإشعارات"})]}),i.jsx(d,{sx:{width:"100%",display:"flex",justifyContent:"center",mt:2},children:i.jsx(d,{component:"img",src:_s,alt:"طريقة السماح بالإشعارات",sx:{width:"100%",maxWidth:400,height:"auto",borderRadius:3,display:"block"}})}),i.jsx(u,{sx:{color:"#3e5471",lineHeight:2,fontSize:16,fontWeight:700,mt:2},children:"بعد اختيار السماح، حدث الصفحة وستتمكن من استقبال إشعارات دورك."})]}):i.jsxs(i.Fragment,{children:[i.jsx(u,{sx:{color:"#64748b",lineHeight:2,mb:2},children:"يجب تفعيل الإشعارات حتى تتمكن من استقبال تنبيهات دورك عندما يقترب دورك أو يحين دورك."}),i.jsxs(d,{sx:{border:"1px solid #f1b5b5",backgroundColor:"#fff7f7",borderRadius:2.5,p:1.5,mb:3,textAlign:"right"},children:[i.jsx(u,{sx:{color:"#d32f2f",fontSize:14,fontWeight:700},children:"⚠️ تنبيه"}),i.jsxs(u,{sx:{color:"#d32f2f",fontSize:13.5,lineHeight:1.8,mt:.3},children:["إذا اخترت",i.jsx("strong",{children:' "حظر"'}),"، فلن تتمكن من استقبال إشعارات دورك، ولن يستطيع الموقع طلب السماح بها مرة أخرى تلقائياً."]})]}),i.jsx(tt,{fullWidth:!0,variant:"contained",disabled:s,onClick:c,sx:{py:1.3,borderRadius:3,fontWeight:800,background:"linear-gradient(90deg,#0ab7ab,#4cc9f0,#9d4edd)","&:hover":{background:"linear-gradient(90deg,#09a99e,#3ebbdc,#8d43c9)"}},children:s?i.jsx(Jt,{size:24,sx:{color:"#fff"}}):"تفعيل الإشعارات"})]})]})}):null}const Ht={"& .MuiOutlinedInput-root":{borderRadius:"14px",background:"#1b1c1d",color:"#fff","& fieldset":{borderColor:"rgba(255,255,255,.08)"},"&:hover fieldset":{borderColor:"rgba(99,91,255,.5)"},"&.Mui-focused fieldset":{borderColor:"#635bff",boxShadow:"0 0 15px rgba(99,91,255,.3)"}},"& input::placeholder":{color:"#b7b6b6",opacity:1}};function Ds(e){var de,fe;let{lastTicketNumber:t,waitingCount:n,tUEFF:r,uuid:o,ticketNumber:s,fcmToken:a}=e,l=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};const[f,c]=b.useState(null),[g,m]=b.useState(!1),[w,F]=b.useState(!1),[B,j]=b.useState(a||"");b.useEffect(()=>{a&&j(a)},[a]);let ae=Yt(),A=te(tn),X=te(tr),$=X==null?void 0:X.services,Q=te(fr),{full_name:y,phone:z,service_id:W,loading:V,errors:Z}=Q,ce=y,h=z,pe=W,be=V,E=Z;console.log(t),b.useEffect(()=>{if(Notification.permission==="granted"){m(!1);return}F(!1),m(!0)},[]),b.useEffect(()=>{console.log("FCM TOKEN CHANGED:",a)},[a]);const me=S=>{if(!S)return;const C=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(S)}`;window.open(C,"_blank")};let le=S=>C=>{ae(ye({[S]:C.target.value}))};const Ee=()=>{if(Notification.permission==="granted"){xr(ae,o,y,z,pe,r,B);return}F(!0),m(!0)};return i.jsxs(d,{dir:"rtl",sx:{bgcolor:"black",mx:"auto",px:{xs:3,md:15},py:0,display:"flex",flexDirection:"column",gap:3},children:[i.jsx(ks,{open:g,uuid:o,fromBooking:w,onTokenReady:S=>{j(S)},onClose:()=>{m(!1),F(!1)}}),i.jsxs(R,{elevation:0,sx:{px:2,pt:2,pb:{xs:4,sm:10},borderRadius:"20px 20px 0px 0px",position:"relative",overflow:"hidden",background:"linear-gradient(135deg,#4338CA 0%,#6366F1 50%,#06B6D4 100%)",background:"linear-gradient(135deg, #743DB1 0%, #47CBE4 50%, #3989EC 100%)",color:"#fff"},children:[i.jsx(d,{sx:{position:"absolute",top:-120,right:-120,width:280,height:280,borderRadius:"50%",bgcolor:"rgba(255,255,255,.08)"}}),i.jsx(d,{sx:{position:"absolute",bottom:-60,left:-60,width:220,height:220,borderRadius:"50%",bgcolor:"rgba(255,255,255,.06)"}}),i.jsx(d,{sx:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",my:{xs:1,sm:3}},children:i.jsx(u,{sx:{fontSize:{xs:35,md:40},opacity:.9},children:"مرحباً بك، احجز دورك بسهولة وتابع تقدمك لحظة بلحظة."})}),i.jsxs(d,{dir:"rtl",sx:{mt:2,position:"relative",zIndex:2,display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-evenly",gap:2},children:[i.jsxs(d,{children:[i.jsxs(d,{sx:{display:"flex",flexDirection:{xs:"row",sm:"row"},alignItems:"center",justifyContent:"center",gap:1,textAlign:{xs:"right",md:"right"}},children:[i.jsx(dr,{sx:{fontSize:{xs:90,sm:110}}}),i.jsxs(d,{children:[i.jsx(u,{sx:{fontSize:{xs:20,md:23},fontWeight:700},children:A==null?void 0:A.shop_name}),i.jsxs(d,{onClick:()=>me(A==null?void 0:A.address),sx:{display:"flex",alignItems:"center",justifyContent:{xs:"center",md:"flex-start"},gap:1,flexWrap:"nowrap",opacity:.9},children:[i.jsx(lr,{fontSize:"small"}),i.jsx(u,{sx:{fontSize:15,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:A==null?void 0:A.address})]})]})]}),i.jsxs(d,{sx:{mt:{xs:0,sm:3},display:{xs:"none",sm:"block"},flexWrap:"wrap",justifyContent:{xs:"center",md:"flex-start"}},children:[i.jsx(we,{label:"مفتوح الآن",sx:{ml:1.5,px:1,bgcolor:"rgba(255,255,255,.15)",color:"#fff",backdropFilter:"blur(10px)"}}),i.jsx(we,{label:`${n} منتظرين`,sx:{ml:1.5,px:1,bgcolor:"rgba(255,255,255,.15)",color:"#fff",backdropFilter:"blur(10px)"}})]})]}),i.jsxs(d,{sx:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[i.jsx(d,{sx:{width:{xs:200,md:180},height:{xs:200,md:180},borderRadius:"50%",background:"linear-gradient(135deg,#ffffff,#eef4ff)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"primary.main",border:"8px solid rgba(255,255,255,.25)",boxShadow:"0 25px 50px rgba(0,0,0,.15)",textAlign:"center",px:2},children:t===0||t===void 0||t===null?i.jsxs(i.Fragment,{children:[i.jsx(u,{sx:{fontSize:28,fontWeight:900,lineHeight:1.3},children:"كن أول من يحجز"}),i.jsx(u,{sx:{mt:1,fontSize:15,fontWeight:600,color:"text.secondary"},children:"لا توجد تذاكر اليوم"})]}):i.jsxs(i.Fragment,{children:[i.jsx(u,{sx:{fontSize:90,fontWeight:900,lineHeight:1},children:t}),i.jsx(u,{sx:{fontSize:18,fontWeight:700},children:"آخر تذكرة"})]})}),i.jsxs(d,{sx:{mt:{xs:5,sm:3},display:{xs:"block",sm:"none"},flexWrap:"wrap",gap:1,justifyContent:{xs:"center",md:"flex-start"}},children:[i.jsx(we,{label:"مفتوح الآن",sx:{ml:.5,px:.5,bgcolor:"rgba(255,255,255,.15)",color:"#fff",backdropFilter:"blur(10px)"}}),i.jsx(we,{label:`${n} منتظرين`,sx:{ml:.5,px:.5,bgcolor:"rgba(255,255,255,.15)",color:"#fff",backdropFilter:"blur(10px)"}})]})]})]}),i.jsx(d,{sx:{mt:{xs:3,sm:0},mb:{xs:5,sm:0},display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(d,{onClick:l,sx:{display:{xs:"block",sm:"none"},alignItems:"center",justifyContent:"center",borderRadius:"50%",backdropFilter:"blur(10px)",cursor:"pointer",animation:"bounce 1.5s infinite","@keyframes bounce":{"0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(8px)"}}},children:i.jsx(sr,{sx:{fontSize:80,color:"#fff"}})})}),i.jsx(d,{component:"svg",viewBox:"0 0 1440 120",preserveAspectRatio:"none",sx:{position:"absolute",bottom:0,left:0,width:"100%",height:{xs:80,sm:80},display:"block"},children:i.jsx("path",{d:"M0,64C120,120,240,0,360,64C480,128,600,0,720,64C840,128,960,0,1080,64C1200,128,1320,0,1440,64V120H0Z"})})]}),i.jsxs(d,{sx:{mt:0,display:"flex",flexDirection:"column",gap:2},children:[i.jsx(gt,{fullWidth:!0,value:ce,onChange:le("full_name"),placeholder:"أدخل اسمك الكامل",sx:Ht,error:!!(E!=null&&E.full_name),helperText:((de=E==null?void 0:E.full_name)==null?void 0:de[0])||""}),i.jsx(gt,{fullWidth:!0,value:h,onChange:le("phone"),placeholder:"05XXXXXXXX",sx:Ht,error:!!(E!=null&&E.phone),helperText:((fe=E==null?void 0:E.phone)==null?void 0:fe[0])||""}),($==null?void 0:$.length)>0&&i.jsx(u,{sx:{color:"#B7B6B6",fontWeight:800,mt:1},children:"اختر الخدمة"}),i.jsx(d,{sx:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:2},children:$==null?void 0:$.map(S=>{const C=(Q==null?void 0:Q.service_id)===S.id;return i.jsxs(R,{onClick:()=>ae(ye({service_id:S.id})),elevation:0,sx:{p:2,cursor:"pointer",borderRadius:4,textAlign:"center",bgcolor:C?"#7C3AED":"#1B1C1D",color:"#fff",border:C?"2px solid #A78BFA":"1px solid rgba(255,255,255,.15)",boxShadow:C?"0 0 25px rgba(124,58,237,.45)":"none",transform:C?"translateY(-4px)":"translateY(0)",transition:"all .25s ease",position:"relative","&:hover":{transform:"translateY(-4px)"}},children:[C&&i.jsx(d,{sx:{position:"absolute",top:8,left:8,width:22,height:22,borderRadius:"50%",bgcolor:"#fff",color:"#7C3AED",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:900},children:"✓"}),i.jsx(u,{fontWeight:700,fontSize:13,children:S.name})]},S.id)})}),(E==null?void 0:E.service_id)&&i.jsx(u,{sx:{color:"#f44336",fontSize:12,mt:1},children:E.service_id[0]}),i.jsx(tt,{fullWidth:!0,onClick:Ee,variant:"contained",sx:{mt:2,mb:10,height:65,borderRadius:"24px",fontWeight:900,fontSize:18,background:"linear-gradient(135deg,#4F46E5,#06B6D4)",boxShadow:"0 15px 35px rgba(79,70,229,.35)"},children:be===0?i.jsx(Jt,{size:24,sx:{color:"#fff"}}):i.jsxs(i.Fragment,{children:["احجز دوري الآن",i.jsx(ar,{})]})})]})]})}const Vn=I(i.jsx("path",{d:"m21.9 7.89-1.05-3.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 7.89c-.46 1.97.85 3.11.9 3.17V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7.94c1.12-1.12 1.09-2.41.9-3.17M13 5h1.96l.54 3.52c.09.71-.39 1.48-1.28 1.48-.67 0-1.22-.59-1.22-1.31zM6.44 8.86c-.08.65-.6 1.14-1.21 1.14-.93 0-1.35-.97-1.19-1.64L5.05 5h1.97zM11 8.69c0 .72-.55 1.31-1.29 1.31-.75 0-1.3-.7-1.22-1.48L9.04 5H11zM18.77 10c-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01 1.05 3.37c.16.67-.25 1.64-1.19 1.64"})),Ts=I([i.jsx("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h3c.55 0 1-.45 1-1v-2c0-2.18-3.57-3.47-6.33-3.87"},"0"),i.jsx("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),i.jsx("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4"},"2")]),js=I(i.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"})),Un=I(i.jsx("path",{d:"M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1"})),Kn=I(i.jsx("path",{d:"M9.64 7.64c.29-.62.42-1.33.34-2.09-.19-1.73-1.54-3.2-3.26-3.49-2.77-.48-5.14 1.89-4.66 4.65.3 1.72 1.76 3.07 3.49 3.26.76.08 1.46-.05 2.09-.34L10 12l-2.36 2.36c-.62-.29-1.33-.42-2.09-.34-1.73.19-3.2 1.54-3.49 3.26-.48 2.77 1.89 5.13 4.65 4.65 1.72-.3 3.07-1.76 3.26-3.49.08-.76-.05-1.46-.34-2.09L12 14l7.59 7.59c.89.89 2.41.26 2.41-1v-.01c0-.37-.15-.73-.41-1zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m7.59-10.09L13 9l2 2 6.59-6.59c.26-.26.41-.62.41-1V3.4c0-1.25-1.52-1.88-2.41-.99"})),Bs=I(i.jsx("path",{d:"m19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"}));var ft={},D=[[1569,65152,null,null,null],[1570,65153,null,null,65154],[1571,65155,null,null,65156],[1572,65157,null,null,65158],[1573,65159,null,null,65160],[1574,65161,65163,65164,65162],[1575,65165,null,null,65166],[1576,65167,65169,65170,65168],[1577,65171,null,null,65172],[1578,65173,65175,65176,65174],[1579,65177,65179,65180,65178],[1580,65181,65183,65184,65182],[1581,65185,65187,65188,65186],[1582,65189,65191,65192,65190],[1583,65193,null,null,65194],[1584,65195,null,null,65196],[1585,65197,null,null,65198],[1586,65199,null,null,65200],[1688,64394,null,null,64395],[1587,65201,65203,65204,65202],[1588,65205,65207,65208,65206],[1589,65209,65211,65212,65210],[1590,65213,65215,65216,65214],[1591,65217,65219,65220,65218],[1592,65221,65223,65224,65222],[1593,65225,65227,65228,65226],[1594,65229,65231,65232,65230],[1600,1600,1600,1600,1600],[1601,65233,65235,65236,65234],[1602,65237,65239,65240,65238],[1603,65241,65243,65244,65242],[1604,65245,65247,65248,65246],[1605,65249,65251,65252,65250],[1606,65253,65255,65256,65254],[1607,65257,65259,65260,65258],[1608,65261,null,null,65262],[1609,65263,null,null,65264],[1610,65265,65267,65268,65266],[1740,64508,64510,64511,64509],[1670,64378,64380,64381,64379],[1662,64342,64344,64345,64343],[1711,64402,64404,64405,64403],[1705,64398,64400,64401,64399]],_=[[[1604,1575],65275,null,null,65276]],Lt=[1552,1554,1555,1556,1557,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1648,1750,1751,1752,1753,1754,1755,1756,1759,1760,1761,1762,1763,1764,1767,1768,1770,1771,1772,1773];function Rs(e){for(var t=0;t<D.length;++t)if(D[t][0]==e)return!0;return!1}function Ve(e){for(var t=0;t<D.length;++t)if(D[t][0]==e)return D[t];return!1}function Ns(e,t){for(var n=0;n<_.length;++n)if(_[n][0][0]==e&&_[n][0][1]==t)return _[n];return!1}function Vt(e){for(var t=0;t<Lt.length;++t)if(Lt[t]==e)return!0;return!1}function Os(e){for(var t,n,r="",o=0;o<e.length;++o){var s=e.charCodeAt(o);if(Rs(s)){for(var a=null,l=null,f=o-1,c=o+1;f>=0&&Vt(e.charCodeAt(f));--f);for(a=f>=0?e.charCodeAt(f):null,t=a?Ve(a):!1,t[2]==null&&t[3]==null&&(a=null);c<e.length&&Vt(e.charCodeAt(c));++c);if(l=c<=e.length?e.charCodeAt(c):null,t=l?Ve(l):!1,t[3]==null&&t[4]==null&&(l=null),s==1604&&l!=null&&(l==1570||l==1571||l==1573||l==1575)){n=Ns(s,l),a!=null?r+=String.fromCharCode(n[4]):r+=String.fromCharCode(n[1]),o=o+1;continue}if(t=Ve(s),a!=null&&l!=null&&t[3]!=null){r+=String.fromCharCode(t[3]);continue}else if(a!=null&&t[4]!=null){r+=String.fromCharCode(t[4]);continue}else if(l!=null&&t[2]!=null){r+=String.fromCharCode(t[2]);continue}else r+=String.fromCharCode(t[1])}else r+=String.fromCharCode(s)}return r}ft.convertArabic=Os;function Ms(e){var t="",n;e:for(var r=0;r<e.length;++r){n=e.charCodeAt(r);for(var o=0;o<D.length;++o)if(D[o][4]==n||D[o][2]==n||D[o][1]==n||D[o][3]==n){t+=String.fromCharCode(D[o][0]);continue e}for(var o=0;o<_.length;++o)if(_[o][4]==n||_[o][2]==n||_[o][1]==n||_[o][3]==n){t+=String.fromCharCode(_[o][0][0])+String.fromCharCode(_[o][0][1]);continue e}t+=String.fromCharCode(n)}return t}ft.convertArabicBack=Ms;var ut={},T=[[1569,65152,null,null,null],[1570,65153,null,null,65154],[1571,65155,null,null,65156],[1572,65157,null,null,65158],[1573,65159,null,null,65160],[1574,65161,65163,65164,65162],[1575,65165,null,null,65166],[1576,65167,65169,65170,65168],[1577,65171,null,null,65172],[1578,65173,65175,65176,65174],[1579,65177,65179,65180,65178],[1580,65181,65183,65184,65182],[1581,65185,65187,65188,65186],[1582,65189,65191,65192,65190],[1583,65193,null,null,65194],[1584,65195,null,null,65196],[1585,65197,null,null,65198],[1586,65199,null,null,65200],[1688,64394,null,null,64395],[1587,65201,65203,65204,65202],[1588,65205,65207,65208,65206],[1589,65209,65211,65212,65210],[1590,65213,65215,65216,65214],[1591,65217,65219,65220,65218],[1592,65221,65223,65224,65222],[1593,65225,65227,65228,65226],[1594,65229,65231,65232,65230],[1600,1600,1600,1600,1600],[1601,65233,65235,65236,65234],[1602,65237,65239,65240,65238],[1603,65241,65243,65244,65242],[1604,65245,65247,65248,65246],[1605,65249,65251,65252,65250],[1606,65253,65255,65256,65254],[1607,65257,65259,65260,65258],[1608,65261,null,null,65262],[1609,65263,64488,64489,64509],[1610,65265,65267,65268,65266],[1740,64508,64510,64511,65264],[1670,64378,64380,64381,64379],[1662,64342,64344,64345,64343],[1711,64402,64404,64405,64403],[1705,64398,64400,64401,64399]],k=[[[1604,1570],65269,null,null,65270],[[1604,1571],65271,null,null,65272],[[1604,1573],65273,null,null,65274],[[1604,1575],65275,null,null,65276]],Ut=[1552,1554,1555,1556,1557,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1648,1750,1751,1752,1753,1754,1755,1756,1759,1760,1761,1762,1763,1764,1767,1768,1770,1771,1772,1773];function Ps(e){for(var t=0;t<T.length;++t)if(T[t][0]==e)return!0;return!1}function Ue(e){for(var t=0;t<T.length;++t)if(T[t][0]==e)return T[t];return!1}function $s(e,t){for(var n=0;n<k.length;++n)if(k[n][0][0]==e&&k[n][0][1]==t)return k[n];return!1}function Kt(e){for(var t=0;t<Ut.length;++t)if(Ut[t]==e)return!0;return!1}function zs(e){for(var t,n,r="",o=0;o<e.length;++o){var s=e.charCodeAt(o);if(Ps(s)){for(var a=null,l=null,f=o-1,c=o+1;f>=0&&Kt(e.charCodeAt(f));--f);for(a=f>=0?e.charCodeAt(f):null,t=a?Ue(a):!1,t[2]==null&&t[3]==null&&(a=null);c<e.length&&Kt(e.charCodeAt(c));++c);if(l=c<=e.length?e.charCodeAt(c):null,t=l?Ue(l):!1,t[3]==null&&t[4]==null&&(l=null),s==1604&&l!=null&&(l==1570||l==1571||l==1573||l==1575)){n=$s(s,l),a!=null?r+=String.fromCharCode(n[4]):r+=String.fromCharCode(n[1]),o=o+1;continue}if(t=Ue(s),a!=null&&l!=null&&t[3]!=null){r+=String.fromCharCode(t[3]);continue}else if(a!=null&&t[4]!=null){r+=String.fromCharCode(t[4]);continue}else if(l!=null&&t[2]!=null){r+=String.fromCharCode(t[2]);continue}else r+=String.fromCharCode(t[1])}else r+=String.fromCharCode(s)}return r}ut.convertArabic=zs;function Ws(e){var t="",n;e:for(var r=0;r<e.length;++r){n=e.charCodeAt(r);for(var o=0;o<T.length;++o)if(T[o][4]==n||T[o][2]==n||T[o][1]==n||T[o][3]==n){t+=String.fromCharCode(T[o][0]);continue e}for(var o=0;o<k.length;++o)if(k[o][4]==n||k[o][2]==n||k[o][1]==n||k[o][3]==n){t+=String.fromCharCode(k[o][0][0])+String.fromCharCode(k[o][0][1]);continue e}t+=String.fromCharCode(n)}return t}ut.convertArabicBack=Ws;var Hs={PersianShaper:ft,ArabicShaper:ut};const Ls=Gn(Hs);function Gt(e){return e?Ls.ArabicShaper.convertArabic(e):""}function Vs({lastTicketNumber:e,lastCustomer:t,serviceName:n}){var o,s,a;const r=new Date;return i.jsxs(R,{elevation:0,sx:{width:360,mx:"auto",bgcolor:"#ffffff",borderRadius:6,overflow:"hidden",border:"1px solid #E2E8F0",boxShadow:"0 25px 60px rgba(15,23,42,.12)"},children:[i.jsxs(d,{sx:{p:4,textAlign:"center",background:"linear-gradient(135deg,#EFF6FF,#FFFFFF)"},children:[i.jsx(u,{sx:{fontSize:30,fontWeight:900,color:"#0F172A",letterSpacing:.5},children:"BARBER HOUSE"}),i.jsx(u,{sx:{mt:1,color:"#64748B",fontSize:15,fontWeight:700},children:"Ticket de file d'attente"})]}),i.jsx(ue,{sx:{borderStyle:"dashed"}}),i.jsxs(d,{sx:{py:2,display:"flex",alignItems:"center",flexDirection:"column"},children:[i.jsx(u,{sx:{color:"#64748B",fontSize:16,fontWeight:700},children:"Numéro de ticket"}),i.jsx(d,{sx:{mt:1.5,width:150,height:150,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#2563EB,#60A5FA)",boxShadow:"0 15px 35px rgba(37,99,235,.35)"},children:i.jsx(u,{sx:{mt:-10,fontSize:80,fontWeight:1e3,color:"#fff",lineHeight:1},children:e})})]}),i.jsx(ue,{sx:{borderStyle:"dashed"}}),i.jsx(d,{sx:{p:3},children:i.jsxs(d,{sx:{background:"#F8FAFC",borderRadius:4,p:2,display:"flex",flexDirection:"column",gap:2},children:[i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1.5},children:[i.jsx(Qt,{sx:{color:"#2563EB",fontSize:28}}),i.jsx(u,{sx:{mt:-2},fontSize:18,fontWeight:800,color:"#0F172A",children:Gt((o=t==null?void 0:t.customer)==null?void 0:o.name)})]}),i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1.5},children:[i.jsx(Bs,{sx:{color:"#2563EB",fontSize:26}}),i.jsx(u,{sx:{mt:-2},fontSize:18,fontWeight:800,color:"#0F172A",children:((s=t==null?void 0:t.customer)==null?void 0:s.phone)??"-"})]})]})}),i.jsx(ue,{sx:{borderStyle:"dashed"}}),i.jsxs(d,{sx:{p:3,display:"flex",justifyContent:"space-around"},children:[i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[i.jsx(Un,{sx:{color:"#2563EB",fontSize:32}}),i.jsxs(d,{children:[i.jsx(u,{sx:{mt:-2},fontSize:12,color:"#64748B",fontWeight:600,children:"Date"}),i.jsx(u,{fontWeight:900,fontSize:16,children:r.toLocaleDateString("fr-FR")})]})]}),i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[i.jsx(js,{sx:{color:"#2563EB",fontSize:32}}),i.jsxs(d,{children:[i.jsx(u,{sx:{mt:-2},fontSize:12,color:"#64748B",fontWeight:600,children:"Heure"}),i.jsx(u,{fontWeight:900,fontSize:16,children:r.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]})]})]}),i.jsx(ue,{sx:{borderStyle:"dashed"}}),i.jsxs(d,{sx:{p:3,display:"flex",alignItems:"center",gap:2},children:[i.jsx(d,{sx:{width:55,height:55,borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center",background:"#EFF6FF"},children:i.jsx(Kn,{sx:{color:"#2563EB",fontSize:32}})}),i.jsxs(d,{children:[i.jsx(u,{sx:{mt:-2},color:"#64748B",fontSize:13,fontWeight:700,children:"Service"}),i.jsx(u,{fontSize:20,fontWeight:900,children:Gt(((a=t==null?void 0:t.service)==null?void 0:a.name)??"-")})]})]}),i.jsx(ue,{sx:{borderStyle:"dashed"}}),i.jsxs(d,{sx:{p:3,textAlign:"center"},children:[i.jsx(u,{fontWeight:900,fontSize:16,color:"#0F172A",children:"Merci de nous avoir choisis"}),i.jsx(u,{mt:.5,color:"#64748B",fontSize:14,children:"Nous apprécions votre visite"})]})]})}function Us(e){var g,m,w;let{shop:t,lastTicketNumber:n,waitingCount:r,lastCustomer:o,peopleBeforeMe:s,currentNumber:a,lastServedNumber:l}=e;const f=b.useRef(null),c=async()=>{const B=(await or(f.current,{scale:2})).toDataURL("image/png"),j=document.createElement("a");j.href=B,j.download="ticket.png",j.click()};return console.log(o),i.jsxs(d,{sx:{minHeight:"100vh",px:2,py:5,background:`
linear-gradient(
135deg,
#eef4ff 0%,
#f8fafc 45%,
#f0fdf4 100%
)
`,position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",width:350,height:350,borderRadius:"50%",background:"rgba(37,99,235,.18)",filter:"blur(90px)",top:-120,right:-120},"&::after":{content:'""',position:"absolute",width:300,height:300,borderRadius:"50%",background:"rgba(16,185,129,.12)",filter:"blur(90px)",bottom:-100,left:-100}},children:[i.jsx(d,{sx:{position:"fixed",left:"-9999px",top:0},children:i.jsx(d,{ref:f,children:i.jsx(Vs,{lastTicketNumber:n,waitingCount:r,lastCustomer:o})})}),i.jsxs(d,{sx:{maxWidth:520,mx:"auto",display:"flex",flexDirection:"column",gap:2.5},children:[i.jsx(R,{elevation:0,sx:{p:2.5,borderRadius:6,background:"rgba(255,255,255,.45)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:"1px solid rgba(255,255,255,.7)",boxShadow:"0 20px 40px rgba(15,23,42,.08)"},children:i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:2},children:[i.jsx(Zt,{sx:{width:60,height:60,bgcolor:"#EFF6FF",color:"#2563EB"},children:i.jsx(Vn,{fontSize:"large"})}),i.jsxs(d,{children:[i.jsx(u,{fontSize:19,fontWeight:900,color:"#0F172A",children:t==null?void 0:t.shop_name}),i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:.8,px:1.5,py:.5,borderRadius:8,bgcolor:"#E6FFEE"},children:[i.jsx(d,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:"#16A34A",boxShadow:"0 0 0 4px rgba(22,163,74,.15)"}}),i.jsx(u,{sx:{color:"#15803D",fontWeight:800,fontSize:13},children:"مفتوح الآن"})]})]})]})}),i.jsxs(R,{elevation:0,sx:{p:4,borderRadius:8,background:"rgba(255,255,255,.40)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,.75)",boxShadow:`
        0 25px 50px rgba(15,23,42,.08),
        inset 0 1px 0 rgba(255,255,255,.9)
    `,position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",width:260,height:260,borderRadius:"50%",background:"rgba(37,99,235,.10)",filter:"blur(70px)",top:-100,right:-100}},children:[i.jsxs(d,{children:[i.jsx(d,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(u,{sx:{color:"#64748B",fontWeight:900,fontSize:25},children:"أنت في قائمة الانتظار"})}),i.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"center"},children:[i.jsxs(d,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:.5},children:[i.jsx(u,{sx:{fontSize:18,fontWeight:700,color:"#2563EB"},children:(g=o==null?void 0:o.customer)==null?void 0:g.name}),i.jsx(u,{sx:{color:"#64748B",fontSize:18,fontWeight:700},children:": الاسم"})]}),i.jsxs(d,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:.5},children:[i.jsx(u,{sx:{fontSize:18,fontWeight:700,color:"#2563EB"},children:(m=o==null?void 0:o.customer)==null?void 0:m.phone}),i.jsx(u,{sx:{color:"#64748B",fontSize:18,fontWeight:700},children:": الهاتف"})]}),i.jsxs(d,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:.5},children:[i.jsx(u,{sx:{fontSize:20,fontWeight:1e3,color:"#2563EB"},children:n}),i.jsx(u,{sx:{color:"#64748B",fontSize:18,fontWeight:700},children:": رقم تذكرتك"})]}),i.jsxs(d,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:.5},children:[i.jsx(u,{sx:{fontSize:18,fontWeight:700,color:"#2563EB"},children:(w=o==null?void 0:o.service)==null?void 0:w.name}),i.jsx(u,{sx:{color:"#64748B",fontSize:18,fontWeight:700},children:": الخدمة"})]}),i.jsxs(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:1},children:[i.jsx(Un,{sx:{color:"#2563EB",fontSize:20}}),i.jsx(u,{sx:{color:"#64748B",fontSize:16,fontWeight:700},children:"تم الحجز: 24 يوليو 2026 - 15:30"})]})]})]}),i.jsx(d,{sx:{mt:3,display:"flex",justifyContent:"center"},children:i.jsxs(d,{sx:{width:240,height:240,borderRadius:"50%",background:"rgba(255,255,255,.28)",backdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,.8)",boxShadow:`
                0 25px 60px rgba(37,99,235,.15),
                inset 0 1px 0 rgba(255,255,255,.9)
            `,position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","&::before":{content:'""',position:"absolute",inset:18,borderRadius:"50%",border:"2px solid rgba(37,99,235,.15)"}},children:[i.jsx(u,{sx:{fontSize:72,fontWeight:1e3,color:"#2563EB",lineHeight:1},children:a??l??"--"}),i.jsx(u,{sx:{fontSize:18,color:"#64748B",fontWeight:700},children:"الرقم الحالي"})]})}),i.jsxs(d,{mt:3,children:[i.jsxs(d,{sx:{display:"flex",justifyContent:"space-between",mb:1},children:[i.jsx(u,{fontSize:13,color:"#64748B",children:"تقدم الدور"}),i.jsx(u,{fontSize:13,fontWeight:800,children:"75%"})]}),i.jsx(nr,{value:75,variant:"determinate",sx:{height:10,borderRadius:20,bgcolor:"#E2E8F0","& .MuiLinearProgress-bar":{borderRadius:20,background:"linear-gradient(90deg,#2563EB,#38BDF8)"}}})]}),i.jsx(tt,{onClick:c,fullWidth:!0,variant:"contained",startIcon:i.jsx(rr,{}),sx:{mt:3,height:52,borderRadius:3,textTransform:"none",fontSize:15,fontWeight:800,bgcolor:"#2563EB",boxShadow:"0 10px 25px rgba(37,99,235,.25)","&:hover":{bgcolor:"#1D4ED8"}},children:"تحميل التذكرة"})]}),i.jsxs(d,{sx:{display:"flex",gap:2},children:[i.jsxs(R,{elevation:0,sx:{flex:1,p:2.5,borderRadius:5,background:"rgba(255,255,255,.35)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,.7)",boxShadow:`
                0 15px 35px rgba(15,23,42,.06),
                inset 0 1px 0 rgba(255,255,255,.9)
            `,position:"relative",overflow:"hidden"},children:[i.jsx(d,{sx:{position:"absolute",top:-20,right:-20,width:90,height:90,borderRadius:"50%",background:"rgba(37,99,235,.15)",filter:"blur(30px)"}}),i.jsx(d,{sx:{width:52,height:52,borderRadius:3,bgcolor:"rgba(37,99,235,.08)",display:"flex",alignItems:"center",justifyContent:"center",mb:2},children:i.jsx(Ts,{sx:{fontSize:30,color:"#2563EB"}})}),i.jsx(u,{sx:{fontSize:38,fontWeight:1e3,color:"#0F172A",lineHeight:1},children:s>0?s:""}),i.jsx(u,{sx:{mt:1,fontSize:13,color:"#64748B",fontWeight:600},children:s===0?"أنت التالي 🎉":"أشخاص قبلك"}),i.jsx(d,{sx:{mt:2,width:40,height:4,borderRadius:10,bgcolor:"#2563EB"}})]}),i.jsxs(R,{elevation:0,sx:{flex:1,p:2.5,borderRadius:5,background:"rgba(255,255,255,.35)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,.7)",boxShadow:`
                0 15px 35px rgba(15,23,42,.06),
                inset 0 1px 0 rgba(255,255,255,.9)
            `,position:"relative",overflow:"hidden"},children:[i.jsx(d,{sx:{position:"absolute",top:-20,right:-20,width:90,height:90,borderRadius:"50%",background:"rgba(245,158,11,.15)",filter:"blur(30px)"}}),i.jsx(d,{sx:{width:52,height:52,borderRadius:3,bgcolor:"rgba(245,158,11,.08)",display:"flex",alignItems:"center",justifyContent:"center",mb:2},children:i.jsx(cr,{sx:{fontSize:30,color:"#F59E0B"}})}),i.jsx(u,{sx:{fontSize:38,fontWeight:1e3,color:"#0F172A",lineHeight:1},children:"12"}),i.jsx(u,{sx:{mt:1,fontSize:13,color:"#64748B",fontWeight:600},children:"دقيقة انتظار"}),i.jsx(d,{sx:{mt:2,width:40,height:4,borderRadius:10,bgcolor:"#F59E0B"}})]})]}),i.jsxs(R,{elevation:0,sx:{p:2,borderRadius:5,background:"rgba(255,255,255,.35)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,.7)",boxShadow:`
            0 15px 35px rgba(15,23,42,.06),
            inset 0 1px 0 rgba(255,255,255,.9)
        `,display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden",position:"relative"},children:[i.jsx(d,{sx:{position:"absolute",width:120,height:120,borderRadius:"50%",background:"rgba(34,197,94,.15)",filter:"blur(40px)",top:-40,left:-40}}),i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1.5,zIndex:2},children:[i.jsx(d,{sx:{width:42,height:42,borderRadius:"50%",bgcolor:"rgba(34,197,94,.12)",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(en,{sx:{color:"#16A34A"}})}),i.jsxs(d,{children:[i.jsx(u,{sx:{fontWeight:800,color:"#0F172A",fontSize:14},children:"النظام يعمل"}),i.jsx(u,{sx:{color:"#64748B",fontSize:12},children:"يتم تحديث البيانات بشكل مباشر"})]})]}),i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1,zIndex:2},children:[i.jsx(d,{sx:{width:10,height:10,borderRadius:"50%",bgcolor:"#22C55E",animation:"pulse 1.5s infinite","@keyframes pulse":{"0%":{boxShadow:"0 0 0 0 rgba(34,197,94,.6)"},"70%":{boxShadow:"0 0 0 10px rgba(34,197,94,0)"},"100%":{boxShadow:"0 0 0 0 rgba(34,197,94,0)"}}}}),i.jsx(u,{sx:{fontWeight:700,color:"#16A34A",fontSize:13},children:"مباشر"})]})]})]})]})}function Ks({shop:e,ticketNumber:t,lastCustomer:n}){var r,o;return console.log(t),i.jsx(d,{dir:"rtl",sx:{minHeight:"100dvh",px:2,py:5,display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(135deg,#f8fafc,#ecfdf5)",position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",width:350,height:350,borderRadius:"50%",background:"rgba(34,197,94,.18)",filter:"blur(100px)",top:-100,right:-100},"&::after":{content:'""',position:"absolute",width:300,height:300,borderRadius:"50%",background:"rgba(37,99,235,.15)",filter:"blur(100px)",bottom:-100,left:-100}},children:i.jsxs(R,{elevation:0,sx:{width:"100%",maxWidth:420,p:3,borderRadius:8,background:"rgba(255,255,255,.75)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,.8)",boxShadow:"0 30px 70px rgba(15,23,42,.12)",textAlign:"center",position:"relative",zIndex:2},children:[i.jsxs(d,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1.5,mb:4},children:[i.jsxs(d,{children:[i.jsx(u,{fontSize:20,fontWeight:1e3,children:e==null?void 0:e.shop_name}),i.jsx(u,{fontSize:13,color:"text.secondary",fontWeight:700,children:e==null?void 0:e.business_type})]}),i.jsx(Zt,{sx:{width:55,height:55,bgcolor:"#dcfce7",color:"#16a34a"},children:i.jsx(Vn,{})})]}),i.jsx(u,{fontSize:28,fontWeight:1e3,color:"#16a34a",sx:{mb:3},children:"🎉 حان دورك"}),i.jsxs(d,{sx:{width:200,height:200,mx:"auto",borderRadius:"50%",background:"linear-gradient(135deg,#16a34a,#22c55e)",color:"#fff",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",boxShadow:"0 25px 50px rgba(22,163,74,.35)",animation:"pulse 2s infinite","@keyframes pulse":{"0%":{boxShadow:"0 0 0 0 rgba(22,163,74,.5)"},"70%":{boxShadow:"0 0 0 25px rgba(22,163,74,0)"},"100%":{boxShadow:"0 0 0 0 rgba(22,163,74,0)"}}},children:[i.jsx(u,{fontSize:16,fontWeight:800,children:"رقم التذكرة"}),i.jsx(u,{sx:{fontSize:50},children:t})]}),i.jsxs(d,{sx:{mt:4,p:2,borderRadius:4,bgcolor:"#f8fafc",display:"flex",flexDirection:"column",gap:1.5},children:[i.jsxs(d,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[i.jsx(Qt,{sx:{color:"#2563eb"}}),i.jsx(u,{fontWeight:800,children:"الاسم"})]}),i.jsx(u,{fontWeight:900,color:"primary",children:(r=n==null?void 0:n.customer)==null?void 0:r.name})]}),i.jsxs(d,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsxs(d,{sx:{display:"flex",alignItems:"center",gap:1},children:[i.jsx(Kn,{sx:{color:"#2563eb"}}),i.jsx(u,{fontWeight:800,children:"الخدمة"})]}),i.jsx(u,{fontWeight:900,color:"primary",children:((o=n==null?void 0:n.service)==null?void 0:o.name)??"غير محدد"})]})]}),i.jsxs(d,{sx:{mt:3,py:1.5,borderRadius:4,bgcolor:"#dcfce7",display:"flex",justifyContent:"center",alignItems:"center",gap:1},children:[i.jsx(en,{sx:{color:"#16a34a"}}),i.jsx(u,{color:"#15803d",fontWeight:900,children:"توجه إلى الموظف الآن"})]})]})})}function Ke(e,t){ge.post("/api/web/getShopQueueStatus",{uuid:t}).then(n=>{console.log(n),e(Xt({lastTicketNumber:n.data.last_ticket_number,waitingCount:n.data.waiting_count,lastServedNumber:n.data.last_served_number,queueOpen:n.data.queue_open})),e(ee({currentNumber:n.data.current_number}))}).catch(n=>{console.log(n.response)})}const oe=new Audio("/sounds/ticket-call.mp3");oe.preload="auto";oe.loop=!0;function Gs(){oe.currentTime=0,oe.play(),document.addEventListener("click",qt,{once:!0}),document.addEventListener("touchstart",qt,{once:!0})}function qt(){oe.pause(),oe.currentTime=0}function qs(){const{uuid:e}=qn(),t=Yt(),[n,r]=b.useState(null),[o,s]=b.useState(!1),[a,l]=b.useState(null),f=te(ur),c=te(hr),g=te(tn),m=c==null?void 0:c.queueOpen,w=f==null?void 0:f.checking,F=f==null?void 0:f.activeTicket,B=f==null?void 0:f.status,j=f==null?void 0:f.TUEFF,ae=f==null?void 0:f.currentNumber,A=c==null?void 0:c.lastTicketNumber,X=c==null?void 0:c.waitingCount;c==null||c.lastCustomer;const $=c==null?void 0:c.lastServedNumber,Q=f==null?void 0:f.peopleBeforeMe;return b.useEffect(()=>{new Audio("/sounds/ticket-call.mp3").load()},[]),b.useEffect(()=>{let y=null;return(async()=>{var W;try{const V=await navigator.serviceWorker.register("/firebase-messaging-sw.js");if(console.log("🔥 FCM SERVICE WORKER:",V),Notification.permission!=="granted"){console.log("❌ Notification permission:",Notification.permission);return}const Z=await Ln(Ie,{vapidKey:"BMrlXhCM4FvgLg4dhS1qIRdWG_-0dzrH4p6goE2Gm5vOKP_TwkWVFmjsv2G-Bts2Jny0NBf0OHMd6OY6MTeLLUw",serviceWorkerRegistration:V});if(!Z){console.log("❌ FCM TOKEN NOT FOUND");return}console.log("🔥 CURRENT FCM TOKEN:",Z),r(Z);const ce=localStorage.getItem(`ticket_id_${e}`);if(console.log("🎫 CURRENT TICKET ID:",ce),!ce)console.log("⏳ No ticket yet");else{const h=await ge.post("/api/web/save-fcm-token",{ticket_id:Number(ce),fcm_token:Z});console.log("✅ FCM TOKEN SAVED:",h.data)}y=Fs(Ie,h=>{var me,le,Ee,de,fe,S,C;console.log("🔥🔥 FCM MESSAGE RECEIVED:",h);const pe=((me=h==null?void 0:h.notification)==null?void 0:me.title)||((le=h==null?void 0:h.data)==null?void 0:le.title)||"Spotlly",be=((Ee=h==null?void 0:h.notification)==null?void 0:Ee.body)||((de=h==null?void 0:h.data)==null?void 0:de.body)||"",E=((fe=h==null?void 0:h.notification)==null?void 0:fe.icon)||((S=h==null?void 0:h.data)==null?void 0:S.icon)||"/images/slogo.png";if(console.log("🔔 TITLE:",pe),console.log("🔔 BODY:",be),Notification.permission==="granted"){const Be=(C=h==null?void 0:h.data)==null?void 0:C.type,ht=new Notification(pe,{body:be,icon:"/images/slogo.png",badge:"/images/slogo.png",tag:`spotlly-${(h==null?void 0:h.messageId)||Date.now()}`,requireInteraction:!0});let Re="/sounds/sound-notification2.mp3";(Be==="turn_called"||Be==="service_started")&&(Re="/sounds/sound-notification1.mp3"),console.log("🔊 Notification type:",Be),console.log("🔊 Sound:",Re);const xt=new Audio(Re);xt.volume=1,xt.play().catch(Ne=>{console.log("🔇 SOUND BLOCKED:",Ne)}),ht.onclick=()=>{ht.close();const Ne=`${window.location.origin}/q/${e}`;window.open(Ne,"_blank")}}}),console.log("✅ FCM ONMESSAGE LISTENER READY")}catch(V){console.error("❌ FCM INIT ERROR:",((W=V.response)==null?void 0:W.data)||V)}})(),()=>{y&&y()}},[e]),b.useEffect(()=>{if(!(g!=null&&g.id))return;const y=window.Echo.channel(`shop.${g.id}`);return y.listen(".queue.status.changed",z=>{t(Xt({queueOpen:z.queue_open}))}),y.listen(".ticket.created",()=>{Ke(t,e)}),y.listen(".ticket.status.changed",z=>{const W=localStorage.getItem(`ticket_uuid_${e}`);W&&z.ticket_uuid===W&&(bt(t,W,e),z.status==="serving"&&(s(!0),Gs())),Ke(t,e)}),window.Echo.connector.pusher.connection.bind("connected",()=>{console.log("REVERB CONNECTED")}),window.Echo.connector.pusher.connection.bind("disconnected",()=>{console.log("REVERB DISCONNECTED")}),()=>{window.Echo.leave(`shop.${g.id}`)}},[g==null?void 0:g.id,e]),b.useEffect(()=>{Ke(t,e),ir(t,e)},[e,j]),b.useEffect(()=>{const y=localStorage.getItem(`ticket_uuid_${e}`);if(!y){t(ee({checking:!1,activeTicket:!1,status:null,ticketNumber:null,peopleBeforeMe:0}));return}t(ee({checking:!0})),bt(t,y,e)},[e,j]),w?i.jsx("div",{children:i.jsx(pt,{})}):m===null?i.jsx(pt,{}):m?i.jsx(d,{children:B==="serving"?i.jsx(Ks,{shop:g,ticketNumber:f.ticketNumber,lastCustomer:f==null?void 0:f.customer}):F?i.jsx(Us,{shop:g,currentNumber:ae,peopleBeforeMe:Q,lastTicketNumber:f.ticketNumber,waitingCount:X,lastCustomer:f==null?void 0:f.customer,lastServedNumber:$}):i.jsx(Ds,{uuid:e,tUEFF:j,lastTicketNumber:A,waitingCount:X,fcmToken:n})}):i.jsx(d,{sx:{minHeight:"100dvh",display:"flex",alignItems:"center",justifyContent:"center",p:3,background:"linear-gradient(135deg,#743DB1 0%,#47CBE4 50%,#3989EC 100%)"},children:i.jsxs(d,{sx:{width:"100%",maxWidth:500,bgcolor:"#fff",borderRadius:5,p:4,textAlign:"center",boxShadow:"0 25px 60px rgba(0,0,0,.15)"},children:[i.jsx(d,{sx:{width:90,height:100,borderRadius:"50%",bgcolor:"#fee2e2",display:"flex",alignItems:"center",justifyContent:"center",mx:"auto",mb:3},children:i.jsx(d,{sx:{fontSize:40},children:"🔒"})}),i.jsx(d,{sx:{fontSize:28,fontWeight:900,color:"#111827",mb:1},children:"المحل مغلق حالياً"}),i.jsx(d,{sx:{color:"#6b7280",lineHeight:2,fontSize:15},children:"يرجى المحاولة لاحقاً."})]})})}Jn.createRoot(document.getElementById("app")).render(i.jsx(Yn,{store:Xn,children:i.jsx(Qn,{children:i.jsx(Zn,{children:i.jsx(er,{path:"/q/:uuid",element:i.jsx(qs,{})})})})}));
