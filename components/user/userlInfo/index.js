import styles from './styles.module.scss'

import xmark from '../../../assets/userInfo/xmark.svg'

export default function UserInfo(){
    return(
        <div className={styles.userInfoCont}>
            <h4>Основна інформація:</h4>
            <form className={styles.info}>
                <div>
                    <label htmlFor='name'>Ім'я:</label>
                    <input 
                        id='name'
                        type='text' 
                        placeholder='Джон'
                    />
                </div>
                <div>
                    <label htmlFor='surname'>Прізвище:</label>
                    <input
                        id='surname' 
                        type='text'
                        placeholder='Сноу'
                    />
                </div>
                <div>
                    <label htmlFor='birthday'>ДН:</label>
                    <input 
                        id='birthday'
                        type=''
                        placeholder='07.07.2000'
                    />
                </div>
                <div>
                    <label htmlFor='telef'>Телефон:</label>
                    <input 
                        id='telef'
                        type='tel'
                        placeholder='+38 (050) 582 34 08'    
                    />
                </div>
                <div>
                    <label htmlFor='mail'>Пошта:</label>
                    <input 
                        id='mail'
                        type='email'
                        placeholder='example@gmail.com'    
                    />
                </div>
                <div className={styles.adressCont}>
                    <p>Адреса:</p>
                    <div>
                        <div className={styles.adressItem}>
                            <p>Вул. Дегтярівська, 5б, кв. 7</p>
                            <img src={xmark} alt='del'/>
                        </div>
                        <div className={styles.adressEdit}>
                            <button>Додати адресу</button>
                            <button>Редагувати</button>
                        </div>
                    </div>
                </div>
                <button 
                    type='submit' 
                    className={styles.btnSubmit}
                    onClick={(e)=>e.preventDefault()}
                >
                    Зберегти
                </button>
            </form>
        </div>
    )
}