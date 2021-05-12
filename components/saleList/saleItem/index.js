import Link from 'next/link'

import styles from './styles.module.scss'

import saleBig from '../../../assets/sale/saleBig.png'

export default function SaleItem(){
    return(
        <div className={styles.cont}>
            <h2>01.06</h2>
            <div className={styles.imgCont}>
                <img src={saleBig} alt='sale'/>
            </div>
            <div className={styles.info}>
                <p>Термін дії: 20.10 - 06.12</p>
                <Link href='/saleItem/12'>
                    <button>Детальніше</button>
                </Link>
            </div>
        </div>
    )
} 