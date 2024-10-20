import React, { useState } from "react";
import axios from "axios";
import "./BookAmbulance.css";

export default function BookAmbulance() {
  const [ambulanceType, setAmbulanceType] = useState("All");
  const [ambulances, setAmbulances] = useState([]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");

  const handleTypeChange = (e) => setAmbulanceType(e.target.value);

  const handlePickupChange = (e) => setPickupLocation(e.target.value);

  const handleDropChange = (e) => setDropLocation(e.target.value);

  const handleSearch = async () => {
    if (!pickupLocation || !dropLocation) {
      alert("Please enter both pickup and drop locations.");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:3001/search-ambulances?type=${ambulanceType}`,
        { withCredentials: true }
      );
      setAmbulances(response.data);
    } catch (error) {
      console.error("Error fetching ambulances:", error);
    }
  };

  const handleBook = async (ambulanceId) => {
    try {
      await axios.post(
        `http://localhost:3001/book-ambulance/${ambulanceId}`,
        {
          pickupLocation,
          dropLocation,
        },
        { withCredentials: true }
      );
      alert("Request sent! Awaiting driver's confirmation...");
    } catch (error) {
      console.error("Error booking ambulance:", error);
    }
  };

  return (
    <div className="book-ambulance-container">
      <h1>Book an Ambulance</h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="type">Ambulance Type:</label>
          <select
            id="type"
            value={ambulanceType}
            onChange={handleTypeChange}
            className="form-control"
          >
            <option value="All">All</option>
            <option value="Emergency">Emergency</option>
            <option value="Non-Emergency">Non-Emergency</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="pickup">Pickup Location:</label>
          <input
            type="text"
            id="pickup"
            value={pickupLocation}
            onChange={handlePickupChange}
            className="form-control"
            placeholder="Enter pickup location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="drop">Drop Location:</label>
          <input
            type="text"
            id="drop"
            value={dropLocation}
            onChange={handleDropChange}
            className="form-control"
            placeholder="Enter drop location"
          />
        </div>

        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      {ambulances.length > 0 && (
        <div className="ambulance-list">
          <h2>Available Ambulances</h2>
          <ul className="list-group">
            {ambulances.map((ambulance) => (
              <li key={ambulance._id} className="list-group-item">
                <strong>{ambulance.name}</strong> ({ambulance.type})
                <button
                  onClick={() => handleBook(ambulance._id)}
                  className="btn btn-success"
                >
                  Book
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
