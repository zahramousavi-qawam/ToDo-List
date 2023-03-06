import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({unCompletedTodos ,onChange ,selectedOption}) => {

    
    if (!unCompletedTodos) return <h2> Set Your Today Todos !</h2>;
    return ( 

            <header>
                 <span>{unCompletedTodos}</span> <h2> aren't Completed</h2> 
                 <Select onChange={onChange} 
                 value={selectedOption} 
                 options={options}
                 className="select" />
                 {/* <select onChange={onSelect} value={status}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                 </select> */}
            </header>
    
     );
};
 
export default NavBar;