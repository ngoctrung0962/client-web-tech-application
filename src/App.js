import Home from './pages/client/home/Home.page';
import ShopPage from './pages/client/shop/Shop.page';
import RouterPage from './pages/Router.page';
import './App.css';

import './App.css';
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import Instagram from './components/instagram/Instagram.component';

import Home from './pages/client/home/Home.page';
import Contact from './pages/client/contact/Contact.page';
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/client/detail/Detail.page';
function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/detail/' exact element={<Detail />} />

      </Routes>
      <Instagram />
      <Footer />
    <div className="App">
   <RouterPage />
    </div>
  );
}

export default App;
