import { useState } from 'react'
import Pagination from './pagination'
import SaleItem from './saleItem'
import styles from './styles.module.scss'

export default function SaleList(){

    const postArr = []
    for(let i = 0; i <= 48; i++){postArr.push(<SaleItem key={i}/>)}

    const [posts, setPosts] = useState(postArr)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(8)

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => {
        if(pageNumber <= 0 || pageNumber>Math.ceil(posts.length/postPerPage)){
            return
        }
        setCurrentPage(pageNumber)
    }

    return(
        <div className={styles.contTitle}>
            <h1>Акції</h1>
            <div className={styles.listCont}>
                {currentPosts.map((i)=>i)}
            </div>
            <Pagination
                currentPage={currentPage} 
                postPerPage={postPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    )
} 