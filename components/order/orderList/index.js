import {useContext} from 'react'
import OrderItem from '../orderItem'
import styles from './styles.module.scss'
import {BasketStoreInstanceCTX} from "../../../stores/basket_store";
import CleaveItem from "../../cleave/cleaveItem";
import {observer} from "mobx-react";

const OrderList = observer(() => {
    const {basketArray, increaseCount, decreaseCount, deleteProduct, basketPrice} = useContext(BasketStoreInstanceCTX)
    return (
        <div className={styles.cont}>
            <h3>Ваше замовлення</h3>
            <div className={styles.listCont}>
                <div className={styles.listContInner}>
                    {basketArray.map((item) => {
                        return <OrderItem
                            key={item.product._id}
                            deleteProduct={() => deleteProduct(item.product._id)}
                            increaseCount={() => increaseCount(item.product._id)}
                            decreaseCount={() => decreaseCount(item.product._id)}
                            item={item}
                        />
                    })}
                </div>
            </div>
            <div className={styles.total}>
                Всього: <p>{basketPrice()} грн</p>
            </div>
        </div>
    )
})

export default OrderList