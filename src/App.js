import React from "react";
import {Routes,Route} from "react-router-dom";

import {LogInForm} from "Components/Authentication/LogInForm";
import {SignUpForm} from "Components/Authentication/SignUpForm";
function App() {
  return (
  <div className="App">
    <p className="text ">Akshat</p>
    {/* <LogInForm/> */}
    <SignUpForm/>
     <Routes>
       <Route>  </Route>
     </Routes>
  </div>
  );
}

export default App;
