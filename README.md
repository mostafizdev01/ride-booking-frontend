# 🚖 Ride Management System – Frontend

A **production-grade, fully responsive, and role-based Ride Booking Platform** (similar to Uber or Pathao) built with **React, Redux Toolkit, and RTK Query**.

This frontend connects seamlessly with the backend API to deliver tailored experiences for **Riders, Drivers, and Admins**, ensuring smooth ride booking, management, and administration.

---

## 🌍 Live Demo

🔗 **Frontend:** [Deployed Link Here](https://ride-booking-front-end-nine.vercel.app)
🔗 **Backend:** [Deployed Link Here](https://ride-booking-backend-pi.vercel.app)
<!-- 📽️ **Demo Video (10–15 mins):** [Video Link Here]() -->

---

## 📌 Project Overview

This project provides:

* A **public landing page** showcasing services and features.
* **Role-based dashboards** for Riders, Drivers, and Admins.
* **JWT authentication** with role-based access control.
* **Responsive UI/UX** across mobile, tablet, and desktop.
* **Real-time ride management features** including booking, tracking, history, and analytics.

---

## 🚀 Features

### 🌐 Public Pages (No Authentication)

* **Home Page** with 5+ structured sections (Hero Banner, How it Works, Testimonials, Promotions, etc.)
* **About Us** – Company mission, values, team
* **Features** – Rider, Driver, Admin capabilities
* **Contact Page** – Validated form for inquiries
* **FAQ** – Searchable common questions

### 🔐 Authentication & Authorization

* Login & Registration with role selection (Rider / Driver)
* Admin access via pre-created credentials
* Blocked/Suspended accounts redirected to **status page**
* Persistent login (JWT + local storage)
* Logout functionality

### 🧑‍🤝‍🧑 Rider Dashboard

* Book rides with pickup/destination, fare estimate, payment method
* Ride history with filters and pagination
* Detailed ride view (map route, driver info, timeline)
* Profile management (update details, change password)
* **Emergency SOS button** during active rides

### 🚘 Driver Dashboard

* Online/Offline toggle
* Accept/Reject ride requests
* Manage active rides (status updates: Accepted → Picked Up → In Transit → Completed)
* Earnings dashboard with charts (daily/weekly/monthly)
* Ride history with filters
* Profile & vehicle management

### 🛠️ Admin Dashboard

* User Management (search, filter, block/unblock, approve drivers)
* Ride Oversight with advanced filtering
* Analytics dashboard (ride volume, revenue, driver activity trends)
* Profile management

### 🎨 General Enhancements

* Role-based navigation bar & profile dropdown
* Responsive charts, dynamic ride cards
* Skeleton loaders & lazy loading for performance
* Error handling with **react-hot-toast**
* Accessibility compliance (semantic HTML + keyboard navigation)

---

## 🛠️ Tech Stack

**Frontend:**

* ⚛️ React.js (with React Router v6)
* 🛠 Redux Toolkit & RTK Query
* 🎨 Tailwind CSS
* 📊 Recharts (analytics & charts)
* 🔔 react-hot-toast (notifications)

**Backend (for API):**

* Node.js + Express.js
* MongoDB with Mongoose
* JWT + bcrypt for secure authentication

---

## 📂 Folder Structure

```
ride-management-frontend/
│── public/
│── src/
│   ├── components/   # Reusable UI components
│   ├── features/     # Redux slices & API services
│   ├── pages/        # Route-based pages
│   ├── routes/       # Protected & role-based routes
│   ├── utils/        # Helpers & constants
│   ├── App.tsx
│   └── main.tsx
│── .env              # Environment variables
│── tailwind.config.js
│── package.json
│── tsconfig.json
│── README.md
```

---

## ⚡ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ride-management-frontend.git
cd ride-management-frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root with:

```env
VITE_API_URL=https://your-backend-api-url.com
```

### 4️⃣ Run the development server

```bash
npm run dev
```

### 5️⃣ Build for production

```bash
npm run build
```

---

## 🔑 Test Credentials

### 👤 Admin

* **Email:** [supar@gmail.com](mailto:supar@gmail.com)
* **Password:** 12341234

### 🚘 Driver

* **Email:** [driver5@gmail.com](mailto:driver5@gmail.com)
* **Password:** @Driver1234

### 🧑 Rider

* **Email:** [rider3@gmail.com](mailto:rider3@gmail.com)
* **Password:** @Rider1234

---

## 📊 Future Enhancements

* Google/Facebook login integration
* Real-time ride tracking with live maps
* Push notifications for ride updates
* Advanced SOS integration with WhatsApp/Twilio

---

## 👨‍💻 Author

Developed by **Mostafiz** ([@GitHub](https://github.com/mostafizdev01) · [Portfolio](https://www.mostafizdev.com))

---

Would you like me to also prepare a **backend README.md** in the same polished format so both repos stay consistent?




