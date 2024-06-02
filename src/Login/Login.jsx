import { React, useState } from "react";
export default function Login() {
   const [isEye, setEye] = useState("password");

   const eye = () => {
      if (isEye === "password") {
         setEye("text");
      } else setEye("password");
   };

   const hide = () => {
      var login = document.getElementById("Login");
      var register = document.getElementById("Register");
      if (login.style.display === "none") {
         login.style.display = "block";
         register.style.display = "none";
      } else {
         login.style.display = "none";
         register.style.display = "block";
      }
   };

   return (
      <div>
         <div className="vh-100">
            <div className="container py-5 h-100 ">
               <div className="row d-flex align-items-center justify-content-center h-100">
                  <div
                     className="col-md-12 col-lg-5 col-xl-5 offset-xl-1"
                     id="Login"
                     style={{ display: "block" }}
                  >
                     <form action="/main" method="get">
                        <div data-mdb-input-init className="form-outline mb-4">
                           <label className="form-label" for="loginEmail">
                              Username
                           </label>
                           <input
                              type="text"
                              id="loginEmail"
                              className="form-control form-control-lg inputBorders"
                           />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                           <label className="form-label" for="loginPassword">
                              Password
                           </label>
                           <input
                              type={isEye}
                              id="loginPassword"
                              className="form-control form-control-lg inputBorders"
                           />
                        </div>

                        <div className="d-flex justify-content-around align-items-center mb-4">
                           <div className="form-check">
                              <input
                                 className="form-check-input inputBorders"
                                 type="checkbox"
                                 value=""
                                 id="form1Example3"
                              />
                              <label
                                 className="form-check-label"
                                 for="form1Example3"
                              >
                                 Remember me
                              </label>
                           </div>
                           <div className="form-check">
                              <input
                                 className="form-check-input inputBorders"
                                 type="checkbox"
                                 value=""
                                 id="showPassword"
                                 onClick={eye}
                              />
                              <label
                                 className="form-check-label"
                                 for="showPassword"
                              >
                                 Show Password
                              </label>
                           </div>
                           <a href="#!">Forgot password?</a>
                        </div>

                        <a href="/main">
                           <button
                              type="submit"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary btn-lg btn-block"
                           >
                              Sign in
                           </button>
                        </a>

                        <button
                           type="button"
                           data-mdb-button-init
                           data-mdb-ripple-init
                           className="btn btn-primary btn-lg btn-block m-2"
                           onClick={hide}
                        >
                           Sign Up
                        </button>
                     </form>
                  </div>

                  <div
                     className="col-md-7 col-lg-5 col-xl-5 offset-xl-1"
                     id="Register"
                     style={{ display: "None" }}
                  >
                     <form action="/main" method="get">
                        <div data-mdb-input-init className="form-outline mb-4">
                           <label className="form-label" for="loginEmail">
                              Username
                           </label>
                           <input
                              type="text"
                              id="loginEmail"
                              className="form-control form-control-lg inputBorders"
                           />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                           <label className="form-label" for="RegisterPassword">
                              Password
                           </label>
                           <input
                              type={isEye}
                              id="RegisterPassword"
                              className="form-control form-control-lg inputBorders"
                           />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                           <label
                              className="form-label"
                              for="RegisterConfirmPassword"
                           >
                              Confirm Password
                           </label>
                           <input
                              type={isEye}
                              id="RegisterConfirmPassword"
                              className="form-control form-control-lg inputBorders"
                           />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                           <label
                              className="form-label"
                              for="RegisterAccessLevel"
                           >
                              Confirm Password
                           </label>
                           <input
                              type={isEye}
                              id="RegisterAccessLevel"
                              className="form-control form-control-lg inputBorders"
                           />
                        </div>
                        <div className="d-flex justify-content-around align-items-center mb-4">
                           <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary btn-lg btn-block"
                           >
                              Register
                           </button>
                           <a href="#" onClick={hide}>
                              Sign In
                           </a>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
