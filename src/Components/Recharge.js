import React, { useState } from "react";

const Recharge = () => {
  const [value, setvalue] = useState("Amount");

  return (
    <>
      <center>
        <h3>
          <center>Recharge</center>
        </h3>
        <br />
        <div>
          <p>Enter Amount :</p>
          <center>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder="Amount"
              value={value}
            />
          </center>
          <br />
          <center>
            <button
              type="button"
              class="btn btn-outline-danger m-1"
              onClick={() => {
                setvalue(350);
              }}
            >
              350
            </button>
            <button
              type="button"
              class="btn btn-outline-danger m-1"
              onClick={() => {
                setvalue(3600);
              }}
            >
              3600
            </button>
            <button
              type="button"
              class="btn btn-outline-danger m-1"
              onClick={() => {
                setvalue(9000);
              }}
            >
              9000
            </button>
            <button
              type="button"
              class="btn btn-outline-danger m-1"
              onClick={() => {
                setvalue(16000);
              }}
            >
              16000
            </button>
            <button
              type="button"
              class="btn btn-outline-danger m-1"
              onClick={() => {
                setvalue(30000);
              }}
            >
              30000
            </button>
            <button
              type="button"
              class="btn btn-outline-danger m-1"
              onClick={() => {
                setvalue(60000);
              }}
            >
              60000
            </button>
            <br />
            <br />
            <small style={{ color: "red" }}>
              <ul>
                <li>
                  * confirm the recharge amount and fill in the UTR number
                  correctly
                </li>
                <li>
                  * every time you recharge you need to re-acquire the receiving
                  amount at the cashier
                </li>
                <li>
                  * for recharge questions, please contact online customer
                  service
                </li>
              </ul>
            </small>
            <br />
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={() => {
                if (value === "Amount") {
                  alert("Please enter the amount");
                } else if (value) {
                  alert(value);
                }
              }}
            >
              Confirm Recharge
            </button>
          </center>
        </div>
      </center>
    </>
  );
};

export default Recharge;
