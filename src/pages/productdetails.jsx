import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Banner } from "../components/banner";
import { useLocation, useParams ,NavLink} from "react-router-dom";
import "../css/productDetails.css"

export const ProductDetails = () => {
    const params = useParams();   
    console.log(params);

    const know = useLocation();

    const product = know.state|| {};  //{product:Element}

    const data = product.product;
    console.log(product);
    console.log(product.product);
  return (
    <>
      <Banner bannerName={"Product Details"}/>

    <div className="container my-3" id="backbtn">
        <NavLink to={'/products'} state={{products:product.products}}>
        <button className="btn btn-light form-control">Back to Products</button>
        </NavLink>
        
    </div>
      <div className="container d-flex justify-content-around" id="productDetails">
        <div className="container" id="pdtImage">
            <img src={data.api_featured_image} alt=""  id="pdtimg"/>
        </div>
        <div className="container p-3" id="pdtDetails">
            <h1 className="text-danger">{data.name}</h1>
            <h5 className="text-primary">{data.brand}</h5>
            <h5 className="text-primary">{data.category}</h5>
            <h4 className="text-secondary">₹{parseInt(data.price) * 90}</h4>
            <h6 className="text-success">Rating: {data.rating}/5 </h6>
            <p className="text-dark">{data.description}</p>
            <button className="btn btn-orange form-control border">Buy Now</button>
            <button className="btn btn-lightorange form-control my-3 border">Add to Cart</button>
        </div>
      </div>
    </>
  );
};