(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){e.exports=t.p+"static/media/logo.4f63d70b.svg"},109:function(e,a,t){e.exports=t(272)},119:function(e,a,t){e.exports=t.p+"static/media/map.1504a953.svg"},272:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(103),r=t.n(c),s=(t(65),t(8)),i=t(9),m=t(11),o=t(10),d=t(12),u=(t(114),t(115),t(116),t(104)),p=t.n(u),v=(t(119),t(22)),E=t.n(v),f=t(38),g=t(37),N=t.n(g),b=new E.a({apiKey:"keyNxi8D57wMKr4Ge"}).base("appKL8Umn96W3lcVd"),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={},t.state={records:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b("Stops").select({view:"Grid view",filterByFormula:'{Planned Stop}="Yes"'}).eachPage(function(a,t){e.setState({records:a}),console.log(a),t()})}},{key:"parseImg",value:function(e){return e.imageURL instanceof Array?e.imageURL[0].thumbnails.large.url:""}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card-deck"},this.state.records.length>0?this.state.records.map(function(a,t){return l.a.createElement("div",{className:"col-md-4 d-flex align-items-stretch",key:t},l.a.createElement("div",{class:"card-location-country"},a.fields["country lookup"]),l.a.createElement("div",{className:"card card-location"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"image-cover"},l.a.createElement(f.a,{src:e.parseImg(a.fields),class:"card-img",placeholder:function(e){var a=e.imageProps,t=e.ref;return l.a.createElement("img",{ref:t,src:N.a,alt:a.alt,width:"100%"})},actual:function(e){var a=e.imageProps;return l.a.createElement("img",a)}})),l.a.createElement("div",{class:"card-location-header"},l.a.createElement("h3",{className:"card-title card-location-title"},a.fields.Stop,l.a.createElement("small",{className:"text-muted card-location-days"},a.fields["Days planned"]," days")),l.a.createElement("span",{className:"card-location-place-type badge badge-warning",content:'{record.fields["Place Type"]}'},a.fields["Place Type"])),l.a.createElement("p",null,l.a.createElement("span",{className:"text-muted"},a.fields["Activities available"])),l.a.createElement("p",null,a.fields.Description)),l.a.createElement("div",{className:"card-footer d-flex justify-content-between"},l.a.createElement("p",null,l.a.createElement("span",{className:"text-muted"},"In Route: "),a.fields["Planned Stop"]),l.a.createElement("div",{class:"d-flex"},l.a.createElement("p",null,l.a.createElement("span",{className:"text-muted"},"$"),a.fields["Daily Budget"]," ",l.a.createElement("span",{className:"text-muted"},"p/day ")),l.a.createElement("p",null,l.a.createElement("span",{className:"text-muted"},", Total $"),a.fields["Total Cost"])))))}):l.a.createElement("div",{className:"d-flex justify-content-center loading"},l.a.createElement("div",{class:"text-center"},l.a.createElement("div",{className:"spinner-border text-warning",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))))))}}]),a}(n.Component),y=new E.a({apiKey:"keyNxi8D57wMKr4Ge"}).base("appKL8Umn96W3lcVd"),x=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={},t.state={records:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;y("Packing List").select({view:"Packing List"}).eachPage(function(a,t){e.setState({records:a}),console.log(a),t()})}},{key:"parseImg",value:function(e){return e.imageURL instanceof Array?e.imageURL[0].thumbnails.large.url:""}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card-deck"},this.state.records.length>0?this.state.records.map(function(a,t){return l.a.createElement("div",{className:"col-md-3 d-flex align-items-stretch",key:t},l.a.createElement("div",{className:"card card-location"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"image-cover image-cover-packing-list"},l.a.createElement("img",{className:"card-img",src:e.parseImg(a.fields)})),l.a.createElement("div",{className:"card-location-header"},l.a.createElement("h3",{className:"card-title card-location-title"},a.fields.Item),l.a.createElement("span",{className:"card-location-place-type badge badge-warning",content:'{record.fields["Place Type"]}'},a.fields.Type)),l.a.createElement("p",null,l.a.createElement("span",{className:"card-brand text-muted"},a.fields.Brand)),l.a.createElement("p",null,a.fields.Description)),l.a.createElement("div",{className:"card-footer d-flex justify-content-between"},l.a.createElement("a",{className:"btn btn-sm btn-light",href:a.fields.Link},"Buy it"),l.a.createElement("span",null,l.a.createElement("span",{className:"text-muted"},"$"),a.fields.Price))))}):l.a.createElement("div",{className:"d-flex justify-content-center loading"},l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"spinner-border text-warning",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))))))}}]),a}(n.Component),k=function(e){var a=e.source;if(!a)return l.a.createElement("div",null,"Loading...");var t=a;return l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"emdeb-responsive"},l.a.createElement("iframe",{src:t})))},w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={src:"https://airtable.com/embed/shr6pzT5ofBNzpzbw?backgroundColor=tealLight"},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k,{source:this.state.src}))}}]),a}(n.Component),j=new E.a({apiKey:"keyNxi8D57wMKr4Ge"}).base("appKL8Umn96W3lcVd"),O=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={},t.state={records:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;j("Stops").select({view:"Grid view"}).eachPage(function(a,t){e.setState({records:a}),console.log(a),t()})}},{key:"parseImg",value:function(e){return e.imageURL instanceof Array?e.imageURL[0].thumbnails.large.url:""}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card-deck"},this.state.records.length>0?this.state.records.map(function(a,t){return l.a.createElement("div",{className:"col-md-4 d-flex align-items-stretch",key:t},l.a.createElement("div",{class:"card-location-country"},a.fields["country lookup"]),l.a.createElement("div",{className:"card card-location"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"image-cover"},l.a.createElement(f.a,{src:e.parseImg(a.fields),class:"card-img",placeholder:function(e){var a=e.imageProps,t=e.ref;return l.a.createElement("img",{ref:t,src:N.a,alt:a.alt,width:"100%"})},actual:function(e){var a=e.imageProps;return l.a.createElement("img",a)}})),l.a.createElement("div",{class:"card-location-header"},l.a.createElement("h3",{className:"card-title card-location-title"},a.fields.Stop,l.a.createElement("small",{className:"text-muted card-location-days"},a.fields["Days planned"]," days")),l.a.createElement("span",{className:"card-location-place-type badge badge-warning",content:'{record.fields["Place Type"]}'},a.fields["Place Type"])),l.a.createElement("p",null,l.a.createElement("span",{className:"text-muted"},a.fields["Activities available"])),l.a.createElement("p",null,a.fields.Description)),l.a.createElement("div",{className:"card-footer d-flex justify-content-between"},l.a.createElement("p",null,l.a.createElement("span",{className:"text-muted"},"In Route: "),a.fields["Planned Stop"]),l.a.createElement("div",{class:"d-flex"},l.a.createElement("p",null,l.a.createElement("span",{className:"text-muted"},"$"),a.fields["Daily Budget"]," ",l.a.createElement("span",{className:"text-muted"},"p/day ")),l.a.createElement("p",null,l.a.createElement("span",{className:"text-muted"},", Total $"),a.fields["Total Cost"])))))}):l.a.createElement("div",{className:"d-flex justify-content-center loading"},l.a.createElement("div",{class:"text-center"},l.a.createElement("div",{className:"spinner-border text-warning",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))))))}}]),a}(n.Component),P=t(106),L=t(19),D=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container-fluid mt-5"},l.a.createElement("div",{className:"masthead d-flex justify-content-between"},l.a.createElement("a",{className:"nav-link",href:"/"},l.a.createElement("img",{src:p.a,alt:"Logo"})),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Planned Route")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/allstops"},"All Stops")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/calendar"},"Calendar")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/packinglist"},"Packing List"))))))),l.a.createElement("div",{className:"container-fluid mt-5"},l.a.createElement(P.a,null,l.a.createElement("div",null,l.a.createElement(L.a,{exact:!0,path:"/",render:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null))}}),l.a.createElement(L.a,{exact:!0,path:"/allstops",render:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(O,null))}}),l.a.createElement(L.a,{exact:!0,path:"/packinglist",render:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(x,null))}}),l.a.createElement(L.a,{exact:!0,path:"/calendar",render:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(w,null))}})))),l.a.createElement("div",{class:"footer"},l.a.createElement("div",{class:"footer-img-container"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,a,t){e.exports=t.p+"static/media/placeholder@2x.19d5c7ef.png"},65:function(e,a,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.f531c4f6.chunk.js.map