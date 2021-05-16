import Link from 'next/link'
import { useState } from 'react'

import { useLoginModalCtx } from '../../context/loginModalCtx'

import visible from '../../assets/loginModal/visibile.svg'

import styles from './styles.module.scss'

export default function LogModal(){

    const { setIsReg } = useLoginModalCtx()
    
    const [ isHidden, setIsHidden ] = useState(true)

    return(
        <div className={styles.logCont}>
            <h1 className={styles.titleLog}>Увійти</h1>
            <form className={styles.formLog}>
                <div>
                    <label htmlFor='tel'>
                        Логін:*
                    </label>
                    <input 
                        type='tel'
                        id='tel'
                        name='tel'
                        placeholder='Номер телефону'
                    />
                </div>
                <div className={styles.password}>
                    <label htmlFor=''>
                        Пароль:*
                    </label>
                    <input 
                        type={isHidden ? 'password' : 'text'}
                        name='pass'
                        id='pass'
                        placeholder='Введіть ваш пароль'
                    />
                    <img 
                        onClick={()=>setIsHidden(!isHidden)}
                        src={visible} 
                        alt=''
                    />
                </div>
                <Link href='#'>
                    <p>Забули пароль?</p>
                </Link>
            </form>
            <div className={styles.btnCont}>
                <button
                    className={styles.btnSubmit} 
                    type='submit'
                >
                    Увійти
                </button>
                <button 
                    onClick={()=>setIsReg()}
                    className={styles.btnSec}>
                    Зареєструватись
                </button>
            </div>
        </div>
    )
}