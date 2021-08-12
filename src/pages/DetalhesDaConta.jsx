import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function DetalhesDaConta() {
    return(
        <div>
            <Header/>
            <Link to="/cadastroEndereco">CadastroEndereco</Link>
            <br></br>
            <Link to="/editarEndereco">EditarEndereco</Link>
            <br></br>
            <Link to="/editarSenha">EditarSenha</Link>
            <br></br>
            <Footer/>
        </div>
    );
}