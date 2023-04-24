import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// page import
import Login from './page/Login'
import Teacher from './page/Teacher'
import Student from './page/Student'
import AppNew from "./page/AppNew";
import AppNewC from "./page/AppNewC";
import AppNewH from "./page/AppNewH";
import StudentS from "./page/StudentS";

const App = () => {
  console.log = function () {};

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/teacher" element={<Teacher />} />
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/student/:id" element={<StudentS />} />
          <Route exact path="/tjoin/:id" element={<AppNewH />} />
          <Route exact path="/sjoin/:id" element={<AppNewC />} />
          <Route exact path="/join" element={<AppNew />} />
        </Routes>
      </Router>
    </>
  );
}
 

 

export default App




  // <input
  //                         name="email"
  //                         type="email"
  //                         errorMessage="It should be a valid email address!"
  //                         label="Your Email"
  //                         required={true}
  //                       />

  //                       <input
  //                         name="password"
  //                         type="password"
  //                         errorMessage="Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!"
  //                         label="Your Password"
  //                         pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$"
  //                         required={true}
  //                       />
