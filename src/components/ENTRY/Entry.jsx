
import "./entry.css";
import Signup from "../SignupPage/Signuup";

import { useState,useEffect } from "react";
let Entry = ()=>{
    const [isVisible,setIsVisible] = useState(true);
    useEffect(()=>{
        const timer  =  setTimeout(() => {
            setIsVisible(false)
            
        }, (4000));

        return ()=> clearTimeout(timer);


    },[])






    return(
        <>
        {
            isVisible?(
                <div className="first-page-container">
            <div className="first-page-image">
                <img src="./photos/logo.png" alt="logo-first" className="first-page-logo"/>

            </div>
            <div className="first-page-text">
                <h4>Made with love by Krislucas & team</h4>

            </div>
            
        </div>

            ) :<Signup/>
        }
        
        </>




    )








}

export default Entry;