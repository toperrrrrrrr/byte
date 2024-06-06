import "./res/css/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login/Login";
import NotFound from "./NotFound";
import Main from "./Main";
import Register from "./Login/Register";
import Test from "./Test/Test";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Login />}></Route>
               <Route path="/Register" element={<Register />}></Route>
               <Route path="/Main" element={<Main />}></Route>
               <Route path="/test" element={<Test   />}></Route>
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
