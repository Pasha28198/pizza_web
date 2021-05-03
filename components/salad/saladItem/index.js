import styles from './styles.module.scss'

import HeartSvg from '../../svgImg/heartSvg'
import saladMob from '../../../assets/saladItemImg/saladMob.png'
import salad from '../../../assets/saladItemImg/salad.png'

export default function SaladItem(){
    return(
        <div className={styles.saladCont}>
            <div className={styles.imgCont}>
                <img src={saladMob}  alt='salad'/>
                <img src={salad}  alt='salad'/>
            </div>
            <div className={styles.saladInfo}>
                <div className={styles.infoSup}>
                    <div>
                        <h4>Маргарита </h4>
                        <p>250 гр</p>
                    </div>
                    <div>
                        <HeartSvg />
                    </div>
                </div>
                <p>
                    Соус вершковий, сир моцарела, 
                    сир рокфор, сир пармезан, сир брі...
                </p>
                <div className={styles.infoSub}>
                    <h4>220 грн</h4>
                    <button>Замовити</button>
                </div>
            </div>
        </div>
    )
}