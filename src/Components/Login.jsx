import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { ENDPOINT } from "../Constants";
import Loader from "./Loader";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when starting the login process

    const payload = { email, password };

    fetch(`${ENDPOINT}/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Login failed. Please try again.");
      })
      .finally(() => {
        setLoading(false); // Set loading to false after completing the request
      });
  };

  return (
    <>
      {loading ? (
        <Loader /> // Conditionally render the Loader component
      ) : (
        <section className="loginSec">
          <div className="container">
            <div className="loginDiv">
              <h2>LOGIN</h2>
              <form onSubmit={handleSubmit}>
                <div className="col-12 form-group">
                  <label>Email</label>
                  <div className="inputFrm">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="inputFrmInc">
                      <FaUser />
                    </span>
                  </div>
                </div>
                <div className="col-12 form-group">
                  <label>Password</label>
                  <div className="inputFrm">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="inputFrmInc">
                      <RiLockPasswordFill />
                    </span>
                  </div>
                </div>
                <div className="col-12 form-group loginBtnDivnew">
                  <button
                    type="submit"
                    className="button green btn-login-signup"
                  >
                    Login
                  </button>
                </div>
                <div className="col-12 form-group signupFrgtdiv">
                  <p className="dontHavTxt">Don't have an account?</p>
                  <Link to="/signup" className="signBtn">
                    Sign Up
                  </Link>
                  <Link to="/forgot-password" className="signBtn frgt">
                    Forgot Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
