import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import Card from "../Componet/Card";
import Carausal from "../Componet/Carausal";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log(response[0], response[1]);
    
    setFoodCat(response[1]);
    setFoodItem(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);
  

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carausal />
      </div>
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => {
            return <div key={data._id} className="fs-3 m-3" >{data.CategoryName}</div>;
          })
        ) : (
          <div></div>
        )}
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
