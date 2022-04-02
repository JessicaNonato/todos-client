import { useState } from "react"
import { Link } from 'react-router-dom';
import api from '../utils/api.utils';
import { useNavigate } from "react-router-dom";

const Signin = () =>{
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate ()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('to aqui')
        try {
           const user = await api.register({name, email, password})
           navigate('/')
        } catch (error) {
            setMessage(error.message)
        }
        setEmail('')
        setPassword('')
        setName('')
    }

    return(
        <div>
            <form onSubmit= {handleSubmit}>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange = {e => setName(e.target.value)} />
                <label>Email</label>
                <input type='text' name='email' value={email} onChange = {e => setEmail(e.target.value)} />
                <label>Password</label>
                <input type='text' name='password' value={password} onChange = {e => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
                
            </form>
        </div>
    )
}
export default Signin;