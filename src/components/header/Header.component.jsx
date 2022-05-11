import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuItem } from "@material-ui/core"
import { useState } from 'react';
import { Logout } from '../../redux/userRedux';
function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
  }
  const handlelogout = () => {
    dispatch(Logout());
  }



  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-2">
            <div className="header__logo">
              <Link to="/">
                <img src={require('../header/logo.png')} onClick={(e) => { window.scrollTo(0, 0) }} alt="true" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <nav className="header__menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__right">
              <div className="header__right__auth">
                {user ? "" : <Link to="/signin">Login</Link>}
                {user ? "" : <Link to="/signup">Register</Link>}


              </div>
              <ul className="header__right__widget">
                <li>
                  <span className="icon_search search-switch" />
                </li>
                <li>
                  <Link to="/cart">
                    <span className="icon_bag_alt" />
                    <div className="tip">2</div>
                  </Link>
                </li>

                <li>
                  {user ? (<div><AccountCircleIcon onClick={handleMenuClick} fontSize='medium' style={{ marginBottom: "5px" }}></AccountCircleIcon>
                    <Menu
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      getContentAnchorEl={undefined}
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}

                    >
                      <Link to="/account/detail" >
                        <MenuItem style={{ color: "black" }}>My account</MenuItem>
                      </Link>

                      <MenuItem onClick={handlelogout}>Logout</MenuItem>
                    </Menu>
                  </div>) : ""}
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="canvas__open">
          <i className="fa fa-bars" />
        </div>
      </div>
    </header>
  );
}

export default Header;
