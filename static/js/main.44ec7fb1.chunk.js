(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{188:function(e,t,a){e.exports=a(359)},193:function(e,t,a){},359:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(193),a(360)),i=a(53),s=a(362),m=(a(194),a(84)),d=a.n(m),u=a(76),p=a(103),h=a(86),E=a(177),b=a(181),f=a(179),g=a.n(f),v=a(33),I=function(){var e=Object(v.g)(),t=Object(v.h)(),a=l.a.useState({data:[],loading:!1}),n=Object(h.a)(a,2),r=n[0],c=n[1],o=l.a.useState(1),i=Object(h.a)(o,2),s=i[0],m=i[1],f=l.a.useState(""),I=Object(h.a)(f,2),w=I[0],y=I[1];console.log(t,"hit"),l.a.useEffect((function(){var e;(null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.search)&&y(t.state.search),window.localStorage.getItem("search")&&(console.log(window.localStorage.getItem("search")),y(window.localStorage.getItem("search")))}),[t]),l.a.useEffect((function(){x()}),[w]);function x(){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(d.a.mark((function e(){var t,a,n,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(w.length>0)){e.next=11;break}return c(Object(u.a)(Object(u.a)({},r),{},{loading:!0})),e.next=4,fetch("https://www.omdbapi.com/?apikey=9b3b1559&s=".concat(w,"&type=movie&page=").concat(s));case 4:return t=e.sent,e.next=7,t.json();case 7:"False"!==(a=e.sent).Response&&(n=a.Search,l=r.data,n.length>0&&(n.map((function(e,t){var a={key:e.imdbID,index:t,Poster:e.Poster,Title:e.Title,Type:e.Type,Year:e.Year,imdbID:e.imdbID};l.push(a)})),c(Object(u.a)(Object(u.a)({},r),{},{data:l})),m(s+1))),c(Object(u.a)(Object(u.a)({},r),{},{loading:!1})),window.localStorage.setItem("search",w);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(g.a,{style:{width:"20vw",display:"flex",float:"right",paddingBottom:"20px"},placeholder:"search movies",enterButton:"Search",size:"large",onSearch:function(e){!function(e){y(e),m(1)}(e),c({data:[],loading:!1})}})),l.a.createElement(b.a,{onRow:function(t){return{onClick:function(){e.push({pathname:"/Movie-detail",state:{title:t.Title,search:w}})}}},key:"key",loading:r.loading,onFetch:x,loadingIndicator:l.a.createElement("div",{style:{textAlign:"center",paddingTop:40,paddingBottom:40,border:"1px solid #e8e8e8"}},l.a.createElement(E.a,{tip:"Loading..."})),columns:[{title:"imdbID",width:50,dataIndex:"imdbID"},{title:"Title",width:50,dataIndex:"Title"},{title:"Type",width:50,dataIndex:"Type"},{title:"Year",width:50,dataIndex:"Year"},{title:"Poster",dataIndex:"Poster",width:100}],scroll:{y:450},dataSource:r.data,bordered:!0,debug:!0}))},w=a(68),y=a(75),x=a(361),k=function(){var e=Object(v.g)(),t=Object(v.h)(),a=l.a.useState(),n=Object(h.a)(a,2),r=n[0],c=n[1];function o(){return(o=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com?apikey=9b3b1559&t=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.useEffect((function(){t.state.title&&function(e){o.apply(this,arguments)}(t.state.title)}),[]),l.a.createElement("div",null,r&&l.a.createElement("div",null,l.a.createElement(y.a,{type:"primary",onClick:function(){e.push({pathname:"/Movie-list",state:{title:t.state.title,search:t.state.search}})}},"Go back"),l.a.createElement("div",null,l.a.createElement(x.a,{title:"Movie Info",bordered:!0},l.a.createElement(x.a.Item,{label:"Title"},r.Title),l.a.createElement(x.a.Item,{label:"Actors"},r.Actors),l.a.createElement(x.a.Item,{label:"Awards"},r.Awards),l.a.createElement(x.a.Item,{label:"BoxOffice"},r.BoxOffice),l.a.createElement(x.a.Item,{label:"Country"},r.Country),l.a.createElement(x.a.Item,{label:"DVD"},r.DVD),l.a.createElement(x.a.Item,{label:"Director"},r.Director),l.a.createElement(x.a.Item,{label:"Genre"},r.Genre),l.a.createElement(x.a.Item,{label:"Language"},r.Language),l.a.createElement(x.a.Item,{label:"Metascore"},r.Metascore),l.a.createElement(x.a.Item,{label:"Plot"},r.Plot),l.a.createElement(x.a.Item,{label:"Poster"},r.Poster),l.a.createElement(x.a.Item,{label:"Production"},r.Production),l.a.createElement(x.a.Item,{label:"Rated"},r.Rated),l.a.createElement(x.a.Item,{label:"Released"},r.Released),l.a.createElement(x.a.Item,{label:"Runtime"},r.Runtime)))))},j=function(){return l.a.createElement(v.d,null,l.a.createElement(v.b,{exact:!0,path:"/MovieV1/"},l.a.createElement(v.a,{to:"/Movie-list"})),l.a.createElement(v.b,{exact:!0,path:"/Movie-list"},l.a.createElement(I,null)),l.a.createElement(v.b,{exact:!0,path:"/Movie-detail"},l.a.createElement(k,null)))},O=o.a.Header,S=o.a.Content,T=o.a.Footer,D=function(){return l.a.createElement(o.a,{className:"layout"},l.a.createElement(O,null,l.a.createElement("div",{className:"logo"}),l.a.createElement(i.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},l.a.createElement(i.a.Item,{key:"1"},"nav 1"),l.a.createElement(i.a.Item,{key:"2"},"nav 2"),l.a.createElement(i.a.Item,{key:"3"},"nav 3"))),l.a.createElement(S,{style:{padding:"0 50px"}},l.a.createElement(s.a,{style:{margin:"16px 0"}},l.a.createElement(s.a.Item,null,"Home"),l.a.createElement(s.a.Item,null,"List"),l.a.createElement(s.a.Item,null,"App")),l.a.createElement("div",{className:"site-layout-content"},l.a.createElement(w.a,null,l.a.createElement(j,null)))),l.a.createElement(T,{style:{textAlign:"center"}},"Movie List"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(w.a,{basename:"/MovieV1"},l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.44ec7fb1.chunk.js.map