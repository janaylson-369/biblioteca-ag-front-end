import { BookOpen, Search } from "../ComponentsHome/Icons/Icons"
import ObraCard from "./ObraCard"
import styles from "./ResultadoAcervo.module.css"

export default function ResultadoAcervo({ obras, totalCatalogo, busca, categoriaAtiva, apenasDisponiveis }) {
    const quantidade = obras.length
    const descricao = quantidade === 1 ? "obra encontrada" : "obras encontradas"

    return (
        <section className={styles.resultados} aria-live="polite">
            <div className={styles.cabecalho}>
                <div>
                    <p className={styles.sobretitulo}><BookOpen size={15} /> Acervo municipal</p>
                    <h2>Obras do catálogo</h2>
                    <p className={styles.resumo}>
                        {quantidade} {descricao}
                        {totalCatalogo !== quantidade && ` de ${totalCatalogo}`}
                    </p>
                </div>
            </div>

            {quantidade ? (
                <div className={styles.grade}>
                    {obras.map((obra) => <ObraCard key={obra.id} obra={obra} />)}
                </div>
            ) : (
                <div className={styles.vazio}>
                    <Search size={27} />
                    <h3>Nenhuma obra encontrada</h3>
                    <p>
                        {busca || categoriaAtiva || apenasDisponiveis
                            ? "Tente mudar os termos da pesquisa ou remover algum filtro."
                            : "O catálogo ainda não possui obras disponíveis para exibição."}
                    </p>
                </div>
            )}
        </section>
    )
}
