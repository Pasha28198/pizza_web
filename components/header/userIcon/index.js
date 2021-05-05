import Link from 'next/link'

import styles from './styles.module.scss'

import user from '../../../assets/headerIcons/user.svg'
import userBtn from '../../../assets/headerIcons/userBtn.svg'
import logoutBtn from '../../../assets/headerIcons/logoutBtn.svg'

export default function UserIcon(){
    return(
        <div className={styles.userIcon}>
            
                <img src={user} alt=''/>
            
            <div className={styles.btnCont}>
                <Link href='/user'>
                    <button className={styles.loginBtn}>
                        <img src={userBtn} alt=''/>
                        Особистий кабінет
                    </button>
                </Link>
                <button className={styles.exitBtn}>
                    <img src={logoutBtn} alt=''/>
                    Вийти
                </button>
            </div>
        </div>
    )
}