import "./Categorias.css";

const Categorias = ({ onSelectCategoria }) => {
    const categorias = [
        "Ombro",
        "Triceps",
        "Biceps",
        "Peito",
        "Costas",
        "Quadriceps",
        "Posterior",
        "Gluteo",
        "Panturrilha"
    ];
    
    return (
        <div className="categorias">
            {categorias.map((categoria, index) => (
                <p 
                    className="categoria" 
                    key={index} 
                    onClick={() => onSelectCategoria(categoria)}
                >
                    { categoria }
                </p>
            ))}
        </div>
    );
};

export default Categorias;
