import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const LogOut = () => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  let displayName = getCookie('name');
  return (
    <h4>Welcome {displayName}</h4>
  )
}

const Landing = () => {
  const handleClick = async () =>{
    sessionStorage.setItem('loggedin', true);
  }
  
  return (
    <Box 
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}
    >
      <Button 
        variant="contained"
        href='/auth/google'
        onClick = {handleClick}
        sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{p: 0.5}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" />
        </Box>
        Login With Google
      </Button>
    </Box>
  )
}

export default Landing;