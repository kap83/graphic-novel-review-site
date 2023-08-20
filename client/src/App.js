import './App.css'
import Login from './Login';
import { UserProvider} from './Context/User';
import NavBar from './NavBar';
import Profile from './Profile'


function App() {
    

  return (
    <div className="App">
     
      <UserProvider>
        <NavBar />
        <Login />
        <Profile /> 
      </UserProvider>
    </div>
  );
}

export default App;