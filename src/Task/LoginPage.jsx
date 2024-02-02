import React from 'react'
import classes from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <>
        <div className={`${classes.signinWrapper}`}>
            <div className={`${classes.signin}`}>
                <h2>Sign in to HR Portal</h2>
                <p>Enter your details below.</p>
                <div className={`${classes.emailpart}`}>
                <span>EMAIL ADDRESS</span><br />
                <input type="text"
                placeholder='perterhail@gmail.com'/>
                </div>
                <div className={`${classes.pwpart}`}>

                <div className={`${classes.pwpart2}`}><span>PASSWORD</span><a href="">forgot password?</a></div>
                <input type="text"
                placeholder='Enter your password'/>
                </div>
                <button className={`${classes.btnpart}`}>SIGN IN</button>
            </div>
        </div>
    </>
  )
}

export default LoginPage
