import SaladItem from "./saladItem"

import styles from './styles.module.scss'

export default function SaladList(){
    return(
        <div className={styles.listCont}>
            <h2>Салати</h2>
            <div>
                <SaladItem />
                <SaladItem />
                <SaladItem />
                <SaladItem />
                <SaladItem />
                <SaladItem />
                <SaladItem />
            </div>
        </div>
    )
}