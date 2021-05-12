import Link from 'next/link'

import styles from './styles.module.scss'

import saleImg from '../../assets/sale/saleSuper.png'
import arr from '../../assets/sale/arr.svg'

export default function SaleCurrent(){
    return(
        <div className={styles.item}>
            <h1>
                Акція “При першому замовлені -100 в чеку”
            </h1>
            <div className={styles.imgCont}>
                <img src={saleImg} alt='sale'/>
            </div>
            <p>
                Щопонеділка з 10:00 до 2:00 шукай 
                піцу з позначкою подарунок та 
                отримуй пінцу Суперм’ясну або 
                Гавайську у подарунок*!
            </p>
            <p>
                *Під подарунком мається на увазі
                можливість придбати пінцу за 1 грн.
            </p>
            <Link href='/sale'>
                <div className={styles.linkCont}>
                    <img src={arr} alt=''/>
                    Назад до акцій
                </div>
            </Link>
        </div>
    )
}