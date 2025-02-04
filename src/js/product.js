import { getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import loadHeaderFooter from "./utils.mjs";

loadHeaderFooter();

const urlString = getParams("product");
const dataSource = new ProductData("tents");
const productDetail = new ProductDetails(urlString, dataSource);
productDetail.init();
