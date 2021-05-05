import Link from 'next/link'

import styles from './styles.module.scss'

import user from '../../../assets/headerIcons/user.svg'

export default function UserIcon(){
    return(
        <div className={styles.userIcon}>
            
                <img src={user} alt=''/>
            
            <div className={styles.btnCont}>
                <Link href='/user'>
                    <button className={styles.loginBtn}>
                    Особистий кабінет
                    </button>
                </Link>
                <button className={styles.exitBtn}>
                    Вийти
                </button>
            </div>
        </div>
    )
}