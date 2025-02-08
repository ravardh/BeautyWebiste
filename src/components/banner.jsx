import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/banner.css";

export const Banner = ({ bannerName }) => {
  return (
    <>
      <div className="container p-4 my-2" id="banner">
        <h1 className="text-danger">{bannerName}</h1>
      </div>
    </>
  );
};
