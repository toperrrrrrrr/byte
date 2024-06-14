import { React, useState } from "react";
import Alerts from "../Alerts/Alerts";
import "../res/fonts/material.css";
import "./Login.css";
import Axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Login() {
   const [isUsername, setUsername] = useState("");
   const [isPassword, setPassword] = useState("");
   const [showPopup, setShowPopup] = useState(false);
   const [isPlaceholderPW, setPlaceholderPW] = useState("*******************");
   const [isEye, setEye] = useState("password");
   const [message, setMessage] = useState("");
   const navigate = useNavigate();

   const handleOpenPopup = () => {
      setShowPopup(true);
   };
   const handleClosePopup = () => {
      setShowPopup(false);
   };

   const handleConfirmAction = () => {
      handleClosePopup();
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await Axios.post("http://localhost:1127/api/login", {
            isUsername: isUsername,
            isPassword: isPassword,
         });
         setMessage(`Login successful! Token: ${res.data.token}`);
         navigate("/Backoffice");

         // Save token to localStorage or state
      } catch (err) {
         handleOpenPopup();
         setMessage("Login failed. " + err.response.data.msg);
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
               <form className="wrap-login p-5" onSubmit={handleSubmit}>
                  <span className="signin-title "> Sign in </span>
                  <div className="wrap-input w-100">
                     <span>Username</span>
                     <input
                        className="inputs"
                        type="text"
                        placeholder="Enter your username"
                        value={isUsername}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                     />
                     <span className="icons" data-symbol="&#xf206;"></span>
                  </div>
                  <div
                     className="wrap-input"
                     data-validate="Password is required"
                  >
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
                        <a href="/" className="hyperlink">
                           Forgot Password
                        </a>
                     </div>
                  </div>

                  <div className="btn-wrap ">
                     <button className="btn-login" type="submit">
                        Login
                     </button>
                  </div>
 

                  <div className="text-center pt-115">
                     <span className="mutedText">Don’t have an account?</span>
                     <a className="hyperlink" href="/Register">
                        Sign Up
                     </a>
                  </div>
               </form>
            </div>
            <Alerts
               isOpen={showPopup}
               title="Wrong Credentials"
               message={message}
               onClose={handleClosePopup}
               isHidden="true"
               onConfirm={handleConfirmAction}
            />
         </div>
      </div>
   );
}
