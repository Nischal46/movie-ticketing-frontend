import { useState } from "react";

function Register(){
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userContact, setUserContact] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");


    function handleUserRegistration(){
        
    }

    return (
        <div className="registration-page">

            <h3>Register your account here</h3>
            <form onSubmit={handleUserRegistration} className="user-registration">
                <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="Full Name" />
                <br></br>
                <input value={userEmail} onChange={e => setUserEmail(e.target.value)} placeholder="Email Address" />
                <br></br>
                <input value={userContact} onChange={e => setUserContact(e.target.value)} placeholder="Contact" />
                <br></br>
                <input value={userPassword} onChange={e => setUserPassword(e.target.value)} placeholder="Password" />
                <br></br>
                <input value={userConfirmPassword} onChange={e => setUserConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                <br></br>
                <button>Register</button>

            </form>

            <div className="login-section">
                <p>or</p>
                <p>Already have an account? Please click on <span>Login</span></p>
            </div>
        </div>
    )
}
export default Register;