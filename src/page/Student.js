import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../component/Card";
import "../styles/teacher.css";

const Student = () => {
  const { product } = useSelector((state) => state.zoom);
  const { student } = useSelector((state) => state.stu);
  return (
    <>
      <div className=" container  h1  text-center text-success ">
        Welcome To innovative school
      </div>

      <div className="container mt-5 border border-dark "></div>

      <div className="homescreen mb-5" style={{ marginTop: "50px" }}>
        <div className="container text-center ">
          <h3 className="mt-3 ">Generated Meeting Link(for student)</h3>
          <hr className="w-50 mx-auto" />
        </div>

        {/* <div className="homescreen__products mt-3">
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
        </div> */}
      </div>

      <div className="container mt-5 overflow-auto">
        {student.map((val, index) => {
          return (
            <Link to={`/student/${val.id}`}>
              <span>click here for goto student {val.id}</span>
              <br />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Student;

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
