import DrinkItem from './drinksItem'
import styles from './styles.module.scss'
import {observer} from "mobx-react";
import {ProductsStoreInstanceCTX} from "../../stores/PostStore";
import {useContext} from 'react';

const DrinksList = observer(() => {
    const {products} = useContext(ProductsStoreInstanceCTX)
    return (
        <div className={styles.listCont}>
            <h2>Напої</h2>
            <div>
                {products.map((item) => {
                    return <DrinkItem item={item} key={item._id}/>
                })}
            </div>
        </div>
    )
})
export default DrinksList;