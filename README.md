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

![image](https://github.com/user-attachments/assets/b52a5253-5546-4c3d-9568-14ddc66c54bb)

**Book Ambulance:**

 ![image](https://github.com/user-attachments/assets/08287317-2eb5-4f24-9a8b-061e38e36b1e)

**My Bookings:**

 ![image](https://github.com/user-attachments/assets/951d5ce3-74ea-4473-b84f-182cf3c1f586)

**Driver Profile:**

 ![image](https://github.com/user-attachments/assets/4ad5cd63-af4e-441b-a5e7-f5e7a48cd6ae)

**Current Ride:**

 ![image](https://github.com/user-attachments/assets/c242747e-3a4f-4179-9beb-32c51ea14594)

**Ride History:**

![image](https://github.com/user-attachments/assets/d356912d-292b-4dbd-a2fc-6d347c4ee14e)

**Ride Request:**

 ![image](https://github.com/user-attachments/assets/f4edbccd-4d5c-48b7-826e-2a146b09e662)

**Admin Profile:**

 ![image](https://github.com/user-attachments/assets/1c3e970a-8c5a-41e0-b756-c671603e878c)

**Manage Drivers:**

 ![image](https://github.com/user-attachments/assets/110c22ee-0256-4329-bde3-b412bf894432)

**Booking Overview:**

![image](https://github.com/user-attachments/assets/7d13da85-1274-426b-ad5f-3a665d260026)


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

