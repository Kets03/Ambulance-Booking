# Ambulance Booking System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)

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

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **CSS**: For styling the application.

### Backend
- **Node.js**: Backend server to handle API requests.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to store user, driver, and booking information.
- **Axios**: To make HTTP requests from frontend to backend.

## Setup Instructions

### Prerequisites
- **Node.js** (v12 or later)
- **MongoDB** (local or cloud-based instance)

### Steps to Run the Project Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/ambulance-booking-system.git
   cd ambulance-booking-system
2. **Open the server and ambulance app in separate terminals**
