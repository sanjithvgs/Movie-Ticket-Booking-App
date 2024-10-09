import React from "react";
import { LoginUser } from "../apicalls/users";

import { Form, Input, Button, message } from "antd";
import {Link} from 'react-router-dom'
import { setUser } from "../redux/userSilce";
import { useDispatch } from "react-redux";


function Login() {

  const dispatch = useDispatch()
  const submitForm = async (value)=>{
    
    try{
      const response = await LoginUser(value);

      if(response.success){
        message.success(response.message)

        localStorage.setItem('token', response.token)

        dispatch(setUser(response.user))
        
        window.location.href = '/'
      }else{
        message.error(response.message)
      }

      console.log(response);

    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Welcome to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={submitForm}>
              <Form.Item
                label="Email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is required!" }]}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                ></Input>
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required!" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter the password"
                ></Input>
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                Not yet Register? <Link to="/register">Register now</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Login;