import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import Card from "../Componet/Card";
import Carausal from "../Componet/Carausal";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Carausal />
      </div>
      <div>
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;
