//import the rendar with template function from the utils.js
import { getLocalStorage } from "./utils.mjs";


//create a function for the html template
function createHtmlTemplate(product){
    return `
        <li class = "product-card">
        <a href = "product_pages/index.html?product=${product.Id}">
        <img
            src = "${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
    `
} 

export default class Cart {
    constructor(key, parentSelector) {
      this.key = key;
      this.parentSelector = parentSelector;
    }
    renderCartContents() {
      const cartItems = getLocalStorage(this.key);
      const htmlItems = cartItems.map((item) => createHtmlTemplate(item));
      document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    }
  }