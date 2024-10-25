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
            <Navbar />
            <Carausal />

            <div className="container">
                {foodCat.length > 0 ? (
                    foodCat.map((category) => (
                        <div key={category._id} className="row mb-3">
                            <div className="fs-3 m-3">{category.CategoryName}</div>
                            <hr />
                            {foodItem.length > 0 ? (
                                foodItem
                                    .filter((item) => item.CategoryName === category.CategoryName)
                                    .map((filteredItem) => (
                                        <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                                            <Card 
                                                foodItem={filteredItem.name} 
                                                options={filteredItem.options}
                                                description={filteredItem.description} 
                                                imgScr={filteredItem.img} 
                                            />
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
