import { Link, useParams } from "react-router"
import Nav from "../components/ComponentsHome/Nav/Nav"
import { livros } from "../data/livros"
import styles from "./DetalheObra.module.css"

export default function DetalheObra() {
    const { id } = useParams()
    const obra = livros.find((livro) => String(livro.id) === id && livro.ativo !== false)

    return (
        <>
            <Nav />
            <main className={styles.pagina}>
                {obra ? (
                    <article className={styles.detalhe}>
                        <Link to="/acervo" className={styles.voltar}>← Voltar ao acervo</Link>
                        <div className={styles.conteudo}>
                            <div className={`${styles.capa} ${styles[obra.corCapa] ?? ""}`}>
                                {obra.capa ? (
                                    <img src={obra.capa} alt={`Capa de ${obra.titulo}`} />
                                ) : (
                                    <span>{obra.titulo}</span>
                                )}
                            </div>
                            <div className={styles.informacoes}>
                                <p className={styles.categoria}>{obra.categoria}</p>
                                <h1>{obra.titulo}</h1>
                                <p className={styles.autor}>por {obra.autor}</p>
                                <p className={obra.disponivel ? styles.disponivel : styles.emprestado}>
                                    {obra.disponivel ? "Disponível para empréstimo" : "Atualmente emprestado"}
                                </p>
                                <p className={styles.descricao}>
                                    Consulte esta obra no catálogo da Biblioteca Municipal de Alagoa Grande.
                                    Para informações sobre empréstimo, procure a equipe da biblioteca.
                                </p>
                                <Link to="/acervo" className={styles.botao}>Explorar outras obras</Link>
                            </div>
                        </div>
                    </article>
                ) : (
                    <section className={styles.naoEncontrada}>
                        <h1>Obra não encontrada</h1>
                        <p>Esta obra não está disponível no catálogo.</p>
                        <Link to="/acervo" className={styles.botao}>Voltar ao acervo</Link>
                    </section>
                )}
            </main>
        </>
    )
}
