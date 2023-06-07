
import './App.css';
import { useState } from 'react';

import { Box, Button, Heading,Text } from '@chakra-ui/react';




function App() {
  const [data,setData]=useState([])
  return (
   <div className='homepage' style={{textAlign:'center'}}> 
     <Heading size='lg' m='20px'p='20px'>Welcome to Favorite NPM Packages</Heading>
     
     <Box border='4px' borderColor="brown" width='70%' mx='15rem' height='25rem'>
     <Text my='10rem'>Right now there is no Favorite for you yet, please add.</Text>
      <Button colorScheme='teal' size='lg'my='-2rem'>Add Fav</Button>
     </Box>
     <div>
     
     </div>
   </div>
  );
}

export default App;
