import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Item() {
   const { productId } = useParams();
   const [productLine, setProductLine] = useState(null);

   const fetchItem = async (productId) => {
      try {
         const response = await axios.get(
            `http://localhost:1127/api/item/${productId}`
         );
         setProductLine(response.data);
      } catch (error) {
         console.error("Error fetching product line:", error);
      }
   };

   useEffect(() => {
      if (productId) {
         fetchItem(productId);
      }
   }, [productId]);

   if (!productLine) {
      return <div>Loading...</div>;
   }

   return (
      <div>
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
                     {productLine.map((productLine) => (
                        <tr key={productLine.pl_id}>
                           <td>{productLine.pl_name}</td>
                           <td>{productLine.pl_price}</td>
                           <td>{productLine.pl_description}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}
