import styles from './styles.module.scss'

import deleteImg from '../../../assets/cleaveImg/delete.svg'
import minus from '../../../assets/cleaveImg/minus.svg'
import plus from '../../../assets/cleaveImg/plus.svg'

export default function CleaveItem(){
    return(
        <div className={styles.itemCont}>
            <div className={styles.itemTopInfo}>
                <div>
                    <h5>Італійська піцца Маргарита</h5>
                    <p>500 гр</p>
                </div>
                <div>
                    <img src={deleteImg} alt=''/>
                </div>
            </div>
            <div className={styles.itemSubInfo}>
                <div>
                    <img src={minus}  alt=''/>
                    1
                    <img src={plus}  alt=''/>
                </div>
                <p>
                    260 грн
                </p>
            </div>
        </div>
    )
}