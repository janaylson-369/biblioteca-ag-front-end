import styles from './Nav.module.css'

export default function Nav() {
  return <>
    <nav className={styles.nav}>
        <div className={styles.navTop}>
            <h2 className={styles.navTitle}>Prefeitura Municipal de Alagoa Grande</h2>
        </div>
        <div className={styles.navBottom}>
            <div className={styles.logoTitulo}>
                <img src="" className={styles.logo}/>
                <div className={styles.titulo}>
                    <h2 className={styles.tituloH2}>Biblioteca Municipal</h2>
                    <p className={styles.tituloP}>Alagoa Grande - Paraiba</p>
                </div>
            </div>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}><a href="#">Inicio</a></li>
                <li className={styles.navLink}><a href="#">Acervo Online</a></li>
                <li className={styles.navLink}><a href="#">Categorias</a></li>
                <li className={styles.navLink}><a href="#">Reserva e Emprestimos</a></li>
                <li className={styles.navLink}><a href="#">Espaço Cultural</a></li>
                <li className={styles.navLink}><a href="#">Horarios e Localização</a></li>
            </ul>
        </div>
    </nav>
  </>
}