import * as yup from 'yup'
import { useFormik } from 'formik'

import styles from './styles.module.scss'

import xGrey from '../../assets/userInfo/xgrey.svg'
import { useState } from 'react'

export default function AdressModal({modalHandler}){

    const [isPrivatHouse, setPrivatHouse] = useState(true)

    const formik = useFormik({
        initialValues: {
            city: '',
            street: '',
            house: '',
            flat: '',
            entrance: '',
            floor: '',
            comment: ''
        },
        validationSchema: yup.object({
            city: yup.string()
                .required("Обов'язкове поле"),
            street: yup.string()
                .required("Обов'язкове поле"),
            house: yup.string()
                .required("Обов'язкове поле"),
            flat: yup.number(),
            entrance: yup.number(),
            floor: yup.number(),
            comment: yup.string()
        }),
        onSubmit: values => console.log(values)
    })

    return(
            <div className={styles.modal}>
                <h4>Нова адреса</h4>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <img 
                        onClick={(e)=>modalHandler(e)}
                        src={xGrey} 
                        alt='X'
                    />
                    <div>
                        <label htmlFor='city'>Місто:*</label>
                        <select 
                            id='city'
                            name='city'
                            onChange={formik.handleChange}
                            value={formik.values.city}
                        >
                            <option value='Івано-Франківськ'>
                                Івано-Франківськ
                            </option>
                            <option value='Львів'>Львів</option>
                            <option value='Долина'>Долина</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='street'>Вулиця:*</label>
                        <input 
                            type='text' 
                            id='street'
                            name='street'
                            placeholder='Вкажіть вашу вулицю'
                            onChange={formik.handleChange}
                            value={formik.values.street}
                        />
                    </div>
                    {formik.touched.street && formik.errors.street ? (
                        <div className={styles.errMes}>{formik.errors.street}</div>
                    ) : null}
                    <div className={styles.privatCheck}>
                        <input 
                            id='privatCheck'
                            type='checkbox' 
                            name='privatCheck'
                            onChange={formik.handleChange}
                            onClick={()=>setPrivatHouse(!isPrivatHouse)}
                            value={formik.values.privatCheck}
                        />
                        <label htmlFor='privatCheck'>Приватний будинок</label>
                    </div>
                    <div className={styles.privat}>
                        <div>
                            <label htmlFor='house'>Будинок:*</label>
                            <input  
                                type='text' 
                                id='house'
                                name='house'
                                onChange={formik.handleChange}
                                value={formik.values.house}
                            />
                        </div>
                        {
                            isPrivatHouse ? <>
                            <div>
                                <label htmlFor='flat'>Квартира:</label>
                                <input 
                                    type='text' 
                                    id='flat'
                                    name='flat'
                                    onChange={formik.handleChange}
                                    value={formik.values.flat}
                                />
                            </div>
                            <div>
                                <label htmlFor='entrance'>Під’їзд:</label>
                                <input 
                                    type='text' 
                                    id='entrance'
                                    name='entrance'   
                                    onChange={formik.handleChange}
                                    value={formik.values.entrance} 
                                />
                            </div>
                            <div>
                                <label htmlFor='floor'>Поверх:</label>
                                <input 
                                    type='text' 
                                    id='floor'
                                    name='floor'
                                    onChange={formik.handleChange}
                                    value={formik.values.floor}
                                />
                            </div>
                        </>
                        : null
                        }
                        
                    </div>
                    <div>
                        <label htmlFor='comment'>Коментар:</label>
                        <input 
                            type='text' 
                            id='comment'
                            placeholder="Інформація для кур'єра"
                            name='comment'
                            onChange={formik.handleChange}
                            value={formik.values.comment}
                        />
                    </div>
                    <button 
                        type='submit' 
                        className={styles.formBtn}
                    >Зберегти</button>
                </form>
            </div>
    )
}