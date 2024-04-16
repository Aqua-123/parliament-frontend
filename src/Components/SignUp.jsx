import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaArrowDown } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CONSTITUENCY_LIST } from "../assets/Constituency";
import { LANGUAGES } from "../assets/Languages";
import { ENDPOINT } from "../Constants";

const STATESLIST = [
  ...new Set(
    CONSTITUENCY_LIST.map((constituency) => constituency.stateFullName)
  ),
];

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [constituency, setConstituency] = useState("");
  const [house, setHouse] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic client-side validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      email,
      name,
      state,
      constituency,
      house,
      motherTongue,
      password,
    };

    try {
      const response = await fetch(`${ENDPOINT}/sign-up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      alert("User created successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating user");
    }
  };

  return (
    <>
      <section className="loginSec">
        <div className="container">
          <div className="loginDiv">
            <h2>SIGN UP</h2>
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
                    <MdOutlineAlternateEmail />
                  </span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label>Name</label>
                <div className="inputFrm">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span className="inputFrmInc">
                    <FaUser />
                  </span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label>State</label>
                <div className="inputFrm">
                  <select
                    className="form-control"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    {STATESLIST.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  <span className="inputFrmInc">
                    <FaArrowDown />
                  </span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label>Constituency</label>
                <div className="inputFrm">
                  <select
                    className="form-control"
                    value={constituency}
                    onChange={(e) => setConstituency(e.target.value)}
                  >
                    {CONSTITUENCY_LIST.filter(
                      (constituency) => constituency.stateFullName === state
                    ).map((constituency) => (
                      <option key={constituency.id} value={constituency.id}>
                        {constituency.Name}
                      </option>
                    ))}
                  </select>
                  <span className="inputFrmInc">
                    <FaArrowDown />
                  </span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label>Lok Sabha / Rajya Sabha</label>
                <div className="inputFrm">
                  <select
                    className="form-control"
                    value={house}
                    onChange={(e) => setHouse(e.target.value)}
                  >
                    <option value="Lok Sabha">Lok Sabha</option>
                    <option value="Rajya Sabha">Rajya Sabha</option>
                  </select>
                  <span className="inputFrmInc">
                    <FaArrowDown />
                  </span>
                </div>
              </div>
              <div className="col-12 form-group">
                <label>Mother Tongue</label>
                <div className="inputFrm">
                  <select
                    className="form-control"
                    value={motherTongue}
                    onChange={(e) => setMotherTongue(e.target.value)}
                  >
                    {LANGUAGES.map((language) => (
                      <option key={language.LANGUAGE} value={language.LANGUAGE}>
                        {language.NAME}
                      </option>
                    ))}
                  </select>
                  <span className="inputFrmInc">
                    <FaArrowDown />
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
              <div className="col-12 form-group">
                <label>Confirm Password</label>
                <div className="inputFrm">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span className="inputFrmInc">
                    <RiLockPasswordFill />
                  </span>
                </div>
              </div>
              <div className="col-12 form-group loginBtnDivnew">
                <button className="button green btn-login-signup" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
