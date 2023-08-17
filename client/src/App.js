import { useState} from "react";
import './App.css';
import Login from "./Login";

//filter out password for current user so you're not sending the password all over the site. 

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)

  console.log("in apps", currentUser)


  function onLogin(user) {
    setCurrentUser(user)
  }


  return (
    <div className="App">
      <Login onLogin={onLogin}/>
    </div>
  );
}

export default App;
