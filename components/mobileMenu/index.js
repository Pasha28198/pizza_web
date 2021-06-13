import Link from 'next/link'

import { useMobileMenuCtx } from '../../context/mibileMenuCtx'

import BurgerIcon from '../header/burgerIcon/index'

import styles from './styles.module.scss'

export default function MobileMenu(){

    let { open, setOpen } = useMobileMenuCtx()

    return(
        <div onClick={()=>setOpen()} className={open ? styles.mobileMenuContX : styles.mobileMenuCont}>
            <div className={styles.closeBtn}>
                <BurgerIcon />
            </div>
            <nav  className={styles.mobNav}>
                <Link href='/sale'>
                    <a>Про нас</a>
                </Link>
                <Link href='/delivery'>
                    <a>Доставка і оплата</a>
                </Link>
            </nav>
             {/* <Link href='/user'>
                <button 
                    className={styles.btnMobMenu}>
                        Увійти
                </button>
            </Link> */}
            {/*<Link href='/user'>*/}
            {/*    <button */}
            {/*        className={styles.btnMobMenu}>*/}
            {/*            Особистий кабінет*/}
            {/*    </button>*/}
            {/*</Link>*/}
            {/*<button className={styles.btnMobMenuExit}>Вийти</button>*/}
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