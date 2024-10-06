import "./Header.css"
import logo from "images/logo.png"
import mulher_header from "images/mulher-header.png"
import { CiUser } from "react-icons/ci";

const Header = () => {
    return (
        <header className="cabecalho">
            <div className="topo">
                <div className="logo-texto-topo">
                    <img className="logo-topo" src={ logo } />
                    <p className="texto-topo">Findness</p>
                </div>
                <div className="login-topo">
                    <CiUser className="icone-login"/>
                    <div className="textos">
                        <p className="texto-login">Entrar</p>
                        <p className="texto-login">Cadastrar</p>
                    </div>
                </div>
            </div>

            <div className="baixo">
                <h1 className="texto-baixo">Encontre a <span className="texto-azul">forma correta</span> de praticar seus exercícios agora mesmo.</h1>
                <img className="mulher-header" src={ mulher_header } />
            </div>
            <div className="borda-rosa"/>

        </header>
    )
}   

export default Header