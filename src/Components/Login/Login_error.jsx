import React from "react";
import layout from "../../Assets/illustration (2).jpg";
import err_img from "../../Assets/cuate.png";
import "./Login_error.css";

function ErrorPage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="error_page">
      <div className="image_container">
        <img src={layout} alt="Layout" className="error_layout" />
        <img src={err_img} alt="Error" className="error_img" />
      </div>
      <button className="retry_button" onClick={handleRetry}>Retry</button>
    </div>
  );
}

export default ErrorPage;
