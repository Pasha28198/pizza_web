import { useState } from 'react'

import HeartSvg from '../../svgImg/heartSvg'
import HeartYelSvg from '../../svgImg/heartYelSvg'

import styles from './styles.module.scss'

import pizzaMob from '../../../assets/pizzaConstImg/pizzaMob.png'
import pizzaBig from '../../../assets/pizzaConstImg/pizzaBig.png'
import fast from '../../../assets/pizzaConstImg/fast.svg'

export default function PizzaMain(){

    const [isLike, setIsLike] = useState(false)

    return(
        <div className='container'>
            <div className={styles.mainCont}>
                <div className={styles.imgCont}>
                    <img src={pizzaMob} alt='pizza'/>
                    <img src={pizzaBig} alt='pizza'/>
                </div>
                <div className={styles.infoMainCont}>
                    <div className={styles.title}>
                        <h2>Маргарита</h2>
                        <p>250 гр</p>
                    </div>
                    <div className={styles.subtitle}>
                        <p>
                            Соус вершковий, сир моцарела, 
                            сир рокфор, сир пармезан, сир брі
                        </p>
                    </div>
                    <div className={styles.typeBtn}>
                        <button>Італійська</button>
                        <button>Американська</button>
                    </div>
                    <div className={styles.infoPizza}>
                        <h4>220 грн</h4>
                        <button>Замовити</button>
                        <div onClick={()=>setIsLike(!isLike)}>
                            {
                                isLike ?
                                <HeartYelSvg />
                                : <HeartSvg />
                            } 
                        </div>
                    </div>
                    <div className={styles.ingrid}>
                        Змінити інгрідієнти
                    </div>
                    <div className={styles.deliv}>
                        <img src={fast} alt='delivery'/>
                        <p>
                            Безкоштовна доставка при 
                            замовленні від 200 грн
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}