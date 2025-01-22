//import the function from utils.js
import { renderListWithTemplate } from "./utils.mjs";

//creating a function for html template to be used 
function ProductCardTemplate(product){
    return `<li class = "product-card">
        <a href = "product_pages/index.html?product=">
            <img src="" alt="Image of ">
            <h3 class="card__brand"></h3>
            <h2 class="card__name"></h2>
            <p class="product-card__price">$</p>
        </a>
    </li>`
}



//create a list of product card in HTML from an array
export default class ProductListing{
    constructor(category,dataSource,listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    //use init to get the data from the data source
    async init(){
        //use the data source to get the data
        const list = await this.dataSource.getData()
        this.renderList(list)
    }

    //adding a method to the class
    //add a method to this class called renderList to use the template
    renderList(list) {
        renderListWithTemplate(this.listElement, list, ProductCardTemplate);
    }
}

//method to filter out the number of tents and show only 4
function filterTents(list){
    return list.filter((items)=> items.category === "tents").slice(0,4)
}