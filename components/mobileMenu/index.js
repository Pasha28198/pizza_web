import BurgerIcon from '../header/burgerIcon/index'

import styles from './styles.module.scss'

export default function MobileMenu(){
    return(
        <div className={styles.mobileMenuCont}>
            <div className={styles.closeBtn}>
                <BurgerIcon />
            </div>
            <nav className={styles.mobNav}>
                <a href='#'>Про нас</a>
                <a href='#'>Доставка і оплата</a>
                <a href='#'>Новини</a>
            </nav>
            <button className={styles.btnMobMenu}>Увійти</button>
            <div className={styles.contacts}>
                <h4>Контакти:</h4>
                <p>+38 (067) 63 71 444</p>
                <p>
                    Щодня з 10:00 до 21:00
                    Пт - Нд: з 10:00 до 22:00
                </p>
            </div>
        </div>
    )
}