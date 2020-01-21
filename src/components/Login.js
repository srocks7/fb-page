import React, { Component } from 'react'
import {Form,FormGroup,Button,Label,Input} from 'reactstrap'
import { FacebookLoginButton } from "react-social-login-buttons"; 
export default class Login extends Component {
    render() {
        return (
            
       <Form className='h'>
      <h1><span className="font-weight-bold">mywebsite</span>.com</h1>
      <h1 className="text-center">Welcome</h1>
      <FormGroup>
        <Label><span className="font-weight-bold">Email</span></Label>
        <Input type='text' placeholder='Email'/>
      </FormGroup>
      <FormGroup>
        <Label><span className="font-weight-bold">Password</span></Label>
        <Input type='password' placeholder='Password'/>
      </FormGroup>
      <Button className="btn-dark btn-lg btn-block">Login</Button>
      <div>
        <p className="mt-3 mb-3 text-center">Or continue with your social account</p>
      </div>
      <FacebookLoginButton className=" mb-2"/>
      <div className="text-center">
        <a href='./login'>Sign Up</a>
        <span className="p-2">|</span>
        <a href='./login'>Forget Password</a>
      </div>

      </Form>
           
     
        )
    }
}
