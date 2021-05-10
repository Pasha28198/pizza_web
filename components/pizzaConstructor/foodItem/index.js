import { useState } from 'react'

import styles from './styles.module.scss'

import chicken from '../../../assets/constModal/chicken.png'
import deleteImg from '../../../assets/constModal/deleteRed.svg'
import plusImg from '../../../assets/constModal/plus.svg'
import minusImg from '../../../assets/constModal/minus.svg'
import good from '../../../assets/constModal/good.svg'
import PlusSvg from '../../svgImg/plus'

export default function FoodItem(){

    const [counter, setCounter] = useState(1)

    const plus = () => {
        setCounter(counter+1)
    }
    const minus = () => {
        setCounter(counter-1)
    }
    return(
        <div className={styles.itemCont}>
            <div className={styles.backdrop}></div>
            <div className={styles.complete}>
                <img src={good} alt=''/>
            </div>
            <img src={chicken} alt=''/>
            <div className={styles.desc}>
                <h6>Курка</h6>
                <p>50гр/40 грн</p>
            </div>
            {
                counter
                ?   <div className={styles.delete}>
                        <img src={deleteImg} alt=''/>
                    </div>
                : null
            }
           {
               counter
               ? <div className={styles.changeCount}>
                    <div className={styles.changeInner}>
                        <div onClick={()=>minus()}><img src={minusImg} alt=''/></div>
                        <p>{counter}</p>        
                        <div onClick={()=>plus()}><PlusSvg /></div>
                    </div>
                </div>
           : <div 
                className={styles.plusOnly}
                onClick={()=>plus()}>
                    <PlusSvg />
            </div>
           }
           
        </div>
    )
}