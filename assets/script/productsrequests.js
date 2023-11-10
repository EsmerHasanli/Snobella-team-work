let API_BASE_URL = 'https://654a6a591f197d51e492398a.mockapi.io/'


// import { getAllProducts, getProductsByID, deleteProducts, postProducts, putProductsByID, patchProductsByID } from "./productsrequests.js";


//products get all
export async function getAllProducts (){
    let globalData;
    await axios.get(API_BASE_URL+'/products')
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//products get by ID
export async function getProductsByID (id){
    let globalData;
    await axios.get(API_BASE_URL+`/products/${id}`)
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//delete buttons
export async function deleteProducts(id){
    let globalData;
    await axios.delete(API_BASE_URL+`/products/${id}`)
    .then((result) => {
        console.log(result);
        globalData = result.data;
    })
    return globalData
}

//products post
export async function postProducts(payload){
    let newSlider;
    newSlider =  await axios.post(API_BASE_URL+`/products`,payload);

    return newSlider;
}

//products put
export async function putProductsByID(id,payload){
    axios.put(API_BASE_URL+`/products/${id}`,payload);
}

//products patch
export async function patchProductsByID(id,payload){
    axios.patch(API_BASE_URL+`/products/${id}`,payload);
}