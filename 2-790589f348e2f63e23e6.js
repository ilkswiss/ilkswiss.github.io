(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(37),s=n.n(l);n.d(t,"a",function(){return s.a});n(220);var d=a.a.createContext({}),c=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},179:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return s});var r=n(21),a=function(e){return{type:r.e,payload:{headerHeight:e}}},o=function(e){return{type:r.b,payload:{anchorOpen:e}}},i=function(e){return{type:r.d,payload:{sidebarOpen:e}}},l=function(e){return{type:r.c,payload:{sidebarDocked:e}}},s=function(e){return{type:r.a,payload:{expandedKey:e,autoExpandParent:!1}}}},180:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i});n(84);var r=function(e){return e.layout.sidebar},a=function(e){return e.layout.header.height},o=function(e){return e.layout.anchor},i=function(e){return e.layout.sidebar.expandedKey}},201:function(e,t,n){"use strict";n(38),n(262);var r=n(263),a=n(0),o=n.n(a),i=n(1),l=n.n(i),s=n(264),d=n.n(s),c=n(178),u=n(8),f=n.n(u),p=n(270),m=n.n(p),g=n(59),h=n(179),b=(n(283),n(284),n(285)),y=function(){return o.a.createElement(c.b,{query:"2236891844",render:function(e){var t=e.allMenuItems.edges.map(function(e){return e.node}).reverse();return o.a.createElement("div",null,t.map(function(e){return o.a.createElement("div",{style:{marginLeft:"2em",float:"right"},key:t.indexOf(e)},o.a.createElement("p",{style:{margin:0,fontSize:"1rem"}},o.a.createElement(c.a,{to:e.link,style:{color:"white",textDecoration:"none"}},e.name)))}))},data:b})},v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).componentDidUpdate=function(){t.props.updateHeaderHeight(t.props.size.height)},t}return f()(t,e),t.prototype.render=function(){var e=this.props.siteTitle;return o.a.createElement("div",{style:{position:"fixed",top:0,width:"100%",zIndex:1e3,background:"cornflowerblue",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:1360,padding:"0.8rem 1.0875rem"}},o.a.createElement("div",{style:{float:"left",marginBottom:"0.8em"}},o.a.createElement("h1",{style:{margin:0,fontSize:"1.25rem"}},o.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))),o.a.createElement(y,null)))},t}(a.Component),E={updateHeaderHeight:h.e},k=Object(g.b)(function(){return{}},E)(m()({monitorHeight:!0})(v)),S=(n(286),n(180)),O=(n(287),n(223),n(86),n(289)),x=n(203),w=n.n(x),C=(n(290),n(294),n(224)),j=w.a.SubMenu,M=function(e){var t=[],n=[];return e.forEach(function(e){if(e.parents===[]||null===e.parents)t.push(e);else{for(var r=t,a=function(t){if(0===r.filter(function(n){return n.title===e.parents[t]&&n.children}).length){var a={key:"tree/"+e.parents[t],title:e.parents[t],children:[]};r.push(a),n.push(a)}r=r.find(function(n){return n.title===e.parents[t]&&n.children}).children},o=0;o<e.parents.length;o++)a(o);r.push(e)}}),[t,n]},A=function(e){e.sort(function(e,t){return(e.children&&t.children||!e.children&&!t.children)&&e.title>t.title?1:e.children?1:-1})},R=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!1)},t}return f()(t,e),t.prototype.render=function(){var e=this,t=this.props.sidebar.expandedKey,n=this.props.root;return o.a.createElement(c.b,{query:"1176653062",render:function(r){var a=function(e){var t=e.map(function(e){return{path:e.node.fields.slug,key:e.node.id,title:e.node.frontmatter.title,parents:e.node.frontmatter.parents}});return M(t)}(r.allMarkdownRemark.edges.filter(function(e){return e.node.fields.slug.startsWith(n)})),i=a[0],l=a[1];A(i);var s=window.location.pathname.replace(C.pathPrefix.slice(0,-1),""),d=r.allMarkdownRemark.edges.filter(function(e){return s===e.node.fields.slug||s.slice(0,-1)===e.node.fields.slug&&"/"===s.slice(-1)}).length>0?[t]:[],u=l.map(function(e){return e.key});return o.a.createElement(w.a,{mode:"inline",defaultOpenKeys:u,selectedKeys:d,inlineIndent:12},function t(n){return n.map(function(n){return n.children?(A(n.children),o.a.createElement(j,{key:n.key,title:o.a.createElement("span",{style:{fontWeight:900}},n.title)},t(n.children))):o.a.createElement(w.a.Item,{key:n.key},o.a.createElement(c.a,{to:n.path,onClick:e.onSetSidebarOpen},n.title))})}(i))},data:O})},t}(a.Component),I={onSetSidebarOpen:h.c},H=Object(g.b)(function(e){return{sidebar:Object(S.d)(e)}},I)(R),q=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.root;return o.a.createElement("div",{style:{position:"fixed",top:t+30,left:10,right:"80%",bottom:0,overflow:"hidden"}},o.a.createElement("div",{style:{position:"absolute",left:0,right:10,top:0,bottom:0}},o.a.createElement(H,{root:n})))},t}(a.Component),G=Object(g.b)(function(e){return{headerHeight:Object(S.b)(e)}})(q),D=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props,t=e.sidebarDocked,n=e.headerHeight,r=e.onPostPage;return o.a.createElement("div",{style:{position:"absolute",top:!t&&r?n+70:n+30,left:!t&&r||!r?0:"20%",right:!t&&r||!r?0:"15%",bottom:0,overflow:t?"visible":"auto"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},this.props.children))},t}(a.Component),P=Object(g.b)(function(e){return{headerHeight:Object(S.b)(e)}})(D),T=n(376),W=n.n(T),_=(n(371),n(375),W.a.Link),z=function(e){var t=0;return e=[].slice.call(e).map(function(e){var n=parseInt(e.parentElement.nodeName[1]);return 0!==t&&n>t&&(n=t+1),t=n,{href:"#"+e.parentElement.id,title:e.parentElement.innerText,depth:n,children:[]}}),K(e),e},K=function(e){for(var t=[],n=0;n<e.length;n++)for(var r=n+1;r<e.length;r++)if(e[n].depth+1===e[r].depth)e[n].children.push(e[r]),t.push(r);else if(e[n].depth>=e[r].depth)break;t.sort(function(e,t){return t-e}).forEach(function(t){return e.splice(t,1)})},B=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSetAnchorOpen=function(){n.props.onSetAnchorOpen(!1)},n.state={anchors:[]},n}f()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementsByClassName("post-toc-anchor");this.setState({anchors:z(e)})},n.render=function(){var e=this.state.anchors,t=this.props,n=t.offsetTop,r=t.affix;return o.a.createElement(W.a,{offsetTop:n,onClick:this.onSetAnchorOpen,affix:r},function e(t){return t.map(function(t){return t.children.length>0?o.a.createElement(_,{href:t.href,title:t.title,key:t.href},e(t.children)):o.a.createElement(_,{href:t.href,title:t.title,key:t.href})})}(e))},t}(a.Component),L={onSetAnchorOpen:h.a},N=Object(g.b)(function(){return{}},L)(B),F=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props.headerHeight;return o.a.createElement("div",{style:{position:"fixed",top:e+30,left:"85%",right:10,bottom:0,overflow:"hidden"}},o.a.createElement("div",{style:{position:"absolute",left:10,right:0,top:0,bottom:0}},o.a.createElement(N,{offsetTop:e+30,affix:!0})))},t}(a.Component),Q=Object(g.b)(function(e){return{headerHeight:Object(S.b)(e)}})(F),J=n(249),Y=n.n(J),U=(n(248),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!0)},t.onSetSidebarClose=function(){t.props.onSetSidebarOpen(!1)},t.onSetAnchorOpen=function(){t.props.onSetAnchorOpen(!0)},t.onSetAnchorClose=function(){t.props.onSetAnchorOpen(!1)},t}return f()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.sidebarOpen,r=e.anchorOpen,a=e.root;return o.a.createElement("div",{style:{position:"fixed",top:t,width:"100%",height:40,zIndex:1001,background:"aliceblue",marginBottom:"1.45rem"}},!r&&o.a.createElement("div",{style:{position:"absolute",left:8,top:4}},n?o.a.createElement(Y.a,{icon:"close",onClick:this.onSetSidebarClose}):o.a.createElement(Y.a,{icon:"bars",onClick:this.onSetSidebarOpen}),n&&o.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:0,bottom:0,backgroundColor:"white"}},o.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:1e3,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},o.a.createElement(H,{root:a})))),!n&&o.a.createElement("div",{style:{position:"absolute",right:8,top:4}},r?o.a.createElement(Y.a,{icon:"close",onClick:this.onSetAnchorClose}):o.a.createElement(Y.a,{icon:"ellipsis",onClick:this.onSetAnchorOpen}),r&&o.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:10,bottom:0,zIndex:1e3,overflowY:"auto",backgroundColor:"white",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},o.a.createElement(N,{offsetTop:t+70,affix:!1}))))},t}(a.Component)),V={onSetSidebarOpen:h.c,onSetAnchorOpen:h.a},X=Object(g.b)(function(e){return{headerHeight:Object(S.b)(e),sidebarOpen:Object(S.d)(e).open,anchorOpen:Object(S.a)(e).open}},V)(U),Z=n(389),$=n.n(Z),ee=function(e){var t=e.children,n=e.sidebarRoot;e.onSetSidebarDocked;return o.a.createElement(c.b,{query:"3168754476",render:function(e){var r,a,i=e.allMarkdownRemark.edges.map(function(e){return e.node.fields.slug});"undefined"!=typeof window&&(a=C.pathPrefix.endsWith("/")?window.location.pathname.replace(C.pathPrefix.slice(0,-1),""):window.location.pathname.replace(C.pathPrefix,""),r=i.indexOf(a)>=0||i.indexOf(a.slice(0,-1))>=0);return o.a.createElement($.a,{maxWidth:1e3},function(a){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),a&&r?o.a.createElement(X,{root:n}):null,!a&&r?o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{root:n})," ",o.a.createElement(Q,null)," "):null,o.a.createElement(P,{sidebarDocked:!a,onPostPage:r},t))})},data:r})};ee.propTypes={children:l.a.node.isRequired};var te={onSetSidebarDocked:h.b},ne=Object(g.b)(function(){return{}},te)(ee);t.a=ne},220:function(e,t,n){var r;e.exports=(r=n(269))&&r.default||r},224:function(e,t){(function(t){e.exports={siteMetadata:{title:"React技术栈总结"},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-source-filesystem",options:{name:"images",path:t+"/src/images"}},{resolve:"gatsby-transformer-json",options:{typeName:"MenuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"menuItems",path:t+"/src/menuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"contents",path:t+"/contents"}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-markdown",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/gatsby-icon.png"}},{resolve:"gatsby-transformer-remark",options:{plugins:["gatsby-remark-katex",{resolve:"gatsby-remark-autolink-headers",options:{className:"post-toc-anchor"}},{resolve:"gatsby-remark-images",options:{maxWidth:590}}]}},"gatsby-plugin-remove-trailing-slashes"],pathPrefix:"/"}}).call(this,"/")},263:function(e){e.exports={data:{site:{siteMetadata:{title:"React技术栈总结"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/1.1"}}},{node:{fields:{slug:"/blog/1.2"}}},{node:{fields:{slug:"/blog/README.md"}}},{node:{fields:{slug:"/docs/get-started/introduction"}}},{node:{fields:{slug:"/docs/get-started/quick_start"}}},{node:{fields:{slug:"/docs/guide/anchor"}}},{node:{fields:{slug:"/docs/guide/contents"}}},{node:{fields:{slug:"/docs/guide/menu_items"}}},{node:{fields:{slug:"/docs/guide/sidebar"}}},{node:{fields:{slug:"/novel/c1/1.1"}}},{node:{fields:{slug:"/novel/c1/1.2"}}},{node:{fields:{slug:"/novel/c1/1.4"}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.1"}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.2"}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.3"}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.4"}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.5"}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.6"}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.7"}}},{node:{fields:{slug:"/react-tutorial/get-started/introduction"}}},{node:{fields:{slug:"/novel/c1/1.3"}}},{node:{fields:{slug:"/react-tutorial - 副本\\get-started/introduction"}}}]}}}},269:function(e,t,n){"use strict";n.r(t);n(29);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(76),s=n(3),d=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},285:function(e){e.exports={data:{allMenuItems:{edges:[{node:{name:"React教程",link:"/react-tutorial/get-started/introduction"}},{node:{name:"Gatsby教程",link:"/gatsby-tutorial/c1/1.1"}},{node:{name:"使用模板",link:"/docs/get-started/introduction"}},{node:{name:"技术博客",link:"/blog"}},{node:{name:"娱乐一下",link:"/novel/c1/1.1"}}]}}}},289:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/1.1"},id:"96c9d064-f4d7-5af4-96db-41473ea9efd4",frontmatter:{title:"为什么要建这个网站",parents:null}}},{node:{fields:{slug:"/blog/1.2"},id:"043b9337-6693-5f72-adc7-00ba536cfbb9",frontmatter:{title:"v1.0发布-更新日志",parents:null}}},{node:{fields:{slug:"/blog/README.md"},id:"f4396235-3a9e-5f17-b2b0-eea73d38360e",frontmatter:{title:"",parents:null}}},{node:{fields:{slug:"/docs/get-started/introduction"},id:"d1b4b14a-f613-5343-95f2-b1d1bc521fbb",frontmatter:{title:"Introduction",parents:["Get Started"]}}},{node:{fields:{slug:"/docs/get-started/quick_start"},id:"84e0a021-dc1f-5f48-9d3c-2090cf262860",frontmatter:{title:"Quick Start",parents:["Get Started"]}}},{node:{fields:{slug:"/docs/guide/anchor"},id:"88606459-ee11-5c98-b53c-eb51b59dfa52",frontmatter:{title:"Anchor",parents:["Guide"]}}},{node:{fields:{slug:"/docs/guide/contents"},id:"88e2ef28-ebe8-55fa-920a-6578214ff99d",frontmatter:{title:"Contents",parents:["Guide"]}}},{node:{fields:{slug:"/docs/guide/menu_items"},id:"04a0adc1-66fe-54bb-a23c-c86ebd8f2dbf",frontmatter:{title:"Menu Items",parents:["Guide"]}}},{node:{fields:{slug:"/docs/guide/sidebar"},id:"a1aebddb-b225-58e9-8ffb-0281c18e89f0",frontmatter:{title:"Sidebar",parents:["Guide"]}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.1"},id:"ef2cd6e9-ee5b-5b46-93a2-555666389802",frontmatter:{title:"1.1Gatsby安装和博客搭建",parents:["上手"]}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.2"},id:"644b265f-6d87-5b70-9f2e-5f909f52e66b",frontmatter:{title:"1.2Gatsby支持Markdown",parents:["上手"]}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.3"},id:"ad421c37-6b24-5d24-8376-491acb0d4847",frontmatter:{title:"1.3使用GraphQL解析Markdown",parents:["上手"]}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.4"},id:"d9cb2766-b7bc-5c97-8301-59300de81cba",frontmatter:{title:"1.4添加博客文章列表",parents:["上手"]}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.5"},id:"49d78691-6160-5670-826f-d71d5d2e120c",frontmatter:{title:"1.5添加博客内容页",parents:["上手"]}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.6"},id:"02ca7aa0-0ea7-5b3f-a7dd-fb65b845e37b",frontmatter:{title:"1.6添加上一页下一页功能",parents:["上手"]}}},{node:{fields:{slug:"/gatsby-tutorial/c1/1.7"},id:"39836450-ed95-5a21-bc5b-97c73b645768",frontmatter:{title:"1.7总结",parents:["上手"]}}},{node:{fields:{slug:"/novel/c1/1.1"},id:"c28e7463-8fd8-526d-ac0c-222f7660f26d",frontmatter:{title:"1.1回忆让我们懂得过去",parents:["第一章 冰封的王座-持续更新中"]}}},{node:{fields:{slug:"/novel/c1/1.2"},id:"bf6d9c61-6a17-514e-bb39-907a0e0a8955",frontmatter:{title:"1.2两权相利取其重",parents:["第一章 冰封的王座-持续更新中"]}}},{node:{fields:{slug:"/novel/c1/1.3"},id:"4ae97c47-d3fb-5e75-a1f2-203228ef6752",frontmatter:{title:"1.3面试官的小算盘",parents:["第一章 冰封的王座-持续更新中"]}}},{node:{fields:{slug:"/novel/c1/1.4"},id:"e42984b1-c28b-5d55-9ee3-9b3af7d71812",frontmatter:{title:"1.4二面，产品总监的见面礼",parents:["第一章 冰封的王座-持续更新中"]}}},{node:{fields:{slug:"/react-tutorial - 副本\\get-started/introduction"},id:"a8d2b3ee-1d76-55f2-9de3-cab493c097f9",frontmatter:{title:"Introduction",parents:["Get Started"]}}},{node:{fields:{slug:"/react-tutorial/get-started/introduction"},id:"181e2596-df1f-54c4-a92e-98a81b9b3b0a",frontmatter:{title:"Introduction",parents:["Get Started"]}}}]}}}}}]);
//# sourceMappingURL=2-790589f348e2f63e23e6.js.map