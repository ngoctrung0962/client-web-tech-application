/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useMemo } from "react";
import productApi from "../../../api/productApi";
import { Fragment } from "react";
import { insertCartApi } from "../../../api/cartApi";
import swal from "sweetalert2";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { formatVND } from "../../../utils/MyUtils";
import CategoriesShop from "./CategoriesShop.component";
import FilterByPrice from "./FilterByPrice.component";
import FileList from "./FilterList.component";
import Products from "./Products.component";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination.component";
import { useSelector } from "react-redux";

let PageSize = 9;

function Shop() {
  const user = useSelector((state) => state.user.currentUser);
  let navigate = useNavigate();
  const [value, setValue] = useState(4);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const products = await productApi.getAll();
        setProducts(products);
        setFilteredProducts(products);
        const minPrice = await productApi.getMinPrice();
        const maxPrice = await productApi.getMaxPrice();
        setFilterByPrice({ ...filterByPrice, min: minPrice, max: maxPrice });
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
    setCurrentPage(1);
  };
  // filtered products state
  const [filteredProducts, setFilteredProducts] = useState([]);

  // filter function
  const filterFunction = (text) => {
    if (products.length > 0) {
      const filter = products.filter((product) => {
        return (
          (product.category.name === text ||
            text === "All products" ||
            category === "All products") &&
          product.price >= filterByPrice.min &&
          product.price <= filterByPrice.max
        );
      });
      setFilteredProducts(filter);
    } else {
      console.log("no products to filter");
    }
  };

  // Callback filterFunction when filterByPrice changed
  useEffect(() => {
    filterFunction(category);
  }, [filterByPrice]);

  const handelFillterByPrice = () => {
    //   get value number from input
    const priceMin = document
      .querySelector("#minamount")
      .value.replace(/[^0-9]/g, "");
    const priceMax = document
      .querySelector("#maxamount")
      .value.replace(/[^0-9]/g, "");
    console.log(priceMin, priceMax);
    //   set filterByPrice state
    setFilterByPrice({
      min: priceMin,
      max: priceMax,
    });
  };



  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (filteredProducts.length > 0) {
      return filteredProducts.slice(firstPageIndex, lastPageIndex);
    }
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredProducts, products]);

  const addToCart = async (e, item) => {
    e.preventDefault();
    if (item.quantity === 0) {
      //notify not enough quantity
      swal.fire({
        icon: "warning",
        title: "HUHU OH NO !!!",
        text: "Not enough products, my friends",
        confirmButtonText: "Choose others",
        allowOutsideClick: false,
      });
    } else {
      const cartItem = {
        id: {
          username: `${user.username}`,
          productId: item.productId,
        },
        quantity: 1,
      };
      const res = await insertCartApi(cartItem);
      if (res.status === 200) {
        navigate("/cart");
      }
    }
  };

  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="shop__sidebar">
              {/* Categories */}
              <div className="sidebar__categories">
                <div className="section-title">
                  <h4>Categories</h4>
                </div>
                <div className="categories__accordion">
                  <div className="accordion" id="accordionExample">
                    {spans.map((individualSpan, index) => (
                      <div key={index} className="card">
                        <div className="card-heading active">
                          <a
                            id={individualSpan.id}
                            onClick={() => handleChange(individualSpan)}
                            className={
                              individualSpan.id === active ? "active" : ""
                            }
                          >
                            {individualSpan.text}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Categories */}
              {/* Filter by price */}
              <div className="sidebar__filter">
                <div className="section-title">
                  <h4>Shop by price</h4>
                </div>
                <div className="filter-range-wrap">
                  <div
                    className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    data-min={filterByPrice.min}
                    data-max={filterByPrice.max}
                  />
                  <div className="range-slider">
                    <div className="price-input">
                      <p>Price:</p>
                      <input type="text" id="minamount" />
                      <input type="text" id="maxamount" />
                    </div>
                  </div>
                </div>
                <a onClick={() => handelFillterByPrice()} href="#">
                  Filter
                </a>
              </div>
              {/* Filter by price */}
            </div>
          </div>
          {/* Shop */}
          <div className="col-lg-9 col-md-9">
            <div className="row d-flex">
              <Fragment>
                {currentTableData.map((individualFilteredProduct) => (
                  <div
                    key={individualFilteredProduct.productId}
                    className="col-lg-4 col-md-6"
                  >
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg={individualFilteredProduct.image}
                        style={{
                          backgroundImage: `url(${individualFilteredProduct.image})`,
                        }}
                      >
                        <ul className="product__hover">
                          <li>
                            <a
                              href={individualFilteredProduct.image}
                              className="image-popup"
                            >
                              <span className="arrow_expand" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon_heart_alt" />
                            </a>
                          </li>
                          <li>
                            <Link to="/cart">
                              <span
                                className="icon_bag_alt"
                                onClick={(e) =>
                                  addToCart(e, individualFilteredProduct)
                                }
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6>
                          <Link
                            to={`/product/${individualFilteredProduct.productId}`}
                          >
                            {individualFilteredProduct.name}
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
                          {individualFilteredProduct &&
                          individualFilteredProduct.price
                            ? individualFilteredProduct.price.toLocaleString(
                                "it-IT",
                                { style: "currency", currency: "VND" }
                              )
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>

              {/* Pagination */}
              <div className="col-lg-12 text-center pagination_center">
                <Pagination
                  className="pagination__option"
                  currentPage={currentPage}
                  totalCount={filteredProducts.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
          {/* Shop */}
        </div>
      </div>
    </section>
  );
}
export default Shop;
