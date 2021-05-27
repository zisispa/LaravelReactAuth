import React from "react";

const Home = ({ user }) => {
  let message;

  message = user
    ? `Hi ${user.first_name} ${user.last_name}`
    : "You are not logged in!";

  return (
    <div className='container '>
      <div className='starter-template'>
        <h1>{message}</h1>
        <p className='lead'>This is a simple Auth Laravel React Project.</p>
      </div>
    </div>
  );
};

export default Home;
