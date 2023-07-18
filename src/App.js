
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Emplist from './components/Emplist';
import Empcreate from './components/Empcreate';
import Empdetails from './components/Empdetails';
import Empedit from './components/Empedit';
function App() {
  return ( 
    <div className="App">
      <h1>Employee Lists</h1>
      <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Emplist />}></Route>
      <Route path='/employee/create' element ={<Empcreate />}></Route>
      <Route path='/employee/details/:empid' element ={<Empdetails />}></Route>
      <Route path='/employee/edit/:empid' element ={<Empedit />}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
  
}

export default App;
