# 📰 React News Hub

A professional Full-Stack News Aggregator designed for security, speed, and a polished user experience. This project bridges a high-performance React frontend with a secure Node.js backend proxy.

---

## 🚀 Live Demo
🔗 **[View Live Project](https://react-news-hub.vercel.app/)**

---

## 🛠️ Technical Stack

### **Frontend**
*   **React.js**: Powering the dynamic user interface using modern functional components and Hooks.
*   **Tailwind CSS**: Utilizing a utility-first approach for fully responsive and custom styling.
*   **Lucide React**: Integrated for clean, consistent iconography.

### **Backend**
*   **Node.js & Express.js**: A custom-built server acting as a secure intermediary for API communication.
*   **Dotenv**: Managing environment variables to keep sensitive credentials secure.
*   **CORS**: Configured for safe cross-origin resource sharing.

---

## ✨ Key Features

### **🛡️ Secure API Proxy Architecture**
To follow industry security standards, this project implements a backend proxy:
*   **Credential Masking**: The `NEWSAPI_KEY` is stored strictly in the backend environment, preventing exposure in the browser's network tab.
*   **Header Management**: The server handles mandatory `User-Agent` headers required by the NewsAPI.
*   **Secure Routing**: The frontend communicates solely with the custom Express endpoints, which then securely fetch data.

### **✨ Shimmer UI (Skeleton Loading)**
Enhanced perceived performance through **Shimmer UI** integration:
*   **Interactive Placeholders**: Instead of static spinners, users see animated layouts that mimic the content structure.
*   **Improved UX**: This provides a smoother transition and reduces user frustration during data fetching.

### **🔍 Dynamic Search & Filtering**
*   Real-time search functionality for any global or local topic.
*   Parameterized API routes (e.g., `/api/news/:userQuery`) to handle specific user requests dynamically.

---

## 🏗️ Project Architecture
```text
REACT-NEWSAPP/ (Root Folder)
├── backend/                  # Standalone Backend Project
│   ├── node_modules/         # Server-side dependencies
│   ├── src/
│   │   ├── app.js            # Main Express server & API routes
│   │   └── utils/
│   │       └── constants.js  # API URLs and key filters
│   ├── .env                  # Private (NEWSAPI_KEY)
│   ├── package.json          # Backend scripts & dependencies
│   └── vercel.json           # Vercel config for backend only
│
├── frontend/                 # Standalone Frontend Project
│   ├── src/
│   │   ├── components/       # UI (News Cards, Home, World, etc)
│   │   ├── hooks/            # Hooks for fetch logic
│   │   ├── utils/            # Shimmer UI
│   │   └── App.jsx
│   ├── public/
│   ├── package.json          # Frontend scripts & dependencies
│   └── vite.config.js        # Vite configuration
