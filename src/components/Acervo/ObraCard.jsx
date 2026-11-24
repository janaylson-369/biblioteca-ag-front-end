import { Link } from "react-router"
import { BookOpen, ArrowRight } from "../ComponentsHome/Icons/Icons"
import styles from "./ObraCard.module.css"

export default function ObraCard({ obra }) {
    const { id, titulo, autor, categoria, disponivel, corCapa, capa } = obra

    return (
        <article className={styles.card}>
            <Link to={`/acervo/${id}`} className={styles.linkCapa} aria-label={`Ver detalhes de ${titulo}`}>
                <div className={`${styles.capa} ${styles[corCapa] ?? ""}`}>
                    {capa ? (
                        <img src={capa} alt={`Capa de ${titulo}`} />
                    ) : (
                        <div className={styles.capaPlaceholder} aria-hidden="true">
                            <BookOpen size={29} />
                            <span>{titulo}</span>
                            <small>{autor}</small>
                        </div>
                    )}
                    <span className={disponivel ? styles.disponivel : styles.emprestado}>
                        <i />
                        {disponivel ? "Disponível" : "Emprestado"}
                    </span>
                </div>
            </Link>

            <div className={styles.informacoes}>
                <p className={styles.categoria}>{categoria}</p>
                <h2><Link to={`/acervo/${id}`}>{titulo}</Link></h2>
                <p className={styles.autor}>{autor}</p>
                <Link to={`/acervo/${id}`} className={styles.detalhes}>
                    Ver detalhes <ArrowRight size={15} />
                </Link>
            </div>
        </article>
    )
}
