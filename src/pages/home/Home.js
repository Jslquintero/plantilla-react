import NavigationBar from "../../components/nav/NavigationBar";
import Card1 from "../../components/examplePafaComponents/cards/Card1";
//api https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-mx/production/es-mx/page-data/news/tags/patch-notes/page-data.json
export default function Home() {

    const callApi = () => { // consume api
        const tarjetas = [{
                title: "Titulo 1",
                style: "grid bg-student"
            },
            {
                title: "Titulo 2",
                style: "grid bg-student"
            },
            {
                title: "Titulo 3",
                style: "grid bg-student"
            },
            {
                title: "Titulo 4",
                style: "grid bg-student"
            }

           
        
        ]
        const data = tarjetas.map((tarjeta) => {
            return (
                <Card1 styleType={
                        tarjeta.style
                    }
                    title={
                        tarjeta.title
                    }/>
            )
        });

        return data;
    }

    return (
        <>
            <NavigationBar/>
            <div className="grid grid-cols-4 grid-gap-2 content-center mx-auto w-90">
            {callApi()}
        </div>

        </>
    )
}
