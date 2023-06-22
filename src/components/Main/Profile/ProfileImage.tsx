import styles from "../styles.module.scss"
import Image from 'next/image'
import profilePic from '@/assets/img/prof_img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ProfileImage() {
    return (
        <div className={styles.profile__container}>
            <div className={styles.profile__background}></div>
            <Image className={styles.profile__img} width={300} height={390} src={profilePic} alt="Imagem de perfil" />
            <div className={styles.caption}>
                <hr />
                <p>
                    STOP TAKING!
                    <br />
                    GIVE ME THE CODE(_)
                </p>
                <hr />
            </div>
            <div className={styles.social}>
                <a className={styles.circleLinkedin} href="https://www.linkedin.com/in/eric-vinicius-felix-silva-457b63249/">
                    <FontAwesomeIcon className={styles.linkedin} icon={faLinkedinIn} />
                </a>
                <FontAwesomeIcon className={styles.github} icon={faGithub} />

                <FontAwesomeIcon className={styles.facebook} icon={faFacebook} />
                <a className={styles.circleInstagram}>
                    <FontAwesomeIcon className={styles.instagram} icon={faInstagram} />
                </a>
            </div>
        </div>
    )
} 