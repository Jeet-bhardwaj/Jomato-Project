import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import Mystyle from "./Card.module.css";

const Card = (props) => {
    const priceRef = useRef();
    const data = useCart();
    const dispatch = useDispatchCart();

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const priceOptions = Object.keys(props.options || {});

    useEffect(() => {
        if (priceRef.current && priceOptions.length > 0) {
            setSize(priceRef.current.value);
        }
    }, [priceOptions]);

    const handleAddInCart = async () => {
        if (!size || !qty) {
            alert("Please select a valid size and quantity.");
            return;
        }
        const finalPrice = qty * parseInt(props.options[size]);
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalPrice,
            qty: qty,
            size: size,
            img: props.foodItem.img,
        });
        
        
        console.log(data);
    };

    const finalPrice = size && props.options[size] ? qty * parseInt(props.options[size]) : 0;

    return (
        <div className={`${Mystyle.cardContainer}`}>
            <img
                src={props.foodItem?.img}
                className={`${Mystyle.cardImage}`}
                alt="Food item"
            />
            <div className={`${Mystyle.cardBody}`}>
                <h5 className="card-title">{props.foodItem?.name}</h5>
                <p className="card-text">{props.foodItem?.description}</p>
                <div className="container w-100">
                    <select
                        className="m-2 h-100 bg-success rounded"
                        onChange={(e) => setQty(parseInt(e.target.value))}
                    >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>

                    <select
                        className="m-2 h-100 bg-success rounded"
                        onChange={(e) => setSize(e.target.value)}
                        ref={priceRef}
                    >
                        {priceOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="d-inline h-100 fs-5 text-dark fw-bold">{finalPrice}/-</div>
                </div>
                <hr />
                <button
                    className="btn btn-success justify-center ms-2"
                    onClick={handleAddInCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
