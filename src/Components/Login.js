import React, { useContext, useState } from "react";
import Mycontext from "../Mycontext";

const Login = () => {
  //  all state
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // context
  const { setscreen, Loginfunc, loading } = useContext(Mycontext);

  const { name } = useContext(Mycontext);

  return (
    <>
      <Mycontext.Provider>
        <center className="p-5">
          <img
            src="https://www.account.ford.com/static/media/ford-logo.13740499.svg"
            alt=""
            className="img-fluid"
          />
          <h1 className="pt-4">Login</h1>
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setemail(e.currentTarget.value);
            }}
            className="form-control"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.currentTarget.value);
            }}
            className="form-control"
          />
          <br />
          <br />
          <b
            onClick={() => {
              setscreen(1);
            }}
          >
            If You Haven't Account Register
          </b>
          <br />
          <br />
          {loading ? (
            <button className="btn btn-danger">please wait</button>
          ) : (
            <button
              onClick={() => {
                Loginfunc(email, password);
              }}
              className="btn btn-success"
            >
              Submit
            </button>
          )}
        </center>
      </Mycontext.Provider>
    </>
  );
};

export default Login;
