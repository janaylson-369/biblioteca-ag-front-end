import styles from './Nav.module.css'
import logo from '../../../assets/imgs/Brasaoalagoagrande.png'



export default function Nav() {
  return <>
    <nav className={styles.nav}>
        <div className={styles.navTop}>
            <h2 className={styles.navTopTitle}>Prefeitura Municipal de Alagoa Grande</h2>
        </div>
        <div className={styles.navBottom}>
            <div className={styles.logoTitulo}>
                <img src={logo} className={styles.logo}/>
                <div className={styles.tituloDiv}>
                    <h2 className={styles.tituloH2}>Biblioteca Municipal</h2>
                    <p className={styles.tituloP}>Alagoa Grande - Paraiba</p>
                </div>
            </div>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}>Inicio</li>
                <li className={styles.navLink}>Acervo Online</li>
                <li className={styles.navLink}>Categorias</li>
                <li className={styles.navLink}>Reserva e Emprestimos</li>
                <li className={styles.navLink}>Espaço Cultural</li>
                <li className={styles.navLink}>Horarios e Localização</li>
                <li className={styles.buttonLink}><button className={styles.buttonEntrar}>Entrar</button></li>
            </ul>
        </div>
    </nav>
  </>
}