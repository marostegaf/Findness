import { Link } from "react-router-dom";
import "./ExercicioCard.css"
import { CgGym } from "react-icons/cg";


const ExercicioCard = ( { exercicio }) => {
    return (
        <div className="exercicio">
            <div className="cards">
                <img
                    src={`exercicios/${exercicio.id}/capa.png`}
                    alt="Imagem do Exercício"
                />
                <h2>{ exercicio.titulo }</h2>
                <Link className="link-exercicio" to={`${ exercicio.id }`}>
                    <button><CgGym className="gym-botao"/>Ver mais</button>
                </Link>
            </div>
        </div>
    )
}

export default ExercicioCard