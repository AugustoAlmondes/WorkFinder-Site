import { useState } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/JobForms.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { toast, ToastContainer } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import { handleInputs } from '../hooks/handleInputs';


let mask = new handleInputs();
export default function JobApplicationForm({ typeUser, fezLogin, handleLogout, userEmail }) {

    const location = useLocation();
    const { emailEnterprise } = location.state || {};

    console.log("Email logado:", userEmail)
    console.log("O email da empresa: ", emailEnterprise);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        education: '',
        experience: '',
        skills: '',
        language: '',
        availability: '',
        desiredSalary: '',
    });

    const clearInput = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            linkedin: '',
            portfolio: '',
            education: '',
            experience: '',
            skills: '',
            language: '',
            availability: '',
            desiredSalary: '',
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    async function sendEmail(e) {
        e.preventDefault();
        clearInput();

        // alert("Email enviado com sucesso!");

        const payload = {
            formData,
            userEmail: fezLogin ? formData.email : "Usuario nao logado",
            emailEnterprise
        }

        try {
            const response = await fetch('http://localhost:8800/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // alert("Email enviado com sucesso!");
                toast.success("Submissão realizado", {
                    className: 'toast-sucees',
                });
                clearInput();
            } else {
                toast.error("Erro ao enviar email. Tente novamente.", {
                    className: 'toast-error',
                })
                // alert("Erro ao enviar email. Tente novamente.");
            }

        } catch (error) {
            console.error('Erro ao enviar o email:', error);
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
                <div id="user-info-form-container" className="container">
                    <div className="row">
                        <div id="form-box" className="col-md-12">
                            <h2 style={{ marginBottom: '40px' }}>Preencha os dados abaixo para a vaga de emprego</h2>
                            <form onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label htmlFor="name">Nome Completo:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Digite seu nome completo"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Digite seu e-mail"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Telefone:</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        placeholder="Digite seu telefone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="linkedin">LinkedIn:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="linkedin"
                                        name="linkedin"
                                        placeholder="Link para o seu perfil no LinkedIn"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="portfolio">Portfólio (Opcional):</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="portfolio"
                                        name="portfolio"
                                        placeholder="Link para o seu portfólio online"
                                        value={formData.portfolio}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="education">Formação Acadêmica:</label>
                                    <textarea
                                        className="form-control"
                                        id="education"
                                        name="education"
                                        placeholder="Descreva sua formação acadêmica..."
                                        value={formData.education}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="experience">Experiência Profissional:</label>
                                    <textarea
                                        className="form-control"
                                        id="experience"
                                        name="experience"
                                        placeholder="Descreva sua experiência profissional..."
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="skills">Habilidades e Competências:</label>
                                    <textarea
                                        className="form-control"
                                        id="skills"
                                        name="skills"
                                        placeholder="Liste suas habilidades e competências..."
                                        value={formData.skills}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="language">Idiomas:</label>
                                    <textarea
                                        className="form-control"
                                        id="language"
                                        name="language"
                                        placeholder="Informe os idiomas que você fala e o nível de proficiência..."
                                        value={formData.language}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="availability">Disponibilidade:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="availability"
                                        name="availability"
                                        placeholder="Digite sua disponibilidade"
                                        value={formData.availability}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="desiredSalary">Salário Pretendido:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="desired-salary"
                                        name="desiredSalary"
                                        placeholder="Digite o salário pretendido"
                                        value={formData.desiredSalary}
                                        onChange={handleChange}
                                        onKeyUp={mask.salaryMask}
                                    />
                                </div>
                                {
                                    fezLogin ? (
                                        <input
                                            type="submit"
                                            value="Enviar Candidatura"
                                            id="enviar"
                                            className="enviar-button"
                                        />
                                    ) : (
                                        <Link to="/login">
                                            <input
                                                type="button"
                                                value="Enviar Candidatura"
                                                id="enviar"
                                                className="enviar-button"
                                            />
                                        </Link>
                                    )
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

JobApplicationForm.propTypes = {
    typeUser: PropTypes.number.isRequired,
    fezLogin: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
    emailLogin: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired
};