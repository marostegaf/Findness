import { Link } from "react-router-dom";
import "./ExercicioCard.css"


const ExercicioCard = ( { exercicio }) => {
    return (
        <div className="exercicio">
            <div className="cards">
                <img
                    src={`exe/${exercicio.id}.png`}
                    alt="Imagem do Exercício"
                />
                <h2>{ exercicio.titulo }</h2>
                <Link className="link-exercicio" to={`${ exercicio.id }`}>
                    <button>Ver mais</button>
                </Link>
            </div>
        </div>
    )
}

export default ExercicioCard