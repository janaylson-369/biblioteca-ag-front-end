import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Acervo from "./pages/Acervo";
import DetalheObra from "./pages/DetalheObra";
import "./Global.css";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/acervo" element={<Acervo />} />
          <Route path="/acervo/:id" element={<DetalheObra />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
