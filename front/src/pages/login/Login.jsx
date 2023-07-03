import { useState,useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'
import {AuthContext} from '../../context/AuthContext.js'
import axios from 'axios'

 const Login =()=>{
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    //extract data from context
    const {user, loading, error, dispatch} = useContext(AuthContext);

    const navigate = useNavigate()

    //function handlers
    const handleChange = (e) =>{
        setCredentials(prev=>({
            ...prev, [e.target.id]: e.target.value
        }));
    }
    const handleClick =async (e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"}) 
        try{
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload:res.data})
            navigate("/")
        } catch(err){
            dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
        }
    }
    //check user
    console.log(user)

    return(
        <div className = "login">
            <div className="lContainer">
                <input 
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                    required
                />
                <button 
                    onClick={handleClick}
                >
                    Login
                </button>
                {/*error message*/}
                {error && <span>{error.message}</span>}
            </div>
          
        </div>
    )
}


export default Login;