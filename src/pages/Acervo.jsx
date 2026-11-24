import { useMemo } from "react"
import { useSearchParams } from "react-router"
import Nav from "../components/ComponentsHome/Nav/Nav"
import AcervoFiltros from "../components/Acervo/AcervoFiltros"
import ResultadoAcervo from "../components/Acervo/ResultadoAcervo"
import { livros } from "../data/livros"
import styles from "./Acervo.module.css"

const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

export default function Acervo() {
    const [searchParams, setSearchParams] = useSearchParams()
    const busca = searchParams.get("q") ?? ""
    const categoriaAtiva = searchParams.get("categoria") ?? ""
    const apenasDisponiveis = ["1", "true", "sim"].includes(
        (searchParams.get("disponiveis") ?? "").toLowerCase()
    )

    const obrasAtivas = useMemo(() => livros.filter((livro) => livro.ativo !== false), [])
    const categorias = useMemo(() => {
        const categoriasObras = [...new Set(obrasAtivas.map((livro) => livro.categoria))]
        const temLiteratura = categoriasObras.some((categoria) => normalizar(categoria).startsWith("literatura"))
        const opcoes = temLiteratura ? ["Literatura", ...categoriasObras] : categoriasObras
        return [...new Set(opcoes)].sort((a, b) => a.localeCompare(b, "pt-BR"))
    }, [obrasAtivas])
    const obrasEncontradas = useMemo(() => {
        const termo = normalizar(busca.trim())
        const categoriaBusca = normalizar(categoriaAtiva.trim())

        return obrasAtivas.filter((obra) => {
            const correspondeBusca = !termo || normalizar(
                `${obra.titulo} ${obra.autor} ${obra.categoria}`
            ).includes(termo)
            const correspondeCategoria = !categoriaBusca || normalizar(obra.categoria).includes(categoriaBusca)
            const correspondeDisponibilidade = !apenasDisponiveis || obra.disponivel

            return correspondeBusca && correspondeCategoria && correspondeDisponibilidade
        })
    }, [obrasAtivas, busca, categoriaAtiva, apenasDisponiveis])

    function atualizarParametro(chave, valor) {
        const novosParametros = new URLSearchParams(searchParams)
        if (valor) novosParametros.set(chave, valor)
        else novosParametros.delete(chave)
        setSearchParams(novosParametros, { replace: true })
    }

    return (
        <>
            <Nav />
            <main className={styles.pagina}>
                <section className={styles.introducao}>
                    <div className={styles.conteudoIntroducao}>
                        <p className={styles.sobretitulo}>Conhecimento ao alcance de todos</p>
                        <h1>Acervo Online</h1>
                        <p>Explore as obras da Biblioteca Municipal de Alagoa Grande e encontre sua próxima leitura.</p>
                    </div>
                </section>

                <div className={styles.filtrosContainer}>
                    <AcervoFiltros
                        busca={busca}
                        categorias={categorias}
                        categoriaAtiva={categoriaAtiva}
                        apenasDisponiveis={apenasDisponiveis}
                        onBuscaChange={(valor) => atualizarParametro("q", valor)}
                        onCategoriaChange={(valor) => atualizarParametro("categoria", valor)}
                        onDisponibilidadeChange={(valor) => atualizarParametro("disponiveis", valor ? "1" : "")}
                    />
                </div>

                <ResultadoAcervo
                    obras={obrasEncontradas}
                    totalCatalogo={obrasAtivas.length}
                    busca={busca}
                    categoriaAtiva={categoriaAtiva}
                    apenasDisponiveis={apenasDisponiveis}
                />
            </main>
        </>
    )
}
