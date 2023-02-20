import { CartItem } from '../../models/CartItem'
import { CartSmall } from '../CartSmall/cartSmall';

interface IHeaderProps {
  cart:CartItem[];
}
export const Header = (props:IHeaderProps) =>{

  return(<>
   <CartSmall cart={props.cart}/>
  </>)

}
