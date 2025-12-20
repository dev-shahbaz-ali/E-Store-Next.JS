"use client";

import React from "react";
import Container from "./components/Container";

const ErrorPage = ({ error }) => {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
      {/* Error Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h1>

      {/* Error Message */}
      <p className="text-gray-700 mb-6">
        We couldn’t fetch the data at this moment.
        <br />
        {error?.message && (
          <span className="font-mono">Error: {error.message}</span>
        )}
      </p>

      {/* Retry Button */}
      <button
        onClick={() => window.location.reload()}
        className="bg-red-600 text-white px-6 py-2 rounded-md shadow hover:bg-red-700 transition"
      >
        Retry
      </button>
    </Container>
  );
};

export default ErrorPage;
