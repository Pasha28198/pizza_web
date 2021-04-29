import styles from './styles.module.scss'

import pizzaImg from '../../../assets/pizzaItemImg/pizza.png'
import pizzaImgDeck from '../../../assets/pizzaItemImg/pizzaDeck.png'
import heart from '../../../assets/pizzaItemImg/Heart.svg'

export default function PizzaItem(){
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
                    <div>
                        <img src={heart} alt='like'/>
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