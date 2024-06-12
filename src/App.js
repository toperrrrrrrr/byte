import "./res/css/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login/Login";
import Register from "./Login/Register";
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
