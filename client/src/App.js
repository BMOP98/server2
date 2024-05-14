import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


/* COMPONENTS*/

import Usrindex from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
function App() {
  
  const FiltRollUsr = () =>{
    return <Router>
      <div>
        <Routes>
          <Route path='/Inicio'
            element={<><Usrindex/></>} />
          <Route exact path="/"
            element={<><Usrindex /></>} />
          <Route path="/Register"
            element={<><Register /></>} />
          <Route path="/Home"
            element={<><Home /></>} />
        </Routes>
      </div>
    </Router>
      
  }
  


  return (
    
    <>
      
      <FiltRollUsr />
      
    </>
    

  );
}

export default App;
