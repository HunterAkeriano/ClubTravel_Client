import{H as u}from"./header-hiQeVM5C.js";import{g,d,G as h,a as c,F as m,e as p}from"./index-dd468b12-ZD5C6yO3.js";import{a as w}from"./firebase-WXR3vcUU.js";import"./index.esm-RQMDg1fI.js";class b{app;auth;constructor(){this.app=w,this.auth=g()}registrationWithEmail(){const o=document.querySelector("#registrationMail"),e=o.value,t=document.querySelector("#registrationPassword"),s=t.value,n=document.querySelector("#registrationRepeatPassword");s===n.value&&d(this.auth,e,s).then(r=>{const i=r.user;o.value="",t.value="",n.value="",alert("Вы зарегистрированы!"),console.log("Registration with email successful:",i)}).catch(r=>{const i=r.code,l=r.message;console.error("Registration with email failed:",i,l)})}registrationWithGoogle(){const o=new h;c(this.auth,o).then(e=>{const t=e.user;console.log("Registration with Google successful:",t)}).catch(e=>{const t=e.code,s=e.message;console.error("Registration with Google failed:",t,s)})}registrationWithFacebook(){const o=new m;c(this.auth,o).then(e=>{const t=e.user;console.log("Registration with Facebook successful:",t)}).catch(e=>{const t=e.code,s=e.message;console.error("Registration with Facebook failed:",t,s)})}}new u;p();const a=new b,f=document.querySelector(".registration__btn-registration");f.addEventListener("click",()=>{a.registrationWithEmail()});const v=document.querySelector(".registration__form-btn-google");v.addEventListener("click",()=>{a.registrationWithGoogle()});const R=document.querySelector(".registration__form-btn-facebook");R.addEventListener("click",()=>{a.registrationWithFacebook()});
