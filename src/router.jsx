import { createBrowserRouter } from 'react-router-dom';
import App from "./pages/App";
import Layout from './templates/Layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                name: "Home",
                element: <App />,
            // },
            // {
            //     path: "/about",
            //     name: "About",
            //     element: <About />,
            // },
            // {
            //     path: "/service",
            //     name: "Service",
            //     element: <Service />,
            // },
            // {
            //     path: "/product",
            //     name: "Product",
            //     element: <Product />,
            // },
            // {
            //     path: "/contact",
            //     name: "Contact",
            //     element: <Contact />,
            },
        ],
    },
]);
