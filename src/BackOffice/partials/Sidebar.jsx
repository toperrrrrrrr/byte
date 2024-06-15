import React from "react";

export default function Sidebar() {
   return (
      <>
         <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
               <li className="nav-item">
                  <a className="nav-link " href="/">
                     <i className="bi bi-grid"></i>
                     <span>Dashboard</span>
                  </a>
               </li>

               <li className="nav-item">
                  <a className="nav-link" href="/foods">
                     <i className="bi bi-egg-fried"></i>
                     <span>Foods</span>
                  </a>
               </li>

               <li className="nav-item" disabled>
                  <a className="nav-link" href="#">
                     <i className="bi bi-piggy-bank"></i>
                     <span>Contributions</span>
                  </a>
               </li>
            </ul>
         </aside>
      </>
   );
}
