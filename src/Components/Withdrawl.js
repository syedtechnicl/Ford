import React from "react";

const Withdrawl = () => {
  return (
    <>
<main>
      <h3 style={{ textAlign: "center" }}>Withdraw Form</h3>
      <div className="container p-3 m-3">
        <label htmlFor="phone_number">Phone Number:</label>
        <input type="tel" id="phone_number" className="form-control" />
        <br />
        {/* The "tel" input type is used for phone numbers and the "pattern" attribute enforces a 10-digit number */}
        <label htmlFor="bank_name">Bank Name:</label>
        <input
          type="text"
          id="bank_name"
          name="bank_name"
          required=""
          className="form-control"
        />
        <br />
        <label htmlFor="full_name">Full Name:</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          required=""
          className="form-control"
        />
        <br />
        <label htmlFor="ifsc_code">IFSC Code:</label>
        <input
          type="text"
          id="ifsc_code"
          name="ifsc_code"
          required=""
          className="form-control"
        />
        <br />
        <label htmlFor="amount">Withdraw Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min={1}
          required=""
          className="form-control"
        />
        <br />
        <br />
        <span>Tax 10%</span>
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Amount"
          className="form-control"
        />
        <br />
        <small className="text-danger">Balance :0:00 Withdraw all </small>
        <br />
        <br />
        <div className="container">
          <ul className="text-danger">
            <li>
              <small>-Minimum Withdrawal : 150</small>
            </li>
            <li>
              <small>-Withdrawal Time 08: -20:00</small>
            </li>
            <li>
              <small>
                -Fill in the bank account information and IFSC code correctly
              </small>
            </li>
            <li>
              <small>
                -Same day Withdrawals will be credited to the account on the
                same day
              </small>
            </li>
          </ul>
        </div>

        <button className="btn btn-outline-danger" type="submit">
          Confirm
        </button>
      </div>
      </main>
    </>
  );
};

export default Withdrawl;
