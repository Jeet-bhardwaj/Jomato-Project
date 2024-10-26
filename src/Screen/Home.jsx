import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import Card from "../Componet/Card";
import { useState, useEffect } from "react";

const Home = () => {
    const [search, setSearch] = useState("");
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

            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                style={{ objectFit: "contain" }}
            >
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: 10 }}>
                        <div className="d-flex justify-content-center">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="d-block w-100"
                            alt="Burger"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="d-block w-100"
                            alt="Pizza"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="d-block w-100"
                            alt="Burger 2"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                {foodCat.length > 0 ? (
                    foodCat.map((category) => {
                        const filteredItems = foodItem.filter(
                            (item) =>
                                item.CategoryName === category.CategoryName &&
                                item.name.toLowerCase().includes(search.toLowerCase())
                        );
                        return (
                            <div key={category._id} className="row mb-3">
                                <div className="fs-3 m-3">
                                    {category.CategoryName}
                                </div>
                                <hr />
                                {filteredItems.length > 0 ? (
                                    filteredItems.map((filteredItem) => (
                                        <div
                                            key={filteredItem._id}
                                            className="col-12 col-md-6 col-lg-3"
                                        >
                                            <Card
                                                foodItem={filteredItem.name}
                                                options={filteredItem.options[0]}
                                                description={filteredItem.description}
                                                imgScr={filteredItem.img}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div>No items found for this category</div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div>Loading categories...</div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Home;
