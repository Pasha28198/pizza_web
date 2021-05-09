import styles from './styles.module.scss'

import close from '../../../assets/constModal/close.svg'
import FoodItem from '../foodItem'

export default function ModalConst({modalHandler}){

    return(
        <div className={styles.modalCont}>
            <div className={styles.header}>
                <h4>Піца “Маргарита”</h4>
                <img onClick={(e)=>modalHandler(e)} src={close} alt=''/>
            </div>
            <div className={styles.content}>
                <div>
                    <h6>Інгрідієнти</h6>
                    <div className={styles.itemsCont}>
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                    </div>
                </div>
                <div>
                    <h6>Додати інші інгрідієнти</h6>
                    <div className={styles.itemsContAdd}>
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                        <FoodItem />
                    </div>
                </div>
            </div>
            <div className={styles.modalFooter}>
                <h5>220 грн</h5>
                <button>
                    Додати в кошик
                </button>
            </div>
        </div>
    )
}