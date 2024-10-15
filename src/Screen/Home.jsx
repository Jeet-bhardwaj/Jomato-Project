import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import Card from "../Componet/Card";
import Carausal from "../Componet/Carausal";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
const [foodCat  , setFoodCat] = useState([]);
const [foodItem  , setFoodItem] = useState([]);

const loadData = async () =>{
  let response  = await fetch("http://localhost:5000/api/foodData",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    }
  })
  response = await response.json();
  console.log(response[0],response[1 ]);
}


useEffect(()=>{
  loadData();
}, [])

  return (
    <>
      <Navbar />
      <div>
      <Carausal />
      </div>
      <div className="">
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;
