
import axios from 'axios';
import Preloder from "../../../components/proloder/Preloder.component"
import {useEffect, useState} from 'react';
import { render } from '@testing-library/react';

function ShopCart(){

  const [listItems, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [change, setChange] = useState(false)

  const url = 'https://623e637ce8fbc4f1626eb35d.mockapi.io/cart/'


  useEffect(()=>{
    setTotalPrice(listItems.reduce((total, cur) => total + cur.total, 0));
    
  }, [listItems])

  useEffect(()=>{
    getItems();
  }, [])
  
  const getItems = async () =>{
    const response = await fetch(url);
    setItems(await response.clone().json());
  }

  const deleteItem = (id) =>{
    fetch(`https://623e637ce8fbc4f1626eb35d.mockapi.io/cart/${id}`, { method: 'DELETE' })
        .then(async response => {
            const data = await response.json();
            if (response.ok) {
                await getItems();
            }
        })
        .catch(error => {
            //setStatus(error);
        });
    
  }

  const showItems = () =>{
    
    return(
      listItems.map((item) =>{
        return(
          <tr key={item.id}>
          <td className="cart__product__item">
            <img src="img/shop-cart/iphone7plus_32gb.jpg" alt="" />
            <div className="cart__product__item__title">
              <h6>{item.name}</h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </td>
          <td className="cart__price">{item.price}</td>
          <td className="cart__quantity">
            {/* <div className="pro-qty">
              <input type="number" defaultValue={item.quantity} min={1} />
            </div> */}
            <div className="pro-qty" >
              <div className="value-button" id="decrease" onClick={() => decreaseValue(item.id)} value="Decrease Value">-</div>
              <input readOnly type="number" className="number" id={`input-${item.id}`} defaultValue={item.quantity} onMouseDown={e => e.preventDefault()}/>
              <div className="value-button" id="increase" onClick={() => increaseValue(item.id)} value="Increase Value">+</div>
            </div>

          </td>
          <td className="cart__total">{item.total}</td>
          <td className="cart__close" ><span className="icon_close" onClick={() => deleteItem(item.id)}/></td>
        </tr>
        )
      })
    )
  }

  const showTotalPrice = () =>{
    
    return (
      <div className="col-lg-4 offset-lg-2">
         <div className="cart__total__procced">
           <h6>Cart total</h6>
           <ul>
             <li>Subtotal <span>{totalPrice}</span></li>
             <li>Total <span>$ 750.0</span></li>
           </ul>
           <a href="./checkout.html" className="primary-btn">Proceed to checkout</a>
         </div>
       </div>
    )
  }

  const increaseValue = (id)=> {
    let newQuantity =  parseInt(document.getElementById(`input-${id}`).value, 10);
    newQuantity++;
    const data ={
      quantity: newQuantity
    };
    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    //console.log(newQuantity)

    fetch(`https://623e637ce8fbc4f1626eb35d.mockapi.io/cart/${id}`, option)
        .then(async response => {
            const data = await response.json();
            console.log(response);
            if (response.ok) {
              //getItems();
          }
        })
  }
  
  const decreaseValue = (id) => {
    let newQuantity =  parseInt(document.getElementById(`input-${id}`).value, 10);
    newQuantity--;
    const data ={
      quantity: newQuantity
    };
    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    console.log(newQuantity)

    fetch(`https://623e637ce8fbc4f1626eb35d.mockapi.io/cart/${id}`, option)
        .then(async response => {
            const data = await response.json();
            if (response.ok) {
              
            }
        })
  }

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
               {
                showItems()
               }
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
       <div className="col-lg-6 col-md-6 col-sm-6">
         <div className="cart__btn update__btn">
           <a href="#"><span className="icon_loading" /> Update cart</a>
         </div>
       </div>
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
       {
         showTotalPrice()
       }
     </div>
   </div>
 </section>
    
   )
}

export default ShopCart;