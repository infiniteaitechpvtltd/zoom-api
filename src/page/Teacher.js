import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addlink } from "../redux/action/zoomAction";
import { useSelector } from "react-redux";
// import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

import Card from "../component/Card";
import "../styles/teacher.css";

const Teacher = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.zoom);
  const { student } = useSelector((state) => state.stu);

  const [zdata, setZdata] = useState({
    topic: "",
    slink: "",
    jlink: "",
    agenda: "",
    student:-1,
    

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setZdata({
      ...zdata,
      [name]: value,
    });
  };

  const addmeet = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/newmeeting",zdata)
      .then((res) => {
        // setJlink((oldArray) => [...oldArray, res.data.join_url]);
        // const newState = { ...zdata };
    
      let sdetail = {
        meetingNumber: String(res.data.id),
        passWord: res.data.password,
        role: 0,
        title: res.data.topic,
      };
        console.log(sdetail)
        student[zdata.student].meeting.push(sdetail);

         let tdetail = {
           meetiNgNumber: String(res.data.id),
           passWord: res.data.password,
           role: 1,
           title: res.data.topic,
        };
         console.log(tdetail);
         dispatch(addlink(tdetail));
       

          setZdata({ ...zdata, topic: "",agenda:"", slink: "", jlink: "" });

        
        
      })
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
      <div className=" container  h1 text-info text-center ">
        Welcome To innovative school
      </div>

      <div className="container mt-5  ">
        <div className="row">
          <div className="col-12 mt-5">
            <form onSubmit={addmeet}>
              <div className="row">
                <div className="col-6 ">
                  <input
                    type="text"
                    className="form-control mb-3 inline border-4 d-inline-block"
                    required={true}
                    placeholder="Enter your Topic for meeting "
                    name="topic"
                    value={zdata.topic}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control mb-3 inline border-4 d-inline-block"
                    required={true}
                    placeholder="Enter your agenda for meeting "
                    name="agenda"
                    value={zdata.agenda}
                    onChange={handleChange}
                  />
                  <select
                    name="student"
                    className="form-control mb-3 inline border-4 d-inline-block"
                    onClick={handleChange}
                   
                  >
                    <option value="-1" >
                      select student
                    </option>
                    {student.map((stdname, index) => {
                      return (
                        <option key={index} value={stdname.id}>{stdname.userName}</option>
                      );
                    })}
                  </select>
                  {/* <div className="container mt-5 mb-5">{val}</div> */}

                  <button
                    className="btn btn-success mt-1 d-inline-block mb-5"
                    type="submit"
                  >
                    Create Meeting
                  </button>
                </div>
                <div className="col-2"></div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div></div>

      <div className="homescreen" style={{ marginTop: "50px" }}>
        <div className="container text-center ">
          <h3 className="mt-3 ">Generated Meeting Link</h3>
          <hr className="w-50 mx-auto" />
        </div>

        <div className="homescreen__products">
          {product.map((val, index) => {
            return (
              <Card
                key={index} 
                topic={val.title}
                slink={0}
                jlink={0}
                index={index}
              ></Card>
            );
          })}
        </div>
      </div>

      <div className="container mt-5 mb-5 overflow-auto">
        <Link to="/student" className="">
          <span>click here for goto student link page</span>
          <br />
        </Link>
      </div>
    </>
  );
};

export default Teacher;

/* <div className="container mt-5 border border-dark ">
              <h2>GENERATED LINK :</h2>
              <br />
             
        {slink.map((link, index) => {
          return (
            <div key={index} className="container m-2  text-white ">
              <Link to={link} target="_blank" className="">
                <span>
                  {link.length > 150 ? link.slice(0, 150) + "..." : link}
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="container mt-5 overflow-auto">
        <Link to="/student"  className="">
          <span>click here for goto student link page</span>
        </Link>
      </div> */

//  <div className="container mt-5 overflow-auto">
//   <Link to="/student" className="">
//     <span>click here for goto student link page</span>
//   </Link>
// </div>
