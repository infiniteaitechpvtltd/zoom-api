import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Login = () => {
 const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
    remember:false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    //   e.preventdefault()
    //   const data = { email: user.email, password: user.password };
    axios.post("http://localhost:4000/api/login", { user })
      .then((res) => {
        //console.log(res)
        //localStorage.setItem("auth-token", res.token);
        //localStorage.setItem("auth-id", res.id);
        navigate("/teacher")
      })
      .catch((err) => {
        //console.log(err)
      
        alert(err.response.data.msg);
    })
   
  };
   

  useEffect(() => {
   
  }, []);

 
  return (
    <>
      <div>
        <section
          className="vh-100 bg-image"
          style={{
            backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp`,
          }}
        >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card">
                    <div className="card-body p-4">
                      <h2 className="text-uppercase text-center mb-4">
                        Login into account
                      </h2>
                      <form onSubmit={login}>
                        <div className="form-outline mb-2">
                          <label className="form-label" htmlFor="email">
                            Your Email
                          </label>
                          <br />
                          <input
                            className="form-control form-control-lg fi"
                            name="email"
                            type="email"
                            label="Your Email"
                            required={true}
                            onChange={handleChange}
                          />
                          <br />

                          {/* <span className="fs">
                            It should be a valid email address!
                          </span> */}
                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                         
                            htmlFor="password"
                          >
                            password
                          </label>
                          <br />
                          <input
                            className="form-control form-control-lg fi"
                            name="password"
                            type="password"
                            label="Your Password"
                            required={true}
                            onChange={handleChange}
                          />
                          <br />
                          {/* <span className="fs">
                            Password should be 6-20 characters and include at
                            least 1 letter, 1 number and 1 special character!
                          </span> */}
                        </div>

                        <div className="d-flex justify-content-center">
                          <button
                            disabled={
                              user.email.length < 6 || user.password.length < 6
                            }
                            type="submit"
                            className="btn btn-danger btn-block btn-lg gradient-custom-4 text-body"
                          >
                            Sign IN
                          </button>
                        </div>
                        

                        <p className="text-center text-muted mt-4 mb-0">
                          Go To Home?
                          <a href="/" className="fw-bold text-body">
                            <u>Click here</u>
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


export default Login


/* 
 <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="password"
                          ></label>
                          <input
                            type="checkbox"
                            name="remember"
                            checked={user.remember}
                            onChange={(e)=>{setUser({...user,remember:!user.remember})}}
                          />
                          Remember me
                          <br />
                        </div>*/
