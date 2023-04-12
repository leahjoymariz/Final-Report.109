import "./about.css";
import { useState } from 'react';

function About(){
    const [displayEmail, setDisplayEmail] = useState(false);

    function toggleEmail(){
        console.log("Hello!");
        setDisplayEmail(true);
    }

    function getEmailSection(){

        if(displayEmail){
             return <h5>Easygroceries@gmail.com</h5>
        }
        else {
            return null;
        }
       
    }

    return (
        <div className = "About">
            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            <h1>We are committed to make online gocery shopping accessible to everyone, which is why we offer a variety of delivery options to fit any schedule or budget.
                At Our online grocery shopping app, we are dedicated to providing our customers witha seamless and stress-free shopping experience. Shop with us today adn experience the convenience of online grocery shopping for yourself.
                You can reach out to our email below.
            </h1>
            {getEmailSection()}
            <button className='btn btn-sm btn-dark' onClick={toggleEmail}>Show Email</button>
        </div>
    );
    
}

export default About;