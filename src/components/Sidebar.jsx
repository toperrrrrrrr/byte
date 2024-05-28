import React from "react";

export default function Sidebar() {
   return (
      <>
         <aside className="col-2 rounded sidebar secondaryBg">
            <div className=" mx-3 my-5 ">
               <h1 className="secondaryBg brand">ByteMi</h1>
            </div>

            <ul className="sidebar-nav m-3" id="sidebar-nav">
               <li className="nav-item">
                  <a
                     className="nav-link collapsed"
                     data-bs-target="#components-nav"
                     data-bs-toggle="collapse"
                     href="/"
                  >
                     <i className="bi bi-menu-button-wide"></i>
                     <span>Components</span>
                     <i className="bi bi-chevron-down ms-auto"></i>
                  </a>
                  <ul
                     id="components-nav"
                     className="nav-content collapse "
                     data-bs-parent="#sidebar-nav"
                  >
                     <li>
                        <a href="components-alerts.html">
                           <span>Alerts</span>
                        </a>
                     </li>
                  </ul>
               </li>

               <li className="nav-item">
                  <a
                     className="nav-link collapsed"
                     data-bs-target="#forms-nav"
                     data-bs-toggle="collapse"
                     href="/"
                  >
                     <i className="bi bi-journal-text"></i>
                     <span>Forms</span>
                     <i className="bi bi-chevron-down ms-auto"></i>
                  </a>
                  <ul
                     id="forms-nav"
                     className="nav-content collapse "
                     data-bs-parent="#sidebar-nav"
                  >
                     <li>
                        <a href="forms-elements.html">
                           <span>Form Elements</span>
                        </a>
                     </li>
                  </ul>
               </li>

               <li className="nav-item">
                  <a
                     className="nav-link collapsed"
                     data-bs-target="#tables-nav"
                     data-bs-toggle="collapse"
                     href="/"
                  >
                     <i className="bi bi-layout-text-window-reverse"></i>
                     <span>Tables</span>
                     <i className="bi bi-chevron-down ms-auto"></i>
                  </a>
                  <ul
                     id="tables-nav"
                     className="nav-content collapse "
                     data-bs-parent="#sidebar-nav"
                  >
                     <li>
                        <a href="tables-general.html">
                           <span>General Tables</span>
                        </a>
                     </li>
                  </ul>
               </li>
            </ul>
         </aside>
      </>
   );
}
