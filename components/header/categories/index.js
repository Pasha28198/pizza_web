import styles from './styles.module.scss'

import water from '../../../assets/headerIcons/water.svg'
import pizza from '../../../assets/headerIcons/pizza.svg'
import salad from '../../../assets/headerIcons/salad.svg'

export default function Categories(){
    return(
        <div className={styles.categories}>
            <div className={styles.catItem}>
                <div className={styles.imgCont1}>
                    <img src={pizza} alt=''/>
                </div>
                <div>Піцци</div>
            </div>
            <div className={styles.catItem}>
                <div className={styles.imgCont2}>
                    <img src={salad} alt=''/>
                </div>
                <div>Салати</div>
            </div>
            <div className={styles.catItem}>
                <div className={styles.imgCont3}>
                    <img src={water} alt=''/>
                </div>                        
                <div>Напої</div>
            </div>
        </div>
    )
}