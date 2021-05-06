import Link from 'next/link'

import PizzaSvg from '../../svgImg/pizzaSvg'
import SaladSvg from '../../svgImg/saladSvg'
import DrinksSvg from '../../svgImg/drinksSvg'

import styles from './styles.module.scss'

export default function Categories(){
    return(
        <div className={styles.categories}>
            <Link href='/'>
                <a>
                    <div className={styles.catItem}>
                        <div className={styles.imgCont1}>
                            <PizzaSvg />
                        </div>
                        <div>Піцци</div>
                    </div>
                </a>
            </Link>
            <Link href='/salad'>
                <a>
                    <div className={styles.catItem}>
                        <div className={styles.imgCont2}>
                            <SaladSvg />
                        </div>
                        <div>Салати</div>
                    </div>
                </a>
            </Link>
            <Link href='/drinks'>
                <a>
                    <div className={styles.catItem}>
                        <div className={styles.imgCont3}>
                            <DrinksSvg />
                        </div>                        
                        <div>Напої</div>
                    </div>
                </a>
            </Link>
        </div>
    )
}