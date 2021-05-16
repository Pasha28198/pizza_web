import { useLoginModalCtx } from '../../context/loginModalCtx'

import LogModal from './logModal'
import RegModal from './regModal'

import closeImg from '../../assets/loginModal/close.svg'

import styles from './styles.module.scss'

export default function LoginModal({close, isOpen}){

    let { isReg } = useLoginModalCtx() 
    
    return(
        <div className={styles.modalCont}>
            <div className={styles.contInner}>
                <img 
                    onClick={()=>close(!isOpen)} 
                    className={styles.close} 
                    src={closeImg} 
                    alt=''
                />
                {
                    isReg 
                    ? <RegModal />
                    : <LogModal />
                }
            </div>
        </div>
    )
}