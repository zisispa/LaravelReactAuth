import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";

import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

import axios from "axios";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/user");

        const user = response.data;

        setUser(user);
      } catch (error) {
        setUser(null);
      }
    }

    fetchData();
  }, [login]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar user={user} setLogin={() => setLogin(false)} />
        <Route path='/' component={() => <Home user={user} />} exact />
        <Route
          path='/login'
          component={() => <Login setLogin={() => setLogin(true)} />}
        />
        <Route path='/register' component={Register} />
        <Route path='/forgot' component={ForgotPassword} />
        <Route path='/reset/:token' component={ResetPassword} />
      </BrowserRouter>
    </div>
  );
};

export default App;
