//import the needed files and contents
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import RenderHeaderFooter from "./utils.mjs";

//use the loadHeaderFooter function to load the header and footer dynamically into the index.html
RenderHeaderFooter();

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

listing.init();
