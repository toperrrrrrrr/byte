import React, { useEffect, useState } from "react";

import axios from "axios";
import Todos from "./Todos";

export default function Dashboard() {
   const [notes, setNotes] = useState([]);

   useEffect(() => {
      const fetchNotes = async () => {
         try {
            const response = await axios.get(
               "http://localhost:1127/api/task/list"
            );
            setNotes(response.data);
         } catch (error) {
            console.error("Error fetching notes:", error);
         }
      };

      fetchNotes();
   }, []);

   return (
      <div className="row">
         <div className="col-lg-8">
            <div className="row">
               <div className="col-xxl-4 col-md-4">
                  <div className="card info-card">
                     <div className="card-body">
                        <h5 className="card-title">Save tasks:</h5>
                        <div className="d-flex align-items-center">
                           <div className="ps-3">
                              <h1>
                                 <span>
                                    <Todos />
                                 </span>
                              </h1>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-4">
            <div className="card">
               <div className="card-body pb-0">
                  <div>
                     <table>
                        <thead>
                           <tr>
                              <th>ID</th>
                              <th>Title</th>
                              <th>desc</th>
                              <th>status</th>
                           </tr>
                        </thead>
                        <tbody>
                           {notes.map((todo) => (
                              <tr key={todo.task_id}>
                                 <td>{todo.task_id}</td>
                                 <td>{todo.task_title}</td>
                                 <td>{todo.task_description}</td>
                                 <td>{todo.task_status}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
