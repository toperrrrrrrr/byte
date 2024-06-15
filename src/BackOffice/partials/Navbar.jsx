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
                  <img
                     src="/imgs/favicon.ico"
                     alt=""
                     className="rounded-circle"
                  />
                  <span className="d-none d-lg-block">FlatXpnse</span>
               </a>
               <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>

            <nav className="header-nav ms-auto">
               <ul className="d-flex align-items-center">
                  <li className="nav-item pe-3">
                     <a
                        className="nav-link nav-profile d-flex align-items-center pe-0"
                        href="/"
                        data-bs-toggle="dropdown"
                     >
                        <img
                           src="/imgs/myphoto.png"
                           alt="Profile"
                           className="rounded-circle"
                        />
                        <span className="d-none d-md-block ps-2">
                           N. Lacsina
                        </span>
                     </a>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
}
