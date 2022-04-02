import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../utils/api.utils';

const Login = () =>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate ()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           const user = await api.login({username, email, password})
           navigate('/todos')
        } catch (error) {
            setMessage(error.message)
        }
        setUsername('')
        setPassword('')
    }

    return(
        <div>
            <form onSubmit= {handleSubmit}>
                <label>Email</label>
                <input type='text' name='email' value={email} onChange = {e => setEmail(e.target.value)} />
                <label>Password</label>
                <input type='text' name='email' value={password} onChange = {e => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default Login;