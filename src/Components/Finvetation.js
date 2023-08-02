import React from "react";

const Finvetation = () => {
  const handleCopy = (value) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Copy failed:", error);
      });
  };

  return (
    <>
      <div className="main container">
        <div
          className="container p-3"
          style={{ border: "1px solid red", borderRadius: "10px" }}
        >
          <label htmlFor="">
            <small>Invitation Link </small>
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            style={{ height: "30px" }}
            value="https://www.byzbdld3.in/index.html"
          />
          <button
            className="btn-sm m-2"
            onClick={() => handleCopy("https://www.byzbdld3.in/index.html")}
          >
            Copy
          </button>
        </div>

        <br />
        <div
          className="container p-3"
          style={{ border: "1px solid red", borderRadius: "10px" }}
        >
          <label htmlFor="">
            <small>Invitation Code </small>
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            style={{ height: "30px" }}
            value="6gk9j"
          />
          <button className="btn-sm m-2" onClick={() => handleCopy("6gk9j")}>
            Copy
          </button>
        </div>
        <br />
        <div
          className="container"
          style={{ border: "1px solid red", borderRadius: "10px" }}
        >
          <small>Ford Team Invitation Rewards:</small>
          <ul className="p-3">
            <li>
              <small className="p-2">LV1 20%</small>
            </li>
            <li>
              <small className="p-2">LV2 3%</small>
            </li>
            <li>
              <small className="p-2">LV3 2%</small>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </>
  );
};

export default Finvetation;
