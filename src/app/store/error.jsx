"use client";

import React from "react";
import Container from "../components/Container";

const ErrorPage = () => {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen text-center p-5">
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
        Oops! Something went wrong.
      </h1>

      <p className="text-gray-700 mb-6">
        We couldn’t fetch products from the store at this moment.
        <br />
        Please check your connection or try again.
      </p>

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
