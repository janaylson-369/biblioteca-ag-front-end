import { Link } from "react-router"
import { ArrowRight, BookOpen } from "../ComponentsHome/Icons/Icons"
import styles from "./CategoriaCard.module.css"

export default function CategoriaCard({ categoria, quantidade, indice }) {
    const parametros = new URLSearchParams({ categoria: categoria.nome })
    const classeCor = styles[`cor${indice % 4}`]
    const descricao = quantidade === 1 ? "obra ativa" : "obras ativas"

    return (
        <Link
            to={`/acervo?${parametros.toString()}`}
            className={`${styles.card} ${classeCor}`}
        >
            <span className={styles.icone}><BookOpen size={24} /></span>
            <span className={styles.nome}>{categoria.nome}</span>
            <span className={styles.quantidade}>{quantidade} {descricao}</span>
            <span className={styles.abrir}>Explorar categoria <ArrowRight size={15} /></span>
        </Link>
    )
}
