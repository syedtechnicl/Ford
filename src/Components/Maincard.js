import React from "react";
const Maincard = ({ img, plan, price, daily, cycle, total }) => {
  const confirmbox = () => {
    // Show the custom confirm box
    const isConfirmed = window.confirm("Are you sure you want purchase this ?");
    if (isConfirmed) {
      // Perform the final buy logic here
    }
  };

  return (
    <>
      <center>
        <div className="container p-1">
          <center>
            <img src={img} alt="no img" className="img-fluid img1" />
          </center>
          <br />
          <br />
          <center>
            <h5
              style={{ border: "1px solid red", width: "300px" }}
              className="p-2"
            >
              {plan}
            </h5>
          </center>
          <br />
          <center>
            {" "}
            <b style={{ color: "red" }}>Daily Income, Daily WithDrawal</b>
          </center>
          <br />
          <div class="row container">
            <div class="col">
              <button className="btn btn-primary btn-sm">
                {" "}
                Price: ₹ {price}
              </button>
            </div>
            <div class="col">
              <button className="btn btn-primary btn-sm">
                Dai Inc :₹{daily}
              </button>
            </div>
          </div>
          <br />
          <div class="row container">
            <div class="col">
              <button className="btn btn-primary btn-sm">
                Cycle: {cycle} days
              </button>
            </div>
            <div class="col">
              <button className="btn btn-primary btn-sm">
                Tot Inc :₹{total}
              </button>
            </div>
          </div>
        </div>
        <br />
        <center>
          {" "}
          <button
            className="btn btn-sm text-white "
            onClick={() => {
              confirmbox();
            }}
          >
            Buy Now
          </button>
          <br />
          <br />
        </center>
      </center>
    </>
  );
};

export default Maincard;
