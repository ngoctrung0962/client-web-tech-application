import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

function Product() {
  const [value, setValue] = useState(4);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const products = await productApi.getTop8ProductsNewest();
        setProducts(products);
      } catch (error) {
        console.error("error");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // categories list rendering using span tag
  const [spans] = useState([
    { id: "All", text: "All products" },
    { id: "Laptop", text: "Laptop" },
    { id: "SmartPhone", text: "Smart Phone" },
  ]);

  // active class state
  const [active, setActive] = useState("All");

  // category state
  const [category, setCategory] = useState("All products");
  useEffect(() => {
    filterFunction(category);
  }, [category]);
  // handle change ... it will set category and active states
  const handleChange = (individualSpan) => {
    setActive(individualSpan.id);
    setCategory(individualSpan.text);
    filterFunction(individualSpan.text);
  };
  // filtered products state
  const [filteredProducts, setFilteredProducts] = useState([]);

  // filter function
  // console.log(products);

  const filterFunction = (text) => {
    if (products.length > 0) {
      const filter = products.filter((product) => {
        return (
          product.category.name === text ||
          text === "All products" ||
          category === "All products"
        );
      });
      console.log(filter);
      setFilteredProducts(filter);
    } else {
      console.log("no products to filter");
    }
  };

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="section-title">
              <h4>New products</h4>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <ul className="filter__controls">
              {spans.map((span) => {
                return (
                  <li
                    key={span.id}
                    className={span.id === active ? "active" : ""}
                    onClick={() => handleChange(span)} // handle change
                  >
                    {span.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row property__gallery">
          {filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-lg-3 col-md-4 col-sm-6 mix women"
                >
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg={product.image}
                      // set style background-image
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className="label new">New</div>
                      <ul className="product__hover">
                        <li>
                          <a href={product.image} className="image-popup">
                            <span className="arrow_expand" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_heart_alt" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_bag_alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <Link to={`/product/${product.productId}`}>
                          {product.name}
                        </Link>
                      </h6>
                      {/* <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div> */}
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Rating name="read-only" value={value} readOnly />
                      </Box>
                      <div className="product__price">
                        {product && product.price
                          ? product.price.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : products.map((product) => (
                <div
                  key={product.id}
                  className="col-lg-3 col-md-4 col-sm-6 mix women"
                >
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg={product.image}
                      // set style background-image
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className="label new">New</div>
                      <ul className="product__hover">
                        <li>
                          <a href={product.image} className="image-popup">
                            <span className="arrow_expand" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_heart_alt" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_bag_alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <Link to={`/product/${product.productId}`}>
                          {product.name}
                        </Link>
                      </h6>
                      {/* <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div> */}
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Rating name="read-only" value={value} readOnly />
                      </Box>
                      <div className="product__price">
                        {product && product.price
                          ? product.price.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
