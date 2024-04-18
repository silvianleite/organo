import "./Rodape.css";

const Rodape = () => {

    const redes = ["facebook", "twitter", "instagram"]

    return (
        <footer className="rodape">
            <div className="redes">
                <ul>
                {redes.map(rede => <li key={rede}> <a href={`http://www.${rede}.com`} target="_blank"> <img className="rede" src={`/imagens/${rede}.png`} alt={`Logo ${rede}`}/> </a> </li>)}
                </ul>
            </div>
            <div className="logo">
                <img src="/imagens/logo.png"/>
            </div>
            <div className="texto">
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Rodape;