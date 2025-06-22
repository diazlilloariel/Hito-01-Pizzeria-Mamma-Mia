const CardPizza = ({ img, name, price, ingridients }) => {
  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <h3 className="card-text">Ingredientes:</h3>

        <li className="list-group-item">{ingridients}</li>
        <li className="list-group-item">Precio: {price}</li>
      </ul>
      <div className="card-body d-flex justify-content-between">
        <button className="btn btn-primary">
          ver más
        </button>
        <button className="btn btn-success ">
            <i className="fas fa-cart-plus me-2"></i> Añadir
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
