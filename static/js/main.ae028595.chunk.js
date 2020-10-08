(this["webpackJsonpcoursera-react"]=this["webpackJsonpcoursera-react"]||[]).push([[0],{142:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),o=(t(91),t(92),t(93),t(94),t(18)),i=t(19),s=t(20),m=t(21),u=t(144),d=t(145),h=t(146),E=t(147),g=t(148),f=t(149),p=function(e){var a=e.item;return r.a.createElement(u.a,null,r.a.createElement(d.a,{src:a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(E.a,null,a.name),a.designation?r.a.createElement(g.a,null,a.designation):null,r.a.createElement(f.a,null,a.description)))},b=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(p,{item:e.dishes})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(p,{item:e.promotions})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(p,{item:e.leaders}))))},v=t(150),N=t(151),y=t(152),w=t(153),k=t(7),O=function(e){var a=e.leader;return r.a.createElement(v.a,{tag:"li"},r.a.createElement(v.a,{left:!0,middle:!0},r.a.createElement(v.a,{object:!0,src:a.image,alt:a.name})),r.a.createElement(v.a,{body:!0,className:"ml-5"},r.a.createElement(v.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("p",null,a.description)))},C=function(e){var a=e.leaders.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 mt-5"},r.a.createElement(O,{leader:e}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(y.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to"," ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(w.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(h.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(h.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(v.a,{list:!0},a))))},I=t(154),M=function(e){var a=e.dish;return r.a.createElement(u.a,null,r.a.createElement(k.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:a.image,alt:a.name}),r.a.createElement(I.a,null,r.a.createElement(E.a,null,a.name))))},x=function(e){var a=e.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(M,{dish:e}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(y.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},j=t(15),S=t(155),F=t(156),T=t(157),L=t(158),A=t(159),R=t(160),Z=t(161),q=t(162),z=t(171),H=t(163),P=t(164),U=t(165),W=t(166),B=t(167),D=t(168),J=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={isNavOpen:!1,isModalOpen:!1},e.toggleNav=e.toggleNav.bind(Object(j.a)(e)),e.toggleModal=e.toggleModal.bind(Object(j.a)(e)),e.handleLogin=e.handleLogin.bind(Object(j.a)(e)),e}return Object(i.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember: ").concat(this.remember.checked)),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(F.a,{onClick:this.toggleNav}),r.a.createElement(T.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(L.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(A.a,{navbar:!0},r.a.createElement(R.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(R.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(R.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(R.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(A.a,{className:"ml-auto",navbar:!0},r.a.createElement(R.a,null,r.a.createElement(Z.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(q.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(z.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(H.a,{toggle:this.toggleModal},"Login"),r.a.createElement(P.a,null,r.a.createElement(U.a,{onSubmit:this.handleLogin},r.a.createElement(W.a,null,r.a.createElement(B.a,{htmlFor:"username"},"Username"),r.a.createElement(D.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(W.a,null,r.a.createElement(B.a,{htmlFor:"password"},"Password"),r.a.createElement(D.a,{type:"text",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(W.a,{check:!0},r.a.createElement(B.a,{check:!0}),r.a.createElement(D.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me"),r.a.createElement(Z.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component),Y=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},G=t(169),K=t(170),V=t(11),$=function(e){return e&&e.length},_=function(e){return function(a){return!a||a.length<=e}},Q=function(e){return function(a){return a&&a.length>=e}},X=function(e){return!isNaN(Number(e))},ee=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ae=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e}return Object(i.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current state is : ".concat(JSON.stringify(e))),alert("Current state is : ".concat(JSON.stringify(e)))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(y.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},"`",r.a.createElement("h3",null,"Send us your Feedback"),"`"),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(V.LocalForm,{onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(G.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:".firstname",md:2},"First Name"),r.a.createElement(K.a,{md:10},r.a.createElement(V.Control.text,{model:".firstname",id:"firstname",name:"firstname",className:"form-control",placeholder:"First Name",validators:{required:$,minLength:Q(3),maxLength:_(15)}}),r.a.createElement(V.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than two characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(G.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:".lastname",md:2},"Last Name"),r.a.createElement(K.a,{md:10},r.a.createElement(V.Control.text,{model:".lastname",id:"lastname",name:"lastname",className:"form-control",placeholder:"Last Name",validators:{required:$,minLength:Q(3),maxLength:_(15)}}),r.a.createElement(V.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than two characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(G.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:".telnum",md:2},"Contact Tel."),r.a.createElement(K.a,{md:10},r.a.createElement(V.Control.text,{model:".telnum",id:"telnum",name:"telnum",className:"form-control",placeholder:"Tel Number",validators:{required:$,minLength:Q(3),maxLength:_(15),isNumber:X}}),r.a.createElement(V.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than two numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(G.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:".email",md:2},"Email"),r.a.createElement(K.a,{md:10},r.a.createElement(V.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:$,validEmail:ee}}),r.a.createElement(V.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required. ",validEmail:"Invalid email address"}}))),r.a.createElement(G.a,{className:"form-group"},r.a.createElement(K.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(B.a,{check:!0},r.a.createElement(V.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(K.a,{md:{size:3,offset:1}},r.a.createElement(V.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(G.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(K.a,{md:10},r.a.createElement(V.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(G.a,{className:"form-group"},r.a.createElement(K.a,{md:{size:10,offset:2}},r.a.createElement(Z.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(r.a.Component),te=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={isNavOpen:!1,isModalOpen:!1},e.toggleNav=e.toggleNav.bind(Object(j.a)(e)),e.toggleModal=e.toggleModal.bind(Object(j.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e}return Object(i.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.addComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Z.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement("div",{className:"col-6"},r.a.createElement(z.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(H.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(P.a,null,r.a.createElement(V.LocalForm,{onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(G.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:".rating",className:"ml-3"},"Rating"),r.a.createElement(K.a,{md:12},r.a.createElement(V.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(G.a,{className:"form-group"},r.a.createElement(B.a,{htmlFor:".author",className:"ml-3"},"Your Name"),r.a.createElement(K.a,{md:12},r.a.createElement(V.Control.text,{model:".author",id:"author",name:"author",className:"form-control",validators:{required:$,minLength:Q(3),maxLength:_(15)}}),r.a.createElement(V.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required. ",minLength:"Your name Must be greater than two characters",maxLength:"Your name Must be 15 characters or less"}}))),r.a.createElement(G.a,{check:!0},r.a.createElement(B.a,{htmlFor:".comment",className:"ml-3"},"Comment"),r.a.createElement(K.a,{md:12},r.a.createElement(V.Control.textarea,{model:".comment",rows:"10",id:"comment",name:"comment",className:"form-control"}))),r.a.createElement("br",null),r.a.createElement(G.a,{className:"form-group"},r.a.createElement(K.a,{md:10},r.a.createElement(Z.a,{type:"submit",color:"primary"},"Submit"))))))))}}]),t}(r.a.Component),ne=function(e){var a=e.dish;return null!=a?r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(d.a,{width:"100%",src:a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(E.a,null,a.name),r.a.createElement(f.a,null,a.description)))):r.a.createElement("div",null)},re=function(e){var a=e.comments,t=e.addComment,n=e.dishId;if(null==a)return r.a.createElement("div",null);var l=a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", \xa0",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(e.date))))}));return r.a.createElement("div",null,r.a.createElement("h4",null," Comments "),r.a.createElement("ul",{className:"list-unstyled"},l),r.a.createElement(te,{dishId:n,addComment:t}))},le=function(e){return null==e.dish?r.a.createElement("div",null):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(k.b,{to:"/menu"},"Menu")),r.a.createElement(y.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(ne,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(re,{comments:e.comments,addComment:e.addComment,dishId:e.dish.id}))))},ce=t(8),oe=t(23),ie=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.call(this)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(ce.d,null,r.a.createElement(ce.b,{path:"/home",component:function(){return r.a.createElement(b,{dishes:e.props.dishes.filter((function(e){return e.featured}))[0],promotions:e.props.promotions.filter((function(e){return e.featured}))[0],leaders:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),r.a.createElement(ce.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(C,{leaders:e.props.leaders})}}),r.a.createElement(ce.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(x,{dishes:e.props.dishes})}}),r.a.createElement(ce.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(le,{dish:e.props.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],comments:e.props.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),addComment:e.props.addComment})}}),r.a.createElement(ce.b,{exact:!0,path:"/contactus",component:ae}),r.a.createElement(ce.a,{to:"/home"})),r.a.createElement(Y,null))}}]),t}(n.Component),se=Object(ce.g)(Object(oe.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{addComment:function(a,t,n,r){return e(function(e,a,t,n){return{type:"ADD_COMMENT",payload:{dishId:e,rating:a,author:t,comment:n}}}(a,t,n,r))}}}))(ie)),me=(t(142),t(26)),ue=[{id:0,name:"Uthappizza",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;return a.type,e},he=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENT":var t=a.payload;return t.id=e.length,t.date=(new Date).toISOString(),e.concat(t);default:return e}},ge=[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1?arguments[1]:void 0;return a.type,e},pe=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;return a.type,e},ve=Object(me.createStore)(Object(me.combineReducers)({dishes:de,comments:Ee,promotions:fe,leaders:be})),Ne=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(oe.Provider,{store:ve},r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(se,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,a,t){e.exports=t(143)},94:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.ae028595.chunk.js.map