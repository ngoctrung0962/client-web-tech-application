import { Link } from "react-router-dom";

function Banner() {
  return (
    <section
      className="banner set-bg"
      data-setbg="img/banner/banner-4.jpg"
      style={{
        backgroundImage: `url("img/banner/banner-4.jpg") `,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 m-auto">
            <div className="banner__slider owl-carousel">
              <div className="banner__item">
                <div className="banner__text">
                  <span className="Banner_Slider">The Best Choose</span>
                  <h1 className="Banner_Slider">Shop Tech</h1>
                  <a className="Banner_Slider" href="./shop.html">
                    Shop now
                  </a>
                </div>
              </div>
              <div className="banner__item">
                <div className="banner__text">
                  <span className="Banner_Slider">The Best Choose</span>
                  <h1 className="Banner_Slider">Shop Tech</h1>
                  <Link className="Banner_Slider" to="/shop">
                    Shop now
                  </Link>
                </div>
              </div>
              <div className="banner__item">
                <div className="banner__text">
                  <span className="Banner_Slider">The Chloe Collection</span>
                  <h1 className="Banner_Slider">The Project Jacket</h1>
                  <a className="Banner_Slider" href="./shop.html">
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
