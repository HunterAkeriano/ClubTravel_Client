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

const companyWrapper = document.querySelector(".main-company__swiper-wrapper");

export class CompanyProduct {  
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
      const { name, price, img} = content;
      
      if (img && Array.isArray(img) && img.length > 0) {
        const { url, urlWebp } = img[0];

      let template = `
      <div class="swiper-slide main-company__swiper-slide">
        <div class="main-company__card">
        <div class="main-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${urlWebp} type="image/webp" />
            <img src=${url} alt="bg" />
          </picture>
          `;

      if (price[1]) {
        template += `
            <div class="main-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="main-company__card-line-wrapper">
              <p class="main-company__card-line-price">от ${price[1]}€</p>
            </div>
          </div>
            `;
      }

      template += `
          <div class="main-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="main-company__card-data">22.11.2020</p>
          </div>
        </div>
        <p class="main-company__card-text">${name}</p>
      </div>
      </div>
        `;

      if (companyWrapper) {
        companyWrapper.insertAdjacentHTML("beforeend", template);
      }
    }
    });
  };
}

