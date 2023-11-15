import { useContext, useState } from "react"
import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import axios from "axios"

const Navbar = () => {

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const handleNavigate = async e => {
        navigate("/login")
    }
    const handleNavigate2 = async e => {
        navigate("/register")
    }
    const logout = async e => {
        dispatch({ type: "LOGOUT"});
        navigate("/")
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">Table Wave</span>
                </Link>
              
                {user ? (
                    <div className="navItems">
                        <button className="navButton" onClick={logout} >Logout</button>
                        <span> {user.username}</span>
                        </div>) : (<div className="navItems">
                    <button className="navButton" onClick={handleNavigate2} >Register</button>
                    <button className="navButton" onClick={handleNavigate}>Login</button>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar