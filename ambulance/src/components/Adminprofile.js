import React, { useEffect, useState } from "react";
import axios from "axios";
import './UserProfile.css'
export default function Adminprofile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      axios
        .get("http://localhost:3001/admindashboard", { withCredentials: true })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.log("Error fetching profile data:", error);
        });
    }, []);
  
    if (!userData) {
      return <div className="load-container">Loading...</div>;
    }
  
    return (
      <>
        <div className="container my-5">
        <div className="card user-profile-container shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Admin Profile</h2>
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Name:</strong> {userData.name}
                </p>
                <p>
                  <strong>Email:</strong> {userData.email}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Phone:</strong> {userData.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}
