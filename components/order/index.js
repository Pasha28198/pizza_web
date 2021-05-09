import Ordering from './ordering'
import OrderList from './orderList'

import styles from './styles.module.scss'

export default function Order(){
    return(
        <div className={styles.cont}>
            <OrderList />
            <Ordering />
        </div>
    )
}