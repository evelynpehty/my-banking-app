// main libraries
import { Routes, Route, useLocation} from "react-router-dom";
import {React, useEffect, useState} from "react"

// components
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import EditProfile from "./Components/EditProfile";
import HomePage from "./Components/HomePage";

import HomeNavigation from "./Components/HomeNavigation";
import LoginNavigation from "./Components/LoginNavigation";

function App() {
  const storedUser = localStorage.getItem('Current User');
  const [currentUser, setCurrentUser] = useState(storedUser);
  const [login, setLogin]= useState(false)
  useEffect(() => {
    if(currentUser !== null){
      setLogin(true)
    }
    else{

      setLogin(false)
    }
    
  }, [currentUser]);
  
 
  return (
    <div>
      {login ? <LoginNavigation /> : <HomeNavigation />}
      
      
      <Routes>
        <Route exact path={"/"} element= {<HomePage />} />
        <Route exact path={"/Login"} element= {<Login />} />
        <Route exact path={"/Register"} element= {<Register />} />
        <Route exact path={"/ForgotPassword"} element= {<ForgotPassword />} />
        <Route exact path={"/EditProfile"} element= {<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
