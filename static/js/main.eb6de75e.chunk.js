(this["webpackJsonpclock-deffirent-zone"]=this["webpackJsonpclock-deffirent-zone"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(3),s=n.n(i),o=(n(13),n(4)),l=n(5),j=n(7),d=n(6),h=n.p+"static/media/logo.103b5fa1.svg";n(14);function u(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("h2",{children:["It is ",e.namelocate," ",e.date,"."]})})}var b=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={date:new Date},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Hello, world!"}),Object(c.jsx)(u,{namelocate:"Viet Nam time",date:this.state.date.toLocaleString()}),Object(c.jsx)(u,{namelocate:"America/Los_Angeles time",date:this.state.date.toLocaleString("en-US",{timeZone:"America/Los_Angeles"})})]})}}]),n}(r.a.Component);var m=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),Object(c.jsx)("h1",{className:"App-title",children:"Welcome to My React Project"})]}),Object(c.jsxs)("p",{children:["Edit ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(c.jsx)(b,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.eb6de75e.chunk.js.map