import Link from 'next/link'

import styles from './styles.module.scss'

import deliveryMan from '../../assets/delivery/deliveryMan.svg'
import back from '../../assets/delivery/back.svg'
import meetin from '../../assets/delivery/meetin.svg'
import price from '../../assets/delivery/price.svg'

export default function DeliveryMain(){
    return(
        <div className={styles.cont}>
            <h1>Доставка та оплата</h1>
            <div>
                <div className={styles.item}>
                    <img src={deliveryMan} alt=''/>
                    <p>
                        Доставляємо з понеділка по четвер
                        з 11:00 до 23:00, та з п'ятниці 
                        по неділю 24/7. 
                    </p>
                    <span>
                        Доставка повністю безкоштовна. 
                    </span>
                </div>
                <div className={styles.item}>
                    <img src={meetin} alt=''/>
                    <p>
                        В межах міста мінімальне 
                        замовлення на доставку - 250 грн.
                    </p>
                    <p>
                        За межами міста 400 грн. (маються 
                        на увазі навколишні села).
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={back} alt=''/>
                    <p>
                    Час доставки складає від 29 хв. до 59 хв..
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={price} alt=''/>
                    <p>
                        Ви можете забрати піцу на 
                        самовиніс зі знижкою до 40%
                    </p>
                    <Link href='/'>
                        Деталі
                    </Link>
                </div>
            </div>
        </div>
    )
}