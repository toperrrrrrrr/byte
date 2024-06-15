import React from "react";
import "../res/css/App.css";
import Sidebar from "./partials/Sidebar";
import Navbar from "./partials/Navbar";

export default function MainContainer() {
   return (
      <>
         <Navbar />
         <Sidebar />

         <main id="main" className="main">
            <div className="pagetitle">
               <nav>
                  <ol className="breadcrumb">
                     <li className="breadcrumb-item active" id="date"></li>
                     <li className="breadcrumb-item" id="time"></li>
                  </ol>
               </nav>
            </div>

            <section className="section dashboard">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="row">
                        <div className="col-xxl-6 col-md-6">
                           <div className="card info-card">
                              <div className="card-body">
                                 <h5 className="card-title">
                                    Running Balance:{" "}
                                 </h5>
                                 <div className="d-flex align-items-center">
                                    <div className="ps-3">
                                       <h1>
                                          <span>₱</span>
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
                  {/* <!-- End Left side columns --> */}

                  {/* <!-- Right side columns --> */}
                  <div className="col-lg-4">
                     <div className="card"></div>
                     <div className="card">
                        <div className="card-body pb-0 ">
                           <h5 className="card-title ">Let the wheel decide</h5>
                           <div className="roulette-container">
                              <div className="roulette"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </>
   );
}
