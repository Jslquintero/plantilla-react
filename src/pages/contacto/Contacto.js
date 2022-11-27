import NavigationBar from "../../components/nav/NavigationBar";
import {Form} from "react-router-dom";

export default function Contacto() {
    return (

        <>

            <NavigationBar/>

            <div className="grid  grid-gap-2 content-center mx-auto w-90">


                <Form method="post" action="/events">
                    <div className="form grid grid-gap-2 content-center mx-auto w-90">
                        <input className="form-input" type="text" placeholder="Nombre" name="title"/>
                        <input className="form-input" type="text" placeholder="Apellido" name="description"/>
                        <input className="form-input" type="mail" placeholder="Correo" name="description"/>
                        <input className="form-input" type="text" placeholder="Telefono" name="description"/>
                        <input className="form-input" type="text" placeholder="Mensaje" name="description"/>
                        <button className="form-button" type="submit">Enviar</button>
                    </div>
                </Form>

            </div>

        </>

    )

}
