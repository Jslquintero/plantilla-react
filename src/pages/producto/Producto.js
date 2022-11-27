import NavigationBar from "../../components/nav/NavigationBar";
import Card2 from "../../components/examplePafaComponents/cards/Card2";

export default function Producto() {

    const callApi = () => { // consume api
        const tarjetas = [
            {
                title: "Titulo 1",
                subtitle: "Subtitulo 1",
                date: "Fecha 1",
                styleType: "grid bg-cat"
            }, {
                title: "Titulo 2",
                subtitle: "Subtitulo 2",
                date: "Fecha 2",
                styleType: "grid bg-cat"
            }, {
                title: "Titulo 3",
                subtitle: "Subtitulo 3",
                date: "Fecha 3",
                styleType: "grid bg-cat"
            }, {
                title: "Titulo 4",
                subtitle: "Subtitulo 4",
                date: "Fecha 4",
                styleType: "grid bg-cat"
            }
        ]
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
            <NavigationBar/>


            <div className="grid grid-cols-4 grid-gap-2 content-center mx-auto w-90">
                {
                callApi()
            } </div>

            <div className="content-center parrafo-medio">
                <p className="grid grid-cols-3 content-center text-center">Elit qui est ipsum nostrud amet ad adipisicing fugiat ex tempor non voluptate proident esse. Lorem consequat tempor eu labore labore dolore. Ut qui occaecat nostrud quis ut non elit incididunt voluptate. Dolore minim id laboris consequat deserunt ea labore proident consectetur eiusmod pariatur et ut. Id cillum proident non quis sunt proident eu officia quis voluptate nulla. Eu Lorem proident magna tempor sit dolore.</p>
                <p className="grid grid-cols-3 content-center text-center">Elit qui est ipsum nostrud amet ad adipisicing fugiat ex tempor non voluptate proident esse. Lorem consequat tempor eu labore labore dolore. Ut qui occaecat nostrud quis ut non elit incididunt voluptate. Dolore minim id laboris consequat deserunt ea labore proident consectetur eiusmod pariatur et ut. Id cillum proident non quis sunt proident eu officia quis voluptate nulla. Eu Lorem proident magna tempor sit dolore.</p>
            </div>

        </>
    )
}
