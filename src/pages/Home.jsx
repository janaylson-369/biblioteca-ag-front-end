import { useMemo, useState } from "react";
import Banner from "../components/ComponentsHome/BannerMain/Banner";
import Nav from "../components/ComponentsHome/Nav/Nav";
import NavMain from "../components/ComponentsHome/NavMain/Nav";
import Content from "../components/ComponentsHome/ContentMain/Content";
import { livros } from "../data/livros";

const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function Home() {
    const [busca, setBusca] = useState("");
    const [categoria, setCategoria] = useState("Todos");
    const [apenasDisponiveis, setApenasDisponiveis] = useState(false);

    const livrosFiltrados = useMemo(() => {
        const termo = normalizar(busca.trim());
        return livros.filter((l) => {
            if (categoria !== "Todos" && l.categoria !== categoria) return false;
            if (apenasDisponiveis && !l.disponivel) return false;
            if (!termo) return true;
            return normalizar(`${l.titulo} ${l.autor} ${l.categoria}`).includes(termo);
        });
    }, [busca, categoria, apenasDisponiveis]);

    function irParaAcervo() {
        document.getElementById("acervo")?.scrollIntoView({ behavior: "smooth" });
    }

    return <>
        <Nav />
        <Banner busca={busca} onBuscaChange={setBusca} onBuscar={irParaAcervo} />
        <NavMain
            categoriaAtiva={categoria}
            onCategoria={setCategoria}
            apenasDisponiveis={apenasDisponiveis}
            onApenasDisponiveis={setApenasDisponiveis}
        />
        <Content livros={livrosFiltrados} />
    </>
}
