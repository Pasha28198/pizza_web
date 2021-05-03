import PizzaItem from './PizzaItem/index'
import styles from './styles.module.scss'

export default function Pizzas(){
    return(
        <div className='container'>
            <div className={styles.pizzaType}>
                <h2>Піцца</h2>
                <div>
                    <PizzaItem />
                    <PizzaItem />
                    <PizzaItem />
                    <PizzaItem />
                    <PizzaItem />
                    <PizzaItem />
                    <PizzaItem />
                    <PizzaItem />
                    <PizzaItem />
                </div>
            </div>
        </div>
    )
}