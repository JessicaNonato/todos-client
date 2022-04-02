import React, {useEffect, useState} from "react";
import Task from "../components/Task";
import AddNewTask from "../components/AddNewTask";
import api from '../utils/api.utils'


const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
            const todosApi = await api.getAllTodos();
             setTodos(todosApi);
              console.log(todosApi);
        } catch (error) {
            console.log(error);
        }
    
    };
    useEffect(() => {
        getTodos()
        
    }, []);
    
    

    return(
        <div className="page">
            <h1 className="title">Todo List</h1>
            <div>
            <AddNewTask getTodos={getTodos}/>
            </div>
            <div>
                {todos.map((task) => {
                    return(
                        <div>
                        
                      <Task completed={task.completed} title={task.title} id={task._id} getTodos={getTodos}/>
                        </div>
                       
                    )
                })}
            </div>
        </div>
    )    
    }
export default TodoPage;