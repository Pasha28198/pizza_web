import Cleave from '../../cleave'

import styles from './styles.module.scss'

import basket from '../../../assets/headerIcons/basket.svg'

export default function Basket(){
    return(
        <div className={styles.busketCont}>
            <div className={styles.basket}>
                <div className={styles.counterBasket}>
                    0
                </div>
                <img src={basket} alt=''/>
                <Cleave />
            </div>
            <button className={styles.btn}>
               Замовити
            </button> 
        </div>
    )
}