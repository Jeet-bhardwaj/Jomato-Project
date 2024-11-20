// ContextReducer.js
import React, { createContext, useReducer, useContext } from "react";

const CreateStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: action.id, name: action.name , qty: action.qty,  size : action.size , price: action.price, img: action.img
            }];
            
        
        default:
            console
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CreateStateContext.Provider value={state}>
                {children}
            </CreateStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

export const useCart = () => useContext(CreateStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
