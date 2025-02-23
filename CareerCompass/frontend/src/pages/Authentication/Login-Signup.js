import { display } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Style.css';
import axios from "axios";

function Login_Signup() {
    const [Active, setActive] = useState(false);
    const navigate = useNavigate();
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");
    const [username, setUsername] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [userType, setUserType] = useState("user");
    let api;

    const SignIn = async (e) => {
        e.preventDefault();
        console.log(loginEmail);
        console.log(loginPassword);
        console.log(userType)

        try {
            if(userType === "user"){
                api = "http://localhost:8000/user/login"
            }else{
                api = "http://localhost:8000/admin/login"
            }
            const response = await axios.post(api, {
                "email": loginEmail,
                "password": loginPassword,
            },{
                headers: {
                  "Content-Type": "application/json", // Ensure the correct content type
                },
              }
            )

            console.log("Login Successful:", response?.data?.data)
            localStorage.setItem("isadmin",false)
            navigate('/userDashboard')
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.message || "An error occurred");
            } else if (err.request) {
                console.log("No response from the server");
            } else {
                console.log("An unexpected error occurred");
            }
        }
    }

    const SignUp = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(signupEmail);
        console.log(signupPassword);
        console.log(userType)

        try {
            if(userType === "user"){
                api = "http://localhost:8000/user/register"
            }else{
                api = "http://localhost:8000/admin/register"
            }
            const response = await axios.post(api, {
                "username": username,
                "email": signupEmail,
                "password": signupPassword,
            },{
                headers: {
                  "Content-Type": "application/json", // Ensure the correct content type
                },
              }
            )

            console.log("SignUp Successful:", response)
            setUsername("");
            setSignupEmail("");
            setSignupPassword("");
            localStorage.setItem("isadmin",true)
            navigate('/adminDashboard')
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.message || "An error occurred");
            } else if (err.request) {
                console.log("No response from the server");
            } else {
                console.log("An unexpected error occurred");
            }
        }
    }

    return (
        <>
            <div className="my-style">
                <div className="logo-name"><img src={require('./logo2-2.png')} alt='app logo' /><h1>CareerCompass</h1></div>
                <div className={Active ? "container right-panel-active" : "container"} id="container">
                    <div className="form-container sign-up-container">
                        <form onSubmit={SignUp}>
                            <h1>Create Account</h1>
                            <br />
                            <span>or use your email for registration</span>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "70px", margin: "10px 0px", marginRight: "20px" }}>
                                <label style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="user"
                                        checked={userType === "user"}
                                        onChange={() => setUserType("user")}
                                    />
                                    User
                                </label>
                                <label style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="admin"
                                        checked={userType === "admin"}
                                        onChange={() => setUserType("admin")}
                                    />
                                    Admin
                                </label>
                            </div>
                            <input type="text" placeholder="Name" value={username ?? ""} onChange={(e) => { setUsername(e.target.value) }} />
                            <input type="email" placeholder="Email" value={signupEmail ?? ""} onChange={(e) => { setSignupEmail(e.target.value) }} />
                            <input type="password" placeholder="Password" value={signupPassword ?? ""} onChange={(e) => { setSignupPassword(e.target.value) }} />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={SignIn}>
                            <h1>Sign in</h1>
                            <br />
                            <span>Use your account</span>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "70px", margin: "10px 0px", marginRight: "20px" }}>
                            <label style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="user"
                                        checked={userType === "user"}
                                        onChange={() => setUserType("user")}
                                    />
                                    User
                                </label>
                                <label style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="admin"
                                        checked={userType === "admin"}
                                        onChange={() => setUserType("admin")}
                                    />
                                    Admin
                                </label>
                            </div>
                            <input type="email" placeholder="Email" value={loginEmail ?? ""} onChange={(e) => { setloginEmail(e.target.value) }} />
                            <input type="password" placeholder="Password" value={loginPassword ?? ""} onChange={(e) => { setloginPassword(e.target.value) }} />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={() => setActive(!Active)}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={() => setActive(!Active)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login_Signup;
