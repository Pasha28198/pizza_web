import { useState } from 'react'

import HeartYel from '../../svgImg/heartYelSvg'
import HeartSvg from '../../svgImg/heartSvg'

import styles from './styles.module.scss'

import drinksMob from '../../../assets/drinkItemImg/drinkImg.png'
import drinks from '../../../assets/drinkItemImg/drinkImgBig.png'

export default function DrinkItem(){

    const [isLike, setIsLike] = useState(false)

    return(
        <div className={styles.drinksCont}>
            <div className={styles.imgCont}>
                <img src={drinksMob}  alt='drink'/>
                <img src={drinks}  alt='drink'/>
            </div>
            <div className={styles.drinksInfo}>
                <div className={styles.infoSup}>
                    <div>
                        <h4>Напій  </h4>
                    </div>
                    <div onClick={()=>setIsLike(!isLike)} className={styles.svgCont}>
                        {isLike ? <HeartYel /> : <HeartSvg />}
                    </div>
                </div>
                <p>
                    Соус вершковий, сир моцарела, 
                    сир рокфор, сир пармезан, сир брі...
                </p>
                <div className={styles.volumeBtn}>
                    <button>0,33</button>
                    <button>0,5</button>
                    <button>1л</button>
                </div>
                <div className={styles.infoSub}>
                    <h4>20 грн</h4>
                    <button>Замовити</button>
                </div>
            </div>
        </div>
    )
}