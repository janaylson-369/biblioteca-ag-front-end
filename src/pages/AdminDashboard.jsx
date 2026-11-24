import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router"
import { BookOpen, User } from "../components/ComponentsHome/Icons/Icons"
import { encerrarSessaoDemo, lerSessaoDemo } from "../data/sessaoDemo"
import styles from "./AdminDashboard.module.css"

const modulos = [
    { id: "visao-geral", nome: "Visão geral" },
    { id: "acervo", nome: "Gestão do acervo" },
    { id: "emprestimos", nome: "Empréstimos" },
    { id: "usuarios", nome: "Usuários e Acessos", apenasAdmin: true },
]

export default function AdminDashboard() {
    const navigate = useNavigate()
    const [sessao] = useState(() => lerSessaoDemo())
    const [moduloAtivo, setModuloAtivo] = useState("visao-geral")
    const tituloRef = useRef(null)
    const ehAdmin = sessao?.papel === "ROLE_ADMIN"
    const modulosVisiveis = modulos.filter((modulo) => !modulo.apenasAdmin || ehAdmin)
    const moduloAtual = modulosVisiveis.find((modulo) => modulo.id === moduloAtivo) ?? modulosVisiveis[0]

    useEffect(() => {
        if (!sessao || sessao.ativa !== true) {
            navigate("/login", { replace: true })
        }
    }, [navigate, sessao])

    useEffect(() => {
        tituloRef.current?.focus()
    }, [moduloAtivo])

    function sair() {
        encerrarSessaoDemo()
        navigate("/login", { replace: true })
    }

    if (!sessao || sessao.ativa !== true) return null

    return (
        <main className={styles.pagina}>
            <aside className={styles.lateral} aria-label="Navegação administrativa">
                <Link to="/" className={styles.marca}>Biblioteca Municipal</Link>
                <p className={styles.rotuloNavegacao}>GESTÃO</p>
                <nav className={styles.navegacao}>
                    {modulosVisiveis.map((modulo) => (
                        <button
                            key={modulo.id}
                            type="button"
                            className={moduloAtivo === modulo.id ? styles.itemAtivo : styles.item}
                            aria-current={moduloAtivo === modulo.id ? "page" : undefined}
                            onClick={() => setModuloAtivo(modulo.id)}
                        >
                            {modulo.nome}
                        </button>
                    ))}
                    <Link to="/acervo" className={styles.itemLink}>Consultar Acervo</Link>
                </nav>
                <div className={styles.perfil}>
                    <span className={styles.avatar}><User size={17} /></span>
                    <span className={styles.dadosPerfil}>
                        <strong>{sessao.nome}</strong>
                        <small>{sessao.papel}</small>
                    </span>
                    <button type="button" className={styles.botaoSair} onClick={sair}>Encerrar sessão</button>
                </div>
            </aside>

            <section className={styles.areaConteudo}>
                <header className={styles.topo}>
                    <span>Painel administrativo</span>
                    <span className={styles.seloDemo}>Demonstração · sem autenticação real</span>
                </header>

                <div className={styles.conteudo}>
                    <div className={styles.aviso} role="status">
                        Esta área é somente um protótipo. A sessão fica no armazenamento desta aba e não protege dados ou operações reais.
                    </div>

                    <p className={styles.sobretitulo}>Área administrativa</p>
                    <h1 ref={tituloRef} tabIndex={-1} className={styles.tituloModulo}>
                        {moduloAtual.nome}
                    </h1>
                    {moduloAtivo === "visao-geral" && (
                        <>
                            <p className={styles.descricao}>Bem-vindo, {sessao.nome}. Selecione um módulo no menu para continuar.</p>
                            <div className={styles.grade}>
                                <article className={styles.cartao}>
                                    <span className={styles.icone}><BookOpen size={21} /></span>
                                    <h2>Consultar Acervo</h2>
                                    <p>Acesse a consulta pública das obras cadastradas.</p>
                                    <Link to="/acervo">Abrir catálogo</Link>
                                </article>
                                <article className={styles.cartao}>
                                    <span className={styles.icone}><User size={21} /></span>
                                    <h2>Perfil de demonstração</h2>
                                    <p>Papel atual: <strong>{sessao.papel}</strong></p>
                                    <span className={styles.indisponivel}>Sem ações administrativas reais</span>
                                </article>
                            </div>
                        </>
                    )}
                    {moduloAtivo !== "visao-geral" && (
                        <section className={styles.moduloPlaceholder} aria-live="polite">
                            <h2>{moduloAtual.nome}</h2>
                            <p>
                                Este módulo é uma área demonstrativa. A gestão real será habilitada quando o painel estiver conectado aos serviços da biblioteca.
                            </p>
                        </section>
                    )}
                </div>
            </section>
        </main>
    )
}
