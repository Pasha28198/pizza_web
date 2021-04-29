import styles from './styles.module.scss'

import logo from '../../assets/footerIcon/LOGO.svg'
import tel from '../../assets/footerIcon/telephone.svg'
import mail from '../../assets/footerIcon/mail.svg'
import gps from '../../assets/footerIcon/gps.svg'
import visa from '../../assets/footerIcon/visa.png'
import master from '../../assets/footerIcon/mastercard.png'

export default function Footer(){
    return(
        <div className={styles.footerCont}>
            <div className='container'>
                <div className={styles.footerContInner}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <img src={logo} alt='logo'/>
                        </div>
                        <a href='#'>Про нас</a>
                        <a href='#'>Доставка і оплата</a>
                        <a href='#'>Новини</a>
                    </div>
                    <div className={styles.contacts}>
                        <h4>Контакти</h4>
                        <div>
                            <img src={tel} alt=''/>
                            <span>(063) 63 63 636</span>
                        </div>
                        <div>
                            <img src={mail} alt=''/>
                            <span>example@gmail.com</span>
                        </div>
                        <div>
                            <img src={gps} alt=''/>
                            <span>Івано-Франківськ<br/>Вул.Ревуцького, 5</span>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <h4>Меню</h4>
                        <a href='#'>Піца</a>
                        <a href='#'>Салати</a>
                        <a href='#'>Напої</a>
                    </div>
                    <div className={styles.creditCards}>
                        <span>Підтримувані платежі:</span>
                        <div>
                            <img src={visa} alt=''/>
                            <img src={master} alt=''/>
                        </div>
                    </div>
                </div>
                <div className={styles.rules}>
                    <sup>©</sup> 2002 - 2021  Всі права захищені
                </div>
            </div>
        </div>
    )
}