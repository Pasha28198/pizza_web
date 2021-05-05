import styles from './styles.module.scss'

export default function Backdrop({children}){
    return(
        <div className={styles.backdrop}>
            {children}
        </div>
    )
}