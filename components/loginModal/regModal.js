import { useLoginModalCtx } from '../../context/loginModalCtx'
import { useState } from 'react'

import arr from '../../assets/loginModal/arr.svg'
import visible from '../../assets/loginModal/visibile.svg'

import styles from './styles.module.scss'

export default function RegModal(){

    const { setIsReg } = useLoginModalCtx()

    const [ isHidden, setIsHidden ] = useState(true)

    return(
        <div className={styles.regCont}>
            <h1 className={styles.titleReg}>Зареєструватись</h1>
            <form className={styles.formReg}>
                <div className={styles}>
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
                <div className={styles.password}>
                    <label htmlFor=''>
                        Пароль повторно:*
                    </label>
                    <input 
                        type={isHidden ? 'password' : 'text'}
                        name='passRepeat'
                        id='passRepeat'
                        placeholder='Введіть ваш пароль'
                    />
                    <img 
                        onClick={()=>setIsHidden(!isHidden)}
                        src={visible} 
                        alt=''
                    />
                </div>
            </form>
            <div className={styles.btnCont}>
                <button 
                    className={styles.btnSubmit}
                    type='submit'
                >
                    Зареєструватись
                </button>
                <button 
                    onClick={()=>setIsReg()}
                    className={styles.btnSec}
                >
                    <img src={arr} alt=''/>
                    До входу
                </button>
            </div>
        </div>
    )
}