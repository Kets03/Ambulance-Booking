# Ambulance Booking System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)

## Introduction

The **Ambulance Booking System** is a web application that allows users to book ambulances based on their emergency needs. It provides separate functionalities for users, drivers, and admins. Users can book ambulances by specifying their pickup and drop locations, while drivers can accept or reject booking requests. Admins manage the availability and approval of ambulances and drivers.

## Features

### User Module
- Search for ambulances by type (Emergency/Non-Emergency).
- Book an ambulance by specifying pickup and drop locations.
- View booking history.

### Driver Module
- View current ride requests.
- Accept or reject ride requests.
- View ride history.

### Admin Module
- Approve or reject ambulance registrations.
- Manage drivers and ambulances.

### Authentication
- Secure login and registration for all users (Users, Drivers, Admins).

### Map Integration
- Users can click on the hospital marker or its name in the list to get directions using external navigation tools like Google Maps.

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **CSS**: For styling the application.

### Backend
- **Node.js**: Backend server to handle API requests.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to store user, driver, and booking information.
- **Axios**: To make HTTP requests from frontend to backend.

## ScreenShots

**Login page:**

![image](https://github.com/user-attachments/assets/8f87dd05-7bae-4160-b469-c7d3d77082ca)

**Signup page:**

![image](https://github.com/user-attachments/assets/ff34cccf-fa58-496b-b262-ca2cb57145a1)

**Services page:**

![image](https://github.com/user-attachments/assets/972c9eec-96f0-4eff-aac5-ff4844020fd8)

**Contact us page:**
 
 ![image](https://github.com/user-attachments/assets/75afaaed-da89-4f4d-a247-c287e8c92840)

**User Profile:**

![image](https://github.com/user-attachments/assets/cd49eda2-30f0-40da-a76b-c50f52452b36)

**Book Ambulance:**

 ![image](https://github.com/user-attachments/assets/9c5fce54-6baf-4f89-a352-3f25dbd47c34)


**My Bookings:**

 ![image](https://github.com/user-attachments/assets/7d21192e-48ae-46d2-980b-0d7584608042)

**Hospitals Nearby**

![image](https://github.com/user-attachments/assets/a5a308df-9b55-4a74-9eb4-69cb63a0954d)


**Driver Profile:**

![image](https://github.com/user-attachments/assets/224bb760-03e7-4ad4-8e16-00a068a06e1d)


![image](https://github.com/user-attachments/assets/ebc15a56-78d8-4a21-932e-2daffe522efa)


**Current Ride:**

 ![image](https://github.com/user-attachments/assets/c52320dc-507f-494b-ab67-d32d6d0ebd23)


**Ride History:**

![image](https://github.com/user-attachments/assets/0d6410cc-3193-4f83-8b4f-7d5b78a6125d)


**Ride Request:**

![image](https://github.com/user-attachments/assets/cb47ecc4-e65c-4e44-b9ba-92999b522e3d)


**Admin Profile:**

 ![image](https://github.com/user-attachments/assets/d18d3d16-1eb6-4122-b7d3-644fa4e0630b)


**Manage Drivers:**

![image](https://github.com/user-attachments/assets/52b53501-c898-49ca-b3e1-d0c0c01c993c)


**Booking Overview:**

![image](https://github.com/user-attachments/assets/941af9e9-b7cc-4d67-b7c6-f68cab7cae0f)


## Setup Instructions

### Prerequisites
- **Node.js** (v12 or later)
- **MongoDB** (local or cloud-based instance)

### Steps to Run the Project Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/ambulance-booking.git
   cd ambulance-booking-system
2. **Open the server and ambulance app in separate terminals**

## User Manual
- 1.	**Home Page:**  
 Visit the homepage where you will find the navigation bar with options
like "Home," "Services," "Contact Us," and "Login."
 Use the navbar to navigate through different sections of the site.

- 2.	**User Panel:**
After logging in, a user can access their profile, view and edit details, and book an ambulance.
The user can select pickup and drop-off locations for booking and see the list of their active or previous bookings.

- 3.	**Admin Panel:**  
Admins can log in using their credentials to access the dashboard.
From the admin dashboard, admins can approve driver details, view and manage all bookings.

- 4.	**Driver Panel:**  
 Drivers can log in to view the rides assigned to them.
 The "Current Ride" section displays ride details, such as the passenger's
 name, pickup, and drop locations. Drivers can use the "Start Ride" button to begin a ride and the "End Ride"  button to complete it.

- 5. **Ride History:**  
Both drivers and users can view ride history, filtering completed, ongoing, and rejected rides.
Click "See Details" to get a detailed view of each ride, including date, pickup
and drop locations.

- 6.	**Booking Status:**  
Users and drivers will receive real-time updates on the booking status, including whether a ride is accepted, rejected, or completed.

- 7.	**Hospitals Nearby:**
Provides users and drivers with a map displaying the locations of nearby hospitals helping them find medical assistance easily. Users can click on the hospital marker or its name in the list to get directions using external navigation tools like Google Maps.

- 8.	**Logout:**  
 Once finished, you can safely log out from your respective panel by clicking the "Logout" option from the navigation bar.


