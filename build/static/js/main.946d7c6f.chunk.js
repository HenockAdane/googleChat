(this.webpackJsonpchatapp0=this.webpackJsonpchatapp0||[]).push([[0],{17:function(e,t,a){e.exports=a(35)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(14),r=a.n(o),s=(a(22),a(9)),u=a(5),i=a(16),l=(a(23),a(24),a(8)),m=a.n(l);m.a.initializeApp({apiKey:"AIzaSyAN6t0_kyxnzx9ce5KBLui378idzRr92TM",authDomain:"superchat-41e8a.firebaseapp.com",databaseURL:"https://superchat-41e8a.firebaseio.com",projectId:"superchat-41e8a",storageBucket:"superchat-41e8a.appspot.com",messagingSenderId:"10084442628",appId:"1:10084442628:web:81298f8b5e66710e2a4b51"});var g=m.a.auth(),p=m.a.firestore(),d=function(){var e=new m.a.auth.GoogleAuthProvider;return e.setCustomParameters({prompt:"select_account"}),g.signInWithPopup(e)},f=function(){return g.signOut().then((function(e){return console.log("logged out")}))},h=a(15);var b=function(){var e=Object(n.useState)((function(){return{user:null,message:"",one:[]}})),t=Object(i.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){g.onAuthStateChanged((function(e){o((function(t){return Object(u.a)(Object(u.a)({},t),{},{user:e})}))}))}),[]);var r=Object(h.a)(p.collection("messages"))[0];Object(n.useEffect)((function(){p.collection("messages").get().then((function(e){e.docs&&o((function(t){return Object(u.a)(Object(u.a)({},t),{},{one:e.docs.map((function(e){return e.data()}))})}))}))}),[r]),console.log(r);var l=c.a.createElement("div",null,c.a.createElement("button",{onClick:f},"SIGNOUT"),c.a.createElement("div",{className:"container"},c.a.createElement("ul",null,function(){if(a.user)return a.one.map((function(e){return e.id===a.user.uid?c.a.createElement("li",{className:"sent"},c.a.createElement("p",null,e.message),c.a.createElement("img",Object(s.a)({src:!0,className:"img"},"src",e.accountImg))):c.a.createElement("li",{className:"received"},c.a.createElement("img",Object(s.a)({src:!0,className:"img"},"src",e.accountImg)),c.a.createElement("p",null,e.message))}))}()),c.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;o((function(e){return Object(u.a)(Object(u.a)({},e),{},{message:t})}))},value:a.message}),a.message,c.a.createElement("button",{onClick:function(){a.message&&(p.collection("messages").add({id:a.user.uid,accountImg:a.user.photoURL,message:a.message,dateCreated:new Date}),o((function(e){return Object(u.a)(Object(u.a)({},e),{},{message:""})})),console.log(a.user.photoURL))}},"send"))),m=c.a.createElement("div",null,c.a.createElement("h1",null,"SIGN IN TO CHAT"),c.a.createElement("button",{onClick:d},"GOOGLE LOGIN"));return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Hello there"),a.user?l:m)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.946d7c6f.chunk.js.map