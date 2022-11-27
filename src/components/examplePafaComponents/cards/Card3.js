export default function Card3(props){
    return (
        <>
            <div className="grid content-center card3">
                <div className={props.styleType}>
                    <h3 className="content-center card3-title text-center">{props.title}</h3>
                </div>
            </div>
        </>
    );
}
