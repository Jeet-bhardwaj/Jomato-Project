import Home from "./Screen/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./Screen/SignUp.jsx";
import Login from "./Screen/Login.jsx";
import { CartProvider } from "./Componet/ContextReducer.jsx";
import Cart from "./Componet/Cart.jsx";

function App() {
    return (
        <CartProvider>
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/Cart" element={<Cart />} />
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
