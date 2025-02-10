import { getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import loadHeaderFooter from "./utils.mjs"

loadHeaderFooter();

const category = getParams("hammock")
const productData = new ProductData(category);
const listElement = document.querySelector(".product-list")
const productList = new ProductList(listElement, productData, category);

productList.init();

