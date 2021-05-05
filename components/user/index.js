import OrderHistory from './orderHistory'
import styles from './styles.module.scss'
import UserInfo from './userlInfo'

export default function UserContent(){
    return(
        <div className={styles.userInfoCont}>
            <h4 className={styles.userTitle}>Особистий кабінет</h4>
            <div className={styles.serInfoCont}>
                <UserInfo />
                <OrderHistory />
            </div>
        </div>
    )
}
