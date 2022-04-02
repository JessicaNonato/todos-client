
import './App.css';
import "./App.css";
import { Routes, Route } from "react-router-dom";

import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';
import SigninPage from './pages/SigninPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/todos' element={<TodoPage/>}/>
        <Route path='/signin' element={<SigninPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
