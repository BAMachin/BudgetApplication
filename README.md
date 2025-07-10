
# Budget Tracker Application

**Author**: Bethney Machin  
**University**: Sheffield Hallam University  
**Course**: BSc Digital & Technology Solutions  
**Module**: Software Engineering Concepts & Methods  
**Module Code**: 55-507096-DF-20245  
**Assessment**: Budget Tracker Application

---

## 📋 Overview

This project is an original submission by **Bethney Machin**, created to meet the assessment brief for the **Software Engineering Concepts & Methods** module (55-507096-DF-20245) as part of the Level 5 BSc Digital & Technology Solutions course at Sheffield Hallam University.

The Budget Tracker Application allows users to:
- Track income and expenses
- Set financial reminders
- View overall balance
- Set and monitor savings goals

It is built using **React** for the frontend and **Node.js with SQLite** for the backend.

---

## 🛠️ Technologies Used

- React (Frontend)
- Node.js (Backend)
- Express (API Server)
- SQLite (Database)
- HTML/CSS/JavaScript

---

## 🖥️ How to Run the Application Locally

Follow the steps below to install, set up, and run both the backend and frontend parts of the application.

---

### 📦 Step 1: Clone or Download the Project

If not already done, clone or download the project folder:
```
budget-tracker-app/
```

---

### 🔧 Step 2: Install Node.js & SQLite

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [SQLite3](https://www.sqlite.org/index.html)

---

### 🗄️ Step 3: Set Up the Backend

1. Ensure the database file `budget-tracker-app.sqlite` is present in the root of the project.
2. Open your terminal or command prompt.
3. Navigate to the project directory:
   cd path/to/budget-tracker-app
4. Start the backend server:
   node server.js

>This starts the API server and connects to the SQLite database.

---

### 💻 Step 4: Set Up and Run the Frontend (React)

#### Option A – Run in Development Mode

1. From the root of the project, install frontend dependencies:
   npm install
2. Start the development server:
   npm start
3. The app will automatically open in your browser at:
   http://localhost:3000

> In development mode, changes to the frontend code will automatically reload the app.

---

#### Option B – Run in Production Mode

1. Build the production-ready version of the app:
   npm run build
2. Install a static server globally (if not already installed):
   npm install -g serve
3. Serve the production build:
   serve -s build

4. By default, the app will be available at:
   http://localhost:5000

> The `build/` folder contains all the optimized frontend files for production.

---

## 🗂️ Project Structure

```
budget-tracker-app/
├── build/                     # Production build output
├── public/                    # Static assets
├── src/                       # React components and logic
├── server.js                  # Node.js backend entry point
├── budget-tracker-app.sqlite # SQLite database file
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

---

## Submission Declaration

- This application is my own original work.
- It has been developed to meet the requirements of the **Software Engineering Concepts & Methods** module (55-507096-DF-20245) at Sheffield Hallam University.
- It demonstrates full-stack development using modern frameworks and methodologies while meeting the assessment brief and user stories.

---

## 📧 Author

**Bethney Machin**  
BSc Digital & Technology Solutions  
Sheffield Hallam University
