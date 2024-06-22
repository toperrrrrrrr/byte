import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Item() {
   const [productLine, setProductLine] = useState([]);
   const fetchPls = async () => {
      try {
         const response = await axios.get(
            "http://localhost:1127/api/ProductLines/list"
         );
         setProductLine(response.data);
      } catch (error) {
         console.error("Error fetching product lines:", error);
      }
   };

   useEffect(() => {
      fetchPls();
   }, []);
   return (
      <div>
         <div></div>
      </div>
   );
}
