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
                        const productId = item.product.choise._id
                        return <OrderItem
                            key={productId}
                            deleteProduct={() => deleteProduct(productId)}
                            increaseCount={() => increaseCount(productId)}
                            decreaseCount={() => decreaseCount(productId)}
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