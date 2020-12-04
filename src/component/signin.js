import React from 'react'
import '../signin.css'
  
function Signin() {
        return (
            <div>
                <div className="signin-body">
                    <div href="/signin" className="container-sigin" id="container">
                        <div className="form-container sign-in-container">
                            <form className="form-signin" action="#">
                                <h2 style={{color:'#FF0059  '}}>LOGIN ADMIN</h2><br/>
                                <input className="signin-input-thongtin" type="email" placeholder="Email" />
                                <input className="signin-input-thongtin" type="password" placeholder="Password" />
                                <a className="a-Forgotyourpassword">Forgot your password?</a><br/>
                                <button className="button-signin-signup">Sign In</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-right">
                                    <h1 style={{marginLeft:'90px'}}>Hello, Friend!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Signin;