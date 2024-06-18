import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./home.css";
import back from "./back.jpg";
import user from "./user.jpg";
import axios from "axios";
const Home = () => {
  const [user_data, setUser_data] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/my_website");
  };

  const location = useLocation();
  const data = location.state?.data;

  const username = data;
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      const api = await response.json();
      if (!response.ok) {
        alert(api.message);
        return;
      }

      console.log(api);
      setUser_data({
        followers: api.followers,
        following: api.following,
        repositories: api.public_repos,
        email: api.email,
        bio: api.bio,
        namee: api.name,
        location: api.location,
        twitter: api.twitter_username,
        blog: api.blog,
        company: api.company,
        date: moment(api.created_at).format("MMMM Do YYYY"),
        photo: api.avatar_url,
        hireable: api.hireable,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleSearch("");
  }, []);
  return (
    <div>
      <div class>
        <header>
          <img src={back} onClick={handleClick} className="back" />
          if ({user_data.hireable}) {<button className="hire">Hire me</button>}
        </header>
      </div>
      <div className="cont_body">
        <div className="container">
          <img src={user_data.photo} className="user" />
          <div className="user_info">
            <h2 class="username">{user_data.namee}</h2>
            <p>{username}</p>
          </div>

          <div class="profile-stats-card">
            <ul class="profile-stats-card__list">
              <li class="profile-stats-card__item">
                <span class="profile-stats-card__item__count">
                  {user_data.followers}
                </span>
                <span class="profile-stats-card__item__label">Followers</span>
              </li>
              <li class="profile-stats-card__item">
                <span class="profile-stats-card__item__count">
                  {user_data.following}
                </span>
                <span class="profile-stats-card__item__label">Following</span>
              </li>
              <li class="profile-stats-card__item">
                <span class="profile-stats-card__item__count">
                  {user_data.repositories}
                </span>
                <span class="profile-stats-card__item__label">
                  Repositories
                </span>
              </li>
            </ul>
          </div>

          <div className="description">
            <div class="card">
              <div class="info">
                <div className="item">
                  <i class="icon email-icon"></i>
                  <span class="label">Email</span>
                  <span class="value">{user_data.email}</span>
                </div>
                <div className="item">
                  <i class="icon location-icon"></i>
                  <span class="label">Location</span>
                  <span class="value">{user_data.location}</span>
                </div>
                <div className="item">
                  <i class="icon twitter-icon"></i>
                  <span class="label">Twitter</span>
                  <span class="value">@{user_data.twitter}</span>
                </div>
              </div>
              <div class="info">
                <div className="item">
                  <i class="icon organization-icon"></i>
                  <span class="label">Organization</span>
                  <span class="value">{user_data.company}</span>
                </div>
                <div className="item">
                  <i class="icon date-icon"></i>
                  <span class="label">Joined Date</span>
                  <span class="value">{user_data.date}</span>
                </div>
                <div className="item">
                  <i class="icon website-icon"></i>
                  <span class="label">Website</span>
                  <span class="value">{user_data.blog}</span>
                </div>
              </div>
            </div>

            <div className="card_2">
              <div class="bio">
                <span className="header_bio">Bio</span>
                <i>{user_data.bio}</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
