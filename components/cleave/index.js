import Link from 'next/link'
import CleaveItem from './cleaveItem'

import styles from './styles.module.scss'

import arrowR from '../../assets/cleaveImg/arrowR.svg'

export default function Cleave(){
    return(
        <div className={styles.absolCont}>
            <div className={styles.cleaveCont}>
                <div className={styles.cleaveList}>
                    <CleaveItem />
                    <CleaveItem />
                </div>
                <div className={styles.cliveInfo}>
                    <div>
                        <p>Сума замовлення:</p>
                        <p>260 грн</p>
                    </div>
                    <Link href='/order'>
                        <button>
                            <img src={arrowR} alt=''/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
