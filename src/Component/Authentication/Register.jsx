import { useState } from "react";
import { useRegisterUserMutation } from "../../utils/api";
import { useNavigate } from "react-router-dom";

function Register(){

    const redirect = useNavigate();
    const [ registerUser ] = useRegisterUserMutation();


    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userContact, setUserContact] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");

    const [formData, setFormData] = useState({});



    async function handleUserRegistration(e){
        e.preventDefault();
        const registerUserFormData = {name: userName, email: userEmail, contact: userContact, password: userPassword, confirmPassword: userConfirmPassword};
        setFormData(registerUserFormData);
        console.log(formData);

        try {
           
            
            const output = await registerUser(formData);
            if (output) console.log('Registration successfull', output);
            
        } catch (error) {
            console.log('Registration failed', error);
        }
        
    }

    return (
        <div className="registration-page">

            <h3>Register your account here</h3>
            <form onSubmit={handleUserRegistration} className="user-registration">
                <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="Full Name" />
                <br></br>
                <input value={userEmail} onChange={e => setUserEmail(e.target.value)} placeholder="Email Address" />
                <br></br>
                <input value={userContact} onChange={e => isNaN(e.target.value) || (e.target.value).length > 10  ? "" : setUserContact(e.target.value)} placeholder="Contact" type="text" />
                <br></br>
                <input value={userPassword} onChange={e => setUserPassword(e.target.value)} placeholder="Password" type="password" />
                <br></br>
                <input value={userConfirmPassword} onChange={e => setUserConfirmPassword(e.target.value)} placeholder="Confirm Password" type="password" />
                <br></br>
                <button>Register</button>

            </form>

            <div className="login-section">
                <p>or</p>
                <p style={{color: 'white'}}>Already have an account? Please click on <span style={{color: 'red'}} onClick={() => redirect('/login')}>Login</span></p>
            </div>
        </div>
    )
}
export default Register;