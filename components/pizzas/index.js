import {useContext} from 'react';
import PizzaItem from './PizzaItem/index'
import styles from './styles.module.scss'
import {observer} from "mobx-react";

import {ProductsStoreInstanceCTX} from '../../stores/PostStore';
import {toJS} from "mobx";

const Pizzas = observer(() => {

    const {products} = useContext(ProductsStoreInstanceCTX)

    console.log(toJS(products))

    return (
        <div className='container'>
            <div className={styles.pizzaType}>
                <h2>Піцца</h2>
                <div>
                    {products.map((item) => {
                        return <PizzaItem item={item}/>
                    })}
                </div>
            </div>
        </div>
    )
})

export default Pizzas;
