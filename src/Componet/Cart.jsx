import React from "react";
import { useCart, useDispatchCart } from "../Componet/ContextReducer";

const Cart = () => {
    const cartItems = useCart();
    const dispatch = useDispatchCart();

    const handleRemove = (index) => {
        dispatch({ type: "REMOVE", index });
    };

    const handleIncrement = (index) => {
        dispatch({ type: "INCREMENT", index });
    };

    const handleDecrement = (index) => {
        dispatch({ type: "DECREMENT", index });
    };

    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => total + item.price * item.qty, 0)
            .toFixed(2);
    };

    if (cartItems.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h3>Your cart is empty!</h3>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">Your Cart</h2>
            <table className="table table-hover caption-top">
                <caption>Cart items</caption>
                <thead className="table-success">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    style={{
                                        height: "50px",
                                        width: "50px",
                                        objectFit: "cover",
                                    }}
                                />
                            </td>
                            <td>{item.name}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-secondary me-2"
                                    onClick={() => handleDecrement(index)}
                                    disabled={item.qty === 1}
                                >
                                    -
                                </button>
                                {item.qty}
                                <button
                                    className="btn btn-sm btn-secondary ms-2"
                                    onClick={() => handleIncrement(index)}
                                >
                                    +
                                </button>
                            </td>
                            <td>{item.size}</td>
                            <td>₹{item.price * item.qty}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleRemove(index)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-end mt-3">
                <h4>Total: ₹{calculateTotal()}</h4>
                <button className="btn btn-success">Pay Now</button>
            </div>
        </div>
    );
};

export default Cart;
