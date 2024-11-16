<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./BookingOverview.css";

// export default function BookingOverview() {
//   const [groupedBookings, setGroupedBookings] = useState({});
//   const [expandedBooking, setExpandedBooking] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/bookings", {
//           withCredentials: true,
//         });
        
//         const grouped = response.data.reduce((acc, booking) => {
//           const driverId = booking.driverId._id; // Assuming driverId is an object
//           if (!acc[driverId]) {
//             acc[driverId] = {
//               driver: booking.driverId,
//               bookings: [],
//             };
//           }
//           acc[driverId].bookings.push(booking);
//           return acc;
//         }, {});

//         setGroupedBookings(grouped); // Update state with grouped bookings
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const toggleExpand = (bookingId) => {
//     setExpandedBooking(expandedBooking === bookingId ? null : bookingId);
//   };

//   // Function to get background color based on booking status
//   const getBackgroundColor = (status) => {
//     switch (status) {
//       case 'completed':
//         return '#33b249'; // Green background for completed
//       case 'cancelled':
//         return 'red'; // Red background for cancelled
//       case 'rejected':
//         return 'gray'; // Grey background for rejected
//       default:
//         return 'white'; // Default background
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Booking Overview</h1>
//       <div className="content-container">
//         {Object.keys(groupedBookings).length > 0 ? (
//           <div className="driver-list">
//             {Object.values(groupedBookings).map((group, index) => (
//               <div key={group.driver._id} className="driver-section">
//                 <h2>
//                   {index + 1}. Bookings for Driver: {group.driver.name}
//                 </h2>
//                 <ul className="list-group">
//                   {group.bookings.map((booking, i) => (
//                     <li
//                       key={booking._id}
//                       className="list-group-item d-flex flex-column align-items-start"
//                       style={{ backgroundColor: getBackgroundColor(booking.status) }} // Apply background color
//                     >
//                       <div className="d-flex justify-content-between w-100">
//                         <div>
//                           {i + 1}. Booking with User: {booking.userId.name}
//                         </div>
//                         <button
//                           onClick={() => toggleExpand(booking._id)}
//                           className="btn btn-secondary"
//                         >
//                           {expandedBooking === booking._id
//                             ? "Hide Details"
//                             : "See Details"}
//                         </button>
//                       </div>

//                       {/* Expanded booking details */}
//                       {expandedBooking === booking._id && (
//                         <div className="details mt-2">
//                           <p>
//                             <strong>Pickup Location:</strong>{" "}
//                             {booking.pickupLocation}
//                           </p>
//                           <p>
//                             <strong>Drop Location:</strong> {booking.dropLocation}
//                           </p>
//                           <p>
//                             <strong>Status:</strong> {booking.status}
//                           </p>
//                           <p>
//                             <strong>Driver PhNo:</strong> {group.driver.phone}
//                           </p>
//                           <p>
//                             <strong>Date:</strong>{" "}
//                             {new Date(booking.createdAt).toLocaleDateString()}
//                           </p>
//                           <p>
//                             <strong>Time:</strong>{" "}
//                             {new Date(booking.createdAt).toLocaleTimeString()}
//                           </p>
//                         </div>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No bookings available.</p>
//         )}
//       </div>
//     </div>
//   );
// }
=======
>>>>>>> 6f759dc (Maps Implemented)
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookingOverview.css";

export default function BookingOverview() {
  const [groupedBookings, setGroupedBookings] = useState({});
  const [expandedBooking, setExpandedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:3001/bookings", {
          withCredentials: true,
        });
        
        const grouped = response.data.reduce((acc, booking) => {
          const driverId = booking.driverId._id; // Assuming driverId is an object
          if (!acc[driverId]) {
            acc[driverId] = {
              driver: booking.driverId,
              bookings: [],
            };
          }
          acc[driverId].bookings.push(booking);
          return acc;
        }, {});

        setGroupedBookings(grouped); // Update state with grouped bookings
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const toggleExpand = (bookingId) => {
    setExpandedBooking(expandedBooking === bookingId ? null : bookingId);
  };

  // Function to get background color based on booking status
  const getBackgroundColor = (status) => {
    switch (status) {
      case 'completed':
        return '#33b249'; // Green background for completed
      case 'cancelled':
        return 'red'; // Red background for cancelled
      case 'rejected':
        return 'gray'; // Grey background for rejected
      default:
        return 'white'; // Default background
    }
  };

  return (
    <div className="container">
      <h1>Booking Overview</h1>
      <div className="content-container">
        {Object.keys(groupedBookings).length > 0 ? (
          <div className="driver-list">
            {Object.values(groupedBookings).map((group, index) => (
              <div key={group.driver._id} className="driver-section">
                <h2>
                  {index + 1}. Driver: {group.driver.name}
                </h2>
                <ul className="list-group">
                  {group.bookings.map((booking, i) => (
                    <li
                      key={booking._id}
                      className="list-group-item d-flex flex-column align-items-start"
                      style={{ backgroundColor: getBackgroundColor(booking.status) }} // Apply background color
                    >
                      <div className="d-flex justify-content-between w-100">
                        <div>
                          {i + 1}. User: {booking.userId.name}
                        </div>
                        <button
                          onClick={() => toggleExpand(booking._id)}
                          className="btn btn-secondary"
                        >
                          {expandedBooking === booking._id
                            ? "Hide Details"
                            : "See Details"}
                        </button>
                      </div>

                      {/* Expanded booking details */}
                      {expandedBooking === booking._id && (
                        <div className="details mt-2">
                          <p><strong>Pickup:</strong> {booking.pickupLocation}</p>
                          <p><strong>Drop:</strong> {booking.dropLocation}</p>
                          <p><strong>Status:</strong> {booking.status}</p>
                          <p><strong>Driver PhNo:</strong> {group.driver.phone}</p>
                          <p><strong>Date:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
                          <p><strong>Time:</strong> {new Date(booking.createdAt).toLocaleTimeString()}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>No bookings available.</p>
        )}
      </div>
    </div>
  );
}
