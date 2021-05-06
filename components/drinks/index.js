import DrinkItem from './drinksItem'
import styles from './styles.module.scss'

export default function DrinksList(){
    return(
        <div className={styles.listCont}>
            <h2>Напої</h2>
            <div>
                <DrinkItem />
                <DrinkItem />
                <DrinkItem />
                <DrinkItem />
                <DrinkItem />
                <DrinkItem />
                <DrinkItem />
            </div>
        </div>
    )
}