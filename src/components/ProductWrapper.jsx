import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import CategoryList from "./CategoryList";
import Products from "./Products";

const ProductWrapper = () => {
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState([]);
  const[selectedCat, setSelectedCat] = useState('')
  let frozenProducts = [];
  const [selectedCategory, setSelectedCategory] = useState('');

  const PRODUCTS_URL = "https://fakestoreapi.com/products";
  const PRODUCTS_CATEGORY_URL = `https://fakestoreapi.com/products/category/${selectedCategory}`;

  /* Fetch and display all the products from the API whenever the page loads */
  useEffect(() => {
    (async function getProducts() {
      try{
        await axios.get(PRODUCTS_URL).then((response) => {
          setProductsList(response.data);
        });
      }
      catch(err) {
        console.log(err)
      }
    }())
    makeListOfCategories()
  }, []);


  useEffect(() => {
    if(productsList) {
      frozenProducts = [...productsList]
      makeListOfCategories()
    }
  }, [productsList])


  useEffect(() => {
    (async function getCategoryBasedProducts() {
      try{
        await axios.get(PRODUCTS_CATEGORY_URL).then((response) => {
          setProductsList(response.data);
        });
      }
      catch(err) {
        console.log(err)
      }
    }())
  }, [selectedCategory]);


  //handlecategory function 
  const handleCategoryChange = (selCat) => {
    console.log("froxe,",frozenProducts)
    let fileredObj = frozenProducts.filter(product => {
      return product.category === selCat;
    })
    setSelectedCategory(selCat)   
    setProductsList(fileredObj); 
  }

  const makeListOfCategories = () => {
    //First get all cats into one array
    let allCats = [];
    frozenProducts.map((product) => {
      allCats.push(product.category);
    });

    //Remove the duplicate categories from the array
    let cats = allCats.filter((cat, idx) => {
      return allCats.indexOf(cat) === idx;
    });
    setCategory(cats);
  };
  return (
    <>
      <Header />
      <CategoryList  handleCategoryChange={handleCategoryChange} category={category} />
      <Products productsList={productsList} />
    </>
  );
};

export default ProductWrapper;
