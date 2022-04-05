import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-2">
                        <div className="header__logo">
                            <NavLink to="./index.html"><img src="img/logo.png" alt="" /></NavLink>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <nav className="header__menu">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="./shop.html">Laptop</NavLink></li>
                                <li><NavLink to="./shop.html">Mobile</NavLink></li>
                                <li><NavLink to="/detail">Shop</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__right">
                            <div className="header__right__auth">
                                <NavLink to="#">Login</NavLink>
                                <NavLink to="#">Register</NavLink>
                            </div>
                            <ul className="header__right__widget">
                                <li><span className="icon_search search-switch" /></li>
                                <li><NavLink to="/shop-cart.html"><span className="icon_bag_alt" />
                                    <div className="tip">2</div>
                                </NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="canvas__open">
                    <i className="fa fa-bars" />
                </div>
            </div>
        </header>
    )
}

export default Header;