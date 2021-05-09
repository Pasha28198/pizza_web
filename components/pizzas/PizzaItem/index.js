import { useState } from 'react'
import Link from 'next/link'

import HeartSvg from '../../svgImg/heartSvg'
import HeartYel from '../../svgImg/heartYelSvg'

import styles from './styles.module.scss'

import pizzaImg from '../../../assets/pizzaItemImg/pizza.png'
import pizzaImgDeck from '../../../assets/pizzaItemImg/pizzaDeck.png'


export default function PizzaItem(){

    const [isLike, setIsLike] = useState(false)

    const likeHandler = (e) => {
        e.stopPropagation()
        setIsLike(!isLike)
    }

    return(
        <Link href='/pizzaConstructor/12' >
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
                        <div 
                            onClick={(e)=>likeHandler(e)} 
                            className={styles.svgCont}
                        >
                            {isLike ? <HeartYel /> : <HeartSvg />}
                        </div>
                    </div>
                    <div className={styles.itemSubtitle}>
                        Соус вершковий, сир моцарела, сир рокфор, сир пармезан, сир брі...
                    </div>
                    <div className={styles.typeChoose}>
                        <button
                            onClick={(e)=>e.stopPropagation()}
                            className={styles.btnType}
                        >
                            Італійська
                        </button>
                        <button 
                            onClick={(e)=>e.stopPropagation()}
                            className={styles.btnType}
                        >
                            Американська
                        </button>
                        <h4>220 грн</h4>
                        <button 
                            onClick={(e)=>e.stopPropagation()}
                            className={styles.btnSubmit}
                        >
                            Замовити
                        </button>
                    </div>
                    <div className={styles.addIng}>
                        <div>+ Додати інгрідієнти</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}