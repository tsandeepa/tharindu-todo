const PaginationUL = ({listsForPage,totalLists,paginate}) => {
    
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalLists / listsForPage); i++){
        pageNumbers.push(i)
        console.log(i);
    }
    console.log(totalLists);
    console.log(listsForPage);
    console.log(pageNumbers);
    return(
        <ul className="pagination-ul">
            {   
                pageNumbers.map((pageno)=>(
                    <li onClick={()=>paginate(pageno)}>{pageno}</li>
                ))
            }
        </ul>
    )
    
}
 
export default PaginationUL;