
import React, { Component } from "react";
import CartItem from '../../../components/session/shopcart/CartItem.component';
import { getListCartAction, updateCartAction, deleteCartAction, insertCartAction } from '../../../store/actions/cart.action';
import { connect } from 'react-redux';
import { checkQuantityItem, formatVND } from '../../../utils/MyUtils';
import {
    BrowserRouter as Router,
     Route, Switch, Link
  } from 'react-router-dom';

  
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addCart: '',
            updateCart: '',
            deleteCart: '',
            listCart: ''
        }
    }

    async componentWillMount() {
        //const {infoUser} = this.props;
        await this.props.dispatch(getListCartAction('nam'));
        await this.setState({
            listCart: this.props.listCart
        })

    };

    async componentDidUpdate() {
        if ((JSON.stringify(this.props.addItem) !== JSON.stringify(this.state.addCart))
            || (JSON.stringify(this.props.deleteItem) !== JSON.stringify(this.state.deleteCart))
            || (JSON.stringify(this.props.updateItem.quantity) !== JSON.stringify(this.state.updateCart.quantity))) {
            //console.log(this.props.updateItem, this.state.updateCart);
            //const {infoUser} = this.props
            await this.props.dispatch(getListCartAction('any'))
            await this.setState({
                addCart: this.props.addItem,
                updateCart: this.props.updateItem,
                deleteCart: this.props.deleteItem,
                listCart: this.props.listCart
            })
        }
    }

    updateHandler = async (item, newQuantity) => {
        if(newQuantity == 0){
            await this.props.dispatch(deleteCartAction(item.id.productId));
        }
        else{
            if (newQuantity > 0) {
                const product = {
                    quantity: newQuantity,
                };
                await this.props.dispatch(updateCartAction(item.id, product));
            }
        }
       
    }

    insertHandler = async (item) =>{
        await this.props.dispatch(insertCartAction(item));
    };

    deleteHandler = async (itemID) =>{
        await this.props.dispatch(deleteCartAction(itemID));
    };


    showCartItem = (listCart) => {
        let listDom = null;
        if (listCart.length > 0) {
            listDom = listCart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        updateHandler={this.updateHandler}
                        deleteHandler={this.deleteHandler} />
                )
            })
        }
        return listDom;
    }

    showTotalPrice = (listCart) =>{
        let sum=0;
        sum = listCart.reduce((total, cur) => total + cur.quantity * cur.product.price, 0);
        return formatVND(sum);
    }
    
    render() {
        const { listCart } = this.state
        return (
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
                                        {this.showCartItem(listCart)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn">
                                <a href="#">Continue Shopping</a>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn update__btn">
                                <a href="#"><span className="icon_loading" /> Update cart</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="discount__content">
                                <h6>Discount codes</h6>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" className="site-btn">Apply</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="cart__total__procced">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>{this.showTotalPrice(this.props.listCart)}</span></li>
                                    <li>Total <span>{this.showTotalPrice(this.props.listCart)}</span></li>
                                </ul>
                                <Link to="/checkout" className="primary-btn">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listCart: state.cart.listCart,
        //infoUser : state.user.infoUser,
        addItem: state.cart.addItem,
        deleteItem: state.cart.deleteItem,
        updateItem: state.cart.updateItem,
    }
}

export default connect(mapStateToProps)(Cart);