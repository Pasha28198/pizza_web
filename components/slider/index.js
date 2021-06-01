import Slider from "react-slick";

import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SliderComponent(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return(
        <div className='container'>
            <div className={styles.sliderContainer}>
                <Slider {...settings}>
                    <div className={styles.sliderElement}>
                        <div className={styles.sliderImgMob} />
                        <div className={styles.bigSlider1} />
                    </div>
                    <div className={styles.sliderElement}>
                        <div className={styles.sliderImgMob} />
                        <div className={styles.bigSlider2} />
                    </div>
                    <div className={styles.sliderElement}>
                        <div className={styles.sliderImgMob} />
                        <div className={styles.bigSlider3} />
                    </div>
                    <div className={styles.sliderElement}>
                        <div className={styles.sliderImgMob} />
                        <div className={styles.bigSlider4} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}