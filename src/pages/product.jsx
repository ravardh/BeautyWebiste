import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Banner } from "../components/banner";
import "../css/product.css";
import Filters from "../api/data.json";
import NoImage from "../assets/image.png";
import { NavLink, useLocation } from "react-router-dom";
import Loading from "../assets/loading.gif"

export const Product = () => {
  const location = useLocation();
  let cachedProducts;
  try{
    cachedProducts = location.state.products;
  }catch (e){
    cachedProducts=[];
  }
  
  const [products, setProduct] = useState(cachedProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    if (products.length > 0) return; 

    setLoading(true);
    const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

    try {
      const res = await fetch(URL);
      const data = await res.json();
      setProduct(data || []);
    } catch (error) {
      setError("Error in fetching Product" + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Banner bannerName={"Product"} />

      <div className="container">
        <div className="row">
          <div className="col-1">
            <h3 className="text-center">Filters</h3>
          </div>
          <div className="col-3">
            <select name="brand" id="brand" className="form-control">
              <option value="">All Brand</option>
              {Filters.brands.map((Element, index) => {
                return (
                  <option key={index} value={Element.value}>
                    {Element.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-3">
            <select
              name="product_type"
              id="product_type"
              className="form-control"
            >
              <option value="">All Types</option>
              {Filters.types.map((Element, index) => {
                return (
                  <option key={index} value={Element.value}>
                    {Element.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-3">
            <select
              name="product_tags"
              id="product_tags"
              className="form-control"
            >
              <option value="">All Tags</option>
              {Filters.tags.map((Element, index) => {
                return (
                  <option key={index} value={Element.value}>
                    {Element.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-2">
            <button className="btn btn-primary form-control">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      <div className="container" id="products">
        <div className="row">
          {loading ? (
            <div className="d-flex justify-content-center my-5"> 
              <img src={Loading} alt=""  />
            </div>
          ) : (
            products.map((Element) => {
              return (
                <div className="col-4" key={Element.id}>
                  <div className="card border rounded">
                    <img
                      src={Element.api_featured_image}
                      alt={Element.name}
                      className="rounded m-2"
                      id="item_image"
                    />
                    <div className="container m-1" id="product_info">
                      <span>
                        <h4 id="pdtname">
                          <strong>{Element.name}</strong>
                        </h4>
                      </span>
                      <span className="d-flex">
                        <h5>
                          <strong>{Element.brand}</strong>
                        </h5>
                      </span>
                      <span className="d-flex">
                        <strong>Price: </strong>
                        <p className="px-3">₹{parseInt(Element.price) * 90}</p>
                      </span>
                    </div>
                    <NavLink to={`/product/${Element.id}`} 
                    state={{product:Element , products:products}}
                    className="m-3">
                      <button className="btn btn-primary form-control">
                        Know More ...
                      </button>
                    </NavLink>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
