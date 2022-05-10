
import { Fragment } from 'react';
import React, { Component } from "react";
import swal from 'sweetalert2'
import { connect } from 'react-redux';
import { insertOrderAction } from '../../../store/actions/orders.action'
import { formatVND } from '../../../utils/MyUtils';

import Footer from "../../../components/footer/Footer.component";
import Header from "../../../components/header/Header.component";
import Instagram from "../../../components/instagram/Instagram.component";
import OffCanvasMenu from "../../../components/offCanvasMenu/OffCanvasMenu.component";
import BreadCrump from "../../../components/session/breadcrump/BreadCrump.component";
import { getListCartAction } from '../../../store/actions/cart.action'

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCart: '',
            addOrder: '',
            listOrders: '',
        }
    }
    async componentWillMount() {
        await this.props.dispatch(getListCartAction('nam'));
        await this.setState({
            listCart: this.props.listCart,
        })
    }

    async componentDidUpdate() {

        if (JSON.stringify(this.state.addOrder) !== JSON.stringify(this.props.addOrder)) {
            await this.props.dispatch(getListCartAction('nam'))
            await this.setState({
                listCart: this.props.listCart,
                addOrder: this.props.addOrder,
                listOrders: this.props.listOrders,
            })
        }
    }

    showListCart = (listCart) => {
        let listDom = null;
        if (listCart.length > 0) {
            listDom = listCart.map((item, index) => {
                return (
                    <li key={index} >{item.product.name}<span>{this.caculateTotalPrice(item.quantity, item.product.price)}</span></li>
                )
            })
        }
        else {
            console.log(listCart)
        }
        return listDom;
    }

    caculateTotalPrice = (quantity, price) => {
        return formatVND(quantity * price);
    }

    caculateTotal = (listCart) => {
        let sum = 0;
        if (listCart.length > 0) {
            sum = listCart.reduce((total, cur) => total + cur.quantity * cur.product.price, 0)
        }
        return formatVND(sum);
    }

    addOrderHandler = async (e) => {
        e.preventDefault()
        const { firstname, lastname, country, address, town, phone, email } = e.target.elements
        const day = new Date();
        const today = day.toISOString();
        const order = {
            "user": {
                "username": "nam"
            },
            "name": lastname.value + firstname.value,
            "address": address.value + town.value + country.value,
            "phoneNumber": phone.value,
            "purchaseDate": today,
            "totalPrices": 0,
            "delivery": {
                "deliveryId": "D01"
            },
            "status": "preparing",
            "couponId": null,
            "discountPrice": null
        }

        const listOrderDetails = this.state.listCart.map((item) => {
            return {
                "id": {
                    "orderId": null,
                    "productId": item.id.productId
                },
                "quantity": item.quantity,
                "price": item.product.price,
                "totalPrice": item.product.price * item.quantity
            }
        })

        const res = await this.props.dispatch(insertOrderAction(order, listOrderDetails));
        if (res.status == 200) {
            swal.fire({
                icon: 'success',
                title: 'Great!!',
                text: 'Your Orders will be delivered as soon as possible',
                confirmButtonText: 'Continue Shopping',
                allowOutsideClick: false
            })
                .then(result => {
                    if (result.isConfirmed) {
                        window.location.href = '/';
                    }
                })
        }
    }

    render() {
        const { listCart } = this.state;
        return (
            <Fragment>
                <OffCanvasMenu />
                <Header />
                <BreadCrump />
                <section className="checkout spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h6 className="coupon__link"><span className="icon_tag_alt" /> <a href="#">Have a coupon?</a> Click
                                    here to enter your code.</h6>
                            </div>
                        </div>
                        <form className="checkout__form" onSubmit={this.addOrderHandler}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h5>Billing detail</h5>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="checkout__form__input">
                                                <p>First Name <span>*</span></p>
                                                <input type="text" required id='firstname' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="checkout__form__input">
                                                <p>Last Name <span>*</span></p>
                                                <input type="text" required id='lastname' />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="checkout__form__input">
                                                <p>Country <span>*</span></p>
                                                <input type="text" required id="country" />
                                            </div>
                                            <div className="checkout__form__input">
                                                <p>Address <span>*</span></p>
                                                <input type="text" placeholder="Street Address" required id='address' />
                                            </div>
                                            <div className="checkout__form__input">
                                                <p>Town/City <span>*</span></p>
                                                <input type="text" required id="town" />
                                            </div>
                                            {/* <div className="checkout__form__input">
                                                <p>Country/State <span>*</span></p>
                                                <input type="text" />
                                            </div>
                                            <div className="checkout__form__input">
                                                <p>Postcode/Zip <span>*</span></p>
                                                <input type="text" />
                                            </div> */}
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="checkout__form__input">
                                                <p>Phone <span>*</span></p>
                                                <input type="text" required id='phone' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="checkout__form__input">
                                                <p>Email <span>*</span></p>
                                                <input type="text" required id='email' />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            {/* <div className="checkout__form__checkbox">
                                                <label htmlFor="acc">
                                                    Create an acount?
                                                    <input type="checkbox" id="acc" />
                                                    <span className="checkmark" />
                                                </label>
                                                <p>Create am acount by entering the information below. If you are a returing
                                                    customer login at the <br />top of the page</p>
                                            </div> */}
                                            {/* <div className="checkout__form__input">
                                                <p>Account Password <span>*</span></p>
                                                <input type="text" />
                                            </div>
                                            <div className="checkout__form__checkbox">
                                                <label htmlFor="note">
                                                    Note about your order, e.g, special noe for delivery
                                                    <input type="checkbox" id="note" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                            <div className="checkout__form__input">
                                                <p>Oder notes <span>*</span></p>
                                                <input type="text" placeholder="Note about your order, e.g, special noe for delivery" />
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="checkout__order">
                                        <h5>Your order</h5>
                                        <div className="checkout__order__product">
                                            <ul>
                                                <li>
                                                    <span className="top__text">Product</span>
                                                    <span className="top__text__right">Total</span>
                                                </li>
                                                {
                                                    this.showListCart(listCart)
                                                }


                                            </ul>
                                        </div>
                                        <div className="checkout__order__total">
                                            <ul>
                                                <li>Subtotal <span>{this.caculateTotal(listCart)}</span></li>
                                                <li>Total <span>{this.caculateTotal(listCart)}</span></li>
                                            </ul>
                                        </div>
                                        <div className="checkout__order__widget">
                                            <label htmlFor="check-payment">
                                                Cheque payment
                                                <input type="checkbox" id="check-payment" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="paypal">
                                                PayPal
                                                <input type="checkbox" id="paypal" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <button type="submit" className="site-btn">Place oder</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <Instagram />
                <Footer />
            </Fragment>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        listCart: state.cart.listCart,
        listOrders: state.orders.listOrders,
        //infoUser : state.user.infoUser,
        addOrder: state.orders.addOrder,
        modalState: state.notification.modalState
    }
}

export default connect(mapStateToProps)(Checkout);