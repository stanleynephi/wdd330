//import the add to cart function from project.js
import { getLocalStorage,setLocalStorage } from './utils.mjs';

//function to create a template using js
function productDetailsTemplate(product) {
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}


//Product Details class
export default class ProductDetails{
  constructor(productID,dataSource){
    this.productID = productID;
    this.dataSource = dataSource;
    this.product = {};
  }

  async init() {

    try{
            //use datasource to get details of current product
    this.product = await this.dataSource.findProductById(this.productID);
    //render unto HTML
    this.renderProductDetails("main");
    //add a listener to add to cart
    document
    .getElementById("addToCart")
    .addEventListener("click", this.addProductToCart.bind(this));
    }

    catch(error){
      console.error(error);
    }

  }

  // addToCart() {
  //   setLocalStorage("so-cart", this.product);
  // }


  addProductToCart(product){
    //event listeners for add to cart
      //use the get localstorage function to retrieve the data in the local storage
    let cart = getLocalStorage("so-cart");
    // Ensure cart is an array; if not, initialize it as an empty array
    if (!Array.isArray(cart)) {
      cart = [];
    }
  //add the product to the cart
  cart.push(this.product);

  //loop through the cart and log the total number of product in the cart
  setLocalStorage("so-cart", cart);

    
  }

  renderProductDetails(selector){
    //render the product details
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
      "afterBegin",
      productDetailsTemplate(this.product)
    )
  }
}


