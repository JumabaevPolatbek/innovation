import './Testimonials.scss';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Testimony from '../../components/Testimony';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    speed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            }
        }
    ]
};

const Testimonials = () => {
    return (
        <div className='testimonials-section container'>
            <h3 className="title">What Our Students Say</h3>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet.</p>
            <div className="wrapper">
                <Slider {...settings}>
                    <Testimony />
                    <Testimony />
                    <Testimony />
                    <Testimony />
                    <Testimony />
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials;