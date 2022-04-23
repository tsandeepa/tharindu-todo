const TodoList = ({todos,showTodoItem}) => {

    return ( 
        <div className="td-all">
            {
                    todos &&
                    todos.map((todo,i)=>(
                        <div onClick={()=>showTodoItem(todo.id, todo.title)} className="todo-li" key={todo.id}>
                            <p>Title : {todo.title}</p>
                        </div>
                    ))
                }
        </div>
     );
}
 
export default TodoList;