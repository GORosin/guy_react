(this.webpackJsonpguy_react=this.webpackJsonpguy_react||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a,i,r,c,o,s,h,l=n(0),d=n.n(l),p=n(18),j=n.n(p),b=(n(45),n(46),n(47),n(20)),u=n(5),m=n(10),g=n(61),f=n(62),x=n(11),O=n(1),v=x.a.div(a||(a=Object(m.a)(["\n  .navbar { background-color: #222; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  .form-center {\n    position: absolute !important;\n    left: 25%;\n    right: 25%;\n  }\n"]))),y=function(){return Object(O.jsx)(v,{children:Object(O.jsxs)(g.a,{expand:"lg",children:[Object(O.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(f.a,{className:"ml-auto",children:[Object(O.jsx)(f.a.Item,{children:Object(O.jsx)(f.a.Link,{href:"/guy_react",children:"Home"})}),Object(O.jsx)(f.a.Item,{children:Object(O.jsx)(f.a.Link,{href:"/about",children:"About"})})]})})]})})},k=n.p+"static/media/guy.4de86679.jpg",w=n.p+"static/media/atlas_detector.b5a33df4.png",I=x.a.div(i||(i=Object(m.a)(["\n  margin-left: 5em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n  background-color:  #000066;\n"]))),C=function(e){return Object(O.jsxs)(I,{children:[Object(O.jsx)("img",{src:k,id:"guy",alt:"guy"}),Object(O.jsx)("h1",{children:"Guy Rosin"}),Object(O.jsx)("p",{children:"I'm a physics Ph.D. student in University of Massachusetts, Amherst, doing experimental particle physics in the ATLAS collaberation. My dissertation focuses on the Inner Tracker project and a measurement of the Higgs to WW decay cross sections. The Inner tracker (ITk) is the largest planned overhaul of the ATLAS detector for the next phase of the Large Hadron Collider run.I worked in Brookhaven National lab with leading ATLAS scientists to research and develope the silicon strip detectors that will make up the large radius portion of ITk."}),Object(O.jsx)("hr",{}),Object(O.jsx)("img",{src:w,id:"block",alt:"atlas"}),Object(O.jsx)("p",{children:"Studies of the Higgs Boson is one of the most promising potential windows into new physics beyond the standard model. Since most direct searches for new particles or interactions have not yielded any results, the next possible findings of new physics could be from new hidden interactions with standard model particles like the Higgs. To study these potential hidden iteractions, we must make accurate measurements of the propeties of the Higgs boson. This analysis promises to be the most accurate measurement of the Higgs decay rate, with larger statistics and new analysis methods levarging advances in machine learning."}),Object(O.jsx)("p",{children:"I love hobbyist electronics, statistics and data. Some of my current pojects are a raspberry pi weather station for my backyard chicken coop and developing a constume resnet for protein predictions in a kaggle competition. "}),Object(O.jsx)("hr",{})]})},F=x.a.div(r||(r=Object(m.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]))),S=function(){return Object(O.jsxs)(F,{children:[Object(O.jsx)("h2",{children:"About Page"}),Object(O.jsx)("p",{children:"State at ceiling lay on arms while you're using the keyboard so this human feeds me."}),Object(O.jsx)("p",{children:"I am a kitty cat, sup, feed me, no cares in the world"}),Object(O.jsx)("p",{children:"Meow meow, I tell my human purr for no reason but to chase after"})]})},A=x.a.div(c||(c=Object(m.a)(["\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n"]))),T=function(){return Object(O.jsx)(A,{children:Object(O.jsx)("h2",{children:"No Match"})})},B=n(23),N=n(24),H=n(26),L=n(25),P=x.a.div(o||(o=Object(m.a)(["\n  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n  height: 100%;\n  width: 80px;     /* Set the width of the sidebar */\n  z-index: 1;      /* Stay on top of everything */\n  top: 3.4em;      /* Stay at the top */\n  background-color: #222; /* Black */\n  overflow-x: hidden;     /* Disable horizontal scroll */\n  padding-top: 10px;\n"]))),M=function(e){Object(H.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(B.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleClick=function(){var t=e.props,n=t.path;(0,t.onItemClick)(n)},e}return Object(N.a)(n,[{key:"render",value:function(){var e=this.props.active;return Object(O.jsx)(D,{active:e,children:Object(O.jsx)(b.a,{to:this.props.path,className:this.props.css,onClick:this.handleClick,children:Object(O.jsx)(G,{})})})}}]),n}(d.a.Component),_=function(e){Object(H.a)(n,e);var t=Object(L.a)(n);function n(e){var a;return Object(B.a)(this,n),(a=t.call(this,e)).onItemClick=function(e){a.setState({activePath:e})},a.state={activePath:e.location.pathname,items:[{path:"/guy_react",name:"Home",css:"fa fa-fw fa-home",key:1},{path:"/about",name:"About",css:"fa fa-fw fa-clock",key:2},{path:"/NoMatch",name:"NoMatch",css:"fas fa-hashtag",key:3}]},a}return Object(N.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.items,a=t.activePath;return Object(O.jsx)(P,{children:n.map((function(t){return Object(O.jsx)(M,{path:t.path,name:t.name,css:t.css,onItemClick:e.onItemClick,active:t.path===a},t.key)}))})}}]),n}(d.a.Component),z=Object(u.f)(_),D=x.a.div(s||(s=Object(m.a)(["\n  height: 70px;\n  width: 75px; /* width must be same size as NavBar to center */\n  text-align: center; /* Aligns <a> inside of NavIcon div */\n  margin-bottom: 0;   /* Puts space between NavItems */\n  a {\n    font-size: 2.7em;\n    color: ",";\n    :hover {\n      opacity: 0.7;\n      text-decoration: none; /* Gets rid of underlining of icons */\n    }  \n  }\n"])),(function(e){return e.active?"white":"#9FFFCB"})),G=x.a.div(h||(h=Object(m.a)(["\n"]))),J=function(e){Object(H.a)(n,e);var t=Object(L.a)(n);function n(){return Object(B.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return Object(O.jsx)(z,{})}}]),n}(d.a.Component);var W=function(){return Object(O.jsx)(d.a.Fragment,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(y,{}),Object(O.jsx)(J,{}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/guy_react",component:C}),Object(O.jsx)(u.a,{path:"/about",component:S}),Object(O.jsx)(u.a,{component:T})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};j.a.render(Object(O.jsx)(d.a.StrictMode,{children:Object(O.jsx)(W,{})}),document.getElementById("root")),E()}},[[58,1,2]]]);
//# sourceMappingURL=main.37c47e5f.chunk.js.map