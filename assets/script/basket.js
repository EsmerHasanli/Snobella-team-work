import {
  getAllProducts,
  getProductsByID,
  deleteProducts,
  postProducts,
  putProductsByID,
  patchProductsByID,
} from "./productsrequests.js";


document.addEventListener("DOMContentLoaded", async () => {
  let baskets = [];

  let productPrice = document.querySelector(".product-price");
  let totalPrice = document.querySelector(".sub-total-price");
  console.log(productPrice);
  console.log(totalPrice);
  let basketListCount = document.querySelector(".basketListCount");
  let basketCalculateWrapper = document.querySelector(".basket-calculate");
  let basketWrapper = document.querySelector(".basket-wrapper");
  baskets = JSON.parse(localStorage.getItem("basket"));

  let subTotal = 0;

  if (baskets) {
    let products = await getAllProducts();
    console.log(products);
    basketWrapper.innerHTML = "";

    baskets.forEach((basketProduct) => {
      let product = products.find((product) => product.id == basketProduct.id);

      if (!product) {
        product = { price: 0 };
      }

      basketWrapper.innerHTML += `
          <div class="basket-card">
            <div class="col-xl-3">
              <div class="imgbox">
                <img src="${product.imageURL}" alt="">
              </div>
            </div>
            <div class="col-xl-9">
              <div class="basket-main">
                <div class="basket-title">
                  <h6>${product.name}</h6>
                  <span class="basket-price">US $${product.price}</span>
                </div>
                <div class="feature">
                  <span class="basket-size">Size: ${product.size}</span>
                  <span class="basket-color">Color: ${product.color}</span>
                </div>
                <div class="quality">
                  <span class="material">Category: ${product.categories}</span>
                </div>
                <div class="basket-link">
                  <div class="favorit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 20 20" fill="none">
                      <path
                        d="M9.99996 17.5L8.79163 16.421C4.49996 12.6035 1.66663 10.0858 1.66663 6.99591C1.66663 4.4782 3.68329 2.5 6.24996 2.5C7.69996 2.5 9.09163 3.16213 9.99996 4.20845C10.9083 3.16213 12.3 2.5 13.75 2.5C16.3166 2.5 18.3333 4.4782 18.3333 6.99591C18.3333 10.0858 15.5 12.6035 11.2083 16.4292L9.99996 17.5Z"
                        stroke="#212121" stroke-opacity="0.75" stroke-width="2"
                        stroke-linecap="square" />
                    </svg>
                    <span>Favorite</span>
                  </div>
                  <div id=${product.id} class="remove delete-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 20 20" fill="none">
                      <path
                        d="M16.5625 2.5H13.125V1.875C13.125 0.841133 12.2839 0 11.25 0H8.75C7.71613 0 6.875 0.841133 6.875 1.875V2.5H3.4375C2.57594 2.5 1.875 3.20094 1.875 4.0625V6.25C1.875 6.59516 2.15484 6.875 2.5 6.875H2.84156L3.38152 18.2142C3.42922 19.2156 4.25187 20 5.25437 20H14.7456C15.7482 20 16.5708 19.2156 16.6185 18.2142L17.1584 6.875H17.5C17.8452 6.875 18.125 6.59516 18.125 6.25V4.0625C18.125 3.20094 17.4241 2.5 16.5625 2.5ZM8.125 1.875C8.125 1.53039 8.40539 1.25 8.75 1.25H11.25C11.5946 1.25 11.875 1.53039 11.875 1.875V2.5H8.125V1.875ZM3.125 4.0625C3.125 3.8902 3.2652 3.75 3.4375 3.75H16.5625C16.7348 3.75 16.875 3.8902 16.875 4.0625V5.625C16.6824 5.625 3.92316 5.625 3.125 5.625V4.0625ZM15.3699 18.1547C15.354 18.4885 15.0798 18.75 14.7456 18.75H5.25437C4.9202 18.75 4.64598 18.4885 4.63012 18.1547L4.09297 6.875H15.907L15.3699 18.1547Z"
                        fill="#212121" fill-opacity="0.75" />
                    </svg>
                    <span>Remove</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

      let deleteButtons = document.querySelectorAll(".delete-btn");
      deleteButtons.forEach((btn) => {
        btn.addEventListener("click", async function (e) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then(async (result) => {
            console.log(
              this.parentElement.parentElement.parentElement.parentElement
            );
            this.parentElement.parentElement.parentElement.parentElement.remove();
            subTotal -= product.price * basketProduct.count;

            productPrice.innerHTML = subTotal;
            totalPrice.innerHTML = subTotal;
            let id = this.id;
            console.log(id);
            if (id) {
              let updateBasket = JSON.parse(localStorage.getItem("basket"));
              updateBasket = updateBasket.filter((item) => item.id !== id);
              localStorage.setItem("basket", JSON.stringify(updateBasket));
            }
          });
        });
      });

      subTotal += product.price * basketProduct.count;

      productPrice.innerHTML = subTotal;
      totalPrice.innerHTML = subTotal;
    });
  }

});
