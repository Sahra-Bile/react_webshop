import { CartItem } from '../../models/CartItem'

interface ICartSmallProps{
 cart:CartItem[];
}

export const CartSmall = (props:ICartSmallProps) => {

 for(let i = 0; i<props.cart.length; i++){


 }

    return <div className='cart-icon'>
    {}
    </div>
}
