import './App.css'
import React, {useContext} from 'react'
import {Route, Routes} from 'react-router-dom'
import { UserContext } from '../Context/User';
import NavBar from './NavBar';
import Profile from './Profile'
import Books from './Books'
import ToggleLogin from './ToggleLogin';
import Register from './Register';
import AddNewBook from './AddNewBook';
// eslint-disable-next-line
import BookDetails from './BookDetails';

function App() {

  const {loggedIn} = useContext(UserContext)

  if (!loggedIn) return <ToggleLogin /> 
  
  

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Profile />} /> 
        <Route path='/login' element={<ToggleLogin />} /> 
        <Route path='/books' element={<Books />} /> 
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='/addbook' element={<AddNewBook />} />
        <Route path='register' element={<Register />} /> 
      </Routes>
    </div>
  );
}

export default App;