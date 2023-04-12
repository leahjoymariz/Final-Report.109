import { createContext } from 'react';

const globalContext = createContext({
    cart: [],
    user: {},

    getNumberOfProducts: () => {},
    addToCart: () => {},
    removeFromCart: () => {},

});

export default globalContext;