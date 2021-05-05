import HeartYel from '../svgImg/heartYelSvg'

import styles from './styles.module.scss'

import imgMob from '../../assets/likedItem/imgMob.png';
import imgBig from '../../assets/likedItem/imgBig.png';

export default function LikedItem(){
    return(
        <div className={styles.likedCont}>
            <div className={styles.imgCont}>
                <img src={imgMob} alt='food'/>
                <img src={imgBig} alt='food'/>
                <div className={styles.infoCont}>
                    <h5>Салат</h5>
                    <p>250 гр</p>
                    <p>
                        Соус вершковий, сир моцарела, 
                        сир рокфор, сир пармезан, сир брі...
                    </p>
                </div>
            </div>
            
            <div className={styles.prise}>
                <HeartYel />
                <h5>220 грн</h5>
            </div>
        </div>
    )
}