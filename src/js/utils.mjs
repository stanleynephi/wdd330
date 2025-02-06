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
  const htmlString = list.map(templatefn);
  //refactor this function
  if(clear){
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlString.join(''))
}




//create a function called renderListWithTemplate
export function renderWithTemplate(template,parentElement,data,callback){

  
  //refactor this function
  if(callback){
    callback(data);
  }
}

async function loadTemplate (path) {
  const res = await fetch(path);
  const html = await res.text();
  return html
}


//function to dynamically load the header and footer into a page
export  default async function loadHeaderFooter(){
  const headerTemplate = await loadTemplate("../src/partials/header.html")
  console.log(headerTemplate)
  const header = document.querySelector("#main-header")

  const footerTemplate = await loadTemplate("../src/partials/footer.html")
  const footer = document.querySelector("#main-footer")

  if(header){
    console.log("header found")
  }

  if(footer){
    console.log("footer found")
  }


  //render it using the renderWithTemplate function
  renderWithTemplate(headerTemplate,header)
  renderWithTemplate(footerTemplate,footer)
}

