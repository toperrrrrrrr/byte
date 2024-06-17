import React from "react";

export default function Sidebar() {
   return (
      <>
         <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
               <li className="nav-item">
                  <a className="nav-link " href="/Backoffice">
                     <i className="bi bi-grid"></i>
                     <span>Dashboard</span>
                  </a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="/Catalogue">
                     <i className="bi bi-egg-fried"></i>
                     <span>Catalogue</span>
                  </a>
               </li>
            </ul>
         </aside>
      </>
   );
}
