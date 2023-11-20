import React from 'react';
import user from "../../../Assets/Images/user.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTentArrowLeftRight } from '@fortawesome/free-solid-svg-icons'

export default function UserDashboard() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card border border-0" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <div className="card-body ">
                <div className='d-flex border-bottom justify-content-center pb-2'>
                  <div>
                    <img src={user} alt="user logo" />
                  </div>
                  <div>
                    <h5 className="card-title">Accounts</h5>
                  </div>
                </div>
                <div className='d-flex justify-content-center mt-4 pb-4 mb-5 border-bottom'>
                  <button type="button" className="btn btn-success me-3">+ Add New Account </button>
                  <button type="button" className="btn btn-info text-white "><span><FontAwesomeIcon icon={faEye} className='pe-2' /></span>View All Account </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card border border-0" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <div className="card-body ">
                <div className='d-flex border-bottom justify-content-center pb-2' >
                  <h5 className="card-title"> <span><FontAwesomeIcon icon={faTentArrowLeftRight} /></span> Transactions</h5>
                </div>
                <div className='d-flex justify-content-center mt-4 pb-4 mb-4 border-bottom'>
                  <button type="button" className="btn btn-info text-white "><span><FontAwesomeIcon icon={faEye} className='pe-2' /></span> View All Transactions </button>
                </div>
                <div className='d-flex justify-content-around'>
                  <div>
                    <p className='credits'>Total Credits Rs:</p>
                  </div>
                  <div>
                    <p className='credits'>Total Debits Rs:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
