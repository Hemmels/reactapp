(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/logo.8d277a21.PNG"},32:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(23),r=n.n(i),c=n(8),o=n(9),s=n(12),u=n(11),h=n(10),m=n(7),g=n(24),d=n(6);function p(){var e=Object(m.a)(["\n\tmin-width: 80px;\n\twidth: 15%;\n"]);return p=function(){return e},e}function f(){var e=Object(m.a)(["\n\tmax-width: 120px;\n"]);return f=function(){return e},e}function b(){var e=Object(m.a)(["\n\tcolor: #647eed;\n\tvertical-align: middle;\n\twidth: 40%;\n\ttext-align: left;\n\tfont-weight: 500;\n\tmargin-bottom: 0;\n\tdisplay: flex;\n    align-items: center;\n"]);return b=function(){return e},e}function v(){var e=Object(m.a)(["\n\tmargin: 1em; \n\tmax-width: 95%;\n"]);return v=function(){return e},e}function y(){var e=Object(m.a)(["\n\tbackground-color: pink;\n\twidth: 40%;\n\tborder-width:5px;  \n\tborder-style:groove;\n\tmargin: 0 auto;\n"]);return y=function(){return e},e}function k(){var e=Object(m.a)(["\n\tdisplay: inline-block;\n\tcolor: #647eed;\n\tfont-family: 'Mulish';\n\tmargin: 0em;\n"]);return k=function(){return e},e}function E(){var e=Object(m.a)(["\n\tmargin: 1em;\n\tmax-width: 4em;\n    vertical-align: middle;\n"]);return E=function(){return e},e}function j(){var e=Object(m.a)(["\n\twidth: 95%;\n\tdisplay: inline-block;\n\tcolor: cornflowerblue;\n\tmargin-bottom: .2rem;\n\tfont-family: 'Mulish';\n\tfont-size: 2em;\n\tfont-weight: 500;\n"]);return j=function(){return e},e}function O(){var e=Object(m.a)(["\n\tline-height: 15px;\n    vertical-align: middle;\n\ttext-align: center;\n"]);return O=function(){return e},e}var w=d.a.div(O()),x=d.a.h1(j()),C=d.a.img(E()),P=d.a.h3(k()),S=d.a.form(y()),U=d.a.div(v()),M=d.a.label(b()),L=d.a.input(f()),T=d.a.button(p()),A=n(46),H=n(43),I=n(47),N=n(28);function G(){var e=Object(m.a)(["\n\tcolor: #647eed;\n\tvertical-align: middle;\n\twidth: 40%;\n\tline-height: 2em;\n\ttext-align: left;\n"]);return G=function(){return e},e}var R=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={newUrl:"",allEnabled:!1,pinging:a.props.pinging},a.handleChange=a.handleChange.bind(Object(s.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(g.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.addNewUrl()}},{key:"addNewUrl",value:function(){var e={method:"POST",body:this.state.newUrl};fetch("/api/endpoint/add",e).then((function(e){return e.json()}))}},{key:"enableAll",value:function(){var e=this.state.allEnabled;fetch("/api/endpoint/enableall",{method:"POST",body:e}).then((function(e){return e.json()})),this.setState({newUrl:this.state.newUrl,allEnabled:!e,pinging:this.state.pinging})}},{key:"togglePinging",value:function(){this.setState((function(e){return{newUrl:e.newUrl,allEnabled:e.allEnabled,pinging:!e.pinging}}))}},{key:"render",value:function(){var e,t=this;e=this.state.pinging?l.a.createElement(A.a.Label,{as:M,style:{color:"lightseagreen"}},"Pinging"):l.a.createElement(A.a.Label,{as:M,style:{color:"darkred"}},"Off");var n=l.a.createElement(A.a.Label,{as:M},this.state.allEnabled?"Disable all":"Enable all");return l.a.createElement(A.a,{as:S,onSubmit:this.handleSubmit},l.a.createElement(x,null,"Admin Panel"),l.a.createElement(H.a,{as:U},e,l.a.createElement(I.a,{as:T,type:"button",onClick:function(){t.togglePinging(),t.props.pingHandler()}},"Toggle")),l.a.createElement(H.a,{as:U},l.a.createElement(N.a,{as:L,type:"text",name:"newUrl",value:this.state.newUrl,onChange:this.handleChange,placeholder:"Add url to ping"}),l.a.createElement(H.a.Append,null,l.a.createElement(I.a,null,"Add"))),l.a.createElement(H.a,{as:U},l.a.createElement(A.a.Label,{as:M},n),l.a.createElement(I.a,{as:T,type:"button",onClick:function(){return t.enableAll()}},"Go")))}}]),n}(a.Component),D=(d.a.label(G()),R),F=n(15),W=n(44),J=n(45),z=n(29);function B(){var e=Object(m.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tfont-family: 'Mulish';\n\theight: 2em;\n\twidth: 5em;\n\tmargin: 0em;\n\tmargin-top: 1em;\n"]);return B=function(){return e},e}function q(){var e=Object(m.a)(["\n\tborder-style: groove;\n\tborder-width: 2px;\n\theight: 2em;\n\twidth: 17em;\n\tbackground-color: ",";\n    vertical-align: middle;\n\ttext-align: center;\n\tcolor: white;\n\tfont-family: 'Mulish';\n\tfont-weight: 100;\n\tmargin-left: 2em;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);return q=function(){return e},e}var K=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e){return this.props.latency!==e.latency}},{key:"render",value:function(){var e,t=this.props.latency;return e=999===t?l.a.createElement(Q,{theme:{background:"#808080"}},t,"ms"):t<100?l.a.createElement(Q,{theme:{background:"#409920"}},t,"ms"):t<300?l.a.createElement(Q,{theme:{background:"#999120"}},t,"ms"):l.a.createElement(Q,{theme:{background:"#994020"}},t,"ms"),l.a.createElement("div",null,l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Mulish",rel:"stylesheet"}),l.a.createElement("div",null,l.a.createElement(V,null,this.props.name),e))}}]),n}(a.Component),Q=d.a.div(q(),(function(e){return e.theme.background})),V=d.a.p(B()),X=K,Y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=Object.entries(this.props.latencyMap).map((function(e,t){var n=Object(F.a)(e,2),a=n[0],i=n[1];return t%4===0?l.a.createElement(X,{key:t,name:a,latency:i}):null})),t=Object.entries(this.props.latencyMap).map((function(e,t){var n=Object(F.a)(e,2),a=n[0],i=n[1];return t%4===1?l.a.createElement(X,{key:t,name:a,latency:i}):null})),n=Object.entries(this.props.latencyMap).map((function(e,t){var n=Object(F.a)(e,2),a=n[0],i=n[1];return t%4===2?l.a.createElement(X,{key:t,name:a,latency:i}):null})),a=Object.entries(this.props.latencyMap).map((function(e,t){var n=Object(F.a)(e,2),a=n[0],i=n[1];return t%4===3?l.a.createElement(X,{key:t,name:a,latency:i}):null}));return l.a.createElement(W.a,{fluid:!0},l.a.createElement(J.a,null,l.a.createElement(z.a,{xs:8,sm:6,md:4,lg:3},e),l.a.createElement(z.a,{xs:8,sm:6,md:4,lg:3},t),l.a.createElement(z.a,{xs:8,sm:6,md:4,lg:3},n),l.a.createElement(z.a,{xs:8,sm:6,md:4,lg:3},a)))}}]),n}(a.Component),Z=n(30),$=n.n(Z),_=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).endpoints=function(){fetch("/api/endpointNames").then((function(e){return e.ok||console.log("Failed getting endpoint names: "+e.statusText),e.json()})).then((function(t){e.setState({endpointNames:t})}))},e.doLatencyChecks=function(){fetch("/api/latencyCheck").then((function(t){return t.ok||(console.log("Failed getting endpoints data: "+t.statusText+"; is the server running?"),clearInterval(e.interval),e.setState((function(e){return{latencyCheck:e.latencyCheck,pinging:!1,newUrl:e.newUrl}})),console.log("Pings stopped; state's pinging is: "+e.state.pinging),e.adminPanelRef.current.togglePinging()),t.json()})).then((function(t){e.setState({latencyCheck:t})}))},e.state={latencyCheck:[],pinging:!0,newUrl:""},e.adminPanelRef=l.a.createRef(),e.pingHandler=e.pingHandler.bind(Object(s.a)(e)),e}return Object(o.a)(n,[{key:"pingHandler",value:function(){this.setState((function(e){return{latencyCheck:e.latencyCheck,pinging:!e.pinging,newUrl:e.newUrl}}),this.initPings)}},{key:"callPeopleServices",value:function(){var e=this;fetch("https://swapi.dev/api/people/?format=json").then((function(e){return e.ok||console.log("Failed getting swapi data: "+e.statusText),e.json()})).then((function(t){console.log("SWAPI data fetched; there are "+t.results.length),e.setState({numSWPeople:t.results.length})})).catch((function(e){console.log(e)})),fetch("https://ghibliapi.herokuapp.com/people/?format=json").then((function(e){return e.ok||console.log("Failed getting Ghibli data: "+e.statusText),e.json()})).then((function(t){console.log("Ghibli data fetched; there are "+t.length),e.setState({numGhibPeople:t.length})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.endpoints(),this.doLatencyChecks(),this.initPings()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),console.log("Page interval cleared")}},{key:"shouldComponentUpdate",value:function(e){return this.state.pinging!==e.pinging}},{key:"initPings",value:function(){var e=this;this.state.pinging?(console.log("Restarted 5s pings"),this.interval=setInterval((function(){return e.doLatencyChecks()}),5e3)):(clearInterval(this.interval),console.log("Pings manually turned off"))}},{key:"render",value:function(){var e=null!=this.state&&null!=this.state.endpointList?this.state.endpointNames.length:0;return l.a.createElement("div",null,l.a.createElement(w,null,l.a.createElement("div",null,l.a.createElement(C,{src:$.a,alt:"Logo"}),l.a.createElement("div",null,l.a.createElement(x,null,"Service Status Dash"),l.a.createElement(P,null,"Page refreshes every 5s ",e>0?"; There are "+e+" endpoints":"")),l.a.createElement(Y,{latencyMap:this.state.latencyCheck}))),l.a.createElement("br",null),l.a.createElement(w,null,l.a.createElement(D,{pingHandler:this.pingHandler,pinging:this.state.pinging,ref:this.adminPanelRef})))}}]),n}(a.Component);r.a.render(l.a.createElement(_,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.7e66a456.chunk.js.map