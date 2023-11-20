import React from 'react';
import Google from "../../../Assets/Images/google.png";
import facebook from "../../../Assets/Images/facebook-Login.png";
import github from "../../../Assets/Images/github-Login.png"
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()

    const handleDashboard = () => {
        navigate("/dashboard")
    }

    return (
        <div className='loginPage'>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center " style={{ minHeight: "80vh" }}>
                    <div className="card" style={{ width: "36rem" }}>
                        <div className="card-body">
                            <h3 className="card-title">LOGIN</h3>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                </div>
                                <div class="d-grid">
                                    <button class="btn btn-primary" type="button" onClick={handleDashboard}>Login</button>
                                </div>
                            </form>
                            <div className='d-flex justify-content-center mt-4'>
                                <img className='me-3' src={Google} alt="Google Sign in" />
                                <img className='me-3' src={facebook} alt="facebook Sign in" />
                                <img src={github} alt="github Sign in" />
                            </div>
                            <p className='text-center mt-4'>Need an account? <Link to="/Auth/signup">SIGNUP</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
