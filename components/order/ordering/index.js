import { useState } from 'react'
import place from '../../../assets/orderImg/place.svg'

import styles from './styles.module.scss'

export default function Ordering(){

    const [comment, setComment] = useState(false)
    const [isPrivat, setIsPrivat] = useState(false)
    const [isDelivery, setIsDelivery] = useState(false)

    const deliveryHandler = () => {
        setIsDelivery(!isDelivery)
    }
    return(
        <div className={styles.contMain}>
            <h3>Оформлення замовлення</h3>
            <div className={styles.formCont}>
                <div onClick={()=>deliveryHandler()} className={styles.btnCont}>
                    <button className={isDelivery ? styles.redBtn : null}>Доставка кур’єром</button>
                    <button className={!isDelivery ? styles.redBtn : null}>Заберу сам</button>
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
                        <select className={styles.selectDay}>
                            <option>Сьогодні</option>
                            <option>Вт - 11.05</option>
                            <option>Ср - 12.05</option>
                            <option>Чт - 13.05</option>
                            <option>Пт - 14.05</option>
                            <option>Сб - 15.05</option>
                        </select>
                        <select className={styles.selectTime}>
                            <option>Якомога скоріше</option>
                            <option>19:00</option>
                            <option>19:30</option>
                            <option>19.45</option>
                            <option>19.45</option>
                            <option>19.45</option>
                            <option>19.45</option>
                            <option>19.45</option>
                        </select>
                    </div>
                    <h4>Адреса {isDelivery ? 'доставки' : 'ресторану'}</h4>
                    <div className={styles.adressMain}>
                        <div className={styles.adressPrim}>
                            <div>
                                <img src={place} alt=''/>
                                <p>м. Івано-Франківськ</p>
                            </div>
                                {
                                    isDelivery
                                    ?  <input 
                                            type='text' 
                                            name='street'
                                            id='streetOffer'
                                            placeholder='Вулиця'
                                        />
                                    : <select className={styles.selectRest}>
                                        <option>вул. Здолбунівська 4б</option>
                                    </select>
                                }
                           
                        </div>
                        <div className={isDelivery ? styles.adressSecond : `${styles.adressSecond, styles.hidden}`}>
                            <input 
                                type='text' 
                                name='house'
                                id='houseOffer'
                                placeholder='Будинок'
                            />
                            {
                                !isPrivat ? <>
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
                                </>
                                : null
                            }
                        </div>
                    </div>
                    <div className={isDelivery ? styles.privat : `${styles.privat, styles.hidden}`}>
                        <input
                            onClick={()=>setIsPrivat(!isPrivat)}
                            name='privat'
                            id='privatOffer'
                            type='checkbox' />
                        <label htmlFor='privat'>Приватний будинок</label>
                    </div>
                    <h4>Оплата</h4>
                    <div className={styles.pay}>
                        <select className={styles.selectPay}>
                            <option>Картою онлайн</option>
                            <option>Готівкою кур’єру</option>
                            <option>Картою кур’єру</option>
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
                                className={styles.checkBoxColl}
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