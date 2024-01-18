import $ from "jquery";

export class Header{
    burgerBtn: JQuery<HTMLDivElement>;
    body: JQuery<HTMLDivElement>;
    header: JQuery<HTMLDivElement>;
    constructor(){
        this.burgerBtn = $('.header__burger-btn');
        this.body = $('body');
        this.header = $('.header');
        this.burger();
    }
    burger(): void{
        const context = this
        this.burgerBtn.on('click', function() {
            context.burgerBtn.toggleClass('header__burger-btn_active');
            context.body.toggleClass('burger-menu-active');
            if(context.body.hasClass('burger-menu-active')){
                setTimeout(() => {
                    context.header.css({
                        overflow: "auto",
                        height: "100%",
                    })
                },300)
            }else{
                context.header.css({
                    overflow: "unset",
                    height: "auto"
                });
            }
        })
    }
}



