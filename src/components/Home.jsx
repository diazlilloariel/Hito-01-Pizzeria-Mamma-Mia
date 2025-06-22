import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <CardPizza
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
              name="Pizza Napolitana"
              ingridients="Mozzarella, Tomates, Jamon, Orégano"
              price="$5.950"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
              name="Pizza Española"
              ingridients="Mozzarella, Gorgonzola, Parmesano, Provolone"
              price="$6.950"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
              name="Pizza Pepperoni"
              ingridients="Mozzarella, Pepperoni, Orégano"
              price="$6.950"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
