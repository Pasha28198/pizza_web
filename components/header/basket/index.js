import {useContext} from 'react'
import Cleave from '../../cleave'

import styles from './styles.module.scss'

import basket from '../../../assets/headerIcons/basket.svg'
import {BasketStoreInstanceCTX} from "../../../stores/basket_store";
import {observer} from "mobx-react";

 const  Basket = observer(() =>{
    const {productsCount} = useContext(BasketStoreInstanceCTX)

    return(
        <div className={styles.busketCont}>
            <div className={styles.basket}>
                <div className={styles.counterBasket}>
                    {productsCount}
                </div>
                <img src={basket} alt=''/>
                <Cleave />
            </div>
            <button className={styles.btn}>
               Замовити
            </button> 
        </div>
    )
})

export default Basket;