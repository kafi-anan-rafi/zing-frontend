import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../services/authService";

const SignOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.removeAuthToken();
    // navigate("/");
    window.location = "/";
  }, []);
  return;
};

export default SignOut;
