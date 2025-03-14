import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPre from "./header/headerPreLogin";
import HeaderPost from "./header/headerPostLogin";
import Footer from "./footer/footer";
import About from "./about/about";
import Game from "./game/game";
import Leaderboard from "./leaderboard/leaderboards";
import { AuthState } from "./login/authState";
import { Login } from "./login/login";

const App = () => {
  const [userName, setUserName] = React.useState(localStorage.getItem("userName") || "");
  const [authState, setAuthState] = React.useState(userName ? AuthState.Authenticated : AuthState.Unauthenticated);
  const currentUser = "example websocket online player";

  return (
    <BrowserRouter>
      <div className="app-container">
        {authState === AuthState.Authenticated ? <HeaderPost /> : <HeaderPre />}
        <Routes>
          <Route
            path="/"
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, newAuthState) => {
                  setAuthState(newAuthState);
                  setUserName(userName);
                }}
              />
            }
          />
          <Route path="/about" element={<About />} />
          {authState === AuthState.Authenticated && (
            <>
              <Route path="/game" element={<Game/>} />
              <Route path="/leaderboards" element={<Leaderboard />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
