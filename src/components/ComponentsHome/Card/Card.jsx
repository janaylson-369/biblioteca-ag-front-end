import styles from "./Card.module.css";
import { ArrowRight } from "../Icons/Icons";

export default function Card({ titulo, autor, categoria, disponivel = true, corCapa = "tan", capa }) {
    return (
        <article className={styles.divCard}>
            <div className={`${styles.divCapaLivro} ${styles[corCapa] ?? ""}`}>
                <span className={disponivel ? styles.iconDisponivel : styles.iconEmprestado}>
                    <i className={styles.ponto} />
                    {disponivel ? "Disponível" : "Emprestado"}
                </span>

                {capa ? (
                    <img src={capa} alt={`Capa do livro ${titulo}`} className={styles.capaLivro} />
                ) : (
                    <div className={styles.capaVazia} aria-hidden="true" />
                )}
            </div>

            <div className={styles.cabecalhoLivro}>
                <p className={styles.genero}>{categoria}</p>
                <h3 className={styles.tituloLivro}>{titulo}</h3>
                <p className={styles.autor}>{autor}</p>
                <button type="button" className={styles.reservar}>
                    Ver detalhes / Reservar <ArrowRight size={14} />
                </button>
            </div>
        </article>
    )
}
