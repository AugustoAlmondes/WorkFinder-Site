import { motion as MOTION } from "motion/react";
import { Link } from "react-router-dom";
import {
    FiUser,
    FiSettings,
    FiLogOut,
    FiHome,
    FiInfo,
    FiBriefcase,
    FiPlusSquare
} from "react-icons/fi";
import styles from "./Header.module.css";
import Logo from "../../assets/Logomarca.png";

export default function Header({ typeUser, fezLogin, handleLogout }) {
    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 * i }
        })
    };

    return (
        <header className={styles.header}>
            <MOTION.div
                className={styles.container}
                initial="hidden"
                animate="visible"
            >
                <MOTION.img
                    src={Logo}
                    alt="Logo"
                    className={styles.logo}
                    variants={itemVariants}
                    custom={0}
                />

                <ul className={styles.navList}>
                    <MOTION.li variants={itemVariants} custom={1}>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to="/" className={styles.navLink}>
                            <FiHome /> Home
                        </Link>
                    </MOTION.li>

                    <MOTION.li variants={itemVariants} custom={2}>
                        {fezLogin ? (
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="/" onClick={handleLogout} className={styles.navLink}>
                                Sair
                            </Link>
                        ) : (
                            <p className={styles.navLink} style={{ margin: 0 }}>
                                <FiInfo /> Sobre
                            </p>
                        )}
                    </MOTION.li>

                    {(typeUser != 0 || !fezLogin) && (
                        <MOTION.li variants={itemVariants} custom={3}>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="/allvacany" className={styles.navLink}>
                                <FiBriefcase /> Vagas
                            </Link>
                        </MOTION.li>
                    )}

                    {(typeUser === 0 || typeUser === 2 || !fezLogin) && (
                        <MOTION.li variants={itemVariants} custom={4}>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="/vacany" className={styles.navLink}>
                                <FiPlusSquare /> Nova Vaga
                            </Link>
                        </MOTION.li>
                    )}

                    {!fezLogin ? (
                        <MOTION.li variants={itemVariants} custom={5}>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <button className={styles.loginButton}>Login</button>
                            </Link>
                        </MOTION.li>
                    ) : (
                        <MOTION.li variants={itemVariants} custom={5}>
                            <div className={styles.dropdown}>
                                <button className={styles.dropdownButton}>
                                    <FiUser />
                                </button>
                                <div className={styles.dropdownContent}>
                                    <a href="#" className={styles.dropdownItem}>
                                        Perfil <FiUser />
                                    </a>
                                    <a href="#" className={styles.dropdownItem}>
                                        Configurações <FiSettings />
                                    </a>
                                    <a href="#" className={styles.dropdownItem} onClick={handleLogout}>
                                        Sair <FiLogOut />
                                    </a>
                                </div>
                            </div>
                        </MOTION.li>
                    )}
                </ul>
            </MOTION.div>
        </header>
    );
}