import Footer from '../components/Footer';
import Header from '../components/Header';
import { toast, ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types'
import '../styles/JobForms.css'

import { useState } from 'react';
import {handleInputs} from '../hooks/handleInputs'

let mask = new handleInputs();

export default function JobForms({ typeUser, fezLogin, handleLogout, email }) {

    const [dataVacany, setDataVacany] = useState({
        enterprise: '',
        title: '',
        ability: '',
        local: '',
        contractType: '',
        modality: '',
        amount: '',
        areaActivity: '',
        pcd: 'não',
        cnh: '',
        salary: '',
        benefits: '',
        description: '',
        email: ''
    })

    const clearInput = () => {
        setDataVacany({
            enterprise: '',
            title: '',
            ability: '',
            local: '',
            contractType: '',
            modality: '',
            amount: '',
            areaActivity: '',
            pcd: 'não',
            cnh: '',
            salary: '',
            benefits: '',
            description: '',
            email:''
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setDataVacany(prevData => ({ ...prevData, [name]: value }))

    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (fezLogin) {
            if (typeUser === 0) {

                console.log("Ta logado");
                console.log("Dados a serem enviados:", dataVacany);
                dataVacany.email = email;

                console.log("Email salvo: ",dataVacany.email);

                try {
                    const response = await fetch("http://localhost:8800/empresa/vacany", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(dataVacany)
                    });
                    const result = await response.json();

                    if (response.ok) {
                        console.log(result.message);
                        toast.success("Vaga Cadastrada com sucesso", {
                            className: 'toast-success',
                        });
                        clearInput();
                    } else {
                        console.log("Erro ao cadastrar Vaga: ", result.error)
                    }
                } catch (error) {
                    console.log("Erro ao conectar ao Servidor", error);
                    toast.error("Erro ao conectar ao servidor. Tente novamente mais tarde.");
                };
            } else {
                toast.error("Apenas empresas podem cadastrar vagas");
            }
        } else {
            toast.error("Faça Login para cadastrar uma vaga");
        }
    }

    return (
        <>
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

            <Header typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout} />
            <main className='jobforms'>
                <div id="add-form-container" className="container">
                    <div className="row">
                        <div id="form-box" className="col-md-12">
                            <h2>Preencha os dados da melhor forma possível para exibição de sua vaga!</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="enterprise">Nome da Empresa:</label>
                                    <input
                                        id="enterprise"
                                        name="enterprise"
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite o nome da empresa"
                                        required
                                        value={dataVacany.enterprise}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="titleNewVacany">Título da vaga:</label>
                                    <input
                                        id="titleNewVacany"
                                        name="title"
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite o título da vaga"
                                        required
                                        value={dataVacany.title}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="abilityVacany">Habilidades e Qualificações Necessárias (separadas por vígula):</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="abilityVacany"
                                        name="ability"
                                        placeholder="Digite Habilidades e Qualificações Necessárias para a vaga"
                                        required
                                        value={dataVacany.ability}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="local">Localização:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="local"
                                        name="local"
                                        placeholder="Digite o local de trabalho"
                                        required
                                        value={dataVacany.local}
                                        onChange={handleChange}
                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="contract-type">Tipo de Contratação:</label>
                                    <select
                                        className="form-control"
                                        name="contractType"
                                        id="contract-type"
                                        value={dataVacany.contractType}
                                        onChange={handleChange}
                                    >
                                        <option value="none"> Selecione uma Opção </option>
                                        <option value="CLT">CLT</option>
                                        <option value="PJ">PJ</option>
                                        <option value="JA">Jovem Aprendiz</option>
                                        <option value="Estagio">Estágio</option>
                                        {/* <option value="other" id="activateInputContract">Outros</option> */}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work-mode">Modalidade de Trabalho:</label>
                                    <select
                                        className="form-control"
                                        name="modality"
                                        id="work-mode"
                                        value={dataVacany.modality}
                                        onChange={handleChange}
                                    >
                                        <option value="none">Selecione uma opção</option>
                                        <option value="presencial">Presencial</option>
                                        <option value="ead">Home Office</option>
                                        <option value="hibrido">Híbrido</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="vacancy-number">Quantidade de Vagas:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="vacancy-number"
                                        name="amount"
                                        min="1"
                                        placeholder="Digite a quantidade de vagas"
                                        required
                                        value={dataVacany.amount}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="area">Área de Atuação:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="area"
                                        name="areaActivity"
                                        placeholder="Digite a área de atuação"
                                        required
                                        value={dataVacany.areaActivity}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group pcd">
                                    <label htmlFor="pcd">Vaga para PCD?</label>
                                    <div>
                                        <input
                                            type="radio"
                                            name="pcd" // Deve corresponder ao estado
                                            id="yesPcd"
                                            value="sim"
                                            checked={dataVacany.pcd === "sim"} // Estado controlado
                                            onChange={handleChange} // Atualiza o estado ao mudar
                                        />{" "}
                                        <label htmlFor="yesPcd">Sim</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="pcd" // Deve corresponder ao estado
                                            id="noPcd"
                                            value="não"
                                            checked={dataVacany.pcd === "não"} // Estado controlado
                                            onChange={handleChange} // Atualiza o estado ao mudar
                                        />{" "}
                                        <label htmlFor="noPcd">Não</label>
                                    </div>
                                </div>
                                {/* <p>Vaga para PCD: {dataVacany.pcd}</p> */}

                                <div className="form-group">
                                    <label htmlFor="driver-license">Necessita de Carteira de Motorista?</label>
                                    {/* <input type="radio" name="driver-license" id="yesDriver" value="sim" /> <label
                                        htmlFor="yesDriver">Sim</label>
                                    <input type="radio" name="driver-license" id="noDriver" value="não" checked /> <label
                                        htmlFor="noDriver">Não</label> */}
                                    <select
                                        className="form-control"
                                        name="cnh"
                                        id="license-type"
                                        value={dataVacany.cnh}
                                        onChange={handleChange}
                                    >
                                        <option value="none"> Selecione uma Opção </option>
                                        <option value="não">Não</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                        <option value="AB">AB</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="salary">Salário</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="salary"
                                        name="salary"
                                        placeholder="Digite o salário"
                                        required
                                        value={dataVacany.salary}
                                        onChange={handleChange}
                                        onKeyUp={mask.salaryMask}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="benefits">Benefícios:</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="benefits"
                                        name="benefits"
                                        placeholder="Descreva os benefícios da vaga ..."
                                        required
                                        value={dataVacany.benefits}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Descrição da vaga:</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        placeholder="Descreva as atividades do desenvolvedor..."
                                        required
                                        style={{ height: "200px" }}
                                        value={dataVacany.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <input
                                    type="submit"
                                    value="Submeter vaga"
                                    id="enviar"
                                    className="enviar-button"
                                />

                            </form>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

JobForms.prototype = {
    typeUser: PropTypes.string.isRequired,
    fezLogin: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};