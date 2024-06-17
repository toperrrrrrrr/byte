import React from "react";

export default function Navbar() {
   return (
      <>
         <header
            id="header"
            className="header fixed-top d-flex align-items-center"
         >
            <div className="d-flex align-items-center justify-content-between">
               <a href="/" className="logo d-flex align-items-center">
                  <span className="d-none d-lg-block">Hari</span>
               </a>
            </div>
         </header>
      </>
   );
}
