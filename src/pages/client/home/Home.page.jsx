import { Fragment } from "react";
import Footer from "../../../components/footer/Footer.component";
import Instagram from "../../../components/instagram/Instagram.component";
import Banner from "../../../components/session/banner/Banner.component";
import Categories from "../../../components/session/categories/Categories.component";
function Home() {
    return (
        <>
            <Categories />
            <Banner />
        </>

    )
import OffCanvasMenu from "../../../components/offCanvasMenu/OffCanvasMenu.component";
import Banner from "../../../components/session/banner/Banner.component";
import Categories from "../../../components/session/categories/Categories.component";
import Discount from "../../../components/session/discount/Discount.component";
import Services from "../../../components/session/services/Services.component";
import Trend from "../../../components/session/trend/Trend.component";
import Product from "../../../components/session/product/product.component";

function Home() {
  return (
    <Fragment>
      <OffCanvasMenu />
      <Header />
      <Categories />
      <Product />
      <Banner />
      <Trend />
      <Discount />
      <Services />
      <Instagram />
      <Footer />
    </Fragment>
  );
}

export default Home;
