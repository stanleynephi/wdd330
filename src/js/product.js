import { getParams } from "./utils.mjs";
import { ProductData } from "./ProductData.mjs";
import { ProductDetails } from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const urlString = getParams("product");
const productDetail = new ProductDetails(urlString, dataSource);
productDetail.init();
