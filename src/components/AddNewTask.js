import { useState } from "react"

import api from '../utils/api.utils'

const AddNewTask = ({getTodos}) => {
    const [title, setTitle] = useState('')
   

    const add = (async (e) => {
        e.preventDefault()
            try {
                 await api.createNewTodo({title})
                 setTitle('')
                  getTodos();
                  
                  
            } catch (error) {
                
                console.log(error.response)
            }
        
        })

return(
    <div>
           <input 
                type="text"
                placeholder="Add Task"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="input"
                />
                <button onClick={add} className="button"> Adicionar </button>
    </div>
)
}
export default AddNewTask;