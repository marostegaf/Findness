import { useState } from "react";
import Categorias from "Components/Categorias";
import ExercicioCard from "Components/ExercicioCard";
import Header from "Components/Header";
import exercicios from "exercicios.json";

const Inicio = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    const exerciciosFiltrados = categoriaSelecionada 
        ? exercicios.filter(exercicio => exercicio.categoria === categoriaSelecionada) 
        : exercicios;

    return (
        <>
            <Header />
            <Categorias onSelectCategoria={setCategoriaSelecionada} />
            <ul className="exercicio">
                {exerciciosFiltrados.map(exercicio => (
                    <li key={exercicio.id}>
                        <ExercicioCard exercicio={exercicio} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Inicio;
