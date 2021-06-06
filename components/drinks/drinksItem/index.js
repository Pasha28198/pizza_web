import {useState, useContext, useEffect} from 'react'

import HeartYel from '../../svgImg/heartYelSvg'
import HeartSvg from '../../svgImg/heartSvg'

import styles from './styles.module.scss'

import drinksMob from '../../../assets/drinkItemImg/drinkImg.png'
import drinks from '../../../assets/drinkItemImg/drinkImgBig.png'
import {BasketStoreInstanceCTX} from "../../../stores/basket_store";
import {ProductsStoreInstanceCTX} from "../../../stores/PostStore";

export default function DrinkItem({item}) {

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
        <div className={styles.drinksCont}>
            <div className={styles.imgCont}>
                <img src={drinksMob} alt='drink'/>
                <img src={drinks} alt='drink'/>
            </div>
            <div className={styles.drinksInfo}>
                <div className={styles.infoSup}>
                    <div>
                        <h4>{item.title}  </h4>
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
                <div className={styles.volumeBtn}>
                    {item?.choise?.map((item) => {
                        return <button
                            className={`${styles.btnType} ${choiseActive?._id === item._id ? styles.activeChoise : ''}`}
                            onClick={() => {
                                setChoiseActive(item)
                            }}>{item.type}</button>
                    })}
                </div>
                <div className={styles.infoSub}>
                    <h4>20 грн</h4>
                    <button onClick={addProductToBasket}>Замовити</button>
                </div>
            </div>
        </div>
    )
}