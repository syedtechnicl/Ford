import React, { useContext, useState } from "react";

// navigate
import { useNavigate } from "react-router-dom";

import {
  FaWallet,
  FaRegWindowRestore,
  FaRegPaperPlane,
  FaUserCircle,
} from "react-icons/fa";
// routers
import { Link, to } from "react-router-dom";

// recharge
const FontIcons = ({ text, withs, online, Chanel }) => {
  // const {setrecharge,Display2} = useContext(Mycontext)

  const navigate = useNavigate();

  const goContact = () => {
    navigate("/Recharge"); // Assuming "/Recharge" is the correct route for the "Recharge" page
  };

  return (
    <>
      <center>
        <div class="row p-4">
          <div class="col">
            {/* <Link onClick={()=>{goContact()}}> */}
            <FaWallet
              className="all"
              style={{ cursor: "pointer" }}
              onClick={() => {
                goContact();
              }}
            />
            {text}
            {/* </Link> */}
          </div>
          <div class="col">
            <Link to="./Dumy">
              <FaRegPaperPlane className="all" />
              {Chanel}
            </Link>
          </div>
          <div class="col">
            <FaUserCircle className="all" />
            {online}
          </div>
          <div class="col">
            <Link to="./Withdrawl">
              <FaRegWindowRestore className="all" />
              {withs}
            </Link>
          </div>
        </div>
      </center>
    </>
  );
};
export default FontIcons;
