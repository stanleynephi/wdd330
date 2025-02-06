import CartItems from "./ShoppingCart.mjs";
import loadHeaderFooter from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";

loadHeaderFooter();

//create a new instance of the CartItems
const cart = new CartItems("so-cart", ".product-list");
cart.RenderCartContent();
