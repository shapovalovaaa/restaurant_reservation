import { useContext, useState } from "react"
import "./register.css"
import { AuthContext } from "../../context/authContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
    })
    const [credentialsLogin, setCredentialsLogin] = useState({
        username: undefined,
        password: undefined,
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setCredentialsLogin((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    console.log(credentialsLogin)

    const handleClick = async e => {
        e.preventDefault()
        dispatch({ type: "REGISTER_START" })
        try {
            const res = await axios.post("http://localhost:8800/api/auth/register", credentials)
            
            dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
            navigate("/login")

        } catch (err) {
            dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
        }
    }

    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
                <input type="email" placeholder="email" id="email" onChange={handleChange} className="lInput" />
                <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
                <button disabled={loading} onClick={handleClick} className="lButton">Register</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Register