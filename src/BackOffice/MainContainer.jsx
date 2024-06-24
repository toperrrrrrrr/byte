/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import Dashboard from "./partials/Dashboard";
import Navbar from "./partials/Navbar";
import Catalogue from "./partials/Catalogue";
import Promotions from "./partials/Promotions";
import Item from "./partials/Item";

export default function MainContainer() {
   const [activeView, setActiveView] = useState("dashboard");

   const renderView = () => {
      switch (activeView) {
         case "Dashboard":
            return <Dashboard />;
         case "Catalogue":
            return <Catalogue />;
         case "Promotions":
            return <Promotions />;
         case "Item":
            return <Item />;
         default:
            return <Dashboard />;
      }
   };

   return (
      <div className="bg">
         <Navbar />
         <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
               <li className="nav-item">
                  <a
                     className="nav-link"
                     href="#"
                     onClick={() => setActiveView("Dashboard")}
                  >
                     <i className="bi bi-house-door-fill"></i>
                     <span>Dashboard</span>
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     className="nav-link"
                     href="#"
                     onClick={() => setActiveView("Catalogue")}
                  >
                     <i className="bi bi-basket-fill"></i>
                     <span>Catalogue</span>
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     className="nav-link"
                     href="#"
                     onClick={() => setActiveView("Promotions")}
                  >
                     <i className="bi bi-tags-fill"></i>
                     <span>Promotions</span>
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     className="nav-link"
                     href="#"
                     onClick={() => setActiveView("Promotions")}
                  >
                     <i className="bi bi-cash-coin"></i>
                     <span>Pricing</span>
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     className="nav-link"
                     href="#"
                     onClick={() => setActiveView("Promotions")}
                  >
                     <i className="bi bi-file-earmark-bar-graph-fill"></i>
                     <span>Reporting</span>
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     className="nav-link"
                     href="#"
                     onClick={() => setActiveView("Promotions")}
                  >
                     <i className="bi bi-nut-fill"></i>
                     <span>Settings</span>
                  </a>
               </li>
            </ul>
         </aside>

         <main id="main" className="main vh-100">
            <section className="section dashboard">{renderView()}</section>
         </main>
      </div>
   );
}
