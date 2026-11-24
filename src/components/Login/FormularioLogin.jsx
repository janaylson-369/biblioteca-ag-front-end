import { useState } from "react"
import { useNavigate } from "react-router"
import { criarSessaoDemo } from "../../data/sessaoDemo"
import styles from "./FormularioLogin.module.css"

export default function FormularioLogin() {
    const navigate = useNavigate()
    const [erro, setErro] = useState("")

    function enviarFormulario(event) {
        event.preventDefault()
        const dados = new FormData(event.currentTarget)
        const papel = dados.get("papel")

        try {
            criarSessaoDemo(papel)
            navigate("/admin/dashboard", { replace: true })
        } catch (error) {
            setErro(error instanceof Error ? error.message : "Não foi possível iniciar a sessão de demonstração.")
        }
    }

    return (
        <section className={styles.painel} aria-labelledby="titulo-login">
            <div className={styles.cabecalho}>
                <h2 id="titulo-login">Entrar na área administrativa</h2>
                <p>Acesso restrito a servidores autorizados da biblioteca.</p>
            </div>

            <div className={styles.avisoSeguranca} role="note">
                Modo de demonstração para testes: qualquer usuário e senha preenchidos permitem continuar. A sessão existe somente nesta aba e não autentica uma conta real.
            </div>

            <form className={styles.formulario} onSubmit={enviarFormulario}>
                <label className={styles.campo}>
                    <span>Matrícula, usuário ou e-mail institucional</span>
                    <input
                        name="identificador"
                        type="text"
                        placeholder="Digite sua matrícula ou e-mail"
                        autoComplete="username"
                        required
                    />
                </label>

                <label className={styles.campo}>
                    <span>Senha</span>
                    <input
                        name="senha"
                        type="password"
                        placeholder="Digite sua senha"
                        autoComplete="current-password"
                        required
                    />
                </label>

                <label className={styles.campo}>
                    <span>Perfil para demonstração</span>
                    <select name="papel" defaultValue="ROLE_ADMIN">
                        <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                        <option value="ROLE_OPERADOR">ROLE_OPERADOR</option>
                    </select>
                </label>

                <button className={styles.botao} type="submit">
                    Acessar
                </button>
            </form>

            {erro && <p className={styles.erro} role="alert">{erro}</p>}

            <p className={styles.suporte}>
                Este protótipo não valida contas ativas. Para acesso real ou problemas, procure a administração da biblioteca.
            </p>
        </section>
    )
}
