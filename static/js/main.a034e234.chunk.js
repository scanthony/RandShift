(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(26)},17:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),u=(n(17),n(10)),l=n(2),i=n(4),s=n(3),p=n(5),m=(n(19),n(1)),h=n.n(m),f=(n(22),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("div",{className:"person",style:n.props.divStyle},r.a.createElement("h2",null,n.props.name),r.a.createElement("p",null,n.props.grp))},n}return Object(p.a)(t,e),t}(a.Component)),g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=n.props.hue,t={color:"hsl(".concat(e,", 25%, 25%)"),backgroundColor:"hsl(".concat(e,", 100%, 97%)")};return r.a.createElement("div",{className:"group"},n.props.persons.map(function(e){return r.a.createElement(f,{key:e,name:e,grp:n.props.groupName,divStyle:t})}))},n}return Object(p.a)(t,e),t}(a.Component),d=n(6),v=n.n(d),E=n(9),b=n.n(E),N=function(e,t){var n=v()("".concat(e,"-").concat(t),{algorithm:"sha1",encoding:"hex"});return n=v()(n,{algorithm:"sha1",encoding:"hex"})},Y=function(e,t){return e.sort(function(e,n){return N(t,e)<N(t,n)?-1:1})},w=function(e){var t=b.a.parse(document.location.search),n=Object.keys(t),a=n.filter(function(e){return"p"===e.slice(0,1)}),r=n.filter(function(e){return"n"===e.slice(0,1)}),o=n.filter(function(e){return"g"===e.slice(0,1)}),c=a.map(function(e){return t[e]});0===c.length&&(c=["\u5c0f\u660e","\u5c0f\u738b","\u5c0f\u674e","\u5c0f\u5f20","\u5c0f\u6587","\u5c0f\u8c22","\u5c0f\u90d1","\u5c0f\u6797"]);var u=r.map(function(e){return t[e]});0===u.length&&(u=["\u5de5\u4f5c\u533a-1","\u5de5\u4f5c\u533a-2"]);var l=o.map(function(e){return t[e]});return 0===l.length&&(l=["4-4"]),function(e,t,n){var a,r=e.length,o=t.length,c=n.length,u=0,l=0,i=[],s={groupName:"",persons:[]};for(a=0;a<r;a++)s.persons.push(e[a]),""===s.groupName&&(s.groupName=u<o?t[u]||" ":"Unnamed Group ".concat(v.a.sha1(Math.random()).slice(0,6).toUpperCase()),u+=1),l<c&&s.persons.length>=parseInt(n[l])&&(s.persons=s.persons.sort(function(e,t){return e<t?-1:1}),i.push(s),s={groupName:"",persons:[]},l+=1);return""!==s.groupName&&(s.persons=s.persons.sort(function(e,t){return e<t?-1:1}),i.push(s)),i.sort(function(e,t){return e.groupName<t.groupName?-1:1})}(Y(c,e),u.sort(),Y(l,e)[0].split("-"))},D=function(e){var t;if(e){var n="".concat(e.slice(0,4),"-").concat(e.slice(4,6),"-").concat(e.slice(6));t=h()("".concat(n," 16:56 +00:00"),"YYYY-MM-DD HH:mm Z").utc().locale("en")}else{var a=h()().format("YYYY-MM-DD");t=h()("".concat(a," 16:56 +00:00"),"YYYY-MM-DD HH:mm Z").utc().locale("en")}return t.isValid()?t.format("YYYY-MM-DD"):"ERROR: INVALID DATE"},O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={grouping:[],hueStart:Math.floor(360*Math.random()),timestamp:D(),inputValue:""},n.componentWillMount=function(){n.setState({grouping:w(n.state.timestamp)})},n.generateHue=function(){var e=Math.max(n.state.grouping.length,2);return e=Math.min(e,6),n.state.grouping.map(function(t,a){return Object(u.a)({},t,{hue:(n.state.hueStart+360*a/(e+.5))%360})})},n.handleSubmit=function(e){e.preventDefault(),n.generateNewResult()},n.generateNewResult=function(){var e=D(n.state.inputValue.toString());n.setState({timestamp:e,grouping:w(e)})},n.handleInputChange=function(e){var t=e.target.value;n.setState({inputValue:t},function(){8===t.length&&n.generateNewResult()})},n.render=function(){var e=n.generateHue();return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"RandShift\u5728\u7ebf\u968f\u673a\u5206\u7ec4"),r.a.createElement("p",null,"\u4e00\u4e2a\u6309\u7167\u65e5\u671f\u548c\u59d3\u540d\u5bf9\u4eba\u5458\u8fdb\u884c\u968f\u673a\u5206\u7ec4\u7684\u5de5\u5177"),r.a.createElement("form",{className:"input-form",onSubmit:n.handleSubmit},r.a.createElement("span",null,"\u8f93\u5165\u5f85\u67e5\u8be2\u7684\u65e5\u671f:"),r.a.createElement("br",null),r.a.createElement("input",{id:"input-date",type:"number",onChange:n.handleInputChange,placeholder:"\u683c\u5f0f\uff1a20181130",value:n.state.inputValue})),"ERROR: INVALID DATE"===n.state.timestamp?r.a.createElement("br",null):r.a.createElement("p",{className:"date"},"\u5b9e\u9645\u67e5\u8be2\u65e5\u671f\uff1a",r.a.createElement("br",null),h()("".concat(n.state.timestamp,"  16:56 +00:00"),"YYYY-MM-DD HH:mm Z").utc().locale("zh-cn").format("LL"))),"ERROR: INVALID DATE"===n.state.timestamp?r.a.createElement("p",null,"\u65e5\u671f\u9519\u8bef\uff01"):r.a.createElement("div",null,e.map(function(e){return r.a.createElement(g,{key:e.groupName,groupName:e.groupName,persons:e.persons,hue:e.hue})})),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/scanthony/RandShift"},"\u5728GitHub\u67e5\u770b\u672c\u9879\u76ee\u7684\u5f00\u6e90\u4ee3\u7801\u3002"))))},n}return Object(p.a)(t,e),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.a034e234.chunk.js.map