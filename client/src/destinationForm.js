import React from 'react';
import { updateDestination } from "./app/voteCounter";
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';

function DestinationForm () {

  const dispatch = useDispatch()

  const handleOnchange = (e) => dispatch(updateDestination(e.target.value))

  return (
    <div className="destination">
      <TextField 
        variant="outlined" 
        type="text" 
        placeholder="Input your destination"
        onChange={handleOnchange}
      >
      </TextField>
      {/* <button type="submit" onClick={()=> {
        dispatch(updateDestination())
        }}>
          Submit</button> */}
    </div>
  )
}


export default DestinationForm;