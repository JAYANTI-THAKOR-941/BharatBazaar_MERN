import api from "./axios.js";


export const getProducts = ()=>{
    return api.get('/product/all')
}


export const getSingleProduct = (id)=>{
    return api.get(`product/${id}`)
}