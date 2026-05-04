# 🎓 CSR Scholarship Platform

A client-server-based web application designed to streamline Corporate Social Responsibility (CSR) scholarship programs by connecting donors with deserving students through a structured and scalable system.

---

##  Overview

The CSR Scholarship Platform enables organizations to manage donations efficiently while allowing students to apply for financial support via a centralized system.

The project follows a **client-server architecture**, where:

* The **client (frontend)** handles UI and user interactions
* The **server (backend)** processes requests, business logic, and database operations

---

##  Architecture

* **Client:** React-based frontend for user interaction
* **Server:** Backend API handling authentication, data processing, and business logic
* **Database:** Stores users, applications, and donation records

---

##   Features

###  Student Side

* Submit scholarship applications
* Upload required documents
* Eligibility-based request system
* Track application status

###  Donor Side

* Contribute to CSR scholarship fund
* View student requests
* Transparent donation tracking

###  Server Features

* REST API for handling client requests
* Authentication & authorization
* Application validation logic
* Secure data management

---

##  Tech Stack

### Client (Frontend)

* React.js
* Tailwind CSS
* Framer Motion

### Server (Backend)

* Node.js 
* RESTful APIs

### Database

* MongoDB 

### Additional Tools

* JWT Authentication
* File Upload Handling
* Email Notification System

---

## 📂 Project Structure

```id="y7az1p"
csr-scholarship-platform/
│
├── client/            # Frontend (React)
├── server/            # Backend (API & business logic)
├── database/          # Models / schemas
├── public/            # Static assets
└── README.md
```

---

##  Installation & Setup

### 1. Clone Repository

```id="j2nx8n"
git clone https://github.com/your-username/csr-scholarship-platform.git
cd csr-scholarship-platform
```

### 2. Setup Client

```id="9g4o3d"
cd client
npm install
npm run dev
```

### 3. Setup Server

```id="s8z2hf"
cd server
npm install        # or pip install -r requirements.txt (if Flask)
npm start          # or python app.py
```

### 4. Environment Variables

Create a `.env` file inside the server folder:

```id="t0v4nm"
PORT=5000
DB_URI=your_database_url
JWT_SECRET=your_secret_key
EMAIL_SERVICE=your_email_config
```

---

##  API Communication Flow

1. Client sends request (e.g., apply for scholarship)
2. Server validates input & processes logic
3. Server interacts with the database
4. Response sent back to client
5. Client updates UI accordingly

---

##  Use Case

* CSR initiatives by companies
* Educational NGOs
* Scholarship management systems

---

##  Key Outcomes

* Structured client-server communication
* Reduced manual processing workload
* Scalable and maintainable architecture
* Improved accessibility for students

---

##  Future Enhancements

* Role-based dashboards
* Payment gateway integration
* AI-based eligibility filtering
* Real-time notifications

---

## 👨‍💻 Author

**Priyanshu Kaushik**

---
