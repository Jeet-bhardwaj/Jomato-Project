import React, { createContext, useReducer, useContext } from "react";

// Create Contexts for state and dispatch
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Reducer function to manage cart state
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    qty: action.qty,
                    size: action.size,
                    price: action.price,
                    img: action.img,
                },
            ];

        case "REMOVE":
            return state.filter((_, index) => index !== action.index);

        case "INCREMENT":
            return state.map((item, index) =>
                index === action.index
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );

        case "DECREMENT":
            return state.map((item, index) =>
                index === action.index && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );

        default:
            console.error(`Unknown action type: ${action.type}`);
            return state;
    }
};


// CartProvider component to wrap the application
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

// Custom hooks to access cart state and dispatch
export const useCart = () => {
    const context = useContext(CartStateContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export const useDispatchCart = () => {
    const context = useContext(CartDispatchContext);
    if (context === undefined) {
        throw new Error("useDispatchCart must be used within a CartProvider");
    }
    return context;
};
