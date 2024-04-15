import React from "react";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import Parlimant from "../assets/images/parlimant-logo.png"
import anuvadini from "../assets/images/Anuvadini.png"
import MenuOpen from "../assets/images/bars.png"
import GOI from "../assets/images/goi-logo.png"

import FaceCutout from "../assets/images/face.png";


import { FilePdf } from "phosphor-react";
import coreEngg from "../assets/images/icon_engineering.svg";
import ai from "../assets/images/ai.png";
import image23 from "../assets/images/icon_image-23.svg";
import camera from "../assets/images/camera.png";
import analyzer from "../assets/images/icon_ai-video-analyzer.svg"
import doctrans from "../assets/images/icon/translation/documents-tran.png"
import chutki from "../assets/images/icon/translation/chutiki-icon.png"
import voice from "../assets/images/icon/translation/voice01.png"
import legal from "../assets/images/icon/translation/legal.png"
import virtual from "../assets/images/icon/translation/virtual-keyword-icon.png"
import govt from "../assets/images/icon/translation/govt.png"
import Dictation from "../assets/images/icon/translation/judge.png"
import bhasha from "../assets/images/icon/translation/bhasha-dan-icn.png"
import videotranslation from "../assets/images/icon/translation/video-translation.svg"
import textTo from "../assets/images/icon/voice/text-to-speech.png"
import voicetotext from "../assets/images/icon/voice/text-to-text.png"
import mkb from "../assets/images/icon/file/mkb.png"
import ananta from "../assets/images/icon/translation/ananta.png"

function Header() {
  const [show, setShow] = useState(false);
  const [authCategory, setAuthCategory] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [manu, setMenu] = useState(false);
  const menuHandle = () =>{
    setMenu(!manu);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  

  };
  return (
    <div>
      <header>
        <div className="row">
          <div className="logo-sec col-lg-6 text-start">
          <Link to="/" title="" target="_blank">
              <Image src={GOI} alt="Logo" width={140}/>
              </Link>
              <Link to="/" className="aicte" title="" target="_blank">
              <Image src={Parlimant} alt="Logo" width={140}/>
              </Link>
          <Link to="/" title="" className="anuvadini">
              <Image src={anuvadini} alt="Logo" width="205px"/>
            </Link>
             
          </div>
         
          <div className={manu === true ? "menu-sec col-lg-8 openMenu" : "menu-sec col-lg-6"}>
            <ul>
              {/* <li>
                <Link to="/" onClick={menuHandle} >Home</Link>
              </li>
             
              <li><Link to='/aboutUs' title="About Us" onClick={menuHandle}>About Us</Link></li> */}
            </ul>  
            <div className="login-signup-sec">
          
            <button title="Try for Free" className="button green btn-login-signup" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="94 170 136 128 94 86"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="24"
                  y1="128"
                  x2="136"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <path
                  d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
              Login
            </button>
            </div>      
            </div>
          
        </div>
        
        <Link className="menu-mobile-button" to={undefined} onClick={menuHandle}>
          <Image src={MenuOpen} alt="Menu" />
        </Link>
      </header>    
  <Modal show={show} onHide={handleClose}>   
    <Modal.Body>   
    <div className="popup-login-signup-bg"></div>
   <div className="popup-login-signup">
    <div className="btn-close-popup-login-box">
        <button type="button" aria-label="Close" onClick={handleClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.818 4.05a.75.75 0 0 0-1.06 1.06l3.181 3.183-3.182 3.182a.75.75 0 1 0 1.061 1.06L8 9.355l3.182 3.182a.75.75 0 1 0 1.06-1.061L9.062 8.293l3.182-3.182a.75.75 0 0 0-1.061-1.06L8 7.231 4.818 4.05Z" fill="currentColor"></path>
            </svg>
        </button>
    </div>
    <div className="row">
        <div className="col-lg-12 p-0 login-left-box">            
            {/* <!--Start Login Box--> */}
            <div className="login-box">
                
                <div>
                    <div className="block">
                                              
                    </div>
                    
                    {/* <!-- Start Login Area --> */}
                    {authCategory === 0 ?                    
                    <div className="LoginArea">
                      <h3>Log in or sign up in seconds</h3>
                     <p>Use your email to continue with ANUVADINI!</p>
                     <div className="or-line-box">
                        <hr/>
                        <span className="or-txt">or</span>
                    </div>

                      <div className="social-btn-box">
                            <div className="btn-google">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z" fill="#4285F4"></path>
                                  <path d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z" fill="#34A853"></path>
                                  <path d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z" fill="#FBBC05"></path>
                                  <path d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 3.96 7.95l3 2.34A5.36 5.36 0 0 1 12 6.58z"></path>
                                  </svg>
                                Continue with Google
                            </div>
                        </div>  
                        <div>
                            <form className="login-form">
                                <div className="form-group mt-3">
                                    <label for="email" className="label-text">Email Address</label>
                                    <input autofocus="autofocus" id="email" type="email" className="form-input form-control" placeholder="name@example.com"/>
                                </div>
                                <div className="form-group mt-3">
                                    <label for="password" className="label-text">Password</label>
                                    <input data-testing-id="password" id="password" type="password" className="form-input form-control"/>
                                </div>
                                <div className="form-group mt-3">
                                    <button className="button orange" type="submit">Sign In</button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-1">
                            <Link href="#!" className="clickSignupArea" onClick={()=> setAuthCategory(1)}>New User?</Link>&nbsp;&nbsp;
                            <Link to="#!" className="clickResetPassArea"  onClick={()=> setAuthCategory(2)}>Forgot Password?</Link>
                        </div>
                    </div>
                     : authCategory === 1 ?

                    <div className="SignupArea">
                      <h3>Sign up in seconds</h3>
                     <p>Use your email to continue with ANUVADINI!</p>
                     <div className="or-line-box">
                        <hr/>
                        <span className="or-txt">or</span>
                    </div>
                        <div>
                            <form className="login-form">
                                <div className="form-group">
                                    <label for="email" className="label-text">Email Address</label>
                                    <input autofocus="autofocus" id="email" type="email" className="form-input form-control" placeholder="name@example.com"/>
                                </div>
                                <div className="form-group mt-3">
                                    <label for="password" className="label-text">Password</label>
                                    <input data-testing-id="password" id="password" type="password" className="form-input form-control"/>
                                </div>
                                <div className="form-group mt-3">
                                    <button className="button orange" type="submit">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-1">
                            <Link to="#!" className="clickLoginArea"  onClick={()=> setAuthCategory(0)}>Login?</Link>&nbsp;&nbsp;
                            <Link to="#!" className="clickResetPassArea"  onClick={()=> setAuthCategory(2)}>Forgot Password?</Link>
                        </div>
                    </div>
                    :
                    <div className="ResetPassArea">
                      <h3>Forgot Password</h3>
                     <p>Use your email to continue with ANUVADINI!</p>
                     <div className="or-line-box">
                        <hr/>
                        <span className="or-txt">or</span>
                    </div>
                        <div>
                            <form className="login-form">
                                <div className="form-group">
                                    <label for="email" className="label-text">Email Address</label>
                                    <input autofocus="autofocus" id="email" type="email" className="form-input form-control" placeholder="name@example.com"/>
                                </div>
                                <div className="form-group mt-3">
                                    <button className="button orange" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-1">
                            <Link to="#!" className="clickSignupArea"  onClick={()=> setAuthCategory(1)}>Sign Up?</Link>&nbsp;&nbsp;
                            <Link to="#!" className="clickLoginArea"  onClick={()=> setAuthCategory(0)}>Login?</Link>
                        </div>
                    </div> }
                    {/* <!-- End ResetPassArea Area --> */}
                 
                    <div class="sml-txt">
                        <p> By continuing, you agree to our <Link to="/tirmOfUse" class="undeline" onClick={handleClose} >Terms Of Use</Link> and <Link to="/privacyPolicy" class="undeline"  onClick={handleClose} >Privacy Policy</Link>.</p>
                    </div>
                </div>

            </div>
            {/* <!--End Login Box-->
            <!--Start Signup Box--> */}
            <div className="signup-box"></div>
            {/* <!--End Signup Box--> */}
        </div>
       
    </div>
</div>
    </Modal.Body>  
  </Modal>
    </div>
   
  );
}

export default Header;
