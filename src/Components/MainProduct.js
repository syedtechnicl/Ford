import React from "react";
import FontIcons from "./FontIcons";
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // <-- Add useNavigate here

import Recharge from "./Recharge";
import Dumy from "./Dumy";
import Withdrawl from "./Withdrawl";

const MainProduct = () => {
  const navigate = useNavigate(); // <-- Initialize the useNavigate hook

  const handleRechargeClick = () => {
    navigate("/Recharge"); // Navigate to the "/Recharge" path when clicked
  };

  return (
    <>
      <img
        src="https://www.hdcarwallpapers.com/download/1967_charge_cars_ford_mustang_4k_2-2560x1440.jpg"
        alt=""
        className="img-fluid"
      />
      <marquee behavior="up" direction="" style={{ color: "red" }}>
      88789***78 Member Reacharge 7480 98789***78 Member Reacharge 580
        88789***78 Member Reacharge 6480 878789***78 Member Reacharge 4480
        78789***78 Member Reacharge 8480 88789***78 Member Reacharge 3480
        68789***78 Member Reacharge 9480 86789***78 Member Reacharge 5480
        85789***78 Member Reacharge 6480 87789***78 Member Reacharge 7480
        89789***78 Member Reacharge 9480 85789***78 Member Reacharge 3480
        84789***78 Member Reacharge 8480***5765
      </marquee>
      <br />
      <br />

      <FontIcons
        text="Recharge"
        withs="Withdrawl"
        online="Online"
        Chanel="Channel"
        onClick={handleRechargeClick} // <-- Add onClick handler for the "Recharge" link
      />

      <Routes>
        <Route path="/Dumy" element={<Dumy />} />
        <Route path="/Recharge" element={<Recharge />} />
        <Route path="/Withdrawl" element={<Withdrawl />} />
      </Routes>
    </>
  );
};

export default MainProduct;
