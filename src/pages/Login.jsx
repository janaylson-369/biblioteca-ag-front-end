import { useEffect, useState } from "react"
import { Link } from "react-router"
import { useNavigate } from "react-router"
import { User } from "../components/ComponentsHome/Icons/Icons"
import FormularioLogin from "../components/Login/FormularioLogin"
import { lerSessaoDemo } from "../data/sessaoDemo"
import styles from "./Login.module.css"

export default function Login() {
    const navigate = useNavigate()
    const [sessao] = useState(() => lerSessaoDemo())

    useEffect(() => {
        if (sessao?.ativa === true) {
            navigate("/admin/dashboard", { replace: true })
        }
    }, [navigate, sessao])

    if (sessao?.ativa === true) return null

    return (
        <main className={styles.pagina}>
            <header className={styles.topo}>
                <Link to="/" className={styles.voltar}>← Voltar à biblioteca</Link>
                <span className={styles.icone}><User size={22} /></span>
                <p className={styles.sobretitulo}>Acesso administrativo</p>
                <h1>Área do Servidor</h1>
                <p className={styles.descricao}>Biblioteca Municipal de Alagoa Grande</p>
            </header>
            <FormularioLogin />
        </main>
    )
}
