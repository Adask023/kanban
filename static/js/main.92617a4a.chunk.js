(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),c=s(7),o=s.n(c),i=(s(13),s(3)),r=s(8),l=s(0),d=function(t){var e=t.inputText,s=t.setInputText,n=t.todos,a=t.setTodos,c=t.important,o=t.setImportant;return Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("div",{className:"logo-wrapper",children:Object(l.jsx)("p",{children:"Add task"})}),Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsx)("input",{className:"text-input",type:"text",onChange:function(t){s(t.target.value)},value:e,placeholder:"Task title..."}),Object(l.jsx)("button",{className:"add-task-btn",onClick:function(t){t.preventDefault(),e.length>2?(a([].concat(Object(r.a)(n),[{text:e,status:"to-do",id:1e3*Math.random(),important:c}])),s(""),o(!1),console.log(n)):alert("text is to short")},children:"+"})]}),Object(l.jsxs)("div",{className:"checkbox-wrapper",children:[Object(l.jsx)("input",{className:"form-checkbox",type:"checkbox",checked:c,onChange:function(t){o(t.target.checked)},name:"important"}),Object(l.jsx)("label",{htmlFor:"important",children:"important"})]})]})})},j=s(4),u=function(t){var e=t.todos,s=t.setTodos,n=t.task;return Object(l.jsxs)("li",{className:"todo-item",children:[Object(l.jsx)("div",{className:n.important?"task-text important-item":"task-text",style:"done"===n.status?{textDecoration:"line-through",color:"gray"}:null,children:n.text}),Object(l.jsxs)("div",{className:"button-container",children:[Object(l.jsx)("button",{onClick:function(){var t=e.filter((function(t){return t.id!==n.id}));s(t)},className:"delete-button",children:Object(l.jsx)("i",{className:"far fa-trash-alt"})}),"done"!==n.status?Object(l.jsx)("button",{onClick:function(){s(e.map((function(t){return t.id===n.id&&"to-do"===t.status?Object(j.a)(Object(j.a)({},t),{},{status:"in-progress"}):t.id===n.id&&"in-progress"===t.status?Object(j.a)(Object(j.a)({},t),{},{status:"done"}):t})))},className:"next-button",children:Object(l.jsx)("i",{className:"fas fa-arrow-right"})}):null]})]})},b=function(t){var e=t.todos,s=t.setTodos,n=t.setStatus,a=e.filter((function(t){return"to-do"===t.status})),c=e.filter((function(t){return"in-progress"===t.status})),o=e.filter((function(t){return"done"===t.status}));a.sort((function(t,e){return e.important-t.important})),c.sort((function(t,e){return e.important-t.important})),o.sort((function(t,e){return e.important-t.important}));var i=a.map((function(t){return Object(l.jsx)(u,{todos:e,setTodos:s,task:t,setStatus:n},t.id)})),r=c.map((function(t){return Object(l.jsx)(u,{todos:e,setTodos:s,task:t,setStatus:n},t.id)})),d=o.map((function(t){return Object(l.jsx)(u,{todos:e,setTodos:s,task:t,setStatus:n},t.id)}));return Object(l.jsxs)("div",{className:"lists-container",children:[Object(l.jsxs)("div",{className:"list-item to-do-list",children:[Object(l.jsx)("div",{className:"list-name",children:Object(l.jsx)("p",{children:"To do"})}),Object(l.jsx)("div",{className:"task-area",children:Object(l.jsx)("div",{children:i})})]}),Object(l.jsxs)("div",{className:"list-item in-progress-list",children:[Object(l.jsx)("div",{className:"list-name",children:Object(l.jsx)("p",{children:"In progress"})}),Object(l.jsx)("div",{className:"task-area",children:Object(l.jsx)("ul",{children:r})})]}),Object(l.jsxs)("div",{className:"list-item done-list",children:[Object(l.jsx)("div",{className:"list-name",children:Object(l.jsx)("p",{children:"Done"})}),Object(l.jsx)("div",{className:"task-area",children:Object(l.jsx)("ul",{children:d})})]})]})};s(15);var m=function(){var t=Object(n.useState)(""),e=Object(i.a)(t,2),s=e[0],a=e[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),r=o[0],j=o[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),O=m[0],x=m[1],p=Object(n.useState)(!1),h=Object(i.a)(p,2),f=h[0],v=h[1];Object(n.useEffect)((function(){N()}),[]),Object(n.useEffect)((function(){g()}),[r]);var g=function(){localStorage.setItem("todos",JSON.stringify(r))},N=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));j(t)}};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{inputText:s,setInputText:a,todos:r,setTodos:j,setStatus:x,important:f,setImportant:v}),Object(l.jsx)(b,{todos:r,setTodos:j,status:O,setStatus:x}),Object(l.jsx)("footer",{})]})},O=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;s(t),n(t),a(t),c(t),o(t)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.92617a4a.chunk.js.map