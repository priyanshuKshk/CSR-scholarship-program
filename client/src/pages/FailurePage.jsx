// src/pages/FailurePage.jsx
import { Link } from "react-router-dom";

export default function FailurePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h1 className="text-3xl font-bold text-red-700 mb-4">❌ Submission Failed</h1>
      <p className="text-lg mb-6">Something went wrong while submitting your application.</p>
      <Link to="/" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
        Try Again / Go Back to Home
      </Link>
    </div>
  );
}
