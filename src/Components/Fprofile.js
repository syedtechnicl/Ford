import React from "react";

const Fprofile = () => {
  return (
    <>
      <div className="container">
        <img
          src="https://cdn.wallpapersafari.com/13/16/OEaRr7.jpg"
          alt="No Image Found"
          className="img-fluid"
          style={{ borderRadius: "20%" }}
        />

        <div class="row">
          <div class="col">
            <small>Team Recharge</small>
            <h2>₹ 0</h2>
          </div>
          <div class="col">
            <small>Team Number</small>
            <h2> 2</h2>
          </div>
        </div>

        <br />
        <div class="row">
          <div class="col">I</div>
          <div class="col">II</div>
          <div class="col">III</div>
        </div>
        <br />

        <div className="container">
          <div class="row">
            <div class="col">
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3FKsY2VqBVi2StrkoK3z1eNDjzKO8S8LOQ&usqp=CAU"
                alt=""
              />
            </div>
            <div class="col p-2">
              <small className="p-3">Name : 901****112</small>
              <br />
              <small className="text-primary p-3">Recharge :0</small>
              <br />
              <small className="text-primary p-3">WithDrawl :0</small>
            </div>
            <div class="col">
              <small className="text-primary p-3">Phone : 901****112</small>
              <br />
              <small className="text-success p-3">Recommended Number :0</small>
              <br />
              <small className="p-3">Registration Time:27-07-2023 14:05:09</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fprofile;
