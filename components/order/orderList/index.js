import OrderItem from '../orderItem'
import styles from './styles.module.scss'

export default function OrderList(){
    return(
        <div className={styles.cont}>
            <h3>Ваше замовлення</h3>
            <div className={styles.listCont}>
                <div className={styles.listContInner}>
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
            <div className={styles.total}>
                        Всього: <p>660 грн</p>
            </div>
        </div>
    )
}