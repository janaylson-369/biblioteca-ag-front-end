import { Search } from "../ComponentsHome/Icons/Icons"
import styles from "./AcervoFiltros.module.css"

export default function AcervoFiltros({
    busca,
    categorias,
    categoriaAtiva,
    apenasDisponiveis,
    onBuscaChange,
    onCategoriaChange,
    onDisponibilidadeChange,
}) {
    return (
        <section className={styles.filtros} aria-label="Filtros do acervo">
            <label className={styles.busca}>
                <Search size={19} />
                <span className={styles.somenteLeitorTela}>Pesquisar obras</span>
                <input
                    type="search"
                    value={busca}
                    onChange={(event) => onBuscaChange(event.target.value)}
                    placeholder="Busque por título, autor ou categoria"
                />
                {busca && (
                    <button
                        type="button"
                        className={styles.limpar}
                        onClick={() => onBuscaChange("")}
                        aria-label="Limpar pesquisa"
                    >
                        Limpar
                    </button>
                )}
            </label>

            <div className={styles.opcoes}>
                <label className={styles.seletor}>
                    <span>Categoria</span>
                    <select
                        value={categoriaAtiva}
                        onChange={(event) => onCategoriaChange(event.target.value)}
                    >
                        <option value="">Todas as categorias</option>
                        {categorias.map((categoria) => (
                            <option key={categoria} value={categoria}>{categoria}</option>
                        ))}
                    </select>
                </label>

                <label className={styles.disponibilidade}>
                    <input
                        type="checkbox"
                        checked={apenasDisponiveis}
                        onChange={(event) => onDisponibilidadeChange(event.target.checked)}
                    />
                    <span>Mostrar somente disponíveis</span>
                </label>
            </div>
        </section>
    )
}
