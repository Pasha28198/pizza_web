import {useState, useEffect, useContext} from 'react'

import HeartYel from '../../svgImg/heartYelSvg'
import HeartSvg from '../../svgImg/heartSvg'

import styles from './styles.module.scss'

import saladMob from '../../../assets/saladItemImg/saladMob.png'
import salad from '../../../assets/saladItemImg/salad.png'
import {BasketStoreInstanceCTX} from "../../../stores/basket_store";
import {ProductsStoreInstanceCTX} from "../../../stores/PostStore";

export default function SaladItem({item}) {
    const {addProduct} = useContext(BasketStoreInstanceCTX)
    const { productToBasket } = useContext(ProductsStoreInstanceCTX);
    const [isLike, setIsLike] = useState(false)

    useEffect(() => {
        setChoiseActive(item.choise[0])

    }, [])

    const [choiseActive, setChoiseActive] = useState({})
    const addProductToBasket = () => {
        const product = productToBasket(item._id, choiseActive._id);
        addProduct(product);
    }
    return (
        <div className={styles.saladCont}>
            <div className={styles.imgCont}>
                <img src={saladMob} alt='salad'/>
                <img src={salad} alt='salad'/>
            </div>
            <div className={styles.saladInfo}>
                <div className={styles.infoSup}>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{choiseActive?.mass} гр</p>
                    </div>
                    <div onClick={() => setIsLike(!isLike)} className={styles.svgCont}>
                        {isLike ? <HeartYel/> : <HeartSvg/>}
                    </div>
                </div>
                <p>
                    {item?.ingredients?.map((item) => {
                        return item.name
                    }).toString().split(',').join(', ')}
                </p>
                <div className={styles.infoSub}>
                    <h4>{choiseActive?.price} грн</h4>
                    <button onClick={addProductToBasket}>Замовити</button>
                </div>
            </div>
        </div>
    )
}