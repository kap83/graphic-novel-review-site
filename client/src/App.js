import './App.css'
import React, {useContext} from 'react'
import {Route, Routes} from 'react-router-dom'
import { UserContext } from './Context/User';
import Login from './Login';
import NavBar from './NavBar';
import Profile from './Profile'
import Test from './Test';

function App() {

  const {loggedIn, notLoggedInError} = useContext(UserContext)

  //TODO
    //write logic to redirect users who are not logged in
    

  console.log("inApps", notLoggedInError)

  if (!loggedIn) {
    return (
      <>
        {notLoggedInError && <h2>{notLoggedInError}</h2>}
        <Login />
      </>
    );
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Login />} /> :
        <Route path='/profile' element={<Profile />} /> 
        <Route path='/test' element={<Test />} /> 
      </Routes>
    </div>
  );
}

export default App;