import React from "react";

import "./unauthenticated.css";


export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');

  async function loginUser() {
    loginOrCreate('/api/auth', 'login');
  }

  // Create user function that interacts with the backend service
  async function createUser() {
    loginOrCreate('/api/auth', 'create');
  }

  // General function for both login and create actions
  async function loginOrCreate(endpoint, action) {
    const response = await fetch(endpoint, {
      method: action === 'login' ? 'PUT' : 'POST', // POST for create, PUT for login
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.status === 200) {
      // On success, store the user data in localStorage
      localStorage.setItem('userName', userName);
      const body = await response.json();
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

    return (
        <main className="login">
          <form>
            <div className="input__container username-container">
              <div className="shadow__input"></div>
              <button className="input__button__shadow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="20px" height="20px">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </button>
              <input type="text" name="username" className="input__search" onChange={(e) => setUserName(e.target.value)} placeholder="Enter username" />
            </div>
  
            <div className="input__container password-container">
              <div className="shadow__input"></div>
              <button className="input__button__shadow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="20px" height="20px">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </button>
              <input type="password" name="password" className="input__search" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            </div>
          </form>
  
          <form>
            <button type="button" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
            <button type="button" onClick={() => createUser()} disabled={!userName || !password}>Create</button>
          </form>
        </main>
    );
  };