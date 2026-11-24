import Nav from "../components/ComponentsHome/Nav/Nav"
import FormularioRenovacao from "../components/Renovacao/FormularioRenovacao"
import styles from "./Renovacao.module.css"

export default function Renovacao() {
    return (
        <>
            <Nav />
            <main className={styles.pagina}>
                <section className={styles.introducao}>
                    <div className={styles.conteudoIntroducao}>
                        <p className={styles.sobretitulo}>Atendimento ao leitor</p>
                        <h1>Renovação de Empréstimo</h1>
                        <p>Consulte a equipe da biblioteca para verificar as condições e o novo prazo de devolução.</p>
                    </div>
                </section>
                <FormularioRenovacao />
            </main>
        </>
    )
}
