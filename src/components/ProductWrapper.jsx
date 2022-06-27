import axios from "axios";
import { useState, useEffect } from "react";

const ProductWrapper = () => {
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);

  const PRODUCTS_URL = "https://fakestoreapi.com/products";
  const PRODUCTS_CATEGORY_URL = `https://fakestoreapi.com/products/category/${category}`;

  const loadProducts = () => {
    axios.get(PRODUCTS_URL).then((response) => {
      //   console.log(response.data);
      setProductsList(response.data);
    });
  };

  useEffect(() => {
    axios.get(PRODUCTS_CATEGORY_URL).then((response) => {
      // console.log(response.data);
      setProductsList(response.data);
    });
  }, [category]);

  return (
    <>
      <button className="btn btn-dark btn-lg m-2" onClick={loadProducts}>
        View Products
      </button>

      <input
        type="search"
        placeholder="Search"
        className="border border-dark border-2 rounded-2"
      />

      <label>Total Items: {count}</label>

      <div>
        <label>Filter :</label>
        <button
          onClick={() => setCategory("electronics")}
          className="btn btn-warning btn-sm m-2"
          href="#"
          value="electronics"
        >
          Electronics
        </button>
        <button
          onClick={() => setCategory("jewelery")}
          className="btn btn-warning btn-sm m-2"
          href="#"
          value="jewelery"
        >
          Jewelery
        </button>
        <button
          onClick={() => setCategory(`men's clothing`)}
          className="btn btn-warning btn-sm m-2"
          href="#"
          value="men's clothing"
        >
          Men's clothing
        </button>
        <button
          onClick={() => setCategory(`women's clothing`)}
          className="btn btn-warning btn-sm m-2"
          href="#"
          value="women's clothing"
        >
          Women's clothing
        </button>
      </div>

      <div className="container-fluid">
        <div className="row">
          {productsList.map((product) => {
            return (
              <div
                className="col-9 bg-success bg-opacity-25 border border-dark m-1"
                style={{ width: "18rem" }}
                key={product.id}
              >
                <h6>{product.title}</h6>
                <img
                  src={product.image}
                  style={{ width: "10rem", height: "12rem" }}
                />
                <p style={{ fontWeight: "bold" }}>{`$ ${product.price}`}</p>
                <small className="bg-info p-1">{`Rate: ${product.rating.rate}`}</small>
                <button className="btn btn-success m-2" onClick={() => setCount(count => count+1)}>Add to cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductWrapper;
