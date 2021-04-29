import styles from './styles.module.scss'

import pen from '../../../assets/userInfo/pencil.svg'

export default function UserInfo(){
    return(
        <div className={styles.userInfoCont}>
            <img className={styles.edit} src={pen} alt=''/>
            <h4>Основна інформація:</h4>
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