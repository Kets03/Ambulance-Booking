// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function CurrentRide() {
//   const [currentRide, setCurrentRide] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchCurrentRide = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/current-ride', { withCredentials: true });
//         setCurrentRide(response.data);
//       } catch (error) {
//         if (error.response && error.response.status === 404) {
//           setErrorMessage('No accepted ride found.');
//         } else {
//           console.error('Error fetching current ride:', error);
//           setErrorMessage('An error occurred while fetching the current ride.');
//         }
//       }
//     };

//     fetchCurrentRide();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Current Ride</h1>
//       {errorMessage ? (
//         <p>{errorMessage}</p>
//       ) : (
//         currentRide && (
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Ride Details</h5>
//               <p><strong>Passenger:</strong> {currentRide.userId.name}</p>
//               <p><strong>Email:</strong> {currentRide.userId.email}</p>
//               <p><strong>Phone:</strong> {currentRide.userId.phone}</p>
//               <p><strong>Pickup Location:</strong> {currentRide.pickupLocation}</p>
//               <p><strong>Drop Location:</strong> {currentRide.dropLocation}</p>
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CurrentRide() {
  const [currentRide, setCurrentRide] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCurrentRide = async () => {
      try {
        const response = await axios.get('http://localhost:3001/current-ride', { withCredentials: true });
        setCurrentRide(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErrorMessage('No Current Ride found.');
        } else {
          console.error('Error fetching current ride:', error);
          setErrorMessage('An error occurred while fetching the current ride.');
        }
      }
    };

    fetchCurrentRide();
  }, []);

  // Function to end the ride
  const handleEndRide = async () => {
    if (!currentRide) return;

    try {
      await axios.post(`http://localhost:3001/end-ride/${currentRide._id}`, {}, { withCredentials: true });
      setCurrentRide(null); // Clear current ride after ending it
      alert('Ride has been completed!');
    } catch (error) {
      console.error('Error ending the ride:', error);
      setErrorMessage('An error occurred while ending the ride.');
    }
  };

  return (
    <div className="container">
      <h1>Current Ride</h1>
      {errorMessage ? (
        <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '20px' }}>{errorMessage}</p>

      ) : (
        currentRide && (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ride Details</h5>
              <p><strong>Passenger:</strong> {currentRide.userId.name}</p>
              <p><strong>Email:</strong> {currentRide.userId.email}</p>
              <p><strong>Phone:</strong> {currentRide.userId.phone}</p>
              <p><strong>Pickup Location:</strong> {currentRide.pickupLocation}</p>
              <p><strong>Drop Location:</strong> {currentRide.dropLocation}</p>
              {/* End Ride Button */}
              <button onClick={handleEndRide} className="btn btn-danger mt-3">
                End Ride
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
