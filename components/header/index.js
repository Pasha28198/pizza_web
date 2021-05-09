import Link from 'next/link'

import UserIcon from './userIcon'
import Categories from './categories'
import Basket from './basket'
import InfoBlock from './infoBlock'
import BurgerIcon from './burgerIcon'

import styles from './styles.module.scss'

import logo from '../../assets/logo/logoWhite.svg'


export default function Header(){
    return(
        <div className='container'>
            <div className={styles.headerCont}>
                <div className={styles.headerUpper}>
                    <Link href='/'>
                        <img className={styles.logoCont} src={logo} alt=''/>
                    </Link>
                    <div className={styles.categoriesMax}>
                    <Categories />
                    </div>
                    <InfoBlock />
                    <div >
                        <Basket />
                    </div>
                    <UserIcon />
                    <BurgerIcon />
                </div>
                <div className={styles.categoriesMin}>
                    <Categories />
                </div>
            </div>
        </div>
    )
}