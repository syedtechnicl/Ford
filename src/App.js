import React, { useState } from "react";

//  all component
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
// all context
import Mycontext from "./Mycontext";

// auth
import { auth } from "./firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// toastify

// rooters


// recharge import

const App = () => {
  const [user, setuser] = useState("");
  const [screen, setscreen] = useState(0);

  const [loading, setloading] = useState(false);

  // fire bas

  const Display = () => {
    if (screen == 0) {
      return <Login />;
    } else if (screen == 1) {
      return <Register />;
    } else if (screen == 2) {
      return <Home />;
    }
  };

  const Loginfunc = (email, password) => {
    setloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setuser(res.user.displayName);
        setloading(false);
        setscreen(2);
      })
      .catch((err) => {
        setloading(false);
        alert(err.message);
      });
  };

  const Logout = () => {
    setuser(null);
    setscreen(0);
    alert("Logout successfully");
  };

  const Registerfunc = (name, email, password) => {
    setloading(true);
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      updateProfile(res.user, { displayName: name })
        .then((user) => {
          alert("Account Created Successfully");
          setloading(false);
        })
        .catch((err) => {
          alert(err.message);
        })
        .catch((err) => {
          alert(err.message);
          setloading(false);
        });
    });
  };

  return (
    <>
      <Mycontext.Provider
        value={{ user, setscreen, Loginfunc, Registerfunc, loading, Logout }}
      >
        {Display()}
      </Mycontext.Provider>
      <br />
    </>
  );
};

export default App;
