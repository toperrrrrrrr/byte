import React, { useState } from "react";
import Axios from "axios";

export default function Todos() {
   const [isTask, setTask] = useState("");
   const [isDesc, setDesc] = useState("");

   const handleSubmit = async () => {
      try {
         await Axios.post("http://localhost:1127/api/task/add", {
            task: isTask,
            descr: isDesc,
         });
         console.log("Successfully inserted");
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div>
         <form>
            <div className="wrap-input w-100">
               <h3>Task title</h3>
               <input
                  className="inputs"
                  type="text"
                  placeholder="Enter task title"
                  required
                  onChange={(e) => setTask(e.target.value)}
               />
               <span className="icons" data-symbol="&#xf206;"></span>
            </div>
            <div className="wrap-input w-100">
               <h3>description</h3>
               <input
                  className="inputs"
                  type="text"
                  placeholder="Enter task title"
                  onChange={(e) => setDesc(e.target.value)}
               />
               <span className="icons" data-symbol="&#xf206;"></span>
            </div>
            <div className="btn-wrap">
               <button
                  className="btn-login"
                  type="submit"
                  onClick={handleSubmit}
               >
                  Register
               </button>
            </div>
         </form>
      </div>
   );
}
