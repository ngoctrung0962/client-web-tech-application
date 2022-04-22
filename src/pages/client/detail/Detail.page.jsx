import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import productApi from '../../../api/productApi';
import reviewApi from '../../../api/reviewApi';


function Detail() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const [brandId, setBrandId] = useState('');
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})
  const [reviews, setReviews] = useState([])
  const [listproducts, setlistProducts] = useState([]);

  //Load product
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await productApi.get(`${productId}`);
        console.log(res)
        setProduct(res)

      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData();
  }, [productId])


  //Load review by productId
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await reviewApi.getreviewbyproductId(productId);
        setReviews(res);
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData();
  }, [productId])

  //load listProduct by brandId
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      if (brandId) {
        try {
          const res = await productApi.getproductbybrandId(`${brandId}`);
          setlistProducts(res);
        } catch (error) {
          console.log(error)
        }
      }

      setLoading(false)
    }
    fetchData();
  }, [brandId])

  let quantityrv = reviews.length;

  const reviewbyproduct_id = reviews.map((review) => {

    return (
      <div key={review.reviewId} >
        <div className="col-lg-6 col-md-7 col-sm-8">
          <div className="services__item">
            <img src="https://i.pinimg.com/564x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg" alt="" />
            <p className="commentName">{review.username}</p>
            <p>{review.content}</p>
            <p>{review.time.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    )
  })
  const listProductsbybrandId = listproducts.map((product) => {
    return (
      <div key={product.productId} className="col-lg-3 col-md-4 col-sm-6">
        <div className="product__item">
          <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-1.jpg">
            <div className="label new">New</div>
            <ul className="product__hover">
              <li><a href="img/product/related/rp-1.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
              <li><a href="#"><span className="icon_heart_alt" /></a></li>
              <li><a href="#"><span className="icon_bag_alt" /></a></li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6><a href="#">{product.name}</a></h6>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="product__price">{product.price} VND</div>
          </div>
        </div>
      </div>
    )
  })



  return (

    <section className="product-details spad">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <div className="product__details__pic">
              <div className="product__details__pic__left product__thumb nice-scroll">
                <a className="pt active" href="#product-1">
                  <img src={product.image} alt="" />
                </a>
                <a className="pt" href="#product-2">
                  <img src={product.image} alt="" />
                </a>
                <a className="pt" href="#product-3">
                  <img src={product.image} alt="" />
                </a>
                <a className="pt" href="#product-4">
                  <img src={product.image} alt="" />
                </a>
              </div>
              <div className="product__details__slider__content">
                <div className="product__details__pic__slider owl-carousel">
                  <img data-hash="product-1" className="product__big__img" src={product.image} alt="" />
                  <img data-hash="product-2" className="product__big__img" src={product.image} alt="" />
                  <img data-hash="product-3" className="product__big__img" src={product.image} alt="" />
                  <img data-hash="product-4" className="product__big__img" src={product.image} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product__details__text">
              <h3>{product.name}</h3>
              <span>Hãng sản xuất:{product.brand.brandId} </span>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <span> {quantityrv} reviews</span>
              </div>
              <div className="product__details__price">{product.price} VND <span>{product.price + 1000000}VND</span></div>
              <p>{product.des}</p>
              <div className="product__details__button">
                <div className="quantity">
                  <span>Quantity:</span>
                  <div className="pro-qty">
                    <input type="text" defaultValue={1} />
                  </div>
                </div>
                <a href="#" className="cart-btn"><span className="icon_bag_alt" /> Add to cart</a>

              </div>
              <div className="product__details__widget">
                <ul>
                  <li>
                    <span>Số lượng còn lại: </span>
                    <p>{product.quantity}</p>
                  </li>
                  <li>
                    <span>Màn hình:</span>
                    <p>{product.screen} Inch</p>
                  </li>
                  <li>
                    <span>Camera: </span>
                    <p>{product.frontCam} MP</p>
                  </li>
                  <li>
                    <span>CPU: </span>
                    <p>{product.cpu}</p>
                  </li>
                  <li>
                    <span>RAM: </span>
                    <p>{product.ram} GB</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="product__details__tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Specification</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ({quantityrv})</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <h6>Description</h6>
                  <p>{product.description}</p>

                </div>
                <div className="tab-pane" id="tabs-2" role="tabpanel">
                  <h6>Specification</h6>
                  <p>Ram : </p>
                  <p>Màn hình : 144 </p>
                </div>


                <div className="tab-pane" id="tabs-3" role="tabpanel">
                  <h6>Reviews ({quantityrv})</h6>
                  <div className="contact__address avatar-reviewer">
                    <h5>Danh sách bình luận</h5>

                    {reviewbyproduct_id}
                  </div>
                  <div className=" contact__form">
                    <h5>Thêm bình luận</h5>
                    <form action="#">
                      <textarea placeholder="Hãy nhập bình luận của bạn" defaultValue={""} />
                      <button type="submit" className="site-btn">Add review</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="related__title">
              <h5>RELATED PRODUCTS</h5>
            </div>
          </div>
          {listProductsbybrandId}
        </div>
      </div>
    </section>
  );
}

export default Detail;