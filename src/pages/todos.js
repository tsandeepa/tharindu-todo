import { ThemeContext } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import PaginationUL from "../components/Pagination";
import TodoItem from "../components/todoItem";
import TodoList from "../components/todolist";


const Todos = () => {
    const navigate = useNavigate()

    const [todos, setTodos] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    const [listsForPage, setlistsForPage] = useState(10);

    const [showPopup, setshowPopup] = useState(false);
    const [toDoId, settoDoId] = useState(null);
    const [toDoTitle, settoDoTitle] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTodos(data)
        })
    }, [navigate]);

    const indexOfLastItem = currentPage * listsForPage;
    const indexOfFirstItem = indexOfLastItem - listsForPage;
    const currentLists = todos?.slice(indexOfFirstItem,indexOfLastItem)
    console.log(currentLists);

    const  paginate = (pageno) =>{
        setcurrentPage(pageno)
    }
    const showTodoItem = (id,title) =>{
        console.log(id);
        settoDoId(id);
        settoDoTitle(title);
        setshowPopup(true)
    }

    const handleClose = () => setshowPopup(false)

    return ( 
        <div>
            <Header />
            <h2>Todos</h2>

            <div className="todo-ul">
                <TodoList todos={currentLists} showTodoItem={showTodoItem}/>
                {   todos &&
                    <PaginationUL listsForPage={listsForPage} totalLists={todos.length} paginate={paginate}/>
                }

                

            </div>
            {showPopup ? <TodoItem toDoId ={toDoId} toDoTitle={toDoTitle} handleClose={handleClose}/>:''}

        </div>
     );
}
 
export default Todos;