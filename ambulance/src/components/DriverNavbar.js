import React, { useContext } from "react";
import axios from "axios";
import './UserNavbar.css';
import { useNavigate } from "react-router-dom";
import { SetIsLoggedinContext, IsLoggedinContext } from "../App";

export default function DriverNavbar() {
  const isLoggedin = useContext(IsLoggedinContext);
  const setIsLoggedin = useContext(SetIsLoggedinContext);
  const navigate = useNavigate();

  const Logout = () => {
    axios
      .post("http://localhost:3001/logout", {}, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          setIsLoggedin(false);
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <nav className="navbar navbar-dark d-flex">
        <div className="container-fluid flex-column">
          <a className="navbar-brand" href="index.html">
            <img src="/resources/logo.jpg" alt="Logo" /> 
          </a>
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/driverdashboard">
                <i className="fas fa-user"></i> Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/CurrentRide">
                <i className="fas fa-ambulance"></i> Current Ride
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/RideHistory">
                <i className="fas fa-calendar-check"></i> Ride History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/RideRequests">
                <i className="fas fa-calendar-check"></i> Ride Requests
              </a>
            </li>
            {isLoggedin && (
              <li className="nav-item">
                <button className="btn btn-outline-light mt-5" onClick={Logout}>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
