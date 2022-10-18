import React from 'react';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';


function SignIn() {
  return(
  //later will have a fetch request on click
  <div className='signIn'>
  <Stack spacing={2} direction="row">
  <Button variant="contained">Log In With Google</Button>
</Stack>
  </div>
  )
}

export default SignIn;