import { useState } from 'react'

import { useFormik } from 'formik'
import * as yup from 'yup'
import { REG_EX_BIRTH, REG_EX_TEL } from '../../../helpers/regEx'

import styles from './styles.module.scss'

import xmark from '../../../assets/userInfo/xmark.svg'
import Backdrop from '../../backdrop'
import AdressModal from '../../adressModal'

export default function UserInfo(){

    const [openModal, setOpenModal] = useState(false)

    function modalHandler(e){
        e.preventDefault()
        setOpenModal(!openModal)
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            birth: '',
            telef: '',
            email: '',
        },
        validationSchema: yup.object({
            name: yup.string()
                .min(2, "Ім'я має бути довше")
                .required("Обов'язкове поле"),
            surname: yup.string()
                .min(2, "Прізвище має бути довше")
                .required("Обов'язкове поле"),
            birth: yup.string()
                .matches(REG_EX_BIRTH, "Невірний формат, необхідно: дд/мм/рррр, дд.мм.рррр, дд-мм-рррр"),
            telef: yup.string()
                .matches(REG_EX_TEL, 'Невірний формат')
                .required("Обов'язкове поле"),
            email: yup.string()
                .email("Невірний формат пошти")
        }),
        onSubmit: values => console.log(values)
    })

    return(
        <div className={styles.userInfoCont}>
            {
                openModal
                ? <Backdrop>
                    <AdressModal modalHandler={modalHandler}/>
                </Backdrop>
                : null
            }
            <h4>Основна інформація:</h4>
            <form onSubmit={formik.handleSubmit} className={styles.info}>
                <div>
                    <label htmlFor='name'>Ім'я:</label>
                    <input 
                        id='name'
                        name='name'
                        type='text' 
                        placeholder='Вкажіть своє ім`я'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                {formik.touched.name && formik.errors.name ? (
                        <div className={styles.errMes}>{formik.errors.name}</div>
                    ) : null}
                <div>
                    <label htmlFor='surname'>Прізвище:</label>
                    <input
                        id='surname'
                        name='surname' 
                        type='text'
                        placeholder='Вкажіть своє прізвище'
                        onChange={formik.handleChange}
                        value={formik.values.surname}
                    />
                </div>
                {formik.touched.surname && formik.errors.surname ? (
                        <div className={styles.errMes}>{formik.errors.surname}</div>
                    ) : null}
                <div>
                    <label className={styles.bithMob} htmlFor='birthday'>ДН:</label>
                    <label className={styles.bithBig} htmlFor='birthday'>День народження:</label>
                    <input 
                        id='birth'
                        name='birth'
                        type='text'
                        placeholder='День вашого народження'
                        onChange={formik.handleChange}
                        value={formik.values.birth}
                    />
                </div>
                {formik.touched.birth && formik.errors.birth ? (
                        <div className={styles.errMes}>{formik.errors.birth}</div>
                    ) : null}
                <div>
                    <label htmlFor='telef'>Телефон:</label>
                    <input 
                        id='telef'
                        name='telef'
                        type='tel'
                        placeholder='+380505823408'
                        onChange={formik.handleChange}
                        value={formik.values.telef}    
                    />
                </div>
                {formik.touched.telef && formik.errors.telef ? (
                        <div className={styles.errMes}>{formik.errors.telef}</div>
                    ) : null}
                <div>
                    <label htmlFor='mail'>Пошта:</label>
                    <input 
                        id='email'
                        name='email'
                        type='email'
                        placeholder='example@gmail.com'
                        onChange={formik.handleChange}
                        value={formik.values.email}        
                    />
                </div>
                {formik.touched.email && formik.errors.email ? (
                        <div className={styles.errMes}>{formik.errors.email}</div>
                    ) : null}
                <div className={styles.adressCont}>
                    <p>Адреса:</p>
                    <div>
                        <div className={styles.adressItem}>
                            <p>Вул. Дегтярівська, 5б, кв. 7</p>
                            <img src={xmark} alt='del'/>
                        </div>
                        <div className={styles.adressEdit}>
                            <button
                                onClick={(e)=>modalHandler(e)}
                            >
                                Додати адресу
                            </button>
                            <button>Редагувати</button>
                        </div>
                    </div>
                </div>
                <button 
                    type='submit' 
                    className={styles.btnSubmit}
                >
                    Зберегти
                </button>
            </form>
        </div>
    )
}