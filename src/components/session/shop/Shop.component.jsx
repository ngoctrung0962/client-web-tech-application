/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useMemo } from "react";
import productApi from "../../../api/productApi";
import { Fragment } from "react";

import CategoriesShop from "./CategoriesShop.component";
import FilterByPrice from "./FilterByPrice.component";
import FileList from "./FilterList.component";
import Products from "./Products.component";

import Pagination from "./Pagination.component";

let PageSize = 9;

function Shop() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  // get products data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const products = await productApi.getAll();
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
  const [active, setActive] = useState("");

  // category state
  const [category, setCategory] = useState("All products");

  // handle change ... it will set category and active states
  const handleChange = (individualSpan) => {
    setActive(individualSpan.id);
    setCategory(individualSpan.text);
    filterFunction(individualSpan.text);
  };
  // filtered products state
  const [filteredProducts, setFilteredProducts] = useState([]);

  // filter function
  const filterFunction = (text) => {
    if (products.length > 1) {
      const filter = products.filter(
        (product) =>
          (product.category === text || text === "All products") &&
          product.price >= filterByPrice.min &&
          product.price <= filterByPrice.max
      );
      setFilteredProducts(filter);
    } else {
      console.log("no products to filter");
    }
  };

  //   function handleFillterByPrice
  const [filterByPrice, setFilterByPrice] = useState({
    min: 33,
    max: 99,
  });
  // Callback filterFunction when filterByPrice changed
  useEffect(() => {
    filterFunction(category);
  }, [filterByPrice]);
  const handelFillterByPrice = () => {
    //   get value from filter by price component
    const priceMin = document.querySelector("#minamount").value.substring(1);
    const priceMax = document.querySelector("#maxamount").value.substring(1);
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

  return (
    <section class="shop spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <div class="shop__sidebar">
              {/* Categories */}
              <div className="sidebar__categories">
                <div className="section-title">
                  <h4>Categories</h4>
                </div>
                <div className="categories__accordion">
                  <div className="accordion" id="accordionExample">
                    {spans.map((individualSpan, index) => (
                      <div className="card">
                        <div className="card-heading active">
                          <a
                            key={index}
                            id={individualSpan.id}
                            onClick={() => handleChange(individualSpan)}
                            className={
                              individualSpan.id === active ? active : "deactive"
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
                    data-min={33}
                    data-max={99}
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

              <FileList />
            </div>
          </div>
          {/* Shop */}
          <div className="col-lg-9 col-md-9">
            <div className="row d-flex">
              <Fragment>
                {currentTableData.map((individualFilteredProduct) => (
                  <div
                    key={individualFilteredProduct.id}
                    className="col-lg-4 col-md-6"
                  >
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg={individualFilteredProduct.img}
                        style={{
                          backgroundImage: `url(${individualFilteredProduct.img})`,
                        }}
                      >
                        <div className="label new">New</div>
                        <ul className="product__hover">
                          <li>
                            <a
                              href={individualFilteredProduct.img}
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
                            <a href="#">
                              <span className="icon_bag_alt" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6>
                          <a href="#">{individualFilteredProduct.name}</a>
                        </h6>
                        <div className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="product__price">
                          {individualFilteredProduct.price}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>

              {/* Pagination */}
              <div class="col-lg-12 text-center pagination_center">
                <Pagination
                  className="pagination__option"
                  currentPage={currentPage}
                  totalCount={products.length}
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
