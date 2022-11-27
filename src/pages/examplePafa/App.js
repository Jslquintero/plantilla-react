import {Link} from "react-router-dom";
import BarraInicial from "../../components/examplePafaComponents/BarraInicial";
import Card1 from "../../components/examplePafaComponents/cards/Card1";
import Card2 from "../../components/examplePafaComponents/cards/Card2";
import Navigation from "../../components/nav/Navigation";

export default function App() {

    const callApi = () => { // consume api
        const tarjetas = [{
                title: "Titulo 1",
                subtitle: "Subtitulo 1",
                date: "Fecha 1",
                styleType: "grid bg-cat"
            }]
        const data = tarjetas.map((tarjeta) => {
            return (
                <Card2 styleType={
                        tarjeta.styleType
                    }
                    title={
                        tarjeta.title
                    }
                    subtitle={
                        tarjeta.subtitle
                    }
                    date={
                        tarjeta.date
                    }/>
            )
        });

        return data;
    }

    return (
        <>
            <BarraInicial/>
            <Navigation opciones={
                [
                    {
                        route: '/academico',
                        ref: 'Academico'
                    },
                    {
                        route: '/academico',
                        ref: 'Academico'
                    },
                    {
                        route: '/academico',
                        ref: 'Academico'
                    },
                    {
                        route: '/academico',
                        ref: 'Academico'
                    }, {
                        route: '/academico',
                        ref: 'Academico'
                    }
                ]
            }/>
            <div className="grid content-center">
                {/* <a href="#" className="text-center">Link Centrado</a> */}
                <Link to={'/contacto'}>Ir a contacto</Link>
            </div>
            <div className="grid grid-cols-4 grid-gap-2 content-center mx-auto w-90">
                {
                callApi()
            } </div>

        </>

    );
}
