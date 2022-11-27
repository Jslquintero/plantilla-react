export default function Card1(props){
    return (
        <>
            <div className="grid content-center card1">
                <div className={props.styleType}>
                    <h3 className="content-center card1-title text-center">{props.title}</h3>
                </div>
            </div>
        </>
    );
}
