import Link from 'next/link'
import {useContext} from 'react'
import PizzaSvg from '../../svgImg/pizzaSvg'
import SaladSvg from '../../svgImg/saladSvg'
import DrinksSvg from '../../svgImg/drinksSvg'

import styles from './styles.module.scss'
import {ProductsStoreInstanceCTX} from "../../../stores/PostStore";
import {observer} from "mobx-react";

const Categories = observer(() => {

    const {categories, getProducts} = useContext(ProductsStoreInstanceCTX)

    const clickCategory = (id) => {
        getProducts(id)
    }
    return (
        <div className={styles.categories}>
            {categories.map((item) => {

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
                    <a>
                        <div onClick={() => clickCategory(item._id)} className={styles.catItem}>
                            <div className={styles.imgCont1}>
                                {categories(item.name).img}
                            </div>
                            <div>{item.name}</div>
                        </div>
                    </a>
                </Link>
            })}
        </div>
    )
})

export default Categories;