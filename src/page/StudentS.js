import React from "react";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Card from "../component/Card";
import "../styles/teacher.css";

const StudentS = () => {
  const { student } = useSelector((state) => state.stu);
   const location = useLocation();
  let id1 = location.pathname.split("/")[2];
  console.log("🚀 ~ file: StudentS.js:13 ~ StudentS ~ id:", id1)
  
  return (
    <>
      <div className=" container  h1  text-center text-success ">
        Welcome To innovative school
      </div>

      <div className="container mt-5 border border-dark "></div>

      <div className="homescreen mb-5" style={{ marginTop: "50px" }}>
        <div className="container text-center ">
          <h3 className="mt-3 ">Generated Meeting Link(for student:{id1} )</h3>
          <hr className="w-50 mx-auto" />
        </div>

        {/* <div className="homescreen__products mt-3">
          {student.map(
            (pro) =>
              pro.id === id1 && (
                pro.meeting.map((val,index)=>{ 
                  return<Card
                    key={index}
                    topic={val.topic}
                    slink={0}
                    jlink={0}
                  />
                })
              )
          )}
        </div> */}

        <div className="homescreen__products mt-3">
          {student[id1].meeting.map((pro, index) => {
            return (
              <Card key={index} topic={pro.title} slink={0} jlink={0} index={index}></Card>
            );
          })
            }
        </div>
      </div>
    </>
  );
};

export default StudentS;

/* <div className="container mt-5 border border-dark rounded ">
        <h2>GENERATED LINK(for student) :</h2> <br />
        {product.map((link, index) => {
          return (
            <div
              key={index}
              className="container m-2 bg-warning bg-gradient text-white border border-dark rounded"
            >
              <Link to={link} target="_blank" className="">
                <span>
                  {link.length > 150 ? link.slice(0, 150) + "..." : link}
                </span>
              </Link>
            </div>
          );
        })}
      </div> */
