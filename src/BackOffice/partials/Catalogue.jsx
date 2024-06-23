import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProductLine from "./AddProductLine";

export default function Catalogue() {
   const [productLines, setProductLines] = useState([]);

   const fetchPls = async () => {
      try {
         const response = await axios.get(
            "http://localhost:1127/api/ProductLines/list"
         );
         setProductLines(response.data);
      } catch (error) {
         console.error("Error fetching product lines:", error);
      }
   };

   useEffect(() => {
      fetchPls();
   }, []);

   const handleDelete = async (productId) => {
      try {
         const response = await axios.delete(
            `http://localhost:1127/api/delete/${productId}`
         );
         console.log(response.data);
         fetchPls(); // Refresh the product lines list
      } catch (error) {
         console.error("Error deleting product line:", error);
      }
   };

   return (
      <div className="row">
         <AddProductLine fetchPls={fetchPls} />
         <div className="col-lg-7">
            <div className="card">
               <div className="card-body">
                  <table className="table datatable">
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Description</th>
                           <th>Delete</th>
                        </tr>
                     </thead>
                     <tbody>
                        {productLines.map((productLine) => (
                           <tr key={productLine.pl_id}>
                              <td>
                                 <Link to={`/item/${productLine.pl_id}`}>
                                    {productLine.pl_name}
                                 </Link>
                              </td>
                              <td>{productLine.pl_price}</td>
                              <td>{productLine.pl_description}</td>
                              <td>
                                 <button
                                    onClick={() =>
                                       handleDelete(productLine.pl_id)
                                    }
                                    className="btn btn-danger"
                                 >
                                    Delete
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}
