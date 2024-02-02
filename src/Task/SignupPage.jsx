import React from 'react'
import classes from './SignupPage.module.css'
import leftimage from './images/TaskDashboard.png'

const SignupPage = () => {
  return (
    <>
        <div className={`${classes.nav}`}>
            <img src={""} alt="LogoImage" />
            <button>Login</button>
        </div>
        <div className={`${classes.wrapper}`}>
            <div className={`${classes.Mainleft}`}>
                <img src={leftimage} alt="Dashboard image" />
                <div className={`${classes.Left2}`}>
                Sign up (it's free!) to see how BambooHR saves you time and money by combining multiple systems into one complete HR platform.

                <div className={`${classes.Left3}`}>

                <ul>
                <p>Your free trial includes access to:</p>
                    <li>Hiring & Applicant Tracking</li>
                    <li>Onboarding & Offboarding</li>
                    <li>Paid Time Off</li>
                    <li>Time Tracking</li>
                    <li>Performance Management</li>
                    <li id={`${classes.list}`}>Benefits Tracking</li>
                    <li>Employee Database</li>
                    <li>Reporting & Analytics</li>
                    <li>BambooHR® Mobile for iPhone & Android</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className={`${classes.Mainright}`}>
            <div className={`${classes.Signupform}`}>
                <h2 id={`${classes.title}`}>Let's get Started</h2>
                <div className={`${classes.Name}`}>
                    <div className={`${classes.Name1}`}>
                    <label htmlFor="fn">First Name</label><br />
                    <input name='fn' type="text"
                    /></div>
                    <div className={`${classes.Name2}`}>
                    <label htmlFor="ln">Last Name</label><br />
                    <input name='ln' type="text"
                    />
                    </div>
                </div>
                <label htmlFor='email'>Email Address</label><br />
                <input name='email' type="email" /><br/>
                <label htmlFor="job">Job Title</label><br />
                <input type="text" name='job' /><br />
                <label htmlFor="company">Company Name</label><br />
                <input type="text" name='company' />
                <div className={`${classes.twin}`}>
                <div className={`${classes.twin1}`}>
                <label htmlFor="phone">Phone Number</label><br />
                <input type="text" name='phone' />
                </div>
                <div className={`${classes.twin2}`}>
                <label htmlFor="emp">Employee Count</label><br />
                <input type='number' name='emp' />
                </div>
                </div>
                <label htmlFor="country">Country</label><br />
                <input type="text" name='country' />
                <div className={`${classes.para}`}>
                <p>
                I authorize BambooHR to keep me informed about its products, services and events through emails and phone calls. My data will be handled according to the Privacy Policy.
                </p>
                </div>
                <div className={`${classes.btn}`}>
                <button>Get Free trial!</button>
                </div>
            </div>
            </div>
        </div>
        <div className={`${classes.footer}`}>

            </div>
    </>
  )
}

export default SignupPage
