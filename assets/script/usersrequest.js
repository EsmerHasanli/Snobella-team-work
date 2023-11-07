let API_BASE_URL = 'https://654a6a591f197d51e492398a.mockapi.io/'


// import { getAllUsers, getUsersByID, deleteUsers, postUsers, putUsersByID, patchUsersByID } from "./usersrequests.js";


//Users get all
export async function getAllUsers (){
    let globalData;
    await axios.get(API_BASE_URL+'/users')
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//Users get by ID
export async function getUsersByID (id){
    let globalData;
    await axios.get(API_BASE_URL+`/users/${id}`)
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//delete buttons
export async function deleteUsers(){
    let globalData;
    await axios.delete(API_BASE_URL+`/users`)
    .then((result) => {
        console.log(result);
        globalData = result.data;
    })
    return globalData
}

//Users post
export async function postUsers(payload){
    let newSlider;
    newSlider =  await axios.post(API_BASE_URL+`/users`,payload);

    return newSlider;
}

//Users put
export async function putUsersByID(id,payload){
    axios.put(API_BASE_URL+`/users/${id}`,payload);
}

//Users patch
export async function patchUsersByID(id,payload){
    axios.patch(API_BASE_URL+`/users/${id}`,payload);
}