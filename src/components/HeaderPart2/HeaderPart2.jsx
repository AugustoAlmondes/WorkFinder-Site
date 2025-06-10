import FundoHeader from '../../assets/fundo-header2.png'


export default function HeaderPart2() {
    return (
        <div className="cab-part-2">
            <div className="imagem-fundo animate__animated animate__fadeInDown animate__slower">
                <img src={FundoHeader} alt="Fundo-header" />
                <button className="saiba-mais font-1 animate__animated animate__fadeInDown animate__delay-2s">
                    Saiba Mais {'>'}
                </button>
            </div>
        </div>
    )
}