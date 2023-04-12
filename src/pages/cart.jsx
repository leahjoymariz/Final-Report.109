import "./cart.css";
import { useContext } from 'react';
import globalContext from '../state/globalContext';
import ProductInCart from '../components/productInCart';

function Cart() {
    const numOfProds = useContext(globalContext).getNumberOfProducts;
    const cart = useContext(globalContext).cart;

    function getTotalToPay() {
        let total=0;
        for(let i=0; i< cart.length; i++) {
            let prod = cart[i];
            total = total +  prod.quantity * prod.price;
        }

        return total.toFixed(2);
    }

    return (
        <div className = "Cart">

            <h1>Ready to Purchase?</h1>
            <h5>You have {numOfProds()} items in the cart</h5>

            <div className="parent">
            <div className="products">
            {cart.map((prod) =>  (
            <ProductInCart key={prod._id} data={prod}></ProductInCart>
            ))}
           </div>


        <div className="total">
            <h4>Total</h4>

            <h5>${getTotalToPay()}</h5>

            <button className="btn btn-primary">Pay Now</button>
            </div>
         </div>
        </div>
    );
}

export default Cart;

