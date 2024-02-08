import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { DropCountry } from "../code/tour_request/drop-country";
import { Calendar } from "../code/tour_request/calendar";
import { DropDown } from "../code/tour_request/dropdown";
import { Food } from "../code/tour_request/food";
//@ts-ignore
import JustValidate from "just-validate";

import $ from "jquery";
// import Cleave from "cleave.js";
// import JustValidate from "just-validate";

document.addEventListener("DOMContentLoaded", () => {
  class TourRequest {
    header: Header;
    footer: Footer;
    food: Food;
    inputWrapper: JQuery<HTMLElement>;
    input: JQuery<HTMLInputElement>;
    inputBtn: JQuery<HTMLButtonElement>;
    tabsBtn: JQuery<HTMLElement>;
    form: JQuery<HTMLFormElement>;
    tabsSlider: JQuery<HTMLElement>;
    dropDown: DropCountry;
    calendar: Calendar;
    DropPeople: DropDown;
    formBtn: JQuery<HTMLElement>;
    stars: JQuery<HTMLElement>;
    inputForm: JQuery<HTMLElement>;

    constructor() {
      this.header = new Header();
      this.footer = new Footer();
      this.food = new Food();
      this.dropDown = new DropCountry();
      this.counter();
      this.calendar = new Calendar();
      this.DropPeople = new DropDown(".form__drop-guests");
      this.stars = $(".form__stars-one-star");

      this.inputWrapper = $(".adviser__input");
      this.input = $("#adviser-inp");
      this.inputBtn = $(".adviser__btn");
      this.inputForm = $("#adviser__form");
      this.tabsBtn = $(".form__tabs");
      this.form = $(".form");

      this.formBtn = this.form.find(".form__btn");
      this.tabsSlider = $(".form__tabs-slider");

      this.inputMask();

      this.tabs();
      this.points();
      this.stopReload();
      this.clickFormBtn();
      this.SelectStars();
      this.inputValidate();
    }

    SelectStars() {
      const context = this;

      this.stars.each((_index, item) => {
        item.addEventListener("click", () => {
          addActive(Number(item.getAttribute("data-num")));
        });
      });

      function addActive(attribute: number) {
        context.stars.each((index, item) => {
          if (index < attribute) {
            item.classList.add("form__stars-one-star_active");
          } else {
            item.classList.remove("form__stars-one-star_active");
          }
        });
      }
    }

    stopReload() {
      this.form.on("submit", (e): void => {
        e.preventDefault();
      });
    }

    tabs() {
      const btnOne = document.querySelector(".form__tab-one");
      const btnTwo = document.querySelector(".form__tab-two");
      const btnThree = document.querySelector(".form__tab-three");

      this.tabsBtn.each((_index, item) => {
        item.addEventListener("click", (e) => {
          if (btnOne?.contains(e.target as Node)) {
            this.points(1);
          } else if (btnTwo?.contains(e.target as Node)) {
            this.points(2);
          } else if (btnThree?.contains(e.target as Node)) {
            this.points(3);
          }
        });
      });
    }

    points(num: number = 1) {
      console.log(num);
      const btnOne = document.querySelector(".form__tab-one");
      const btnTwo = document.querySelector(".form__tab-two");
      const btnThree = document.querySelector(".form__tab-three");
      const noErrorFirst = !$(".form").is(".form_erroe-one");
      if (num === 1) {
        btnThree?.classList.remove("form__tab_active");
        btnTwo?.classList.remove("form__tab_active");
        btnOne?.classList.add("form__tab_active");

        this.form.removeClass("form_two-state form_three-state");
        this.form.addClass("form_one-state");

        this.tabsSlider.css({
          left: "0",
        });
      } else if (num === 2 && noErrorFirst) {
        btnThree?.classList.remove("form__tab_active");
        btnOne?.classList.remove("form__tab_active");
        btnTwo?.classList.add("form__tab_active");

        this.form.removeClass("form_one-state form_three-state");
        this.form.addClass("form_two-state");

        this.tabsSlider.css({
          left: "33.3%",
        });
      } else if (num === 3 && noErrorFirst) {
        btnOne?.classList.remove("form__tab_active");
        btnTwo?.classList.remove("form__tab_active");
        btnThree?.classList.add("form__tab_active");

        this.form.removeClass("form_one-state form_two-state");
        this.form.addClass("form_three-state");

        this.tabsSlider.css({
          left: "68%",
        });
      }
    }

    clickFormBtn() {
      this.formBtn.on("click", () => {
        const oneState = $(".form").is(".form_one-state");
        const twoState = $(".form").is(".form_two-state");
        const threeState = $(".form").is(".form_three-state");

        if (oneState) {
          this.points(2);
        } else if (twoState) {
          this.points(3);
        } else if (threeState) {
          this.points(1);
        }
      });
    }

    addError(num: number) {
      if (num === 1) {
      } else if (num === 2) {
      } else if (num === 3) {
      }
    }

    clickBtn() {
      alert("В скором времени вам позвонят.");
      this.input.val("");
      this.inputWrapper.removeClass("adviser__input_active");
    }

    inputMask() {
      this.input.on("input", () => {
        const value: number | undefined = this.input.val()?.length;
        if (value && value > 0) {
          this.inputWrapper.addClass("adviser__input_active");
        } else {
          this.inputWrapper.removeClass("adviser__input_active");
        }
      });

      new Cleave("#adviser-inp", {
        blocks: [3, 3, 2, 2],
        numericOnly: true,
        uppercase: true,
      });
    }

    inputValidate() {
      const validate = new JustValidate("#adviser__form");
      const ruleName = [
        {
          rule: "required",
          errorMessage: "Введите имя",
        },
        {
          rule: "minLength",
          value: 13,
          errorMessage: "Минимум 3 буквы",
        },
        {
          rule: "customRegexp",
          value: /[0-9]/,
          errorMessage: "Три одинаковых буквы подряд",
        },
      ];
      const settingName = {
        errorsContainer: ".adviser__input-error",
        errorLabelCssClass: ["invalid"],
        errorFieldCssClass: ["error-focus"],
      };
      validate.addField("#adviser-inp", ruleName, settingName);

      validate.onSuccess(() => {
        this.clickBtn();
      });
    }

    counter() {
      const add = $(".form__counter-add");
      const remove = $(".form__counter-remove");
      const total = $(".form__counter-count");
      const context = this;
      const sessionTotal = sessionStorage.getItem("count");
      if (sessionTotal) {
        total.html(sessionTotal);
      } else {
        total.html("1");
      }

      function addOne(): void {
        let current = +total.text();
        if (current < 18) {
          const sum = current + 1;
          selectSum(String(sum));
        }
      }

      function removeOne(): void {
        let current = +total.text();
        if (current > 1) {
          const sum = current - 1;
          selectSum(String(sum));
        }
      }

      function selectSum(sum: string) {
        total.html(sum);
        context.calendar.removeFinalDate();
        sessionStorage.setItem("count", sum);
      }

      add.on("click", addOne);
      remove.on("click", removeOne);
    }
  }
  new TourRequest();
});
