//display the element in the cart using what is added in the local storage
import { getLocalStorage } from "./utils.mjs"


function CartCardTemplate(product){
  const cartItems = `<li class="cart-cart divider">
    <a href = "../product_page/index.html?product=${product.Id}">
    <img
      src = "${product.Image}"
      alt = "Image of ${product.Name}"
      />
      <h3 class="card_brand">${product.Brand.Name}</h3>
      <h3 class="card_name">${product.Name}</h3>
      <p class="card_price">$${product.FinalPrice}</p>
    </li>
  `

  return cartItems
}

export default class CartItems{
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }


  RenderCartContent(){
    const cartItems = getLocalStorage(this.key);
    const htmlItems = cartItems.map((item) => CartCardTemplate(item));
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
  }
}

