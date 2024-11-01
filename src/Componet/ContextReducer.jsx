// Import necessary functions and components from React
import React, { createContext, useReducer, useContext } from "react";

// Create two contexts for managing state and dispatch actions separately
const CreateStateContext = createContext();    // Context for the state
const CartDispatchContext = createContext();   // Context for the dispatch function

const reducer = (state, action) => {
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <>
            <CartDispatchContext.Provider value={dispatch}>
                <CreateStateContext.Provider value={state}>
                    {children}
                </CreateStateContext.Provider>
            </CartDispatchContext.Provider>
        </>
    );
};

// Custom hooks to make it easier for other components to use the contexts
export const userCart = () => useContext(CreateStateContext);        // Accesses the state
export const useDispatchCart = () => useContext(CartDispatchContext); // Accesses the dispatch function
