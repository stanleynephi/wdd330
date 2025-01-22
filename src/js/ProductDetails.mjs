import { setLocalStorage } from "./utils.mjs";


//product details class modeled afer the product data class
export default class ProductDetails{
    constructor(productID,dataSource){
        this.productID = productID;
        this.product = {};
        this.dataSource = dataSource;
    }
}

//create a function to create a template for the product details
function createTemplate(product){
    //use return to create a template
    return ` <section class = "product-details"> <h3> ${product.Brand.Name} </h3>
    <h2 class = "divider"> ${product.NameWithoutBrans} </h2>
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
    </div></section>
    `
}

