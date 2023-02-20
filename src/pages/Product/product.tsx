import { IProduct } from '../../models/IProduct'

interface IProductProps{
product: IProduct;
}


export const Product = (props:IProductProps) => {
  

return ( <>
    <div key={props.product.id}>
        <h1> {props.product.name} </h1>
        <img src={props.product.imageUrl} alt={props.product.name} />
        <p>{props.product.description}</p>
        <p>{ props.product.price}kr</p>
        {/* <button onClick={handleClick}> Lägg till i korgen</button> */}
    </div>
    </>
);



}
