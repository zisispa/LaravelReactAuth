import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/login", {
        email,
        password,
      });

      setRedirect(true);
      setLogin();
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setEmail("");
      setPassword("");
    }
  };

  if (redirect) {
    return <Redirect to={"/"} />;
  }

  return (
    <form className='form-signin' onSubmit={onSubmit}>
      <ToastContainer />
      <h1 className='h3 mb-3 font-weight-normal mt-5 text-center'>
        Welcome Sign In
      </h1>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          placeholder='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <Link to='/forgot'>Forgot Password</Link>
      </div>
      <div className='form-group'>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Sign in
        </button>
        <p className='mt-3 mb-3 text-muted text-center'>
          New user? <Link to='/register'>Create an account!</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
