import search from "./search.png"
import "./Header.css"
import Categoria from "Components/Categoria" 

import todos from "./categorias/todos.png"
import bracos from "./categorias/bracos.png"
import pernas from "./categorias/pernas.png"
import costas from "./categorias/costas.png"
import peito from "./categorias/peito.png"
import ombro from "./categorias/ombro.png"


const Header = () => {

    const categories = [
        { nome: "Todos", icon: todos },
        { nome: "Braços", icon: bracos },
        { nome: "Perna", icon: pernas },
        { nome: "Costas", icon: costas },
        { nome: "Peito", icon: peito },
        { nome: "Ombro", icon: ombro },
    ];

    return (
        <header className="header-background">
            <div className="logo-search-bar">
                <img src="images/logo.png" />
                <div className="search-bar">
                    <img src={ search } />
                    <input type="text" placeholder="Pesquise seu exercício" />
                </div>
            </div>
            <div className="categories">
                { categories.map((category, number) => (
                    <Categoria key={number} nome={category.nome} icon={ category.icon } />
                ))}
            </div>
        </header>
    )   
}

export default Header