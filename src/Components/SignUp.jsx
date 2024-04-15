import React from "react";
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

function SignUp() {
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
            <h2>SIGN UP</h2>
            <form action="">
              <div className="col-12 form-group">
                <label htmlFor="">Email</label>
                <div className="inputFrm">
                  <input type="text"
                    className="form-control"
                    name="username" />
                  <span className="inputFrmInc"><MdOutlineAlternateEmail /></span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label htmlFor="">Name</label>
                <div className="inputFrm">
                  <input type="text"
                    className="form-control"
                    name="username" />
                  <span className="inputFrmInc"><FaUser /></span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label htmlFor="">Constituency</label>
                <div className="inputFrm">
                 <select name="" id="" className="form-control">
                    <option value="">Andhra Pradesh</option>
                    <option value="">Arunachal Pradesh</option>
                 </select>
                  <span className="inputFrmInc"><FaArrowDown /></span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label htmlFor="">Lok Sabha / Rajya Sabha</label>
                <div className="inputFrm">
                 <select name="" id="" className="form-control">
                    <option value="">Lok Sabha</option>
                    <option value="">Rajya Sabha</option>
                 </select>
                  <span className="inputFrmInc"><FaArrowDown /></span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label htmlFor="">Mother Tongue</label>
                <div className="inputFrm">
                 <select name="" id="" className="form-control">
                    <option value="">Hindi</option>
                    <option value="">Telgu</option>
                 </select>
                  <span className="inputFrmInc"><FaArrowDown /></span>
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
              <div className="col-12 form-group">
                <label htmlFor="">Confirm Password</label>
                <div className="inputFrm">
                  <input type="password"
                    className="form-control"
                    name="password"/>
                  <span className="inputFrmInc"><RiLockPasswordFill /></span>
                </div>
              </div>
              <div className="col-12 form-group loginBtnDivnew">
                <button className="button green btn-login-signup">Sign Up</button>
              </div>
              {/* <div className="col-12 form-group signupFrgtdiv">
                <p className="dontHavTxt">Don't have account?</p>
                <Link className="signBtn">Sign Up</Link> |
                <Link className="signBtn frgt">Forgot Password?</Link>
              </div> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
