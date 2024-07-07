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
               {productLine.length === 0 ? (
                  <p>No product lines available.</p>
               ) : (
                  <table className="table datatable">
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Description</th>
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
               )}
{/* Add a way to upload an image */}
               {productLine.map((productLine) => (
                  <div className="card" key={productLine.pl_id}>
                     <div className="card width400" >
                        <img className="card-img-top " src="https://www.w3schools.com/bootstrap5/img_avatar1.png" alt="Card image" />
                        <div className="card-body">
                           <h4 className="card-title">{productLine.pl_name}</h4>
                           <p className="card-text">{productLine.pl_price}</p>
                           <p className="card-text">{productLine.pl_description}</p>
                           <a href="#" className="btn btn-primary">Add to cart</a>
                        </div>
                     </div>
                  </div>

               ))}

            </div>
         </div>
      </div>
   );
}
