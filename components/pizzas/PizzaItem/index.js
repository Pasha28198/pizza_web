import { useState } from 'react'

import HeartSvg from '../../svgImg/heartSvg'
import HeartYel from '../../svgImg/heartYelSvg'

import styles from './styles.module.scss'

import pizzaImg from '../../../assets/pizzaItemImg/pizza.png'
import pizzaImgDeck from '../../../assets/pizzaItemImg/pizzaDeck.png'


export default function PizzaItem(){

    const [isLike, setIsLike] = useState(false)

    return(
        <div className={styles.itemContainer}>
            <div className={styles.itemImg}>
                <img src={pizzaImg} alt='pizza'/>
                <img src={pizzaImgDeck} alt='pizza'/>
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemMainInfo}>
                    <div>
                        <h4>Маргарита </h4>
                        <p>250 гр</p>
                    </div>
                    <div onClick={()=>setIsLike(!isLike)} className={styles.svgCont}>
                        {isLike ? <HeartYel /> : <HeartSvg />}
                    </div>
                </div>
                <div className={styles.itemSubtitle}>
                    Соус вершковий, сир моцарела, сир рокфор, сир пармезан, сир брі...
                </div>
                <div className={styles.typeChoose}>
                    <button className={styles.btnType}>
                        Італійська
                    </button>
                    <button className={styles.btnType}>
                        Американська
                    </button>
                    <h4>220 грн</h4>
                    <button className={styles.btnSubmit}>
                        Замовити
                    </button>
                </div>
                <div className={styles.addIng}>
                    <div>+ Додати інгрідієнти</div>
                </div>
            </div>
        </div>
    )
}