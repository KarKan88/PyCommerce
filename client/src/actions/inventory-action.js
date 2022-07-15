/*
* @author: Adesh Nalpet Adimurthy
*/

import axios from "axios";

export const addInventoryProduct = async (item) => {
    try {
        let result = await axios.post("http://localhost:5000/inventory/add-product", item)
        return result
    }
    catch(er){
        return er
    }
}

export const listInventoryProduct = async() => {
    try {
        let result = await axios.get("http://localhost:5000/inventory/products")
        return result
    }
    catch(er){
        return er
    }
}
export const deleteInventoryProductsById = async(id) => {
    try {
        let result = await axios.delete("http://localhost:5000/inventory/delete-product/"+id)
        return result
    }
    catch(er){
        return er
    }
}

export const getInventoryProductById = async(id) => {
    try {
        let result = await axios.get("http://localhost:5000/inventory/product/"+id)
        return result
    }
    catch(er){
        return er
    }
}
export const updateProductById = async(id,data) => {
    try {
        let result = await axios.put("http://localhost:5000/inventory/update-product/"+id,data)
        return result
    }
    catch(er){
        return er
    }
}