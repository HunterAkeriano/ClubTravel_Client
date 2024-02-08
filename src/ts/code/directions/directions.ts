import { Tours } from '../../type';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",
  authDomain: "clubtravel-6eff6.firebaseapp.com",
  projectId: "clubtravel-6eff6",
  storageBucket: "clubtravel-6eff6.appspot.com",
  messagingSenderId: "883499742498",
  appId: "1:883499742498:web:b0bf6b06d8073d249a217b",
};

const companyWrapper = document.querySelector(".directions__wrapper");

export class DirectionProduct {  
  private app: any;
  private db: any;
  private productsArray: Tours[];

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.productsArray = [];
  }

  async loadCards() {
   
    const querySnapshot = await getDocs(collection(this.db, 'hotels'));
    querySnapshot.forEach((doc) => {
      const product = doc.data() as Tours;
      
      this.productsArray.push(product);
    });

    this.renderProducts();
  }
 
  renderProducts() {
    const products = this.productsArray;
      
    products.forEach((product) => {
      const content = product;
      
      const { img, country, region } = content;
      
      if (img && Array.isArray(img) && img.length > 0) {
        const { url, urlWebp } = img[0];

      let template = `
        <div class="directions__card">
        <div class="directions__card-img">
          <picture class="hero__bg-img">
            <source srcset=${urlWebp} type="image/webp" />
            <img src=${url} alt="bg" />
          </picture>
        </div>
        <div class="directions__card-place-wrapper">
            <div class="directions__card-place">
            `;

            if(region.length < 10) {
                template += `
                    <p class="directions__card-place-town">${region}</p>
                `
            } else {
                template += `
                    <p class="directions__card-place-town">${region.slice(0, 10) + "..."}</p>
                `
            }
            
              template += `
                <p class="directions__card-place-country">${country}</p>
            </div>
            <div class="directions__card-price">
                <p class="directions__card-price-person">от <span>319,00€</span>/чел</p>
                <p class="directions__card-price-offer">214 предложения</p>
            </div>
        </div>
        <div class="directions__card-season-wrapper">
            <div class="directions__card-season">
                <p class="directions__card-season-start-end">19 июня 2020 - 30 сентября 2020</p>
                <p class="directions__card-season-start-end">08 июля 2020 - 05 апреля 2021</p>
            </div>
            <svg>
              <use xlink:href="#directions-calendar"></use>
            </svg>
        </div>
        <a href="#" class="directions__btn btn">Выбрать тур</a>
      </div>
        `;

      if (companyWrapper) {
        companyWrapper.insertAdjacentHTML("beforeend", template);
      }
    }
    });
  };
}