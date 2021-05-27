import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/forgot", { email });

      setNotify({
        show: true,
        error: false,
        message: "Email was sent!",
      });
    } catch (error) {
      setNotify({
        show: true,
        error: true,
        message: "Email does not exist!",
      });
    }
  };

  let info;

  if (notify.show) {
    info = (
      <div
        className={notify.error ? "alert alert-danger" : "alert alert-success"}
        role='alert'
      >
        {notify.message}
      </div>
    );
  }

  return (
    <form className='form-signin' onSubmit={onSubmit}>
      {info}
      <h1 className='h3 mb-3 font-weight-normal mt-5 text-center'>
        Set your email.
      </h1>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          placeholder='Email address'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Sent Email
        </button>
      </div>
    </form>
  );
};

export default ForgotPassword;
