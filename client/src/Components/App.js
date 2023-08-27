import './App.css'
import React, {useContext} from 'react'
import {Route, Routes} from 'react-router-dom'
import { UserContext } from '../Context/User';
import NavBar from './NavBar';
import Profile from './Profile'
import Test from './Test';
import ToggleLogin from './ToggleLogin';
import Register from './Register';

function App() {

  const {loggedIn} = useContext(UserContext)

  if (!loggedIn) return <ToggleLogin /> 

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ToggleLogin />} /> :
        <Route path='/profile' element={<Profile />} /> 
        <Route path='/test' element={<Test />} /> 
        <Route path='register' element={<Register />} /> 
      </Routes>
    </div>
  );
}

export default App;