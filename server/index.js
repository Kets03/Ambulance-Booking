const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");
const adminModel= require("./models/admin");
const driverModel= require("./models/driver");
const bookingModel= require("./models/booking");

const app = express();
const session = require('express-session');

app.use(session({
  secret: '123',  // Change this to a secret key for session encryption
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }  // Set secure to true if you're using HTTPS
}));
app.use(express.json());
app.use(cors({origin:'http://localhost:3000',credentials:true}));

mongoose.connect("mongodb://localhost:27017/AmbulanceBooking");
const PORT = 3001;

app.post("/login", async (req, res) => {
  const { email, password, role } = req.body;
  if (role === "user") {
    try {
      const user = await userModel.findOne({ email: email });
      if (user) {
        if (user.password === password) {
          req.session.user = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
          };
          console.log("SESSION CREATED");
          res.json({ message: "Success", user: req.session.user });
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (role === "admin") {
    try {
      const user = await adminModel.findOne({ email: email });
      if (user) {
        if (user.password === password) {
          req.session.user = {
            id: user._id,
            name: user.username,
            email: user.email,
          };
          console.log("SESSION CREATED");
          res.json({ message: "Success", user: req.session.user });
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (role ==="driver") {
    try {
      const user = await driverModel.findOne({ email: email });
      if (user) {
        if (user.password === password) {
          req.session.user = {
            id: user._id,
            name: user.username,
            email: user.email,
          };
          console.log("SESSION CREATED");
          res.json({ message: "Success", user: req.session.user });
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
});
  
app.get('/user', (req,res) => {
    if (req.session.user){
        res.json({user: req.session.user});
    }else{
        res.status(401).json("NOT AUTHENTICATED")
    }
})

app.post("/signup", (req, res) => {
  const { role } = req.body; // Extract role from request body
  console.log(req.body);

  if (role === "user") {
    userModel
      .create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err)); // Handle user insert errors
  } else if (role === "admin") {
    adminModel
      .create(req.body)
      .then((admin) => res.json(admin))
      .catch((err) => res.status(500).json(err)); // Handle admin insert errors
  } else if (role === "driver") {
    driverModel
      .create(req.body)
      .then((driver) => res.json(driver))
      .catch((err) => res.status(500).json(err)); // Handle driver insert errors
  } else {
    // If the role doesn't match any known role
    res.status(400).json({ error: "Invalid role" });
  }
});

app.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        req.statusCode(500).json({ error: "Failed To Logout" });
      } else {
        res.status(200).json("Logout successful");
        console.log("SESSION DESTROYED");
      }
    });
  } else {
    res.status(400).json({ error: "No Session Found" });
  }
});

app.get("/userdashboard", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "User not logged in" });
  }
  try {
    const user = await userModel.findById(req.session.user.id); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/admindashboard", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Admin not logged in" });
  }
  try {
    const user = await adminModel.findById(req.session.user.id); 
    if (!user) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json(user); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/driverdashboard", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Driver not logged in" });
  }
  try {
    const user = await driverModel.findById(req.session.user.id); 
    if (!user) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.json(user); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/updateDriverProfile', async (req, res) => {
  try {
    const { registrationNo, licenseNo, type } = req.body;
    const driverId = req.session.user.id; // Use req.session.user.id

    // Update the driver profile and set status to 'pending'
    const updatedDriver = await driverModel.findByIdAndUpdate(
      driverId,
      { registrationNo, licenseNo,type, status: 'pending' }, // Update status to 'pending'
      { new: true } // Return the updated document
    );

    if (!updatedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.json(updatedDriver);
  } catch (error) {
    console.error("Error updating driver profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Fetch pending drivers
app.get('/pending-drivers', async (req, res) => {
  try {
    const pendingDrivers = await driverModel.find({ status: 'pending' });
    res.json(pendingDrivers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Approve a driver
app.post('/approve-driver/:id', async (req, res) => {
  const driverId = req.params.id;
  try {
    const updatedDriver = await driverModel.findByIdAndUpdate(
      driverId,
      { status: 'approved' }, // Update status to 'approved'
      { new: true } // Return the updated document
    );

    if (!updatedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.json(updatedDriver); // Respond with the updated driver
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch driver details by ID
app.get('/see-details/:id', async (req, res) => {
  const driverId = req.params.id;

  try {
    const driver = await driverModel.findById(driverId);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.json(driver);
  } catch (error) {
    console.error("Error fetching driver details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Search Ambulances based on type (Emergency/Non-Emergency/All)
app.get('/search-ambulances', async (req, res) => {
  const { type } = req.query; // Get type from query string
  console.log("Type received:", type); // Log the type received from the frontend

  try {
    let query = {};
    if (type && type !== 'All') {
      query = { type: type, isAvailable: true, status: "approved" };
    } else {
      query = { isAvailable: true, status: "approved" }; // Fetch all available ambulances
    }
    console.log("Query being executed:", query); // Log the query

    const ambulances = await driverModel.find(query);
    res.status(200).json(ambulances);
  } catch (error) {
    console.error('Error fetching ambulances:', error);
    res.status(500).json({ error: 'Error fetching ambulances' });
  }
});

app.post('/book-ambulance/:ambulanceId', async (req, res) => {
  const { ambulanceId } = req.params;
  const { pickupLocation, dropLocation } = req.body
  const userId = req.session.user?.id; // Get user ID from session

  if (!userId) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  try {
    // Check if the driver/ambulance exists and is available
    const driver = await driverModel.findById(ambulanceId);
    if (!driver || !driver.isAvailable) {
      return res.status(400).json({ error: 'Ambulance not available' });
    }

    // Create a new booking instance
    const booking = new bookingModel({
      userId,
      driverId: driver._id,
      pickupLocation,
      dropLocation,
    });

    // Save the booking
    await booking.save();
    console.log(booking);
    res.status(200).json({ message: 'Booking request sent, awaiting driver confirmation' });
  } catch (error) {
    console.error('Error booking ambulance:', error);
    res.status(500).json({ error: 'Error booking ambulance' });
  }
});

// app.get('/driver-ride-requests', async (req, res) => {
//   const driverId = req.session.user?.id;
//   console.log('Driver ID:', driverId); // Debugging
//   if (!driverId) {
//     return res.status(400).json({ message: 'Driver ID not found in session' });
//   }

//   try {
//     const rideRequests = await bookingModel
//       .find({ driverId: driverId, status:"pending" })
//       .populate('userId', 'name email');

//     if (rideRequests.length === 0) {
//       return res.status(404).json({ message: 'No ride requests found for this driver' });
//     }

//     res.status(200).json(rideRequests);
//   } catch (error) {
//     console.error('Detailed error:', error); // Log the error for debugging
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/accept-ride/:requestId', async (req, res) => {
//   const { requestId } = req.params;
//   const driverId = req.session.user?.id;

//   try {
//     // Find the booking and ensure it's assigned to the correct driver
//     const booking = await bookingModel.findOne({ _id: requestId, driverId: driverId });

//     if (!booking) {
//       return res.status(404).json({ message: 'Ride request not found or not assigned to this driver' });
//     }

//     // Update the booking status to 'accepted'
//     booking.status = 'accepted';
//     await booking.save();

//     res.status(200).json({ message: 'Ride request accepted successfully' });
//   } catch (error) {
//     console.error('Error accepting ride request:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/reject-ride/:requestId', async (req, res) => {
//   const { requestId } = req.params;
//   const driverId = req.session.user?.id;

//   try {
//     // Find the booking and ensure it's assigned to the correct driver
//     const booking = await bookingModel.findOne({ _id: requestId, driverId: driverId });

//     if (!booking) {
//       return res.status(404).json({ message: 'Ride request not found or not assigned to this driver' });
//     }

//     // Update the booking status to 'rejected'
//     booking.status = 'rejected';
//     await booking.save();

//     res.status(200).json({ message: 'Ride request rejected successfully' });
//   } catch (error) {
//     console.error('Error rejecting ride request:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

app.get("/driver-ride-requests", async (req, res) => {
  const driverId = req.session.user?.id; // Assuming you store user id in session

  try {
    // Fetch all bookings related to the driver
    const bookings = await bookingModel.find({ driverId })
      .populate("userId", "name email"); 

    res.status(200).json(bookings); // Return all bookings
  } catch (error) {
    console.error("Error fetching ride requests:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/accept-ride/:requestId", async (req, res) => {
  const { requestId } = req.params;

  try {
    const updatedBooking = await bookingModel.findByIdAndUpdate(
      requestId,
      { status: "accepted" },
      { new: true } // Return the updated document
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Ride request not found" });
    }

    res.status(200).json(updatedBooking); // Return the updated booking
  } catch (error) {
    console.error("Error accepting ride request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/reject-ride/:requestId", async (req, res) => {
  const { requestId } = req.params;

  try {
    const updatedBooking = await bookingModel.findByIdAndUpdate(
      requestId,
      { status: "rejected" },
      { new: true } 
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Ride request not found" });
    }

    res.status(200).json(updatedBooking); // Return the updated booking
  } catch (error) {
    console.error("Error rejecting ride request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/start-ride/:requestId", async (req, res) => {
  const { requestId } = req.params;

  try {
    const updatedBooking = await bookingModel.findByIdAndUpdate(
      requestId,
      { status: "ongoing" },
      { new: true } // Return the updated document
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Ride request not found" });
    }

    res.status(200).json(updatedBooking); // Return the updated booking
  } catch (error) {
    console.error("Error starting ride:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/current-ride', async (req, res) => {
  const driverId = req.session.user?.id;

  try {
    // Find the oldest accepted ride for the driver
    const oldestBooking = await bookingModel.findOne({ driverId: driverId, status: 'ongoing' })
      .populate('userId', 'name email phone');

    if (!oldestBooking) {
      return res.status(404).json({ message: 'No ongoing ride found' });
    }

    res.status(200).json(oldestBooking);
  } catch (error) {
    console.error('Error fetching current ride:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/end-ride/:requestId", async (req, res) => {
  const { requestId } = req.params;

  try {
    const updatedBooking = await bookingModel.findByIdAndUpdate(
      requestId,
      { status: "completed" },
      { new: true } 
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Ride request not found" });
    }

    res.status(200).json(updatedBooking); // Return the updated booking
  } catch (error) {
    console.error("Error ending ride:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(PORT, () => {
  console.log("server is running");
});