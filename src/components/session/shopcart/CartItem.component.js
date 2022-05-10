import React, { Component } from "react";
import { connect } from 'react-redux';
import {formatVND} from '../../../utils/MyUtils'
import {useState} from 'react'

function CartItem (props){

  //const [item, setItem] = useState(props.item);

  const updateHandler = (item, newQuantity) =>{
    props.updateHandler(item, newQuantity);
  }

  const deleteHandler = (itemID) =>{
    props.deleteHandler(itemID);
  }

  const calulatePriceForItem = (itemPrice, itemQuantity) =>{
    return formatVND(parseInt(itemPrice) * parseInt(itemQuantity));
  }


  return(
    
      <tr key={props.item.id}>
        <td className="cart__product__item">
          <img src="img/shop-cart/iphone7plus_32gb.jpg" alt="" />
          <div className="cart__product__item__title">
            <h6>{props.item.product.name}</h6>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </td>
        <td className="cart__price">{ Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.item.product.price)}</td>
        <td className="cart__quantity">
          {/* <div className="pro-qty">
          <input type="number" defaultValue={item.quantity} min={1} />
        </div> */}
          <div className="pro-qty" >
            <div className="value-button" id="decrease" value="Decrease Value" onClick={() => updateHandler(props.item, parseInt(props.item.quantity) - 1)}>-</div>
            <input readOnly type="number" className="number" id={`input-${props.item.id}`} value={props.item.quantity} onMouseDown={e => e.preventDefault()} />
            <div className="value-button" id="increase" value="Increase Value" onClick={() => updateHandler(props.item, parseInt(props.item.quantity) + 1)}>+</div>
          </div>

        </td>
        <td className="cart__total">{calulatePriceForItem(props.item.product.price, props.item.quantity)}</td>
        <td className="cart__close" ><span className="icon_close" onClick={() => deleteHandler(props.item.id.productId)}/></td>
      </tr>
  )

}

export default CartItem;