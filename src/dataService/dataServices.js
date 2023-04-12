import axios from 'axios';


var catalog =[
    {
        "title":"milk",
        "category":"dairy",
        "price": 4.99,
        "image": "../images/milk.jpg",
        "_id": "123456"
    },

    {
        "title":"eggs",
        "category":"baking goods",
        "price": 10.99,
        "image": "../images/egGs.jpg",
        "_id": "1"
    },

    {
        "title":"cereal",
        "category":"snacks",
        "price": 6.99,
        "image": "../images/cereal.webp",
        "_id": "2"
    },

    {
        "title":"coffee",
        "category":"beverages",
        "price": 12.99,
        "image": "../images/coffee.jpeg",
        "_id": "3"
    },

    {
        "title":"creamer",
        "category":"dairy",
        "price": 6.99,
        "image": "../images/creamer.jpg",
        "_id": "4"
    },

    {
        "title":"sugar",
        "category":"condiments",
        "price": 10.99,
        "image": "../images/sugar.webp",
        "_id": "5"
    },

   




];

class DataService {

    async getProducts() {
        // if you need to start the Front end without the backend uncomment the line below
        // return catalog;

        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }
}

export default DataService;