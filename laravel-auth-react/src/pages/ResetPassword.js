import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";

const ResetPassword = ({ match }) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const token = match.params.token;

    await axios.post("reset", {
      token,
      password,
      password_confirm: passwordConfirm,
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to='/login' />;
  }

  return (
    <form className='form-signin' onSubmit={onSubmit}>
      <h1 className='h3 mb-3 font-weight-normal'>Reset your Password</h1>
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
          Reset Password
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
