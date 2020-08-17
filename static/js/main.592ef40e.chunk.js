(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(e,a,t){e.exports={ImageGallery:"imageGallery_ImageGallery__VA5C7"}},23:function(e,a,t){e.exports={Notification:"notification_Notification__3385P"}},24:function(e,a,t){e.exports={Button:"Button_Button__1ydxr"}},26:function(e,a,t){e.exports={App:"App_App__2976R"}},27:function(e,a,t){e.exports=t(71)},7:function(e,a,t){e.exports={Searchbar:"searchbar_Searchbar__1Km6P",SearchForm:"searchbar_SearchForm__179hp","SearchForm-button":"searchbar_SearchForm-button__c6hRp","SearchForm-button-label":"searchbar_SearchForm-button-label__ufUtl","SearchForm-input":"searchbar_SearchForm-input__3KEoJ"}},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(20),l=t.n(o),c=t(10),i=t(3),s=t(4),m=t(6),u=t(5),h=t(21),p=t.n(h),g=function(e,a){return p.a.get("".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(a,"&per_page=").concat(12,"&key=").concat("16179097-8566271ab112e51de35a43208")).then((function(e){return e.data.hits}))},d=t(7),y=t.n(d),f=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={inputValue:""},e.handleChange=function(a){e.setState({inputValue:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:y.a.Searchbar},r.a.createElement("form",{className:y.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("input",{className:y.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.querry,placeholder:"Search images and photos",onChange:this.handleChange}),r.a.createElement("button",{type:"submit",className:y.a.SearchFormButton},r.a.createElement("span",{className:y.a.SearchFormButtonLabel},"Search"))))}}]),t}(n.Component),b=t(22),v=t.n(b),S=t(8),_=t.n(S),E=function(e){var a=e.img,t=e.id,n=e.show;return r.a.createElement("div",null,r.a.createElement("li",{className:_.a.ImageGalleryItem,key:t,onClick:function(){return n(a.largeImageURL)}},r.a.createElement("img",{className:_.a.ImageGalleryItemImage,src:a.webformatURL,alt:a.tags,width:"320",height:"180"})))};var I=function(e){var a=e.gallery,t=e.onImageClick;return r.a.createElement("div",null,r.a.createElement("ul",{className:v.a.ImageGallery},a.map((function(e){return r.a.createElement(E,{img:e,key:e.id,show:t})}))))},w=t(23),F=t.n(w);function k(e){var a=e.message;return r.a.createElement("div",null,r.a.createElement("p",{className:F.a.Notification},a))}var C=t(24),G=t.n(C),O=function(e){var a=e.fetchGallery;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:G.a.Button,onClick:a},"Load more"))},N=t(25),j=t.n(N);t(70);function L(){return r.a.createElement(j.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100,timeout:3e3})}var M=t(9),x=t.n(M),A=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeyPress=function(a){"Escape"===a.code&&e.props.onCloseModal()},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:x.a.Overlay},r.a.createElement("div",{className:x.a.Modal},e))}}]),t}(n.Component),U=t(26),B=t.n(U),R=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={gallery:[],isLoading:!1,error:null,searchQuery:"",page:0,isShowModal:!1,modalImageURL:""},e.fetchGallery=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});var a=e.state,t=a.searchQuery,n=a.page;e.setState({isLoading:!0}),g(t,n).then((function(a){return e.setState((function(e){return{gallery:[].concat(Object(c.a)(e.gallery),Object(c.a)(a)),page:e.page+1}}))})).catch((function(a){return e.setState({error:a})})).finally((function(){e.setState({isLoading:!1})}))},e.handleSearchFormSubmit=function(a){e.setState({searchQuery:a,page:1,gallery:[]})},e.handleImageClick=function(a){e.setState({isShowModal:!0,modalImageURL:a})},e.handleCloseModal=function(){e.setState({isShowModal:!1,modalImageURL:""})},e}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.searchQuery!==this.state.searchQuery&&this.fetchGallery()}},{key:"render",value:function(){var e=this.state,a=e.gallery,t=e.isLoading,n=e.error,o=e.isShowModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:B.a.App},r.a.createElement(f,{onSubmit:this.handleSearchFormSubmit}),n&&r.a.createElement(k,{message:"Whoops, something went wrong: ".concat(n.message)}),t&&r.a.createElement(L,{message:"Is loading..."}),a.length>0&&r.a.createElement(I,{gallery:a,onImageClick:this.handleImageClick}),a.length>0&&r.a.createElement(O,{fetchGallery:this.fetchGallery})),o&&r.a.createElement(A,{onCloseModal:this.handleCloseModal},r.a.createElement("img",{src:this.state.modalImageURL,alt:this.state.searchQuery})))}}]),t}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))},8:function(e,a,t){e.exports={ImageGalleryItem:"iImageGalleryItem_ImageGalleryItem__3cToa","ImageGalleryItem-image":"iImageGalleryItem_ImageGalleryItem-image__2bAYq"}},9:function(e,a,t){e.exports={Overlay:"Modal_Overlay__3KK4j",Modal:"Modal_Modal__JZbLZ"}}},[[27,1,2]]]);
//# sourceMappingURL=main.592ef40e.chunk.js.map