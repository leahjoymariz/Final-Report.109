import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useEffect, useState, useContext} from "react";
import globalContext from '../state/globalContext';


function Product(props) {
    const [quantity,setQuantity] = useState(1);
    const addToCart = useContext(globalContext).addToCart;


    useEffect(function () {
        console.log("hey I'm a product");
    
    },[]);


    function onQuantityChange(qty){
        console.log("new value: " + qty);
        setQuantity(qty);


    }

    function getTotal(){
        let total = (props.data.price || 1)+ quantity;
        return total.toFixed(2);
    }

    function handleAddClick(){
        console.log ('Adding to cart');

    let prodForCart = {...props.data};
    prodForCart.quantity = quantity;
    console.log(prodForCart);
   

    addToCart(prodForCart);
    }
    
    


    return (
        <div className="product">
            
            <img src={'/images/' + props.data.image} alt=""/>

            <h5>{props.data.title}</h5>

            <div className= "prices">
                <label>Total ${getTotal()}</label>
                <label>Price ${props.data.price?.toFixed(2) || 1.00}</label>  
            </div>

        <div className="controls">
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button onClick={handleAddClick} type="button" className="btn btn-sm btn-info">
            <i className="fa fa-cart" aria-hidden="true"></i>
            </button>
            </div>
        </div>
    );
}

export default Product;