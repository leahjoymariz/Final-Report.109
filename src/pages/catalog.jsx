import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../dataService/dataServices";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [prodsToDisplay, setProdsToDisplay] = useState([]);

 

  useEffect(function () {
    console.log("component loaded");
    loadCatalog();
  }, []);

  async function loadCatalog() {
    //get the products from the service
    let service = new DataService();
    let prods = await service.getProducts();
    console.log(prods);
    setProducts(prods);
    let cats = ["dairy", "baking goods", "snacks", "beverages", "condiments"];
    setCategory(cats);
    setProdsToDisplay(prods);
  }

  function filter(category) {
    console.log(category);

    

    let list = [];
    //find the products that match the category
    //and add them to the list

    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
      setProdsToDisplay(list);
    }
  }

  function clearFilter() {
    setProdsToDisplay(products);
  }

  return (
    <div className="catalog">
      <h1>Hello check our products</h1>
      <h5>We have {products.length} new products for you</h5>

      <button onCLick={clearFilter} className="btn btn-dark btn-filter">
        All Products
      </button>

      {category.map(c => <button key={c} onClick={()=>filter(c)} className="btn btn-secondary btn-filter">{c}</button>)}
      <br></br>

      

      {prodsToDisplay.map((p) => (<Product key={p._id} data = {p}></Product>))}

    
    </div>
  );
}
export default Catalog;
