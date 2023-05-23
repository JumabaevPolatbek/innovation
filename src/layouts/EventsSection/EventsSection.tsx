import Event from '../../components/Event';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './EventsSection.scss';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
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


const EventsSection = () => {
    return (
        <div className='events container'>
            <h2 className="title">Upcoming Event</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum.</p>
            <div className="wrapper">
                <Slider {...settings}>
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                </Slider>
            </div>
        </div>
    )
}

export default EventsSection;