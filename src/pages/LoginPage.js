import Login from '../components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    return(
        <div>
            <h1>Login</h1>
            <Login/>
            <Link to='/signin'>
                <button type='button'>
                    Register
                </button>
            </Link>
        </div>
        
    )

}
export default LoginPage;