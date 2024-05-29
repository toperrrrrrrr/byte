import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Main() {
   return (
      <>
         <div>
            <div className="vh-100">
               <div className="container-fluid h-100">
                  <div className="row vh-100">
                     <Sidebar />
                     <div className="col-10 dashboard">
                        <div class="container ">
                           <p>Hello Admin, welcome back!</p>
                           <h1>Your dashboard is updated</h1>
                        </div>
                        <div class="container mt-3">
                           <div className="row visualize gx-5 vh-100">
                              <div className="col-4 colorize2 ">
                                 <div class="p-3 border bg-dark vh-100">
                                    Custom column padding
                                 </div>
                              </div>
                              <div className="col-8 colorize2">
                                 <div className="row visualize gx-5 ">
                                    <div className="col-4 colorize1">
                                       <div class="p-3 border bg-dark">
                                          Custom column padding
                                       </div>
                                    </div>
                                    <div className="col-4 colorize2">
                                       <div class="p-3 border bg-dark">
                                          Custom column padding
                                       </div>
                                    </div>
                                    <div className="col-4 colorize3">
                                       <div class="p-3 border bg-dark">
                                          Custom column padding
                                       </div>
                                    </div>
                                    <div className="col-6 colorize1 ">
                                       <div class="p-3 border bg-dark">
                                          Custom column padding
                                       </div>
                                    </div>

                                    <div className="col-3 colorize3 ">
                                       <div class="p-3 border bg-dark">
                                          Custom column padding
                                       </div>
                                    </div>
                                    <div className="col-3 colorize2 ">
                                       <div class="p-3 border bg-dark">
                                          Custom column padding
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
