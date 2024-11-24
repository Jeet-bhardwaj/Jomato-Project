import React, { useState, useEffect } from "react";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import Card from "../Componet/Card";
import Mystyle from "./Home.module.css";

const Home = () => {
    const [search, setSearch] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [noItemsFound, setNoItemsFound] = useState(false);

    const loadData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/foodData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            setFoodCat(data[1]); // Categories
            setFoodItem(data[0]); // Items
        } catch (error) {
            console.error("Error fetching food data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        // Check if there are any filtered items across all categories after search
        const hasItems = foodCat.some((category) => {
            const filteredItems = foodItem.filter(
                (item) =>
                    item.CategoryName === category.CategoryName &&
                    item.name.toLowerCase().includes(search.toLowerCase())
            );
            return filteredItems.length > 0;
        });
        setNoItemsFound(!hasItems);
    }, [search, foodItem, foodCat]);

    return (
        <div
            style={{
                background: "linear-gradient(to right, #d4fc79, #96e6a1)", // Soft green gradient
                minHeight: "100vh",
            }}
        >
            <Navbar />
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                style={{ objectFit: "contain" }}
            >
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: 10 }}>
                        <div className={Mystyle.inputSearchContainer}>
                            <input
                                className={`${Mystyle.MyInput} me-2`}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    padding: "10px",
                                }}
                            />
                        </div>
                    </div>
                    {/* Carousel items */}
                    {[
                        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ].map((src, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={src} className="d-block w-100" alt="Slide" />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container py-4">
                {foodCat.length > 0 ? (
                    foodCat.map((category) => {
                        const filteredItems = foodItem.filter(
                            (item) =>
                                item.CategoryName === category.CategoryName &&
                                item.name.toLowerCase().includes(search.toLowerCase())
                        );

                        const showCategoryName = search === "" || filteredItems.length > 0;

                        return (
                            <div key={category._id} className="row mb-3">
                                {showCategoryName && (
                                    <div className="fs-3 m-3 text-dark fw-bold">
                                        {category.CategoryName}
                                    </div>
                                )}
                                <hr />
                                {filteredItems.length > 0 ? (
                                    filteredItems.map((filteredItem) => (
                                        <div
                                            key={filteredItem._id}
                                            className="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
                                        >
                                            <Card foodItem={filteredItem} options={filteredItem.options[0]} />
                                        </div>
                                    ))
                                ) : null}
                            </div>
                        );
                    })
                ) : (
                    <div>Loading categories...</div>
                )}

                {/* Show "No items found" only once */}
                {noItemsFound && search !== "" && (
                    <div className="text-center text-dark fs-4 fw-bold">No items found for your search.</div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
