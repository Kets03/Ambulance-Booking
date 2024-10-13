import React, { useState } from "react";
import axios from "axios";
import "./BookAmbulance.css";

export default function BookAmbulance() {
  const [ambulanceType, setAmbulanceType] = useState("All");
  const [ambulances, setAmbulances] = useState([]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");

  const handleTypeChange = (e) => {
    setAmbulanceType(e.target.value);
  };

  const handlePickupChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleDropChange = (e) => {
    setDropLocation(e.target.value);
  };

  const handleSearch = async () => {
    if (!pickupLocation || !dropLocation) {
      alert("Enter all details!");
    } else {
      try {
        const response = await axios.get(
          `http://localhost:3001/search-ambulances?type=${ambulanceType}`,
          { withCredentials: true }
        );
        setAmbulances(response.data);
      } catch (error) {
        console.error("Error fetching ambulances:", error);
      }
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
      alert("Request sent! Awaiting Driver's confirmation...");
    } catch (error) {
      console.error("Error booking ambulance:", error);
    }
  };

  return (
    <div className="container">
      <h1>Book an Ambulance</h1>
      <div className="filter-container">
        <div className="form-group">
          <label>Type of Ambulance:</label>
          <select
            name="type"
            value={ambulanceType}
            onChange={handleTypeChange}
            className="form-control"
            required
          >
            <option value="All">All</option>
            <option value="Emergency">Emergency</option>
            <option value="Non-Emergency">Non-Emergency</option>
          </select>
        </div>

        <div className="form-group">
          <label>Pickup Location:</label>
          <input
            type="text"
            name="pickupLocation"
            value={pickupLocation}
            onChange={handlePickupChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Drop Location:</label>
          <input
            type="text"
            name="dropLocation"
            value={dropLocation}
            onChange={handleDropChange}
            className="form-control"
            required
          />
        </div>

        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>

        {ambulances.length > 0 ? (
          <ul className="list-group mt-4">
            {ambulances.map((ambulance) => (
              <li
                key={ambulance._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <strong>{ambulance.name}</strong> ({ambulance.type})
                </span>
                <button
                  onClick={() => handleBook(ambulance._id)}
                  className="btn btn-success"
                >
                  Book
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
