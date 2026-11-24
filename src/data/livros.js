// Para usar a capa real de um livro, importe a imagem e informe em `capa`:
//   import capaTortoArado from "../assets/imgs/torto-arado.png";
//   { ..., capa: capaTortoArado }
// Sem `capa`, o card mostra um espaço branco no lugar da capa.

export const categoriasCatalogo = [
    { nome: "Literatura Brasileira", ativa: true },
    { nome: "Infanto-Juvenil", ativa: true },
    { nome: "História da Paraíba", ativa: true },
    { nome: "Didáticos", ativa: true },
]

export const categorias = [
    "Todos",
    ...categoriasCatalogo.filter((categoria) => categoria.ativa).map((categoria) => categoria.nome),
]

export const livros = [
    { id: 1, titulo: "Torto Arado", autor: "Itamar Vieira Junior", categoria: "Literatura Brasileira", disponivel: true, corCapa: "tan", capa: null },
    { id: 2, titulo: "A Bolsa Amarela", autor: "Lygia Bojunga", categoria: "Infanto-Juvenil", disponivel: true, corCapa: "amarelo", capa: null },
    { id: 3, titulo: "História da Paraíba", autor: "José Octávio de Arruda Mello", categoria: "História da Paraíba", disponivel: true, corCapa: "azul", capa: null },
    { id: 4, titulo: "Quarto de Despejo", autor: "Carolina Maria de Jesus", categoria: "Literatura Brasileira", disponivel: true, corCapa: "pessego", capa: null },
    { id: 5, titulo: "Vidas Secas", autor: "Graciliano Ramos", categoria: "Literatura Brasileira", disponivel: false, corCapa: "azulAco", capa: null },
    { id: 6, titulo: "Menino de Engenho", autor: "José Lins do Rego", categoria: "Literatura Brasileira", disponivel: true, corCapa: "rosa", capa: null },
    { id: 7, titulo: "Reinações de Narizinho", autor: "Monteiro Lobato", categoria: "Infanto-Juvenil", disponivel: true, corCapa: "verde", capa: null },
    { id: 8, titulo: "Matemática Fundamental", autor: "José Ruy Giovanni", categoria: "Didáticos", disponivel: true, corCapa: "areia", capa: null },
]
