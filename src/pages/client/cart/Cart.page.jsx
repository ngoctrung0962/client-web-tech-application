import React, { Fragment } from 'react';
import CartItem from '../../../components/session/shopcart/CartItem.component'
import { formatVND, showNotification } from '../../../utils/MyUtils';
import swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import Preloder from '../../../components/proloder/Preloder.component'
import { getListCartApi, deleteCartApi, insertCartApi, updateCartApi } from '../../../api/cartApi'
import { getDiscountApi } from '../../../api/discountApi';

import Footer from "../../../components/footer/Footer.component";
import Header from "../../../components/header/Header.component";
import Instagram from "../../../components/instagram/Instagram.component";
import OffCanvasMenu from "../../../components/offCanvasMenu/OffCanvasMenu.component";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb.component";
import { useSelector } from 'react-redux';

function Cart() {
    let navigate = useNavigate();
    const user = useSelector(state => state.user.currentUser);
    const [listCartState, setListCartSate] = useState([]);
    const [isLoading, setIsLoading] = useState('loading');
    const [updateCart, setUpdateCart] = useState('');
    const [deleteCart, setDeleteCart] = useState('');
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);

    useEffect(async () => {
        if (user === null)
            showNotification("error", "Login Request", "You must login before access this page", "Login",
                () => navigate("/signin"));
        console.log(user);
        const res = await getListCartApi(user.username);
        setIsLoading('idle');
        setListCartSate(res);
    }, [])

    //check info user before access to cart
    useEffect(async () => {
        if (user === null)
            showNotification("error", "Login Request", "You must login before access this page", "Coutinue shop",
                () => navigate("/shop"));
    }, [user])

    useEffect(async () => {
        const res = await getListCartApi(user.username);
        setListCartSate(res);
    }, [updateCart])

    useEffect(async () => {
        const res = await getListCartApi(user.username);
        setListCartSate(res);
    }, [deleteCart])

    const updateHandler = async (item, newQuantity) => {
        if (newQuantity == 0) {
            const res = await deleteCartApi(user.username, item.id.productId);
            setDeleteCart(res);
            console.log(res);
        }
        else {
            if (newQuantity <= item.product.quantity) {
                const product = {
                    quantity: newQuantity,
                };
                const res = await updateCartApi(user.username, item.id.productId, product);
                setUpdateCart(res);
            }
            else {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...!!',
                    text: 'Sorry guys, The product is not enough to provide',
                    allowOutsideClick: false
                })
            }
        }
    }

    const deleteHandler = async (itemID) => {
        const res = await deleteCartApi(user.username, itemID);
        setDeleteCart(res);
    };

    const showCartItem = (listCart) => {
        let listDom = null;
        if (listCart !== undefined) {
            if (listCart.length > 0) {
                listDom = listCart.map((item, index) => {
                    return (
                        <CartItem
                            key={index}
                            item={item}
                            updateHandler={updateHandler}
                            deleteHandler={deleteHandler} />
                    )
                })
            }

        }
        return listDom;
    }

    const showTotalPrice = (listCart) => {
        let sum = 0;
        if (listCart !== undefined) {
            console.log(listCart)
            if (listCart.length > 0)
                sum = listCart.reduce((total, cur) => total + cur.quantity * cur.product.price, 0);
        }
        return formatVND(sum);
    }

    const showPriceWithCoupon = (listCart) => {
        let sum = 0;
        if (listCart !== undefined) {
            if (listCart.length > 0)
                sum = listCart.reduce((total, cur) => total + cur.quantity * cur.product.price, 0);
        }
        sum = sum - discount;
        return formatVND(sum);
    }

    //function set state for coupon
    const applyDiscout = async (e) => {
        e.preventDefault();
        const discount = e.target.elements.codeDiscount.value;
        const res = await getDiscountApi(discount);
        if (res === undefined) {

            showNotification('error', 'HUHU SORRY', 'we dont have this coupon, try again', 'OK, I understand');
            setDiscount(0);
            setCoupon('');
        }
        else {
            const expiredDay = new Date(res.expiredTime).toISOString();
            const currentDay = new Date().toISOString();
            if (currentDay > expiredDay) {
                showNotification('error', 'OOP..!!!', 'Oh no, The discount code has expired', 'OK, I understand');
            }
            else {
                setCoupon(res);
                setDiscount(res.discount);
                console.log(coupon);
            }
        }
    }

    const redirectToCheckout = (e) => {
        e.preventDefault();
        if (listCartState.length == 0) {
            showNotification('error', 'OH NO!!', 'You dont have any items, shopping now my friends', 'Shooping now!',
                () => navigate('/shop'))
        }
        else {
            navigate('/checkout',
                {
                    state: {
                        coupon: coupon,
                        listCarts: listCartState
                    }
                });
        }
    }

    return (
        <Fragment>
            <OffCanvasMenu />
            <Header />
            <Breadcrumb />

            <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoading === 'loading' ? <Preloder /> : showCartItem(listCartState)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn">
                                <Link to='/shop'>Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="discount__content">
                                <h6>Discount codes</h6>
                                <form onSubmit={applyDiscout} >
                                    <input type="text" id="codeDiscount" placeholder="Enter your coupon code" />
                                    <button type="submit" className="site-btn">Apply</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="cart__total__procced">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Merchandise <span>{isLoading === 'loading' ? '0' : showTotalPrice(listCartState)}</span></li>
                                    {coupon ? <li>Discount <span>{`-${formatVND(discount)}`}</span></li> : ''}
                                    <li>Total payment <span>{isLoading === 'loading' ? '0' : showPriceWithCoupon(listCartState)}</span></li>
                                </ul>
                                <a href="" className="primary-btn" onClick={redirectToCheckout}>Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Instagram />
            <Footer />
        </Fragment>

    )
}

export default Cart;