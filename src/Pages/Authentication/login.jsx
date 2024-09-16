// src/components/Login.js
import React from "react";
import logo from "../../images/DRD logo.png";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import apple from "../../images/apple-logo.png";
import "./login.css"; // Import the CSS file
import { auth, GoogleAuthProvider, signInWithPopup } from "../../firebase";
import { OAuthProvider } from "firebase/auth";

function Login() {
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
      <div className="login-container ">
        <div className="brand-header">
          <img src={logo} alt="Vista Logo" className="brand-logo" />
          <img src={logo} alt="Done Right Decals Logo" className="brand-logo" />
          <img src={logo} alt="VistaCreate Logo" className="brand-logo" />
        </div>
        <div className="login-box">
          <h2 className="login-title">Three great brands. One account.</h2>
          <p className="login-description">
            Sign in to <strong>Done Right Decals</strong> by Decals and we’ll sync
            your accounts. If you have multiple accounts, including Done Right
            Decals, sign in with your Done Right Decals account.
          </p>
        </div>
        <div className="social-login">
          <button className="btn btn-light social-btn" onClick={signInWithGoogle}>
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
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button className="btn btn-primary btn-block">Sign in</button>
        </div>

        <div className="create-account">
          <p>or</p>
          <button className="btn btn-outline-secondary btn-block crt_acnt_btn">
            <Link to={"/SignUp"} className="text-decoration-none">
              Create an account
            </Link>
          </button>
        </div>
      </div>
    </div>


  );
}

export default Login;
