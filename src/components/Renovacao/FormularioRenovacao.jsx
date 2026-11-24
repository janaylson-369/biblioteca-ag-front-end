import { useState } from "react"
import styles from "./FormularioRenovacao.module.css"

export default function FormularioRenovacao() {
    const [numeroEmprestimo, setNumeroEmprestimo] = useState("")
    const [identificadorLeitor, setIdentificadorLeitor] = useState("")
    const [resultado, setResultado] = useState("")

    function enviarSolicitacao(event) {
        event.preventDefault()
        setNumeroEmprestimo("")
        setIdentificadorLeitor("")
        setResultado(
            "A renovação online ainda não está conectada ao sistema da biblioteca. Nenhum dado foi enviado ou armazenado e nenhum prazo foi alterado. Procure a equipe da biblioteca para verificar seu empréstimo."
        )
    }

    return (
        <section className={styles.painel} aria-labelledby="titulo-formulario">
            <div className={styles.introducao}>
                <h2 id="titulo-formulario">Consultar renovação</h2>
                <p>Informe os dados do empréstimo para solicitar a verificação da equipe.</p>
            </div>

            <div className={styles.aviso} role="note">
                Esta é apenas uma demonstração visual: o sistema não consulta empréstimos nem verifica a política de renovação. Para sua segurança, não informe dados reais; procure a equipe da biblioteca.
            </div>

            <form className={styles.formulario} onSubmit={enviarSolicitacao}>
                <label className={styles.campo}>
                    <span>Número ou ficha do empréstimo</span>
                    <input
                        type="text"
                        value={numeroEmprestimo}
                        onChange={(event) => setNumeroEmprestimo(event.target.value)}
                        placeholder="Ex.: número indicado no comprovante"
                        autoComplete="off"
                        required
                    />
                </label>

                <label className={styles.campo}>
                    <span>CPF ou matrícula do leitor</span>
                    <input
                        type="text"
                        value={identificadorLeitor}
                        onChange={(event) => setIdentificadorLeitor(event.target.value)}
                        placeholder="CPF ou matrícula"
                        autoComplete="off"
                        required
                    />
                    <small>Use somente valores fictícios. As informações digitadas não são enviadas nem armazenadas.</small>
                </label>

                <button className={styles.botao} type="submit">
                    Verificar possibilidade de renovação
                </button>
            </form>

            {resultado && (
                <div className={styles.resultado} role="status" aria-live="polite">
                    <strong>Solicitação não realizada online</strong>
                    <p>{resultado}</p>
                </div>
            )}
        </section>
    )
}
