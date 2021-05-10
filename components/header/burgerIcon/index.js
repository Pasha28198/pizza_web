import Link from 'next/link'

import { useMobileMenuCtx } from '../../../context/mibileMenuCtx'

import precent from '../../../assets/headerIcons/percentBtn.svg'
import megaphone from '../../../assets/headerIcons/megaphoneBtn.svg'
import fast from '../../../assets/headerIcons/fastBtn.svg'
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
        <div>
            <div
                className={open ? styles.menuContX : styles.menuCont}
                onClick={()=>menuHandler()}
            >
                <div />
            </div>
            <div className={styles.menuContBig}>
                <div className={styles.burgerPart} />
                <div className={styles.absCont}>
                    <div className={styles.decktopMenu}>
                        <Link href='#'>
                            <button>
                                <img src={precent} alt=''/>
                                Акції
                            </button>
                        </Link>
                        <Link href='#'>
                            <button>
                                <img src={fast} alt=''/>
                                Доставка і оплата
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}