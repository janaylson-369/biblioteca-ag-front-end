import styles from './Nav.module.css'
import logo from '../../../assets/imgs/Brasaoalagoagrande.png'
import { Accessibility, Camera, PlayCircle, Share, User } from '../Icons/Icons'
import { Link, useLocation } from 'react-router'

const links = [
    { label: 'Início', href: '/', rota: true },
    { label: 'Acervo Online', href: '/acervo', rota: true },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Reservas & Empréstimos', href: '#reservas' },
    { label: 'Espaço Cultural', href: '#espaco-cultural' },
    { label: 'Horários & Localização', href: '#horarios' },
]

export default function Nav() {
    const { pathname } = useLocation()

    return (
        <header className={styles.nav}>
            <div className={styles.navTop}>
                <div className={styles.container + ' ' + styles.navTopInner}>
                    <p className={styles.navTopTitle}>Prefeitura Municipal de Alagoa Grande</p>
                    <div className={styles.navTopAcoes}>
                        <a href="#ouvidoria" className={styles.navTopLink}>Ouvidoria</a>
                        <a href="#transparencia" className={styles.navTopLink}>Transparência</a>
                        <a href="#acessibilidade" className={styles.navTopLink}>
                            <Accessibility size={13} /> Acessibilidade
                        </a>
                        <span className={styles.separador} />
                        <button type="button" className={styles.iconeBtn} aria-label="Compartilhar"><Share size={13} /></button>
                        <button type="button" className={styles.iconeBtn} aria-label="Foto"><Camera size={13} /></button>
                        <button type="button" className={styles.iconeBtn} aria-label="Mídia"><PlayCircle size={13} /></button>
                    </div>
                </div>
            </div>

            <div className={styles.navBottom}>
                <div className={styles.container + ' ' + styles.navBottomInner}>
                    <Link to="/" className={styles.logoTitulo}>
                        <img src={logo} className={styles.logo} alt="Brasão de Alagoa Grande" />
                        <div className={styles.tituloDiv}>
                            <span className={styles.tituloH2}>Biblioteca Municipal</span>
                            <span className={styles.tituloP}>Alagoa Grande · Paraíba</span>
                        </div>
                    </Link>

                    <nav className={styles.navLinks} aria-label="Navegação principal">
                        {links.map((l) => {
                            const ativo = l.rota && (
                                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
                            )
                            const className = ativo ? styles.navLinkAtivo : styles.navLink

                            return l.rota ? (
                                <Link key={l.label} to={l.href} className={className}>
                                    {l.label}
                                </Link>
                            ) : (
                                <a key={l.label} href={l.href} className={className}>
                                    {l.label}
                                </a>
                            )
                        })}
                        <button type="button" className={styles.buttonEntrar}>
                            <User size={14} /> Área do Servidor
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
