import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { FaCartPlus } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";



const Navbar = () => {
    const navigate = useNavigate();
    const handilOnClick = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    };
    const isAuthenticated = Boolean(localStorage.getItem("authToken"));

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand fs-1 fst-italic mx-3 " to="/">
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
                            <Link className="nav-link active fs-5" to="/">
                                <IoMdHome />
                                {" "}
                                Home
                            </Link>
                        </li>
                        {isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active fs-5"
                                        to="/my-order"
                                    >
                                        My Order
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active fs-5"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {isAuthenticated ? (
                        <div>
                            <Link
                                className="btn bg-white text-success mx-1"
                                to="/Cart"
                            >
                                <FaCartPlus />
                                {"  "}
                                My cart
                                {"  "}
                                <Badge pill bg="danger">
                                    1
                                </Badge>
                            </Link>
                            <Link
                                className="btn bg-white text-danger mx-1"
                                to=""
                                onClick={handilOnClick}
                            >
                                
                                {"  "}
                                <LuLogOut /> 
                            </Link>
                        </div>
                    ) : (
                        <div className="d-flex">
                            <Link
                                className="btn bg-white text-success mx-1"
                                to="/login"
                            >
                                Login
                            </Link>
                            <Link
                                className="btn bg-white text-success mx-1"
                                to="/signup"
                            >
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
