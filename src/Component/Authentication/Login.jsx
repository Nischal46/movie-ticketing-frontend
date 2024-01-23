import { useState } from "react";
import { useLoginUserMutation } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

function Login(){

    const redirect = useNavigate();
    const [ loginUser ] = useLoginUserMutation();
    const { setUserData } = useContext(UserContext);

    const { userData } = useContext(UserContext);

   

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
            let userdetails = {};
            const response = await loginUser(formData);

            userdetails.name = response.data.data.name;
            userdetails.email = response.data.data.email;
            userdetails.contact = response.data.data.contact;
            userdetails.role = response.data.data.role;

            setUserData((cv) => [...cv, { userdetails}]);
            redirect('/')
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
            <p>Does not have an account? Please click on <span onClick={() => redirect('/register')}>Register</span></p>
        </div>
    </div>
}

export default Login;