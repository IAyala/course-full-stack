(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{101:function(e,s,t){},102:function(e,s,t){},173:function(e,s,t){"use strict";t.r(s);var n=t(2),c=t.n(n),r=t(16),a=t.n(r),o=(t(100),t(101),t(102),t(25)),i=t(26),l=t(28),j=t(27),d=t(3),m=t(1),h=function(){return Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(m.jsx)("p",{children:"Loading . . ."})]})},b="http://localhost:3001/",u=t(21);function O(e){var s=e.item,t=e.isLoading,n=e.errMess;return t?Object(m.jsx)(h,{}):n?Object(m.jsx)("h4",{children:n}):Object(m.jsx)(u.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.g,{src:b+s.image,alt:s.name}),Object(m.jsxs)(d.e,{children:[Object(m.jsx)(d.k,{children:s.name}),s.designation?Object(m.jsx)(d.i,{children:s.designation}):null,Object(m.jsx)(d.j,{children:s.description})]})]})})}var x=function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row align-items-start",children:[Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(O,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(O,{item:e.promotion,isLoading:e.promotionsLoading,errMess:e.promotionsErrMess})}),Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(O,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess})})]})})},f=t(17),p=t(7),g=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).toggleNav=n.toggleNav.bind(Object(f.a)(n)),n.toggleModal=n.toggleModal.bind(Object(f.a)(n)),n.handleLogin=n.handleLogin.bind(Object(f.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(i.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(d.A,{dark:!0,expand:"md",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(d.B,{className:"mr-auto",href:"/",children:Object(m.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(m.jsx)(d.C,{onClick:this.toggleNav}),Object(m.jsxs)(d.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(m.jsxs)(d.y,{navbar:!0,children:[Object(m.jsx)(d.z,{children:Object(m.jsxs)(p.c,{className:"nav-link",to:"/home",children:[Object(m.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(m.jsx)(d.z,{children:Object(m.jsxs)(p.c,{className:"nav-link",to:"/aboutus",children:[Object(m.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(m.jsx)(d.z,{children:Object(m.jsxs)(p.c,{className:"nav-link",to:"/menu",children:[Object(m.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(m.jsx)(d.z,{children:Object(m.jsxs)(p.c,{className:"nav-link",to:"/contactus",children:[Object(m.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(m.jsx)(d.y,{className:"ml-auto",navbar:!0,children:Object(m.jsx)(d.z,{children:Object(m.jsxs)(d.c,{outline:!0,onClick:this.toggleModal,children:[Object(m.jsx)("span",{className:"fa fa-sign-in fa-lg"}),"Login"]})})})]})]})}),Object(m.jsx)(d.q,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row row-header",children:Object(m.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(m.jsx)("h1",{children:"Ristorante con Fusion"}),Object(m.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(m.jsxs)(d.v,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(m.jsx)(d.x,{toggle:this.toggleModal,children:"Login"}),Object(m.jsx)(d.w,{children:Object(m.jsxs)(d.n,{onSubmit:this.handleLogin,children:[Object(m.jsxs)(d.o,{children:[Object(m.jsx)(d.r,{htmlFor:"username",children:"Username"}),Object(m.jsx)(d.p,{type:"text",id:"username",name:"username",innerRef:function(s){return e.username=s}})]}),Object(m.jsxs)(d.o,{children:[Object(m.jsx)(d.r,{htmlFor:"password",children:"Password"}),Object(m.jsx)(d.p,{type:"password",id:"password",name:"password",innerRef:function(s){return e.password=s}})]}),Object(m.jsx)(d.o,{check:!0,children:Object(m.jsxs)(d.r,{check:!0,children:[Object(m.jsx)(d.p,{type:"checkbox",name:"remember",innerRef:function(s){return e.remember=s}}),"Remember me"]})}),Object(m.jsx)(d.c,{type:"submit",value:"submit",className:"bg-primary bottom-button",children:"Login"})]})})]})]})}}]),t}(n.Component);var N=function(e){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(m.jsx)("h5",{children:"Links"}),Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:Object(m.jsx)(p.b,{to:"/home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(p.b,{to:"/aboutus",children:"About Us"})}),Object(m.jsx)("li",{children:Object(m.jsx)(p.b,{to:"/menu",children:"Menu"})}),Object(m.jsx)("li",{children:Object(m.jsx)(p.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(m.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(m.jsx)("h5",{children:"Our Address"}),Object(m.jsxs)("address",{children:["121, Clear Water Bay Road",Object(m.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(m.jsx)("br",{}),"HONG KONG",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(m.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(m.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(m.jsx)("i",{className:"fa fa-google-plus"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(m.jsx)("i",{className:"fa fa-facebook"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(m.jsx)("i",{className:"fa fa-linkedin"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(m.jsx)("i",{className:"fa fa-twitter"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(m.jsx)("i",{className:"fa fa-youtube"})}),Object(m.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(m.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-auto",children:Object(m.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})};var v=function(e){function s(e){var s=e.theDish;return Object(m.jsx)(d.d,{children:Object(m.jsxs)(p.b,{to:"/menu/".concat(s.id),children:[Object(m.jsx)(d.g,{width:"100%",src:b+s.image,alt:s.name}),Object(m.jsx)(d.h,{children:Object(m.jsx)(d.k,{children:s.name})})]})})}var t=e.dishes.dishes.map((function(e){return Object(m.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(m.jsx)(s,{theDish:e})},e.id)}));return e.dishes.isLoading?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(h,{})})}):e.dishes.errMess?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("h4",{children:e.dishes.errMess})})}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.b,{children:Object(m.jsx)(p.b,{to:"/home",children:"Home"})}),Object(m.jsx)(d.b,{active:!0,children:"Menu"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"Menu"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsx)("div",{className:"row",children:t})]})};var y=function(e){function s(e){var s=e.leadersInfo;return s.isLoading?Object(m.jsx)(h,{}):s.errMess?Object(m.jsx)("h4",{children:s.errMess}):Object(m.jsx)(d.u,{list:!0,children:Object(m.jsx)(u.Stagger,{in:!0,children:s.leaders.map((function(e){return Object(m.jsx)(u.Fade,{in:!0,children:Object(m.jsx)(t,{leader:e})})}))})})}function t(e){var s=e.leader;return Object(m.jsx)("div",{className:"col-12 mt-5",children:Object(m.jsxs)(d.u,{tag:"li",children:[Object(m.jsx)(d.u,{left:!0,middle:!0,children:Object(m.jsx)(d.u,{object:!0,src:b+s.image,alt:s.name})}),Object(m.jsxs)(d.u,{body:!0,className:"ml-5",children:[Object(m.jsx)(d.u,{heading:!0,children:s.name}),Object(m.jsx)("h6",{children:s.designation}),Object(m.jsx)("p",{children:s.description})]})]})},s.id)}return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.b,{children:Object(m.jsx)(p.b,{to:"/home",children:"Home"})}),Object(m.jsx)(d.b,{active:!0,children:"About Us"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"About Us"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsxs)("div",{className:"col-12 col-md-6",children:[Object(m.jsx)("h2",{children:"Our History"}),Object(m.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(m.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(m.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(m.jsx)("div",{className:"col-12 col-md-5",children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(m.jsx)(d.e,{children:Object(m.jsxs)("dl",{className:"row p-1",children:[Object(m.jsx)("dt",{className:"col-6",children:"Started"}),Object(m.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(m.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(m.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(m.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(m.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(m.jsx)("dt",{className:"col-6",children:"Employees"}),Object(m.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)(d.d,{children:Object(m.jsx)(d.e,{className:"bg-faded",children:Object(m.jsxs)("blockquote",{className:"blockquote",children:[Object(m.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(m.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(m.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h2",{children:"Corporate Leadership"})}),Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)(s,{leadersInfo:e.leadersInfo})})]})]})},w=t(10),k=function(e){return e&&e.length},L=function(e){return function(s){return!s||s.length<=e}},M=function(e){return function(s){return s&&s.length>=e}},E=function(e){return!isNaN(Number(e))},S=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},C=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(i.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.b,{children:Object(m.jsx)(p.b,{to:"/home",children:"Home"})}),Object(m.jsx)(d.b,{active:!0,children:"Contact Us"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"Contact Us"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h3",{children:"Location Information"})}),Object(m.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(m.jsx)("h5",{children:"Our Address"}),Object(m.jsxs)("address",{children:["121, Clear Water Bay Road",Object(m.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(m.jsx)("br",{}),"HONG KONG",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-envelope"}),": ",Object(m.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(m.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(m.jsx)("h5",{children:"Map of our Location"})}),Object(m.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(m.jsxs)("div",{className:"btn-group",role:"group",children:[Object(m.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(m.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(m.jsxs)("a",{role:"button",className:"btn btn-info",href:"/contactus",children:[Object(m.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(m.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(m.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h3",{children:"Send us Your Feedback"})}),Object(m.jsx)("div",{className:"col-12 col-md-9",children:Object(m.jsxs)(w.Form,{model:"feedback",onSubmit:function(s){return e.handleSubmit(s)},children:[Object(m.jsxs)(d.D,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"firstname",md:2,children:"First Name"}),Object(m.jsxs)(d.l,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:k,minLength:M(3),maxLength:L(15)}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(m.jsxs)(d.D,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(m.jsxs)(d.l,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:k,minLength:M(3),maxLength:L(15)}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(m.jsxs)(d.D,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"telnum",md:2,children:"Tel. Number"}),Object(m.jsxs)(d.l,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Telephone Number",className:"form-control",validators:{required:k,minLength:M(3),maxLength:L(15),isNumber:E}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(m.jsxs)(d.D,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"email",md:2,children:"Email"}),Object(m.jsxs)(d.l,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".email",type:"email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:k,validEmail:S}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(m.jsxs)(d.D,{className:"form-group",children:[Object(m.jsx)(d.l,{md:{size:6,offset:2},children:Object(m.jsx)("div",{className:"form-check",children:Object(m.jsxs)(d.r,{check:!0,children:[Object(m.jsx)(w.Control.checkbox,{model:".agree",name:"agree",className:"form-check"})," ",Object(m.jsx)("strong",{children:"May we contact you?"})]})})}),Object(m.jsx)(d.l,{md:{size:3,offset:1},children:Object(m.jsxs)(w.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(m.jsx)("option",{children:"Tel."}),Object(m.jsx)("option",{children:"Email"})]})})]}),Object(m.jsxs)(d.D,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"feedback",md:2,children:"Your Feedback"}),Object(m.jsx)(d.l,{md:10,children:Object(m.jsx)(w.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(m.jsx)(d.D,{className:"form-group",children:Object(m.jsx)(d.l,{md:{size:10,offset:2},children:Object(m.jsx)(d.c,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),t}(n.Component),F=function(e){return function(s){return!s||s.length<=e}},D=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(f.a)(n)),n}return Object(i.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,s=this;return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsxs)(d.c,{outline:!0,onClick:this.toggleModal,children:[Object(m.jsx)("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"]}),Object(m.jsxs)(d.v,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(m.jsx)(d.x,{toggle:this.toggleModal,children:"Submit Comment"}),Object(m.jsx)(d.w,{children:Object(m.jsxs)(w.LocalForm,{onSubmit:function(e){return s.handleSubmit(e)},className:"col-12",children:[Object(m.jsxs)(d.D,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"rating",children:"Rating"}),Object(m.jsxs)(w.Control.select,{model:".rating",name:"rating",className:"form-control",children:[Object(m.jsx)("option",{children:"1"}),Object(m.jsx)("option",{children:"2"}),Object(m.jsx)("option",{children:"3"}),Object(m.jsx)("option",{children:"4"}),Object(m.jsx)("option",{children:"5"})]})]}),Object(m.jsxs)(d.D,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"name",children:"Your Name"}),Object(m.jsx)(w.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=3,function(s){return s&&s.length>=e}),maxLength:F(15)}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}})]}),Object(m.jsxs)(d.D,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"comment",children:"Comment"}),Object(m.jsx)(w.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})]}),Object(m.jsx)(d.D,{className:"form-group",children:Object(m.jsx)(d.c,{type:"submit",color:"primary",children:"Submit"})})]})})]})]})}}]),t}(n.Component);var T=function(e){function s(e){var s=e.comments,t=e.postComment,n=e.dishId;if(null==s)return Object(m.jsx)("div",{});var c=s.map((function(e){return function(e){return Object(m.jsx)(u.Fade,{in:!0,children:Object(m.jsxs)(d.t,{id:e.id,className:"comments-list",children:[Object(m.jsx)("p",{children:e.comment}),Object(m.jsxs)("p",{children:["-- ",e.author,", ",(s=new Date(e.date),s.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit"}))]})]})});var s}(e)}));return Object(m.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(m.jsx)("h4",{children:"Comments"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(d.s,{children:Object(m.jsx)(u.Stagger,{in:!0,children:c})}),Object(m.jsx)(D,{dishId:n,postComment:t})]})]})}function t(e){var s=e.dish;return Object(m.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(m.jsx)(u.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.g,{width:"100%",src:b+s.image,alt:s.name}),Object(m.jsxs)(d.e,{children:[Object(m.jsx)(d.k,{children:s.name}),Object(m.jsx)(d.j,{children:s.description})]})]})})})}return e.isLoading?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(h,{})})}):e.errMess?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(m.jsxs)("div",{className:"container dish-detail",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.b,{children:Object(m.jsx)(p.b,{to:"/menu",children:"Menu"})}),Object(m.jsx)(d.b,{active:!0,children:e.dish.name})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:e.dish.name}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(t,{dish:e.dish}),Object(m.jsx)(s,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})]})]}):Object(m.jsx)("div",{})},I=t(19),A="ADD_COMMENT",R="DISHES_LOADING",q="DISHES_FAILED",P="ADD_DISHES",H="PROMOS_LOADING",_="PROMOS_FAILED",Y="ADD_PROMOS",U="COMMENTS_FAILED",z="ADD_COMMENTS",B="LEADERS_LOADING",G="LEADERS_FAILED",W="ADD_LEADERS",K=function(e,s,t,n){return function(c){var r={dishId:e,rating:s,author:t,comment:n};return r.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return c(function(e){return{type:A,payload:e}}(e))})).catch((function(e){console.log("Post comment",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}},J=function(){return{type:R}},Z=function(e){return{type:q,payload:e}},$=function(e){return{type:P,payload:e}},Q=function(e){return{type:z,payload:e}},V=function(e){return{type:U,payload:e}},X=function(){return{type:H}},ee=function(e){return{type:_,payload:e}},se=function(e){return{type:Y,payload:e}},te=function(){return{type:B}},ne=function(e){return{type:G,payload:e}},ce=function(e){return{type:W,payload:e}},re=t(50),ae=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){return Object(o.a)(this,t),s.call(this,e)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this,s=function(e){return e.filter((function(e){return e.featured}))[0]};return Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{}),Object(m.jsx)(re.TransitionGroup,{children:Object(m.jsx)(re.CSSTransition,{classNames:"page",timeout:300,children:Object(m.jsxs)(p.f,{children:[Object(m.jsx)(p.e,{path:"/home",component:function(){return Object(m.jsx)(x,{dish:s(e.props.dishes.dishes),dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errmess,leader:s(e.props.leaders.leaders),leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errmess,promotion:s(e.props.promotions.promotions),promotionsLoading:e.props.promotions.isLoading,promotionsErrMess:e.props.promotions.errmess})}}),Object(m.jsx)(p.e,{exact:!0,path:"/menu",component:function(){return Object(m.jsx)(v,{dishes:e.props.dishes})}}),Object(m.jsx)(p.e,{path:"/menu/:dishId",component:function(s){var t=s.match;return Object(m.jsx)(T,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errmess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),postComment:e.props.postComment,commentsErrMess:e.props.comments.errmess})}}),Object(m.jsx)(p.e,{exact:!0,path:"/contactus",component:function(){return Object(m.jsx)(C,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(m.jsx)(p.e,{exact:!0,path:"/aboutus",component:function(){return Object(m.jsx)(y,{leadersInfo:e.props.leaders})}}),Object(m.jsx)(p.d,{to:"/home"})]})},this.props.location.key)}),Object(m.jsx)(N,{})]})}}]),t}(n.Component),oe=Object(p.g)(Object(I.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(s,t,n,c){return e(K(s,t,n,c))},fetchDishes:function(){e((function(e){return e(J(!0)),fetch(b+"dishes").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e($(s))})).catch((function(s){return e(Z(s.message))}))}))},resetFeedbackForm:function(){e(w.actions.reset("feedback"))},fetchPromos:function(){e((function(e){return e(X(!0)),fetch(b+"promotions").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(se(s))})).catch((function(s){return e(ee(s.message))}))}))},fetchComments:function(){e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Q(s))})).catch((function(s){return e(V(s.message))}))}))},fetchLeaders:function(){e((function(e){return e(te(!0)),fetch(b+"leaders").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(ce(s))})).catch((function(s){return e(ne(s.message))}))}))},postFeedback:function(s,t,n,c,r,a,o){return e(function(e,s,t,n,c,r,a){return function(o){var i={firstname:e,lastname:s,telnum:t,email:n,agree:c,contactType:r,message:a};return i.date=(new Date).toISOString(),fetch(b+"feedback",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){var s="Feedback has been posted: "+JSON.stringify(e);alert(s)})).catch((function(e){console.log("Post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(s,t,n,c,r,a,o))}}}))(ae)),ie=t(8),le=t(20),je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,dishes:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case P:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errmess:null,dishes:s.payload});case R:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!0,errmess:null,dishes:[]});case q:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errmess:s.payload});default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errmess:null,comments:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case A:var t=s.payload;return Object(ie.a)(Object(ie.a)({},e),{},{comments:e.comments.concat(t)});case z:return Object(ie.a)(Object(ie.a)({},e),{},{errmess:null,comments:s.payload});case U:return Object(ie.a)(Object(ie.a)({},e),{},{errmess:s.payload});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,promotions:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case Y:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errmess:null,promotions:s.payload});case H:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!0,errmess:null,promotions:[]});case _:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errmess:s.payload});default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,leaders:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case W:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errmess:null,leaders:s.payload});case B:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!0,errmess:null,promotions:[]});case G:return Object(ie.a)(Object(ie.a)({},e),{},{isLoading:!1,errmess:s.payload});default:return e}},be=t(94),ue=t.n(be),Oe=t(95),xe=t.n(Oe),fe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},pe=Object(le.createStore)(Object(le.combineReducers)(Object(ie.a)({dishes:je,comments:de,leaders:he,promotions:me},Object(w.createForms)({feedback:fe}))),Object(le.applyMiddleware)(ue.a,xe.a));var ge=function(){return Object(m.jsx)(I.Provider,{store:pe,children:Object(m.jsx)(p.a,{children:Object(m.jsx)("div",{children:Object(m.jsx)(oe,{})})})})};t(171),t(172);a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(ge,{})}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.109e005b.chunk.js.map