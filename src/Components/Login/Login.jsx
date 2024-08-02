import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import login from "../../Assets/illustration (2).jpg";
import network from "../../Assets/amico.png";
import bitlogo from "../../Assets/bitlinks logo.png";
import "./Login.css";
import { Checkbox } from "@mui/material";
import Input from "@mui/joy/Input";

function Login({ onLogin }) {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSuccess = (tokenResponse) => {
    const { credential } = tokenResponse;
    const payload = JSON.parse(atob(credential.split(".")[1]));

    const userProfile = {
      name: payload.name,
      picture: payload.picture,
      email: payload.email,
    };

    console.log("Logged in successfully:", userProfile);

    onLogin();
    navigate("/bitlinks", { state: userProfile });
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div className="Login">
      <div className="left_login">
        <img src={login} alt="Login Illustration" className="login_img" />
        <img src={network} alt="Network Illustration" className="net_img" />
      </div>
      <div className="login_container">
        <div className="login-con">
          <div className="bitlogo-cover">
            <img src={bitlogo} alt="Bitlinks Logo" className="bitlogo" />
          </div>
          <h1>Login to your account</h1>
          <p style={{ fontStyle: "italic" }}>See what is going on with your business</p>

          <div className="login_id">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
              className="google-login-button"
            />
          </div>

          <p className="or-sign">Or sign in with your email</p>

          <div className="index_text">Email</div>
          <Input
            type="email"
            className="login_input"
            placeholder="mail@abc.com"
            name="fullname"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />

          <div className="index_text">Password</div>
          <Input
            type="password"
            className="login_input"
            placeholder=".........."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />

          <div className="login_p">
            <div className="checkbox"><Checkbox /></div>
            <p>Remember me</p>
            <h4>Forgot Password?</h4>
          </div>

          <button className="login_button">Login</button>

          <div className="not-reg">
            <p style={{ justifyContent: "center" }}>Not Registered yet?</p>
            <p style={{ color: "#2867b2", fontWeight: "600", marginLeft: "1rem" }}>Create an Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
