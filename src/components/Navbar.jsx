import React from "react";

export default function Navbar() {
   return (
      <div>
         <nav class="navbar navbar-expand-sm navbar-dark fixed-top mx-3">
            <div class="container-fluid">
               <a class="navbar-brand" href="#">
                  Byte
               </a>
               <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar"
               >
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul class="navbar-nav">
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           Link
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           Link
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           Link
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}
