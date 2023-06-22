import styles from "../styles.module.scss";

export const MainText = () => {
    return (
        <div className={styles.text__container}>
            <h1 className={styles.title}>
                <span className={styles.primary}>FRONTEND</span>
                <hr />
                DEVELOPER
            </h1>

            <p>
                Olá, meu nome é Eric Vinicius Felix Silva,
                Tenho 19 anos e moro em Ariquemes-RO, Brasil.
                Trabalho como Front end Developer Junior e pretendo aprender cada vez mais sobre essa linguagem
                e como
                aplicá-lo efetivamente no mercado de trabalho.
            </p>
            <div className={styles.text__buttons}>
                <button className={styles.button__contact}>Contate-me</button>
                <button className={styles.button__projects}>Projetos</button>
            </div>
        </div>
    )
}