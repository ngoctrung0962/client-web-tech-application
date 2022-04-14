
import './App.css';
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import Instagram from './components/instagram/Instagram.component';

import Home from './pages/client/home/Home.page';
import Contact from './pages/client/contact/Contact.page';
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/client/detail/Detail.page';
import SignUp from './pages/authentication/signup/SignUp.page';
import Shop from './pages/client/shop/Shop.page';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/detail/' exact element={<Detail />} />
        <Route path='/signup' exact element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
