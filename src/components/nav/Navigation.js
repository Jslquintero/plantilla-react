import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(props) {
    const listNav = props.opciones.map((item) => <li className="nav-item"><Link to={item.route}>{item.ref}</Link></li>);
    return (
        <>
            <nav className="nav grid content-center text-center">
                <Link to='/' ><img src="https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" 
                className="img-logo"/></Link>
                <ul className="nav-list grid content-center text-center">
                    {listNav}
                </ul>
                <div>
                    <button>Apply Now</button>
                </div>
            </nav>
        </>
    );
}