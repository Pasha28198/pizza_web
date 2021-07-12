import Link from 'next/link'
import styles from './styles.module.scss'

import logo from '../../assets/logo/logoBlack.svg'
import tel from '../../assets/footerIcon/telephone.svg'
import mail from '../../assets/footerIcon/mail.svg'
import gps from '../../assets/footerIcon/gps.svg'
import visa from '../../assets/footerIcon/visa.png'
import master from '../../assets/footerIcon/mastercard.png'
import {ProductsStoreInstanceCTX} from "../../stores/PostStore";
import {useContext} from "react";
import Categories from "../header/categories";
import {observer} from "mobx-react";
import PizzaSvg from "../svgImg/pizzaSvg";
import SaladSvg from "../svgImg/saladSvg";
import DrinksSvg from "../svgImg/drinksSvg";

const Footer = observer(()=>{


    const {categories, getProducts} = useContext(ProductsStoreInstanceCTX)

    const clickCategory = (id) => {
        getProducts(id)
    }
    return(
        <div className={styles.footerCont}>
            <div className='container'>
                <div className={styles.footerContInner}>
                    <div className={styles.info}>
                        <Link href='/'>
                            <div className={styles.logo}>
                                <img src={logo} alt='logo'/>
                            </div>
                        </Link>
                        <Link href='/delivery'>
                            <a>Доставка і оплата</a>
                        </Link>
                        <Link href='/sale'>
                            <a>Акції</a>
                        </Link>
                    </div>
                    <div className={styles.contacts}>
                        <h4>Контакти</h4>
                        <div>
                            <img src={tel} alt=''/>
                            <span>(066) 04 38 795</span>
                        </div>
                        <div>
                            <img src={mail} alt=''/>
                            <span>whiteboxpizza@gmail.com</span>
                        </div>
                        <div>
                            <img src={gps} alt=''/>
                            <span>м. Івано-Франківськ<br/>Вул.Івасюка, 63</span>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <h4>Меню</h4>
                        {categories.map((item)=>{
                            const categories = (name) => {
                            switch (name) {
                                case 'Піца':
                                    return {
                                        href: '/',
                                        img: <PizzaSvg/>
                                    }
                                case 'Салати':
                                    return {
                                        href: '/salad',
                                        img: <SaladSvg/>
                                    }
                                case 'Напої':
                                    return {
                                        href: '/drinks',
                                        img: <DrinksSvg/>
                                    }
                                default:
                                    return '/'
                            }
                        }
                            return <Link href={categories(item.name).href} key={item._id}>
                                <a onClick={() => clickCategory(item._id)}>{item.name}</a>
                            </Link>
                        })}
                    </div>

                </div>
                <div className={styles.rules}>
                    <sup>©</sup> 2002 - 2021  Всі права захищені
                </div>
            </div>
        </div>
    )
})

export default Footer;