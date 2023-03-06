import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from 'react';
import NavBar from "./NavBar";
import { useEffect } from 'react';

const TodoApp = () => {
    const[todos,setTodos]=useState([]);
    const [filteredTodos,setFilteredTodos] = useState([]);
    const [selectedOption,setSelectedOption] = useState("ALL");

    useEffect(()=>{
      filterTodos(selectedOption.value);
    }, [todos, selectedOption]);

    const addTodo =(input)=>{
      console.log(input);
      const newTodo ={
        id:Math.floor(Math.random()*1000),
        isCompleted:false,
        Text:input,
      };
      setTodos([...todos , newTodo]); 
    };

    const completeTodo = (id) =>{
      const index = todos.findIndex((todo)=>todo.id===id);
      const selectedTodo ={...todos[index]};
      selectedTodo.isCompleted = !selectedTodo.isCompleted;
      console.log(selectedTodo);
      const updatedTodos = [...todos];
      updatedTodos[index] = selectedTodo;
      setTodos(updatedTodos);
    }; 

    const removeTodo=(id)=>{
      const filteredTodos = todos.filter((t) => t.id !== id);
      setTodos(filteredTodos);
      console.log(filteredTodos);
    };

    const updateTodo=(id , newValue)=>{
      const index = todos.findIndex((todo)=>todo.id===id);
      const selectedTodo ={...todos[index]};
      selectedTodo.Text = newValue;
      console.log(selectedTodo);
      const updatedTodos = [...todos];
      updatedTodos[index] = selectedTodo;
      setTodos(updatedTodos);

    };

    const filterTodos = (status)=>{
      switch(status){
        
        case "Completed" :
          setFilteredTodos(todos.filter((t)=>t.isCompleted));
        break;

        case "Uncompleted" :
          setFilteredTodos(todos.filter((t)=>!t.isCompleted));
        break;

        default :
         setFilteredTodos(todos);
      }
    };

    const selectHandler =(e)=>{
      setSelectedOption(e);
      filterTodos(e.value);
  };


    return ( 
    <div className="container">
      <NavBar unCompletedTodos={todos.filter((t)=>!t.isCompleted).length}
            selectedOption={selectedOption} 
            onChange={selectHandler}/>
      <TodoForm submitTodo={addTodo} />   
      <TodoList todos={filteredTodos}
            onComplete={completeTodo}
            onDelete={removeTodo} 
            onUpdateTodo={updateTodo}/> 
    </div> );
}
 
export default TodoApp;