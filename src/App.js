
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import Instagram from './components/instagram/Instagram.component';

import Home from './pages/client/home/Home.page';
import Contact from './pages/client/contact/Contact.page';
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/client/detail/Detail.page';
import { useState } from 'react';
import LoginForm from './components/login/LoginForm';
function App() {
  const userSample = {
    username: "trung",
    password: "123"
  }

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const login = detail => {
    if (detail.username === userSample.username && detail.password === userSample.password) {
      console.log("Login success");
      setUser({
        username: detail.username,
        password: detail.password
      });
      setError("");
    }
    else {
      console.log("Login fail")
      setError("Username and password do not match")

    }
  }
  const logout = () => {
    setUser({ username: "", password: "" })
  }
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/login' exact element={<LoginForm Login={login} error={error} />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/detail/' exact element={<Detail />} />
      </Routes>
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
