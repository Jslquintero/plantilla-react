export default function Card2(props){
    return (
        <>
            <div className="grid content-center card2">
                <div className={props.styleType}>
                   <a href="#" className="text-center"></a>
                </div>
                <div className="card2 content-center">
                    <h1 className="card-title text-center">{props.title}</h1>
                    <h2 className="card-description text-center">{props.subtitle}</h2>
                    <h3 className="card-date text-center">{props.date}</h3>
                    </div>
            </div>
        </> 
    );
}
