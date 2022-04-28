import React, { Component } from "react";
import { connect } from 'react-redux';
import {formatVND} from '../../../utils/MyUtils'


class CartItem extends Component {

  updateHandler = (item, newQuantity) =>{
    this.props.updateHandler(item, newQuantity);
  }

  deleteHandler = (itemID) =>{
    this.props.deleteHandler(itemID);
  }

  calulatePriceForItem = (itemPrice, itemQuantity) =>{
    return formatVND(parseInt(itemPrice) * parseInt(itemQuantity));
  }

  render() {
    const {item} = this.props;
    return (
      <tr key={item.id}>
        <td className="cart__product__item">
          <img src="img/shop-cart/iphone7plus_32gb.jpg" alt="" />
          <div className="cart__product__item__title">
            <h6>{item.product.name}</h6>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </td>
        <td className="cart__price">{ Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.product.price)}</td>
        <td className="cart__quantity">
          {/* <div className="pro-qty">
          <input type="number" defaultValue={item.quantity} min={1} />
        </div> */}
          <div className="pro-qty" >
            <div className="value-button" id="decrease" value="Decrease Value" onClick={() => this.updateHandler(item, parseInt(item.quantity) - 1)}>-</div>
            <input readOnly type="number" className="number" id={`input-${item.id}`} value={item.quantity} onMouseDown={e => e.preventDefault()} />
            <div className="value-button" id="increase" value="Increase Value" onClick={() => this.updateHandler(item, parseInt(item.quantity) + 1)}>+</div>
          </div>

        </td>
        <td className="cart__total">{this.calulatePriceForItem(item.product.price, item.quantity)}</td>
        <td className="cart__close" ><span className="icon_close" onClick={() => this.deleteHandler(item.id.productId)}/></td>
      </tr>
    )
  }

}

export default connect()(CartItem);