
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slice/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import  { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error=useSelector((state) => state.auth.error);
 // console.log(error)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navi=useNavigate()   
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response= await  dispatch(login({ email, password }));  
    if(!response.error){
   if(response.payload.role==='user'){ 
    navi('/userhome')
   }else if(response.payload.role==='admin'){ 
    navi('/adminhome')
   }}else{ 
    console.log("wrong credential")
   }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
    </Form>
  );
};

export default Login;
