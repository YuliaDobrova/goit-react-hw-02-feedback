(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),o=c.n(s),i=c(4),r=c(2),b=c(6),d=c(7),u=c(11),j=c(10),l=c(8),h=c.n(l),O=c(0),k=function(e){var t=e.options,c=e.leaveFeedback;return Object(O.jsx)("div",{children:t.map((function(e){return Object(O.jsx)("button",{className:h.a.feedbackButton,type:"button",name:e,onClick:c,children:e.toUpperCase()},e)}))})},x=c(9),f=c.n(x),g=function(e){var t=e.message;return Object(O.jsx)("p",{className:f.a.messageText,children:t})},v=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.countTotalFeedback,s=e.countPositiveFeedbackPercentage;return Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Good:",t]}),Object(O.jsxs)("li",{children:["Neutral:",c]}),Object(O.jsxs)("li",{children:["Bad:",n]}),Object(O.jsxs)("li",{children:["Total:",a()]}),Object(O.jsxs)("li",{children:["Positive feedback:",s().toFixed(2),"%"]})]})},F=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(b.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(r.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return 0===e.countTotalFeedback()?0:e.state.good/e.countTotalFeedback()*100},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:" Please leave feedback "}),Object(O.jsx)(k,{leaveFeedback:this.leaveFeedback,options:Object.keys(this.state)})]}),Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{children:"Statistics"}),this.countTotalFeedback()?Object(O.jsx)(v,Object(i.a)(Object(i.a)({},this.state),{},{countTotalFeedback:this.countTotalFeedback,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage})):Object(O.jsx)(g,{message:"No feedback given"})]})]})}}]),c}(n.Component),p=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(F,{})})};c(17);o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root"))},8:function(e,t,c){e.exports={feedbackButton:"FeedbackOptions_feedbackButton__2N3gB"}},9:function(e,t,c){e.exports={messageText:"Notification_messageText__2zmQL"}}},[[18,1,2]]]);
//# sourceMappingURL=main.17e8a641.chunk.js.map