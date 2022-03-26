
import axios from 'axios';
import {useEffect, useState} from 'react';

function ShopCart(){

  const [listProduct, setListProduct] = useState([]);

  useEffect(() =>{
     fetch('https://623e637ce8fbc4f1626eb35d.mockapi.io/cart/getinfo/product')
      .then(response => response.json())
      .then(list => setListProduct(list))
  }, [])

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
                  
                  listProduct.map((product) =>{
                    return(
                      <tr>
                      <td className="cart__product__item">
                        <img src="img/shop-cart/cp-3.jpg" alt="" />
                        <div className="cart__product__item__title">
                          <h6>{product.name}</h6>
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">{product.price}</td>
                      <td className="cart__quantity">
                        <div className="pro-qty">
                          <input type="number" value={product.quality} min={0}/>
                        </div>
                      </td>
                      <td className="cart__total">{product.total}</td>
                      <td className="cart__close"><span className="icon_close" /></td>
                    </tr>
                    )
                  })
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
        <div className="col-lg-4 offset-lg-2">
          <div className="cart__total__procced">
            <h6>Cart total</h6>
            <ul>
              <li>Subtotal <span>$ 750.0</span></li>
              <li>Total <span>$ 750.0</span></li>
            </ul>
            <a href="./checkout.html" className="primary-btn">Proceed to checkout</a>
          </div>
        </div>
      </div>
    </div>
  </section>
   )
}

export default ShopCart;