import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import {useSelector} from 'react-redux';
  
function App() {
  const {loading} = useSelector((state)=>state.loader)
  const {user} = useSelector((state)=>state.user)
  return (

    <div>

      { loading &&(
        <div className='loader-container'>
        {" "}
        <div className='loader'> </div> {" "}
           </div>
      )}
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/>} /> 
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
