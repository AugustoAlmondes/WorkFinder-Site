import './cardVaga.css'
import { IoPersonAdd } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { FaCoins } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import Assai from '../../assets/assai.png'
// import PropTypes from 'prop-types'

export default function VagaCard({ data, fezlogin }) {

    const styleIcons = {
        stye: {
            color: 'white',
            fontSize: '20px',
            marginRight: '10px',
            marginBotto: '10px'
        }
    }
    return (
        <>
            <div className="card">
                <div className="foto-card">
                    <h2>{data.enterprise}</h2>
                </div>
                <h4>{data.ability}</h4>
                <h3>{data.title}</h3>
                <ul className="requisitos">
                    <li>{data.contractType}</li>
                    <li>{data.modality}</li>
                    <li>{data.areaActivity}</li>
                </ul>

                <ul className="info-vaga">
                    <li>
                        <GiPositionMarker style={styleIcons.stye} />
                        {data.local}
                    </li>

                    <li>
                        <IoPersonAdd style={styleIcons.stye} />
                        {data.amount} Vagas
                    </li>

                    <li>
                        <FaCoins style={styleIcons.stye} />
                        {
                            data.salary.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                        }
                    </li>
                </ul>
                {
                    fezlogin ?
                        (<Link
                            to={{
                                pathname: "/infojob",
                            }}
                            state={{ jobData: data }}
                            style={{ textDecoration: 'none' }}
                        >

                            <h4 className="acessar-card">Acessar</h4>
                        </Link>)
                        :
                        (<Link
                            to={{
                                pathname: "/login",
                            }}
                            state={{ jobData: data }}
                            style={{ textDecoration: 'none' }}
                        >
                            <h4 className="acessar-card">Acessar</h4>
                        </Link>)
                }
            </div>
        </>
    );
}

// VagaCard.propTypes = {
//     nomeEmpresaVaga: PropTypes.arrayOf(PropTypes.string),
//     cargoVaga: PropTypes.arrayOf(PropTypes.string)
// };