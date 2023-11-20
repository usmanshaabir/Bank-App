import React, { useEffect, useState } from 'react';
import facebook from "../../Assets/Images/facebook.png";
import github from "../../Assets/Images/github.png";
import twiter from "../../Assets/Images/twitter.png"
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate()
  const [dateTime, setDateTime] = useState(getFormattedDateTime);

  function getFormattedDateTime() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    return `${formattedDate}, ${formattedTime}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handleLogin = () => {
    navigate("/Auth/login")
  }

  return (
    <>
      <div className='navbar-dark' style={{ backgroundColor: "#0077b6" }}>
        <div className="container">
          <div className="row">
            <div className='d-flex justify-content-between'>
              <div className='text-white'>{dateTime}</div>
              <div className='text-white'>
                <img className='me-2' src={facebook} alt="" />
                <img className='me-2' src={github} alt="" />
                <img src={twiter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0077b6" }}>
        <div class="container">
          <h3 class="navbar-brand text-uppercase" >Bank-App</h3>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button className='btn btn-light text-dark' onClick={handleLogin}>Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
