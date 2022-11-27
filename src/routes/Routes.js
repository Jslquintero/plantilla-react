import {Home, Contacto, Blog, Producto} from "./Pages";

const routes = [
    {path: "/",element: <Home/>},
    {path: "/Contacto",element: <Contacto/>},
    {path: "/Blog",element: <Blog/>},
    {path: "/Producto",element: <Producto/>},
];

export default routes;