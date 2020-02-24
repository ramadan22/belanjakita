import React, { Component } from 'react';
import '../../assets/css/BannerStyle.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';

class BannerComponent extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="banner-component">
                <Slider {...settings}>
                    <div>
                        <img src={ Banner1 } alt="Banner 1" />
                    </div>
                    <div>
                        <img src={ Banner2 } alt="Banner 2" />
                    </div>
                </Slider>
            </div>
        )
    }
}

export default BannerComponent;