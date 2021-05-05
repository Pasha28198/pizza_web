import LikedItem from '../../likedItem'
import styles from './styles.module.scss'

export default function OrderHistory(){
    return(
        <div className={styles.userInfoCont}>
            <h4>Історія замовлень:</h4>
            <div className={styles.info}>
                <LikedItem />
                <LikedItem />
                <LikedItem />
                <LikedItem />
            </div>
        </div>
    )
}