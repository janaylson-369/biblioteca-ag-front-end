import { useMemo } from "react"
import Nav from "../components/ComponentsHome/Nav/Nav"
import CategoriaCard from "../components/Categorias/CategoriaCard"
import { categoriasCatalogo, livros } from "../data/livros"
import styles from "./Categorias.module.css"

export default function Categorias() {
    const categoriasAtivas = useMemo(() => {
        const obrasAtivas = livros.filter((livro) => livro.ativo !== false)

        return categoriasCatalogo
            .filter((categoria) => categoria.ativa)
            .map((categoria) => ({
                ...categoria,
                quantidade: obrasAtivas.filter((obra) => obra.categoria === categoria.nome).length,
            }))
            .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"))
    }, [])

    return (
        <>
            <Nav />
            <main className={styles.pagina}>
                <section className={styles.introducao}>
                    <div className={styles.conteudoIntroducao}>
                        <p className={styles.sobretitulo}>Encontre sua próxima leitura</p>
                        <h1>Categorias Literárias</h1>
                        <p>Explore o catálogo por assunto e descubra obras disponíveis na Biblioteca Municipal.</p>
                    </div>
                </section>

                <section className={styles.categorias} aria-labelledby="titulo-categorias">
                    <div className={styles.cabecalho}>
                        <div>
                            <h2 id="titulo-categorias">Explore por categoria</h2>
                            <p>{categoriasAtivas.length} {categoriasAtivas.length === 1 ? "categoria ativa" : "categorias ativas"}</p>
                        </div>
                    </div>

                    {categoriasAtivas.length > 0 ? (
                        <div className={styles.grade}>
                            {categoriasAtivas.map((categoria, indice) => (
                                <CategoriaCard
                                    key={categoria.nome}
                                    categoria={categoria}
                                    quantidade={categoria.quantidade}
                                    indice={indice}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className={styles.vazio}>Nenhuma categoria está disponível no momento.</p>
                    )}
                </section>
            </main>
        </>
    )
}
