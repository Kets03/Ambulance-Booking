// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [phone, setPhone] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/signup', { name, email, password, phone, role })
//       .then(result => {
//         console.log(result);
//         navigate('/login');
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-5">
//           <div className="card shadow-lg p-4">
//             <h2 className="text-center mb-4">Create Account</h2>

//             <form onSubmit={handleSubmit}>
//               {/* Name Input */}
//               <div className="form-group mb-3">
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   placeholder="Enter your name"
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="form-group mb-3">
//                 <label htmlFor="email" className="form-label">Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Enter your email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="form-group mb-3">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Enter your password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Phone Input */}
//               <div className="form-group mb-3">
//                 <label htmlFor="phone" className="form-label">Phone Number</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="phone"
//                   placeholder="Enter your phone number"
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Role Selection */}
//               <div className="form-group mb-3">
//                 <label htmlFor="role" className="form-label">Role</label>
//                 <select
//                   className="form-select"
//                   id="role"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                   required
//                 >
//                   <option value="user">User</option>
//                   <option value="admin">Admin</option>
//                   <option value="driver">Driver</option>
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <button type="submit" className="btn btn-primary w-100">Sign Up</button>
//             </form>

//             <div className="text-center mt-3">
//               <a href="/" className="text-muted">Go Back to Home</a>
//             </div>
//           </div>
//         </div>

//         {/* Already have an account section */}
//         <div className="col-md-6 col-lg-5 mt-4 mt-md-0">
//           <div className="card shadow-lg p-4 text-center">
//             <h2>Already Have an Account?</h2>
//             <p>Login now to book an ambulance.</p>
//             <a href="login" className="btn btn-outline-primary">Log In</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/signup', { name, email, password, phone, role })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      {/* Flexbox to equalize height */}
      <div className="row justify-content-center d-flex align-items-stretch">
        {/* Signup Section */}
        <div className="col-md-6 col-lg-5 d-flex">
          <div className="card shadow-lg p-4 flex-fill">
            <h2 className="text-center mb-4">Create Account</h2>

            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="form-group mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {/* Role Selection */}
              <div className="form-group mb-3">
                <label htmlFor="role" className="form-label">Role</label>
                <select
                  className="form-select"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="driver">Driver</option>
                </select>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
          </div>
        </div>

        {/* Already have an account section */}
        <div className="col-md-6 col-lg-5 d-flex mt-4 mt-md-0">
          <div className="card shadow-lg p-4 text-center flex-fill">
            <h2>Already Have an Account?</h2>
            <p>Login now to book an ambulance.</p>
            <a href="login" className="btn btn-outline-primary">Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
}
