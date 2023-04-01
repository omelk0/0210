(function(){"use strict";var e={6902:function(e,s,t){var i=t(6369),a=function(){var e=this,s=e._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"page"},[s("ProfileHeader"),s("ProfileServices"),s("ProfileReviews"),s("ProfileMessages")],1)])},r=[],n=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"profile-header"},[s("div",{staticClass:"profile-header__content"},[s("div",{staticClass:"profile-header__image"},[s("img",{attrs:{src:t(8968),alt:""}})]),s("div",{staticClass:"profile-header__description"},[s("h1",{staticClass:"profile-header__name"},[e._v("Eva Jonson")]),s("h2",{staticClass:"profile-header__position"},[e._v("Sales Manager")]),s("div",{staticClass:"profile-header__quote"},[s("p",[e._v(" I will find the best offers for you. My services are absolutely free. ")])])])])])}],l={name:"ProfileHeader"},c=l,u=t(1001),v=(0,u.Z)(c,n,o,!1,null,null,null),_=v.exports,f=function(){var e=this,s=e._self._c;return s("div",{staticClass:"profile-services"},[s("h2",[e._v("Services")]),s("div",{staticClass:"profile-services__statistics"},[s("div",{staticClass:"profile-services__statistics-item"},[e._m(0),s("div",{staticClass:"profile-services__statistics-value"},[s("span",{staticClass:"profile-services__statistics-number"},[e._v(e._s(this.manualTourBookingAmount))])])]),s("div",{staticClass:"profile-services__statistics-item"},[e._m(1),s("div",{staticClass:"profile-services__statistics-value"},[s("span",{staticClass:"profile-services__statistics-number"},[e._v(e._s(this.packageToursAmount))])])]),s("div",{staticClass:"profile-services__statistics-item"},[e._m(2),s("div",{staticClass:"profile-services__statistics-value"},[s("span",{staticClass:"profile-services__statistics-number"},[e._v(e._s(this.hotelsAmount))])])])]),s("div",{staticClass:"profile-services__total"},[s("span",{staticClass:"profile-services__total-title"},[e._v("Total")]),s("span",{staticClass:"profile-services__total-number"},[e._v(e._s(e.totalAmount))])])])},p=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"profile-services__statistics-name"},[s("span",{staticClass:"profile-services__statistics-line profile-services__statistics-line--1"},[s("p",{staticClass:"profile-services__statistics-title"},[e._v(" Manual tour booking ")])])])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"profile-services__statistics-name"},[s("span",{staticClass:"profile-services__statistics-line profile-services__statistics-line--2"},[s("p",{staticClass:"profile-services__statistics-title"},[e._v("Package tours")])])])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"profile-services__statistics-name"},[s("span",{staticClass:"profile-services__statistics-line profile-services__statistics-line--3"},[s("p",{staticClass:"profile-services__statistics-title"},[e._v("Hotels")])])])}],d={name:"ProfileServices",data(){return{manualTourBookingAmount:11,packageToursAmount:3,hotelsAmount:1,packageToursPercentage:"",hotelsAmountPercentage:""}},computed:{totalAmount(){return this.manualTourBookingAmount+this.packageToursAmount+this.hotelsAmount}},methods:{calculatePercentage(e,s){return s/e*100}},mounted(){let e=document.querySelector(".profile-services__statistics-line--1"),s=document.querySelector(".profile-services__statistics-line--2"),t=document.querySelector(".profile-services__statistics-line--3"),i=Math.max(this.manualTourBookingAmount,this.packageToursAmount,this.hotelsAmount);switch(!0){case i===this.manualTourBookingAmount:e.style.width="100%",e.style.backgroundColor="#B1E19B",s.style.width=this.packageToursAmount/i*100+"%",t.style.width=this.hotelsAmount/i*100+"%";break;case i===this.packageToursAmount:s.style.width="100%",s.style.backgroundColor="#B1E19B",e.style.width=this.manualTourBookingAmount/i*100+"%",t.style.width=this.hotelsAmount/i*100+"%";break;case i===this.hotelsAmount:t.style.width="100%",t.style.backgroundColor="#B1E19B",e.style.width=this.manualTourBookingAmount/i*100+"%",s.style.width=this.packageToursAmount/i*100+"%";break;default:}}},m=d,h=(0,u.Z)(m,f,p,!1,null,null,null),g=h.exports,w=function(){var e=this;e._self._c;return e._m(0)},C=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"profile-reviews"},[s("div",{staticClass:"profile-reviews__heading"},[s("div",{staticClass:"profile-reviews__heading-text"},[s("h3",{staticClass:"profile-reviews__heading-title"},[e._v("Latest reviews")]),s("a",{staticClass:"profile-reviews__heading-link",attrs:{href:"javascript:void(0)"}},[e._v("All reviews")])]),s("div",{staticClass:"profile-reviews__infographic"},[s("div",{staticClass:"profile-reviews__infographic-item"},[s("img",{attrs:{src:t(5908),alt:""}}),s("span",[e._v("131")])]),s("div",{staticClass:"profile-reviews__infographic-item"},[s("img",{attrs:{src:t(5531),alt:""}}),s("span",[e._v("14")])])])])])}],y={name:"ProfileReviews"},k=y,b=(0,u.Z)(k,w,C,!1,null,null,null),A=b.exports,P=function(){var e=this,s=e._self._c;return s("div",{staticClass:"profile-messages"},[e._l(e.messagesList,(function(t){return s("div",{key:t.id,staticClass:"profile-messages__message"},[s("div",{staticClass:"profile-messages__message-title"},[s("h4",{staticClass:"profile-messages__message-name"},[e._v(e._s(t.name))]),s("span",{staticClass:"profile-messages__message-date"},[e._v(e._s(t.date))])]),s("div",{staticClass:"profile-messages__message-text"},[s("span",{staticClass:"profile-messages__triangle"}),s("span",[e._v(e._s(t.message))])])])})),s("ProfileSend",{on:{newReview:e.updateReviewsList}})],2)},T=[],M=function(){var e=this,s=e._self._c;return s("div",{staticClass:"profile-send"},[s("div",{staticClass:"profile-send__content"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userMessage,expression:"userMessage"}],staticClass:"profile-send__input",attrs:{type:"text"},domProps:{value:e.userMessage},on:{input:function(s){s.target.composing||(e.userMessage=s.target.value)}}}),s("button",{staticClass:"profile-send__button",on:{click:e.addReview}},[e._v(" Send a message ")])])])},x=[],R={name:"ProfileSend",userMessage:"",data(){return{userMessage:""}},methods:{addReview(){this.$emit("newReview",this.userMessage),this.userMessage=""},handleKeyDown(e){e.ctrlKey&&"Enter"===e.key&&this.addReview()}},mounted(){document.addEventListener("keydown",this.handleKeyDown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}},S=R,B=(0,u.Z)(S,M,x,!1,null,null,null),O=B.exports,D=t(3822),L={name:"ProfileMessages",components:{ProfileSend:O},data(){return{currentUserName:"Oleksandr Melnychek",currentDate:""}},computed:(0,D.rn)(["messagesList"]),methods:{getCurrentDate(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=new Date,t=s.getDate(),i=e[s.getMonth()],a=s.getFullYear();this.currentDate=`${t} ${i} ${a}`},updateReviewsList(e){this.getCurrentDate(),this.$store.dispatch("updateReviewsList",e)}}},Z=L,E=(0,u.Z)(Z,P,T,!1,null,null,null),j=E.exports,H={name:"App",components:{ProfileHeader:_,ProfileServices:g,ProfileReviews:A,ProfileMessages:j}},$=H,q=(0,u.Z)($,a,r,!1,null,null,null),J=q.exports;t(7658);i.ZP.use(D.ZP);var N=new D.ZP.Store({state:{messagesList:[{name:"Samuel Jackson",date:"13 Apr 2022",message:"Hey Eva! You're cool. Nice pic!",id:0},{name:"Angela Deimon",date:"10 Apr 2022",message:"Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",id:1},{name:"Ronald Harris",date:"8 Apr 2022",message:"Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",id:2}]},mutations:{addReview(e,s){e.messagesList.push(s)}},actions:{updateReviewsList({commit:e,state:s},t){if(!t||0===t.length)return;let i={name:s.currentUserName,date:s.currentDate,message:t,id:s.messagesList.length};e("addReview",i)}}});i.ZP.config.productionTip=!1,new i.ZP({store:N,render:e=>e(J)}).$mount("#app")},8968:function(e,s,t){e.exports=t.p+"img/profile-header__image.94f76667.svg"},5908:function(e,s,t){e.exports=t.p+"img/profile-reviews__icon1.81851ed6.svg"},5531:function(e,s,t){e.exports=t.p+"img/profile-reviews__icon2.166a04be.svg"}},s={};function t(i){var a=s[i];if(void 0!==a)return a.exports;var r=s[i]={exports:{}};return e[i](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(s,i,a,r){if(!i){var n=1/0;for(u=0;u<e.length;u++){i=e[u][0],a=e[u][1],r=e[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(o=!1,r<n&&(n=r));if(o){e.splice(u--,1);var c=a();void 0!==c&&(s=c)}}return s}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,a,r]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/0210/"}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,i){var a,r,n=i[0],o=i[1],l=i[2],c=0;if(n.some((function(s){return 0!==e[s]}))){for(a in o)t.o(o,a)&&(t.m[a]=o[a]);if(l)var u=l(t)}for(s&&s(i);c<n.length;c++)r=n[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},i=self["webpackChunktesting_assignment"]=self["webpackChunktesting_assignment"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(6902)}));i=t.O(i)})();
//# sourceMappingURL=app.4f4e6456.js.map