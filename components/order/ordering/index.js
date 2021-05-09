import { useState } from 'react'
import place from '../../../assets/orderImg/place.svg'

import styles from './styles.module.scss'

export default function Ordering(){

    const [comment, setComment] = useState(false)

    return(
        <div className={styles.contMain}>
            <h3>Оформлення замовлення</h3>
            <div className={styles.formCont}>
                <div className={styles.btnCont}>
                    <button>Доставка кур’єром</button>
                    <button>Заберу сам</button>
                </div>
                <div className={styles.formInner}>
                    <h4>Персональна інформація</h4>
                    <div className={styles.persInput}>
                        <input 
                            type='text' 
                            name='name'
                            id='idOffer'
                            placeholder='Ім’я'
                        />
                        <input 
                            type='tel' 
                            name='tel'
                            id='telOffer'
                            placeholder='Телефон'
                        />
                    </div>
                    <h4>Час доставки</h4>
                    <div className={styles.selectInput}>
                        <select>
                            <option>Сьогодні</option>
                            <option>Завтра</option>
                        </select>
                        <select>
                            <option>Якомога скоріше</option>
                            <option>після 13.00</option>
                            <option>до 13.00</option>
                        </select>
                    </div>
                    <h4>Адреса доставки</h4>
                    <div className={styles.adressMain}>
                        <div className={styles.adressPrim}>
                            <div>
                                <img src={place} alt=''/>
                                <p>м. Івано-Франківськ</p>
                            </div>
                            <input 
                                type='text' 
                                name='street'
                                id='streetOffer'
                                placeholder='Вулиця'
                            />
                        </div>
                        <div className={styles.adressSecond}>
                            <input 
                                type='text' 
                                name='house'
                                id='houseOffer'
                                placeholder='Будинок'
                            />
                            <input 
                                type='text' 
                                name='entrance'
                                id='entranceOffer'
                                placeholder='Під’їзд'
                            />
                            <input 
                                type='text' 
                                name='flat'
                                id='flatOffer'
                                placeholder='Квартира'
                            />
                        </div>
                    </div>
                    <div className={styles.privat}>
                        <input
                            name='privat'
                            id='privatOffer'
                            type='checkbox' />
                        <label htmlFor='privat'>Приватний будинок</label>
                    </div>
                    <h4>Оплата</h4>
                    <div className={styles.pay}>
                        <select>
                            <option>Картою</option>
                            <option>Готівкою</option>
                        </select>
                        <input 
                            type='text' 
                            name='change'
                            id='changeOffer'
                            placeholder='Без здачі'
                        />
                    </div>
                    <div className={styles.colCommitCont}>
                        <div className={styles.coll}>
                            <input 
                                type='checkbox'
                                name='coll'
                                id='collOffer'
                            />
                            <label htmlFor='coll'>Перезвонити для підтвердження</label>
                        </div>
                        <div className={styles.comment}>
                            <label onClick={()=>setComment(!comment)} htmlFor='comment'>Додати коментар до замовлення</label>
                            {
                                comment
                                ?  <textarea 
                                    name='comment'
                                    id='comment'
                                    placeholder='Ваш коментар...'
                                />
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.total}>
                    <p>Доставка: <span>Безкоштовно</span></p>
                    <p>До сплати:<span>660 </span>грн</p>
                    <button>Оформити замовлення</button>
            </div>
        </div>
    )
}