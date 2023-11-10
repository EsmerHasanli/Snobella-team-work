import { getAllProducts, getProductsByID, deleteProducts, postProducts, putProductsByID, patchProductsByID } from "./productsrequests.js";

const productsWrapper = document.querySelector('.cards-wrapper'); 
const productsCount = document.querySelector('#productsCount');

//#region  display products
function displayProducts(product) {
    const productCardHTML = `
        <div class="card col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="imgbox">
                <img src="${product.imageURL}" alt="">
                <div class="new">
                    <span>New</span>
                </div>
                <!-- Additional SVG code -->
            </div>
            <div class="card-body">
                <div class="rate">
                    <!-- SVG rating code -->
                </div>
                <div class="card-title">
                    <h3>${product.name}</h3>
                </div>
                <div class="price">
                    <h3>$${product.price}</h3>
                    <span>From $${product.discountPrice}</span>
                </div>
                <div class="add-btn">
                    <button type="button" class="btn btn-outline-dark">Add to cart</button>
                </div>
            </div>
        </div>
    `;
    productsWrapper.innerHTML += productCardHTML;
}
//#endregion

//#region get all products
const loader = document.querySelector('#loader')
document.addEventListener('DOMContentLoaded', async () => {
    const products = await getAllProducts();
    productsCount.textContent = products.length+' '+'result';
    loader.style.display = 'none';
    products.forEach((product) =>{
        displayProducts(product);
    });
})
//#endregion

//#region choose color 
let productColor = document.querySelectorAll('.productColor');
productColor.forEach((btn) => {
    btn.addEventListener('click', async function (){
        productsWrapper.innerHTML = '';
        const products = await getAllProducts();
        for (let i = 0; i <productColor.length; i++){
            let productColorValue = btn.getAttribute('data-color');
            console.log(productColorValue);
            products.forEach((product) =>{
                if(productColorValue.toLowerCase().trim() == product.color.toLowerCase().trim()){
                    let filteredProduct = product
                    let arr = [];
                    arr.push(filteredProduct)
                    productsCount.textContent = arr.length+' '+'result';
                    console.log(filteredProduct);
                    displayProducts(product)
                    localStorage.setItem('filteredProduct', JSON.stringify({ id: product.id, color: product.color }));
                }
            })
            break;
        }
    })
})
//#endregion

//#region choose category
const productCategory= document.querySelectorAll('.productCategory');
productCategory.forEach((btn) => {
    btn.addEventListener('click', async function (){
        productsWrapper.innerHTML = '';
        const products = await getAllProducts();
        for (let i = 0; i <productCategory.length; i++){
            let productCategoryValue = btn.getAttribute('data-category');
            console.log(productCategoryValue);
            products.forEach((product) =>{
                if(productCategoryValue.toLowerCase().trim() == product.categories.toLowerCase().trim()){
                    let filteredProduct = product
                    let arr = [];
                    arr.push(filteredProduct)
                    productsCount.textContent = arr.length+' '+'result';
                    console.log(filteredProduct);
                    displayProducts(product)
                    localStorage.setItem('filteredProduct', JSON.stringify({ id: product.id, category: product.categories }));
                }
            })
            break;
        }
    })
})
//#endregion

//#region choose size 
const productSize= document.querySelectorAll('.productSize');
productSize.forEach((btn) => {
    btn.addEventListener('click', async function (){
        productsWrapper.innerHTML = '';
        const products = await getAllProducts();
        for (let i = 0; i <productSize.length; i++){
            let productSizeValue = btn.getAttribute('data-size');
            console.log(productSizeValue);
            products.forEach((product) =>{
                if(productSizeValue.toLowerCase().trim() == product.size.toLowerCase().trim()){
                    let filteredProduct = product
                    let arr = [];
                    arr.push(filteredProduct)
                    productsCount.textContent = arr.length+' '+'result';
                    console.log(filteredProduct);
                    displayProducts(product)
                    localStorage.setItem('filteredProduct', JSON.stringify({ id: product.id, size: product.size }));
                }
            })
            break;
        }
    })
})
//#endregion
     
//#region get price 
const minPriceInput = document.querySelector('#min-price-input')
const maxPriceInput = document.querySelector('#max-price-input')
const searchBtn = document.querySelector('#search-button')

searchBtn.addEventListener('click', async () => {
    productsWrapper.innerHTML = '';
    const minPrice = minPriceInput.value
    const maxPrice = maxPriceInput.value
    const products = await getAllProducts();
    products.forEach((product) =>{
        if(product.price > minPrice && product.price < maxPrice){
            let filteredProduct = product
            let arr = [];
            arr.push(filteredProduct)
            productsCount.textContent = arr.length+' '+'result';
            displayProducts(product);
        }
    });
})

//#endregion

//#region search input 

let searchInput = document.querySelectorAll('.searchInput')

searchInput.forEach((input) => {
    console.log(input) 

    input.addEventListener('keyup', async () => {
        productsWrapper.innerHTML = '';

        const products = await getAllProducts();

        products.forEach((product) =>{
            if(product.name.toLowerCase().trim().includes(input.value.toLowerCase().trim())){
                displayProducts(product);
            }
        });

    })

})

//#endregion
