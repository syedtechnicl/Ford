import React, { useContext } from "react";

import {
  HiOutlinePresentationChartLine,
  HiHome,
  HiOutlineArrowCircleDown,
  HiSaveAs,
  HiLibrary,
  HiOutlineX,
} from "react-icons/hi";
import Mycontext from "../Mycontext";

const Final = ({ name1, name2, name3, name4, name5, name6 }) => {
  const { Logout } = useContext(Mycontext);

  return (
    <>
      <div className="row container p-3">
        <div
          className="col m-2"
          style={{ border: "1px solid red", padding: "5px" }}
        >
          <HiOutlinePresentationChartLine title="Plan Purchase" />
          <br />
          <small>{name1}</small>
        </div>
        <div
          className="col m-2"
          style={{ border: "1px solid red", padding: "5px" }}
        >
          <HiSaveAs title="Funds Records" />
          <br />
          <small>{name2}</small>
        </div>
      </div>
      <div className="row container p-3">
        <div
          className="col m-2"
          style={{ border: "1px solid red", padding: "5px" }}
        >
          <HiHome title="Ford" />
          <br />
          <small>{name3}</small>
        </div>
        <div
          className="col m-2"
          style={{ border: "1px solid red", padding: "5px" }}
        >
          <HiOutlineArrowCircleDown title="Download" />
          <br />
          <small>{name4}</small>
        </div>
      </div>
      <div className="row container p-3">
        <div
          className="col m-2"
          style={{ border: "1px solid red", padding: "5px" }}
        >
          <HiLibrary title="Bank" />
          <br />
          <small>{name5}</small>
        </div>
        <div
          className="col m-2"
          style={{ border: "1px solid red", padding: "5px" }}
        >
          <HiOutlineX
            onClick={() => {
              Logout();
            }}
            title="Sign Out"
          />
          <br />
          <small>{name6}</small>
        </div>
      </div>
    </>
  );
};

export default Final;
