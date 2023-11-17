import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className='loginPage'>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center " style={{ minHeight: "80vh" }}>
                    <div className="card" style={{ width: "36rem" }}>
                        <div className="card-body">
                            <h3 className="card-title">Sign Up</h3>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>

                                <div class="d-grid">
                                    <button class="btn btn-danger" type="button">Sign Up</button>
                                </div>
                            </form>
                            <p className='text-center mt-4'>Need an account? <Link to="/Auth/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
