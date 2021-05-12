import SaleItem from './saleItem'
import styles from './styles.module.scss'

export default function SaleList(){
    return(
        <div className={styles.contTitle}>
            <h1>Акції</h1>
            <div className={styles.listCont}>
                <SaleItem />
                <SaleItem />
                <SaleItem />
            </div>
        </div>
    )
} 