import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {

  const navigate = useNavigate()

  return (
    <div
      style={{
        width: "90vw",
        height: "55vh",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        marginLeft: "5vw",
        paddingTop: "8vw",
      }}
    >
      <h1>Page Not Found</h1>
      <h3>Please check if you've entered the proper url</h3>
      <h2><span style={{ cursor: "pointer", width: "max-content" }} onClick={() => {navigate('/Portfolio')}}>
        Click here to Redirect to Home Page
      </span>
      </h2>
    </div>
  );
}

export default PageNotFound;
