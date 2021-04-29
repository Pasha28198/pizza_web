import styles from './styles.module.scss'

export default function OrderHistory(){
    return(
        <div className={styles.userInfoCont}>
            <h4>Історія замовлень:</h4>
            <div className={styles.info}>
                <div>
                    <p>Імя:</p>
                    <p>Джон Сноу</p>
                </div>
                <div>
                    <p>Прізвище:</p>
                    <p>Джон Сноу</p>
                </div>
                <div>
                    <p>Телефон:</p>
                    <p>+38 (050) 582 34 08</p>
                </div>
                <div>
                    <p>Пошта:</p>
                    <p>example@gmail.com</p>
                </div>
                <div>
                    <p>Адреса:</p>
                    <p>Вул. Дегтярівська, 5б, кв. 7</p>
                </div>
            </div>
        </div>
    )
}