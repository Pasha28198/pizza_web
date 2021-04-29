import Categories from './categories'
import Basket from './basket'
import InfoBlock from './infoBlock'
import BurgerIcon from './burgerIcon'

import styles from './styles.module.scss'

import logo from '../../assets/logo/LOGO.svg'
import user from '../../assets/headerIcons/user.svg'

export default function Header(){
    return(
        <div className='container'>
            <div className={styles.headerCont}>
                <div className={styles.headerUpper}>
                    <div className={styles.logoCont}>
                        <img src={logo} alt=''/>
                    </div>
                    <div className={styles.categoriesMax}>
                    <Categories />
                    </div>
                    <InfoBlock />
                    <div >
                        <Basket />
                    </div>
                    <BurgerIcon />
                    <div className={styles.userIcon}>
                        <img src={user} alt=''/>
                    </div>
                </div>
                <div className={styles.categoriesMin}>
                    <Categories />
                </div>
            </div>
        </div>
    )
}