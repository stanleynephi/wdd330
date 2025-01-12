import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  //use the get localstorage function to retrieve the data in the local storage
  let cart = getLocalStorage("so-cart");
  // Ensure cart is an array; if not, initialize it as an empty array
  if (!Array.isArray(cart)) {
    cart = [];
  }
  //add the product to the cart
  const addToCart = cart.push(product);

  if (addToCart) {
    alert(`Added ${product.Name} to cart`);
  }

  //loop through the cart and log the total number of product in the cart
  setLocalStorage("so-cart", cart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
