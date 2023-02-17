import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      This page doesn't exist, please go back to
      <button onClick={() => navigate("/")}>Home Page</button>
    </div>
  );
};

export default ErrorPage;
