import React from 'react';
import { updateDestination } from "./app/voteCounter";
import { useSelector, useDispatch } from 'react-redux';

function DestinationForm () {

  const dispatch = useDispatch()


  return (
    <div className='destination'>
      <input type="text" placeholder="Input your destination"></input>
      <button type="submit" onClick={(e)=> {
        console.log('e: ', e)
        dispatch(updateDestination(e))
        }}>
          Submit</button>
    </div>
  )
}


export default DestinationForm;