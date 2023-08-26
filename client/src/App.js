import './App.css'
import React, {useContext} from 'react'
import {Route, Routes} from 'react-router-dom'
import { UserContext } from './Context/User';
import NavBar from './NavBar';
import Profile from './Profile'
import Test from './Test';
import ToggleLogin from './ToggleLogin';
//import Register from './Register';

function App() {

  const {loggedIn} = useContext(UserContext)

  //TODO
    //write logic to redirect users who are not logged in
    

  //console.log("inApps", notLoggedInError)

  //MAKE SURE ERROR MSG ONLY DISPLAYS ON LOGIN PAGE. TRY NESTED IF/ELSE
  if (!loggedIn) {
    return (
      <>
        {/* {notLoggedInError && <h2>{notLoggedInError} </h2>} */}
        <ToggleLogin /> 
      </>
    );
  } 

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ToggleLogin />} /> :
        <Route path='/profile' element={<Profile />} /> 
        <Route path='/test' element={<Test />} /> 
        {/* <Route path='register' element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;