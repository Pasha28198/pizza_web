import { useMobileMenuCtx } from '../../../context/mibileMenuCtx'
import styles from './styles.module.scss'

export default function BurgerIcon(){

    let { open, setOpen } = useMobileMenuCtx()

    function menuHandler(){
        setOpen()
        if(!open){
            document.querySelector('body').classList.add('overflow')
        }else{
            document.querySelector('body').classList.remove('overflow')
        }
    }

    return(
        <div
            className={open ? styles.menuContX : styles.menuCont}
            onClick={()=>menuHandler()}
        >
            <div />
        </div>
    )
}