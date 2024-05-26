import React from "react";

export default function Main() {
   return (
      <>
         <div className="vh-100">
            <div className="container-fluid h-100">
             <nav className="w-100">navigation bar</nav>
               <div className="row vh-100">
                  <div className="col-2 col1">Sidebar</div>
                  <div className="col-10 col2">Main page</div>
               </div>
            </div>
         </div>
      </>
   );
}
