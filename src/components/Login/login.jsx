import "./login.css";
import { Link } from "react-router-dom";

let Login = ()=>{
    return(
        <div className="login-page">

        <div className="signup-logo">
            <img src="./photos/logo.png" alt="signup-page-logo" className="login-page-logo"/>  
        </div>
        
        <div className="child-column">
            <input type="text" name="email" placeholder="Email" className="login-text"/>
            <input type="text" name="password" placeholder="Password" className="login-text"/>
        </div>
        
        <div className="child">
            <button type="submit" className="login_button">Sign In</button>
        </div>
        <div className="child">
            <p>Don't have an account ? <Link to="/signup" ><span id ="color_primary">Signup</span></Link> </p>

        </div>
    
    
    </div>
    )




}
export default Login;