import { Fragment } from "react";
import Footer from "../../../components/footer/Footer.component";
import Header from "../../../components/header/Header.component";
import Instagram from "../../../components/instagram/Instagram.component";
import OffCanvasMenu from "../../../components/offCanvasMenu/OffCanvasMenu.component";
import Preloder from "../../../components/proloder/Preloder.component";
import Search from "../../../components/search/Search.component";
import Banner from "../../../components/session/banner/Banner.component";
import Categories from "../../../components/session/categories/Categories.component";
import Discount from "../../../components/session/discount/Discount.component";
import Services from "../../../components/session/services/Services.component";
import Trend from "../../../components/session/trend/Trend.component";

function Home() {
    return (
        <Fragment>

            {
            /* Page Preloder */
               
            }
             
            
            {/* Offcanvas Menu Begin */}
            <OffCanvasMenu />
            {/* Offcanvas Menu End */}
            {/* Header Section Begin */}
            <Header />
            {/* Header Section End */}
            {/* Categories Section Begin */}
            {/* Categories Section End */}
            {/* Product Section Begin */}
            <Categories />
            {/* Product Section End */}
            {/* Banner Section Begin */}
            <Banner />
            {/* Banner Section End */}
            {/* Trend Section Begin */}
            <Trend />
            {/* Trend Section End */}
            {/* Discount Section Begin */}
            <Discount />
            {/* Discount Section End */}
            {/* Services Section Begin */}
            <Services />
            {/* Services Section End */}
            {/* Instagram Begin */}
            <Instagram />
            {/* Instagram End */}
            {/* Footer Section Begin */}
            <Footer />
            {/* Footer Section End */}
            {/* Search Begin */}
            <Search />
            {/* Search End */}
            {/* Js Plugins */}
        </Fragment>
    )
}

export default Home;