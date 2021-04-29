import styles from './styles.module.scss'

export default function InfoBlock(){
    return(
        <div className={styles.infoCont}>
            <div className={styles.tel}>
                +38 (067) 63 71 444
            </div>
            <div className={styles.schedule}>
                <span>Щодня з 10:00 до 21:00</span>
                <span>Пт - Нд: з 10:00 до 22:00</span>
            </div>
        </div>
    )
}