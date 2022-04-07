import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";

function Product() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

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
  console.log(products);
  const listProducts = products.map((product) => {
    console.log("action map");
    return (
      <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mix women">
        <div className="product__item">
          <div
            className="product__item__pic set-bg"
            data-setbg={product.img}
            // set style background-image
            style={{ backgroundImage: `url(${product.img})` }}
          >
            <div className="label new">New</div>
            <ul className="product__hover">
              <li>
                <a href={product.img} className="image-popup">
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
              <a href="/product-details.html">{product.name}</a>
            </h6>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="product__price">{product.price}</div>
          </div>
        </div>
      </div>
    );
  });
  console.log(listProducts);
  return (
    console.log("render"),
    (
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="section-title">
                <h4>New product</h4>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className="filter__controls">
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".women">Women’s</li>
                <li data-filter=".men">Men’s</li>
                <li data-filter=".kid">Kid’s</li>
                <li data-filter=".accessories">Accessories</li>
                <li data-filter=".cosmetic">Cosmetics</li>
              </ul>
            </div>
          </div>
          <div className="row property__gallery">
            {listProducts}
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-1.jpg"
                >
                  <div className="label new">New</div>
                  <ul className="product__hover">
                    <li>
                      <a
                        href="img/product/product-1.jpg"
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
                    <a href="/product-details.html">Buttons tweed blazer</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Product;
