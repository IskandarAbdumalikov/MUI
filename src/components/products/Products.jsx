import React, { useEffect, useState } from "react";
import "./products.scss";
import axios from "../../api/index";
import { Button } from "@mui/material";

const Products = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(1);
  const pageCount = 4;
  console.log(data);

  useEffect(() => {
    axios
      .get(`/products`, {
        params: {
          limit: offset * pageCount + 4,
        },
      })
      .then((res) => setData(res.data?.products))
      .catch((err) => console.log(err.response.data));
  }, [offset]);
  let productCard = data?.map((el) => (
    <div className="product__card" key={el.id}>
      <img className="product__card__img" src={el.thumbnail} alt="" />
      <div className="product__card__info">
        <h2>{el.title}</h2>
        <h3>{el.description}</h3>
        <h1>{el.price} USD</h1>
        <div className="product__card__info-btns">
          <Button variant="outlined" color="error">
            Buy
          </Button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="products__wrapper">
      <div className="products">{productCard}</div>
      <button
        className="see-more-button"
        onClick={() => setOffset((p) => p + 1)}
      >
        See more products
      </button>
    </section>
  );
};

export default Products;
