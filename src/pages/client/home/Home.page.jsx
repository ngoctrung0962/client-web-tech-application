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
        <div>
            <meta charSet="UTF-8" />
            <meta name="description" content="Ashion Template" />
            <meta name="keywords" content="Ashion, unica, creative, html" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Ashion | Template</title>
            {/* Google Font */}
            <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
            {/* Css Styles */}
            <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
            <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
            <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
            <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css" />
            <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
            <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
            <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
            <link rel="stylesheet" href="css/style.css" type="text/css" />
            {/* Page Preloder */}
            <Preloder />
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
        </div>
    )
}

export default Home;