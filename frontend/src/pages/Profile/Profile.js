
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import { currentUser, deleteUser } from '../../redux/authSlice'
import { useRef, useState } from 'react';
import axios from 'axios';





function Profile() {
  const [file, setFile] = useState(null);
  const user=useSelector((state)=>state.auth.user)
  const inputRef=useRef()
  
  const dispatch= useDispatch();

  const handleEdit = async (e) => {
    e.preventDefault();
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        let data = new FormData();
        data.append("myImage", file);
        await axios.put("/user/upload", data, config);
        dispatch(currentUser());
    } catch (error) {
        console.log(error);
    }
};

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
                  src= {
                    user?.imageUrl
                        ? `uploads/${user?.imageUrl}`
                        : "https://bootdey.com/img/Content/avatar/avatar7.png"
                }
                  alt="Admin"
                  className="rounded-circle"
                  width={150}
                />
                <div className="mt-3">
                  <h4>{user?.username}</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                  <div>
                  <button  className="btn btn-outline-primary" onClick={() => inputRef.current.click()} >upload</button>
                  <input   type="file" hidden ref={inputRef} onChange={(e) => setFile(e.target.files[0]) } />
                  
                 </div>
                 <button  className="btn btn-outline-primary" onClick={handleEdit} >Edit</button>
                  </div>
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        <div className="col-md-8">
          <div className="carde mb-3">
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
                <div className="col-sm-12">
                  
                  
                  <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                  <a href="../BMI" className="btn btn-primary" > Edit </a>

                  
                  
                    
                  
                  
                
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