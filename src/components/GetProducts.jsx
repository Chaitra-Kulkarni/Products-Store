import axios from "axios";
import { useState, useEffect } from "react";

const GetProducts = () => {
  const [productsList, setProductsList] = useState([]);

  const PRODUCTS_URL = "https://fakestoreapi.com/products";
  const loadProducts = () => {
    axios.get(PRODUCTS_URL).then((response) => {
      console.log(response.data);
      setProductsList(response.data);
    });
  };
  return (
    <>
      <button
        className="btn btn-outline-dark btn-lg m-2"
        onClick={loadProducts}
      >
        View Products
      </button>
      <div>
        <label>Filter :</label>
        <a className="btn btn-warning btn-sm m-2" href="#" value="electronics">
          Electronics
        </a>
        <a className="btn btn-warning btn-sm m-2" href="#" value="jewelery">
          Jewelery
        </a>
        <a
          className="btn btn-warning btn-sm m-2"
          href="#"
          value="men's clothing"
        >
          Men's clothing
        </a>
        <a
          className="btn btn-warning btn-sm m-2"
          href="#"
          value="women's clothing"
        >
          Women's clothing
        </a>
      </div>
      <div className="container-fluid">
        <div className="row">
          {productsList.map((product) => {
            return (
              <div
                className="col-9 border border-dark m-1"
                style={{ width: "18rem" }}
                key={product.id}
              >
                <h6>{product.title}</h6>
                <img
                  src={product.image}
                  style={{ width: "10rem", height: "12rem" }}
                />
                <p>{`$ ${product.price}`}</p>
                <small className="bg-info p-1">{`Rate: ${product.rating.rate}`}</small>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GetProducts;
