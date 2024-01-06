import React, { useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";
import { useState } from "react";
import style from "./style.module.css"

function ShowProduct() {
  const [search, setSearch] = useState("");
  // const [typeProduct, setTypeProduct] = useState();
  const { productsData, setProductsData } = useContext(ProductContext);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      if (response.status === 200) {
        const products = response.data;
        setProductsData(
          products.map((product) => ({
            id: product.id,
            imgSrc: product.src,
            title: product.name,
            price: product.price,
            type: product.type,
            quantity: product.quantity,
          }))
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <form className="d-flex">
          {/* <select
            value={typeProduct}
            onChange={(e) => setTypeProduct(e.target.value)}
          >
            <option value="">Select By Type</option>
            <option value="tv">TV </option>
            <option value="laptop">Laptop</option>
            <option value="phone">Phone</option>
          </select> */}

          <input
            className="form-control me-sm-2"
            type="search"
            placeholder="Search the name of product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="button">
            Search
          </button>
        </form>
      </div>
      <div className="container mt-5">
        <div className="row">
        {productsData
            // .filter((product) => (typeProduct === "" ? product : product.type === typeProduct))
            .filter((product) =>
              search.trim().toLowerCase() === ""
                ? product
                : product.title.toLowerCase().startsWith(search.toLowerCase())
            )
            .map((product) => (
              <ProductCard
                key={product.id}
                imgSrc={product.imgSrc}
                title={product.title}
                price={product.price}
                type={product.type}
                quantity={product.quantity}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
