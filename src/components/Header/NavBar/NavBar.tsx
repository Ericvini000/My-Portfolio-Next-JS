import styles from "../styles.module.scss"

export default function NavBar() {
    return (
        <nav className={styles.nav__bar}>
                <a className={styles.a__item}>Tecnologias</a>
                <a className={styles.a__item}>Trabalhos</a>
                <a className={styles.a__item}>About</a>
        </nav>
    )
}