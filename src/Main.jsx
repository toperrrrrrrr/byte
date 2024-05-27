import React from "react";
import Navbar from "./components/Navbar";

export default function Main() {
   return (
      <>
         <Navbar />
         <div className="vh-100">
            <div className="container-fluid h-100">
               <div className="row vh-100">
                  <div className="col-2 rounded sidebar">
                     <div class="card mx-3 my-5">
                        <div class="card-body">
                           <h4 class="card-title">Byte LOGO placeholder</h4>
                        </div>
                     </div>
                     <div class="card m-3 my-3">
                        <div class="card-body">Dashboard</div>
                     </div>
                     <div class="card m-3 my-3">
                        <div class="card-body">Another Button</div>
                     </div>
                     <div class="card m-3 my-3">
                        <div class="card-body">hallo</div>
                     </div>
                     <div class="card m-3 my-3">
                        <div class="card-body">hallo</div>
                     </div>
                  </div>
                  <div className="col-10 dashboard">
                     <div class="container mt-3">
                        <h2>Toggleable Pills</h2>
                        <br />
                        <ul class="nav nav-pills" role="tablist">
                           <li class="nav-item">
                              <a
                                 class="nav-link active"
                                 data-bs-toggle="pill"
                                 href="#home"
                              >
                                 Home
                              </a>
                           </li>
                           <li class="nav-item">
                              <a
                                 class="nav-link"
                                 data-bs-toggle="pill"
                                 href="#menu1"
                              >
                                 Menu 1
                              </a>
                           </li>
                           <li class="nav-item">
                              <a
                                 class="nav-link"
                                 data-bs-toggle="pill"
                                 href="#menu2"
                              >
                                 Menu 2
                              </a>
                           </li>
                        </ul>

                        <div class="tab-content">
                           <div id="home" class="container tab-pane active">
                              <br />
                              <h3>HOME</h3>
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipisicing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna aliqua.
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                 Scrollable
                              </p>
                           </div>
                           <div id="menu1" class="container tab-pane fade">
                              <br />
                              <h3>Menu 1</h3>
                              <p>
                                 Ut enim ad minim veniam, quis nostrud
                                 exercitation ullamco laboris nisi ut aliquip ex
                                 ea commodo consequat.
                              </p>
                           </div>
                           <div id="menu2" class="container tab-pane fade">
                              <br />
                              <h3>Menu 2</h3>
                              <p>
                                 Sed ut perspiciatis unde omnis iste natus error
                                 sit voluptatem accusantium doloremque
                                 laudantium, totam rem aperiam.
                              </p>
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
