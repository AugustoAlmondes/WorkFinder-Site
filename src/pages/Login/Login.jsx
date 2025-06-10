import Background from "../../components/BackgroundAnimated/BackgroundAnimated";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Estilos do Toast
import axios from 'axios';

import './login.css'
import CadUser from "../../components/CadUser/CadUser";
import LoginUser from "../../components/LoginUser/LoginUser";
import CadBusiness from "../../components/CadBusiness/CadBusiness";
// // import background from "../components/Background";


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
        nome_completo: '',
        data_nascimento: '',
        telefone: '',
        cep: '',
        email: '',
        senha: '',
        confirm_senha: ''
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
            confirm_senha: ''
        }
    )

    const clearInput = () => {
        const actions = {
            1: () => setDataUser({
                nome_completo: '', data_nascimento: '', telefone: '', cep: '',
                email: '', senha: '', confirm_senha: ''
            }),
            0: () => setDataEmpresa({
                nome_empresa: '', nome_fantasia: '', cnpj: '', inscricao_estadual: '',
                inscricao_municipal: '', telefone: '', cep: '', endereco: '',
                email: '', senha: '', confirm_senha: ''
            })
        };

        const defaultAction = () => setDataLogin({
            email: '', senha: '', isEnterprise: true
        });

        // Executa a ação correspondente ao 'frameLogin' ou a ação padrão
        (actions[frameLogin] || defaultAction)();
    };

    const handleRegister = async (e) => { // 1. Adicione 'async'
        e.preventDefault();

        const typeRegister = {
            typeAccount: frameLogin,
            data: frameLogin === 0 ? dataEmpresa : dataUser,
            endpoint: `https://workfinder-api-production.up.railway.app/auth/register-${frameLogin === 0 ? 'firm' : 'user'}`
            // endpoint: `http://localhost:3000/auth/register-${frameLogin === 0 ? 'firm' : 'user'}`
        };

        if (typeRegister.data.senha !== typeRegister.data.confirm_senha) { // Use confirmSenha do seu state
            return toast.error("As senhas não coincidem!");
        }
        // remover o confirm_senha do objeto
        delete typeRegister.data.confirm_senha;

        console.log("Enviando Dados:", typeRegister.data, "Para:", typeRegister.endpoint);

        try {
            // 2. Use 'await' para esperar a resposta
            const response = await axios.post(typeRegister.endpoint, typeRegister.data);

            // Este código só roda se o status for 2xx (sucesso)
            console.log("Cadastro com sucesso:", response.data);
            toast.success("Cadastro realizado com sucesso");
            clearInput();
            setFrameLogin(2);

        } catch (error) {
            // 3. Capture o erro se a requisição falhar
            // O status e os dados do erro estão em 'error.response'
            clearInput();
            if (error.response && error.response.status === 500) {
                console.log("Mensagem de erro:", error.response.status, error.response.data);
                toast.error("Erro interno no servidor. Tente novamente mais tarde.");
            } else {
                // Trata outros erros (ex: validação, 404, etc.)
                console.log("Ocorreu um erro:", error.response ? error.response.data : error.message);
                toast.error(error.response?.data?.message || "Erro ao cadastrar.");
            }
        }
    };

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

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const type_user = isEnterprise ? 'firm' : 'user';
            const emailLogin = dataLogin.email;
            const senhaLogin = dataLogin.senha;

            const response = await axios.post(
                `https://workfinder-api-production.up.railway.app/auth/login-${type_user}`,
                {
                    email: emailLogin,
                    senha: senhaLogin
                    // isEnterprise: isEnterprise
                }
            );
            console.log("Resposta do login:", response);
            if (response.data) {
                toast.success("Login realizado com Sucesso");
                setFezLogin(true);
                setTypeUser(!isEnterprise ? 1 : 0);
                setEmail(emailLogin);
                localStorage.setItem('fezLogin', true);
                localStorage.setItem('typeUser', isEnterprise ? 0 : 1);
                navigate('/');
            }
            else {
                toast.error("Essa conta não existe ou o tipo de login está errado");
            }
        }
        catch (error) {
            console.error("Erro ao fazer login:", error);
            toast.error("Erro ao fazer login. Verifique suas credenciais.");
            return;
        }
    };


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
                                    <CadUser dataUser={dataUser} handleChange={handleChange} handleSubmit={handleRegister} setFrameLogin={setFrameLogin} />
                                </>


                            ) : frameLogin === 2 ? // LOGIN
                                (
                                    <>
                                        <LoginUser dataLogin={dataLogin} handleChange={handleChange} handleSubmit={handleLogin} handleCheckboxChange={handleCheckboxChange} setFrameLogin={setFrameLogin} />
                                    </>
                                ) :
                                // CADASTRAR EMPRESA
                                (
                                    <>
                                        <CadBusiness dataEmpresa={dataEmpresa} handleChange={handleChange} handleSubmit={handleRegister} />
                                    </>
                                )
                    }
                </div>
            </div>
        </>
    );
}

// Login.propTypes = {
//     setFezLogin: PropTypes.func.isRequired,
//     setTypeUser: PropTypes.func.isRequired,
// };