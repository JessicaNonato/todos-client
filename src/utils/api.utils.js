import axios from "axios";

class Api {
    constructor() {
            this.api = axios.create({
                baseURL: 'http://localhost:3001/'
        })

        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers = {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
            return config
        }, (error) => {
            console.log(error)
        })
        this.api.interceptors.response.use((response) => response , 
        (error) => {
            if(error.response.status === 401){
                localStorage.removeItem('token')
                window.location = '/'
            }
            throw error
        })
    }
    login = async (loginInfo) => {
        try {
            const { data } = await this.api.post('/auth/login', loginInfo)
            localStorage.setItem('token', data.token)
            return { data }
        } catch (error) {
            throw error
        }
    }
    register = async(registerInfo) => {
        try{
            const { data } = await this.api.post('/auth/signup', registerInfo)
           
            return data
        } catch (error) {
            throw error
        }
    }
    getAllTodos = async () => {
        try {
            const { data } = await this.api.get('/todos')
            return data
        } catch (error) {
            throw error
        }
    }
    createNewTodo = async (newTodo) => {
        console.log(newTodo)
        try {
            const { data } = await this.api.post('/todos', newTodo)
            return data
        } catch (error) {
            throw error
        }
    }

    deleteTodo = async (id) => {
        try {
            const { data } = await this.api.delete(`/todos/${id}`)
            return data
        } catch (error) {
            throw error
        }
    }

    updateTodo = async(id, update) => {
        try{
            const {data} = await this.api.put(`/todos/${id}`, update)
            return data
        } catch (error){
            throw error
        }
    }
}
export default new Api()
