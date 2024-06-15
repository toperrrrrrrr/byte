import React from "react";

import Sidebar from "./partials/Sidebar";
import Navbar from "./partials/Navbar";
import Todos from "./partials/Todos";

export default function MainContainer() {
   return (
      <>
         {/* <Navbar /> */}
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
                  <span className="d-none d-lg-block">Hari</span>
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
         {/* <Sidebar /> */}
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
         <main id="main" className="main">
            <section className="section dashboard">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="row">
                        <div className="col-xxl-6 col-md-6">
                           <div className="card info-card">
                              <div className="card-body">
                                 <h5 className="card-title">
                                    Running Balance:
                                 </h5>
                                 <div className="d-flex align-items-center">
                                    <div className="ps-3">
                                       <h1>
                                          <span>

                                             <Todos />
                                          </span>
                                       </h1>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-md-6">
                           <div className="card info-card">
                              <div className="card-body">
                                 <h5 className="card-title">
                                    Spent This Week:{" "}
                                 </h5>
                                 <div className="d-flex align-items-center">
                                    <div className="ps-3">
                                       <h1>
                                          <span>₱</span>0
                                       </h1>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-12"></div>

                        <div className="col-12"></div>
                     </div>
                  </div>

                  <div className="col-lg-4">
                     <div className="card">
                        <div className="card-body pb-0 ">
                           <h5 className="card-title ">Let the wheel decide</h5>
                           <div className="roulette-container"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </>
   );
}
