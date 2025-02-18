import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import '../styles/JobForms.css'

export default function InfoJob({ typeUser, fezLogin, handleLogout }) {
    const location = useLocation();
    const { jobData } = location.state || {};

    if (!jobData) {
        return <p>Informações da vaga não encontradas.</p>;
    }

    return (
        <>
            <Header typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout} />
            <main className="jobforms">
                <div className="infojob">
                    <h1>Informações da <span>Vaga</span></h1>
                </div>

                <div className="display-job-info">
                    <h3>Informações  Principais</h3>
                    <div className="job-info-2">
                        <p><span>Descrição:</span> {jobData.description}</p>
                        <p><span>Benefícios:</span> {jobData.benefits}</p>
                    </div>
                </div>

                <div className="display-job-info">
                    <h3>Informações Adicionais </h3>
                    <div className="job-info">
                        <p><span>Empresa:</span> {jobData.enterprise}</p>
                        <p><span>Título:</span> {jobData.title}</p>
                        <p><span>Habilidades:</span> {jobData.ability}</p>
                        <p><span>Local:</span> {jobData.local}</p>
                        <p><span>Tipo de Contrato:</span> {jobData.contractType}</p>
                        <p><span>Modalidade:</span> {jobData.modality}</p>
                        <p><span>Quantidade de Vagas:</span> {jobData.amount}</p>
                        <p><span>Área de Atuação:</span> {jobData.areaActivity}</p>
                        <p><span>PCD:</span> {jobData.pcd}</p>
                        <p><span>CNH:</span> {jobData.cnh}</p>
                        <p><span>Salário:</span> {jobData.salary}</p>
                    </div>
                </div>

                {
                    fezLogin ?
                        (
                            <Link to={{
                                pathname: '/applyvacany',
                            }}
                            state={{emailEnterprise: jobData.email}}
                            style={{textDecoration: 'none'}}>
                                <button className="candidatar">Candidatar</button>
                            </Link>
                        ) :
                        (
                            <Link to='/login' style={{textDecoration: 'none'}}>
                                <button className="candidatar">Candidatar</button>
                            </Link>
                        )
                }
            </main>
            <Footer />
        </>
    );
}

InfoJob.propTypes = {
    jobData: PropTypes.object,
    typeUser: PropTypes.string,
    fezLogin: PropTypes.bool,
    handleLogout: PropTypes.func,
}