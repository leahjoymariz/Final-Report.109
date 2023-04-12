import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
    let [quantity, setQuantity] = useState(1);
    
    function decrease(){
        console.log("Decrease");
        if (quantity===1) return;
        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
    }

    function increase() {
        console.log("Increase")
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    return(
        <div className="qt-picker">
            <button className="btn-qt" onClick={decrease}><i class="fa fa-minus" aria-hidden="true"></i></button>

            <label>{quantity}</label>

            <button className="btn-qt" onClick={increase}><i class="fa fa-plus" aria-hidden="true"></i></button>
            
        </div>
       
    );
}

export default QuantityPicker;