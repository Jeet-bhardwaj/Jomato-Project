import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Componet/ContextReducer";
import Badge from "react-bootstrap/Badge";
import { FaCartPlus } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import styles from "./Navbar.module.css"; // Import the module CSS
import { useState } from "react";
import Cart from "./Cart";
import Modal from "./Modal";

const Navbar = () => {
    const [cartView, setCartView] = useState(false); // Proper state handling
    const navigate = useNavigate();
    const cartItems = useCart();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    const isAuthenticated = Boolean(localStorage.getItem("authToken"));

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
            <div className="container-fluid">
                <Link
                    className={`navbar-brand fs-2 fst-italic text-white mx-3 ${styles.navbarBrand}`}
                    to="/"
                >
                    Zwigato
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                            <Link
                                className={`nav-link active fs-5 text-white ${styles.navLink}`}
                                to="/"
                            >
                                <IoMdHome />
                                Home
                            </Link>
                        </li>
                        {isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link active fs-5 text-white ${styles.navLink}`}
                                        to="/my-order"
                                    >
                                        My Order
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link active fs-5 text-white ${styles.navLink}`}
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {isAuthenticated ? (
                        <div className="d-flex">
                            <button
                                className={`btn bg-white text-success mx-2 ${styles.cartBtn}`}
                                onClick={() => setCartView(true)} // Correct event handler
                            >
                                <FaCartPlus className="me-2" />
                                My Cart{"  "}
                                <Badge pill bg="danger" className={`${styles.badge}`}>
                                    {cartItems.length}
                                </Badge>
                            </button>
                            {/* Modal for Cart */}
                            {cartView && (
                                <Modal onClose={() => setCartView(false)}>
                                    <Cart />
                                </Modal>
                            )}
                            <button
                                className={`btn bg-white text-danger mx-2 ${styles.logoutBtn}`}
                                onClick={handleLogout}
                            >
                                <LuLogOut className="me-2" />
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="d-flex">
                            <Link className={`btn bg-white text-success mx-2`} to="/login">
                                Login
                            </Link>
                            <Link className={`btn bg-white text-success mx-2`} to="/signup">
                                SignUp
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
