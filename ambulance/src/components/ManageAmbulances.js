import React, { useEffect, useState } from "react";
import "./ManageAmbulances.css";
import axios from "axios";

export default function ManageAmbulances() {
  const [pendingDrivers, setPendingDrivers] = useState([]);
  const [expandedDriver, setExpandedDriver] = useState(null); // State for expanded driver

  useEffect(() => {
    const fetchPendingDrivers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/pending-drivers",
          { withCredentials: true }
        );
        setPendingDrivers(response.data);
      } catch (error) {
        console.error("Error fetching pending drivers:", error);
      }
    };

    fetchPendingDrivers();
  }, []);

  const handleApprove = async (driverId) => {
    try {
      await axios.post(
        `http://localhost:3001/approve-driver/${driverId}`,
        {},
        { withCredentials: true }
      );
      setPendingDrivers(
        pendingDrivers.filter((driver) => driver._id !== driverId)
      );
    } catch (error) {
      console.error("Error approving driver:", error);
    }
  };

  const toggleExpand = (driverId) => {
    setExpandedDriver(expandedDriver === driverId ? null : driverId); // Toggle driver details
  };

  return (
    <div className="container" style={{ marginLeft: "85px", textAlign: "center" }}>
      <h1>Manage Drivers</h1>
      <h2>Pending Drivers</h2>

      {pendingDrivers.length > 0 ? (
        <ul className="list-group">
          {pendingDrivers.map((driver, index) => (
            <li
              key={driver._id}
              className="list-group-item d-flex flex-column align-items-start"
            >
              <div className="d-flex justify-content-between w-100">
                <div>
                  {index + 1}. {driver.name}
                </div>
                <div>
                  <button
                    onClick={() => toggleExpand(driver._id)}
                    className="btn btn-secondary mr-3"
                  >
                    {expandedDriver === driver._id ? "Hide Details" : "See Details"}
                  </button>
                  <button
                    onClick={() => handleApprove(driver._id)}
                    className="btn btn-success mr-3"
                  >
                    Approve
                  </button>
                </div>
              </div>
              {/* Expanded driver details */}
              {expandedDriver === driver._id && (
                <div className="details mt-2 d-flex justify-content-between w-100">
                  <div className="text-left">
                    <p><strong>Email:</strong> {driver.email}</p>
                    <p><strong>Registration No:</strong> {driver.registrationNo}</p>
                    <p><strong>License No:</strong> {driver.licenseNo}</p>
                    <p><strong>Type:</strong> {driver.type}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending drivers available.</p>
      )}
    </div>
  );
}
