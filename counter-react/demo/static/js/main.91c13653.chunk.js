(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=n.n(c),o=(n(17),n(8)),u=n(7),l=n(1),i=n(2),m=n(5),b=n(3),d=n(4),h=n(6),p=function(e){var t=e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#home"},"Navbar"," ",r.a.createElement("span",{className:"badge badge-pill badge-danger"},t)))},v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.children,r.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-primary btn-sm m-2"},"+"),r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"btn btn-secondary btn-sm m-2"},"-"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.counters,a=e.onDelete,c=e.onIncrement,s=e.onDecrement;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t,className:"btn btn-success m-2 btn-sm"},"Reset"),n.map(function(e){return r.a.createElement(v,{onDelete:a,onIncrement:c,onDecrement:s,key:e.id,counter:e})}))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).state={counters:[{id:0,value:0},{id:1,value:0},{id:2,value:0},{id:3,value:0}]},n.handleIncrement=function(e){var t=Object(u.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(o.a)({},e),t[a].value++,n.setState({counters:t})},n.handleDecrement=function(e){var t=Object(u.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(o.a)({},e),t[a].value>0&&t[a].value--,n.setState({counters:t})},n.handleReset=function(){var e=Object(u.a)(n.state.counters);e.forEach(function(e){return e.value=0}),n.setState({counters:e})},n.handleDelete=n.handleDelete.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleDelete",value:function(e){var t=this.state.counters.filter(function(t){return t.id!==e});this.setState({counters:t})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{totalCounters:this.state.counters.filter(function(e){return e.value>0}).length}),r.a.createElement("main",{className:"container"},r.a.createElement(f,{onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,counters:this.state.counters})))}}]),t}(a.Component);s.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.91c13653.chunk.js.map