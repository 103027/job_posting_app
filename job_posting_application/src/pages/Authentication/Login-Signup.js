import React from 'react';
import { useState } from 'react';
import './Style.css';

function Login_Signup() {
    const [Active, setActive] = useState(false);
    return (
        <>
            <div class="my-style">
                <div class="logo-name"><img src={require('./logo2-2.png')} alt='app logo' /><h1>CareerCompass</h1></div>
                <div class={Active ? "container right-panel-active" : "container"} id="container">
                    <div class="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <br />
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <br />
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn" onClick={() => setActive(!Active)}>Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp" onClick={() => setActive(!Active)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login_Signup;
