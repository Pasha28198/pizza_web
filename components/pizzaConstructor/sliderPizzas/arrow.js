import arrLeft from '../../../assets/pizzaConstImg/arrLeft.svg'
import arrRight from '../../../assets/pizzaConstImg/arrRight.svg'

import styles from './styles.module.scss'

export function PrewArrow({onClick}){
    return(
        <div 
            className={styles.nextArrow}
            onClick={onClick}
        >
            <img src={arrLeft} alt=''/>
        </div>
    )
}

export function NextArrow({onClick}){
    return(
        <div 
            className={styles.prewArrow}
            onClick={onClick}
        >
            <img src={arrRight} alt=''/>
        </div>
    )
}