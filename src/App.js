import Home from './pages/client/home/Home.page';
import Cart from './pages/client/cart/Cart.page';
import Checkout from './pages/client/checkout/Checkout.page';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

import Header from './components/header/Header.component'
import Footer from './components/footer/Footer.component'
import React from 'react';

function App() {
  return (
    <React.Fragment>

      <Router>
        <Routes >
          <Route path="/" exact={false} element={<Cart />}>

          </Route>

          <Route path="/checkout" exact={false}  element={<Checkout />}>
          </Route>

        </Routes >
      </Router>
    </React.Fragment>
  );
}

export default App;
