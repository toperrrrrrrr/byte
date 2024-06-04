import { React, useState } from "react";
import Alerts from "../Alerts/Alerts";
import "../res/fonts/material.css"
import "./Login.css"
import Axios from "axios"

export default function Login() {

   const [isUsername, setUsername] = useState("");
   const [isPassword, setPassword] = useState("");
   const [showPopup, setShowPopup] = useState(false);
   const [isPlaceholderPW, setPlaceholderPW] = useState("*******************");
   const [isEye, setEye] = useState("password");


   const handleClosePopup = () => {
      setShowPopup(false);
   };

   const handleConfirmAction = () => {
      handleClosePopup();
   };


   const testbutton = async () => {
      try {
        await Axios.get(
          `http://localhost:1127/test/`
        );
      
      } catch (error) {
        console.error(error);
      }
    };

   const togglePasswordVisibility = () => {
      if (isEye === "password") {
         setEye("text");
         setPlaceholderPW("Type your password");
      } else {
         setEye("password");
         setPlaceholderPW("******");
      }
   };

   return (
      <div>
         <div className="bg">
            <div className="d-flex justify-content-center align-items-center vh-100">
               <form className="wrap-login p-5">
                  <span className="signin-title "> Sign in </span>
                  <div className="wrap-input w-100">
                     <span>Username</span>
                     <input
                        className="inputs"
                        type="text"
                        placeholder="Enter your username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                     />
                     <span className="icons" data-symbol="&#xf206;"></span>
                  </div>
                  <div className="wrap-input" data-validate="Password is required">
                     <span>Password</span>
                     <input
                        className="inputs"
                        type={isEye}
                        placeholder={isPlaceholderPW}
                        value={isPassword}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <span
                        className="icons"
                        onClick={togglePasswordVisibility}
                        data-symbol="&#xf15c;"
                     ></span>

                  </div>

                  <div className="form-group">
                     <div>
                        <input type="checkbox" id="remember" className="cbox" />
                        <label className="m-1" htmlFor="remember">
                           Remember Me
                        </label>
                     </div>
                     <div>
                        <a href="#" className="hyperlink">Forgot Password</a>
                     </div>
                  </div>


                  <div className="btn-wrap "  onClick={testbutton}>
                     <button className="btn-login">Login</button>
                  </div>


                  <div className="text-center pt-115">
                     <span className="mutedText">Don’t have an account?</span>
                     <a className="hyperlink" >
                        Sign Up
                     </a>
                  </div>
               </form>
            </div>
            <Alerts
               isOpen={showPopup}
               title="Wrong Credentials"
               message="Please Double check"
               onClose={handleClosePopup}
               isHidden="true"
               onConfirm={handleConfirmAction}
            />
         </div>
      </div>
   );
}
