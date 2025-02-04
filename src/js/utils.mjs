// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}


//create a function to get the search parameter from the url
export function getParams(Param){
  const urlSearchQuery = window.location.search;
  const urlParams = new URLSearchParams(urlSearchQuery);
  const product = urlParams.get(Param);
  return product;
}

//create a function called renderListWithTemplate
export function renderListWithTemplate(templatefn,parentElement,list,position = "afterbegin",clear = false){
  const htmlString = list.map(ProductCardTemplate);
  //refactor this function
  if(clear){
    parentElement.innerHTML = "";
  }
  parentElement.listElement.insertAdjacentHTML(position, htmlString.join(''))
}




//create a function called renderListWithTemplate
export function renderWithTemplate(templatefn,parentElement,data,callback){
  parentElement.insertAdjacentHTML("afterbegin", templatefn)
  //refactor this function
  if(callback){
    callback(data);
  }
}

async function Template (path) {
  const res = await fetch(path);
  const html = await res.text();
  return html
}


//function to dynamically load the header and footer into a page
export  default async function RenderHeaderFooter(){
  const headerTemp = await Template("../partials/header.html")
  const header = document.getElementById("main-header")

  const footerTemp = await Template("../partials/footer.html")
  const footer = document.getElementById("#main-footer")


  //render it using the renderWithTemplate function
  renderWithTemplate(headerTemp,header)
  renderWithTemplate(footerTemp,footer)
}

