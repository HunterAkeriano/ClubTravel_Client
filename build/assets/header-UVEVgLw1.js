import{$ as r}from"./jquery-j2bgAS1c.js";class o{burgerBtn;body;header;constructor(){this.burgerBtn=r(".header__burger-btn"),this.body=r("body"),this.header=r(".header"),this.burger(),this.scroll()}burger(){const e=this;this.burgerBtn.on("click",function(){e.burgerBtn.toggleClass("header__burger-btn_active"),e.body.toggleClass("burger-menu-active"),e.body.hasClass("burger-menu-active")?setTimeout(()=>{e.header.css({overflow:"auto",height:"100%"})},300):e.header.css({overflow:"unset",height:"auto"})})}scroll(){window.addEventListener("scroll",()=>{window.scrollY>50||window.pageYOffset>50?(console.log(!0),this.body.addClass("scroll")):this.body.removeClass("scroll")})}}export{o as H};