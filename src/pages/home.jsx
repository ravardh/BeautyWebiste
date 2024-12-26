import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Banner } from "../components/banner";


export const Home = () => {
  return (
    <>
      <Banner bannerName={"Home"}/>
      <span>this is Home page</span>
    </>
  );
};