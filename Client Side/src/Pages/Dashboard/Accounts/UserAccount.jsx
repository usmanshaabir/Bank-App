import React, { useEffect, useState } from 'react';
import person from "../../../Assets/Images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function UserAccount() {
  const [userData, setUserData] = useState([]);
  const [singleUserData, setSingleUserData] = useState(null)
  const [isAppLoading, setIsAppLoading] = useState(true);

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
    // console.log(data, "data");
    setSingleUserData(data)
    // console.log("singleUserDatadffd", singleUserData);
  }
  console.log(singleUserData, 'data');

  useEffect(() => {
    getUserData();
  }, [])

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
              <button className='btn btn-lg px-3 py-1 text-white' style={{ fontSize: "13px", backgroundColor: "#ee6c4d" }}> <span><FontAwesomeIcon icon={faArrowLeft} /></span> View All Accounts</button>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className='d-flex justify-content-between'>
                <h4>Account Details</h4>
                <div>
                  <button className='btn text-white' style={{ backgroundColor: "#ee6c4d" }}> <span><FontAwesomeIcon icon={faTrash} /></span> Delete Account</button>
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
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
