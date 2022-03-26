import "../../../components/header/Header.component"
import Footer from "../../../components/footer/Footer.component";
import Header from "../../../components/header/Header.component";
import Instagram from "../../../components/instagram/Instagram.component";
import OffCanvasMenu from "../../../components/offCanvasMenu/OffCanvasMenu.component";
import Preloder from "../../../components/proloder/Preloder.component";
import Search from "../../../components/search/Search.component";
import BreadCrump from "../../../components/session/breadcrump/BreadCrump.component";
import ShopCart from "../../../components/session/shopcart/ShopCart.component";
import {Fragment} from "react"
function Cart(){
    return(
        <Fragment>
            <OffCanvasMenu />
            <Header />
            <BreadCrump />
            <ShopCart />
            <Instagram />
            <Footer />
        
        </Fragment>
        
    )
}

export default Cart;