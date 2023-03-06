const Todo = ({todo,onComplete,onDelete,onEdit}) => {
    return ( 
        <div className="todo" >
                        <div onClick={onComplete} className={`todoText ${todo.isCompleted ? "completed" : "" || "todo-text"} `} > {todo.Text} </div>
                        <div className="todo-buttons">
                            <button onClick={onEdit}>Edit</button>
                            <button className="remove" onClick={onDelete}>Delete</button>
                        </div>
                    </div>
     );
}
 
export default Todo;