import deleteImg from '../../../assets/constModal/deleteRed.svg'
import plusImg from '../../../assets/constModal/plus.svg'
import minusImg from '../../../assets/constModal/minus.svg'
import imgMob from '../../../assets/orderImg/imgMob.png'
import imgBig from '../../../assets/orderImg/imgBig.png'

import styles from './styles.module.scss'

export default function OrderItem({item, decreaseCount, increaseCount, deleteProduct}) {

    return (
        <div className={styles.itemCont}>
            <div className={styles.itemDesc}>
                <img className={styles.mobImg} src={item.product.img} alt=''/>
                <img className={styles.bigImg} src={item.product.img} alt=''/>
                <div className={styles.infoItem}>
                    <h5>{item?.product.title}<span style={{fontSize: 14}}> ({item?.product.choise.type})</span></h5>
                    <div>{item?.product?.initialIngredients?.map((item)=>{
                        return <span style={{fontSize: 14}}>{item.ingredient.name}</span>
                    })}</div>
                    <p>{item?.product.choise.mass} гр</p>
                    <h4>{item?.product.choise.price * item?.count} грн</h4>
                </div>
            </div>
            <div className={styles.control}>
                <div>
                    <div className={styles.delete}>
                        <img onClick={deleteProduct} src={deleteImg} alt=''/>
                    </div>
                    <div className={styles.changeInner}>
                        <div onClick={decreaseCount}><img src={minusImg} alt=''/></div>
                        <p> {item?.count}</p>
                        <div onClick={increaseCount}><img src={plusImg} alt=''/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}