import React, { useEffect } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
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

function SignIn() {
  const { isLoggedIn } = useSelector((state) => state.counter);
  const updatedIsLoggedIn = sessionStorage.getItem('loggedin');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoggedIn(updatedIsLoggedIn));
  })

  console.log('isLoggedIn', isLoggedIn)

  return(
  //later will have a fetch request on click
  <div className='signIn'>
  <Stack spacing={2} direction="row">
    {/* {!(sessionStorage.getItem('loggedin')) ? <Button variant="contained" href='/auth/google' onClick = {handleClick}>Log In With Google</Button> : <Button variant="contained">Logout</Button>} */}
    {!isLoggedIn && <LogIn />}
    {isLoggedIn && <LogOut />}
    
</Stack>
  </div>
  )
}

const Landing = () => {
  const handleClick = async () =>{
    sessionStorage.setItem('loggedin', true);
  }
  
  return (
    <Box 
      flexGrow={1} 
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
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