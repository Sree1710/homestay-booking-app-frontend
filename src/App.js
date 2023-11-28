import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import UserReg from './Components/UserReg';
import AdAddPack from './Components/AdAddPack';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AdminLogin/>} />
        <Route path='/uslog' exact element={<UserLogin/>}/>
        <Route path='/usreg' exact element={<UserReg/>} />
        <Route path='/adpack' exact element={<AdAddPack/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
