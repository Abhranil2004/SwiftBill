# SwiftBill ⚡

SwiftBill is a modern, lightning-fast invoice generation and management platform built with the MERN stack. Designed for freelancers, small businesses, and professionals, it allows users to quickly create, manage, and track beautiful invoices with ease.

## ✨ Features

- **Lightning Fast Invoice Creation**: Quickly generate professional invoices in seconds.
- **Custom Business Profiles**: Save your business details, logo, company stamp, and authorized signature.
- **Real-Time Preview & Print**: Preview your invoices in real-time and export them directly to PDF or print them.
- **Secure Authentication**: Multi-tenant user access and secure authentication powered by [Clerk](https://clerk.dev/).
- **Responsive Design**: A sleek, intuitive, and mobile-friendly interface built with Tailwind CSS.
- **Persistent Storage**: All your invoices and business settings are securely saved to MongoDB.

## 🛠️ Tech Stack

**Frontend:**
- React 19 (via Vite)
- Tailwind CSS (for styling)
- Clerk React SDK (for Authentication)
- React Router DOM (for Navigation)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose (Database)
- CORS & dotenv (Environment Management)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- A [MongoDB](https://www.mongodb.com/) account and cluster URI
- A [Clerk](https://clerk.com/) account for authentication keys

### 1. Clone the repository
```bash
git clone https://github.com/your-username/swiftbill.git
cd swiftbill
```

### 2. Set up the Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add the following:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```
Start the backend server:
```bash
npm start
# or use node index.js
```

### 3. Set up the Frontend
Open a new terminal window and run:
```bash
cd frontend
npm install
```
Create a `.env` file in the `frontend` directory and add the following:
```env
VITE_API_BASE=http://localhost:4000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```
Start the frontend development server:
```bash
npm run dev
```

### 4. Open the App
Navigate to `http://localhost:5173` in your browser to start using SwiftBill!

---

## 📄 License

This project is open-source and available under the MIT License.
