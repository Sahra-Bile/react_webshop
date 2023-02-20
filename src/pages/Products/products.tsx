import { useEffect, useState } from 'react'
import { IProduct } from '../../models/IProduct'
import { getProducts } from '../../services/products';
import { Product } from '../Product/product';

interface IProps{
  addToCart(p:IProduct):void;
}
export const Products = (props:IProps) => {
 
const [products, setProducts] = useState<IProduct[]>([]);

useEffect(() => {
    const showProducts = async () => {
        let productFromApi = await getProducts()
        setProducts(productFromApi)
    }
if(products.length > 0) return;

showProducts();
})

   let html = products.map((p)  => { return <Product product= {p}/>
   });
   

   return (<>
     {html}
   </> 
   )
}
