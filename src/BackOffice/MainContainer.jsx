/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import Dashboard from "./partials/Dashboard";
import Navbar from "./partials/Navbar";
import Catalogue from "./partials/Catalogue";
import Promotions from "./partials/Promotions";

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
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => setActiveView("Catalogue")}
            >
              <i className="bi bi-egg-fried"></i>
              <span>Catalogue</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => setActiveView("Promotions")}
            >
              <i className="bi bi-egg-fried"></i>
              <span>Promotions</span>
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
