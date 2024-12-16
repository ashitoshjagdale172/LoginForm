import React from 'react'

import RegistrationForm from './Components/RegistrationForm'
// import {Route, Routers} from 'react-router-dom'




import LoginPage from "./Components/Login_Page";
import Navbar from './Components/Navbar';
import LoginList from './components/LoginList';


const App = () => {
  return (
    <div>

{/* <Routers>
<Route path="/" elements={<LoginPage/>}/>
<Route path="/Registration" elements={<RegistrationForm/>}/>
<Route path="/dashboard" elements={<Dashboard/>}/>
</Routers> */}

      <Navbar/>

      <RegistrationForm/>


           <LoginPage />

      <LoginPage />
      <LoginList/>

    </div>
  );
};

export default App;
