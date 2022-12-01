
import { Box } from '@mui/material';
import {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Header } from './components/Header/Header';
import Home from './components/Home/Home';

import Login from './components/LoginReg/Login';

function App() {
  useEffect(()=>{
    document.title = 'React Mui';
  },[])
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Box style={{marginTop: '65px',marginLeft: '15px', marginRight:'15px'}}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/account' element={<Login/>} />
 
    </Routes>
    </Box>

    
    
    
    </BrowserRouter>
    
    
    </>
    
  );
}

export default App;
