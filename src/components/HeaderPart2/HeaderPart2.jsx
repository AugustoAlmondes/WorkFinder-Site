import { motion as MOTION } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import FundoHeader from '../../assets/fundo-header2.png';
import styles from './HeaderPart2.module.css';

export default function HeaderPart2() {
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <MOTION.div
            className={styles.heroSection}
            initial="hidden"
            animate="visible"
        >
            <MOTION.div
                className={styles.heroImageContainer}
                variants={containerVariants}
            >
                <img
                    src={FundoHeader}
                    alt="Fundo-header"
                    className={styles.heroImage}
                />
            </MOTION.div>
            {/* <MOTION.button
                className={styles.ctaButton}
                variants={buttonVariants}
                whileHover="hover"
            >
                Saiba Mais <FiArrowRight />
            </MOTION.button> */}

        </MOTION.div>
    );
}