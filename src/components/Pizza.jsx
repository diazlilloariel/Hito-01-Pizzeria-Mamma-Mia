import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!res.ok) throw new Error("Error al obtener la pizza");
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        console.error("Error al cargar la pizza:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error || !pizza) {
    return <p className="text-center text-danger mt-5">Error al cargar la pizza.</p>;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow" style={{ maxWidth: "600px", width: "100%" }}>
        <img src={pizza.img} alt={pizza.name} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title text-capitalize">{pizza.name}</h2>
          <h4 className="text-success mb-3">
            ${pizza.price.toLocaleString("es-CL")}
          </h4>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <p className="mt-3">{pizza.desc}</p>
          <button className="btn btn-success mt-3" >
            <i className="fas fa-cart-plus me-2"></i> Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
