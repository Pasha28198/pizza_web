import { useState } from 'react'
import styles from './styles.module.scss'
import arr from '../../assets/general/selectArrr.svg'

export default function Select({options}){

    const [current, setCurrent] = useState(options ? options[0] : ' ')
    const [isListOpen, setIsListOpen] = useState(false)

    const renderOptionsList = (options) => {
        if(options){
            return <div className={styles.selectInner}>
                {options.map((item, i)=>{
                    return(
                        <div
                            key={item+i}
                            onClick={(e)=>getChoosenValue(e)} 
                            className={styles.selectItem}>
                            {item}
                        </div>
                    )
                })
                }
        </div>
        }
        return
    }

    const openListHandler = () => {
        setIsListOpen(!isListOpen)
    }
    const getChoosenValue = (e) => {
        openListHandler()
        setCurrent(e.target.innerText)
    }

    return(
        <div 
            onClick={()=>openListHandler()} 
            className={`${styles.customSelect}`}
        >
            <img src={arr} alt=''/>
            <div className={styles.choosen}>{current}</div>
            {
                isListOpen
                ? renderOptionsList(options)
                : null
            }
        </div>
    )
}