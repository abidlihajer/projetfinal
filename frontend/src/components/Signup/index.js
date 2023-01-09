import React from 'react'
import { FormLabel } from 'react-bootstrap'
import { Container,Icon,FormContent,Form,FormH1, FormWrap ,FormInput,FormButton,Text} from './SignupElements'
import {Link,useNavigate } from 'react-router-dom'
import {  useState, useEffect } from 'react';
import{useDispatch,useSelector} from 'react-redux'
import { SignupUser } from '../../redux/authSlice';


function Signup() {
  const [data,setData]=useState({username:"", email:"", password:""})
  const user=useSelector(state=>state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(SignupUser(data))
  }
  useEffect(()=>{
    if(user){
      navigate('/bmi')
    }
    },[user,navigate])
  return (
    <>
    <Container>
        <FormWrap>
          <Icon to="/"> </Icon>
          <FormContent>
            <Form  onSubmit={handleSubmit}>
                <FormH1 ><Text>Create your account</Text></FormH1>
                <FormLabel ><Text>Username</Text></FormLabel>
                <FormInput type='text' name='username' onChange={handleChange} required />
                <FormLabel ><Text>Email</Text></FormLabel>
                <FormInput type='email' name='email' onChange={handleChange} required />
                <FormLabel ><Text>Password</Text></FormLabel>
                <FormInput type='password' name='password' onChange={handleChange} required />
                <FormButton type='submit' >Sign Up</FormButton>
                <Text>Have an account? <Link to='/signin'>Sign in</Link></Text>

            </Form>
          </FormContent>
        </FormWrap>
    </Container>
    
    
    
    </>
  )
}

export default Signup