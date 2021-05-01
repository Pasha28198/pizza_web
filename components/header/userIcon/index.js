import Link from 'next/link'

import styles from './styles.module.scss'

import user from '../../../assets/headerIcons/user.svg'

export default function UserIcon(){
    return(
        <div className={styles.userIcon}>
            <Link href='/user'>
                <img src={user} alt=''/>
            </Link>
            <div className={styles.btnCont}>
                <button className={styles.loginBtn}>
                    Увійти
                </button>
            </div>
        </div>
    )
}