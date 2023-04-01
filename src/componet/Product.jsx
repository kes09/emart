import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=e.l.f./${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image_link}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
          </h4>
          <h1 className="display-5">
            {product.title}
          </h1>
          <p className="lead fw-bolder"> Rating :{product.rating}
            <i className="fa fa-star"></i>
          </p>
          <p className="lead ">Description: {product.description}</p>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
