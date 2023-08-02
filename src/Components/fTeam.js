import React, { useContext } from "react";
import Final from "./Final";
import Mycontext from "../Mycontext";

const fTeam = () => {
  return (
    <>
      <div class="row container">
        <div class="col">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3FKsY2VqBVi2StrkoK3z1eNDjzKO8S8LOQ&usqp=CAU"
            alt=""
            className="img-fluid"
          />
        </div>
        <div class="col">
          <br />
          <br />
          <h5 style={{ backgroundColor: "red" }} className="text-white p-2">
            ID : 8822838494
          </h5>
        </div>
        <br />
        <br />
      </div>
      <div class="row container">
        <div class="col">
          <h5>Balance</h5>
          <b>0.00</b>
        </div>
        <div class="col">
          <h5>Recharge</h5>
          <b>0.00</b>
        </div>
        <div class="col">
          <h5>Income</h5>
          <b>0.00</b>
        </div>
      </div>
      <br />
      <div style={{ border: "1px solid red", padding: "11px" }}>
        <Final
          name1="Plans Purchased"
          name2="Funds Records"
          name3="Ducati"
          name4="Download"
          name5="Bank"
          name6="Sign Out"
        />
      </div>
      <br />
    </>
  );
};

export default fTeam;
