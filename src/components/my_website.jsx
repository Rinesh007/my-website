import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./my_website.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const My_website = () => {
  const handleChange = (e) => {
    setInputdata(e.target.value);
  };
  const [inputdata, setInputdata] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home", { state: { data: inputdata } });
  };

  return (
    <div>
      <div className="main">
        <div className="profile">
          <h1>Github Profile</h1>

          <p>Generate your Github Profile</p>
          <form action="">
            <input
              type="text"
              value={inputdata}
              onChange={handleChange}
              placeholder="Github Username"
            />
            <button className="generate" onClick={handleSubmit}>
              Generate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default My_website;
