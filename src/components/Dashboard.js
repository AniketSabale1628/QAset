import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Trending from "./Trending";
import SignUpForm from "./Signup";
import Analysis from "./Analysis";
import Createq from "./Createq";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [activeButton, setActiveButton] = useState("dashboard");
  // const [isCreateqVisible, setCreateqVisible] = useState(false);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  // const handleCreateqClose = () => {
  //   setCreateqVisible(false);
  // };
 

  return (
    <div className="dashboard">
      <div className="quiz">
        <div className="titlequize">QUIZZIE</div>

        <div className="threebtn">
          <div>
            <button
              className={activeButton === "dashboard" ? "active" : ""}
              onClick={() => handleButtonClick("dashboard")}
            >
              Dashboard
            </button>
          </div>
          <div>
            <button
              className={activeButton === "analytics" ? "active" : ""}
              onClick={() => handleButtonClick("analytics")}
            >
              Analytics
            </button>
          </div>
          <div>
            <button
              className={activeButton === "createq" ? "active" : ""}
              onClick={() => handleButtonClick("createq")}
            >
              Create Quiz
            </button>
          </div>
        </div>

        <div className="logoutbtn">
          <div></div>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

      <div className="trend">
        {activeButton === "dashboard" && <Trending/>}
        {activeButton === "analytics" && <Analysis/>}
        {activeButton === "createq" && <Createq />}
      </div>
    </div>
  );
};

export default Dashboard;
