(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{83:function(e,t,a){"use strict";a.r(t);var r,n=a(18),s=a(17),c=(a(60),a(4)),o=a(9),l=a(6),i=a(0),u=a(5),d=a(14),j=a.n(d),m={getAffirmations:function(){return j.a.get("/getAffirmations")},getAffirmationArray:function(){return j.a.get("/getAffirmationArray")},getBooks:function(){return j.a.get("/getBooks")},createNewUser:function(e){return j.a.post("/createNewUser",e)},signInUser:function(e){return j.a.post("/signInUser",e)},update:function(e){return j.a.put("/update",e)},getUserData:function(e){return j.a.get("/getUserData/".concat(e))},getThread:function(e){return j.a.post("/getThread",e)},getThreads:function(){return j.a.get("/getThreads")},makeThread:function(e){return j.a.post("/makeThread",e)},createComment:function(e){return j.a.post("/createComment",e)},deleteComment:function(e){return j.a.post("/deleteComment",e)},deleteThread:function(e){return j.a.post("/deleteThread",e)}},b=a(1);function h(){var e=Object(i.useState)(),t=Object(l.a)(e,2),a=t[0],r=t[1],n=Object(i.useState)(),s=Object(l.a)(n,2),u=s[0],d=s[1],j=Object(i.useState)(),h=Object(l.a)(j,2),x=h[0],f=h[1];return Object(i.useEffect)(Object(o.a)(Object(c.a)().mark((function e(){var t,a,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getAffirmations();case 2:t=e.sent,a=t.data,n=Math.floor(Math.random()*a.length),r(a[n].affirmation[n]);case 6:case"end":return e.stop()}}),e)}))),[]),Object(i.useEffect)(Object(o.a)(Object(c.a)().mark((function e(){var t,a,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getBooks();case 2:t=e.sent,a=t.data,r=Math.floor(Math.random()*a.length),d(a[r].title),f(a[r].author);case 7:case"end":return e.stop()}}),e)}))),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsx)("h3",{className:"mt-5 text-light",children:"Selected Positive Affirmation:"}),Object(b.jsx)("h5",{className:"mt-3 opaque text-info",children:a})]}),Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsx)("h3",{className:"mt-5 text-light",children:"Recommended book:"}),Object(b.jsx)("h5",{className:"mt-3 opaque text-info",children:u}),Object(b.jsxs)("h5",{className:"mt-3 opaque text-info",children:["by:\xa0",x]})]})]}),Object(b.jsxs)("div",{id:"about",className:"row text-light mt-3",children:[Object(b.jsx)("h1",{className:"mx-3",children:"Our mission:"}),Object(b.jsxs)("p",{className:"mx-3 opaque text-info",children:["We strive to effect positive world change through personal responsibility, Individual growth, and co-operative empowerment. We believe that no man is an island, and to that extent we rely on each other for the positive encouragement to give the needed boost to achieve our greatest potential. However, the responsibility for taking action, learning and implementing the necessary tools, and growing in to our fullest potential must, and can ",Object(b.jsx)("em",{children:"ONLY"})," reside with each of us, individually."]})]})]})})}function x(e){var t,a=e.setHeaderShow,n=e.setFooterShow,s=e.affirmationValue,d=Object(i.useState)([]),j=Object(l.a)(d,2),h=j[0],x=j[1],f=Object(u.m)();Object(i.useEffect)(Object(o.a)(Object(c.a)().mark((function e(){var a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getAffirmationArray();case 2:a=e.sent,a.data.map((function(e){var a;s===e.category&&(a=e.affirmation,t=a.sort((function(){return Math.random()-.5})),r=t[Symbol.iterator](),x(t[0]))}));case 5:case"end":return e.stop()}}),e)}))),[h]),Object(i.useEffect)((function(){$("#cueBall").hover((function(){x(void 0===h?t[0]:r.next().affirmationValue),$("#cueBall").addClass("shake"),$("#cueBallText").addClass("invisible").removeClass("bg-dark"),$("#cueBallText").removeClass("fadeIn")}),(function(){$("#cueBallText").addClass("fadeIn"),$("#cueBall").removeClass("shake"),$("#cueBallText").addClass("bg-dark").removeClass("invisible")}))}),[]);var O=function(){var e,t=window.innerHeight,a=window.innerWidth;e=t<a?t:a,$("#cueBall").css({width:"".concat(e/1.5,"px"),height:"".concat(e/1.5,"px"),padding:"".concat(e/50,"px"),position:"relative",left:"".concat(a/2-e/3,"px"),top:"".concat(t/2-e/2.5,"px"),backgroundColor:"antiqueWhite",borderRadius:"50%"}),$("#cueBallText").css({width:"".concat(e/1.75,"px"),fontSize:"".concat(e/45,"px"),padding:"".concat(e/75,"px"),textAlign:"center",position:"relative",top:"12em",left:".75em"})};return O(),window.addEventListener("resize",O),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"cueBall",className:"m-1",children:Object(b.jsx)("div",{id:"cueBallText",className:"d-flex align-items-center justify-content-center text-primary",children:h})}),Object(b.jsx)("div",{className:"buttonPosition row",children:Object(b.jsx)("button",{type:"button",className:"bg-primary text-light col-4 offset-4",onClick:function(){a(!0),n(!0),f("/")},children:"Home"})})]})}function f(e){var t=e.setHeaderShow,a=e.setFooterShow,r=e.onSelect,n=Object(i.useState)([]),s=Object(l.a)(n,2),u=s[0],d=s[1];return Object(i.useEffect)(Object(o.a)(Object(c.a)().mark((function e(){var t,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getAffirmations();case 2:t=e.sent,a=t.data,d(a);case 5:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{className:"text-danger container mt-5",children:["Please select an affirmation category to begin. The Cue-ball will then appear. To start the selection process, hover over the Cue-ball. Then move your mouse away to see your randomly generated affirmation. To see a different affirmation, simply repeat the process.",Object(b.jsx)("br",{}),"Enjoy!"]}),Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsxs)("label",{className:"text-light",children:["Categories:\xa0",Object(b.jsxs)("select",{onChange:function(e){t(!1),a(!1),r(e)},children:[Object(b.jsx)("option",{value:"blank",children:"Choose:"}),u.length>0?u.map((function(e,t){return Object(b.jsx)("option",{value:e.category,children:e.category.slice(4)},t)})):null]})]})})]})}function O(e){var t=e.getUser,a=e.setFooterShow,r=e.loggedIn,n=e.logOut,c=Object(u.m)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"container-fluid text-danger border border-bottom-0 bg-warning",children:"Where the sky is the only limit..."}),Object(b.jsx)("div",{className:"container-fluid border border-top-0",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-4 offset-4 text-warning topText",onClick:function(){return c("/")},children:"P.O.P"}),Object(b.jsx)("div",{className:"col-4 offset-4 text-light",children:"Positive Outreach Programs"}),Object(b.jsx)("div",{className:"col-4 log",children:r?Object(b.jsxs)("div",{className:"hiding text-primary text-underline",children:[Object(b.jsxs)("p",{children:["Welcome \xa0",Object(b.jsx)("a",{id:r.username,href:"#",onClick:function(e){t(e.target.id),a(!1),c("/user")},children:r.username.capper()})]}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"#",onClick:n,children:"Sign out"})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{href:"/login",className:"col-2 hiding",children:"Log in"}),Object(b.jsx)("a",{href:"/create",className:"col-2 hiding",children:"New user"})]})}),r?Object(b.jsxs)("nav",{className:"row text-light",children:[Object(b.jsx)(s.b,{to:"/forum",className:"col-6 links",children:"Forum"}),Object(b.jsx)(s.b,{to:"/affirm",className:"col-6 links",children:"Magic Cue-Ball"})]}):null]})})]})}var p=a(87);function g(e){var t=e.threads,a=e.setThreads,r=e.loggedIn,n=e.getUser,s=e.onClick,l=e.deleteAThread,d=Object(u.m)(),j=function(){var e=Object(o.a)(Object(c.a)().mark((function e(){var t,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getThreads();case 2:t=e.sent,r=t.data,a(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)(Object(o.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j());case 1:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"text-light",children:"Posts:"}),Object(b.jsx)("h3",{className:"text-warning",children:"Please keep posts positive and uplifting."}),t?t.length>0?t.map((function(e,t){return Object(b.jsx)("div",{className:"container",value:e.title,children:Object(b.jsxs)("div",{id:e._id,className:"row border mb-1 d-flex align-items-center",children:[Object(b.jsx)("a",{href:"#",onClick:s,className:"text-primary col-3 offset-1",children:e.title}),Object(b.jsxs)("div",{className:"text-light col-3 offset-1",children:["by:\xa0",Object(b.jsx)("a",{href:"#",id:e.author.username,onClick:function(e){n(e.target.id),d("/user")},children:e.author.username}),Object(b.jsxs)("div",{children:[e.comments.length,"\xa0 comments."]})]}),r.username===e.author.username?Object(b.jsx)("h3",{className:"col-1 offset-2 far fa-window-close mt-2 text-danger",onClick:function(t){l(e._id)}}):null]})},t)})):Object(b.jsx)("h1",{className:"text-danger mt-5",children:"No Posts yet."}):null]}),Object(b.jsx)(p.a,{onClick:function(){return d("/createThread")},children:"Create a post"})]})}var v=a(86);function w(e){var t,a=e.makeComment;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(v.a,{className:"text-light mt-5",onSubmit:function(e){a(e,t)},children:[Object(b.jsxs)(v.a.Group,{controlId:"comment",children:[Object(b.jsx)(v.a.Label,{children:"Comment"}),Object(b.jsx)(v.a.Control,{className:"col-6 offset-3 text-center",type:"text",placeholder:"Comment",ref:function(e){return t=e}})]}),Object(b.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})})}function N(e){var t,a=e.newThread,r=Object(u.m)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(v.a,{className:"text-light mt-5",onSubmit:function(e){a(e,t),r("/forum")},children:[Object(b.jsxs)(v.a.Group,{controlId:"title",children:[Object(b.jsx)(v.a.Label,{children:"Thread Title"}),Object(b.jsx)(v.a.Control,{className:"col-6 offset-3 text-center",type:"text",placeholder:"Title",ref:function(e){return t=e}})]}),Object(b.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})})}function y(e){var t=e.loggedIn,a=e.threadData,r=e.deleteAComment,n=e.getUser,s=Object(u.m)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"text-warning",children:"Only helpful and encouraging comments will be tolerated."}),Object(b.jsxs)("div",{className:"text-danger",children:[Object(b.jsx)("h1",{children:a?a.title:null}),Object(b.jsx)("h1",{className:"col-4",id:"commentText",children:"Comments:"}),a?a.comments.map((function(e,c){return Object(b.jsxs)("div",{className:"row border my-2 mx-1",id:a.comments[c]._id,children:[Object(b.jsxs)("h3",{className:"col-1",children:[c+1,":"]}),Object(b.jsx)("h3",{className:"col-6",children:e.comment}),Object(b.jsxs)("h3",{className:"col-3",children:["by \xa0",Object(b.jsx)("a",{href:"#",id:e.author.username,onClick:function(e){n(e.target.id),s("/user")},children:e.author.username})]}),t.username===a.comments[c].author.username?Object(b.jsx)("h3",{className:"col-1 offset-1 far fa-window-close mt-2",onClick:function(e){r(e)}}):null]},c)})):null,Object(b.jsx)("button",{type:"button",onClick:function(){return s("/createComment")},children:"\xa0Add Comment\xa0"})]})]})}var k=a(85);function C(e){var t,a,r=e.loggedIn,n=e.show,s=e.dataErr,c=e.handleClose,o=Object(u.m)();if(s)switch(s){case"noUser":a="User name error:",t="That user name does not exist.";break;case"user":a="User name error:",t="That user name is already in use.";break;case"noPass":a="Password error:",t="That password does not match the account name.";break;case"pass":a="Password error:",t="Your passwords do not match.";break;case"email":a="Email error:",t="That email address is already in use.";break;case"tooShort":a="Password error:",t="Passwords must be at least 6 characters long.";break;case"invalid":a="Password error:",t="Passwords must include at least 1 uppercase letter and 1 number."}else r&&(a="Success",t="Thanks for signing up ".concat(r.username));return Object(b.jsxs)(k.a,{show:n,onHide:c,children:[Object(b.jsx)(k.a.Header,{children:Object(b.jsx)(k.a.Title,{children:a})}),Object(b.jsx)(k.a.Body,{className:"mb-5 border border-top-0",children:t}),r?Object(b.jsx)(p.a,{className:"col-4 offset-4 mb-3",onClick:function(){return o("/")},children:"Home"}):null]})}function S(e){var t,a,r=e.loggedIn,n=e.handleClose,s=e.signIn,c=e.show,o=e.dataErr;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{loggedIn:r,show:c,dataErr:o,handleClose:n}),Object(b.jsxs)(v.a,{className:"m-1",onSubmit:function(e){return s(e,t,a)},children:[Object(b.jsxs)(v.a.Group,{controlId:"username",children:[Object(b.jsx)(v.a.Label,{className:"text-light",children:"Name:"}),Object(b.jsx)(v.a.Control,{className:"col-4 offset-4 mb-1 text-center",type:"text",name:"username",placeholder:"User name",ref:function(e){return t=e},autoFocus:!0,required:!0})]}),Object(b.jsxs)(v.a.Group,{controlId:"password",children:[Object(b.jsx)(v.a.Label,{className:"text-light",children:"Password:"}),Object(b.jsx)(v.a.Control,{className:"col-4 offset-4 mb-1 text-center",type:"password",name:"password",placeholder:"Password",ref:function(e){return a=e},required:!0})]}),Object(b.jsx)(p.a,{className:"col-2",variant:"primary",type:"submit",children:"Sign in"})]})]})}function T(e){e.show,e.handleClose,e.dataErr;var t,a,r,n,s=e.setFooterShow,c=e.userProfile,o=e.loggedIn,l=e.editProfile,i=Object(u.m)();return c&&(o.username===c.username&&s(!1)),Object(b.jsx)(b.Fragment,{children:c?o.username===c.username?Object(b.jsxs)("div",{className:"container text-danger mt-5",children:[Object(b.jsxs)("h1",{children:["Welcome to your profile ",o.username.capper(),"!"]}),Object(b.jsx)("h3",{children:"Edit profile:"}),Object(b.jsxs)(v.a,{className:"col-8 offset-2",onSubmit:function(e){e.preventDefault(),l(e,t,a,r,n),i("/")},children:[Object(b.jsxs)(v.a.Group,{controlId:"username",children:[Object(b.jsx)(v.a.Label,{children:"Username"}),Object(b.jsx)(v.a.Control,{className:"text-center",type:"text",defaultValue:o.username,ref:function(e){return t=e}}),Object(b.jsx)(v.a.Text,{className:"text-muted"})]}),Object(b.jsxs)(v.a.Group,{controlId:"email",children:[Object(b.jsx)(v.a.Label,{children:"Email address"}),Object(b.jsx)(v.a.Control,{className:"text-center",type:"email",ref:function(e){return a=e},defaultValue:o.email}),Object(b.jsx)(v.a.Text,{className:"text-muted"})]}),Object(b.jsxs)(v.a.Group,{controlId:"password",children:[Object(b.jsx)(v.a.Label,{children:"Password"}),Object(b.jsx)(v.a.Control,{className:"text-center",type:"password",ref:function(e){return r=e},defaultValue:"New password"})]}),Object(b.jsxs)(v.a.Group,{controlId:"confirm",children:[Object(b.jsx)(v.a.Label,{children:"Confirm Password"}),Object(b.jsx)(v.a.Control,{className:"text-center",type:"password",ref:function(e){return n=e},defaultValue:"Confirm password"})]}),Object(b.jsx)(p.a,{className:"m-1",variant:"primary",type:"submit",children:"Submit"})]})]}):c?Object(b.jsxs)("div",{className:"mt-5 text-light",children:[Object(b.jsxs)("h1",{children:["Welcome to ",c.username.capper(),"s' page"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("h2",{children:["E-mail address: ",c.email]})]}):null:null})}function I(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("h1",{className:"text-warning mt-5",children:["Sorry the page at ",location.pathname," was not found"]})})}function P(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("footer",{className:"text-white text-center container-fluid mt-5 fixed-bottom border",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("h3",{className:"mt-3 text-warning",children:"Address"}),Object(b.jsxs)("h5",{className:"opaque mt-3",children:["1946 W. U.S. Hwy. 40",Object(b.jsx)("br",{}),"Greencastle, In",Object(b.jsx)("br",{}),"46135"]})]}),Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("h3",{className:"text-center mt-3 text-warning",children:"Around the Web"}),Object(b.jsxs)("div",{className:"d-flex align-items-center text-dark",children:[Object(b.jsx)("a",{href:"#",className:"offset-1 col-2 fa-2x fab fa-facebook mx-1"}),Object(b.jsx)("a",{href:"#",className:"col-2 fa-2x fab fa-google-plus mx-1"}),Object(b.jsx)("a",{href:"#",className:"col-2 fa-2x fab fa-twitter mx-1"}),Object(b.jsx)("a",{href:"#",className:"col-2 fa-2x fab fa-linkedin mx-1"}),Object(b.jsx)("a",{href:"#",className:"col-2 fa-2x fab fa-dribbble mx-1"})]})]}),Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("h3",{className:"mt-3 text-warning",children:"About Us"}),Object(b.jsx)("h6",{className:"opaque col-md-12",children:"The Positive Outreach Programs will be a Non-Profit organization committed to the improvement of life through personal responsility."})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("small",{className:"text-warning",children:"* Disclaimer: The Positive Outreach Program is not intended to treat, diagnose, or prevent any medical condition. *"})}),Object(b.jsx)("div",{className:"text-warning text-center small fixed-bottom",children:"Copyright \xa9 Positive Outreach Program 2021"})]})})}function U(e){var t,a,r,n,s=e.loggedIn,c=e.onSubmit,o=e.show,l=e.handleClose,i=e.dataErr;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{loggedIn:s,show:o,dataErr:i,handleClose:l}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)(v.a,{className:"m-1",onSubmit:function(e){return c(e,t,a,r,n)},children:[Object(b.jsxs)(v.a.Group,{controlId:"username",className:"col-8 offset-2",children:[Object(b.jsx)(v.a.Label,{className:"text-light mt-2",children:"User Name:\xa0"}),Object(b.jsx)(v.a.Control,{className:"mb-1 text-center",type:"text",name:"username",placeholder:"User name",ref:function(e){return t=e},autoFocus:!0,required:!0})]}),Object(b.jsxs)(v.a.Group,{controlId:"password",className:"col-8 offset-2",children:[Object(b.jsx)(v.a.Label,{className:"text-light mt-2",children:"Password:\xa0"}),Object(b.jsx)("p",{className:"text-danger small",children:"Password must be 8 characters and include 1 capital letter and 1 number"}),Object(b.jsx)(v.a.Control,{className:"mb-1 text-center",type:"password",name:"password",placeholder:"Password",ref:function(e){return a=e},required:!0})]}),Object(b.jsxs)(v.a.Group,{controlId:"confirm",className:"col-8 offset-2",children:[Object(b.jsx)(v.a.Label,{className:"text-light mt-2",children:"Confirm password:\xa0"}),Object(b.jsx)(v.a.Control,{className:"mb-1 text-center",type:"password",name:"confirm",placeholder:"Confirm password",ref:function(e){return r=e},required:!0})]}),Object(b.jsxs)(v.a.Group,{controlId:"email",className:"col-8 offset-2",children:[Object(b.jsx)(v.a.Label,{className:"text-light mt-2",children:"E-mail address:\xa0"}),Object(b.jsx)(v.a.Control,{className:"mb-1 text-center",type:"text",name:"email",placeholder:"E-mail address",ref:function(e){return n=e},required:!0})]}),Object(b.jsx)(p.a,{className:"col-2 m-1",variant:"primary",type:"submit",children:"Submit"})]})})})]})}function F(){var e=Object(u.m)(),t=Object(i.useState)(""),a=Object(l.a)(t,2),r=a[0],n=a[1],s=Object(i.useState)([]),d=Object(l.a)(s,2),j=d[0],p=d[1],v=Object(i.useState)(),k=Object(l.a)(v,2),C=k[0],F=k[1],E=Object(i.useState)(!0),A=Object(l.a)(E,2),B=A[0],L=A[1],D=Object(i.useState)(!0),q=Object(l.a)(D,2),G=q[0],H=q[1],W=Object(i.useState)(),$=Object(l.a)(W,2),M=$[0],V=$[1],_=Object(i.useState)(void 0===sessionStorage.getItem("myUser")?{}:JSON.parse(sessionStorage.getItem("myUser"))),J=Object(l.a)(_,2),z=J[0],R=J[1],Y=Object(i.useState)(!1),Z=Object(l.a)(Y,2),K=Z[0],Q=Z[1],X=Object(i.useState)(""),ee=Object(l.a)(X,2),te=ee[0],ae=ee[1],re=function(){return Q(!1)};String.prototype.capper=function(){return this[0].toUpperCase()+this.slice(1)};var ne=function(){var t=Object(o.a)(Object(c.a)().mark((function t(a){var r,n,s,o;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r=a.target.parentNode.id,e("/thread"),t.prev=3,n={threadId:r,author:z.username},t.next=7,m.getThread(n);case 7:s=t.sent,o=s.data,F(o),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}(),se=function(){var t=Object(o.a)(Object(c.a)().mark((function t(a,r,n){var s,o,l;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s={username:r.value,password:n.value},t.prev=2,t.next=5,m.signInUser(s);case 5:o=t.sent,l=o.data,t.t0=l,t.next="noUser"===t.t0?10:"noPass"===t.t0?13:"pass"===t.t0?16:19;break;case 10:return Q(!0),ae("noUser"),t.abrupt("break",23);case 13:return Q(!0),ae("noPass"),t.abrupt("break",23);case 16:return Q(!0),ae("pass"),t.abrupt("break",23);case 19:R(l),l=JSON.stringify(l),sessionStorage.setItem("myUser",l),e("/");case 23:t.next=29;break;case 26:t.prev=26,t.t1=t.catch(2),console.log(t.t1);case 29:case"end":return t.stop()}}),t,null,[[2,26]])})));return function(e,a,r){return t.apply(this,arguments)}}(),ce=function(){var e=Object(o.a)(Object(c.a)().mark((function e(t,a){var r,n,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={author:z._id,title:a.value},e.prev=2,e.next=5,m.makeThread(r);case 5:n=e.sent,s=n.data,F(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}(),oe=function(){var t=Object(o.a)(Object(c.a)().mark((function t(a,r){var n,s,o,l;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=z._id,s={thread:C._id,comment:r.value,author:n},t.prev=3,t.next=6,m.createComment(s);case 6:o=t.sent,l=o.data,F(l),e("/forum"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e,a){return t.apply(this,arguments)}}(),le=function(){var e=Object(o.a)(Object(c.a)().mark((function e(t){var a,r,n,s,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.parentNode.id,r=t.target.parentNode.children[1].innerHTML,n={title:C.title,commentId:a,commentTitle:r},e.next=5,m.deleteComment(n);case 5:s=e.sent,o=s.data,F(o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(o.a)(Object(c.a)().mark((function e(t){var a,r,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t},e.next=3,m.deleteThread(a);case 3:r=e.sent,n=r.data,p(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(o.a)(Object(c.a)().mark((function e(t,a,r,n,s){var o,l,i,u,d;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o={username:a.value,password:r.value,confirm:n.value,email:s.value,success:!1},e.prev=2,l=/([A-Z])/g,i=/([0-9])/g,!r.value.match(l)||!r.value.match(i)){e.next=32;break}if(!(r.value.length>=8)){e.next=29;break}return e.next=9,m.createNewUser(o);case 9:u=e.sent,d=u.data,e.t0=d,e.next="user"===e.t0?14:"pass"===e.t0?17:"email"===e.t0?20:23;break;case 14:return Q(!0),ae("user"),e.abrupt("break",27);case 17:return Q(!0),ae("pass"),e.abrupt("break",27);case 20:return Q(!0),ae("email"),e.abrupt("break",27);case 23:Q(!0),R(d),d=JSON.stringify(d),sessionStorage.setItem("myUser",d);case 27:e.next=30;break;case 29:alert("Passwords must be at least 6 characters long.");case 30:e.next=33;break;case 32:alert("Passwords must contain at least 1 uppercase letter and 1 number.");case 33:e.next=38;break;case 35:e.prev=35,e.t1=e.catch(2),console.log(e.t1);case 38:case 39:case"end":return e.stop()}}),e,null,[[2,35]])})));return function(t,a,r,n,s){return e.apply(this,arguments)}}(),de=function(){var e=Object(o.a)(Object(c.a)().mark((function e(t,a,r,n,s){var o,l,i,u,d,j;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o=z.username,l={id:z._id,user:o,username:a.value,email:r.value,password:n.value,confirm:s.value},e.prev=3,i=/([A-Z])/g,u=/([0-9])/g,!n.value.match(i)||!n.value.match(u)){e.next=20;break}if(!(n.value.length>=8)){e.next=17;break}return e.next=10,m.update(l);case 10:d=e.sent,j=d.data,R(j),j=JSON.stringify(j),sessionStorage.setItem("myUser",j),e.next=18;break;case 17:alert("Passwords must be at least 6 characters long.");case 18:e.next=21;break;case 20:alert("Passwords must contain at least 1 uppercase letter and 1 number.");case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),console.log(e.t0);case 26:case 27:case"end":return e.stop()}}),e,null,[[3,23]])})));return function(t,a,r,n,s){return e.apply(this,arguments)}}(),je=function(){var e=Object(o.a)(Object(c.a)().mark((function e(t){var a,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getUserData(t);case 2:a=e.sent,r=a.data,V(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[B?Object(b.jsx)(O,{getUser:je,setHeaderShow:L,setFooterShow:H,loggedIn:z,logOut:function(){confirm("Do you want to sign out?")&&(sessionStorage.clear(),R(""),e("/"))}}):null,Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",element:Object(b.jsx)(h,{loggedIn:z})}),Object(b.jsx)(u.a,{path:"/affirm",element:Object(b.jsx)(f,{setHeaderShow:L,setFooterShow:H,onSelect:function(t){var a=t.target.value;n(a),e("/cueBall")}})}),Object(b.jsx)(u.a,{path:"/user",element:Object(b.jsx)(T,{show:K,handleClose:re,dataErr:te,setFooterShow:H,userProfile:M,loggedIn:z,editProfile:de})}),Object(b.jsx)(u.a,{path:"/cueBall",element:Object(b.jsx)(x,{setHeaderShow:L,setFooterShow:H,affirmationValue:r})}),Object(b.jsx)(u.a,{path:"/forum",element:Object(b.jsx)(g,{threads:j,setThreads:p,loggedIn:z,getUser:je,setFooterShow:H,onClick:ne,deleteAThread:ie})}),Object(b.jsx)(u.a,{path:"/thread",element:Object(b.jsx)(y,{loggedIn:z,threadData:C,deleteAComment:le,getUser:je})}),Object(b.jsx)(u.a,{path:"/createComment",element:Object(b.jsx)(w,{makeComment:oe,threadData:C})}),Object(b.jsx)(u.a,{path:"/createThread",element:Object(b.jsx)(N,{newThread:ce})}),Object(b.jsx)(u.a,{path:"/login",element:Object(b.jsx)(S,{loggedIn:z,signIn:se,show:K,dataErr:te,handleClose:re})}),Object(b.jsx)(u.a,{path:"/create",element:Object(b.jsx)(U,{loggedIn:z,onSubmit:ue,show:K,handleClose:re,dataErr:te})}),Object(b.jsx)(u.a,{path:"*",element:Object(b.jsx)(I,{})})]}),G?Object(b.jsx)(P,{setFooterShow:H}):null]})}Object(n.render)(Object(b.jsx)(s.a,{children:Object(b.jsx)(F,{})}),document.querySelector("#root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.43460a26.chunk.js.map