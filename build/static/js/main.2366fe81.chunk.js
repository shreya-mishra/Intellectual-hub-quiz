(this["webpackJsonpintellectual-hub"]=this["webpackJsonpintellectual-hub"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},122:function(e,t,n){},127:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(11),r=n.n(a),i=(n(99),n(20)),o=n.n(i),l=n(31),u=n(12),j=n(42),b=n.n(j),d=n(41),h=n(10),O=(n(119),n(120),n(2)),m=function(){return Object(O.jsxs)("div",{style:{textAlign:"center",marginBottom:10},children:["Made with \u2764 by"," ",Object(O.jsx)("a",{href:"https://github.com/shreya-mishra",style:{curcor:"pointer"},children:"Shreya Mishra"})]})},x=n(47),p=n(67),f=n(4),g=n(184),v=n(198),y=n(183),N=n(182),S=n(187),w=n(188),k=n(189),C=n(197),_=(n(122),n(80)),I=n.n(_),q=[{title:"Home",icon:Object(O.jsx)(I.a,{}),url:"/"}],z=n(66),E=n.n(z),Q=n(196),B=n(195),P=n(137),F=n(181),J=n(194),L=n(186),T=n(185),M=(n(127),n(193)),H=(n(65),function(e){var t=e.children;return Object(O.jsx)("div",{style:{width:"100%",padding:10,marginBottom:10,borderRadius:4,backgroundColor:"orangered",textAlign:"center",color:"white",textTransform:"capitalize"},children:t})}),Y=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(u.a)(a,2),i=r[0],j=r[1],d=Object(c.useState)(""),m=Object(u.a)(d,2),x=m[0],p=m[1],f=Object(h.f)(),g=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i&&x){e.next=5;break}return s(!0),e.abrupt("return");case 5:return console.log(i,x),s(!1),t.preventDefault(),n={headers:{"Content-type":"application/json"}},e.next=11,b.a.post("/api/user/login",{email:i,password:x},n);case 11:if(c=e.sent,a=c.data,console.log(a),localStorage.setItem("userInfo",JSON.stringify(a)),!a.token){e.next=19;break}f.push("/quiz"),e.next=20;break;case 19:return e.abrupt("return");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"settings__select",children:[n&&Object(O.jsx)(H,{children:"Please Fill all the feilds"}),Object(O.jsx)("div",{style:{height:20}}),Object(O.jsx)(M.a,{style:{marginBottom:25},label:"Enter Your Email",variant:"outlined",onChange:function(e){return j(e.target.value)}}),Object(O.jsx)(M.a,{style:{marginBottom:25},label:"Enter Your password",variant:"outlined",onChange:function(e){return p(e.target.value)}}),Object(O.jsx)(y.a,{variant:"contained",color:"primary",size:"large",onClick:g,children:"Login"})]})},D=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(u.a)(a,2),i=r[0],j=r[1],d=Object(c.useState)(""),m=Object(u.a)(d,2),x=m[0],p=m[1],f=Object(c.useState)(""),g=Object(u.a)(f,2),v=g[0],N=g[1],S=Object(c.useState)(""),w=Object(u.a)(S,2),k=w[0],C=w[1],_=Object(h.f)(),I=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i&&x&&v){e.next=5;break}return s(!0),e.abrupt("return");case 5:return s(!1),t={headers:{"Content-type":"application/json"}},e.next=9,b.a.post("/api/user",{name:i,email:x,password:v,pic:k},t);case 9:if(n=e.sent,c=n.data,console.log(c.token),localStorage.setItem("userInfo",JSON.stringify(c)),!c.token){e.next=17;break}_.push("/quiz"),e.next=18;break;case 17:return e.abrupt("return");case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"settings__select",children:[n&&Object(O.jsx)(H,{children:"Please Fill all the fields"}),Object(O.jsx)("div",{style:{height:20}}),Object(O.jsx)(M.a,{style:{marginBottom:25},label:"Enter Your Name",variant:"outlined",onChange:function(e){return j(e.target.value)}}),Object(O.jsx)(M.a,{style:{marginBottom:25},label:"Enter Your Email",variant:"outlined",onChange:function(e){return p(e.target.value)}}),Object(O.jsx)(M.a,{style:{marginBottom:25},label:"Enter Your password",variant:"outlined",onChange:function(e){return N(e.target.value)}}),Object(O.jsxs)(y.a,{style:{marginBottom:25},variant:"contained",component:"label",color:"secondary",onChange:function(e){console.log(e.target.value),C(e.target.value)},children:["Upload Profile Pic",Object(O.jsx)("input",{type:"file",accept:"image/*",hidden:!0})]}),Object(O.jsx)(y.a,{variant:"contained",color:"primary",size:"large",onClick:I,children:"Done"})]})},A=Object(g.a)((function(e){return{root:{flex:1,marginLeft:"-230px"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,height:"78%",width:"30%",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),R=function(e){var t=e.name,n=e.setName,s=e.email,a=e.setEmail,r=e.setPassword,i=e.password,o=e.open,l=e.setOpen,j=A(),b=Object(c.useState)("0"),d=Object(u.a)(b,2),h=d[0],m=d[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(B.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:j.modal,open:o,onClose:function(){l(!1)},closeAfterTransition:!0,BackdropComponent:T.a,BackdropProps:{timeout:500},children:Object(O.jsx)(P.a,{in:o,children:Object(O.jsxs)("div",{className:j.paper,children:[Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginRight:"500px",fontSize:30,marginLeft:"-50px"},children:"Register To Play"}),Object(O.jsx)("div",{style:{height:"10px"}}),Object(O.jsx)(F.a,{square:!0,className:j.root,children:Object(O.jsxs)(J.a,{selectionFollowsFocus:!0,value:h,onChange:function(e,t){m(t)},variant:"fullWidth",indicatorColor:"primary",textColor:"primary",children:[Object(O.jsx)(L.a,{label:"Signup",value:"0"}),Object(O.jsx)(L.a,{label:"login",value:"1"})]})})]})}),"0"===h?Object(O.jsx)(D,{name:t,setName:n,email:s,setEmail:a,password:i,setPassword:r}):Object(O.jsx)(Y,{})]})})})})},W=Object(g.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},list:{width:250},fullList:{width:"auto"}}})),G=function(e){var t,n=e.children,a=W(),r=s.a.useState({right:!1}),i=Object(u.a)(r,2),o=i[0],l=i[1],j=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&l(Object(p.a)(Object(p.a)({},o),{},Object(x.a)({},e,t)))}},b=JSON.parse(localStorage.getItem("userInfo")),h=Object(c.useState)(!1),m=Object(u.a)(h,2),g=(m[0],m[1]),_=function(){localStorage.removeItem("userInfo"),g(!0)};return Object(O.jsx)("div",{children:Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(y.a,{onClick:j("right",!0),children:n}),Object(O.jsx)(v.a,{anchor:"right",open:o.right,onClose:j("right",!1),children:(t="right",Object(O.jsxs)("div",{className:Object(f.a)(a.list,Object(x.a)({},a.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:j(t,!1),onKeyDown:j(t,!1),children:[Object(O.jsx)(S.a,{}),Object(O.jsxs)(N.a,{children:[Object(O.jsxs)(w.a,{children:[Object(O.jsx)(k.a,{children:Object(O.jsx)(Q.a,{src:"/broken-image.jpg"})}),Object(O.jsx)(C.a,{primary:b?"Hello ".concat(b.name):"Hello, Guest"})]}),q.map((function(e,t){return Object(O.jsx)(d.b,{to:e.url,children:Object(O.jsxs)(w.a,{button:!0,children:[Object(O.jsxs)(k.a,{children:[e.icon," "]}),Object(O.jsx)(C.a,{primary:e.title})]},e.title)})})),Object(O.jsx)(d.b,{onClick:_,children:Object(O.jsxs)(w.a,{children:[Object(O.jsx)(k.a,{children:Object(O.jsx)(E.a,{})}),Object(O.jsx)(C.a,{primary:b?"Logout":"Login"})]})})]})]}))})]},"right")})},K=(n(130),n(85)),U=n.n(K),V=n(190),X=function(){return Object(O.jsxs)("div",{className:"header__icon",children:[Object(O.jsx)("div",{style:{width:"4%"}}),Object(O.jsx)("div",{className:"header",children:Object(O.jsx)(d.b,{to:"/",className:"title",children:Object(O.jsx)("h2",{children:"Intellectual Hub"})})}),Object(O.jsx)(G,{children:Object(O.jsx)(V.a,{color:"inherit",className:"icon",children:Object(O.jsx)(U.a,{})})})]})},Z=n(191),$=(n(134),function(e){e.category;var t=e.setCategory,n=(e.name,e.setName,e.email,e.setEmail,e.setPassword,e.password,e.fetchQuestions,e.location,Object(h.f)());Object(c.useEffect)((function(){;""}),[n,""]);var s=Object(c.useState)(!1),a=Object(u.a)(s,2),r=a[0],i=a[1],j=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("Film");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("Music");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();JSON.parse(localStorage.getItem("userInfo"));return Object(O.jsx)(Z.a,{children:Object(O.jsxs)("div",{className:"main-div",children:[Object(O.jsx)("div",{className:"subheader",children:Object(O.jsx)("h3",{className:"subtitle",children:"Choose one from the categories below and see how many questions you can answer correctly out of 10 questions!"})}),Object(O.jsxs)("div",{className:"categories",children:[Object(O.jsxs)("div",{className:"circular-figure__category-name",children:[Object(O.jsx)("div",{className:"music__circle",children:Object(O.jsx)("span",{onClick:j,children:Object(O.jsx)("img",{className:"images",src:"http://devinardya-quizmaster.surge.sh/static/media/movie-icon.719897dc.svg"})})}),Object(O.jsx)("h2",{className:"category__name",children:"Movie"})]}),Object(O.jsxs)("div",{className:"circular-figure__category-name",children:[Object(O.jsx)("div",{className:"music__circle",children:Object(O.jsx)("span",{onClick:b,children:Object(O.jsx)("img",{className:"images",src:"http://devinardya-quizmaster.surge.sh/static/media/music-icon.469e959f.svg"})})}),Object(O.jsx)("h2",{className:"category__name",children:"Music"})]}),Object(O.jsxs)("div",{className:"circular-figure__category-name",children:[Object(O.jsx)("div",{className:"music__circle",children:Object(O.jsx)("span",{onClick:function(){t("Computer")},children:Object(O.jsx)("img",{className:"images",src:"http://devinardya-quizmaster.surge.sh/static/media/books-icon.3b876aa2.svg"})})}),Object(O.jsx)("h2",{className:"category__name",children:"Book"})]})]}),Object(O.jsx)("button",{className:"submit__button",onClick:function(){n.push("/quiz")},children:"Start Quiz"}),Object(O.jsx)(R,{open:r,setOpen:i})]})})}),ee=n(86),te=n(192),ne=(n(131),function(e){var t=e.currQues,n=e.setCurrQues,s=e.questions,a=e.options,r=e.correct,i=e.setScore,o=e.score,l=(e.setQuestions,Object(c.useState)()),j=Object(u.a)(l,2),b=j[0],d=j[1],m=Object(c.useState)(!1),x=Object(u.a)(m,2),p=x[0],f=x[1],g=function(e){return b===e&&b===r?"select":b===e&&b!==r?"wrong":e===r?"select":void 0},v=Object(h.f)();JSON.parse(localStorage.getItem("userInfo"));return Object(O.jsxs)("div",{className:"question",children:[Object(O.jsxs)("h1",{style:{color:"white"},children:["Question ",t+1]}),Object(O.jsxs)("div",{className:"singleQuestion",children:[Object(O.jsx)("h2",{children:s[t].question}),Object(O.jsxs)("div",{className:"options",children:[p&&Object(O.jsx)(H,{children:p}),a&&a.map((function(e){return Object(O.jsx)("button",{onClick:function(){return function(e){d(e),e===r&&i(o+1),f(!1)}(e)},className:"singleOption ".concat(b&&g(e)),disabled:b,children:e},e)}))]}),Object(O.jsxs)("div",{className:"controls",children:[Object(O.jsx)(y.a,{variant:"contained",color:"secondary",size:"large",style:{width:185},href:"/",onClick:function(){},children:"Quit"}),Object(O.jsx)(y.a,{variant:"contained",color:"primary",size:"large",style:{width:185},onClick:function(){t>8?v.push("/result"):b?(n(t+1),d()):f("Please select an option first")},children:"Next Question"})]})]})]})}),ce=(n(132),function(e){e.name;var t,n=e.score,s=e.questions,a=e.setQuestions,r=e.setScore,i=Object(c.useState)(),o=Object(u.a)(i,2),l=o[0],j=o[1],b=Object(c.useState)(0),d=Object(u.a)(b,2),h=d[0],m=d[1],x=JSON.parse(localStorage.getItem("userInfo"));console.log("sssssssssssssssss",x),Object(c.useEffect)((function(){var e,t;console.log(s),j(s&&p([null===(e=s[h])||void 0===e?void 0:e.correct_answer].concat(Object(ee.a)(null===(t=s[h])||void 0===t?void 0:t.incorrect_answers))))}),[s,h]),console.log(l);var p=function(e){return e.sort((function(){return Math.random()-.5}))};return Object(O.jsxs)("div",{className:"quiz",children:[Object(O.jsx)("span",{className:"subTitle",style:{color:"white"},children:x?"Welcome, ".concat(x.name):"Welcome "}),s?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"quizInfo",children:[Object(O.jsx)("span",{children:s[h].category}),Object(O.jsxs)("span",{children:["Score : ",n]})]}),Object(O.jsx)(ne,{currQues:h,setCurrQues:m,questions:s,options:l,correct:null===(t=s[h])||void 0===t?void 0:t.correct_answer,score:n,setScore:r,setQuestions:a})]}):Object(O.jsx)(te.a,{style:{margin:100},color:"inherit",size:150,thickness:1})]})}),se=(n(133),function(e){var t=e.name,n=e.score,s=Object(h.f)();return Object(c.useEffect)((function(){return function(){t||s.push("/")}}),[t.history]),Object(O.jsxs)("div",{className:"result",children:[Object(O.jsxs)("span",{className:"title",children:["Final Score : ",n]}),Object(O.jsx)(y.a,{variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:20},href:"/",children:"Go To Homepage"})]})}),ae=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=(t[1],Object(c.useState)("")),a=Object(u.a)(s,2),r=a[0],i=a[1],j=Object(c.useState)(),x=Object(u.a)(j,2),p=x[0],f=x[1],g=Object(c.useState)(0),v=Object(u.a)(g,2),y=v[0],N=v[1],S=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",s.length>1&&void 0!==s[1]?s[1]:"",e.next=4,b.a.get("https://opentdb.com/api.php?amount=10".concat(t&&"&category=".concat(t),"&difficulty=easy&type=multiple"));case 4:n=e.sent,c=n.data,console.log("hello",c),f(c.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){S()}),[]),Object(O.jsxs)(d.a,{children:[Object(O.jsxs)("div",{className:"app",style:{backgroundImage:"url(./home2.jpg)"},children:[Object(O.jsx)(X,{}),Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{path:"/",exact:!0,children:Object(O.jsx)($,{category:r,setCategory:i,fetchQuestions:S})}),Object(O.jsx)(h.a,{path:"/quiz",exact:!0,children:Object(O.jsx)(ce,{name:n,questions:p,score:y,setScore:N,setQuestions:f})}),Object(O.jsx)(h.a,{path:"/result",exact:!0,children:Object(O.jsx)(se,{score:y,name:n})})]})]}),Object(O.jsx)(m,{})]})};r.a.render(Object(O.jsx)(ae,{}),document.getElementById("root"))},65:function(e,t,n){},99:function(e,t,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.2366fe81.chunk.js.map