import Todo from "./Todo";
import { useState } from 'react';
import TodoForm from "./TodoForm";

const TodoList = ({todos,onComplete,onDelete,onUpdateTodo}) => {

const [edit,setEdit]=useState({id:null , text:"" , isCompleted:false});

const editTodo=(newValue)=>{
    onUpdateTodo(edit.id,newValue);
    setEdit({id:null , text:"" });
};

    const renderTodos = ()=>{
          if(todos.length === 0) return <p>Add some Todos</p>;
         
          return todos.map((todo)=>{
                return(
                    <Todo 
                    key={todo.id} 
                    todo={todo}
                    onComplete={()=> onComplete(todo.id)}
                    onDelete ={()=> onDelete(todo.id)}
                    onEdit={()=> setEdit(todo)}
                    />
                );
            }); 
    };

   return <div>  {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()} </div>
};
 
export default TodoList;