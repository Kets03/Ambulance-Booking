import './App.css';
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Services from './components/Services';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import UserNavbar from './components/UserNavbar';
import UserProfile from './components/UserProfile';
import BookAmbluance from './components/BookAmbluance';
import MyBookings from './components/MyBookings';
<<<<<<< HEAD
=======
import Map from './components/Map';
>>>>>>> 6f759dc (Maps Implemented)

import DriverNavbar from './components/DriverNavbar';
import Driverprofile from './components/DriverProfile';
import CurrentRide from './components/CurrentRide';
import RideHistory from './components/RideHistory';
import RideRequests from './components/RideRequests';

import AdminNavbar from './components/AdminNavbar';
import Adminprofile from './components/Adminprofile';
import ManageAmbulances from './components/ManageAmbulances';
import BookingOverview from './components/BookingOverview';
import ReportsAnalytics from './components/ReportsAnalytics';



export const IsLoggedinContext= createContext();
export const SetIsLoggedinContext= createContext();
function App() {
  const[isLoggedin, setIsLoggedin] = useState();
  useEffect(()=>{
    axios.get('http://localhost:3001/user', {withCredentials:true})
    .then(response => {
      if(response.data.user){
        setIsLoggedin(true)
      }else{
        setIsLoggedin(false)
      }
    })
    .catch(() => setIsLoggedin(false))
  },[])
  return (
    <IsLoggedinContext.Provider value={isLoggedin}>
    <SetIsLoggedinContext.Provider value={setIsLoggedin}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedin ? <><Navbar/></> : <><Navbar/><Login /></>} />
        <Route path="/services" element={<><Navbar/>< Services/></>} />
        <Route path="/contact" element={<><Navbar/>< Contact/></>} />
        <Route path="/signup" element={<><Navbar/><Signup /></>} />
        <Route path="/login" element={<><Navbar/><Login /></>} />

        <Route path="/userdashboard" element={isLoggedin ? <><UserNavbar/><UserProfile/></> : <><Navbar/><Login /></>}/>
        <Route path="/BookAmbulance" element={isLoggedin ? <><UserNavbar/><BookAmbluance/></> : <><Navbar/><Login /></>}/>
        <Route path="/MyBookings" element={isLoggedin ? <><UserNavbar/><MyBookings/></> : <><Navbar/><Login /></>}/>
<<<<<<< HEAD
=======
        <Route path="/Maps" element={isLoggedin ? <><UserNavbar/><Map/></> : <><Navbar/><Login /></>}/>
>>>>>>> 6f759dc (Maps Implemented)

        <Route path="/driverdashboard" element={isLoggedin ? <><DriverNavbar/><Driverprofile/></> : <><Navbar/><Login /></>}/>
        <Route path="/CurrentRide" element={isLoggedin ? <><DriverNavbar/><CurrentRide/></> : <><Navbar/><Login /></>}/>
        <Route path="/RideHistory" element={isLoggedin ? <><DriverNavbar/><RideHistory/></> : <><Navbar/><Login /></>}/>
        <Route path="/RideRequests" element={isLoggedin ? <><DriverNavbar/><RideRequests/></> : <><Navbar/><Login /></>}/>

        <Route path="/admindashboard" element={isLoggedin ? <><AdminNavbar/><Adminprofile/></> : <><Navbar/><Login /></>}/>
        <Route path="/ManageAmbulances" element={isLoggedin ? <><AdminNavbar/><ManageAmbulances/></> : <><Navbar/><Login /></>}/>
        <Route path="/BookingOverview" element={isLoggedin ? <><AdminNavbar/><BookingOverview/></> : <><Navbar/><Login /></>}/>
        <Route path="/ReportsAnalytics" element={isLoggedin ? <><AdminNavbar/><ReportsAnalytics/></> : <><Navbar/><Login /></>}/>
      </Routes>
    </Router>
    </SetIsLoggedinContext.Provider>
    </IsLoggedinContext.Provider>
  );
}

export default App;