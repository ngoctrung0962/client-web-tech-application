
import './App.css';

import Home from './pages/client/home/Home.page';
import Contact from './pages/client/contact/Contact.page';
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/client/detail/Detail.page';
import SignUp from './pages/authentication/signup/SignUp.page';
import Shop from './pages/client/shop/Shop.page';
import SignIn from './pages/authentication/signin/SignIn.page';
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";


function App() {

  const user = useSelector((state) => state.user.currentUser);
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/product/:id' exact element={<Detail />} />

        <Route
          path="/signin"

          element={user ? <Navigate to="/" replace /> : <SignIn />}
        />
        <Route
          path="/signup"

          element={user ? <Navigate to="/" replace /> : <SignUp />}
        />
      </Routes>

    </div>
  );
}

export default App;
