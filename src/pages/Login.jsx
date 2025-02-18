import Background from "../components/Background";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
// import phoneMask from "../hooks/handleInputs";
import { handleInputs } from "../hooks/handleInputs";
import 'react-toastify/dist/ReactToastify.css'; // Estilos do Toast
import bcrypt from 'bcryptjs';
// import { useEffect } from "react";

import '../styles/Login.css'
// import background from "../components/Background";

const mask = new handleInputs();

export default function Login({ setFezLogin, setTypeUser, setEmail }) {
    const navigate = useNavigate();
    const [frameLogin, setFrameLogin] = useState(2) //0 PARA EMPRESA, 1 PARA USUARIO E 2 PARA LOGIN
    const [isEnterprise, setIsEnterprise] = useState(null)
    const [dataLogin, setDataLogin] = useState({
        email: '',
        senha: ''
        // enterprise: isEnterprise
    })
    const [dataUser, setDataUser] = useState({
        nomeCompleto: '',
        dataNascimento: '',
        telefone: '',
        cep: '',
        email: '',
        senha: '',
        confirmSenha: ''
    });

    const [dataEmpresa, setDataEmpresa] = useState(
        {
            nome_empresa: '',
            nome_fantasia: '',
            cnpj: '',
            inscricao_estadual: '',
            inscricao_municipal: '',
            telefone: '',
            cep: '',
            endereco: '',
            email: '',
            senha: '',
            confirmSenha: ''
        }
    )

    const clearInput = () => {
        frameLogin === 1 ?
            setDataUser({
                nomeCompleto: '',
                dataNascimento: '',
                telefone: '',
                cep: '',
                email: '',
                senha: '',
                confirmSenha: ''
            }) : frameLogin === 0 ?

                setDataEmpresa({
                    nome_empresa: '',
                    nome_fantasia: '',
                    cnpj: '',
                    inscricao_estadual: '',
                    inscricao_municipal: '',
                    telefone: '',
                    cep: '',
                    endereco: '',
                    email: '',
                    senha: '',
                    confirmSenha: ''
                }) :
                setDataLogin({
                    email: '',
                    senha: '',
                    isEnterprise: true
                })
    }

    const handleCheckboxChange = (e) => {
        setIsEnterprise(e.target.checked);
    };

    const handleChange = (e) => {
        if (frameLogin === 1) {
            const { name, value } = e.target;
            setDataUser(prevData => ({ ...prevData, [name]: value }))
        }
        else if (frameLogin === 0) {
            const { name, value } = e.target;
            setDataEmpresa(prevData => ({ ...prevData, [name]: value }))
        }
        else {
            const { name, value } = e.target;
            // console.log(dataLogin.enterprise);
            setDataLogin(prevData => ({ ...prevData, [name]: value }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (frameLogin === 1) { // CADASTRO USUARIO

            if (dataUser.senha !== dataUser.confirmSenha) {
                toast.error("Confirme a senha corretamente", {
                    className: 'toast-error',
                });

                console.log("Senhas diferentes!");

                return
            }

            try {
                // dataUser.senha
                const saltRounds = 10; // Define o número de rounds para gerar o salt
                const hashedSenha = await bcrypt.hash(dataUser.senha, saltRounds);

                // Substitui a senha original pelo hash no objeto dataUser
                const dataUserHashed = { ...dataUser, senha: hashedSenha };

                const response = await fetch("http://localhost:8800/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataUserHashed)
                });
                const result = await response.json();

                if (response.ok) {
                    console.log(result.message);
                    toast.success("Cadastro realizado", {
                        className: 'toast-success',
                    });
                    setFrameLogin(2);
                    clearInput();

                } else {
                    console.log("Erro ao cadastrar usuário: " + result.error);
                }
            } catch (error) {
                console.log("Erro ao conectar ao servidor", error);
            };
        }

        else if (frameLogin === 0) { //CADASTRAR EMPRESA
            console.log("Dados a serem enviados:", dataEmpresa);
            try {
                const saltRounds = 10; // Define o número de rounds para gerar o salt
                const hashedSenhaEmpresa = await bcrypt.hash(dataEmpresa.senha, saltRounds);

                const dataEmpresaHashed = { ...dataEmpresa, senha: hashedSenhaEmpresa };

                const response = await fetch("http://localhost:8800/empresa", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataEmpresaHashed)
                });
                const result = await response.json();

                if (response.ok) {
                    console.log(result.message);
                    toast.success("Cadastro realizado", {
                        className: 'toast-sucees',
                    });
                    setFrameLogin(2);
                    clearInput();
                }
                else {
                    console.log("Erro ao cadastrar empresa " + result.error);
                }
            } catch (error) {
                console.log("Erro ao conectar ao servidor: " + error);

            }

        } else { // LOGIN
            e.preventDefault();

            try {
                const response = await fetch("http://localhost:8800/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: dataLogin.email,
                        senha: dataLogin.senha,
                        isEnterprise: isEnterprise
                    })
                });

                const result = await response.json();
                if (response.ok) {
                    setEmail(dataLogin.email);
                    console.log(result.message);
                    toast.success("Login realizado com Sucesso");

                    setFezLogin(true);
                    setTypeUser(isEnterprise ? 0 : 1);
                    localStorage.setItem('fezLogin', true);
                    localStorage.setItem('typeUser', isEnterprise ? 0 : 1);
                    navigate("/");
                }
                else {
                    console.log("Erro ao logar: " + result.error);
                    toast.error(result.error);
                }
            } catch (error) {
                console.log("Erro de conexão com servidor:", error);
            }
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
            <div className="container-login">
                <Background />
                <div className="signup">

                    {
                        frameLogin === 1 ? // CADASTRAR USUARIO
                            (
                                <>
                                    <h2>Cadastrar-se</h2>
                                    <h3>Rápido e simples</h3>
                                    <form onSubmit={handleSubmit} className="form" >
                                        <div className="textbox">
                                            <input
                                                id="nome_completo_user"
                                                name="nomeCompleto"
                                                type="text"
                                                required
                                                value={dataUser.nomeCompleto}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="nome_Completo">Nome Completo</label>
                                        </div>

                                        <div className="textbox">
                                            <input
                                                id="data_nascimento_user"
                                                name="dataNascimento"
                                                type="date"
                                                required
                                                value={dataUser.dataNascimento}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="data_nascimento">Data de Nascimento</label>
                                        </div>

                                        <div className="textbox">
                                            <input
                                                id="telefone_user"
                                                name="telefone"
                                                type="tel"
                                                maxLength={15}
                                                required
                                                value={dataUser.telefone}
                                                onChange={handleChange}
                                                onKeyUp={mask.phoneMask}
                                            />
                                            <label htmlFor="telefone">Número de telefone</label>
                                        </div>

                                        <div className="textbox">
                                            <input
                                                id="cep_user"
                                                name="cep"
                                                type="text"
                                                required
                                                maxLength={9}
                                                value={dataUser.cep}
                                                onChange={handleChange}
                                                onKeyUp={mask.cepMask}
                                            />
                                            <label htmlFor="cep">CEP</label>
                                        </div>

                                        <div className="textbox">
                                            <input
                                                id="email_user"
                                                name="email"
                                                type="text"
                                                required
                                                value={dataUser.email}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="email">E-mail</label>
                                        </div>

                                        <div className="textbox">
                                            <input
                                                id="senha_user"
                                                name="senha"
                                                type="password"
                                                required
                                                value={dataUser.senha}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="senha">Senha</label>
                                        </div>

                                        <div className="textbox">
                                            <input
                                                id="confirm_senha_user"
                                                name="confirmSenha"
                                                type="password"
                                                required
                                                value={dataUser.confirmSenha}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="confirm_senha">Confirmar Senha</label>
                                        </div>
                                        <button id="confirmar_user" type="submit">
                                            Confirmar
                                        </button>
                                    </form>

                                    <div className="cad-empresa">
                                        <button onClick={() => { setFrameLogin(0) }}>
                                            Criar como Empresa
                                        </button>
                                    </div>
                                </>


                            ) : frameLogin === 2 ? // LOGIN
                                (
                                    <>
                                        <h2>Fazer Login</h2>
                                        <h3>Rápido e simples</h3>


                                        <form onSubmit={handleSubmit} className="form">
                                            <div className="textbox">
                                                <input
                                                    id="email_login"
                                                    name="email"
                                                    type="text"
                                                    required
                                                    value={dataLogin.email}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="">Email</label>
                                            </div>

                                            <div className="textbox">
                                                <input
                                                    id="senha_login"
                                                    name="senha"
                                                    type="password"
                                                    required
                                                    value={dataLogin.senha}
                                                    onChange={handleChange}

                                                />
                                                <label htmlFor="">Senha</label>
                                            </div>

                                            <div className="check-type"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginLeft: '30px',
                                                    justifyContent: 'left',
                                                    flexDirection: 'row-reverse'
                                                }}
                                            >
                                                <label
                                                    htmlFor=""
                                                    style={{
                                                        color: 'white',
                                                        margin: '0 0 0 10px'
                                                    }}
                                                >Entrar como empresa</label>

                                                <input
                                                    id="check-type-user"
                                                    name="isEnterprise"
                                                    // checked={isEnterprise}
                                                    onChange={handleCheckboxChange}
                                                    type="checkbox"
                                                    style={{
                                                        width: '20px',
                                                        cursor: 'pointer',
                                                    }} />
                                            </div>

                                            <p>
                                                Esqueceu a senha?
                                                <span className="clique-aqui"> clique aqui</span>
                                            </p>

                                            <button type="submit">
                                                Entrar
                                            </button>
                                        </form>

                                        <button onClick={() => { setFrameLogin(1) }}>
                                            Nova conta
                                        </button>
                                    </>
                                ) :
                                // CADASTRAR EMPRESA
                                (
                                    <>
                                        <h2>Cadastrar Empresa</h2>
                                        <h3>Rápido e simples</h3>

                                        <form onSubmit={handleSubmit} className="form">
                                            <div className="textbox">

                                                <input
                                                    id="nome_empresa"
                                                    name="nome_empresa"
                                                    type="text"
                                                    required
                                                    value={dataEmpresa.nome_empresa}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="">Nome da Empresa</label>
                                            </div>

                                            <div className="textbox">
                                                {/* <input type="text" required="required" /> */}
                                                <input
                                                    id="nome_fantasia"
                                                    name="nome_fantasia"
                                                    type="text"
                                                    required
                                                    value={dataEmpresa.nome_fantasia}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="">Nome Fantasia</label>
                                            </div>

                                            <div className="textbox">
                                                {/* <input type="text" required="required" /> */}
                                                <input
                                                    id="cnpj"
                                                    name="cnpj"
                                                    type="text"
                                                    maxLength={18}
                                                    required
                                                    value={dataEmpresa.cnpj}
                                                    onChange={handleChange}
                                                    onKeyUp={mask.cnpjMask}
                                                />
                                                <label htmlFor="">CNPJ</label>
                                            </div>

                                            <div className="textbox">
                                                {/* <input type="text" required="required" /> */}
                                                <input
                                                    id="inscricao_estadual"
                                                    name="inscricao_estadual"
                                                    type="text"
                                                    maxLength={12}
                                                    required
                                                    value={dataEmpresa.inscricao_estadual}
                                                    onChange={handleChange}
                                                    onKeyUp={mask.stateRegistrationMask}
                                                />
                                                <label htmlFor="">Inscrição Estadual</label>
                                            </div>

                                            <div className="textbox">
                                                {/* <input type="text" required="required" /> */}
                                                <input
                                                    id="inscricao_municipal"
                                                    name="inscricao_municipal"
                                                    type="text"
                                                    maxLength={7}
                                                    required
                                                    value={dataEmpresa.inscricao_municipal}
                                                    onKeyUp={mask.municipalRegistrationMask}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="">Inscrição Municipal</label>
                                            </div>

                                            <div className="textbox">
                                                <input
                                                    id="telefone"
                                                    name="telefone"
                                                    type="tel"
                                                    required
                                                    value={dataEmpresa.telefone}
                                                    onChange={handleChange}
                                                    onKeyUp={mask.phoneMask}
                                                />
                                                <label htmlFor="">Telefone</label>
                                            </div>

                                            <div className="textbox">
                                                <input
                                                    id="cep"
                                                    name="cep"
                                                    type="text"
                                                    required
                                                    value={dataEmpresa.cep}
                                                    onChange={handleChange}
                                                    onKeyUp={mask.cepMask}
                                                />
                                                <label htmlFor="">CEP</label>
                                            </div>

                                            <div className="textbox">
                                                <input
                                                    id="endereco"
                                                    name="endereco"
                                                    type="text"
                                                    required
                                                    value={dataEmpresa.endereco}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="">Endereço</label>
                                            </div>

                                            <div className="textbox">
                                                <input
                                                    id="emailEmpresa"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={dataEmpresa.email}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="">E-mail</label>
                                            </div>

                                            <div className="textbox">
                                                {/* <input type="password" required="required" /> */}
                                                <input
                                                    id="senhaEmpresa"
                                                    name="senha"
                                                    type="password"
                                                    required
                                                    value={dataEmpresa.senha}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="">Senha</label>
                                            </div>

                                            <div className="textbox">
                                                <input
                                                    id="confirmar_senha_empresa"
                                                    name="confirmSenha"
                                                    type="password"
                                                    required
                                                    value={dataEmpresa.confirmSenha}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="">Confirmar Senha</label>
                                            </div>
                                            <button type="submit">
                                                Confirmar
                                            </button>
                                        </form>
                                    </>
                                )
                    }
                </div>
            </div>
        </>
    );
}

Login.propTypes = {
    setFezLogin: PropTypes.func.isRequired,
    setTypeUser: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired
}