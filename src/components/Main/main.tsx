import { IMainProps } from '@/interfaces/Main.interfaces';
import styles from "./styles.module.scss"

export default function Main ({children}:IMainProps) {
    return (
        <main className={styles.main__container}>
            {children}
        </main>
    )
}