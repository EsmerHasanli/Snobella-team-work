import { getAllProducts, getProductsByID, deleteProducts, postProducts, putProductsByID, patchProductsByID } from "./productsrequests.js";

//recomended products
const productsWraper = document.querySelector('.recomended-roducts')

document.addEventListener('DOMContentLoaded', async ()=>{
    const products = await getAllProducts();
    products.forEach(product => {
        productsWraper.innerHTML += `
        <div class="swiper-slide slider">
    <div class="card">
        <div class="imgbox">
            <img src="${product.imageURL}" alt="">
            <div class="new">
                <span>New</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                fill="none">
                <path
                    d="M10.9997 19.25L9.67051 18.0631C4.94967 13.8639 1.83301 11.0944 1.83301 7.6955C1.83301 4.92602 4.05134 2.75 6.87467 2.75C8.46967 2.75 10.0005 3.47834 10.9997 4.62929C11.9988 3.47834 13.5297 2.75 15.1247 2.75C17.948 2.75 20.1663 4.92602 20.1663 7.6955C20.1663 11.0944 17.0497 13.8639 12.3288 18.0721L10.9997 19.25Z"
                    stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
            </svg>
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
                <h3>$${product.price-(product.price*product.discountPercentage/100)} </h3>
                <span>From $${product.price}</span>
            </div>
            <div class="add-btn">
                <button id=${product.id} type="button" class="btn btn-outline-dark btn-basket">Add to card </button>
            </div>
        </div>
    </div>
</div>
        `
    });


    var swiper = new Swiper(".mySwiper", {
        initialSlide: 1,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      
      var appendNumber = 4;
      var prependNumber = 1;
      document
        .querySelector(".prepend-2-slides")
        .addEventListener("click", function (e) {
          e.preventDefault();
          swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
          ]);
        });
      document
        .querySelector(".prepend-slide")
        .addEventListener("click", function (e) {
          e.preventDefault();
          swiper.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
          );
        });
      document.querySelector(".append-slide").addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
      });
      document
        .querySelector(".append-2-slides")
        .addEventListener("click", function (e) {
          e.preventDefault();
          swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
          ]);
        });


})

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