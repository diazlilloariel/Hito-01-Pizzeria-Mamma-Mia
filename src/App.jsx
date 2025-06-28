import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      <hr />{" "}
      {/* El HR esta solo para separar el contenido de la pagina de registro y el login */}
      <LoginPage />
      <Footer />
    </>
  );
}

export default App;
