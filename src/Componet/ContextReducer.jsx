// Import necessary functions and components from React
import React, { createContext, useReducer, useContext } from "react";

// Create two contexts for managing state and dispatch actions separately
const CreateStateContext = createContext();    // Context for the state
const CartDispatchContext = createContext();   // Context for the dispatch function

// Reducer function that will handle state changes based on actions
const reducer = (state, action) => {
    // Here, we define how the state changes based on different actions.
    // Currently, it's empty, so it does nothing yet.
};

// CartProvider component: wraps components with the contexts we created
export const CartProvider = ({ Children }) => {
    // Initialize state and dispatch using useReducer, which is a React hook for handling state updates.
    // The reducer is the function we use to update state, and we start with an empty array as the initial state.
    const [state, dispatch] = useReducer(reducer, []);

    // Return a structure that provides both dispatch and state contexts to the wrapped components
    return (
        <>
            {/* Provide the dispatch function to all components inside CartDispatchContext */}
            <CartDispatchContext.Provider value={dispatch}>
                {/* Provide the state to all components inside CreateStateContext */}
                <CreateStateContext.Provider value={state}>
                    {Children}
                </CreateStateContext.Provider>
            </CartDispatchContext.Provider>
        </>
    );
};

// Custom hooks to make it easier for other components to use the contexts
export const userCart = () => useContext(CreateStateContext);        // Accesses the state
export const useDispatchCart = () => useContext(CartDispatchContext); // Accesses the dispatch function
