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
                    <button>
                        <img src={arrowR} alt=''/>
                    </button>
                </div>
            </div>
        </div>
    )
}
