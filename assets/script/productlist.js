import { getAllProducts, getProductsByID, deleteProducts, postProducts, putProductsByID, patchProductsByID } from "./productsrequests.js";

const productsWrapper = document.querySelector('.cards-wrapper'); 
const productsCount = document.querySelector('#productsCount');

//#region  display products
function displayProducts(product) {
    const productCardHTML = `
    <div class="card">
        <div class="imgbox">
            <img src="${product.imageURL}" alt="">
            <div class="new">
                <span>New</span>
            </div>
            <div id=${product.id} class="favButtons">
                    <svg id="fav-outlined" class='d-flex' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                    fill="none">
                    <path
                        d="M10.9997 19.25L9.67051 18.0631C4.94967 13.8639 1.83301 11.0944 1.83301 7.6955C1.83301 4.92602 4.05134 2.75 6.87467 2.75C8.46967 2.75 10.0005 3.47834 10.9997 4.62929C11.9988 3.47834 13.5297 2.75 15.1247 2.75C17.948 2.75 20.1663 4.92602 20.1663 7.6955C20.1663 11.0944 17.0497 13.8639 12.3288 18.0721L10.9997 19.25Z"
                        stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
                </svg>
                <svg id="fav-filled" class='d-none' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M10.9997 19.25L9.67051 18.0631C4.94967 13.8639 1.83301 11.0944 1.83301 7.6955C1.83301 4.92602 4.05134 2.75 6.87467 2.75C8.46967 2.75 10.0005 3.47834 10.9997 4.62929C11.9988 3.47834 13.5297 2.75 15.1247 2.75C17.948 2.75 20.1663 4.92602 20.1663 7.6955C20.1663 11.0944 17.0497 13.8639 12.3288 18.0721L10.9997 19.25Z" fill="#DF4244" stroke="#DF4244" stroke-width="2" stroke-linecap="square"/>
                </svg>
            </div>
                    </div>
        <div class="card-body">
            <div class="rate">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="card-title">
                <h3>${product.name}</h3>
            </div>
            <div class="price">
                <h3>$${product.price - (product.price * product.discountPercentage / 100)} </h3>
                <span>From $${product.price}</span>
            </div>
            <div class="add-btn">
                <button id=${product.id} type="button" class="btn btn-outline-dark btn-basket">Add to card </button>
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


        let basketButtons = document.querySelectorAll(".btn-basket");
    // console.log(basketButtons);
    let arr = [];
    if (JSON.parse(localStorage.getItem("basket"))) {
      arr = JSON.parse(localStorage.getItem("basket"));
    }
    basketButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your product has been saved",
          showConfirmButton: false,
          timer: 1500,
        });

        if (arr.find((x) => x.id == this.id)) {
          let elem = arr.find((x) => x.id == this.id);
          elem.count = elem.count + 1;
          localStorage.setItem("basket", JSON.stringify(arr));
          basketListCount.textContent = JSON.parse(
            localStorage.getItem("basket")
          ).length;
        } else {
          let obj = { id: this.id, count: 1 };
          arr.push(obj);
          localStorage.setItem("basket", JSON.stringify(arr));
          basketListCount.textContent = JSON.parse(
            localStorage.getItem("basket")
          ).length;
        }
      });
    });


        //add to favorites
       const outlinedIcons = document.querySelectorAll('#fav-outlined');
       const filledIcons = document.querySelectorAll('#fav-filled');


       //empty heart - add to fav
       outlinedIcons.forEach((outlinedIcon) => {
           outlinedIcon.addEventListener('click', function () {
               const divId = outlinedIcon.parentElement.getAttribute('id');

               const favesId = JSON.parse(localStorage.getItem("favesId"))
               if (!favesId) {
                   localStorage.setItem("favesId", JSON.stringify([{ id: divId }]))

               }

               else {
                   favesId.push({ id: divId })
                   localStorage.setItem("favesId", JSON.stringify(favesId))
               }



               outlinedIcon.classList.replace("d-flex", "d-none")

               filledIcons.forEach((filledIcon) => {
                   const idForFilled = filledIcon.parentElement.getAttribute('id');

                   if (idForFilled === divId) {

                       filledIcon.classList.replace('d-none', 'd-flex')
                   }
               });

           });

       });

       //filled heart - remove from fav
       filledIcons.forEach((filledIcon) => {
           filledIcon.addEventListener('click', function () {
               const divId = filledIcon.parentElement.getAttribute('id');

               let favArr = JSON.parse(localStorage.getItem('favesId'))
               const filteredArr = favArr.filter(elem => elem.id != divId)
               localStorage.setItem('favesId',  JSON.stringify(filteredArr))

               filledIcon.classList.replace("d-flex", "d-none")

               outlinedIcons.forEach((outlinedIcon) => {
                   const idForOutlined = outlinedIcon.parentElement.getAttribute('id');

                   if (idForOutlined === divId) {

                       outlinedIcon.classList.replace('d-none', 'd-flex')
                   }
               });

           });

       });
    });


     //check added items
     const outlinedIcons = document.querySelectorAll('#fav-outlined');
     const filledIcons = document.querySelectorAll('#fav-filled');
     
     const favesId = JSON.parse(localStorage.getItem("favesId")) 
 
     outlinedIcons.forEach(icon => {
 
         const divId = icon.parentElement.getAttribute("id")
 
         favesId.forEach((obj)  => {
             if (obj.id == divId) {
                 icon.classList.replace("d-flex", "d-none")
 
                 filledIcons.forEach((filledIcon) => {
                     const parentId = filledIcon.parentElement.getAttribute("id")
                     if (parentId == obj.id) {
                         filledIcon.classList.replace("d-none", "d-flex")
                     }
                 })
             }
         })
     })
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
