import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.text : "");

    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    const changeHandler =(e)=>{
        setInput(e.target.value); 
    };
    const submitHandler=(e)=>{
        e.preventDefault();
        if(!input){
            alert('Enter Todo ...!');
            return;
        }
        props.submitTodo(input);
        setInput("");
    };


    return ( 
    <form onSubmit={submitHandler}>
       <div  className={props.edit ? "Update-form" : ""}> 
            <input 
            type="text" 
            value={input}
            onChange={changeHandler}
            placeholder={props.edit ? "Update Value..." : "Add New Todo" } 
            ref={inputRef}/>
            <button type="submit" className={props.edit ? "" : "add-todo"}>{props.edit ? "Update" : "Add"}</button>
       </div>
    </form> );
}
 
export default TodoForm;