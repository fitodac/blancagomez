(()=>{var e,t,r,l={7073:(e,t,r)=>{"use strict";r.r(t);var l=r(1609),o=r(7723);const n=window.wp.blocks;var c=r(5573);const a=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},(0,l.createElement)("path",{opacity:".87",fill:"none",d:"M0 0h24v24H0V0z"}),(0,l.createElement)("path",{d:"M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"}));var i=r(7104);const s=JSON.parse('{"name":"woocommerce/product-top-rated","title":"Top Rated Products","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of your top rated products.","supports":{"align":["wide","full"],"html":false},"attributes":{"columns":{"type":"number","default":3},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"categories":{"type":"array","default":[]},"catOperator":{"type":"string","default":"any"},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"},"editMode":{"type":"boolean","default":true},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"rating"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),m=window.wc.wcSettings,d={columns:{type:"number",default:(0,m.getSetting)("defaultColumns",3)},rows:{type:"number",default:(0,m.getSetting)("defaultRows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{image:!0,title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1},stockStatus:{type:"array",default:Object.keys((0,m.getSetting)("stockStatusOptions",[]))}},u=window.wp.blockEditor,h=window.wp.components,E=window.wp.serverSideRender;var g=r.n(E);const p=({onChange:e,settings:t})=>{const{image:r,button:n,price:c,rating:a,title:i}=t,s=!1!==r;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(h.ToggleControl,{label:(0,o.__)("Product image","woocommerce"),checked:s,onChange:()=>e({...t,image:!s})}),(0,l.createElement)(h.ToggleControl,{label:(0,o.__)("Product title","woocommerce"),checked:i,onChange:()=>e({...t,title:!i})}),(0,l.createElement)(h.ToggleControl,{label:(0,o.__)("Product price","woocommerce"),checked:c,onChange:()=>e({...t,price:!c})}),(0,l.createElement)(h.ToggleControl,{label:(0,o.__)("Product rating","woocommerce"),checked:a,onChange:()=>e({...t,rating:!a})}),(0,l.createElement)(h.ToggleControl,{label:(0,o.__)("Add to Cart button","woocommerce"),checked:n,onChange:()=>e({...t,button:!n})}))},w=(e,t,r)=>r?Math.min(e,t)===e?t:Math.max(e,r)===e?r:e:Math.max(e,t)===t?e:t,f=({columns:e,rows:t,setAttributes:r,alignButtons:n,minColumns:c=1,maxColumns:a=6,minRows:i=1,maxRows:s=6})=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)(h.RangeControl,{label:(0,o.__)("Columns","woocommerce"),value:e,onChange:e=>{const t=w(e,c,a);r({columns:Number.isNaN(t)?"":t})},min:c,max:a}),(0,l.createElement)(h.RangeControl,{label:(0,o.__)("Rows","woocommerce"),value:t,onChange:e=>{const t=w(e,i,s);r({rows:Number.isNaN(t)?"":t})},min:i,max:s}),(0,l.createElement)(h.ToggleControl,{label:(0,o.__)("Align the last block to the bottom","woocommerce"),help:n?(0,o.__)("Align the last block to the bottom.","woocommerce"):(0,o.__)("The last inner block will follow other content.","woocommerce"),checked:n,onChange:()=>r({alignButtons:!n})}));var y=r(9019),b=r.n(y),_=r(6087);function x(e,t,r){const l=new Set(t.map((e=>e[r])));return e.filter((e=>!l.has(e[r])))}const v=window.wp.htmlEntities,k={clear:(0,o.__)("Clear all selected items","woocommerce"),noItems:(0,o.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:(0,o.__)("No results for %s","woocommerce"),search:(0,o.__)("Search for items","woocommerce"),selected:e=>(0,o.sprintf)(/* translators: Number of items selected from list. */ /* translators: Number of items selected from list. */
(0,o._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:(0,o.__)("Search results updated.","woocommerce")},C=(e,t=e)=>{const r=e.reduce(((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),l=("id",t.reduce(((e,t)=>(e[String(t.id)]=t,e)),{}));const o=["0"],n=(e={})=>e.parent?[...n(l[e.parent]),e.name]:e.name?[e.name]:[],c=e=>e.map((e=>{const t=r[e.id];return o.push(""+e.id),{...e,breadcrumbs:n(l[e.parent]),children:t&&t.length?c(t):[]}})),a=c(r[0]||[]);return Object.entries(r).forEach((([e,t])=>{o.includes(e)||a.push(...c(t||[]))})),a},S=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map(((e,t)=>r.test(e)?(0,l.createElement)("strong",{key:t},e):(0,l.createElement)(_.Fragment,{key:t},e)))},N=({label:e})=>(0,l.createElement)("span",{className:"woocommerce-search-list__item-count"},e),O=e=>{const{item:t,search:r}=e,o=t.breadcrumbs&&t.breadcrumbs.length;return(0,l.createElement)("span",{className:"woocommerce-search-list__item-label"},o?(0,l.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(n=t.breadcrumbs).length?n.slice(0,1).toString():2===n.length?n.slice(0,1).toString()+" › "+n.slice(-1).toString():n.slice(0,1).toString()+" … "+n.slice(-1).toString()):null,(0,l.createElement)("span",{className:"woocommerce-search-list__item-name"},S((0,v.decodeEntities)(t.name),r)));var n},P=({countLabel:e,className:t,depth:r=0,controlId:o="",item:n,isSelected:c,isSingle:a,onSelect:i,search:s="",selected:m,useExpandedPanelId:d,...u})=>{var E,g;const[p,w]=d,f=null!=e&&void 0!==n.count&&null!==n.count,y=!(null===(E=n.breadcrumbs)||void 0===E||!E.length),k=!(null===(g=n.children)||void 0===g||!g.length),C=p===n.id,P=b()(["woocommerce-search-list__item",`depth-${r}`,t],{"has-breadcrumbs":y,"has-children":k,"has-count":f,"is-expanded":C,"is-radio-button":a}),I=u.name||`search-list-item-${o}`,j=`${I}-${n.id}`,R=(0,_.useCallback)((()=>{w(C?-1:Number(n.id))}),[C,n.id,w]);return k?(0,l.createElement)("div",{className:P,onClick:R,onKeyDown:e=>"Enter"===e.key||" "===e.key?R():null,role:"treeitem",tabIndex:0},a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{type:"radio",id:j,name:I,value:n.value,onChange:i(n),onClick:e=>e.stopPropagation(),checked:c,className:"woocommerce-search-list__item-input",...u}),(0,l.createElement)(O,{item:n,search:s}),f?(0,l.createElement)(N,{label:e||n.count}):null):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(h.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:c,...!c&&n.children.some((e=>m.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:S((0,v.decodeEntities)(n.name),s),onChange:()=>{c?i(x(m,n.children,"id"))():i(function(e,t,r){const l=x(t,e,"id");return[...e,...l]}(m,n.children))()},onClick:e=>e.stopPropagation()}),f?(0,l.createElement)(N,{label:e||n.count}):null)):(0,l.createElement)("label",{htmlFor:j,className:P},a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{...u,type:"radio",id:j,name:I,value:n.value,onChange:i(n),checked:c,className:"woocommerce-search-list__item-input"}),(0,l.createElement)(O,{item:n,search:s})):(0,l.createElement)(h.CheckboxControl,{...u,id:j,name:I,className:"woocommerce-search-list__item-input",value:(0,v.decodeEntities)(n.value),label:S((0,v.decodeEntities)(n.name),s),onChange:i(n),checked:c}),f?(0,l.createElement)(N,{label:e||n.count}):null)},I=P;var j=r(2478),R=r(9491),B=r(2370);r(6636);const $=({id:e,label:t,popoverContents:r,remove:n,screenReaderLabel:c,className:a=""})=>{const[s,m]=(0,_.useState)(!1),d=(0,R.useInstanceId)($);if(c=c||t,!t)return null;t=(0,v.decodeEntities)(t);const u=b()("woocommerce-tag",a,{"has-remove":!!n}),E=`woocommerce-tag__label-${d}`,g=(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"screen-reader-text"},c),(0,l.createElement)("span",{"aria-hidden":"true"},t));return(0,l.createElement)("span",{className:u},r?(0,l.createElement)(h.Button,{className:"woocommerce-tag__text",id:E,onClick:()=>m(!0)},g):(0,l.createElement)("span",{className:"woocommerce-tag__text",id:E},g),r&&s&&(0,l.createElement)(h.Popover,{onClose:()=>m(!1)},r),n&&(0,l.createElement)(h.Button,{className:"woocommerce-tag__remove",onClick:n(e),label:(0,o.sprintf)(
// Translators: %s label.
// Translators: %s label.
(0,o.__)("Remove %s","woocommerce"),t),"aria-describedby":E},(0,l.createElement)(i.A,{icon:B.A,size:20,className:"clear-icon",role:"img"})))},A=$;r(8137);const T=e=>(0,l.createElement)(I,{...e}),F=e=>{const{list:t,selected:r,renderItem:o,depth:n=0,onSelect:c,instanceId:a,isSingle:i,search:s,useExpandedPanelId:m}=e,[d]=m;return t?(0,l.createElement)(_.Fragment,null,t.map((t=>{var u,h;const E=null!==(u=t.children)&&void 0!==u&&u.length&&!i?t.children.every((({id:e})=>r.find((t=>t.id===e)))):!!r.find((({id:e})=>e===t.id)),g=(null===(h=t.children)||void 0===h?void 0:h.length)&&d===t.id;return(0,l.createElement)(_.Fragment,{key:t.id},(0,l.createElement)("li",null,o({item:t,isSelected:E,onSelect:c,isSingle:i,selected:r,search:s,depth:n,useExpandedPanelId:m,controlId:a})),g?(0,l.createElement)(F,{...e,list:t.children,depth:n+1}):null)}))):null},M=({isLoading:e,isSingle:t,selected:r,messages:n,onChange:c,onRemove:a})=>{if(e||t||!r)return null;const i=r.length;return(0,l.createElement)("div",{className:"woocommerce-search-list__selected"},(0,l.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,l.createElement)("strong",null,n.selected(i)),i>0?(0,l.createElement)(h.Button,{variant:"link",isDestructive:!0,onClick:()=>c([]),"aria-label":n.clear},(0,o.__)("Clear all","woocommerce")):null),i>0?(0,l.createElement)("ul",null,r.map(((e,t)=>(0,l.createElement)("li",{key:t},(0,l.createElement)(A,{label:e.name,id:e.id,remove:a}))))):null)},L=({filteredList:e,search:t,onSelect:r,instanceId:n,useExpandedPanelId:c,...a})=>{const{messages:s,renderItem:m,selected:d,isSingle:u}=a,h=m||T;return 0===e.length?(0,l.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,l.createElement)(i.A,{icon:j.A,role:"img"})),(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,o.sprintf)(s.noResults,t):s.noItems)):(0,l.createElement)("ul",{className:"woocommerce-search-list__list"},(0,l.createElement)(F,{useExpandedPanelId:c,list:e,selected:d,renderItem:h,onSelect:r,instanceId:n,isSingle:u,search:t}))},H=e=>{const{className:t="",isCompact:r,isHierarchical:n,isLoading:c,isSingle:a,list:i,messages:s=k,onChange:m,onSearch:d,selected:u,type:E="text",debouncedSpeak:g}=e,[p,w]=(0,_.useState)(""),f=(0,_.useState)(-1),y=(0,R.useInstanceId)(H),x=(0,_.useMemo)((()=>({...k,...s})),[s]),v=(0,_.useMemo)((()=>((e,t,r)=>{if(!t)return r?C(e):e;const l=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),o=e.map((e=>!!l.test(e.name)&&e)).filter(Boolean);return r?C(o,e):o})(i,p,n)),[i,p,n]);(0,_.useEffect)((()=>{g&&g(x.updated)}),[g,x]),(0,_.useEffect)((()=>{"function"==typeof d&&d(p)}),[p,d]);const S=(0,_.useCallback)((e=>()=>{a&&m([]);const t=u.findIndex((({id:t})=>t===e));m([...u.slice(0,t),...u.slice(t+1)])}),[a,u,m]),N=(0,_.useCallback)((e=>()=>{Array.isArray(e)?m(e):-1===u.findIndex((({id:t})=>t===e.id))?m(a?[e]:[...u,e]):S(e.id)()}),[a,S,m,u]),O=(0,_.useCallback)((e=>{const[t]=u.filter((t=>!e.find((e=>t.id===e.id))));S(t.id)()}),[S,u]);return(0,l.createElement)("div",{className:b()("woocommerce-search-list",t,{"is-compact":r,"is-loading":c,"is-token":"token"===E})},"text"===E&&(0,l.createElement)(M,{...e,onRemove:S,messages:x}),(0,l.createElement)("div",{className:"woocommerce-search-list__search"},"text"===E?(0,l.createElement)(h.TextControl,{label:x.search,type:"search",value:p,onChange:e=>w(e)}):(0,l.createElement)(h.FormTokenField,{disabled:c,label:x.search,onChange:O,onInputChange:e=>w(e),suggestions:[],__experimentalValidateInput:()=>!1,value:c?[(0,o.__)("Loading…","woocommerce")]:u.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),c?(0,l.createElement)("div",{className:"woocommerce-search-list__list"},(0,l.createElement)(h.Spinner,null)):(0,l.createElement)(L,{...e,search:p,filteredList:v,messages:x,onSelect:N,instanceId:y,useExpandedPanelId:f}))},V=((0,h.withSpokenMessages)(H),window.wp.url),D=window.wp.apiFetch;var z=r.n(D);const W=window.wp.escapeHtml,G=({error:e})=>(0,l.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,l.createElement)("span",null,(0,o.__)("The following error was returned","woocommerce"),(0,l.createElement)("br",null),(0,l.createElement)("code",null,(0,W.escapeHTML)(e))):"api"===t?(0,l.createElement)("span",null,(0,o.__)("The following error was returned from the API","woocommerce"),(0,l.createElement)("br",null),(0,l.createElement)("code",null,(0,W.escapeHTML)(e))):e:(0,o.__)("An error has prevented the block from being updated.","woocommerce"))(e)),J=e=>{const{id:t,name:r,parent:l,count:o}=e;return{id:t,name:r,parent:l,count:o,breadcrumbs:[],children:[],details:e,value:e.slug}};r(6876);const K=(Z=({categories:e=[],error:t=null,isLoading:r=!1,onChange:n,onOperatorChange:c,operator:a="any",selected:i,isCompact:s=!1,isSingle:m=!1,showReviewCount:d})=>{const u={clear:(0,o.__)("Clear all product categories","woocommerce"),list:(0,o.__)("Product Categories","woocommerce"),noItems:(0,o.__)("Your store doesn't have any product categories.","woocommerce"),search:(0,o.__)("Search for product categories","woocommerce"),selected:e=>(0,o.sprintf)(/* translators: %d is the count of selected categories. */ /* translators: %d is the count of selected categories. */
(0,o._n)("%d category selected","%d categories selected",e,"woocommerce"),e),updated:(0,o.__)("Category search results updated.","woocommerce")};if(t)return(0,l.createElement)(G,{error:t});const E=e.map(J);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(H,{className:"woocommerce-product-categories",list:E,isLoading:r,selected:E.filter((({id:e})=>i.includes(Number(e)))),onChange:n,renderItem:e=>{var t,r,n,c,a,i,s,m;const{item:u,search:h,depth:E=0}=e,g=u.breadcrumbs.length?`${u.breadcrumbs.join(", ")}, ${u.name}`:u.name,p=d?(0,o.sprintf)(/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */ /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
(0,o._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",(null===(t=u.details)||void 0===t?void 0:t.review_count)||0,"woocommerce"),g,(null===(r=u.details)||void 0===r?void 0:r.review_count)||0):(0,o.sprintf)(/* translators: %1$s is the item name, %2$d is the count of products for the item. */ /* translators: %1$s is the item name, %2$d is the count of products for the item. */
(0,o._n)("%1$s, has %2$d product","%1$s, has %2$d products",(null===(n=u.details)||void 0===n?void 0:n.count)||0,"woocommerce"),g,(null===(c=u.details)||void 0===c?void 0:c.count)||0),w=d?(0,o.sprintf)(/* translators: %d is the count of reviews. */ /* translators: %d is the count of reviews. */
(0,o._n)("%d review","%d reviews",(null===(a=u.details)||void 0===a?void 0:a.review_count)||0,"woocommerce"),(null===(i=u.details)||void 0===i?void 0:i.review_count)||0):(0,o.sprintf)(/* translators: %d is the count of products. */ /* translators: %d is the count of products. */
(0,o._n)("%d product","%d products",(null===(s=u.details)||void 0===s?void 0:s.count)||0,"woocommerce"),(null===(m=u.details)||void 0===m?void 0:m.count)||0);return(0,l.createElement)(P,{className:b()("woocommerce-product-categories__item","has-count",{"is-searching":h.length>0,"is-skip-level":0===E&&0!==u.parent}),...e,countLabel:w,"aria-label":p})},messages:u,isCompact:s,isHierarchical:!0,isSingle:m}),!!c&&(0,l.createElement)("div",{hidden:i.length<2},(0,l.createElement)(h.SelectControl,{className:"woocommerce-product-categories__operator",label:(0,o.__)("Display products matching","woocommerce"),help:(0,o.__)("Pick at least two categories to use this setting.","woocommerce"),value:a,onChange:c,options:[{label:(0,o.__)("Any selected categories","woocommerce"),value:"any"},{label:(0,o.__)("All selected categories","woocommerce"),value:"all"}]})))},({selected:e,...t})=>{const[r,o]=(0,_.useState)(!0),[n,c]=(0,_.useState)(null),[a,i]=(0,_.useState)([]),s=async e=>{const t=await(async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}})(e);c(t),o(!1)},m=(0,_.useRef)(e);return(0,_.useEffect)((()=>{var e;(e={selected:m.current},z()({path:(0,V.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})})).then((e=>{i(e),o(!1)})).catch(s)}),[m]),(0,l.createElement)(Z,{...t,selected:e,error:n,categories:a,isLoading:r})}),Q=(0,m.getSetting)("hideOutOfStockItems",!1),Y=(0,m.getSetting)("stockStatusOptions",{}),q=({value:e,setAttributes:t})=>{const{outofstock:r,...n}=Y,c=Q?n:Y,a=Object.entries(c).map((([e,t])=>({value:e,label:t}))).filter((e=>!!e.label)),i=Object.keys(c).filter((e=>!!e)),[s,m]=(0,_.useState)(e||i);(0,_.useEffect)((()=>{t({stockStatus:["",...s]})}),[s,t]);const d=(0,_.useCallback)((e=>{const t=s.includes(e),r=s.filter((t=>t!==e));t||(r.push(e),r.sort()),m(r)}),[s]);return(0,l.createElement)(l.Fragment,null,a.map((e=>{const t=s.includes(e.value)?/* translators: %s stock status. */ /* translators: %s stock status. */(0,o.__)('Stock status "%s" visible.',"woocommerce"):/* translators: %s stock status. */ /* translators: %s stock status. */(0,o.__)('Stock status "%s" hidden.',"woocommerce");return(0,l.createElement)(h.ToggleControl,{label:e.label,key:e.value,help:(0,o.sprintf)(t,e.label),checked:s.includes(e.value),onChange:()=>d(e.value)})})))},U=(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},(0,l.createElement)("title",null,"Grid Block Preview"),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"})),X=({attributes:e,name:t,setAttributes:r})=>{const{categories:n,catOperator:c,columns:a,contentVisibility:i,rows:s,alignButtons:d,stockStatus:E,isPreview:w}=e;return w?U:(0,l.createElement)(l.Fragment,null,(0,l.createElement)(u.InspectorControls,{key:"inspector"},(0,l.createElement)(h.PanelBody,{title:(0,o.__)("Layout","woocommerce"),initialOpen:!0},(0,l.createElement)(f,{columns:a,rows:s,alignButtons:d,setAttributes:r,minColumns:(0,m.getSetting)("minColumns",1),maxColumns:(0,m.getSetting)("maxColumns",6),minRows:(0,m.getSetting)("minRows",1),maxRows:(0,m.getSetting)("maxRows",6)})),(0,l.createElement)(h.PanelBody,{title:(0,o.__)("Content","woocommerce"),initialOpen:!0},(0,l.createElement)(p,{settings:i,onChange:e=>r({contentVisibility:e})})),(0,l.createElement)(h.PanelBody,{title:(0,o.__)("Filter by Product Category","woocommerce"),initialOpen:!1},(0,l.createElement)(K,{selected:n,onChange:(e=[])=>{const t=e.map((({id:e})=>e));r({categories:t})},operator:c,onOperatorChange:(e="any")=>r({catOperator:e})})),(0,l.createElement)(h.PanelBody,{title:(0,o.__)("Filter by stock status","woocommerce"),initialOpen:!1},(0,l.createElement)(q,{setAttributes:r,value:E}))),(0,l.createElement)(h.Disabled,null,(0,l.createElement)(g(),{block:t,attributes:e})))};var Z;(0,n.registerBlockType)(s,{icon:{src:(0,l.createElement)(i.A,{icon:a,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[(0,o.__)("WooCommerce","woocommerce")],description:(0,o.__)("Display a grid of your top rated products.","woocommerce"),attributes:{...d,...s.attributes},transforms:{from:[{type:"block",blocks:["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"].filter((e=>"woocommerce/product-top-rated"!==e)),transform:e=>(0,n.createBlock)("woocommerce/product-top-rated",e)}]},edit:e=>{const t=(0,u.useBlockProps)();return(0,l.createElement)("div",{...t},(0,l.createElement)(X,{...e}))},save:()=>null})},6876:()=>{},8137:()=>{},6636:()=>{},1609:e=>{"use strict";e.exports=window.React},9491:e=>{"use strict";e.exports=window.wp.compose},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return l[e].call(r.exports,r,r.exports,n),r.exports}n.m=l,e=[],n.O=(t,r,l,o)=>{if(!r){var c=1/0;for(m=0;m<e.length;m++){for(var[r,l,o]=e[m],a=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(a=!1,o<c&&(c=o));if(a){e.splice(m--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[r,l,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,l){if(1&l&&(e=this(e)),8&l)return e;if("object"==typeof e&&e){if(4&l&&e.__esModule)return e;if(16&l&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var a=2&l&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,n.d(o,c),o},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=9595,(()=>{var e={9595:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,o,[c,a,i]=r,s=0;if(c.some((t=>0!==e[t]))){for(l in a)n.o(a,l)&&(n.m[l]=a[l]);if(i)var m=i(n)}for(t&&t(r);s<c.length;s++)o=c[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(m)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=n.O(void 0,[94],(()=>n(7073)));c=n.O(c),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-top-rated"]=c})();