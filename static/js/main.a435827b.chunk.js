(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),s=a.n(r),l=a(4),o=a(5),i=a(7),u=a(6),d=a(1),m=a.n(d),p=(a(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selected:"-"},e.selectHandler=function(t){e.setState({selected:t.target.innerText})},e.clearHandler=function(){e.setState({selected:"-"})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.selected;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"heading"},"Selected good: ".concat(this.state.selected)),"-"!==t&&c.a.createElement("button",{type:"button",className:m()("button","button--clear"),onClick:this.clearHandler},"X"),c.a.createElement("div",{className:"goods"},p.map((function(a){return c.a.createElement("button",{type:"button",key:a,className:m()("button",{"button--selected":a===t}),onClick:e.selectHandler},a)}))))}}]),a}(c.a.Component);s.a.render(c.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a435827b.chunk.js.map