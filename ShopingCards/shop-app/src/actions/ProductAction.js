import { fetchProductStart,fetchProductSuccess,fetchProductFail } from "../reduxslices/ProductSlice"
import axios from "axios";

const url = "https://fakestoreapi.com/products";

export const getProducts = () => async(dispatch)=>{
    try{
        dispatch(fetchProductStart());
        const {data} = await axios.get(url);
        dispatch(fetchProductSuccess(data));
    }
    catch(error){
        console.log(error);
        dispatch(fetchProductFail(error));
    }
}