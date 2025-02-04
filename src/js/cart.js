import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import RenderHeaderFooter from "./utils.mjs";

RenderHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Add event listeners to remove buttons
  const removeItems = document.querySelectorAll(".remove-from-list");
  removeItems.forEach((remove, index) => {
    remove.addEventListener("click", () => {
      removeItemFromCart(index);
    });
  });
}

//remove items from cart
function removeItemFromCart(index) {
  let cartItems = getLocalStorage("so-cart") || [];
  cartItems.splice(index, 1); // Remove the item at the given index
  setLocalStorage("so-cart", cartItems); // Save the updated cart to localStorage
  renderCartContents(); // Re-render the cart
}

//update the cartItemTemplate and add an "x" to each side of the
//cart items so
function cartItemTemplate(item, index) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>
  <button class="remove-from-list" data-index="${index}"> X </button>
`;

  return newItem;
}

renderCartContents();
