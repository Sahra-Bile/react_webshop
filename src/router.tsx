import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { About } from './pages/About/about';
import { Home } from './pages/Home/home';
import { Products } from './pages/Products/products';
import { NotFound } from './pages/NotFound/notFound';
import { Contact } from './pages/Contact/contact';
import { Cart } from './pages/Cart/cart';
import { Product } from './pages/Product/product';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
