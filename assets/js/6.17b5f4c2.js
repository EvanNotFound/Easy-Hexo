(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{319:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"j",(function(){return s})),n.d(e,"i",(function(){return u})),n.d(e,"n",(function(){return h})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return f})),n.d(e,"h",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"e",(function(){return g})),n.d(e,"l",(function(){return b})),n.d(e,"m",(function(){return _})),n.d(e,"c",(function(){return C})),n.d(e,"k",(function(){return $}));n(321),n(51),n(322),n(74),n(326),n(327),n(181),n(73),n(100),n(101),n(33),n(105),n(173);var i=/#.*$/,a=/\.(md|html)$/,r=/\/$/,s=/^[a-z]+:/i,o=/[\u4E00-\u9FA5]/g,l=/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g;function c(t){return[((t=t.trim()).match(o)||[]).length,(t.replace(o,"").match(l)||[]).length]}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.cn,i=void 0===n?300:n,a=e.en,r=void 0===a?160:a,s=c(t),o=s[0]/i+s[1]/r;return o<1?"1":parseInt(o,10)}function h(t){var e=c(t),n=e[0]+e[1];return n<1e3?n:Math.round(n/100)/10+"k"}function p(t){return decodeURI(t).replace(i,"").replace(a,"")}function d(t){return s.test(t)}function f(t){return/^mailto:/.test(t)}function m(t){return/^tel:/.test(t)}function v(t){if(d(t))return t;var e=t.match(i),n=e?e[0]:"",a=p(t);return r.test(a)?t:a+".html"+n}function g(t,e){var n=decodeURIComponent(t.hash),a=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!a||n===a)&&p(t.path)===p(e)}function b(t,e,n){if(d(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var r=t.replace(/^\//,"").split("/"),s=0;s<r.length;s++){var o=r[s];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));for(var i=p(e),a=0;a<t.length;a++)if(p(t[a].regularPath)===i)return Object.assign({},t[a],{type:"page",path:v(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function _(t,e,n,i){var a=n.pages,r=n.themeConfig,s=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||s.sidebar||r.sidebar))return k(t);var o=s.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return"auto"===u?k(t):u?u.map((function(t){return function t(e,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return b(n,e,i);if(Array.isArray(e))return Object.assign(b(n,e[0],i),{title:e[1]});var r=e.children||[];return 0===r.length&&e.path?Object.assign(b(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map((function(e){return t(e,n,i,a+1)})),collapsable:!1!==e.collapsable}}(t,a,c)})):[]}return[]}function k(t){var e=C(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function C(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function $(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},328:function(t,e,n){},331:function(t,e,n){},332:function(t,e,n){},333:function(t,e,n){},334:function(t,e,n){},335:function(t,e,n){},337:function(t,e,n){},338:function(t,e,n){},339:function(t,e,n){},340:function(t,e,n){},341:function(t,e,n){},342:function(t,e,n){},349:function(t,e,n){"use strict";n.r(e);n(102);var i=n(319),a={name:"SidebarGroup",components:{DropdownTransition:n(350).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(349).default},methods:{isActive:i.e}},r=(n(368),n(28)),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(369),n(73);function o(t,e,n,i,a){var r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return a>2&&(r.style={"padding-left":a+"rem"}),t("RouterLink",r,n)}function l(t,e,n,a,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>r?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,a,r,s+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,a=n.$page,r=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,h=u.item,p=u.sidebarDepth,d=Object(i.e)(r,h.path),f="auto"===h.type?d||h.children.some((function(t){return Object(i.e)(r,h.basePath+"#"+t.slug)})):d,m="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,f),v=[a.frontmatter.sidebarDepth,p,c.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),g=c.displayAllHeaders||s.displayAllHeaders;return"auto"===h.type?[m,l(t,h.children,h.basePath,r,v)]:(f||g)&&h.headers&&!i.d.test(h.path)?[m,l(t,Object(i.c)(h.headers),h.path,r,v)]:m}};n(370);function u(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),a=e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||a}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(r.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},p=Object(r.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},350:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},a=(n(360),n(28)),r=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},356:function(t,e,n){"use strict";n(328)},359:function(t,e,n){"use strict";n(331)},360:function(t,e,n){"use strict";n(332)},361:function(t,e,n){"use strict";n(333)},362:function(t,e,n){"use strict";n(334)},363:function(t,e,n){"use strict";n(335)},364:function(t,e,n){"use strict";n(337)},366:function(t,e,n){"use strict";n(338)},367:function(t,e,n){"use strict";n(339)},368:function(t,e,n){"use strict";n(340)},370:function(t,e,n){"use strict";n(341)},371:function(t,e,n){"use strict";n(342)},506:function(t,e,n){"use strict";n.r(e);n(351),n(102),n(104);var i=n(319),a={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},r=n(28),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(356),Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-macgs-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(326),n(501)),u=(n(359),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),h=n(49),p=(n(73),n(51),n(74),n(171),n(322),n(329),n(320),n(350)),d=n(188),f=n.n(d),m={name:"DropdownLink",components:{NavLink:s,DropdownTransition:p.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return f()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},v=(n(361),{name:"NavLinks",components:{NavLink:s,DropdownLink:Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(r){var s,o=e[r],l=a[r]&&a[r].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,r),i.some((function(t){return t.path===s}))||(s=r)),{text:l,link:s}}))};return[].concat(Object(h.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.k)(t),{items:(t.items||[]).map(i.k)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),g=(n(362),Object(r.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function b(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var _={name:"Navbar",components:{SidebarButton:u,NavLinks:g,SearchBox:c.a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(b(this.$el,"paddingLeft"))+parseInt(b(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},k=(n(363),Object(r.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v("\n      "+t._s(t.$siteTitle)+"\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),C=n(336),$=n.n(C),L={name:"PageEdit",computed:{slug:function(){return this.$page.path||this.$route.path},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=$()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,a=void 0===i?"":i,r=e.docsBranch,s=void 0===r?"master":r,o=e.docsRepo,l=void 0===o?n:o;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,a,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},mounted:function(){this.$forceUpdate()},updated:function(){var t=this.$parent.$refs.content.$el.innerText;this.calculateWordAndReadTime(t)},methods:{createEditLink:function(t,e,n,a,r){if(/bitbucket.org/.test(e))return e.replace(i.a,"")+"/src"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(a,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(i.a,"")+"/-/edit"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+r:(i.j.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+r},calculateWordAndReadTime:function(t){var e=this.$refs.counter,n=e.querySelector("#word"),a=e.querySelector("#time"),r=Object(i.n)(t),s=Object(i.i)(t);n.innerHTML=r,a.innerHTML="".concat(s,"&nbsp;分钟")}}},x=(n(364),Object(r.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),n("div",{staticStyle:{float:"right"}},[n("small",{ref:"counter",staticClass:"word-count"},[t._m(0),t._v(" "),n("span",{attrs:{id:"word"}}),t._v(" "),t._m(1),t._v(" "),n("span",{attrs:{id:"time"}})]),t._v(" "),n("small",{staticClass:"leancloud-visitors",attrs:{id:t.slug}},[t._m(2),t._v(" "),n("span",{staticClass:"pv leancloud-visitors-count"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("span",{staticClass:"octicon octicon-file"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("span",{staticClass:"octicon octicon-clock"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"prefix"},[e("small",[e("span",{staticClass:"octicon octicon-eye"})])])}],!1,null,null,null).exports),w=n(365),O=n.n(w),y={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return j(S.PREV,this)},next:function(){return j(S.NEXT,this)}}};var S={NEXT:{resolveLink:function(t,e){return T(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return T(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function j(t,e){var n=e.$themeConfig,a=e.$page,r=e.$route,s=e.$site,o=e.sidebarItems,l=t.resolveLink,c=t.getThemeLinkConfig,u=t.getPageLinkConfig,h=c(n),p=u(a),d=$()(p)?h:p;return!1===d?void 0:O()(d)?Object(i.l)(s.pages,d,r.path):l(a,o)}function T(t,e,n){var i=[];!function t(e,n){for(var i=0,a=e.length;i<a;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var a=0;a<i.length;a++){var r=i[a];if("page"===r.type&&r.path===decodeURIComponent(t.path))return i[a+n]}}var E=y,I=(n(366),Object(r.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),N=n(325),A=n(99),P=(n(11),n(12),n(15),{props:["options"],watch:{"$page.key":function(t,e){t&&e!==t&&this.initialize(this.options)}},mounted:function(){this.initialize(this.options)},methods:{initialize:function(t){var e=this;Promise.all([n.e(4).then(n.t.bind(null,503,7)),n.e(3).then(n.t.bind(null,504,7))]).then((function(n){var i=Object(A.a)(n,2),a=i[0].default,r=i[1].default;window&&(window.AV=r),new a(Object.assign({el:"#vcomments",path:e.$page.path,visitor:!0,verify:!1},void 0!==window.AV?{av:r}:{},Object(N.a)({},t)))}))}}}),D={components:{PageEdit:x,PageNav:I,Comment:Object(r.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return!0!==this.$page.frontmatter.noComment?e("section",{staticClass:"content"},[this._m(0),this._v(" "),e("article",{attrs:{id:"vcomments"}})]):this._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("\n      关于评论\n    ")]),this._v(" "),e("p",[this._v("评论前请填好“昵称”、“邮箱”这两栏内容，否则不会收到回复，谢谢！")])])}],!1,null,null,null).exports},props:["sidebarItems"],computed:{valine:function(){return this.$site.themeConfig.valine||{}}}},H=(n(367),Object(r.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{ref:"content",staticClass:"theme-macgs-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),n("KeepAlive",[n("Comment",{staticClass:"theme-macgs-content__comment",attrs:{options:t.valine}})],1),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),R={name:"Sidebar",components:{SidebarLinks:n(349).default,NavLinks:g},props:["items"]},G=(n(371),{name:"Layout",components:{Home:l,Page:H,Sidebar:Object(r.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:k},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),U=Object(r.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=U.exports}}]);