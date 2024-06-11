import React from "react";
import fourofour from "../res/imgs/missing-page.svg";

export default function NotFound() {
   return (
      <div>
         <main>
            <div class="container">
               <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                  <img
                     src={fourofour}
                     class="img-fluid py-5"
                     alt="Page Not Found"
                  />
                  <h2>The page you are looking for doesn't exist.</h2>
                  <a class="btn" href="/">
                     Back to home
                  </a>
               </section>
            </div>
         </main>
      </div>
   );
}
