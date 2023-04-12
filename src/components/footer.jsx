import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"

import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
<div className = 'Footer'>

    <label>Follow our Socials</label>
    <FontAwesomeIcon icon={faFacebook} />
   
    
</div>
    );
}

export default Footer;