const CHAVE_SESSAO = "biblioteca.sessao-demo"
const PAPEIS_VALIDOS = ["ROLE_OPERADOR", "ROLE_ADMIN"]

export function criarSessaoDemo(papel) {
    if (!PAPEIS_VALIDOS.includes(papel)) {
        throw new Error("Papel de demonstração inválido.")
    }

    const sessao = {
        nome: "Servidor de demonstração",
        papel,
        ativa: true,
    }

    window.sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify(sessao))
}

export function lerSessaoDemo() {
    const valor = window.sessionStorage.getItem(CHAVE_SESSAO)
    if (!valor) return null

    let sessao
    try {
        sessao = JSON.parse(valor)
    } catch {
        window.sessionStorage.removeItem(CHAVE_SESSAO)
        return null
    }

    const sessaoValida =
        typeof sessao.nome === "string" &&
        sessao.nome.length > 0 &&
        PAPEIS_VALIDOS.includes(sessao.papel) &&
        sessao.ativa === true

    if (!sessaoValida) {
        window.sessionStorage.removeItem(CHAVE_SESSAO)
        return null
    }

    return sessao
}

export function encerrarSessaoDemo() {
    window.sessionStorage.removeItem(CHAVE_SESSAO)
}
