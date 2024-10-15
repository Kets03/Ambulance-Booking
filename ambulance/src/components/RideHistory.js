import React, { useEffect, useState } from "react";
import "./RideHistory.css";
import axios from "axios";

export default function RideHistory() {
  const [rideRequests, setRideRequests] = useState([]);
  const [filteredRides, setFilteredRides] = useState([]);
  const [expandedRide, setExpandedRide] = useState(null);
  const [filter, setFilter] = useState('all'); 

  useEffect(() => {
    const fetchRideHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/driver-ride-requests",
          { withCredentials: true }
        );
        setRideRequests(response.data);
        setFilteredRides(response.data);
      } catch (error) {
        console.error("Error fetching ride history:", error);
      }
    };

    fetchRideHistory();
  }, []);

  
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'all') {
      setFilteredRides(rideRequests); 
    } else {
      const filtered = rideRequests.filter(ride => ride.status === selectedFilter);
      setFilteredRides(filtered);
    }
  };

  
  const toggleExpand = (rideId) => {
    setExpandedRide(expandedRide === rideId ? null : rideId); 
  };

  return (
    <div className="ride-history-container">
      <h1>Driver Ride History</h1>
    <div className="content-container">
      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="filter">Filter by Status: </label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="ongoing">Ongoing</option>
          <option value="rejected">Rejected</option>
          <option value="accepted">Accepted</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Ride List */}
      <div className="ride-list">
        {filteredRides.length > 0 ? (
          <ul className="list-group">
            {filteredRides.map((ride, index) => (
              <li key={ride._id} className="list-group-item d-flex flex-column align-items-start">
                <div className="d-flex justify-content-between w-100">
                  <div>
                    {index + 1}. Ride with User: {ride.userId.name}
                  </div>
                  <button
                    onClick={() => toggleExpand(ride._id)}
                    className="btn btn-secondary mr-3"
                  >
                    {expandedRide === ride._id ? "Hide Details" : "See Details"}
                  </button>
                </div>

                {/* Expanded ride details */}
                {expandedRide === ride._id && (
                  <div className="details mt-2 d-flex justify-content-between w-100">
                    <div className="text-left">
                      <p><strong>Pickup Location:</strong> {ride.pickupLocation}</p>
                      <p><strong>Drop Location:</strong> {ride.dropLocation}</p>
                      <p><strong>Status:</strong> {ride.status}</p>
                      <p><strong>Date:</strong> {new Date(ride.createdAt).toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {new Date(ride.createdAt).toLocaleTimeString()}</p>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No rides available for this filter.</p>
        )}
      </div>
      </div>
    </div>
  );
}
