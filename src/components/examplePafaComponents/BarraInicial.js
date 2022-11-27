export default function BarraInicial() {
    const items = ['Museo', 'Escuela'];
    const itemsLinks = items.map((item) => {
        return <a href="#" className="barra-link">{item}</a>;
    });
    return (<div className="barra grid content-center">
                <div className="barra-inicial grid">
                    <div className="barra-items my-auto">
                        {itemsLinks}
                    </div>
                    <div className="barra-search content-right">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
    );
}

