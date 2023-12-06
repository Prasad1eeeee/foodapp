// CartProvider.js
import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state and reducer
const initialState = {
    cart: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item, index) => index !== action.payload),
            };
        // Add other cases as needed

        default:
            return state;
    }
};

// Create a context for the cart
const CartContext = createContext();

// Create a CartProvider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItemToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item,
        });
    };

    const removeItemFromCart = (index) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: index,
        });
    };

    return (
        <CartContext.Provider value={{ cart: state.cart, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Create a custom hook to use the cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
