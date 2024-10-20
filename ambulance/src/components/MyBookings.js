import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyBookings.css";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [expandedBooking, setExpandedBooking] = useState(null);
  const [filter, setFilter] = useState("all"); // Filter state

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:3001/my-bookings", {
          withCredentials: true,
        });
        setBookings(response.data);
        setFilteredBookings(response.data); // Initialize filtered bookings
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = async (booking) => {
    const bookingId = booking._id;
    const now = new Date();
    const bookingCreationTime = new Date(booking.createdAt);
    const timeDifference = (now - bookingCreationTime) / 1000 / 60; // Difference in minutes

    if (timeDifference > 5) {
      alert("You can't cancel the booking after 5 minutes.");
      return;
    }
    try {
      await axios.put(
        `http://localhost:3001/cancel-booking/${bookingId}`,
        { status: "cancelled" },
        {
          withCredentials: true,
        }
      );
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: "cancelled" }
            : booking
        )
      );
      setFilteredBookings(filteredBookings.filter((booking) => booking._id !== bookingId));
      alert("Booking Cancelled!");
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === "all") {
      setFilteredBookings(bookings); // Show all bookings
    } else {
      const filtered = bookings.filter(
        (booking) => booking.status === selectedFilter
      );
      setFilteredBookings(filtered); // Filter based on status
    }
  };

  const toggleExpand = (bookingId) => {
    setExpandedBooking(expandedBooking === bookingId ? null : bookingId); // Toggle expanded state
  };

  return (
    <div className="container">
      <h1>My Bookings</h1>
      
        {/* Filter Dropdown */}
        <div className="filter-container">
          <label htmlFor="filter">Filter by Status: </label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="accepted">Accepted</option>
            <option value="completed">Completed</option>
            <option value="ongoing">Ongoing</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Booking List */}
        <div className="booking-list">
          {filteredBookings.length > 0 ? (
            <ul className="list-group">
              {filteredBookings.map((booking, index) => (
                <li
                  key={booking._id}
                  className="list-group-item d-flex flex-column align-items-start"
                >
                  <div className="d-flex justify-content-between w-100">
                    <div>
                      {index + 1}. Ride with Driver: {booking.driverId.name}{" "}
                      {/* Adjust according to your data */}
                    </div>
                    <button
                      onClick={() => toggleExpand(booking._id)}
                      className="btn btn-secondary mr-3"
                    >
                      {expandedBooking === booking._id
                        ? "Hide Details"
                        : "See Details"}
                    </button>
                  </div>

                  {/* Expanded booking details */}
                  {expandedBooking === booking._id && (
                    <div className="details mt-2 d-flex justify-content-between w-100">
                      <div className="text-left">
                        <p>
                          <strong>Pickup Location:</strong>{" "}
                          {booking.pickupLocation}
                        </p>
                        <p>
                          <strong>Drop Location:</strong> {booking.dropLocation}
                        </p>
                        <p>
                          <strong>Status:</strong> {booking.status}
                        </p>
                        <p>
                          <strong>Phone:</strong> {booking.driverId.phone}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {new Date(booking.createdAt).toLocaleDateString()}
                        </p>
                        <p>
                          <strong>Time:</strong>{" "}
                          {new Date(booking.createdAt).toLocaleTimeString()}
                        </p>
                        {(booking.status === "accepted" ||
                          booking.status === "pending") && (
                          <button
                            onClick={() => handleCancelBooking(booking)}
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No bookings available for this filter.</p>
          )}
        </div>
    </div>
  );
}