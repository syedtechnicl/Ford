import React, { useContext, useState } from "react";
import Mycontext from "../Mycontext";

const Register = () => {
  // all state
  const [name, setname] = useState("ayana hai");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // toas call
  // all context
  const { setscreen, Registerfunc, loading } = useContext(Mycontext);

  return (
    <>
      <Mycontext.Provider value={{ name }}>
        <center className="p-5">
          <img
            src="https://www.account.ford.com/static/media/ford-logo.13740499.svg"
            alt=""
            className="img-fluid"
            xxx="name"
          />
          <h1 className="p-4">Register</h1>
          <br />
          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => {
              setname(e.currentTarget.value);
            }}
            className="form-control"
            xxx={name}
          />
          <br />
          <br />

          {/* Use the emailIsValid state to change the border color based on validity */}
          <input
            type="email"
            placeholder="Enter Your Email"
            //   value={email}
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
              setscreen(0);
            }}
          >
            If You Have An Account Login ?
          </b>

          <br />
          <br />

          {loading ? (
            <button className="btn btn-danger">please wait</button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => {
                // Check if email is valid before calling Registerfunc
                Registerfunc(name, email, password);
              }}
            >
              Register
            </button>
          )}
        </center>
      </Mycontext.Provider>
    </>
  );
};
export default Register;
