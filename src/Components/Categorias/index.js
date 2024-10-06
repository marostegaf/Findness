import "./Categorias.css";

const Categorias = () => {
    const categorias = [
        "Ombro",
        "Triceps",
        "Biceps",
        "Peito",
        "Quadriceps",
        "Posterior",
        "Gluteo",
        "Panturrilha"
    ];
    
    return (
        <div className="categorias">
            {categorias.map((categoria, index) => (
                <p className="categoria" key={index}>{categoria}</p>
            ))}
        </div>
    );
};

export default Categorias;
