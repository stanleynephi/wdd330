//import the function from utils.js
import { renderListWithTemplate } from "./utils.mjs";

//creating a function for html template to be used 
function ProductCardTemplate(product){
    return `<li class="product-card">
  <a href="../product_page/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}



//create a list of product card in HTML from an array
export default class ProductList{
    constructor(category,dataSource,listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    //use init to get the data from the data source
    async init() {
        const list = await this.dataSource.getData(this.category)
        console.log(list)
        // this.renderList(list)
        document.querySelector(".title").innerHTML = this.category
    }
    
    
    renderList(list){
        //use the renderListWithTemplate function to render the list of products
        renderListWithTemplate(ProductCardTemplate,this.listElement,list)
    }
}