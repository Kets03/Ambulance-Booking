import React, { useContext } from 'react';
import './UserNavbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SetIsLoggedinContext, IsLoggedinContext } from '../App'; // Import the context

export default function UserNavbar() {
  const isLoggedin = useContext(IsLoggedinContext);
  const setIsLoggedin = useContext(SetIsLoggedinContext);
  const navigate = useNavigate();

  const Logout = () => {
    axios.post('http://localhost:3001/logout', {}, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          setIsLoggedin(false);  
          navigate('/login');     
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <nav className="navbar navbar-dark d-flex">
        <div className="container-fluid flex-column">
          <a className="navbar-brand" href="/userdashboard">
            <img src="/resources/logo.jpg" alt="Logo" /> 
          </a>
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/userdashboard">
                <i className="fas fa-user"></i> Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/BookAmbulance">
                <i className="fas fa-ambulance"></i> Book Ambulance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/MyBookings">
                <i className="fas fa-calendar-check"></i> My Bookings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Maps">
                <i className="fas fa-hospital"></i> Hospitals Nearby
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
