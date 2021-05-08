import Slider from "react-slick";
import PizzaSlide from "../pizzaSlide";
import { NextArrow, PrewArrow } from "./arrow";

import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderPizzas(){
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 11,
        slidesToScroll: 11,
        responsive: [
            {
              breakpoint: 5440,
              settings: {
                slidesToShow: 11,
                slidesToScroll: 4,
                nextArrow: <NextArrow />,
                prevArrow: <PrewArrow />,
              }
            },
            {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 9,
                  slidesToScroll: 4,
                }
              },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3
              }
            }
          ]
    }
    
    return(
        <div className={styles.slider}>
            <div className={styles.sliderCont}>
                <Slider {...settings}>
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                    <PizzaSlide />
                </Slider>
            </div>
        </div>
    )
}