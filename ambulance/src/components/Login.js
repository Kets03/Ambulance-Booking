import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import axios from 'axios';
import { SetIsLoggedinContext } from '../App';

export default function Login() {
  const setIsLoggedin = useContext(SetIsLoggedinContext);
  const [email, setUsername] = useState('');
  const { setUser } = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Add state for role selection
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password, role }, { withCredentials: true })
      .then(result => {
        console.log(result);
        if (result.data.user) {
          setUser(result.data.user);
          setIsLoggedin(true);
          if(role==="user") {
            navigate('/userdashboard', { state: { user: result.data.user } });
          } else if (role==="admin") {
            navigate('/admindashboard', { state: { user: result.data.user } });
          } else if (role ==="driver") {
            navigate('/driverdashboard', { state: { user: result.data.user } });
          }
        }
      })
      .catch(err => console.log(err));
  }

  return (
<<<<<<< HEAD
    <div className="container mt-5">
=======
    <div className="container mt-3">
>>>>>>> 6f759dc (Maps Implemented)
      {/* Flexbox for equal height columns */}
      <div className="row justify-content-center d-flex align-items-stretch">
        {/* Login Section */}
        <div className="col-md-6 col-lg-5 d-flex">
          <div className="card shadow-lg p-4 flex-fill">
            <h2 className="text-center mb-4" style={{color: "#073057"}}>Log In</h2>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="form-group mb-3">
                <label htmlFor="username" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Role Selection */}
              <div className="form-group mb-3">
                <label htmlFor="role" className="form-label">Role</label>
                <select
                  className="form-select"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="driver">Driver</option>
                </select>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">Log In</button>
            </form>
          </div>
        </div>

        {/* Signup Section */}
        <div className="col-md-6 col-lg-5 d-flex mt-4 mt-md-0">
          <div className="card shadow-lg p-4 text-center flex-fill">
            <h2 style={{color: "#073057"}}>New Here?</h2>
            <p>Join us today and experience the best service.</p>
            <a href="signup" className="btn btn-outline-primary">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
