import Footer from "../footer"
import Header from "../header"

import styles from './styles.module.scss'

export default function Layout({children}){
    return(
        <div>
            <div className={styles.stikyCont}>
                <Header />
            </div>
            {children}
            <Footer />
        </div>
    )
}