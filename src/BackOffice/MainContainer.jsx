import React from "react";
import "../res/css/App.css";

export default function MainContainer() {
   return (
      <div className="vh-100">
         <div className="container mw-100 ">
            <div className="row">
               <div className="col-md-1 colorize1"></div>
               <div className="col-md-11 colorize1 ">
                  <form className="wrap-login p-5">
                     <span className="signin-title "> Product line </span>
                     <div className="wrap-input w-100">
                        <span>Item name</span>
                        <input className="inputs" type="text" required />
                     </div>
                     <div className="wrap-input w-100">
                        <span>Description</span>
                        <input className="inputs" type="text" required />
                     </div>
                     <div className="wrap-input w-100">
                        <span>Display as</span>
                        <input className="inputs" type="text" required />
                     </div>
                     <div className="wrap-input w-100">
                        <span>Price</span>
                        <input className="inputs" type="text" required />
                     </div>
                     <div className="wrap-input w-100">
                        <span>Category</span>
                        <input className="inputs" type="text" required />
                     </div>
                     <div className="wrap-input w-100">
                        <span>Course</span>
                        <input className="inputs" type="text" required />
                     </div>
                     <div className="btn-wrap">
                        <button className="btn-login" type="submit">
                           Register
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
