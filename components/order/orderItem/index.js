import deleteImg from '../../../assets/constModal/deleteRed.svg'
import plusImg from '../../../assets/constModal/plus.svg'
import minusImg from '../../../assets/constModal/minus.svg'
import imgMob from '../../../assets/orderImg/imgMob.png'
import imgBig from '../../../assets/orderImg/imgBig.png'

import styles from './styles.module.scss'

export default function OrderItem(){
    return(
        <div className={styles.itemCont}>
            <div className={styles.itemDesc}>
                <img className={styles.mobImg} src={imgMob} alt=''/>
                <img className={styles.bigImg} src={imgBig} alt=''/>
                <div className={styles.infoItem}>
                    <h5>Салат</h5>
                    <p>250 гр</p>
                    <h4>220 грн</h4>
                </div>
            </div>
            <div className={styles.control}>
                <div>
                    <div className={styles.delete}>
                        <img src={deleteImg} alt=''/>
                    </div>
                   <div className={styles.changeInner}> 
                        <div><img src={minusImg} alt=''/></div>
                            <p>1</p>        
                        <div><img src={plusImg} alt=''/></div>
                   </div>
               </div>
            </div>
        </div>
    )
}