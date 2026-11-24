import styles from "./Nav.module.css";
import { ArrowRight } from "../Icons/Icons";
import { categorias } from "../../../data/livros";

export default function Nav({ categoriaAtiva, onCategoria, apenasDisponiveis, onApenasDisponiveis }) {
    return (
        <section className={styles.nav} id="acervo">
            <div className={styles.navTop}>
                <div className={styles.navLeft}>
                    <p className={styles.navSubTittle}>Explore nosso acervo</p>
                    <h2 className={styles.navTittle}>Livros em destaque</h2>
                    <p className={styles.navDescription}>Encontre histórias, conhecimento e novas descobertas.</p>
                </div>
                <a href="#reservas" className={styles.navRight}>
                    Minhas reservas <ArrowRight size={14} />
                </a>
            </div>

            <div className={styles.navBottom}>
                <ul className={styles.filtros}>
                    {categorias.map((cat) => (
                        <li key={cat}>
                            <button
                                type="button"
                                className={cat === categoriaAtiva ? styles.attributeAtivo : styles.attribute}
                                onClick={() => onCategoria(cat)}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>

                <label className={styles.toggle}>
                    <button
                        type="button"
                        role="switch"
                        aria-checked={apenasDisponiveis}
                        className={apenasDisponiveis ? styles.switchLigado : styles.switch}
                        onClick={() => onApenasDisponiveis(!apenasDisponiveis)}
                    >
                        <span className={styles.switchBola} />
                    </button>
                    <span onClick={() => onApenasDisponiveis(!apenasDisponiveis)}>Apenas disponíveis</span>
                </label>
            </div>
        </section>
    )
}
