import React, { useState } from "react";
import {
  FcLibrary,
  FcPortraitMode,
  FcReading,
  FcWorkflow,
} from "react-icons/fc";

// navigation
// all components
import Fprofile from "./Fprofile";
import Finvetation from "./Finvetation";
import Fteam from "./fTeam";

const FooterLogo = ({ name, name1, name2, name3 }) => {
  const [screen, setscreen] = useState();

  const MainData = () => {
    if (screen == 0) {
      return null;
    } else if (screen == 1) {
      return <Finvetation />;
    } else if (screen == 2) {
      return <Fprofile />;
    } else if (screen == 3) {
      return <Fteam />;
    }
  };

  return (
    <>
      {/* new */}

      {MainData()}

      <div className="row">
        <div className="col">
          <div>
            <FcLibrary
              title="HOME"
              onClick={() => {
                setscreen(0);
              }}
            />
            <br />
            <small>{name}</small>
          </div>
        </div>
        <div className="col">
          <div>
            <FcPortraitMode
              title="Invite"
              onClick={() => {
                setscreen(1);
              }}
            />
            <br />
            <small>{name1}</small>
          </div>
        </div>
        <div className="col">
          <div>
            <FcReading
              onClick={() => {
                setscreen(2);
              }}
              title="Profile"
            />
            <br />
            <small>{name3}</small>
          </div>
        </div>
        <div className="col">
          <div>
            <FcWorkflow
              onClick={() => {
                setscreen(3);
              }}
              title="Team"
            />
            <br />
            <small>{name2}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLogo;
