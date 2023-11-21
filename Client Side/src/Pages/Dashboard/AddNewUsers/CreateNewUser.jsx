import React, { useEffect, useState } from 'react';
import person from '../../../Assets/Images/user32px.png';
import branch from "../../../Assets/Images/bank.png";
import accountType from "../../../Assets/Images/information-button.png";
import idCard from "../../../Assets/Images/id-card.png";
import upload from "../../../Assets/Images/upload.png";
import axios from "axios"

const initState = { name: '', cnicNumber: '', branchCode: "", accountNumber: "", deposit: "", accountType: "" }

export default function CreateNewUser() {
	const [state, setState] = useState(initState);


	const handleChange = (event) => {
		setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(state)

		axios.post("http://localhost:3000/userdata", state)
			.then((response) => {
				console.log("Data sent successfully!", response.data);
			})
			.catch((error) => {
				console.log("00000data not send", error)
			})


	}
	const getuser = async () => {
		try {
			const response = await axios.get('http://localhost:3000/getuser')
			console.log(response, 'user');
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getuser();
	}, [])

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="card mt-5 border-0">
						<div className="card-header text-center text-white" style={{ backgroundColor: "#0077b6" }}>
							<h2>Enter Account Details Below</h2>
							<p>All fields are required*</p>
						</div>
						<div className="card-body " style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}>
							<form action="">
								<div className="row">
									<div className="col-lg-6">
										<div className="d-flex align-items-center">
											<img src={person} className='me-4' alt="Person Logo" />
											<div className='form-floating mb-3 w-100'>
												<input onChange={handleChange} name="name" type="name" className="form-control border-0 border-bottom" placeholder="Name here" />
												<label className='fst-italic' style={{ fontSize: "14px" }}>Full Name</label>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="d-flex align-items-center">
											<img src={idCard} className='me-4' alt="Person Logo" />
											<div className='form-floating mb-3 w-100'>
												<input onChange={handleChange} name="cnicNumber" type="number" className="form-control border-0 border-bottom " placeholder="CNIC Number here" />
												<label className='fst-italic' style={{ fontSize: "14px" }}>CNIC Number (lenght should be 13)</label>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6">
										<div className="d-flex align-items-center">
											<img src={branch} className='me-4' alt="Person Logo" />
											<div className='form-floating mb-3 w-100'>
												<input onChange={handleChange} name="branchCode" type="name" className="form-control border-0 border-bottom" placeholder="Branch Code here" />
												<label className='fst-italic' style={{ fontSize: "14px" }}>Branch Code(1 - 99)</label>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="d-flex align-items-center">
											<img src={person} className='me-4' alt="Person Logo" />
											<div className='form-floating mb-3 w-100'>
												<input onChange={handleChange} name="accountNumber" type="number" className="form-control border-0 border-bottom " placeholder="Account Number here" />
												<label className='fst-italic' style={{ fontSize: "14px" }}>Account Number(Length should be 9)</label>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6">
										<div className="d-flex align-items-center">
											<img src={accountType} className='me-4' alt="Person Logo" />
											<div className='form-floating mb-3  w-100'>
												<select className="form-select border-0 border-bottom" id="accountTypeSelect" value={state.accountType} onChange={handleChange} name="accountType">
													<option value="" disabled>Select an account type</option>
													<option value="saving">Saving</option>
													<option value="current">Current</option>
												</select>
												<label >Account Type</label>
											</div>
										</div>
									</div>

									<div className="col-lg-6">
										<div className="d-flex align-items-center">
											<img src={upload} className='me-4' alt="Person Logo" />
											<div className='form-floating mb-3 w-100'>
												<input onChange={handleChange} name="deposit" type="number" className="form-control border-0 border-bottom " placeholder="CNIC Number here" />
												<label className='fst-italic' style={{ fontSize: "14px" }}>Initial Deposit(Minimum 500 Rs.)</label>
											</div>
										</div>
									</div>
								</div>
								<div className='text-end'>
									<button className='btn btn-success' onClick={handleSubmit}>Create Account</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
