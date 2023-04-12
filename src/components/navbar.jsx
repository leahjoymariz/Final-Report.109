import "./navbar.css";

import {Link} from 'react-router-dom';
import { useContext } from 'react';
import globalContext from '../state/globalContext';

function Navbar() {
  const numOfProds = useContext(globalContext).getNumberOfProducts;

return (
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Online Store
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About us
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/admin">
                Admin Page
              </Link>
            </li>

          </ul>
          <form class="d-flex" role="search">
            
            <Link class="btn btn-outline-success" to="/cart">
             <span className= "badge text-bg-light">{numOfProds()}{" "}</span>
            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
    
);

}
export default Navbar;