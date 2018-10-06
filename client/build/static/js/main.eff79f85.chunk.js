(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},25:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),i=(a(23),a(12)),s=a(13),o=a(14),u=a(16),d=a(15),m=a(17),h=a(2),f=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center",backgroundColor:"#20315A",color:"white"},className:"jumbotron"},r.a.createElement("h1",{className:"text-center"},r.a.createElement("strong",null,r.a.createElement("i",{className:"fa fa-newspaper-o"}),t)))},v=function(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)},g=function(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},p=function(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},E=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))},b=function(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn"}),e.children)},w=(a(25),function(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}),N=function(e){return r.a.createElement("li",{className:"list-group-item"},e.children)},A=a(3),S=a.n(A),y={getArticles:function(e,t,a){console.log(e,t,a);if(parseInt(t)){console.log("says there's a startYear");var n="?begin_date="+t+"0101"}else n="";if(parseInt(a)){console.log("says there's an endYear");var r="?end_date="+a+"0101"}else r="";var c="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q="+e+n+r;return console.log(c),S.a.get(c)},getSavedArticles:function(){return S.a.get("/api/articles/")},deleteArticle:function(e){return S.a.delete("/api/articles/"+e)},saveArticle:function(e){return S.a.post("/api/articles",e)}},k=(a(46),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],savedArticles:[],searchTerm:"Search here",startYear:"",endYear:""},a.handleSearchSubmit=function(e){e.preventDefault(),a.scrapeArticles()},a.handleArticleSave=function(e){e.preventDefault(),console.log(e.target),console.log(e.target.value);var t=a.state.articles[e.target.value];y.saveArticle({title:t.snippet,date:t.pub_date,url:t.web_url})},a.handleArticlesClear=function(e){e.preventDefault(),a.setState({articles:[]})},a.handleArticleDelete=function(e){e.preventDefault(),y.deleteArticle(e.target.value)},a.scrapeArticles=function(){y.getArticles(a.state.searchTerm,a.state.startYear,a.state.endYear).then(function(e){return a.setState({articles:e.data.response.docs,searchTerm:"",startYear:"",endYear:""})}).catch(function(e){return console.log(e)})},a.loadSavedArticles=function(){y.getSavedArticles().then(function(e){this.setState({savedArticles:e.data})}.bind(Object(h.a)(Object(h.a)(a))))},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(i.a)({},n,r))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadSavedArticles()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(g,{fluid:!0},r.a.createElement(f,null,"New York Times Search"),r.a.createElement(p,null,r.a.createElement(v,{size:"sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("strong",null,r.a.createElement("i",{className:"fa fa-list-alt"})," ",this.state.searchTerm," Search Parameters")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,"Search Term:"),r.a.createElement(E,{value:this.state.searchTerm,onChange:this.handleInputChange,name:"searchTerm"}),r.a.createElement(E,{value:this.state.startYear,onChange:this.handleInputChange,name:"startYear",type:"date",placeholder:"Start Year (Optional):"}),r.a.createElement(E,{value:this.state.endYear,type:"date",onChange:this.handleInputChange,name:"endYear",placeholder:"End Year (Optional):"}),r.a.createElement(b,{onClick:this.handleSearchSubmit,name:"searchButton",className:"btn-success"},"Search"),r.a.createElement(b,{onClick:this.handlaArticlesClear,name:"clearButton",className:"btn-danger"},"Clear Results"))))),r.a.createElement(p,null,r.a.createElement(v,{size:"sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("strong",null,r.a.createElement("i",{className:"fa fa-table"})," Top Articles")),r.a.createElement("div",{className:"card-body",id:"article-section"},r.a.createElement(w,null,this.state.articles.map(function(t,a){return r.a.createElement(N,{key:t._id},r.a.createElement("a",{href:t.web_url},r.a.createElement("h2",null,t.snippet)),r.a.createElement(b,{value:a,onClick:e.handleArticleSave,name:"saveButton",className:"btn-success"},"Save"),r.a.createElement("p",null,t.pub_date))})))))),r.a.createElement(p,null,r.a.createElement(v,{size:"sm-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("strong",null,r.a.createElement("i",{className:"fa fa-table"})," Saved Articles")),r.a.createElement("div",{className:"card-body",id:"article-section2"},r.a.createElement(w,null,this.state.savedArticles.map(function(t){return r.a.createElement(N,{key:t._id},r.a.createElement("a",{href:t.url},r.a.createElement("h3",null,t.title)),r.a.createElement("p",null,t.date),r.a.createElement(b,{value:t._id,onClick:e.handleArticleDelete,name:"deleteButton",className:"btn-danger"},"Delete"))}))))))))}}]),t}(n.Component)),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");C?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):j(e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.eff79f85.chunk.js.map