import "./Categoria.css"

const Categoria = ({ nome, icon }) => {
    return (
        <div className="category">
            <img src={ icon } alt={`${nome} Icon`} />
            <h2>{nome}</h2>
        </div>
    );
}

export default Categoria;
