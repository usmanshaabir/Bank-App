import React, { useEffect, useState } from 'react';
import person from "../../../Assets/Images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const initState = { dipsoit: "", description: '' }

export default function UserAccount() {
  const [userData, setUserData] = useState([]);
  const [singleUserData, setSingleUserData] = useState(null)
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [diposit, setDipsoit] = useState(initState);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getuser");
      setUserData(response.data.data);
      setIsAppLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  const handlaccount = (data) => {
    setSingleUserData(data)
  }
  console.log(singleUserData, 'data');

  useEffect(() => {
    getUserData();
  }, [])

  const handleDelete = (deletedUser) => {

    axios.delete(`http://localhost:3000/deleteuser/${deletedUser}`)
      .then((res) => {
        console.log("delete user Successfully", res);
      })
      .catch((error) => {
        console.error("user not deleted", error);
      })
    const userdeleteInBroswer = userData.filter((item, index) => item._id !== deletedUser)
    setUserData(userdeleteInBroswer)

  }

  const handleChange = (e) => {
    setDipsoit((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
  };



  const handleDeposit = async () => {

    console.log("diposit", diposit.dipsoit);
    try {
      const _id = singleUserData._id
      const response = await axios.get(`http://localhost:3000/getSpecificUser/${_id}`);
      const olddeposit = response.data.data.deposit
      const newdeposit = diposit.dipsoit
      const sumdeposit = olddeposit + parseInt(newdeposit)
      console.log(sumdeposit);
      const updateresponse = await axios.put(`http://localhost:3000/updatedeposit/${_id}`, {
        deposit: sumdeposit, description: diposit.description
      })
      console.log(updateresponse, 'updateresponse');

    } catch (error) {
      console.error("Error fetching user data:", error);
    }



    // try {
    //   const response = await axios.put(`http://localhost:3000/updatedeposit/${singleUserData._id}`, {
    //     deposit: singleUserData.deposit,
    //     description: singleUserData.description,
    //   });

    //   setSingleUserData(response.data.userData);

    // Close the deposit modal
    //   document.getElementById('depositModel').click(); // Assuming you're using Bootstrap and this triggers modal dismissal
    // } catch (error) {
    //   console.error("Deposit not updated", error);
    // }
  };



  return (
    <div className="container">
      <div className="row">
        <div className="card mt-5 border-0 " style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <div className='mt-3'>
            <button type="button" className="btn btn-lg px-3 py-1 rounded-0 text-white" style={{ backgroundColor: "#ee6c4d", fontSize: "13px" }}>
              <span><FontAwesomeIcon icon={faArrowLeft} /></span> Dashboard
            </button>
          </div>
          <div className='d-flex justify-content-center border-bottom pb-3'>
            <div>
              <img src={person} className='pt-2' alt="" />
            </div>
            <h4 className="card-header border-0 ps-0 " style={{ backgroundColor: "white" }}> Accounts</h4>
          </div>
          <div className="card-body">
            <div className='table-responsive'>
              {isAppLoading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#04aa6d", color: "white" }}>Branch code</th>
                      <th style={{ backgroundColor: "#04aa6d", color: "white" }}>Account #</th>
                      <th style={{ backgroundColor: "#04aa6d", color: "white" }}>Name</th>
                      <th style={{ backgroundColor: "#04aa6d", color: "white" }}>Type</th>
                      <th style={{ backgroundColor: "#04aa6d", color: "white" }}>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(userData) && userData.map((userItem, index) => (
                      <tr key={index}>
                        <td>{userItem?.branchCode}</td>
                        <td className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { handlaccount(userItem) }}>{userItem.accountNumber}</td>
                        <td>{userItem.name}</td>
                        <td>{userItem.accountType}</td>
                        <td>{userItem.deposit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* User Account Details in model */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button className='btn btn-lg px-3 py-1 text-white' data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: "13px", backgroundColor: "#ee6c4d" }}> <span><FontAwesomeIcon icon={faArrowLeft} /></span> View All Accounts</button>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className='d-flex justify-content-between'>
                <h4>Account Details</h4>
                <div>
                  <button className='btn text-white' style={{ backgroundColor: "#ee6c4d" }} data-bs-toggle="modal" data-bs-target="#deleteModel" > <span><FontAwesomeIcon icon={faTrash} /></span> Delete Account</button>
                </div>
              </div>
              <div className='d-flex justify-content-around'>
                <div>
                  <h6 className='mb-3 mt-3'>Branch Code</h6>
                  <h6 className='mb-3'>Account #</h6>
                  <h6 className='mb-3'>Full Name</h6>
                  <h6 className='mb-3'>Type</h6>
                  <h6 >Balance</h6>
                </div>
                <div>
                  <h6 className='mb-3 mt-3'>{singleUserData?.branchCode}</h6>
                  <h6 className='mb-3'>{singleUserData?.accountNumber}</h6>
                  <h6 className='mb-3'>{singleUserData?.name}</h6>
                  <h6 className='mb-3'>{singleUserData?.accountType}</h6>
                  <h6 >{singleUserData?.deposit}</h6>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#depositModel"><span><FontAwesomeIcon icon={faMoneyBillTransfer} /></span>Deposit</button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#withdrawModel"><span><FontAwesomeIcon icon={faDownload} /></span>Withdraw</button>
            </div>
          </div>
        </div>
      </div>

      {/* delete model */}

      <div class="modal fade" id="deleteModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ top: "30vh" }}>
        <div class="modal-dialog" >
          <div class="modal-content ">
            <div class="modal-header border-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <h6>Are you sure you want to delete your Bank Account?</h6>
            </div>
            <div class="modal-footer  border-0">
              <button type="button" class="btn btn-success" data-bs-dismiss="modal">No</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => { handleDelete(singleUserData?._id) }} >Yes</button>
            </div>
          </div>
        </div>
      </div>

      {/* deposit model */}

      <div class="modal fade" id="depositModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content px-4">
            <div className=' mt-3 mb-3'>
              <button type="button" class="btn text-white py-1" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: "#ee6c4d" }}> &#8592; Back</button>
            </div>
            <h1 class="modal-title fs-5" id="exampleModalLabel">Deposit Amount</h1>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input type="number" name='dipsoit' class="form-control" id="floatingInput" placeholder="Amount here" onChange={handleChange} />
                <label for="floatingInput">Amount to Dipsoit (Min:500)</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" name='description' onChange={handleChange} id="floatingInput" placeholder="Description here" />
                <label for="floatingInput">Description</label>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={handleDeposit}> &#8650; Deposite</button>
            </div>
          </div>
        </div>
      </div>


      {/* Withdraw model */}
      <div class="modal fade" id="withdrawModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content px-4">
            <div className=' mt-3 mb-3'>
              <button type="button" class="btn text-white py-1" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: "#ee6c4d" }}> &#8592; Back</button>
            </div>
            <h1 class="modal-title fs-5" id="exampleModalLabel">Withdraw Amount</h1>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="Amount here" />
                <label for="floatingInput">Amount to Withdraw (Min:500)</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Description here" />
                <label for="floatingInput">Description</label>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-success" data-bs-dismiss="modal"> &#8648; Withdraw</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
