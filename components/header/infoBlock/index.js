import styles from './styles.module.scss'

export default function InfoBlock(){
    return(
        <div className={styles.infoCont}>
            <div className={styles.tel}>
                +38 (066) 04 38 795
            </div>
            <div className={styles.schedule}>
                <span>Без вихідних</span>
                <span>з 11:00 до 23:00</span>
            </div>
        </div>
    )
}