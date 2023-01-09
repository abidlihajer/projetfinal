import React from 'react'
import { FormLabel } from 'react-bootstrap'
import { Container,Icon,FormContent,Form,FormH1, FormWrap ,FormInput,FormButton,Text} from './SigninElements'
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../../redux/authSlice";
import {  useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom'


function Signin() {
  const [data,setData]=useState({email:"",password:""})
  const user=useSelector(state=>state.auth.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  // handleChange
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(signinUser(data))
}
useEffect(()=>{
if(user){
  navigate('/profile')
}
},[user,navigate])
  return (
    <>
    <Container>
        <FormWrap>
          <Icon to="/"> </Icon>
          <FormContent>
            <Form  onSubmit={handleSubmit}>
                <FormH1><Text>Sign in to your account</Text></FormH1>
                <FormLabel ><Text>Email</Text></FormLabel>
                <FormInput type='email' name='email'   onChange={handleChange}/>
                <FormLabel ><Text>Password</Text></FormLabel>
                <FormInput type='password' name='password'  onChange={handleChange} />
                <FormButton type='submit'>Sign In</FormButton>
                <Text>Forget password?</Text>

            </Form>
          </FormContent>
        </FormWrap>
    </Container>
    
    
    
    </>
  )
}

export default Signin