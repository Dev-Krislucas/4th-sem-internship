import { Link } from "react-router-dom";
import "./Signup.css";

let Signup = ()=>{
    return(
        <div className="signup-page">

            <div className="signup-logo">
                <img src="./photos/logo.png" alt="signup-page-logo" className="signup-page-logo"/>  
            </div>
            <div className="child-row">
                <input type="text" name="name" className="signup-text" placeholder="Name"/>
                <select name="interest" id="" className="signup-select">
                    <option value="agriculture">Agriculture</option>
                    <option value="finance">Finance</option>
                    <option value="finance">Technology</option>
                    <option value="finance">Research</option>
                    <option value="finance">Medical</option>
                </select>
            </div>
            <div className="child-row">
                <input type="text" name="email" placeholder="Email" className="signup-text"/>
                <input type="text" name="password" placeholder="Password" className="signup-text"/>
            </div>
            <div className="child-row">
                <input type="text" name="city" placeholder="City" className="signup-text"/>
                <select name="role" id="" className="signup-select">
                    <option value="investor">Investor</option>
                    <option value="raiser">Fund Raiser</option>
                </select>
            </div>
            <div className="child">
                <textarea name="description" id="" className="signup-description"placeholder="Description " ></textarea>
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