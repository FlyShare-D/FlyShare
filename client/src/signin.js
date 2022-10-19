import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import axios from 'axios';
import fetch from 'node-fetch'
import { Cookie } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, decrement } from './app/voteCounter';

const LogIn = () => {
  const handleClick = async () =>{
    sessionStorage.setItem('loggedin', true);
  }
  
  return (
    <Button variant="contained" href='/auth/google' onClick = {handleClick}>Log In With Google</Button>
  )
}

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

export default SignIn;