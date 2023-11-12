import {
    getAllProducts,
    getProductsByID,
    deleteProducts,
    postProducts,
    putProductsByID,
    patchProductsByID,
  } from "./productsrequests.js";
  document.addEventListener("DOMContentLoaded",async()=>{
    let productWrapper = document.querySelector(".product-wrapper")
    let id = new URLSearchParams(location.search).get("id")
    console.log(productWrapper);

    let product = await getProductsByID(id)
    console.log(product);

    productWrapper.innerHTML +=`
    <div id="product-image" class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
    <div class="image-wrapper">
      <img src="${product.imageURL}" alt="product-image">

      <span class="discount-percentage">30%</span>

      <svg class="fav" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
        fill="none">
        <path
          d="M14.0002 24.5L12.3085 22.9894C6.30016 17.645 2.3335 14.1202 2.3335 9.79428C2.3335 6.26948 5.15683 3.5 8.75016 3.5C10.7802 3.5 12.7285 4.42698 14.0002 5.89183C15.2718 4.42698 17.2202 3.5 19.2502 3.5C22.8435 3.5 25.6668 6.26948 25.6668 9.79428C25.6668 14.1202 21.7002 17.645 15.6918 23.0008L14.0002 24.5Z"
          stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
      </svg>
    </div>
  </div>
  <div id="choose-options" class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
    <h1>${product.name}</h1>
    <p>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <g clip-path="url(#clip0_1_402)">
          <path
            d="M6.99984 9.68827L4.47617 11.0833L4.95817 8.12857L2.9165 6.03604L5.73822 5.60494L6.99984 2.91663L8.26145 5.60494L11.0832 6.03604L9.0415 8.12857L9.5235 11.0833L6.99984 9.68827Z"
            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
        </g>
        <defs>
          <clipPath id="clip0_1_402">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <g clip-path="url(#clip0_1_402)">
          <path
            d="M6.99984 9.68827L4.47617 11.0833L4.95817 8.12857L2.9165 6.03604L5.73822 5.60494L6.99984 2.91663L8.26145 5.60494L11.0832 6.03604L9.0415 8.12857L9.5235 11.0833L6.99984 9.68827Z"
            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
        </g>
        <defs>
          <clipPath id="clip0_1_402">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <g clip-path="url(#clip0_1_402)">
          <path
            d="M6.99984 9.68827L4.47617 11.0833L4.95817 8.12857L2.9165 6.03604L5.73822 5.60494L6.99984 2.91663L8.26145 5.60494L11.0832 6.03604L9.0415 8.12857L9.5235 11.0833L6.99984 9.68827Z"
            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
        </g>
        <defs>
          <clipPath id="clip0_1_402">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <g clip-path="url(#clip0_1_402)">
          <path
            d="M6.99984 9.68827L4.47617 11.0833L4.95817 8.12857L2.9165 6.03604L5.73822 5.60494L6.99984 2.91663L8.26145 5.60494L11.0832 6.03604L9.0415 8.12857L9.5235 11.0833L6.99984 9.68827Z"
            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
        </g>
        <defs>
          <clipPath id="clip0_1_402">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <g clip-path="url(#clip0_1_402)">
          <path
            d="M6.99984 9.68827L4.47617 11.0833L4.95817 8.12857L2.9165 6.03604L5.73822 5.60494L6.99984 2.91663L8.26145 5.60494L11.0832 6.03604L9.0415 8.12857L9.5235 11.0833L6.99984 9.68827Z"
            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
        </g>
        <defs>
          <clipPath id="clip0_1_402">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      5.0
      <span>|</span>
      2 reviews
    </p>

    <div id="price-cards-wrapper">
      <div class="price" class="col-6">
        <p>2-9 pieces</p>
        <span>US $20.00</span>
      </div>
      <div class="price" class="col-6">
        <p>10-49 pieces</p>
        <span>US $15.00</span>
      </div>
      <div class="price" class="col-6">
        <p>50 pieces</p>
        <span>US $12.00</span>
      </div>
      <div class="price" class="col-6">
        <p>2-9 pieces</p>
        <span>US $20.00</span>
      </div>
    </div>

    <div id="products-size-color">
      <div class="size col-6">
        <h3>Size</h3>
        <ul>
          <li class="size-option">XS</li>
          <li class="size-option">S</li>
          <li class="size-option">M</li>
        </ul>
      </div>
      <div class="color col-6">
        <h3>Color</h3>
        <ul>
          <li class="color-option"></li>
          <li class="color-option"></li>
          <li class="color-option"></li>
          <li class="color-option"></li>
        </ul>
      </div>
    </div>

    <div id="buttons-wrapper">
      <button>Add to card</button>
    </div>

    <div id="wp">
      <a href="#">WhatsApp Order</a>
    </div>
  </div>
    `
})














// description and review
let boxes = document.querySelectorAll(".box")
let themes = document.querySelectorAll(".themes")
let line = document.querySelector(".line svg");
console.log(themes);
    
themes.forEach((theme) => {
    theme.style.display = "block";
});

themes[1].style.display = "none";
console.log(themes[1]);
boxes.forEach((box,index) => {
    box.addEventListener("click",function(){
        themes.forEach(theme => {
            theme.style.display = "none"
        });
        themes[index].style.display = "block"

    })    
});