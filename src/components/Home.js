import { useState} from "react";
import { Box, Button, Heading,Text } from '@chakra-ui/react';
import { Link, useNavigate} from "react-router-dom";


const  Home=()=> {
    const [data,setData]=useState([])

    // const navigate=useNavigate();
    // const navigateToSearch=()=>{
    //   navigate('/Data.js')
    // }
  return (
   <div className='homepage' style={{textAlign:'center'}}> 
     <Heading size='lg' m='20px'p='20px'>Welcome to Favorite NPM Packages</Heading>
     
     <Box border='4px' borderColor="brown" width='70%' mx='15rem' height='25rem'>
     <Text my='10rem'>Right now there is no Favorite for you yet, please add.</Text>
     <div>
      <Link to="/Data">
      <Button colorScheme='teal' size='lg'my='-2rem'>Add Fav</Button> 
      </Link>
     
     </div>
     </Box>
     <div>
     
     </div>
   </div>
  );
}
export default Home;