import { Provider } from 'react';
import GlobalContext from './globalContext';
import { useState } from 'react';

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: 'leah', id:12345});

    function addToCart(prod){
        console.log("global fn");

        let copy = [...cart];
        copy.push(prod);
        setCart(copy);

        console.log(copy);
    }

    function removeFromCart() {
        console.log("global remove");
    }

    function getNumberOfProducts() {
        let total = 0;
        for (let i=0; i < cart.length; i++) {
          let prod = cart[i];
          total = total + prod.quantity;
        }

        return total;
    }

    return <GlobalContext.Provider value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        getNumberOfProducts: getNumberOfProducts,
    }}>{props.children}</GlobalContext.Provider>;
    
}

export default GlobalProvider;