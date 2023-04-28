// setting up the data layer to track basket
import React, { createContext, useContext, useReducer } from 'react';

// This is the actual data layer
export const StateContext = createContext();

// Build a provider to wrap the entire app
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// How its used inside of a component
export const useStateValue = () => useContext(StateContext);