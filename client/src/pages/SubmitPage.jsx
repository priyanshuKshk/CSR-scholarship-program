// src/pages/SuccessPage.jsx
import { Link } from 'react-router-dom';

export default function SubmitPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-center p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">🎉 Application Submitted!</h1>
      <p className="text-lg text-green-700 mb-6">Thank you! Your scholarship application has been successfully submitted.</p>
      <Link to="/" className="bg-blue-900 text-white  px-4 py-2 rounded hover:bg-green-700 transition">
        Go Back to Home
      </Link>
    </div>
  );
}
