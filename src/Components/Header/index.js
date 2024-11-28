import "./Header.css"
import logo from "images/logo.png"
import mulher_header from "images/mulher-header.png"
import { CiUser } from "react-icons/ci";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "AuthContext"

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleLoginRedirect = () => {
        navigate("/login");
    };
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
                    {user ? (
                        <button className="texto-login" onClick={handleLogout}>{user.username} (Sair)</button>
                    ) : (<>
                        <button className="texto-login" onClick={handleLoginRedirect}>Login</button>
                        <button className="texto-login">Cadastrar</button>
                        </>
                    )}
                    </div>
                </div>
            </div>

            <div className="baixo">
                <h1 className="texto-baixo">Encontre a <span className="texto-destacado">maneira</span> <span className="texto-destacado">certa</span> de praticar seus exercícios agora mesmo.</h1>
                <img className="mulher-header" src={ mulher_header } />
            </div>
            <div className="borda-rosa"/>

        </header>
    )
}   

export default Header