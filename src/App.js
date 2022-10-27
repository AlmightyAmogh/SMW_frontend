import React, { useEffect } from 'react'
// eslint-disable-next-line
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login'
import Home from './container/Home'
import { fetchUser } from './utils/fetchUser';

// change to configure git
// change

const App = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
   const user = fetchUser();
   if (!user) navigate('/login');
  }, [])
  
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    
  )
}

export default App