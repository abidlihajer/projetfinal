import React, {useState} from 'react'
import { useDispatch, useSelector,  } from 'react-redux';
import { editUser } from '../../redux/authSlice';
import './BMI.css'
import {Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios';

function BMI() {
 
  
 
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const user=useSelector(state=>state.auth.user)

  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const dispatch= useDispatch();
  const navigate=useNavigate();

//   const handleSubmit=async(e)=>{

//     dispatch(editUser(user._id,{weight:weight,height:height},navigate))
    
// }
const editUser=async()=>{
  await axios.put(`/auth/updateUser/${user._id}`,{
    weight:weight,
    height:height
  })
  navigate("/Profile")
}


  let calcBmi = (event) => {
    
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) )
      setBmi(bmi.toFixed(1))

     

      if (bmi < 18) {
        setMessage('You are underweight')
      } else if (bmi >= 18 && bmi < 25) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 25) {
      imgSrc = require('../../images/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../../images/healthy.png')
    } else {
      imgSrc = require('../../images/overweight.png')
    }
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      
      <div className='container'>
        <h2 className='center'>Calculate your Body Mass Index (BMI) </h2>
        <form onSubmit={calcBmi}>
          <div>
            <label> <h6 className='h6'> Weight (kg) </h6></label>
            <input type="number"  onChange={(e) => setWeight(e.target.value)} value={weight} />
          </div>
          <div>
            <label><h6 className='h6'> Height (m) </h6></label>
            <input type="number" onChange={(event) => setHeight(event.target.value)} value={height}  />
          </div>
          <div>
            <button className='btnn'  onClick={calcBmi}>Submit</button>
            <button className='btnn btn-outline' onClick={reload} type='submit'>Reload</button>
            <button className='btnn' onClick={(e)=>editUser(e)}  >Show your profile</button>
          </div>
        </form>

        <div className='center'>
          <h5>Your BMI is: {bmi}</h5>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default BMI;