import NavBar from "./NavBar/NavBar";
import styles from './styles.module.scss';


export default function Header() {
    return (
        <header className={styles.header__container}>
            <NavBar />
        </header>
    )
}