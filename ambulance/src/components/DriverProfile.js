import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfile.css";

export default function DriverProfile() {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    registrationNo: "",
    licenseNo: "",
    type:""
  });
  const [isProfileComplete, setIsProfileComplete] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/driverdashboard", { withCredentials: true })
      .then((response) => {
        const data = response.data;
        setUserData(data);

        // Check if any field is undefined or default "undefined" in the response
        if (data.registrationNo === "undefined" || data.licenseNo === "undefined" || data.type ==="undefined") {
          setIsProfileComplete(false);
        }
      })
      .catch((error) => {
        console.log("Error fetching profile data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send the updated data to the backend
    axios
      .post("http://localhost:3001/updateDriverProfile", formData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Profile updated successfully:", response.data);
        setUserData({ ...userData, ...formData });
        setIsProfileComplete(true); // Update the state to mark profile as complete
      })
      .catch((error) => {
        console.log("Error updating profile:", error);
      });
  };

  if (!userData) {
    return <div className="load-container">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <div className="card user-profile-container shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Driver Profile</h2>
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
              <p>
                <strong>Role:</strong> {userData.role}
              </p>
            </div>
            {isProfileComplete && (
              <div className="col-md-6">
                <p>
                  <strong>License No:</strong> {userData.licenseNo}
                </p>
                <p>
                  <strong>Registration No:</strong> {userData.registrationNo}
                </p>
              </div>
            )}
          </div>

          {!isProfileComplete && (
            <div className="complete-profile-form mt-4">
              <h3 className="text-center">Complete Your Profile</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>Registration No:</label>
                  <input
                    type="text"
                    name="registrationNo"
                    value={formData.registrationNo}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>License No:</label>
                  <input
                    type="text"
                    name="licenseNo"
                    value={formData.licenseNo}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Type of Emergency:</label>
                  <select
                    name="type"
                    value={formData.emergencyType}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  >
                    <option value="">Select Type</option>{" "}
                    <option value="Emergency">Emergency</option>
                    <option value="Non-Emergency">Non-Emergency</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                  Send for Approval
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
