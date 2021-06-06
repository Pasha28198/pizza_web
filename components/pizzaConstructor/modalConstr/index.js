import styles from './styles.module.scss'

import close from '../../../assets/constModal/close.svg'
import FoodItem from '../foodItem'
import {useContext, useEffect} from "react";
import {BasketStoreInstanceCTX} from "../../../stores/basket_store";
import {observer} from "mobx-react";

 const  ModalConst =observer(({modalHandler, product, choiseActive})=>{
    const {getIngredients, ingredients} = useContext(BasketStoreInstanceCTX)
    useEffect(()=>{getIngredients()},[])
     console.log(product)
    return(
        <div className={styles.modalCont}>
            <div className={styles.header}>
                <h4>Піца {product?.title}</h4>
                <img onClick={(e)=>modalHandler(e)} src={close} alt=''/>
            </div>
            <div className={styles.content}>
                <div>
                    <h6>Інгрідієнти</h6>
                    <div className={styles.itemsCont}>
                        {product.ingredients.map((item)=>{
                            return  <FoodItem count={item.count} ingredient={item.ingredient}/>
                        })}
                    </div>
                </div>
                <div>
                    <h6>Додати інші інгрідієнти</h6>
                    <div className={styles.itemsContAdd}>
                        {ingredients.map((item)=>{
                            return  <FoodItem ingredient={item}/>
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.modalFooter}>
                <h5>{choiseActive.price} грн</h5>
                <button>
                    Додати в кошик
                </button>
            </div>
        </div>
    )
})

export default ModalConst