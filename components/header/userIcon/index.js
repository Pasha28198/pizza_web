import Link from 'next/link'
import Backdrop from '../../backdrop/index'

import styles from './styles.module.scss'

import user from '../../../assets/headerIcons/user.svg'
import userBtn from '../../../assets/headerIcons/userBtn.svg'
import logoutBtn from '../../../assets/headerIcons/logoutBtn.svg'
import { useState } from 'react'
import LoginModal from '../../loginModal'

export default function UserIcon(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={styles.userIcon}>
            {
                isOpen
                ? <Backdrop>
                    <LoginModal close={setIsOpen} isOpen={isOpen}/>
                </Backdrop>
                : null
            }
            {/*<img src={user} alt=''/>*/}
            <div className={styles.btnCont}>
                {/*<Link href='/user'>*/}
                {/*    <button className={styles.loginBtn}>*/}
                {/*        <img src={userBtn} alt=''/>*/}
                {/*        Особистий кабінет*/}
                {/*    </button>*/}
                {/*</Link>*/}
                {/*<button onClick={()=>setIsOpen(!isOpen)} className={styles.exitBtn}>*/}
                {/*    <img src={logoutBtn} alt=''/>*/}
                {/*    Вийти*/}
                {/*</button>*/}
            </div>
        </div>
    )
}