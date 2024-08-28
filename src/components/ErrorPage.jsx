import React from 'react';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <h1 className="text-5xl font-bold mb-6 text-red-500 drop-shadow-lg">
        Oops!
      </h1>
      <p className="text-lg mb-8 text-gray-300">
        Sorry, an unexpected error has occurred.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-red-600 text-gray-100 rounded-lg hover:bg-red-700 transition"
      >
        Reload Page
      </button>
    </div>
  );
}

export default ErrorPage;
