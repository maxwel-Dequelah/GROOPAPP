import './components/css/login.css';
import LoginPage from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import SideMenu from './components/sideMenu';




function App() {
  

  return (
    <div className="App">
      <Routes> 
            <Route path="/" element={<LoginPage/>} /> 
            <Route path="/dashbord" element={<SideMenu/> } /> 
       </Routes> 

      
    </div>
  );
}

export default App;
