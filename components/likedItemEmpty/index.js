import Link from 'next/link'
import pizza from '../../assets/likedItem/pizzaSlice.svg'

import styles from './styles.module.scss'

export default function LikedEmpty(){
    return(
        <div className={styles.cont}>
            <img src={pizza} alt='pizza'/>
            <p>Ви ще не додали вподобану їжу</p>
            <Link href='/'>
                Перейти в меню
            </Link>
        </div>
    )
}