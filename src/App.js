import React from "react";

import "./res/css/Styles.css";
import "./res/css/Alerts.css";
import "./res/css/404.css";
import "./res/fonts/material.css";
import "./res/css/Login.css";
import "./res/css/MainContainer.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import MainContainer from "./BackOffice/MainContainer";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Login />}></Route>
               <Route path="/Register" element={<Register />}></Route>
               <Route path="/Backoffice" element={<MainContainer />}></Route>
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
