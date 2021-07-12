import SaladItem from "./saladItem"

import styles from './styles.module.scss'
import {ProductsStoreInstanceCTX} from "../../stores/PostStore";
import {useContext} from 'react';
import {observer} from "mobx-react";

const SaladList = observer(() => {
    const {products} = useContext(ProductsStoreInstanceCTX)

    console.log(products)
    
    return (
        <div className={styles.listCont}>
            <h2>Салати</h2>
            <div>
                {products.map((item) => {
                    return <SaladItem item={item} key={item._id}/>
                })}
            </div>
        </div>
    )
})

export default SaladList;