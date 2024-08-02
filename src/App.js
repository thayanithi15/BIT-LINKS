import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Login_error from "./Components/Login/Login_error";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import FlowIcons from "./Components/FlowIcons/FlowIcons/FlowIcons";
import ProgressBar from "./Components/Login/ProgressBar";
import UpScroll from "./Components/Home/UpScroll/UpScroll"

export default function App() {
  const clientId =
    "1046741513914-iprcol8k4pqgu1h1ivpgsla0km5aj4qp.apps.googleusercontent.com";
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        <Route path="*" element={<Login_error />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/bitlinks"
          element={
            // <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            // </PrivateRoute>
          }
        />
      </Routes>
    </GoogleOAuthProvider>
  );
}
