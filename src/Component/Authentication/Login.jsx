import { useState } from "react";
import { useLoginUserMutation } from "../../utils/api";

function Login(){

    const [ loginUser ] = useLoginUserMutation();

    const [formData, setformData] = useState({
        email: "",
        password: ""
    })


    function handleChange(e){
        setformData((prevdata) => ({
            ...prevdata, [e.target.name]: [e.target.value]
        }))
    }

    async function handlesubmitLogin(e){
        e.preventDefault();
        try{
            const response = await loginUser(formData);
            console.log('Login successfull', response);
        }
        catch(error){
            console.log('Login Failed', error);
        }
    }

    return <div className="login-page">
        <h3>Login</h3>
        <form onSubmit={handlesubmitLogin}>
            <input name="email" value={formData.email} placeholder="Email or Username" type="email" onChange={handleChange} />
            <br></br>
            <input name="password" value={formData.password} placeholder="password" type="password" onChange={handleChange} />
            <br></br>

            <button>Login</button>
        </form>

        <div className="login-section">
            <p>or</p>
            <p>Already have an account? Please click on <span>Register</span></p>
        </div>
    </div>
}

export default Login;