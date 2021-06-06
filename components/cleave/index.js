import {useContext, useState, useEffect} from 'react'
import Link from 'next/link'
import CleaveItem from './cleaveItem'

import styles from './styles.module.scss'

import arrowR from '../../assets/cleaveImg/arrowR.svg'
import {BasketStoreInstanceCTX} from "../../stores/basket_store";
import {observer} from "mobx-react";


 const Cleave = observer(() =>{
    const {basketArray, increaseCount, decreaseCount, deleteProduct, basketPrice} = useContext(BasketStoreInstanceCTX)


    return(
        <div className={styles.absolCont}>
            <div className={styles.cleaveCont}>
                <div className={styles.cleaveList}>
                    {basketArray.map((item)=>{
                        return  <CleaveItem

                            deleteProduct={() => deleteProduct(item.product._id)}
                            increaseCount={() => increaseCount(item.product._id)}
                            decreaseCount={() => decreaseCount(item.product._id)}
                            item={item}
                        />
                    })}
                </div>
                <div className={styles.cliveInfo}>
                    <div>
                        <p>Сума замовлення:</p>
                        <p>{basketPrice()} грн</p>
                    </div>
                    <Link href='/order'>
                        <button>
                            <img src={arrowR} alt=''/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
})

export default Cleave;

