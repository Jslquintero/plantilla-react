export default function Card4(props){
    return (
        <>
            <div className="grid content-center card4">
                <div className={props.styleType}>
                    <h3 className="content-center card4-title text-center">{props.title}</h3>
                </div>
            </div>
        </>
    );
}
