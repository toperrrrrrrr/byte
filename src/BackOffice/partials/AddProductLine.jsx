import React, { useState } from "react";

import axios from "axios";

export default function AddProductLine({ fetchPls }) {
   const [isName, setName] = useState("");
   const [isPrice, setPrice] = useState("");
   const [isDesc, setDesc] = useState("");
   const [isDisplayAs, setDisplayAs] = useState("");

   const handleSubmit = async () => {
      try {
         await axios.post("http://localhost:1127/api/ProductLines/add", {
            isName: isName,
            isPrice: isPrice,
            isDesc: isDesc,
            isDisplayAs: isDisplayAs,
         });
         console.log("Successfully inserted");  
      } catch (error) {
         console.error(error);
      }
   };
   return (
      <div className="col-lg-5">
         <div className="card">
            <div className="card-body"> 
               <h5 className="card-title">Add new products</h5>
               <form>
                  <div className="row mb-3">
                     <label for="inputText" className="col-sm-3 col-form-label">
                        Name
                     </label>
                     <div className="col-sm-9">
                        <input
                           type="text"
                           className="form-control"
                           onChange={(e) => setName(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <label for="inputText" className="col-sm-3 col-form-label">
                        Price
                     </label>
                     <div className="col-sm-9">
                        <input
                           type="text"
                           className="form-control"
                           onChange={(e) => setPrice(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <label
                        for="inputPassword"
                        className="col-sm-3 col-form-label"
                     >
                        Description
                     </label>
                     <div className="col-sm-9">
                        <textarea
                           className="form-control"
                           onChange={(e) => setDesc(e.target.value)}
                        ></textarea>
                     </div>
                  </div>
                  <div className="row mb-3">
                     <label className="col-sm-3 col-form-label">
                        Display As
                     </label>
                     <div className="col-sm-9">
                        <input
                           type="text"
                           className="form-control"
                           onChange={(e) => setDisplayAs(e.target.value)}
                        ></input>
                     </div>
                  </div>
                  <div className="row mb-3">
                     <label className="col-sm-3 col-form-label"></label>
                     <div className="col-sm-9">
                        <button
                           onClick={handleSubmit}
                           className="btn btn-primary"
                           type="submit"
                        >
                           Add Item
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
