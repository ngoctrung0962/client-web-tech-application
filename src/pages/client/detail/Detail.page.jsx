import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import productApi from '../../../api/productApi';
import reviewApi from '../../../api/reviewApi';


function Detail() {
    const productId = 1;
    let quantityrv = 0;
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await productApi.get(`${productId}`);
                setProduct(res);
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchData();
        console.log(product);
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await reviewApi.getAll();
                setReviews(res);
            } catch (error) {
                console.error('error')
            }
            setLoading(false)
        }
        fetchData();

    }, [])



    const reviewbyproduct_id = reviews.map((review) => {

        if (review.product_id === productId) {
            quantityrv = quantityrv + 1
            return (
                <div key={review.review_id} >
                    <div className="col-lg-6 col-md-7 col-sm-8">
                        <div className="services__item">
                            <img src="https://i.pinimg.com/564x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg" alt="" />
                            <p className="commentName">{review.username}</p>
                            <p>{review.content}</p>
                            <p>{review.time}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return ('')
        }
    })



    return (

        <section className="product-details spad">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__left product__thumb nice-scroll">
                                <a className="pt active" href="#product-1">
                                    <img src={product.img1} alt="" />
                                </a>
                                <a className="pt" href="#product-2">
                                    <img src={product.img2} alt="" />
                                </a>
                                <a className="pt" href="#product-3">
                                    <img src={product.img3} alt="" />
                                </a>
                                <a className="pt" href="#product-4">
                                    <img src={product.img3} alt="" />
                                </a>
                            </div>
                            <div className="product__details__slider__content">
                                <div className="product__details__pic__slider owl-carousel">
                                    <img data-hash="product-1" className="product__big__img" src={product.img1} alt="" />
                                    <img data-hash="product-2" className="product__big__img" src={product.img2} alt="" />
                                    <img data-hash="product-3" className="product__big__img" src={product.img3} alt="" />
                                    <img data-hash="product-4" className="product__big__img" src={product.img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product__details__text">
                            <h3>{product.product_name} <span>{product.product_name}</span></h3>
                            <div className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span> {quantityrv} reviews</span>
                            </div>
                            <div className="product__details__price">{product.cost} VND <span>{product.cost + 1000000}VND</span></div>
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
                                        <p>2</p>
                                    </li>
                                    <li>
                                        <span>Màn hình:</span>
                                        <p>5.6 inch</p>
                                    </li>
                                    <li>
                                        <span>Camera: </span>
                                        <p>13 MP</p>
                                    </li>
                                    <li>
                                        <span>CPU: </span>
                                        <p>Apple A15 Bionic</p>
                                    </li>
                                    <li>
                                        <span>Memmory: </span>
                                        <p>128GB</p>
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
                                    <p>{product.des}</p>

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
                    <div className="col-lg-3 col-md-4 col-sm-6">
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
                                <h6><a href="#">Buttons tweed blazer</a></h6>
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
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-2.jpg">
                                <ul className="product__hover">
                                    <li><a href="img/product/related/rp-2.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Flowy striped skirt</a></h6>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                                <div className="product__price">$ 49.0</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-3.jpg">
                                <div className="label stockout">out of stock</div>
                                <ul className="product__hover">
                                    <li><a href="img/product/related/rp-3.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Cotton T-Shirt</a></h6>
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
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-4.jpg">
                                <ul className="product__hover">
                                    <li><a href="img/product/related/rp-4.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Slim striped pocket shirt</a></h6>
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
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-4.jpg">
                                <ul className="product__hover">
                                    <li><a href="img/product/related/rp-4.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Slim striped pocket shirt</a></h6>
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
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-4.jpg">
                                <ul className="product__hover">
                                    <li><a href="img/product/related/rp-4.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                                    <li><a href="#"><span className="icon_heart_alt" /></a></li>
                                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Slim striped pocket shirt</a></h6>
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
    );
}

export default Detail;