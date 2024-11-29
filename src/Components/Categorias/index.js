import "./Categorias.css";

const Categorias = ({ onSelectCategoria }) => {
    const categorias = [
        "Todos",
        "Ombro",
        "Triceps",
        "Biceps",
        "Peito",
        "Costas",
        "Quadriceps",
        "Posterior",
        "Panturrilha"
    ];
    
    return (
        <div className="categorias">
            {categorias.map((categoria, index) => (
                <p 
                    className="categoria" 
                    key={index} 
                    onClick={() => onSelectCategoria(categoria === "Todos" ? null : categoria)}
                >
                    { categoria }
                </p>
            ))}
        </div>
    );
};

export default Categorias;
