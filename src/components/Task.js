import React from "react";
import axios from "axios";
import api from '../utils/api.utils'

const Task = ({title, completed, id, getTodos}) => {
   
    const handleClick = async (id) => {
            try {
                 await api.updateTodo(id,
                    {   title: title,
                        completed: !completed}
                  );
                  getTodos();
                  
            } catch (error) {
               
            }
        
        };

        
    const handleDelete = (async (id) => {
        console.log('qualquer coisa')
            try {
                 await api.deleteTodo(id)
                  getTodos();
                  
                  
            } catch (error) {
                
                console.log(error.response)
            }
        
        })
    

    return(
        <div className="task">
            <input type="checkbox" checked = {completed} onClick ={() => handleClick(id)}/>
            {completed ? <p className="taskTitle"><s>{title}</s></p> :<p className="taskTitle">{title}</p>  }
            <button onClick={() => handleDelete(id)} className="delete">x</button>
        </div>
    )
    }
export default Task;