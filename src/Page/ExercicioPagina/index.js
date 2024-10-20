import { useParams, Routes, Route } from "react-router-dom"
import exercicios from "exercicios.json"
import Markdown from "react-markdown";
import PaginaNaoEncontrada from "Page/PaginaNaoEncontrada";
import ExercicioTexto from "Components/ExericicioTexto";


const ExercicioPagina = () => {
    const parametros = useParams();

    const exercicio = exercicios.find(exercicio => {
        return exercicio.id === Number(parametros.id);
    })

    if(!exercicio) {
        return <PaginaNaoEncontrada />
    }

    return (
        <Routes>
            <Route index element={
                <ExercicioTexto titulo={exercicio.titulo}>
                    <div className="exericicio-markdown">
                            <Markdown>
                                { exercicio.texto }
                            </Markdown>
                    </div>
                </ExercicioTexto>
            } />
        </Routes>
    )
} 

export default ExercicioPagina;