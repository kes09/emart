import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=e.l.f.");
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
    <>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
    
    </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.product_type === cat)
    setfilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setfilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("bronzer")}>Bronzer</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("blush")}>Blush</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("lip_liner")}>Lip_liner</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("foundation")}>Foundation</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("mascara")}>Mascara</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("eyeshadow")}>Eyeshadow</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("eyeliner")}>Eyeliner</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("lipstick")}>Lipstick</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key ={product.id}>
                  <img src={product.image_link} class="card-img-top" alt={product.title} height='250px' />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.name}</h5>
                    <p class="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    {/* <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink> */}
                    <button className="btn btn-outline-dark " style={{marginBottom: '7px'}}>
                        Add to cart
                    </button>
                    <NavLink to ="/cart" className="btn btn-dark">
                        Go to Cart
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row ">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              {" "}
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
