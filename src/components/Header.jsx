import '../styles/header.css'
import Logo from '../assets/Logomarca.png'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import handleLogout from '../pages/Home'

function Header({ typeUser, fezLogin, handleLogout }) {
    // typeUser = Tipo de usuário - setTypeUser = função para alterar o tipo  de usuári


    return (
        <header>
            <div className="cab-part-1 animate__animated animate__fadeIn animate__delay-1s">
                <img className="animate__animated animate__fadeIn animate__delay-1s" src={Logo} alt="Logo" />

                <ul className="animate__delay-2s">
                    <li className="l1 font-1 animate__animated animate__fadeIn animate__delay-1s">
                        {/* <a href="index.html">Home</a> */}
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="l2 font-1 animate__animated animate__fadeIn animate__delay-1s" >
                        {
                            fezLogin ?
                                (
                                    <Link to="/" onClick={handleLogout}>Sair</Link>
                                    // 'Sair'
                                ) :
                                (
                                    <p style={{ margin: '0' }}>Sobre</p>
                                )
                        }
                    </li>
                    {
                        (typeUser != 0 || !fezLogin) ?
                            (
                                <li className="l3 font-1 animate__animated animate__fadeIn animate__delay-1s">
                                    {/* Vagas */}
                                    <Link to="/allvacany">Vagas</Link>
                                </li>
                            ) : (
                                <li style={{ display: 'none' }}></li>
                            )
                    }

                    {(typeUser === 0 || typeUser === 2 || !fezLogin) &&
                        (
                            <li id="cadVaga" className="l4 font-1 animate__animated animate__fadeIn animate__delay-1s">
                                <Link to="/vacany">Cadastrar Vaga</Link>
                            </li>
                        )
                    }

                    {!fezLogin ? (
                        <li className="l5 font-1 animate__animated animate__fadeIn animate__delay-1s">
                            {/* <button className="l5 font-1">Login</button> */}
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </li>
                    ) :
                        (
                            <div id="user" className="dropdown">
                                <i className="bi bi-person-circle dropbtn l5 font-1 animate__animated animate__fadeIn animate__delay-1s"></i>
                                <div id="myDropdown" className="dropdown-content">
                                    <a href="#">Perfil <i className="bi bi-person"></i></a>
                                    <a href="#">Configurações <i className="bi bi-gear-fill"></i></a>
                                    <a href="#">Sair <i className="bi bi-door-closed"></i></a>
                                </div>
                            </div>
                        )
                    }


                </ul>
            </div>
        </header>
    )

}

Header.propTypes = {
    typeUser: PropTypes.number.isRequired,
    fezLogin: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired
};

export default Header
