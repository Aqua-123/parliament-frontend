import React from "react";
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop()
  return (
    <>
     <section className="loginSec">
        <div className="container">
          <div className="loginDiv">
            <h2>LOGIN</h2>
            <form action="">
              <div className="col-12 form-group">
                <label htmlFor="">Email</label>
                <div className="inputFrm">
                  <input type="text"
                    className="form-control"
                    name="username" />
                  <span className="inputFrmInc"><FaUser /></span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label htmlFor="">Password</label>
                <div className="inputFrm">
                  <input type="password"
                    className="form-control"
                    name="password"/>
                  <span className="inputFrmInc"><RiLockPasswordFill /></span>
                </div>
              </div>
              <div className="col-12 form-group loginBtnDivnew">
                <button className="button green btn-login-signup">Login</button>
              </div>
              <div className="col-12 form-group signupFrgtdiv">
                <p className="dontHavTxt">Don't have account?</p>
                <Link className="signBtn">Sign Up</Link> |
                <Link className="signBtn frgt">Forgot Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
