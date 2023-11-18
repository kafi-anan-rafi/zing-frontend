import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/login");
  }, []);
  return;
};

export default Logout;
