import { Link } from "react-router-dom";
import "./Signup.css";

let Signup = ()=>{
    return(
        <div className="signup-page">

            <div className="signup-logo">
                <img src="./photos/logo.png" alt="signup-page-logo" className="signup-page-logo"/>  
            </div>
            <div className="child-row">
                <input type="text" name="name"/>
                <select name="interest" id="">
                    <option value="agriculture">Agriculture</option>
                    <option value="finance">Finance</option>
                    <option value="finance">Technology</option>
                    <option value="finance">Research</option>
                    <option value="finance">Medical</option>
                </select>
            </div>
            <div className="child-row">
                <input type="text" name="email" placeholder="Email"/>
                <input type="text" name="password" placeholder="password"/>
            </div>
            <div className="child-row">
                <input type="text" name="city" placeholder="City"/>
                <select name="role" id="">
                    <option value="investor">Investor</option>
                    <option value="raiser">Fund Raiser</option>
                </select>
            </div>
            <div className="child">
                <textarea name="description" id="" ></textarea>
            </div>
            <div className="child">
                <button type="submit" className="signup_button">Sign In</button>
            </div>
            <div className="child">
                <p>Already Signed Up ? <span id ="color_primary">Login</span> </p>

            </div>
        
        
        </div>

    )
}

export default Signup;