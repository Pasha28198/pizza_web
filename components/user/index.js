import OrderHistory from './orderHistory'
import styles from './styles.module.scss'
import UserInfo from './userlInfo'

export default function UserContent(){
    return(
        <div className={styles.userInfoCont}>
            <h1 className={styles.userTitle}>Особистий кабінет</h1>
            <div className={styles.serInfoCont}>
                <UserInfo />
                <OrderHistory />
            </div>
        </div>
    )
}
