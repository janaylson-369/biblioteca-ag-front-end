import Card from "../Card/Card";
import styles from "./Content.module.css"

export default function Content({ livros }) {
    return (
        <section className={styles.content}>
            {livros.length === 0 ? (
                <p className={styles.vazio}>Nenhum livro encontrado com os filtros selecionados.</p>
            ) : (
                <div className={styles.grid}>
                    {livros.map((livro) => (
                        <Card key={livro.id} {...livro} />
                    ))}
                </div>
            )}
        </section>
    )
}
