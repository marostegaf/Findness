import "./ExercicioTexto.css"

const ExercicioTexto = ( { titulo, children } ) => {
    return (
        <article className="exercicio-texto">
            <h2 className="titulo">
                { titulo }
            </h2>
            <div className="exercicio-conteudo">
                { children }
            </div>
        </article>
    )
}

export default ExercicioTexto;