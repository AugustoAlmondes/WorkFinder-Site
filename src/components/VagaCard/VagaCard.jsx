import { motion as MOTION } from "motion/react";
import { IoPersonAdd } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { FaCoins } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import styles from './VagaCard.module.css';

export default function VagaCard({ data, fezlogin }) {
    const formatSalary = (salary) => {
        return salary.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <MOTION.div
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            layout
        >
            <div className={styles.header}>
                <h2 className={styles.company}>{data.enterprise}</h2>
            </div>

            <h4 className={styles.ability}>{data.ability}</h4>
            <h3 className={styles.title}>{data.title}</h3>

            <ul className={styles.tags}>
                {[data.contractType, data.modality, data.areaActivity].map((tag, index) => (
                    <li key={index} className={styles.tag}>
                        {tag}
                    </li>
                ))}
            </ul>

            <ul className={styles.details}>
                <li className={styles.detailItem}>
                    <GiPositionMarker className={styles.icon} />
                    {data.local}
                </li>
                <li className={styles.detailItem}>
                    <IoPersonAdd className={styles.icon} />
                    {data.amount} Vagas
                </li>
                <li className={styles.detailItem}>
                    <FaCoins className={styles.icon} />
                    {formatSalary(data.salary)}
                </li>
            </ul>

            <Link
                to={{
                    pathname: fezlogin ? "/infojob" : "/login",
                }}
                style={{ textDecoration: "none" }}
                state={{ jobData: data }}
                className={styles.accessButton}
            >
                <MOTION.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Acessar
                </MOTION.span>
            </Link>
        </MOTION.div>
    );
}