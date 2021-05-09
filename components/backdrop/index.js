import { useEffect } from 'react';
import styles from './styles.module.scss'

export default function Backdrop({children}){

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return ()=> document.body.style.overflow = 'unset';
     }, []);

    return(
        <div className={styles.backdrop}>
            {children}
        </div>
    )
}