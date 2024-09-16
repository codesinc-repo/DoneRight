// src/components/Login.js
import React from "react";
import logo from "../../images/DRD logo.png";
import Google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import apple from "../../images/apple-logo.png";

import { useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file
import { auth, GoogleAuthProvider, signInWithPopup } from "../../firebase";
import { OAuthProvider } from "firebase/auth";

function Register() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in: ", user);
      navigate("/UserDashboard");
      // You can now use the user information, or redirect the user to another page
    } catch (error) {
      console.error("Error during sign-in: ", error);
    }
  };

  const signInWithApple = async () => {
    try {
      const provider = new OAuthProvider('apple.com');
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in with Apple: ", user);
      navigate("/UserDashboard");
    } catch (error) {
      console.error("Error during Apple sign-in: ", error);
    }
  };
  return (
    <div className="container-fliud bg_login_img py-4">
      <div className="login-container">
        <div className="brand-header">
          <img src={logo} alt="Vista Logo" className="brand-logo" />
          <img src={logo} alt="Done Right Decals Logo" className="brand-logo" />
          <img src={logo} alt="VistaCreate Logo" className="brand-logo" />
        </div>
        <div className="login-box mb-4">
          <h2 className="login-title">Three great brands. One account.</h2>
        </div>
        <div className="social-login">
          <button
            className="btn btn-light social-btn"
            onClick={signInWithGoogle}
          >
            <img src={Google} alt="" /> Continue with Google
          </button>
          <button className="btn btn-light social-btn">
            <img src={facebook} alt="" /> Continue with Facebook
          </button>
          <button className="btn btn-light social-btn" onClick={signInWithApple}>
            <img src={apple} alt="" /> Continue with Apple
          </button>
        </div>

        <div className="email-login mt-4">
          <h4>Or, sign in with email.</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <p className="terms-text">
              By clicking the button below, you agree to, and have read,{" "}
              <a href="#"> Account Terms</a>. For more details on how we use the
              information we collect about you, please read our{" "}
              <a href="#">Privacy and Cookie Policy</a>.
            </p>
          </div>
          <button className="btn btn-primary btn-block">
            Create an account
          </button>
        </div>

        <div className="already-account">
          <p>
            Already Have an account? <a href="/SignIn">login</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
