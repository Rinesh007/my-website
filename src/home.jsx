import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./home.css";
import back from "./back.jpg";
import user from "./user.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/my_website");
  };

  const location = useLocation();
  const data = location.state?.data;
  return (
    <div>
      <div>
        <header>
          <img src={back} onClick={handleClick} className="back" />
          <button className="hire">Hire me</button>
        </header>
      </div>

      <div className="container">
        <img src={user} className="user" />

        <h2>{data}</h2>
        <p>dummy@id</p>
      </div>
    </div>
  );
};

export default Home;
