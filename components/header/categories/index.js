import Link from 'next/link'
import styles from './styles.module.scss'

import water from '../../../assets/headerIcons/water.svg'
import pizza from '../../../assets/headerIcons/pizza.svg'
import salad from '../../../assets/headerIcons/salad.svg'

export default function Categories(){
    return(
        <div className={styles.categories}>
            <Link href='/'>
                <a>
                    <div className={styles.catItem}>
                        <div className={styles.imgCont1}>
                            <img src={pizza} alt=''/>
                        </div>
                        <div>Піцци</div>
                    </div>
                </a>
            </Link>
            <Link href='/salad'>
                <a>
                    <div className={styles.catItem}>
                        <div className={styles.imgCont2}>
                            <img src={salad} alt=''/>
                        </div>
                        <div>Салати</div>
                    </div>
                </a>
            </Link>
            <Link href='/drinks'>
                <a>
                    <div className={styles.catItem}>
                        <div className={styles.imgCont3}>
                            <img src={water} alt=''/>
                        </div>                        
                        <div>Напої</div>
                    </div>
                </a>
            </Link>
        </div>
    )
}