import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/register", {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirm: passwordConfirm,
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={"/login"} />;
  }

  return (
    <form className='form-signin' onSubmit={onSubmit}>
      <h1 className='h3 mb-3 font-weight-normal mt-5 text-center'>Sign Up</h1>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='First Name'
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          placeholder='Password Confirm'
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Register
        </button>
        <p className='mt-3 mb-3 text-muted text-center'>
          Have an account? <Link to='/login'>Sign in!</Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
