import styles from './styles.module.scss'

import deleteImg from '../../../assets/cleaveImg/delete.svg'
import minus from '../../../assets/cleaveImg/minus.svg'
import plus from '../../../assets/cleaveImg/plus.svg'
import {toJS} from "mobx";

export default function CleaveItem({item, decreaseCount, increaseCount, deleteProduct}) {

    console.log(item)
    const priceProd = (count, priceProduct) => {
        return count * priceProduct
    }
    return (
        <div className={styles.itemCont}>
            <div className={styles.itemTopInfo}>
                <div>
                    <h5>{item?.product?.title}<span style={{fontSize: 14}}> ({item?.product.choise.type})</span></h5>
                    <p>{item?.product?.choise?.mass} гр</p>
                </div>
                <div>
                    <img src={deleteImg} alt='' onClick={deleteProduct}/>
                </div>
            </div>
            <div className={styles.itemSubInfo}>
                <div>
                    <img onClick={decreaseCount} src={minus} alt=''/>
                    {item?.count}
                    <img onClick={increaseCount} src={plus} alt=''/>
                </div>
                <p>
                    {priceProd(item?.count, item?.product?.choise?.price)} грн
                </p>
            </div>
        </div>
    )
}