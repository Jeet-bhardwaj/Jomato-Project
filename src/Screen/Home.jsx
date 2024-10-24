import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import Card from "../Componet/Card";
import Carausal from "../Componet/Carausal";
import { useState, useEffect } from "react";

const Home = () => {
     const [foodCat, setFoodCat] = useState([]);
     const [foodItem, setFoodItem] = useState([]);

     const loadData = async () => {
          try {
               let response = await fetch("http://localhost:5000/api/foodData", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
               });
               let data = await response.json();
               setFoodCat(data[1]); // Assuming categories are at index 1
               setFoodItem(data[0]); // Assuming items are at index 0
          } catch (error) {
               console.error("Error fetching food data:", error);
          }
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
                    {/* Checking if foodCat has categories */}
                    {foodCat.length > 0 ? (
                         foodCat.map((category) => (
                              <div key={category._id}>
                                   <div className="fs-3 m-3">{category.CategoryName}</div>
                                   <hr />
                                   {/* Filtering items by category name */}
                                   {foodItem.length > 0 ? (
                                        foodItem
                                             .filter((item) => item.CategoryName === category.CategoryName)
                                             .map((filteredItem) => (
                                                  <div key={filteredItem._id}>
                                                       {/* Passing the filtered item as props to the Card component */}
                                                       <Card foodItem={filteredItem} />
                                                  </div>
                                             ))
                                   ) : (
                                        <div>No items found for this category</div>
                                   )}
                              </div>
                         ))
                    ) : (
                         <div>Loading categories...</div>
                    )}
               </div>

               <Footer />
          </div>
     );
};

export default Home;
