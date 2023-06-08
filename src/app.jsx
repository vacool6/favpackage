
import { useState } from 'react';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";


import { Box, Button, Heading,Text } from '@chakra-ui/react';




function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
