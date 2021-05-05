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
                        placeholder='Вкажіть своє ім`я'
                    />
                </div>
                <div>
                    <label htmlFor='surname'>Прізвище:</label>
                    <input
                        id='surname' 
                        type='text'
                        placeholder='Вкажіть своє прізвище'
                    />
                </div>
                <div>
                    <label className={styles.bithMob} htmlFor='birthday'>ДН:</label>
                    <label className={styles.bithBig} htmlFor='birthday'>День народження:</label>
                    <input 
                        id='birthday'
                        type=''
                        placeholder='День вашого народження'
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
                        {/* <div className={styles.adressItem}>
                            <p>Вул. Дегтярівська, 5б, кв. 7</p>
                            <img src={xmark} alt='del'/>
                        </div> */}
                        <div className={styles.adressEdit}>
                            <button>Додати адресу</button>
                            {/* <button>Редагувати</button> */}
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