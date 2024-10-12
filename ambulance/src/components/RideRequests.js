import React, { useEffect, useState } from "react";
import "./RideRequests.css";
import axios from "axios";

export default function RideRequests() {
  const [acceptedRequests, setAcceptedRequests] = useState([]); // Accepted requests
  const [pendingRequests, setPendingRequests] = useState([]); // Pending requests
  const [expandedRequest, setExpandedRequest] = useState(null); // State for expanded ride request

  // Fetch ride requests when the component mounts
  useEffect(() => {
    const fetchRideRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/driver-ride-requests",
          { withCredentials: true }
        );
        // Separate accepted and pending requests
        const accepted = response.data.filter(request => request.status === 'accepted');
        const pending = response.data.filter(request => request.status === 'pending');
        setAcceptedRequests(accepted);
        setPendingRequests(pending);
      } catch (error) {
        console.error("Error fetching ride requests:", error);
      }
    };
    fetchRideRequests();
  }, []);

  // Function to accept a ride request
  const handleAccept = async (requestId) => {
    try {
      await axios.post(
        `http://localhost:3001/accept-ride/${requestId}`,
        {},
        { withCredentials: true }
      );
      setPendingRequests(pendingRequests.filter((request) => request._id !== requestId));
      alert("Request Accepted!");
    } catch (error) {
      console.error("Error accepting ride request:", error);
    }
  };

  // Function to reject a ride request
  const handleReject = async (requestId) => {
    try {
      await axios.post(
        `http://localhost:3001/reject-ride/${requestId}`,
        {},
        { withCredentials: true }
      );
      setPendingRequests(pendingRequests.filter((request) => request._id !== requestId));
      alert("Request Rejected!");
    } catch (error) {
      console.error("Error rejecting ride request:", error);
    }
  };

  // Function to start a ride
  const handleStartRide = async (requestId) => {
    try {
      await axios.post(
        `http://localhost:3001/start-ride/${requestId}`,
        {},
        { withCredentials: true }
      );
      setAcceptedRequests(acceptedRequests.filter(request => request._id !== requestId));
      alert("Ride Started!");
    } catch (error) {
      console.error("Error starting ride:", error);
    }
  };

  // Toggle expanded ride request details
  const toggleExpand = (requestId) => {
    setExpandedRequest(expandedRequest === requestId ? null : requestId); // Toggle request details
  };

  return (
    <div className="container" style={{ display: "flex", marginLeft: "85px", textAlign: "center" }}>
      <div style={{ flex: 1 }}>
        <h1>Manage Ride Requests</h1>

        {/* Pending Requests Section */}
        <h2>Pending Ride Requests</h2>
        {pendingRequests.length > 0 ? (
          <ul className="list-group">
            {pendingRequests.map((request, index) => (
              <li
                key={request._id}
                className="list-group-item d-flex flex-column align-items-start"
              >
                <div className="d-flex justify-content-between w-100">
                  <div>
                    {index + 1}. Ride Request from User: {request.userId.name}
                  </div>
                  <div>
                    <button
                      onClick={() => toggleExpand(request._id)}
                      className="btn btn-secondary mr-3"
                    >
                      {expandedRequest === request._id ? "Hide Details" : "See Details"}
                    </button>
                    <button
                      onClick={() => handleAccept(request._id)}
                      className="btn btn-success mr-3"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(request._id)}
                      className="btn btn-danger mr-3"
                    >
                      Reject
                    </button>
                  </div>
                </div>
                {/* Expanded ride request details */}
                {expandedRequest === request._id && (
                  <div className="details mt-2 d-flex justify-content-between w-100">
                    <div className="text-left">
                      <p><strong>Pickup Location:</strong> {request.pickupLocation}</p>
                      <p><strong>Drop Location:</strong> {request.dropLocation}</p>
                      <p><strong>Status:</strong> {request.status}</p>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No pending ride requests available.</p>
        )}

        {/* Accepted Requests Section */}
        <h2>Accepted Ride Requests</h2>
        {acceptedRequests.length > 0 ? (
          <ul className="list-group">
            {acceptedRequests.map((request, index) => (
              <li key={request._id} className="list-group-item d-flex justify-content-between">
                <div>
                  Ride with User: {request.userId.name}
                </div>
                <button
                  onClick={() => handleStartRide(request._id)}
                  className="btn btn-primary"
                >
                  Start Ride
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No accepted ride requests available.</p>
        )}
      </div>
    </div>
  );
}
