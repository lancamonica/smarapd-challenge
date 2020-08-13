// external
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// internal
import { InputText, ActionButton } from 'ui';
import { AUTH_LOGIN, AUTH_PASSWORD } from 'shared/constants';
// style
import './Auth.scss';

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  function authenticate() {
    if (login === AUTH_LOGIN && password === AUTH_PASSWORD) {
      localStorage.setItem("@authenticate", "true")
      setIsLoginSuccess(true);
    } else {
      alert("Login e/ou senha inválido");
      setLogin("");
      setPassword("");
    }

  }

  return (
    <div className="Auth">
      {
        isLoginSuccess && <Redirect to="/users"/>
      }
      
      <div className="home-page">
        <h1>GitHub</h1>
        <div className='field'>
          <InputText 
            type="text" 
            title="Login: " 
            onChange={(event) => setLogin(event.target.value)} 
            value={login}
          />
          <InputText 
            type="password" 
            title="Password: " 
            onChange={(event) => setPassword(event.target.value)} 
            value={password}
          />
        </div>
          <ActionButton onClick={() => authenticate()} label="Sign In"/>
      </div>
    </div>
  );
}

export default Auth;
