import axios from 'axios';
import { IProduct } from '../models/IProduct';

 const BASEURL = "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

 export const getProducts = async ():Promise<IProduct []> =>{
   let response = await axios.get(BASEURL)
    return response.data;
}
