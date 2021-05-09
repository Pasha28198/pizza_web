import Link from 'next/link'

import imgMob from '../../../assets/pizzaConstImg/slideMob.png'
import imgBig from '../../../assets/pizzaConstImg/slideBig.png'

import styles from './styles.module.scss'

export default function PizzaSlide(){
    return(
        <Link href='/pizzaConstructor/10'>
            <div className={styles.slideCont}>
                <img src={imgMob} alt=''/>
                <img src={imgBig} alt=''/>
                <p>Теріяки</p>
            </div>
        </Link>
    )
}