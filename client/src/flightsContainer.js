import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FlightsContainer = () => {
  const flights = [{id: 0, destination: "Germany", flightName: "Delta", price: 250, votes: 0}, {id: 1, destination: "Germany", flightName: "American Airlines", price: 350, votes: 0}];
  const listItems = [];
  const dispatch = useDispatch();

  const handleUpVote = (e) => {
    // upvoting needs to trigger two actions:
    // 1) a post request to the database to update the vote count
    // 2) update state of the slice
    console.log('Upvoted', e.target.id)
  }

  const handleDownVote = (e) => {
    // upvoting needs to trigger two actions:
    // 1) a post request to the database to update the vote count
    // 2) update state of the slice
    console.log('Downvoted', e.target.id)
  }

  for (const flight of flights) {
    listItems.push(
      <ListItem sx={{justifyContent: 'center'}}>
        <ListItemText primary={flight.flightName} />
        <Stack direction="row" spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
          <span>{flight.price}</span>
          <button id={`${flight.id}`} className='vote' onClick={handleUpVote}>
            &#8679;
          </button>
          <span>Count</span>
          <button id={`${flight.id}`} className='vote' onClick={handleDownVote}>
            &#8681;
          </button>
      </Stack>
      </ListItem>
    )
  }
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {listItems}
        </List>
      </nav>
    </Box>
  );
}

export default FlightsContainer;