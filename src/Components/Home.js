import React, { useContext } from "react";
import Mycontext from "../Mycontext";
import MainProduct from "./MainProduct";
import Maincard from "./Maincard";

// footer
import FooterLogo from "./FooterLogo";
//
import { Routes, Route } from "react-router-dom";
import Finvetation from "./Finvetation";
const Home = () => {
  const Home = () => {
    navigator("./Home");
  };

  const { Logout, user } = useContext(Mycontext); // Use useContext to access the Logout function from the context

  return (
    <>
      <MainProduct />

      <br />
      <br />
      <center>
        <h3>FORD</h3>
      </center>
      <br />
      <br />

      <Maincard
        img="https://ic1.maxabout.us/autos/cars_india//F/2021/1/ford-ranger-raptor-truck.jpg/thumb/300"
        plan="Plan A"
        price="350"
        daily="100"
        cycle="170"
        total="17000"
      />

      <Maincard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWFCzdiPIMpCPSeoURRhgd-uuOB2Ge5f3hw&usqp=CAU"
        plan="Plan B"
        price="3600"
        daily="1110"
        cycle="170"
        total="18700"
      />

      <Maincard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCKtDMHUUFc8OnZxXkwBOJ_xUD461eJu2Kg&usqp=CAU"
        plan="Plan C"
        price="9000"
        daily="3000"
        cycle="170"
        total="510000"
      />

      <Maincard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBEihJ7hH33a0XFMhhKvIc7mlEnxbXVQffA&usqp=CAU"
        plan="Plan D"
        price="16000"
        daily="6400"
        cycle="170"
        total="1088000"
      />

      <Maincard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTlF18FmW0a-D94xwFrlUy39shiBea_jK2g&usqp=CAU"
        plan="Plan E"
        price="30000"
        daily="13000"
        cycle="170"
        total="2210000"
      />
      <Maincard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsktC1REu3bL3iG1L4wPVtvMTPkXBxyg3nSg&usqp=CAU"
        plan="Plan F"
        price="60000"
        daily="30000"
        cycle="170"
        total="5100000"
      />
      <br />
      <br />
      <center>
        <hr />
        <hr />
        <ul className="display m-1">
          <li style={{ fontSize: "20px", color: "red", cursor: "pointer" }}>
            <FooterLogo
              name="Home"
              name1="Invite"
              name2="Team"
              name3="Profile"
            />
          </li>
        </ul>

        <Routes>
          <Route path="./Home" element={<Home />} />
          <Route path="./Finvetation" element={<Finvetation />} />
        </Routes>
      </center>
    </>
  );
};

export default Home;
