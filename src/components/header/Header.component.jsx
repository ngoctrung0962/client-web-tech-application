import { useRef, Fragment} from 'react'

import Search from "../../components/search/Search.component"

function Header() {

  const status = useRef();
  const handleSearchInput = () => {
    status.current.style.display = "block";
    console.log("started");
  }

    return (
      <Fragment>
        <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <a href="./index.html"><img src="img/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li><a href="./index.html">Home</a></li>
                  <li><a href="./shop.html">Laptop</a></li>
                  <li><a href="./shop.html">Mobile</a></li>
                  <li><a href="./shop.html">Shop</a></li>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  <a href="#">Login</a>
                  <a href="#">Register</a>
                </div>
                <ul className="header__right__widget">
                  <li onClick={handleSearchInput}><span className="icon_search search-switch" /></li>
                  <li><a href="/shop-cart.html"><span className="icon_bag_alt" />
                      <div className="tip">2</div>
                    </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
      <Search ref ={status} />
      </Fragment>
    )
}

export default Header;