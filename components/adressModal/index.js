import styles from './styles.module.scss'

import xGrey from '../../assets/userInfo/xgrey.svg'

export default function AdressModal({modalHandler}){
    return(
            <div className={styles.modal}>
                <h4>Нова адреса</h4>
                <form className={styles.form}>
                    <img 
                        onClick={(e)=>modalHandler(e)}
                        src={xGrey} 
                        alt='X'
                    />
                    <div>
                        <label htmlFor='city'>Місто:*</label>
                        <select required id='city'>
                            <option defaultValue value='Івано-Франківськ'>
                                Івано-Франківськ
                            </option>
                            <option value='Львів'>Львів</option>
                            <option value='Долина'>Долина</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='street'>Вулиця:*</label>
                        <input 
                            required
                            type='text' 
                            id='street'
                            placeholder='Вкажіть вашу вулицю'
                        />
                    </div>
                    <div className={styles.privatCheck}>
                        <input 
                            id='privatCheck'
                            type='checkbox' 
                        />
                        <label htmlFor='privatCheck'>Приватний будинок</label>
                    </div>
                    <div className={styles.privat}>
                        <div>
                            <label htmlFor='house'>Будинок:*</label>
                            <input  
                                required
                                type='text' 
                                id='house'
                            />
                        </div>
                        <div>
                            <label htmlFor='flat'>Квартира:</label>
                            <input type='number' id='flat'/>
                        </div>
                        <div>
                            <label htmlFor='entrance'>Під’їзд:</label>
                            <input type='number' id='entrance'/>
                        </div>
                        <div>
                            <label htmlFor='floor'>Поверх:</label>
                            <input type='number' id='floor'/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='comment'>Коментар:</label>
                        <input 
                            type='text' 
                            id='comment'
                            placeholder="Інформація для кур'єра"
                        />
                    </div>
                    <button 
                        type='submit' 
                        className={styles.formBtn}
                        onClick={(e)=>e.preventDefault()}
                    >Зберегти</button>
                </form>
            </div>
    )
}