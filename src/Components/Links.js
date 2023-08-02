import React from "react";

import { Link ,to } from "react-router-dom";

const Links = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/Dumy">homes</Link>
        </li>
        <li>
          <Link to="/FontIcons.js">about</Link>
        </li>
        <li>
          <Link>contact</Link>
        </li>
        <li>
          <Link>services</Link>
        </li>
      </ul>
    </>
  );
};

export default Links;
