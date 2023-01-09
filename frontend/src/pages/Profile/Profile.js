import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import { deleteUser } from '../../redux/authSlice'

function Profile() {
  const user=useSelector(state=>state.auth.user)
  const dispatch= useDispatch();
  const handleDelete = () => {
    if(window.confirm("Are you sure?")){
      dispatch(deleteUser(user._id),
      window.location.reload())
    }
  }
 
  return (
  
  <div className="containerr">
    <div className="main-body">
     
      
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="cardd-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width={150}
                />
                <div className="mt-3">
                  <h4>{user?.username}</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                  
                  <button className="bttn btn-primary">Change photo</button>
                 
                </div>
              </div>
            </div>
          </div>
          </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">{user?.username}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{user?.email}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">weight(kg)</h6>
                </div>
                <div className="col-sm-9 text-secondary">{user?.weight}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Height(m)</h6>
                </div>
                <div className="col-sm-9 text-secondary">{user?.height}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Your BMI is</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  
                  <Button  variant="danger" onClick={handleDelete}>Delete</Button>
                  
                  
                    
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Profile