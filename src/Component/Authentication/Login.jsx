function Login(){
    return <div className="login-page">
        <h3>Login</h3>
        <form>
            <input value="" placeholder="Email or Username" />
            <br></br>
            <input value="" placeholder="password" />
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