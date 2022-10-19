import React, { useEffect } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Landing = () => {
  const handleClick = async () =>{
    sessionStorage.setItem('loggedin', true);
  }
  
  return (
    <Box 
      flexGrow={1} 
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Button variant="contained" sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{p: 0.5}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" />
        </Box>
        
        Login With Google
      </Button>
    </Box>
  )
}

export default Landing;