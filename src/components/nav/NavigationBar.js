import Navigation from "./Navigation";
import BarraInicial from "../examplePafaComponents/BarraInicial";

export default function NavigationBar() {
    return (
        <div>
            <BarraInicial/>
            <Navigation opciones={
                [
                    {
                        route: '/',
                        ref: 'Home'
                    }, {
                        route: '/blog',
                        ref: 'Blog'
                    }, {
                        route: '/producto',
                        ref: 'Producto'
                    }, {
                        route: '/contacto',
                        ref: 'contacto'
                    }
                ]
            }/>
        </div>
    )
}
