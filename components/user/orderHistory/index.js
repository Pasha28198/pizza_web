import LikedItem from '../../likedItem'
import LikedEmpty from '../../likedItemEmpty'

import styles from './styles.module.scss'

export default function OrderHistory(){
    return(
        <div className={styles.userInfoCont}>
            <h4>Вподобана їжа:</h4>
            <div className={styles.info}>
                <LikedItem />
                <LikedItem />
                <LikedItem />
                <LikedItem />
                {/* <LikedEmpty /> */}
            </div>
        </div>
    )
}