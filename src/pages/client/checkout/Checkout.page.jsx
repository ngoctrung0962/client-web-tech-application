
import {Fragment} from 'react';
import axios from 'axios';

import Footer from "../../../components/footer/Footer.component";
import Header from "../../../components/header/Header.component";
import Instagram from "../../../components/instagram/Instagram.component";
import OffCanvasMenu from "../../../components/offCanvasMenu/OffCanvasMenu.component";
import Preloder from "../../../components/proloder/Preloder.component";
import BreadCrump from "../../../components/session/breadcrump/BreadCrump.component";
import CheckOut from "../../../components/session/checkout/CheckOut.component"

function Checkout(){
    return (
        <Fragment>
           
            <OffCanvasMenu />
            <Header />
            <BreadCrump />
            <CheckOut />
            <Instagram />
            <Footer />
        </Fragment>
    )
}

export default Checkout;