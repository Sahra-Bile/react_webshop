import { Link } from 'react-router-dom'
// import { FaShoppingCart } from "react-icons/fa";


export const Nav = () => {
    return <nav>
        <ul>
            <li> <Link to={"/"}>Home</Link></li>
            <li> <Link to={"/products"}>products</Link></li>
            <li> <Link to={"/about"}>about</Link></li>
            <li> <Link to={"/contact"}>contact</Link></li>
            <li> <Link to={"/cart"}>cart</Link></li>
        </ul>

        {/* <div> <FaShoppingCart /> </div> */}
    </nav>
}


