import "./HeroSection.scss";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { useGetPostsQuery } from "../../store/reducer/postSlice";
import { encode } from "html-entities";
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
  const { data } = useGetPostsQuery();
  return (
    <div className="hero-section">
      <div className="container">
        <Slider {...settings}>
          {data?.map((post, index) => {
            if (index < 5) {
              return (
                <a className="item" href={`post/${post.id}`} key={post.id}>
                  {/* <img alt={`${post.id}`} /> */}
                  <div
                    className="text"
                    style={{
                      backgroundImage: `url(${post.featured_image_src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center ",
                    }}
                  >
                    <h4
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    ></h4>
                  </div>
                </a>
              );
            }
          })}
          {/* <a className="item" href='#'>
                        <img src="./images/hero.jpg" alt="hero" />
                        <div className="text">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex id molestiae?</p>
                        </div>
                    </a> */}
          {/* <a className="item" href='#'>
                        <img src="./images/hero.jpg" alt="hero" />
                        <div className="text">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex id molestiae?</p>
                        </div>
                    </a>
                    <a className="item" href='#'>
                        <img src="./images/hero.jpg" alt="hero" />
                        <div className="text">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex id molestiae?</p>
                        </div>
                    </a>
                    <a className="item" href='#'>
                        <img src="./images/hero.jpg" alt="hero" />
                        <div className="text">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex id molestiae?</p>
                        </div>
                    </a> */}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
