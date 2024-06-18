import React, { useEffect, useState } from "react";

import axios from "axios";
import Navbar from "./partials/Navbar";
import Sidebar from "./partials/Sidebar";
import AddProductLine from "./partials/AddProductLine";

export default function Catalogue() {
   const [produtlines, setProdutlines] = useState([]);


   useEffect(() => {
      const fetchPls = async () => {
         try {
            const response = await axios.get(
               "http://localhost:1127/api/ProductLines/list"
            );
            setProdutlines(response.data);
         } catch (error) {
            console.error("Error fetching notes:", error);
         }
      };

      fetchPls();
   }, []);

   return (
      <div classNameName="bg vh-100">
         <Navbar />
         <Sidebar />
         <main id="main" className="main">
            <div className="pagetitle">
               <h1>Product Line</h1>
            </div>
            <section className="section">
               <div className="row">
                  <AddProductLine />
                  <div className="col-lg-7">
                     <div className="card">
                        <div className="card-body">
                           <table class="  table datatable">
                              <thead>
                                 <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {produtlines.map((produtline) => (
                                    <tr key={produtline.pl_id}>
                                       <td>{produtline.pl_name}</td>
                                       <td>{produtline.pl_price}</td>
                                       <td>{produtline.pl_description}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
}
