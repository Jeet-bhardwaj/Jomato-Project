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
      <div className="">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;
