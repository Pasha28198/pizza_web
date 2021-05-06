import Footer from "../footer"
import Header from "../header"
import MobileMenu from "../mobileMenu"

import styles from './styles.module.scss'

export default function Layout({children}){
    return(
        <div>
            <div className={styles.stikyCont}>
                <Header />
                <MobileMenu />
            </div>
            {children}
            <Footer />
        </div>
    )
}