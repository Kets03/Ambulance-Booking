// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./UserProfile.css";

// export default function UserProfile() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/userdashboard", { withCredentials: true })
//       .then((response) => {
//         setUserData(response.data);
//       })
//       .catch((error) => {
//         console.log("Error fetching profile data:", error);
//       });
//   }, []);

//   if (!userData) {
//     return <div className="load-container">Loading...</div>;
//   }

//   return (
//     <>
//       <div className="container my-5">
//       <div className="card user-profile-container shadow-lg">
//         <div className="card-body">
//           <h2 className="card-title text-center mb-4">User Profile</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <p>
//                 <strong>Name:</strong> {userData.name}
//               </p>
//               <p>
//                 <strong>Email:</strong> {userData.email}
//               </p>
//             </div>
//             <div className="col-md-6">
//               <p>
//                 <strong>Phone:</strong> {userData.phone}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfile.css";

export default function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Toggle between view and edit mode
  const [formData, setFormData] = useState({
    phone: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/userdashboard", { withCredentials: true })
      .then((response) => {
        setUserData(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          address: response.data.address,
        });
      })
      .catch((error) => {
        console.log("Error fetching profile data:", error);
      });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/update", formData, {
        withCredentials: true,
      })
      .then((response) => {
        setUserData(response.data);
        console.log(userData);
        setIsEditing(false); // Disable editing mode after saving
      })
      .catch((error) => {
        console.log("Error updating profile data:", error);
      });
  };

  if (!userData) {
    return <div className="load-container">Loading...</div>;
  }

  return (
    <>
      <div className="container my-5">
        <div className="card user-profile-container shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">User Profile</h2>

            {isEditing ? (
              // Edit form for updating user details
              <div>
                <div className="row">
                  <div className="col-md-9">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleSaveClick}>
                  Save
                </button>
              </div>
            ) : (
              // Display user profile information
              <div>
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
                      <strong>Address:</strong> {userData.address || "Not provided"}
                    </p>
                  </div>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleEditClick}>
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
