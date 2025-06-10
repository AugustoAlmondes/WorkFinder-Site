// import { BiGeoAlt, BiBuilding, BiDollar } from 'react-icons/bi';
// import { BiGeoAlt } from 'react-icons/bi';
import './Vacany.css';

import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Vacany({ listDataVvacany, fezLogin }) {
    console.log("Aqui é a lista: ", listDataVvacany);

    return (
        <>
            <div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className='card allvacany'>

                    <div className="foto-card default_pointer_cs">
                        <h3 className="default_pointer_cs">{listDataVvacany.enterprise}</h3>
                    </div>

                    <h4 className="default_pointer_cs">{listDataVvacany.title}</h4>

                    <ul className="requisitos default_pointer_cs">
                        <li className="default_pointer_cs">{listDataVvacany.contractType}</li>
                        <li className="default_pointer_cs">{listDataVvacany.modality}</li>
                        <li className="default_pointer_cs">{listDataVvacany.areaActivity}</li>
                    </ul>
                    <ul className="info-vaga">
                        <li>
                            <span>Local:</span> {listDataVvacany.local}
                        </li>
                        <li>
                            <span>Quantidade de Vagas:</span> {listDataVvacany.amount}
                        </li>
                        <li>
                            <span>Salário:</span> {listDataVvacany.salary}
                        </li>
                        {
                            fezLogin ?
                                (
                                    <Link
                                        to={{
                                            pathname: "/infojob",
                                        }}
                                        state={{ jobData: listDataVvacany }}
                                        className="acessar-card"
                                    >
                                        <h4>Acessar</h4>
                                    </Link>
                                ) :
                                (
                                    <h4 className="acessar-card"
                                        onClick={() => {
                                            toast.error("Faça o login para acessar essa vaga");
                                        }}
                                    >Acessar</h4>
                                )
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}
