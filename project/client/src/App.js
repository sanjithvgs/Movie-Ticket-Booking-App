import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

import {useSelector} from 'react-redux';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
  
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

      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} /> 
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>} />
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
