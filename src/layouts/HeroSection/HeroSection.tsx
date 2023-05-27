import "./HeroSection.scss";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 2000,
};

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <Slider {...settings}>
          <div className="item">
            <div
              style={{
                backgroundImage: `url(images/slide2.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "180px",
                height: "500px",
              }}
            ></div>
          </div>
          <div className="item">
            <div
              style={{
                backgroundImage: `url(images/slide1.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                minHeight: "180px",
                height: "500px",
              }}
            ></div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
