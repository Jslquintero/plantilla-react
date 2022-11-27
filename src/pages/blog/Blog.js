import NavigationBar from "../../components/nav/NavigationBar";
import Card1 from "../../components/examplePafaComponents/cards/Card1";

export default function Blog() {

    const callApi = () => { // consume api
        const tarjetas = [{
                title: "Titulo 1",
                style: "grid bg-student"
            }]
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
                {
                callApi()
            }
                <p className="grid grid-cols-3 content-center text-left">Elit qui est ipsum nostrud amet ad adipisicing fugiat ex tempor non voluptate proident esse. Lorem consequat tempor eu labore labore dolore. Ut qui occaecat nostrud quis ut non elit incididunt voluptate. Dolore minim id laboris consequat deserunt ea labore proident consectetur eiusmod pariatur et ut. Id cillum proident non quis sunt proident eu officia quis voluptate nulla. Eu Lorem proident magna tempor sit dolore.</p>

            </div>

        </>
    )
}
