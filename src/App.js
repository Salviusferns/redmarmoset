import { auth } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import './App.css';
import NavBar from './components/Chat/Navbar';
import ChatBox from './components/Chat/ChatBox';
import Welcome from './components/Chat/Welcome';
import Profile from './components/Profile';
import Login from './components/Login';
import Appp from "./components/post/Appp";
import Feed from './components/Feed';
import { useState } from 'react';
function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="App">
        <Profile/>
        <Login/>
        <NavBar/>
        <div></div>
      </div>
      <div className='App-2'>
        <NavBar/>
        {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
      <Appp/>
      <Feed/>
      </div>
    </div>
  );
}

export default App;
