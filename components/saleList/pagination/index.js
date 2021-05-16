import styles from './styles.module.scss'

import left from '../../../assets/pagination/left.svg'
import right from '../../../assets/pagination/right.svg'

export default function Pagination({ currentPage, postPerPage, totalPosts, paginate}){
    
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i)
    }
    
    return(
        <div className={styles.pagin}>
            <img 
                onClick={()=>paginate(currentPage-1)}
                src={left} 
                alt=''
            />
            <div>
                {
                    pageNumbers.map((number, id)=>(
                        <a  
                            className={currentPage===number ? styles.active : null}
                            href='#'
                            key={number+id}
                            onClick={()=>paginate(number)}
                        >
                            {number}
                        </a>
                    ))
                }
            </div>
            <img 
                onClick={()=>paginate(currentPage+1)}
                src={right} 
                alt=''
            />
        </div>
    )
}